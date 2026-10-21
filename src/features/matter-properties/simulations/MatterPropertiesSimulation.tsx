'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  calculateStress,
  calculateStrain,
  calculateWireExtension,
  calculateStrainEnergy,
  calculateTerminalVelocity,
  calculateStokesDragForce,
  calculateCapillaryRise,
} from '../physics/calculations';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Activity } from 'lucide-react';

interface MatterPropertiesSimulationProps {
  locale?: Locale;
}

type SimulationMode = 'elasticity' | 'viscosity' | 'surface-tension';

export const MatterPropertiesSimulation: React.FC<MatterPropertiesSimulationProps> = ({
  locale = 'en',
}) => {
  const [mode, setMode] = useState<SimulationMode>('elasticity');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // --------------------------------------------------------------------------
  // Mode 1: Elasticity (Searle's Wire Apparatus)
  // --------------------------------------------------------------------------
  const [wireMaterial, setWireMaterial] = useState<'steel' | 'copper' | 'aluminum' | 'brass'>('steel');
  const [hangingMassKg, setHangingMassKg] = useState<number>(4.0); // kg
  const [wireLengthM, setWireLengthM] = useState<number>(2.5); // m
  const [wireDiameterMm, setWireDiameterMm] = useState<number>(0.6); // mm

  const youngModuli: Record<string, { y: number; nameEn: string; nameSi: string }> = {
    steel: { y: 2.0e11, nameEn: 'Steel (200 GPa)', nameSi: 'වානේ (200 GPa)' },
    copper: { y: 1.1e11, nameEn: 'Copper (110 GPa)', nameSi: 'තඹ (110 GPa)' },
    aluminum: { y: 0.7e11, nameEn: 'Aluminum (70 GPa)', nameSi: 'ඇලුමිනියම් (70 GPa)' },
    brass: { y: 1.0e11, nameEn: 'Brass (100 GPa)', nameSi: 'පිත්තල (100 GPa)' },
  };

  const currentY = youngModuli[wireMaterial].y;
  const wireDiameterM = wireDiameterMm * 1e-3;
  const wireAreaM2 = (Math.PI * Math.pow(wireDiameterM, 2)) / 4;
  const tensileForceN = hangingMassKg * 9.8;
  const tensileStressPa = calculateStress(tensileForceN, wireAreaM2);
  const wireExtensionM = calculateWireExtension(tensileForceN, wireLengthM, wireDiameterM, currentY);
  const tensileStrain = calculateStrain(wireExtensionM, wireLengthM);
  const strainEnergyJ = calculateStrainEnergy(tensileForceN, wireExtensionM);

  // --------------------------------------------------------------------------
  // Mode 2: Viscosity (Stokes' Falling Sphere Viscometer)
  // --------------------------------------------------------------------------
  const [fluidType, setFluidType] = useState<'glycerin' | 'castor' | 'oil' | 'water'>('glycerin');
  const [sphereType, setSphereType] = useState<'steel' | 'glass' | 'lead'>('steel');
  const [sphereRadiusMm, setSphereRadiusMm] = useState<number>(1.5); // mm

  const fluidProperties: Record<string, { eta: number; rho: number; nameEn: string; nameSi: string; color: string }> = {
    glycerin: { eta: 1.4, rho: 1260, nameEn: 'Glycerin (1.40 Pa·s)', nameSi: 'ග්ලිසරින් (1.40 Pa·s)', color: 'rgba(251, 191, 36, 0.25)' },
    castor: { eta: 0.98, rho: 961, nameEn: 'Castor Oil (0.98 Pa·s)', nameSi: 'එරණ්ඩ තෙල් (0.98 Pa·s)', color: 'rgba(234, 179, 8, 0.35)' },
    oil: { eta: 0.25, rho: 890, nameEn: 'Engine Oil (0.25 Pa·s)', nameSi: 'මැෂින් තෙල් (0.25 Pa·s)', color: 'rgba(161, 98, 7, 0.45)' },
    water: { eta: 0.001, rho: 1000, nameEn: 'Water (0.001 Pa·s)', nameSi: 'ජලය (0.001 Pa·s)', color: 'rgba(56, 189, 248, 0.2)' },
  };

  const sphereProperties: Record<string, { rho: number; nameEn: string; nameSi: string }> = {
    steel: { rho: 7800, nameEn: 'Steel (7800 kg/m³)', nameSi: 'වානේ (7800 kg/m³)' },
    glass: { rho: 2500, nameEn: 'Glass (2500 kg/m³)', nameSi: 'වීදුරු (2500 kg/m³)' },
    lead: { rho: 11340, nameEn: 'Lead (11340 kg/m³)', nameSi: 'ඊයම් (11340 kg/m³)' },
  };

  const currFluid = fluidProperties[fluidType];
  const currSphere = sphereProperties[sphereType];
  const sphereRadiusM = sphereRadiusMm * 1e-3;
  const sphereVolumeM3 = (4 / 3) * Math.PI * Math.pow(sphereRadiusM, 3);
  const sphereMassKg = currSphere.rho * sphereVolumeM3;
  const weightN = sphereMassKg * 9.8;
  const upthrustN = currFluid.rho * sphereVolumeM3 * 9.8;
  const terminalVelocityMs = calculateTerminalVelocity(
    sphereRadiusM,
    currSphere.rho,
    currFluid.rho,
    currFluid.eta,
    9.8
  );

  // Dynamic falling state
  const [sphereYPos, setSphereYPos] = useState<number>(0); // 0 (top) to 1 (bottom)
  const [currentVelocityMs, setCurrentVelocityMs] = useState<number>(0);
  const [elapsedTimeS, setElapsedTimeS] = useState<number>(0);

  // --------------------------------------------------------------------------
  // Mode 3: Surface Tension (Capillary Rise)
  // --------------------------------------------------------------------------
  const [capillaryLiquid, setCapillaryLiquid] = useState<'water' | 'mercury' | 'ethanol' | 'soap'>('water');
  const [tubeRadiusMm, setTubeRadiusMm] = useState<number>(0.5); // mm

  const liquidSurfaces: Record<string, { gamma: number; rho: number; thetaDeg: number; nameEn: string; nameSi: string; color: string }> = {
    water: { gamma: 0.0728, rho: 1000, thetaDeg: 0, nameEn: 'Water (72.8 mN/m, θ=0°)', nameSi: 'ජලය (72.8 mN/m, θ=0°)', color: 'rgba(14, 165, 233, 0.4)' },
    soap: { gamma: 0.030, rho: 1000, thetaDeg: 0, nameEn: 'Soap Solution (30.0 mN/m, θ=0°)', nameSi: 'සබන් දියරය (30.0 mN/m, θ=0°)', color: 'rgba(236, 72, 153, 0.3)' },
    ethanol: { gamma: 0.0224, rho: 789, thetaDeg: 0, nameEn: 'Ethanol (22.4 mN/m, θ=0°)', nameSi: 'එතනෝල් (22.4 mN/m, θ=0°)', color: 'rgba(168, 85, 247, 0.3)' },
    mercury: { gamma: 0.485, rho: 13600, thetaDeg: 140, nameEn: 'Mercury (485 mN/m, θ=140° depression)', nameSi: 'රසදිය (485 mN/m, θ=140° අවපාතය)', color: 'rgba(100, 116, 139, 0.85)' },
  };

  const currLiquid = liquidSurfaces[capillaryLiquid];
  const tubeRadiusM = tubeRadiusMm * 1e-3;
  const contactAngleRad = (currLiquid.thetaDeg * Math.PI) / 180;
  const capillaryHeightM = calculateCapillaryRise(
    currLiquid.gamma,
    contactAngleRad,
    currLiquid.rho,
    tubeRadiusM,
    9.8
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Viscosity dynamic animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05); // seconds
      lastTime = now;

      if (isPlaying && mode === 'viscosity') {
        setSphereYPos((prevY) => {
          if (prevY >= 1.0) return 0; // wrap around loop

          const curV = currentVelocityMs;
          const drag = calculateStokesDragForce(currFluid.eta, sphereRadiusM, curV);
          const fNet = weightN - upthrustN - drag;
          const accel = fNet / sphereMassKg;
          const nextV = Math.max(0, curV + accel * dt);
          setCurrentVelocityMs(nextV);

          // Convert velocity (m/s) to fraction of cylinder height (assume cylinder height = 0.5 m)
          const deltaY = (nextV * dt) / 0.5;
          setElapsedTimeS((prev) => prev + dt);
          return Math.min(1.0, prevY + deltaY);
        });
      }

      animationFrameId.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameId.current = requestAnimationFrame(updatePhysics);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isPlaying, mode, currentVelocityMs, currFluid, sphereRadiusM, weightN, upthrustN, sphereMassKg]);

  // Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (mode === 'elasticity') {
      // -------------------------------------------------------------
      // Render Mode 1: Searle's Wire Apparatus
      // -------------------------------------------------------------
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Top Rigid Ceiling Support
      ctx.fillStyle = '#334155';
      ctx.fillRect(40, 20, width - 80, 20);
      ctx.fillStyle = '#64748b';
      for (let i = 50; i < width - 50; i += 25) {
        ctx.beginPath();
        ctx.moveTo(i, 20);
        ctx.lineTo(i + 15, 5);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Dual Wires: Reference Wire (Left) and Test Wire (Right)
      const refX = width * 0.35;
      const testX = width * 0.65;
      const wireTopY = 40;
      const frameY = 240;

      // Reference Wire (Fixed)
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(refX, wireTopY);
      ctx.lineTo(refX, frameY);
      ctx.stroke();

      // Test Wire (Under Stress, extends visibly)
      const visualExtensionPx = Math.min(25, wireExtensionM * 1000 * 5); // amplified for visibility
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = Math.max(1.5, wireDiameterMm * 2.5);
      ctx.beginPath();
      ctx.moveTo(testX, wireTopY);
      ctx.lineTo(testX, frameY + visualExtensionPx);
      ctx.stroke();

      // Connecting Spirit Level Bar
      const spiritY1 = frameY;
      const spiritY2 = frameY + visualExtensionPx;
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3;
      ctx.strokeRect(refX - 20, spiritY1, (testX - refX) + 40, 24);
      ctx.fillRect(refX - 20, spiritY1, (testX - refX) + 40, 24);

      // Spirit Level Bubble
      const bubbleCenterNorm = (spiritY2 - spiritY1) / 30; // deflection tilt
      const bubbleX = (refX + testX) / 2 + bubbleCenterNorm * 60;
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(bubbleX, spiritY1 + 12, 6, 0, Math.PI * 2);
      ctx.fill();

      // Micrometer Screws & Scales on Test Side
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(testX - 10, spiritY2 + 24, 20, 30);
      ctx.strokeStyle = '#0f766e';
      ctx.lineWidth = 1;
      for (let s = 0; s < 30; s += 5) {
        ctx.beginPath();
        ctx.moveTo(testX - 10, spiritY2 + 24 + s);
        ctx.lineTo(testX - 4, spiritY2 + 24 + s);
        ctx.stroke();
      }

      // Hanging Weights
      const weightTopY = spiritY2 + 55;
      ctx.fillStyle = '#64748b';
      const weightH = Math.min(80, hangingMassKg * 8);
      ctx.fillRect(testX - 25, weightTopY, 50, weightH);
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${hangingMassKg} kg`, testX, weightTopY + weightH / 2 + 4);

      // Constant reference hanger
      ctx.fillStyle = '#475569';
      ctx.fillRect(refX - 20, spiritY1 + 30, 40, 40);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10px sans-serif';
      ctx.fillText('Ref (2 kg)', refX, spiritY1 + 54);

      // Annotations
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`Test Wire (${wireMaterial.toUpperCase()})`, testX + 15, wireTopY + 60);
      ctx.fillText(`L = ${wireLengthM} m, d = ${wireDiameterMm} mm`, testX + 15, wireTopY + 80);
      ctx.fillText(`ΔL = ${(wireExtensionM * 1000).toFixed(3)} mm`, testX + 15, wireTopY + 100);
      ctx.fillText(`Stress σ = ${(tensileStressPa / 1e6).toFixed(1)} MPa`, testX + 15, wireTopY + 120);
      ctx.fillText(`Strain ε = ${(tensileStrain * 1e4).toFixed(2)} × 10⁻⁴`, testX + 15, wireTopY + 140);
      ctx.fillText(`Strain Energy U = ${(strainEnergyJ * 1000).toFixed(2)} mJ`, testX + 15, wireTopY + 160);
    } else if (mode === 'viscosity') {
      // -------------------------------------------------------------
      // Render Mode 2: Stokes' Viscometer Falling Sphere
      // -------------------------------------------------------------
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Viscometer Glass Tube
      const tubeX = width * 0.35;
      const tubeW = 100;
      const tubeY = 30;
      const tubeH = height - 60;

      // Fluid Fill
      ctx.fillStyle = currFluid.color;
      ctx.fillRect(tubeX, tubeY, tubeW, tubeH);

      // Glass Tube Outer Borders
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.strokeRect(tubeX, tubeY, tubeW, tubeH);

      // Reference Benchmark Timing Rings (A, B, C)
      const ringA = tubeY + tubeH * 0.25;
      const ringB = tubeY + tubeH * 0.55;
      const ringC = tubeY + tubeH * 0.85;

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      [ringA, ringB, ringC].forEach((ry, idx) => {
        ctx.beginPath();
        ctx.moveTo(tubeX - 10, ry);
        ctx.lineTo(tubeX + tubeW + 10, ry);
        ctx.stroke();
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`Mark ${String.fromCharCode(65 + idx)}`, tubeX - 15, ry + 4);
      });

      // Falling Sphere
      const sphereDrawY = tubeY + 20 + sphereYPos * (tubeH - 40);
      const sphereDrawX = tubeX + tubeW / 2;
      const sphereDrawR = Math.max(4, sphereRadiusMm * 4);

      // Wake particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(sphereDrawX, sphereDrawY - i * 10, sphereDrawR * (1 - i * 0.2), 0, Math.PI * 2);
        ctx.fill();
      }

      // Sphere Body
      ctx.fillStyle = sphereType === 'steel' ? '#94a3b8' : sphereType === 'glass' ? '#67e8f9' : '#475569';
      ctx.beginPath();
      ctx.arc(sphereDrawX, sphereDrawY, sphereDrawR, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Free Body Diagram Vector Arrows at Sphere
      const arrowStartX = tubeX + tubeW + 40;
      const arrowStartY = sphereDrawY;

      // Downward Weight Vector
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(arrowStartX, arrowStartY);
      ctx.lineTo(arrowStartX, arrowStartY + 45);
      ctx.stroke();
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('W = mg ↓', arrowStartX + 10, arrowStartY + 30);

      // Upward Buoyancy Vector
      ctx.strokeStyle = '#22c55e';
      ctx.beginPath();
      ctx.moveTo(arrowStartX, arrowStartY);
      ctx.lineTo(arrowStartX, arrowStartY - 25);
      ctx.stroke();
      ctx.fillStyle = '#22c55e';
      ctx.fillText('U_b ↑', arrowStartX + 10, arrowStartY - 15);

      // Upward Stokes Drag Vector
      ctx.strokeStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(arrowStartX - 20, arrowStartY);
      ctx.lineTo(arrowStartX - 20, arrowStartY - 35);
      ctx.stroke();
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('F_d = 6πηrv ↑', arrowStartX - 100, arrowStartY - 20);

      // Telemetry Box
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      const infoX = width * 0.62;
      ctx.fillText(`Fluid: ${currFluid.nameEn}`, infoX, 60);
      ctx.fillText(`Sphere: ${currSphere.nameEn}`, infoX, 85);
      ctx.fillText(`Radius r = ${sphereRadiusMm} mm`, infoX, 110);
      ctx.fillText(`Current Velocity v = ${currentVelocityMs.toFixed(3)} m/s`, infoX, 135);
      ctx.fillText(`Terminal Velocity v_t = ${terminalVelocityMs.toFixed(3)} m/s`, infoX, 160);
      ctx.fillText(`Time elapsed = ${elapsedTimeS.toFixed(2)} s`, infoX, 185);

      const isTerminal = Math.abs(currentVelocityMs - terminalVelocityMs) < 0.005;
      ctx.fillStyle = isTerminal ? '#22c55e' : '#f59e0b';
      ctx.fillText(
        isTerminal ? '● Terminal Equilibrium Reached (F_net = 0)' : '○ Accelerating Through Viscous Fluid',
        infoX,
        215
      );
    } else {
      // -------------------------------------------------------------
      // Render Mode 3: Capillary Tube Rise & Surface Tension
      // -------------------------------------------------------------
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Beaker of liquid
      const beakerX = width * 0.2;
      const beakerW = width * 0.6;
      const beakerY = height * 0.55;
      const beakerH = height * 0.38;

      ctx.fillStyle = currLiquid.color;
      ctx.fillRect(beakerX, beakerY, beakerW, beakerH);
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 3;
      ctx.strokeRect(beakerX, beakerY, beakerW, beakerH);

      // Meniscus in Beaker
      ctx.fillStyle = currLiquid.color;
      ctx.fillRect(beakerX - 5, beakerY - 5, beakerW + 10, 5);

      // Capillary Tube
      const tubeCenterX = width * 0.5;
      const tubeVisualWidthPx = Math.max(12, tubeRadiusMm * 30);
      const tubeLeftX = tubeCenterX - tubeVisualWidthPx / 2;
      const tubeTopY = 30;
      const tubeBottomY = beakerY + beakerH - 20;

      // Capillary Column Rise / Fall
      // Amplified scale: 1 mm real height = 3 px canvas
      const visualRisePx = (capillaryHeightM * 1000) * 3;
      const liquidLevelInTubeY = beakerY - visualRisePx;

      ctx.fillStyle = currLiquid.color;
      ctx.fillRect(tubeLeftX, liquidLevelInTubeY, tubeVisualWidthPx, tubeBottomY - liquidLevelInTubeY);

      // Meniscus Curvature (Concave for water/θ<90, Convex for mercury/θ>90)
      ctx.fillStyle = currLiquid.color;
      ctx.beginPath();
      if (currLiquid.thetaDeg < 90) {
        // Concave curve
        ctx.ellipse(tubeCenterX, liquidLevelInTubeY, tubeVisualWidthPx / 2, 6, 0, 0, Math.PI);
      } else {
        // Convex curve (mercury depression)
        ctx.ellipse(tubeCenterX, liquidLevelInTubeY, tubeVisualWidthPx / 2, 6, 0, Math.PI, 0);
      }
      ctx.fill();

      // Glass Tube Walls
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(tubeLeftX, tubeTopY);
      ctx.lineTo(tubeLeftX, tubeBottomY);
      ctx.moveTo(tubeLeftX + tubeVisualWidthPx, tubeTopY);
      ctx.lineTo(tubeLeftX + tubeVisualWidthPx, tubeBottomY);
      ctx.stroke();

      // Dimension Markers: Height h
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);

      // Level line from beaker surface
      ctx.beginPath();
      ctx.moveTo(beakerX + 20, beakerY);
      ctx.lineTo(tubeLeftX - 10, beakerY);
      ctx.stroke();

      // Level line from capillary meniscus
      ctx.beginPath();
      ctx.moveTo(tubeLeftX + tubeVisualWidthPx + 10, liquidLevelInTubeY);
      ctx.lineTo(width * 0.82, liquidLevelInTubeY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Height Arrow
      const arrowX = width * 0.78;
      ctx.strokeStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(arrowX, beakerY);
      ctx.lineTo(arrowX, liquidLevelInTubeY);
      ctx.stroke();

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(
        `h = ${(capillaryHeightM * 1000).toFixed(1)} mm`,
        arrowX + 8,
        (beakerY + liquidLevelInTubeY) / 2
      );

      // Information Display
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      const infoLeft = 40;
      ctx.fillText(`Liquid: ${currLiquid.nameEn}`, infoLeft, 50);
      ctx.fillText(`Surface Tension γ = ${currLiquid.gamma} N/m`, infoLeft, 75);
      ctx.fillText(`Contact Angle θ = ${currLiquid.thetaDeg}°`, infoLeft, 100);
      ctx.fillText(`Tube Radius r = ${tubeRadiusMm} mm`, infoLeft, 125);
      ctx.fillText(`Jurin's Law: h = 2γ cosθ / (ρ g r)`, infoLeft, 150);
      ctx.fillText(
        capillaryHeightM >= 0
          ? '● Capillary Rise (Wet meniscus, θ < 90°)'
          : '● Capillary Depression (Non-wet meniscus, θ > 90°)',
        infoLeft,
        180
      );
    }
  }, [
    mode,
    wireMaterial,
    hangingMassKg,
    wireLengthM,
    wireDiameterMm,
    wireExtensionM,
    tensileStressPa,
    tensileStrain,
    strainEnergyJ,
    fluidType,
    sphereType,
    sphereRadiusMm,
    currFluid,
    currSphere,
    sphereYPos,
    currentVelocityMs,
    terminalVelocityMs,
    elapsedTimeS,
    capillaryLiquid,
    tubeRadiusMm,
    currLiquid,
    capillaryHeightM,
  ]);

  const handleReset = () => {
    setSphereYPos(0);
    setCurrentVelocityMs(0);
    setElapsedTimeS(0);
  };

  const t = {
    en: {
      title: 'Unit 10: Mechanical Properties of Matter Interactive Simulation',
      subtitle:
        'Explore solid elasticity with Searle’s wire apparatus, fluid viscosity with Stokes’ terminal velocity viscometer, and liquid surface tension with capillary tube rise.',
      modeElasticity: 'Searle’s Wire Elasticity',
      modeViscosity: 'Stokes’ Viscometer & Terminal Velocity',
      modeSurfaceTension: 'Capillary Rise & Surface Tension',
      material: 'Wire Material:',
      mass: 'Hanging Mass (kg):',
      wireLength: 'Wire Length L (m):',
      wireDiameter: 'Wire Diameter d (mm):',
      fluid: 'Fluid Medium:',
      sphere: 'Sphere Material:',
      sphereRadius: 'Sphere Radius r (mm):',
      liquid: 'Capillary Liquid:',
      tubeRadius: 'Capillary Tube Radius r (mm):',
      pause: 'Pause',
      resume: 'Resume',
      reset: 'Reset Fall',
    },
    si: {
      title: 'ඒකක 10: පදාර්ථයේ යාන්ත්‍රික ගුණ අන්තර්ක්‍රියාකාරී සමාකරණය',
      subtitle:
        'සර්ල්ගේ කම්බි උපකරණය මඟින් ප්‍රත්‍යාස්ථතාව, ස්ටෝක්ස් ක්‍රමය මඟින් දුස්ස්‍රාවිතාව හා අන්ත ප්‍රවේගය, සහ කේශික උද්ගමනය මඟින් පෘෂ්ඨික ආතතිය ගවේෂණය කරන්න.',
      modeElasticity: 'සර්ල්ගේ ප්‍රත්‍යාස්ථතා උපකරණය',
      modeViscosity: 'ස්ටෝක්ස් දුස්ස්‍රාවීතාමානය හා අන්ත ප්‍රවේගය',
      modeSurfaceTension: 'කේශික උද්ගමනය හා පෘෂ්ඨික ආතතිය',
      material: 'කම්බි ද්‍රව්‍යය:',
      mass: 'එල්ලූ ස්කන්ධය (kg):',
      wireLength: 'කම්බියේ දිග L (m):',
      wireDiameter: 'කම්බියේ විෂ්කම්භය d (mm):',
      fluid: 'තරල මාධ්‍යය:',
      sphere: 'ගෝලයේ ද්‍රව්‍යය:',
      sphereRadius: 'ගෝලයේ අරය r (mm):',
      liquid: 'කේශික ද්‍රවය:',
      tubeRadius: 'කේශික නලයේ අරය r (mm):',
      pause: 'විරාමය',
      resume: 'නැවත අරඹන්න',
      reset: 'යළි පිහිටුවන්න',
    },
  }[locale];

  return (
    <Card className="border border-teal-100 dark:border-teal-900/40 shadow-sm bg-white dark:bg-slate-900 rounded-2xl overflow-hidden">
      <CardHeader className="p-6 border-b border-slate-100 dark:border-slate-800 bg-[#F6FAFD]/60 dark:bg-[#0B131E]/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
              <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {t.title}
              </CardTitle>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.subtitle}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={mode === 'elasticity' ? 'default' : 'outline'}
              onClick={() => setMode('elasticity')}
              className={
                mode === 'elasticity'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeElasticity}
            </Button>
            <Button
              size="sm"
              variant={mode === 'viscosity' ? 'default' : 'outline'}
              onClick={() => setMode('viscosity')}
              className={
                mode === 'viscosity'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeViscosity}
            </Button>
            <Button
              size="sm"
              variant={mode === 'surface-tension' ? 'default' : 'outline'}
              onClick={() => setMode('surface-tension')}
              className={
                mode === 'surface-tension'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeSurfaceTension}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Canvas Area */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex justify-center items-center">
          <canvas
            ref={canvasRef}
            width={800}
            height={380}
            className="w-full h-auto max-h-[420px]"
          />
        </div>

        {/* Controls Grid */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
          {mode === 'elasticity' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.material}
                </label>
                <select
                  value={wireMaterial}
                  onChange={(e) => setWireMaterial(e.target.value as 'steel' | 'copper' | 'aluminum' | 'brass')}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                >
                  <option value="steel">{locale === 'si' ? 'වානේ' : 'Steel (Y = 200 GPa)'}</option>
                  <option value="copper">{locale === 'si' ? 'තඹ' : 'Copper (Y = 110 GPa)'}</option>
                  <option value="aluminum">{locale === 'si' ? 'ඇලුමිනියම්' : 'Aluminum (Y = 70 GPa)'}</option>
                  <option value="brass">{locale === 'si' ? 'පිත්තල' : 'Brass (Y = 100 GPa)'}</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.mass}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{hangingMassKg.toFixed(1)} kg</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10.0"
                  step="0.5"
                  value={hangingMassKg}
                  onChange={(e) => setHangingMassKg(parseFloat(e.target.value))}
                  className="w-full accent-teal-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.wireLength}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{wireLengthM.toFixed(1)} m</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="4.0"
                  step="0.5"
                  value={wireLengthM}
                  onChange={(e) => setWireLengthM(parseFloat(e.target.value))}
                  className="w-full accent-teal-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.wireDiameter}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{wireDiameterMm.toFixed(2)} mm</span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="1.5"
                  step="0.05"
                  value={wireDiameterMm}
                  onChange={(e) => setWireDiameterMm(parseFloat(e.target.value))}
                  className="w-full accent-teal-600"
                />
              </div>
            </div>
          )}

          {mode === 'viscosity' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    {t.fluid}
                  </label>
                  <select
                    value={fluidType}
                    onChange={(e) => setFluidType(e.target.value as 'glycerin' | 'castor' | 'oil' | 'water')}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  >
                    <option value="glycerin">{locale === 'si' ? 'ග්ලිසරින් (1.4 Pa·s)' : 'Glycerin (1.40 Pa·s)'}</option>
                    <option value="castor">{locale === 'si' ? 'එරණ්ඩ තෙල් (0.98 Pa·s)' : 'Castor Oil (0.98 Pa·s)'}</option>
                    <option value="oil">{locale === 'si' ? 'මැෂින් තෙල් (0.25 Pa·s)' : 'Machine Oil (0.25 Pa·s)'}</option>
                    <option value="water">{locale === 'si' ? 'ජලය (0.001 Pa·s)' : 'Water (0.001 Pa·s)'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    {t.sphere}
                  </label>
                  <select
                    value={sphereType}
                    onChange={(e) => setSphereType(e.target.value as 'steel' | 'glass' | 'lead')}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  >
                    <option value="steel">{locale === 'si' ? 'වානේ (7800 kg/m³)' : 'Steel (7800 kg/m³)'}</option>
                    <option value="glass">{locale === 'si' ? 'වීදුරු (2500 kg/m³)' : 'Glass (2500 kg/m³)'}</option>
                    <option value="lead">{locale === 'si' ? 'ඊයම් (11340 kg/m³)' : 'Lead (11340 kg/m³)'}</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                    <span>{t.sphereRadius}</span>
                    <span className="font-mono text-teal-600 dark:text-teal-400">{sphereRadiusMm.toFixed(1)} mm</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.25"
                    value={sphereRadiusMm}
                    onChange={(e) => setSphereRadiusMm(parseFloat(e.target.value))}
                    className="w-full accent-teal-600"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="gap-1.5 text-xs"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? t.pause : t.resume}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReset}
                  className="gap-1.5 text-xs text-rose-600 hover:text-rose-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.reset}
                </Button>
              </div>
            </div>
          )}

          {mode === 'surface-tension' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.liquid}
                </label>
                <select
                  value={capillaryLiquid}
                  onChange={(e) => setCapillaryLiquid(e.target.value as 'water' | 'mercury' | 'ethanol' | 'soap')}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                >
                  <option value="water">{locale === 'si' ? 'ජලය (72.8 mN/m, θ=0°)' : 'Water (72.8 mN/m, θ=0°)'}</option>
                  <option value="soap">{locale === 'si' ? 'සබන් දියරය (30 mN/m, θ=0°)' : 'Soap Solution (30 mN/m, θ=0°)'}</option>
                  <option value="ethanol">{locale === 'si' ? 'එතනෝල් (22.4 mN/m, θ=0°)' : 'Ethanol (22.4 mN/m, θ=0°)'}</option>
                  <option value="mercury">{locale === 'si' ? 'රසදිය (485 mN/m, θ=140° අවපාතය)' : 'Mercury (485 mN/m, θ=140° depression)'}</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.tubeRadius}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{tubeRadiusMm.toFixed(2)} mm</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={tubeRadiusMm}
                  onChange={(e) => setTubeRadiusMm(parseFloat(e.target.value))}
                  className="w-full accent-teal-600"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

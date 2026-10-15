'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  calculatePhotonEnergy,
  calculatePhotonFrequency,
  calculatePhotoelectricMaxKE,
  calculateStoppingPotential,
  calculateThresholdWavelength,
  calculateBohrEnergyLevel,
  calculateHydrogenTransitionWavelength,
  ELEMENTARY_CHARGE,
} from '../physics/calculations';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Activity, Zap, Radio, SunMedium } from 'lucide-react';

interface QuantumNuclearSimulationProps {
  locale?: Locale;
}

type SimulationMode = 'photoelectric' | 'bohr-atom' | 'radioactivity';

export const QuantumNuclearSimulation: React.FC<QuantumNuclearSimulationProps> = ({
  locale = 'en',
}) => {
  const [mode, setMode] = useState<SimulationMode>('photoelectric');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // --------------------------------------------------------------------------
  // Mode 1: Photoelectric Effect State
  // --------------------------------------------------------------------------
  const [targetMetal, setTargetMetal] = useState<'cesium' | 'potassium' | 'zinc' | 'platinum'>('cesium');
  const [wavelengthNm, setWavelengthNm] = useState<number>(380); // nm (violet/near-UV)
  const [intensityPct, setIntensityPct] = useState<number>(75); // %
  const [collectorVoltageV, setCollectorVoltageV] = useState<number>(1.5); // Volts

  const metalData: Record<string, { phiEv: number; nameEn: string; nameSi: string; color: string }> = {
    cesium: { phiEv: 2.14, nameEn: 'Cesium (Φ = 2.14 eV, λ₀ = 579 nm)', nameSi: 'සීසියම් (Φ = 2.14 eV, λ₀ = 579 nm)', color: '#FDE047' },
    potassium: { phiEv: 2.30, nameEn: 'Potassium (Φ = 2.30 eV, λ₀ = 539 nm)', nameSi: 'පොටෑසියම් (Φ = 2.30 eV, λ₀ = 539 nm)', color: '#CBD5E1' },
    zinc: { phiEv: 4.31, nameEn: 'Zinc (Φ = 4.31 eV, λ₀ = 288 nm)', nameSi: 'සින්ක් (Φ = 4.31 eV, λ₀ = 288 nm)', color: '#94A3B8' },
    platinum: { phiEv: 6.35, nameEn: 'Platinum (Φ = 6.35 eV, λ₀ = 195 nm)', nameSi: 'ප්ලැටිනම් (Φ = 6.35 eV, λ₀ = 195 nm)', color: '#E2E8F0' },
  };

  const currMetal = metalData[targetMetal];
  const workFunctionJ = currMetal.phiEv * ELEMENTARY_CHARGE;
  const photonFreqHz = calculatePhotonFrequency(wavelengthNm * 1e-9);
  const photonEnergyJ = calculatePhotonEnergy(photonFreqHz);
  const photonEnergyEv = photonEnergyJ / ELEMENTARY_CHARGE;
  const maxKEJ = calculatePhotoelectricMaxKE(photonFreqHz, workFunctionJ);
  const maxKEEv = maxKEJ / ELEMENTARY_CHARGE;
  const stoppingPotentialV = calculateStoppingPotential(maxKEJ);
  const thresholdWavelengthNm = calculateThresholdWavelength(workFunctionJ) * 1e9;

  // Live photocurrent approximation
  // If collector voltage V < -Vs, current is 0. If V >= 0, saturation current proportional to intensity.
  let photoCurrentMicroA = 0;
  if (photonEnergyEv > currMetal.phiEv) {
    if (collectorVoltageV <= -stoppingPotentialV) {
      photoCurrentMicroA = 0;
    } else if (collectorVoltageV < 0) {
      const frac = (collectorVoltageV + stoppingPotentialV) / stoppingPotentialV;
      photoCurrentMicroA = intensityPct * 0.4 * Math.pow(frac, 1.5);
    } else {
      photoCurrentMicroA = intensityPct * 0.4 * (1 + 0.15 * Math.tanh(collectorVoltageV / 1.5));
    }
  }

  // Helper: wavelength to RGB string for visual beam
  const wavelengthToRgb = (wl: number) => {
    if (wl < 380) return 'rgba(168, 85, 247, 0.85)'; // UV / Purple
    if (wl < 440) return 'rgba(99, 102, 241, 0.85)'; // Indigo
    if (wl < 490) return 'rgba(14, 165, 233, 0.85)'; // Blue
    if (wl < 560) return 'rgba(34, 197, 94, 0.85)'; // Green
    if (wl < 590) return 'rgba(234, 179, 8, 0.85)'; // Yellow
    if (wl < 640) return 'rgba(249, 115, 22, 0.85)'; // Orange
    return 'rgba(239, 68, 68, 0.85)'; // Red
  };

  // --------------------------------------------------------------------------
  // Mode 2: Bohr Hydrogen Atom State
  // --------------------------------------------------------------------------
  const [currentN, setCurrentN] = useState<number>(3);
  const [targetN, setTargetN] = useState<number>(2);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [emittedPhotonWl, setEmittedPhotonWl] = useState<number | null>(656.3);

  const eCurrent = calculateBohrEnergyLevel(currentN);
  const eTarget = calculateBohrEnergyLevel(targetN);
  const deltaEEv = Math.abs(eCurrent - eTarget);

  const handleBohrTransition = (newTarget: number) => {
    if (newTarget === currentN) return;
    setTargetN(newTarget);
    setIsTransitioning(true);
    if (currentN > newTarget) {
      // Emission
      const wlM = calculateHydrogenTransitionWavelength(newTarget, currentN);
      setEmittedPhotonWl(wlM * 1e9);
    } else {
      // Absorption
      const wlM = calculateHydrogenTransitionWavelength(currentN, newTarget);
      setEmittedPhotonWl(wlM * 1e9);
    }
    setTimeout(() => {
      setCurrentN(newTarget);
      setIsTransitioning(false);
    }, 800);
  };

  // --------------------------------------------------------------------------
  // Mode 3: Radioactivity & Half-life State
  // --------------------------------------------------------------------------
  const [selectedIsotope, setSelectedIsotope] = useState<'C14' | 'Co60' | 'I131' | 'Rn222'>('I131');
  const [elapsedSimulationDays, setElapsedSimulationDays] = useState<number>(0);
  const [decayLattice, setDecayLattice] = useState<boolean[]>(() => Array(100).fill(true)); // true = parent, false = decayed

  const isotopeData: Record<
    string,
    { halfLifeDays: number; nameEn: string; nameSi: string; decayMode: string }
  > = {
    I131: { halfLifeDays: 8.02, nameEn: 'Iodine-131 (T½ = 8.02 days, β⁻ + γ)', nameSi: 'අයඩින්-131 (T½ = දින 8.02, β⁻ + γ)', decayMode: 'β⁻ + γ' },
    Rn222: { halfLifeDays: 3.82, nameEn: 'Radon-222 (T½ = 3.82 days, α)', nameSi: 'රේඩෝන්-222 (T½ = දින 3.82, α)', decayMode: 'α' },
    Co60: { halfLifeDays: 1925, nameEn: 'Cobalt-60 (T½ = 5.27 yr / 1925 d, β⁻ + γ)', nameSi: 'කොබෝල්ට්-60 (T½ = වසර 5.27, β⁻ + γ)', decayMode: 'β⁻ + γ' },
    C14: { halfLifeDays: 2092800, nameEn: 'Carbon-14 (T½ = 5730 yr, β⁻)', nameSi: 'කාබන්-14 (T½ = වසර 5730, β⁻)', decayMode: 'β⁻' },
  };

  const currIsotope = isotopeData[selectedIsotope];
  const remainingCount = decayLattice.filter(Boolean).length;
  const theoreticalRemainingPct = 100 * Math.pow(0.5, elapsedSimulationDays / currIsotope.halfLifeDays);

  // --------------------------------------------------------------------------
  // Canvas Animation Frame
  // --------------------------------------------------------------------------
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const electronParticles = useRef<{ x: number; y: number; vx: number; vy: number; active: boolean }[]>([]);
  const bohrTheta = useRef<number>(0);

  // Initialize electron particle pool
  useEffect(() => {
    electronParticles.current = Array.from({ length: 40 }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      active: false,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = 0;

    const render = (time: number) => {
      if (lastTime === 0) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ======================================================================
      // Render Mode 1: Photoelectric Effect
      // ======================================================================
      if (mode === 'photoelectric') {
        const w = canvas.width;
        const h = canvas.height;

        // Background & Vacuum chamber tube
        ctx.fillStyle = '#0B1528';
        ctx.fillRect(0, 0, w, h);

        // Glass envelope outline
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(80, 50, w - 160, h - 140, 40);
        ctx.stroke();

        // Quartz window at top-left
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(140, 50, 30, Math.PI, 2 * Math.PI);
        ctx.stroke();

        // Cathode Plate (Left)
        const cathodeX = 140;
        const plateY = 80;
        const plateH = h - 200;
        ctx.fillStyle = currMetal.color;
        ctx.fillRect(cathodeX, plateY, 14, plateH);
        ctx.strokeStyle = '#64748B';
        ctx.strokeRect(cathodeX, plateY, 14, plateH);

        // Anode Collector Plate (Right)
        const anodeX = w - 150;
        ctx.fillStyle = '#94A3B8';
        ctx.fillRect(anodeX, plateY, 14, plateH);
        ctx.strokeStyle = '#475569';
        ctx.strokeRect(anodeX, plateY, 14, plateH);

        // Labels
        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#F8FAFC';
        ctx.fillText(locale === 'si' ? 'කැතෝඩය (C)' : 'Cathode (C)', cathodeX - 25, plateY - 10);
        ctx.fillText(locale === 'si' ? 'ඇනෝඩය (A)' : 'Anode (A)', anodeX - 20, plateY - 10);

        // Incident Light Beam (Photons)
        if (intensityPct > 0) {
          ctx.strokeStyle = wavelengthToRgb(wavelengthNm);
          ctx.lineWidth = 2.5;
          const beamCount = Math.floor((intensityPct / 100) * 8) + 2;
          for (let i = 0; i < beamCount; i++) {
            const startX = 100 + i * 14;
            const startY = 20;
            const endX = cathodeX + 7;
            const endY = plateY + 20 + i * ((plateH - 40) / beamCount);

            ctx.beginPath();
            ctx.setLineDash([6, 4]);
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.setLineDash([]);

            // Small wave arrow
            ctx.fillStyle = wavelengthToRgb(wavelengthNm);
            ctx.beginPath();
            ctx.arc(endX - 8, endY - 4, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Emit and update photoelectrons
        if (isPlaying && photonEnergyEv > currMetal.phiEv && intensityPct > 0) {
          // Spawn new electrons randomly
          const spawnChance = (intensityPct / 100) * 0.4;
          if (Math.random() < spawnChance) {
            const inactive = electronParticles.current.find((p) => !p.active);
            if (inactive) {
              inactive.active = true;
              inactive.x = cathodeX + 15;
              inactive.y = plateY + 10 + Math.random() * (plateH - 20);
              // Initial kinetic velocity proportional to sqrt(maxKE)
              const baseV = 100 * Math.sqrt(Math.max(0.05, maxKEEv));
              inactive.vx = baseV * (0.6 + Math.random() * 0.4);
              inactive.vy = (Math.random() - 0.5) * 30;
            }
          }
        }

        // Accelerating / Retarding electric field force: F = e * (V / d)
        const tubeDist = anodeX - cathodeX;
        const fieldAx = (collectorVoltageV / tubeDist) * 350;

        // Render electrons
        electronParticles.current.forEach((p) => {
          if (!p.active) return;
          if (isPlaying) {
            p.vx += fieldAx * dt;
            p.x += p.vx * dt;
            p.y += p.vy * dt;

            // Check reached anode or returned to cathode
            if (p.x >= anodeX) {
              p.active = false;
            } else if (p.x <= cathodeX && p.vx < 0) {
              p.active = false;
            }
          }

          // Draw electron
          ctx.fillStyle = '#38BDF8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
          ctx.fill();

          // Glowing tail
          ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
          ctx.beginPath();
          ctx.arc(p.x - p.vx * 0.02, p.y, 5, 0, Math.PI * 2);
          ctx.fill();
        });

        // External Circuit Wire & Voltmeter / Microammeter
        ctx.strokeStyle = '#64748B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Wire from cathode down
        ctx.moveTo(cathodeX + 7, plateY + plateH);
        ctx.lineTo(cathodeX + 7, h - 40);
        ctx.lineTo(w / 2 - 80, h - 40);
        // Wire from anode down
        ctx.moveTo(anodeX + 7, plateY + plateH);
        ctx.lineTo(anodeX + 7, h - 40);
        ctx.lineTo(w / 2 + 80, h - 40);
        ctx.stroke();

        // Meter box in bottom center
        ctx.fillStyle = '#1E293B';
        ctx.fillRect(w / 2 - 80, h - 65, 160, 50);
        ctx.strokeStyle = '#0F766E';
        ctx.strokeRect(w / 2 - 80, h - 65, 160, 50);

        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#2DD4BF';
        ctx.fillText(`I = ${photoCurrentMicroA.toFixed(2)} µA`, w / 2 - 55, h - 45);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '10px sans-serif';
        ctx.fillText(`V = ${collectorVoltageV >= 0 ? '+' : ''}${collectorVoltageV.toFixed(2)} V`, w / 2 - 50, h - 25);
      }

      // ======================================================================
      // Render Mode 2: Bohr Hydrogen Atom
      // ======================================================================
      else if (mode === 'bohr-atom') {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.fillStyle = '#070E1A';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Orbits radii scaling
        const baseR = 38;
        const orbitRadii = [1, 2, 3, 4, 5].map((n) => baseR * Math.sqrt(n));

        // Draw Orbits
        orbitRadii.forEach((r, idx) => {
          const nVal = idx + 1;
          ctx.strokeStyle = nVal === currentN ? '#14B8A6' : 'rgba(100, 116, 139, 0.35)';
          ctx.lineWidth = nVal === currentN ? 2 : 1;
          ctx.setLineDash(nVal === currentN ? [] : [4, 4]);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);

          // Orbit n label
          ctx.font = '10px monospace';
          ctx.fillStyle = '#64748B';
          ctx.fillText(`n=${nVal}`, cx + r + 4, cy - 2);
        });

        // Center Proton Nucleus
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.arc(cx, cy, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('+e', cx - 6, cy + 3);

        // Orbiting Electron
        if (isPlaying) {
          bohrTheta.current += (2.5 / Math.pow(currentN, 1.2)) * dt;
        }
        const currR = orbitRadii[currentN - 1];
        const ex = cx + currR * Math.cos(bohrTheta.current);
        const ey = cy + currR * Math.sin(bohrTheta.current);

        // Glow
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.beginPath();
        ctx.arc(ex, ey, 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#38BDF8';
        ctx.beginPath();
        ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        ctx.fill();

        // Radiating emitted photon pulse if transitioning
        if (isTransitioning && emittedPhotonWl) {
          const pulseR = ((time % 800) / 800) * 120 + 20;
          ctx.strokeStyle = wavelengthToRgb(emittedPhotonWl);
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // ======================================================================
      // Render Mode 3: Radioactivity Decay Lattice
      // ======================================================================
      else if (mode === 'radioactivity') {
        const w = canvas.width;
        const h = canvas.height;

        ctx.fillStyle = '#0F172A';
        ctx.fillRect(0, 0, w, h);

        // 10x10 nucleus grid
        const cols = 10;
        const rows = 10;
        const spacingX = (w - 200) / cols;
        const spacingY = (h - 60) / rows;
        const startX = 40;
        const startY = 30;

        decayLattice.forEach((isParent, idx) => {
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const nx = startX + col * spacingX + spacingX / 2;
          const ny = startY + row * spacingY + spacingY / 2;

          ctx.beginPath();
          ctx.arc(nx, ny, 8, 0, Math.PI * 2);
          if (isParent) {
            // Parent active nucleus (Teal)
            ctx.fillStyle = '#0D9488';
            ctx.fill();
            ctx.strokeStyle = '#2DD4BF';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          } else {
            // Decayed daughter nucleus (Muted slate)
            ctx.fillStyle = '#334155';
            ctx.fill();
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Right-hand Decay Stats Summary Box
        ctx.fillStyle = '#1E293B';
        ctx.fillRect(w - 150, 30, 130, h - 60);
        ctx.strokeStyle = '#334155';
        ctx.strokeRect(w - 150, 30, 130, h - 60);

        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = '#F8FAFC';
        ctx.fillText(locale === 'si' ? 'න්‍යෂ්ටි තත්ත්වය' : 'Nuclei Status', w - 140, 55);

        ctx.font = '10px sans-serif';
        ctx.fillStyle = '#2DD4BF';
        ctx.fillText(`Parent: ${remainingCount}%`, w - 140, 85);
        ctx.fillStyle = '#94A3B8';
        ctx.fillText(`Daughter: ${100 - remainingCount}%`, w - 140, 110);
        ctx.fillText(`T: ${elapsedSimulationDays.toFixed(1)} d`, w - 140, 140);
        ctx.fillText(`T½: ${currIsotope.halfLifeDays} d`, w - 140, 165);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [
    mode,
    isPlaying,
    targetMetal,
    wavelengthNm,
    intensityPct,
    collectorVoltageV,
    currentN,
    targetN,
    isTransitioning,
    decayLattice,
    remainingCount,
    elapsedSimulationDays,
    currIsotope,
    photoCurrentMicroA,
    photonEnergyEv,
    currMetal,
    maxKEEv,
    stoppingPotentialV,
    locale,
    emittedPhotonWl,
  ]);

  // Periodic decay step timer in Mode 3
  useEffect(() => {
    if (mode !== 'radioactivity' || !isPlaying) return;

    const interval = setInterval(() => {
      setElapsedSimulationDays((prev) => {
        const nextDays = prev + currIsotope.halfLifeDays / 25;
        // Poisson decay step for each remaining parent nucleus
        const pDecay = 1 - Math.pow(0.5, (currIsotope.halfLifeDays / 25) / currIsotope.halfLifeDays);
        setDecayLattice((lat) =>
          lat.map((active) => (active ? Math.random() > pDecay : false))
        );
        return nextDays;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [mode, isPlaying, currIsotope]);

  const handleReset = () => {
    if (mode === 'photoelectric') {
      setCollectorVoltageV(1.5);
      setWavelengthNm(380);
      setIntensityPct(75);
    } else if (mode === 'bohr-atom') {
      setCurrentN(3);
      setTargetN(2);
    } else if (mode === 'radioactivity') {
      setElapsedSimulationDays(0);
      setDecayLattice(Array(100).fill(true));
    }
  };

  // Translations
  const t = {
    title: locale === 'si' ? 'පදාර්ථය සහ විකිරණ අන්තර්ක්‍රියාකාරී විද්‍යාගාරය' : 'Matter and Radiation Interactive Simulation Lab',
    desc:
      locale === 'si'
        ? 'ප්‍රකාශ විද්‍යුත් ආචරණය, බෝර් පරමාණුක වර්ණාවලි සංක්‍රාන්ති සහ විකිරණශීලී ක්ෂයවීම් නියමය තථ්‍ය කාලීනව ගවේෂණය කරන්න.'
        : 'Explore the photoelectric effect, Bohr hydrogen orbital transitions, line emission spectra, and radioactive half-life decays in real time.',
    mode1: locale === 'si' ? 'ප්‍රකාශ විද්‍යුත් ආචරණය' : 'Photoelectric Effect',
    mode2: locale === 'si' ? 'බෝර් පරමාණුව සහ වර්ණාවලිය' : 'Bohr Atom & Spectra',
    mode3: locale === 'si' ? 'විකිරණශීලතාව සහ අර්ධ ආයු' : 'Radioactivity & Half-Life',
    metal: locale === 'si' ? 'කැතෝඩ ලෝහය:' : 'Target Metal:',
    wavelength: locale === 'si' ? 'තරංග ආයාමය (λ):' : 'Wavelength (λ):',
    intensity: locale === 'si' ? 'ආලෝක තීව්‍රතාව:' : 'Light Intensity:',
    voltage: locale === 'si' ? 'නල විභවය (V):' : 'Collector Potential (V):',
    workFunction: locale === 'si' ? 'කාර්ය ශ්‍රිතය (Φ)' : 'Work Function (Φ)',
    photonEnergy: locale === 'si' ? 'ෆෝටෝන ශක්තිය (hf)' : 'Photon Energy (hf)',
    maxKE: locale === 'si' ? 'උපරිම චාලක ශක්තිය (K_max)' : 'Max Kinetic Energy (K_max)',
    stoppingPotential: locale === 'si' ? 'නැවැත්වීමේ විභවය (V_s)' : 'Stopping Potential (V_s)',
    thresholdWl: locale === 'si' ? 'සීමාකාරී තරංග ආයාමය (λ₀)' : 'Threshold Wavelength (λ₀)',
    current: locale === 'si' ? 'ප්‍රකාශ විද්‍යුත් ධාරාව (I)' : 'Photocurrent (I)',
    pause: locale === 'si' ? 'විරාමය' : 'Pause',
    resume: locale === 'si' ? 'ධාවනය' : 'Play',
    reset: locale === 'si' ? 'ප්‍රතිස්ථාපනය' : 'Reset',
  };

  return (
    <Card className="border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <SunMedium className="w-5 h-5 text-teal-600" />
              {t.title}
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.desc}</p>
          </div>

          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl gap-1">
            <Button
              size="sm"
              variant={mode === 'photoelectric' ? 'default' : 'ghost'}
              onClick={() => setMode('photoelectric')}
              className="text-xs gap-1.5 h-8"
            >
              <Zap className="w-3.5 h-3.5" />
              {t.mode1}
            </Button>
            <Button
              size="sm"
              variant={mode === 'bohr-atom' ? 'default' : 'ghost'}
              onClick={() => setMode('bohr-atom')}
              className="text-xs gap-1.5 h-8"
            >
              <Activity className="w-3.5 h-3.5" />
              {t.mode2}
            </Button>
            <Button
              size="sm"
              variant={mode === 'radioactivity' ? 'default' : 'ghost'}
              onClick={() => setMode('radioactivity')}
              className="text-xs gap-1.5 h-8"
            >
              <Radio className="w-3.5 h-3.5" />
              {t.mode3}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Simulation Canvas */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-inner">
          <canvas
            ref={canvasRef}
            width={720}
            height={340}
            className="w-full h-[340px] block"
          />
        </div>

        {/* Live Physics Metrics Banner */}
        {mode === 'photoelectric' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/40">
              <span className="text-[10px] uppercase font-bold text-teal-700 dark:text-teal-400 block">{t.photonEnergy}</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{photonEnergyEv.toFixed(2)} eV</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">{t.workFunction}</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{currMetal.phiEv.toFixed(2)} eV</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">{t.maxKE}</span>
              <span className="text-sm font-bold font-mono text-teal-600 dark:text-teal-400">{maxKEEv.toFixed(2)} eV</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">{t.stoppingPotential}</span>
              <span className="text-sm font-bold font-mono text-rose-600 dark:text-rose-400">-{stoppingPotentialV.toFixed(2)} V</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">{t.thresholdWl}</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{thresholdWavelengthNm.toFixed(0)} nm</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">{t.current}</span>
              <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">{photoCurrentMicroA.toFixed(2)} µA</span>
            </div>
          </div>
        )}

        {mode === 'bohr-atom' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Initial Orbit (n₁)</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">n = {currentN} ({eCurrent.toFixed(2)} eV)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Target Orbit (n₂)</span>
              <span className="text-sm font-bold font-mono text-teal-600 dark:text-teal-400">n = {targetN} ({eTarget.toFixed(2)} eV)</span>
            </div>
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/40">
              <span className="text-[10px] uppercase font-bold text-teal-700 dark:text-teal-400 block">Photon Energy (ΔE)</span>
              <span className="text-sm font-bold font-mono text-teal-600 dark:text-teal-400">{deltaEEv.toFixed(2)} eV</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
              <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">Emitted Wavelength</span>
              <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">{emittedPhotonWl ? `${emittedPhotonWl.toFixed(1)} nm` : '—'}</span>
            </div>
          </div>
        )}

        {mode === 'radioactivity' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Selected Isotope</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{currIsotope.decayMode} Decay</span>
            </div>
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/40">
              <span className="text-[10px] uppercase font-bold text-teal-700 dark:text-teal-400 block">Half-Life (T½)</span>
              <span className="text-sm font-bold font-mono text-teal-600 dark:text-teal-400">{currIsotope.halfLifeDays} Days</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Observed Remaining</span>
              <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">{remainingCount} / 100</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Theoretical Remaining</span>
              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{theoreticalRemainingPct.toFixed(1)}%</span>
            </div>
          </div>
        )}

        {/* Controls Grid */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
          {mode === 'photoelectric' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  {t.metal}
                </label>
                <select
                  value={targetMetal}
                  onChange={(e) => setTargetMetal(e.target.value as 'cesium' | 'potassium' | 'zinc' | 'platinum')}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                >
                  <option value="cesium">{metalData.cesium.nameEn}</option>
                  <option value="potassium">{metalData.potassium.nameEn}</option>
                  <option value="zinc">{metalData.zinc.nameEn}</option>
                  <option value="platinum">{metalData.platinum.nameEn}</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.wavelength}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{wavelengthNm} nm</span>
                </div>
                <input
                  type="range"
                  min="180"
                  max="700"
                  step="5"
                  value={wavelengthNm}
                  onChange={(e) => setWavelengthNm(parseInt(e.target.value, 10))}
                  className="w-full accent-teal-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.intensity}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{intensityPct}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={intensityPct}
                  onChange={(e) => setIntensityPct(parseInt(e.target.value, 10))}
                  className="w-full accent-teal-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  <span>{t.voltage}</span>
                  <span className="font-mono text-teal-600 dark:text-teal-400">{collectorVoltageV.toFixed(2)} V</span>
                </div>
                <input
                  type="range"
                  min="-4.0"
                  max="4.0"
                  step="0.1"
                  value={collectorVoltageV}
                  onChange={(e) => setCollectorVoltageV(parseFloat(e.target.value))}
                  className="w-full accent-teal-600"
                />
              </div>
            </div>
          )}

          {mode === 'bohr-atom' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Transition to orbit:</span>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Button
                    key={n}
                    size="sm"
                    variant={currentN === n ? 'default' : 'outline'}
                    onClick={() => handleBohrTransition(n)}
                    disabled={isTransitioning}
                    className="text-xs h-8"
                  >
                    n = {n}
                  </Button>
                ))}
              </div>

              {/* Spectral Series Guide */}
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border text-xs flex flex-wrap gap-4 text-slate-600 dark:text-slate-400">
                <span><strong>Lyman (UV):</strong> n → 1</span>
                <span><strong>Balmer (Visible):</strong> n → 2 (Hα 656nm Red, Hβ 486nm Aqua)</span>
                <span><strong>Paschen (IR):</strong> n → 3</span>
              </div>
            </div>
          )}

          {mode === 'radioactivity' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Select Radioisotope
                </label>
                <select
                  value={selectedIsotope}
                  onChange={(e) => {
                    setSelectedIsotope(e.target.value as 'C14' | 'Co60' | 'I131' | 'Rn222');
                    setElapsedSimulationDays(0);
                    setDecayLattice(Array(100).fill(true));
                  }}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                >
                  <option value="I131">{isotopeData.I131.nameEn}</option>
                  <option value="Rn222">{isotopeData.Rn222.nameEn}</option>
                  <option value="Co60">{isotopeData.Co60.nameEn}</option>
                  <option value="C14">{isotopeData.C14.nameEn}</option>
                </select>
              </div>

              <div className="sm:col-span-2 flex items-center justify-end gap-2 pt-2">
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
        </div>
      </CardContent>
    </Card>
  );
};

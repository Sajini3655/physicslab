'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  calculatePotentiometerInternalResistance,
  calculateTransformerSecondaryVoltage,
  calculateTransformerEfficiency,
} from '../physics/calculations';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, Activity } from 'lucide-react';

interface ElectricityCircuitSimulationProps {
  locale?: Locale;
}

type SimulationMode = 'potentiometer' | 'transformer';

export const ElectricityCircuitSimulation: React.FC<ElectricityCircuitSimulationProps> = ({
  locale = 'en',
}) => {
  const [mode, setMode] = useState<SimulationMode>('potentiometer');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Potentiometer state
  const [driverEmf, setDriverEmf] = useState<number>(4.0); // V
  const [driverRheostat, setDriverRheostat] = useState<number>(10.0); // Ω
  const [wireResistance] = useState<number>(10.0); // Ω (1 m wire)
  const [testCellEmf, setTestCellEmf] = useState<number>(1.5); // V
  const [testCellInternalR, setTestCellInternalR] = useState<number>(2.5); // Ω
  const [shuntResistor, setShuntResistor] = useState<number>(5.0); // Ω
  const [isKeyClosed, setIsKeyClosed] = useState<boolean>(false); // Shunt key
  const [jockeyPositionCm, setJockeyPositionCm] = useState<number>(50.0); // cm (0 - 100)

  // Transformer state
  const [primaryVoltageRms, setPrimaryVoltageRms] = useState<number>(230); // V
  const [primaryTurns, setPrimaryTurns] = useState<number>(500);
  const [secondaryTurns, setSecondaryTurns] = useState<number>(100);
  const [loadResistance, setLoadResistance] = useState<number>(20); // Ω
  const [coreType, setCoreType] = useState<'laminated' | 'solid'>('laminated');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);

  // Physics derivations for Potentiometer
  // Total driver current: I_d = E_0 / (R_wire + R_rh)
  const driverCurrent = driverEmf / (wireResistance + driverRheostat);
  const wireVoltage = driverCurrent * wireResistance;
  const potentialGradient = wireVoltage / 100.0; // V/cm
  const jockeyVoltage = potentialGradient * jockeyPositionCm; // V from A

  // Secondary circuit effective EMF and terminal voltage across cell
  // When key open: V_cell = E_x
  // When key closed: V_cell = E_x * (R_s / (R_s + r_x))
  const effectiveCellVoltage = isKeyClosed
    ? testCellEmf * (shuntResistor / (shuntResistor + testCellInternalR))
    : testCellEmf;

  // Theoretical balance length
  const theoreticalBalanceLengthCm = Math.min(
    100,
    potentialGradient > 0 ? effectiveCellVoltage / potentialGradient : 0
  );

  // Galvanometer deflection: proportional to (V_jockey - V_cell)
  const voltageDifference = jockeyVoltage - effectiveCellVoltage;
  // Normalized deflection from -50 to +50 divisions
  const maxGalvoVoltage = 1.0;
  const galvoDeflection = Math.max(
    -50,
    Math.min(50, (voltageDifference / maxGalvoVoltage) * 50)
  );
  const isBalanced = Math.abs(voltageDifference) < 0.015;

  // Open-circuit balance length for internal resistance calculation
  const openCircuitBalanceCm = potentialGradient > 0 ? testCellEmf / potentialGradient : 0;
  let calculatedInternalR: number | null = null;
  if (isKeyClosed && theoreticalBalanceLengthCm > 0 && openCircuitBalanceCm >= theoreticalBalanceLengthCm) {
    try {
      calculatedInternalR = calculatePotentiometerInternalResistance(
        openCircuitBalanceCm,
        theoreticalBalanceLengthCm,
        shuntResistor
      );
    } catch {
      calculatedInternalR = null;
    }
  }

  // Physics derivations for Transformer
  const secondaryVoltageRms = calculateTransformerSecondaryVoltage(
    primaryVoltageRms,
    primaryTurns,
    secondaryTurns
  );
  const secondaryCurrentRms = secondaryVoltageRms / loadResistance;
  const powerOutput = secondaryVoltageRms * secondaryCurrentRms;
  const coreLossFactor = coreType === 'laminated' ? 0.05 : 0.25; // 5% vs 25% iron losses
  const copperLossPrimary = Math.pow((powerOutput / primaryVoltageRms), 2) * 2.0;
  const copperLossSecondary = Math.pow(secondaryCurrentRms, 2) * 0.5;
  const totalPowerLoss = powerOutput * coreLossFactor + copperLossPrimary + copperLossSecondary;
  const powerInput = powerOutput + totalPowerLoss;
  const primaryCurrentRms = powerInput / primaryVoltageRms;
  const efficiency = calculateTransformerEfficiency(
    secondaryVoltageRms,
    secondaryCurrentRms,
    primaryVoltageRms,
    primaryCurrentRms
  );

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localPhase = phaseRef.current;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      if (mode === 'potentiometer') {
        // Draw Potentiometer Lab
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, w, h);

        // Driver Circuit Header & Meter Board
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(40, 30, w - 80, 70);
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(40, 30, w - 80, 70);

        // Driver Battery Symbol
        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Driver Cell: E₀ = ${driverEmf.toFixed(1)} V`, 60, 55);
        ctx.font = '11px sans-serif';
        ctx.fillStyle = '#475569';
        ctx.fillText(`Rheostat R_h = ${driverRheostat.toFixed(1)} Ω`, 60, 75);
        ctx.fillText(`Driver Current I_d = ${(driverCurrent * 1000).toFixed(1)} mA`, 250, 75);
        ctx.fillText(`Wire Gradient k = ${(potentialGradient * 100).toFixed(2)} V/m`, 440, 75);

        // Potentiometer Slide Wire AB (0 - 100 cm)
        const wireStartX = 80;
        const wireEndX = w - 80;
        const wireY = 160;
        const wirePixelLength = wireEndX - wireStartX;

        // Wooden board backing
        ctx.fillStyle = '#F1F5F9';
        ctx.fillRect(wireStartX - 20, wireY - 25, wirePixelLength + 40, 60);
        ctx.strokeStyle = '#94A3B8';
        ctx.strokeRect(wireStartX - 20, wireY - 25, wirePixelLength + 40, 60);

        // Scale markings
        ctx.fillStyle = '#64748B';
        ctx.font = '9px monospace';
        for (let cm = 0; cm <= 100; cm += 10) {
          const markX = wireStartX + (cm / 100) * wirePixelLength;
          ctx.beginPath();
          ctx.moveTo(markX, wireY - 15);
          ctx.lineTo(markX, wireY - 5);
          ctx.stroke();
          ctx.fillText(`${cm}`, markX - 6, wireY - 18);
        }

        // Resistance wire (Golden manganin/constantan)
        ctx.strokeStyle = '#D97706';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(wireStartX, wireY);
        ctx.lineTo(wireEndX, wireY);
        ctx.stroke();

        // Terminals A and B
        ctx.fillStyle = '#B45309';
        ctx.beginPath();
        ctx.arc(wireStartX, wireY, 6, 0, Math.PI * 2);
        ctx.arc(wireEndX, wireY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('A (0 cm)', wireStartX - 25, wireY + 22);
        ctx.fillText('B (100 cm)', wireEndX - 10, wireY + 22);

        // Sliding Jockey
        const jockeyX = wireStartX + (jockeyPositionCm / 100) * wirePixelLength;
        ctx.strokeStyle = '#0F766E';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(jockeyX, wireY);
        ctx.lineTo(jockeyX, wireY + 30);
        ctx.stroke();

        // Jockey knife-edge contact
        ctx.fillStyle = '#0F766E';
        ctx.beginPath();
        ctx.moveTo(jockeyX - 5, wireY);
        ctx.lineTo(jockeyX + 5, wireY);
        ctx.lineTo(jockeyX, wireY + 8);
        ctx.closePath();
        ctx.fill();

        // Jockey position label
        ctx.fillStyle = '#0F766E';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`J: ${jockeyPositionCm.toFixed(1)} cm`, jockeyX - 25, wireY + 45);

        // Center-Zero Galvanometer Display
        const galvoCenterX = w / 2;
        const galvoCenterY = 270;
        const galvoRadius = 45;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(galvoCenterX, galvoCenterY, galvoRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Galvanometer scale (-30 to +30 deg)
        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('G', galvoCenterX - 4, galvoCenterY - 20);
        ctx.font = '8px monospace';
        ctx.fillText('0', galvoCenterX - 3, galvoCenterY - 32);
        ctx.fillText('-G', galvoCenterX - 32, galvoCenterY - 20);
        ctx.fillText('+G', galvoCenterX + 20, galvoCenterY - 20);

        // Needle
        const needleAngle = (-Math.PI / 2) + (galvoDeflection / 50) * (Math.PI / 4);
        ctx.strokeStyle = isBalanced ? '#059669' : '#DC2626';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(galvoCenterX, galvoCenterY);
        ctx.lineTo(
          galvoCenterX + Math.cos(needleAngle) * 32,
          galvoCenterY + Math.sin(needleAngle) * 32
        );
        ctx.stroke();

        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(galvoCenterX, galvoCenterY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Null detector status badge
        if (isBalanced) {
          ctx.fillStyle = '#ECFDF5';
          ctx.fillRect(galvoCenterX - 55, galvoCenterY + 50, 110, 22);
          ctx.strokeStyle = '#059669';
          ctx.strokeRect(galvoCenterX - 55, galvoCenterY + 50, 110, 22);
          ctx.fillStyle = '#059669';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('NULL BALANCE (0)', galvoCenterX - 45, galvoCenterY + 65);
        } else {
          ctx.fillStyle = '#F8FAFC';
          ctx.fillRect(galvoCenterX - 65, galvoCenterY + 50, 130, 22);
          ctx.strokeStyle = '#CBD5E1';
          ctx.strokeRect(galvoCenterX - 65, galvoCenterY + 50, 130, 22);
          ctx.fillStyle = '#64748B';
          ctx.font = '10px sans-serif';
          ctx.fillText(`ΔV = ${voltageDifference > 0 ? '+' : ''}${voltageDifference.toFixed(3)} V`, galvoCenterX - 40, galvoCenterY + 65);
        }

        // Secondary Test Cell Box
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(80, 230, 200, 75);
        ctx.strokeStyle = '#94A3B8';
        ctx.strokeRect(80, 230, 200, 75);

        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`Test Cell: E_x = ${testCellEmf.toFixed(2)} V`, 90, 250);
        ctx.font = '10px sans-serif';
        ctx.fillStyle = '#475569';
        ctx.fillText(`Internal r = ${testCellInternalR.toFixed(1)} Ω`, 90, 268);
        ctx.fillText(`Shunt R_s = ${shuntResistor.toFixed(1)} Ω [Key: ${isKeyClosed ? 'CLOSED' : 'OPEN'}]`, 90, 286);
      } else {
        // Draw Transformer Lab
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, w, h);

        // Core dimensions
        const coreX = w / 2 - 140;
        const coreY = 70;
        const coreW = 280;
        const coreH = 200;
        const coreThick = 50;

        // Core laminations pattern
        ctx.fillStyle = coreType === 'laminated' ? '#94A3B8' : '#475569';
        ctx.fillRect(coreX, coreY, coreW, coreH);
        ctx.clearRect(coreX + coreThick, coreY + coreThick, coreW - 2 * coreThick, coreH - 2 * coreThick);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.strokeRect(coreX, coreY, coreW, coreH);
        ctx.strokeRect(coreX + coreThick, coreY + coreThick, coreW - 2 * coreThick, coreH - 2 * coreThick);

        if (coreType === 'laminated') {
          ctx.strokeStyle = '#CBD5E1';
          ctx.lineWidth = 1;
          for (let ly = coreY; ly < coreY + coreH; ly += 6) {
            ctx.beginPath();
            ctx.moveTo(coreX, ly);
            ctx.lineTo(coreX + coreThick, ly);
            ctx.moveTo(coreX + coreW - coreThick, ly);
            ctx.lineTo(coreX + coreW, ly);
            ctx.stroke();
          }
        }

        // Primary Winding (Copper Red on Left Limb)
        ctx.fillStyle = '#EA580C';
        const pTurnsDrawn = Math.min(18, Math.max(6, Math.round(primaryTurns / 30)));
        const turnStepP = (coreH - 2 * coreThick - 10) / pTurnsDrawn;
        for (let i = 0; i < pTurnsDrawn; i++) {
          const ty = coreY + coreThick + 5 + i * turnStepP;
          ctx.fillRect(coreX - 8, ty, coreThick + 16, 5);
        }

        // Secondary Winding (Teal on Right Limb)
        ctx.fillStyle = '#0F766E';
        const sTurnsDrawn = Math.min(18, Math.max(6, Math.round(secondaryTurns / 30)));
        const turnStepS = (coreH - 2 * coreThick - 10) / sTurnsDrawn;
        for (let i = 0; i < sTurnsDrawn; i++) {
          const ty = coreY + coreThick + 5 + i * turnStepS;
          ctx.fillRect(coreX + coreW - coreThick - 8, ty, coreThick + 16, 5);
        }

        // Animated Magnetic Flux in Core
        if (isPlaying) {
          localPhase += 0.08;
          phaseRef.current = localPhase;
        }

        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);
        ctx.lineDashOffset = -localPhase * 15;
        const fluxInset = coreThick / 2;
        ctx.strokeRect(
          coreX + fluxInset,
          coreY + fluxInset,
          coreW - 2 * fluxInset,
          coreH - 2 * fluxInset
        );
        ctx.setLineDash([]); // Reset dash

        // Labels
        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`Primary: N_p = ${primaryTurns} turns`, coreX - 80, coreY + 30);
        ctx.fillText(`Secondary: N_s = ${secondaryTurns} turns`, coreX + coreW - 40, coreY + 30);

        // Sinusoidal Oscilloscope Displays
        // Primary Scope (Left)
        const scopeW = 160;
        const scopeH = 65;
        const scopeY = coreY + coreH + 20;

        ctx.fillStyle = '#0F172A';
        ctx.fillRect(40, scopeY, scopeW, scopeH);
        ctx.strokeStyle = '#334155';
        ctx.strokeRect(40, scopeY, scopeW, scopeH);

        ctx.strokeStyle = '#F97316';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const y = scopeY + scopeH / 2 - Math.sin(t) * 22;
          if (x === 0) ctx.moveTo(40 + x, y);
          else ctx.lineTo(40 + x, y);
        }
        ctx.stroke();

        ctx.fillStyle = '#FED7AA';
        ctx.font = '9px monospace';
        ctx.fillText(`V_p = ${primaryVoltageRms} V (RMS)`, 45, scopeY + 12);
        ctx.fillText(`I_p = ${primaryCurrentRms.toFixed(2)} A`, 45, scopeY + scopeH - 6);

        // Secondary Scope (Right)
        ctx.fillStyle = '#0F172A';
        ctx.fillRect(w - scopeW - 40, scopeY, scopeW, scopeH);
        ctx.strokeStyle = '#334155';
        ctx.strokeRect(w - scopeW - 40, scopeY, scopeW, scopeH);

        ctx.strokeStyle = '#2DD4BF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const ampRatio = Math.min(1.4, Math.max(0.2, secondaryVoltageRms / (primaryVoltageRms || 1)));
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const y = scopeY + scopeH / 2 - Math.sin(t) * 22 * ampRatio;
          if (x === 0) ctx.moveTo(w - scopeW - 40 + x, y);
          else ctx.lineTo(w - scopeW - 40 + x, y);
        }
        ctx.stroke();

        ctx.fillStyle = '#99F6E4';
        ctx.font = '9px monospace';
        ctx.fillText(`V_s = ${secondaryVoltageRms.toFixed(1)} V (RMS)`, w - scopeW - 35, scopeY + 12);
        ctx.fillText(`I_s = ${secondaryCurrentRms.toFixed(2)} A`, w - scopeW - 35, scopeY + scopeH - 6);
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [
    mode,
    isPlaying,
    driverEmf,
    driverRheostat,
    wireResistance,
    testCellEmf,
    testCellInternalR,
    shuntResistor,
    isKeyClosed,
    jockeyPositionCm,
    primaryVoltageRms,
    primaryTurns,
    secondaryTurns,
    loadResistance,
    coreType,
    driverCurrent,
    potentialGradient,
    jockeyVoltage,
    effectiveCellVoltage,
    galvoDeflection,
    voltageDifference,
    isBalanced,
    secondaryVoltageRms,
    secondaryCurrentRms,
    primaryCurrentRms,
  ]);

  const t = {
    en: {
      title: 'Current Electricity & Circuit Laboratory',
      subtitle:
        'Interactive 60fps simulation: investigate potentiometer balance conditions, determine cell internal resistance, and analyze transformer step-up/step-down induction and real core losses.',
      modePot: 'Potentiometer & Internal Resistance Lab',
      modeTrans: 'AC Transformer & Power Loss Analyzer',
      driverControls: 'Potentiometer Driver Circuit',
      secondaryControls: 'Test Cell & Shunt Circuit',
      transformerControls: 'Transformer Parameters',
      telemetry: 'Real-Time Physics Telemetry',
      jockeySlider: 'Sliding Jockey Position (cm):',
      keyToggle: isKeyClosed ? 'Open Shunt Key (Measure E_x)' : 'Close Shunt Key (Measure r)',
      autoBalance: 'Auto-Seek Null Balance Point',
      reset: 'Reset Defaults',
    },
    si: {
      title: 'ධාරා විද්‍යුතය සහ පරිපථ විද්‍යාගාරය',
      subtitle:
        'අන්තර්ක්‍රියාකාරී 60fps සමාකරණය: විභවමාන සමතුලිතතා කොන්දේසි ගවේෂණය, කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය සෙවීම සහ AC පරිණාමක ප්‍රේරණය හා ක්ෂමතා හානි විශ්ලේෂණය.',
      modePot: 'විභවමානය සහ අභ්‍යන්තර ප්‍රතිරෝධ පරීක්ෂණය',
      modeTrans: 'AC පරිණාමකය සහ ක්ෂමතා හානි විශ්ලේෂකය',
      driverControls: 'විභවමාන ධාවක පරිපථය',
      secondaryControls: 'පරීක්ෂා කෝෂය සහ ෂන්ට් පරිපථය',
      transformerControls: 'පරිණාමක පරාමිතීන්',
      telemetry: 'තත්කාලීන භෞතික දත්ත පුවරුව',
      jockeySlider: 'සර්පණ විදින පිහිටුම (cm):',
      keyToggle: isKeyClosed ? 'ෂන්ට් යතුර අරින්න (E_x මැනීමට)' : 'ෂන්ට් යතුර වසන්න (r මැනීමට)',
      autoBalance: 'ශුන්‍ය සමතුලිත ලක්ෂ්‍යයට ස්වයංක්‍රීයව යන්න',
      reset: 'යථා තත්ත්වයට පත් කරන්න',
    },
  }[locale];

  const handleAutoSeekBalance = () => {
    setJockeyPositionCm(parseFloat(theoreticalBalanceLengthCm.toFixed(1)));
  };

  const handleReset = () => {
    if (mode === 'potentiometer') {
      setDriverEmf(4.0);
      setDriverRheostat(10.0);
      setTestCellEmf(1.5);
      setTestCellInternalR(2.5);
      setShuntResistor(5.0);
      setIsKeyClosed(false);
      setJockeyPositionCm(50.0);
    } else {
      setPrimaryVoltageRms(230);
      setPrimaryTurns(500);
      setSecondaryTurns(100);
      setLoadResistance(20);
      setCoreType('laminated');
    }
  };

  return (
    <Card className="border border-slate-200 bg-white shadow-xs">
      <CardHeader className="border-b border-slate-100 bg-[#F6FAFD]/70 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0F766E]/10 text-[#0F766E] mb-2 font-mono">
              UNIT 08 • INTERACTIVE SIMULATOR
            </div>
            <CardTitle className="text-xl sm:text-2xl font-serif text-[#14243A]">
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={mode === 'potentiometer' ? 'default' : 'outline'}
              onClick={() => setMode('potentiometer')}
              className={
                mode === 'potentiometer'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modePot}
            </Button>
            <Button
              size="sm"
              variant={mode === 'transformer' ? 'default' : 'outline'}
              onClick={() => setMode('transformer')}
              className={
                mode === 'transformer'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeTrans}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-6">
        {/* Canvas Area */}
        <div className="relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-inner flex justify-center">
          <canvas
            ref={canvasRef}
            width={720}
            height={380}
            className="w-full max-w-[720px] h-[380px] block"
          />
        </div>

        {/* Control Sliders & Switches */}
        {mode === 'potentiometer' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Driver Circuit Parameters */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block">
                {t.driverControls}
              </span>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Driver EMF E₀:</span>
                  <span className="font-mono font-bold">{driverEmf.toFixed(1)} V</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="8.0"
                  step="0.5"
                  value={driverEmf}
                  onChange={(e) => setDriverEmf(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Rheostat R_h:</span>
                  <span className="font-mono font-bold">{driverRheostat.toFixed(1)} Ω</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="30.0"
                  step="1.0"
                  value={driverRheostat}
                  onChange={(e) => setDriverRheostat(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-xs text-[#475569] mb-1">
                  <span className="font-semibold">{t.jockeySlider}</span>
                  <span className="font-mono font-bold text-[#0F766E]">
                    {jockeyPositionCm.toFixed(1)} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="100.0"
                  step="0.2"
                  value={jockeyPositionCm}
                  onChange={(e) => setJockeyPositionCm(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
            </div>

            {/* Test Cell Circuit Parameters */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block mb-2">
                  {t.secondaryControls}
                </span>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Test Cell EMF E_x:</span>
                    <span className="font-mono font-bold">{testCellEmf.toFixed(2)} V</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="2.5"
                    step="0.05"
                    value={testCellEmf}
                    onChange={(e) => setTestCellEmf(parseFloat(e.target.value))}
                    className="w-full accent-[#0F766E]"
                  />
                </div>

                <div className="space-y-1 mt-2">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Cell Internal r:</span>
                    <span className="font-mono font-bold">{testCellInternalR.toFixed(1)} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.5"
                    value={testCellInternalR}
                    onChange={(e) => setTestCellInternalR(parseFloat(e.target.value))}
                    className="w-full accent-[#0F766E]"
                  />
                </div>

                <div className="space-y-1 mt-2">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Shunt Resistance R_s:</span>
                    <span className="font-mono font-bold">{shuntResistor.toFixed(1)} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="20.0"
                    step="0.5"
                    value={shuntResistor}
                    onChange={(e) => setShuntResistor(parseFloat(e.target.value))}
                    className="w-full accent-[#0F766E]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
                <Button
                  size="sm"
                  variant={isKeyClosed ? 'default' : 'outline'}
                  onClick={() => setIsKeyClosed(!isKeyClosed)}
                  className={`text-xs ${
                    isKeyClosed ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white' : ''
                  }`}
                >
                  {t.keyToggle}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleAutoSeekBalance}
                  className="text-xs text-[#0F766E]"
                >
                  {t.autoBalance}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleReset}
                  className="text-xs text-slate-500"
                >
                  {t.reset}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary & Secondary Coil Controls */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block">
                {t.transformerControls}
              </span>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Primary Voltage V_p (RMS):</span>
                  <span className="font-mono font-bold">{primaryVoltageRms} V</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="240"
                  step="10"
                  value={primaryVoltageRms}
                  onChange={(e) => setPrimaryVoltageRms(parseInt(e.target.value, 10))}
                  className="w-full accent-[#0F766E]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Primary Turns N_p:</span>
                  <span className="font-mono font-bold">{primaryTurns}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={primaryTurns}
                  onChange={(e) => setPrimaryTurns(parseInt(e.target.value, 10))}
                  className="w-full accent-[#0F766E]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Secondary Turns N_s:</span>
                  <span className="font-mono font-bold">{secondaryTurns}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="20"
                  value={secondaryTurns}
                  onChange={(e) => setSecondaryTurns(parseInt(e.target.value, 10))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
            </div>

            {/* Core Type & Load Controls */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block mb-2">
                  Load & Core Configuration
                </span>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Secondary Load Resistance R_L:</span>
                    <span className="font-mono font-bold">{loadResistance} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={loadResistance}
                    onChange={(e) => setLoadResistance(parseInt(e.target.value, 10))}
                    className="w-full accent-[#0F766E]"
                  />
                </div>

                <div className="mt-3">
                  <span className="text-xs text-[#475569] block mb-1.5 font-medium">
                    Transformer Core Construction:
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant={coreType === 'laminated' ? 'default' : 'outline'}
                      onClick={() => setCoreType('laminated')}
                      className={`text-xs ${
                        coreType === 'laminated'
                          ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white'
                          : ''
                      }`}
                    >
                      Laminated Sheets (Low Eddy Loss)
                    </Button>
                    <Button
                      size="sm"
                      variant={coreType === 'solid' ? 'default' : 'outline'}
                      onClick={() => setCoreType('solid')}
                      className={`text-xs ${
                        coreType === 'solid'
                          ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white'
                          : ''
                      }`}
                    >
                      Solid Iron Core (High Eddy Loss)
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-xs flex items-center gap-1 text-[#0F766E]"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? 'Pause Flux' : 'Play Flux'}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleReset}
                  className="text-xs text-slate-500"
                >
                  {t.reset}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Real-time Telemetry Card */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
              {t.telemetry}
            </span>
          </div>

          {mode === 'potentiometer' ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Wire Potential Gradient k</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {(potentialGradient * 100).toFixed(3)} V m⁻¹
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Theoretical Balance l</span>
                <span className="font-mono font-bold text-[#0F766E]">
                  {theoreticalBalanceLengthCm.toFixed(1)} cm
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Galvanometer State</span>
                <span
                  className={`font-mono font-bold ${
                    isBalanced ? 'text-emerald-700' : 'text-amber-700'
                  }`}
                >
                  {isBalanced ? 'BALANCED (0 A)' : `${galvoDeflection > 0 ? '+' : ''}${galvoDeflection.toFixed(0)} div`}
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Derived Internal r</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {calculatedInternalR !== null ? `${calculatedInternalR.toFixed(2)} Ω` : 'Open Key'}
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Turns Ratio (N_s / N_p)</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {(secondaryTurns / primaryTurns).toFixed(3)}{' '}
                  {secondaryTurns > primaryTurns ? '(Step-Up)' : '(Step-Down)'}
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Secondary V_s (RMS)</span>
                <span className="font-mono font-bold text-[#0F766E]">
                  {secondaryVoltageRms.toFixed(1)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Load Power Delivered</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {powerOutput.toFixed(1)} W
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Transformer Efficiency η</span>
                <span className="font-mono font-bold text-emerald-700">
                  {efficiency.toFixed(1)}%
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

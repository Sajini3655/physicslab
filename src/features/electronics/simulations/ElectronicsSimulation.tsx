'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import {
  calculateFullWaveBridgeDcVoltage,
  calculateFullWaveRippleVoltage,
  calculateInvertingOpAmpGain,
  calculateInvertingOpAmpOutput,
  calculateNonInvertingOpAmpGain,
  calculateNonInvertingOpAmpOutput,
} from '../physics/calculations';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, Activity } from 'lucide-react';

interface ElectronicsSimulationProps {
  locale?: Locale;
}

type SimulationMode = 'rectifier' | 'opamp';

export const ElectronicsSimulation: React.FC<ElectronicsSimulationProps> = ({
  locale = 'en',
}) => {
  const [mode, setMode] = useState<SimulationMode>('rectifier');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Mode 1: Rectifier state
  const [inputPeakVoltage, setInputPeakVoltage] = useState<number>(12.0); // V
  const [loadResistance, setLoadResistance] = useState<number>(100); // Ω
  const [filterCapacitanceUf, setFilterCapacitanceUf] = useState<number>(470); // μF (0 for unfiltered)

  // Mode 2: Op-Amp state
  const [opAmpConfig, setOpAmpConfig] = useState<'inverting' | 'non-inverting'>('inverting');
  const [inputVoltageSignal, setInputVoltageSignal] = useState<number>(1.5); // V
  const [feedbackRfKohm, setFeedbackRfKohm] = useState<number>(40); // kΩ
  const [inputR1Kohm, setInputR1Kohm] = useState<number>(10); // kΩ
  const [supplyRailV, setSupplyRailV] = useState<number>(14.0); // ±Vsat

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);

  // Physics derivations for Rectifier
  const diodeDrop = 0.7; // Si diode
  const effectivePeak = Math.max(0, inputPeakVoltage - 2 * diodeDrop);
  const unfilteredVdc = calculateFullWaveBridgeDcVoltage(inputPeakVoltage, diodeDrop);
  const hasFilter = filterCapacitanceUf > 0;
  const cFarads = filterCapacitanceUf * 1e-6;
  const iDcEstimated = effectivePeak / loadResistance;
  const rippleVoltage = hasFilter
    ? Math.min(
        effectivePeak,
        calculateFullWaveRippleVoltage(iDcEstimated, 50, cFarads)
      )
    : effectivePeak;
  const filteredVdc = hasFilter
    ? effectivePeak - rippleVoltage / 2
    : unfilteredVdc;

  // Physics derivations for Op-Amp
  const rfOhms = feedbackRfKohm * 1000;
  const r1Ohms = inputR1Kohm * 1000;
  const opAmpGain =
    opAmpConfig === 'inverting'
      ? calculateInvertingOpAmpGain(rfOhms, r1Ohms)
      : calculateNonInvertingOpAmpGain(rfOhms, r1Ohms);
  const idealOpAmpOutput = inputVoltageSignal * opAmpGain;
  const actualOpAmpOutput =
    opAmpConfig === 'inverting'
      ? calculateInvertingOpAmpOutput(inputVoltageSignal, rfOhms, r1Ohms, supplyRailV)
      : calculateNonInvertingOpAmpOutput(inputVoltageSignal, rfOhms, r1Ohms, supplyRailV);
  const isOpAmpSaturated = Math.abs(idealOpAmpOutput) > supplyRailV;

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

      if (isPlaying) {
        localPhase += 0.05;
        phaseRef.current = localPhase;
      }

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, w, h);

      if (mode === 'rectifier') {
        // --- DRAW BRIDGE RECTIFIER & OSCILLOSCOPE ---
        // Upper schematic: Bridge schematic
        const bx = 160;
        const by = 80;
        const bSize = 60;

        // Bridge Diamond
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(bx, by - bSize);
        ctx.lineTo(bx + bSize, by);
        ctx.lineTo(bx, by + bSize);
        ctx.lineTo(bx - bSize, by);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 4 Diodes representation
        ctx.fillStyle = '#0F766E';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('D₁', bx - 30, by - 25);
        ctx.fillText('D₂', bx + 18, by - 25);
        ctx.fillText('D₃', bx - 30, by + 35);
        ctx.fillText('D₄', bx + 18, by + 35);

        // AC Input label
        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`AC Source: ${inputPeakVoltage.toFixed(1)} V_peak (50 Hz)`, 20, 30);

        // Filter and Load representation
        ctx.fillStyle = '#475569';
        ctx.font = '11px sans-serif';
        ctx.fillText(`Load Resistor R_L = ${loadResistance} Ω`, 300, 70);
        ctx.fillText(`Filter Capacitor C = ${filterCapacitanceUf} μF`, 300, 95);

        // Oscilloscope Dual Screen
        const scopeX = 40;
        const scopeY = 165;
        const scopeW = w - 80;
        const scopeH = 180;

        ctx.fillStyle = '#0F172A';
        ctx.fillRect(scopeX, scopeY, scopeW, scopeH);
        ctx.strokeStyle = '#1E293B';
        ctx.lineWidth = 1;
        ctx.strokeRect(scopeX, scopeY, scopeW, scopeH);

        // Scope Grid
        ctx.strokeStyle = '#1E293B';
        for (let gx = scopeX; gx < scopeX + scopeW; gx += 40) {
          ctx.beginPath();
          ctx.moveTo(gx, scopeY);
          ctx.lineTo(gx, scopeY + scopeH);
          ctx.stroke();
        }
        for (let gy = scopeY; gy < scopeY + scopeH; gy += 30) {
          ctx.beginPath();
          ctx.moveTo(scopeX, gy);
          ctx.lineTo(scopeX + scopeW, gy);
          ctx.stroke();
        }

        // Center line
        const midY = scopeY + scopeH / 2;
        ctx.strokeStyle = '#334155';
        ctx.beginPath();
        ctx.moveTo(scopeX, midY);
        ctx.lineTo(scopeX + scopeW, midY);
        ctx.stroke();

        // Wave 1: Input AC (Cyan, dashed)
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const vIn = Math.sin(t) * (inputPeakVoltage / 24) * 60;
          const y = midY - vIn;
          if (x === 0) ctx.moveTo(scopeX + x, y);
          else ctx.lineTo(scopeX + x, y);
        }
        ctx.stroke();
        ctx.setLineDash([]); // Reset dash

        // Wave 2: Rectified & Filtered Output (Amber / Gold)
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const rectified = Math.abs(Math.sin(t));
          let vOutScaled = 0;

          if (!hasFilter) {
            vOutScaled = rectified * (effectivePeak / 24) * 60;
          } else {
            // Ripple smoothing curve
            const rippleRatio = rippleVoltage / (effectivePeak || 1);
            const smoothed = 1 - rippleRatio * 0.5 * (1 - Math.sin(2 * t));
            vOutScaled = smoothed * (effectivePeak / 24) * 60;
          }

          const y = midY - vOutScaled;
          if (x === 0) ctx.moveTo(scopeX + x, y);
          else ctx.lineTo(scopeX + x, y);
        }
        ctx.stroke();

        // Scope Legend
        ctx.fillStyle = '#38BDF8';
        ctx.font = '10px monospace';
        ctx.fillText('--- Input V_in(t) [AC]', scopeX + 10, scopeY + 20);

        ctx.fillStyle = '#F59E0B';
        ctx.fillText(
          hasFilter
            ? '— Filtered DC Output V_out(t)'
            : '— Unfiltered Full-Wave DC V_out(t)',
          scopeX + 180,
          scopeY + 20
        );
      } else {
        // --- DRAW OP-AMP CIRCUIT & INPUT/OUTPUT WAVEFORMS ---
        const opX = 220;
        const opY = 90;
        const opW = 100;
        const opH = 90;

        // Op-Amp Triangle
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#1E293B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(opX, opY - opH / 2);
        ctx.lineTo(opX + opW, opY);
        ctx.lineTo(opX, opY + opH / 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Terminals
        ctx.fillStyle = '#14243A';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('-', opX + 10, opY - 15);
        ctx.fillText('+', opX + 10, opY + 25);

        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(`Op-Amp: ${opAmpConfig.toUpperCase()}`, 40, 30);
        ctx.fillStyle = '#475569';
        ctx.font = '11px sans-serif';
        ctx.fillText(`Input Signal: V_in = ${inputVoltageSignal.toFixed(2)} V`, 40, 50);
        ctx.fillText(`R_in / R₁ = ${inputR1Kohm} kΩ,  R_f = ${feedbackRfKohm} kΩ`, 40, 70);
        ctx.fillText(`Dual Power Rails: ±${supplyRailV.toFixed(1)} V`, 40, 90);

        // Saturation warning badge
        if (isOpAmpSaturated) {
          ctx.fillStyle = '#FEE2E2';
          ctx.fillRect(opX + opW + 40, opY - 30, 160, 45);
          ctx.strokeStyle = '#DC2626';
          ctx.strokeRect(opX + opW + 40, opY - 30, 160, 45);
          ctx.fillStyle = '#DC2626';
          ctx.font = 'bold 10px sans-serif';
          ctx.fillText('RAIL SATURATION ACTIVE', opX + opW + 50, opY - 12);
          ctx.font = '9px sans-serif';
          ctx.fillText(`Clipped at ±${supplyRailV.toFixed(1)} V`, opX + opW + 50, opY + 5);
        }

        // Oscilloscope Display
        const scopeX = 40;
        const scopeY = 165;
        const scopeW = w - 80;
        const scopeH = 180;

        ctx.fillStyle = '#0F172A';
        ctx.fillRect(scopeX, scopeY, scopeW, scopeH);
        ctx.strokeStyle = '#1E293B';
        ctx.strokeRect(scopeX, scopeY, scopeW, scopeH);

        const midY = scopeY + scopeH / 2;
        ctx.strokeStyle = '#334155';
        ctx.beginPath();
        ctx.moveTo(scopeX, midY);
        ctx.lineTo(scopeX + scopeW, midY);
        ctx.stroke();

        // Saturation rail lines (+Vsat, -Vsat)
        const satOffset = (supplyRailV / 15) * 70;
        ctx.strokeStyle = '#EF4444';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(scopeX, midY - satOffset);
        ctx.lineTo(scopeX + scopeW, midY - satOffset);
        ctx.moveTo(scopeX, midY + satOffset);
        ctx.lineTo(scopeX + scopeW, midY + satOffset);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#FCA5A5';
        ctx.font = '9px monospace';
        ctx.fillText(`+V_sat (+${supplyRailV}V)`, scopeX + scopeW - 100, midY - satOffset - 4);
        ctx.fillText(`-V_sat (-${supplyRailV}V)`, scopeX + scopeW - 100, midY + satOffset + 12);

        // Sinusoidal Input (Cyan)
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const vIn = Math.sin(t) * inputVoltageSignal;
          const y = midY - (vIn / 15) * 70;
          if (x === 0) ctx.moveTo(scopeX + x, y);
          else ctx.lineTo(scopeX + x, y);
        }
        ctx.stroke();

        // Output Signal with Saturation Clipping (Amber)
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let x = 0; x < scopeW; x++) {
          const t = (x / scopeW) * 4 * Math.PI + localPhase;
          const vIn = Math.sin(t) * inputVoltageSignal;
          const idealOut = vIn * opAmpGain;
          const clippedOut = Math.max(-supplyRailV, Math.min(supplyRailV, idealOut));
          const y = midY - (clippedOut / 15) * 70;
          if (x === 0) ctx.moveTo(scopeX + x, y);
          else ctx.lineTo(scopeX + x, y);
        }
        ctx.stroke();

        ctx.fillStyle = '#38BDF8';
        ctx.font = '10px monospace';
        ctx.fillText('— Input V_in(t)', scopeX + 10, scopeY + 20);

        ctx.fillStyle = '#F59E0B';
        ctx.fillText(
          `— Output V_out(t) [Gain A_v = ${opAmpGain.toFixed(1)}]`,
          scopeX + 140,
          scopeY + 20
        );
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
    inputPeakVoltage,
    loadResistance,
    filterCapacitanceUf,
    opAmpConfig,
    inputVoltageSignal,
    feedbackRfKohm,
    inputR1Kohm,
    supplyRailV,
    effectivePeak,
    hasFilter,
    rippleVoltage,
    opAmpGain,
    isOpAmpSaturated,
  ]);

  const t = {
    en: {
      title: 'Electronics & Operational Amplifier Laboratory',
      subtitle:
        'Interactive 60fps simulation: analyze full-wave bridge rectification, capacitor filter ripple voltage, inverting and non-inverting Op-Amps, and supply rail saturation.',
      modeRectifier: 'Diode Bridge Rectifier & Filter',
      modeOpAmp: 'Operational Amplifier & Saturation Lab',
      rectifierControls: 'Rectifier & Filter Parameters',
      opAmpControls: 'Op-Amp Circuit Parameters',
      telemetry: 'Real-Time Physics Telemetry',
      reset: 'Reset Defaults',
    },
    si: {
      title: 'ඉලෙක්ට්‍රොනික සහ ක්‍රියාකාරී වර්ධක විද්‍යාගාරය',
      subtitle:
        'අන්තර්ක්‍රියාකාරී 60fps සමාකරණය: පූර්ණ-තරංග සේතු සෘජුකරණය, ධාරිත්‍රක පෙරහන් රැළිති වෝල්ටීයතාව, ප්‍රතිලෝම හා අප්‍රතිලෝම Op-Amp සහ රේල් සන්තෘප්තිය ගවේෂණය.',
      modeRectifier: 'ඩයෝඩ සේතු සෘජුකාරකය සහ පෙරහන',
      modeOpAmp: 'ක්‍රියාකාරී වර්ධකය (Op-Amp) සහ සන්තෘප්තිය',
      rectifierControls: 'සෘජුකාරක සහ පෙරහන් පරාමිතීන්',
      opAmpControls: 'ක්‍රියාකාරී වර්ධක පරාමිතීන්',
      telemetry: 'තත්කාලීන භෞතික දත්ත පුවරුව',
      reset: 'යථා තත්ත්වයට පත් කරන්න',
    },
  }[locale];

  const handleReset = () => {
    if (mode === 'rectifier') {
      setInputPeakVoltage(12.0);
      setLoadResistance(100);
      setFilterCapacitanceUf(470);
    } else {
      setOpAmpConfig('inverting');
      setInputVoltageSignal(1.5);
      setFeedbackRfKohm(40);
      setInputR1Kohm(10);
      setSupplyRailV(14.0);
    }
  };

  return (
    <Card className="border border-slate-200 bg-white shadow-xs">
      <CardHeader className="border-b border-slate-100 bg-[#F6FAFD]/70 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0F766E]/10 text-[#0F766E] mb-2 font-mono">
              UNIT 09 • INTERACTIVE SIMULATOR
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
              variant={mode === 'rectifier' ? 'default' : 'outline'}
              onClick={() => setMode('rectifier')}
              className={
                mode === 'rectifier'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeRectifier}
            </Button>
            <Button
              size="sm"
              variant={mode === 'opamp' ? 'default' : 'outline'}
              onClick={() => setMode('opamp')}
              className={
                mode === 'opamp'
                  ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs'
                  : 'text-xs'
              }
            >
              {t.modeOpAmp}
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
            height={360}
            className="w-full max-w-[720px] h-[360px] block"
          />
        </div>

        {/* Controls Grid */}
        {mode === 'rectifier' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block">
                {t.rectifierControls}
              </span>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>AC Input Peak Voltage V_peak:</span>
                  <span className="font-mono font-bold">{inputPeakVoltage.toFixed(1)} V</span>
                </div>
                <input
                  type="range"
                  min="6.0"
                  max="24.0"
                  step="0.5"
                  value={inputPeakVoltage}
                  onChange={(e) => setInputPeakVoltage(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Load Resistance R_L:</span>
                  <span className="font-mono font-bold">{loadResistance} Ω</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={loadResistance}
                  onChange={(e) => setLoadResistance(parseInt(e.target.value, 10))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block mb-2">
                  Capacitor Smoothing Filter
                </span>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Filter Capacitance C:</span>
                    <span className="font-mono font-bold">
                      {filterCapacitanceUf === 0 ? 'No Filter (0 μF)' : `${filterCapacitanceUf} μF`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2200"
                    step="50"
                    value={filterCapacitanceUf}
                    onChange={(e) => setFilterCapacitanceUf(parseInt(e.target.value, 10))}
                    className="w-full accent-[#0F766E]"
                  />
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
                  {isPlaying ? 'Pause Wave' : 'Play Wave'}
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
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block">
                {t.opAmpControls}
              </span>

              <div className="flex items-center gap-2 mb-2">
                <Button
                  size="sm"
                  variant={opAmpConfig === 'inverting' ? 'default' : 'outline'}
                  onClick={() => setOpAmpConfig('inverting')}
                  className={`text-xs ${
                    opAmpConfig === 'inverting'
                      ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white'
                      : ''
                  }`}
                >
                  Inverting Mode (180° Inversion)
                </Button>
                <Button
                  size="sm"
                  variant={opAmpConfig === 'non-inverting' ? 'default' : 'outline'}
                  onClick={() => setOpAmpConfig('non-inverting')}
                  className={`text-xs ${
                    opAmpConfig === 'non-inverting'
                      ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white'
                      : ''
                  }`}
                >
                  Non-Inverting Mode (0° In-Phase)
                </Button>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Input Voltage V_in:</span>
                  <span className="font-mono font-bold">{inputVoltageSignal.toFixed(2)} V</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={inputVoltageSignal}
                  onChange={(e) => setInputVoltageSignal(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14243A] block mb-2">
                  Gain Resistors & Supply Rails
                </span>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Feedback Resistor R_f:</span>
                    <span className="font-mono font-bold">{feedbackRfKohm} kΩ</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={feedbackRfKohm}
                    onChange={(e) => setFeedbackRfKohm(parseInt(e.target.value, 10))}
                    className="w-full accent-[#0F766E]"
                  />
                </div>

                <div className="space-y-1 mt-2">
                  <div className="flex justify-between text-xs text-[#475569]">
                    <span>Input Resistor R_in / R₁:</span>
                    <span className="font-mono font-bold">{inputR1Kohm} kΩ</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={inputR1Kohm}
                    onChange={(e) => setInputR1Kohm(parseInt(e.target.value, 10))}
                    className="w-full accent-[#0F766E]"
                  />
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
                  {isPlaying ? 'Pause Signal' : 'Play Signal'}
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

        {/* Real-Time Telemetry */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
              {t.telemetry}
            </span>
          </div>

          {mode === 'rectifier' ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Peak Output (2 Diodes)</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {effectivePeak.toFixed(2)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">DC Output Voltage</span>
                <span className="font-mono font-bold text-[#0F766E]">
                  {filteredVdc.toFixed(2)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Ripple Voltage V_r</span>
                <span className="font-mono font-bold text-amber-700">
                  {rippleVoltage.toFixed(2)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Filter Status</span>
                <span className="font-mono font-bold text-emerald-700">
                  {hasFilter ? 'Capacitor Smoothed' : 'Pulsating DC'}
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Theoretical Gain A_v</span>
                <span className="font-mono font-bold text-[#14243A]">
                  {opAmpGain.toFixed(2)}
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Ideal Peak Output</span>
                <span className="font-mono font-bold text-[#0F766E]">
                  {idealOpAmpOutput.toFixed(2)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Actual Output</span>
                <span className="font-mono font-bold text-teal-700">
                  {actualOpAmpOutput.toFixed(2)} V
                </span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <span className="text-[#475569] block text-[11px]">Operating Region</span>
                <span
                  className={`font-mono font-bold ${
                    isOpAmpSaturated ? 'text-rose-700' : 'text-emerald-700'
                  }`}
                >
                  {isOpAmpSaturated ? 'SATURATED (CLIPPED)' : 'LINEAR AMPLIFYING'}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

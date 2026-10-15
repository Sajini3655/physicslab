'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Flame, Activity } from 'lucide-react';
import { IDEAL_GAS_CONSTANT_R } from '../physics/calculations';

interface IdealGasThermodynamicsSimulationProps {
  locale?: Locale;
}

type ThermoProcess = 'isothermal' | 'isobaric' | 'isochoric' | 'adiabatic';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const IdealGasThermodynamicsSimulation: React.FC<
  IdealGasThermodynamicsSimulationProps
> = ({ locale = 'en' }) => {
  const [processType, setProcessType] = useState<ThermoProcess>('isothermal');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // State variables (n = 1.0 mol, gamma = 1.4 for diatomic gas, Cv = 5/2 R)
  const nMoles = 1.0;
  const gamma = 1.4;
  const cv = (5 / 2) * IDEAL_GAS_CONSTANT_R;

  // Initial State: V = 20.0 L (0.020 m^3), T = 300 K
  // P = nRT/V = 1 * 8.314 * 300 / 0.020 = 124,710 Pa = 124.7 kPa
  const [volumeL, setVolumeL] = useState<number>(20.0);
  const [tempK, setTempK] = useState<number>(300.0);

  // History trail for PV indicator diagram
  const [pvHistory, setPvHistory] = useState<Array<{ v: number; p: number }>>([
    { v: 20.0, p: 124.7 },
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  // Calculate Pressure (kPa)
  const volumeM3 = volumeL / 1000;
  const pressurePa = (nMoles * IDEAL_GAS_CONSTANT_R * tempK) / volumeM3;
  const pressureKPa = pressurePa / 1000;

  // Calculate thermodynamic quantities relative to reference state (V0 = 20L, T0 = 300K)
  const v0 = 20.0;
  const t0 = 300.0;
  const deltaT = tempK - t0;
  const deltaUJoules = nMoles * cv * deltaT;

  let workJoules = 0;
  if (processType === 'isothermal') {
    workJoules = nMoles * IDEAL_GAS_CONSTANT_R * tempK * Math.log(volumeL / v0);
  } else if (processType === 'isobaric') {
    workJoules = pressurePa * ((volumeL - v0) / 1000);
  } else if (processType === 'isochoric') {
    workJoules = 0;
  } else if (processType === 'adiabatic') {
    workJoules = -deltaUJoules;
  }
  const heatAddedJoules = deltaUJoules + workJoules;

  // Initialize particles
  useEffect(() => {
    const pts: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      pts.push({
        x: Math.random() * 120 + 20,
        y: Math.random() * 120 + 20,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
      });
    }
    particlesRef.current = pts;
  }, []);

  // Helper to record PV trajectory points without effect cascading
  const recordPvPoint = (v: number, t: number) => {
    const pPa = (nMoles * IDEAL_GAS_CONSTANT_R * t) / (v / 1000);
    const pKPa = pPa / 1000;
    setPvHistory((prev) => {
      const last = prev[prev.length - 1];
      if (!last || Math.abs(last.v - v) > 0.2 || Math.abs(last.p - pKPa) > 1.0) {
        return [...prev, { v, p: pKPa }].slice(-60);
      }
      return prev;
    });
  };

  // Handle process mode changes
  const handleProcessChange = (proc: ThermoProcess) => {
    setProcessType(proc);
    setVolumeL(20.0);
    setTempK(300.0);
    setPvHistory([{ v: 20.0, p: 124.7 }]);
  };

  // Slider controls based on process constraints
  const handleVolumeChange = (newV: number) => {
    setVolumeL(newV);
    let targetT = tempK;
    if (processType === 'isothermal') {
      targetT = tempK;
    } else if (processType === 'isobaric') {
      targetT = Number(((t0 * newV) / v0).toFixed(1));
      setTempK(targetT);
    } else if (processType === 'adiabatic') {
      targetT = Number((t0 * Math.pow(v0 / newV, gamma - 1)).toFixed(1));
      setTempK(targetT);
    }
    recordPvPoint(newV, targetT);
  };

  const handleTempChange = (newT: number) => {
    setTempK(newT);
    let targetV = volumeL;
    if (processType === 'isochoric') {
      targetV = volumeL;
    } else if (processType === 'isobaric') {
      targetV = Number(((v0 * newT) / t0).toFixed(1));
      setVolumeL(targetV);
    }
    recordPvPoint(targetV, newT);
  };

  // Animation Loop: cylinder + particles + PV indicator diagram
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Split canvas: Left = Cylinder (0 to w/2), Right = PV diagram (w/2 to w)
      const leftW = w * 0.48;
      const rightX = w * 0.52;
      const rightW = w * 0.46;

      // -------------------------------------------------------------
      // 1. LEFT PANEL: CYLINDER & MOLECULAR PARTICLES
      // -------------------------------------------------------------
      const cylX = 40;
      const cylY = 40;
      const cylW = leftW - 60;
      const cylMaxH = h - 90;

      // Piston height proportional to volume (range: 10L to 40L)
      // Height varies between 60px and cylMaxH - 20px
      const minH = 70;
      const maxH = cylMaxH - 30;
      const pistonHeightRatio = (volumeL - 10) / (40 - 10);
      const chamberH = Math.max(minH, Math.min(maxH, minH + pistonHeightRatio * (maxH - minH)));
      const pistonY = cylY + cylMaxH - chamberH;

      // Cylinder Walls (thick outline)
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(cylX, cylY, cylW, cylMaxH);

      // Gas chamber background tinted by temperature
      // 200K (cool cyan) to 500K (warm orange/red)
      const tempNormalized = Math.max(0, Math.min(1, (tempK - 200) / 300));
      const redVal = Math.round(180 + tempNormalized * 70);
      const blueVal = Math.round(240 - tempNormalized * 150);
      ctx.fillStyle = `rgba(${redVal}, 210, ${blueVal}, 0.25)`;
      ctx.fillRect(cylX, pistonY, cylW, chamberH);

      // Piston
      ctx.fillStyle = '#64748B';
      ctx.fillRect(cylX, pistonY - 14, cylW, 14);

      // Piston Rod
      ctx.fillStyle = '#475569';
      ctx.fillRect(cylX + cylW / 2 - 6, cylY - 15, 12, pistonY - cylY);

      // Cylinder Border
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cylX, cylY);
      ctx.lineTo(cylX, cylY + cylMaxH);
      ctx.lineTo(cylX + cylW, cylY + cylMaxH);
      ctx.lineTo(cylX + cylW, cylY);
      ctx.stroke();

      // Heat base visual
      if (processType === 'isothermal' || processType === 'isobaric' || processType === 'isochoric') {
        const heatColor = deltaT >= 0 ? '#EA580C' : '#0284C7';
        ctx.fillStyle = heatColor;
        ctx.fillRect(cylX + 15, cylY + cylMaxH + 4, cylW - 30, 8);
      }

      // Draw Particles
      const speedScale = Math.sqrt(tempK / 300);
      ctx.fillStyle = tempNormalized > 0.5 ? '#DC2626' : '#0284C7';
      const pts = particlesRef.current;
      pts.forEach((p) => {
        if (isPlaying) {
          p.x += p.vx * speedScale;
          p.y += p.vy * speedScale;

          // Wall bounces
          if (p.x < cylX + 6) {
            p.x = cylX + 6;
            p.vx = -p.vx;
          }
          if (p.x > cylX + cylW - 6) {
            p.x = cylX + cylW - 6;
            p.vx = -p.vx;
          }
          if (p.y < pistonY + 6) {
            p.y = pistonY + 6;
            p.vy = -p.vy;
          }
          if (p.y > cylY + cylMaxH - 6) {
            p.y = cylY + cylMaxH - 6;
            p.vy = -p.vy;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Labels on Cylinder
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#334155';
      ctx.fillText(`P = ${pressureKPa.toFixed(1)} kPa`, cylX + 10, pistonY + chamberH / 2 - 8);
      ctx.fillText(`T = ${tempK.toFixed(1)} K`, cylX + 10, pistonY + chamberH / 2 + 8);
      ctx.fillText(`V = ${volumeL.toFixed(1)} L`, cylX + 10, pistonY + chamberH / 2 + 24);

      // -------------------------------------------------------------
      // 2. RIGHT PANEL: P-V INDICATOR DIAGRAM
      // -------------------------------------------------------------
      const diagX = rightX + 25;
      const diagY = 40;
      const diagW = rightW - 40;
      const diagH = h - 90;

      // Axes background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(diagX, diagY, diagW, diagH);
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 1;
      ctx.strokeRect(diagX, diagY, diagW, diagH);

      // Grid lines
      ctx.strokeStyle = '#F1F5F9';
      for (let gv = 10; gv <= 40; gv += 10) {
        const gx = diagX + ((gv - 10) / 30) * diagW;
        ctx.beginPath();
        ctx.moveTo(gx, diagY);
        ctx.lineTo(gx, diagY + diagH);
        ctx.stroke();
      }
      for (let gp = 50; gp <= 300; gp += 50) {
        const gy = diagY + diagH - ((gp - 50) / 250) * diagH;
        ctx.beginPath();
        ctx.moveTo(diagX, gy);
        ctx.lineTo(diagX + diagW, gy);
        ctx.stroke();
      }

      // Draw theoretical curve
      ctx.beginPath();
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      for (let vStep = 10; vStep <= 40; vStep += 0.5) {
        let pStepPa = 0;
        if (processType === 'isothermal') {
          // P = nRT / V
          pStepPa = (nMoles * IDEAL_GAS_CONSTANT_R * tempK) / (vStep / 1000);
        } else if (processType === 'isobaric') {
          // P = const
          pStepPa = pressurePa;
        } else if (processType === 'adiabatic') {
          // P * V^gamma = const
          const p0 = (nMoles * IDEAL_GAS_CONSTANT_R * t0) / (v0 / 1000);
          pStepPa = p0 * Math.pow(v0 / vStep, gamma);
        }

        const pStepKPa = pStepPa / 1000;
        const px = diagX + ((vStep - 10) / 30) * diagW;
        const py = diagY + diagH - ((pStepKPa - 50) / 250) * diagH;

        if (vStep === 10) ctx.moveTo(px, Math.max(diagY, Math.min(diagY + diagH, py)));
        else ctx.lineTo(px, Math.max(diagY, Math.min(diagY + diagH, py)));
      }
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash

      // Draw PV History Path
      if (pvHistory.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = '#0F766E';
        ctx.lineWidth = 2.5;
        pvHistory.forEach((pt, idx) => {
          const hx = diagX + ((pt.v - 10) / 30) * diagW;
          const hy = diagY + diagH - ((pt.p - 50) / 250) * diagH;
          if (idx === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        });
        ctx.stroke();
      }

      // Current State Point on PV Diagram
      const curX = diagX + ((volumeL - 10) / 30) * diagW;
      const curY = diagY + diagH - ((pressureKPa - 50) / 250) * diagH;

      ctx.beginPath();
      ctx.fillStyle = '#DC2626';
      ctx.arc(curX, Math.max(diagY, Math.min(diagY + diagH, curY)), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Axis Labels
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('P (kPa)', diagX + 6, diagY + 16);
      ctx.fillText('V (L)', diagX + diagW - 28, diagY + diagH - 8);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    animFrameIdRef.current = animId;

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [volumeL, tempK, pressureKPa, pressurePa, processType, isPlaying, pvHistory, deltaT]);

  const t = {
    en: {
      title: 'Interactive Ideal Gas Thermodynamics & Indicator Diagram Laboratory',
      subtitle:
        'Explore the First Law of Thermodynamics, molecular kinetic motion, and PV indicator diagrams across Isothermal, Isobaric, Isochoric, and Adiabatic processes.',
      isothermalBtn: 'Isothermal (T = const)',
      isobaricBtn: 'Isobaric (P = const)',
      isochoricBtn: 'Isochoric (V = const)',
      adiabaticBtn: 'Adiabatic (Q = 0)',
      volumeLabel: 'Chamber Volume V (Liters)',
      tempLabel: 'Gas Temperature T (Kelvin)',
      firstLawTitle: 'First Law of Thermodynamics Energy Balance: ΔQ = ΔU + W',
      internalEnergyLabel: 'Change in Internal Energy (ΔU):',
      workLabel: 'Work Done by Gas (W = ∫PdV):',
      heatLabel: 'Heat Transferred (ΔQ):',
      theoryTitle: 'Thermodynamic Principles & Governing Equations',
      theoryText:
        '• First Law of Thermodynamics: ΔQ = ΔU + W (Conservation of Energy)\n• Isothermal Process (T = const): ΔU = 0 ⟹ ΔQ = W = nRT ln(V_f / V_i)\n• Isobaric Process (P = const): W = P · ΔV ⟹ ΔQ = n C_p ΔT\n• Isochoric Process (V = const): W = 0 ⟹ ΔQ = ΔU = n C_v ΔT\n• Adiabatic Process (ΔQ = 0): W = -ΔU ⟹ PV^γ = const',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී පරිපූර්ණ වායු තාපගති විද්‍යාව සහ P-V ප්‍රස්තාර විද්‍යාගාරය',
      subtitle:
        'තාපගති විද්‍යාවේ පළමු නියමය, අණුක චාලක චලිතය සහ සමෝෂ්ණ, සමපීඩන, සමපරිමා, සහ රෝධෝෂ්ණ ක්‍රියාවලිවල P-V දර්ශක සටහන් සජීවීව ගවේෂණය කරන්න.',
      isothermalBtn: 'සමෝෂ්ණ (T = නියත)',
      isobaricBtn: 'සමපීඩන (P = නියත)',
      isochoricBtn: 'සමපරිමා (V = නියත)',
      adiabaticBtn: 'රෝධෝෂ්ණ (Q = 0)',
      volumeLabel: 'සිලින්ඩර පරිමාව V (ලීටර්)',
      tempLabel: 'වායු උෂ්ණත්වය T (කෙල්වින්)',
      firstLawTitle: 'තාපගති විද්‍යාවේ පළමු නියමය: ΔQ = ΔU + W',
      internalEnergyLabel: 'අභ්‍යන්තර ශක්ති වෙනස (ΔU):',
      workLabel: 'වායුව මඟින් කළ කාර්යය (W = ∫PdV):',
      heatLabel: 'සැපයූ / පිටවූ තාපය (ΔQ):',
      theoryTitle: 'තාපගති විද්‍යා මූලධර්ම සහ සමීකරණ',
      theoryText:
        '• පළමු නියමය: ΔQ = ΔU + W (ශක්ති සංස්ථිති මූලධර්මය)\n• සමෝෂ්ණ ක්‍රියාවලිය (T = නියත): ΔU = 0 ⟹ ΔQ = W = nRT ln(V_f / V_i)\n• සමපීඩන ක්‍රියාවලිය (P = නියත): W = P · ΔV ⟹ ΔQ = n C_p ΔT\n• සමපරිමා ක්‍රියාවලිය (V = නියත): W = 0 ⟹ ΔQ = ΔU = n C_v ΔT\n• රෝධෝෂ්ණ ක්‍රියාවලිය (ΔQ = 0): W = -ΔU ⟹ PV^γ = නියතය',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-600" />
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Pause' : 'Resume'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleProcessChange(processType)}
              className="text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset State
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {/* Thermodynamic Process Selectors */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={processType === 'isothermal' ? 'default' : 'outline'}
              onClick={() => handleProcessChange('isothermal')}
              className={processType === 'isothermal' ? 'bg-[#0F766E]' : ''}
            >
              {t.isothermalBtn}
            </Button>
            <Button
              size="sm"
              variant={processType === 'isobaric' ? 'default' : 'outline'}
              onClick={() => handleProcessChange('isobaric')}
              className={processType === 'isobaric' ? 'bg-[#0F766E]' : ''}
            >
              {t.isobaricBtn}
            </Button>
            <Button
              size="sm"
              variant={processType === 'isochoric' ? 'default' : 'outline'}
              onClick={() => handleProcessChange('isochoric')}
              className={processType === 'isochoric' ? 'bg-[#0F766E]' : ''}
            >
              {t.isochoricBtn}
            </Button>
            <Button
              size="sm"
              variant={processType === 'adiabatic' ? 'default' : 'outline'}
              onClick={() => handleProcessChange('adiabatic')}
              className={processType === 'adiabatic' ? 'bg-[#0F766E]' : ''}
            >
              {t.adiabaticBtn}
            </Button>
          </div>

          {/* Interactive Canvas Container */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex justify-center p-2">
            <canvas
              ref={canvasRef}
              width={760}
              height={320}
              className="w-full max-w-[760px] h-[320px] rounded-lg shadow-inner bg-white"
            />
          </div>

          {/* Control Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
            {/* Volume Slider (disabled for isochoric) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.volumeLabel}</span>
                <span className="font-mono text-teal-800">{volumeL.toFixed(1)} L</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                step="0.5"
                disabled={processType === 'isochoric'}
                value={volumeL}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600 disabled:opacity-40"
              />
            </div>

            {/* Temperature Slider (disabled for isothermal) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.tempLabel}</span>
                <span className="font-mono text-amber-800">{tempK.toFixed(1)} K</span>
              </div>
              <input
                type="range"
                min="180"
                max="450"
                step="1"
                disabled={processType === 'isothermal' || processType === 'adiabatic'}
                value={tempK}
                onChange={(e) => handleTempChange(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600 disabled:opacity-40"
              />
            </div>
          </div>

          {/* First Law Metrics Panel */}
          <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-900">
              <Flame className="w-4 h-4 text-teal-700" />
              {t.firstLawTitle}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-teal-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.internalEnergyLabel}</div>
                <div className="text-lg font-bold font-mono text-slate-800 mt-0.5">
                  {deltaUJoules > 0 ? `+${deltaUJoules.toFixed(1)}` : deltaUJoules.toFixed(1)} J
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-teal-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.workLabel}</div>
                <div className="text-lg font-bold font-mono text-slate-800 mt-0.5">
                  {workJoules > 0 ? `+${workJoules.toFixed(1)}` : workJoules.toFixed(1)} J
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-teal-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.heatLabel}</div>
                <div className="text-lg font-bold font-mono text-teal-800 mt-0.5">
                  {heatAddedJoules > 0 ? `+${heatAddedJoules.toFixed(1)}` : heatAddedJoules.toFixed(1)} J
                </div>
              </div>
            </div>
          </div>

          {/* Theory Reference */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
            <div className="font-semibold text-slate-800 text-sm">{t.theoryTitle}</div>
            <p className="whitespace-pre-line leading-relaxed font-sans">{t.theoryText}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

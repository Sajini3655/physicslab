'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  calculateCyclotronRadius,
  calculateCyclotronPeriod,
  calculateAmmeterShuntResistance,
  calculateVoltmeterMultiplierResistance,
  ELECTRON_MASS_KG,
  PROTON_MASS_KG,
  ELEMENTARY_CHARGE_E,
} from '../physics/calculations';
import {
  Compass,
  RotateCcw,
  Gauge,
  CircleDot,
  Info,
} from 'lucide-react';

interface MagneticFieldSimulationProps {
  locale?: Locale;
}

const PARTICLE_PRESETS = [
  {
    nameEn: 'Proton (p⁺)',
    nameSi: 'ප්‍රෝටෝනය (p⁺)',
    mass: PROTON_MASS_KG,
    charge: ELEMENTARY_CHARGE_E,
    color: '#EF4444',
  },
  {
    nameEn: 'Electron (e⁻)',
    nameSi: 'ඉලෙක්ට්‍රෝනය (e⁻)',
    mass: ELECTRON_MASS_KG,
    charge: -ELEMENTARY_CHARGE_E,
    color: '#3B82F6',
  },
  {
    nameEn: 'Alpha Particle (α²⁺)',
    nameSi: 'ඇල්ෆා අංශුව (α²⁺)',
    mass: 4 * PROTON_MASS_KG,
    charge: 2 * ELEMENTARY_CHARGE_E,
    color: '#F59E0B',
  },
];

export const MagneticFieldSimulation: React.FC<MagneticFieldSimulationProps> = ({
  locale = 'en',
}) => {
  const [activeTab, setActiveTab] = useState<'cyclotron' | 'galvanometer'>('cyclotron');

  // Cyclotron Simulation State
  const [selectedParticle, setSelectedParticle] = useState<number>(0);
  const [bFieldTesla, setBFieldTesla] = useState<number>(0.5); // 0.5 T
  const [velocityExp, setVelocityExp] = useState<number>(6.0); // 10^6 m/s
  const [enableCrossedEField, setEnableCrossedEField] = useState<boolean>(false);
  const [eFieldKvM, setEFieldKvM] = useState<number>(500); // 500 kV/m

  // Galvanometer Lab State
  const [galvoCurrentMa, setGalvoCurrentMa] = useState<number>(2.5); // 2.5 mA applied
  const [galvoIgMa] = useState<number>(5.0); // 5 mA full-scale deflection
  const [galvoRgOhm] = useState<number>(20.0); // 20 Ω coil resistance
  const [targetAmmeterRangeA, setTargetAmmeterRangeA] = useState<number>(10.0); // 10 A target
  const [targetVoltmeterRangeV, setTargetVoltmeterRangeV] = useState<number>(20.0); // 20 V target

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Translations
  const t = {
    en: {
      title: 'Interactive Magnetic Field & Galvanometer Laboratory',
      subtitle:
        'Simulate charged particle motion in magnetic fields, cyclotron orbits, velocity filtering, and moving-coil galvanometer meter conversions.',
      tabCyclotron: 'Charged Particle & Cyclotron Motion',
      tabGalvanometer: 'Moving-Coil Galvanometer Lab',
      // Cyclotron controls
      particleType: 'Particle Species:',
      magneticFieldB: 'Magnetic Flux Density (B):',
      particleSpeed: 'Particle Speed (v):',
      crossedEField: 'Velocity Selector Crossed E-Field:',
      eFieldStrength: 'Electric Field Strength (E):',
      resetSim: 'Reset Parameters',
      // Cyclotron Telemetry
      telemetryTitle: 'Cyclotron Orbit Telemetry',
      cyclotronRadius: 'Trajectory Radius (r):',
      orbitalPeriod: 'Orbital Period (T):',
      cyclotronFreq: 'Cyclotron Frequency (f):',
      magneticForce: 'Magnetic Force (F_B = qvB):',
      velocityFilterStatus: 'Velocity Filter Balance (E = vB):',
      balanced: 'Balanced (Undeflected Line)',
      unbalanced: 'Unbalanced (Curved Path)',
      // Galvanometer controls
      galvoTitle: 'Moving-Coil Galvanometer Meter Conversions',
      coilCurrent: 'Input Current to Meter:',
      scaleDeflection: 'Angular Pointer Deflection:',
      ammeterConversionTitle: 'Ammeter Conversion (Parallel Shunt R_s)',
      desiredAmmeterRange: 'Target Full-Scale Ammeter Range (I_max):',
      calculatedShunt: 'Required Shunt Resistance (R_s):',
      voltmeterConversionTitle: 'Voltmeter Conversion (Series Multiplier R_m)',
      desiredVoltmeterRange: 'Target Full-Scale Voltmeter Range (V_max):',
      calculatedMultiplier: 'Required Multiplier Resistance (R_m):',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී චුම්භක ක්ෂේත්‍ර හා ගැල්වනෝමීටර විද්‍යාගාරය',
      subtitle:
        'චුම්භක ක්ෂේත්‍ර තුළ ආරෝපිත අංශු චලිතය, සයික්ලොට්‍රෝන කක්ෂ, ප්‍රවේග පෙරනය සහ චල දඟර ගැල්වනෝමීටර පරිවර්තන ගවේෂණය කරන්න.',
      tabCyclotron: 'ආරෝපිත අංශු සහ සයික්ලොට්‍රෝන චලිතය',
      tabGalvanometer: 'චල දඟර ගැල්වනෝමීටර විද්‍යාගාරය',
      // Cyclotron controls
      particleType: 'අංශු වර්ගය:',
      magneticFieldB: 'චුම්භක ස්‍රාව ඝනත්වය (B):',
      particleSpeed: 'අංශුවේ ප්‍රවේගය (v):',
      crossedEField: 'ප්‍රවේග පෙරහන් විද්‍යුත් ක්ෂේත්‍රය (E):',
      eFieldStrength: 'විද්‍යුත් ක්ෂේත්‍ර තීව්‍රතාව (E):',
      resetSim: 'පරාමිති යළි සකසන්න',
      // Cyclotron Telemetry
      telemetryTitle: 'සයික්ලොට්‍රෝන කක්ෂ දත්ත',
      cyclotronRadius: 'ගමන් මගේ අරය (r):',
      orbitalPeriod: 'ආවර්ත කාලය (T):',
      cyclotronFreq: 'සයික්ලොට්‍රෝන සංඛ්‍යාතය (f):',
      magneticForce: 'චුම්භක බලය (F_B = qvB):',
      velocityFilterStatus: 'ප්‍රවේග පෙරහන් සමතුලිතතාව (E = vB):',
      balanced: 'සමතුලිතයි (සරල රේඛීය ගමන් මග)',
      unbalanced: 'අසමතුලිතයි (වක්‍ර ගමන් මග)',
      // Galvanometer controls
      galvoTitle: 'චල දඟර ගැල්වනෝමීටර මීටර පරිවර්තන',
      coilCurrent: 'මීටරයට ලබාදෙන ධාරාව:',
      scaleDeflection: 'දර්ශකයේ කෝණික අපගමනය:',
      ammeterConversionTitle: 'ඇමීටර පරිවර්තනය (සමාන්තර ශන්ට් R_s)',
      desiredAmmeterRange: 'අපේක්ෂිත ඇමීටර පරාසය (I_max):',
      calculatedShunt: 'අවශ්‍ය ශන්ට් ප්‍රතිරෝධය (R_s):',
      voltmeterConversionTitle: 'වෝල්ට්මීටර පරිවර්තනය (ශ්‍රේණිගත ගුණකය R_m)',
      desiredVoltmeterRange: 'අපේක්ෂිත වෝල්ට්මීටර පරාසය (V_max):',
      calculatedMultiplier: 'අවශ්‍ය ගුණක ප්‍රතිරෝධය (R_m):',
    },
  }[locale];

  // Derived Cyclotron parameters
  const particle = PARTICLE_PRESETS[selectedParticle];
  const velocity = Math.pow(10, velocityExp);
  const cyclotronRadius = calculateCyclotronRadius(
    particle.mass,
    velocity,
    particle.charge,
    bFieldTesla
  );
  const cyclotronPeriod = calculateCyclotronPeriod(
    particle.mass,
    particle.charge,
    bFieldTesla
  );
  const cyclotronFreq = 1 / cyclotronPeriod;
  const magneticForce = Math.abs(particle.charge) * velocity * bFieldTesla;

  // Velocity Selector balance check: E = v * B
  const selectorSpeed = (eFieldKvM * 1000) / bFieldTesla;
  const isVelocityMatched = enableCrossedEField && Math.abs(velocity - selectorSpeed) / velocity < 0.05;

  // Galvanometer calculations
  const galvoIg = galvoIgMa * 1e-3;
  const calculatedShunt = calculateAmmeterShuntResistance(galvoIg, galvoRgOhm, targetAmmeterRangeA);
  const calculatedMultiplier = calculateVoltmeterMultiplierResistance(galvoIg, galvoRgOhm, targetVoltmeterRangeV);
  const deflectionPercentage = Math.min(100, (galvoCurrentMa / galvoIgMa) * 100);

  // Render 60fps Cyclotron Canvas
  const renderCyclotronCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Dark high-contrast physics background
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, width, height);

    // Draw magnetic field symbols: circles with crosses ⊗ representing B into the page
    ctx.strokeStyle = '#1E293B';
    ctx.fillStyle = '#334155';
    ctx.lineWidth = 1;
    for (let x = 30; x < width; x += 45) {
      for (let y = 30; y < height; y += 45) {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillText('×', x - 3, y + 4);
      }
    }

    // Top indicator
    ctx.fillStyle = '#38BDF8';
    ctx.font = '12px monospace';
    ctx.fillText(`Uniform B-field: ${bFieldTesla.toFixed(2)} T (Into Page ⊗)`, 20, 25);

    if (enableCrossedEField) {
      ctx.fillStyle = '#F43F5E';
      ctx.fillText(`Crossed E-field: ${eFieldKvM} kV/m (Downwards ↓)`, 340, 25);
    }

    // Inject point and trajectory
    const startX = 100;
    const startY = height / 2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#10B981';
    ctx.fill();
    ctx.restore();

    // Scale cyclotron radius visually to canvas
    // Real radius can be 1 mm to 10 m, we map it cleanly for display
    const visualRadius = Math.min(130, Math.max(30, (cyclotronRadius / 0.05) * 50));
    const isPositive = particle.charge > 0;

    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = particle.color;
    ctx.setLineDash([5, 4]);

    if (enableCrossedEField && isVelocityMatched) {
      // Undeflected straight line through selector
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(width - 40, startY);
      ctx.stroke();

      ctx.fillStyle = '#10B981';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('Straight Path (v = E/B)', width - 180, startY - 12);
    } else {
      // Circular trajectory in B field
      // By Right-Hand Rule: v to right (+x), B into screen (-z) => F = q(v × B) is upwards (+y on screen is down, so upward is -y)
      // Positive charges curve upwards; negative charges curve downwards
      const centerY = isPositive ? startY - visualRadius : startY + visualRadius;

      ctx.beginPath();
      if (isPositive) {
        ctx.arc(startX, centerY, visualRadius, Math.PI / 2, -Math.PI / 2, true);
      } else {
        ctx.arc(startX, centerY, visualRadius, -Math.PI / 2, Math.PI / 2, false);
      }
      ctx.stroke();

      // Draw circling particle marker
      const markerAngle = isPositive ? 0 : 0;
      const markerX = startX + visualRadius * Math.cos(markerAngle);
      const markerY = centerY + visualRadius * Math.sin(markerAngle);

      ctx.beginPath();
      ctx.arc(markerX, markerY, 7, 0, 2 * Math.PI);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.stroke();

      // Radius line indicator
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(startX, centerY);
      ctx.lineTo(markerX, markerY);
      ctx.stroke();
    }
    ctx.restore();
  }, [bFieldTesla, enableCrossedEField, eFieldKvM, particle, cyclotronRadius, isVelocityMatched]);

  useEffect(() => {
    if (activeTab === 'cyclotron') {
      renderCyclotronCanvas();
    }
  }, [activeTab, renderCyclotronCanvas]);

  const handleResetCyclotron = () => {
    setSelectedParticle(0);
    setBFieldTesla(0.5);
    setVelocityExp(6.0);
    setEnableCrossedEField(false);
    setEFieldKvM(500);
  };

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <Card className="border border-[#DFE8EF] shadow-2xs">
        <CardHeader className="bg-[#F8FAFC] border-b border-[#DFE8EF] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-[#14243A] font-serif flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#0F766E]" />
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">{t.subtitle}</p>
          </div>
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DFE8EF] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('cyclotron')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'cyclotron'
                  ? 'bg-[#0F766E] text-white shadow-2xs'
                  : 'text-[#475569] hover:bg-slate-100'
              }`}
            >
              {t.tabCyclotron}
            </button>
            <button
              onClick={() => setActiveTab('galvanometer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'galvanometer'
                  ? 'bg-[#0F766E] text-white shadow-2xs'
                  : 'text-[#475569] hover:bg-slate-100'
              }`}
            >
              {t.tabGalvanometer}
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {activeTab === 'cyclotron' ? (
            /* ==============================================================
               TAB 1: CYCLOTRON & CHARGED PARTICLE DEFLECTION
               ============================================================== */
            <div className="space-y-6">
              {/* Canvas Visualizer */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <canvas
                  ref={canvasRef}
                  width={680}
                  height={320}
                  className="w-full h-auto block"
                />
              </div>

              {/* Controls and Telemetry */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Control Parameters */}
                <div className="p-5 bg-white border border-[#DFE8EF] rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Particle & Field Controls
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleResetCyclotron}
                      className="text-xs text-[#0F766E] flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {t.resetSim}
                    </Button>
                  </div>

                  {/* Particle Species Selector */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-medium text-[#14243A]">
                      {t.particleType}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {PARTICLE_PRESETS.map((p, idx) => (
                        <button
                          key={p.nameEn}
                          type="button"
                          onClick={() => setSelectedParticle(idx)}
                          className={`p-2 text-xs rounded-lg border text-center font-medium transition-all ${
                            selectedParticle === idx
                              ? 'bg-teal-50 border-[#0F766E] text-[#0F766E] font-semibold'
                              : 'bg-white border-slate-200 text-[#475569] hover:border-slate-300'
                          }`}
                        >
                          {locale === 'en' ? p.nameEn : p.nameSi}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Magnetic Flux Density B */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.magneticFieldB}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{bFieldTesla.toFixed(2)} T</span>
                    </div>
                    <input
                      type="range"
                      min={0.05}
                      max={2.0}
                      step={0.05}
                      value={bFieldTesla}
                      onChange={(e) => setBFieldTesla(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  {/* Particle Velocity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.particleSpeed}</span>
                      <span className="font-mono font-bold text-[#0F766E]">
                        10^{velocityExp.toFixed(1)} m/s ({velocity.toExponential(1)} m/s)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={4.0}
                      max={7.2}
                      step={0.1}
                      value={velocityExp}
                      onChange={(e) => setVelocityExp(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  {/* Crossed Electric Field Switch */}
                  <div className="pt-2 border-t space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#14243A]">
                        {t.crossedEField}
                      </span>
                      <input
                        type="checkbox"
                        checked={enableCrossedEField}
                        onChange={(e) => setEnableCrossedEField(e.target.checked)}
                        className="w-4 h-4 accent-[#0F766E] cursor-pointer rounded"
                      />
                    </div>

                    {enableCrossedEField && (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between text-xs font-medium text-[#14243A]">
                          <span>{t.eFieldStrength}</span>
                          <span className="font-mono font-bold text-[#0F766E]">{eFieldKvM} kV/m</span>
                        </div>
                        <input
                          type="range"
                          min={50}
                          max={2000}
                          step={50}
                          value={eFieldKvM}
                          onChange={(e) => setEFieldKvM(parseFloat(e.target.value))}
                          className="w-full accent-[#0F766E] cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Telemetry Output */}
                <div className="p-5 bg-teal-50/50 border border-teal-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div className="border-b border-teal-200 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      {t.telemetryTitle}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Radius */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.cyclotronRadius}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {cyclotronRadius < 0.01
                          ? `${(cyclotronRadius * 1e3).toFixed(2)} mm`
                          : cyclotronRadius < 1.0
                          ? `${(cyclotronRadius * 100).toFixed(2)} cm`
                          : `${cyclotronRadius.toFixed(3)} m`}
                      </span>
                    </div>

                    {/* Orbital Period */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.orbitalPeriod}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {cyclotronPeriod < 1e-6
                          ? `${(cyclotronPeriod * 1e9).toFixed(2)} ns`
                          : `${(cyclotronPeriod * 1e6).toFixed(2)} μs`}
                      </span>
                    </div>

                    {/* Frequency */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.cyclotronFreq}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {(cyclotronFreq / 1e6).toFixed(2)} MHz
                      </span>
                    </div>

                    {/* Magnetic Force */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.magneticForce}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {magneticForce.toExponential(2)} N
                      </span>
                    </div>

                    {/* Velocity selector indicator if enabled */}
                    {enableCrossedEField && (
                      <div className="p-3 bg-white rounded-lg border border-teal-200 flex items-center justify-between text-xs">
                        <span className="font-medium text-[#475569]">{t.velocityFilterStatus}</span>
                        <span
                          className={`font-mono font-bold text-xs px-2 py-0.5 rounded ${
                            isVelocityMatched
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isVelocityMatched ? t.balanced : t.unbalanced}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Physics Note */}
                  <div className="p-3 bg-white/80 rounded-lg border border-teal-200/80 text-[11px] text-[#475569] leading-relaxed flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      <strong>Key Principle:</strong> In a perpendicular field, magnetic force provides centripetal acceleration ($qvB = mv^2/r$). The period $T = 2\pi m / (qB)$ is completely independent of particle speed, allowing resonant cyclotron RF acceleration!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ==============================================================
               TAB 2: MOVING-COIL GALVANOMETER & METER CONVERSIONS
               ============================================================== */
            <div className="space-y-6">
              {/* Meter Dial Visualizer */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col items-center justify-center relative overflow-hidden min-h-[220px]">
                <div className="flex items-center gap-2 mb-2 text-teal-400 text-xs font-mono">
                  <Gauge className="w-4 h-4" />
                  <span>Moving-Coil Galvanometer (Full Scale I_g = 5.0 mA, R_g = 20 Ω)</span>
                </div>

                {/* Circular Scale and Pointer */}
                <div className="relative w-72 h-36 border-b-2 border-slate-600 flex items-end justify-center overflow-hidden">
                  {/* Arc markings */}
                  <div className="absolute top-4 w-60 h-60 rounded-full border-t-4 border-slate-700 pointer-events-none" />

                  {/* Pointer Needle */}
                  <div
                    className="w-1 h-32 bg-rose-500 origin-bottom transition-transform duration-300 rounded-full shadow-lg"
                    style={{
                      transform: `rotate(${-50 + (deflectionPercentage / 100) * 100}deg)`,
                    }}
                  />
                  {/* Center pivot */}
                  <div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-slate-700 absolute bottom-0 z-10" />
                </div>

                {/* Current Display */}
                <div className="mt-4 flex items-center gap-4 text-xs font-mono">
                  <span>
                    Current I: <strong className="text-teal-300">{galvoCurrentMa.toFixed(2)} mA</strong>
                  </span>
                  <span>
                    Deflection: <strong className="text-rose-400">{deflectionPercentage.toFixed(1)}%</strong>
                  </span>
                </div>
              </div>

              {/* Slider for coil current */}
              <div className="p-4 bg-white border border-[#DFE8EF] rounded-xl space-y-2">
                <div className="flex justify-between text-xs font-medium text-[#14243A]">
                  <span>{t.coilCurrent}</span>
                  <span className="font-mono font-bold text-[#0F766E]">{galvoCurrentMa.toFixed(2)} mA</span>
                </div>
                <input
                  type="range"
                  min={0.0}
                  max={5.0}
                  step={0.1}
                  value={galvoCurrentMa}
                  onChange={(e) => setGalvoCurrentMa(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E] cursor-pointer"
                />
              </div>

              {/* Meter Conversion Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ammeter Conversion Card */}
                <div className="p-5 bg-white border border-[#DFE8EF] rounded-xl space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <CircleDot className="w-4 h-4 text-[#0F766E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      {t.ammeterConversionTitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Connect a small shunt resistance <strong>R_s</strong> in parallel so the majority of current bypasses the sensitive meter coil:
                  </p>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.desiredAmmeterRange}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{targetAmmeterRangeA} A</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={50.0}
                      step={1.0}
                      value={targetAmmeterRangeA}
                      onChange={(e) => setTargetAmmeterRangeA(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-between text-xs">
                    <span className="font-medium text-[#14243A]">{t.calculatedShunt}</span>
                    <span className="font-mono font-bold text-sm text-[#0F766E]">
                      {calculatedShunt < 0.01
                        ? `${(calculatedShunt * 1000).toFixed(2)} mΩ`
                        : `${calculatedShunt.toFixed(4)} Ω`}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">
                    Formula: R_s = (I_g · R_g) / (I_max - I_g)
                  </div>
                </div>

                {/* Voltmeter Conversion Card */}
                <div className="p-5 bg-white border border-[#DFE8EF] rounded-xl space-y-4">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <CircleDot className="w-4 h-4 text-[#0F766E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      {t.voltmeterConversionTitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Connect a high multiplier resistance <strong>R_m</strong> in series to drop the excess voltage across the external resistor:
                  </p>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.desiredVoltmeterRange}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{targetVoltmeterRangeV} V</span>
                    </div>
                    <input
                      type="range"
                      min={5.0}
                      max={100.0}
                      step={5.0}
                      value={targetVoltmeterRangeV}
                      onChange={(e) => setTargetVoltmeterRangeV(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-between text-xs">
                    <span className="font-medium text-[#14243A]">{t.calculatedMultiplier}</span>
                    <span className="font-mono font-bold text-sm text-[#0F766E]">
                      {(calculatedMultiplier / 1000).toFixed(2)} kΩ ({calculatedMultiplier.toFixed(0)} Ω)
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500">
                    Formula: R_m = (V_max / I_g) - R_g
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

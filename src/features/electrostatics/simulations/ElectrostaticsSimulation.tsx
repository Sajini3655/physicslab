'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  calculateParallelPlateCapacitance,
  calculateCapacitorEnergy,
  calculateEnergyDensity,
  COULOMB_CONSTANT_K,
} from '../physics/calculations';
import {
  RotateCcw,
  Zap,
  Info,
} from 'lucide-react';

interface ElectrostaticsSimulationProps {
  locale?: Locale;
}

interface PointCharge {
  id: string;
  x: number; // in canvas pixels
  y: number;
  q: number; // in microCoulombs (μC)
}

const DIELECTRIC_PRESETS = [
  { nameEn: 'Vacuum / Air (εᵣ = 1.0)', nameSi: 'රික්තය / වාතය (εᵣ = 1.0)', er: 1.0, color: '#F1F5F9' },
  { nameEn: 'Paper (εᵣ = 3.5)', nameSi: 'කඩදාසි (εᵣ = 3.5)', er: 3.5, color: '#FEF3C7' },
  { nameEn: 'Mica (εᵣ = 6.0)', nameSi: 'මයිකා (εᵣ = 6.0)', er: 6.0, color: '#E0E7FF' },
  { nameEn: 'Ceramic (εᵣ = 100)', nameSi: 'සෙරමික් (εᵣ = 100)', er: 100.0, color: '#CCFBF1' },
];

export const ElectrostaticsSimulation: React.FC<ElectrostaticsSimulationProps> = ({
  locale = 'en',
}) => {
  const [activeTab, setActiveTab] = useState<'capacitor' | 'field-lines'>('capacitor');

  // Capacitor Lab State
  const [plateAreaCm2, setPlateAreaCm2] = useState<number>(100); // 100 cm² = 0.01 m²
  const [plateDistMm, setPlateDistMm] = useState<number>(2.0); // 2 mm = 0.002 m
  const [batteryVoltage, setBatteryVoltage] = useState<number>(12.0); // 12 V
  const [isBatteryConnected, setIsBatteryConnected] = useState<boolean>(true);
  const [storedChargeFixed, setStoredChargeFixed] = useState<number>(0); // for disconnected mode
  const [selectedDielectric, setSelectedDielectric] = useState<number>(0);
  const [dielectricInsertedFraction, setDielectricInsertedFraction] = useState<number>(1.0); // 0 to 1

  // Field Lines Canvas State
  const [charges, setCharges] = useState<PointCharge[]>([
    { id: '1', x: 200, y: 180, q: +3 },
    { id: '2', x: 440, y: 180, q: -3 },
  ]);
  const [selectedChargeId, setSelectedChargeId] = useState<string | null>(null);
  const [testPoint, setTestPoint] = useState<{ x: number; y: number } | null>({ x: 320, y: 100 });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Translations
  const t = {
    en: {
      title: 'Interactive Electrostatics & Capacitor Laboratory',
      subtitle:
        'Explore electric field mapping, equipotential surfaces, parallel-plate capacitor physics, dielectric polarization, and energy density.',
      tabCapacitor: 'Parallel-Plate Capacitor Lab',
      tabFieldLines: 'Electric Field & Potential Lines',
      // Capacitor controls
      plateArea: 'Plate Area (A):',
      plateSeparation: 'Plate Separation (d):',
      voltage: 'Applied Battery Voltage (V):',
      dielectricMaterial: 'Dielectric Material:',
      dielectricInsertion: 'Dielectric Insertion:',
      batteryStatus: 'Battery Circuit Connection:',
      batteryConnected: 'Connected (V = constant)',
      batteryDisconnected: 'Disconnected (Q = constant)',
      resetDefaults: 'Reset Parameters',
      // Telemetry
      telemetryTitle: 'Live Electrostatic Telemetry',
      capacitance: 'Capacitance (C):',
      charge: 'Stored Charge (Q):',
      fieldStrength: 'Electric Field (E = V/d):',
      storedEnergy: 'Stored Energy (U = ½CV²):',
      energyDensity: 'Energy Density (u = ½εE²):',
      // Field lines tab
      addPosCharge: '+ Add Positive Charge (+3 μC)',
      addNegCharge: '- Add Negative Charge (-3 μC)',
      clearCharges: 'Clear All Charges',
      dipolePreset: 'Electric Dipole Preset',
      likeChargesPreset: 'Like Charges Preset (+, +)',
      canvasHelp: 'Click and drag charges to reposition. Click anywhere on canvas to move the test probe.',
      probeTitle: 'Electric Probe Telemetry',
      probePotential: 'Potential V:',
      probeField: 'Field |E|:',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී ස්ථිති විද්‍යුත් හා ධාරිත්‍රක විද්‍යාගාරය',
      subtitle:
        'විද්‍යුත් ක්ෂේත්‍ර රේඛා, සමවිභව පෘෂ්ඨ, සමාන්තර තහඩු ධාරිත්‍රක භෞතික විද්‍යාව, පාරවිද්‍යුත් ධ්‍රැවීකරණය සහ ශක්ති ඝනත්වය ගවේෂණය කරන්න.',
      tabCapacitor: 'සමාන්තර තහඩු ධාරිත්‍රක විද්‍යාගාරය',
      tabFieldLines: 'විද්‍යුත් ක්ෂේත්‍ර සහ විභව රේඛා',
      // Capacitor controls
      plateArea: 'තහඩු වර්ගඵලය (A):',
      plateSeparation: 'තහඩු අතර පරතරය (d):',
      voltage: 'යෙදූ බැටරි වෝල්ටීයතාව (V):',
      dielectricMaterial: 'පාරවිද්‍යුත් ද්‍රව්‍යය:',
      dielectricInsertion: 'පාරවිද්‍යුත් ඇතුළු කිරීමේ ප්‍රමාණය:',
      batteryStatus: 'බැටරි පරිපථ සම්බන්ධතාව:',
      batteryConnected: 'සම්බන්ධ කර ඇත (V = නියතයි)',
      batteryDisconnected: 'විසන්ධි කර ඇත (Q = නියතයි)',
      resetDefaults: 'පරාමිති යළි සකසන්න',
      // Telemetry
      telemetryTitle: 'සජීවී ස්ථිති විද්‍යුත් දත්ත',
      capacitance: 'ධාරිතාව (C):',
      charge: 'ගබඩා ආරෝපණය (Q):',
      fieldStrength: 'විද්‍යුත් ක්ෂේත්‍රය (E = V/d):',
      storedEnergy: 'ගබඩා ශක්තිය (U = ½CV²):',
      energyDensity: 'ශක්ති ඝනත්වය (u = ½εE²):',
      // Field lines tab
      addPosCharge: '+ ධන ආරෝපණයක් එක් කරන්න (+3 μC)',
      addNegCharge: '- ඍණ ආරෝපණයක් එක් කරන්න (-3 μC)',
      clearCharges: 'සියල්ල ඉවත් කරන්න',
      dipolePreset: 'විද්‍යුත් ද්විධ්‍රැවය',
      likeChargesPreset: 'සජාතීය ආරෝපණ (+, +)',
      canvasHelp: 'ආරෝපණ පිහිටීම වෙනස් කිරීමට ක්ලික් කර අදින්න. පරීක්ෂක ලක්ෂ්‍යය තැබීමට කැන්වසය මත ඕනෑම තැනක ක්ලික් කරන්න.',
      probeTitle: 'පරීක්ෂක ලක්ෂ්‍යයේ දත්ත',
      probePotential: 'විභවය V:',
      probeField: 'ක්ෂේත්‍රය |E|:',
    },
  }[locale];

  // Derived capacitor calculations
  const areaM2 = (plateAreaCm2 * 1e-4);
  const distM = (plateDistMm * 1e-3);
  const dielectricEr = DIELECTRIC_PRESETS[selectedDielectric].er;
  const effectiveEr = 1.0 + (dielectricEr - 1.0) * dielectricInsertedFraction;

  const currentCapacitance = calculateParallelPlateCapacitance(areaM2, distM, effectiveEr);

  let effectiveVoltage = batteryVoltage;
  let effectiveCharge = currentCapacitance * effectiveVoltage;

  if (!isBatteryConnected) {
    effectiveCharge = storedChargeFixed > 0 ? storedChargeFixed : currentCapacitance * batteryVoltage;
    effectiveVoltage = currentCapacitance > 0 ? effectiveCharge / currentCapacitance : 0;
  }

  const storedEnergy = calculateCapacitorEnergy(currentCapacitance, effectiveVoltage);
  const electricField = distM > 0 ? effectiveVoltage / distM : 0;
  const energyDensity = calculateEnergyDensity(electricField, effectiveEr);

  // Toggle battery connection
  const handleToggleBattery = () => {
    if (isBatteryConnected) {
      // Disconnecting battery: freeze current stored charge
      setStoredChargeFixed(currentCapacitance * batteryVoltage);
      setIsBatteryConnected(false);
    } else {
      // Reconnecting battery: return to fixed voltage
      setIsBatteryConnected(true);
    }
  };

  const handleResetCapacitor = () => {
    setPlateAreaCm2(100);
    setPlateDistMm(2.0);
    setBatteryVoltage(12.0);
    setIsBatteryConnected(true);
    setSelectedDielectric(0);
    setDielectricInsertedFraction(1.0);
  };

  // Field Lines Rendering
  const renderFieldLines = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Background grid
    ctx.strokeStyle = '#F1F5F9';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (charges.length === 0) {
      ctx.fillStyle = '#94A3B8';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        locale === 'en' ? 'Add charges above to visualize electric field lines and equipotentials' : 'විද්‍යුත් ක්ෂේත්‍ර රේඛා දැක ගැනීමට ඉහතින් ආරෝපණ එක් කරන්න',
        width / 2,
        height / 2
      );
      return;
    }

    // Draw field vectors on a grid
    const step = 32;
    for (let gx = step / 2; gx < width; gx += step) {
      for (let gy = step / 2; gy < height; gy += step) {
        let Ex = 0;
        let Ey = 0;

        charges.forEach((c) => {
          const dx = (gx - c.x) * 0.01; // scale pixels to cm/meters
          const dy = (gy - c.y) * 0.01;
          const rSq = dx * dx + dy * dy;
          const r = Math.sqrt(rSq);
          if (r > 0.15) {
            const E = (COULOMB_CONSTANT_K * (c.q * 1e-6)) / rSq;
            Ex += E * (dx / r);
            Ey += E * (dy / r);
          }
        });

        const Etotal = Math.sqrt(Ex * Ex + Ey * Ey);
        if (Etotal > 1e3) {
          const angle = Math.atan2(Ey, Ex);
          const arrowLen = Math.min(14, Math.max(5, Math.log10(Etotal) * 2.2));

          ctx.save();
          ctx.translate(gx, gy);
          ctx.rotate(angle);

          ctx.strokeStyle = '#0F766E44';
          ctx.fillStyle = '#0F766E66';
          ctx.lineWidth = 1.2;

          ctx.beginPath();
          ctx.moveTo(-arrowLen / 2, 0);
          ctx.lineTo(arrowLen / 2, 0);
          ctx.stroke();

          // Arrowhead
          ctx.beginPath();
          ctx.moveTo(arrowLen / 2, 0);
          ctx.lineTo(arrowLen / 2 - 3, -2);
          ctx.lineTo(arrowLen / 2 - 3, 2);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        }
      }
    }

    // Draw charges
    charges.forEach((c) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, 16, 0, 2 * Math.PI);
      ctx.fillStyle = c.q > 0 ? '#EF4444' : '#3B82F6';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Sign symbol
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(c.q > 0 ? '+' : '−', c.x, c.y);

      // Label
      ctx.fillStyle = '#14243A';
      ctx.font = '11px monospace';
      ctx.fillText(`${c.q > 0 ? '+' : ''}${c.q} μC`, c.x, c.y + 26);
    });

    // Draw test probe if present
    if (testPoint) {
      ctx.beginPath();
      ctx.arc(testPoint.x, testPoint.y, 7, 0, 2 * Math.PI);
      ctx.fillStyle = '#10B981';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Probe ring
      ctx.beginPath();
      ctx.arc(testPoint.x, testPoint.y, 13, 0, 2 * Math.PI);
      ctx.strokeStyle = '#10B98188';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [charges, testPoint, locale]);

  useEffect(() => {
    if (activeTab === 'field-lines') {
      renderFieldLines();
    }
  }, [activeTab, renderFieldLines]);

  // Handle probe / charge movement
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if clicked near an existing charge
    const clickedCharge = charges.find((c) => {
      const dist = Math.hypot(c.x - x, c.y - y);
      return dist <= 20;
    });

    if (clickedCharge) {
      setSelectedChargeId(clickedCharge.id);
    } else {
      setSelectedChargeId(null);
      setTestPoint({ x, y });
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedChargeId) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(20, Math.min(canvas.width - 20, e.clientX - rect.left));
    const y = Math.max(20, Math.min(canvas.height - 20, e.clientY - rect.top));

    setCharges((prev) =>
      prev.map((c) => (c.id === selectedChargeId ? { ...c, x, y } : c))
    );
  };

  const handleCanvasMouseUp = () => {
    setSelectedChargeId(null);
  };

  // Probe telemetry calculation
  let probeV = 0;
  let probeE = 0;
  if (testPoint && charges.length > 0) {
    let Ex = 0;
    let Ey = 0;
    charges.forEach((c) => {
      const dx = (testPoint.x - c.x) * 0.01;
      const dy = (testPoint.y - c.y) * 0.01;
      const r = Math.sqrt(dx * dx + dy * dy);
      if (r > 0.02) {
        probeV += (COULOMB_CONSTANT_K * (c.q * 1e-6)) / r;
        const E = (COULOMB_CONSTANT_K * (c.q * 1e-6)) / (r * r);
        Ex += E * (dx / r);
        Ey += E * (dy / r);
      }
    });
    probeE = Math.sqrt(Ex * Ex + Ey * Ey);
  }

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <Card className="border border-[#DFE8EF] shadow-2xs">
        <CardHeader className="bg-[#F8FAFC] border-b border-[#DFE8EF] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-[#14243A] font-serif flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#0F766E]" />
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">{t.subtitle}</p>
          </div>
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DFE8EF] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('capacitor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'capacitor'
                  ? 'bg-[#0F766E] text-white shadow-2xs'
                  : 'text-[#475569] hover:bg-slate-100'
              }`}
            >
              {t.tabCapacitor}
            </button>
            <button
              onClick={() => setActiveTab('field-lines')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'field-lines'
                  ? 'bg-[#0F766E] text-white shadow-2xs'
                  : 'text-[#475569] hover:bg-slate-100'
              }`}
            >
              {t.tabFieldLines}
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {activeTab === 'capacitor' ? (
            /* ==============================================================
               TAB 1: PARALLEL-PLATE CAPACITOR LAB
               ============================================================== */
            <div className="space-y-6">
              {/* Visual Model Canvas */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[260px]">
                {/* Circuit Wires and Voltage Indicator */}
                <div className="w-full flex items-center justify-between px-6 mb-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        isBatteryConnected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                      }`}
                    />
                    <span className="text-slate-300">
                      {isBatteryConnected ? `${batteryVoltage.toFixed(1)} V Battery Connected` : 'Open Circuit (Isolated Q)'}
                    </span>
                  </div>
                  <div className="text-teal-400 font-bold">
                    V = {effectiveVoltage.toFixed(2)} V • Q = {(effectiveCharge * 1e9).toFixed(2)} nC
                  </div>
                </div>

                {/* Capacitor Plates Render */}
                <div className="relative flex flex-col items-center justify-center w-full max-w-md py-4">
                  {/* Top Plate (+Q) */}
                  <div
                    className="w-full h-4 rounded-md bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500 shadow-md flex items-center justify-center text-[10px] font-bold text-white relative"
                    style={{ maxWidth: `${Math.min(360, Math.max(140, plateAreaCm2 * 2.2))}px` }}
                  >
                    <span className="tracking-widest">+ + + + + + + + + +</span>
                    <span className="absolute -top-5 text-[11px] font-mono text-rose-300 font-semibold">
                      Plate 1 (+Q)
                    </span>
                  </div>

                  {/* Dielectric Slab Layer */}
                  <div
                    className="w-full flex items-center justify-center transition-all duration-300 relative my-1"
                    style={{
                      height: `${Math.max(20, plateDistMm * 14)}px`,
                      maxWidth: `${Math.min(360, Math.max(140, plateAreaCm2 * 2.2))}px`,
                    }}
                  >
                    {/* Dielectric Slab */}
                    {dielectricInsertedFraction > 0 && selectedDielectric > 0 && (
                      <div
                        className="h-full rounded-xs transition-all duration-300 border border-teal-300/40 flex items-center justify-center text-[11px] font-medium text-slate-800 shadow-inner"
                        style={{
                          width: `${dielectricInsertedFraction * 100}%`,
                          backgroundColor: DIELECTRIC_PRESETS[selectedDielectric].color,
                        }}
                      >
                        <span className="font-mono text-xs font-bold text-teal-900">
                          {DIELECTRIC_PRESETS[selectedDielectric].nameEn.split('(')[0]} (εᵣ = {dielectricEr})
                        </span>
                      </div>
                    )}

                    {/* Electric Field Lines Between Plates */}
                    <div className="absolute inset-0 flex justify-around items-center pointer-events-none opacity-40">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <span key={i} className="text-teal-300 font-mono text-xs">
                          ↓
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Plate (-Q) */}
                  <div
                    className="w-full h-4 rounded-md bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 shadow-md flex items-center justify-center text-[10px] font-bold text-white relative"
                    style={{ maxWidth: `${Math.min(360, Math.max(140, plateAreaCm2 * 2.2))}px` }}
                  >
                    <span className="tracking-widest">− − − − − − − − − −</span>
                    <span className="absolute -bottom-5 text-[11px] font-mono text-blue-300 font-semibold">
                      Plate 2 (−Q)
                    </span>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-4 text-[11px] text-slate-400 text-center font-mono">
                  E = {electricField.toFixed(0)} V/m • d = {plateDistMm.toFixed(1)} mm • A = {plateAreaCm2} cm²
                </div>
              </div>

              {/* Controls & Telemetry Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Control Sliders */}
                <div className="p-5 bg-white border border-[#DFE8EF] rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      Capacitor Parameters
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleResetCapacitor}
                      className="text-xs text-[#0F766E] flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {t.resetDefaults}
                    </Button>
                  </div>

                  {/* Plate Area A */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.plateArea}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{plateAreaCm2} cm²</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={300}
                      step={10}
                      value={plateAreaCm2}
                      onChange={(e) => setPlateAreaCm2(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  {/* Plate Separation d */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.plateSeparation}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{plateDistMm.toFixed(1)} mm</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={8.0}
                      step={0.5}
                      value={plateDistMm}
                      onChange={(e) => setPlateDistMm(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer"
                    />
                  </div>

                  {/* Battery Voltage */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-[#14243A]">
                      <span>{t.voltage}</span>
                      <span className="font-mono font-bold text-[#0F766E]">{batteryVoltage.toFixed(1)} V</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={50.0}
                      step={1.0}
                      disabled={!isBatteryConnected}
                      value={batteryVoltage}
                      onChange={(e) => setBatteryVoltage(parseFloat(e.target.value))}
                      className="w-full accent-[#0F766E] cursor-pointer disabled:opacity-40"
                    />
                  </div>

                  {/* Dielectric Selector */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-medium text-[#14243A]">
                      {t.dielectricMaterial}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {DIELECTRIC_PRESETS.map((d, idx) => (
                        <button
                          key={d.nameEn}
                          type="button"
                          onClick={() => setSelectedDielectric(idx)}
                          className={`p-2 text-xs rounded-lg border text-left font-medium transition-all ${
                            selectedDielectric === idx
                              ? 'bg-teal-50 border-[#0F766E] text-[#0F766E] font-semibold'
                              : 'bg-white border-slate-200 text-[#475569] hover:border-slate-300'
                          }`}
                        >
                          {locale === 'en' ? d.nameEn : d.nameSi}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dielectric Insertion Slider */}
                  {selectedDielectric > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-medium text-[#14243A]">
                        <span>{t.dielectricInsertion}</span>
                        <span className="font-mono font-bold text-[#0F766E]">
                          {Math.round(dielectricInsertedFraction * 100)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0.0}
                        max={1.0}
                        step={0.05}
                        value={dielectricInsertedFraction}
                        onChange={(e) => setDielectricInsertedFraction(parseFloat(e.target.value))}
                        className="w-full accent-[#0F766E] cursor-pointer"
                      />
                    </div>
                  )}

                  {/* Battery Switch Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleToggleBattery}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-2 ${
                        isBatteryConnected
                          ? 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100'
                          : 'bg-emerald-50 border-emerald-300 text-emerald-900 hover:bg-emerald-100'
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      {isBatteryConnected ? t.batteryDisconnected : t.batteryConnected}
                    </button>
                  </div>
                </div>

                {/* Telemetry Readouts */}
                <div className="p-5 bg-teal-50/50 border border-teal-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div className="border-b border-teal-200 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                      {t.telemetryTitle}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Capacitance */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.capacitance}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {(currentCapacitance * 1e12).toFixed(2)} pF
                      </span>
                    </div>

                    {/* Charge */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.charge}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {(effectiveCharge * 1e9).toFixed(3)} nC
                      </span>
                    </div>

                    {/* Electric Field */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.fieldStrength}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {electricField.toFixed(0)} V/m
                      </span>
                    </div>

                    {/* Stored Energy */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.storedEnergy}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {(storedEnergy * 1e9).toFixed(2)} nJ
                      </span>
                    </div>

                    {/* Energy Density */}
                    <div className="p-3 bg-white rounded-lg border border-teal-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-[#475569]">{t.energyDensity}</span>
                      <span className="font-mono font-bold text-sm text-[#0F766E]">
                        {(energyDensity * 1e3).toFixed(3)} mJ/m³
                      </span>
                    </div>
                  </div>

                  {/* Educational Note */}
                  <div className="p-3 bg-white/80 rounded-lg border border-teal-200/80 text-[11px] text-[#475569] leading-relaxed flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                    <div>
                      {isBatteryConnected ? (
                        <span>
                          <strong>Battery Connected (V = const):</strong> Increasing distance <em>d</em> decreases capacitance and charge ($Q = CV$). Stored energy decreases. Inserting dielectric increases capacitance, charge, and energy.
                        </span>
                      ) : (
                        <span>
                          <strong>Battery Disconnected (Q = const):</strong> Charge is trapped on the plates. Pulling plates apart requires external mechanical work against electrostatic attraction, increasing voltage ($V = Q/C$) and stored energy ($U = Q^2/2C$)!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ==============================================================
               TAB 2: ELECTRIC FIELD & POTENTIAL LINES CANVAS
               ============================================================== */
            <div className="space-y-4">
              {/* Presets and Controls */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setCharges([
                        { id: '1', x: 200, y: 180, q: +3 },
                        { id: '2', x: 440, y: 180, q: -3 },
                      ]);
                      setTestPoint({ x: 320, y: 100 });
                    }}
                    className="text-xs"
                  >
                    {t.dipolePreset}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setCharges([
                        { id: '1', x: 220, y: 180, q: +3 },
                        { id: '2', x: 420, y: 180, q: +3 },
                      ]);
                      setTestPoint({ x: 320, y: 180 });
                    }}
                    className="text-xs"
                  >
                    {t.likeChargesPreset}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    size="sm"
                    onClick={() =>
                      setCharges((prev) => [
                        ...prev,
                        { id: Date.now().toString(), x: 320, y: 180, q: +3 },
                      ])
                    }
                    className="bg-rose-600 hover:bg-rose-700 text-white text-xs"
                  >
                    {t.addPosCharge}
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      setCharges((prev) => [
                        ...prev,
                        { id: Date.now().toString(), x: 320, y: 180, q: -3 },
                      ])
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                  >
                    {t.addNegCharge}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCharges([])}
                    className="text-xs text-rose-600"
                  >
                    {t.clearCharges}
                  </Button>
                </div>
              </div>

              {/* 2D Canvas */}
              <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={680}
                  height={360}
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  className="w-full h-auto cursor-crosshair block"
                />
              </div>

              {/* Probe Telemetry Bar */}
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#14243A]">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="font-semibold">{t.probeTitle}:</span>
                  <span>(x: {testPoint?.x ?? 0}, y: {testPoint?.y ?? 0})</span>
                </div>
                <div className="flex items-center gap-4 font-mono">
                  <span>
                    {t.probePotential}{' '}
                    <strong className="text-[#0F766E]">{probeV.toFixed(0)} V</strong>
                  </span>
                  <span>
                    {t.probeField}{' '}
                    <strong className="text-[#0F766E]">{(probeE / 1e3).toFixed(1)} kV/m</strong>
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#475569] italic">
                {t.canvasHelp}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

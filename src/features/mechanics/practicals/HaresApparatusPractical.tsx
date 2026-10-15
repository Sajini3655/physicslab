'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateHaresApparatusDensity } from '../physics/calculations';

interface HaresApparatusPracticalProps {
  locale?: Locale;
}

interface HareReading {
  id: number;
  hWater: string;  // cm
  hLiquid: string; // cm
}

export const HaresApparatusPractical: React.FC<HaresApparatusPracticalProps> = ({
  locale = 'en',
}) => {
  const [readings, setReadings] = useState<HareReading[]>([
    { id: 1, hWater: '12.0', hLiquid: '15.0' },
    { id: 2, hWater: '16.0', hLiquid: '20.0' },
    { id: 3, hWater: '20.0', hLiquid: '25.0' },
    { id: 4, hWater: '24.0', hLiquid: '30.0' },
    { id: 5, hWater: '28.0', hLiquid: '35.0' },
    { id: 6, hWater: '32.0', hLiquid: '40.0' },
  ]);

  const [referenceDensity, setReferenceDensity] = useState<string>('800'); // kg/m^3 (e.g. alcohol / kerosene)

  const t = {
    en: {
      title: 'Practical 2.4: Determination of Relative Density of a Liquid Using Hare’s Apparatus',
      aim: 'Aim: To determine the relative density and absolute density of a liquid miscible or immiscible with water using Hare’s apparatus and graphical slope analysis.',
      apparatus: 'Apparatus: Hare’s apparatus (inverted 3-limb tube with rubber tube and pinch cock), two beakers, metre rule, set squares, clamp stand, water, test liquid (methylated spirit / kerosene / brine).',
      theoryTitle: 'Physical Principle & Manometric Theory',
      theoryText: 'In Hare’s apparatus, air is partially evacuated through the central top limb and clamped airtight. The atmospheric pressure P_0 acting on the open beaker surfaces supports the columns:\n\nP_0 - P_enclosed = h_w · ρ_w · g = h_L · ρ_L · g\n\nTherefore:\nh_w · ρ_w = h_L · ρ_L\nRearranging gives:\nh_w = (ρ_L / ρ_w) · h_L\n\nA graph of water column height h_w (y-axis) against liquid column height h_L (x-axis) produces a straight line passing through the origin:\nSlope m = ρ_L / ρ_w = Relative Density d\nAbsolute Density ρ_L = m · ρ_w  (where ρ_w = 1000 kg m⁻³)',
      procedure: 'Procedure: 1. Place beaker 1 containing water and beaker 2 containing the test liquid below the two vertical limbs. 2. Ensure both tube tips are immersed well below liquid surfaces. 3. Open the pinch cock, gently suck air from the rubber tube until liquids rise to approximately 10–12 cm, then clip tightly. 4. Using a vertical metre rule and set squares, record the height of each liquid column (difference between tube meniscus and beaker surface). 5. Suck out more air in stages to obtain 5–6 pairs of tall readings up to 40 cm. 6. Plot h_w vs h_L and determine the gradient.',
      obsTitle: 'Experimental Observations (h_w vs h_L)',
      trialCol: 'Trial',
      hwCol: 'Water Height h_w (cm)',
      hlCol: 'Liquid Height h_L (cm)',
      ratioCol: 'Ratio (h_w / h_L)',
      calcSummaryTitle: 'Graphical Regression & Density Analysis',
      bestFitSlope: 'Best-Fit Linear Gradient (m = ρ_L / ρ_w):',
      calcDensity: 'Derived Liquid Density ρ_L (kg m⁻³):',
      refDensity: 'Reference Liquid Density (kg m⁻³):',
      percentageDiff: 'Percentage Error:',
      verdictPass: 'Excellent Precision (Error ≤ 3%)',
      verdictFail: 'Check Airtight Seal / Meniscus Parallax',
      graphTitle: 'Scatter Plot & Regression Line (h_w vs h_L)',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. The pinch cock must be completely airtight; a slow leak causes liquid levels to fall continuously. 2. Keep liquid columns as tall as possible to minimize percentage error in height measurements. 3. Ensure the tubes do not touch the bottom of the beakers, and remain submerged when levels change. 4. Measure heights strictly from the beaker liquid surface to the meniscus inside the tube using set squares to eliminate parallax.',
      loadSample: 'Load Sample Data (Spirit)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2.4: හේයාර්ගේ උපකරණය භාවිතයෙන් ද්‍රවයක සාපේක්ෂ ඝනත්වය සෙවීම',
      aim: 'අරමුණ: හේයාර්ගේ උපකරණය සහ ප්‍රස්ථාරික බෑවුම් විශ්ලේෂණය භාවිතයෙන් ද්‍රවයක සාපේක්ෂ ඝනත්වය සහ නිරපේක්ෂ ඝනත්වය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: හේයාර්ගේ උපකරණය (රබර් බටයක් සහ මිරිකුම් ඇමුණුමක් සහිත ප්‍රතිලෝම U-නළය), බීකර 2ක්, මීටර් රූල, සෘජුකෝණ ත්‍රිකෝණ, ආධාරකය, ජලය, පරීක්ෂණ ද්‍රවය (භූමිතෙල් / ස්ප්‍රීතු).',
      theoryTitle: 'භෞතික මූලධර්මය සහ මනෝමිතික සමීකරණය',
      theoryText: 'හේයාර්ගේ උපකරණයේ ඉහළ මැද නළයෙන් වාතය ස්වල්පයක් ඉවත් කර මිරිකුම් ඇමුණුම තද කළ විට, බීකර පෘෂ්ඨ මත ක්‍රියාකරන වායුගෝලීය පීඩනය P_0 මඟින් ද්‍රව කඳන් රඳවා තබා ගනී:\n\nP_0 - P_enclosed = h_w · ρ_w · g = h_L · ρ_L · g\n\nඑබැවින්:\nh_w · ρ_w = h_L · ρ_L\nනැවත සකස් කළ විට:\nh_w = (ρ_L / ρ_w) · h_L\n\nh_w (y-අක්ෂය) ට එදිරිව h_L (x-අක්ෂය) ප්‍රස්ථාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි:\nබෑවුම m = ρ_L / ρ_w = සාපේක්ෂ ඝනත්වය d\nනිරපේක්ෂ ඝනත්වය ρ_L = m · ρ_w  (මෙහි ρ_w = 1000 kg m⁻³)',
      procedure: 'ක්‍රමවේදය: 1. ජලය සහ පරීක්ෂණ ද්‍රවය සහිත බීකර නළ දෙක යටින් තබන්න. 2. නළ කෙළවර ද්‍රවය තුළ ගිලී ඇති බව තහවුරු කරගන්න. 3. මිරිකුම් ඇමුණුම බුරුල් කර වාතය ස්වල්පයක් ඉවත් කර ද්‍රව කඳන් 10–12 cm පමණ ඉහළ නංවා තද කරන්න. 4. මීටර් රූල සහ සෘජුකෝණ ත්‍රිකෝණ මඟින් එක් එක් ද්‍රව කඳේ උස (බීකර මට්ටමේ සිට නළයේ මට්ටම දක්වා) කියවන්න. 5. විවිධ උසවල් සඳහා කියවීම් 5–6ක් ලබාගන්න. 6. h_w ට එදිරිව h_L ප්‍රස්ථාරය ඇඳ අනුක්‍රමණයෙන් සාපේක්ෂ ඝනත්වය ගණනය කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (h_w ට එදිරිව h_L)',
      trialCol: 'වාරය',
      hwCol: 'ජල කඳේ උස h_w (cm)',
      hlCol: 'ද්‍රව කඳේ උස h_L (cm)',
      ratioCol: 'අනුපාතය (h_w / h_L)',
      calcSummaryTitle: 'ප්‍රස්ථාරික ප්‍රතිගාමනය සහ ඝනත්ව විශ්ලේෂණය',
      bestFitSlope: 'හොඳම ගැළපුම් සරල රේඛීය බෑවුම (m = ρ_L / ρ_w):',
      calcDensity: 'ගණනය කළ ද්‍රව ඝනත්වය ρ_L (kg m⁻³):',
      refDensity: 'සමුද්දේශ ද්‍රව ඝනත්වය (kg m⁻³):',
      percentageDiff: 'ප්‍රතිශත දෝෂය:',
      verdictPass: 'ඉතා නිවැරදි ප්‍රතිඵලයකි (දෝෂය ≤ 3%)',
      verdictFail: 'වායු කාන්දුවීම් හෝ දෘෂ්ටි විලාස දෝෂ පරීක්ෂා කරන්න',
      graphTitle: 'ප්‍රස්ථාරික විසරණ ලක්ෂ්‍ය සහ ප්‍රතිගාමන රේඛාව',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. මිරිකුම් ඇමුණුම වාතය කාන්දු නොවන සේ තදින් වැසිය යුතුය. 2. ප්‍රතිශත දෝෂය අවම කිරීමට ද්‍රව කඳන් හැකිතාක් උසින් තබාගත යුතුය. 3. නළ කෙළවර බීකර පතුලේ නොගෑවෙන සේ තැබිය යුතුය. 4. දෘෂ්ටි විලාස දෝෂය වැළැක්වීමට සෘජුකෝණ ත්‍රිකෝණ භාවිත කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (ස්ප්‍රීතු)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateReading = (id: number, field: 'hWater' | 'hLiquid', val: string) => {
    setReadings(readings.map((r) => (r.id === id ? { ...r, [field]: val } : r)));
  };

  const parsedPairs = readings
    .map((r) => ({
      id: r.id,
      hw: parseFloat(r.hWater),
      hl: parseFloat(r.hLiquid),
    }))
    .filter((p) => !isNaN(p.hw) && !isNaN(p.hl) && p.hw > 0 && p.hl > 0);

  const regressionRes =
    parsedPairs.length >= 2
      ? calculateHaresApparatusDensity(
          parsedPairs.map((p) => p.hw),
          parsedPairs.map((p) => p.hl),
          1000
        )
      : null;

  const refDens = parseFloat(referenceDensity);
  const percError =
    regressionRes && !isNaN(refDens) && refDens > 0
      ? Math.abs((regressionRes.liquidDensity - refDens) / refDens) * 100
      : null;

  const isPass = percError !== null && percError <= 3.0;

  const handleLoadSample = () => {
    setReadings([
      { id: 1, hWater: '12.0', hLiquid: '15.0' },
      { id: 2, hWater: '16.0', hLiquid: '20.0' },
      { id: 3, hWater: '20.0', hLiquid: '25.0' },
      { id: 4, hWater: '24.0', hLiquid: '30.0' },
      { id: 5, hWater: '28.0', hLiquid: '35.0' },
      { id: 6, hWater: '32.0', hLiquid: '40.0' },
    ]);
    setReferenceDensity('800');
  };

  const handleClear = () => {
    setReadings(readings.map((r) => ({ ...r, hWater: '', hLiquid: '' })));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-[#DFE8EF] shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#14243A] font-serif">{t.title}</h2>
          <p className="text-sm text-[#475569] mt-1">{t.aim}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleLoadSample} className="text-[#0F766E] border-[#DFE8EF]">
            <Database className="w-4 h-4 mr-1.5" />
            {t.loadSample}
          </Button>
          <Button variant="outline" size="sm" onClick={handleClear} className="text-[#475569] border-[#DFE8EF]">
            <RotateCcw className="w-4 h-4 mr-1.5" />
            {t.clearInputs}
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()} className="text-[#475569] border-[#DFE8EF]">
            <Printer className="w-4 h-4 mr-1.5" />
            {t.printSheet}
          </Button>
        </div>
      </div>

      {/* Grid: Schematic & Physical Principle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hare's Apparatus Schematic */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'හේයාර් උපකරණයේ සැකැස්ම' : 'Hare’s Apparatus Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="280" height="260" viewBox="0 0 280 260" className="overflow-visible">
                {/* Clamp Stand */}
                <line x1="30" y1="20" x2="30" y2="245" stroke="#94A3B8" strokeWidth="4" />
                <rect x="15" y="245" width="70" height="10" fill="#64748B" rx="2" />
                <line x1="30" y1="90" x2="100" y2="90" stroke="#94A3B8" strokeWidth="3" />

                {/* Beaker 1: Water (Left) */}
                <rect x="75" y="190" width="50" height="50" fill="none" stroke="#64748B" strokeWidth="2" rx="2" />
                <rect x="76" y="205" width="48" height="34" fill="#E0F2FE" />
                <line x1="75" y1="205" x2="125" y2="205" stroke="#0284C7" strokeWidth="1.5" />
                <text x="100" y="255" textAnchor="middle" fontSize="9" fill="#0284C7">Water Beaker</text>

                {/* Beaker 2: Liquid (Right) */}
                <rect x="155" y="190" width="50" height="50" fill="none" stroke="#64748B" strokeWidth="2" rx="2" />
                <rect x="156" y="205" width="48" height="34" fill="#FEF3C7" />
                <line x1="155" y1="205" x2="205" y2="205" stroke="#D97706" strokeWidth="1.5" />
                <text x="180" y="255" textAnchor="middle" fontSize="9" fill="#D97706">Liquid Beaker</text>

                {/* Inverted T-tube Glass */}
                {/* Left limb */}
                <line x1="100" y1="40" x2="100" y2="230" stroke="#CBD5E1" strokeWidth="10" />
                <line x1="100" y1="40" x2="100" y2="230" stroke="#FFFFFF" strokeWidth="6" />
                {/* Right limb */}
                <line x1="180" y1="40" x2="180" y2="230" stroke="#CBD5E1" strokeWidth="10" />
                <line x1="180" y1="40" x2="180" y2="230" stroke="#FFFFFF" strokeWidth="6" />
                {/* Top horizontal link */}
                <line x1="95" y1="40" x2="185" y2="40" stroke="#CBD5E1" strokeWidth="10" />
                <line x1="95" y1="40" x2="185" y2="40" stroke="#FFFFFF" strokeWidth="6" />

                {/* Top suction tube with clip */}
                <line x1="140" y1="40" x2="140" y2="15" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                <rect x="133" y="20" width="14" height="8" fill="#1E293B" rx="2" />
                <text x="140" y="10" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">Clip / Pinch Cock</text>

                {/* Water Column (Left, Blue) */}
                <line x1="100" y1="120" x2="100" y2="205" stroke="#79B9E7" strokeWidth="6" />
                <ellipse cx="100" cy="120" rx="3" ry="1.5" fill="#0284C7" />

                {/* Liquid Column (Right, Amber) */}
                <line x1="180" y1="100" x2="180" y2="205" stroke="#F59E0B" strokeWidth="6" />
                <ellipse cx="180" cy="100" rx="3" ry="1.5" fill="#D97706" />

                {/* Height Annotations */}
                <line x1="68" y1="120" x2="68" y2="205" stroke="#0284C7" strokeWidth="1.5" />
                <polygon points="68,120 65,126 71,126" fill="#0284C7" />
                <polygon points="68,205 65,199 71,199" fill="#0284C7" />
                <text x="50" y="166" fontSize="11" fill="#0284C7" fontWeight="bold">h_w</text>

                <line x1="212" y1="100" x2="212" y2="205" stroke="#D97706" strokeWidth="1.5" />
                <polygon points="212,100 209,106 215,106" fill="#D97706" />
                <polygon points="212,205 209,199 215,199" fill="#D97706" />
                <text x="218" y="156" fontSize="11" fill="#D97706" fontWeight="bold">h_L</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'හේයාර් උපකරණයේ ද්‍රව කඳන්: h_w · ρ_w = h_L · ρ_L' : 'Hare’s Columns Balance: h_w · ρ_w = h_L · ρ_L'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Procedure */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF]">
              <span className="font-semibold text-[#14243A]">{t.apparatus.split(':')[0]}:</span>
              <span>{t.apparatus.split(':')[1]}</span>
            </div>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF]">
              <span className="font-semibold text-[#14243A]">{t.procedure.split(':')[0]}:</span>
              <span>{t.procedure.split(':')[1]}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Observations and Graph Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Table */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.obsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6FAFD] border-b border-[#DFE8EF] text-[#14243A]">
                    <th className="py-2 px-3 font-semibold">{t.trialCol}</th>
                    <th className="py-2 px-3 font-semibold">{t.hwCol}</th>
                    <th className="py-2 px-3 font-semibold">{t.hlCol}</th>
                    <th className="py-2 px-3 font-semibold">{t.ratioCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map((r) => {
                    const hw = parseFloat(r.hWater);
                    const hl = parseFloat(r.hLiquid);
                    const ratio = !isNaN(hw) && !isNaN(hl) && hl > 0 ? (hw / hl).toFixed(3) : '—';
                    return (
                      <tr key={r.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                        <td className="py-2 px-3 font-medium text-[#14243A]">{r.id}</td>
                        <td className="py-1 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.hWater}
                            onChange={(e) => updateReading(r.id, 'hWater', e.target.value)}
                            placeholder="hw"
                            className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                          />
                        </td>
                        <td className="py-1 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.hLiquid}
                            onChange={(e) => updateReading(r.id, 'hLiquid', e.target.value)}
                            placeholder="hL"
                            className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                          />
                        </td>
                        <td className="py-2 px-3 font-mono font-semibold text-[#0F766E]">
                          {ratio}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* SVG Scatter Plot / Regression */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#0F766E]" />
              {t.graphTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="300" height="220" viewBox="0 0 300 220" className="overflow-visible">
                {/* Axes */}
                <line x1="45" y1="190" x2="280" y2="190" stroke="#1E293B" strokeWidth="1.5" />
                <line x1="45" y1="190" x2="45" y2="20" stroke="#1E293B" strokeWidth="1.5" />
                <text x="280" y="205" fontSize="10" fill="#1E293B" textAnchor="end">h_L (cm) →</text>
                <text x="40" y="20" fontSize="10" fill="#1E293B" textAnchor="end">h_w (cm) ↑</text>

                {/* Gridlines */}
                {[50, 100, 150].map((y) => (
                  <line key={y} x1="45" y1={y} x2="280" y2={y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
                ))}
                {[100, 160, 220].map((x) => (
                  <line key={x} x1={x} y1="20" x2={x} y2="190" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
                ))}

                {/* Regression Line */}
                {regressionRes && (
                  <line
                    x1="45"
                    y1="190"
                    x2="270"
                    y2={190 - (225 * regressionRes.gradient * (45 / 50))}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}

                {/* Data Points */}
                {parsedPairs.map((p) => {
                  // Map hl: 0..50 cm -> 45..270 px; hw: 0..40 cm -> 190..30 px
                  const cx = 45 + (p.hl / 50) * 225;
                  const cy = 190 - (p.hw / 40) * 160;
                  return (
                    <g key={p.id}>
                      <circle cx={cx} cy={cy} r="4" fill="#0F766E" stroke="#FFFFFF" strokeWidth="1.5" />
                      <line x1={cx - 3} y1={cy - 3} x2={cx + 3} y2={cy + 3} stroke="#0F766E" strokeWidth="1" />
                      <line x1={cx - 3} y1={cy + 3} x2={cx + 3} y2={cy - 3} stroke="#0F766E" strokeWidth="1" />
                    </g>
                  );
                })}
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'සරල රේඛාවේ අනුක්‍රමණය m = ρ_L / ρ_w' : 'Slope of best-fit line: m = ρ_L / ρ_w'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analytical Summary */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.calcSummaryTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.bestFitSlope}</span>
                <span className="font-bold text-[#14243A] font-mono text-base">
                  {regressionRes ? regressionRes.gradient.toFixed(4) : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.calcDensity}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {regressionRes ? `${regressionRes.liquidDensity.toFixed(1)} kg m⁻³` : '—'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#475569]">{t.refDensity}</span>
                <input
                  type="number"
                  value={referenceDensity}
                  onChange={(e) => setReferenceDensity(e.target.value)}
                  className="w-24 px-2 py-0.5 text-right font-mono font-bold text-[#14243A] border border-[#DFE8EF] rounded"
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.percentageDiff}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {percError !== null ? `${percError.toFixed(2)}%` : '—'}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-3 rounded-lg border bg-white">
              {isPass ? (
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictFail}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Precautions */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.precautionsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#475569] leading-relaxed">{t.precautions}</p>
        </CardContent>
      </Card>
    </div>
  );
};

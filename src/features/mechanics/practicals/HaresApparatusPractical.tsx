'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateHaresApparatusDensity } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

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
  const {
    observations,
    updateObservations,
    loadSampleObservations,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-8-hares',
    defaultObservations: {
      readings: [
        { id: 1, hWater: '12.0', hLiquid: '15.0' },
        { id: 2, hWater: '16.0', hLiquid: '20.0' },
        { id: 3, hWater: '20.0', hLiquid: '25.0' },
        { id: 4, hWater: '24.0', hLiquid: '30.0' },
        { id: 5, hWater: '28.0', hLiquid: '35.0' },
        { id: 6, hWater: '32.0', hLiquid: '40.0' },
      ],
      referenceDensity: '800',
    },
  });

  const readings = (observations.readings as HareReading[]) || [
    { id: 1, hWater: '12.0', hLiquid: '15.0' },
    { id: 2, hWater: '16.0', hLiquid: '20.0' },
    { id: 3, hWater: '20.0', hLiquid: '25.0' },
    { id: 4, hWater: '24.0', hLiquid: '30.0' },
    { id: 5, hWater: '28.0', hLiquid: '35.0' },
    { id: 6, hWater: '32.0', hLiquid: '40.0' },
  ];

  const referenceDensity = observations.referenceDensity || '800';
  const setReferenceDensity = (val: string) => updateObservations({ referenceDensity: val });

  const t = {
    en: {
      title: 'Practical 8: Determination of Relative Density of a Liquid Using Hare’s Apparatus',
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
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 8: හේයාර්ගේ උපකරණය භාවිතයෙන් ද්‍රවයක සාපේක්ෂ ඝනත්වය සෙවීම',
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
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const updateReading = (id: number, field: 'hWater' | 'hLiquid', val: string) => {
    const updated = readings.map((r) => (r.id === id ? { ...r, [field]: val } : r));
    updateObservations({ readings: updated });
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
    loadSampleObservations({
      readings: [
        { id: 1, hWater: '12.0', hLiquid: '15.0' },
        { id: 2, hWater: '16.0', hLiquid: '20.0' },
        { id: 3, hWater: '20.0', hLiquid: '25.0' },
        { id: 4, hWater: '24.0', hLiquid: '30.0' },
        { id: 5, hWater: '28.0', hLiquid: '35.0' },
        { id: 6, hWater: '32.0', hLiquid: '40.0' },
      ],
      referenceDensity: '800',
    });
  };

  const handleClear = () => {
    reset();
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
          <Button variant="outline" size="sm" onClick={() => window.print()} className="text-[#14243A] border-[#DFE8EF]">
            <Printer className="w-4 h-4 mr-1.5" />
            {t.printSheet}
          </Button>
        </div>
      </div>

      {/* Theory & Method */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#0F766E]" />
            {t.theoryTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-[#475569] whitespace-pre-line leading-relaxed">{t.theoryText}</p>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-xs text-[#475569] font-mono leading-relaxed">{t.procedure}</p>
          </div>
        </CardContent>
      </Card>

      {/* Main Grid: Data Table & Interactive Plot */}
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
                    <th className="py-2.5 px-3 font-semibold w-14">{t.trialCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.hlCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.hwCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.ratioCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFE8EF]">
                  {readings.map((r) => {
                    const hw = parseFloat(r.hWater);
                    const hl = parseFloat(r.hLiquid);
                    const ratio = !isNaN(hw) && !isNaN(hl) && hl > 0 ? (hw / hl).toFixed(3) : '—';
                    return (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-mono text-[#64748B]">{r.id}</td>
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.hLiquid}
                            onChange={(e) => updateReading(r.id, 'hLiquid', e.target.value)}
                            placeholder="0.0"
                            className="w-24 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                          />
                        </td>
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.hWater}
                            onChange={(e) => updateReading(r.id, 'hWater', e.target.value)}
                            placeholder="0.0"
                            className="w-24 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                          />
                        </td>
                        <td className="py-2 px-3 font-mono text-[#0F766E] font-medium">{ratio}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Scatter & Regression Line Graph */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#0F766E]" />
              {t.graphTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* SVG Plot */}
            <div className="w-full max-w-sm aspect-square bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] p-4 relative">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Grid lines */}
                <line x1="40" y1="20" x2="40" y2="260" stroke="#DFE8EF" strokeWidth="1.5" />
                <line x1="40" y1="260" x2="280" y2="260" stroke="#DFE8EF" strokeWidth="1.5" />

                <line x1="40" y1="200" x2="280" y2="200" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                <line x1="40" y1="140" x2="280" y2="140" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                <line x1="40" y1="80" x2="280" y2="80" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />

                <line x1="100" y1="20" x2="100" y2="260" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                <line x1="160" y1="20" x2="160" y2="260" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />
                <line x1="220" y1="20" x2="220" y2="260" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3" />

                {/* Axes labels */}
                <text x="160" y="290" textAnchor="middle" className="text-[11px] fill-[#64748B]">h_L (cm)</text>
                <text x="15" y="140" textAnchor="middle" transform="rotate(-90 15 140)" className="text-[11px] fill-[#64748B]">h_w (cm)</text>

                {/* Axis origin and tick numbers */}
                <text x="35" y="275" textAnchor="end" className="text-[9px] fill-[#64748B]">0</text>
                <text x="100" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">10</text>
                <text x="160" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">20</text>
                <text x="220" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">30</text>
                <text x="280" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">40</text>

                <text x="35" y="203" textAnchor="end" className="text-[9px] fill-[#64748B]">10</text>
                <text x="35" y="143" textAnchor="end" className="text-[9px] fill-[#64748B]">20</text>
                <text x="35" y="83" textAnchor="end" className="text-[9px] fill-[#64748B]">30</text>
                <text x="35" y="23" textAnchor="end" className="text-[9px] fill-[#64748B]">40</text>

                {/* Regression Line */}
                {regressionRes && (
                  <line
                    x1="40"
                    y1="260"
                    x2={40 + 6 * 40}
                    y2={260 - 6 * (40 * regressionRes.gradient)}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}

                {/* Plotted points */}
                {parsedPairs.map((p) => {
                  const cx = 40 + (p.hl / 40) * 240;
                  const cy = 260 - (p.hw / 40) * 240;
                  if (cx >= 40 && cx <= 280 && cy >= 20 && cy <= 260) {
                    return (
                      <circle
                        key={p.id}
                        cx={cx}
                        cy={cy}
                        r="3.5"
                        fill="#0F766E"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
            <p className="text-xs text-[#64748B] mt-2 italic text-center">
              Origin-constrained linear fit line passes through (0,0)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Regression Results & Comparison */}
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

          {/* Submit Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <Button
              className="w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white"
              onClick={() => setCompleted(true)}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> {t.submitLab}
            </Button>
            {isCompleted && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {t.submittedMsg}
              </span>
            )}
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

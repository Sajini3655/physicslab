'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateWeightedTestTubeHydrometer } from '../physics/calculations';

interface WeightedTestTubePracticalProps {
  locale?: Locale;
}

interface TubeReading {
  id: number;
  leadMass: string; // g
  depthH: string;   // cm
}

export const WeightedTestTubePractical: React.FC<WeightedTestTubePracticalProps> = ({
  locale = 'en',
}) => {
  const [emptyTubeMass, setEmptyTubeMass] = useState<string>('18.5'); // g
  const [tubeDiameter, setTubeDiameter] = useState<string>('2.20');   // cm

  const [readings, setReadings] = useState<TubeReading[]>([
    { id: 1, leadMass: '10.0', depthH: '7.5' },
    { id: 2, leadMass: '15.0', depthH: '8.8' },
    { id: 3, leadMass: '20.0', depthH: '10.1' },
    { id: 4, leadMass: '25.0', depthH: '11.4' },
    { id: 5, leadMass: '30.0', depthH: '12.8' },
  ]);

  const [expectedDensity, setExpectedDensity] = useState<string>('1.00'); // g/cm^3 (water)

  const t = {
    en: {
      title: 'Practical 2.5: Principle of Flotation & Loaded Test Tube Hydrometer',
      aim: 'Aim: To verify the Law of Flotation and determine the density of a liquid using a loaded test tube floating vertically as a hydrometer.',
      apparatus: 'Apparatus: Flat or round-bottomed test tube, lead shots / sand, millimeter graph scale insert, tall measuring jar, external calipers, chemical balance, test liquid (distilled water / brine).',
      theoryTitle: 'Physical Principle & Law of Flotation',
      theoryText: 'A body floats freely in equilibrium when its total weight equals the buoyant upthrust of the displaced liquid:\n\nTotal Weight W = M · g = (m_empty + m_shots) · g\nBuoyant Upthrust U = V_submerged · ρ_L · g = (A · h) · ρ_L · g\n\nEquating W = U gives:\nM = (A · ρ_L) · h\n\nWhere:\n• M = total mass of loaded tube (g)\n• A = external cross-sectional area of tube (cm²) = π · (d/2)²\n• h = depth of immersion (cm)\n• ρ_L = liquid density (g cm⁻³)\n\nA plot of total mass M against immersion depth h produces a straight line whose slope is m = A · ρ_L. From the measured diameter d, the density is:\nρ_L = m / A',
      procedure: 'Procedure: 1. Measure the external diameter d of the test tube using vernier calipers at several places. 2. Insert a strip of graph paper marked in millimeters inside the tube. 3. Weigh the empty tube. 4. Place lead shots at the bottom so that it floats strictly upright in the tall measuring cylinder without touching the jar sides. 5. Note the total mass M and the depth of immersion h. 6. Add more lead shots in stages, recording 5 pairs of (M, h) values. 7. Plot M vs h, find the slope, and calculate liquid density ρ_L.',
      obsTitle: 'Observations Table: Mass vs Immersion Depth',
      tubeMassLabel: 'Empty Tube Mass (g):',
      tubeDiamLabel: 'External Diameter d (cm):',
      trialCol: 'Trial',
      shotsCol: 'Added Shot Mass (g)',
      totalMassCol: 'Total Mass M (g)',
      depthCol: 'Immersion Depth h (cm)',
      calcSummaryTitle: 'Hydrometer Slope & Density Calculation',
      tubeArea: 'External Cross-Sectional Area A:',
      slopeLabel: 'Slope of M vs h (m = A·ρ_L):',
      calcDensity: 'Derived Liquid Density ρ_L:',
      expDensityLabel: 'Standard Density (g cm⁻³):',
      percentageDiff: 'Percentage Difference:',
      verdictPass: 'Flotation Law Verified (Discrepancy ≤ 4%)',
      verdictFail: 'Check Vertical Alignment or Wall Contact',
      graphTitle: 'Flotation Graph (Total Mass M vs Depth h)',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. The test tube must float strictly vertical without tilting; distribute the lead shots uniformly at the bottom. 2. The tube must not touch the sides or bottom of the measuring jar. 3. Keep the outer glass surface above the immersion line dry to avoid extraneous weight from water droplets. 4. Read the bottom of the water meniscus against the millimeter scale accurately.',
      loadSample: 'Load Sample Data (Water)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2.5: පාවීමේ නියමය සහ බර යෙදූ පරීක්ෂණ නළ ආරාවලිය',
      aim: 'අරමුණ: පාවීමේ නියමය සත්‍යාපනය කිරීම සහ සිරස්ව පාවෙන බර යෙදූ පරීක්ෂණ නළයක් මඟින් ද්‍රවයක ඝනත්වය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: පතුල පැතලි හෝ ගෝලාකාර පරීක්ෂණ නළය, ඊයම් මූනිස්සම්, මිලිමීටර් පරිමාණ කඩදාසි පටියක්, උස මිනුම් සිලින්ඩරය, වර්නියර් කැලිපරය, තුලාව, පරීක්ෂණ ද්‍රවය (ජලය).',
      theoryTitle: 'භෞතික මූලධර්මය සහ පාවීමේ නියමය',
      theoryText: 'වස්තුවක් ද්‍රවයක නිදහසේ පාවෙන විට එහි මුළු බර විස්ථාපිත ද්‍රවයේ උඩුකුරු තෙරපුමට සමාන වේ:\n\nමුළු බර W = M · g = (m_හිස් + m_මූනිස්සම්) · g\nඋඩුකුරු තෙරපුම U = V_ගිලුණු · ρ_L · g = (A · h) · ρ_L · g\n\nW = U සමතුලිතතාවයෙන්:\nM = (A · ρ_L) · h\n\nමෙහි:\n• M = නළයේ මුළු ස්කන්ධය (g)\n• A = බාහිර හරස්කඩ වර්ගඵලය (cm²) = π · (d/2)²\n• h = ගිලුණු ගැඹුර (cm)\n• ρ_L = ද්‍රව ඝනත්වය (g cm⁻³)\n\nh ට එදිරිව M ප්‍රස්ථාරයේ බෑවුම m = A · ρ_L වේ. මනින ලද විෂ්කම්භයෙන් ද්‍රව ඝනත්වය ලැබේ:\nρ_L = m / A',
      procedure: 'ක්‍රමවේදය: 1. වර්නියර් කැලිපරයෙන් නළයේ බාහිර විෂ්කම්භය d මනින්න. 2. නළය තුළට මිලිමීටර් පරිමාණ කඩදාසි පටියක් දමන්න. 3. හිස් නළය කිරාගන්න. 4. නළය සිරස්ව පාවෙන සේ ඊයම් මූනිස්සම් දමා මිනුම් සිලින්ඩරයේ පා කරන්න. 5. මුළු ස්කන්ධය M සහ ගිලුණු ගැඹුර h සටහන් කරන්න. 6. ඊයම් මූනිස්සම් එකතු කරමින් කියවීම් 5ක් ලබාගන්න. 7. h ට එදිරිව M ප්‍රස්ථාරය ඇඳ බෑවුමෙන් ද්‍රව ඝනත්වය ρ_L ගණනය කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන: මුළු ස්කන්ධය M සහ ගිලුණු ගැඹුර h',
      tubeMassLabel: 'හිස් නළයේ ස්කන්ධය (g):',
      tubeDiamLabel: 'බාහිර විෂ්කම්භය d (cm):',
      trialCol: 'වාරය',
      shotsCol: 'මූනිස්සම් ස්කන්ධය (g)',
      totalMassCol: 'මුළු ස්කන්ධය M (g)',
      depthCol: 'ගිලුණු ගැඹුර h (cm)',
      calcSummaryTitle: 'ආරාවලි බෑවුම සහ ඝනත්ව ගණනය',
      tubeArea: 'බාහිර හරස්කඩ වර්ගඵලය A:',
      slopeLabel: 'h ට එදිරිව M බෑවුම (m = A·ρ_L):',
      calcDensity: 'ලබාගත් ද්‍රව ඝනත්වය ρ_L:',
      expDensityLabel: 'සම්මත ඝනත්වය (g cm⁻³):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'පාවීමේ නියමය සත්‍යාපනය විය (වෙනස ≤ 4%)',
      verdictFail: 'නළයේ සිරස් බව හෝ බිත්තියේ ගැටීම පරීක්ෂා කරන්න',
      graphTitle: 'පාවීමේ ප්‍රස්ථාරය (h ට එදිරිව M)',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. නළය ඇල නොවී හරියටම සිරස්ව පාවිය යුතුය. 2. මිනුම් සිලින්ඩර බිත්තිවල හෝ පතුලේ නොගෑවිය යුතුය. 3. ජල බිංදු හේතුවෙන් ස්කන්ධය වැඩි නොවන සේ නළයේ ඉහළ බාහිර වියළිව තබාගන්න. 4. මෙනිස්කසයේ පතුල මිලිමීටර් පරිමාණයෙන් නිවැරදිව කියවන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (ජලය)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateReading = (id: number, field: 'leadMass' | 'depthH', val: string) => {
    setReadings(readings.map((r) => (r.id === id ? { ...r, [field]: val } : r)));
  };

  const emptyM = parseFloat(emptyTubeMass) || 0;
  const dVal = parseFloat(tubeDiameter) || 0;
  const tubeAreaCm2 = dVal > 0 ? (Math.PI * (dVal / 2) ** 2) : 0;

  const parsedPairs = readings
    .map((r) => {
      const lm = parseFloat(r.leadMass);
      const h = parseFloat(r.depthH);
      const totalM = !isNaN(lm) ? emptyM + lm : NaN;
      return { id: r.id, totalM, h };
    })
    .filter((p) => !isNaN(p.totalM) && !isNaN(p.h) && p.totalM > 0 && p.h > 0);

  const calcResult =
    parsedPairs.length >= 2 && tubeAreaCm2 > 0
      ? calculateWeightedTestTubeHydrometer(
          parsedPairs.map((p) => p.totalM),
          parsedPairs.map((p) => p.h),
          tubeAreaCm2
        )
      : null;

  const expD = parseFloat(expectedDensity);
  const percDiff =
    calcResult && !isNaN(expD) && expD > 0
      ? Math.abs((calcResult.liquidDensityGcm3 - expD) / expD) * 100
      : null;

  const isPass = percDiff !== null && percDiff <= 4.0;

  const handleLoadSample = () => {
    setEmptyTubeMass('18.5');
    setTubeDiameter('2.20');
    setReadings([
      { id: 1, leadMass: '10.0', depthH: '7.5' },
      { id: 2, leadMass: '15.0', depthH: '8.8' },
      { id: 3, leadMass: '20.0', depthH: '10.1' },
      { id: 4, leadMass: '25.0', depthH: '11.4' },
      { id: 5, leadMass: '30.0', depthH: '12.8' },
    ]);
    setExpectedDensity('1.00');
  };

  const handleClear = () => {
    setReadings(readings.map((r) => ({ ...r, leadMass: '', depthH: '' })));
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
        {/* Schematic SVG */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'පරීක්ෂණ නළ ආරාවලි සැකැස්ම' : 'Loaded Test Tube Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="260" height="260" viewBox="0 0 260 260" className="overflow-visible">
                {/* Measuring Jar Outer Glass */}
                <rect x="70" y="30" width="120" height="210" fill="none" stroke="#64748B" strokeWidth="2.5" rx="3" />
                <rect x="50" y="240" width="160" height="12" fill="#64748B" rx="3" />

                {/* Liquid in Jar */}
                <rect x="72" y="70" width="116" height="168" fill="#E0F2FE" />
                <line x1="70" y1="70" x2="190" y2="70" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 2" />
                <text x="195" y="74" fontSize="9" fill="#0284C7">Liquid Level</text>

                {/* Test Tube floating */}
                {/* Glass wall */}
                <rect x="110" y="20" width="30" height="170" fill="#FFFFFF" stroke="#334155" strokeWidth="2" rx="4" />
                {/* Millimeter insert strip */}
                <rect x="116" y="25" width="6" height="160" fill="#FEF08A" stroke="#EAB308" strokeWidth="1" />
                {[40, 60, 80, 100, 120, 140, 160].map((y) => (
                  <line key={y} x1="116" y1={y} x2="122" y2={y} stroke="#854D0E" strokeWidth="1" />
                ))}

                {/* Lead shots at bottom */}
                <circle cx="120" cy="180" r="3.5" fill="#475569" />
                <circle cx="128" cy="180" r="3.5" fill="#475569" />
                <circle cx="124" cy="174" r="3.5" fill="#475569" />
                <circle cx="120" cy="168" r="3.5" fill="#475569" />
                <circle cx="128" cy="168" r="3.5" fill="#475569" />

                {/* Immersion Depth Dimension */}
                <line x1="148" y1="70" x2="148" y2="190" stroke="#DC2626" strokeWidth="1.5" />
                <polygon points="148,70 145,76 151,76" fill="#DC2626" />
                <polygon points="148,190 145,184 151,184" fill="#DC2626" />
                <text x="154" y="135" fontSize="11" fill="#DC2626" fontWeight="bold">h</text>

                {/* Total mass arrow */}
                <line x1="125" y1="190" x2="125" y2="225" stroke="#1E293B" strokeWidth="2" />
                <polygon points="125,225 121,218 129,218" fill="#1E293B" />
                <text x="125" y="238" textAnchor="middle" fontSize="10" fill="#1E293B" fontWeight="bold">W = M·g</text>

                {/* Upthrust arrow */}
                <line x1="100" y1="190" x2="100" y2="150" stroke="#0F766E" strokeWidth="2" />
                <polygon points="100,150 96,157 104,157" fill="#0F766E" />
                <text x="95" y="145" textAnchor="end" fontSize="10" fill="#0F766E" fontWeight="bold">U = A·h·ρ·g</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'පාවීමේ තුල්‍යතාව: W = U ⇒ M = (A · ρ) · h' : 'Flotation Equilibrium: W = U ⇒ M = (A · ρ) · h'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Constant Inputs */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF]">
              <div>
                <label className="text-xs font-semibold text-[#14243A] block mb-1">{t.tubeMassLabel}</label>
                <input
                  type="number"
                  step="0.1"
                  value={emptyTubeMass}
                  onChange={(e) => setEmptyTubeMass(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#14243A] block mb-1">{t.tubeDiamLabel}</label>
                <input
                  type="number"
                  step="0.01"
                  value={tubeDiameter}
                  onChange={(e) => setTubeDiameter(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Observations & Regression Graph */}
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
                    <th className="py-2 px-3 font-semibold">{t.shotsCol}</th>
                    <th className="py-2 px-3 font-semibold">{t.totalMassCol}</th>
                    <th className="py-2 px-3 font-semibold">{t.depthCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map((r) => {
                    const lm = parseFloat(r.leadMass);
                    const totalM = !isNaN(lm) ? (emptyM + lm).toFixed(1) : '—';
                    return (
                      <tr key={r.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                        <td className="py-2 px-3 font-medium text-[#14243A]">{r.id}</td>
                        <td className="py-1 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.leadMass}
                            onChange={(e) => updateReading(r.id, 'leadMass', e.target.value)}
                            placeholder="m_shots"
                            className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                          />
                        </td>
                        <td className="py-2 px-3 font-mono font-semibold text-[#0F766E]">
                          {totalM}
                        </td>
                        <td className="py-1 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.depthH}
                            onChange={(e) => updateReading(r.id, 'depthH', e.target.value)}
                            placeholder="h"
                            className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                          />
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
                <text x="280" y="205" fontSize="10" fill="#1E293B" textAnchor="end">Depth h (cm) →</text>
                <text x="40" y="20" fontSize="10" fill="#1E293B" textAnchor="end">Mass M (g) ↑</text>

                {/* Gridlines */}
                {[50, 100, 150].map((y) => (
                  <line key={y} x1="45" y1={y} x2="280" y2={y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
                ))}
                {[100, 160, 220].map((x) => (
                  <line key={x} x1={x} y1="20" x2={x} y2="190" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
                ))}

                {/* Points */}
                {parsedPairs.map((p) => {
                  // Map h: 0..16 cm -> 45..270 px; M: 0..60 g -> 190..30 px
                  const cx = 45 + (p.h / 16) * 225;
                  const cy = 190 - (p.totalM / 60) * 160;
                  return (
                    <g key={p.id}>
                      <circle cx={cx} cy={cy} r="4" fill="#0F766E" stroke="#FFFFFF" strokeWidth="1.5" />
                      <line x1={cx - 3} y1={cy - 3} x2={cx + 3} y2={cy + 3} stroke="#0F766E" strokeWidth="1" />
                      <line x1={cx - 3} y1={cy + 3} x2={cx + 3} y2={cy - 3} stroke="#0F766E" strokeWidth="1" />
                    </g>
                  );
                })}

                {/* Regression Line */}
                {calcResult && (
                  <line
                    x1="45"
                    y1="190"
                    x2="270"
                    y2={190 - (16 * calcResult.slope * (160 / 60))}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'ප්‍රස්ථාරයේ බෑවුම m = A · ρ_L' : 'Flotation Slope: m = A · ρ_L'}
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
                <span className="text-[#475569]">{t.tubeArea}</span>
                <span className="font-bold text-[#14243A] font-mono text-base">
                  {tubeAreaCm2 > 0 ? `${tubeAreaCm2.toFixed(3)} cm²` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.slopeLabel}</span>
                <span className="font-bold text-[#14243A] font-mono text-base">
                  {calcResult ? `${calcResult.slope.toFixed(3)} g cm⁻¹` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.calcDensity}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {calcResult ? `${calcResult.liquidDensityGcm3.toFixed(3)} g cm⁻³` : '—'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#475569]">{t.expDensityLabel}</span>
                <input
                  type="number"
                  step="0.01"
                  value={expectedDensity}
                  onChange={(e) => setExpectedDensity(e.target.value)}
                  className="w-24 px-2 py-0.5 text-right font-mono font-bold text-[#14243A] border border-[#DFE8EF] rounded"
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.percentageDiff}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {percDiff !== null ? `${percDiff.toFixed(2)}%` : '—'}
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

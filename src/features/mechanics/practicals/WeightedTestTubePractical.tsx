'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateWeightedTestTubeHydrometer } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

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
  const {
    observations,
    updateObservations,
    loadSampleObservations,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-9-test-tube',
    defaultObservations: {
      emptyTubeMass: '18.5',
      tubeDiameter: '2.20',
      readings: [
        { id: 1, leadMass: '10.0', depthH: '7.5' },
        { id: 2, leadMass: '15.0', depthH: '8.8' },
        { id: 3, leadMass: '20.0', depthH: '10.1' },
        { id: 4, leadMass: '25.0', depthH: '11.4' },
        { id: 5, leadMass: '30.0', depthH: '12.8' },
      ],
      expectedDensity: '1.00',
    },
  });

  const emptyTubeMass = observations.emptyTubeMass || '18.5';
  const setEmptyTubeMass = (val: string) => updateObservations({ emptyTubeMass: val });

  const tubeDiameter = observations.tubeDiameter || '2.20';
  const setTubeDiameter = (val: string) => updateObservations({ tubeDiameter: val });

  const readings = (observations.readings as TubeReading[]) || [
    { id: 1, leadMass: '10.0', depthH: '7.5' },
    { id: 2, leadMass: '15.0', depthH: '8.8' },
    { id: 3, leadMass: '20.0', depthH: '10.1' },
    { id: 4, leadMass: '25.0', depthH: '11.4' },
    { id: 5, leadMass: '30.0', depthH: '12.8' },
  ];

  const expectedDensity = observations.expectedDensity || '1.00';
  const setExpectedDensity = (val: string) => updateObservations({ expectedDensity: val });

  const t = {
    en: {
      title: 'Practical 9: Principle of Flotation & Loaded Test Tube Hydrometer',
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
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 9: පාවීමේ නියමය සහ බර යෙදූ පරීක්ෂණ නළය (ද්‍රවමානය)',
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
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const updateReading = (id: number, field: 'leadMass' | 'depthH', val: string) => {
    const updated = readings.map((r) => (r.id === id ? { ...r, [field]: val } : r));
    updateObservations({ readings: updated });
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
    loadSampleObservations({
      emptyTubeMass: '18.5',
      tubeDiameter: '2.20',
      readings: [
        { id: 1, leadMass: '10.0', depthH: '7.5' },
        { id: 2, leadMass: '15.0', depthH: '8.8' },
        { id: 3, leadMass: '20.0', depthH: '10.1' },
        { id: 4, leadMass: '25.0', depthH: '11.4' },
        { id: 5, leadMass: '30.0', depthH: '12.8' },
      ],
      expectedDensity: '1.00',
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

      {/* Physical Background */}
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
        {/* Table & Instrument Dimensions */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.obsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Tube Initial Dimensions */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <div>
                <label className="text-xs font-semibold text-[#14243A] block mb-1">
                  {t.tubeMassLabel}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={emptyTubeMass}
                  onChange={(e) => setEmptyTubeMass(e.target.value)}
                  className="w-full px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#14243A] block mb-1">
                  {t.tubeDiamLabel}
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={tubeDiameter}
                  onChange={(e) => setTubeDiameter(e.target.value)}
                  className="w-full px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                />
              </div>
            </div>

            {/* Observation Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6FAFD] border-b border-[#DFE8EF] text-[#14243A]">
                    <th className="py-2.5 px-3 font-semibold w-12">{t.trialCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.shotsCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.totalMassCol}</th>
                    <th className="py-2.5 px-3 font-semibold">{t.depthCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFE8EF]">
                  {readings.map((r) => {
                    const lm = parseFloat(r.leadMass);
                    const totalM = !isNaN(lm) ? (emptyM + lm).toFixed(1) : '—';
                    return (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-mono text-[#64748B]">{r.id}</td>
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            step="0.5"
                            value={r.leadMass}
                            onChange={(e) => updateReading(r.id, 'leadMass', e.target.value)}
                            placeholder="0.0"
                            className="w-20 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                          />
                        </td>
                        <td className="py-2 px-3 font-mono text-[#14243A] font-semibold">{totalM}</td>
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            step="0.1"
                            value={r.depthH}
                            onChange={(e) => updateReading(r.id, 'depthH', e.target.value)}
                            placeholder="0.0"
                            className="w-20 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
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

        {/* Dynamic Scatter & Linear Fit (M vs h) */}
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
                <text x="160" y="290" textAnchor="middle" className="text-[11px] fill-[#64748B]">h (cm)</text>
                <text x="15" y="140" textAnchor="middle" transform="rotate(-90 15 140)" className="text-[11px] fill-[#64748B]">Total M (g)</text>

                {/* Ticks */}
                <text x="35" y="275" textAnchor="end" className="text-[9px] fill-[#64748B]">0</text>
                <text x="100" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">5</text>
                <text x="160" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">10</text>
                <text x="220" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">15</text>
                <text x="280" y="275" textAnchor="middle" className="text-[9px] fill-[#64748B]">20</text>

                <text x="35" y="203" textAnchor="end" className="text-[9px] fill-[#64748B]">20</text>
                <text x="35" y="143" textAnchor="end" className="text-[9px] fill-[#64748B]">40</text>
                <text x="35" y="83" textAnchor="end" className="text-[9px] fill-[#64748B]">60</text>
                <text x="35" y="23" textAnchor="end" className="text-[9px] fill-[#64748B]">80</text>

                {/* Linear Fit Line */}
                {calcResult && (
                  <line
                    x1="40"
                    y1="260"
                    x2={40 + (20 / 20) * 240}
                    y2={260 - ((calcResult.slope * 20) / 80) * 240}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}

                {/* Plotted points */}
                {parsedPairs.map((p) => {
                  const cx = 40 + (p.h / 20) * 240;
                  const cy = 260 - (p.totalM / 80) * 240;
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
              Linear regression line of Total Mass M against Immersion Depth h
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

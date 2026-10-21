'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateUTubeRelativeDensity } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface UTubePracticalProps {
  locale?: Locale;
}

interface UTubeTrial {
  id: number;
  hLiquid: string; // cm
  hWater: string;  // cm
}

export const UTubePractical: React.FC<UTubePracticalProps> = ({
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
    experimentId: 'exp-7-utube',
    defaultObservations: {
      trials: [
        { id: 1, hLiquid: '12.0', hWater: '9.8' },
        { id: 2, hLiquid: '16.0', hWater: '13.1' },
        { id: 3, hLiquid: '20.0', hWater: '16.4' },
        { id: 4, hLiquid: '24.0', hWater: '19.7' },
      ],
      expectedDensity: '0.82',
    },
  });

  const trials = (observations.trials as UTubeTrial[]) || [
    { id: 1, hLiquid: '12.0', hWater: '9.8' },
    { id: 2, hLiquid: '16.0', hWater: '13.1' },
    { id: 3, hLiquid: '20.0', hWater: '16.4' },
    { id: 4, hLiquid: '24.0', hWater: '19.7' },
  ];

  const expectedDensity = observations.expectedDensity || '0.82';
  const setExpectedDensity = (val: string) => updateObservations({ expectedDensity: val });

  const t = {
    en: {
      title: 'Practical 7: Determination of Relative Density of an Immiscible Liquid Using a U-Tube',
      aim: 'Aim: To determine the relative density of a liquid immiscible with water (e.g. kerosene / oil) using a vertical U-tube manometer.',
      apparatus: 'Apparatus: Glass U-tube of uniform bore, retort stand and clamp, metre rule, set squares, funnel, water, immiscible liquid (kerosene / paraffin oil).',
      theoryTitle: 'Physical Principle & Hydrostatic Balancing',
      theoryText: 'Consider two immiscible liquids in hydrostatic equilibrium inside a U-tube. Across a horizontal plane drawn through the interface (the datum line), the pressure in both arms must be equal:\n\nP_atm + h_L · ρ_L · g = P_atm + h_w · ρ_w · g\n\nCancelling atmospheric pressure P_atm and gravitational acceleration g yields:\nh_L · ρ_L = h_w · ρ_w\n\nTherefore, the relative density d of the test liquid with respect to water is:\nRelative Density d = ρ_L / ρ_w = h_w / h_L',
      procedure: 'Procedure: 1. Clamp the U-tube vertically using a plumb line. 2. Pour distilled water into the tube until it reaches about one-third the height of each arm. 3. Carefully add the immiscible liquid into one arm so a clear, bubble-free interface is formed. 4. Using a vertical metre rule and set squares, note the position of the interface, the top surface of the liquid column, and the top surface of the water column. 5. Calculate the heights h_L and h_w above the interface datum. 6. Repeat for 3–5 different volumes of liquid.',
      obsTitle: 'Experimental Observations & Tabulation',
      trialCol: 'Trial',
      hLCol: 'Liquid Column h_L (cm)',
      hwCol: 'Water Column h_w (cm)',
      rdCol: 'Calculated RD (h_w / h_L)',
      calcSummaryTitle: 'Analytical Result & Comparison',
      meanRD: 'Mean Experimental Relative Density:',
      expectedRDLabel: 'Standard Reference Density (ρ_L / ρ_w):',
      percentageDiff: 'Percentage Difference from Reference:',
      verdictPass: 'Excellent Agreement with Standard (Diff ≤ 4%)',
      verdictFail: 'Review Interface Alignment or Meniscus Readings',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. The U-tube must be strictly vertical; inclination causes hydrostatic head errors. 2. Pour the test liquid gently along the inner wall to prevent emulsion formation at the boundary. 3. Read the lower meniscus for clear liquids and eliminate parallax by aligning set squares against the metre rule scale.',
      loadSample: 'Load Sample Data (Kerosene)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 7: U-නළය භාවිතයෙන් මිශ්‍ර නොවන ද්‍රවයක සාපේක්ෂ ඝනත්වය සෙවීම',
      aim: 'අරමුණ: සිරස් U-නළයක් භාවිතයෙන් ජලය සමඟ මිශ්‍ර නොවන ද්‍රවයක (උදා. භූමිතෙල් / පැරෆින් තෙල්) සාපේක්ෂ ඝනත්වය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ඒකාකාර හරස්කඩක් සහිත වීදුරු U-නළය, ආධාරකය සහ මංජුව, මීටර් රූල, සෘජුකෝණ ත්‍රිකෝණ, පුනීලය, ජලය, මිශ්‍ර නොවන පරීක්ෂණ ද්‍රවය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ ජලස්ථිතික සමතුලිතතාව',
      theoryText: 'U-නළයක් තුළ ජලස්ථිතික සමතුලිතතාවයේ පවතින මිශ්‍ර නොවන ද්‍රව දෙකක් සලකන්න. අන්තර්මුහුණත හරහා අඳින ලද තිරස් සමුද්දේශ මට්ටමේදී බාහු දෙකෙහිම පීඩනය සමාන විය යුතුය:\n\nP_atm + h_L · ρ_L · g = P_atm + h_w · ρ_w · g\n\nවායුගෝලීය පීඩනය P_atm සහ ගුරුත්වජ ත්වරණය g ඉවත් කළ විට:\nh_L · ρ_L = h_w · ρ_w\n\nඑබැවින් ජලයට සාපේක්ෂව පරීක්ෂණ ද්‍රවයේ සාපේක්ෂ ඝනත්වය d:\nසාපේක්ෂ ඝනත්වය d = ρ_L / ρ_w = h_w / h_L',
      procedure: 'ක්‍රමවේදය: 1. ලඹයක් ආධාරයෙන් U-නළය හරියටම සිරස්ව රඳවන්න. 2. නළයේ තුනෙන් එකක් පමණ උසකට ආසවනය කළ ජලය පුරවන්න. 3. එක් බාහුවකට මිශ්‍ර නොවන ද්‍රවය ප්‍රවේශමෙන් වත් කරන්න. 4. මීටර් රූල සහ සෘජුකෝණ ත්‍රිකෝණ යොදා අන්තර්මුහුණතේ මට්ටම සහ ද්‍රව කඳන් දෙකෙහි ඉහළ මට්ටම් කියවන්න. 5. අන්තර්මුහුණතේ සිට h_L සහ h_w උසවල් ගණනය කරන්න. 6. විවිධ ද්‍රව ප්‍රමාණ සඳහා කියවීම් කිහිපයක් ලබාගන්න.',
      obsTitle: 'නිරීක්ෂණ සහ දත්ත සටහන',
      trialCol: 'වාරය',
      hLCol: 'ද්‍රව කඳේ උස h_L (cm)',
      hwCol: 'ජල කඳේ උස h_w (cm)',
      rdCol: 'සාපේක්ෂ ඝනත්වය (h_w / h_L)',
      calcSummaryTitle: 'ප්‍රතිඵල විශ්ලේෂණය සහ සැසඳීම',
      meanRD: 'මධ්‍යන්‍ය සාපේක්ෂ ඝනත්වය:',
      expectedRDLabel: 'සම්මත සමුද්දේශ ඝනත්වය (ρ_L / ρ_w):',
      percentageDiff: 'සම්මතයෙන් ප්‍රතිශත වෙනස:',
      verdictPass: 'සම්මත අගය සමඟ ඉතා හොඳින් එකඟ වේ (වෙනස ≤ 4%)',
      verdictFail: 'අන්තර්මුහුණත කියවීම් හෝ දෘෂ්ටි විලාස දෝෂ පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. U-නළය සිරස්ව තබා ගත යුතුය. 2. බුබුළු හෝ මිශ්‍රවීම් ඇති නොවීමට ද්‍රවය නළ බිත්තිය දිගේ සෙමින් වත් කරන්න. 3. දෘෂ්ටි විලාස දෝෂය වැළැක්වීමට මීටර් රූල සහ සෘජුකෝණ ත්‍රිකෝණ භාවිත කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (භූමිතෙල්)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const updateTrial = (id: number, field: 'hLiquid' | 'hWater', val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const calculatedTrials = trials.map((tr) => {
    const hl = parseFloat(tr.hLiquid);
    const hw = parseFloat(tr.hWater);
    if (!isNaN(hl) && !isNaN(hw) && hl > 0 && hw > 0) {
      const res = calculateUTubeRelativeDensity(hw, hl);
      return { ...tr, rd: res.relativeDensity };
    }
    return { ...tr, rd: null };
  });

  const validRDs = calculatedTrials.map((t) => t.rd).filter((r): r is number => r !== null);
  const meanRD = validRDs.length > 0 ? validRDs.reduce((a, b) => a + b, 0) / validRDs.length : null;

  const expRD = parseFloat(expectedDensity);
  const percDiff =
    meanRD !== null && !isNaN(expRD) && expRD > 0
      ? Math.abs((meanRD - expRD) / expRD) * 100
      : null;

  const isPass = percDiff !== null && percDiff <= 4.0;

  const handleLoadSample = () => {
    loadSampleObservations({
      trials: [
        { id: 1, hLiquid: '12.0', hWater: '9.8' },
        { id: 2, hLiquid: '16.0', hWater: '13.1' },
        { id: 3, hLiquid: '20.0', hWater: '16.4' },
        { id: 4, hLiquid: '24.0', hWater: '19.7' },
      ],
      expectedDensity: '0.82',
    });
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Title & Actions */}
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

      {/* Theory & Physical Background */}
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

      {/* Observation Table */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.obsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#F6FAFD] border-b border-[#DFE8EF] text-[#14243A]">
                  <th className="py-2.5 px-3 font-semibold w-16">{t.trialCol}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.hLCol}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.hwCol}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.rdCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF]">
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-mono text-[#64748B]">{tr.id}</td>
                    <td className="py-2.5 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.hLiquid}
                        onChange={(e) => updateTrial(tr.id, 'hLiquid', e.target.value)}
                        placeholder="0.0"
                        className="w-28 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.hWater}
                        onChange={(e) => updateTrial(tr.id, 'hWater', e.target.value)}
                        placeholder="0.0"
                        className="w-28 px-2 py-1 text-sm font-mono border border-[#DFE8EF] rounded focus:outline-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono font-medium text-[#0F766E]">
                      {tr.rd !== null ? tr.rd.toFixed(3) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Results Summary Box */}
          <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.meanRD}</span>
                <span className="font-bold text-[#14243A] font-mono text-base">
                  {meanRD !== null ? meanRD.toFixed(3) : '—'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#475569]">{t.expectedRDLabel}</span>
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

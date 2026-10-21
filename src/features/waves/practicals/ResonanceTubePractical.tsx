'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Waves, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateResonanceTubeSpeed, calculateSpeedOfSoundInGas } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface ResonanceTubePracticalProps {
  locale?: Locale;
}

interface ResonanceTrial {
  id: number;
  freqHz: string;
  l1Cm: string;
  l2Cm: string;
}

export const ResonanceTubePractical: React.FC<ResonanceTubePracticalProps> = ({
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
    experimentId: 'exp-14-resonance',
    defaultObservations: {
      subMode: 'speed_of_sound',
      ambientTempC: '25.0',
      tubeDiameterMm: '30.0',
      trials: [
        { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
        { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
        { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
        { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
        { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
      ],
      unknownForkL1Cm: '19.2',
      unknownForkL2Cm: '60.1',
    },
  });

  const subMode = (observations.subMode || 'speed_of_sound') as 'speed_of_sound' | 'unknown_frequency';
  const setSubMode = (mode: 'speed_of_sound' | 'unknown_frequency') => updateObservations({ subMode: mode });

  const ambientTempC = observations.ambientTempC || '25.0';
  const unknownForkL1Cm = observations.unknownForkL1Cm || '19.2';
  const unknownForkL2Cm = observations.unknownForkL2Cm || '60.1';

  const trials: ResonanceTrial[] = observations.trials || [
    { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
    { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
    { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
    { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
    { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
  ];

  const t = {
    en: {
      title: 'Practical 14 & 15: Velocity of Sound in Air & Frequency by Resonance Tube',
      aim: 'Aim: To determine the speed of sound in air at room temperature and the tube end correction (Exp 14), and determine the unknown frequency of a tuning fork (Exp 15).',
      apparatus: 'Apparatus: Resonance tube apparatus with water reservoir, standard tuning forks (256–512 Hz), unknown frequency fork, rubber mallet, metre rule, internal calipers, thermometer.',
      modeSpeed: 'Exp 14: Speed of Sound in Air',
      modeFreq: 'Exp 15: Unknown Tuning Fork Frequency',
      theoryTitleSpeed: 'Acoustic Resonance & End Correction (Exp 14)',
      theoryTextSpeed: 'An air column closed at one end by water resonates with an external tuning fork when its effective acoustic length forms an odd quarter-wavelength standing wave: 1st Resonance: l₁ + e = λ / 4; 2nd Resonance: l₂ + e = 3λ / 4. Subtracting eliminates end correction: l₂ - l₁ = λ / 2, yielding v = 2f(l₂ - l₁). The end correction is e = (l₂ - 3l₁) / 2.',
      theoryTitleFreq: 'Determination of Unknown Frequency (Exp 15)',
      theoryTextFreq: 'Using the calibrated speed of sound v at room temperature, the unknown frequency f_x of a test fork is determined from its resonance lengths: f_x = v / [2·(l₂ - l₁)].',
      procedureSpeed: 'Procedure: 1. Record ambient temperature. 2. Strike known fork f, hold prongs horizontally over tube mouth. 3. Lower water reservoir to find 1st resonance (loudest sound) at l₁ and 2nd resonance at l₂. 4. Compute v = 2f(l₂ - l₁).',
      procedureFreq: 'Procedure: 1. Sound the unknown tuning fork over the water column. 2. Measure first resonance length l₁ and second resonance length l₂. 3. Deducing f_x = v / [2(l₂ - l₁)].',
      obsTitleSpeed: 'Observations: First & Second Resonance Lengths Across Tuning Forks',
      obsTitleFreq: 'Observations: Unknown Tuning Fork Resonances',
      trialCol: 'Trial',
      forkCol: 'Fork f (Hz)',
      l1Col: '1st Resonance l₁ (cm)',
      l2Col: '2nd Resonance l₂ (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'Calculated Speed v (m/s)',
      endCorrCol: 'End Corr. e (cm)',
      calcSummaryTitle: 'Analytical Results & Temperature Comparison',
      meanSpeed: 'Mean Experimental Speed of Sound (v):',
      theoreticalSpeed: 'Theoretical Speed at Current Temp:',
      meanEndCorr: 'Mean End Correction (e):',
      percentageDiff: 'Discrepancy:',
      unknownForkFreqLabel: 'Derived Unknown Fork Frequency (f_x):',
      nominalUnknownFork: 'Nominal Fork Frequency (426.7 Hz / A4):',
      verdictPass: 'Velocity Verified Within Syllabus Tolerances (< 3.0%)',
      verdictFail: 'Check Resonance Detection or Wavelength Difference',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Hold vibrating tuning fork prongs horizontally in line with the tube mouth without touching the glass rim. 2. Align line of sight with bottom of water meniscus. 3. Avoid drafty airflow or background noise.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 14 සහ 15: අනුනාද නළයෙන් ධ්වනි ප්‍රවේගය සහ සංඛ්‍යාතය සෙවීම',
      aim: 'අරමුණ: අනුනාද නළය මගින් වාතයේ ධ්වනි ප්‍රවේගය සහ අන්ත ශෝධනය සෙවීම (පරීක්ෂණ 14) සහ නොදන්නා සුසර දෙබලක සංඛ්‍යාතය නිර්ණය කිරීම (පරීක්ෂණ 15).',
      apparatus: 'උපකරණ: ජල බඳුනක් සහිත අනුනාද නළය, සුසර දෙබල (256–512 Hz), නොදන්නා සුසර දෙබලය, රබර් මිටිය, මීටර් රූල, අභ්‍යන්තර පාඨක, උෂ්ණත්වමානය.',
      modeSpeed: 'පරීක්ෂණ 14: වාතයේ ධ්වනි ප්‍රවේගය',
      modeFreq: 'පරීක්ෂණ 15: නොදන්නා සුසර දෙබලේ සංඛ්‍යාතය',
      theoryTitleSpeed: 'ධ්වනි අනුනාදය සහ අන්ත ශෝධනය (පරීක්ෂණ 14)',
      theoryTextSpeed: 'ජලයෙන් වැසුණු වායු කඳක 1 වන අනුනාදය l₁ + e = λ / 4 ද, 2 වන අනුනාදය l₂ + e = 3λ / 4 ද වේ. අඩු කිරීමෙන් e ඉවත් වේ: l₂ - l₁ = λ / 2, එනම් v = 2f(l₂ - l₁) වේ. අන්ත ශෝධනය e = (l₂ - 3l₁) / 2.',
      theoryTitleFreq: 'නොදන්නා සංඛ්‍යාතය නිර්ණය කිරීම (පරීක්ෂණ 15)',
      theoryTextFreq: 'කාමර උෂ්ණත්වයේ ධ්වනි ප්‍රවේගය v භාවිතයෙන් නොදන්නා සුසර දෙබල සඳහා අනුනාද දිග l₁ සහ l₂ මැන f_x = v / [2(l₂ - l₁)] සූත්‍රයෙන් සංඛ්‍යාතය සෙවිය හැක.',
      procedureSpeed: 'ක්‍රමවේදය: 1. කාමර උෂ්ණත්වය සටහන් කරන්න. 2. සුසර දෙබල කම්පනය කර නළ මුවවිට තබන්න. 3. ජල මට්ටම පහත් කර l₁ සහ l₂ මනින්න. 4. v = 2f(l₂ - l₁) ගණනය කරන්න.',
      procedureFreq: 'ක්‍රමවේදය: 1. නොදන්නා සුසර දෙබලය කම්පනය කරන්න. 2. අනුනාද දිගවල් l₁ සහ l₂ සටහන් කරන්න. 3. f_x = v / [2(l₂ - l₁)] ගණනය කරන්න.',
      obsTitleSpeed: 'නිරීක්ෂණ: විවිධ සුසර දෙබල සඳහා ප්‍රථම සහ දෙවන අනුනාද දිග',
      obsTitleFreq: 'නිරීක්ෂණ: නොදන්නා සුසර දෙබල සඳහා අනුනාද දිග',
      trialCol: 'වාරය',
      forkCol: 'දෙබලේ f (Hz)',
      l1Col: '1 වන අනුනාද දිග l₁ (cm)',
      l2Col: '2 වන අනුනාද දිග l₂ (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'ගණනය කළ ප්‍රවේගය v (m/s)',
      endCorrCol: 'අන්ත ශෝධනය e (cm)',
      calcSummaryTitle: 'විශ්ලේෂණ ප්‍රතිඵල සහ උෂ්ණත්ව සැසඳීම',
      meanSpeed: 'මධ්‍යන්‍ය පරීක්ෂණාත්මක ධ්වනි ප්‍රවේගය (v):',
      theoreticalSpeed: 'වත්මන් උෂ්ණත්වයේ සෛද්ධාන්තික ප්‍රවේගය:',
      meanEndCorr: 'මධ්‍යන්‍ය අන්ත ශෝධනය (e):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      unknownForkFreqLabel: 'ගණනය කළ නොදන්නා සංඛ්‍යාතය (f_x):',
      nominalUnknownFork: 'නාමික සංඛ්‍යාතය (426.7 Hz):',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම තුළ ප්‍රවේගය සත්‍යාපනය විය (< 3.0%)',
      verdictFail: 'අනුනාද දිග හෝ තරංග ආයාම වෙනස පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. සුසර දෙබල අග්‍ර නළ මුවවිටට තිරස්ව තබන්න. 2. ජල මෙනිස්කසයේ පහළ මට්ටම සමග ඇස තිරස්ව තබන්න. 3. බාහිර ශබ්ද අවම කරගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof ResonanceTrial, val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const calculatedTrials = trials.map((tr) => {
    const f = parseFloat(tr.freqHz);
    const l1 = parseFloat(tr.l1Cm) / 100;
    const l2 = parseFloat(tr.l2Cm) / 100;

    if (!isNaN(f) && !isNaN(l1) && !isNaN(l2) && l2 > l1 && f > 0) {
      const res = calculateResonanceTubeSpeed(f, l1, l2);
      return {
        ...tr,
        diffCm: (l2 - l1) * 100,
        speed: res.speedOfSoundMs,
        endCorrCm: res.endCorrectionM * 100,
      };
    }
    return { ...tr, diffCm: null, speed: null, endCorrCm: null };
  });

  const validSpeeds = calculatedTrials.map((t) => t.speed).filter((s): s is number => s !== null);
  const meanSpeed = validSpeeds.length > 0 ? validSpeeds.reduce((a, b) => a + b, 0) / validSpeeds.length : null;

  const validEndCorrs = calculatedTrials.map((t) => t.endCorrCm).filter((e): e is number => e !== null);
  const meanEndCorrection = validEndCorrs.length > 0 ? validEndCorrs.reduce((a, b) => a + b, 0) / validEndCorrs.length : null;

  const tempVal = parseFloat(ambientTempC) || 25.0;
  const theoreticalSpeed = calculateSpeedOfSoundInGas(tempVal);
  const percDiff =
    meanSpeed !== null && theoreticalSpeed > 0
      ? Math.abs((meanSpeed - theoreticalSpeed) / theoreticalSpeed) * 100
      : null;

  const isPass = percDiff !== null && percDiff <= 3.0;

  // Unknown fork calculation: f_x = v / [2 * (l2 - l1)]
  const unkL1 = parseFloat(unknownForkL1Cm) / 100;
  const unkL2 = parseFloat(unknownForkL2Cm) / 100;
  const effectiveV = meanSpeed || theoreticalSpeed;
  let calculatedFx: number | null = null;
  if (!isNaN(unkL1) && !isNaN(unkL2) && unkL2 > unkL1 && effectiveV > 0) {
    calculatedFx = effectiveV / (2 * (unkL2 - unkL1));
  }

  const handleLoadSample = () => {
    if (subMode === 'speed_of_sound') {
      loadSampleObservations({
        ambientTempC: '25.0',
        trials: [
          { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
          { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
          { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
          { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
          { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
        ],
      });
    } else {
      loadSampleObservations({
        unknownForkL1Cm: '19.2',
        unknownForkL2Cm: '60.1',
      });
    }
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p><strong>{t.apparatus}</strong></p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {subMode === 'speed_of_sound' ? t.theoryTitleSpeed : t.theoryTitleFreq}
            </span>
            <p>{subMode === 'speed_of_sound' ? t.theoryTextSpeed : t.theoryTextFreq}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {subMode === 'speed_of_sound' ? t.procedureSpeed : t.procedureFreq}
          </p>
        </CardContent>
      </Card>

      {/* Mode Switcher & Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'speed_of_sound' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('speed_of_sound')}
            >
              <Waves className="w-3.5 h-3.5 mr-1" />
              {t.modeSpeed}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'unknown_frequency' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('unknown_frequency')}
            >
              <Waves className="w-3.5 h-3.5 mr-1" />
              {t.modeFreq}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 rounded-lg"
              onClick={handleLoadSample}
            >
              <Database className="w-3.5 h-3.5 mr-1" />
              {t.loadSample}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-8 rounded-lg"
              onClick={handleClear}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              {t.clearInputs}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0 space-y-6">
          {/* Standing Wave Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 320 220" className="w-full max-w-md h-auto">
              {/* 1st Resonance Tube (Left) */}
              <g transform="translate(40, 20)">
                <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">1st Resonance (λ/4)</text>
                <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                <rect x="20" y="25" width="30" height="150" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                <rect x="21" y="85" width="28" height="89" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                <line x1="55" y1="20" x2="55" y2="25" stroke="#D97706" strokeWidth="1.5" />
                <text x="60" y="24" fontSize="8" fill="#D97706" fontWeight="bold">e</text>
                <line x1="55" y1="25" x2="55" y2="85" stroke="#0F766E" strokeWidth="1.5" />
                <text x="60" y="58" fontSize="9" fill="#0F766E" fontWeight="bold">l₁</text>
                <path d="M 35 85 Q 22 55 35 20 M 35 85 Q 48 55 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
              </g>

              {/* 2nd Resonance Tube (Right) */}
              <g transform="translate(180, 20)">
                <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">2nd Resonance (3λ/4)</text>
                <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                <rect x="20" y="25" width="30" height="150" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                <rect x="21" y="150" width="28" height="24" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                <line x1="55" y1="25" x2="55" y2="150" stroke="#0F766E" strokeWidth="1.5" />
                <text x="60" y="90" fontSize="9" fill="#0F766E" fontWeight="bold">l₂</text>
                <path d="M 35 150 Q 22 130 35 110 Q 48 90 35 65 Q 22 45 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
                <path d="M 35 150 Q 48 130 35 110 Q 22 90 35 65 Q 48 45 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
              </g>
            </svg>
          </div>

          {/* SubMode 1: Speed of sound table & results */}
          {subMode === 'speed_of_sound' ? (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.forkCol}</th>
                      <th className="p-3">{t.l1Col}</th>
                      <th className="p-3">{t.l2Col}</th>
                      <th className="p-3">{t.diffCol}</th>
                      <th className="p-3">{t.speedCol}</th>
                      <th className="p-3">{t.endCorrCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.freqHz}
                            onChange={(e) => updateTrial(tr.id, 'freqHz', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.l1Cm}
                            onChange={(e) => updateTrial(tr.id, 'l1Cm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.l2Cm}
                            onChange={(e) => updateTrial(tr.id, 'l2Cm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 text-[#64748B]">
                          {tr.diffCm !== null ? `${tr.diffCm.toFixed(1)} cm` : '—'}
                        </td>
                        <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                          {tr.speed !== null ? `${tr.speed.toFixed(1)} m/s` : '—'}
                        </td>
                        <td className="p-3 text-[#64748B]">
                          {tr.endCorrCm !== null ? `${tr.endCorrCm.toFixed(2)} cm` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Analytical Summary Card */}
              <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanSpeed}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {meanSpeed !== null ? `${meanSpeed.toFixed(1)} m/s` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.theoreticalSpeed}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {theoreticalSpeed.toFixed(1)} m/s
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanEndCorr}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {meanEndCorrection !== null ? `${meanEndCorrection.toFixed(2)} cm` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {percDiff !== null ? `${percDiff.toFixed(2)}%` : '—'}
                    </span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                  isPass
                    ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                }`}>
                  {isPass ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                  <span>{isPass ? t.verdictPass : t.verdictFail}</span>
                </div>
              </div>
            </div>
          ) : (
            /* SubMode 2: Unknown tuning fork frequency */
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.l1Col}
                  </label>
                  <input
                    type="text"
                    value={unknownForkL1Cm}
                    onChange={(e) => updateObservations({ unknownForkL1Cm: e.target.value })}
                    placeholder="19.2"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.l2Col}
                  </label>
                  <input
                    type="text"
                    value={unknownForkL2Cm}
                    onChange={(e) => updateObservations({ unknownForkL2Cm: e.target.value })}
                    placeholder="60.1"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>

              {calculatedFx !== null && (
                <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.unknownForkFreqLabel}</span>
                      <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {calculatedFx.toFixed(1)} Hz
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.nominalUnknownFork}</span>
                      <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                        426.7 Hz (A4)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 flex items-center gap-2 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Unknown fork frequency determined as {calculatedFx.toFixed(1)} Hz from column resonance separation ({(unkL2 - unkL1) * 100} cm).
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Precautions Footer */}
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.precautionsTitle}</span>
            <p>{t.precautions}</p>
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
    </div>
  );
};

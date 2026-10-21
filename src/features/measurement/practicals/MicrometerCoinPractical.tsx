'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { MicrometerScrewGauge } from '../instruments/MicrometerScrewGauge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Printer,
  RotateCcw,
  Database,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowDownToLine,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react';
import { applyZeroCorrection, calculateCoinVolumeAndUncertainty } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface MicrometerCoinPracticalProps {
  locale?: Locale;
}

export const MicrometerCoinPractical: React.FC<MicrometerCoinPracticalProps> = ({
  locale = 'en',
}) => {
  const {
    mode,
    setMode,
    zeroError,
    setZeroError,
    observations,
    updateObservations,
    calculations,
    updateCalculation,
    calculationResults,
    calculationFeedback,
    setCalculationCheck,
    rubricScores,
    updateRubricScore,
    isCompleted,
    setCompleted,
    loadSampleObservations,
    reset,
  } = usePracticalWork({
    experimentId: 'exp-2-micrometer',
    defaultMode: 'guided',
    defaultZeroError: '0.00',
    defaultObservations: {
      diaTrials: ['', '', ''],
      thickTrials: ['', '', ''],
    },
    defaultCalculations: {
      meanDia: '',
      corrDia: '',
      meanThick: '',
      corrThick: '',
      volume: '',
      percentageUncertainty: '',
    },
  });

  const diaTrials: [string, string, string] = (
    Array.isArray(observations.diaTrials) && observations.diaTrials.length === 3
      ? observations.diaTrials
      : ['', '', '']
  ) as [string, string, string];
  const thickTrials: [string, string, string] = (
    Array.isArray(observations.thickTrials) && observations.thickTrials.length === 3
      ? observations.thickTrials
      : ['', '', '']
  ) as [string, string, string];

  const [liveReading, setLiveReading] = useState<{ readingMm: number; correctedMm: number }>({
    readingMm: 4.38,
    correctedMm: 4.38,
  });
  const [showSolution, setShowSolution] = useState(false);

  const leastCount = 0.01;

  const t = {
    en: {
      title: 'Practical 2: Diameter & Thickness of a Coin',
      aim: 'Aim: To measure the diameter and thickness of a coin accurately using a micrometer screw gauge and determine its volume and fractional uncertainty.',
      apparatus: 'Apparatus: Micrometer Screw Gauge (0–25 mm range, Least Count 0.01 mm), Standard Coin (e.g. 10 Rupee coin).',
      theoryTitle: 'Theory & Experimental Precautions',
      theoryText: 'The ratchet clutch must always be used when tightening the spindle onto the coin to prevent deformation and avoid false pitch advancement. To account for non-circularity, diameter is measured across three coplanar diameter orientations (at 0°, 60°, and 120° across the face of the coin). Thickness is measured separately at three distinct positions along the outer rim. Since the standard micrometer has a measuring range of 0–25.00 mm, specimens must have diameter < 25 mm; for larger specimens, a 25–50 mm micrometer or Vernier caliper is selected. Volume V = π(D/2)²t. Maximum fractional uncertainty is ΔV/V = 2(ΔD/D) + (Δt/t), where ΔD = Δt = 0.01 mm.',
      procedure: 'Procedure: 1. Determine least count and check zero error using the ratchet. 2. Measure diameter along 3 distinct diameter orientations (0°, 60°, 120°). 3. Measure thickness at 3 distinct positions along the rim. 4. Correct for signed zero error. 5. Compute mean dimensions, volume, and percentage uncertainty.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      transferReading: 'Transfer Gauge Reading to Table:',
      logDia: 'Log to Diameter (D)',
      logThick: 'Log to Thickness (t)',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      dia1: 'Orientation 0° (mm)',
      dia2: 'Orientation 60° (mm)',
      dia3: 'Orientation 120° (mm)',
      thick1: 'Rim Pos 1 (mm)',
      thick2: 'Rim Pos 2 (mm)',
      thick3: 'Rim Pos 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      coinDia: 'Coin Diameter (D)',
      coinThick: 'Coin Thickness (t)',
      zeroErrorLabel: 'Signed Zero Error (mm):',
      calcTitle: 'Volume & Uncertainty Analysis',
      volumeLabel: 'Coin Volume (V):',
      fractionalUncertainty: 'Fractional Uncertainty (ΔV/V):',
      percentageUncertainty: 'Percentage Uncertainty (%):',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      rangeWarning: 'Note: Readings > 25.0 mm exceed the 0–25 mm micrometer gauge range; in a laboratory, use a 25–50 mm micrometer or Vernier caliper.',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why must the ratchet head always be used to tighten the spindle onto the coin?',
      q1Model: 'Model Answer: The ratchet mechanism slips when a predetermined uniform tightening torque is reached. This prevents specimen compression/deformation and avoids stripping or forcing the micrometer screw pitch.',
      q1Rubric: 'Rubric: Award 1 mark for uniform tightening / avoiding deformation; 1 mark for protecting instrument threads.',
      q2Title: '2. Why is the diameter measured along 3 different orientations (0°, 60°, 120°)?',
      q2Model: 'Model Answer: Minted coins often exhibit slight elliptical eccentricity or border variations. Measuring three symmetrically distributed coplanar axes eliminates non-circularity bias.',
      q2Rubric: 'Rubric: Award 1 mark for non-circularity/elliptical shape; 1 mark for taking the mean to average out variations.',
      q3Title: '3. Why does the fractional uncertainty formula have a factor of 2 before ΔD/D: ΔV/V = 2(ΔD/D) + (Δt/t)?',
      q3Model: 'Model Answer: Volume depends on diameter squared (V = π/4 · D² · t). When propagating maximum fractional uncertainty of a power term xⁿ, the fractional error is multiplied by the index n (here n = 2).',
      q3Rubric: 'Rubric: Award 1 mark for V ∝ D² dependence; 1 mark for power rule in uncertainty propagation.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2: කාසියක විෂ්කම්භය සහ ඝනකම නිර්ණය කිරීම',
      aim: 'අරමුණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය භාවිතයෙන් කාසියක විෂ්කම්භය සහ ඝනකම නිරවද්‍යව මැන, එහි පරිමාව සහ භාගික අවිනිශ්චිතතාව ගණනය කිරීම.',
      apparatus: 'උපකරණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (0–25 mm පරාසය, කුඩාම මිනුම 0.01 mm), සම්මත කාසියක් (උදා: රුපියල් 10 කාසිය).',
      theoryTitle: 'මූලධර්මය සහ පූර්වෝපාය',
      theoryText: 'කාසිය සිරකිරීමේදී විරූපණය වැළැක්වීමට සහ නිරවද්‍ය තෙරපුමක් පවත්වා ගැනීමට සෑම විටම රැචට් හිස භාවිත කළ යුතුය. කාසියේ අණ්ඩාකාර විකෘතිතා මඟහරවා ගැනීමට විෂ්කම්භය එකම තලයේ කෝණික දිශා 3ක් ඔස්සේ (0°, 60°, සහ 120° ඔස්සේ) මනිනු ලැබේ. ඝනකම වෙනමම කාසියේ දාරයේ වෙනස් ස්ථාන 3කින් මනිනු ලැබේ. සම්මත මයික්‍රොමීටරයේ පරාසය 0–25.0 mm බැවින් 25 mm ට අඩු මාන පමණක් මැනිය හැක (විශාල කාසි සඳහා 25–50 mm ආමානයක් හෝ වර්නියර් කැලිපරයක් තෝරා ගනී). පරිමාව V = π(D/2)²t වේ. උපරිම භාගික අවිනිශ්චිතතාව ΔV/V = 2(ΔD/D) + (Δt/t) වේ (මෙහි ΔD = Δt = 0.01 mm).',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම සහ ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. විෂ්කම්භය කෝණික දිශා 3කින් (0°, 60°, 120°) මැනීම. 3. කාසියේ දාරයේ විවිධ ස්ථාන 3කින් ඝනකම මැනීම. 4. ශූන්‍ය දෝෂ ශෝධනය යෙදීම. 5. පරිමාව සහ ප්‍රතිශත අවිනිශ්චිතතාව ගණනය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      transferReading: 'ආමාන පාඨාංකය වගුවට ඇතුළත් කරන්න:',
      logDia: 'විෂ්කම්භය (D) වෙත',
      logThick: 'ඝනකම (t) වෙත',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      dia1: '0° දිශාව (mm)',
      dia2: '60° දිශාව (mm)',
      dia3: '120° දිශාව (mm)',
      thick1: 'දාරයේ ස්ථානය 1 (mm)',
      thick2: 'දාරයේ ස්ථානය 2 (mm)',
      thick3: 'දාරයේ ස්ථානය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      coinDia: 'කාසියේ විෂ්කම්භය (D)',
      coinThick: 'කාසියේ ඝනකම (t)',
      zeroErrorLabel: 'ලකුණ සහිත ශූන්‍ය දෝෂය (mm):',
      calcTitle: 'පරිමාව සහ අවිනිශ්චිතතා විශ්ලේෂණය',
      volumeLabel: 'කාසියේ පරිමාව (V):',
      fractionalUncertainty: 'භාගික අවිනිශ්චිතතාව (ΔV/V):',
      percentageUncertainty: 'ප්‍රතිශත අවිනිශ්චිතතාව (%):',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      rangeWarning: 'සටහන: 25.0 mm ට වැඩි අගයන් 0–25 mm ආමාන පරාසය ඉක්මවයි; රසායනාගාරයේදී 25–50 mm ආමානයක් හෝ වර්නියර් කැලිපරය යොදා ගන්න.',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. කාසිය සිරකිරීමේදී රැචට් හිසම භාවිත කළ යුත්තේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: නියමිත පීඩනයක් ළඟාවූ විට රැචටය ලිස්සා යාමෙන් කාසිය විරූපණය වීම වැළකෙන අතර ආමානයේ ඉස්කුරුප්පු පොටවලට හානිවීම වැළකේ.',
      q1Rubric: 'රූබ්රිකය: ඒකාකාර තෙරපුම/විරූපණය වැළැක්වීමට ලකුණු 1; ඉස්කුරුප්පු පොට ආරක්ෂාවට ලකුණු 1.',
      q2Title: '2. විෂ්කම්භය කෝණික දිශා 3කින් (0°, 60°, 120°) මනින්නේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: කාසියේ අණ්ඩාකාර විකෘතිතා හෝ අක්‍රමිකතා හඳුනාගෙන ඒවායේ මධ්‍යන්‍යය ගැනීමෙන් විෂ්කම්භයේ නිරවද්‍යතාව තහවුරු කිරීමට.',
      q2Rubric: 'රූබ්රිකය: අණ්ඩාකාර හැඩයට ලකුණු 1; මධ්‍යන්‍යයෙන් දෝෂය මඟහැරීමට ලකුණු 1.',
      q3Title: '3. අවිනිශ්චිතතා සමීකරණයේ ΔD/D ඉදිරියට 2 සාධකයක් ලැබෙන්නේ ඇයි: ΔV/V = 2(ΔD/D) + (Δt/t)?',
      q3Model: 'ආදර්ශ පිළිතුර: පරිමාව විෂ්කම්භයේ වර්ගයට සමානුපාතික බැවිනි (V ∝ D²). දර්ශක සහිත රාශියක උපරිම භාගික දෝෂය සෙවීමේදී දර්ශකය (2) ඉදිරියට ගුණවේ.',
      q3Rubric: 'රූබ්රිකය: V ∝ D² පදනමට ලකුණු 1; දර්ශක නීතිය යෙදීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    loadSampleObservations(
      {
        diaTrials: ['24.32', '24.30', '24.34'],
        thickTrials: ['1.86', '1.84', '1.85'],
      },
      '+0.02'
    );
  };

  const handleClear = () => {
    reset();
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(2));
  };

  const ze = parseFloat(zeroError) || 0.0;
  const expectedMeanDia = parseMean(diaTrials);
  const expectedMeanThick = parseMean(thickTrials);

  const expectedCorrDia = expectedMeanDia !== null ? applyZeroCorrection(expectedMeanDia, ze) : null;
  const expectedCorrThick = expectedMeanThick !== null ? applyZeroCorrection(expectedMeanThick, ze) : null;

  const expectedAnalysis =
    expectedCorrDia !== null && expectedCorrThick !== null
      ? calculateCoinVolumeAndUncertainty(expectedCorrDia, expectedCorrThick, leastCount)
      : null;

  // Append reading to first empty trial slot of a target array
  const handleLogReading = (targetKey: 'diaTrials' | 'thickTrials') => {
    const raw = observations[targetKey] || ['', '', ''];
    const currentTrials: [string, string, string] = [raw[0] || '', raw[1] || '', raw[2] || ''];
    const valStr = liveReading.readingMm.toFixed(2);
    const emptyIndex = currentTrials.findIndex((val) => val === '');
    if (emptyIndex !== -1) {
      currentTrials[emptyIndex] = valStr;
    } else {
      currentTrials[0] = valStr;
    }
    updateObservations({ [targetKey]: currentTrials });
  };

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    const stuMeanDia = parseFloat(calculations.meanDia || '');
    if (expectedMeanDia !== null) {
      const isMeanCorrect = !isNaN(stuMeanDia) && Math.abs(stuMeanDia - expectedMeanDia) <= 0.02;
      results.meanDia = isMeanCorrect;
      if (!isMeanCorrect) {
        feedback.meanDia = {
          en: `Mean observed diameter should be (${diaTrials.join(' + ')}) / 3 = ${expectedMeanDia} mm.`,
          si: `මධ්‍යන්‍ය නිරීක්ෂිත විෂ්කම්භය (${diaTrials.join(' + ')}) / 3 = ${expectedMeanDia} mm විය යුතුය.`,
        };
      }
    }

    const stuCorrDia = parseFloat(calculations.corrDia || '');
    if (expectedCorrDia !== null) {
      const isCorrCorrect = !isNaN(stuCorrDia) && Math.abs(stuCorrDia - expectedCorrDia) <= 0.02;
      results.corrDia = isCorrCorrect;
      if (!isCorrCorrect) {
        feedback.corrDia = {
          en: `Corrected diameter = Observed (${expectedMeanDia}) - Zero error (${zeroError}) = ${expectedCorrDia} mm.`,
          si: `ශෝධිත විෂ්කම්භය = නිරීක්ෂිත (${expectedMeanDia}) - ශූන්‍ය දෝෂය (${zeroError}) = ${expectedCorrDia} mm.`,
        };
      }
    }

    const stuVol = parseFloat(calculations.volume || '');
    if (expectedAnalysis && expectedAnalysis.volumeMm3 !== null) {
      const expVol = expectedAnalysis.volumeMm3;
      const isVolCorrect = !isNaN(stuVol) && Math.abs(stuVol - expVol) / expVol <= 0.03;
      results.volume = isVolCorrect;
      if (!isVolCorrect) {
        feedback.volume = {
          en: `Expected volume V = π(D/2)²t ≈ ${expVol} mm³. Verify radius and thickness.`,
          si: `බලාපොරොත්තු පරිමාව V = π(D/2)²t ≈ ${expVol} mm³ වේ. අරය සහ ඝනකම පරීක්ෂා කරන්න.`,
        };
      }
    }

    const stuPct = parseFloat(calculations.percentageUncertainty || '');
    if (expectedAnalysis && expectedAnalysis.percentageUncertainty !== null) {
      const expPct = expectedAnalysis.percentageUncertainty;
      const isPctCorrect = !isNaN(stuPct) && Math.abs(stuPct - expPct) <= 0.2;
      results.percentageUncertainty = isPctCorrect;
      if (!isPctCorrect) {
        feedback.percentageUncertainty = {
          en: `Percentage uncertainty = [2(ΔD/D) + (Δt/t)] × 100% ≈ ${expPct}%.`,
          si: `ප්‍රතිශත අවිනිශ්චිතතාව = [2(ΔD/D) + (Δt/t)] × 100% ≈ ${expPct}%.`,
        };
      }
    }

    setCalculationCheck(results, feedback);
  };

  return (
    <div className="space-y-6">
      {/* Aim & Theory Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.title}
            </CardTitle>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Completed
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p><strong>{t.apparatus}</strong></p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.theoryTitle}</span>
            <p>{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.procedure}
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.modeSelector}
            </span>
            <Button
              size="sm"
              variant={mode === 'guided' ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setMode('guided')}
            >
              <Sparkles className="w-3 h-3 mr-1" /> {t.guidedMode}
            </Button>
            <Button
              size="sm"
              variant={mode === 'independent' ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setMode('independent')}
            >
              <GraduationCap className="w-3 h-3 mr-1" /> {t.independentMode}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Instrument Workspace */}
      <div className="space-y-3">
        <MicrometerScrewGauge
          locale={locale}
          onReadingChange={(readingMm, correctedMm) => {
            setLiveReading({ readingMm, correctedMm });
          }}
        />

        {/* Live Instrument to Table Bridge */}
        <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <ArrowDownToLine className="w-4 h-4 text-[#0F766E]" />
            <span className="font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.transferReading}
            </span>
            <span className="font-mono font-bold text-[#0F766E] bg-white dark:bg-[#111D2D] px-2 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D]">
              {liveReading.readingMm.toFixed(2)} mm
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7"
              onClick={() => handleLogReading('diaTrials')}
            >
              {t.logDia}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7"
              onClick={() => handleLogReading('thickTrials')}
            >
              {t.logThick}
            </Button>
          </div>
        </div>
      </div>

      {/* Observation Table Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div>
            <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.obsTable}
            </CardTitle>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#0F766E] border-[#0F766E]/40"
              onClick={handleLoadSample}
            >
              <Database className="w-3.5 h-3.5 mr-1" /> {t.loadSample}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-8 text-[#64748B]"
              onClick={handleClear}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> {t.clearTable}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#14243A] dark:text-[#F8FAFC]"
              onClick={() => window.print()}
            >
              <Printer className="w-3.5 h-3.5 mr-1" /> {t.printSheet}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          {/* Zero Error Input */}
          <div className="flex items-center gap-2 max-w-xs">
            <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.zeroErrorLabel}
            </label>
            <input
              type="text"
              value={zeroError}
              onChange={(e) => setZeroError(e.target.value)}
              placeholder="0.00"
              className="w-20 px-2 py-1 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono text-center focus:outline-[#0F766E]"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8]">
                  <th className="p-3 font-semibold">{t.param}</th>
                  <th className="p-3 font-semibold">{t.dia1}</th>
                  <th className="p-3 font-semibold">{t.dia2}</th>
                  <th className="p-3 font-semibold">{t.dia3}</th>
                  <th className="p-3 font-semibold">{t.meanObs}</th>
                  <th className="p-3 font-semibold text-[#0F766E]">{t.correctedVal}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D] font-mono">
                {/* Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.coinDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[0]}
                      onChange={(e) => updateObservations({ diaTrials: [e.target.value, diaTrials[1], diaTrials[2]] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[1]}
                      onChange={(e) => updateObservations({ diaTrials: [diaTrials[0], e.target.value, diaTrials[2]] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[2]}
                      onChange={(e) => updateObservations({ diaTrials: [diaTrials[0], diaTrials[1], e.target.value] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">
                    {mode === 'guided' ? (
                      expectedMeanDia !== null ? `${expectedMeanDia} mm` : '—'
                    ) : (
                      <input
                        type="text"
                        value={calculations.meanDia || ''}
                        onChange={(e) => updateCalculation('meanDia', e.target.value)}
                        placeholder="Mean mm"
                        className={`w-20 px-2 py-1 rounded border text-xs ${
                          calculationResults?.meanDia === true
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                            : calculationResults?.meanDia === false
                            ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30'
                            : 'border-[#DFE8EF] dark:border-[#1E334D]'
                        }`}
                      />
                    )}
                  </td>
                  <td className="p-3 font-bold text-[#0F766E]">
                    {mode === 'guided' ? (
                      expectedCorrDia !== null ? `${expectedCorrDia} mm` : '—'
                    ) : (
                      <input
                        type="text"
                        value={calculations.corrDia || ''}
                        onChange={(e) => updateCalculation('corrDia', e.target.value)}
                        placeholder="Corr mm"
                        className={`w-20 px-2 py-1 rounded border text-xs ${
                          calculationResults?.corrDia === true
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                            : calculationResults?.corrDia === false
                            ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30'
                            : 'border-[#DFE8EF] dark:border-[#1E334D]'
                        }`}
                      />
                    )}
                  </td>
                </tr>

                {/* Thickness */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.coinThick}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[0]}
                      onChange={(e) => updateObservations({ thickTrials: [e.target.value, thickTrials[1], thickTrials[2]] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[1]}
                      onChange={(e) => updateObservations({ thickTrials: [thickTrials[0], e.target.value, thickTrials[2]] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[2]}
                      onChange={(e) => updateObservations({ thickTrials: [thickTrials[0], thickTrials[1], e.target.value] })}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{expectedMeanThick !== null ? `${expectedMeanThick} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{expectedCorrThick !== null ? `${expectedCorrThick} mm` : '—'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Feedback on calculations if present */}
          {calculationFeedback && Object.keys(calculationFeedback).length > 0 && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-1">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Diagnostic Feedback
              </span>
              {Object.entries(calculationFeedback).map(([key, item]) => (
                <p key={key} className="text-xs text-amber-700 dark:text-amber-400">
                  • {item[locale]}
                </p>
              ))}
            </div>
          )}

          {/* Derived Quantities & Volume Output */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
                {t.calcTitle}
              </span>
              {mode === 'independent' && (
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    className="text-xs h-7 bg-[#0F766E] hover:bg-[#0D655E] text-white"
                    onClick={handleCheckCalculations}
                  >
                    <CheckCircle2 className="w-3 h-3 mr-1" /> {t.checkCalcs}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs h-7 text-[#0F766E]"
                    onClick={() => setShowSolution(!showSolution)}
                  >
                    <HelpCircle className="w-3 h-3 mr-1" /> {showSolution ? t.hideSolution : t.revealSolution}
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.volumeLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedAnalysis ? `${expectedAnalysis.volumeMm3} mm³` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.volume || ''}
                    onChange={(e) => updateCalculation('volume', e.target.value)}
                    placeholder="V (mm³)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.fractionalUncertainty}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {expectedAnalysis ? `${expectedAnalysis.fractionalUncertainty}` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageUncertainty}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {expectedAnalysis ? `${expectedAnalysis.percentageUncertainty}%` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.percentageUncertainty || ''}
                    onChange={(e) => updateCalculation('percentageUncertainty', e.target.value)}
                    placeholder="% Error"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>
            </div>

            <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
              {t.rangeWarning}
            </p>
          </div>

          {/* Precautions & Self-Evaluation Rubrics */}
          <div className="pt-4 border-t border-[#DFE8EF] dark:border-[#1E334D] space-y-4">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.precautionsTitle}
            </span>

            {/* Q1 */}
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.q1Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {t.q1Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">{t.q1Rubric}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">{t.rubricMark}</span>
                  {[0, 1, 2].map((mark) => (
                    <Button
                      key={mark}
                      size="sm"
                      variant={rubricScores.q1 === mark ? 'default' : 'outline'}
                      className="text-xs h-6 w-6 p-0 rounded-md"
                      onClick={() => updateRubricScore('q1', mark)}
                    >
                      {mark}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.q2Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {t.q2Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">{t.q2Rubric}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">{t.rubricMark}</span>
                  {[0, 1, 2].map((mark) => (
                    <Button
                      key={mark}
                      size="sm"
                      variant={rubricScores.q2 === mark ? 'default' : 'outline'}
                      className="text-xs h-6 w-6 p-0 rounded-md"
                      onClick={() => updateRubricScore('q2', mark)}
                    >
                      {mark}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.q3Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {t.q3Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">{t.q3Rubric}</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs">{t.rubricMark}</span>
                  {[0, 1, 2].map((mark) => (
                    <Button
                      key={mark}
                      size="sm"
                      variant={rubricScores.q3 === mark ? 'default' : 'outline'}
                      className="text-xs h-6 w-6 p-0 rounded-md"
                      onClick={() => updateRubricScore('q3', mark)}
                    >
                      {mark}
                    </Button>
                  ))}
                </div>
              </div>
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
    </div>
  );
};

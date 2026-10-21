'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  RotateCcw,
  Database,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Sparkles,
  GraduationCap,
  HelpCircle,
  AlertTriangle,
  Printer,
} from 'lucide-react';
import { calculatePendulumGravityRegression } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface SimplePendulumPracticalProps {
  locale?: Locale;
}

interface PendulumTrial {
  id: number;
  threadLengthCm: string; // l (cm)
  time20OscS: string;     // t for 20 oscillations (s)
}

export const SimplePendulumPractical: React.FC<SimplePendulumPracticalProps> = ({
  locale = 'en',
}) => {
  const {
    mode,
    setMode,
    observations,
    updateObservations,
    loadSampleObservations,
    calculations,
    updateCalculation,
    rubricScores,
    updateRubricScore,
    calculationFeedback,
    setCalculationCheck,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-10-pendulum',
    defaultMode: 'guided',
    defaultObservations: {
      bobRadiusCm: '1.00',
      trials: [
        { id: 1, threadLengthCm: '49.0', time20OscS: '28.35' },
        { id: 2, threadLengthCm: '59.0', time20OscS: '31.06' },
        { id: 3, threadLengthCm: '69.0', time20OscS: '33.56' },
        { id: 4, threadLengthCm: '79.0', time20OscS: '35.88' },
        { id: 5, threadLengthCm: '89.0', time20OscS: '38.06' },
      ],
    },
    defaultCalculations: {
      slope: '',
      gravity: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  const bobRadiusCm = observations.bobRadiusCm || '1.00';
  const trials: PendulumTrial[] = observations.trials || [
    { id: 1, threadLengthCm: '49.0', time20OscS: '28.35' },
    { id: 2, threadLengthCm: '59.0', time20OscS: '31.06' },
    { id: 3, threadLengthCm: '69.0', time20OscS: '33.56' },
    { id: 4, threadLengthCm: '79.0', time20OscS: '35.88' },
    { id: 5, threadLengthCm: '89.0', time20OscS: '38.06' },
  ];

  const t = {
    en: {
      title: 'Practical 10: Determination of Acceleration due to Gravity (g) using a Simple Pendulum',
      aim: 'Aim: To determine the acceleration due to gravity (g) by measuring the period of oscillation T of a simple pendulum for various lengths L and plotting T² against L.',
      apparatus: 'Apparatus: Spherical metal pendulum bob, fine split-cork suspension jaws, light inextensible thread, stop watch (least count 0.01 s), metre rule, vernier calipers (to measure bob diameter).',
      theoryTitle: 'Theory & Simple Harmonic Motion (SHM)',
      theoryText: 'For small angular displacements (θ < 5° or sin θ ≈ θ in radians), a simple pendulum undergoes simple harmonic motion with period:\nT = 2π √(L / g)\nSquaring both sides yields:\nT² = (4π² / g) · L\nPlotting T² (y-axis) against total length L = l + r (x-axis) gives a straight line passing through the origin:\n• Gradient m = 4π² / g\n• Acceleration due to gravity: g = 4π² / m (m/s²).',
      procedure: 'Procedure: 1. Measure bob diameter 2r with vernier calipers to find radius r. 2. Suspend thread firmly between two split-cork jaws. 3. For each thread length l, calculate total length L = l + r. 4. Displace bob through a small angle (θ < 5°) in a single vertical plane. 5. Measure time for 20 oscillations using a stopwatch, repeat to confirm consistency, and calculate period T = t/20 and T². 6. Plot T² vs L, determine slope m, and deduce g.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      obsTitle: 'Observations: Thread Length l, Total Length L, Time for 20 Oscillations & T²',
      trialCol: 'Trial',
      lCol: 'Thread Length l (cm)',
      totalLCol: 'Total Length L = l + r (m)',
      timeCol: 'Time for 20 Osc. t (s)',
      periodCol: 'Period T = t/20 (s)',
      tSquaredCol: 'T² (s²)',
      graphTitle: 'Graphical Analysis: T² vs Total Pendulum Length L',
      graphXLabel: 'Pendulum Length L (m)',
      graphYLabel: 'Period Squared T² (s²)',
      gradientLabel: 'Gradient m = 4π² / g:',
      derivedGravityLabel: 'Derived Acceleration due to Gravity (g = 4π²/m):',
      benchmarkGravityLabel: 'Standard Gravitational Acceleration (g₀):',
      percentageDiff: 'Discrepancy:',
      calcSummaryTitle: 'Analytical Results & Gravity Benchmark Verification',
      verdictPass: 'Gravitational Acceleration Verified Within Syllabus Tolerance (< 2.0%)',
      verdictFail: 'Check Small-Angle Oscillation or Timekeeper Synchronization',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why must the pendulum amplitude be strictly confined to small angles (θ < 5°)?',
      q1Model: 'Model Answer: The simple harmonic motion formula T = 2π√(L/g) is derived from the restoring torque equation by approximating sin θ ≈ θ (in radians). For angles larger than ~5°, higher-order terms in the Taylor series expansion become significant, making the period dependent on amplitude and causing systematic positive timing errors.',
      q1Rubric: 'Rubric: Award 1 mark for small-angle approximation sin θ ≈ θ; 1 mark for period becoming amplitude-dependent / non-isochronous at large angles.',
      q2Title: '2. Why is the total length L measured from the suspension point to the centre of gravity of the bob (L = l + r)?',
      q2Model: 'Model Answer: In a simple pendulum, the restoring torque acts through the centre of mass of the oscillating body. Measuring only thread length l ignores the bob radius r, introducing a constant systematic negative error in L which distorts the slope of the T² vs L graph.',
      q2Rubric: 'Rubric: Award 1 mark for centre of mass / restoring torque pivot point; 1 mark for preventing systematic zero/length shift.',
      q3Title: '3. Why is the time for 20 complete oscillations measured instead of timing just a single oscillation?',
      q3Model: 'Model Answer: Human reaction time error in starting and stopping a stopwatch is typically ±0.2 seconds. Timing 20 oscillations reduces the fraction of timing uncertainty by a factor of 20 (ΔT = Δt / 20 = ±0.01 s), ensuring precision within 0.5%.',
      q3Rubric: 'Rubric: Award 1 mark for human reaction time error (±0.2 s); 1 mark for reducing fractional timing error by factor of N.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 10: සරල පැද්දුම මගින් ගුරුත්වජ ත්වරණය (g) සෙවීම',
      aim: 'අරමුණ: සරල පැද්දුමක විවිධ දිගවල් L සඳහා ආවර්ත කාලය T මැන, L ට එදිරිව T² ප්‍රස්ථාරගත කර ගුරුත්වජ ත්වරණය (g) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ගෝලාකාර ලෝහ පැද්දුම් ගෝලය, පැළුණු කෝක් ඇබය, ඇදෙන්නේ නැති සැහැල්ලු නූල, විරාම ඝටිකාව (කුඩාම මිනුම 0.01 s), මීටර් රූල, වර්නියර් කැලිපරය.',
      theoryTitle: 'මූලධර්මය සහ සරල අනුවර්තී චලිතය (SHM)',
      theoryText: 'කුඩා කෝණික විස්ථාපන සඳහා (θ < 5° හෙවත් sin θ ≈ θ), සරල පැද්දුම සරල අනුවර්තී චලිතයක යෙදේ:\nT = 2π √(L / g)\nදෙපසම වර්ග කළ විට:\nT² = (4π² / g) · L\nමුල් ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් ලැබේ:\n• අනුක්‍රමණය m = 4π² / g\n• ගුරුත්වජ ත්වරණය: g = 4π² / m (m/s²).',
      procedure: 'ක්‍රමවේදය: 1. වර්නියර් කැලිපරයෙන් ගෝලයේ විෂ්කම්භය 2r මැන අරය r සොයන්න. 2. පැළුණු කෝක් ඇබය අතර නූල සිරස්ව රඳවන්න. 3. එක් එක් නූල් දිග l සඳහා මුළු දිග L = l + r ලබාගන්න. 4. කුඩා කෝණයකින් (θ < 5°) එකම සිරස් තලයක දෝලනය කරන්න. 5. දෝලන 20 ක කාලය t මැන T = t/20 සහ T² ගණනය කරන්න. 6. L ට එදිරිව T² ප්‍රස්ථාරය ඇඳ අනුක්‍රමණයෙන් g ලබාගන්න.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      obsTitle: 'නිරීක්ෂණ: නූල් දිග l, මුළු දිග L, දෝලන 20 ක කාලය t සහ T²',
      trialCol: 'වාරය',
      lCol: 'නූල් දිග l (cm)',
      totalLCol: 'මුළු දිග L = l + r (m)',
      timeCol: 'දෝලන 20 ක කාලය t (s)',
      periodCol: 'ආවර්ත කාලය T = t/20 (s)',
      tSquaredCol: 'T² (s²)',
      graphTitle: 'ප්‍රස්ථාරික විශ්ලේෂණය: මුළු දිග L ට එදිරිව T²',
      graphXLabel: 'පැද්දුම් දිග L (m)',
      graphYLabel: 'ආවර්ත කාලයේ වර්ගය T² (s²)',
      gradientLabel: 'අනුක්‍රමණය m = 4π² / g:',
      derivedGravityLabel: 'ප්‍රස්ථාරයෙන් ගුරුත්වජ ත්වරණය (g = 4π²/m):',
      benchmarkGravityLabel: 'සම්මත ගුරුත්වජ ත්වරණය (g₀):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      calcSummaryTitle: 'විශ්ලේෂණ ප්‍රතිඵල සහ ගුරුත්වජ ත්වරණ සත්‍යාපනය',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම තුළ ගුරුත්වජ ත්වරණය සත්‍යාපනය විය (< 2.0%)',
      verdictFail: 'කුඩා කෝණ දෝලනය සහ කාල ගණනය පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන් සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. පැද්දුමේ විස්තාරය කුඩා කෝණයකට (θ < 5°) සීමා කළ යුත්තේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: T = 2π√(L/g) සූත්‍රය ව්‍යුත්පන්න කර ඇත්තේ sin θ ≈ θ (රේඩියන) උපකල්පනය මතය. 5° ට වඩා වැඩි කෝණවලදී ආවර්ත කාලය විස්තාරය මත රඳා පවතින බැවින් කාල මිනුම්වල ධන දෝෂ ඇතිවේ.',
      q1Rubric: 'රූබ්රිකය: sin θ ≈ θ උපකල්පනයට ලකුණු 1; විශාල කෝණවලදී ආවර්ත කාලය විස්තාරය මත රඳා පැවතීමට ලකුණු 1.',
      q2Title: '2. පැද්දුම් දිග L යනු ආධාරක ලක්ෂ්‍යයේ සිට ගෝලයේ ගුරුත්ව කේන්ද්‍රය දක්වා මනින්නේ ඇයි (L = l + r)?',
      q2Model: 'ආදර්ශ පිළිතුර: දෝලනය වන වස්තුවේ ප්‍රත්‍යානයන ව්‍යාවර්තය ක්‍රියා කරන්නේ එහි ස්කන්ධ කේන්ද්‍රය හරහාය. නූල් දිග l පමණක් මැනීමෙන් ගෝලයේ අරය r නොසලකා හැරී L හි නියත සෘණ දෝෂයක් ඇතිවේ.',
      q2Rubric: 'රූබ්රිකය: ස්කන්ධ/ගුරුත්ව කේන්ද්‍රය හරහා බල ක්‍රියාකාරීත්වයට ලකුණු 1; r නොසලකා හැරීමෙන් වන නියත දෝෂය වැළැක්වීමට ලකුණු 1.',
      q3Title: '3. තනි දෝලනයක් වෙනුවට සම්පූර්ණ දෝලන 20 ක කාලය මනින්නේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: මිනිස් ප්‍රතික්‍රියා කාල දෝෂය සාමාන්‍යයෙන් ±0.2 s පමණ වේ. දෝලන 20 ක කාලය මැනීමෙන් එක් ආවර්ත කාලයක භාගික දෝෂය 20 ගුණයකින් අඩු වේ (ΔT = ±0.01 s).',
      q3Rubric: 'රූබ්රිකය: මිනිස් ප්‍රතික්‍රියා කාල දෝෂයට ලකුණු 1; දෝලන N ගණනකින් භාගික දෝෂය අවම වීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const rCm = parseFloat(bobRadiusCm) || 1.0;

  const updateTrial = (id: number, field: keyof PendulumTrial, val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const calculatedTrials = trials.map((tr) => {
    const l = parseFloat(tr.threadLengthCm);
    const tVal = parseFloat(tr.time20OscS);

    if (!isNaN(l) && !isNaN(tVal) && l > 0 && tVal > 0) {
      const totalLM = (l + rCm) / 100;
      const periodS = tVal / 20;
      const tSquaredS2 = periodS * periodS;
      return {
        ...tr,
        totalLM: Number(totalLM.toFixed(3)),
        periodS: Number(periodS.toFixed(3)),
        tSquaredS2: Number(tSquaredS2.toFixed(3)),
      };
    }
    return { ...tr, totalLM: null, periodS: null, tSquaredS2: null };
  });

  const regressionPoints = calculatedTrials
    .filter((tr) => tr.totalLM !== null && tr.tSquaredS2 !== null)
    .map((tr) => ({
      lengthM: tr.totalLM as number,
      periodSquaredS2: tr.tSquaredS2 as number,
    }));

  const regResult = calculatePendulumGravityRegression(regressionPoints);
  const derivedG = regResult.gravityMs2;
  const benchmarkG = 9.81;
  const discrepancyPercent =
    derivedG > 0 ? Math.abs((derivedG - benchmarkG) / benchmarkG) * 100 : null;
  const isPass = discrepancyPercent !== null && discrepancyPercent <= 2.0;

  // Independent practice calculation checks
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    const stuSlope = parseFloat(calculations.slope || '');
    if (regResult.slope > 0) {
      const isSlopeOk = !isNaN(stuSlope) && Math.abs(stuSlope - regResult.slope) <= 0.15;
      results.slope = isSlopeOk;
      if (!isSlopeOk) {
        feedback.slope = {
          en: `Slope m = ΔT² / ΔL ≈ ${regResult.slope.toFixed(3)} s²/m.`,
          si: `ප්‍රස්ථාරයේ අනුක්‍රමණය m = ΔT² / ΔL ≈ ${regResult.slope.toFixed(3)} s²/m විය යුතුය.`,
        };
      }
    }

    const stuG = parseFloat(calculations.gravity || '');
    if (derivedG > 0) {
      const isGOk = !isNaN(stuG) && Math.abs(stuG - derivedG) <= 0.25;
      results.gravity = isGOk;
      if (!isGOk) {
        feedback.gravity = {
          en: `Acceleration due to gravity g = 4π² / m = 4π² / ${regResult.slope.toFixed(3)} ≈ ${derivedG.toFixed(2)} m/s².`,
          si: `ගුරුත්වජ ත්වරණය g = 4π² / m = 4π² / ${regResult.slope.toFixed(3)} ≈ ${derivedG.toFixed(2)} m/s² විය යුතුය.`,
        };
      }
    }

    setCalculationCheck(results, feedback);
  };

  const handleLoadSample = () => {
    loadSampleObservations({
      bobRadiusCm: '1.00',
      trials: [
        { id: 1, threadLengthCm: '49.0', time20OscS: '28.35' },
        { id: 2, threadLengthCm: '59.0', time20OscS: '31.06' },
        { id: 3, threadLengthCm: '69.0', time20OscS: '33.56' },
        { id: 4, threadLengthCm: '79.0', time20OscS: '35.88' },
        { id: 5, threadLengthCm: '89.0', time20OscS: '38.06' },
      ],
    });
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
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
            <p className="whitespace-pre-line">{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{t.procedure}</p>

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

      {/* Main Workspace Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#0F766E]" />
            <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.obsTitle}
            </CardTitle>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#0F766E] border-[#0F766E]/40"
              onClick={handleLoadSample}
            >
              <Database className="w-3.5 h-3.5 mr-1" />
              {t.loadSample}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-8 text-[#64748B]"
              onClick={handleClear}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              {t.clearInputs}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 text-[#14243A] dark:text-[#F8FAFC]"
              onClick={() => window.print()}
            >
              <Printer className="w-3.5 h-3.5 mr-1" />
              {t.printSheet}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Pendulum Apparatus Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
              {/* Stand and Split Cork */}
              <rect x="160" y="10" width="20" height="15" fill="#475569" />
              <rect x="155" y="25" width="30" height="8" fill="#D97706" />
              <text x="170" y="8" textAnchor="middle" fontSize="8" fill="#64748B" fontWeight="bold">Split Cork</text>

              {/* Centre Line (Rest position) */}
              <line x1="170" y1="33" x2="170" y2="150" stroke="#CBD5E1" strokeDasharray="3 3" />

              {/* Displaced Pendulum (small angle < 5 deg) */}
              <line x1="170" y1="33" x2="200" y2="135" stroke="#1E293B" strokeWidth="1.5" />
              <circle cx="200" cy="143" r="8" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" />
              <circle cx="200" cy="143" r="1.5" fill="#EF4444" />

              {/* Angular arc θ */}
              <path d="M 170 70 A 37 37 0 0 1 178 69" fill="none" stroke="#EF4444" strokeWidth="1.2" />
              <text x="182" y="66" fontSize="9" fill="#EF4444" fontWeight="bold">θ &lt; 5°</text>

              {/* Length indicator L = l + r */}
              <line x1="140" y1="33" x2="140" y2="143" stroke="#0F766E" strokeWidth="1.2" />
              <text x="132" y="90" textAnchor="end" fontSize="9" fill="#0F766E" fontWeight="bold">L = l + r</text>

              {/* Oscillation Arc */}
              <path d="M 140 148 Q 170 152 200 148" fill="none" stroke="#0284C7" strokeWidth="1.2" strokeDasharray="2 2" />
              <text x="170" y="165" textAnchor="middle" fontSize="8" fill="#0284C7">20 Oscillations (Period T = t/20)</text>
            </svg>
          </div>

          {/* Observations Table */}
          <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                <tr>
                  <th className="p-3 w-16">{t.trialCol}</th>
                  <th className="p-3">{t.lCol}</th>
                  <th className="p-3">{t.totalLCol}</th>
                  <th className="p-3">{t.timeCol}</th>
                  <th className="p-3">{t.periodCol}</th>
                  <th className="p-3">{t.tSquaredCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                    <td className="p-3 font-bold text-center">{tr.id}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={tr.threadLengthCm}
                        onChange={(e) => updateTrial(tr.id, 'threadLengthCm', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {tr.totalLM !== null ? `${tr.totalLM} m` : '—'}
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={tr.time20OscS}
                        onChange={(e) => updateTrial(tr.id, 'time20OscS', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 text-[#64748B]">
                      {tr.periodS !== null ? `${tr.periodS.toFixed(3)} s` : '—'}
                    </td>
                    <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {tr.tSquaredS2 !== null ? `${tr.tSquaredS2.toFixed(3)} s²` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dynamic SVG Plot: T² vs L */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.graphTitle}
            </span>

            <div className="flex justify-center">
              <svg viewBox="0 0 500 280" className="w-full max-w-lg h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-2">
                {/* Grid Lines */}
                <line x1="60" y1="50" x2="460" y2="50" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="60" y1="100" x2="460" y2="100" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="60" y1="150" x2="460" y2="150" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="60" y1="200" x2="460" y2="200" stroke="#E2E8F0" strokeDasharray="3 3" />

                {/* Axes: Origin (0,0) at (60, 230) */}
                <line x1="60" y1="30" x2="60" y2="230" stroke="#475569" strokeWidth="1.5" />
                <line x1="60" y1="230" x2="470" y2="230" stroke="#475569" strokeWidth="1.5" />

                <text x="470" y="245" textAnchor="end" fontSize="10" fill="#64748B">L (m)</text>
                <text x="55" y="35" textAnchor="end" fontSize="10" fill="#64748B">T² (s²)</text>

                {/* Y-axis Ticks: 0, 1, 2, 3, 4 s² => yPixel = 230 - (T2 * 45) */}
                {[1, 2, 3, 4].map((val) => (
                  <g key={val}>
                    <line x1="56" y1={230 - val * 45} x2="64" y2={230 - val * 45} stroke="#475569" />
                    <text x="52" y={233 - val * 45} textAnchor="end" fontSize="8" fill="#94A3B8">{val}</text>
                  </g>
                ))}

                {/* X-axis Ticks: 0.2, 0.4, 0.6, 0.8, 1.0 m => xPixel = 60 + (L * 380) */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((val) => (
                  <g key={val}>
                    <line x1={60 + val * 380} y1="226" x2={60 + val * 380} y2="234" stroke="#475569" />
                    <text x={60 + val * 380} y="244" textAnchor="middle" fontSize="8" fill="#94A3B8">{val.toFixed(1)}</text>
                  </g>
                ))}

                {/* Linear Regression Best-Fit Line passing through origin */}
                {regResult.rSquared > 0 && (
                  <line
                    x1={60}
                    y1={230}
                    x2={60 + 1.0 * 380}
                    y2={230 - regResult.slope * 1.0 * 45}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}

                {/* Data Points */}
                {calculatedTrials.map((tr) => {
                  if (tr.totalLM !== null && tr.tSquaredS2 !== null) {
                    const px = 60 + tr.totalLM * 380;
                    const py = 230 - tr.tSquaredS2 * 45;
                    return (
                      <g key={tr.id}>
                        <circle cx={px} cy={py} r="4" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                      </g>
                    );
                  }
                  return null;
                })}
              </svg>
            </div>
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

          {/* Analytical Summary Card */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
                {t.calcSummaryTitle}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.gradientLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {regResult.slope > 0 ? `${regResult.slope.toFixed(3)} s²/m` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.slope || ''}
                    onChange={(e) => updateCalculation('slope', e.target.value)}
                    placeholder="m (s²/m)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.derivedGravityLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {derivedG > 0 ? `${derivedG.toFixed(2)} m/s²` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.gravity || ''}
                    onChange={(e) => updateCalculation('gravity', e.target.value)}
                    placeholder="g (m/s²)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.benchmarkGravityLabel}</span>
                <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {benchmarkG.toFixed(2)} m/s²
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {discrepancyPercent !== null ? `${discrepancyPercent.toFixed(2)}%` : '—'}
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

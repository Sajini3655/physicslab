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
import { calculateHelicalSpringRegression } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface HelicalSpringPracticalProps {
  locale?: Locale;
}

interface SpringTrial {
  id: number;
  massG: string;        // m (g)
  time20OscS: string;   // t for 20 oscillations (s)
}

export const HelicalSpringPractical: React.FC<HelicalSpringPracticalProps> = ({
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
    experimentId: 'exp-11-spring',
    defaultMode: 'guided',
    defaultObservations: {
      trials: [
        { id: 1, massG: '50', time20OscS: '6.95' },
        { id: 2, massG: '100', time20OscS: '9.24' },
        { id: 3, massG: '150', time20OscS: '11.05' },
        { id: 4, massG: '200', time20OscS: '12.60' },
        { id: 5, massG: '250', time20OscS: '13.98' },
      ],
    },
    defaultCalculations: {
      slope: '',
      springConstant: '',
      effectiveMass: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  const trials: SpringTrial[] = observations.trials || [
    { id: 1, massG: '50', time20OscS: '6.95' },
    { id: 2, massG: '100', time20OscS: '9.24' },
    { id: 3, massG: '150', time20OscS: '11.05' },
    { id: 4, massG: '200', time20OscS: '12.60' },
    { id: 5, massG: '250', time20OscS: '13.98' },
  ];

  const t = {
    en: {
      title: 'Practical 11: Determination of Spring Constant (k) and Effective Mass (mₑ) by Oscillation Method',
      aim: 'Aim: To determine the spring constant (k) and effective mass (mₑ) of a helical spring by timing vertical oscillations for various attached masses and plotting T² against m.',
      apparatus: 'Apparatus: Helical steel spring, rigid retort stand and clamp, slotted mass hanger (50 g) and slotted weights (50 g each up to 250 g), vertical pointer and fiducial reference mark, stopwatch (least count 0.01 s).',
      theoryTitle: 'Theory & Dynamic Oscillations',
      theoryText: 'When a mass m is suspended from a vertical helical spring of spring constant k, taking the effective vibrating mass of the spring itself as mₑ (where mₑ ≈ m_spring / 3), the period of vertical oscillation is:\nT = 2π √[(m + mₑ) / k]\nSquaring both sides:\nT² = (4π² / k) · m + (4π² · mₑ / k)\nPlotting T² (y-axis) against suspended mass m in kg (x-axis) yields a straight line (y = Sx + c):\n• Gradient S = 4π² / k ⇒ Spring Constant k = 4π² / S (N/m)\n• Vertical intercept c = 4π² · mₑ / k ⇒ Effective mass mₑ = c / S (kg).',
      procedure: 'Procedure: 1. Suspend helical spring firmly from clamp stand. 2. Attach hanger with mass m. 3. Pull hanger vertically downwards by 1–2 cm (ensuring elastic limit is not exceeded) and release smoothly so oscillations remain strictly vertical. 4. Record time for 20 oscillations using a stopwatch at the equilibrium point. 5. Repeat for masses from 50 g to 250 g in 50 g steps. 6. Plot T² vs m, determine slope S and intercept c to deduce k and mₑ.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      obsTitle: 'Observations: Suspended Mass m, Time for 20 Oscillations t, Period T & T²',
      trialCol: 'Trial',
      massGCol: 'Suspended Mass m (g)',
      massKgCol: 'Mass m (kg)',
      timeCol: 'Time for 20 Osc. t (s)',
      periodCol: 'Period T = t/20 (s)',
      tSquaredCol: 'T² (s²)',
      graphTitle: 'Graphical Analysis: T² vs Suspended Mass m (kg)',
      graphXLabel: 'Suspended Mass m (kg)',
      graphYLabel: 'Period Squared T² (s²)',
      gradientLabel: 'Gradient S = 4π² / k:',
      interceptLabel: 'Vertical Intercept c:',
      derivedKLabel: 'Derived Spring Constant (k = 4π²/S):',
      derivedMeLabel: 'Effective Spring Mass (mₑ = c/S):',
      calcSummaryTitle: 'Analytical Results & Spring Characteristics',
      verdictPass: 'Linearity and Dynamic Spring Constant Verified (R² > 0.99)',
      verdictFail: 'Check Amplitude Constraints or Timekeeping',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why does the T² vs m graph have a positive vertical intercept c instead of passing through the origin?',
      q1Model: 'Model Answer: Even when suspended mass m = 0, the coils of the spring itself possess finite mass and oscillate with varying amplitudes along the spring length. This self-inertia adds an effective mass mₑ (theoretically m_spring / 3) to the system, producing a positive intercept c = (4π²/k)·mₑ on the T² axis.',
      q1Rubric: 'Rubric: Award 1 mark for self-mass / inertia of spring coils; 1 mark for effective mass term c = (4π²/k)·mₑ.',
      q2Title: '2. Why must the displacement be restricted to small vertical amplitudes without lateral swinging or spring distortion?',
      q2Model: 'Model Answer: Large displacements risk exceeding the elastic limit of the spring (violating Hooke\'s law F = -kx). Lateral or conical swinging couples transverse vibration modes with the vertical mode, modifying the effective restoring force and period.',
      q2Rubric: 'Rubric: Award 1 mark for remaining within elastic limit / Hooke\'s law; 1 mark for avoiding transverse/lateral coupling modes.',
      q3Title: '3. Why is it preferable to start and stop the stopwatch as the pointer passes the central equilibrium position?',
      q3Model: 'Model Answer: At the central equilibrium position, the oscillating mass attains its maximum velocity, making its transit across the reference mark instantaneous and unambiguous. At the turning points, velocity is zero, causing maximum timing hesitation and parallax ambiguity.',
      q3Rubric: 'Rubric: Award 1 mark for maximum velocity at equilibrium position; 1 mark for eliminating turnaround/zero-velocity hesitation error.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 11: දෝලන ක්‍රමයෙන් හෙලික්සීය දුන්නක දුනු නියතය (k) සහ ඵලදායී ස්කන්ධය (mₑ) සෙවීම',
      aim: 'අරමුණ: විවිධ භාර m සඳහා හෙලික්සීය දුන්නක සිරස් දෝලන ආවර්ත කාලය T මැන, m ට එදිරිව T² ප්‍රස්ථාරගත කර දුනු නියතය (k) සහ ඵලදායී ස්කන්ධය (mₑ) සෙවීම.',
      apparatus: 'උපකරණ: වානේ හෙලික්සීය දුන්න, ආධාරකය සහ කලම්පය, පඩි තැටිය සහ පඩි (50 g බැගින් 250 g දක්වා), දර්ශකය, විරාම ඝටිකාව (කුඩාම මිනුම 0.01 s).',
      theoryTitle: 'මූලධර්මය සහ ගතික දෝලන',
      theoryText: 'දුනු නියතය k වන හෙලික්සීය දුන්නක එල්ලා ඇති ස්කන්ධය m සහ දුන්නේ ඵලදායී ස්කන්ධය mₑ (mₑ ≈ m_දුන්න / 3) වන විට:\nT = 2π √[(m + mₑ) / k]\nT² = (4π² / k) · m + (4π² · mₑ / k)\nm (kg) ට එදිරිව T² ප්‍රස්ථාරය සරල රේඛාවකි (y = Sx + c):\n• අනුක්‍රමණය S = 4π² / k ⇒ දුනු නියතය k = 4π² / S (N/m)\n• සිරස් අන්තඃඛණ්ඩය c = 4π² · mₑ / k ⇒ ඵලදායී ස්කන්ධය mₑ = c / S (kg).',
      procedure: 'ක්‍රමවේදය: 1. හෙලික්සීය දුන්න ආධාරකයේ රඳවන්න. 2. m ස්කන්ධය එල්ලන්න. 3. ප්‍රත්‍යාස්ථ සීමාව නොඉක්මවන සේ 1–2 cm සිරස්ව පහත් කර මුදා හරින්න. 4. සමතුලිත ලක්ෂ්‍යය පසුකරන විට විරාම ඝටිකාවෙන් දෝලන 20 ක කාලය මනින්න. 5. 50 g සිට 250 g දක්වා පඩි මාරු කරමින් නැවත කරන්න. 6. m ට එදිරිව T² ප්‍රස්ථාරය ඇඳ S සහ c මගින් k සහ mₑ නිර්ණය කරන්න.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      obsTitle: 'නිරීක්ෂණ: ස්කන්ධය m, දෝලන 20 ක කාලය t, ආවර්ත කාලය T සහ T²',
      trialCol: 'වාරය',
      massGCol: 'ස්කන්ධය m (g)',
      massKgCol: 'ස්කන්ධය m (kg)',
      timeCol: 'දෝලන 20 ක කාලය t (s)',
      periodCol: 'ආවර්ත කාලය T = t/20 (s)',
      tSquaredCol: 'T² (s²)',
      graphTitle: 'ප්‍රස්ථාරික විශ්ලේෂණය: ස්කන්ධය m (kg) ට එදිරිව T²',
      graphXLabel: 'එල්ලූ ස්කන්ධය m (kg)',
      graphYLabel: 'ආවර්ත කාලයේ වර්ගය T² (s²)',
      gradientLabel: 'අනුක්‍රමණය S = 4π² / k:',
      interceptLabel: 'සිරස් අන්තඃඛණ්ඩය c:',
      derivedKLabel: 'ප්‍රස්ථාරයෙන් දුනු නියතය (k = 4π²/S):',
      derivedMeLabel: 'දුන්නේ ඵලදායී ස්කන්ධය (mₑ = c/S):',
      calcSummaryTitle: 'විශ්ලේෂණ ප්‍රතිඵල සහ දුනු ලක්ෂණ',
      verdictPass: 'සරල රේඛීයතාව සහ දුනු නියතය තහවුරු විය (R² > 0.99)',
      verdictFail: 'විස්තාරය සහ කාල ගණනය පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන් සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. m ට එදිරිව T² ප්‍රස්ථාරය මුල් ලක්ෂ්‍යය හරහා නොගොස් ධන සිරස් අන්තඃඛණ්ඩයක් c ලබා දෙන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: m = 0 වන විටද දුන්නේ පුරුක්වලට නිශ්චිත ස්කන්ධයක් පවතින අතර ඒවාද විවිධ විස්තාරවලින් දෝලනය වේ. මෙම ආවේණික ස්කන්ධය නිසා ඵලදායී ස්කන්ධයක් mₑ (m_spring / 3 පමණ) පද්ධතියට එකතු වී T² අක්ෂයේ c = (4π²/k)·mₑ අන්තඃඛණ්ඩයක් ඇතිවේ.',
      q1Rubric: 'රූබ්රිකය: දුන්නේ පුරුක්වල ස්කන්ධය/අවස්ථිතියට ලකුණු 1; ඵලදායී ස්කන්ධය නිසා c = (4π²/k)·mₑ අන්තඃඛණ්ඩය ඇතිවීමට ලකුණු 1.',
      q2Title: '2. විස්ථාපනය කුඩා සිරස් විස්තාරයකට සීමා කළ යුත්තේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: විශාල විස්ථාපන මගින් දුන්නේ ප්‍රත්‍යාස්ථ සීමාව ඉක්මවා හුක් නියමය බිඳ වැටිය හැක. තවද පැති දෝලන ඇතිවීමෙන් සිරස් මාදිලිය සමග මුසුවී ආවර්ත කාලය වෙනස් වේ.',
      q2Rubric: 'රූබ්රිකය: ප්‍රත්‍යාස්ථ සීමාව නොඉක්මවීමට/හුක් නියමයට ලකුණු 1; පැති දෝලන මිශ්‍රවීම වැළැක්වීමට ලකුණු 1.',
      q3Title: '3. සමතුලිත පිහිටුමේදී විරාම ඝටිකාව ක්‍රියාත්මක කිරීම සහ නැවැත්වීම වඩාත් යෝග්‍ය වන්නේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: මධ්‍ය සමතුලිත පිහිටුමේදී ස්කන්ධයේ ප්‍රවේගය උපරිම වන බැවින් දර්ශකය ලකුණ පසුකිරීම පැහැදිලි හා ක්ෂණික වේ. හැරවුම් ලක්ෂ්‍යවලදී ප්‍රවේගය ශුන්‍ය වන බැවින් කාලය සටහන් කිරීමේ අවිනිශ්චිතතාව වැඩි වේ.',
      q3Rubric: 'රූබ්රිකය: සමතුලිත පිහිටුමේදී උපරිම ප්‍රවේගයට ලකුණු 1; හැරවුම් ලක්ෂ්‍යවල ප්‍රවේගය ශුන්‍ය බැවින් වන දෝෂය වැළැක්වීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof SpringTrial, val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const calculatedTrials = trials.map((tr) => {
    const mG = parseFloat(tr.massG);
    const tVal = parseFloat(tr.time20OscS);

    if (!isNaN(mG) && !isNaN(tVal) && mG > 0 && tVal > 0) {
      const massKg = mG / 1000;
      const periodS = tVal / 20;
      const tSquaredS2 = periodS * periodS;
      return {
        ...tr,
        massKg: Number(massKg.toFixed(3)),
        periodS: Number(periodS.toFixed(3)),
        tSquaredS2: Number(tSquaredS2.toFixed(3)),
      };
    }
    return { ...tr, massKg: null, periodS: null, tSquaredS2: null };
  });

  const regressionPoints = calculatedTrials
    .filter((tr) => tr.massKg !== null && tr.tSquaredS2 !== null)
    .map((tr) => ({
      massKg: tr.massKg as number,
      periodSquaredS2: tr.tSquaredS2 as number,
    }));

  const regResult = calculateHelicalSpringRegression(regressionPoints);
  const derivedK = regResult.springConstantNm;
  const derivedMeG = regResult.effectiveMassKg * 1000;
  const isPass = regResult.rSquared >= 0.98 && derivedK > 0;

  // Independent practice calculation checks
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    const stuSlope = parseFloat(calculations.slope || '');
    if (regResult.slope > 0) {
      const isSlopeOk = !isNaN(stuSlope) && Math.abs(stuSlope - regResult.slope) <= 0.1;
      results.slope = isSlopeOk;
      if (!isSlopeOk) {
        feedback.slope = {
          en: `Slope S = ΔT² / Δm ≈ ${regResult.slope.toFixed(2)} s²/kg.`,
          si: `ප්‍රස්ථාරයේ අනුක්‍රමණය S = ΔT² / Δm ≈ ${regResult.slope.toFixed(2)} s²/kg විය යුතුය.`,
        };
      }
    }

    const stuK = parseFloat(calculations.springConstant || '');
    if (derivedK > 0) {
      const isKOk = !isNaN(stuK) && Math.abs(stuK - derivedK) <= 1.5;
      results.springConstant = isKOk;
      if (!isKOk) {
        feedback.springConstant = {
          en: `Spring constant k = 4π² / S = 4π² / ${regResult.slope.toFixed(2)} ≈ ${derivedK.toFixed(1)} N/m.`,
          si: `දුනු නියතය k = 4π² / S ≈ ${derivedK.toFixed(1)} N/m විය යුතුය.`,
        };
      }
    }

    setCalculationCheck(results, feedback);
  };

  const handleLoadSample = () => {
    loadSampleObservations({
      trials: [
        { id: 1, massG: '50', time20OscS: '6.95' },
        { id: 2, massG: '100', time20OscS: '9.24' },
        { id: 3, massG: '150', time20OscS: '11.05' },
        { id: 4, massG: '200', time20OscS: '12.60' },
        { id: 5, massG: '250', time20OscS: '13.98' },
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
          {/* Spring Apparatus Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
              {/* Stand */}
              <rect x="40" y="10" width="10" height="155" fill="#475569" />
              <rect x="25" y="160" width="40" height="10" fill="#334155" />
              <rect x="45" y="20" width="120" height="8" fill="#475569" />

              {/* Helical Spring */}
              <g transform="translate(140, 28)">
                <path
                  d="M 0 0 L 0 10 
                     C -10 15, -10 20, 0 25 C 10 30, 10 35, 0 40 
                     C -10 45, -10 50, 0 55 C 10 60, 10 65, 0 70 
                     C -10 75, -10 80, 0 85 L 0 95"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2.5"
                />
                {/* Hanger and weights */}
                <line x1="0" y1="95" x2="0" y2="115" stroke="#1E293B" strokeWidth="2" />
                <rect x="-14" y="115" width="28" height="20" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" />
                <text x="0" y="129" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">m</text>

                {/* Oscillation arrow */}
                <line x1="25" y1="95" x2="25" y2="135" stroke="#0F766E" strokeWidth="1.5" />
                <polygon points="25,90 22,96 28,96" fill="#0F766E" />
                <polygon points="25,140 22,134 28,134" fill="#0F766E" />
                <text x="32" y="118" fontSize="8" fill="#0F766E" fontWeight="bold">Vertical SHM</text>
              </g>

              {/* Pointer and Scale */}
              <g transform="translate(240, 40)">
                <line x1="0" y1="0" x2="0" y2="110" stroke="#CBD5E1" strokeWidth="3" />
                {[0, 20, 40, 60, 80, 100].map((y) => (
                  <line key={y} x1="-5" y1={y} x2="5" y2={y} stroke="#64748B" strokeWidth="1" />
                ))}
                <text x="12" y="55" fontSize="8" fill="#64748B">Scale / Pointer</text>
              </g>
            </svg>
          </div>

          {/* Observations Table */}
          <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                <tr>
                  <th className="p-3 w-16">{t.trialCol}</th>
                  <th className="p-3">{t.massGCol}</th>
                  <th className="p-3">{t.massKgCol}</th>
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
                        value={tr.massG}
                        onChange={(e) => updateTrial(tr.id, 'massG', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {tr.massKg !== null ? `${tr.massKg} kg` : '—'}
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

          {/* Dynamic SVG Plot: T² vs m (kg) */}
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

                {/* Axes: Origin at (60, 230) */}
                <line x1="60" y1="30" x2="60" y2="230" stroke="#475569" strokeWidth="1.5" />
                <line x1="60" y1="230" x2="470" y2="230" stroke="#475569" strokeWidth="1.5" />

                <text x="470" y="245" textAnchor="end" fontSize="10" fill="#64748B">m (kg)</text>
                <text x="55" y="35" textAnchor="end" fontSize="10" fill="#64748B">T² (s²)</text>

                {/* Y-axis Ticks: 0.1, 0.2, 0.3, 0.4, 0.5 s² => yPixel = 230 - (T2 * 360) */}
                {[0.1, 0.2, 0.3, 0.4, 0.5].map((val) => (
                  <g key={val}>
                    <line x1="56" y1={230 - val * 360} x2="64" y2={230 - val * 360} stroke="#475569" />
                    <text x="52" y={233 - val * 360} textAnchor="end" fontSize="8" fill="#94A3B8">{val.toFixed(1)}</text>
                  </g>
                ))}

                {/* X-axis Ticks: 0.05, 0.10, 0.15, 0.20, 0.25, 0.30 kg => xPixel = 60 + (m * 1300) */}
                {[0.05, 0.10, 0.15, 0.20, 0.25, 0.30].map((val) => (
                  <g key={val}>
                    <line x1={60 + val * 1300} y1="226" x2={60 + val * 1300} y2="234" stroke="#475569" />
                    <text x={60 + val * 1300} y="244" textAnchor="middle" fontSize="8" fill="#94A3B8">{val.toFixed(2)}</text>
                  </g>
                ))}

                {/* Regression Line */}
                {regResult.rSquared > 0 && (
                  <line
                    x1={60}
                    y1={230 - (regResult.slope * 0 + regResult.effectiveMassKg * regResult.slope) * 360}
                    x2={60 + 0.30 * 1300}
                    y2={230 - (regResult.slope * 0.30 + regResult.effectiveMassKg * regResult.slope) * 360}
                    stroke="#0F766E"
                    strokeWidth="2"
                  />
                )}

                {/* Positive Intercept Marker */}
                {regResult.rSquared > 0 && (
                  <circle
                    cx={60}
                    cy={230 - (regResult.effectiveMassKg * regResult.slope) * 360}
                    r="3.5"
                    fill="#D97706"
                  />
                )}

                {/* Data Points */}
                {calculatedTrials.map((tr) => {
                  if (tr.massKg !== null && tr.tSquaredS2 !== null) {
                    const px = 60 + tr.massKg * 1300;
                    const py = 230 - tr.tSquaredS2 * 360;
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
                    {regResult.slope > 0 ? `${regResult.slope.toFixed(2)} s²/kg` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.slope || ''}
                    onChange={(e) => updateCalculation('slope', e.target.value)}
                    placeholder="S (s²/kg)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.derivedKLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {derivedK > 0 ? `${derivedK.toFixed(1)} N/m` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.springConstant || ''}
                    onChange={(e) => updateCalculation('springConstant', e.target.value)}
                    placeholder="k (N/m)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.derivedMeLabel}</span>
                <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {derivedMeG > 0 ? `${derivedMeG.toFixed(1)} g` : '—'}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">Correlation R²:</span>
                <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {regResult.rSquared.toFixed(4)}
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

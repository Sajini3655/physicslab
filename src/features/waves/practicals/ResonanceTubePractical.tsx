'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  RotateCcw,
  Database,
  Waves,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  GraduationCap,
  HelpCircle,
  AlertTriangle,
  Printer,
} from 'lucide-react';
import {
  calculateResonanceTubeSpeed,
  calculateSpeedOfSoundInGas,
  calculateResonanceLinearRegression,
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface ResonanceTubePracticalProps {
  locale?: Locale;
}

interface ResonanceTrialExp14 {
  id: number;
  freqHz: string;
  l1Cm: string;
  l2Cm: string;
}

interface ResonanceTrialExp15 {
  id: number;
  freqHz: string;
  lCm: string;
}

export const ResonanceTubePractical: React.FC<ResonanceTubePracticalProps> = ({
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
    experimentId: 'exp-14-resonance',
    defaultMode: 'guided',
    defaultObservations: {
      subMode: 'exp15',
      ambientTempC: '25.0',
      tubeDiameterMm: '30.0',
      trialsExp14: [
        { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
        { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
        { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
        { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
        { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
      ],
      trialsExp15: [
        { id: 1, freqHz: '512', lCm: '15.5' },
        { id: 2, freqHz: '480', lCm: '16.6' },
        { id: 3, freqHz: '384', lCm: '21.0' },
        { id: 4, freqHz: '320', lCm: '25.5' },
        { id: 5, freqHz: '256', lCm: '32.1' },
      ],
      unknownForkL1Cm: '19.2',
      unknownForkL2Cm: '60.1',
    },
    defaultCalculations: {
      slope: '',
      speedOfSound: '',
      endCorrection: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  // Normalise subMode: if legacy 'speed_of_sound', map to 'exp14'
  const rawSubMode = observations.subMode || 'exp15';
  const subMode: 'exp14' | 'exp15' | 'unknown_frequency' =
    rawSubMode === 'speed_of_sound' ? 'exp14' : (rawSubMode as 'exp14' | 'exp15' | 'unknown_frequency');

  const setSubMode = (m: 'exp14' | 'exp15' | 'unknown_frequency') => updateObservations({ subMode: m });

  const ambientTempC = observations.ambientTempC || '25.0';
  const tubeDiameterMm = observations.tubeDiameterMm || '30.0';
  const unknownForkL1Cm = observations.unknownForkL1Cm || '19.2';
  const unknownForkL2Cm = observations.unknownForkL2Cm || '60.1';

  const trialsExp14: ResonanceTrialExp14[] = observations.trialsExp14 || [
    { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
    { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
    { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
    { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
    { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
  ];

  const trialsExp15: ResonanceTrialExp15[] = observations.trialsExp15 || [
    { id: 1, freqHz: '512', lCm: '15.5' },
    { id: 2, freqHz: '480', lCm: '16.6' },
    { id: 3, freqHz: '384', lCm: '21.0' },
    { id: 4, freqHz: '320', lCm: '25.5' },
    { id: 5, freqHz: '256', lCm: '32.1' },
  ];

  const t = {
    en: {
      title: 'Practical 14 & 15: Velocity of Sound in Air & End Correction by Resonance Tube',
      aim: 'Aim: To determine the velocity of sound in air and the end correction of a resonance tube using a single tuning fork with two resonances (Exp 14), and using a set of tuning forks with a linear graph of l vs 1/f (Exp 15).',
      apparatus: 'Apparatus: Resonance tube apparatus with water reservoir, set of standard tuning forks (256, 320, 384, 480, 512 Hz), unknown tuning fork, rubber mallet, internal calipers (measuring tube diameter d), metre rule, thermometer.',
      modeExp14: 'Exp 14: Single Fork (Two Resonances)',
      modeExp15: 'Exp 15: Set of Tuning Forks (l vs 1/f Graph)',
      modeFreq: 'Additional: Unknown Fork Frequency',
      theoryTitleExp14: 'Exp 14: Single Fork Two-Resonance Method',
      theoryTextExp14: 'An air column closed at one end resonates in odd quarter-wavelength modes:\n• 1st Resonance: l₁ + e = λ / 4\n• 2nd Resonance: l₂ + e = 3λ / 4\nSubtracting eliminates end correction e: (l₂ - l₁) = λ / 2 ⇒ v = 2f(l₂ - l₁).\nThe end correction is computed as e = (l₂ - 3l₁) / 2.',
      theoryTitleExp15: 'Exp 15: Set of Tuning Forks & Linear Regression Graph',
      theoryTextExp15: 'For the fundamental resonance with tuning fork frequency f:\nl + e = λ / 4 = v / (4f) ⇒ l = (v / 4) · (1 / f) - e\nPlotting resonance length l (y-axis) against reciprocal frequency 1/f (x-axis) yields a straight line (y = mx + c):\n• Gradient m = v / 4 ⇒ Speed of sound v = 4m (m/s)\n• Vertical intercept c = -e ⇒ End correction e = -c (m or cm)\nTheoretical end correction from internal diameter: e ≈ 0.3 · d ≈ 0.6 · r.',
      theoryTitleFreq: 'Additional: Unknown Tuning Fork Frequency (f_x)',
      theoryTextFreq: 'Using the calibrated speed of sound v at room temperature, the unknown frequency f_x is determined from its resonance lengths: f_x = v / [2·(l₂ - l₁)].',
      procedureExp14: 'Procedure: 1. Note ambient temperature. 2. Strike known fork, hold prongs horizontally over tube mouth. 3. Lower water reservoir to locate 1st resonance length l₁ and 2nd resonance length l₂. 4. Compute v = 2f(l₂ - l₁) and e = (l₂ - 3l₁) / 2.',
      procedureExp15: 'Procedure: 1. Measure tube internal diameter d using internal calipers. 2. For each tuning fork of known frequency f, find the 1st resonance position l. 3. Calculate 1/f. 4. Plot l vs 1/f. 5. Determine gradient m and vertical intercept c to deduce speed v = 4m and end correction e = -c.',
      procedureFreq: 'Procedure: 1. Sound the test fork over the water column. 2. Measure first resonance length l₁ and second resonance length l₂. 3. Deducing f_x = v / [2(l₂ - l₁)].',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      obsTitleExp14: 'Observations (Exp 14): First & Second Resonances Across Known Forks',
      obsTitleExp15: 'Observations (Exp 15): Fundamental Resonance Length vs Reciprocal Frequency (1/f)',
      obsTitleFreq: 'Observations: Unknown Tuning Fork Resonances',
      trialCol: 'Trial',
      forkCol: 'Fork f (Hz)',
      recipCol: '1/f (×10⁻³ s)',
      l1Col: '1st Resonance l₁ (cm)',
      l2Col: '2nd Resonance l₂ (cm)',
      lCol: '1st Resonance l (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'Calculated Speed v (m/s)',
      endCorrCol: 'End Corr. e (cm)',
      graphTitle: 'Graphical Analysis: Resonance Length l vs Reciprocal Frequency (1/f)',
      graphXLabel: 'Reciprocal Frequency 1/f (×10⁻³ s)',
      graphYLabel: 'Resonance Length l (cm)',
      gradientLabel: 'Gradient m = v / 4:',
      interceptLabel: 'Vertical Intercept c = -e:',
      derivedSpeedLabel: 'Experimental Speed of Sound (v = 4m):',
      derivedEndCorrLabel: 'Derived End Correction (e = -c):',
      theoreticalEndCorrLabel: 'Theoretical End Correction (e ≈ 0.3d):',
      theoreticalSpeedLabel: 'Theoretical Speed at Current Temp:',
      calcSummaryTitle: 'Analytical Results & Temperature Comparison',
      meanSpeed: 'Mean Experimental Speed of Sound (v):',
      theoreticalSpeed: 'Theoretical Speed at Current Temp:',
      meanEndCorr: 'Mean End Correction (e):',
      percentageDiff: 'Discrepancy:',
      unknownForkFreqLabel: 'Derived Unknown Fork Frequency (f_x):',
      nominalUnknownFork: 'Nominal Fork Frequency (426.7 Hz / A4):',
      verdictPass: 'Velocity Verified Within Syllabus Tolerances (< 3.0%)',
      verdictFail: 'Check Resonance Detection or Wavelength Difference',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why does the straight-line graph of l vs 1/f have a negative vertical intercept?',
      q1Model: 'Model Answer: The antinode of the vibrating air column forms slightly outside the physical tube rim by an end correction distance e (effective acoustic length = l + e). Therefore, l = (v/4)(1/f) - e, which has a negative y-intercept c = -e when 1/f = 0.',
      q1Rubric: 'Rubric: Award 1 mark for mentioning antinode forms outside tube rim / end correction e; 1 mark for equation derivation l = (v/4)(1/f) - e.',
      q2Title: '2. Why is using a set of tuning forks (Exp 15) scientifically superior to a single fork (Exp 14)?',
      q2Model: 'Model Answer: Plotting multiple data points over a wide frequency spectrum averages out random experimental errors through linear regression. It also provides independent graphical determinations of both sound velocity and end correction without compounding subtraction uncertainties.',
      q2Rubric: 'Rubric: Award 1 mark for random error reduction / linear regression averaging; 1 mark for independent determination of both v and e.',
      q3Title: '3. How should the tuning fork be excited and held over the resonance tube?',
      q3Model: 'Model Answer: Strike the prongs gently with a soft rubber mallet (never against hard glass or metal). Hold the fork prongs horizontally in line with the tube mouth without touching the glass rim, so longitudinal compressions enter the tube axis unimpeded.',
      q3Rubric: 'Rubric: Award 1 mark for rubber mallet / preventing overtones; 1 mark for horizontal alignment without rim contact.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 14 සහ 15: අනුනාද නළයෙන් වාතයේ ධ්වනි ප්‍රවේගය සහ අන්ත ශෝධනය සෙවීම',
      aim: 'අරමුණ: තනි සුසර දෙබලක ප්‍රථම සහ දෙවන අනුනාද මගින් (පරීක්ෂණ 14) සහ සුසර දෙබල කට්ටලයක් යොදාගෙන l එදිරිව 1/f ප්‍රස්ථාරය මගින් (පරීක්ෂණ 15) වාතයේ ධ්වනි ප්‍රවේගය හා අන්ත ශෝධනය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ජල බඳුනක් සහිත අනුනාද නළ උපකරණය, සුසර දෙබල කට්ටලය (256, 320, 384, 480, 512 Hz), නොදන්නා සුසර දෙබලය, රබර් මිටිය, අභ්‍යන්තර පාඨක (නළ විෂ්කම්භය d මැනීමට), මීටර් රූල, උෂ්ණත්වමානය.',
      modeExp14: 'පරීක්ෂණ 14: තනි සුසර දෙබලය (අනුනාද දෙකේ ක්‍රමය)',
      modeExp15: 'පරීක්ෂණ 15: සුසර දෙබල කට්ටලය (l එදිරිව 1/f ප්‍රස්ථාරය)',
      modeFreq: 'අමතර: නොදන්නා දෙබලේ සංඛ්‍යාතය',
      theoryTitleExp14: 'පරීක්ෂණ 14: තනි සුසර දෙබල අනුනාද දෙකේ ක්‍රමය',
      theoryTextExp14: 'ජලයෙන් වැසුණු වායු කඳක:\n• 1 වන අනුනාදය: l₁ + e = λ / 4\n• 2 වන අනුනාදය: l₂ + e = 3λ / 4\nඅඩු කිරීමෙන් e ඉවත් වේ: (l₂ - l₁) = λ / 2 ⇒ v = 2f(l₂ - l₁).\nඅන්ත ශෝධනය e = (l₂ - 3l₁) / 2 මගින් ගණනය කෙරේ.',
      theoryTitleExp15: 'පරීක්ෂණ 15: සුසර දෙබල කට්ටලය සහ සරල රේඛීය ප්‍රස්ථාරය',
      theoryTextExp15: 'මූලික අනුනාදය සඳහා:\nl + e = λ / 4 = v / (4f) ⇒ l = (v / 4) · (1 / f) - e\n1/f ට එදිරිව l ප්‍රස්ථාරගත කළ විට සරල රේඛාවක් (y = mx + c) ලැබේ:\n• අනුක්‍රමණය m = v / 4 ⇒ ධ්වනි ප්‍රවේගය v = 4m (m/s)\n• සිරස් අන්තඃඛණ්ඩය c = -e ⇒ අන්ත ශෝධනය e = -c (cm)\nනළ අභ්‍යන්තර විෂ්කම්භයෙන් සෛද්ධාන්තික අන්ත ශෝධනය: e ≈ 0.3 · d ≈ 0.6 · r.',
      theoryTitleFreq: 'අමතර: නොදන්නා සුසර දෙබලේ සංඛ්‍යාතය (f_x)',
      theoryTextFreq: 'කාමර උෂ්ණත්වයේ ධ්වනි ප්‍රවේගය v භාවිතයෙන් නොදන්නා සුසර දෙබල සඳහා අනුනාද දිග l₁ සහ l₂ මැන f_x = v / [2(l₂ - l₁)] සූත්‍රයෙන් සංඛ්‍යාතය සෙවිය හැක.',
      procedureExp14: 'ක්‍රමවේදය: 1. කාමර උෂ්ණත්වය සටහන් කරන්න. 2. සුසර දෙබල කම්පනය කර නළ මුවවිට තිරස්ව තබන්න. 3. ජල මට්ටම පහත් කර l₁ සහ l₂ මනින්න. 4. v = 2f(l₂ - l₁) සහ e = (l₂ - 3l₁)/2 ගණනය කරන්න.',
      procedureExp15: 'ක්‍රමවේදය: 1. අභ්‍යන්තර පාඨකයෙන් නළ විෂ්කම්භය d මනින්න. 2. එක් එක් සුසර දෙබලය සඳහා 1 වන අනුනාද දිග l මනින්න. 3. 1/f ගණනය කරන්න. 4. l එදිරිව 1/f ප්‍රස්ථාරය ඇඳ අනුක්‍රමණයෙන් v = 4m ද, අන්තඃඛණ්ඩයෙන් e = -c ද නිර්ණය කරන්න.',
      procedureFreq: 'ක්‍රමවේදය: 1. නොදන්නා සුසර දෙබලය කම්පනය කරන්න. 2. අනුනාද දිගවල් l₁ සහ l₂ සටහන් කරන්න. 3. f_x = v / [2(l₂ - l₁)] ගණනය කරන්න.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      obsTitleExp14: 'නිරීක්ෂණ (පරීක්ෂණ 14): විවිධ සුසර දෙබල සඳහා ප්‍රථම සහ දෙවන අනුනාද දිග',
      obsTitleExp15: 'නිරීක්ෂණ (පරීක්ෂණ 15): මූලික අනුනාද දිග l එදිරිව සංඛ්‍යාතයේ ප්‍රතිලෝමය (1/f)',
      obsTitleFreq: 'නිරීක්ෂණ: නොදන්නා සුසර දෙබල සඳහා අනුනාද දිග',
      trialCol: 'වාරය',
      forkCol: 'දෙබලේ f (Hz)',
      recipCol: '1/f (×10⁻³ s)',
      l1Col: '1 වන අනුනාද දිග l₁ (cm)',
      l2Col: '2 වන අනුනාද දිග l₂ (cm)',
      lCol: '1 වන අනුනාද දිග l (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'ගණනය කළ ප්‍රවේගය v (m/s)',
      endCorrCol: 'අන්ත ශෝධනය e (cm)',
      graphTitle: 'ප්‍රස්ථාරික විශ්ලේෂණය: අනුනාද දිග l එදිරිව ප්‍රතිලෝම සංඛ්‍යාතය (1/f)',
      graphXLabel: 'ප්‍රතිලෝම සංඛ්‍යාතය 1/f (×10⁻³ s)',
      graphYLabel: 'අනුනාද දිග l (cm)',
      gradientLabel: 'අනුක්‍රමණය m = v / 4:',
      interceptLabel: 'සිරස් අන්තඃඛණ්ඩය c = -e:',
      derivedSpeedLabel: 'පරීක්ෂණාත්මක ධ්වනි ප්‍රවේගය (v = 4m):',
      derivedEndCorrLabel: 'ප්‍රස්ථාරයෙන් අන්ත ශෝධනය (e = -c):',
      theoreticalEndCorrLabel: 'සෛද්ධාන්තික අන්ත ශෝධනය (e ≈ 0.3d):',
      theoreticalSpeedLabel: 'වත්මන් උෂ්ණත්වයේ සෛද්ධාන්තික ප්‍රවේගය:',
      calcSummaryTitle: 'විශ්ලේෂණ ප්‍රතිඵල සහ උෂ්ණත්ව සැසඳීම',
      meanSpeed: 'මධ්‍යන්‍ය පරීක්ෂණාත්මක ධ්වනි ප්‍රවේගය (v):',
      theoreticalSpeed: 'වත්මන් උෂ්ණත්වයේ සෛද්ධාන්තික ප්‍රවේගය:',
      meanEndCorr: 'මධ්‍යන්‍ය අන්ත ශෝධනය (e):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      unknownForkFreqLabel: 'ගණනය කළ නොදන්නා සංඛ්‍යාතය (f_x):',
      nominalUnknownFork: 'නාමික සංඛ්‍යාතය (426.7 Hz):',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම තුළ ප්‍රවේගය සත්‍යාපනය විය (< 3.0%)',
      verdictFail: 'අනුනාද දිග හෝ තරංග ආයාම වෙනස පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. l එදිරිව 1/f සරල රේඛීය ප්‍රස්ථාරයේ සිරස් අන්තඃඛණ්ඩය සෘණ අගයක් ගන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: වායු කඳ කම්පනය වීමේදී විස්පන්දය නළ කෙළවරින් මදක් පිටතට නෙරා සෑදේ (අන්ත ශෝධනය e). එබැවින් සත්‍ය අනුනාද දිග l + e = v/(4f) ⇒ l = (v/4)(1/f) - e වේ. 1/f = 0 වන විට l = -e වන නිසා සිරස් අන්තඃඛණ්ඩය සෘණ වේ.',
      q1Rubric: 'රූබ්රිකය: විස්පන්දය නළ කෙළවරින් පිටතට නෙරා සෑදීමට ලකුණු 1; l = (v/4)(1/f) - e සූත්‍රය දැක්වීමට ලකුණු 1.',
      q2Title: '2. තනි සුසර දෙබලකට වඩා දෙබල කට්ටලයක් යොදා ගැනීම (පරීක්ෂණ 15) වඩාත් නිවැරදි වන්නේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: සංඛ්‍යාත පරාසයක් ඔස්සේ දත්ත ලක්ෂ්‍ය කිහිපයක් ලබාගෙන රේඛීය ප්‍රතිපායනය මගින් සසම්භාවී දෝෂ අවම වේ. එසේම v සහ e යන දෙකම එකම ප්‍රස්ථාරයෙන් ස්වාධීනව නිර්ණය කරගත හැක.',
      q2Rubric: 'රූබ්රිකය: සසම්භාවී දෝෂ අවම වීමට ලකුණු 1; v සහ e ස්වාධීනව නිර්ණය කිරීමට ලකුණු 1.',
      q3Title: '3. සුසර දෙබලය නළ මුවවිට තැබිය යුත්තේ කෙසේද?',
      q3Model: 'ආදර්ශ පිළිතුර: රබර් මිටියෙන් සුසර දෙබල අග්‍ර මෘදුව කම්පනය කර, නළයේ වීදුරු ගැට්ටේ නොගෑවෙන සේ නළ මුවවිටට තිරස්ව තැබිය යුතුය. එමගින් ප්‍රශස්ත සිරස් අන්වායාම සම්පීඩන නළයට ඇතුළු වේ.',
      q3Rubric: 'රූබ්රිකය: රබර් මිටිය භාවිතයට ලකුණු 1; වීදුරු ගැට්ටේ නොගෑවී තිරස්ව තැබීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  // Exp 14 Calculations
  const updateTrialExp14 = (id: number, field: keyof ResonanceTrialExp14, val: string) => {
    const updated = trialsExp14.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trialsExp14: updated });
  };

  const calculatedTrialsExp14 = trialsExp14.map((tr) => {
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

  const validSpeeds = calculatedTrialsExp14.map((t) => t.speed).filter((s): s is number => s !== null);
  const meanSpeedExp14 =
    validSpeeds.length > 0 ? validSpeeds.reduce((a, b) => a + b, 0) / validSpeeds.length : null;

  const validEndCorrs = calculatedTrialsExp14.map((t) => t.endCorrCm).filter((e): e is number => e !== null);
  const meanEndCorrectionExp14 =
    validEndCorrs.length > 0 ? validEndCorrs.reduce((a, b) => a + b, 0) / validEndCorrs.length : null;

  const tempVal = parseFloat(ambientTempC) || 25.0;
  const theoreticalSpeed = calculateSpeedOfSoundInGas(tempVal);
  const tubeDiamMm = parseFloat(tubeDiameterMm) || 30.0;
  const theoreticalEndCorrectionCm = (0.3 * (tubeDiamMm / 10)); // e ≈ 0.3 * d

  // Exp 15 Calculations (l vs 1/f Linear Regression)
  const updateTrialExp15 = (id: number, field: keyof ResonanceTrialExp15, val: string) => {
    const updated = trialsExp15.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trialsExp15: updated });
  };

  const regressionPoints = trialsExp15.map((t) => ({
    frequencyHz: parseFloat(t.freqHz) || 0,
    lengthM: (parseFloat(t.lCm) || 0) / 100,
  }));

  const regResult = calculateResonanceLinearRegression(regressionPoints);
  const slopeVal = regResult.slope; // m/s / 4
  const derivedSpeedExp15 = regResult.speedOfSoundMs; // v = 4 * slope
  const derivedEndCorrCm = regResult.endCorrectionM * 100; // cm

  // Unknown fork calculation: f_x = v / [2 * (l2 - l1)]
  const unkL1 = parseFloat(unknownForkL1Cm) / 100;
  const unkL2 = parseFloat(unknownForkL2Cm) / 100;
  const effectiveV = derivedSpeedExp15 || meanSpeedExp14 || theoreticalSpeed;
  let calculatedFx: number | null = null;
  if (!isNaN(unkL1) && !isNaN(unkL2) && unkL2 > unkL1 && effectiveV > 0) {
    calculatedFx = effectiveV / (2 * (unkL2 - unkL1));
  }

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    if (subMode === 'exp15') {
      const stuSlope = parseFloat(calculations.slope || '');
      const expectedSlope = slopeVal;
      const isSlopeOk = !isNaN(stuSlope) && Math.abs(stuSlope - expectedSlope) <= 2.0;
      results.slope = isSlopeOk;
      if (!isSlopeOk) {
        feedback.slope = {
          en: `Slope m = Δl / Δ(1/f) ≈ ${expectedSlope.toFixed(2)} m/s (or ${(expectedSlope * 100).toFixed(1)} cm/s).`,
          si: `ප්‍රස්ථාරයේ අනුක්‍රමණය m = Δl / Δ(1/f) ≈ ${expectedSlope.toFixed(2)} m/s විය යුතුය.`,
        };
      }

      const stuSpeed = parseFloat(calculations.speedOfSound || '');
      const expectedSpeed = derivedSpeedExp15;
      const isSpeedOk = !isNaN(stuSpeed) && Math.abs(stuSpeed - expectedSpeed) <= 5.0;
      results.speedOfSound = isSpeedOk;
      if (!isSpeedOk) {
        feedback.speedOfSound = {
          en: `Speed of sound v = 4 · m = 4 · ${expectedSlope.toFixed(2)} ≈ ${expectedSpeed.toFixed(1)} m/s.`,
          si: `ධ්වනි ප්‍රවේගය v = 4 · m = 4 · ${expectedSlope.toFixed(2)} ≈ ${expectedSpeed.toFixed(1)} m/s විය යුතුය.`,
        };
      }

      const stuEndCorr = parseFloat(calculations.endCorrection || '');
      const expectedEndCorr = derivedEndCorrCm;
      const isEndCorrOk = !isNaN(stuEndCorr) && Math.abs(stuEndCorr - expectedEndCorr) <= 0.15;
      results.endCorrection = isEndCorrOk;
      if (!isEndCorrOk) {
        feedback.endCorrection = {
          en: `End correction e = -intercept = -(${regResult.interceptM * 100}) ≈ ${expectedEndCorr.toFixed(2)} cm.`,
          si: `අන්ත ශෝධනය e = -අන්තඃඛණ්ඩය ≈ ${expectedEndCorr.toFixed(2)} cm විය යුතුය.`,
        };
      }
    }

    setCalculationCheck(results, feedback);
  };

  const handleLoadSample = () => {
    if (subMode === 'exp14') {
      loadSampleObservations({
        ambientTempC: '25.0',
        tubeDiameterMm: '30.0',
        trialsExp14: [
          { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
          { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
          { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
          { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
          { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
        ],
      });
    } else if (subMode === 'exp15') {
      loadSampleObservations({
        ambientTempC: '25.0',
        tubeDiameterMm: '30.0',
        trialsExp15: [
          { id: 1, freqHz: '512', lCm: '15.5' },
          { id: 2, freqHz: '480', lCm: '16.6' },
          { id: 3, freqHz: '384', lCm: '21.0' },
          { id: 4, freqHz: '320', lCm: '25.5' },
          { id: 5, freqHz: '256', lCm: '32.1' },
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
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {subMode === 'exp14'
                ? t.theoryTitleExp14
                : subMode === 'exp15'
                ? t.theoryTitleExp15
                : t.theoryTitleFreq}
            </span>
            <p className="whitespace-pre-line">
              {subMode === 'exp14'
                ? t.theoryTextExp14
                : subMode === 'exp15'
                ? t.theoryTextExp15
                : t.theoryTextFreq}
            </p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {subMode === 'exp14'
              ? t.procedureExp14
              : subMode === 'exp15'
              ? t.procedureExp15
              : t.procedureFreq}
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

      {/* SubMode Switcher Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'exp15' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('exp15')}
            >
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              {t.modeExp15}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'exp14' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('exp14')}
            >
              <Waves className="w-3.5 h-3.5 mr-1" />
              {t.modeExp14}
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
          {/* Standing Wave Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 320 200" className="w-full max-w-md h-auto">
              {/* 1st Resonance Tube (Left) */}
              <g transform="translate(40, 20)">
                <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">
                  1st Resonance (λ/4)
                </text>
                <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                <rect x="20" y="25" width="30" height="130" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                <rect x="21" y="80" width="28" height="74" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                <line x1="55" y1="20" x2="55" y2="25" stroke="#D97706" strokeWidth="1.5" />
                <text x="60" y="24" fontSize="8" fill="#D97706" fontWeight="bold">e</text>
                <line x1="55" y1="25" x2="55" y2="80" stroke="#0F766E" strokeWidth="1.5" />
                <text x="60" y="55" fontSize="9" fill="#0F766E" fontWeight="bold">l₁</text>
                <path d="M 35 80 Q 22 52 35 20 M 35 80 Q 48 52 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
              </g>

              {/* 2nd Resonance Tube (Right) */}
              <g transform="translate(180, 20)">
                <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">
                  2nd Resonance (3λ/4)
                </text>
                <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                <rect x="20" y="25" width="30" height="130" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                <rect x="21" y="135" width="28" height="19" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                <line x1="55" y1="25" x2="55" y2="135" stroke="#0F766E" strokeWidth="1.5" />
                <text x="60" y="85" fontSize="9" fill="#0F766E" fontWeight="bold">l₂</text>
                <path d="M 35 135 Q 22 118 35 100 Q 48 82 35 60 Q 22 40 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
                <path d="M 35 135 Q 48 118 35 100 Q 22 82 35 60 Q 48 40 35 20" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="3 2" />
              </g>
            </svg>
          </div>

          {/* SubMode 1: Exp 15 - Set of Tuning Forks & Linear Graph */}
          {subMode === 'exp15' && (
            <div className="space-y-6">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.forkCol}</th>
                      <th className="p-3">{t.recipCol}</th>
                      <th className="p-3">{t.lCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {trialsExp15.map((tr) => {
                      const f = parseFloat(tr.freqHz);
                      const recipMs = f > 0 ? (1000 / f).toFixed(2) : '—';
                      return (
                        <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                          <td className="p-3 font-bold text-center">{tr.id}</td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={tr.freqHz}
                              onChange={(e) => updateTrialExp15(tr.id, 'freqHz', e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                            />
                          </td>
                          <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                            {recipMs}
                          </td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={tr.lCm}
                              onChange={(e) => updateTrialExp15(tr.id, 'lCm', e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Dynamic SVG Linear Regression Plot: l vs 1/f */}
              <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
                <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.graphTitle}
                </span>

                <div className="flex justify-center">
                  <svg viewBox="0 0 500 280" className="w-full max-w-lg h-auto bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-2">
                    {/* Grid lines */}
                    <line x1="70" y1="40" x2="470" y2="40" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="70" y1="90" x2="470" y2="90" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="70" y1="140" x2="470" y2="140" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="70" y1="190" x2="470" y2="190" stroke="#E2E8F0" strokeDasharray="3 3" />

                    {/* Axes: Origin (x=0) at pixel 70, y=0 at pixel 210 */}
                    <line x1="70" y1="20" x2="70" y2="250" stroke="#475569" strokeWidth="1.5" />
                    <line x1="50" y1="210" x2="470" y2="210" stroke="#475569" strokeWidth="1.5" />

                    {/* Labels */}
                    <text x="470" y="225" textAnchor="end" fontSize="10" fill="#64748B">1/f (ms)</text>
                    <text x="65" y="30" textAnchor="end" fontSize="10" fill="#64748B">l (cm)</text>

                    {/* Y-axis Ticks: -2, 0, 10, 20, 30 cm */}
                    {/* Scale: yPixel = 210 - (lCm * 5) */}
                    <text x="62" y="223" textAnchor="end" fontSize="8" fill="#94A3B8">-2</text>
                    <line x1="67" y1="220" x2="73" y2="220" stroke="#475569" />

                    <text x="62" y="213" textAnchor="end" fontSize="8" fill="#94A3B8">0</text>
                    <line x1="67" y1="210" x2="73" y2="210" stroke="#475569" />

                    <text x="62" y="163" textAnchor="end" fontSize="8" fill="#94A3B8">10</text>
                    <line x1="67" y1="160" x2="73" y2="160" stroke="#475569" />

                    <text x="62" y="113" textAnchor="end" fontSize="8" fill="#94A3B8">20</text>
                    <line x1="67" y1="110" x2="73" y2="110" stroke="#475569" />

                    <text x="62" y="63" textAnchor="end" fontSize="8" fill="#94A3B8">30</text>
                    <line x1="67" y1="60" x2="73" y2="60" stroke="#475569" />

                    {/* X-axis Ticks: 1, 2, 3, 4 ms */}
                    {/* Scale: xPixel = 70 + (recipMs * 90) */}
                    {[1, 2, 3, 4].map((ms) => (
                      <g key={ms}>
                        <line x1={70 + ms * 90} y1="207" x2={70 + ms * 90} y2="213" stroke="#475569" />
                        <text x={70 + ms * 90} y="224" textAnchor="middle" fontSize="8" fill="#94A3B8">{ms}</text>
                      </g>
                    ))}

                    {/* Linear Regression Line: from 1/f = 0 ms to 1/f = 4.2 ms */}
                    {regResult.rSquared > 0 && (
                      <line
                        x1={70}
                        y1={210 - (regResult.interceptM * 100 * 5)}
                        x2={70 + 4.2 * 90}
                        y2={210 - ((regResult.slope * 4.2 / 10 + regResult.interceptM * 100) * 5)}
                        stroke="#0F766E"
                        strokeWidth="2"
                      />
                    )}

                    {/* Negative vertical intercept marker (c = -e) */}
                    {regResult.rSquared > 0 && (
                      <g>
                        <circle cx={70} cy={210 - (regResult.interceptM * 100 * 5)} r="3" fill="#D97706" />
                        <text x="80" y={210 - (regResult.interceptM * 100 * 5) + 3} fontSize="9" fill="#D97706" fontWeight="bold">
                          Intercept c = -e ({derivedEndCorrCm.toFixed(1)} cm)
                        </text>
                      </g>
                    )}

                    {/* Plotted Data Points */}
                    {trialsExp15.map((tr) => {
                      const f = parseFloat(tr.freqHz);
                      const l = parseFloat(tr.lCm);
                      if (f > 0 && !isNaN(l)) {
                        const px = 70 + (1000 / f) * 90;
                        const py = 210 - (l * 5);
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

              {/* Graphical Results Summary Card */}
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
                  {/* Slope m */}
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.gradientLabel}</span>
                    {mode === 'guided' || showSolution ? (
                      <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {slopeVal > 0 ? `${slopeVal.toFixed(2)} m/s` : '—'}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={calculations.slope || ''}
                        onChange={(e) => updateCalculation('slope', e.target.value)}
                        placeholder="m (m/s)"
                        className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                      />
                    )}
                  </div>

                  {/* Derived Speed v = 4m */}
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.derivedSpeedLabel}</span>
                    {mode === 'guided' || showSolution ? (
                      <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {derivedSpeedExp15 > 0 ? `${derivedSpeedExp15.toFixed(1)} m/s` : '—'}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={calculations.speedOfSound || ''}
                        onChange={(e) => updateCalculation('speedOfSound', e.target.value)}
                        placeholder="v (m/s)"
                        className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                      />
                    )}
                  </div>

                  {/* End Correction e = -c */}
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.derivedEndCorrLabel}</span>
                    {mode === 'guided' || showSolution ? (
                      <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {derivedEndCorrCm > 0 ? `${derivedEndCorrCm.toFixed(2)} cm` : '—'}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={calculations.endCorrection || ''}
                        onChange={(e) => updateCalculation('endCorrection', e.target.value)}
                        placeholder="e (cm)"
                        className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                      />
                    )}
                  </div>

                  {/* Theoretical End Correction e ≈ 0.3 d */}
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.theoreticalEndCorrLabel}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {theoreticalEndCorrectionCm.toFixed(2)} cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubMode 2: Exp 14 - Two Resonances Table */}
          {subMode === 'exp14' && (
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
                    {calculatedTrialsExp14.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.freqHz}
                            onChange={(e) => updateTrialExp14(tr.id, 'freqHz', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.l1Cm}
                            onChange={(e) => updateTrialExp14(tr.id, 'l1Cm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.l2Cm}
                            onChange={(e) => updateTrialExp14(tr.id, 'l2Cm', e.target.value)}
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
                      {meanSpeedExp14 !== null ? `${meanSpeedExp14.toFixed(1)} m/s` : '—'}
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
                      {meanEndCorrectionExp14 !== null ? `${meanEndCorrectionExp14.toFixed(2)} cm` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.theoreticalEndCorrLabel}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {theoreticalEndCorrectionCm.toFixed(2)} cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubMode 3: Unknown Tuning Fork Frequency */}
          {subMode === 'unknown_frequency' && (
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
                      Unknown fork frequency determined as {calculatedFx.toFixed(1)} Hz from column resonance separation ({((unkL2 - unkL1) * 100).toFixed(1)} cm).
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

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

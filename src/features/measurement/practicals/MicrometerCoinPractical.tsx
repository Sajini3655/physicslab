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
import {
  applyZeroCorrection,
  calculateCoinVolumeAndUncertainty,
  calculateWireCrossSection,
  calculateSphereVolume,
  calculatePaperThickness,
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

export type MicrometerSpecimen = 'coin' | 'wire' | 'ball' | 'slide' | 'paper';

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
      specimenType: 'coin',
      diaTrials: ['', '', ''],
      thickTrials: ['', '', ''],
      wireDiaTrials: ['', '', ''],
      ballDiaTrials: ['', '', ''],
      slideThickTrials: ['', '', ''],
      paperStackTrials: ['', '', ''],
    },
    defaultCalculations: {
      meanDia: '',
      corrDia: '',
      meanThick: '',
      corrThick: '',
      volume: '',
      percentageUncertainty: '',
      meanWireDia: '',
      corrWireDia: '',
      wireArea: '',
      meanBallDia: '',
      corrBallDia: '',
      ballVolume: '',
      meanSlideThick: '',
      corrSlideThick: '',
      meanPaperStack: '',
      corrPaperStack: '',
      paperSingleThick: '',
    },
  });

  const specimenType: MicrometerSpecimen = (observations.specimenType as MicrometerSpecimen) || 'coin';

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

  const wireDiaTrials: [string, string, string] = (
    Array.isArray(observations.wireDiaTrials) && observations.wireDiaTrials.length === 3
      ? observations.wireDiaTrials
      : ['', '', '']
  ) as [string, string, string];

  const ballDiaTrials: [string, string, string] = (
    Array.isArray(observations.ballDiaTrials) && observations.ballDiaTrials.length === 3
      ? observations.ballDiaTrials
      : ['', '', '']
  ) as [string, string, string];

  const slideThickTrials: [string, string, string] = (
    Array.isArray(observations.slideThickTrials) && observations.slideThickTrials.length === 3
      ? observations.slideThickTrials
      : ['', '', '']
  ) as [string, string, string];

  const paperStackTrials: [string, string, string] = (
    Array.isArray(observations.paperStackTrials) && observations.paperStackTrials.length === 3
      ? observations.paperStackTrials
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
      title: 'Practical 2: Measurement of Small Lengths Using a Micrometer Screw Gauge',
      aim: 'Aim: To measure the dimensions of small objects (coin, thin wire, small sphere, glass slide, paper stack) accurately using a micrometer screw gauge and determine derived physical quantities.',
      apparatus: 'Apparatus: Micrometer Screw Gauge (0–25 mm range, Least Count 0.01 mm), Standard Coin, Resistance Wire, Steel Ball Bearing, Microscope Glass Slide, Stack of 100 Uniform Paper Sheets.',
      theoryTitle: 'Theory & Experimental Precautions',
      theoryText: 'The ratchet clutch must always be used when tightening the spindle onto any specimen to prevent deformation and avoid false pitch advancement. For circular objects (coin, wire, sphere), measurements must be taken in at least three different orientations or positions to detect and average out non-circularity or taper. For thin sheets of paper, a single sheet reading has high relative uncertainty; thus 100 sheets are measured together and divided by 100. Zero error must be observed with clean anvils before testing and applied algebraically: Corrected = Observed - Zero Error.',
      procedure: 'Procedure: 1. Determine least count and check zero error using the ratchet. 2. Select specimen type. 3. Take 3 independent readings across orthogonal axes or rim positions. 4. Correct for signed zero error. 5. Compute mean dimensions and derived properties (volume, cross-section area, single sheet thickness).',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      specimenSelector: 'Specimen / Investigation Target:',
      specCoin: 'Coin (Diameter & Thickness)',
      specWire: 'Thin Wire (Cross-Section Area)',
      specBall: 'Small Bearing Sphere (Volume)',
      specSlide: 'Microscope Glass Slide (Thickness)',
      specPaper: 'Paper Sheet (100-Sheet Stack)',
      transferReading: 'Transfer Gauge Reading to Table:',
      logDia: 'Log to Diameter (D)',
      logThick: 'Log to Thickness (t)',
      logWire: 'Log Wire Diameter (d)',
      logBall: 'Log Sphere Diameter (D)',
      logSlide: 'Log Slide Thickness (t)',
      logPaper: 'Log Stack Thickness (t₁₀₀)',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      trial1: 'Reading 1 (mm)',
      trial2: 'Reading 2 (mm)',
      trial3: 'Reading 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      coinDia: 'Coin Diameter (D)',
      coinThick: 'Coin Thickness (t)',
      wireDia: 'Wire Diameter (d)',
      ballDia: 'Sphere Diameter (D)',
      slideThick: 'Slide Thickness (t)',
      paperStack: '100-Sheet Stack (t₁₀₀)',
      zeroErrorLabel: 'Signed Zero Error (mm):',
      calcTitle: 'Derived Physical Quantities & Uncertainty',
      volumeLabel: 'Volume (V):',
      wireAreaLabel: 'Cross-Section Area (A = π/4·d²):',
      ballVolLabel: 'Sphere Volume (V = 4/3·π·R³):',
      slideThickLabel: 'Corrected Thickness (t):',
      paperSingleLabel: 'Single Sheet Thickness (t₁ = t₁₀₀ / 100):',
      fractionalUncertainty: 'Fractional Uncertainty (ΔV/V):',
      percentageUncertainty: 'Percentage Uncertainty (%):',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      rangeWarning: 'Note: Readings > 25.0 mm exceed the 0–25 mm micrometer gauge range; in a laboratory, use a 25–50 mm micrometer or Vernier caliper.',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why must the ratchet head always be used to tighten the spindle onto the specimen?',
      q1Model: 'Model Answer: The ratchet mechanism slips when a predetermined uniform tightening torque is reached. This prevents specimen compression/deformation and avoids stripping or forcing the micrometer screw pitch.',
      q1Rubric: 'Rubric: Award 1 mark for uniform tightening / avoiding deformation; 1 mark for protecting instrument threads.',
      q2Title: '2. Why is wire or coin diameter measured along multiple different positions and orientations?',
      q2Model: 'Model Answer: Drawn wires and minted coins often exhibit slight elliptical cross-sections, nonuniform wear, or thickness taper along their length. Taking measurements along multiple orientations and positions eliminates non-circularity bias.',
      q2Rubric: 'Rubric: Award 1 mark for non-uniformity/non-circularity; 1 mark for taking the mean to eliminate bias.',
      q3Title: '3. Why is the thickness of paper measured as a stack of 100 sheets rather than a single sheet?',
      q3Model: 'Model Answer: The thickness of a single sheet (~0.1 mm) is comparable to the micrometer least count (0.01 mm), resulting in ~10% fractional uncertainty. Measuring 100 sheets (~10 mm) reduces the fractional measurement uncertainty by a factor of 100.',
      q3Rubric: 'Rubric: Award 1 mark for high percentage uncertainty on a single sheet; 1 mark for 100-fold reduction in fractional uncertainty.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය භාවිතයෙන් කුඩා දිගවල් මැනීම',
      aim: 'අරමුණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය භාවිතයෙන් කුඩා වස්තුවල (කාසිය, සිහින් කම්බිය, කුඩා ගෝලය, වීදුරු තහඩුව, කඩදාසි තට්ටුව) මාන නිරවද්‍යව මැන ව්‍යුත්පන්න භෞතික රාශීන් නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (0–25 mm පරාසය, කුඩාම මිනුම 0.01 mm), සම්මත කාසියක්, ප්‍රතිරෝධක කම්බියක්, කුඩා වානේ බෝලයක්/ගෝලයක්, අන්වීක්ෂ වීදුරු තහඩුවක්, ඒකාකාර කඩදාසි 100 ක තට්ටුවක්.',
      theoryTitle: 'මූලධර්මය සහ පූර්වෝපාය',
      theoryText: 'වස්තුව සිරකිරීමේදී විරූපණය වැළැක්වීමට සහ නිරවද්‍ය ඒකාකාර තෙරපුමක් පවත්වා ගැනීමට සෑම විටම රැචට් හිස භාවිත කළ යුතුය. කම්බියක හෝ ගෝලයක විෂ්කම්භය මැනීමේදී අණ්ඩාකාර විකෘතිතා මඟහරවා ගැනීමට වෙනස් ස්ථාන හා දිශා ඔස්සේ පාඨාංක 3ක් ගෙන මධ්‍යන්‍යය ගනු ලැබේ. එක් කඩදාසියක ඝනකම මැනීමේදී ලැබෙන අධික ප්‍රතිශත දෝෂය අවම කිරීමට කඩදාසි 100ක තට්ටුවක ඝනකම මැන එය 100න් බෙදනු ලැබේ. ශූන්‍ය දෝෂය කලින් හඳුනාගෙන ශෝධිත අගය = නිරීක්ෂිත අගය - ශූන්‍ය දෝෂය ලෙස ගණනය කෙරේ.',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම සහ ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. පරීක්ෂා කරන ද්‍රව්‍ය වර්ගය තෝරන්න. 3. අදාළ දිශා ඔස්සේ පාඨාංක 3ක් ලබා ගැනීම. 4. ශූන්‍ය දෝෂ ශෝධනය යෙදීම. 5. මධ්‍යන්‍ය මාන සහ ව්‍යුත්පන්න රාශි (පරිමාව, හරස්කඩ වර්ගඵලය, කඩදාසියක ඝනකම) ගණනය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      specimenSelector: 'පරීක්ෂා කරන ද්‍රව්‍යය:',
      specCoin: 'කාසිය (විෂ්කම්භය සහ ඝනකම)',
      specWire: 'සිහින් කම්බිය (හරස්කඩ වර්ගඵලය)',
      specBall: 'කුඩා ගෝලය/බෝලය (පරිමාව)',
      specSlide: 'වීදුරු තහඩුව (ඝනකම)',
      specPaper: 'කඩදාසි (100ක තට්ටුව)',
      transferReading: 'ආමාන පාඨාංකය වගුවට ඇතුළත් කරන්න:',
      logDia: 'විෂ්කම්භය (D) වෙත',
      logThick: 'ඝනකම (t) වෙත',
      logWire: 'කම්බියේ විෂ්කම්භය (d) වෙත',
      logBall: 'ගෝලයේ විෂ්කම්භය (D) වෙත',
      logSlide: 'තහඩුවේ ඝනකම (t) වෙත',
      logPaper: 'කඩදාසි 100 ඝනකම (t₁₀₀) වෙත',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      trial1: 'පාඨාංකය 1 (mm)',
      trial2: 'පාඨාංකය 2 (mm)',
      trial3: 'පාඨාංකය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      coinDia: 'කාසියේ විෂ්කම්භය (D)',
      coinThick: 'කාසියේ ඝනකම (t)',
      wireDia: 'කම්බියේ විෂ්කම්භය (d)',
      ballDia: 'ගෝලයේ විෂ්කම්භය (D)',
      slideThick: 'වීදුරු තහඩුවේ ඝනකම (t)',
      paperStack: 'කඩදාසි 100ක ඝනකම (t₁₀₀)',
      zeroErrorLabel: 'ලකුණ සහිත ශූන්‍ය දෝෂය (mm):',
      calcTitle: 'ව්‍යුත්පන්න භෞතික රාශි සහ අවිනිශ්චිතතාව',
      volumeLabel: 'පරිමාව (V):',
      wireAreaLabel: 'හරස්කඩ වර්ගඵලය (A = π/4·d²):',
      ballVolLabel: 'ගෝලයේ පරිමාව (V = 4/3·π·R³):',
      slideThickLabel: 'ශෝධිත ඝනකම (t):',
      paperSingleLabel: 'එක් කඩදාසියක ඝනකම (t₁ = t₁₀₀ / 100):',
      fractionalUncertainty: 'භාගික අවිනිශ්චිතතාව (ΔV/V):',
      percentageUncertainty: 'ප්‍රතිශත අවිනිශ්චිතතාව (%):',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      rangeWarning: 'සටහන: 25.0 mm ට වැඩි අගයන් 0–25 mm ආමාන පරාසය ඉක්මවයි; රසායනාගාරයේදී 25–50 mm ආමානයක් හෝ වර්නියර් කැලිපරය යොදා ගන්න.',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. වස්තුව සිරකිරීමේදී සෑම විටම රැචට් හිසම භාවිත කළ යුත්තේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: නියමිත පීඩනයක් ළඟාවූ විට රැචටය ලිස්සා යාමෙන් වස්තුව විරූපණය වීම වැළකෙන අතර ආමානයේ ඉස්කුරුප්පු පොටවලට හානිවීම වැළකේ.',
      q1Rubric: 'රූබ්රිකය: ඒකාකාර තෙරපුම/විරූපණය වැළැක්වීමට ලකුණු 1; ඉස්කුරුප්පු පොට ආරක්ෂාවට ලකුණු 1.',
      q2Title: '2. කම්බියක හෝ කාසියක විෂ්කම්භය වෙනස් ස්ථාන හා දිශා කිහිපයකින් මනින්නේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: කම්බි සහ කාසිවල පවතින අණ්ඩාකාර විකෘතිතා හෝ ඒකාකාර නොවන බව හඳුනාගෙන මධ්‍යන්‍යය ගැනීමෙන් දෝෂය අවම කිරීමට.',
      q2Rubric: 'රූබ්රිකය: අණ්ඩාකාර/අසමානතා හඳුනාගැනීමට ලකුණු 1; මධ්‍යන්‍යයෙන් දෝෂය මඟහැරීමට ලකුණු 1.',
      q3Title: '3. කඩදාසියක ඝනකම තනිව නොමැන කඩදාසි 100ක තට්ටුවක් ලෙස මනින්නේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: එක් කඩදාසියක ඝනකම (~0.1 mm) ආමානයේ කුඩාම මිනුමට (0.01 mm) ආසන්න බැවින් ප්‍රතිශත දෝෂය 10%ක් තරම් ඉහළ වේ. කඩදාසි 100ක තට්ටුවක් මැනීමෙන් භාගික අවිනිශ්චිතතාව 100 ගුණයකින් අඩු වේ.',
      q3Rubric: 'රූබ්රිකය: එක් කඩදාසියක ප්‍රතිශත දෝෂය ඉහළ වීම දැක්වීමට ලකුණු 1; 100 ගුණයකින් දෝෂය අඩුවීම පෙන්වීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleSelectSpecimen = (type: MicrometerSpecimen) => {
    updateObservations({ specimenType: type });
  };

  const handleLoadSample = () => {
    if (specimenType === 'coin') {
      loadSampleObservations(
        {
          specimenType: 'coin',
          diaTrials: ['24.32', '24.30', '24.34'],
          thickTrials: ['1.86', '1.84', '1.85'],
        },
        '+0.02'
      );
    } else if (specimenType === 'wire') {
      loadSampleObservations(
        {
          specimenType: 'wire',
          wireDiaTrials: ['0.48', '0.47', '0.49'],
        },
        '+0.01'
      );
    } else if (specimenType === 'ball') {
      loadSampleObservations(
        {
          specimenType: 'ball',
          ballDiaTrials: ['6.34', '6.35', '6.33'],
        },
        '+0.01'
      );
    } else if (specimenType === 'slide') {
      loadSampleObservations(
        {
          specimenType: 'slide',
          slideThickTrials: ['1.18', '1.17', '1.19'],
        },
        '+0.01'
      );
    } else if (specimenType === 'paper') {
      loadSampleObservations(
        {
          specimenType: 'paper',
          paperStackTrials: ['9.80', '9.78', '9.82'],
        },
        '+0.02'
      );
    }
  };

  const handleClear = () => {
    reset();
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(3));
  };

  const ze = parseFloat(zeroError) || 0.0;

  // Coin calculations
  const expectedMeanDia = parseMean(diaTrials);
  const expectedMeanThick = parseMean(thickTrials);
  const expectedCorrDia = expectedMeanDia !== null ? applyZeroCorrection(expectedMeanDia, ze) : null;
  const expectedCorrThick = expectedMeanThick !== null ? applyZeroCorrection(expectedMeanThick, ze) : null;
  const expectedAnalysis =
    expectedCorrDia !== null && expectedCorrThick !== null
      ? calculateCoinVolumeAndUncertainty(expectedCorrDia, expectedCorrThick, leastCount)
      : null;

  // Wire calculations
  const expectedMeanWireDia = parseMean(wireDiaTrials);
  const expectedCorrWireDia = expectedMeanWireDia !== null ? applyZeroCorrection(expectedMeanWireDia, ze) : null;
  const expectedWireArea = expectedCorrWireDia !== null ? calculateWireCrossSection(expectedCorrWireDia) : null;

  // Ball calculations
  const expectedMeanBallDia = parseMean(ballDiaTrials);
  const expectedCorrBallDia = expectedMeanBallDia !== null ? applyZeroCorrection(expectedMeanBallDia, ze) : null;
  const expectedBallVol = expectedCorrBallDia !== null ? calculateSphereVolume(expectedCorrBallDia) : null;

  // Slide calculations
  const expectedMeanSlideThick = parseMean(slideThickTrials);
  const expectedCorrSlideThick = expectedMeanSlideThick !== null ? applyZeroCorrection(expectedMeanSlideThick, ze) : null;

  // Paper calculations
  const expectedMeanPaperStack = parseMean(paperStackTrials);
  const expectedCorrPaperStack = expectedMeanPaperStack !== null ? applyZeroCorrection(expectedMeanPaperStack, ze) : null;
  const expectedPaperSingleThick = expectedCorrPaperStack !== null ? calculatePaperThickness(expectedCorrPaperStack, 100) : null;

  // Append reading to first empty trial slot of a target array
  const handleLogReading = (
    targetKey:
      | 'diaTrials'
      | 'thickTrials'
      | 'wireDiaTrials'
      | 'ballDiaTrials'
      | 'slideThickTrials'
      | 'paperStackTrials'
  ) => {
    const raw = (observations[targetKey] as string[]) || ['', '', ''];
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

    if (specimenType === 'coin') {
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
    } else if (specimenType === 'wire') {
      const stuArea = parseFloat(calculations.wireArea || '');
      if (expectedWireArea !== null) {
        const isAreaCorrect = !isNaN(stuArea) && Math.abs(stuArea - expectedWireArea) <= 0.01;
        results.wireArea = isAreaCorrect;
        if (!isAreaCorrect) {
          feedback.wireArea = {
            en: `Wire cross-section A = (π/4)·d² ≈ ${expectedWireArea} mm². Check corrected diameter (${expectedCorrWireDia} mm).`,
            si: `කම්බියේ හරස්කඩ වර්ගඵලය A = (π/4)·d² ≈ ${expectedWireArea} mm² විය යුතුය. ශෝධිත විෂ්කම්භය (${expectedCorrWireDia} mm) පරීක්ෂා කරන්න.`,
          };
        }
      }
    } else if (specimenType === 'ball') {
      const stuVol = parseFloat(calculations.ballVolume || '');
      if (expectedBallVol !== null) {
        const isVolCorrect = !isNaN(stuVol) && Math.abs(stuVol - expectedBallVol) <= 0.5;
        results.ballVolume = isVolCorrect;
        if (!isVolCorrect) {
          feedback.ballVolume = {
            en: `Sphere volume V = (4/3)·π·R³ ≈ ${expectedBallVol} mm³. Check radius R = ${expectedCorrBallDia ? (expectedCorrBallDia / 2).toFixed(2) : ''} mm.`,
            si: `ගෝලයේ පරිමාව V = (4/3)·π·R³ ≈ ${expectedBallVol} mm³ විය යුතුය. අරය R = ${expectedCorrBallDia ? (expectedCorrBallDia / 2).toFixed(2) : ''} mm පරීක්ෂා කරන්න.`,
          };
        }
      }
    } else if (specimenType === 'paper') {
      const stuSingle = parseFloat(calculations.paperSingleThick || '');
      if (expectedPaperSingleThick !== null) {
        const isSingleCorrect = !isNaN(stuSingle) && Math.abs(stuSingle - expectedPaperSingleThick) <= 0.005;
        results.paperSingleThick = isSingleCorrect;
        if (!isSingleCorrect) {
          feedback.paperSingleThick = {
            en: `Single sheet thickness = Stack (${expectedCorrPaperStack} mm) / 100 = ${expectedPaperSingleThick} mm.`,
            si: `එක් කඩදාසියක ඝනකම = තට්ටුව (${expectedCorrPaperStack} mm) / 100 = ${expectedPaperSingleThick} mm විය යුතුය.`,
          };
        }
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

          {/* Specimen Selector Tabs */}
          <div className="pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.specimenSelector}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'coin', label: t.specCoin },
                { id: 'wire', label: t.specWire },
                { id: 'ball', label: t.specBall },
                { id: 'slide', label: t.specSlide },
                { id: 'paper', label: t.specPaper },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSpecimen(s.id as MicrometerSpecimen)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    specimenType === s.id
                      ? 'bg-[#0F766E] text-white shadow-xs'
                      : 'bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8] hover:text-[#14243A] dark:hover:text-[#F8FAFC] border border-[#DFE8EF] dark:border-[#1E334D]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

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
            {specimenType === 'coin' && (
              <>
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
              </>
            )}
            {specimenType === 'wire' && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => handleLogReading('wireDiaTrials')}
              >
                {t.logWire}
              </Button>
            )}
            {specimenType === 'ball' && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => handleLogReading('ballDiaTrials')}
              >
                {t.logBall}
              </Button>
            )}
            {specimenType === 'slide' && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => handleLogReading('slideThickTrials')}
              >
                {t.logSlide}
              </Button>
            )}
            {specimenType === 'paper' && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => handleLogReading('paperStackTrials')}
              >
                {t.logPaper}
              </Button>
            )}
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
                  <th className="p-3 font-semibold">{t.trial1}</th>
                  <th className="p-3 font-semibold">{t.trial2}</th>
                  <th className="p-3 font-semibold">{t.trial3}</th>
                  <th className="p-3 font-semibold">{t.meanObs}</th>
                  <th className="p-3 font-semibold text-[#0F766E]">{t.correctedVal}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D] font-mono">
                {specimenType === 'coin' && (
                  <>
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
                      <td className="p-3 font-bold">{expectedMeanDia !== null ? `${expectedMeanDia} mm` : '—'}</td>
                      <td className="p-3 font-bold text-[#0F766E]">{expectedCorrDia !== null ? `${expectedCorrDia} mm` : '—'}</td>
                    </tr>
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
                  </>
                )}

                {specimenType === 'wire' && (
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.wireDia}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={wireDiaTrials[0]}
                        onChange={(e) => updateObservations({ wireDiaTrials: [e.target.value, wireDiaTrials[1], wireDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={wireDiaTrials[1]}
                        onChange={(e) => updateObservations({ wireDiaTrials: [wireDiaTrials[0], e.target.value, wireDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={wireDiaTrials[2]}
                        onChange={(e) => updateObservations({ wireDiaTrials: [wireDiaTrials[0], wireDiaTrials[1], e.target.value] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{expectedMeanWireDia !== null ? `${expectedMeanWireDia} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">{expectedCorrWireDia !== null ? `${expectedCorrWireDia} mm` : '—'}</td>
                  </tr>
                )}

                {specimenType === 'ball' && (
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.ballDia}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={ballDiaTrials[0]}
                        onChange={(e) => updateObservations({ ballDiaTrials: [e.target.value, ballDiaTrials[1], ballDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={ballDiaTrials[1]}
                        onChange={(e) => updateObservations({ ballDiaTrials: [ballDiaTrials[0], e.target.value, ballDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={ballDiaTrials[2]}
                        onChange={(e) => updateObservations({ ballDiaTrials: [ballDiaTrials[0], ballDiaTrials[1], e.target.value] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{expectedMeanBallDia !== null ? `${expectedMeanBallDia} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">{expectedCorrBallDia !== null ? `${expectedCorrBallDia} mm` : '—'}</td>
                  </tr>
                )}

                {specimenType === 'slide' && (
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.slideThick}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={slideThickTrials[0]}
                        onChange={(e) => updateObservations({ slideThickTrials: [e.target.value, slideThickTrials[1], slideThickTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={slideThickTrials[1]}
                        onChange={(e) => updateObservations({ slideThickTrials: [slideThickTrials[0], e.target.value, slideThickTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={slideThickTrials[2]}
                        onChange={(e) => updateObservations({ slideThickTrials: [slideThickTrials[0], slideThickTrials[1], e.target.value] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{expectedMeanSlideThick !== null ? `${expectedMeanSlideThick} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">{expectedCorrSlideThick !== null ? `${expectedCorrSlideThick} mm` : '—'}</td>
                  </tr>
                )}

                {specimenType === 'paper' && (
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.paperStack}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={paperStackTrials[0]}
                        onChange={(e) => updateObservations({ paperStackTrials: [e.target.value, paperStackTrials[1], paperStackTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={paperStackTrials[1]}
                        onChange={(e) => updateObservations({ paperStackTrials: [paperStackTrials[0], e.target.value, paperStackTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={paperStackTrials[2]}
                        onChange={(e) => updateObservations({ paperStackTrials: [paperStackTrials[0], paperStackTrials[1], e.target.value] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{expectedMeanPaperStack !== null ? `${expectedMeanPaperStack} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">{expectedCorrPaperStack !== null ? `${expectedCorrPaperStack} mm` : '—'}</td>
                  </tr>
                )}
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

            {specimenType === 'coin' && (
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
            )}

            {specimenType === 'wire' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.wireDia} (d)</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrWireDia !== null ? `${expectedCorrWireDia} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.wireAreaLabel}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedWireArea !== null ? `${expectedWireArea} mm²` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.wireArea || ''}
                      onChange={(e) => updateCalculation('wireArea', e.target.value)}
                      placeholder="A (mm²)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            )}

            {specimenType === 'ball' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.ballDia} (D)</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrBallDia !== null ? `${expectedCorrBallDia} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.ballVolLabel}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedBallVol !== null ? `${expectedBallVol} mm³` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.ballVolume || ''}
                      onChange={(e) => updateCalculation('ballVolume', e.target.value)}
                      placeholder="V (mm³)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            )}

            {specimenType === 'slide' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.meanObs}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedMeanSlideThick !== null ? `${expectedMeanSlideThick} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.slideThickLabel}</span>
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {expectedCorrSlideThick !== null ? `${expectedCorrSlideThick} mm` : '—'}
                  </span>
                </div>
              </div>
            )}

            {specimenType === 'paper' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.paperStack} (t₁₀₀)</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrPaperStack !== null ? `${expectedCorrPaperStack} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.paperSingleLabel}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedPaperSingleThick !== null ? `${expectedPaperSingleThick} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.paperSingleThick || ''}
                      onChange={(e) => updateCalculation('paperSingleThick', e.target.value)}
                      placeholder="t₁ (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            )}

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

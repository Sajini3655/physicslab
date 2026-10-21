'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Spherometer } from '../instruments/Spherometer';
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
import { calculateSpherometerCurvature } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

export type SpherometerInvestigation = 'curvature' | 'thickness';

interface SpherometerCurvaturePracticalProps {
  locale?: Locale;
}

export const SpherometerCurvaturePractical: React.FC<SpherometerCurvaturePracticalProps> = ({
  locale = 'en',
}) => {
  const {
    mode,
    setMode,
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
    experimentId: 'exp-3-spherometer',
    defaultMode: 'guided',
    defaultObservations: {
      investigationType: 'curvature',
      aTrials: ['', '', ''],
      h0: '',
      h1Trials: ['', '', ''],
    },
    defaultCalculations: {
      meanA: '',
      meanH1: '',
      elevationH: '',
      radiusOfCurvature: '',
      slideThickness: '',
    },
  });

  const investigationType: SpherometerInvestigation =
    (observations.investigationType as SpherometerInvestigation) || 'curvature';

  const aTrials: [string, string, string] = (
    Array.isArray(observations.aTrials) && observations.aTrials.length === 3
      ? observations.aTrials
      : ['', '', '']
  ) as [string, string, string];
  const h0: string = observations.h0 || '';
  const h1Trials: [string, string, string] = (
    Array.isArray(observations.h1Trials) && observations.h1Trials.length === 3
      ? observations.h1Trials
      : ['', '', '']
  ) as [string, string, string];

  const [liveReading, setLiveReading] = useState<{ hMm: number; rMm: number | null }>({
    hMm: 1.34,
    rMm: 200.0,
  });
  const [showSolution, setShowSolution] = useState(false);

  const t = {
    en: {
      title: 'Practical 3: Radius of Curvature & Slide Thickness Using a Spherometer',
      aim: 'Aim: To determine the radius of curvature of a spherical surface (lens/mirror) and the thickness of a flat glass slide using a spherometer.',
      apparatus: 'Apparatus: Spherometer (Least Count 0.01 mm), Plane glass plate, Convex spherical surface, Flat microscope glass slide, Plain paper, Millimeter ruler.',
      theoryTitle: 'Theory & Geometrical Derivation',
      theoryText: 'The three fixed outer legs of the spherometer form an equilateral triangle of mean side a. By placing the instrument on a flat plane glass plate, the reference datum h₀ is obtained. 1. For a curved surface, the center screw touches the apex to give h₁; sagitta h = |h₁ - h₀|, and R = (a² / 6h) + (h / 2). 2. For a flat glass slide, the three outer legs rest on the flat plane glass plate while the center screw is adjusted onto the top surface of the slide, yielding thickness t = |h₁ - h₀|.',
      procedure: 'Procedure: 1. Select investigation type (Curvature or Slide Thickness). 2. For curvature: measure outer leg distance a using needle pricks on paper; record flat datum h₀; measure curved sagitta h₁ in 3 positions. 3. For slide thickness: record flat datum h₀; place slide under central screw on the flat plate and record 3 readings of h₁. 4. Compute elevation/thickness and calculate radius of curvature R or slide thickness t.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      invSelector: 'Investigation Target:',
      invCurvature: 'Spherical Surface Curvature (R)',
      invThickness: 'Glass Slide Thickness (t)',
      transferReading: 'Transfer Spherometer Reading to Table:',
      logH0: 'Log as Zero Reading (h₀)',
      logH1: investigationType === 'curvature' ? 'Log as Curved Reading (h₁)' : 'Log as Slide Reading (h₁)',
      obsTableLegs: 'Table 1: Distance Between Outer Legs (a)',
      side1: 'Side a₁ (mm)',
      side2: 'Side a₂ (mm)',
      side3: 'Side a₃ (mm)',
      meanA: 'Mean Leg Distance a (mm)',
      obsTableH: investigationType === 'curvature' ? 'Table 2: Elevation & Sagitta Readings (h)' : 'Table: Slide Thickness Readings (t)',
      planeZero: 'Plane Glass Reading h₀ (mm):',
      sphericalTrial1: investigationType === 'curvature' ? 'Curved Reading 1 (mm)' : 'Slide Reading 1 (mm)',
      sphericalTrial2: investigationType === 'curvature' ? 'Curved Reading 2 (mm)' : 'Slide Reading 2 (mm)',
      sphericalTrial3: investigationType === 'curvature' ? 'Curved Reading 3 (mm)' : 'Slide Reading 3 (mm)',
      meanH1: investigationType === 'curvature' ? 'Mean Curved Reading h₁ (mm)' : 'Mean Slide Reading h₁ (mm)',
      elevationH: investigationType === 'curvature' ? 'Elevation h = |h₁ - h₀| (mm)' : 'Thickness t = |h₁ - h₀| (mm)',
      calcTitle: investigationType === 'curvature' ? 'Radius of Curvature Calculation' : 'Slide Thickness Calculation',
      radiusLabel: 'Radius of Curvature (R):',
      thicknessLabel: 'Glass Slide Thickness (t):',
      formulaBreakdown: 'Formula: R = (a² / 6h) + (h / 2)',
      thicknessFormula: 'Formula: t = |h₁ - h₀|',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why are the outer legs pressed onto paper before measuring side length a?',
      q1Model: 'Model Answer: The sharp leg tips leave distinct prick marks on paper. Measuring between these marks with a precision ruler gives accurate side lengths of the equilateral triangle without parallax or parallax errors on the instrument body.',
      q1Rubric: 'Rubric: Award 1 mark for distinct needle prick marks; 1 mark for accurate measurement of equilateral triangle sides.',
      q2Title: '2. How do you confirm that all four tips touch the surface without rocking?',
      q2Model: 'Model Answer: Gently tap diagonally across the legs. If the instrument rocks, the screw is over-extended or not touching. Additionally, a thin slip of paper should just fail to slide under each tip when proper contact is achieved.',
      q2Rubric: 'Rubric: Award 1 mark for rocking test; 1 mark for thin paper slip criterion.',
      q3Title: '3. What is the physical significance if the measured sagitta h = 0?',
      q3Model: 'Model Answer: Zero elevation indicates the surface has no curvature (infinitely large radius of curvature R → ∞), which physically represents a perfectly flat plane surface.',
      q3Rubric: 'Rubric: Award 1 mark for flat plane surface; 1 mark for infinite radius of curvature (R → ∞).',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3: ගෝලමානය භාවිතයෙන් වක්‍රතා අරය සහ වීදුරු තහඩුවක ඝනකම නිර්ණය කිරීම',
      aim: 'අරමුණ: ගෝලමානයක් භාවිතයෙන් ගෝලීය පෘෂ්ඨයක (කාච/දර්පණ) වක්‍රතා අරය සහ තල වීදුරු තහඩුවක ඝනකම නිරවද්‍යව නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ගෝලමානය (කුඩාම මිනුම 0.01 mm), තල වීදුරු තහඩුව, උත්තල ගෝලීය පෘෂ්ඨය, අන්වීක්ෂ තල වීදුරු තහඩුව, සුදු කඩදාසි, මිලිමීටර් පරිමාණය.',
      theoryTitle: 'මූලධර්මය සහ ජ්‍යාමිතික ව්‍යුත්පන්නය',
      theoryText: 'ගෝලමානයේ ස්ථාවර බාහිර පාද තුන මගින් මධ්‍යන්‍ය පාදය a වූ සමපාද ත්‍රිකෝණයක් සාදයි. තල වීදුරු තහඩුව මත තැබීමෙන් මූලික පාඨාංකය h₀ ලබා ගනී. 1. ගෝලීය පෘෂ්ඨයක් සඳහා, මැද ඉස්කුරුප්පුව මුදුන ස්පර්ශ කර h₁ ලබා ගන්නා අතර එසවීම h = |h₁ - h₀| සහ R = (a² / 6h) + (h / 2) වේ. 2. තල වීදුරු තහඩුවක ඝනකම සෙවීමේදී, බාහිර පාද තුන තල වීදුරු පදනම මත තබා මැද ඉස්කුරුප්පුව තහඩුව මත තැබීමෙන් ඝනකම t = |h₁ - h₀| මනිනු ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. පරීක්ෂණ අරමුණ තෝරන්න (වක්‍රතා අරය හෝ තහඩුවේ ඝනකම). 2. වක්‍රතාව සඳහා: කඩදාසිය මත පාද තදකර a මැනීම, තල වීදුරුව මත h₀ සටහන් කිරීම, ගෝලීය පෘෂ්ඨයේ ස්ථාන 3කින් h₁ මැනීම. 3. ඝනකම සඳහා: තල පදනම මත h₀ සටහන් කිරීම, තහඩුව මත h₁ ස්ථාන 3කින් මැනීම. 4. එසවීම/ඝනකම ගණනය කර වක්‍රතා අරය R හෝ තහඩු ඝනකම t නිර්ණය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      invSelector: 'පරීක්ෂණ අරමුණ:',
      invCurvature: 'ගෝලීය පෘෂ්ඨයක වක්‍රතා අරය (R)',
      invThickness: 'තල වීදුරු තහඩුවක ඝනකම (t)',
      transferReading: 'ගෝලමාන පාඨාංකය වගුවට ඇතුළත් කරන්න:',
      logH0: 'තල වීදුරු පාඨාංකය (h₀) වෙත',
      logH1: investigationType === 'curvature' ? 'ගෝලීය පාඨාංකය (h₁) වෙත' : 'තහඩු පාඨාංකය (h₁) වෙත',
      obsTableLegs: 'වගුව 1: බාහිර පාද අතර දුර (a)',
      side1: 'පාදය a₁ (mm)',
      side2: 'පාදය a₂ (mm)',
      side3: 'පාදය a₃ (mm)',
      meanA: 'මධ්‍යන්‍ය පාද දුර a (mm)',
      obsTableH: investigationType === 'curvature' ? 'වගුව 2: එසවීම / උස (h) පාඨාංක' : 'වගුව: තහඩු ඝනකම (t) පාඨාංක',
      planeZero: 'තල වීදුරු පාඨාංකය h₀ (mm):',
      sphericalTrial1: investigationType === 'curvature' ? 'ගෝලීය පාඨාංකය 1 (mm)' : 'තහඩු පාඨාංකය 1 (mm)',
      sphericalTrial2: investigationType === 'curvature' ? 'ගෝලීය පාඨාංකය 2 (mm)' : 'තහඩු පාඨාංකය 2 (mm)',
      sphericalTrial3: investigationType === 'curvature' ? 'ගෝලීය පාඨාංකය 3 (mm)' : 'තහඩු පාඨාංකය 3 (mm)',
      meanH1: investigationType === 'curvature' ? 'මධ්‍යන්‍ය ගෝලීය පාඨාංකය h₁ (mm)' : 'මධ්‍යන්‍ය තහඩු පාඨාංකය h₁ (mm)',
      elevationH: investigationType === 'curvature' ? 'එසවීම h = |h₁ - h₀| (mm)' : 'ඝනකම t = |h₁ - h₀| (mm)',
      calcTitle: investigationType === 'curvature' ? 'වක්‍රතා අරය ගණනය කිරීම' : 'තහඩුවේ ඝනකම ගණනය කිරීම',
      radiusLabel: 'වක්‍රතා අරය (R):',
      thicknessLabel: 'වීදුරු තහඩුවේ ඝනකම (t):',
      formulaBreakdown: 'සමීකරණය: R = (a² / 6h) + (h / 2)',
      thicknessFormula: 'සමීකරණය: t = |h₁ - h₀|',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. පාද දුර a මැනීමට පෙර කඩදාසියක් මත පාද තද කරන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: තියුණු පාද තුඩු මගින් කඩදාසිය මත පැහැදිලි ලකුණු සටහන් වේ. එම ලකුණු අතර දුර පරිමාණයකින් මැනීමෙන් උපකරණ රාමුව නිසා ඇතිවන දෘෂ්ටි දෝෂ මඟහැරේ.',
      q1Rubric: 'රූබ්රිකය: පැහැදිලි ලකුණු සටහන් වීමට ලකුණු 1; දෘෂ්ටි දෝෂ රහිතව සමපාද ත්‍රිකෝණ පාද මැනීමට ලකුණු 1.',
      q2Title: '2. තුඩු 4ම පෘෂ්ඨය මත සමතුලිතව ස්පර්ශ වන බව තහවුරු කරන්නේ කෙසේද?',
      q2Model: 'ආදර්ශ පිළිතුර: පාද මෘදුව තට්ටු කර දෙදරුම් කනවාදැයි පරීක්ෂා කිරීමෙන් සහ තුඩු යටින් සිහින් කඩදාසි තීරුවක් ඇතුල් කළ නොහැකි බව තහවුරු කර ගැනීමෙන්.',
      q2Rubric: 'රූබ්රිකය: දෙදරුම් පරීක්ෂාවට ලකුණු 1; සිහින් කඩදාසි පරීක්ෂාවට ලකුණු 1.',
      q3Title: '3. මනින ලද එසවීම h = 0 වීමේ භෞතික අර්ථය කුමක්ද?',
      q3Model: 'ආදර්ශ පිළිතුර: එසවීමක් නොමැති වීම යනු පෘෂ්ඨයේ වක්‍රතාවක් නොමැති බවයි (වක්‍රතා අරය අනන්තය කරා යයි R → ∞). එය තල පෘෂ්ඨයක් නිරූපණය කරයි.',
      q3Rubric: 'රූබ්රිකය: තල පෘෂ්ඨය සඳහා ලකුණු 1; අනන්ත වක්‍රතා අරයට (R → ∞) ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleSelectInvestigation = (type: SpherometerInvestigation) => {
    updateObservations({ investigationType: type });
  };

  const handleLoadSample = () => {
    if (investigationType === 'curvature') {
      loadSampleObservations({
        investigationType: 'curvature',
        aTrials: ['40.1', '39.9', '40.0'],
        h0: '0.00',
        h1Trials: ['1.35', '1.34', '1.33'],
      });
    } else {
      loadSampleObservations({
        investigationType: 'thickness',
        aTrials: ['', '', ''],
        h0: '0.00',
        h1Trials: ['1.22', '1.24', '1.23'],
      });
    }
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

  const expectedMeanA = parseMean(aTrials);
  const expectedMeanH1 = parseMean(h1Trials);
  const zeroH0 = parseFloat(h0) || 0.0;

  const expectedSagitta = expectedMeanH1 !== null ? Number(Math.abs(expectedMeanH1 - zeroH0).toFixed(2)) : null;

  const expectedResult =
    expectedMeanA !== null && expectedSagitta !== null && expectedSagitta > 0
      ? calculateSpherometerCurvature(expectedMeanA, expectedSagitta, 0.01)
      : null;

  const expectedSlideThickness = expectedSagitta;

  // Log reading from live spherometer
  const handleLogH0 = () => {
    updateObservations({ h0: liveReading.hMm.toFixed(2) });
  };

  const handleLogH1 = () => {
    const raw = observations.h1Trials || ['', '', ''];
    const currentTrials: [string, string, string] = [raw[0] || '', raw[1] || '', raw[2] || ''];
    const valStr = liveReading.hMm.toFixed(2);
    const emptyIndex = currentTrials.findIndex((val) => val === '');
    if (emptyIndex !== -1) {
      currentTrials[emptyIndex] = valStr;
    } else {
      currentTrials[0] = valStr;
    }
    updateObservations({ h1Trials: currentTrials });
  };

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    if (investigationType === 'curvature') {
      const stuMeanA = parseFloat(calculations.meanA || '');
      if (expectedMeanA !== null) {
        const isMeanCorrect = !isNaN(stuMeanA) && Math.abs(stuMeanA - expectedMeanA) <= 0.05;
        results.meanA = isMeanCorrect;
        if (!isMeanCorrect) {
          feedback.meanA = {
            en: `Mean leg distance a = (${aTrials.join(' + ')}) / 3 = ${expectedMeanA} mm.`,
            si: `මධ්‍යන්‍ය පාද දුර a = (${aTrials.join(' + ')}) / 3 = ${expectedMeanA} mm විය යුතුය.`,
          };
        }
      }

      const stuH = parseFloat(calculations.elevationH || '');
      if (expectedSagitta !== null) {
        const isHCorrect = !isNaN(stuH) && Math.abs(stuH - expectedSagitta) <= 0.02;
        results.elevationH = isHCorrect;
        if (!isHCorrect) {
          feedback.elevationH = {
            en: `Elevation h = |h₁ (${expectedMeanH1}) - h₀ (${zeroH0})| = ${expectedSagitta} mm.`,
            si: `එසවීම h = |h₁ (${expectedMeanH1}) - h₀ (${zeroH0})| = ${expectedSagitta} mm විය යුතුය.`,
          };
        }
      }

      const stuR = parseFloat(calculations.radiusOfCurvature || '');
      if (expectedResult && expectedResult.radiusMm !== null) {
        const isRCorrect = !isNaN(stuR) && Math.abs(stuR - expectedResult.radiusMm) / expectedResult.radiusMm <= 0.03;
        results.radiusOfCurvature = isRCorrect;
        if (!isRCorrect) {
          feedback.radiusOfCurvature = {
            en: `Expected R = (a² / 6h) + (h / 2) ≈ ${expectedResult.radiusMm} mm. Check a and h.`,
            si: `බලාපොරොත්තු අරය R = (a² / 6h) + (h / 2) ≈ ${expectedResult.radiusMm} mm වේ. a සහ h පරීක්ෂා කරන්න.`,
          };
        }
      }
    } else {
      // Thickness mode
      const stuThick = parseFloat(calculations.slideThickness || calculations.elevationH || '');
      if (expectedSlideThickness !== null) {
        const isThickCorrect = !isNaN(stuThick) && Math.abs(stuThick - expectedSlideThickness) <= 0.02;
        results.slideThickness = isThickCorrect;
        if (!isThickCorrect) {
          feedback.slideThickness = {
            en: `Slide thickness t = |h₁ (${expectedMeanH1}) - h₀ (${zeroH0})| = ${expectedSlideThickness} mm.`,
            si: `තහඩු ඝනකම t = |h₁ (${expectedMeanH1}) - h₀ (${zeroH0})| = ${expectedSlideThickness} mm විය යුතුය.`,
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

          {/* Investigation Selector Pills */}
          <div className="pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.invSelector}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'curvature', label: t.invCurvature },
                { id: 'thickness', label: t.invThickness },
              ].map((inv) => (
                <button
                  key={inv.id}
                  type="button"
                  onClick={() => handleSelectInvestigation(inv.id as SpherometerInvestigation)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    investigationType === inv.id
                      ? 'bg-[#0F766E] text-white shadow-xs'
                      : 'bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8] hover:text-[#14243A] dark:hover:text-[#F8FAFC] border border-[#DFE8EF] dark:border-[#1E334D]'
                  }`}
                >
                  {inv.label}
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
        <Spherometer
          locale={locale}
          onCalculationChange={(hMm, rMm) => {
            setLiveReading({ hMm, rMm });
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
              {liveReading.hMm.toFixed(2)} mm
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7"
              onClick={handleLogH0}
            >
              {t.logH0}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7"
              onClick={handleLogH1}
            >
              {t.logH1}
            </Button>
          </div>
        </div>
      </div>

      {/* Observation Table Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div>
            <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {investigationType === 'curvature'
                ? `${t.obsTableLegs} & ${t.obsTableH}`
                : t.obsTableH}
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

        <CardContent className="p-6 space-y-6">
          {/* Table 1: Legs (Shown for Curvature) */}
          {investigationType === 'curvature' && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.obsTableLegs}
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse min-w-[400px]">
                  <thead>
                    <tr className="border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8]">
                      <th className="p-3 font-semibold">{t.side1}</th>
                      <th className="p-3 font-semibold">{t.side2}</th>
                      <th className="p-3 font-semibold">{t.side3}</th>
                      <th className="p-3 font-semibold text-[#0F766E]">{t.meanA}</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr>
                      <td className="p-2">
                        <input
                          type="text"
                          value={aTrials[0]}
                          onChange={(e) => updateObservations({ aTrials: [e.target.value, aTrials[1], aTrials[2]] })}
                          className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={aTrials[1]}
                          onChange={(e) => updateObservations({ aTrials: [aTrials[0], e.target.value, aTrials[2]] })}
                          className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={aTrials[2]}
                          onChange={(e) => updateObservations({ aTrials: [aTrials[0], aTrials[1], e.target.value] })}
                          className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold text-[#0F766E]">
                        {expectedMeanA !== null ? `${expectedMeanA} mm` : '—'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Table 2: Sagitta / Slide Thickness */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.obsTableH}
            </span>
            <div className="flex items-center gap-2 max-w-xs mb-2">
              <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                {t.planeZero}
              </label>
              <input
                type="text"
                value={h0}
                onChange={(e) => updateObservations({ h0: e.target.value })}
                placeholder="0.00"
                className="w-20 px-2 py-1 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono text-center focus:outline-[#0F766E]"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-[#64748B] dark:text-[#94A3B8]">
                    <th className="p-3 font-semibold">{t.sphericalTrial1}</th>
                    <th className="p-3 font-semibold">{t.sphericalTrial2}</th>
                    <th className="p-3 font-semibold">{t.sphericalTrial3}</th>
                    <th className="p-3 font-semibold">{t.meanH1}</th>
                    <th className="p-3 font-semibold text-[#0F766E]">{t.elevationH}</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  <tr>
                    <td className="p-2">
                      <input
                        type="text"
                        value={h1Trials[0]}
                        onChange={(e) => updateObservations({ h1Trials: [e.target.value, h1Trials[1], h1Trials[2]] })}
                        className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={h1Trials[1]}
                        onChange={(e) => updateObservations({ h1Trials: [h1Trials[0], e.target.value, h1Trials[2]] })}
                        className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={h1Trials[2]}
                        onChange={(e) => updateObservations({ h1Trials: [h1Trials[0], h1Trials[1], e.target.value] })}
                        className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">{expectedMeanH1 !== null ? `${expectedMeanH1} mm` : '—'}</td>
                    <td className="p-3 font-bold text-[#0F766E]">
                      {mode === 'guided' ? (
                        expectedSagitta !== null ? `${expectedSagitta} mm` : '—'
                      ) : (
                        <input
                          type="text"
                          value={
                            investigationType === 'curvature'
                              ? calculations.elevationH || ''
                              : calculations.slideThickness || ''
                          }
                          onChange={(e) =>
                            updateCalculation(
                              investigationType === 'curvature' ? 'elevationH' : 'slideThickness',
                              e.target.value
                            )
                          }
                          placeholder={investigationType === 'curvature' ? 'h (mm)' : 't (mm)'}
                          className={`w-20 px-2 py-1 rounded border text-xs ${
                            (investigationType === 'curvature'
                              ? calculationResults?.elevationH
                              : calculationResults?.slideThickness) === true
                              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                              : (investigationType === 'curvature'
                                  ? calculationResults?.elevationH
                                  : calculationResults?.slideThickness) === false
                              ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30'
                              : 'border-[#DFE8EF] dark:border-[#1E334D]'
                          }`}
                        />
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
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

            {investigationType === 'curvature' ? (
              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60 space-y-1 text-xs font-mono">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.radiusLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {expectedResult && expectedResult.radiusMm !== null ? `${expectedResult.radiusMm} mm` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.radiusOfCurvature || ''}
                    onChange={(e) => updateCalculation('radiusOfCurvature', e.target.value)}
                    placeholder="R (mm)"
                    className="w-32 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
                <span className="text-[11px] text-[#64748B] block font-sans">{t.formulaBreakdown}</span>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60 space-y-1 text-xs font-mono">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.thicknessLabel}</span>
                <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {expectedSlideThickness !== null ? `${expectedSlideThickness} mm` : '—'}
                </span>
                <span className="text-[11px] text-[#64748B] block font-sans">{t.thicknessFormula}</span>
              </div>
            )}
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

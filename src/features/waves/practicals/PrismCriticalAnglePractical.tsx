'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  RotateCcw,
  Database,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Eye,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react';
import { calculatePrismCriticalAngleRefractiveIndex } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface PrismCriticalAnglePracticalProps {
  locale?: Locale;
}

interface CriticalAngleTrial {
  id: number;
  pinPosCm: string;
  angle2cDeg: string;
}

export const PrismCriticalAnglePractical: React.FC<PrismCriticalAnglePracticalProps> = ({
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
    calculationResults,
    calculationFeedback,
    setCalculationCheck,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-18-prism-critical',
    defaultMode: 'guided',
    defaultObservations: {
      eyeSliderPos: '50',
      trials: [
        { id: 1, pinPosCm: '2.0', angle2cDeg: '82.6' },
        { id: 2, pinPosCm: '2.5', angle2cDeg: '82.4' },
        { id: 3, pinPosCm: '3.0', angle2cDeg: '82.5' },
        { id: 4, pinPosCm: '3.5', angle2cDeg: '82.6' },
        { id: 5, pinPosCm: '4.0', angle2cDeg: '82.4' },
      ],
    },
    defaultCalculations: {
      meanAngle2c: '',
      criticalAngle: '',
      refractiveIndex: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  const eyeSliderPos = observations.eyeSliderPos || '50';
  const trials: CriticalAngleTrial[] =
    observations.trials || [
      { id: 1, pinPosCm: '2.0', angle2cDeg: '82.6' },
      { id: 2, pinPosCm: '2.5', angle2cDeg: '82.4' },
      { id: 3, pinPosCm: '3.0', angle2cDeg: '82.5' },
      { id: 4, pinPosCm: '3.5', angle2cDeg: '82.6' },
      { id: 5, pinPosCm: '4.0', angle2cDeg: '82.4' },
    ];

  const t = {
    en: {
      title: 'Practical 18: Determination of Refractive Index of a Prism by the Critical Angle Method',
      aim: 'Aim: To locate the image-disappearance condition due to total internal reflection in an equilateral glass prism, complete the geometrical ray construction, determine the critical angle (c), and calculate the refractive index (n = 1 / sin c) of the glass.',
      apparatus: 'Apparatus: Equilateral crown glass prism (60°), soft drawing board, white paper sheets, drawing pins, 4 optical pins (object pin O, search pins P & Q), ruler, set-square, protractor.',
      theoryTitle: 'Physical Principle & Geometrical Ray Construction',
      theoryText: 'When light in an optically denser medium (glass, n) strikes a boundary with a rarer medium (air, 1) at an angle of incidence equal to the critical angle c, the refracted ray grazes the boundary (refraction angle = 90°).\nBy Snell’s law: n · sin(c) = 1 · sin(90°) ⇒ n = 1 / sin(c).\n\nGeometrical Construction (NIE Handbook pp. 40–41):\n1. Pin O touches face AB. Light enters and reflects internally at face AC.\n2. Looking through face BC, the observer moves their eye towards B until the reflected image of O just begins to disappear (TIR threshold).\n3. Search pins P and Q are fixed in line with the disappearing image.\n4. Normal OXI is drawn to face AC such that OX = XI (locating virtual image I).\n5. Line QP is produced to meet face BC at R. Line RI is drawn to meet face AC at S.\n6. OS is the incident ray and SR is the reflected ray on face AC. The angle between them is:\n   ∠OSR = 2c  ⇒  Critical Angle c = ∠OSR / 2\n7. Refractive index: n = 1 / sin(c).',
      procedure: 'Procedure: 1. Trace prism ABC on drawing paper. 2. Place object pin O vertically touching face AB. 3. Look through face BC towards face AC to see O’s image. 4. Move eye along BC towards B until the image just vanishes. 5. Fix search pins P and Q in straight line with the vanishing image. 6. Remove prism; construct normal OXI (OX = XI), extend QP to R, draw RI meeting AC at S, and join OS. 7. Measure ∠OSR (= 2c). 8. Compute c = ∠OSR / 2 and n = 1 / sin(c). Repeat for 5 positions of pin O.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculation & Diagnostic Check)',
      sliderTitle: 'Visual Disappearance Simulator (Move Eye Along Face BC)',
      sliderLabel: 'Eye Position Along Face BC (from C to B):',
      statusTir: 'Total Internal Reflection: Bright clear image visible.',
      statusThreshold: 'Critical Angle Threshold: Image just beginning to disappear!',
      statusTransmitted: 'Beyond Critical Limit: Light refracts out, internal reflection extinguished.',
      obsTitle: 'Table of Observations: Measured Angle ∠OSR (= 2c), Critical Angle c, and Refractive Index n',
      trialCol: 'Trial',
      pinPosCol: 'Pin O Position along AB (cm)',
      angle2cCol: 'Measured Angle ∠OSR = 2c (°)',
      criticalAngleCol: 'Critical Angle c = 2c / 2 (°)',
      refractiveIndexCol: 'Refractive Index n = 1 / sin(c)',
      calcSummaryTitle: 'Analytical Summary & Benchmark Evaluation',
      meanAngle2cLabel: 'Mean Angle 2c (∠OSR):',
      meanCriticalAngleLabel: 'Derived Critical Angle (c = 2c / 2):',
      derivedRefractiveIndexLabel: 'Calculated Refractive Index (n):',
      nominalBenchmark: 'Standard Crown Glass Benchmark: n ≈ 1.516 (c ≈ 41.27°)',
      verdictPass: 'Refractive Index Verified within Crown Glass Range (1.50 – 1.55)',
      verdictFail: 'Check halving step c = 2c / 2 or protractor alignment',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why does the image of pin O just disappear as the eye is moved towards B along face BC?',
      q1Model: 'Model Answer: As the eye moves towards B, the internal angle of incidence on face AC decreases. When this angle falls below the critical angle c, total internal reflection ceases and light refracts out through face AC into the air, causing the reflected image viewed through face BC to disappear abruptly.',
      q1Rubric: 'Rubric: Award 1 mark for angle of incidence decreasing below critical angle c; 1 mark for transition from TIR to refraction causing image disappearance.',
      q2Title: '2. Prove geometrically why the measured angle ∠OSR equals twice the critical angle (2c).',
      q2Model: 'Model Answer: Ray OS strikes face AC at critical angle c to the normal. By the law of reflection, the reflected ray SR also makes angle c with the normal. Since the normal bisects the angle between the incident ray and the reflected ray, the total angle between them is ∠OSR = c + c = 2c. Thus c = ∠OSR / 2.',
      q2Rubric: 'Rubric: Award 1 mark for angle of incidence = c and angle of reflection = c; 1 mark for angle between incident and reflected rays equaling 2c.',
      q3Title: '3. What precautions ensure high angular accuracy when placing search pins P and Q?',
      q3Model: 'Model Answer: 1. Keep the separation between pins P and Q as large as possible (at least 5–6 cm) to minimize directional pointing error. 2. Ensure all optical pins are strictly vertical by viewing their alignments at table level. 3. Use a finely sharpened pencil when tracing boundaries and ray intersections.',
      q3Rubric: 'Rubric: Award 1 mark for pin separation ≥ 5 cm; 1 mark for pins vertical / fine pencil lines.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 18: අවධි කෝණ ක්‍රමයෙන් ප්‍රිස්ම ද්‍රව්‍යයේ වර්තනාංකය සෙවීම',
      aim: 'අරමුණ: සමපාද වීදුරු ප්‍රිස්මයක පූර්ණ අභ්‍යන්තර පරාවර්තනය හේතුවෙන් ප්‍රතිබිම්භය අතුරුදහන් වන සීමාව හඳුනාගෙන, ජ්‍යාමිතික කිරණ සටහන සම්පූර්ණ කර, අවධි කෝණය (c) මැන ප්‍රිස්මයේ වර්තනාංකය (n = 1 / sin c) සෙවීම.',
      apparatus: 'උපකරණ: සමපාද ක්‍රවුන් වීදුරු ප්‍රිස්මය (60°), ඇඳීමේ ලෑල්ල, සුදු කඩදාසි, ඇඳීමේ අල්පෙනෙති, දෘශ්‍ය අල්පෙනෙති 4 (වස්තු අල්පෙනෙත්ත O, සෙවුම් අල්පෙනෙති P සහ Q), අඩි රූල, කෝණමානය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ ජ්‍යාමිතික කිරණ සම්පාදනය',
      theoryText: 'වීදුරු වැනි ප්‍රකාශ ඝන මාධ්‍යයකින් වාතය වැනි විරල මාධ්‍යයකට ආලෝකය ගමන් කිරීමේදී පතන කෝණය අවධි කෝණයට (c) සමාන වන විට වර්තන කෝණය 90° වී කිරණය මුහුණත දිගේ යයි.\nස්නෙල් නියමයෙන්: n · sin(c) = 1 · sin(90°) ⇒ n = 1 / sin(c).\n\nජ්‍යාමිතික සම්පාදනය (NIE ප්‍රායෝගික අත්පොත පිටු 40–41):\n1. O අල්පෙනෙත්ත AB මුහුණත ස්පර්ශ වන සේ සිරස්ව තබයි. කිරණය AC මුහුණතෙන් පූර්ණ අභ්‍යන්තර පරාවර්තනය වේ.\n2. BC මුහුණතෙන් බලමින් ඇස C සිට B දෙසට ගෙන යන විට O හි පරාවර්තිත ප්‍රතිබිම්භය අතුරුදහන් වන සීමාව හමුවේ.\n3. එම සීමාවේදී P සහ Q සෙවුම් අල්පෙනෙති එක එල්ලේ සිටුවයි.\n4. AC මුහුණතට OXI ලම්භකය අඳින්න (OX = XI, I යනු අතාත්වික ප්‍රතිබිම්භයයි).\n5. QP රේඛාව දික් කර BC මුහුණත R හිදී හමුවන්න. RI රේඛාව ඇඳ AC මුහුණත S හිදී හමුවන්න.\n6. OS යනු පතන කිරණයද SR යනු පරාවර්තිත කිරණයද වේ. ඒවා අතර කෝණය:\n   ∠OSR = 2c  ⇒  අවධි කෝණය c = ∠OSR / 2\n7. වර්තනාංකය: n = 1 / sin(c).',
      procedure: 'ක්‍රමවේදය: 1. කඩදාසිය මත ප්‍රිස්මයේ ABC දාර සලකුණු කරන්න. 2. O අල්පෙනෙත්ත AB මුහුණතට ස්පර්ශ වන සේ තබන්න. 3. BC මුහුණතෙන් බලමින් ඇස B දෙසට ගෙන ගොස් ප්‍රතිබිම්භය අතුරුදහන් වන මොහොතේ P සහ Q සෙවුම් අල්පෙනෙති සිටුවන්න. 4. OXI (OX = XI) ලම්භකය ඇඳ, QP රේඛාව R දක්වාත්, RI රේඛාව S දක්වාත් අඳින්න. 5. OS යා කර ∠OSR (= 2c) මනින්න. 6. c = ∠OSR / 2 සහ n = 1 / sin(c) ගණනය කරන්න.',
      modeSelector: 'ඉගෙනුම් මාදිලිය:',
      guidedMode: 'මඟපෙන්වන මාදිලිය (ඉඟි සහ ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (අතින් ගණනය සහ දෝෂ පරීක්ෂාව)',
      sliderTitle: 'ප්‍රතිබිම්භය අතුරුදහන් වීමේ අනුකරණය (BC මුහුණත දිගේ ඇස චලනය)',
      sliderLabel: 'BC මුහුණත දිගේ ඇසේ පිහිටුම (C සිට B දක්වා):',
      statusTir: 'පූර්ණ අභ්‍යන්තර පරාවර්තනය: පැහැදිලි ප්‍රතිබිම්භය පෙනේ.',
      statusThreshold: 'අවධි කෝණ සීමාව: ප්‍රතිබිම්භය අතුරුදහන් වීමට පටන් ගනී!',
      statusTransmitted: 'අවධි සීමාව ඉක්මවා: ආලෝකය වර්තනය වී පිටතට යයි, පරාවර්තනය නැතිවේ.',
      obsTitle: 'නිරීක්ෂණ සටහන: මනින ලද කෝණය ∠OSR (= 2c), අවධි කෝණය c, සහ වර්තනාංකය n',
      trialCol: 'වාරය',
      pinPosCol: 'O අල්පෙනෙත්තේ පිහිටුම (cm)',
      angle2cCol: 'මනින ලද කෝණය ∠OSR = 2c (°)',
      criticalAngleCol: 'අවධි කෝණය c = 2c / 2 (°)',
      refractiveIndexCol: 'වර්තනාංකය n = 1 / sin(c)',
      calcSummaryTitle: 'විශ්ලේෂණාත්මක සාරාංශය සහ සම්මත පරීක්ෂාව',
      meanAngle2cLabel: 'මධ්‍යන්‍ය කෝණය 2c (∠OSR):',
      meanCriticalAngleLabel: 'නිර්ණය කළ අවධි කෝණය (c = 2c / 2):',
      derivedRefractiveIndexLabel: 'ගණනය කළ වර්තනාංකය (n):',
      nominalBenchmark: 'සම්මත ක්‍රවුන් වීදුරු අගය: n ≈ 1.516 (c ≈ 41.27°)',
      verdictPass: 'ක්‍රවුන් වීදුරු පරාසය තුළ වර්තනාංකය තහවුරු විය (1.50 – 1.55)',
      verdictFail: 'අර්ධ කිරීමේ පියවර c = 2c / 2 හෝ කෝණමාන පාඨාංක පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ විසඳුම පෙන්වන්න',
      hideSolution: 'ආදර්ශ විසඳුම සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපායයන් සහ ස්වයං ඇගයීම් රූබෘක',
      q1Title: '1. BC මුහුණත දිගේ ඇස B දෙසට ගෙන යන විට O හි ප්‍රතිබිම්භය අතුරුදහන් වන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: ඇස B දෙසට ගෙන යන විට AC මුහුණත මත අභ්‍යන්තර පතන කෝණය ක්‍රමයෙන් අඩු වේ. මෙම පතන කෝණය අවධි කෝණයට (c) වඩා අඩු වූ විට පූර්ණ අභ්‍යන්තර පරාවර්තනය නතර වී ආලෝකය වාතයට වර්තනය වේ. එම නිසා BC තුළින් පෙනෙන පරාවර්තිත ප්‍රතිබිම්භය එකවර නැතිවී යයි.',
      q1Rubric: 'රූබෘකය: පතන කෝණය අවධි කෝණයට වඩා අඩු වීම සඳහා ලකුණු 1; පූර්ණ අභ්‍යන්තර පරාවර්තනය වෙනුවට වර්තනය සිදුවී ප්‍රතිබිම්භය නැතිවීම සඳහා ලකුණු 1.',
      q2Title: '2. මනින ලද ∠OSR කෝණය අවධි කෝණය මෙන් දෙගුණයකට (2c) සමාන වන බව ජ්‍යාමිතිකව පෙන්වන්න.',
      q2Model: 'ආදර්ශ පිළිතුර: OS කිරණය AC මුහුණතේ ලම්භය සමඟ c අවධි කෝණය සාදයි. පරාවර්තන නියම අනුව SR පරාවර්තිත කිරණයද ලම්භය සමඟ c කෝණයක් සාදයි. ලම්භය මගින් පතන සහ පරාවර්තිත කිරණ අතර කෝණය සමච්ඡේදනය කරන බැවින්, මුළු කෝණය ∠OSR = c + c = 2c වේ. එබැවින් c = ∠OSR / 2.',
      q2Rubric: 'රූබෘකය: පතන කෝණය = c සහ පරාවර්තන කෝණය = c බවට ලකුණු 1; කිරණ අතර මුළු කෝණය 2c බවට ලකුණු 1.',
      q3Title: '3. P සහ Q සෙවුම් අල්පෙනෙති සිටුවීමේදී ඉහළ කෝණික නිරවද්‍යතාවක් සඳහා ගත යුතු පියවර මොනවාද?',
      q3Model: 'ආදර්ශ පිළිතුර: 1. දිශානති දෝෂය අවම කිරීමට P සහ Q අල්පෙනෙති අතර පරතරය අවම වශයෙන් 5–6 cm පමණ විශාලව තබා ගත යුතුය. 2. අල්පෙනෙති පරිපූර්ණ සිරස්ව ඇති බවට තහවුරු කරගත යුතුය. 3. දාර සහ කිරණ ඇඳීමට හොඳින් උල් කළ පැන්සලක් භාවිතා කළ යුතුය.',
      q3Rubric: 'රූබෘකය: අල්පෙනෙති පරතරය ≥ 5 cm සඳහා ලකුණු 1; අල්පෙනෙති සිරස්ව තැබීම / සිහින් පැන්සල් රේඛා සඳහා ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය',
    },
  }[locale];

  // Update a single trial field
  const handleTrialChange = (id: number, field: keyof CriticalAngleTrial, val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  // Compute calculated values per row
  const computedRows = trials.map((tr) => {
    const angle2c = parseFloat(tr.angle2cDeg) || 0;
    const res = calculatePrismCriticalAngleRefractiveIndex(angle2c);
    return {
      ...tr,
      cDeg: res.criticalAngleDeg,
      n: res.refractiveIndex,
    };
  });

  const validRows = computedRows.filter((r) => r.cDeg > 0 && r.n > 0);
  const meanAngle2cVal =
    validRows.length > 0
      ? validRows.reduce((acc, r) => acc + (parseFloat(r.angle2cDeg) || 0), 0) / validRows.length
      : 0;
  const meanCritAngleVal = meanAngle2cVal / 2;
  const meanNVal =
    meanCritAngleVal > 0 ? 1 / Math.sin((meanCritAngleVal * Math.PI) / 180) : 0;

  const isPass = meanNVal >= 1.50 && meanNVal <= 1.55;

  const handleLoadSample = () => {
    loadSampleObservations({
      eyeSliderPos: '50',
      trials: [
        { id: 1, pinPosCm: '2.0', angle2cDeg: '82.6' },
        { id: 2, pinPosCm: '2.5', angle2cDeg: '82.4' },
        { id: 3, pinPosCm: '3.0', angle2cDeg: '82.5' },
        { id: 4, pinPosCm: '3.5', angle2cDeg: '82.6' },
        { id: 5, pinPosCm: '4.0', angle2cDeg: '82.4' },
      ],
    });
  };

  const handleClear = () => {
    reset();
  };

  // Independent Mode Diagnostics
  const handleCheckIndependent = () => {
    const userCrit = parseFloat(calculations.criticalAngle || '') || 0;
    const userN = parseFloat(calculations.refractiveIndex || '') || 0;

    const critDiff = Math.abs(userCrit - meanCritAngleVal);
    const nDiff = Math.abs(userN - meanNVal);

    // Diagnostic: check if student entered n = 1 / sin(2c) forgetting to halve!
    const unhalvedN = 1 / Math.sin((meanAngle2cVal * Math.PI) / 180);
    const forgotHalving = Math.abs(userN - unhalvedN) < 0.05;

    if (forgotHalving) {
      setCalculationCheck(
        { criticalAngleCheck: false },
        {
          criticalAngleCheck: {
            en: 'Did you forget to divide 2c by 2? Critical angle c = ∠OSR / 2. Do not plug 2c directly into 1/sin(c)!',
            si: 'ඔබ 2c අගය 2න් බෙදීමට අමතක කළාද? අවධි කෝණය c = ∠OSR / 2 වේ. 2c කෙලින්ම 1/sin(c) සමීකරණයට නොයොදන්න!',
          },
        }
      );
      return;
    }

    const isOk = critDiff <= 0.5 && nDiff <= 0.02;
    setCalculationCheck(
      { criticalAngleCheck: isOk },
      {
        criticalAngleCheck: {
          en: isOk
            ? `Correct! Critical angle c = ${meanCritAngleVal.toFixed(2)}° and refractive index n = ${meanNVal.toFixed(3)}.`
            : `Calculated values deviate. Expected c ≈ ${meanCritAngleVal.toFixed(2)}°, n ≈ ${meanNVal.toFixed(3)}. Check your halving step and sin formula.`,
          si: isOk
            ? `නිවැරදියි! අවධි කෝණය c = ${meanCritAngleVal.toFixed(2)}° සහ වර්තනාංකය n = ${meanNVal.toFixed(3)} වේ.`
            : `ගණනය කළ අගයන් අපගමනය වේ. අපේක්ෂිත c ≈ ${meanCritAngleVal.toFixed(2)}°, n ≈ ${meanNVal.toFixed(3)}. අර්ධ කිරීම සහ sin සමීකරණය නැවත පරීක්ෂා කරන්න.`,
        },
      }
    );
  };

  const sliderNum = parseInt(eyeSliderPos, 10);
  const sliderStatusText =
    sliderNum < 45
      ? t.statusTir
      : sliderNum <= 55
      ? t.statusThreshold
      : t.statusTransmitted;

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#475569] dark:text-[#94A3B8]">
                {t.modeSelector}
              </span>
              <div className="inline-flex rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] p-0.5 bg-[#F6FAFD] dark:bg-[#0B131E]">
                <button
                  type="button"
                  onClick={() => setMode('guided')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    mode === 'guided'
                      ? 'bg-white dark:bg-[#1E334D] text-[#0F766E] dark:text-[#14B8A6] shadow-xs'
                      : 'text-[#475569] dark:text-[#94A3B8]'
                  }`}
                >
                  {t.guidedMode}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('independent')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                    mode === 'independent'
                      ? 'bg-white dark:bg-[#1E334D] text-[#0F766E] dark:text-[#14B8A6] shadow-xs'
                      : 'text-[#475569] dark:text-[#94A3B8]'
                  }`}
                >
                  {t.independentMode}
                </button>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium pt-1">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p>
            <strong>{t.apparatus}</strong>
          </p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.theoryTitle}
            </span>
            <p className="whitespace-pre-line text-xs font-sans">{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{t.procedure}</p>
        </CardContent>
      </Card>

      {/* Interactive Ray Construction & Disappearance Simulator */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#0F766E]" />
            <span className="font-bold text-sm text-[#14243A] dark:text-[#F8FAFC]">
              {t.sliderTitle}
            </span>
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

        <CardContent className="p-6 pt-0 space-y-5">
          {/* SVG Geometrical Construction Diagram */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex flex-col items-center">
            <svg viewBox="0 0 460 260" className="w-full max-w-lg h-auto">
              {/* Equilateral Prism Boundary ABC */}
              {/* Apex A at (200, 30), B at (80, 220), C at (320, 220) */}
              <polygon
                points="200,30 80,220 320,220"
                fill="#EFF6FF"
                fillOpacity="0.8"
                stroke="#2563EB"
                strokeWidth="2"
              />
              <text x="200" y="24" textAnchor="middle" fontSize="12" fill="#1E40AF" fontWeight="bold">
                A (60°)
              </text>
              <text x="68" y="228" textAnchor="middle" fontSize="12" fill="#1E40AF" fontWeight="bold">
                B
              </text>
              <text x="332" y="228" textAnchor="middle" fontSize="12" fill="#1E40AF" fontWeight="bold">
                C
              </text>

              {/* Object Pin O touching face AB */}
              <circle cx="120" cy="157" r="4" fill="#DC2626" />
              <text x="105" y="162" textAnchor="middle" fontSize="11" fill="#DC2626" fontWeight="bold">
                O
              </text>

              {/* Normal OXI to face AC */}
              {/* Face AC line passes through (200, 30) and (320, 220). Normal to it from O(120, 157) */}
              <line
                x1="120"
                y1="157"
                x2="245"
                y2="100"
                stroke="#94A3B8"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              {/* Intersection X on AC */}
              <circle cx="218" cy="112" r="2.5" fill="#64748B" />
              <text x="214" y="104" fontSize="9" fill="#64748B" fontWeight="bold">
                X
              </text>

              {/* Virtual image position I behind AC such that OX = XI */}
              <circle cx="316" cy="67" r="3.5" fill="#9333EA" stroke="#6B21A8" strokeWidth="1" />
              <text x="328" y="72" fontSize="11" fill="#9333EA" fontWeight="bold">
                I
              </text>

              {/* Point of internal reflection S on AC */}
              {/* Incident ray OS */}
              <line x1="120" y1="157" x2="255" y2="117" stroke="#EA580C" strokeWidth="2" />
              <circle cx="255" cy="117" r="3" fill="#EA580C" />
              <text x="268" y="118" fontSize="11" fill="#EA580C" fontWeight="bold">
                S
              </text>

              {/* Reflected ray SR emerging through face BC at point R */}
              <line x1="255" y1="117" x2="220" y2="220" stroke="#EA580C" strokeWidth="2" />
              <circle cx="220" cy="220" r="3" fill="#EA580C" />
              <text x="212" y="235" fontSize="11" fill="#EA580C" fontWeight="bold">
                R
              </text>

              {/* Emergent Ray through search pins P & Q */}
              <line
                x1="220"
                y1="220"
                x2="175"
                y2="255"
                stroke="#D97706"
                strokeWidth="2"
                strokeDasharray="none"
              />

              {/* Search pin P */}
              <circle cx="198" cy="237" r="3.5" fill="#059669" />
              <text x="188" y="236" fontSize="10" fill="#059669" fontWeight="bold">
                P
              </text>

              {/* Search pin Q */}
              <circle cx="178" cy="253" r="3.5" fill="#059669" />
              <text x="168" y="255" fontSize="10" fill="#059669" fontWeight="bold">
                Q
              </text>

              {/* Construction line joining R and I passing through S */}
              <line
                x1="220"
                y1="220"
                x2="316"
                y2="67"
                stroke="#9333EA"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Measured angle ∠OSR = 2c arc at S */}
              <path
                d="M 235,123 A 24 24 0 0 1 247,140"
                fill="none"
                stroke="#DC2626"
                strokeWidth="1.8"
              />
              <text
                x="208"
                y="142"
                fontSize="11"
                fill="#DC2626"
                fontWeight="bold"
                className="font-mono"
              >
                ∠OSR = 2c (82.5°)
              </text>

              {/* Normal at S */}
              <line
                x1="205"
                y1="85"
                x2="295"
                y2="142"
                stroke="#64748B"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            </svg>

            {/* Interactive Eye Position Slider */}
            <div className="w-full max-w-md pt-3 space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-[#14243A] dark:text-[#F8FAFC]">{t.sliderLabel}</span>
                <span className="font-mono text-[#0F766E] dark:text-[#14B8A6] font-bold">
                  {sliderNum}% along BC
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={eyeSliderPos}
                onChange={(e) => updateObservations({ eyeSliderPos: e.target.value })}
                className="w-full accent-[#0F766E]"
              />
              <div
                className={`p-2.5 rounded-lg text-xs font-medium text-center ${
                  sliderNum < 45
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : sliderNum <= 55
                    ? 'bg-amber-50 text-amber-800 border border-amber-300 font-bold'
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {sliderStatusText}
              </div>
            </div>
          </div>

          {/* Observations Table */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.obsTitle}
            </span>
            <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#475569] dark:text-[#94A3B8]">
                  <tr>
                    <th className="p-3 text-center">{t.trialCol}</th>
                    <th className="p-3 text-center">{t.pinPosCol}</th>
                    <th className="p-3 text-center">{t.angle2cCol}</th>
                    <th className="p-3 text-center">{t.criticalAngleCol}</th>
                    <th className="p-3 text-center">{t.refractiveIndexCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D] bg-white dark:bg-[#111D2D]">
                  {computedRows.map((row) => (
                    <tr key={row.id}>
                      <td className="p-3 text-center font-bold text-[#14243A] dark:text-[#F8FAFC]">
                        {row.id}
                      </td>
                      <td className="p-2 text-center">
                        <input
                          type="text"
                          value={row.pinPosCm}
                          onChange={(e) => handleTrialChange(row.id, 'pinPosCm', e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-center bg-white dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <input
                          type="text"
                          value={row.angle2cDeg}
                          onChange={(e) => handleTrialChange(row.id, 'angle2cDeg', e.target.value)}
                          className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-center font-bold text-[#0F766E] bg-white dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 text-center text-[#2563EB] font-bold">
                        {mode === 'guided' || showSolution ? `${row.cDeg.toFixed(2)}°` : '—'}
                      </td>
                      <td className="p-3 text-center text-[#059669] font-bold">
                        {mode === 'guided' || showSolution ? row.n.toFixed(3) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytical Summary Card */}
          <div className="p-4 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-4">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block font-sans">
              {t.calcSummaryTitle}
            </span>

            {mode === 'guided' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">{t.meanAngle2cLabel}</span>
                  <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {meanAngle2cVal.toFixed(2)}°
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">{t.meanCriticalAngleLabel}</span>
                  <span className="text-base font-bold text-[#2563EB]">
                    {meanCritAngleVal.toFixed(2)}°
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">{t.derivedRefractiveIndexLabel}</span>
                  <span className="text-base font-bold text-[#059669]">
                    {meanNVal.toFixed(3)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-[11px] text-[#475569] dark:text-[#94A3B8] font-sans block mb-1">
                      {t.meanCriticalAngleLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 41.25"
                      value={calculations.criticalAngle || ''}
                      onChange={(e) => updateCalculation('criticalAngle', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#475569] dark:text-[#94A3B8] font-sans block mb-1">
                      {t.derivedRefractiveIndexLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.516"
                      value={calculations.refractiveIndex || ''}
                      onChange={(e) => updateCalculation('refractiveIndex', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" onClick={handleCheckIndependent} className="text-xs h-8">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    {t.checkCalcs}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowSolution(!showSolution)}
                    className="text-xs h-8"
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    {showSolution ? t.hideSolution : t.revealSolution}
                  </Button>
                </div>

                {calculationFeedback && calculationFeedback.criticalAngleCheck && (
                  <div
                    className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 ${
                      calculationResults?.criticalAngleCheck
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {calculationResults?.criticalAngleCheck ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <span>{calculationFeedback.criticalAngleCheck[locale]}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] text-xs">
              <span className="text-[#64748B]">{t.nominalBenchmark}</span>
              <span
                className={`font-bold flex items-center gap-1 ${
                  isPass ? 'text-[#059669]' : 'text-[#DC2626]'
                }`}
              >
                {isPass ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <AlertTriangle className="w-4 h-4" />
                )}
                {isPass ? t.verdictPass : t.verdictFail}
              </span>
            </div>
          </div>

          {/* Self-Evaluation Rubrics */}
          <div className="p-4 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0F766E]" />
              <span className="font-bold text-xs sm:text-sm text-[#14243A] dark:text-[#F8FAFC]">
                {t.precautionsTitle}
              </span>
            </div>

            {/* Q1 */}
            <div className="p-3 bg-white dark:bg-[#111D2D] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <p className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">{t.q1Title}</p>
              <p className="text-xs text-[#475569] dark:text-[#94A3B8] italic">{t.q1Model}</p>
              <div className="flex justify-between items-center pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D]">
                <span className="text-[11px] text-[#64748B]">{t.q1Rubric}</span>
                <select
                  value={rubricScores.q1 || 0}
                  onChange={(e) => updateRubricScore('q1', parseInt(e.target.value, 10))}
                  className="text-xs px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                >
                  <option value={0}>0 / 2</option>
                  <option value={1}>1 / 2</option>
                  <option value={2}>2 / 2</option>
                </select>
              </div>
            </div>

            {/* Q2 */}
            <div className="p-3 bg-white dark:bg-[#111D2D] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <p className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">{t.q2Title}</p>
              <p className="text-xs text-[#475569] dark:text-[#94A3B8] italic">{t.q2Model}</p>
              <div className="flex justify-between items-center pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D]">
                <span className="text-[11px] text-[#64748B]">{t.q2Rubric}</span>
                <select
                  value={rubricScores.q2 || 0}
                  onChange={(e) => updateRubricScore('q2', parseInt(e.target.value, 10))}
                  className="text-xs px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                >
                  <option value={0}>0 / 2</option>
                  <option value={1}>1 / 2</option>
                  <option value={2}>2 / 2</option>
                </select>
              </div>
            </div>

            {/* Q3 */}
            <div className="p-3 bg-white dark:bg-[#111D2D] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <p className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">{t.q3Title}</p>
              <p className="text-xs text-[#475569] dark:text-[#94A3B8] italic">{t.q3Model}</p>
              <div className="flex justify-between items-center pt-1 border-t border-[#DFE8EF] dark:border-[#1E334D]">
                <span className="text-[11px] text-[#64748B]">{t.q3Rubric}</span>
                <select
                  value={rubricScores.q3 || 0}
                  onChange={(e) => updateRubricScore('q3', parseInt(e.target.value, 10))}
                  className="text-xs px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                >
                  <option value={0}>0 / 2</option>
                  <option value={1}>1 / 2</option>
                  <option value={2}>2 / 2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Submission Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <Button
              onClick={() => setCompleted(true)}
              className="bg-[#0F766E] hover:bg-[#0D655E] text-white text-xs h-9 rounded-xl font-bold shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 mr-1.5" />
              {t.submitLab}
            </Button>
            {isCompleted && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {t.submittedMsg}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

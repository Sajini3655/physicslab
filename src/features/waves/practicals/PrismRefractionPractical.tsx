'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  RotateCcw,
  Database,
  Eye,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  GraduationCap,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import { calculatePrismRefractiveIndex } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface PrismRefractionPracticalProps {
  locale?: Locale;
}

export type PrismSubMode = 'exp20_mindev' | 'exp19_angle' | 'exp17_pin';

export const PrismRefractionPractical: React.FC<PrismRefractionPracticalProps> = ({
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
    experimentId: 'exp-20-prism-spectrometer',
    defaultMode: 'guided',
    defaultObservations: {
      subMode: 'exp20_mindev',
      turntableAngleDeg: '49.3', // turning point angle for minimum deviation
      prismAngleA: '60.00',
      prismAngleV1Face1: '145.20',
      prismAngleV1Face2: '265.24',
      prismAngleV2Face1: '325.18',
      prismAngleV2Face2: '85.22',
      minDevV1Deviated: '211.80',
      minDevV1Direct: '173.20',
      minDevV2Deviated: '31.78',
      minDevV2Direct: '353.18',
      pinTrials: [
        { id: 1, iDeg: '35.0', dDeg: '47.2' },
        { id: 2, iDeg: '40.0', dDeg: '42.5' },
        { id: 3, iDeg: '45.0', dDeg: '39.8' },
        { id: 4, iDeg: '49.3', dDeg: '38.6' },
        { id: 5, iDeg: '55.0', dDeg: '40.2' },
        { id: 6, iDeg: '60.0', dDeg: '43.1' },
      ],
    },
    defaultCalculations: {
      meanAngleA: '',
      meanMinDev: '',
      refractiveIndex: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  const subMode = (observations.subMode || 'exp20_mindev') as PrismSubMode;
  const setSubMode = (m: PrismSubMode) => updateObservations({ subMode: m });

  const turntableAngleDeg = observations.turntableAngleDeg || '49.3';
  const prismAngleA = observations.prismAngleA || '60.00';

  const prismAngleV1Face1 = observations.prismAngleV1Face1 || '145.20';
  const prismAngleV1Face2 = observations.prismAngleV1Face2 || '265.24';
  const prismAngleV2Face1 = observations.prismAngleV2Face1 || '325.18';
  const prismAngleV2Face2 = observations.prismAngleV2Face2 || '85.22';

  const minDevV1Deviated = observations.minDevV1Deviated || '212.80';
  const minDevV1Direct = observations.minDevV1Direct || '173.20';
  const minDevV2Deviated = observations.minDevV2Deviated || '32.78';
  const minDevV2Direct = observations.minDevV2Direct || '353.18';

  const pinTrials = observations.pinTrials || [
    { id: 1, iDeg: '35.0', dDeg: '47.2' },
    { id: 2, iDeg: '40.0', dDeg: '42.5' },
    { id: 3, iDeg: '45.0', dDeg: '39.8' },
    { id: 4, iDeg: '49.3', dDeg: '38.6' },
    { id: 5, iDeg: '55.0', dDeg: '40.2' },
    { id: 6, iDeg: '60.0', dDeg: '43.1' },
  ];

  const t = {
    en: {
      titleExp20: 'Practical 20: Determination of Angle of Minimum Deviation of a Prism & Refractive Index Using a Spectrometer',
      titleExp19: 'Practical 19: Adjustment of a Spectrometer & Determination of Angle of a Prism (A)',
      titleExp17: 'Practical 17: Determination of Angle of Minimum Deviation by Optical Pin Method',
      aimExp20: 'Aim: To adjust a spectrometer, identify the stationary turning point (minimum deviation position Dm) by rotating the prism table, record dual vernier angles for deviated and direct rays, and calculate the refractive index (n) of the prism.',
      aimExp19: 'Aim: To adjust a spectrometer for parallel light using Schuster’s method, level the prism turntable, reflect parallel light off both optical faces, read dual verniers (V1, V2), and determine the prism apex angle (A).',
      aimExp17: 'Aim: To trace ray paths through an equilateral glass prism using optical pins across angles of incidence i = 35°–60°, plot the i–D deviation curve, determine minimum deviation Dm, and compute refractive index n.',
      apparatus: 'Apparatus: Optical spectrometer, dense flint/crown glass equilateral 60° prism, monochromatic sodium vapor lamp (or incandescent slit illuminator), spirit level, reading magnifier lens.',
      tabExp20: 'Exp 20: Minimum Deviation (Spectrometer)',
      tabExp19: 'Exp 19: Prism Angle A (Spectrometer)',
      tabExp17: 'Exp 17: Pin Method (i–D Curve)',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Auto-Calculations)',
      independentMode: 'Independent Practice (Manual Entry & Diagnostic Check)',
      theoryTitle: 'Physical Principle & Spectrometer Optics',
      theoryExp20: 'As the prism turntable is slowly rotated in one direction, the deviated ray turns, halts momentarily at an extreme stationary turning point, and reverses direction. This stationary turning point is the position of minimum deviation:\n  Dm = |θ_deviated - θ_direct|\nAt minimum deviation, the ray passes symmetrically through the equilateral prism (r₁ = r₂ = A/2 and i₁ = i₂ = (A + Dm)/2).\nBy Snell’s law, the refractive index of the prism is:\n  n = sin((A + Dm) / 2) / sin(A / 2)\nFor crown glass, n is approximately 1.51 – 1.53.',
      theoryExp19: 'The spectrometer is levelled and focused for parallel rays using Schuster’s method.\nParallel light from the collimator strikes the apex of the prism and reflects off both polished optical faces. The angle between the two reflected beams is 2A:\n  2A = |θ_face1 - θ_face2|  ⟹  A = |θ_face1 - θ_face2| / 2\nDual diametrically opposite verniers (V1, V2, 180° apart) are averaged to eliminate eccentric circle scale errors.',
      theoryExp17: 'Light refracts through the prism obeying Snell’s law at both boundaries. The deviation D = (i₁ + i₂) - A.\nA plot of deviation D against angle of incidence i produces a characteristic parabolic curve with a distinct minimum at D = Dm where i₁ = i₂.\nAt this vertex, n = sin((A + Dm)/2) / sin(A/2).',
      procedureExp20: 'Procedure: 1. Place adjusted spectrometer on level table. 2. Mount prism with refracting edge facing away from collimator. 3. Turn telescope to view refracted slit image. 4. Slowly rotate prism table while tracking image until it stops and reverses. Lock table at turning point and align crosswire. 5. Read Vernier 1 and Vernier 2. 6. Remove prism, sight straight direct slit to obtain θ_direct. 7. Compute Dm and calculate n = sin((A + Dm)/2) / sin(A/2).',
      procedureExp19: 'Procedure: 1. Level prism table with spirit level. 2. Focus crosswire and collimator slit (Schuster method). 3. Place prism with apex pointing towards collimator slit. 4. Turn telescope to capture reflected slit from Face 1; read V1 and V2. 5. Turn telescope to capture reflected slit from Face 2; read V1 and V2. 6. Compute A = |θ_face1 - θ_face2| / 2.',
      turntableTitle: 'Spectrometer Turntable Rotation & Stationary Point Tracking',
      turntableSliderLabel: 'Turntable Rotation (Search for Stationary Point):',
      turningPointNotice: 'Stationary Reversal Point Reached! Deviated Ray Direction = 212.80° (Dm = 38.60°)',
      vernier1: 'Vernier 1 (360° scale)',
      vernier2: 'Vernier 2 (opposite 180°)',
      meanA: 'Mean Prism Angle (A):',
      meanDm: 'Mean Minimum Deviation (Dm):',
      calcRefractiveIndex: 'Calculated Refractive Index (n):',
      verdictPass: 'Refractive Index Within Crown Glass Range (1.50 – 1.56)',
      verdictFail: 'Check vernier subtraction or angle wraparound',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Experimental Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why does the refracted ray reverse its direction at the minimum deviation position?',
      q1Model: 'Model Answer: By the principle of optical reversibility, for every angle of deviation D > Dm there are two conjugate angles of incidence (i₁ and i₂). As the prism table rotates, the angle of incidence sweeps from i₁ through the symmetrical configuration i₁ = i₂ (where dD/di = 0), beyond which deviation increases again, causing the apparent image in the telescope to halt and reverse.',
      q1Rubric: 'Rubric: Award 1 mark for stationary turning condition dD/di = 0 / symmetrical ray passage; 1 mark for reversibility conjugate angles.',
      q2Title: '2. Why are two diametrically opposite verniers (V1 and V2) read on the spectrometer circular scale?',
      q2Model: 'Model Answer: The mechanical rotation axis of the telescope and prism table may not perfectly coincide with the geometric center of the graduated circular scale. Reading two verniers separated by 180° and taking their mean eliminates this eccentricity error.',
      q2Rubric: 'Rubric: Award 1 mark for axis of rotation not coinciding with scale center; 1 mark for eliminating eccentricity error by averaging 180° readings.',
      q3Title: '3. Explain how Schuster’s method focuses both collimator and telescope for parallel light without a distant object.',
      q3Model: 'Model Answer: Using an equilateral prism, the telescope is focused on the refracted slit near minimum deviation. The prism is turned to an incidence angle with a larger angle of refraction, and the telescope focus is adjusted to remove slit parallax. The prism is then turned to the other side and the collimator is adjusted. Repeating this process converges both optics to infinity.',
      q3Rubric: 'Rubric: Award 1 mark for iterative focus near and away from minimum deviation; 1 mark for converging telescope and collimator to parallel light without distant object.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      titleExp20: 'ප්‍රායෝගික පරීක්ෂණය 20: වර්ණාවලීමානය භාවිතයෙන් ප්‍රිස්මයක අවම අපගමන කෝණය සහ වර්තනාංකය සෙවීම',
      aimExp20: 'අරමුණ: වර්ණාවලීමානය සීරුමාරු කර, ප්‍රිස්ම මේසය කරකවමින් අවම අපගමන හැරවුම් ලක්ෂ්‍යය (Dm) හඳුනාගෙන, වර්නියර් පාඨාංක මගින් ප්‍රිස්මයේ වර්තනාංකය (n) සෙවීම.',
      titleExp19: 'ප්‍රායෝගික පරීක්ෂණය 19: වර්ණාවලීමානය සීරුමාරු කිරීම සහ ප්‍රිස්ම කෝණය (A) සෙවීම',
      aimExp19: 'අරමුණ: ෂූස්ටර් ක්‍රමයෙන් වර්ණාවලීමානය සමාන්තර ආලෝකයට සීරුමාරු කර, ප්‍රිස්මයේ මුහුණත් දෙකෙන්ම පරාවර්තිත කිරණ කියවා ප්‍රිස්ම කෝණය (A) සෙවීම.',
      titleExp17: 'ප්‍රායෝගික පරීක්ෂණය 17: දෘශ්‍ය අල්පෙනෙති ක්‍රමයෙන් අවම අපගමන කෝණය සෙවීම',
      aimExp17: 'අරමුණ: i = 35°–60° පරාසයේ පතන කෝණ සඳහා දෘශ්‍ය අල්පෙනෙති මගින් i–D අපගමන වක්‍රය ඇඳ අවම අපගමනය Dm සහ වර්තනාංකය n සෙවීම.',
      apparatus: 'උපකරණ: ප්‍රකාශ වර්ණාවලීමානය, සමපාද 60° ක්‍රවුන් වීදුරු ප්‍රිස්මය, ඒකවර්ණ සෝඩියම් ලාම්පුව, මට්ටම් නලය, විශාලක කාචය.',
      tabExp20: 'පරීක්ෂණ 20: අවම අපගමනය (වර්ණාවලීමානය)',
      tabExp19: 'පරීක්ෂණ 19: ප්‍රිස්ම කෝණය A (වර්ණාවලීමානය)',
      tabExp17: 'පරීක්ෂණ 17: අල්පෙනෙති ක්‍රමය (i–D වක්‍රය)',
      modeSelector: 'ඉගෙනුම් මාදිලිය:',
      guidedMode: 'මඟපෙන්වන මාදිලිය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (අතින් ගණනය සහ පරීක්ෂාව)',
      theoryTitle: 'භෞතික මූලධර්මය සහ වර්ණාවලීමාන ජ්‍යාමිතිය',
      theoryExp20: 'ප්‍රිස්ම මේසය එක් දිශාවකට කරකවන විට වර්තිත කිරණය එක පැත්තකට ගොස් නැවත හැරෙන තැනක් හමුවේ. එම හැරවුම් ලක්ෂ්‍යය අවම අපගමන පිහිටුමයි:\n  Dm = |θ_අපගමන - θ_සෘජු|\nඅවම අපගමනයේදී කිරණය සමමිතිකව ගමන් කරයි (r₁ = r₂ = A/2 සහ i₁ = i₂ = (A + Dm)/2).\nස්නෙල් නියමයෙන්:\n  n = sin((A + Dm) / 2) / sin(A / 2)\nක්‍රවුන් වීදුරු සඳහා n අගය සාමාන්‍යයෙන් 1.51 – 1.53 පමණ වේ.',
      theoryExp19: 'ෂූස්ටර් ක්‍රමයෙන් වර්ණාවලීමානය සීරුමාරු කර, සමාන්තර ආලෝකය ශීර්ෂය මත පතිත කර මුහුණත් දෙකෙන්ම පරාවර්තනය කරනු ලැබේ. පරාවර්තිත කිරණ අතර කෝණය 2A වේ:\n  2A = |θ_මුහුණත1 - θ_මුහුණත2|  ⟹  A = |θ_මුහුණත1 - θ_මුහුණත2| / 2\nවිකේන්ද්‍රික දෝෂ වැළැක්වීමට ප්‍රතිවිරුද්ධ වර්නියර් දෙකෙහිම (V1, V2) මධ්‍යන්‍යය ලබාගනී.',
      theoryExp17: 'ස්නෙල් නියමය අනුව අපගමනය D = (i₁ + i₂) - A වේ. i ට එදිරිව D ප්‍රස්ථාරගත කළ විට අවමයක් සහිත පරාවලයික වක්‍රයක් ලැබේ. එහි අවම ලක්ෂ්‍යයෙන් Dm ලබාගෙන n ගණනය කරයි.',
      procedureExp20: 'ක්‍රමවේදය: 1. ප්‍රිස්මය මේසය මත තබන්න. 2. දුරේක්ෂයෙන් වර්තිත සිදුර නිරීක්ෂණය කරන්න. 3. ප්‍රිස්ම මේසය කරකවා කිරණය නැවත හැරෙන අවම අපගමන පිහිටුම ලකුණු කරගන්න. 4. වර්නියර් 1 සහ 2 කියවන්න. 5. සෘජු කිරණයේ පාඨාංකය ගෙන Dm සහ n = sin((A+Dm)/2)/sin(A/2) ගණනය කරන්න.',
      procedureExp19: 'ක්‍රමවේදය: 1. මට්ටම් නලයෙන් මේසය තිරස් කරන්න. 2. ප්‍රිස්මයේ ශීර්ෂය සමාන්තරකාරකය දෙසට හරවන්න. 3. මුහුණත් දෙකෙන්ම පරාවර්තිත කිරණවල පිහිටුම් වර්නියර් 1 සහ 2 මගින් කියවා A = 2A/2 ගණනය කරන්න.',
      turntableTitle: 'වර්ණාවලීමාන මේසයේ භ්‍රමණය සහ හැරවුම් ලක්ෂ්‍යය සෙවීම',
      turntableSliderLabel: 'ප්‍රිස්ම මේසයේ කෝණය (හැරවුම් ලක්ෂ්‍යය සෙවීම):',
      turningPointNotice: 'අවම අපගමන හැරවුම් ලක්ෂ්‍යය හමුවිය! අපගමන කෝණය = 212.80° (Dm = 38.60°)',
      vernier1: 'වර්නියරය 1 (360° පරිමාණය)',
      vernier2: 'වර්නියරය 2 (ප්‍රතිවිරුද්ධ 180°)',
      meanA: 'මධ්‍යන්‍ය ප්‍රිස්ම කෝණය (A):',
      meanDm: 'මධ්‍යන්‍ය අවම අපගමනය (Dm):',
      calcRefractiveIndex: 'ගණනය කළ වර්තනාංකය (n):',
      verdictPass: 'ක්‍රවුන් වීදුරු පරාසය තුළ වර්තනාංකය සත්‍යාපනය විය (1.50 – 1.56)',
      verdictFail: 'කෝණ අන්තර හෝ වර්නියර් පරිමාණ කියවීම් පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ විසඳුම පෙන්වන්න',
      hideSolution: 'ආදර්ශ විසඳුම සඟවන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන් සහ ස්වයං ඇගයීම් රූබෘක',
      q1Title: '1. අවම අපගමන පිහිටුමේදී වර්තිත කිරණය නැවත හැරෙන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: ආලෝකයේ ප්‍රත්‍යාවර්ත්‍යතා මූලධර්මය අනුව D > Dm වූ සෑම අවස්ථාවකටම අනුබද්ධ පතන කෝණ දෙකක් (i₁ සහ i₂) පවතී. ප්‍රිස්මය කරකවන විට i₁ = i₂ වන සමමිතික අවම ලක්ෂ්‍යයේදී dD/di = 0 වන අතර ඉන් ඔබ්බට නැවතත් අපගමනය වැඩි වන බැවින් කිරණය ආපසු හැරේ.',
      q1Rubric: 'රූබෘකය: සමමිතික ගමන් මග / dD/di = 0 සඳහා ලකුණු 1; අනුබද්ධ පතන කෝණ සහ ආපසු හැරීම සඳහා ලකුණු 1.',
      q2Title: '2. වර්ණාවලීමානයේ ප්‍රතිවිරුද්ධ වර්නියර් දෙකක් (V1 සහ V2) කියවන්නේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: දුරේක්ෂයේ භ්‍රමණ අක්ෂය අංශක පරිමාණයේ ජ්‍යාමිතික කේන්ද්‍රය සමඟ පරිපූර්ණව සමපාත නොවිය හැක. අංශක 180 කින් වෙන්වූ වර්නියර් දෙකක් කියවා මධ්‍යන්‍යය ගැනීමෙන් මෙම විකේන්ද්‍රික දෝෂය සම්පූර්ණයෙන්ම ඉවත් වේ.',
      q2Rubric: 'රූබෘකය: භ්‍රමණ අක්ෂය සහ කේන්ද්‍රය සමපාත නොවීම සඳහා ලකුණු 1; විකේන්ද්‍රික දෝෂය ඉවත් කිරීම සඳහා ලකුණු 1.',
      q3Title: '3. දුරස්ථ වස්තුවක් නොමැතිව ෂූස්ටර් ක්‍රමයෙන් සමාන්තර ආලෝකයට සීරුමාරු කරන්නේ කෙසේද?',
      q3Model: 'ආදර්ශ පිළිතුර: සමපාද ප්‍රිස්මය යොදාගෙන අවම අපගමනය ආසන්නයේදී දුරේක්ෂය කිරණයට යොමු කර තියුණු කරයි. ඉන්පසු වර්තන කෝණය වැඩි වන සේ ප්‍රිස්මය හරවා දුරේක්ෂයද, අනෙක් පසට හරවා සමාන්තරකාරකයද සීරුමාරු කරමින් අනන්තයට නාභිගත කරනු ලැබේ.',
      q3Rubric: 'රූබෘකය: අවම අපගමනය ආසන්නයේ සහ දෙපසට හරවමින් සීරුමාරු කිරීම සඳහා ලකුණු 1; ක්‍රමිකව සමාන්තර ආලෝකයට පැමිණීම සඳහා ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය',
    },
  }[locale];

  const angleDiff = (a: number, b: number) => {
    let diff = Math.abs(a - b);
    if (diff > 180) diff = 360 - diff;
    return diff;
  };

  // Calculations: Prism Angle (A)
  const v1f1 = parseFloat(prismAngleV1Face1) || 0;
  const v1f2 = parseFloat(prismAngleV1Face2) || 0;
  const diffV1 = angleDiff(v1f1, v1f2);
  const aV1 = diffV1 / 2;

  const v2f1 = parseFloat(prismAngleV2Face1) || 0;
  const v2f2 = parseFloat(prismAngleV2Face2) || 0;
  const diffV2 = angleDiff(v2f1, v2f2);
  const aV2 = diffV2 / 2;

  const meanA = (aV1 + aV2) / 2;

  // Calculations: Minimum Deviation (Dm)
  const dmV1dev = parseFloat(minDevV1Deviated) || 0;
  const dmV1dir = parseFloat(minDevV1Direct) || 0;
  const dmV1 = angleDiff(dmV1dev, dmV1dir);

  const dmV2dev = parseFloat(minDevV2Deviated) || 0;
  const dmV2dir = parseFloat(minDevV2Direct) || 0;
  const dmV2 = angleDiff(dmV2dev, dmV2dir);

  const meanDm = (dmV1 + dmV2) / 2;

  // Refractive index calculation using A from Exp 19 and Dm from Exp 20
  const activeA = parseFloat(prismAngleA) || meanA || 60.0;
  const refractiveIndex =
    activeA > 0 && meanDm > 0 ? calculatePrismRefractiveIndex(activeA, meanDm) : 0;
  const isPass = refractiveIndex >= 1.50 && refractiveIndex <= 1.56;

  const handleLoadSample = () => {
    loadSampleObservations({
      subMode: subMode,
      turntableAngleDeg: '49.3',
      prismAngleA: '60.00',
      prismAngleV1Face1: '145.20',
      prismAngleV1Face2: '265.24',
      prismAngleV2Face1: '325.18',
      prismAngleV2Face2: '85.22',
      minDevV1Deviated: '211.80',
      minDevV1Direct: '173.20',
      minDevV2Deviated: '31.78',
      minDevV2Direct: '353.18',
    });
  };

  const handleClear = () => {
    reset();
  };

  const handleCheckIndependent = () => {
    const userA = parseFloat(calculations.meanAngleA || '') || 0;
    const userDm = parseFloat(calculations.meanMinDev || '') || 0;
    const userN = parseFloat(calculations.refractiveIndex || '') || 0;

    const diffN = Math.abs(userN - refractiveIndex);
    const diffDm = Math.abs(userDm - meanDm);
    const diffA = Math.abs(userA - meanA);
    const isValid = diffN <= 0.02 && (diffDm <= 0.5 || userDm === 0) && (diffA <= 0.5 || userA === 0);

    setCalculationCheck(
      { refractiveIndex: isValid },
      {
        refractiveIndex: {
          en: isValid
            ? `Correct! Minimum deviation Dm = ${meanDm.toFixed(2)}° and refractive index n = ${refractiveIndex.toFixed(3)}.`
            : `Calculated values deviate. Expected Dm ≈ ${meanDm.toFixed(2)}°, n ≈ ${refractiveIndex.toFixed(3)}. Verify angle difference and formula n = sin((A+Dm)/2)/sin(A/2).`,
          si: isValid
            ? `නිවැරදියි! අවම අපගමනය Dm = ${meanDm.toFixed(2)}° සහ වර්තනාංකය n = ${refractiveIndex.toFixed(3)} වේ.`
            : `ගණනය කළ අගයන් අපගමනය වේ. අපේක්ෂිත Dm ≈ ${meanDm.toFixed(2)}°, n ≈ ${refractiveIndex.toFixed(3)}. කෝණ අන්තරය සහ සමීකරණය පරීක්ෂා කරන්න.`,
        },
      }
    );
  };

  const titleText =
    subMode === 'exp20_mindev'
      ? t.titleExp20
      : subMode === 'exp19_angle'
      ? t.titleExp19
      : t.titleExp17;

  const aimText =
    subMode === 'exp20_mindev'
      ? t.aimExp20
      : subMode === 'exp19_angle'
      ? t.aimExp19
      : t.aimExp17;

  const theoryText =
    subMode === 'exp20_mindev'
      ? t.theoryExp20
      : subMode === 'exp19_angle'
      ? t.theoryExp19
      : t.theoryExp17;

  const procedureText =
    subMode === 'exp20_mindev'
      ? t.procedureExp20
      : t.procedureExp19;

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {titleText}
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
            {aimText}
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
            <p className="whitespace-pre-line text-xs font-sans">{theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">{procedureText}</p>
        </CardContent>
      </Card>

      {/* Main Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Sub-mode navigation pills */}
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'exp20_mindev' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('exp20_mindev')}
            >
              <Eye className="w-3.5 h-3.5 mr-1" />
              {t.tabExp20}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'exp19_angle' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('exp19_angle')}
            >
              <Compass className="w-3.5 h-3.5 mr-1" />
              {t.tabExp19}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'exp17_pin' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('exp17_pin')}
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              {t.tabExp17}
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
          {/* Spectrometer Schematic Diagram */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex flex-col items-center">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
              <circle cx="170" cy="90" r="65" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="170" cy="90" r="50" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

              {/* Collimator fixed at left */}
              <rect x="20" y="85" width="85" height="10" fill="#475569" rx="1" />
              <rect x="15" y="82" width="10" height="16" fill="#1E293B" rx="1" />
              <text x="60" y="80" textAnchor="middle" fontSize="8" fill="#475569" fontWeight="bold">
                Collimator
              </text>

              {/* Prism at turntable center */}
              <polygon
                points="170,68 150,103 190,103"
                fill="#93C5FD"
                fillOpacity="0.7"
                stroke="#2563EB"
                strokeWidth="1.5"
              />
              <text x="170" y="93" textAnchor="middle" fontSize="8" fill="#1D4ED8" fontWeight="bold">
                Prism (A)
              </text>

              {/* Rays */}
              <line x1="105" y1="90" x2="160" y2="85" stroke="#F59E0B" strokeWidth="1.5" />
              <line x1="160" y1="85" x2="230" y2="40" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="160" y1="85" x2="245" y2="120" stroke="#F59E0B" strokeWidth="1.5" />

              {/* Telescope arm */}
              <g transform="rotate(35 170 90)">
                <rect x="235" y="85" width="80" height="10" fill="#334155" rx="1" />
                <rect x="310" y="82" width="10" height="16" fill="#0F172A" rx="1" />
                <text x="275" y="80" textAnchor="middle" fontSize="8" fill="#334155" fontWeight="bold">
                  Telescope
                </text>
              </g>

              {/* Dual Vernier readouts */}
              <rect x="160" y="160" width="20" height="10" fill="#0F766E" rx="1" />
              <text x="170" y="168" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontWeight="bold">
                V1
              </text>
              <rect x="160" y="10" width="20" height="10" fill="#0F766E" rx="1" />
              <text x="170" y="18" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontWeight="bold">
                V2
              </text>
            </svg>

            {/* Turntable interactive rotation slider for Exp 20 */}
            {subMode === 'exp20_mindev' && (
              <div className="w-full max-w-md pt-3 space-y-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-[#14243A] dark:text-[#F8FAFC]">
                    {t.turntableSliderLabel}
                  </span>
                  <span className="font-mono text-[#0F766E] dark:text-[#14B8A6] font-bold">
                    {parseFloat(turntableAngleDeg).toFixed(1)}°
                  </span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="65"
                  step="0.1"
                  value={turntableAngleDeg}
                  onChange={(e) => updateObservations({ turntableAngleDeg: e.target.value })}
                  className="w-full accent-[#0F766E]"
                />
                <div className="p-2.5 rounded-lg text-xs font-medium text-center bg-emerald-50 text-emerald-800 border border-emerald-300">
                  {t.turningPointNotice}
                </div>
              </div>
            )}
          </div>

          {/* Section 1: Exp 19 Prism Apex Angle (A) */}
          {(subMode === 'exp19_angle' || subMode === 'exp20_mindev') && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {subMode === 'exp19_angle' ? '1. ' : ''}Determination of Prism Apex Angle (A)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans">
                    {t.vernier1}
                  </span>
                  <div className="flex justify-between items-center">
                    <span>θ_face1 (°):</span>
                    <input
                      type="text"
                      value={prismAngleV1Face1}
                      onChange={(e) => updateObservations({ prismAngleV1Face1: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>θ_face2 (°):</span>
                    <input
                      type="text"
                      value={prismAngleV1Face2}
                      onChange={(e) => updateObservations({ prismAngleV1Face2: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#0F766E]">
                    <span>A₁ = 2A / 2:</span>
                    <span>{aV1.toFixed(2)}°</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                  <span className="font-bold text-[#3B82F6] block font-sans">{t.vernier2}</span>
                  <div className="flex justify-between items-center">
                    <span>θ_face1 (°):</span>
                    <input
                      type="text"
                      value={prismAngleV2Face1}
                      onChange={(e) => updateObservations({ prismAngleV2Face1: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>θ_face2 (°):</span>
                    <input
                      type="text"
                      value={prismAngleV2Face2}
                      onChange={(e) => updateObservations({ prismAngleV2Face2: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#3B82F6]">
                    <span>A₂ = 2A / 2:</span>
                    <span>{aV2.toFixed(2)}°</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
                {t.meanA} {meanA.toFixed(2)}°
              </div>
            </div>
          )}

          {/* Section 2: Exp 20 Minimum Deviation (Dm) */}
          {(subMode === 'exp20_mindev') && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                Determination of Angle of Minimum Deviation (Dm)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans">
                    {t.vernier1}
                  </span>
                  <div className="flex justify-between items-center">
                    <span>θ_deviated (°):</span>
                    <input
                      type="text"
                      value={minDevV1Deviated}
                      onChange={(e) => updateObservations({ minDevV1Deviated: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>θ_direct (°):</span>
                    <input
                      type="text"
                      value={minDevV1Direct}
                      onChange={(e) => updateObservations({ minDevV1Direct: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#0F766E]">
                    <span>Dm₁ = |θ_dev - θ_dir|:</span>
                    <span>{dmV1.toFixed(2)}°</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                  <span className="font-bold text-[#3B82F6] block font-sans">{t.vernier2}</span>
                  <div className="flex justify-between items-center">
                    <span>θ_deviated (°):</span>
                    <input
                      type="text"
                      value={minDevV2Deviated}
                      onChange={(e) => updateObservations({ minDevV2Deviated: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>θ_direct (°):</span>
                    <input
                      type="text"
                      value={minDevV2Direct}
                      onChange={(e) => updateObservations({ minDevV2Direct: e.target.value })}
                      className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#3B82F6]">
                    <span>Dm₂ = |θ_dev - θ_dir|:</span>
                    <span>{dmV2.toFixed(2)}°</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs font-mono font-bold text-[#3B82F6]">
                {t.meanDm} {meanDm.toFixed(2)}°
              </div>
            </div>
          )}

          {/* Section 3: Exp 17 Pin Method i-D curve */}
          {subMode === 'exp17_pin' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                Optical Pin Method Observations: Angle of Incidence (i) vs Deviation (D)
              </span>
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#475569] dark:text-[#94A3B8]">
                    <tr>
                      <th className="p-3 text-center">Trial</th>
                      <th className="p-3 text-center">Incidence Angle i (°)</th>
                      <th className="p-3 text-center">Deviation Angle D (°)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D] bg-white dark:bg-[#111D2D]">
                    {pinTrials.map((pt: { id: number; iDeg: string; dDeg: string }) => (
                      <tr key={pt.id}>
                        <td className="p-3 text-center font-bold">{pt.id}</td>
                        <td className="p-2 text-center">{pt.iDeg}°</td>
                        <td className="p-2 text-center font-bold text-[#0F766E]">{pt.dDeg}°</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Analytical Summary */}
          <div className="p-4 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-4">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block font-sans">
              Analytical Results & Physical Benchmark
            </span>

            {mode === 'guided' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">{t.meanA}</span>
                  <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {meanA.toFixed(2)}°
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">{t.meanDm}</span>
                  <span className="text-base font-bold text-[#3B82F6]">
                    {meanDm.toFixed(2)}°
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#111D2D] rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
                  <span className="text-[#64748B] block text-[11px] font-sans">
                    {t.calcRefractiveIndex}
                  </span>
                  <span className="text-base font-bold text-[#059669]">
                    {refractiveIndex.toFixed(3)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-[11px] text-[#475569] dark:text-[#94A3B8] font-sans block mb-1">
                      {t.meanDm}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 38.60"
                      value={calculations.meanMinDev || ''}
                      onChange={(e) => updateCalculation('meanMinDev', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#475569] dark:text-[#94A3B8] font-sans block mb-1">
                      {t.calcRefractiveIndex}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.517"
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

                {calculationFeedback && calculationFeedback.refractiveIndex && (
                  <div
                    className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 ${
                      calculationResults?.refractiveIndex
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {calculationResults?.refractiveIndex ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <span>{calculationFeedback.refractiveIndex[locale]}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] text-xs">
              <span className="text-[#64748B]">
                Formula: n = sin((A + Dm)/2) / sin(A/2)
              </span>
              <span
                className={`font-bold flex items-center gap-1 ${
                  isPass ? 'text-[#059669]' : 'text-[#DC2626]'
                }`}
              >
                {isPass ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                {isPass ? t.verdictPass : t.verdictFail}
              </span>
            </div>
          </div>

          {/* Precautions & Rubrics */}
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

          {/* Submission Bar */}
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

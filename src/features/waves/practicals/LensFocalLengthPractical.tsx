'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  RotateCcw,
  Database,
  Scan,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  GraduationCap,
  HelpCircle,
  AlertTriangle,
  Printer,
  Eye,
} from 'lucide-react';
import {
  calculateLensFocalLengthDisplacement,
  calculateThinLensNoParallax,
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface LensFocalLengthPracticalProps {
  locale?: Locale;
}

interface ConvexNoParallaxTrial {
  id: number;
  distUCm: string;
  distVCm: string;
}

interface ConvexDisplacementTrial {
  id: number;
  screenDistDCm: string;
  lensPos1Cm: string;
  lensPos2Cm: string;
}

interface ConcaveLensTrial {
  id: number;
  virtualDistUCm: string;
  realDistVCm: string;
}

export const LensFocalLengthPractical: React.FC<LensFocalLengthPracticalProps> = ({
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
    experimentId: 'exp-21-lens',
    defaultMode: 'guided',
    defaultObservations: {
      subMode: 'convex_noparallax',
      nominalFocalLengthCm: '15.0',
      nominalConcaveFocalLengthCm: '30.0',
      convexNoParallaxTrials: [
        { id: 1, distUCm: '25.0', distVCm: '37.5' },
        { id: 2, distUCm: '30.0', distVCm: '30.0' },
        { id: 3, distUCm: '40.0', distVCm: '24.0' },
        { id: 4, distUCm: '50.0', distVCm: '21.4' },
        { id: 5, distUCm: '60.0', distVCm: '20.0' },
      ],
      convexTrials: [
        { id: 1, screenDistDCm: '80.0', lensPos1Cm: '20.0', lensPos2Cm: '60.0' },
        { id: 2, screenDistDCm: '85.0', lensPos1Cm: '19.2', lensPos2Cm: '65.8' },
        { id: 3, screenDistDCm: '90.0', lensPos1Cm: '18.7', lensPos2Cm: '71.3' },
        { id: 4, screenDistDCm: '95.0', lensPos1Cm: '18.3', lensPos2Cm: '76.7' },
        { id: 5, screenDistDCm: '100.0', lensPos1Cm: '18.0', lensPos2Cm: '82.0' },
      ],
      concaveTrials: [
        { id: 1, virtualDistUCm: '15.0', realDistVCm: '30.0' },
        { id: 2, virtualDistUCm: '18.0', realDistVCm: '45.0' },
        { id: 3, virtualDistUCm: '20.0', realDistVCm: '60.0' },
        { id: 4, virtualDistUCm: '22.0', realDistVCm: '82.5' },
      ],
    },
    defaultCalculations: {
      meanFocalLength: '',
    },
  });

  const [showSolution, setShowSolution] = useState(false);

  // Normalise subMode: if legacy 'convex', map to 'convex_noparallax'
  const rawSubMode = observations.subMode || 'convex_noparallax';
  const subMode: 'convex_noparallax' | 'convex_displacement' | 'concave' =
    rawSubMode === 'convex' ? 'convex_noparallax' : (rawSubMode as 'convex_noparallax' | 'convex_displacement' | 'concave');

  const setSubMode = (m: 'convex_noparallax' | 'convex_displacement' | 'concave') =>
    updateObservations({ subMode: m });

  const nominalFocalLengthCm = observations.nominalFocalLengthCm || '15.0';
  const nominalConcaveFocalLengthCm = observations.nominalConcaveFocalLengthCm || '30.0';

  const convexNoParallaxTrials: ConvexNoParallaxTrial[] =
    observations.convexNoParallaxTrials || [
      { id: 1, distUCm: '25.0', distVCm: '37.5' },
      { id: 2, distUCm: '30.0', distVCm: '30.0' },
      { id: 3, distUCm: '40.0', distVCm: '24.0' },
      { id: 4, distUCm: '50.0', distVCm: '21.4' },
      { id: 5, distUCm: '60.0', distVCm: '20.0' },
    ];

  const convexTrials: ConvexDisplacementTrial[] =
    observations.convexTrials || [
      { id: 1, screenDistDCm: '80.0', lensPos1Cm: '20.0', lensPos2Cm: '60.0' },
      { id: 2, screenDistDCm: '85.0', lensPos1Cm: '19.2', lensPos2Cm: '65.8' },
      { id: 3, screenDistDCm: '90.0', lensPos1Cm: '18.7', lensPos2Cm: '71.3' },
      { id: 4, screenDistDCm: '95.0', lensPos1Cm: '18.3', lensPos2Cm: '76.7' },
      { id: 5, screenDistDCm: '100.0', lensPos1Cm: '18.0', lensPos2Cm: '82.0' },
    ];

  const concaveTrials: ConcaveLensTrial[] =
    observations.concaveTrials || [
      { id: 1, virtualDistUCm: '15.0', realDistVCm: '30.0' },
      { id: 2, virtualDistUCm: '18.0', realDistVCm: '45.0' },
      { id: 3, virtualDistUCm: '20.0', realDistVCm: '60.0' },
      { id: 4, virtualDistUCm: '22.0', realDistVCm: '82.5' },
    ];

  const t = {
    en: {
      title: 'Practical 21.1 & 21.2: Determination of Focal Lengths of Convex and Concave Lenses',
      aim: 'Aim: To determine the focal length of a convex lens by the official no-parallax method using optical pins and the displacement method (Exp 21.1), and a concave lens using an auxiliary convex lens combination with no-parallax (Exp 21.2).',
      apparatus: 'Apparatus: Optical bench with uprights, optical pins (object pin & search pin), biconvex lens, biconcave lens, illuminated object gauze, receiving screen, metre scale.',
      modeConvexNoParallax: '21.1 Convex (No-Parallax Optical Pin Method)',
      modeConvexDisplacement: '21.1 Convex (Displacement Method: f = (D² - d²)/4D)',
      modeConcave: '21.2 Concave (Auxiliary Lens No-Parallax)',
      theoryTitleConvexNoParallax: 'Convex Lens No-Parallax Method (Official Exp 21.1)',
      theoryTextConvexNoParallax: 'An object pin O is placed at distance u in front of a convex lens (u > f). An inverted real image I is formed on the opposite side. A search pin P is adjusted along the bench until there is no parallax between P and the inverted image tip.\nFrom thin lens formula: 1/v - (-1/u) = 1/f ⇒ 1/f = 1/v + 1/u ⇒ f = (u · v) / (u + v).',
      theoryTitleConvexDisplacement: 'Convex Lens Displacement Method (Supplementary Exp 21.1)',
      theoryTextConvexDisplacement: 'When screen distance D > 4f, two lens positions produce sharp real images on the screen. Let displacement between positions be d = |x₂ - x₁|. The focal length is given by: f = (D² - d²) / (4D). Eliminates index error and bench centering deviations.',
      theoryTitleConcave: 'Concave Lens Auxiliary Lens Combination (Official Exp 21.2)',
      theoryTextConcave: 'A concave lens alone produces virtual images and cannot project onto a screen or be aligned with a physical search pin directly. An auxiliary convex lens L₁ forms a real image I₁ of object pin O (located using no-parallax).\nInserting concave lens L₂ between L₁ and I₁ makes I₁ act as a virtual object at distance u from L₂.\nThe diverging lens shifts the real image to I₂, located by search pin with no-parallax at distance v from L₂.\nFormula: 1/v - 1/u = 1/f₂ ⇒ |f₂| = (u · v) / (v - u).',
      procedureConvexNoParallax: 'Procedure: 1. Estimate f by distant window imaging. 2. Place object pin O at u > f. 3. Look through lens from opposite side, move search pin P until its tip aligns with the inverted image tip without parallax when moving the eye sideways. 4. Record u and v; compute f = (uv)/(u+v).',
      procedureConvexDisplacement: 'Procedure: 1. Set screen distance D > 4f (e.g. 80 cm). 2. Move lens to find magnified sharp image at x₁, then diminished sharp image at x₂. 3. Record displacement d = |x₂ - x₁| and compute f = (D² - d²)/(4D).',
      procedureConcave: 'Procedure: 1. Focus illuminated pin with auxiliary convex lens to form real image I₁; locate position using search pin no-parallax. 2. Place concave lens between convex lens and I₁; measure distance u from concave lens to I₁. 3. Move search pin away to locate new real image I₂ with no-parallax; measure distance v from concave lens to I₂. 4. Compute |f₂| = (u·v)/(v - u).',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      obsConvexNoParallaxTitle: 'Convex Lens No-Parallax Observations: Object Distance u & Image Distance v',
      obsConvexDisplacementTitle: 'Convex Lens Displacement Observations: (D² - d²)/(4D)',
      obsConcaveTitle: 'Concave Lens Observations: Virtual Object Distance u & Real Image Distance v',
      trialCol: 'Trial',
      uCol: 'Object Distance u (cm)',
      vCol: 'Image Distance v (cm)',
      recipUCol: '1/u (cm⁻¹)',
      recipVCol: '1/v (cm⁻¹)',
      focalCol: 'Focal Length f (cm)',
      screenDistCol: 'Screen Distance D (cm)',
      pos1Col: 'Lens Position 1 x₁ (cm)',
      pos2Col: 'Lens Position 2 x₂ (cm)',
      dispCol: 'Displacement d (cm)',
      virtualDistCol: 'Virtual Object Distance u (cm)',
      realDistCol: 'Real Image Distance v (cm)',
      concaveFocalCol: 'Focal Length |f₂| (cm)',
      calcSummaryTitle: 'Analytical Summary & Benchmark Verification',
      meanFocalConvex: 'Mean Convex Focal Length (f):',
      meanFocalConcave: 'Mean Concave Focal Length (|f₂|):',
      nominalFocal: 'Nominal Benchmark Focal Length:',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Focal Length Verified Within Standard Tolerances (< 3.0%)',
      verdictFail: 'Check Conjugate Positions or Alignment',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. How is the no-parallax condition identified between the search pin and the optical image?',
      q1Model: 'Model Answer: When moving the eye sideways from left to right, the tip of the inverted real image and the tip of the search pin must remain exactly coincident with zero relative lateral shift. If they shift relative to each other, parallax exists and the search pin must be moved along the bench.',
      q1Rubric: 'Rubric: Award 1 mark for moving eye sideways / zero relative shift; 1 mark for tip-to-tip lateral coincidence.',
      q2Title: '2. Why cannot the focal length of a concave lens be determined directly using optical pins alone?',
      q2Model: 'Model Answer: A concave lens is a diverging element that forms only virtual, diminished images for any real object. Since virtual rays diverge from behind the lens, a physical search pin cannot be co-located in space with the image without an auxiliary converging lens creating a virtual object.',
      q2Rubric: 'Rubric: Award 1 mark for diverging lens / virtual image only; 1 mark for physical pin cannot coincide with virtual image in real space.',
      q3Title: '3. In the convex lens displacement method, why must screen separation D strictly exceed 4f?',
      q3Model: 'Model Answer: From the conjugate foci lens equation u + v = D and uv = fD, solving for u gives u² - Du + fD = 0. The discriminant Δ = D(D - 4f) must be ≥ 0 for real roots. If D < 4f, the discriminant is negative, meaning no real image can be formed on the screen at any lens position.',
      q3Rubric: 'Rubric: Award 1 mark for discriminant Δ = D(D - 4f) ≥ 0; 1 mark for imaginary roots / no real image when D < 4f.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 21.1 සහ 21.2: උත්තල සහ අවතල කාචවල නාභීය දුර නිර්ණය කිරීම',
      aim: 'අරමුණ: දෘෂ්ටි විලාස වැළැක්වීමේ ක්‍රමයෙන් සහ විස්ථාපන ක්‍රමයෙන් උත්තල කාචයක නාභීය දුර සෙවීම (21.1) සහ ආධාරක උත්තල කාචයක් භාවිතයෙන් අවතල කාචයක නාභීය දුර සෙවීම (21.2).',
      apparatus: 'උපකරණ: ප්‍රකාශ බංකුව, ප්‍රකාශ කූරු (වස්තු කූර සහ සෙවුම් කූර), උත්තල කාචය, අවතල කාචය, ආලෝකමත් වස්තුව (කම්බි දැල), සුදු තිරය, මීටර් රූල.',
      modeConvexNoParallax: '21.1 උත්තල කාචය (දෘෂ්ටි විලාස වැළැක්වීමේ කූරු ක්‍රමය)',
      modeConvexDisplacement: '21.1 උත්තල කාචය (විස්ථාපන ක්‍රමය: f = (D² - d²)/4D)',
      modeConcave: '21.2 අවතල කාචය (ආධාරක කාච සංයෝජනය)',
      theoryTitleConvexNoParallax: 'උත්තල කාච දෘෂ්ටි විලාස වැළැක්වීමේ ක්‍රමය (නිල පරීක්ෂණ 21.1)',
      theoryTextConvexNoParallax: 'උත්තල කාචයක් ඉදිරියෙන් u > f වන සේ වස්තු කූර O තැබූ විට අනෙක් පසින් යටිකුරු තාත්වික ප්‍රතිබිම්බයක් සෑදේ. සෙවුම් කූර P සහ ප්‍රතිබිම්බ තුඩ අතර දෘෂ්ටි විලාසය ඉවත් වන සේ P සකස් කරයි.\nකාච සූත්‍රය: 1/v - (-1/u) = 1/f ⇒ 1/f = 1/v + 1/u ⇒ f = (u · v) / (u + v).',
      theoryTitleConvexDisplacement: 'උත්තල කාච විස්ථාපන ක්‍රමය (අතිරේක පරීක්ෂණ 21.1)',
      theoryTextConvexDisplacement: 'D > 4f වන විට තිරය මත තියුණු ප්‍රතිබිම්බ ලැබෙන කාච පිහිටුම් දෙකක් පවතී. පිහිටුම් අතර විස්ථාපනය d = |x₂ - x₁| නම් නාභීය දුර f = (D² - d²) / (4D) වේ.',
      theoryTitleConcave: 'අවතල කාච ආධාරක කාච සංයෝජන ක්‍රමය (නිල පරීක්ෂණ 21.2)',
      theoryTextConcave: 'අවතල කාචයකින් තනිව තිරයක් මත තාත්වික ප්‍රතිබිම්බ සෑදිය නොහැක. ආධාරක උත්තල කාචයකින් සාදන තාත්වික ප්‍රතිබිම්බය I₁ අවතල කාචයට අතාත්වික වස්තුවක් (දුර u) වේ. සෙවුම් කූර මගින් නව තාත්වික ප්‍රතිබිම්බය I₂ (දුර v) ලබාගනී. 1/v - 1/u = 1/f₂ ⟹ |f₂| = (u × v) / (v - u).',
      procedureConvexNoParallax: 'ක්‍රමවේදය: 1. දළ නාභීය දුර සොයාගන්න. 2. u > f වන සේ වස්තු කූර තබන්න. 3. අනෙක් පසින් බලමින් ඇස දෙපසට චලනය කර දෘෂ්ටි විලාසය ඉවත් වන සේ සෙවුම් කූර P පිහිටුවන්න. 4. u සහ v මැන f = (uv)/(u+v) ගණනය කරන්න.',
      procedureConvexDisplacement: 'ක්‍රමවේදය: 1. D > 4f වන සේ තිරය තබන්න. 2. කාච පිහිටුම් x₁ සහ x₂ සටහන් කර d = |x₂ - x₁| ලබාගන්න. 3. f = (D² - d²)/(4D) ගණනය කරන්න.',
      procedureConcave: 'ක්‍රමවේදය: 1. ආධාරක උත්තල කාචයෙන් තාත්වික ප්‍රතිබිම්බය I₁ ලබාගෙන සෙවුම් කූරෙන් පිහිටුම සටහන් කරන්න. 2. අවතල කාචය අතරට තබා දුර u මනින්න. 3. නව ප්‍රතිබිම්බය I₂ සෙවුම් කූරෙන් ලබාගෙන දුර v මනින්න. 4. |f₂| = (uv)/(v - u) ගණනය කරන්න.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      obsConvexNoParallaxTitle: 'උත්තල කාච දෘෂ්ටි විලාස නිරීක්ෂණ: වස්තු දුර u සහ ප්‍රතිබිම්බ දුර v',
      obsConvexDisplacementTitle: 'උත්තල කාච විස්ථාපන නිරීක්ෂණ: (D² - d²)/(4D)',
      obsConcaveTitle: 'අවතල කාච නිරීක්ෂණ: අතාත්වික වස්තු දුර u සහ තාත්වික ප්‍රතිබිම්බ දුර v',
      trialCol: 'වාරය',
      uCol: 'වස්තු දුර u (cm)',
      vCol: 'ප්‍රතිබිම්බ දුර v (cm)',
      recipUCol: '1/u (cm⁻¹)',
      recipVCol: '1/v (cm⁻¹)',
      focalCol: 'නාභීය දුර f (cm)',
      screenDistCol: 'තිර දුර D (cm)',
      pos1Col: 'කාච පිහිටුම 1 x₁ (cm)',
      pos2Col: 'කාච පිහිටුම 2 x₂ (cm)',
      dispCol: 'විස්ථාපනය d (cm)',
      virtualDistCol: 'අතාත්වික වස්තු දුර u (cm)',
      realDistCol: 'තාත්වික ප්‍රතිබිම්බ දුර v (cm)',
      concaveFocalCol: 'නාභීය දුර |f₂| (cm)',
      calcSummaryTitle: 'විශ්ලේෂණ සාරාංශය සහ සත්‍යාපනය',
      meanFocalConvex: 'මධ්‍යන්‍ය උත්තල නාභීය දුර (f):',
      meanFocalConcave: 'මධ්‍යන්‍ය අවතල නාභීය දුර (|f₂|):',
      nominalFocal: 'නාමික නාභීය දුර:',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'නාභීය දුර සම්මත සීමාවන් තුළ සත්‍යාපනය විය (< 3.0%)',
      verdictFail: 'කාච පිහිටුම් හෝ අනුබද්ධ ලක්ෂ්‍ය පරීක්ෂා කරන්න',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන් සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. සෙවුම් කූර සහ ප්‍රකාශ ප්‍රතිබිම්බය අතර දෘෂ්ටි විලාසය ඉවත් වූ බව හඳුනා ගන්නේ කෙසේද?',
      q1Model: 'ආදර්ශ පිළිතුර: ඇස දෙපසට (වමේ සිට දකුණට) චලනය කිරීමේදී, යටිකුරු ප්‍රතිබිම්බ තුඩ සහ සෙවුම් කූරේ තුඩ එකිනෙකට සාපේක්ෂව චලනය නොවී එකම රේඛාවේ රැඳී තිබේ නම් දෘෂ්ටි විලාසය ඉවත් වී ඇත.',
      q1Rubric: 'රූබ්රිකය: ඇස දෙපසට චලනය කිරීම/සාපේක්ෂ චලනයක් නොමැති වීමට ලකුණු 1; තුඩට තුඩ සමපාත වීමට ලකුණු 1.',
      q2Title: '2. ප්‍රකාශ කූරු පමණක් යොදාගෙන අවතල කාචයක නාභීය දුර සෘජුව නිර්ණය කළ නොහැක්කේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: අවතල කාචයක් අපසාරී කාචයක් බැවින් තාත්වික වස්තු සඳහා සෑමවිටම අතාත්වික ප්‍රතිබිම්බ පමණක් සාදයි. අතාත්වික කිරණ අවකාශයේ සැබවින් ඡේදනය නොවන බැවින් ආධාරක අභිසාරී කාචයක් නොමැතිව භෞතික සෙවුම් කූරක් ප්‍රතිබිම්බය මත තැබිය නොහැක.',
      q2Rubric: 'රූබ්රිකය: අපසාරී/අතාත්වික ප්‍රතිබිම්බ සෑදීමට ලකුණු 1; භෞතික කූරක් අතාත්වික ලක්ෂ්‍යයකට තැබිය නොහැකි වීමට ලකුණු 1.',
      q3Title: '3. විස්ථාපන ක්‍රමයේදී තිර පරතරය D > 4f කොන්දේසිය තෘප්ත විය යුත්තේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: u + v = D සහ uv = fD මගින් ලැබෙන u² - Du + fD = 0 වර්ගජ සමීකරණයේ විවේචකය Δ = D(D - 4f) ≥ 0 විය යුතුය. D < 4f නම් විවේචකය සෘණ වී මනඃකල්පිත මූල ලැබේ; එනම් තිරය මත තාත්වික ප්‍රතිබිම්බ නොසෑදේ.',
      q3Rubric: 'රූබ්රිකය: විවේචකය Δ = D(D - 4f) ≥ 0 දැක්වීමට ලකුණු 1; D < 4f විට තාත්වික ප්‍රතිබිම්බ නොසෑදීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  // 1. Convex No-Parallax calculations
  const updateConvexNoParallaxTrial = (id: number, field: keyof ConvexNoParallaxTrial, val: string) => {
    const updated = convexNoParallaxTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ convexNoParallaxTrials: updated });
  };

  const calculatedNoParallaxTrials = convexNoParallaxTrials.map((tr) => {
    const u = parseFloat(tr.distUCm);
    const v = parseFloat(tr.distVCm);
    if (!isNaN(u) && !isNaN(v) && u > 0 && v > 0) {
      const fM = calculateThinLensNoParallax(u / 100, v / 100);
      const fCm = fM * 100;
      return {
        ...tr,
        recipU: (1 / u).toFixed(4),
        recipV: (1 / v).toFixed(4),
        fCm,
      };
    }
    return { ...tr, recipU: null, recipV: null, fCm: null };
  });

  const validNoParallaxFs = calculatedNoParallaxTrials
    .map((t) => t.fCm)
    .filter((f): f is number => f !== null && f > 0);
  const meanNoParallaxFocal =
    validNoParallaxFs.length > 0
      ? validNoParallaxFs.reduce((a, b) => a + b, 0) / validNoParallaxFs.length
      : null;

  // 2. Convex Displacement calculations
  const updateConvexTrial = (id: number, field: keyof ConvexDisplacementTrial, val: string) => {
    const updated = convexTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ convexTrials: updated });
  };

  const calculatedDisplacementTrials = convexTrials.map((tr) => {
    const dVal = parseFloat(tr.screenDistDCm);
    const x1 = parseFloat(tr.lensPos1Cm);
    const x2 = parseFloat(tr.lensPos2Cm);

    if (!isNaN(dVal) && !isNaN(x1) && !isNaN(x2) && dVal > 0) {
      const disp = Math.abs(x2 - x1);
      const fM = calculateLensFocalLengthDisplacement(dVal / 100, disp / 100);
      const fCm = fM * 100;
      return { ...tr, disp, fCm };
    }
    return { ...tr, disp: null, fCm: null };
  });

  const validDisplacementFs = calculatedDisplacementTrials
    .map((t) => t.fCm)
    .filter((f): f is number => f !== null && f > 0);
  const meanDisplacementFocal =
    validDisplacementFs.length > 0
      ? validDisplacementFs.reduce((a, b) => a + b, 0) / validDisplacementFs.length
      : null;

  // 3. Concave calculations: |f| = (u*v)/(v - u)
  const updateConcaveTrial = (id: number, field: keyof ConcaveLensTrial, val: string) => {
    const updated = concaveTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ concaveTrials: updated });
  };

  const calculatedConcaveTrials = concaveTrials.map((tr) => {
    const u = parseFloat(tr.virtualDistUCm);
    const v = parseFloat(tr.realDistVCm);
    if (!isNaN(u) && !isNaN(v) && v > u && u > 0) {
      const fVal = (u * v) / (v - u);
      return { ...tr, fVal };
    }
    return { ...tr, fVal: null };
  });

  const validConcaveFs = calculatedConcaveTrials
    .map((t) => t.fVal)
    .filter((f): f is number => f !== null && f > 0);
  const meanConcaveFocal =
    validConcaveFs.length > 0
      ? validConcaveFs.reduce((a, b) => a + b, 0) / validConcaveFs.length
      : null;

  // Selected benchmark evaluations
  const nomConvexF = parseFloat(nominalFocalLengthCm) || 15.0;
  const nomConcaveF = parseFloat(nominalConcaveFocalLengthCm) || 30.0;

  const currentMeanFocal =
    subMode === 'convex_noparallax'
      ? meanNoParallaxFocal
      : subMode === 'convex_displacement'
      ? meanDisplacementFocal
      : meanConcaveFocal;

  const targetNominalF = subMode === 'concave' ? nomConcaveF : nomConvexF;
  const diffPercent =
    currentMeanFocal !== null && targetNominalF > 0
      ? Math.abs((currentMeanFocal - targetNominalF) / targetNominalF) * 100
      : null;
  const isPass = diffPercent !== null && diffPercent <= 3.0;

  // Independent practice calculation check
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    const stuFocal = parseFloat(calculations.meanFocalLength || '');
    if (currentMeanFocal !== null) {
      const isOk = !isNaN(stuFocal) && Math.abs(stuFocal - currentMeanFocal) <= 0.3;
      results.meanFocalLength = isOk;
      if (!isOk) {
        feedback.meanFocalLength = {
          en: `Calculated mean focal length should be approximately ${currentMeanFocal.toFixed(2)} cm.`,
          si: `ගණනය කළ මධ්‍යන්‍ය නාභීය දුර ආසන්න වශයෙන් ${currentMeanFocal.toFixed(2)} cm විය යුතුය.`,
        };
      }
    }

    setCalculationCheck(results, feedback);
  };

  const handleLoadSample = () => {
    if (subMode === 'convex_noparallax') {
      loadSampleObservations({
        nominalFocalLengthCm: '15.0',
        convexNoParallaxTrials: [
          { id: 1, distUCm: '25.0', distVCm: '37.5' },
          { id: 2, distUCm: '30.0', distVCm: '30.0' },
          { id: 3, distUCm: '40.0', distVCm: '24.0' },
          { id: 4, distUCm: '50.0', distVCm: '21.4' },
          { id: 5, distUCm: '60.0', distVCm: '20.0' },
        ],
      });
    } else if (subMode === 'convex_displacement') {
      loadSampleObservations({
        nominalFocalLengthCm: '15.0',
        convexTrials: [
          { id: 1, screenDistDCm: '80.0', lensPos1Cm: '20.0', lensPos2Cm: '60.0' },
          { id: 2, screenDistDCm: '85.0', lensPos1Cm: '19.2', lensPos2Cm: '65.8' },
          { id: 3, screenDistDCm: '90.0', lensPos1Cm: '18.7', lensPos2Cm: '71.3' },
          { id: 4, screenDistDCm: '95.0', lensPos1Cm: '18.3', lensPos2Cm: '76.7' },
          { id: 5, screenDistDCm: '100.0', lensPos1Cm: '18.0', lensPos2Cm: '82.0' },
        ],
      });
    } else {
      loadSampleObservations({
        nominalConcaveFocalLengthCm: '30.0',
        concaveTrials: [
          { id: 1, virtualDistUCm: '15.0', realDistVCm: '30.0' },
          { id: 2, virtualDistUCm: '18.0', realDistVCm: '45.0' },
          { id: 3, virtualDistUCm: '20.0', realDistVCm: '60.0' },
          { id: 4, virtualDistUCm: '22.0', realDistVCm: '82.5' },
        ],
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
              {subMode === 'convex_noparallax'
                ? t.theoryTitleConvexNoParallax
                : subMode === 'convex_displacement'
                ? t.theoryTitleConvexDisplacement
                : t.theoryTitleConcave}
            </span>
            <p className="whitespace-pre-line">
              {subMode === 'convex_noparallax'
                ? t.theoryTextConvexNoParallax
                : subMode === 'convex_displacement'
                ? t.theoryTextConvexDisplacement
                : t.theoryTextConcave}
            </p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {subMode === 'convex_noparallax'
              ? t.procedureConvexNoParallax
              : subMode === 'convex_displacement'
              ? t.procedureConvexDisplacement
              : t.procedureConcave}
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
              variant={subMode === 'convex_noparallax' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('convex_noparallax')}
            >
              <Eye className="w-3.5 h-3.5 mr-1" />
              {t.modeConvexNoParallax}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'convex_displacement' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('convex_displacement')}
            >
              <Scan className="w-3.5 h-3.5 mr-1" />
              {t.modeConvexDisplacement}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'concave' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('concave')}
            >
              <Scan className="w-3.5 h-3.5 mr-1" />
              {t.modeConcave}
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
          {/* Optical Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            {subMode === 'convex_noparallax' ? (
              <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
                {/* Optical bench rail */}
                <line x1="20" y1="130" x2="320" y2="130" stroke="#94A3B8" strokeWidth="4" />

                {/* Object Pin O at x = 50 */}
                <rect x="48" y="60" width="4" height="70" fill="#1E293B" />
                <polygon points="50,45 44,60 56,60" fill="#EF4444" />
                <text x="50" y="38" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Object Pin O</text>

                {/* Convex Lens L at x = 160 */}
                <g transform="translate(160, 60)">
                  <path d="M 0 0 C 8 25 8 45 0 70 C -8 45 -8 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">Convex Lens</text>
                </g>

                {/* Search Pin P and Inverted Image I at x = 270 */}
                <rect x="268" y="60" width="4" height="70" fill="#1E293B" />
                {/* Inverted image tip pointing downwards */}
                <polygon points="270,75 264,60 276,60" fill="#3B82F6" fillOpacity="0.6" stroke="#1D4ED8" />
                {/* Search pin tip pointing upwards */}
                <polygon points="270,75 264,90 276,90" fill="#10B981" />
                <text x="270" y="38" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Search Pin P (No-Parallax)</text>

                {/* Ray paths */}
                <line x1="50" y1="45" x2="160" y2="60" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
                <line x1="160" y1="60" x2="270" y2="75" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />

                {/* Distances u and v */}
                <line x1="50" y1="145" x2="160" y2="145" stroke="#1E293B" strokeWidth="1.2" />
                <text x="105" y="158" textAnchor="middle" fontSize="8" fill="#1E293B" fontWeight="bold">u</text>

                <line x1="160" y1="145" x2="270" y2="145" stroke="#0F766E" strokeWidth="1.2" />
                <text x="215" y="158" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">v</text>
              </svg>
            ) : subMode === 'convex_displacement' ? (
              <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
                {/* Optical bench rail */}
                <line x1="20" y1="130" x2="320" y2="130" stroke="#94A3B8" strokeWidth="4" />

                {/* Object upright at x = 30 */}
                <rect x="28" y="60" width="4" height="70" fill="#1E293B" />
                <polygon points="30,50 25,60 35,60" fill="#EF4444" />
                <text x="30" y="42" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Object</text>

                {/* Screen upright at x = 300 */}
                <rect x="298" y="60" width="4" height="70" fill="#1E293B" />
                <rect x="294" y="50" width="12" height="40" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
                <text x="300" y="42" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Screen</text>

                {/* Lens Position 1 (x = 100) */}
                <g transform="translate(100, 60)">
                  <path d="M 0 0 C 6 25 6 45 0 70 C -6 45 -6 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">Pos 1</text>
                </g>

                {/* Lens Position 2 (x = 230) */}
                <g transform="translate(230, 60)">
                  <path d="M 0 0 C 6 25 6 45 0 70 C -6 45 -6 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">Pos 2</text>
                </g>

                {/* Displacement d arrow */}
                <line x1="100" y1="105" x2="230" y2="105" stroke="#0F766E" strokeWidth="1.5" />
                <text x="165" y="100" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">Displacement d = |x₂ - x₁|</text>

                {/* Distance D arrow */}
                <line x1="30" y1="155" x2="300" y2="155" stroke="#1E293B" strokeWidth="1.2" />
                <text x="165" y="170" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Total Separation D (&gt; 4f)</text>
              </svg>
            ) : (
              <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
                {/* Optical bench rail */}
                <line x1="20" y1="130" x2="320" y2="130" stroke="#94A3B8" strokeWidth="4" />

                {/* Auxiliary Convex Lens L1 at x = 70 */}
                <g transform="translate(70, 60)">
                  <path d="M 0 0 C 6 25 6 45 0 70 C -6 45 -6 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">L₁ (Convex)</text>
                </g>

                {/* Concave Lens L2 at x = 160 */}
                <g transform="translate(160, 60)">
                  <path d="M 0 0 C -4 25 -4 45 0 70 L 6 70 C 2 45 2 25 6 0 Z" fill="#F472B6" fillOpacity="0.4" stroke="#DB2777" strokeWidth="1.5" />
                  <line x1="3" y1="70" x2="3" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="3" y="-8" textAnchor="middle" fontSize="8" fill="#DB2777" fontWeight="bold">L₂ (Concave)</text>
                </g>

                {/* Virtual image position I1 at x = 220 */}
                <line x1="220" y1="70" x2="220" y2="120" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="220" cy="95" r="3" fill="#64748B" />
                <text x="220" y="60" textAnchor="middle" fontSize="8" fill="#64748B" fontWeight="bold">I₁ (Virtual Object)</text>

                {/* Final Real Image I2 Screen at x = 300 */}
                <rect x="298" y="60" width="4" height="70" fill="#1E293B" />
                <polygon points="300,75 294,90 306,90" fill="#10B981" />
                <text x="300" y="42" textAnchor="middle" fontSize="8" fill="#1E293B" fontWeight="bold">I₂ (Search Pin)</text>

                {/* Distance u: 160 to 220 */}
                <line x1="160" y1="110" x2="220" y2="110" stroke="#DB2777" strokeWidth="1.2" />
                <text x="190" y="105" textAnchor="middle" fontSize="8" fill="#DB2777" fontWeight="bold">u</text>

                {/* Distance v: 160 to 300 */}
                <line x1="160" y1="150" x2="300" y2="150" stroke="#0F766E" strokeWidth="1.2" />
                <text x="230" y="165" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">v</text>
              </svg>
            )}
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

          {/* SubMode 1: Exp 21.1 Convex Lens (No-Parallax) */}
          {subMode === 'convex_noparallax' && (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.uCol}</th>
                      <th className="p-3">{t.vCol}</th>
                      <th className="p-3">{t.recipUCol}</th>
                      <th className="p-3">{t.recipVCol}</th>
                      <th className="p-3">{t.focalCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedNoParallaxTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.distUCm}
                            onChange={(e) => updateConvexNoParallaxTrial(tr.id, 'distUCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.distVCm}
                            onChange={(e) => updateConvexNoParallaxTrial(tr.id, 'distVCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 text-[#64748B]">{tr.recipU ?? '—'}</td>
                        <td className="p-3 text-[#64748B]">{tr.recipV ?? '—'}</td>
                        <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                          {tr.fCm !== null ? `${tr.fCm.toFixed(2)} cm` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanFocalConvex}</span>
                    {mode === 'guided' || showSolution ? (
                      <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {meanNoParallaxFocal !== null ? `${meanNoParallaxFocal.toFixed(2)} cm` : '—'}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={calculations.meanFocalLength || ''}
                        onChange={(e) => updateCalculation('meanFocalLength', e.target.value)}
                        placeholder="f (cm)"
                        className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                      />
                    )}
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.nominalFocal}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {nomConvexF.toFixed(1)} cm
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {diffPercent !== null ? `${diffPercent.toFixed(2)}%` : '—'}
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
          )}

          {/* SubMode 2: Convex Lens Displacement Method */}
          {subMode === 'convex_displacement' && (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.screenDistCol}</th>
                      <th className="p-3">{t.pos1Col}</th>
                      <th className="p-3">{t.pos2Col}</th>
                      <th className="p-3">{t.dispCol}</th>
                      <th className="p-3">{t.focalCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedDisplacementTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.screenDistDCm}
                            onChange={(e) => updateConvexTrial(tr.id, 'screenDistDCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.lensPos1Cm}
                            onChange={(e) => updateConvexTrial(tr.id, 'lensPos1Cm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.lensPos2Cm}
                            onChange={(e) => updateConvexTrial(tr.id, 'lensPos2Cm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 text-[#64748B]">
                          {tr.disp !== null ? `${tr.disp.toFixed(1)} cm` : '—'}
                        </td>
                        <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                          {tr.fCm !== null ? `${tr.fCm.toFixed(2)} cm` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Analytical Summary Card */}
              <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanFocalConvex}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {meanDisplacementFocal !== null ? `${meanDisplacementFocal.toFixed(2)} cm` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.nominalFocal}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {nomConvexF.toFixed(1)} cm
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {diffPercent !== null ? `${diffPercent.toFixed(2)}%` : '—'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubMode 3: Concave Lens Auxiliary Method */}
          {subMode === 'concave' && (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.virtualDistCol}</th>
                      <th className="p-3">{t.realDistCol}</th>
                      <th className="p-3">{t.concaveFocalCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedConcaveTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.virtualDistUCm}
                            onChange={(e) => updateConcaveTrial(tr.id, 'virtualDistUCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.realDistVCm}
                            onChange={(e) => updateConcaveTrial(tr.id, 'realDistVCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 font-bold text-[#DB2777]">
                          {tr.fVal !== null ? `${tr.fVal.toFixed(2)} cm` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanFocalConcave}</span>
                    {mode === 'guided' || showSolution ? (
                      <span className="text-base font-bold text-[#DB2777]">
                        {meanConcaveFocal !== null ? `${meanConcaveFocal.toFixed(2)} cm` : '—'}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={calculations.meanFocalLength || ''}
                        onChange={(e) => updateCalculation('meanFocalLength', e.target.value)}
                        placeholder="|f₂| (cm)"
                        className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                      />
                    )}
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.nominalFocal}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {nomConcaveF.toFixed(1)} cm
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {diffPercent !== null ? `${diffPercent.toFixed(2)}%` : '—'}
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

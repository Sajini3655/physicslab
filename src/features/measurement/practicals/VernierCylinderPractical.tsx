'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { VernierCalipers } from '../instruments/VernierCalipers';
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
  calculateCylinderMaterialVolume,
  calculateBlockVolume,
  calculateSphereVolume,
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface VernierCylinderPracticalProps {
  locale?: Locale;
}

export const VernierCylinderPractical: React.FC<VernierCylinderPracticalProps> = ({
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
    experimentId: 'exp-1-vernier',
    defaultMode: 'guided',
    defaultZeroError: '0.0',
    defaultObservations: {
      geometry: 'closed_bottom',
      cylinderType: 'closed_bottom',
      extTrials: ['', '', ''],
      intTrials: ['', '', ''],
      heightExtTrials: ['', '', ''],
      depthCavityTrials: ['', '', ''],
      blockLengthTrials: ['', '', ''],
      blockWidthTrials: ['', '', ''],
      blockHeightTrials: ['', '', ''],
      sphereDiaTrials: ['', '', ''],
    },
    defaultCalculations: {
      meanExt: '',
      corrExt: '',
      rExt: '',
      meanInt: '',
      corrInt: '',
      rInt: '',
      meanH: '',
      corrH: '',
      cavityVol: '',
      solidVol: '',
      meanBlockL: '',
      corrBlockL: '',
      meanBlockW: '',
      corrBlockW: '',
      meanBlockH: '',
      corrBlockH: '',
      blockVol: '',
      meanSphereDia: '',
      corrSphereDia: '',
      rSphere: '',
      sphereVol: '',
    },
  });

  const geometry = (observations.geometry || observations.cylinderType || 'closed_bottom') as
    | 'closed_bottom'
    | 'open_tube'
    | 'block'
    | 'sphere';
  const cylinderType = geometry === 'open_tube' ? 'open_tube' : 'closed_bottom';
  const extTrials: [string, string, string] = (observations.extTrials && observations.extTrials.length === 3 ? observations.extTrials : ['', '', '']) as [string, string, string];
  const intTrials: [string, string, string] = (observations.intTrials && observations.intTrials.length === 3 ? observations.intTrials : ['', '', '']) as [string, string, string];
  const heightExtTrials: [string, string, string] = (observations.heightExtTrials && observations.heightExtTrials.length === 3 ? observations.heightExtTrials : ['', '', '']) as [string, string, string];
  const depthCavityTrials: [string, string, string] = (observations.depthCavityTrials && observations.depthCavityTrials.length === 3 ? observations.depthCavityTrials : ['', '', '']) as [string, string, string];

  const blockLengthTrials: [string, string, string] = (observations.blockLengthTrials && observations.blockLengthTrials.length === 3 ? observations.blockLengthTrials : ['', '', '']) as [string, string, string];
  const blockWidthTrials: [string, string, string] = (observations.blockWidthTrials && observations.blockWidthTrials.length === 3 ? observations.blockWidthTrials : ['', '', '']) as [string, string, string];
  const blockHeightTrials: [string, string, string] = (observations.blockHeightTrials && observations.blockHeightTrials.length === 3 ? observations.blockHeightTrials : ['', '', '']) as [string, string, string];

  const sphereDiaTrials: [string, string, string] = (observations.sphereDiaTrials && observations.sphereDiaTrials.length === 3 ? observations.sphereDiaTrials : ['', '', '']) as [string, string, string];

  // Current reading on the live instrument
  const [liveReading, setLiveReading] = useState<{ readingMm: number; correctedMm: number }>({
    readingMm: 24.6,
    correctedMm: 24.6,
  });
  const [showSolution, setShowSolution] = useState(false);

  const t = {
    en: {
      title: 'Practical 1: Internal/External Radii & Material Volume of a Cylinder',
      aim: 'Aim: To determine the internal and external radii, external height, internal cavity depth, and volume of the material of a cylinder using Vernier Calipers.',
      apparatus: 'Apparatus: Vernier Calipers (Least Count 0.1 mm), Cylindrical specimen (Closed-bottom calorimeter vessel or open hollow pipe).',
      theoryTitle: 'Underlying Theory & Distinctions (Radius vs. Diameter, Tube vs. Closed Vessel)',
      theoryText: 'Vernier calipers measure diameters directly: outside jaws measure external diameter D, inside jaws measure internal diameter d, and the depth probe measures cavity depth h. The corresponding radii are calculated by halving: External Radius R = D / 2 and Internal Radius r = d / 2. For an open hollow pipe (length H), solid volume is V_solid = π(R² - r²)H. For a closed-bottom cylinder (e.g. calorimeter vessel with external height H and internal depth h), the base thickness is t_base = H - h, and material volume is V_solid = πR²H - πr²h. Zero error correction: Corrected = Observed - (Signed Zero Error).',
      procedure: 'Procedure: 1. Determine least count and check zero error. 2. Measure external diameter D at 3 orientations. 3. Measure internal diameter d using internal jaws. 4. Measure external height H with outside jaws. 5. If closed-bottom, measure internal depth h with the depth probe. 6. Correct for zero error, compute radii (R = D/2, r = d/2), and calculate material volume.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      cylinderModel: 'Specimen Geometry:',
      closedBottom: 'Closed Cylinder (Calorimeter)',
      openTube: 'Open Hollow Pipe (PVC Tube)',
      blockOption: 'Rectangular Block',
      sphereOption: 'Solid Sphere',
      transferReading: 'Transfer Instrument Reading to Table:',
      logExt: 'Log to Ext D',
      logInt: 'Log to Int d',
      logHeight: 'Log to Height H',
      logDepth: 'Log to Depth h',
      logL: 'Log to Length l',
      logW: 'Log to Width w',
      logH: 'Log to Height h',
      logSphereDia: 'Log to Sphere Dia D',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      trial1: 'Orientation / Pos 1 (mm)',
      trial2: 'Orientation / Pos 2 (mm)',
      trial3: 'Orientation / Pos 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      extDia: 'External Diameter (D) [Outside Jaws]',
      intDia: 'Internal Diameter (d) [Inside Jaws]',
      heightExt: 'External Height (H) [Outside Jaws]',
      depthCavity: 'Cavity Depth (h) [Depth Probe]',
      lengthTube: 'Length / Height (H) [Depth Probe / Jaws]',
      blockL: 'Block Length (l) [Outside Jaws]',
      blockW: 'Block Width (w) [Outside Jaws]',
      blockH: 'Block Height (h) [Outside Jaws]',
      sphereDia: 'Sphere Diameter (D) [Outside Jaws]',
      zeroErrorLabel: 'Zero Error (signed, mm):',
      calcTitle: 'Calculated Results & Material Volume',
      extRadius: 'External Radius R = D / 2:',
      intRadius: 'Internal Radius r = d / 2:',
      baseThickness: 'Base Thickness t_base = H - h:',
      wallThickness: 'Wall Thickness t_wall = R - r:',
      cavityVol: 'Hollow-Cylinder Capacity V = π(d/2)²h:',
      solidVol: 'Solid Material Volume (V_solid):',
      blockVol: 'Block Volume V = l · w · h:',
      sphereVol: 'Sphere Volume V = (4/3)πR³:',
      sphereRadius: 'Sphere Radius R = D / 2:',
      sphereCorrDia: 'Corrected Diameter D:',
      blockLengthLabel: 'Corrected Length l:',
      blockWidthLabel: 'Corrected Width w:',
      blockHeightLabel: 'Corrected Height h:',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why must diameter measurements be taken across mutually perpendicular orientations?',
      q1Model: 'Model Answer: Cylindrical specimens often possess slight elliptical deformities or imperfections. Taking diameters along perpendicular axes and computing the arithmetic mean eliminates non-circularity bias.',
      q1Rubric: 'Rubric: Award 1 mark for mentioning elliptical cross-section / non-circularity; 1 mark for stating that mean averages out discrepancy.',
      q2Title: '2. Explain the physical distinction between positive and negative zero error.',
      q2Model: 'Model Answer: If the vernier zero lies to the right of the main scale zero when jaws are closed, zero error is positive (reads too high, so subtract). If to the left, zero error is negative (reads too low, subtracting negative error adds the magnitude).',
      q2Rubric: 'Rubric: Award 1 mark for relative zero mark position; 1 mark for correct mathematical sign application.',
      q3Title: '3. Why must excessive tightening force be avoided when closing the jaws?',
      q3Model: 'Model Answer: Excessive force deforms soft specimens and strains the caliper jaws/slide mechanism, causing systematic zero shifts and damaging the precision scale.',
      q3Rubric: 'Rubric: Award 1 mark for specimen deformation; 1 mark for caliper jaw strain/zero shift.',
      rubricMark: 'Mark Awarded:',
      totalRubricScore: 'Self-Evaluation Rubric Score',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 1: සිලින්ඩරයක අභ්‍යන්තර/බාහිර අරය සහ ද්‍රව්‍යයේ පරිමාව නිර්ණය කිරීම',
      aim: 'අරමුණ: වර්නියර් කැලිපරය භාවිතයෙන් සිලින්ඩරයක අභ්‍යන්තර සහ බාහිර අරයන්, උස, කුහර ගැඹුර සහ ද්‍රව්‍යයේ පරිමාව නිරවද්‍යව නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: වර්නියර් කැලිපරය (කුඩාම මිනුම 0.1 mm), සිලින්ඩරාකාර නිදර්ශකය (පතුල වැසූ කැලරිමීටර බඳුනක් හෝ විවෘත නලයක්).',
      theoryTitle: 'මූලධර්මය සහ පැහැදිලි කිරීම (අරය සහ විෂ්කම්භය අතර වෙනස, විවෘත නල සහ පතුල වැසූ සිලින්ඩර)',
      theoryText: 'වර්නියර් කැලිපරය මගින් මනිනු ලබන්නේ විෂ්කම්භයන්ය: බාහිර හනුවලින් බාහිර විෂ්කම්භය D, අභ්‍යන්තර හනුවලින් අභ්‍යන්තර විෂ්කම්භය d, සහ ගැඹුරු කූරෙන් ගැඹුර h මනියි. අරයන් ලබාගන්නේ අඩක් කිරීමෙනි: බාහිර අරය R = D / 2 සහ අභ්‍යන්තර අරය r = d / 2 වේ. විවෘත නලයක පරිමාව V_solid = π(R² - r²)H වේ. පතුල සහිත බඳුනක (උස H සහ අභ්‍යන්තර ගැඹුර h) පතුලේ ඝනකම t_base = H - h වන අතර, ද්‍රව්‍ය පරිමාව V_solid = πR²H - πr²h මගින් ලැබේ. ශූන්‍ය දෝෂ ශෝධනය: ශෝධිත = නිරීක්ෂිත - (ලකුණ සහිත ශූන්‍ය දෝෂය).',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම හා ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. විවිධ දිශා 3කින් බාහිර විෂ්කම්භය D මැනීම. 3. අභ්‍යන්තර හනුවලින් d මැනීම. 4. බාහිර උස H මැනීම. 5. පතුල සහිත නම් ගැඹුරු කූරෙන් h මැනීම. 6. අරයන් (R = D/2, r = d/2) හා පරිමාව ගණනය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      cylinderModel: 'නිදර්ශකයේ ජ්‍යාමිතිය:',
      closedBottom: 'පතුල වැසූ සිලින්ඩරය (කැලරිමීටරය)',
      openTube: 'විවෘත කුහර නලය (PVC නලය)',
      blockOption: 'සෘජුකෝණාස්‍රාකාර කුට්ටිය',
      sphereOption: 'ඝන ගෝලය',
      transferReading: 'උපකරණයේ පාඨාංකය වගුවට ඇතුළත් කරන්න:',
      logExt: 'බාහිර D වෙත',
      logInt: 'අභ්‍යන්තර d වෙත',
      logHeight: 'උස H වෙත',
      logDepth: 'ගැඹුර h වෙත',
      logL: 'දිග l වෙත',
      logW: 'පළල w වෙත',
      logH: 'උස h වෙත',
      logSphereDia: 'විෂ්කම්භය D වෙත',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      trial1: 'දිශාව / ස්ථානය 1 (mm)',
      trial2: 'දිශාව / ස්ථානය 2 (mm)',
      trial3: 'දිශාව / ස්ථානය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      extDia: 'බාහිර විෂ්කම්භය (D) [බාහිර හනු]',
      intDia: 'අභ්‍යන්තර විෂ්කම්භය (d) [අභ්‍යන්තර හනු]',
      heightExt: 'බාහිර උස (H) [බාහිර හනු]',
      depthCavity: 'කුහරයේ ගැඹුර (h) [ගැඹුරු කූර]',
      lengthTube: 'නලයේ දිග / උස (H) [ගැඹුරු කූර / හනු]',
      blockL: 'කුට්ටියේ දිග (l) [බාහිර හනු]',
      blockW: 'කුට්ටියේ පළල (w) [බාහිර හනු]',
      blockH: 'කුට්ටියේ උස (h) [බාහිර හනු]',
      sphereDia: 'ගෝලයේ විෂ්කම්භය (D) [බාහිර හනු]',
      zeroErrorLabel: 'ශූන්‍ය දෝෂය (ලකුණ සමඟ, mm):',
      calcTitle: 'ගණනය කළ ප්‍රතිඵල සහ ද්‍රව්‍ය පරිමාව',
      extRadius: 'බාහිර අරය R = D / 2:',
      intRadius: 'අභ්‍යන්තර අරය r = d / 2:',
      baseThickness: 'පතුලේ ඝනකම t_base = H - h:',
      wallThickness: 'බිත්ති ඝනකම t_wall = R - r:',
      cavityVol: 'කුහර සිලින්ඩර ධාරිතාව V = π(d/2)²h:',
      solidVol: 'ද්‍රව්‍යයේ ඝන පරිමාව (V_solid):',
      blockVol: 'කුට්ටියේ පරිමාව V = l · w · h:',
      sphereVol: 'ගෝලයේ පරිමාව V = (4/3)πR³:',
      sphereRadius: 'ගෝලයේ අරය R = D / 2:',
      sphereCorrDia: 'ශෝධිත විෂ්කම්භය D:',
      blockLengthLabel: 'ශෝධිත දිග l:',
      blockWidthLabel: 'ශෝධිත පළල w:',
      blockHeightLabel: 'ශෝධිත උස h:',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. විෂ්කම්භය අන්‍යෝන්‍ය වශයෙන් ලම්බක දිශා ඔස්සේ මැනිය යුත්තේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: සිලින්ඩරාකාර වස්තුවල හරස්කඩෙහි සුළු අණ්ඩාකාර විකෘතිතා පැවතිය හැක. ලම්බක දිශාවලින් මැන මධ්‍යන්‍යය සෙවීමෙන් එම විකෘතිතා දෝෂය අවම වේ.',
      q1Rubric: 'රූබ්රිකය: අණ්ඩාකාර හරස්කඩ / විකෘතිතා සඳහන් කිරීමට ලකුණු 1; මධ්‍යන්‍යයෙන් දෝෂය මඟහැරෙන බවට ලකුණු 1.',
      q2Title: '2. ධන හා සෘණ ශූන්‍ය දෝෂ භෞතිකව පැහැදිලි කරන්න.',
      q2Model: 'ආදර්ශ පිළිතුර: හනු ස්පර්ශ වූ විට වර්නියර් ශූන්‍යය ප්‍රධාන ශූන්‍යයෙන් දකුණට පිහිටයි නම් ධන ශූන්‍ය දෝෂයකි (පාඨාංකය වැඩි නිසා අඩු කරයි). වමට පිහිටයි නම් සෘණ ශූන්‍ය දෝෂයකි (අඩු වූ අගය එකතු කරයි).',
      q2Rubric: 'රූබ්රිකය: ශූන්‍ය ලකුණේ සාපේක්ෂ පිහිටීමට ලකුණු 1; නිරවද්‍ය ලකුණු ශෝධනයට ලකුණු 1.',
      q3Title: '3. හනු තද කිරීමේදී අධික බලයක් යෙදීමෙන් වැළකී සිටිය යුත්තේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: නිදර්ශකයේ යාන්ත්‍රික විරූපණය වැළැක්වීමට සහ කැලිපර හනු ඇදවීමෙන් සිදුවන ශූන්‍ය දෝෂ විචලනය වැළැක්වීමට.',
      q3Rubric: 'රූබ්රිකය: නිදර්ශකයේ විරූපණයට ලකුණු 1; උපකරණ හනුවල ඇදවීම/දෝෂයට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      totalRubricScore: 'ස්වයං ඇගයීම් ලකුණු එකතුව',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    if (geometry === 'block') {
      loadSampleObservations(
        {
          geometry: 'block',
          cylinderType: 'block',
          blockLengthTrials: ['50.2', '50.1', '50.3'],
          blockWidthTrials: ['20.0', '20.1', '19.9'],
          blockHeightTrials: ['10.2', '10.1', '10.3'],
        },
        '+0.1'
      );
    } else if (geometry === 'sphere') {
      loadSampleObservations(
        {
          geometry: 'sphere',
          cylinderType: 'sphere',
          sphereDiaTrials: ['20.1', '20.0', '20.2'],
        },
        '+0.1'
      );
    } else if (geometry === 'open_tube') {
      loadSampleObservations(
        {
          geometry: 'open_tube',
          cylinderType: 'open_tube',
          extTrials: ['32.0', '32.1', '31.9'],
          intTrials: ['26.0', '26.1', '25.9'],
          heightExtTrials: ['65.0', '65.2', '65.1'],
        },
        '+0.1'
      );
    } else {
      loadSampleObservations(
        {
          geometry: 'closed_bottom',
          cylinderType: 'closed_bottom',
          extTrials: ['25.4', '25.3', '25.5'],
          intTrials: ['18.6', '18.7', '18.5'],
          heightExtTrials: ['48.0', '48.2', '48.1'],
          depthCavityTrials: ['44.0', '44.2', '44.1'],
        },
        '+0.1'
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
    return Number((sum / nums.length).toFixed(2));
  };

  const ze = parseFloat(zeroError) || 0.0;

  // Cylinder / Tube calculations
  const expectedMeanExt = parseMean(extTrials);
  const expectedMeanInt = parseMean(intTrials);
  const expectedMeanH = parseMean(heightExtTrials);
  const expectedMeanCav = parseMean(depthCavityTrials);

  const expectedCorrExt = expectedMeanExt !== null ? applyZeroCorrection(expectedMeanExt, ze) : null;
  const expectedCorrInt = expectedMeanInt !== null ? applyZeroCorrection(expectedMeanInt, ze) : null;
  const expectedCorrH = expectedMeanH !== null ? applyZeroCorrection(expectedMeanH, ze) : null;
  const expectedCorrCav = expectedMeanCav !== null ? applyZeroCorrection(expectedMeanCav, ze) : null;

  const expectedRExt = expectedCorrExt !== null ? Number((expectedCorrExt / 2).toFixed(2)) : null;
  const expectedRInt = expectedCorrInt !== null ? Number((expectedCorrInt / 2).toFixed(2)) : null;

  const expectedVolCalc =
    expectedRExt !== null && expectedRInt !== null && expectedCorrH !== null
      ? calculateCylinderMaterialVolume({
          geometry: geometry === 'open_tube' ? 'open_tube' : 'closed_bottom',
          rExt: expectedRExt,
          rInt: expectedRInt,
          heightExt: expectedCorrH,
          depthCavity: geometry === 'closed_bottom' ? (expectedCorrCav ?? expectedCorrH) : undefined,
        })
      : null;

  // Block calculations
  const expectedMeanBlockL = parseMean(blockLengthTrials);
  const expectedMeanBlockW = parseMean(blockWidthTrials);
  const expectedMeanBlockH = parseMean(blockHeightTrials);
  const expectedCorrBlockL = expectedMeanBlockL !== null ? applyZeroCorrection(expectedMeanBlockL, ze) : null;
  const expectedCorrBlockW = expectedMeanBlockW !== null ? applyZeroCorrection(expectedMeanBlockW, ze) : null;
  const expectedCorrBlockH = expectedMeanBlockH !== null ? applyZeroCorrection(expectedMeanBlockH, ze) : null;
  const expectedBlockVol =
    expectedCorrBlockL !== null && expectedCorrBlockW !== null && expectedCorrBlockH !== null
      ? calculateBlockVolume(expectedCorrBlockL, expectedCorrBlockW, expectedCorrBlockH)
      : null;

  // Sphere calculations
  const expectedMeanSphereDia = parseMean(sphereDiaTrials);
  const expectedCorrSphereDia = expectedMeanSphereDia !== null ? applyZeroCorrection(expectedMeanSphereDia, ze) : null;
  const expectedRSphere = expectedCorrSphereDia !== null ? Number((expectedCorrSphereDia / 2).toFixed(2)) : null;
  const expectedSphereVol = expectedCorrSphereDia !== null ? calculateSphereVolume(expectedCorrSphereDia) : null;

  const handleLogReading = (targetKey: string) => {
    const rawTrials = (observations as Record<string, unknown>)[targetKey];
    const currentTrials: [string, string, string] =
      Array.isArray(rawTrials) && rawTrials.length === 3
        ? [String(rawTrials[0]), String(rawTrials[1]), String(rawTrials[2])]
        : ['', '', ''];
    const valStr = liveReading.readingMm.toFixed(1);
    const emptyIndex = currentTrials.findIndex((val) => val === '');
    if (emptyIndex !== -1) {
      currentTrials[emptyIndex] = valStr;
    } else {
      // Overwrite first if full
      currentTrials[0] = valStr;
    }
    updateObservations({ [targetKey]: currentTrials });
  };

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    if (geometry === 'block') {
      const stuMeanL = parseFloat(calculations.meanBlockL || '');
      if (expectedMeanBlockL !== null) {
        const isCorrect = !isNaN(stuMeanL) && Math.abs(stuMeanL - expectedMeanBlockL) <= 0.05;
        results.meanBlockL = isCorrect;
        if (!isCorrect) {
          feedback.meanBlockL = {
            en: `Mean length should be (${blockLengthTrials.join(' + ')}) / 3 = ${expectedMeanBlockL} mm.`,
            si: `මධ්‍යන්‍ය දිග (${blockLengthTrials.join(' + ')}) / 3 = ${expectedMeanBlockL} mm විය යුතුය.`,
          };
        }
      }

      const stuCorrL = parseFloat(calculations.corrBlockL || '');
      if (expectedCorrBlockL !== null) {
        const isCorrect = !isNaN(stuCorrL) && Math.abs(stuCorrL - expectedCorrBlockL) <= 0.05;
        results.corrBlockL = isCorrect;
        if (!isCorrect) {
          feedback.corrBlockL = {
            en: `Corrected length = ${expectedMeanBlockL} - (${zeroError}) = ${expectedCorrBlockL} mm.`,
            si: `ශෝධිත දිග = ${expectedMeanBlockL} - (${zeroError}) = ${expectedCorrBlockL} mm.`,
          };
        }
      }

      const stuVol = parseFloat(calculations.blockVol || '');
      if (expectedBlockVol !== null) {
        const isCorrect = !isNaN(stuVol) && Math.abs(stuVol - expectedBlockVol) / expectedBlockVol <= 0.03;
        results.blockVol = isCorrect;
        if (!isCorrect) {
          feedback.blockVol = {
            en: `Block volume V = l · w · h ≈ ${expectedBlockVol} mm³. Verify product of corrected dimensions.`,
            si: `කුට්ටියේ පරිමාව V = l · w · h ≈ ${expectedBlockVol} mm³. ශෝධිත මානවල ගුණිතය පරීක්ෂා කරන්න.`,
          };
        }
      }
    } else if (geometry === 'sphere') {
      const stuMeanDia = parseFloat(calculations.meanSphereDia || '');
      if (expectedMeanSphereDia !== null) {
        const isCorrect = !isNaN(stuMeanDia) && Math.abs(stuMeanDia - expectedMeanSphereDia) <= 0.05;
        results.meanSphereDia = isCorrect;
        if (!isCorrect) {
          feedback.meanSphereDia = {
            en: `Mean sphere diameter = (${sphereDiaTrials.join(' + ')}) / 3 = ${expectedMeanSphereDia} mm.`,
            si: `ගෝලයේ මධ්‍යන්‍ය විෂ්කම්භය = (${sphereDiaTrials.join(' + ')}) / 3 = ${expectedMeanSphereDia} mm.`,
          };
        }
      }

      const stuRSphere = parseFloat(calculations.rSphere || '');
      if (expectedRSphere !== null) {
        const isCorrect = !isNaN(stuRSphere) && Math.abs(stuRSphere - expectedRSphere) <= 0.05;
        results.rSphere = isCorrect;
        if (!isCorrect) {
          feedback.rSphere = {
            en: `Sphere radius R is half of corrected diameter: R = ${expectedCorrSphereDia} / 2 = ${expectedRSphere} mm.`,
            si: `ගෝලයේ අරය R යනු ශෝධිත විෂ්කම්භයෙන් අඩකි: R = ${expectedCorrSphereDia} / 2 = ${expectedRSphere} mm.`,
          };
        }
      }

      const stuVol = parseFloat(calculations.sphereVol || '');
      if (expectedSphereVol !== null) {
        const isCorrect = !isNaN(stuVol) && Math.abs(stuVol - expectedSphereVol) / expectedSphereVol <= 0.03;
        results.sphereVol = isCorrect;
        if (!isCorrect) {
          feedback.sphereVol = {
            en: `Sphere volume V = (4/3)·π·R³ ≈ ${expectedSphereVol} mm³.`,
            si: `ගෝලයේ පරිමාව V = (4/3)·π·R³ ≈ ${expectedSphereVol} mm³.`,
          };
        }
      }
    } else {
      const stuMeanExt = parseFloat(calculations.meanExt || '');
      if (expectedMeanExt !== null) {
        const isMeanCorrect = !isNaN(stuMeanExt) && Math.abs(stuMeanExt - expectedMeanExt) <= 0.05;
        results.meanExt = isMeanCorrect;
        if (!isMeanCorrect) {
          feedback.meanExt = {
            en: `Mean observed diameter should be (${extTrials.join(' + ')}) / 3 = ${expectedMeanExt} mm.`,
            si: `මධ්‍යන්‍ය නිරීක්ෂිත විෂ්කම්භය (${extTrials.join(' + ')}) / 3 = ${expectedMeanExt} mm විය යුතුය.`,
          };
        }
      }

      const stuCorrExt = parseFloat(calculations.corrExt || '');
      if (expectedCorrExt !== null) {
        const isCorrCorrect = !isNaN(stuCorrExt) && Math.abs(stuCorrExt - expectedCorrExt) <= 0.05;
        results.corrExt = isCorrCorrect;
        if (!isCorrCorrect) {
          feedback.corrExt = {
            en: `Corrected value = Observed mean (${expectedMeanExt}) - Zero error (${zeroError}) = ${expectedCorrExt} mm. Remember: subtract signed zero error!`,
            si: `ශෝධිත අගය = නිරීක්ෂිත මධ්‍යන්‍යය (${expectedMeanExt}) - ශූන්‍ය දෝෂය (${zeroError}) = ${expectedCorrExt} mm. මතක තබා ගන්න: ලකුණ සහිත ශූන්‍ය දෝෂය අඩු කරන්න!`,
          };
        }
      }

      const stuRExt = parseFloat(calculations.rExt || '');
      if (expectedRExt !== null) {
        const isRCorrect = !isNaN(stuRExt) && Math.abs(stuRExt - expectedRExt) <= 0.05;
        results.rExt = isRCorrect;
        if (!isRCorrect) {
          feedback.rExt = {
            en: `External radius is half of corrected diameter: R = ${expectedCorrExt} / 2 = ${expectedRExt} mm.`,
            si: `බාහිර අරය යනු ශෝධිත විෂ්කම්භයෙන් අඩකි: R = ${expectedCorrExt} / 2 = ${expectedRExt} mm.`,
          };
        }
      }

      const stuCavityVol = parseFloat(calculations.cavityVol || '');
      if (expectedVolCalc && expectedVolCalc.cavityVolume !== null) {
        const expCav = expectedVolCalc.cavityVolume;
        const isCavCorrect = !isNaN(stuCavityVol) && Math.abs(stuCavityVol - expCav) / expCav <= 0.03;
        results.cavityVol = isCavCorrect;
        if (!isCavCorrect) {
          feedback.cavityVol = {
            en: `Hollow-cylinder capacity V = π·r²·h = π·(d/2)²·h ≈ ${expCav} mm³. Verify internal radius and cavity depth.`,
            si: `කුහර සිලින්ඩර ධාරිතාව V = π·r²·h = π·(d/2)²·h ≈ ${expCav} mm³ වේ. අභ්‍යන්තර අරය සහ කුහර ගැඹුර පරීක්ෂා කරන්න.`,
          };
        }
      }

      const stuSolidVol = parseFloat(calculations.solidVol || '');
      if (expectedVolCalc && expectedVolCalc.solidVolume !== null) {
        const expVol = expectedVolCalc.solidVolume;
        const isVolCorrect = !isNaN(stuSolidVol) && Math.abs(stuSolidVol - expVol) / expVol <= 0.03;
        results.solidVol = isVolCorrect;
        if (!isVolCorrect) {
          feedback.solidVol = {
            en: `Expected solid material volume is approx ${expVol} mm³. Verify base thickness and formula.`,
            si: `බලාපොරොත්තු ද්‍රව්‍ය පරිමාව දළ වශයෙන් ${expVol} mm³ වේ. සූත්‍රය පරීක්ෂා කරන්න.`,
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
        <VernierCalipers
          locale={locale}
          leastCount={0.1}
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
              {liveReading.readingMm.toFixed(1)} mm
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {geometry === 'block' ? (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('blockLengthTrials')}
                >
                  {t.logL}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('blockWidthTrials')}
                >
                  {t.logW}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('blockHeightTrials')}
                >
                  {t.logH}
                </Button>
              </>
            ) : geometry === 'sphere' ? (
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => handleLogReading('sphereDiaTrials')}
              >
                {t.logSphereDia}
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('extTrials')}
                >
                  {t.logExt}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('intTrials')}
                >
                  {t.logInt}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7"
                  onClick={() => handleLogReading('heightExtTrials')}
                >
                  {t.logHeight}
                </Button>
                {geometry === 'closed_bottom' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-7"
                    onClick={() => handleLogReading('depthCavityTrials')}
                  >
                    {t.logDepth}
                  </Button>
                )}
              </>
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
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-xs font-semibold text-[#64748B]">{t.cylinderModel}</span>
              <Button
                size="sm"
                variant={geometry === 'closed_bottom' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ geometry: 'closed_bottom', cylinderType: 'closed_bottom' })}
              >
                {t.closedBottom}
              </Button>
              <Button
                size="sm"
                variant={geometry === 'open_tube' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ geometry: 'open_tube', cylinderType: 'open_tube' })}
              >
                {t.openTube}
              </Button>
              <Button
                size="sm"
                variant={geometry === 'block' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ geometry: 'block', cylinderType: 'block' })}
              >
                {t.blockOption}
              </Button>
              <Button
                size="sm"
                variant={geometry === 'sphere' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ geometry: 'sphere', cylinderType: 'sphere' })}
              >
                {t.sphereOption}
              </Button>
            </div>
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
              placeholder="0.0"
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
                {geometry === 'block' ? (
                  <>
                    {/* Length Row */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.blockL}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockLengthTrials[0]}
                          onChange={(e) => updateObservations({ blockLengthTrials: [e.target.value, blockLengthTrials[1], blockLengthTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockLengthTrials[1]}
                          onChange={(e) => updateObservations({ blockLengthTrials: [blockLengthTrials[0], e.target.value, blockLengthTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockLengthTrials[2]}
                          onChange={(e) => updateObservations({ blockLengthTrials: [blockLengthTrials[0], blockLengthTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">
                        {mode === 'guided' ? (
                          expectedMeanBlockL !== null ? `${expectedMeanBlockL} mm` : '—'
                        ) : (
                          <input
                            type="text"
                            value={calculations.meanBlockL || ''}
                            onChange={(e) => updateCalculation('meanBlockL', e.target.value)}
                            placeholder="Mean mm"
                            className="w-20 px-2 py-1 rounded border text-xs border-[#DFE8EF] dark:border-[#1E334D]"
                          />
                        )}
                      </td>
                      <td className="p-3 font-bold text-[#0F766E]">
                        {mode === 'guided' ? (
                          expectedCorrBlockL !== null ? `${expectedCorrBlockL} mm` : '—'
                        ) : (
                          <input
                            type="text"
                            value={calculations.corrBlockL || ''}
                            onChange={(e) => updateCalculation('corrBlockL', e.target.value)}
                            placeholder="Corr mm"
                            className="w-20 px-2 py-1 rounded border text-xs border-[#DFE8EF] dark:border-[#1E334D]"
                          />
                        )}
                      </td>
                    </tr>

                    {/* Width Row */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.blockW}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockWidthTrials[0]}
                          onChange={(e) => updateObservations({ blockWidthTrials: [e.target.value, blockWidthTrials[1], blockWidthTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockWidthTrials[1]}
                          onChange={(e) => updateObservations({ blockWidthTrials: [blockWidthTrials[0], e.target.value, blockWidthTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockWidthTrials[2]}
                          onChange={(e) => updateObservations({ blockWidthTrials: [blockWidthTrials[0], blockWidthTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">{expectedMeanBlockW !== null ? `${expectedMeanBlockW} mm` : '—'}</td>
                      <td className="p-3 font-bold text-[#0F766E]">{expectedCorrBlockW !== null ? `${expectedCorrBlockW} mm` : '—'}</td>
                    </tr>

                    {/* Height Row */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.blockH}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockHeightTrials[0]}
                          onChange={(e) => updateObservations({ blockHeightTrials: [e.target.value, blockHeightTrials[1], blockHeightTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockHeightTrials[1]}
                          onChange={(e) => updateObservations({ blockHeightTrials: [blockHeightTrials[0], e.target.value, blockHeightTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={blockHeightTrials[2]}
                          onChange={(e) => updateObservations({ blockHeightTrials: [blockHeightTrials[0], blockHeightTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">{expectedMeanBlockH !== null ? `${expectedMeanBlockH} mm` : '—'}</td>
                      <td className="p-3 font-bold text-[#0F766E]">{expectedCorrBlockH !== null ? `${expectedCorrBlockH} mm` : '—'}</td>
                    </tr>
                  </>
                ) : geometry === 'sphere' ? (
                  /* Sphere Diameter Row */
                  <tr>
                    <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.sphereDia}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={sphereDiaTrials[0]}
                        onChange={(e) => updateObservations({ sphereDiaTrials: [e.target.value, sphereDiaTrials[1], sphereDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={sphereDiaTrials[1]}
                        onChange={(e) => updateObservations({ sphereDiaTrials: [sphereDiaTrials[0], e.target.value, sphereDiaTrials[2]] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={sphereDiaTrials[2]}
                        onChange={(e) => updateObservations({ sphereDiaTrials: [sphereDiaTrials[0], sphereDiaTrials[1], e.target.value] })}
                        className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 font-bold">
                      {mode === 'guided' ? (
                        expectedMeanSphereDia !== null ? `${expectedMeanSphereDia} mm` : '—'
                      ) : (
                        <input
                          type="text"
                          value={calculations.meanSphereDia || ''}
                          onChange={(e) => updateCalculation('meanSphereDia', e.target.value)}
                          placeholder="Mean mm"
                          className="w-20 px-2 py-1 rounded border text-xs border-[#DFE8EF] dark:border-[#1E334D]"
                        />
                      )}
                    </td>
                    <td className="p-3 font-bold text-[#0F766E]">
                      {mode === 'guided' ? (
                        expectedCorrSphereDia !== null ? `${expectedCorrSphereDia} mm` : '—'
                      ) : (
                        <input
                          type="text"
                          value={calculations.corrSphereDia || ''}
                          onChange={(e) => updateCalculation('corrSphereDia', e.target.value)}
                          placeholder="Corr mm"
                          className="w-20 px-2 py-1 rounded border text-xs border-[#DFE8EF] dark:border-[#1E334D]"
                        />
                      )}
                    </td>
                  </tr>
                ) : (
                  <>
                    {/* Ext Diameter */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.extDia}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={extTrials[0]}
                          onChange={(e) => updateObservations({ extTrials: [e.target.value, extTrials[1], extTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={extTrials[1]}
                          onChange={(e) => updateObservations({ extTrials: [extTrials[0], e.target.value, extTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={extTrials[2]}
                          onChange={(e) => updateObservations({ extTrials: [extTrials[0], extTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">
                        {mode === 'guided' ? (
                          expectedMeanExt !== null ? `${expectedMeanExt} mm` : '—'
                        ) : (
                          <input
                            type="text"
                            value={calculations.meanExt || ''}
                            onChange={(e) => updateCalculation('meanExt', e.target.value)}
                            placeholder="Mean mm"
                            className={`w-20 px-2 py-1 rounded border text-xs ${
                              calculationResults?.meanExt === true
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                                : calculationResults?.meanExt === false
                                ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30'
                                : 'border-[#DFE8EF] dark:border-[#1E334D]'
                            }`}
                          />
                        )}
                      </td>
                      <td className="p-3 font-bold text-[#0F766E]">
                        {mode === 'guided' ? (
                          expectedCorrExt !== null ? `${expectedCorrExt} mm` : '—'
                        ) : (
                          <input
                            type="text"
                            value={calculations.corrExt || ''}
                            onChange={(e) => updateCalculation('corrExt', e.target.value)}
                            placeholder="Corr mm"
                            className={`w-20 px-2 py-1 rounded border text-xs ${
                              calculationResults?.corrExt === true
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                                : calculationResults?.corrExt === false
                                ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30'
                                : 'border-[#DFE8EF] dark:border-[#1E334D]'
                            }`}
                          />
                        )}
                      </td>
                    </tr>

                    {/* Int Diameter */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.intDia}</td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={intTrials[0]}
                          onChange={(e) => updateObservations({ intTrials: [e.target.value, intTrials[1], intTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={intTrials[1]}
                          onChange={(e) => updateObservations({ intTrials: [intTrials[0], e.target.value, intTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={intTrials[2]}
                          onChange={(e) => updateObservations({ intTrials: [intTrials[0], intTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">{expectedMeanInt !== null ? `${expectedMeanInt} mm` : '—'}</td>
                      <td className="p-3 font-bold text-[#0F766E]">{expectedCorrInt !== null ? `${expectedCorrInt} mm` : '—'}</td>
                    </tr>

                    {/* External Height */}
                    <tr>
                      <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">
                        {cylinderType === 'closed_bottom' ? t.heightExt : t.lengthTube}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={heightExtTrials[0]}
                          onChange={(e) => updateObservations({ heightExtTrials: [e.target.value, heightExtTrials[1], heightExtTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={heightExtTrials[1]}
                          onChange={(e) => updateObservations({ heightExtTrials: [heightExtTrials[0], e.target.value, heightExtTrials[2]] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={heightExtTrials[2]}
                          onChange={(e) => updateObservations({ heightExtTrials: [heightExtTrials[0], heightExtTrials[1], e.target.value] })}
                          className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                        />
                      </td>
                      <td className="p-3 font-bold">{expectedMeanH !== null ? `${expectedMeanH} mm` : '—'}</td>
                      <td className="p-3 font-bold text-[#0F766E]">{expectedCorrH !== null ? `${expectedCorrH} mm` : '—'}</td>
                    </tr>

                    {/* Cavity Depth (for closed-bottom only) */}
                    {cylinderType === 'closed_bottom' && (
                      <tr>
                        <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.depthCavity}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={depthCavityTrials[0]}
                            onChange={(e) => updateObservations({ depthCavityTrials: [e.target.value, depthCavityTrials[1], depthCavityTrials[2]] })}
                            className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={depthCavityTrials[1]}
                            onChange={(e) => updateObservations({ depthCavityTrials: [depthCavityTrials[0], e.target.value, depthCavityTrials[2]] })}
                            className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={depthCavityTrials[2]}
                            onChange={(e) => updateObservations({ depthCavityTrials: [depthCavityTrials[0], depthCavityTrials[1], e.target.value] })}
                            className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 font-bold">{expectedMeanCav !== null ? `${expectedMeanCav} mm` : '—'}</td>
                        <td className="p-3 font-bold text-[#0F766E]">{expectedCorrCav !== null ? `${expectedCorrCav} mm` : '—'}</td>
                      </tr>
                    )}
                  </>
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

            {geometry === 'block' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.blockLengthLabel}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrBlockL !== null ? `${expectedCorrBlockL} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.blockWidthLabel}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrBlockW !== null ? `${expectedCorrBlockW} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.blockHeightLabel}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrBlockH !== null ? `${expectedCorrBlockH} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.blockVol}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedBlockVol !== null ? `${expectedBlockVol} mm³` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.blockVol || ''}
                      onChange={(e) => updateCalculation('blockVol', e.target.value)}
                      placeholder="V (mm³)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            ) : geometry === 'sphere' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.sphereCorrDia}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedCorrSphereDia !== null ? `${expectedCorrSphereDia} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.sphereRadius}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedRSphere !== null ? `${expectedRSphere} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.rSphere || ''}
                      onChange={(e) => updateCalculation('rSphere', e.target.value)}
                      placeholder="R (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.sphereVol}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedSphereVol !== null ? `${expectedSphereVol} mm³` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.sphereVol || ''}
                      onChange={(e) => updateCalculation('sphereVol', e.target.value)}
                      placeholder="V (mm³)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.extRadius}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedRExt !== null ? `${expectedRExt} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.rExt || ''}
                      onChange={(e) => updateCalculation('rExt', e.target.value)}
                      placeholder="R (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.intRadius}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedRInt !== null ? `${expectedRInt} mm` : '—'}
                  </span>
                </div>
                {geometry === 'closed_bottom' ? (
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.baseThickness}</span>
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedVolCalc?.baseThickness !== null && expectedVolCalc?.baseThickness !== undefined
                        ? `${expectedVolCalc.baseThickness} mm`
                        : '—'}
                    </span>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.wallThickness}</span>
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedRExt !== null && expectedRInt !== null ? `${(expectedRExt - expectedRInt).toFixed(2)} mm` : '—'}
                    </span>
                  </div>
                )}
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.cavityVol}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedVolCalc ? `${expectedVolCalc.cavityVolume} mm³` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.cavityVol || ''}
                      onChange={(e) => updateCalculation('cavityVol', e.target.value)}
                      placeholder="V_cap (mm³)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.solidVol}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedVolCalc ? `${expectedVolCalc.solidVolume} mm³` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.solidVol || ''}
                      onChange={(e) => updateCalculation('solidVol', e.target.value)}
                      placeholder="V (mm³)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Precautions & Self-Evaluation Rubrics */}
          <div className="pt-4 border-t border-[#DFE8EF] dark:border-[#1E334D] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.precautionsTitle}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F4F1] dark:bg-[#0E3836] text-[#0F766E] dark:text-[#5EEAD4] w-fit">
                {t.totalRubricScore}: {Object.values(rubricScores).reduce((a, b) => a + b, 0)} / 6
              </span>
            </div>

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

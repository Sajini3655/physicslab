'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { TravellingMicroscope } from '../instruments/TravellingMicroscope';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Printer,
  RotateCcw,
  Database,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react';
import {
  calculateTravellingMicroscopeDimensions,
  calculateCapillaryBoreDimensions,
  calculateApparentDepthRefractiveIndex,
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

export type MicroscopeInvestigation = 'tube' | 'capillary' | 'apparent_depth';

interface TravellingMicroscopePracticalProps {
  locale?: Locale;
}

export const TravellingMicroscopePractical: React.FC<TravellingMicroscopePracticalProps> = ({
  locale = 'en',
}) => {
  const {
    mode,
    setMode,
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
    experimentId: 'exp-4-microscope',
    defaultMode: 'guided',
    defaultObservations: {
      investigationType: 'tube',
      x1: '',
      x2: '',
      x3: '',
      x4: '',
      capX1: '',
      capX2: '',
      capY1: '',
      capY2: '',
      r1Bottom: '',
      r2Image: '',
      r3Surface: '',
    },
    defaultCalculations: {
      internalDia: '',
      externalDia: '',
      internalRad: '',
      externalRad: '',
      wallThickness: '',
      capMeanDia: '',
      capRadius: '',
      capArea: '',
      realDepth: '',
      apparentDepth: '',
      refractiveIndex: '',
    },
  });

  const investigationType: MicroscopeInvestigation =
    (observations.investigationType as MicroscopeInvestigation) || 'tube';

  const x1 = observations.x1 || '';
  const x2 = observations.x2 || '';
  const x3 = observations.x3 || '';
  const x4 = observations.x4 || '';

  const capX1 = observations.capX1 || '';
  const capX2 = observations.capX2 || '';
  const capY1 = observations.capY1 || '';
  const capY2 = observations.capY2 || '';

  const r1Bottom = observations.r1Bottom || '';
  const r2Image = observations.r2Image || '';
  const r3Surface = observations.r3Surface || '';

  const [showSolution, setShowSolution] = useState(false);

  const t = {
    en: {
      title: 'Practical 4 & 16: Travelling Microscope Measurements (Rubber Tube, Capillary Bore & Glass Refractive Index)',
      aim: 'Aim: To determine the internal and external radii and wall thickness of a rubber tube, capillary bore diameter, and the refractive index of a glass block using real and apparent depth (Exp 16).',
      apparatus: 'Apparatus: Travelling Microscope (Least Count 0.01 mm), Clean rubber tube cross-section, Uniform capillary tube, Rectangular glass block, Lycopodium powder / chalk dust, White paper with ink cross, Illumination lamp.',
      theoryTitle: 'Theory & Experimental Significance',
      theoryText: 'Soft, elastic materials like rubber deform easily under caliper jaw pressure, leading to systematic compression errors. Capillary bores (< 1 mm) cannot be accessed by calipers without destructive errors. A travelling microscope provides non-contact optical measurement.\n\n1. Rubber tube: Internal diameter d_int = x₃ - x₂ (r_int = d_int/2); External diameter d_ext = x₄ - x₁ (r_ext = d_ext/2); Wall thickness t = r_ext - r_int.\n2. Capillary tube: Horizontal traverse d_H = |x₂ - x₁| and vertical traverse d_V = |y₂ - y₁| give mean bore diameter d_mean = (d_H + d_V) / 2 and cross-section area A = π·r².\n3. Glass Refractive Index (Exp 16): Real depth d = |R₃ - R₁| (bottom mark to top surface), Apparent depth d\' = |R₃ - R₂| (apparent image to top surface), Refractive Index n = Real Depth / Apparent Depth = d / d\'.',
      procedure: 'Procedure: 1. Select investigation target. 2. Focus the eyepiece on crosswires to remove parallax, then focus objective on target. 3. For rubber/capillary tubes, traverse carriage in one direction to eliminate backlash. 4. For glass block (Exp 16), record vertical vernier readings for cross mark on paper (R₁), image through glass (R₂), and lycopodium powder on top surface (R₃). 5. Compute dimensions or refractive index.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      invSelector: 'Investigation Target:',
      invTube: 'Rubber Tube (Radii & Wall Thickness)',
      invCapillary: 'Capillary Tube (Bore Diameter & Area)',
      invApparentDepth: 'Glass Block Refractive Index (Exp 16 - Real & Apparent Depth)',
      obsTableTube: 'Microscope Rubber Tube Boundary Traversal Observations',
      obsTableCap: 'Microscope Capillary Bore Orthogonal Traversal Observations',
      obsTableApparent: 'Microscope Vertical Focusing Observations on Glass Block (Exp 16)',
      x1Label: 'Left Outer Boundary (x₁):',
      x2Label: 'Left Inner Boundary (x₂):',
      x3Label: 'Right Inner Boundary (x₃):',
      x4Label: 'Right Outer Boundary (x₄):',
      capX1Label: 'Horizontal Left Edge (x₁):',
      capX2Label: 'Horizontal Right Edge (x₂):',
      capY1Label: 'Vertical Bottom Edge (y₁):',
      capY2Label: 'Vertical Top Edge (y₂):',
      r1Label: '1. Mark on paper without glass block (R₁):',
      r2Label: '2. Apparent image through glass block (R₂):',
      r3Label: '3. Lycopodium powder on top surface (R₃):',
      calcTitleTube: 'Calculated Dimensions & Wall Thickness',
      calcTitleCap: 'Calculated Capillary Bore Dimensions',
      calcTitleApparent: 'Calculated Real Depth, Apparent Depth & Refractive Index (n)',
      internalDia: 'Internal Diameter d_int = x₃ - x₂:',
      externalDia: 'External Diameter d_ext = x₄ - x₁:',
      internalRad: 'Internal Radius r_int:',
      externalRad: 'External Radius r_ext:',
      wallThickness: 'Wall Thickness t = r_ext - r_int:',
      capHorizDia: 'Horizontal Diameter d_H = |x₂ - x₁|:',
      capVertDia: 'Vertical Diameter d_V = |y₂ - y₁|:',
      capMeanDia: 'Mean Bore Diameter d_mean:',
      capRadius: 'Bore Radius r:',
      capArea: 'Cross-Section Area A = π·r²:',
      realDepth: 'Real Thickness / Depth d = |R₃ - R₁|:',
      apparentDepth: 'Apparent Depth d\' = |R₃ - R₂|:',
      refractiveIndex: 'Refractive Index of Glass n = Real Depth / Apparent Depth = d / d\':',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why is a travelling microscope chosen over vernier calipers for rubber and capillary tubes?',
      q1Model: 'Model Answer: Rubber is an elastic material that compresses under the mechanical jaw pressure of calipers, causing systematic negative errors in diameter. Capillary bores are too narrow (< 1 mm) for caliper jaws. The travelling microscope provides non-contact, highly precise optical measurement.',
      q1Rubric: 'Rubric: Award 1 mark for soft/elastic material deformation or narrow bore; 1 mark for non-contact optical measurement advantages.',
      q2Title: '2. Why must the carriage traverse in only one continuous direction when recording boundary positions?',
      q2Model: 'Model Answer: Reversing the direction of rotation introduces backlash error due to mechanical play/clearance between the screw threads and carriage nut. Continuous one-way motion eliminates backlash.',
      q2Rubric: 'Rubric: Award 1 mark for mentioning backlash error; 1 mark for explanation of screw thread play.',
      q3Title: '3. Why are both horizontal and vertical traverses measured for the capillary bore?',
      q3Model: 'Model Answer: Drawn glass capillary tubes often have slightly elliptical bores rather than perfectly circular cross-sections. Measuring along two orthogonal diameters (horizontal and vertical) and taking their mean eliminates ellipticity bias.',
      q3Rubric: 'Rubric: Award 1 mark for elliptical cross-section / non-circularity; 1 mark for averaging orthogonal diameters.',
      q1TitleApparent: '1. Why is lycopodium powder or chalk dust placed on the upper surface of the glass block?',
      q1ModelApparent: 'Model Answer: Clean polished glass is transparent, making its top boundary difficult to focus on optically. The opaque lycopodium powder particles provide high-contrast focal points resting directly on the top surface.',
      q1RubricApparent: 'Rubric: Award 1 mark for transparent/featureless glass surface; 1 mark for providing sharp focus targets on top surface.',
      q2TitleApparent: '2. In what sequence and direction should vertical readings R₁, R₂, R₃ be taken?',
      q2ModelApparent: 'Model Answer: Focus on R₁ (bottom mark), then R₂ (image through glass), then R₃ (top surface powder). The microscope should be raised continuously upwards in one direction to eliminate backlash error in the vertical screw.',
      q2RubricApparent: 'Rubric: Award 1 mark for ascending/one-direction traverse; 1 mark for backlash avoidance.',
      q3TitleApparent: '3. Why does the mark appear raised when viewed through the glass block?',
      q3ModelApparent: 'Model Answer: Light rays exiting the denser glass medium into air refract away from the normal. When traced backwards, these diverging rays intersect at a virtual image closer to the surface, creating an apparent depth d\' = d / n.',
      q3RubricApparent: 'Rubric: Award 1 mark for refraction away from normal at glass-air boundary; 1 mark for virtual image closer to surface (d\' = d/n).',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4 සහ 16: චල අන්වීක්ෂ මිනුම් (රබර් නලය, කේශික සිදුර සහ වීදුරු වර්තනාංකය)',
      aim: 'අරමුණ: චල අන්වීක්ෂයක් භාවිතයෙන් රබර් නලයක අභ්‍යන්තර හා බාහිර අරයන්, කේශික නලයක සිදුරේ විෂ්කම්භය සහ සත්‍ය හා දෘශ්‍ය ගැඹුර මගින් වීදුරු කුට්ටියේ වර්තනාංකය (පරීක්ෂණ 16) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: චල අන්වීක්ෂය (කුඩාම මිනුම 0.01 mm), රබර් නල කොටස, ඒකාකාර කේශික නලය, සෘජුකෝණාස්‍රාකාර වීදුරු කුට්ටිය, ලයිකොපෝඩියම් කුඩු, කඩදාසියක ඇඳි කතිර ලකුණ, ආලෝක ප්‍රභවය.',
      theoryTitle: 'මූලධර්මය සහ ප්‍රායෝගික වැදගත්කම',
      theoryText: 'රබර් වැනි ප්‍රත්‍යාස්ථ ද්‍රව්‍ය කැලිපර හනුවල තෙරපුමෙන් පහසුවෙන් විරූපණය වන අතර කේශික සිදුරු (< 1 mm) ඉතා සිහින් බැවින් ස්පර්ශ රහිත දෘශ්‍ය මිනුම් අවශ්‍ය වේ.\n\n1. රබර් නලය: අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂ (r_int = d_int/2); බාහිර විෂ්කම්භය d_ext = x₄ - x₁ (r_ext = d_ext/2); බිත්ති ඝනකම t = r_ext - r_int.\n2. කේශික නලය: තිරස් විෂ්කම්භය d_H = |x₂ - x₁| සහ සිරස් විෂ්කම්භය d_V = |y₂ - y₁| මගින් මධ්‍යන්‍ය විෂ්කම්භය d_mean = (d_H + d_V)/2 සහ හරස්කඩ වර්ගඵලය A = π·r² ලැබේ.\n3. වීදුරුවේ වර්තනාංකය (පරීක්ෂණ 16): සත්‍ය ගැඹුර d = |R₃ - R₁| (යට ලකුණේ සිට උඩ පෘෂ්ඨයට), දෘශ්‍ය ගැඹුර d\' = |R₃ - R₂| (දෘශ්‍ය ප්‍රතිබිම්බයේ සිට උඩ පෘෂ්ඨයට), වර්තනාංකය n = සත්‍ය ගැඹුර / දෘශ්‍ය ගැඹුර = d / d\'.',
      procedure: 'ක්‍රමවේදය: 1. පරීක්ෂණ අරමුණ තෝරන්න. 2. උපනෙත හරස් කම්බි වෙත නාභිගත කර විස්ථාපන දෝෂය ඉවත් කරන්න. 3. රබර් සහ කේශික නල සඳහා පාශ්වික දෝෂය වැළැක්වීමට එකම දිශාවකට අන්වීක්ෂය ගෙන යන්න. 4. වීදුරු කුට්ටියේදී කඩදාසියේ ලකුණ (R₁), වීදුරුව තුළින් පෙනෙන ලකුණ (R₂), සහ උඩ පෘෂ්ඨයේ ලයිකොපෝඩියම් කුඩු (R₃) සිරස්ව කියවා d, d\', n ගණනය කරන්න.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      invSelector: 'පරීක්ෂණ අරමුණ:',
      invTube: 'රබර් නලය (අරය සහ බිත්ති ඝනකම)',
      invCapillary: 'කේශික නලය (සිදුරේ විෂ්කම්භය සහ වර්ගඵලය)',
      invApparentDepth: 'වීදුරු කුට්ටියේ වර්තනාංකය (පරීක්ෂණ 16 - සත්‍ය හා දෘශ්‍ය ගැඹුර)',
      obsTableTube: 'අන්වීක්ෂ රබර් නල මායිම් නිරීක්ෂණ වගුව',
      obsTableCap: 'අන්වීක්ෂ කේශික සිදුරු ලම්බක නිරීක්ෂණ වගුව',
      obsTableApparent: 'වීදුරු කුට්ටිය සඳහා අන්වීක්ෂ සිරස් නාභිගත නිරීක්ෂණ (පරීක්ෂණ 16)',
      x1Label: 'වම් බාහිර මායිම (x₁):',
      x2Label: 'වම් අභ්‍යන්තර මායිම (x₂):',
      x3Label: 'දකුණු අභ්‍යන්තර මායිම (x₃):',
      x4Label: 'දකුණු බාහිර මායිම (x₄):',
      capX1Label: 'තිරස් වම් මායිම (x₁):',
      capX2Label: 'තිරස් දකුණු මායිම (x₂):',
      capY1Label: 'සිරස් පහළ මායිම (y₁):',
      capY2Label: 'සිරස් ඉහළ මායිම (y₂):',
      r1Label: '1. වීදුරු කුට්ටිය රහිතව කඩදාසියේ ලකුණ (R₁):',
      r2Label: '2. වීදුරු කුට්ටිය තුළින් පෙනෙන ලකුණේ දෘශ්‍ය ප්‍රතිබිම්බය (R₂):',
      r3Label: '3. වීදුරු කුට්ටියේ උඩ පෘෂ්ඨය මත ලයිකොපෝඩියම් කුඩු (R₃):',
      calcTitleTube: 'ගණනය කළ මාන සහ බිත්ති ඝනකම',
      calcTitleCap: 'ගණනය කළ කේශික සිදුරු මාන',
      calcTitleApparent: 'ගණනය කළ සත්‍ය ගැඹුර, දෘශ්‍ය ගැඹුර සහ වර්තනාංකය (n)',
      internalDia: 'අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂:',
      externalDia: 'බාහිර විෂ්කම්භය d_ext = x₄ - x₁:',
      internalRad: 'අභ්‍යන්තර අරය r_int:',
      externalRad: 'බාහිර අරය r_ext:',
      wallThickness: 'බිත්ති ඝනකම t = r_ext - r_int:',
      capHorizDia: 'තිරස් විෂ්කම්භය d_H = |x₂ - x₁|:',
      capVertDia: 'සිරස් විෂ්කම්භය d_V = |y₂ - y₁|:',
      capMeanDia: 'මධ්‍යන්‍ය සිදුරු විෂ්කම්භය d_mean:',
      capRadius: 'සිදුරේ අරය r:',
      capArea: 'හරස්කඩ වර්ගඵලය A = π·r²:',
      realDepth: 'සත්‍ය ඝනකම / සත්‍ය ගැඹුර d = |R₃ - R₁|:',
      apparentDepth: 'දෘශ්‍ය ගැඹුර d\' = |R₃ - R₂|:',
      refractiveIndex: 'වීදුරුවේ වර්තනාංකය n = සත්‍ය ගැඹුර / දෘශ්‍ය ගැඹුර = d / d\':',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. රබර් නල සහ කේශික නල සඳහා වර්නියර් කැලිපරය වෙනුවට චල අන්වීක්ෂය තෝරා ගන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: රබර් ප්‍රත්‍යාස්ථ ද්‍රව්‍යයක් බැවින් කැලිපර හනුවල තෙරපුමෙන් විරූපණය වී සෘණ දෝෂ ඇතිවේ. කේශික සිදුරු කැලිපර හනුවලට වඩා ඉතා සිහින්ය (< 1 mm). චල අන්වීක්ෂය ස්පර්ශ රහිත දෘශ්‍ය මිනුම් ලබාදෙයි.',
      q1Rubric: 'රූබ්රිකය: ප්‍රත්‍යාස්ථ ද්‍රව්‍ය විරූපණය/සිහින් සිදුරට ලකුණු 1; ස්පර්ශ රහිත දෘශ්‍ය මිනුම් වාසියට ලකුණු 1.',
      q2Title: '2. පාඨාංක ගැනීමේදී එකම දිශාවකට අන්වීක්ෂය ගෙන යා යුත්තේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: ගමන් දිශාව ආපසු හැරවීමේදී ඉස්කුරුප්පු පොටවල් අතර පරතරය නිසා ඇතිවන පාශ්වික දෝෂය (backlash error) මඟහරවා ගැනීමට.',
      q2Rubric: 'රූබ්රිකය: පාශ්වික දෝෂය සඳහන් කිරීමට ලකුණු 1; ඉස්කුරුප්පු පොට බුරුලට ලකුණු 1.',
      q3Title: '3. කේශික සිදුර සඳහා තිරස් හා සිරස් දිශා දෙකටම මිනුම් ගන්නේ ඇයි?',
      q3Model: 'ආදර්ශ පිළිතුර: කේශික නලවල සිදුර පරිපූර්ණ වෘත්තාකාර නොවී අණ්ඩාකාර විය හැකි බැවින්, ලම්බක දිශා දෙකක විෂ්කම්භ මැන මධ්‍යන්‍යය ගැනීමෙන් අණ්ඩාකාර දෝෂය මඟහැරේ.',
      q3Rubric: 'රූබ්රිකය: අණ්ඩාකාර හැඩයට ලකුණු 1; ලම්බක දිශා මධ්‍යන්‍යයෙන් දෝෂය මඟහැරීමට ලකුණු 1.',
      q1TitleApparent: '1. වීදුරු කුට්ටියේ ඉහළ පෘෂ්ඨය මත ලයිකොපෝඩියම් කුඩු හෝ හුණු කුඩු ඉසින්නේ ඇයි?',
      q1ModelApparent: 'ආදර්ශ පිළිතුර: පිරිසිදු ඔප දැමූ වීදුරු පාරදෘශ්‍ය බැවින් එහි උඩ පෘෂ්ඨය වෙත අන්වීක්ෂය නාභිගත කිරීම අපහසුය. ලයිකොපෝඩියම් අංශු මගින් උඩ පෘෂ්ඨය මත පැහැදිලි නාභිගත ලක්ෂ්‍ය සපයයි.',
      q1RubricApparent: 'රූබ්රිකය: පාරදෘශ්‍ය පෘෂ්ඨය නාභිගත කිරීමේ අපහසුවට ලකුණු 1; පැහැදිලි නාභිගත ලක්ෂ්‍ය සැපයීමට ලකුණු 1.',
      q2TitleApparent: '2. R₁, R₂, R₃ සිරස් පාඨාංක ගැනීමේදී අනුගමනය කළ යුතු දිශාව කුමක්ද?',
      q2ModelApparent: 'ආදර්ශ පිළිතුර: අන්වීක්ෂය පහළ සිට ඉහළට (R₁ → R₂ → R₃) එකම දිශාවකට පමණක් ඉස්කුරුප්පුව කරකවා එසවිය යුතුය. එමගින් සිරස් ඉස්කුරුප්පුවේ පාශ්වික දෝෂය (backlash) ඉවත් වේ.',
      q2RubricApparent: 'රූබ්රිකය: එකම දිශාවකට එසවීමට ලකුණු 1; පාශ්වික දෝෂය වැළැක්වීමට ලකුණු 1.',
      q3TitleApparent: '3. වීදුරු කුට්ටිය තුළින් බලන විට ලකුණ එසවී පෙනෙන්නේ ඇයි?',
      q3ModelApparent: 'ආදර්ශ පිළිතුර: වීදුරුව (ඝන මාධ්‍යය) තුළ සිට වාතයට (විරල මාධ්‍යය) ආලෝක කිරණ ගමන් කිරීමේදී අභිලම්භයෙන් ඉවතට වර්තනය වේ. එම කිරණ ආපසු දික් කිරීමේදී ඉහළින් අතථ්‍ය ප්‍රතිබිම්බයක් සෑදේ.',
      q3RubricApparent: 'රූබ්රිකය: අභිලම්භයෙන් ඉවතට වර්තනය වීමට ලකුණු 1; අතථ්‍ය ප්‍රතිබිම්බය ඉහළින් සෑදීමට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleSelectInvestigation = (type: MicroscopeInvestigation) => {
    updateObservations({ investigationType: type });
  };

  const handleLoadSample = () => {
    if (investigationType === 'tube') {
      loadSampleObservations({
        investigationType: 'tube',
        x1: '33.60',
        x2: '36.80',
        x3: '43.20',
        x4: '46.40',
      });
    } else if (investigationType === 'capillary') {
      loadSampleObservations({
        investigationType: 'capillary',
        capX1: '20.10',
        capX2: '20.72',
        capY1: '14.20',
        capY2: '14.84',
      });
    } else {
      loadSampleObservations({
        investigationType: 'apparent_depth',
        r1Bottom: '10.00',
        r2Image: '16.71',
        r3Surface: '30.00',
      });
    }
  };

  const handleClear = () => {
    reset();
  };

  // Tube calculations
  const nX1 = parseFloat(x1);
  const nX2 = parseFloat(x2);
  const nX3 = parseFloat(x3);
  const nX4 = parseFloat(x4);
  const isTubeValid = !isNaN(nX1) && !isNaN(nX2) && !isNaN(nX3) && !isNaN(nX4);
  const dims = isTubeValid ? calculateTravellingMicroscopeDimensions(nX1, nX2, nX3, nX4) : null;
  const expectedDInt = dims ? dims.internalDiameter : null;
  const expectedDExt = dims ? dims.externalDiameter : null;
  const expectedRInt = dims ? dims.internalRadius : null;
  const expectedRExt = dims ? dims.externalRadius : null;
  const expectedThickness = dims ? dims.wallThickness : null;

  // Capillary calculations
  const nCapX1 = parseFloat(capX1);
  const nCapX2 = parseFloat(capX2);
  const nCapY1 = parseFloat(capY1);
  const nCapY2 = parseFloat(capY2);
  const isCapValid = !isNaN(nCapX1) && !isNaN(nCapX2) && !isNaN(nCapY1) && !isNaN(nCapY2);
  const capHorizDia = isCapValid ? Number(Math.abs(nCapX2 - nCapX1).toFixed(3)) : null;
  const capVertDia = isCapValid ? Number(Math.abs(nCapY2 - nCapY1).toFixed(3)) : null;
  const capDims =
    capHorizDia !== null && capVertDia !== null
      ? calculateCapillaryBoreDimensions(capHorizDia, capVertDia)
      : null;

  // Apparent depth calculations (Exp 16)
  const nR1 = parseFloat(r1Bottom);
  const nR2 = parseFloat(r2Image);
  const nR3 = parseFloat(r3Surface);
  const isApparentValid = !isNaN(nR1) && !isNaN(nR2) && !isNaN(nR3);
  const apparentDims = isApparentValid ? calculateApparentDepthRefractiveIndex(nR1, nR2, nR3) : null;

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    if (investigationType === 'tube') {
      const stuDInt = parseFloat(calculations.internalDia || '');
      if (expectedDInt !== null) {
        const isDIntCorrect = !isNaN(stuDInt) && Math.abs(stuDInt - expectedDInt) <= 0.02;
        results.internalDia = isDIntCorrect;
        if (!isDIntCorrect) {
          feedback.internalDia = {
            en: `Internal diameter d_int = x₃ (${x3}) - x₂ (${x2}) = ${expectedDInt} mm.`,
            si: `අභ්‍යන්තර විෂ්කම්භය d_int = x₃ (${x3}) - x₂ (${x2}) = ${expectedDInt} mm විය යුතුය.`,
          };
        }
      }

      const stuDExt = parseFloat(calculations.externalDia || '');
      if (expectedDExt !== null) {
        const isDExtCorrect = !isNaN(stuDExt) && Math.abs(stuDExt - expectedDExt) <= 0.02;
        results.externalDia = isDExtCorrect;
        if (!isDExtCorrect) {
          feedback.externalDia = {
            en: `External diameter d_ext = x₄ (${x4}) - x₁ (${x1}) = ${expectedDExt} mm.`,
            si: `බාහිර විෂ්කම්භය d_ext = x₄ (${x4}) - x₁ (${x1}) = ${expectedDExt} mm විය යුතුය.`,
          };
        }
      }

      const stuThick = parseFloat(calculations.wallThickness || '');
      if (expectedThickness !== null) {
        const isThickCorrect = !isNaN(stuThick) && Math.abs(stuThick - expectedThickness) <= 0.02;
        results.wallThickness = isThickCorrect;
        if (!isThickCorrect) {
          feedback.wallThickness = {
            en: `Wall thickness t = r_ext (${expectedRExt}) - r_int (${expectedRInt}) = ${expectedThickness} mm.`,
            si: `බිත්ති ඝනකම t = r_ext (${expectedRExt}) - r_int (${expectedRInt}) = ${expectedThickness} mm විය යුතුය.`,
          };
        }
      }
    } else if (investigationType === 'capillary') {
      // Capillary checks
      const stuMeanDia = parseFloat(calculations.capMeanDia || '');
      if (capDims) {
        const isMeanCorrect = !isNaN(stuMeanDia) && Math.abs(stuMeanDia - capDims.meanDiameterMm) <= 0.02;
        results.capMeanDia = isMeanCorrect;
        if (!isMeanCorrect) {
          feedback.capMeanDia = {
            en: `Mean diameter = (d_H [${capHorizDia}] + d_V [${capVertDia}]) / 2 = ${capDims.meanDiameterMm} mm.`,
            si: `මධ්‍යන්‍ය විෂ්කම්භය = (d_H [${capHorizDia}] + d_V [${capVertDia}]) / 2 = ${capDims.meanDiameterMm} mm විය යුතුය.`,
          };
        }
      }

      const stuArea = parseFloat(calculations.capArea || '');
      if (capDims) {
        const isAreaCorrect = !isNaN(stuArea) && Math.abs(stuArea - capDims.crossSectionAreaMm2) <= 0.01;
        results.capArea = isAreaCorrect;
        if (!isAreaCorrect) {
          feedback.capArea = {
            en: `Cross-sectional area A = π·r² ≈ ${capDims.crossSectionAreaMm2} mm².`,
            si: `හරස්කඩ වර්ගඵලය A = π·r² ≈ ${capDims.crossSectionAreaMm2} mm² විය යුතුය.`,
          };
        }
      }
    } else {
      // Apparent depth checks (Exp 16)
      const stuReal = parseFloat(calculations.realDepth || '');
      if (apparentDims) {
        const isRealCorrect = !isNaN(stuReal) && Math.abs(stuReal - apparentDims.realDepthMm) <= 0.02;
        results.realDepth = isRealCorrect;
        if (!isRealCorrect) {
          feedback.realDepth = {
            en: `Real depth d = |R₃ (${r3Surface}) - R₁ (${r1Bottom})| = ${apparentDims.realDepthMm} mm.`,
            si: `සත්‍ය ගැඹුර d = |R₃ (${r3Surface}) - R₁ (${r1Bottom})| = ${apparentDims.realDepthMm} mm විය යුතුය.`,
          };
        }
      }

      const stuApparent = parseFloat(calculations.apparentDepth || '');
      if (apparentDims) {
        const isApparentCorrect = !isNaN(stuApparent) && Math.abs(stuApparent - apparentDims.apparentDepthMm) <= 0.02;
        results.apparentDepth = isApparentCorrect;
        if (!isApparentCorrect) {
          feedback.apparentDepth = {
            en: `Apparent depth d' = |R₃ (${r3Surface}) - R₂ (${r2Image})| = ${apparentDims.apparentDepthMm} mm.`,
            si: `දෘශ්‍ය ගැඹුර d' = |R₃ (${r3Surface}) - R₂ (${r2Image})| = ${apparentDims.apparentDepthMm} mm විය යුතුය.`,
          };
        }
      }

      const stuN = parseFloat(calculations.refractiveIndex || '');
      if (apparentDims) {
        const isNCorrect = !isNaN(stuN) && Math.abs(stuN - apparentDims.refractiveIndex) <= 0.03;
        results.refractiveIndex = isNCorrect;
        if (!isNCorrect) {
          feedback.refractiveIndex = {
            en: `Refractive index n = Real Depth (${apparentDims.realDepthMm}) / Apparent Depth (${apparentDims.apparentDepthMm}) = ${apparentDims.refractiveIndex}.`,
            si: `වර්තනාංකය n = සත්‍ය ගැඹුර (${apparentDims.realDepthMm}) / දෘශ්‍ය ගැඹුර (${apparentDims.apparentDepthMm}) = ${apparentDims.refractiveIndex} විය යුතුය.`,
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
                { id: 'tube', label: t.invTube },
                { id: 'capillary', label: t.invCapillary },
                { id: 'apparent_depth', label: t.invApparentDepth },
              ].map((inv) => (
                <button
                  key={inv.id}
                  type="button"
                  onClick={() => handleSelectInvestigation(inv.id as MicroscopeInvestigation)}
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

      {/* Interactive Instrument Workspace (Used primarily for Rubber Tube) */}
      <TravellingMicroscope
        locale={locale}
        onReadingsRecorded={(data) => {
          if (investigationType === 'tube') {
            updateObservations({
              x1: data.x1.toFixed(2),
              x2: data.x2.toFixed(2),
              x3: data.x3.toFixed(2),
              x4: data.x4.toFixed(2),
            });
          } else {
            updateObservations({
              capX1: data.x1.toFixed(2),
              capX2: data.x2.toFixed(2),
            });
          }
        }}
      />

      {/* Observation Table Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div>
            <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {investigationType === 'tube'
                ? t.obsTableTube
                : investigationType === 'capillary'
                ? t.obsTableCap
                : t.obsTableApparent}
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
          {investigationType === 'tube' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.x1Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={x1}
                    onChange={(e) => updateObservations({ x1: e.target.value })}
                    placeholder="33.60"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.x2Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={x2}
                    onChange={(e) => updateObservations({ x2: e.target.value })}
                    placeholder="36.80"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.x3Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={x3}
                    onChange={(e) => updateObservations({ x3: e.target.value })}
                    placeholder="43.20"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.x4Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={x4}
                    onChange={(e) => updateObservations({ x4: e.target.value })}
                    placeholder="46.40"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>
            </div>
          ) : investigationType === 'capillary' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.capX1Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={capX1}
                    onChange={(e) => updateObservations({ capX1: e.target.value })}
                    placeholder="20.10"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.capX2Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={capX2}
                    onChange={(e) => updateObservations({ capX2: e.target.value })}
                    placeholder="20.72"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.capY1Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={capY1}
                    onChange={(e) => updateObservations({ capY1: e.target.value })}
                    placeholder="14.20"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.capY2Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={capY2}
                    onChange={(e) => updateObservations({ capY2: e.target.value })}
                    placeholder="14.84"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.r1Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={r1Bottom}
                    onChange={(e) => updateObservations({ r1Bottom: e.target.value })}
                    placeholder="10.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.r2Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={r2Image}
                    onChange={(e) => updateObservations({ r2Image: e.target.value })}
                    placeholder="16.71"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.r3Label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={r3Surface}
                    onChange={(e) => updateObservations({ r3Surface: e.target.value })}
                    placeholder="30.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                  <span className="text-xs text-[#64748B]">mm</span>
                </div>
              </div>
            </div>
          )}

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
                {investigationType === 'tube'
                  ? t.calcTitleTube
                  : investigationType === 'capillary'
                  ? t.calcTitleCap
                  : t.calcTitleApparent}
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

            {investigationType === 'tube' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.internalDia}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedDInt !== null ? `${expectedDInt} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.internalDia || ''}
                      onChange={(e) => updateCalculation('internalDia', e.target.value)}
                      placeholder="d_int (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.externalDia}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {expectedDExt !== null ? `${expectedDExt} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.externalDia || ''}
                      onChange={(e) => updateCalculation('externalDia', e.target.value)}
                      placeholder="d_ext (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.internalRad}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedRInt !== null ? `${expectedRInt} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.externalRad}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedRExt !== null ? `${expectedRExt} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.wallThickness}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {expectedThickness !== null ? `${expectedThickness} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.wallThickness || ''}
                      onChange={(e) => updateCalculation('wallThickness', e.target.value)}
                      placeholder="t (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            ) : investigationType === 'capillary' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.capHorizDia}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {capHorizDia !== null ? `${capHorizDia} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.capVertDia}</span>
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {capVertDia !== null ? `${capVertDia} mm` : '—'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.capMeanDia}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {capDims ? `${capDims.meanDiameterMm} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.capMeanDia || ''}
                      onChange={(e) => updateCalculation('capMeanDia', e.target.value)}
                      placeholder="d_mean (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.capArea}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {capDims ? `${capDims.crossSectionAreaMm2} mm²` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.capArea || ''}
                      onChange={(e) => updateCalculation('capArea', e.target.value)}
                      placeholder="A (mm²)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.realDepth}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {apparentDims ? `${apparentDims.realDepthMm.toFixed(2)} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.realDepth || ''}
                      onChange={(e) => updateCalculation('realDepth', e.target.value)}
                      placeholder="d (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.apparentDepth}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {apparentDims ? `${apparentDims.apparentDepthMm.toFixed(2)} mm` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.apparentDepth || ''}
                      onChange={(e) => updateCalculation('apparentDepth', e.target.value)}
                      placeholder="d' (mm)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
                <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.refractiveIndex}</span>
                  {mode === 'guided' || showSolution ? (
                    <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {apparentDims ? `${apparentDims.refractiveIndex.toFixed(3)}` : '—'}
                    </span>
                  ) : (
                    <input
                      type="text"
                      value={calculations.refractiveIndex || ''}
                      onChange={(e) => updateCalculation('refractiveIndex', e.target.value)}
                      placeholder="n (e.g. 1.50)"
                      className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                    />
                  )}
                </div>
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
                {investigationType === 'apparent_depth' ? t.q1TitleApparent : t.q1Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {investigationType === 'apparent_depth' ? t.q1ModelApparent : t.q1Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">
                  {investigationType === 'apparent_depth' ? t.q1RubricApparent : t.q1Rubric}
                </span>
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
                {investigationType === 'apparent_depth' ? t.q2TitleApparent : t.q2Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {investigationType === 'apparent_depth' ? t.q2ModelApparent : t.q2Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">
                  {investigationType === 'apparent_depth' ? t.q2RubricApparent : t.q2Rubric}
                </span>
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
                {investigationType === 'apparent_depth' ? t.q3TitleApparent : t.q3Title}
              </span>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                {investigationType === 'apparent_depth' ? t.q3ModelApparent : t.q3Model}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#0F766E] font-medium">
                  {investigationType === 'apparent_depth' ? t.q3RubricApparent : t.q3Rubric}
                </span>
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

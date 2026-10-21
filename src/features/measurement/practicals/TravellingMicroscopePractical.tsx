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
} from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

export type MicroscopeInvestigation = 'tube' | 'capillary';

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

  const [showSolution, setShowSolution] = useState(false);

  const t = {
    en: {
      title: 'Practical 4: Internal & External Radii of a Rubber Tube & Capillary Bore',
      aim: 'Aim: To determine the internal and external radii and wall thickness of a rubber tube, and the internal bore diameter and cross-sectional area of a glass capillary tube using a travelling microscope.',
      apparatus: 'Apparatus: Travelling Microscope (Least Count 0.01 mm), Clean rubber tube cross-section, Uniform capillary tube, Illumination lamp, Glass slide.',
      theoryTitle: 'Theory & Experimental Significance',
      theoryText: 'Soft, elastic materials like rubber deform easily under caliper jaw pressure, leading to systematic compression errors. Likewise, capillary bores (< 1 mm) cannot be accessed by calipers without destructive errors. A travelling microscope provides non-contact optical measurement. 1. Rubber tube: Internal diameter d_int = x₃ - x₂ (r_int = d_int/2); External diameter d_ext = x₄ - x₁ (r_ext = d_ext/2); Wall thickness t = r_ext - r_int. 2. Capillary tube: Horizontal traverse d_H = |x₂ - x₁| and vertical traverse d_V = |y₂ - y₁| give mean bore diameter d_mean = (d_H + d_V) / 2 and cross-section area A = π·r².',
      procedure: 'Procedure: 1. Select investigation target. 2. Focus the eyepiece on the crosswires to remove parallax, then focus the objective on the edges. 3. Traverse in one continuous direction to record boundary positions. 4. Compute diameters, radii, wall thickness, or cross-sectional area.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      invSelector: 'Investigation Target:',
      invTube: 'Rubber Tube (Radii & Wall Thickness)',
      invCapillary: 'Capillary Tube (Bore Diameter & Area)',
      obsTableTube: 'Microscope Rubber Tube Boundary Traversal Observations',
      obsTableCap: 'Microscope Capillary Bore Orthogonal Traversal Observations',
      x1Label: 'Left Outer Boundary (x₁):',
      x2Label: 'Left Inner Boundary (x₂):',
      x3Label: 'Right Inner Boundary (x₃):',
      x4Label: 'Right Outer Boundary (x₄):',
      capX1Label: 'Horizontal Left Edge (x₁):',
      capX2Label: 'Horizontal Right Edge (x₂):',
      capY1Label: 'Vertical Bottom Edge (y₁):',
      capY2Label: 'Vertical Top Edge (y₂):',
      calcTitleTube: 'Calculated Dimensions & Wall Thickness',
      calcTitleCap: 'Calculated Capillary Bore Dimensions',
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
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4: චල අන්වීක්ෂය මගින් රබර් නලයක අරය සහ කේශික සිදුරේ විෂ්කම්භය නිර්ණය කිරීම',
      aim: 'අරමුණ: චල අන්වීක්ෂයක් භාවිතයෙන් රබර් නලයක අභ්‍යන්තර හා බාහිර අරයන් සහ බිත්ති ඝනකම, සහ කේශික නලයක සිදුරේ විෂ්කම්භය සහ හරස්කඩ වර්ගඵලය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: චල අන්වීක්ෂය (කුඩාම මිනුම 0.01 mm), කපාගත් රබර් නල කොටස, ඒකාකාර කේශික නලය, ආලෝක ප්‍රභවය, වීදුරු තහඩුව.',
      theoryTitle: 'මූලධර්මය සහ ප්‍රායෝගික වැදගත්කම',
      theoryText: 'රබර් වැනි ප්‍රත්‍යාස්ථ ද්‍රව්‍ය කැලිපර හනුවල තෙරපුමෙන් පහසුවෙන් විරූපණය වන අතර කේශික සිදුරු (< 1 mm) ඉතා සිහින් බැවින් ස්පර්ශ රහිත දෘශ්‍ය මිනුම් අවශ්‍ය වේ. 1. රබර් නලය: අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂ (r_int = d_int/2); බාහිර විෂ්කම්භය d_ext = x₄ - x₁ (r_ext = d_ext/2); බිත්ති ඝනකම t = r_ext - r_int. 2. කේශික නලය: තිරස් විෂ්කම්භය d_H = |x₂ - x₁| සහ සිරස් විෂ්කම්භය d_V = |y₂ - y₁| මගින් මධ්‍යන්‍ය විෂ්කම්භය d_mean = (d_H + d_V)/2 සහ හරස්කඩ වර්ගඵලය A = π·r² ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. පරීක්ෂණ අරමුණ තෝරන්න. 2. විස්ථාපන දෝෂය ඉවත් වන සේ උපනෙත හරස් කම්බි වෙත නාභිගත කර, පසුව නලය වෙත අවනෙත නාභිගත කිරීම. 3. පාශ්වික දෝෂය වැළැක්වීමට එකම දිශාවකට ගමන් කර පාඨාංක ගැනීම. 4. අරයන්, බිත්ති ඝනකම හෝ සිදුරේ වර්ගඵලය ගණනය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      invSelector: 'පරීක්ෂණ අරමුණ:',
      invTube: 'රබර් නලය (අරය සහ බිත්ති ඝනකම)',
      invCapillary: 'කේශික නලය (සිදුරේ විෂ්කම්භය සහ වර්ගඵලය)',
      obsTableTube: 'අන්වීක්ෂ රබර් නල මායිම් නිරීක්ෂණ වගුව',
      obsTableCap: 'අන්වීක්ෂ කේශික සිදුරු ලම්බක නිරීක්ෂණ වගුව',
      x1Label: 'වම් බාහිර මායිම (x₁):',
      x2Label: 'වම් අභ්‍යන්තර මායිම (x₂):',
      x3Label: 'දකුණු අභ්‍යන්තර මායිම (x₃):',
      x4Label: 'දකුණු බාහිර මායිම (x₄):',
      capX1Label: 'තිරස් වම් මායිම (x₁):',
      capX2Label: 'තිරස් දකුණු මායිම (x₂):',
      capY1Label: 'සිරස් පහළ මායිම (y₁):',
      capY2Label: 'සිරස් ඉහළ මායිම (y₂):',
      calcTitleTube: 'ගණනය කළ මාන සහ බිත්ති ඝනකම',
      calcTitleCap: 'ගණනය කළ කේශික සිදුරු මාන',
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
    } else {
      loadSampleObservations({
        investigationType: 'capillary',
        capX1: '20.10',
        capX2: '20.72',
        capY1: '14.20',
        capY2: '14.84',
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
    } else {
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
              {investigationType === 'tube' ? t.obsTableTube : t.obsTableCap}
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
          ) : (
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
                {investigationType === 'tube' ? t.calcTitleTube : t.calcTitleCap}
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
            ) : (
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

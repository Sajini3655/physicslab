'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Scan, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateLensFocalLengthDisplacement } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface LensFocalLengthPracticalProps {
  locale?: Locale;
}

interface ConvexLensTrial {
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
    observations,
    updateObservations,
    loadSampleObservations,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-21-lens',
    defaultObservations: {
      subMode: 'convex',
      nominalFocalLengthCm: '15.0',
      nominalConcaveFocalLengthCm: '30.0',
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
  });

  const subMode = (observations.subMode || 'convex') as 'convex' | 'concave';
  const setSubMode = (mode: 'convex' | 'concave') => updateObservations({ subMode: mode });

  const nominalFocalLengthCm = observations.nominalFocalLengthCm || '15.0';
  const nominalConcaveFocalLengthCm = observations.nominalConcaveFocalLengthCm || '30.0';

  const convexTrials: ConvexLensTrial[] =
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
      aim: 'Aim: To determine the focal length of a convex lens by the displacement (conjugate foci) method (Exp 21.1) and a concave lens using an auxiliary convex lens combination (Exp 21.2).',
      apparatus: 'Apparatus: Optical bench with uprights, biconvex lens, biconcave lens, illuminated wire gauze object, white receiving screen, metre scale.',
      modeConvex: '21.1 Convex Lens (Displacement Method)',
      modeConcave: '21.2 Concave Lens (Auxiliary Lens Method)',
      theoryTitleConvex: 'Convex Lens Displacement Method (Exp 21.1)',
      theoryTextConvex: 'When screen distance D > 4f, two lens positions produce sharp real images on the screen. Let displacement between positions be d = |x₂ - x₁|. The focal length is given by: f = (D² - d²) / (4D). Eliminates index error and bench centering deviations.',
      theoryTitleConcave: 'Concave Lens Auxiliary Combination Method (Exp 21.2)',
      theoryTextConcave: 'A concave lens alone produces virtual images and cannot project onto a screen. An auxiliary convex lens L₁ forms a real image I₁. Inserting the concave lens L₂ between L₁ and I₁ makes I₁ a virtual object at distance u. The screen is moved back to receive the new real image I₂ at distance v from L₂. The focal length is: 1/f₂ = 1/v - 1/u  ⟹  |f₂| = (u × v) / (v - u).',
      procedureConvex: 'Procedure: 1. Estimate f by distant window imaging. 2. Set D > 4f (e.g. 80 cm). 3. Move lens to find magnified sharp image at x₁, then diminished sharp image at x₂. 4. Record displacement d = |x₂ - x₁| and compute f.',
      procedureConcave: 'Procedure: 1. Focus illuminated object with auxiliary convex lens to form sharp image I₁ on screen; note position. 2. Place concave lens between convex lens and screen; measure distance u from concave lens to I₁. 3. Move screen away to locate new sharp image I₂; measure distance v from concave lens to I₂. 4. Calculate f₂ = (u·v)/(u - v).',
      obsConvexTitle: 'Convex Lens Observations (D² - d²)/(4D)',
      obsConcaveTitle: 'Concave Lens Observations (Virtual Object u & Real Image v)',
      trialCol: 'Trial',
      screenDistCol: 'Screen Distance D (cm)',
      pos1Col: 'Lens Position 1 x₁ (cm)',
      pos2Col: 'Lens Position 2 x₂ (cm)',
      dispCol: 'Displacement d (cm)',
      focalCol: 'Focal Length f (cm)',
      virtualDistCol: 'Virtual Object Distance u (cm)',
      realDistCol: 'Real Image Distance v (cm)',
      concaveFocalCol: 'Focal Length |f₂| (cm)',
      calcSummaryTitle: 'Analytical Summary & Verification',
      meanFocalConvex: 'Mean Calculated Convex Focal Length (f):',
      meanFocalConcave: 'Mean Calculated Concave Focal Length (|f₂|):',
      nominalFocal: 'Nominal Benchmark Focal Length:',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Focal Length Verified Within Standard Tolerances (< 3.0%)',
      verdictFail: 'Check Conjugate Positions or Alignment',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. For convex lens, verify D > 4f strictly. 2. Optical centers of object, lenses, and screen must align on the same axis. 3. Rock upright back and forth to find the exact sharp focus without parallax.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 21.1 සහ 21.2: උත්තල සහ අවතල කාචවල නාභීය දුර නිර්ණය කිරීම',
      aim: 'අරමුණ: විස්ථාපන ක්‍රමයෙන් උත්තල කාචයක නාභීය දුර සෙවීම (21.1) සහ ආධාරක උත්තල කාචයක් භාවිතයෙන් අවතල කාචයක නාභීය දුර සෙවීම (21.2).',
      apparatus: 'උපකරණ: ප්‍රකාශ බංකුව, උත්තල කාචය, අවතල කාචය, ආලෝකමත් වස්තුව (කම්බි දැල), සුදු තිරය, මීටර් රූල.',
      modeConvex: '21.1 උත්තල කාචය (විස්ථාපන ක්‍රමය)',
      modeConcave: '21.2 අවතල කාචය (ආධාරක කාච ක්‍රමය)',
      theoryTitleConvex: 'උත්තල කාච විස්ථාපන ක්‍රමය (පරීක්ෂණ 21.1)',
      theoryTextConvex: 'D > 4f වන විට තිරය මත තියුණු ප්‍රතිබිම්බ ලැබෙන කාච පිහිටුම් දෙකක් පවතී. පිහිටුම් අතර විස්ථාපනය d = |x₂ - x₁| නම් නාභීය දුර f = (D² - d²) / (4D) වේ.',
      theoryTitleConcave: 'අවතල කාච ආධාරක කාච සංයෝජන ක්‍රමය (පරීක්ෂණ 21.2)',
      theoryTextConcave: 'අවතල කාචයකින් තනිව තිරයක් මත තාත්වික ප්‍රතිබිම්බ සෑදිය නොහැක. ආධාරක උත්තල කාචයකින් සාදන තාත්වික ප්‍රතිබිම්බය I₁ අවතල කාචයට අතාත්වික වස්තුවක් (දුර u) වේ. තිරය පසුපසට ගෙන නව තාත්වික ප්‍රතිබිම්බය I₂ (දුර v) ලබාගනී. 1/f₂ = 1/v - 1/u  ⟹  |f₂| = (u × v) / (v - u).',
      procedureConvex: 'ක්‍රමවේදය: 1. දළ නාභීය දුර සොයාගන්න. 2. D > 4f වන සේ තබන්න. 3. විශාලිත ප්‍රතිබිම්බයේ කාච පිහිටුම x₁ ද කුඩා වූ ප්‍රතිබිම්බයේ කාච පිහිටුම x₂ ද සටහන් කර d සහ f ගණනය කරන්න.',
      procedureConcave: 'ක්‍රමවේදය: 1. ආධාරක උත්තල කාචයෙන් තිරය මත I₁ සාදා පිහිටුම සටහන් කරන්න. 2. අවතල කාචය අතරට තබා කාචයේ සිට I₁ ට දුර u මනින්න. 3. තිරය පසුපසට ගෙන නව ප්‍රතිබිම්බය I₂ ලබාගෙන දුර v මනින්න. 4. f₂ ගණනය කරන්න.',
      obsConvexTitle: 'උත්තල කාච නිරීක්ෂණ (D² - d²)/(4D)',
      obsConcaveTitle: 'අවතල කාච නිරීක්ෂණ (අතාත්වික වස්තු දුර u සහ තාත්වික ප්‍රතිබිම්බ දුර v)',
      trialCol: 'වාරය',
      screenDistCol: 'තිර දුර D (cm)',
      pos1Col: 'කාච පිහිටුම 1 x₁ (cm)',
      pos2Col: 'කාච පිහිටුම 2 x₂ (cm)',
      dispCol: 'විස්ථාපනය d (cm)',
      focalCol: 'නාභීය දුර f (cm)',
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
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. උත්තල කාචයේදී D > 4f කොන්දේසිය තෘප්ත විය යුතුය. 2. සියලු උපකරණවල ප්‍රකාශ කේන්ද්‍ර එකම අක්ෂයේ පිහිටිය යුතුය. 3. විස්ථාපනය මැනීමේදී දෘෂ්ටි විලාසය වළක්වා ගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  // Convex calculations
  const calculatedConvexTrials = convexTrials.map((tr) => {
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

  const validConvexFs = calculatedConvexTrials.map((t) => t.fCm).filter((f): f is number => f !== null && f > 0);
  const meanConvexFocal = validConvexFs.length > 0 ? validConvexFs.reduce((a, b) => a + b, 0) / validConvexFs.length : null;
  const nomConvexF = parseFloat(nominalFocalLengthCm) || 15.0;
  const convexDiff = meanConvexFocal !== null && nomConvexF > 0 ? Math.abs((meanConvexFocal - nomConvexF) / nomConvexF) * 100 : null;
  const isConvexPass = convexDiff !== null && convexDiff <= 3.0;

  // Concave calculations: 1/f = 1/v - 1/u => |f| = (u*v)/(v - u)
  const calculatedConcaveTrials = concaveTrials.map((tr) => {
    const u = parseFloat(tr.virtualDistUCm);
    const v = parseFloat(tr.realDistVCm);
    if (!isNaN(u) && !isNaN(v) && v > u && u > 0) {
      const fVal = (u * v) / (v - u);
      return { ...tr, fVal };
    }
    return { ...tr, fVal: null };
  });

  const validConcaveFs = calculatedConcaveTrials.map((t) => t.fVal).filter((f): f is number => f !== null && f > 0);
  const meanConcaveFocal = validConcaveFs.length > 0 ? validConcaveFs.reduce((a, b) => a + b, 0) / validConcaveFs.length : null;
  const nomConcaveF = parseFloat(nominalConcaveFocalLengthCm) || 30.0;
  const concaveDiff = meanConcaveFocal !== null && nomConcaveF > 0 ? Math.abs((meanConcaveFocal - nomConcaveF) / nomConcaveF) * 100 : null;
  const isConcavePass = concaveDiff !== null && concaveDiff <= 3.0;

  const updateConvexTrial = (id: number, field: keyof ConvexLensTrial, val: string) => {
    const updated = convexTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ convexTrials: updated });
  };

  const updateConcaveTrial = (id: number, field: keyof ConcaveLensTrial, val: string) => {
    const updated = concaveTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ concaveTrials: updated });
  };

  const handleLoadSample = () => {
    if (subMode === 'convex') {
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
          <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p><strong>{t.apparatus}</strong></p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {subMode === 'convex' ? t.theoryTitleConvex : t.theoryTitleConcave}
            </span>
            <p>{subMode === 'convex' ? t.theoryTextConvex : t.theoryTextConcave}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {subMode === 'convex' ? t.procedureConvex : t.procedureConcave}
          </p>
        </CardContent>
      </Card>

      {/* Mode Switcher & Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'convex' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('convex')}
            >
              <Scan className="w-3.5 h-3.5 mr-1" />
              {t.modeConvex}
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
          {/* Optical Schematic SVG */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            {subMode === 'convex' ? (
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
                <rect x="294" y="50" width="12" height="40" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
                <text x="300" y="42" textAnchor="middle" fontSize="8" fill="#1E293B" fontWeight="bold">I₂ (New Image)</text>

                {/* Distance u: 160 to 220 */}
                <line x1="160" y1="110" x2="220" y2="110" stroke="#DB2777" strokeWidth="1.2" />
                <text x="190" y="105" textAnchor="middle" fontSize="8" fill="#DB2777" fontWeight="bold">u</text>

                {/* Distance v: 160 to 300 */}
                <line x1="160" y1="150" x2="300" y2="150" stroke="#0F766E" strokeWidth="1.2" />
                <text x="230" y="165" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">v</text>
              </svg>
            )}
          </div>

          {/* SubMode 1: Convex Lens Table & Results */}
          {subMode === 'convex' ? (
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
                    {calculatedConvexTrials.map((tr) => (
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
                      {meanConvexFocal !== null ? `${meanConvexFocal.toFixed(2)} cm` : '—'}
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
                      {convexDiff !== null ? `${convexDiff.toFixed(2)}%` : '—'}
                    </span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                  isConvexPass
                    ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                }`}>
                  {isConvexPass ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                  <span>{isConvexPass ? t.verdictPass : t.verdictFail}</span>
                </div>
              </div>
            </div>
          ) : (
            /* SubMode 2: Concave Lens Table & Results */
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanFocalConcave}</span>
                    <span className="text-base font-bold text-[#DB2777]">
                      {meanConcaveFocal !== null ? `${meanConcaveFocal.toFixed(2)} cm` : '—'}
                    </span>
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
                      {concaveDiff !== null ? `${concaveDiff.toFixed(2)}%` : '—'}
                    </span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                  isConcavePass
                    ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                }`}>
                  {isConcavePass ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                  <span>{isConcavePass ? t.verdictPass : t.verdictFail}</span>
                </div>
              </div>
            </div>
          )}

          {/* Precautions Footer */}
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.precautionsTitle}</span>
            <p>{t.precautions}</p>
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

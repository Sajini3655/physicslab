'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
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
  Scale,
  Box,
  Circle,
} from 'lucide-react';
import { convertDensity, propagateDensityUncertainty } from '@/features/measurement/physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface DensitySolidPracticalProps {
  locale?: Locale;
}

export const DensitySolidPractical: React.FC<DensitySolidPracticalProps> = ({
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
    experimentId: 'exp-density',
    defaultMode: 'guided',
    defaultObservations: {
      solidType: 'block',
      lengthCm: '',
      widthCm: '',
      heightCm: '',
      cylDiameterCm: '',
      cylHeightCm: '',
      sphDiameterCm: '',
      massG: '',
    },
    defaultCalculations: {
      volumeCm3: '',
      densityCgs: '',
      densitySi: '',
      uncertaintyPct: '',
    },
  });

  const solidType = (observations.solidType || 'block') as 'block' | 'cylinder' | 'sphere';
  const lengthCm = observations.lengthCm || '';
  const widthCm = observations.widthCm || '';
  const heightCm = observations.heightCm || '';
  const cylDiameterCm = observations.cylDiameterCm || '';
  const cylHeightCm = observations.cylHeightCm || '';
  const sphDiameterCm = observations.sphDiameterCm || '';
  const massG = observations.massG || '';

  const [showSolution, setShowSolution] = useState(false);

  const t = {
    en: {
      title: 'Practical 5: Determination of the Density of a Regular Solid',
      aim: 'Aim: To select suitable measuring instruments, determine the mass and volume of a regular solid, and calculate its density with unit conversions and error propagation.',
      apparatus: 'Apparatus: Triple beam / electronic balance (LC 0.01 g), Vernier calipers (LC 0.01 cm), Micrometer screw gauge (LC 0.001 cm), Regular solids (Brass block, Steel cylinder, Glass sphere).',
      theoryTitle: 'Instrument Selection & Error Theory',
      theoryText: 'Instrument selection is determined by measuring range, instrument resolution, specimen geometry, and target fractional uncertainty (Δx/x). For small dimensions (< 25 mm) such as wire diameters or sheet thicknesses, a micrometer screw gauge (LC 0.01 mm) is selected to keep fractional error small. For dimensions exceeding 25 mm or internal cavities/depths, Vernier calipers (LC 0.1 mm / 0.02 mm) provide the required range and specialized jaws. Density ρ = m / V. To convert from CGS units (g cm⁻³) to coherent SI units (kg m⁻³), multiply by 1000: ρ (kg m⁻³) = ρ (g cm⁻³) × 1000. Maximum fractional uncertainty accumulates as Δρ/ρ = Δm/m + ΔV/V.',
      procedure: 'Procedure: 1. Select solid shape. 2. Measure mass on the balance. 3. Measure dimensions using appropriate instrument. 4. Calculate volume V. 5. Compute density in g cm⁻³ and convert to kg m⁻³. 6. Propagate fractional uncertainties.',
      modeSelector: 'Learning Mode:',
      guidedMode: 'Guided Mode (Hints & Auto-Calculation)',
      independentMode: 'Independent Practice (Manual Calculations & Check)',
      selectSolid: 'Specimen Geometry:',
      block: 'Rectangular Block',
      cylinder: 'Cylinder',
      sphere: 'Sphere',
      massLabel: 'Measured Mass m (g):',
      dimBlock: 'Block Dimensions (cm):',
      dimCyl: 'Cylinder Dimensions (cm):',
      dimSph: 'Sphere Dimensions (cm):',
      length: 'Length l (cm):',
      width: 'Width w (cm):',
      height: 'Height h (cm):',
      diameter: 'Diameter d (cm):',
      calcTitle: 'Density Results & SI Unit Conversions',
      volumeLabel: 'Volume V (cm³):',
      densityCgs: 'Density ρ (g cm⁻³):',
      densitySi: 'Density in SI units ρ (kg m⁻³):',
      uncertaintyTitle: 'Uncertainty Propagation (Δρ/ρ):',
      checkCalcs: 'Check My Calculations',
      revealSolution: 'Show Model Solution',
      hideSolution: 'Hide Model Solution',
      precautionsTitle: 'Laboratory Precautions & Self-Evaluation Rubrics',
      q1Title: '1. Why multiply density in g cm⁻³ by 1000 to convert to coherent SI units (kg m⁻³)?',
      q1Model: 'Model Answer: 1 g = 10⁻³ kg and 1 cm³ = (10⁻² m)³ = 10⁻⁶ m³. Therefore, 1 g cm⁻³ = 10⁻³ kg / 10⁻⁶ m³ = 10³ kg m⁻³ = 1000 kg m⁻³.',
      q1Rubric: 'Rubric: Award 1 mark for mass/volume unit conversion factor; 1 mark for showing ratio yields 1000.',
      q2Title: '2. Why is a micrometer screw gauge selected for small dimensions (< 2 mm) rather than vernier calipers?',
      q2Model: 'Model Answer: For small dimensions, caliper resolution (0.1 mm) produces high fractional uncertainty (0.1/2 = 5%), whereas micrometer resolution (0.01 mm) keeps fractional uncertainty low (0.01/2 = 0.5%).',
      q2Rubric: 'Rubric: Award 1 mark for resolution comparison; 1 mark for minimizing fractional/percentage uncertainty.',
      q3Title: '3. How would you determine the volume of an irregularly shaped solid?',
      q3Model: 'Model Answer: By liquid displacement using a graduated measuring cylinder or Eureka overflow can. The volume of displaced water equals the solid volume according to Archimedes principle.',
      q3Rubric: 'Rubric: Award 1 mark for liquid displacement method; 1 mark for Eureka can / measuring cylinder procedure.',
      rubricMark: 'Mark Awarded:',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 5: ක්‍රමවත් ඝන ද්‍රව්‍යයක ඝනත්වය නිර්ණය කිරීම',
      aim: 'අරමුණ: සුදුසු මිනුම් උපකරණ තෝරාගෙන, ක්‍රමවත් ඝන වස්තුවක ස්කන්ධය සහ පරිමාව මැන, ඒකක පරිවර්තනය සහ දෝෂ ප්‍රචාරණය සහිතව ඝනත්වය ගණනය කිරීම.',
      apparatus: 'උපකරණ: විද්‍යුත් හෝ තුලා තුලාව (කුඩාම මිනුම 0.01 g), වර්නියර් කැලිපරය (කුඩාම මිනුම 0.01 cm), මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (කුඩාම මිනුම 0.001 cm), ක්‍රමවත් ඝන වස්තු.',
      theoryTitle: 'උපකරණ තේරීම සහ දෝෂ න්‍යාය',
      theoryText: 'උපකරණය තෝරාගනු ලබන්නේ මිනුම් පරාසය, උපකරණයේ කුඩාම මිනුම, වස්තුවේ ජ්‍යාමිතිය සහ ඉලක්කගත භාගික අවිනිශ්චිතතාව (Δx/x) අනුව ය. 25 mm ට වඩා කුඩා සියුම් මාන (කම්බි විෂ්කම්භ, තහඩු ඝනකම) සඳහා භාගික දෝෂය අවම කිරීමට මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (LC 0.01 mm) තෝරා ගනී. 25 mm ඉක්මවන මාන හෝ අභ්‍යන්තර කුහර/ගැඹුරු මිනුම් සඳහා වර්නියර් කැලිපරය (LC 0.1 mm / 0.02 mm) අවශ්‍ය පරාසය සහ විශේෂිත හනු ලබා දෙයි. ඝනත්වය ρ = m / V වේ. CGS ඒකක (g cm⁻³) සිට සම්මත SI ඒකකය වන kg m⁻³ බවට පත් කිරීමට 1000 න් ගුණ කරනු ලැබේ: ρ (kg m⁻³) = ρ (g cm⁻³) × 1000. උපරිම භාගික අවිනිශ්චිතතාවය Δρ/ρ = Δm/m + ΔV/V ලෙස එකතු වේ.',
      procedure: 'ක්‍රමවේදය: 1. වස්තුවේ ජ්‍යාමිතිය තේරීම. 2. තුලාවෙන් ස්කන්ධය මැනීම. 3. සුදුසු උපකරණයෙන් මාන මැනීම. 4. පරිමාව V සෙවීම. 5. ඝනත්වය g cm⁻³ හා kg m⁻³ වලින් ගණනය කිරීම.',
      modeSelector: 'ඉගෙනුම් ආකාරය:',
      guidedMode: 'මඟපෙන්වන ලද ආකාරය (ස්වයංක්‍රීය ගණනය)',
      independentMode: 'ස්වාධීන පුහුණුව (ස්වයං ගණනය සහ පරීක්ෂාව)',
      selectSolid: 'වස්තුවේ ජ්‍යාමිතිය:',
      block: 'සෘජුකෝණාස්‍රාකාර කුට්ටිය',
      cylinder: 'සිලින්ඩරය',
      sphere: 'ගෝලය',
      massLabel: 'ස්කන්ධය m (g):',
      dimBlock: 'කුට්ටියේ මාන (cm):',
      dimCyl: 'සිලින්ඩරයේ මාන (cm):',
      dimSph: 'ගෝලයේ මාන (cm):',
      length: 'දිග l (cm):',
      width: 'පළල w (cm):',
      height: 'උස h (cm):',
      diameter: 'විෂ්කම්භය d (cm):',
      calcTitle: 'ඝනත්ව ප්‍රතිඵල සහ SI ඒකක පරිවර්තනය',
      volumeLabel: 'පරිමාව V (cm³):',
      densityCgs: 'ඝනත්වය ρ (g cm⁻³):',
      densitySi: 'සම්මත SI ඝනත්වය ρ (kg m⁻³):',
      uncertaintyTitle: 'අවිනිශ්චිතතා ප්‍රචාරණය (Δρ/ρ):',
      checkCalcs: 'මගේ ගණනය කිරීම් පරීක්ෂා කරන්න',
      revealSolution: 'ආදර්ශ පිළිතුර පෙන්වන්න',
      hideSolution: 'ආදර්ශ පිළිතුර සඟවන්න',
      precautionsTitle: 'රසායනාගාර පූර්වෝපාය සහ ස්වයං ඇගයීම් රූබ්රික',
      q1Title: '1. ඝනත්වය g cm⁻³ සිට සම්මත SI ඒකකය (kg m⁻³) බවට පත්කිරීමට 1000 න් ගුණ කරන්නේ ඇයි?',
      q1Model: 'ආදර්ශ පිළිතුර: 1 g = 10⁻³ kg සහ 1 cm³ = 10⁻⁶ m³ බැවින්, 1 g cm⁻³ = 10⁻³ kg / 10⁻⁶ m³ = 1000 kg m⁻³ වේ.',
      q1Rubric: 'රූබ්රිකය: ස්කන්ධ/පරිමාව පරිවර්තන සාධකයට ලකුණු 1; 1000 අනුපාතය පෙන්වීමට ලකුණු 1.',
      q2Title: '2. කුඩා මාන (< 2 mm) සඳහා වර්නියර් කැලිපරය වෙනුවට මයික්‍රොමීටරය තෝරා ගන්නේ ඇයි?',
      q2Model: 'ආදර්ශ පිළිතුර: කුඩා මානයකදී කැලිපරයේ කුඩාම මිනුම (0.1 mm) නිසා ඉහළ භාගික දෝෂයක් (5%) ඇතිවේ. මයික්‍රොමීටරයේ කුඩාම මිනුමෙන් (0.01 mm) එම දෝෂය 0.5% දක්වා අවම වේ.',
      q2Rubric: 'රූබ්රිකය: කුඩාම මිනුම් සංසන්දනයට ලකුණු 1; භාගික දෝෂය අවම වීමට ලකුණු 1.',
      q3Title: '3. අක්‍රමවත් හැඩැති ඝන ද්‍රව්‍යයක පරිමාව නිර්ණය කරන්නේ කෙසේද?',
      q3Model: 'ආදර්ශ පිළිතුර: මිනුම් සිලින්ඩරයක් හෝ යුරේකා බඳුනක් භාවිතයෙන් ද්‍රව විස්ථාපන ක්‍රමයෙන්. ආකිමිඩීස් මූලධර්මය අනුව විස්ථාපිත ජල පරිමාව ඝන වස්තුවේ පරිමාවට සමාන වේ.',
      q3Rubric: 'රූබ්රිකය: ද්‍රව විස්ථාපන ක්‍රමයට ලකුණු 1; යුරේකා බඳුන හෝ මිනුම් සිලින්ඩරය භාවිතයට ලකුණු 1.',
      rubricMark: 'ලබාගත් ලකුණු:',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    if (solidType === 'block') {
      loadSampleObservations({
        solidType: 'block',
        massG: '168.40',
        lengthCm: '4.00',
        widthCm: '2.50',
        heightCm: '2.00',
      });
    } else if (solidType === 'cylinder') {
      loadSampleObservations({
        solidType: 'cylinder',
        massG: '122.50',
        cylDiameterCm: '2.00',
        cylHeightCm: '5.00',
      });
    } else {
      loadSampleObservations({
        solidType: 'sphere',
        massG: '33.50',
        sphDiameterCm: '3.00',
      });
    }
  };

  const handleClear = () => {
    reset();
  };

  const m = parseFloat(massG);
  const isMassValid = !isNaN(m) && m > 0;

  let computedVolume: number | null = null;
  const dm = 0.01;
  let dV = 0.01;

  if (solidType === 'block') {
    const l = parseFloat(lengthCm);
    const w = parseFloat(widthCm);
    const h = parseFloat(heightCm);
    if (!isNaN(l) && !isNaN(w) && !isNaN(h) && l > 0 && w > 0 && h > 0) {
      computedVolume = l * w * h;
      dV = computedVolume * (0.01 / l + 0.01 / w + 0.01 / h);
    }
  } else if (solidType === 'cylinder') {
    const d = parseFloat(cylDiameterCm);
    const h = parseFloat(cylHeightCm);
    if (!isNaN(d) && !isNaN(h) && d > 0 && h > 0) {
      computedVolume = Math.PI * Math.pow(d / 2, 2) * h;
      dV = computedVolume * (2 * (0.01 / d) + 0.01 / h);
    }
  } else if (solidType === 'sphere') {
    const d = parseFloat(sphDiameterCm);
    if (!isNaN(d) && d > 0) {
      computedVolume = (4 / 3) * Math.PI * Math.pow(d / 2, 3);
      dV = computedVolume * (3 * (0.001 / d));
    }
  }

  const expectedDensityCgs = isMassValid && computedVolume !== null && computedVolume > 0 ? m / computedVolume : null;
  const expectedDensitySi = expectedDensityCgs !== null ? convertDensity(expectedDensityCgs, 'g/cm^3', 'kg/m^3') : null;
  const expectedUncertainty =
    isMassValid && computedVolume !== null && computedVolume > 0 && expectedDensityCgs !== null
      ? propagateDensityUncertainty(m, dm, computedVolume, dV)
      : null;

  // Check student calculations in independent mode
  const handleCheckCalculations = () => {
    const results: Record<string, boolean> = {};
    const feedback: Record<string, { en: string; si: string }> = {};

    const stuVol = parseFloat(calculations.volumeCm3 || '');
    if (computedVolume !== null) {
      const isVolCorrect = !isNaN(stuVol) && Math.abs(stuVol - computedVolume) / computedVolume <= 0.03;
      results.volumeCm3 = isVolCorrect;
      if (!isVolCorrect) {
        feedback.volumeCm3 = {
          en: `Volume should be approximately ${computedVolume.toFixed(2)} cm³.`,
          si: `පරිමාව දළ වශයෙන් ${computedVolume.toFixed(2)} cm³ විය යුතුය.`,
        };
      }
    }

    const stuCgs = parseFloat(calculations.densityCgs || '');
    if (expectedDensityCgs !== null) {
      const isCgsCorrect = !isNaN(stuCgs) && Math.abs(stuCgs - expectedDensityCgs) / expectedDensityCgs <= 0.03;
      results.densityCgs = isCgsCorrect;
      if (!isCgsCorrect) {
        feedback.densityCgs = {
          en: `Density in CGS = Mass (${m} g) / Volume = ${expectedDensityCgs.toFixed(2)} g cm⁻³.`,
          si: `CGS ඝනත්වය = ස්කන්ධය (${m} g) / පරිමාව = ${expectedDensityCgs.toFixed(2)} g cm⁻³ විය යුතුය.`,
        };
      }
    }

    const stuSi = parseFloat(calculations.densitySi || '');
    if (expectedDensitySi !== null) {
      const isSiCorrect = !isNaN(stuSi) && Math.abs(stuSi - expectedDensitySi) / expectedDensitySi <= 0.03;
      results.densitySi = isSiCorrect;
      if (!isSiCorrect) {
        feedback.densitySi = {
          en: `SI density = CGS density × 1000 = ${expectedDensitySi.toFixed(1)} kg m⁻³.`,
          si: `SI ඝනත්වය = CGS ඝනත්වය × 1000 = ${expectedDensitySi.toFixed(1)} kg m⁻³ විය යුතුය.`,
        };
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

      {/* Observation Inputs Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#64748B]">{t.selectSolid}</span>
              <Button
                size="sm"
                variant={solidType === 'block' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ solidType: 'block' })}
              >
                <Box className="w-3.5 h-3.5 mr-1" /> {t.block}
              </Button>
              <Button
                size="sm"
                variant={solidType === 'cylinder' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ solidType: 'cylinder' })}
              >
                <Scale className="w-3.5 h-3.5 mr-1" /> {t.cylinder}
              </Button>
              <Button
                size="sm"
                variant={solidType === 'sphere' ? 'default' : 'outline'}
                className="text-xs h-7 rounded-lg"
                onClick={() => updateObservations({ solidType: 'sphere' })}
              >
                <Circle className="w-3.5 h-3.5 mr-1" /> {t.sphere}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Mass */}
            <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
              <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                {t.massLabel}
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  value={massG}
                  onChange={(e) => updateObservations({ massG: e.target.value })}
                  placeholder="168.40"
                  className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                />
                <span className="text-xs text-[#64748B]">g</span>
              </div>
            </div>

            {/* Geometry specific inputs */}
            {solidType === 'block' && (
              <>
                <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                  <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                    {t.length}
                  </label>
                  <input
                    type="text"
                    value={lengthCm}
                    onChange={(e) => updateObservations({ lengthCm: e.target.value })}
                    placeholder="4.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                </div>
                <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                  <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                    {t.width}
                  </label>
                  <input
                    type="text"
                    value={widthCm}
                    onChange={(e) => updateObservations({ widthCm: e.target.value })}
                    placeholder="2.50"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                </div>
                <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                  <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                    {t.height}
                  </label>
                  <input
                    type="text"
                    value={heightCm}
                    onChange={(e) => updateObservations({ heightCm: e.target.value })}
                    placeholder="2.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                </div>
              </>
            )}

            {solidType === 'cylinder' && (
              <>
                <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                  <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                    {t.diameter}
                  </label>
                  <input
                    type="text"
                    value={cylDiameterCm}
                    onChange={(e) => updateObservations({ cylDiameterCm: e.target.value })}
                    placeholder="2.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                </div>
                <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                  <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                    {t.height}
                  </label>
                  <input
                    type="text"
                    value={cylHeightCm}
                    onChange={(e) => updateObservations({ cylHeightCm: e.target.value })}
                    placeholder="5.00"
                    className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                  />
                </div>
              </>
            )}

            {solidType === 'sphere' && (
              <div className="p-3 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
                <label className="text-[11px] font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
                  {t.diameter}
                </label>
                <input
                  type="text"
                  value={sphDiameterCm}
                  onChange={(e) => updateObservations({ sphDiameterCm: e.target.value })}
                  placeholder="3.00"
                  className="w-full px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono"
                />
              </div>
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

          {/* Calculated Results */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.volumeLabel}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {computedVolume !== null ? `${computedVolume.toFixed(2)} cm³` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.volumeCm3 || ''}
                    onChange={(e) => updateCalculation('volumeCm3', e.target.value)}
                    placeholder="V (cm³)"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.densityCgs}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {expectedDensityCgs !== null ? `${expectedDensityCgs.toFixed(3)} g cm⁻³` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.densityCgs || ''}
                    onChange={(e) => updateCalculation('densityCgs', e.target.value)}
                    placeholder="g cm⁻³"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.densitySi}</span>
                {mode === 'guided' || showSolution ? (
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {expectedDensitySi !== null ? `${expectedDensitySi.toFixed(1)} kg m⁻³` : '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={calculations.densitySi || ''}
                    onChange={(e) => updateCalculation('densitySi', e.target.value)}
                    placeholder="kg m⁻³"
                    className="w-full px-1.5 py-0.5 rounded border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono"
                  />
                )}
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.uncertaintyTitle}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {expectedUncertainty ? `${expectedUncertainty.percentageUncertainty}%` : '—'}
                </span>
              </div>
            </div>
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

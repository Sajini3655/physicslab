'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Scale, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { calculatePrincipleOfMoments, calculateMomentsDistanceGraph } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface PrincipleOfMomentsPracticalProps {
  locale?: Locale;
}

export const PrincipleOfMomentsPractical: React.FC<PrincipleOfMomentsPracticalProps> = ({
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
    experimentId: 'exp-6-moments',
    defaultObservations: {
      subMode: 'unknown_mass',
      // Mode 1: Unknown Mass via Distance Graph
      counterMassG: '100.0',
      balanceMassG: '150.0',
      d1_1: '10.0',
      d2_1: '15.0',
      d1_2: '15.0',
      d2_2: '22.5',
      d1_3: '20.0',
      d2_3: '30.0',
      d1_4: '25.0',
      d2_4: '37.5',
      d1_5: '30.0',
      d2_5: '45.0',
      // Mode 2: Moments Verification
      pivotCm: '50.0',
      m1G: '100.0',
      x1Cm: '30.0',
      m2G: '50.0',
      x2Cm: '90.0',
      // Mode 3: Metre Rule Mass
      eccentricPivotCm: '40.0',
      knownMassG: '50.0',
      knownPosCm: '16.0',
    },
  });

  const subMode = (observations.subMode || 'unknown_mass') as 'unknown_mass' | 'verification' | 'rule_mass';
  const setSubMode = (mode: 'unknown_mass' | 'verification' | 'rule_mass') => updateObservations({ subMode: mode });

  // Verification mode state
  const pivotCm = observations.pivotCm || '50.0';
  const m1G = observations.m1G || '';
  const x1Cm = observations.x1Cm || '';
  const m2G = observations.m2G || '';
  const x2Cm = observations.x2Cm || '';

  // Rule mass mode state
  const eccentricPivotCm = observations.eccentricPivotCm || '40.0';
  const knownMassG = observations.knownMassG || '';
  const knownPosCm = observations.knownPosCm || '';

  // Unknown mass distance graph state
  const counterMassG = observations.counterMassG || '100.0';
  const balanceMassG = observations.balanceMassG || '150.0';
  const d1_1 = observations.d1_1 || '10.0';
  const d2_1 = observations.d2_1 || '15.0';
  const d1_2 = observations.d1_2 || '15.0';
  const d2_2 = observations.d2_2 || '22.5';
  const d1_3 = observations.d1_3 || '20.0';
  const d2_3 = observations.d2_3 || '30.0';
  const d1_4 = observations.d1_4 || '25.0';
  const d2_4 = observations.d2_4 || '37.5';
  const d1_5 = observations.d1_5 || '30.0';
  const d2_5 = observations.d2_5 || '45.0';

  const t = {
    en: {
      title: 'Practical 6: Verification of the Principle of Moments & Mass of a Metre Rule',
      aim: 'Aim: To determine the mass of an unknown body using the principle of moments and a distance graph, verify the principle of moments for rotational equilibrium, and determine the mass of a metre rule.',
      apparatus: 'Apparatus: Uniform metre rule, sharp knife-edge fulcrum, spirit level, slotted masses with loops (50 g, 100 g), unknown body, light thread, electronic balance (for confirmation).',
      theoryTitle: 'Rotational Equilibrium & Distance Graph Theory',
      theoryText: 'When a body is in rotational equilibrium about a pivot: Clockwise Moment = Anti-clockwise Moment (Σ τ_CW = Σ τ_ACW). 1. Unknown Mass: Suspend unknown mass M_x at distance d₁ and counter-mass m at distance d₂. Balancing gives M_x × d₁ = m × d₂, hence d₂ = (M_x / m) × d₁. A plot of d₂ against d₁ yields a straight line through the origin with gradient S = M_x / m, giving M_x = m × S. 2. Metre Rule Mass: Shift pivot to eccentric point x₀; the rule weight M acts at center of gravity (50 cm), giving M × |50 - x₀| = m × |x - x₀|.',
      procedure: 'Procedure: 1. Balance the bare metre rule on the knife edge to confirm its center of gravity is at 50.0 cm. 2. For Unknown Mass, vary d₁ (10 to 30 cm) and find the balancing distance d₂ for known counter-mass m. Plot d₂ vs d₁ to find gradient and M_x. 3. For verification, verify m₁d₁ = m₂d₂. 4. For rule mass, balance with eccentric pivot.',
      modeUnknownMass: 'Unknown Mass (Distance Graph)',
      modeVerification: 'Moments Verification',
      modeRuleMass: 'Metre Rule Mass Determination',
      counterMassLabel: 'Known Counter-Mass m (g):',
      balanceMassLabel: 'Balance Reading (Confirmation) (g):',
      trialCol: 'Trial',
      d1Col: 'Distance d₁ to Unknown Mass M_x (cm)',
      d2Col: 'Balancing Distance d₂ to Counter-Mass m (cm)',
      ratioCol: 'Ratio (d₂ / d₁)',
      graphTitle: 'Distance Graph: d₂ vs d₁ (Through Origin)',
      gradientLabel: 'Best-Fit Gradient (d₂ / d₁ = M_x / m):',
      calculatedUnknownMass: 'Calculated Unknown Mass M_x = m × Gradient:',
      balanceComparisonLabel: 'Electronic Balance Reading:',
      discrepancyLabel: 'Discrepancy:',
      pivotLabel: 'Fulcrum Pivot Position (cm):',
      leftMassLabel: 'Anti-clockwise Mass m₁ (g):',
      leftPosLabel: 'Left Position x₁ (cm):',
      rightMassLabel: 'Clockwise Mass m₂ (g):',
      rightPosLabel: 'Right Position x₂ (cm):',
      acwMomentLabel: 'Anti-clockwise Moment (g cm):',
      cwMomentLabel: 'Clockwise Moment (g cm):',
      momentDiscrepancyLabel: 'Discrepancy (g cm):',
      ruleMassCalcTitle: 'Determination of Metre Rule Mass M',
      cgLabel: 'Metre Rule Center of Gravity (cm): 50.0 cm',
      eccentricPivotLabel: 'Shifted Fulcrum Position x₀ (cm):',
      knownMassLabel: 'Known Counter-Mass m (g):',
      knownPosLabel: 'Counter-Mass Position x (cm):',
      calculatedRuleMass: 'Calculated Rule Mass M (g):',
      ruleMassFormula: 'M = m × |x₀ - x| / |50.0 - x₀|',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      balancedVerdict: 'Rotational Equilibrium Verified (Balanced)',
      unbalancedVerdict: 'Moments Unbalanced (Adjust Distance Arms)',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Ensure the knife edge is sharp and perpendicular to the metre rule edges. 2. Use a spirit level or compare ends against bench height to confirm horizontal alignment. 3. Loop threads lightly so their weight is negligible. 4. Avoid parallax when reading distances.',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 6: ඝූර්ණ මූලධර්මය සත්‍යාපනය සහ මීටර් රූලක ස්කන්ධය සෙවීම',
      aim: 'අරමුණ: ඝූර්ණ මූලධර්මය සහ දුර ප්‍රස්තාරය ඇසුරින් නොදන්නා වස්තුවක ස්කන්ධය සෙවීම, භ්‍රමණ තුල්‍යතාව සඳහා ඝූර්ණ මූලධර්මය සත්‍යාපනය කිරීම සහ මීටර් කෝදුවක ස්කන්ධය සෙවීම.',
      apparatus: 'උපකරණ: ඒකාකාර මීටර් කෝදුව, දැලිපිහි දාර ආධාරකය, මට්ටම් බුබුල, ලූප සහිත බර පඩි (50 g, 100 g), නොදන්නා ස්කන්ධය, නූල්, තහවුරු කිරීමට විද්‍යුත් තුලාව.',
      theoryTitle: 'භ්‍රමණ තුල්‍යතාව සහ දුර ප්‍රස්තාර න්‍යාය',
      theoryText: 'පද්ධතියක් භ්‍රමණ තුල්‍යතාවයේ පවතින විට ඔරලෝසු අතේ දිශාවට වන ඝූර්ණ එකතුව ප්‍රතිවිරුද්ධ දිශාවට වන ඝූර්ණ එකතුවට සමාන වේ: Σ τ_CW = Σ τ_ACW. 1. නොදන්නා ස්කන්ධය: කෝදුවේ ගුරුත්ව කේන්ද්‍රය මත තබා නොදන්නා ස්කන්ධය M_x දුර d₁ හිද, දන්නා ස්කන්ධය m දුර d₂ හිද එල්ලා තුලනය කළ විට M_x × d₁ = m × d₂ වේ. එනම් d₂ = (M_x / m) × d₁. d₂ ට එදිරිව d₁ ප්‍රස්තාරයේ අනුක්‍රමණය S = M_x / m වේ. එමඟින් M_x = m × S සෙවිය හැක. 2. කෝදුවේ ස්කන්ධය: ආධාරකය විකේන්ද්‍රික ලක්ෂ්‍යයකට x₀ ගෙන ගොස් තනි බරකින් තුලනය කර M සොයනු ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. හිස් කෝදුව දැලිපිහි දාරය මත තබා ගුරුත්ව කේන්ද්‍රය 50.0 cm හි පිහිටන බව තහවුරු කරගන්න. 2. නොදන්නා ස්කන්ධය සඳහා d₁ වෙනස් කර තුලනය වන d₂ සටහන් කර d₂ එදිරිව d₁ ප්‍රස්තාරයෙන් M_x සොයන්න. 3. ඝූර්ණ සත්‍යාපනය සඳහා m₁d₁ = m₂d₂ තහවුරු කරන්න. 4. විකේන්ද්‍රික ආධාරකයෙන් කෝදුවේ ස්කන්ධය සොයන්න.',
      modeUnknownMass: 'නොදන්නා ස්කන්ධය (දුර ප්‍රස්තාරය)',
      modeVerification: 'ඝූර්ණ සත්‍යාපනය',
      modeRuleMass: 'Metre Rule Mass Determination',
      counterMassLabel: 'දන්නා ප්‍රති-ස්කන්ධය m (g):',
      balanceMassLabel: 'විද්‍යුත් තුලා පාඨාංකය (තහවුරු කිරීමට) (g):',
      trialCol: 'වාරය',
      d1Col: 'නොදන්නා ස්කන්ධයට දුර d₁ (cm)',
      d2Col: 'ප්‍රති-ස්කන්ධයට තුලිත දුර d₂ (cm)',
      ratioCol: 'අනුපාතය (d₂ / d₁)',
      graphTitle: 'දුර ප්‍රස්තාරය: d₂ එදිරිව d₁ (මූල ලක්ෂ්‍යය හරහා)',
      gradientLabel: 'හොඳම ගැළපුම් අනුක්‍රමණය (d₂ / d₁ = M_x / m):',
      calculatedUnknownMass: 'ගණනය කළ නොදන්නා ස්කන්ධය M_x = m × අනුක්‍රමණය:',
      balanceComparisonLabel: 'විද්‍යුත් තුලා පාඨාංකය:',
      discrepancyLabel: 'වෙනස:',
      pivotLabel: 'දැලිපිහි දාරයේ පිහිටුම (cm):',
      leftMassLabel: 'වාමාවර්ත ස්කන්ධය m₁ (g):',
      leftPosLabel: 'වම් පිහිටුම x₁ (cm):',
      rightMassLabel: 'දක්ෂිණාවර්ත ස්කන්ධය m₂ (g):',
      rightPosLabel: 'දකුණු පිහිටුම x₂ (cm):',
      acwMomentLabel: 'වාමාවර්ත ඝූර්ණය (g cm):',
      cwMomentLabel: 'දක්ෂිණාවර්ත ඝූර්ණය (g cm):',
      momentDiscrepancyLabel: 'වෙනස (g cm):',
      ruleMassCalcTitle: 'මීටර් කෝදුවේ ස්කන්ධය M ගණනය කිරීම',
      cgLabel: 'කෝදුවේ ගුරුත්ව කේන්ද්‍රය: 50.0 cm',
      eccentricPivotLabel: 'විකේන්ද්‍රික ආධාරක පිහිටුම x₀ (cm):',
      knownMassLabel: 'දන්නා බර m (g):',
      knownPosLabel: 'දන්නා බරේ පිහිටුම x (cm):',
      calculatedRuleMass: 'ගණනය කළ කෝදුවේ ස්කන්ධය M (g):',
      ruleMassFormula: 'M = m × |x₀ - x| / |50.0 - x₀|',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      balancedVerdict: 'භ්‍රමණ තුල්‍යතාව තහවුරු විය (තුලිතයි)',
      unbalancedVerdict: 'ඝූර්ණ අසමතුලිතයි (දුර සකසන්න)',
      precautionsTitle: 'පරීක්ෂණාත්මක පූර්වෝපායයන්',
      precautions: '1. දැලිපිහි දාරය තියුණු හා කෝදුවට ලම්බක විය යුතුය. 2. කෝදුව සම්පූර්ණයෙන්ම තිරස් බව පරීක්ෂා කිරීමට මට්ටම් බුබුලක් යොදා ගන්න. 3. නූල්වල බර නොසැලකිය හැකි වන සේ සිහින් නූල් යොදා ගන්න.',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  // 1. Unknown Mass Calculations
  const numCounterM = parseFloat(counterMassG) || 100.0;
  const numBalanceM = parseFloat(balanceMassG) || 150.0;
  const trialsList = [
    { d1Cm: parseFloat(d1_1) || 0, d2Cm: parseFloat(d2_1) || 0 },
    { d1Cm: parseFloat(d1_2) || 0, d2Cm: parseFloat(d2_2) || 0 },
    { d1Cm: parseFloat(d1_3) || 0, d2Cm: parseFloat(d2_3) || 0 },
    { d1Cm: parseFloat(d1_4) || 0, d2Cm: parseFloat(d2_4) || 0 },
    { d1Cm: parseFloat(d1_5) || 0, d2Cm: parseFloat(d2_5) || 0 },
  ];
  const graphResult = calculateMomentsDistanceGraph(numCounterM, trialsList);
  const discrepancyPercent =
    numBalanceM > 0
      ? Math.abs((graphResult.calculatedMassG - numBalanceM) / numBalanceM) * 100
      : 0;

  // 2. Verification Calculations
  const numPivot = parseFloat(pivotCm);
  const numM1 = parseFloat(m1G);
  const numX1 = parseFloat(x1Cm);
  const numM2 = parseFloat(m2G);
  const numX2 = parseFloat(x2Cm);

  const isVerifValid =
    !isNaN(numPivot) && !isNaN(numM1) && !isNaN(numX1) && !isNaN(numM2) && !isNaN(numX2) &&
    numM1 > 0 && numM2 > 0;

  const verifResult = isVerifValid
    ? calculatePrincipleOfMoments({
        pivotCm: numPivot,
        weights: [
          { massG: numM1, positionCm: numX1 },
          { massG: numM2, positionCm: numX2 },
        ],
      })
    : null;

  // 3. Rule Mass Calculations
  const numEcc = parseFloat(eccentricPivotCm);
  const numKnownM = parseFloat(knownMassG);
  const numKnownPos = parseFloat(knownPosCm);

  let calculatedM: number | null = null;
  if (!isNaN(numEcc) && !isNaN(numKnownM) && !isNaN(numKnownPos) && Math.abs(50.0 - numEcc) > 0.1) {
    const armRule = Math.abs(50.0 - numEcc);
    const armKnown = Math.abs(numEcc - numKnownPos);
    calculatedM = Number(((numKnownM * armKnown) / armRule).toFixed(1));
  }

  const handleLoadSample = () => {
    if (subMode === 'unknown_mass') {
      loadSampleObservations({
        subMode: 'unknown_mass',
        counterMassG: '100.0',
        balanceMassG: '150.0',
        d1_1: '10.0',
        d2_1: '15.0',
        d1_2: '15.0',
        d2_2: '22.5',
        d1_3: '20.0',
        d2_3: '30.0',
        d1_4: '25.0',
        d2_4: '37.5',
        d1_5: '30.0',
        d2_5: '45.0',
      });
    } else if (subMode === 'verification') {
      loadSampleObservations({
        subMode: 'verification',
        pivotCm: '50.0',
        m1G: '100.0',
        x1Cm: '30.0',
        m2G: '50.0',
        x2Cm: '90.0',
      });
    } else {
      loadSampleObservations({
        subMode: 'rule_mass',
        eccentricPivotCm: '40.0',
        knownMassG: '50.0',
        knownPosCm: '16.0',
      });
    }
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Aim & Theory Card */}
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
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.theoryTitle}</span>
            <p>{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.procedure}
          </p>
        </CardContent>
      </Card>

      {/* Mode Switcher & Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'unknown_mass' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('unknown_mass')}
            >
              <TrendingUp className="w-3.5 h-3.5 mr-1" />
              {t.modeUnknownMass}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'verification' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('verification')}
            >
              {t.modeVerification}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'rule_mass' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('rule_mass')}
            >
              {t.modeRuleMass}
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
          {/* Metre Rule Graphical SVG Diagram */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 440 160" className="w-full max-w-lg h-auto drop-shadow-xs">
              {/* Metre Ruler Body */}
              <rect x="20" y="55" width="400" height="16" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
              {/* Ruler Markings */}
              {Array.from({ length: 11 }).map((_, i) => {
                const x = 20 + i * 40;
                return (
                  <g key={i}>
                    <line x1={x} y1="55" x2={x} y2="63" stroke="#D97706" strokeWidth="1" />
                    <text x={x} y="50" fontSize="8" fill="#B45309" textAnchor="middle">{i * 10}</text>
                  </g>
                );
              })}

              {subMode === 'unknown_mass' ? (
                <>
                  {/* Fulcrum at center 50 cm */}
                  <polygon points="214,90 226,90 220,71" fill="#14243A" />
                  <rect x="210" y="90" width="20" height="20" fill="#CBD5E1" rx="2" />
                  <text x="220" y="122" fontSize="9" fontWeight="bold" fill="#14243A" textAnchor="middle">Pivot: 50.0 cm</text>

                  {/* Unknown mass suspended on left at d1 = 20 cm => position = 30 cm (x = 20 + 3*40 = 140) */}
                  <g transform="translate(140, 71)">
                    <line x1="0" y1="0" x2="0" y2="25" stroke="#7C3AED" strokeWidth="2" />
                    <rect x="-14" y="25" width="28" height="20" rx="3" fill="#7C3AED" />
                    <text x="0" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">M_x</text>
                  </g>
                  {/* Arrow indicating d1 */}
                  <line x1="140" y1="42" x2="220" y2="42" stroke="#7C3AED" strokeWidth="1.2" strokeDasharray="2 2" />
                  <text x="180" y="38" fontSize="8" fontWeight="bold" fill="#7C3AED" textAnchor="middle">d₁</text>

                  {/* Counter-mass suspended on right at d2 = 30 cm => position = 80 cm (x = 20 + 8*40 = 340) */}
                  <g transform="translate(340, 71)">
                    <line x1="0" y1="0" x2="0" y2="25" stroke="#0F766E" strokeWidth="2" />
                    <rect x="-14" y="25" width="28" height="20" rx="3" fill="#0F766E" />
                    <text x="0" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">{counterMassG}g</text>
                  </g>
                  {/* Arrow indicating d2 */}
                  <line x1="220" y1="42" x2="340" y2="42" stroke="#0F766E" strokeWidth="1.2" strokeDasharray="2 2" />
                  <text x="280" y="38" fontSize="8" fontWeight="bold" fill="#0F766E" textAnchor="middle">d₂</text>
                </>
              ) : subMode === 'verification' ? (
                <>
                  {/* Pivot at 50 cm -> x = 20 + 5 * 40 = 220 */}
                  <polygon points="214,90 226,90 220,71" fill="#14243A" />
                  <rect x="210" y="90" width="20" height="20" fill="#CBD5E1" rx="2" />
                  <text x="220" y="122" fontSize="9" fontWeight="bold" fill="#14243A" textAnchor="middle">Pivot: 50 cm</text>

                  {/* Mass m1 left at x1 */}
                  {numX1 >= 0 && numX1 <= 100 && (
                    <g transform={`translate(${20 + (numX1 / 100) * 400}, 71)`}>
                      <line x1="0" y1="0" x2="0" y2="25" stroke="#0F766E" strokeWidth="2" />
                      <rect x="-12" y="25" width="24" height="18" rx="3" fill="#0F766E" />
                      <text x="0" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">{m1G}g</text>
                    </g>
                  )}

                  {/* Mass m2 right at x2 */}
                  {numX2 >= 0 && numX2 <= 100 && (
                    <g transform={`translate(${20 + (numX2 / 100) * 400}, 71)`}>
                      <line x1="0" y1="0" x2="0" y2="25" stroke="#3B82F6" strokeWidth="2" />
                      <rect x="-12" y="25" width="24" height="18" rx="3" fill="#3B82F6" />
                      <text x="0" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">{m2G}g</text>
                    </g>
                  )}
                </>
              ) : (
                /* Mode Rule Mass: Pivot at x0 */
                <>
                  {numEcc >= 0 && numEcc <= 100 && (
                    <>
                      <polygon
                        points={`${20 + (numEcc / 100) * 400 - 6},90 ${20 + (numEcc / 100) * 400 + 6},90 ${20 + (numEcc / 100) * 400},71`}
                        fill="#14243A"
                      />
                      <rect x={20 + (numEcc / 100) * 400 - 10} y="90" width="20" height="20" fill="#CBD5E1" rx="2" />
                      <text x={20 + (numEcc / 100) * 400} y="122" fontSize="9" fontWeight="bold" fill="#14243A" textAnchor="middle">
                        Pivot: {numEcc} cm
                      </text>
                    </>
                  )}

                  {/* Center of Gravity at 50 cm */}
                  <circle cx="220" cy="63" r="3" fill="#DC2626" />
                  <line x1="220" y1="71" x2="220" y2="95" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="220" y="105" fontSize="8" fontWeight="bold" fill="#DC2626" textAnchor="middle">C.G. (Rule W = Mg)</text>

                  {/* Counter Mass */}
                  {numKnownPos >= 0 && numKnownPos <= 100 && (
                    <g transform={`translate(${20 + (numKnownPos / 100) * 400}, 71)`}>
                      <line x1="0" y1="0" x2="0" y2="25" stroke="#0F766E" strokeWidth="2" />
                      <rect x="-12" y="25" width="24" height="18" rx="3" fill="#0F766E" />
                      <text x="0" y="38" fontSize="8" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">{knownMassG}g</text>
                    </g>
                  )}
                </>
              )}
            </svg>
          </div>

          {/* SubMode 1: Unknown Mass via Distance Graph */}
          {subMode === 'unknown_mass' && (
            <div className="space-y-6">
              {/* Counter-Mass & Balance Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.counterMassLabel}
                  </label>
                  <input
                    type="text"
                    value={counterMassG}
                    onChange={(e) => updateObservations({ counterMassG: e.target.value })}
                    placeholder="100.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#64748B] block font-sans mb-1">
                    {t.balanceMassLabel}
                  </label>
                  <input
                    type="text"
                    value={balanceMassG}
                    onChange={(e) => updateObservations({ balanceMassG: e.target.value })}
                    placeholder="150.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>

              {/* Observation Table of 5 trials */}
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.d1Col}</th>
                      <th className="p-3">{t.d2Col}</th>
                      <th className="p-3 w-32">{t.ratioCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {[
                      { idx: 1, d1Key: 'd1_1', d2Key: 'd2_1', d1Val: d1_1, d2Val: d2_1 },
                      { idx: 2, d1Key: 'd1_2', d2Key: 'd2_2', d1Val: d1_2, d2Val: d2_2 },
                      { idx: 3, d1Key: 'd1_3', d2Key: 'd2_3', d1Val: d1_3, d2Val: d2_3 },
                      { idx: 4, d1Key: 'd1_4', d2Key: 'd2_4', d1Val: d1_4, d2Val: d2_4 },
                      { idx: 5, d1Key: 'd1_5', d2Key: 'd2_5', d1Val: d1_5, d2Val: d2_5 },
                    ].map((row) => {
                      const v1 = parseFloat(row.d1Val);
                      const v2 = parseFloat(row.d2Val);
                      const ratio = v1 > 0 && v2 > 0 ? (v2 / v1).toFixed(3) : '-';
                      return (
                        <tr key={row.idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                          <td className="p-3 font-bold text-center">{row.idx}</td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={row.d1Val}
                              onChange={(e) => updateObservations({ [row.d1Key]: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={row.d2Val}
                              onChange={(e) => updateObservations({ [row.d2Key]: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                            />
                          </td>
                          <td className="p-3 font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                            {ratio}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Distance Graph Visualization (SVG) */}
              <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {t.graphTitle}
                  </span>
                  <span className="text-[11px] font-mono text-[#0F766E] dark:text-[#14B8A6]">
                    R² = {graphResult.rSquared}
                  </span>
                </div>

                <div className="w-full flex justify-center">
                  <svg viewBox="0 0 420 260" className="w-full max-w-md h-auto bg-[#FFFFFF] dark:bg-[#111D2D] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                    {/* Grid lines */}
                    {Array.from({ length: 7 }).map((_, i) => (
                      <line
                        key={`gx-${i}`}
                        x1={50 + i * 50}
                        y1="30"
                        x2={50 + i * 50}
                        y2="210"
                        stroke="#E2E8F0"
                        strokeDasharray="2 2"
                      />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <line
                        key={`gy-${i}`}
                        x1="50"
                        y1={210 - i * 35}
                        x2="350"
                        y2={210 - i * 35}
                        stroke="#E2E8F0"
                        strokeDasharray="2 2"
                      />
                    ))}

                    {/* Axes: Origin at (50, 210) */}
                    <line x1="50" y1="210" x2="360" y2="210" stroke="#1E293B" strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="50" y2="210" stroke="#1E293B" strokeWidth="1.5" />

                    {/* Axis Labels & Values */}
                    {/* X: d1 from 0 to 35 cm (scale: 300px = 35 cm => 8.57 px/cm) */}
                    {[0, 10, 20, 30].map((val) => (
                      <text
                        key={`xt-${val}`}
                        x={50 + (val / 35) * 300}
                        y="225"
                        fontSize="9"
                        fill="#64748B"
                        textAnchor="middle"
                      >
                        {val}
                      </text>
                    ))}
                    <text x="200" y="245" fontSize="10" fontWeight="bold" fill="#14243A" textAnchor="middle">
                      d₁ (cm)
                    </text>

                    {/* Y: d2 from 0 to 50 cm (scale: 175px = 50 cm => 3.5 px/cm) */}
                    {[0, 10, 20, 30, 40, 50].map((val) => (
                      <text
                        key={`yt-${val}`}
                        x="42"
                        y={213 - (val / 50) * 175}
                        fontSize="9"
                        fill="#64748B"
                        textAnchor="end"
                      >
                        {val}
                      </text>
                    ))}
                    <text
                      x="18"
                      y="110"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#14243A"
                      textAnchor="middle"
                      transform="rotate(-90 18 110)"
                    >
                      d₂ (cm)
                    </text>

                    {/* Best-Fit Line Through Origin */}
                    {graphResult.slope > 0 && (
                      <line
                        x1="50"
                        y1="210"
                        x2={50 + (32 / 35) * 300}
                        y2={210 - ((32 * graphResult.slope) / 50) * 175}
                        stroke="#0F766E"
                        strokeWidth="2"
                      />
                    )}

                    {/* Plotted Trial Points */}
                    {trialsList.map((t, idx) => {
                      if (t.d1Cm <= 0 || t.d2Cm <= 0) return null;
                      const cx = 50 + (t.d1Cm / 35) * 300;
                      const cy = 210 - (t.d2Cm / 50) * 175;
                      return (
                        <g key={idx}>
                          <circle cx={cx} cy={cy} r="4" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="1" />
                          <text x={cx + 6} y={cy - 4} fontSize="8" fill="#7C3AED" fontWeight="bold">
                            T{idx + 1}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Calculated Results Card */}
              <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.gradientLabel}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {graphResult.slope.toFixed(3)}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.calculatedUnknownMass}</span>
                    <span className="text-base font-bold text-[#7C3AED] dark:text-[#A78BFA]">
                      {graphResult.calculatedMassG.toFixed(1)} g
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.balanceComparisonLabel}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {numBalanceM.toFixed(1)} g
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.discrepancyLabel}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {discrepancyPercent.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Unknown body mass determined as M_x = {graphResult.calculatedMassG.toFixed(1)} g from the origin distance gradient ({graphResult.slope.toFixed(3)}).
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SubMode 2: Moments Verification */}
          {subMode === 'verification' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.leftMassLabel}
                  </label>
                  <input
                    type="text"
                    value={m1G}
                    onChange={(e) => updateObservations({ m1G: e.target.value })}
                    placeholder="100.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.leftPosLabel}
                  </label>
                  <input
                    type="text"
                    value={x1Cm}
                    onChange={(e) => updateObservations({ x1Cm: e.target.value })}
                    placeholder="30.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#3B82F6] block font-sans mb-1">
                    {t.rightMassLabel}
                  </label>
                  <input
                    type="text"
                    value={m2G}
                    onChange={(e) => updateObservations({ m2G: e.target.value })}
                    placeholder="50.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#3B82F6] block font-sans mb-1">
                    {t.rightPosLabel}
                  </label>
                  <input
                    type="text"
                    value={x2Cm}
                    onChange={(e) => updateObservations({ x2Cm: e.target.value })}
                    placeholder="90.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>

              {/* Verification Results */}
              {verifResult && (
                <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.acwMomentLabel}</span>
                      <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {verifResult.anticlockwiseMomentGCm} g cm
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.cwMomentLabel}</span>
                      <span className="text-sm font-bold text-[#3B82F6]">
                        {verifResult.clockwiseMomentGCm} g cm
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.momentDiscrepancyLabel}</span>
                      <span className="text-sm font-bold text-[#B45309]">
                        {verifResult.netMomentGCm} g cm
                      </span>
                    </div>
                  </div>

                  <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                    verifResult.isBalanced
                      ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                  }`}>
                    {verifResult.isBalanced ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    )}
                    <span>{verifResult.isBalanced ? t.balancedVerdict : t.unbalancedVerdict}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SubMode 3: Rule Mass Determination */}
          {subMode === 'rule_mass' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <label className="text-[11px] font-bold text-[#14243A] dark:text-[#F8FAFC] block font-sans mb-1">
                    {t.eccentricPivotLabel}
                  </label>
                  <input
                    type="text"
                    value={eccentricPivotCm}
                    onChange={(e) => updateObservations({ eccentricPivotCm: e.target.value })}
                    placeholder="40.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.knownMassLabel}
                  </label>
                  <input
                    type="text"
                    value={knownMassG}
                    onChange={(e) => updateObservations({ knownMassG: e.target.value })}
                    placeholder="50.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                    {t.knownPosLabel}
                  </label>
                  <input
                    type="text"
                    value={knownPosCm}
                    onChange={(e) => updateObservations({ knownPosCm: e.target.value })}
                    placeholder="16.0"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>

              {calculatedM !== null && (
                <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
                  <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
                    {t.ruleMassCalcTitle}
                  </span>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#64748B] block">{t.ruleMassFormula}</span>
                      <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                        {t.calculatedRuleMass} {calculatedM} g
                      </span>
                    </div>
                    <Scale className="w-6 h-6 text-[#0F766E]" />
                  </div>
                </div>
              )}
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

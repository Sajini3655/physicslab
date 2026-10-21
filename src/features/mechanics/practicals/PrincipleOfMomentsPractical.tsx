'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculatePrincipleOfMoments } from '../physics/calculations';
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
      subMode: 'verification',
      pivotCm: '50.0',
      m1G: '100.0',
      x1Cm: '30.0',
      m2G: '50.0',
      x2Cm: '90.0',
      eccentricPivotCm: '40.0',
      knownMassG: '50.0',
      knownPosCm: '16.0',
    },
  });

  const subMode = (observations.subMode || 'verification') as 'verification' | 'rule_mass';
  const setSubMode = (mode: 'verification' | 'rule_mass') => updateObservations({ subMode: mode });

  const pivotCm = observations.pivotCm || '50.0';
  const m1G = observations.m1G || '';
  const x1Cm = observations.x1Cm || '';
  const m2G = observations.m2G || '';
  const x2Cm = observations.x2Cm || '';

  const eccentricPivotCm = observations.eccentricPivotCm || '40.0';
  const knownMassG = observations.knownMassG || '';
  const knownPosCm = observations.knownPosCm || '';

  const t = {
    en: {
      title: 'Practical 6: Verification of the Principle of Moments & Mass of a Metre Rule',
      aim: 'Aim: To verify the Principle of Moments for a uniform rigid body in rotational equilibrium and determine the mass of a metre rule without a balance.',
      apparatus: 'Apparatus: Uniform metre rule, sharp knife-edge fulcrum, spirit level, slotted masses with loops (50 g, 100 g), thread, electronic balance (for confirmation).',
      theoryTitle: 'Rotational Equilibrium & Principle of Moments',
      theoryText: 'The moment of a force about a pivot is the measure of its turning effect: Moment = Force × Perpendicular Distance (τ = F × d). When a body is in rotational equilibrium about any point, the algebraic sum of clockwise moments equals the sum of anti-clockwise moments: Σ τ_CW = Σ τ_ACW. To determine the mass M of the metre rule, shift the fulcrum away from the 50.0 cm mark to an eccentric position x₀: the rule’s weight acts at its center of gravity (50.0 cm), giving M × (50.0 - x₀) = m × d.',
      procedure: 'Procedure: 1. Balance the bare metre rule on the knife edge to confirm its center of gravity is at 50.0 cm. 2. Suspend mass m₁ on the left and mass m₂ on the right; adjust positions until the rule rests horizontally. 3. Record masses and distance arms d₁ and d₂. 4. Verify clockwise moment m₂ × d₂ equals anti-clockwise moment m₁ × d₁. 5. Displace fulcrum to an eccentric point and balance a single mass m to compute rule mass M.',
      modeVerification: 'Moments Verification',
      modeRuleMass: 'Metre Rule Mass Determination',
      pivotLabel: 'Fulcrum Pivot Position (cm):',
      leftMassLabel: 'Anti-clockwise Mass m₁ (g):',
      leftPosLabel: 'Left Position x₁ (cm):',
      rightMassLabel: 'Clockwise Mass m₂ (g):',
      rightPosLabel: 'Right Position x₂ (cm):',
      acwMomentLabel: 'Anti-clockwise Moment (g cm):',
      cwMomentLabel: 'Clockwise Moment (g cm):',
      discrepancyLabel: 'Discrepancy (g cm):',
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
      precautions: '1. Ensure the knife edge is sharp and perpendicular to the metre rule edges. 2. Use a spirit level or compare ends against bench height to confirm horizontal alignment. 3. Loop threads lightly so their weight is negligible.',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 6: ඝූර්ණ මූලධර්මය සත්‍යාපනය සහ මීටර් රූලක ස්කන්ධය සෙවීම',
      aim: 'අරමුණ: භ්‍රමණ තුල්‍යතාවයේ පවතින දෘඪ වස්තුවක් සඳහා ඝූර්ණ මූලධර්මය සත්‍යාපනය කිරීම සහ තුලාවක් නොමැතිව මීටර් කෝදුවක ස්කන්ධය සෙවීම.',
      apparatus: 'උපකරණ: ඒකාකාර මීටර් කෝදුව, දැලිපිහි දාර ආධාරකය, මට්ටම් බුබුල, ලූප සහිත බර පඩි (50 g, 100 g), නූල්, තහවුරු කිරීමට විද්‍යුත් තුලාව.',
      theoryTitle: 'භ්‍රමණ තුල්‍යතාව සහ ඝූර්ණ මූලධර්මය',
      theoryText: 'ලක්ෂ්‍යයක් වටා බලයක ඝූර්ණය යනු එහි කරකැවීමේ හැකියාවයි: ඝූර්ණය = බලය × ලම්බක දුර (τ = F × d). පද්ධතියක් භ්‍රමණ තුල්‍යතාවයේ පවතින විට ඔරලෝසු අතේ දිශාවට වන ඝූර්ණ එකතුව ප්‍රතිවිරුද්ධ දිශාවට වන ඝූර්ණ එකතුවට සමාන වේ: Σ τ_CW = Σ τ_ACW. මීටර් කෝදුවේ ස්කන්ධය M සෙවීම සඳහා ආධාරකය 50.0 cm ලක්ෂ්‍යයෙන් ඉවතට x₀ ස්ථානයකට ගෙන ගොස් දන්නා බරක් m මඟින් තිරස්ව තුලනය කරනු ලැබේ: M × (50.0 - x₀) = m × d.',
      procedure: 'ක්‍රමවේදය: 1. හිස් කෝදුව දැලිපිහි දාරය මත තබා ගුරුත්ව කේන්ද්‍රය 50.0 cm හි පිහිටන බව තහවුරු කරගන්න. 2. වම්පස m₁ ද දකුණුපස m₂ ද එල්ලා කෝදුව තිරස් වන තෙක් දුරවල් වෙනස් කරන්න. 3. ඝූර්ණ ගණනය කර සමාන බව පෙන්වන්න. 4. ආධාරකය විකේන්ද්‍රික ලක්ෂ්‍යයකට ගෙන තනි බරකින් කෝදුවේ ස්කන්ධය M සොයන්න.',
      modeVerification: 'ඝූර්ණ සත්‍යාපනය',
      modeRuleMass: 'කෝදුවේ ස්කන්ධය සෙවීම',
      pivotLabel: 'දැලිපිහි දාරයේ පිහිටුම (cm):',
      leftMassLabel: 'වාමාවර්ත ස්කන්ධය m₁ (g):',
      leftPosLabel: 'වම් පිහිටුම x₁ (cm):',
      rightMassLabel: 'දක්ෂිණාවර්ත ස්කන්ධය m₂ (g):',
      rightPosLabel: 'දකුණු පිහිටුම x₂ (cm):',
      acwMomentLabel: 'වාමාවර්ත ඝූර්ණය (g cm):',
      cwMomentLabel: 'දක්ෂිණාවර්ත ඝූර්ණය (g cm):',
      discrepancyLabel: 'වෙනස (g cm):',
      ruleMassCalcTitle: 'මීටර් කෝදුවේ ස්කන්ධය M ගණනය කිරීම',
      cgLabel: 'කෝදුවේ ගුරුත්ව කේන්ද්‍රය: 50.0 cm',
      eccentricPivotLabel: 'විකේන්ද්‍රික ආධාරක පිහිටුම x₀ (cm):',
      knownMassLabel: 'දන්නා බර m (g):',
      knownPosLabel: 'දන්නා බරේ පිහිටුම x (cm):',
      calculatedRuleMass: 'ගණනය කළ කෝදුවේ ස්කන්ධය M (g):',
      ruleMassFormula: 'M = m × |x₀ - x| / |50.0 - x₀|',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearInputs: 'හිස් කරන්න',
      balancedVerdict: 'භ්‍රමණ තුල්‍යතාව තහවුරු විය (තුලිතයි)',
      unbalancedVerdict: 'ඝූර්ණ අසමතුලිතයි (දුර සකසන්න)',
      precautionsTitle: 'පරීක්ෂණාත්මක පූර්වෝපායයන්',
      precautions: '1. දැලිපිහි දාරය තියුණු හා කෝදුවට ලම්බක විය යුතුය. 2. කෝදුව සම්පූර්ණයෙන්ම තිරස් බව පරීක්ෂා කිරීමට මට්ටම් බුබුලක් යොදා ගන්න. 3. නූල්වල බර නොසැලකිය හැකි වන සේ සිහින් නූල් යොදා ගන්න.',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  // Verification calculations
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

  // Rule mass calculations
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
    if (subMode === 'verification') {
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
          <div className="flex items-center gap-2">
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
          {/* Metre Rule Graphical SVG */}
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

              {/* Fulcrum Knife-Edge Pivot */}
              {subMode === 'verification' ? (
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

          {/* SubMode: Verification Controls */}
          {subMode === 'verification' ? (
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
                      <span className="text-[10px] text-[#64748B] block font-sans">{t.discrepancyLabel}</span>
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
          ) : (
            /* SubMode: Rule Mass Determination Controls */
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

'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface DimensionalCheckerProps {
  locale?: Locale;
}

interface FormulaEntry {
  id: string;
  name: { en: string; si: string };
  formula: string;
  lhs: string;
  lhsDim: string;
  rhsTerms: Array<{ term: string; dim: string }>;
  isHomogeneous: boolean;
  explanation: { en: string; si: string };
}

const EQUATIONS: FormulaEntry[] = [
  {
    id: 'kinematics-1',
    name: { en: 'First Equation of Motion', si: 'පළමු චලිත සමීකරණය' },
    formula: 'v = u + at',
    lhs: 'v',
    lhsDim: 'L T⁻¹',
    rhsTerms: [
      { term: 'u', dim: 'L T⁻¹' },
      { term: 'a × t', dim: '(L T⁻²) × T = L T⁻¹' },
    ],
    isHomogeneous: true,
    explanation: {
      en: 'LHS has dimension [v] = L T⁻¹. On the RHS, [u] = L T⁻¹ and [at] = (L T⁻²)(T) = L T⁻¹. All additive terms share identical dimensions L T⁻¹.',
      si: 'වම්පස [v] = L T⁻¹. දකුණුපස [u] = L T⁻¹ සහ [at] = (L T⁻²)(T) = L T⁻¹. එකතු වන සියලු පදවල මාන L T⁻¹ බැවින් මාන අතින් සමජාතීය වේ.',
    },
  },
  {
    id: 'kinematics-2',
    name: { en: 'Second Equation of Motion', si: 'දෙවන චලිත සමීකරණය' },
    formula: 's = ut + ½ at²',
    lhs: 's',
    lhsDim: 'L',
    rhsTerms: [
      { term: 'u × t', dim: '(L T⁻¹) × T = L' },
      { term: '½ a × t²', dim: '1 × (L T⁻²) × T² = L' },
    ],
    isHomogeneous: true,
    explanation: {
      en: 'LHS [s] = L. RHS term 1 [ut] = L. RHS term 2 [½at²] = L (½ is dimensionless). Both sides have dimension L.',
      si: 'වම්පස [s] = L. දකුණුපස [ut] = L සහ [½at²] = L (½ මාන රහිතය). දෙපසම මාන L වන බැවින් සමජාතීය වේ.',
    },
  },
  {
    id: 'pendulum',
    name: { en: 'Simple Pendulum Period', si: 'සරල ලෝලක ආවර්ත කාලය' },
    formula: 'T = 2π √(L / g)',
    lhs: 'T',
    lhsDim: 'T',
    rhsTerms: [
      { term: '2π √(L / g)', dim: '1 × √(L / (L T⁻²)) = √(T²) = T' },
    ],
    isHomogeneous: true,
    explanation: {
      en: 'LHS [T] = T. In the RHS, 2π is dimensionless, and √(L / g) = √(L / (L T⁻²)) = √(T²) = T. Thus [LHS] = [RHS] = T.',
      si: 'වම්පස [T] = T. දකුණුපස 2π මාන රහිත වන අතර √(L / g) = √(L / (L T⁻²)) = √(T²) = T වේ. දෙපසම මාන T වේ.',
    },
  },
  {
    id: 'hydrostatic',
    name: { en: 'Hydrostatic Liquid Pressure', si: 'ස්ථිති විද්‍යාත්මක ද්‍රව පීඩනය' },
    formula: 'P = ρ g h',
    lhs: 'P',
    lhsDim: 'M L⁻¹ T⁻²',
    rhsTerms: [
      { term: 'ρ × g × h', dim: '(M L⁻³) × (L T⁻²) × L = M L⁻¹ T⁻²' },
    ],
    isHomogeneous: true,
    explanation: {
      en: 'Pressure [P] = [Force]/[Area] = M L⁻¹ T⁻². On the RHS, [ρ] = M L⁻³, [g] = L T⁻², [h] = L. Product = (M L⁻³)(L T⁻²)(L) = M L⁻¹ T⁻².',
      si: 'පීඩනය [P] = M L⁻¹ T⁻². දකුණුපස [ρgh] = (M L⁻³)(L T⁻²)(L) = M L⁻¹ T⁻² වේ. දෙපසම මාන සමාන වේ.',
    },
  },
  {
    id: 'gravitation',
    name: { en: 'Universal Law of Gravitation', si: 'විශ්ව ගුරුත්වාකර්ෂණ නියමය' },
    formula: 'F = G m₁ m₂ / r²',
    lhs: 'F',
    lhsDim: 'M L T⁻²',
    rhsTerms: [
      { term: 'G m₁ m₂ / r²', dim: '(M⁻¹ L³ T⁻²) × M² / L² = M L T⁻²' },
    ],
    isHomogeneous: true,
    explanation: {
      en: 'Force [F] = M L T⁻². With [G] = M⁻¹ L³ T⁻², [m₁ m₂ / r²] = M² L⁻². The product is (M⁻¹ L³ T⁻²)(M² L⁻²) = M L T⁻².',
      si: 'බලය [F] = M L T⁻². [G] = M⁻¹ L³ T⁻² බැවින් දකුණුපස ගුණිතය (M⁻¹ L³ T⁻²)(M² L⁻²) = M L T⁻² වේ.',
    },
  },
];

export const DimensionalChecker: React.FC<DimensionalCheckerProps> = ({ locale = 'en' }) => {
  const [selectedId, setSelectedId] = useState<string>('kinematics-1');

  const selected = EQUATIONS.find((e) => e.id === selectedId) || EQUATIONS[0];

  const t = {
    en: {
      title: 'Interactive Dimensional Homogeneity Inspector',
      subtitle: 'Examine step-by-step dimensional consistency for standard physical equations.',
      selectEquation: 'Select Physical Equation:',
      lhsLabel: 'LHS Dimension:',
      rhsLabel: 'RHS Additive Terms:',
      resultLabel: 'Dimensional Consistency Check:',
      homogeneous: 'DIMENSIONALLY HOMOGENEOUS (Consistent)',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී මාන සමජාතීයතා පරීක්ෂකය',
      subtitle: 'සම්මත භෞතික සමීකරණ සඳහා පියවරෙන් පියවර මාන විශ්ලේෂණය සහ සමජාතීයතාව.',
      selectEquation: 'භෞතික සමීකරණය තෝරන්න:',
      lhsLabel: 'වම්පස (LHS) මාන:',
      rhsLabel: 'දකුණුපස (RHS) පද:',
      resultLabel: 'මාන සමජාතීයතා පරීක්ෂාව:',
      homogeneous: 'මාන අතින් සමජාතීය වේ (නිරවද්‍යයි)',
    },
  }[locale];

  return (
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
          <CardTitle className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
        </div>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
          {t.subtitle}
        </p>

        {/* Equation Selector Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {EQUATIONS.map((eq) => (
            <button
              key={eq.id}
              type="button"
              onClick={() => setSelectedId(eq.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all ${
                selectedId === eq.id
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-[#64748B] dark:text-[#94A3B8]'
              }`}
            >
              {eq.formula}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0 space-y-4">
        {/* Dimensions Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.lhsLabel} [{selected.lhs}]
            </span>
            <div className="p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] text-sm font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {selected.lhsDim}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.rhsLabel}
            </span>
            <div className="space-y-1.5">
              {selected.rhsTerms.map((rt, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] text-xs font-mono flex justify-between"
                >
                  <span className="text-[#64748B]">[{rt.term}]:</span>
                  <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">{rt.dim}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Status */}
        <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.homogeneous}
            </span>
          </div>
          <p className="text-xs text-[#0F766E] dark:text-[#14B8A6] leading-relaxed">
            {selected.explanation[locale]}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

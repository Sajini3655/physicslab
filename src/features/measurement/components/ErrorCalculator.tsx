'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

interface ErrorCalculatorProps {
  locale?: Locale;
}

export const ErrorCalculator: React.FC<ErrorCalculatorProps> = ({ locale = 'en' }) => {
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide' | 'power'>('multiply');

  const [xVal, setXVal] = useState<number>(10.0);
  const [dxVal, setDxVal] = useState<number>(0.2);

  const [yVal, setYVal] = useState<number>(4.0);
  const [dyVal, setDyVal] = useState<number>(0.1);

  const [powerN, setPowerN] = useState<number>(3);

  const t = {
    en: {
      title: 'Interactive Error & Uncertainty Propagation Simulator',
      subtitle: 'Simulate how absolute and percentage uncertainties combine across mathematical operations.',
      opAdd: 'Addition (X + Y)',
      opSub: 'Subtraction (X - Y)',
      opMul: 'Multiplication (X × Y)',
      opDiv: 'Division (X / Y)',
      opPow: 'Power (Xⁿ)',
      valX: 'Quantity X = x ± Δx',
      valY: 'Quantity Y = y ± Δy',
      powerExp: 'Exponent n',
      resultCard: 'Propagated Outcome Z = z ± Δz',
      pctUncertainty: 'Percentage Uncertainty in Z:',
      propagationLaw: 'Underlying Error Propagation Rule:',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී දෝෂ සහ අවිනිශ්චිතතා ප්‍රචාරණ අනුකරණය',
      subtitle: 'ගණිත කර්ම හරහා නිරපේක්ෂ සහ ප්‍රතිශත අවිනිශ්චිතතා එකතු වන ආකාරය සජීවීව පරීක්ෂා කරන්න.',
      opAdd: 'එකතු කිරීම (X + Y)',
      opSub: 'අඩු කිරීම (X - Y)',
      opMul: 'ගුණ කිරීම (X × Y)',
      opDiv: 'බෙදීම (X / Y)',
      opPow: 'බලයක් (Xⁿ)',
      valX: 'රාශිය X = x ± Δx',
      valY: 'රාශිය Y = y ± Δy',
      powerExp: 'දර්ශකය n',
      resultCard: 'ප්‍රචාරණය වූ ප්‍රතිඵලය Z = z ± Δz',
      pctUncertainty: 'Z හි ප්‍රතිශත අවිනිශ්චිතතාව:',
      propagationLaw: 'දෝෂ ප්‍රචාරණ නීතිය:',
    },
  }[locale];

  let zVal = 0;
  let dzVal = 0;
  let ruleText = '';

  if (operation === 'add') {
    zVal = Number((xVal + yVal).toFixed(2));
    dzVal = Number((dxVal + dyVal).toFixed(2));
    ruleText = 'ΔZ = ΔX + ΔY (Absolute errors ALWAYS ADD in addition)';
  } else if (operation === 'subtract') {
    zVal = Number((xVal - yVal).toFixed(2));
    dzVal = Number((dxVal + dyVal).toFixed(2));
    ruleText = 'ΔZ = ΔX + ΔY (Absolute errors ALWAYS ADD in subtraction, never cancel)';
  } else if (operation === 'multiply') {
    zVal = Number((xVal * yVal).toFixed(2));
    const frac = dxVal / xVal + dyVal / yVal;
    dzVal = Number((zVal * frac).toFixed(2));
    ruleText = 'ΔZ/Z = (ΔX/X) + (ΔY/Y) (Fractional uncertainties add in multiplication)';
  } else if (operation === 'divide') {
    zVal = Number((xVal / yVal).toFixed(2));
    const frac = dxVal / xVal + dyVal / yVal;
    dzVal = Number((zVal * frac).toFixed(2));
    ruleText = 'ΔZ/Z = (ΔX/X) + (ΔY/Y) (Fractional uncertainties add in division)';
  } else {
    zVal = Number(Math.pow(xVal, powerN).toFixed(2));
    const frac = powerN * (dxVal / xVal);
    dzVal = Number((zVal * frac).toFixed(2));
    ruleText = 'ΔZ/Z = n × (ΔX/X) (Fractional uncertainty is scaled by power exponent n)';
  }

  const pctZ = zVal !== 0 ? Number(((dzVal / Math.abs(zVal)) * 100).toFixed(2)) : 0;

  return (
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
          <CardTitle className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
        </div>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
          {t.subtitle}
        </p>

        {/* Operation Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          <button
            type="button"
            onClick={() => setOperation('add')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              operation === 'add' ? 'bg-[#0F766E] text-white' : 'bg-[#F6FAFD] border text-[#64748B]'
            }`}
          >
            {t.opAdd}
          </button>
          <button
            type="button"
            onClick={() => setOperation('subtract')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              operation === 'subtract' ? 'bg-[#0F766E] text-white' : 'bg-[#F6FAFD] border text-[#64748B]'
            }`}
          >
            {t.opSub}
          </button>
          <button
            type="button"
            onClick={() => setOperation('multiply')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              operation === 'multiply' ? 'bg-[#0F766E] text-white' : 'bg-[#F6FAFD] border text-[#64748B]'
            }`}
          >
            {t.opMul}
          </button>
          <button
            type="button"
            onClick={() => setOperation('divide')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              operation === 'divide' ? 'bg-[#0F766E] text-white' : 'bg-[#F6FAFD] border text-[#64748B]'
            }`}
          >
            {t.opDiv}
          </button>
          <button
            type="button"
            onClick={() => setOperation('power')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              operation === 'power' ? 'bg-[#0F766E] text-white' : 'bg-[#F6FAFD] border text-[#64748B]'
            }`}
          >
            {t.opPow}
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0 space-y-4">
        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.valX}: {xVal} ± {dxVal}
            </span>
            <div className="flex gap-2 text-xs">
              <span className="w-8">x:</span>
              <input
                type="range"
                min="1"
                max="50"
                step="0.5"
                value={xVal}
                onChange={(e) => setXVal(parseFloat(e.target.value))}
                className="w-full accent-[#0F766E]"
              />
            </div>
            <div className="flex gap-2 text-xs">
              <span className="w-8">Δx:</span>
              <input
                type="range"
                min="0.05"
                max="1.0"
                step="0.05"
                value={dxVal}
                onChange={(e) => setDxVal(parseFloat(e.target.value))}
                className="w-full accent-[#0F766E]"
              />
            </div>
          </div>

          {operation !== 'power' ? (
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.valY}: {yVal} ± {dyVal}
              </span>
              <div className="flex gap-2 text-xs">
                <span className="w-8">y:</span>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="0.5"
                  value={yVal}
                  onChange={(e) => setYVal(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
              <div className="flex gap-2 text-xs">
                <span className="w-8">Δy:</span>
                <input
                  type="range"
                  min="0.05"
                  max="1.0"
                  step="0.05"
                  value={dyVal}
                  onChange={(e) => setDyVal(parseFloat(e.target.value))}
                  className="w-full accent-[#0F766E]"
                />
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-2">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.powerExp}: n = {powerN}
              </span>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={powerN}
                onChange={(e) => setPowerN(parseInt(e.target.value))}
                className="w-full accent-[#0F766E]"
              />
            </div>
          )}
        </div>

        {/* Result Outcome */}
        <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.resultCard}
            </span>
            <span className="text-base font-bold font-mono text-[#0F766E] dark:text-[#14B8A6]">
              Z = {zVal} ± {dzVal} (±{pctZ}%)
            </span>
          </div>

          <div className="text-xs text-[#0F766E] dark:text-[#14B8A6] font-mono pt-1 border-t border-[#99F6E4]/50">
            <span>{t.propagationLaw}: </span>
            <span className="font-bold">{ruleText}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

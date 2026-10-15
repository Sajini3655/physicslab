'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRightLeft } from 'lucide-react';

interface InteractiveUnitConverterProps {
  locale?: Locale;
}

export const InteractiveUnitConverter: React.FC<InteractiveUnitConverterProps> = ({
  locale = 'en',
}) => {
  const [conversionType, setConversionType] = useState<'density' | 'speed' | 'length' | 'area'>('density');
  const [inputValue, setInputValue] = useState<string>('2.7');

  const num = parseFloat(inputValue) || 0;

  const t = {
    en: {
      title: 'Interactive SI Unit & Prefix Converter',
      subtitle: 'Instantly convert between laboratory non-SI units and standard SI base/derived units.',
      densityTab: 'Density (g cm⁻³ ↔ kg m⁻³)',
      speedTab: 'Speed (km h⁻¹ ↔ m s⁻¹)',
      lengthTab: 'Prefix Scale (m ↔ nm, μm, pm)',
      areaTab: 'Area (mm² ↔ m²)',
      inputLabel: 'Input Value:',
      resultLabel: 'Converted Standard SI Value:',
      factorExplanation: 'Conversion Factor & Step-by-Step Logic:',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී SI ඒකක සහ උපසර්ග පරිවර්තකය',
      subtitle: 'රසායනාගාර ඒකක සහ සම්මත SI මූලික/ව්‍යුත්පන්න ඒකක අතර සජීවී පරිවර්තනය.',
      densityTab: 'ඝනත්වය (g cm⁻³ ↔ kg m⁻³)',
      speedTab: 'වේගය (km h⁻¹ ↔ m s⁻¹)',
      lengthTab: 'උපසර්ග පරිමාණය (m ↔ nm, μm, pm)',
      areaTab: 'වර්ගඵලය (mm² ↔ m²)',
      inputLabel: 'ඇතුළත් කළ අගය:',
      resultLabel: 'පරිවර්තනය කළ සම්මත SI අගය:',
      factorExplanation: 'පරිවර්තන සාධකය සහ පියවරෙන් පියවර තර්කය:',
    },
  }[locale];

  let outputText = '';
  let explanation = '';

  if (conversionType === 'density') {
    const siVal = num * 1000;
    outputText = `${siVal.toLocaleString()} kg m⁻³`;
    explanation = `${num} g cm⁻³ × (10⁻³ kg / 10⁻⁶ m³) = ${num} × 10³ = ${siVal} kg m⁻³`;
  } else if (conversionType === 'speed') {
    const siVal = Number((num * (5 / 18)).toFixed(3));
    outputText = `${siVal} m s⁻¹`;
    explanation = `${num} km h⁻¹ × (1000 m / 3600 s) = ${num} × (5/18) = ${siVal} m s⁻¹`;
  } else if (conversionType === 'length') {
    const nm = num * 1e9;
    const um = num * 1e6;
    const pm = num * 1e12;
    outputText = `${um.toExponential(2)} μm | ${nm.toExponential(2)} nm | ${pm.toExponential(2)} pm`;
    explanation = `1 m = 10⁶ μm (micro) = 10⁹ nm (nano) = 10¹² pm (pico)`;
  } else {
    const siVal = num * 1e-6;
    outputText = `${siVal.toExponential(3)} m²`;
    explanation = `${num} mm² × (10⁻³ m)² = ${num} × 10⁻⁶ m² = ${siVal.toExponential(3)} m²`;
  }

  return (
    <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
          <CardTitle className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
        </div>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
          {t.subtitle}
        </p>

        {/* Mode Selector */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          <button
            type="button"
            onClick={() => { setConversionType('density'); setInputValue('2.7'); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              conversionType === 'density'
                ? 'bg-[#0F766E] text-white'
                : 'bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] text-[#64748B]'
            }`}
          >
            {t.densityTab}
          </button>
          <button
            type="button"
            onClick={() => { setConversionType('speed'); setInputValue('108'); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              conversionType === 'speed'
                ? 'bg-[#0F766E] text-white'
                : 'bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] text-[#64748B]'
            }`}
          >
            {t.speedTab}
          </button>
          <button
            type="button"
            onClick={() => { setConversionType('length'); setInputValue('0.0005'); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              conversionType === 'length'
                ? 'bg-[#0F766E] text-white'
                : 'bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] text-[#64748B]'
            }`}
          >
            {t.lengthTab}
          </button>
          <button
            type="button"
            onClick={() => { setConversionType('area'); setInputValue('250'); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              conversionType === 'area'
                ? 'bg-[#0F766E] text-white'
                : 'bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] text-[#64748B]'
            }`}
          >
            {t.areaTab}
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.inputLabel}
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono font-bold text-[#14243A] dark:text-[#F8FAFC] focus:outline-[#0F766E]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
              {t.resultLabel}
            </label>
            <div className="w-full px-3 py-2 rounded-xl border border-[#99F6E4] dark:border-[#115E59] bg-[#F0FDFA] dark:bg-[#042F2E] text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {outputText}
            </div>
          </div>
        </div>

        {/* Step-by-Step Logic */}
        <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] font-mono leading-relaxed">
          <span className="font-sans font-semibold text-[#14243A] dark:text-[#F8FAFC] block mb-0.5">
            {t.factorExplanation}
          </span>
          {explanation}
        </div>
      </CardContent>
    </Card>
  );
};

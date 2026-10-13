'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { VernierCalipers } from '../instruments/VernierCalipers';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database } from 'lucide-react';

interface VernierCylinderPracticalProps {
  locale?: Locale;
}

export const VernierCylinderPractical: React.FC<VernierCylinderPracticalProps> = ({
  locale = 'en',
}) => {
  // Table rows: 3 trials each for D_ext, d_int, and h
  const [extTrials, setExtTrials] = useState<[string, string, string]>(['', '', '']);
  const [intTrials, setIntTrials] = useState<[string, string, string]>(['', '', '']);
  const [depthTrials, setDepthTrials] = useState<[string, string, string]>(['', '', '']);
  const [zeroError, setZeroError] = useState<string>('0.0');

  const t = {
    en: {
      title: 'Practical 1: Dimensions & Volume of a Hollow Cylinder',
      aim: 'Aim: To determine the internal and external radii, depth, and volume of the material of a hollow cylinder using Vernier Calipers.',
      apparatus: 'Apparatus: Vernier Calipers (Least Count 0.1 mm), Hollow metal/plastic cylinder.',
      theoryTitle: 'Underlying Theory & Formulae',
      theoryText: 'Zero error correction is applied as: Corrected = Observed - (Signed Zero Error). If D is external diameter and d is internal diameter, radii are R = D/2 and r = d/2. The volume of material is given by V = π(R² - r²)h.',
      procedure: 'Procedure: 1. Determine least count and check zero error. 2. Measure external diameter at 3 different orientations. 3. Measure internal diameter using internal jaws. 4. Measure depth using the depth probe. 5. Compute mean values, apply corrections, and calculate material volume.',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      trial1: 'Trial 1 (mm)',
      trial2: 'Trial 2 (mm)',
      trial3: 'Trial 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      extDia: 'External Diameter (D)',
      intDia: 'Internal Diameter (d)',
      depth: 'Depth / Height (h)',
      zeroErrorLabel: 'Zero Error (signed, mm):',
      calcTitle: 'Calculated Results & Derived Quantities',
      extRadius: 'External Radius (R):',
      intRadius: 'Internal Radius (r):',
      cavityVol: 'Internal Cavity Volume (V_cavity):',
      solidVol: 'Solid Material Volume (V_solid):',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 1: කුහර සිලින්ඩරයක මාන සහ පරිමාව නිර්ණය කිරීම',
      aim: 'අරමුණ: වර්නියර් කැලිපරය භාවිතයෙන් කුහර සිලින්ඩරයක අභ්‍යන්තර සහ බාහිර අරය, ගැඹුර සහ ද්‍රව්‍යයේ පරිමාව නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: වර්නියර් කැලිපරය (කුඩාම මිනුම 0.1 mm), ලෝහ හෝ ප්ලාස්ටික් කුහර සිලින්ඩරය.',
      theoryTitle: 'මූලධර්මය සහ සමීකරණ',
      theoryText: 'ශූන්‍ය දෝෂ ශෝධනය: ශෝධිත පාඨාංකය = නිරීක්ෂිත - (ලකුණ සහිත ශූන්‍ය දෝෂය). බාහිර විෂ්කම්භය D හා අභ්‍යන්තර විෂ්කම්භය d නම්, අරයන් R = D/2 සහ r = d/2 වේ. ද්‍රව්‍යයේ පරිමාව V = π(R² - r²)h මගින් ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම හා ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. විවිධ දිශා ඔස්සේ බාහිර විෂ්කම්භය තෙවරක් මැනීම. 3. අභ්‍යන්තර හනුවලින් අභ්‍යන්තර විෂ්කම්භය තෙවරක් මැනීම. 4. ගැඹුරු කූරෙන් ගැඹුර තෙවරක් මැනීම. 5. මධ්‍යන්‍ය අගයන් සොයා පරිමාව ගණනය කිරීම.',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      trial1: 'වාරය 1 (mm)',
      trial2: 'වාරය 2 (mm)',
      trial3: 'වාරය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      extDia: 'බාහිර විෂ්කම්භය (D)',
      intDia: 'අභ්‍යන්තර විෂ්කම්භය (d)',
      depth: 'ගැඹුර / උස (h)',
      zeroErrorLabel: 'ශූන්‍ය දෝෂය (ලකුණ සමඟ, mm):',
      calcTitle: 'ගණනය කළ ප්‍රතිඵල',
      extRadius: 'බාහිර අරය (R):',
      intRadius: 'අභ්‍යන්තර අරය (r):',
      cavityVol: 'අභ්‍යන්තර කුහර පරිමාව (V_cavity):',
      solidVol: 'ඝන ද්‍රව්‍යයේ පරිමාව (V_solid):',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    setExtTrials(['25.4', '25.3', '25.5']);
    setIntTrials(['18.6', '18.7', '18.5']);
    setDepthTrials(['42.2', '42.4', '42.3']);
    setZeroError('+0.1');
  };

  const handleClear = () => {
    setExtTrials(['', '', '']);
    setIntTrials(['', '', '']);
    setDepthTrials(['', '', '']);
    setZeroError('0.0');
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(2));
  };

  const ze = parseFloat(zeroError) || 0.0;
  const meanExt = parseMean(extTrials);
  const meanInt = parseMean(intTrials);
  const meanDepth = parseMean(depthTrials);

  const corrExt = meanExt !== null ? Number((meanExt - ze).toFixed(2)) : null;
  const corrInt = meanInt !== null ? Number((meanInt - ze).toFixed(2)) : null;
  const corrDepth = meanDepth !== null ? Number((meanDepth - ze).toFixed(2)) : null;

  const rExt = corrExt !== null ? Number((corrExt / 2).toFixed(2)) : null;
  const rInt = corrInt !== null ? Number((corrInt / 2).toFixed(2)) : null;

  const cavityVol = rInt !== null && corrDepth !== null
    ? Number((Math.PI * rInt * rInt * corrDepth).toFixed(1))
    : null;

  const solidVol = rExt !== null && rInt !== null && corrDepth !== null
    ? Number((Math.PI * (rExt * rExt - rInt * rInt) * corrDepth).toFixed(1))
    : null;

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

      {/* Interactive Instrument Workspace */}
      <VernierCalipers locale={locale} leastCount={0.1} />

      {/* Observation Table Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.obsTable}
          </CardTitle>

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
            <table className="w-full text-left text-xs border-collapse">
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
                {/* Ext Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.extDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[0]}
                      onChange={(e) => setExtTrials([e.target.value, extTrials[1], extTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[1]}
                      onChange={(e) => setExtTrials([extTrials[0], e.target.value, extTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={extTrials[2]}
                      onChange={(e) => setExtTrials([extTrials[0], extTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanExt !== null ? `${meanExt} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrExt !== null ? `${corrExt} mm` : '—'}</td>
                </tr>

                {/* Int Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.intDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[0]}
                      onChange={(e) => setIntTrials([e.target.value, intTrials[1], intTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[1]}
                      onChange={(e) => setIntTrials([intTrials[0], e.target.value, intTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={intTrials[2]}
                      onChange={(e) => setIntTrials([intTrials[0], intTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanInt !== null ? `${meanInt} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrInt !== null ? `${corrInt} mm` : '—'}</td>
                </tr>

                {/* Depth */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.depth}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={depthTrials[0]}
                      onChange={(e) => setDepthTrials([e.target.value, depthTrials[1], depthTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={depthTrials[1]}
                      onChange={(e) => setDepthTrials([depthTrials[0], e.target.value, depthTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={depthTrials[2]}
                      onChange={(e) => setDepthTrials([depthTrials[0], depthTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanDepth !== null ? `${meanDepth} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrDepth !== null ? `${corrDepth} mm` : '—'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Derived Quantities & Volume Output */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              {t.calcTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.extRadius}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {rExt !== null ? `${rExt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.intRadius}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {rInt !== null ? `${rInt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.cavityVol}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {cavityVol !== null ? `${cavityVol} mm³` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.solidVol}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {solidVol !== null ? `${solidVol} mm³` : '—'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

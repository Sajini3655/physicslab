'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { MicrometerScrewGauge } from '../instruments/MicrometerScrewGauge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database } from 'lucide-react';

interface MicrometerCoinPracticalProps {
  locale?: Locale;
}

export const MicrometerCoinPractical: React.FC<MicrometerCoinPracticalProps> = ({
  locale = 'en',
}) => {
  const [diaTrials, setDiaTrials] = useState<[string, string, string]>(['', '', '']);
  const [thickTrials, setThickTrials] = useState<[string, string, string]>(['', '', '']);
  const [zeroError, setZeroError] = useState<string>('0.00');

  const leastCount = 0.01;

  const t = {
    en: {
      title: 'Practical 2: Diameter & Thickness of a Coin',
      aim: 'Aim: To measure the diameter and thickness of a coin accurately using a micrometer screw gauge and determine its volume and fractional uncertainty.',
      apparatus: 'Apparatus: Micrometer Screw Gauge (Least Count 0.01 mm), Standard Coin (e.g. 10 Rupee coin).',
      theoryTitle: 'Theory & Experimental Precautions',
      theoryText: 'The ratchet must always be used when tightening the spindle onto the coin to prevent deformation and avoid false pitch advancement. Measurements of diameter are taken across multiple perpendicular directions to account for slight non-circularity. Volume V = π(D/2)²t. Maximum fractional uncertainty is ΔV/V = 2(ΔD/D) + (Δt/t), where ΔD = Δt = 0.01 mm.',
      procedure: 'Procedure: 1. Determine least count and check zero error using the ratchet. 2. Measure diameter along 3 mutually perpendicular diameters. 3. Measure thickness at 3 distinct points along the rim. 4. Correct for signed zero error. 5. Compute mean dimensions, volume, and percentage uncertainty.',
      obsTable: 'Observation & Measurement Table',
      param: 'Parameter',
      trial1: 'Trial 1 (mm)',
      trial2: 'Trial 2 (mm)',
      trial3: 'Trial 3 (mm)',
      meanObs: 'Mean Observed (mm)',
      correctedVal: 'Corrected Value (mm)',
      coinDia: 'Coin Diameter (D)',
      coinThick: 'Coin Thickness (t)',
      zeroErrorLabel: 'Signed Zero Error (mm):',
      calcTitle: 'Volume & Uncertainty Analysis',
      volumeLabel: 'Coin Volume (V):',
      fractionalUncertainty: 'Fractional Uncertainty (ΔV/V):',
      percentageUncertainty: 'Percentage Uncertainty (%):',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2: කාසියක විෂ්කම්භය සහ ඝනකම නිර්ණය කිරීම',
      aim: 'අරමුණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය භාවිතයෙන් කාසියක විෂ්කම්භය සහ ඝනකම නිරවද්‍යව මැන, එහි පරිමාව සහ භාගික අවිනිශ්චිතතාව ගණනය කිරීම.',
      apparatus: 'උපකරණ: මයික්‍රොමීටර් ඉස්කුරුප්පු ආමානය (කුඩාම මිනුම 0.01 mm), සම්මත කාසියක් (උදා: රුපියල් 10 කාසිය).',
      theoryTitle: 'මූලධර්මය සහ පූර්වෝපාය',
      theoryText: 'කාසිය සිරකිරීමේදී විරූපණය වැළැක්වීමට සහ නිරවද්‍ය තෙරපුමක් පවත්වා ගැනීමට සෑම විටම රැචට් හිස භාවිත කළ යුතුය. කාසියේ සුළු අණ්ඩාකාර දෝෂ වැළැක්වීමට විෂ්කම්භය විවිධ දිශා ඔස්සේ මනිනු ලැබේ. පරිමාව V = π(D/2)²t වේ. උපරිම භාගික අවිනිශ්චිතතාව ΔV/V = 2(ΔD/D) + (Δt/t) වේ (මෙහි ΔD = Δt = 0.01 mm).',
      procedure: 'ක්‍රමවේදය: 1. කුඩාම මිනුම සහ ශූන්‍ය දෝෂය පරීක්ෂා කිරීම. 2. විෂ්කම්භය විවිධ දිශා 3කින් මැනීම. 3. කාසියේ දාරයේ විවිධ ස්ථාන 3කින් ඝනකම මැනීම. 4. ශූන්‍ය දෝෂ ශෝධනය යෙදීම. 5. පරිමාව සහ ප්‍රතිශත අවිනිශ්චිතතාව ගණනය කිරීම.',
      obsTable: 'නිරීක්ෂණ හා මිනුම් සටහන් වගුව',
      param: 'රාශිය',
      trial1: 'වාරය 1 (mm)',
      trial2: 'වාරය 2 (mm)',
      trial3: 'වාරය 3 (mm)',
      meanObs: 'මධ්‍යන්‍ය නිරීක්ෂිත (mm)',
      correctedVal: 'ශෝධිත අගය (mm)',
      coinDia: 'කාසියේ විෂ්කම්භය (D)',
      coinThick: 'කාසියේ ඝනකම (t)',
      zeroErrorLabel: 'ලකුණ සහිත ශූන්‍ය දෝෂය (mm):',
      calcTitle: 'පරිමාව සහ අවිනිශ්චිතතා විශ්ලේෂණය',
      volumeLabel: 'කාසියේ පරිමාව (V):',
      fractionalUncertainty: 'භාගික අවිනිශ්චිතතාව (ΔV/V):',
      percentageUncertainty: 'ප්‍රතිශත අවිනිශ්චිතතාව (%):',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    setDiaTrials(['24.32', '24.30', '24.34']);
    setThickTrials(['1.86', '1.84', '1.85']);
    setZeroError('+0.02');
  };

  const handleClear = () => {
    setDiaTrials(['', '', '']);
    setThickTrials(['', '', '']);
    setZeroError('0.00');
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(2));
  };

  const ze = parseFloat(zeroError) || 0.0;
  const meanDia = parseMean(diaTrials);
  const meanThick = parseMean(thickTrials);

  const corrDia = meanDia !== null ? Number((meanDia - ze).toFixed(2)) : null;
  const corrThick = meanThick !== null ? Number((meanThick - ze).toFixed(2)) : null;

  const volume = corrDia !== null && corrThick !== null
    ? Number((Math.PI * Math.pow(corrDia / 2, 2) * corrThick).toFixed(2))
    : null;

  // Uncertainty: dV/V = 2*(0.01/D) + (0.01/t)
  const fracUncertainty = corrDia !== null && corrThick !== null
    ? Number((2 * (leastCount / corrDia) + (leastCount / corrThick)).toFixed(4))
    : null;

  const pctUncertainty = fracUncertainty !== null
    ? Number((fracUncertainty * 100).toFixed(2))
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

      {/* Embedded Instrument */}
      <MicrometerScrewGauge locale={locale} initialReadingMm={1.85} />

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
          <div className="flex items-center gap-2 max-w-xs">
            <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              {t.zeroErrorLabel}
            </label>
            <input
              type="text"
              value={zeroError}
              onChange={(e) => setZeroError(e.target.value)}
              placeholder="0.00"
              className="w-20 px-2 py-1 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono text-center focus:outline-[#0F766E]"
            />
          </div>

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
                {/* Diameter */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.coinDia}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[0]}
                      onChange={(e) => setDiaTrials([e.target.value, diaTrials[1], diaTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[1]}
                      onChange={(e) => setDiaTrials([diaTrials[0], e.target.value, diaTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={diaTrials[2]}
                      onChange={(e) => setDiaTrials([diaTrials[0], diaTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanDia !== null ? `${meanDia} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrDia !== null ? `${corrDia} mm` : '—'}</td>
                </tr>

                {/* Thickness */}
                <tr>
                  <td className="p-3 font-sans font-medium text-[#14243A] dark:text-[#F8FAFC]">{t.coinThick}</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[0]}
                      onChange={(e) => setThickTrials([e.target.value, thickTrials[1], thickTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[1]}
                      onChange={(e) => setThickTrials([thickTrials[0], e.target.value, thickTrials[2]])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={thickTrials[2]}
                      onChange={(e) => setThickTrials([thickTrials[0], thickTrials[1], e.target.value])}
                      className="w-16 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                    />
                  </td>
                  <td className="p-3 font-bold">{meanThick !== null ? `${meanThick} mm` : '—'}</td>
                  <td className="p-3 font-bold text-[#0F766E]">{corrThick !== null ? `${corrThick} mm` : '—'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Derived Quantities & Uncertainty */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              {t.calcTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.volumeLabel}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {volume !== null ? `${volume} mm³` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.fractionalUncertainty}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {fracUncertainty !== null ? fracUncertainty : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageUncertainty}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {pctUncertainty !== null ? `±${pctUncertainty}%` : '—'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

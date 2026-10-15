'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Spherometer } from '../instruments/Spherometer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database } from 'lucide-react';
import { calculateSpherometerCurvature } from '../physics/calculations';

interface SpherometerCurvaturePracticalProps {
  locale?: Locale;
}

export const SpherometerCurvaturePractical: React.FC<SpherometerCurvaturePracticalProps> = ({
  locale = 'en',
}) => {
  const [aTrials, setATrials] = useState<[string, string, string]>(['', '', '']);
  const [h0, setH0] = useState<string>(''); // Zero reading on plane glass
  const [h1Trials, setH1Trials] = useState<[string, string, string]>(['', '', '']); // Curved surface readings

  const t = {
    en: {
      title: 'Practical 3: Radius of Curvature Using a Spherometer',
      aim: 'Aim: To determine the radius of curvature of a spherical surface (convex lens/concave mirror) using a spherometer.',
      apparatus: 'Apparatus: Spherometer (Least Count 0.01 mm), Plane glass plate, Convex spherical surface, Plain paper, Sheet of paper, Millimeter ruler.',
      theoryTitle: 'Theory & Geometrical Derivation',
      theoryText: 'The three fixed outer legs of the spherometer form an equilateral triangle of mean side a. By placing the instrument on a flat plane glass plate, the reference datum h₀ is obtained. On placing it on the curved surface, the center screw is adjusted to touch the surface to give h₁. The elevation h = |h₁ - h₀|. The radius of curvature is R = (a² / 6h) + (h / 2). If h = 0, R = ∞ (plane surface).',
      procedure: 'Procedure: 1. Press spherometer legs gently onto paper to produce prick marks and measure sides a₁, a₂, a₃ to find mean a. 2. Place on plane glass plate and record zero reading h₀. 3. Transfer onto spherical surface and adjust central screw until all 4 tips make contact without rocking. 4. Record 3 independent readings of h₁. 5. Compute mean elevation h and calculate R.',
      obsTableLegs: 'Table 1: Distance Between Outer Legs (a)',
      side1: 'Side a₁ (mm)',
      side2: 'Side a₂ (mm)',
      side3: 'Side a₃ (mm)',
      meanA: 'Mean Leg Distance a (mm)',
      obsTableH: 'Table 2: Elevation & Sagitta Readings (h)',
      planeZero: 'Plane Glass Reading h₀ (mm):',
      sphericalTrial1: 'Curved Reading 1 (mm)',
      sphericalTrial2: 'Curved Reading 2 (mm)',
      sphericalTrial3: 'Curved Reading 3 (mm)',
      meanH1: 'Mean Curved Reading h₁ (mm)',
      elevationH: 'Elevation h = |h₁ - h₀| (mm)',
      calcTitle: 'Radius of Curvature Calculation',
      radiusLabel: 'Radius of Curvature (R):',
      formulaBreakdown: 'Formula Breakdown: (a² / 6h) + (h / 2)',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3: ගෝලමානය භාවිතයෙන් වක්‍රතා අරය නිර්ණය කිරීම',
      aim: 'අරමුණ: ගෝලමානයක් භාවිතයෙන් ගෝලීය පෘෂ්ඨයක (උත්තල කාචයක් හෝ අවතල දර්පණයක්) වක්‍රතා අරය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ගෝලමානය (කුඩාම මිනුම 0.01 mm), තල වීදුරු තහඩුව, උත්තල ගෝලීය පෘෂ්ඨය, සුදු කඩදාසි, මිලිමීටර් පරිමාණය.',
      theoryTitle: 'මූලධර්මය සහ ජ්‍යාමිතික ව්‍යුත්පන්නය',
      theoryText: 'ගෝලමානයේ ස්ථාවර බාහිර පාද තුන මගින් මධ්‍යන්‍ය පාදය a වූ සමපාද ත්‍රිකෝණයක් සාදයි. තල වීදුරු තහඩුව මත තැබීමෙන් මූලික පාඨාංකය h₀ ලබා ගනී. ගෝලීය පෘෂ්ඨය මත තබා මැද ඉස්කුරුප්පුව ස්පර්ශ කරවීමෙන් h₁ ලබා ගනී. එවිට එසවීම h = |h₁ - h₀| වේ. වක්‍රතා අරය R = (a² / 6h) + (h / 2) මගින් ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. කඩදාසියක් මත ගෝලමානයේ පාද තදකර ලකුණු 3 අතර දුර a₁, a₂, a₃ මැන මධ්‍යන්‍ය a සෙවීම. 2. තල වීදුරු තහඩුව මත තබා h₀ සටහන් කිරීම. 3. ගෝලීය පෘෂ්ඨය මත තබා තුඩු 4ම සමතුලිතව ස්පර්ශ වන සේ සකසා h₁ සඳහා තෙවරක් මැනීම. 4. එසවීම h ගණනය කර R සෙවීම.',
      obsTableLegs: 'වගුව 1: බාහිර පාද අතර දුර (a)',
      side1: 'පාදය a₁ (mm)',
      side2: 'පාදය a₂ (mm)',
      side3: 'පාදය a₃ (mm)',
      meanA: 'මධ්‍යන්‍ය පාද දුර a (mm)',
      obsTableH: 'වගුව 2: එසවීම / උස (h) පාඨාංක',
      planeZero: 'තල වීදුරු පාඨාංකය h₀ (mm):',
      sphericalTrial1: 'ගෝලීය පාඨාංකය 1 (mm)',
      sphericalTrial2: 'ගෝලීය පාඨාංකය 2 (mm)',
      sphericalTrial3: 'ගෝලීය පාඨාංකය 3 (mm)',
      meanH1: 'මධ්‍යන්‍ය ගෝලීය පාඨාංකය h₁ (mm)',
      elevationH: 'එසවීම h = |h₁ - h₀| (mm)',
      calcTitle: 'වක්‍රතා අරය ගණනය කිරීම',
      radiusLabel: 'වක්‍රතා අරය (R):',
      formulaBreakdown: 'සමීකරණය: (a² / 6h) + (h / 2)',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    setATrials(['40.1', '39.9', '40.0']);
    setH0('0.00');
    setH1Trials(['1.35', '1.34', '1.33']);
  };

  const handleClear = () => {
    setATrials(['', '', '']);
    setH0('');
    setH1Trials(['', '', '']);
  };

  const parseMean = (trials: [string, string, string]): number | null => {
    const nums = trials.map((t) => parseFloat(t)).filter((n) => !isNaN(n));
    if (nums.length === 0) return null;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / nums.length).toFixed(2));
  };

  const meanA = parseMean(aTrials);
  const meanH1 = parseMean(h1Trials);
  const zeroH0 = parseFloat(h0) || 0.0;

  const signedSagitta = meanH1 !== null ? Number((meanH1 - zeroH0).toFixed(2)) : null;
  const curvResult = meanA !== null && signedSagitta !== null
    ? calculateSpherometerCurvature(meanA, signedSagitta)
    : null;
  const elevationH = signedSagitta !== null ? Math.abs(signedSagitta) : null;
  const radiusR = curvResult ? curvResult.radiusMm : null;
  const surfaceDescription = curvResult ? curvResult.description[locale] : null;

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

      {/* Embedded Spherometer */}
      <Spherometer locale={locale} initialHeightMm={1.34} initialLegSeparationMm={40.0} />

      {/* Observation Tables Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
            Observation Tables
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

        <CardContent className="p-6 space-y-6">
          {/* Table 1: Legs Separation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.obsTableLegs}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.side1}</span>
                <input
                  type="text"
                  value={aTrials[0]}
                  onChange={(e) => setATrials([e.target.value, aTrials[1], aTrials[2]])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.side2}</span>
                <input
                  type="text"
                  value={aTrials[1]}
                  onChange={(e) => setATrials([aTrials[0], e.target.value, aTrials[2]])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.side3}</span>
                <input
                  type="text"
                  value={aTrials[2]}
                  onChange={(e) => setATrials([aTrials[0], aTrials[1], e.target.value])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div className="p-2.5 rounded-lg bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] flex flex-col justify-center">
                <span className="text-[10px] text-[#0F766E] font-sans font-semibold">{t.meanA}</span>
                <span className="font-bold text-sm text-[#0F766E] dark:text-[#14B8A6]">
                  {meanA !== null ? `${meanA} mm` : '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Table 2: Elevation Readings */}
          <div className="space-y-2 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <h4 className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.obsTableH}
            </h4>

            <div className="flex items-center gap-2 max-w-xs pb-2">
              <label className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC]">
                {t.planeZero}
              </label>
              <input
                type="text"
                value={h0}
                onChange={(e) => setH0(e.target.value)}
                placeholder="0.00"
                className="w-20 px-2 py-1 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs font-mono text-center focus:outline-[#0F766E]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.sphericalTrial1}</span>
                <input
                  type="text"
                  value={h1Trials[0]}
                  onChange={(e) => setH1Trials([e.target.value, h1Trials[1], h1Trials[2]])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.sphericalTrial2}</span>
                <input
                  type="text"
                  value={h1Trials[1]}
                  onChange={(e) => setH1Trials([h1Trials[0], e.target.value, h1Trials[2]])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.sphericalTrial3}</span>
                <input
                  type="text"
                  value={h1Trials[2]}
                  onChange={(e) => setH1Trials([h1Trials[0], h1Trials[1], e.target.value])}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                />
              </div>
              <div className="p-2.5 rounded-lg bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] flex flex-col justify-center">
                <span className="text-[10px] text-[#0F766E] font-sans font-semibold">{t.elevationH}</span>
                <span className="font-bold text-sm text-[#0F766E] dark:text-[#14B8A6]">
                  {elevationH !== null ? `${elevationH} mm` : '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Curvature Output */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
                {t.calcTitle}
              </span>
              <span className="text-base font-bold font-mono text-[#0F766E] dark:text-[#14B8A6]">
                {radiusR !== null ? `R = ${radiusR} mm` : elevationH === 0 ? 'R = ∞' : '—'}
              </span>
            </div>

            {surfaceDescription && (
              <p className="text-xs font-semibold text-[#0F766E] dark:text-[#14B8A6]">
                {surfaceDescription}
              </p>
            )}

            {radiusR !== null && meanA !== null && elevationH !== null && (
              <div className="text-xs font-mono text-[#0F766E] dark:text-[#14B8A6] bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 p-2.5 rounded-lg border border-[#99F6E4]/60">
                ({meanA}² / (6 × {elevationH})) + ({elevationH} / 2) = {radiusR} mm
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

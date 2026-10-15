'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { TravellingMicroscope } from '../instruments/TravellingMicroscope';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database } from 'lucide-react';
import { calculateTravellingMicroscopeDimensions } from '../physics/calculations';

interface TravellingMicroscopePracticalProps {
  locale?: Locale;
}

export const TravellingMicroscopePractical: React.FC<TravellingMicroscopePracticalProps> = ({
  locale = 'en',
}) => {
  const [x1, setX1] = useState<string>(''); // Left outer
  const [x2, setX2] = useState<string>(''); // Left inner
  const [x3, setX3] = useState<string>(''); // Right inner
  const [x4, setX4] = useState<string>(''); // Right outer

  const t = {
    en: {
      title: 'Practical 4: Internal & External Radii of a Rubber Tube',
      aim: 'Aim: To determine the internal and external radii and wall thickness of a rubber tube using a travelling microscope.',
      apparatus: 'Apparatus: Travelling Microscope (Least Count 0.01 mm), Clean rubber tube cross-section, Uniform illumination lamp, Glass slide.',
      theoryTitle: 'Theory & Experimental Significance',
      theoryText: 'Soft, elastic materials like rubber deform easily under caliper jaw pressure, leading to systematic compression errors. A travelling microscope provides non-contact optical measurement. By traversing horizontally and focusing the vertical crosshair on the edges: Internal diameter d_int = x₃ - x₂ (r_int = d_int/2); External diameter d_ext = x₄ - x₁ (r_ext = d_ext/2); Wall thickness t = r_ext - r_int.',
      procedure: 'Procedure: 1. Focus the eyepiece on the crosswires and position the tube section under illumination. 2. Move carriage horizontally and align vertical crosswire with the left outer edge (x₁). 3. Traverse in the same direction to align with left inner edge (x₂), right inner edge (x₃), and right outer edge (x₄). 4. Record main scale and vernier readings at each edge. 5. Compute radii and wall thickness.',
      obsTable: 'Microscope Boundary Traversal Observations',
      x1Label: 'Left Outer Boundary (x₁):',
      x2Label: 'Left Inner Boundary (x₂):',
      x3Label: 'Right Inner Boundary (x₃):',
      x4Label: 'Right Outer Boundary (x₄):',
      calcTitle: 'Calculated Dimensions & Wall Thickness',
      internalDia: 'Internal Diameter d_int = x₃ - x₂:',
      externalDia: 'External Diameter d_ext = x₄ - x₁:',
      internalRad: 'Internal Radius r_int:',
      externalRad: 'External Radius r_ext:',
      wallThickness: 'Wall Thickness t = r_ext - r_int:',
      loadSample: 'Load Sample Data',
      clearTable: 'Clear Table',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4: රබර් නලයක අභ්‍යන්තර සහ බාහිර අරය නිර්ණය කිරීම',
      aim: 'අරමුණ: චල අන්වීක්ෂයක් භාවිතයෙන් රබර් නලයක අභ්‍යන්තර හා බාහිර අරයන් සහ බිත්ති ඝනකම නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: චල අන්වීක්ෂය (කුඩාම මිනුම 0.01 mm), කපාගත් රබර් නල කොටස, ආලෝක ප්‍රභවය, වීදුරු තහඩුව.',
      theoryTitle: 'මූලධර්මය සහ ප්‍රායෝගික වැදගත්කම',
      theoryText: 'රබර් වැනි ප්‍රත්‍යාස්ථ ද්‍රව්‍ය කැලිපර හනුවල තෙරපුමෙන් පහසුවෙන් විරූපණය වන නිසා ස්පර්ශ රහිත දෘශ්‍ය මිනුම් අවශ්‍ය වේ. චල අන්වීක්ෂයේ සිරස් හරස් කම්බිය නල මායිම්වලට සමපාත කර: අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂ (r_int = d_int/2); බාහිර විෂ්කම්භය d_ext = x₄ - x₁ (r_ext = d_ext/2); බිත්ති ඝනකම t = r_ext - r_int මගින් ලැබේ.',
      procedure: 'ක්‍රමවේදය: 1. හරස් කම්බි වෙත උපනෙත නාභිගත කර ආලෝකය යටතේ නලය තැබීම. 2. තිරස්ව ගමන් කර වම් බාහිර මායිමට (x₁) හරස් කම්බිය සමපාත කිරීම. 3. එකම දිශාවට ඉදිරියට ගොස් x₂, x₃, x₄ පාඨාංක සටහන් කර ගැනීම. 4. අරයන් හා බිත්ති ඝනකම ගණනය කිරීම.',
      obsTable: 'අන්වීක්ෂ මායිම් නිරීක්ෂණ වගුව',
      x1Label: 'වම් බාහිර මායිම (x₁):',
      x2Label: 'වම් අභ්‍යන්තර මායිම (x₂):',
      x3Label: 'දකුණු අභ්‍යන්තර මායිම (x₃):',
      x4Label: 'දකුණු බාහිර මායිම (x₄):',
      calcTitle: 'ගණනය කළ මාන සහ බිත්ති ඝනකම',
      internalDia: 'අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂:',
      externalDia: 'බාහිර විෂ්කම්භය d_ext = x₄ - x₁:',
      internalRad: 'අභ්‍යන්තර අරය r_int:',
      externalRad: 'බාහිර අරය r_ext:',
      wallThickness: 'බිත්ති ඝනකම t = r_ext - r_int:',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'වගුව හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    setX1('33.60');
    setX2('36.80');
    setX3('43.20');
    setX4('46.40');
  };

  const handleClear = () => {
    setX1('');
    setX2('');
    setX3('');
    setX4('');
  };

  const nX1 = parseFloat(x1);
  const nX2 = parseFloat(x2);
  const nX3 = parseFloat(x3);
  const nX4 = parseFloat(x4);

  const isValid = !isNaN(nX1) && !isNaN(nX2) && !isNaN(nX3) && !isNaN(nX4);

  const dims = isValid ? calculateTravellingMicroscopeDimensions(nX1, nX2, nX3, nX4) : null;
  const dInt = dims ? dims.internalDiameter : null;
  const dExt = dims ? dims.externalDiameter : null;
  const rInt = dims ? dims.internalRadius : null;
  const rExt = dims ? dims.externalRadius : null;
  const thickness = dims ? dims.wallThickness : null;

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
      <TravellingMicroscope
        locale={locale}
        onReadingsRecorded={(data) => {
          setX1(data.x1.toFixed(2));
          setX2(data.x2.toFixed(2));
          setX3(data.x3.toFixed(2));
          setX4(data.x4.toFixed(2));
        }}
      />

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
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div>
              <span className="text-[10px] text-[#64748B] block font-sans">{t.x1Label}</span>
              <input
                type="text"
                value={x1}
                onChange={(e) => setX1(e.target.value)}
                placeholder="mm"
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>
            <div>
              <span className="text-[10px] text-[#64748B] block font-sans">{t.x2Label}</span>
              <input
                type="text"
                value={x2}
                onChange={(e) => setX2(e.target.value)}
                placeholder="mm"
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>
            <div>
              <span className="text-[10px] text-[#64748B] block font-sans">{t.x3Label}</span>
              <input
                type="text"
                value={x3}
                onChange={(e) => setX3(e.target.value)}
                placeholder="mm"
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>
            <div>
              <span className="text-[10px] text-[#64748B] block font-sans">{t.x4Label}</span>
              <input
                type="text"
                value={x4}
                onChange={(e) => setX4(e.target.value)}
                placeholder="mm"
                className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>
          </div>

          {/* Derived Dimensions */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              {t.calcTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.internalDia}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {dInt !== null ? `${dInt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.internalRad}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {rInt !== null ? `${rInt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.externalDia}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {dExt !== null ? `${dExt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.externalRad}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {rExt !== null ? `${rExt} mm` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60 sm:col-span-2 md:col-span-1">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.wallThickness}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {thickness !== null ? `${thickness} mm` : '—'}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

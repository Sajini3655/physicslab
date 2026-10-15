'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scale, Box, Circle } from 'lucide-react';
import { convertDensity, propagateDensityUncertainty } from '@/features/measurement/physics/calculations';

interface DensitySolidPracticalProps {
  locale?: Locale;
}

export const DensitySolidPractical: React.FC<DensitySolidPracticalProps> = ({
  locale = 'en',
}) => {
  const [solidType, setSolidType] = useState<'block' | 'cylinder' | 'sphere'>('block');

  // Block dimensions (cm)
  const [lengthCm, setLengthCm] = useState<string>('');
  const [widthCm, setWidthCm] = useState<string>('');
  const [heightCm, setHeightCm] = useState<string>('');

  // Cylinder dimensions (cm)
  const [cylDiameterCm, setCylDiameterCm] = useState<string>('');
  const [cylHeightCm, setCylHeightCm] = useState<string>('');

  // Sphere dimensions (cm)
  const [sphDiameterCm, setSphDiameterCm] = useState<string>('');

  // Mass (g)
  const [massG, setMassG] = useState<string>('');

  const t = {
    en: {
      title: 'Practical 5: Determination of the Density of a Regular Solid',
      aim: 'Aim: To select suitable measuring instruments, determine the mass and volume of a regular solid, and calculate its density with unit conversions and error propagation.',
      apparatus: 'Apparatus: Triple beam / electronic balance (LC 0.01 g), Vernier calipers (LC 0.01 cm), Micrometer screw gauge (LC 0.001 cm), Regular solids (Brass block, Steel cylinder, Glass sphere).',
      theoryTitle: 'Instrument Selection & Error Theory',
      theoryText: 'Instrument selection is determined by measuring range, instrument resolution, specimen geometry, and target fractional uncertainty (Δx/x). For small dimensions (< 25 mm) such as wire diameters or sheet thicknesses, a micrometer screw gauge (LC 0.01 mm) is selected to keep fractional error small. For dimensions exceeding 25 mm or internal cavities/depths, Vernier calipers (LC 0.1 mm / 0.02 mm) provide the required range and specialized jaws. Density ρ = m / V. To convert from CGS units (g cm⁻³) to coherent SI units (kg m⁻³), multiply by 1000: ρ (kg m⁻³) = ρ (g cm⁻³) × 1000. Maximum fractional uncertainty accumulates as Δρ/ρ = Δm/m + ΔV/V.',
      procedure: 'Procedure: 1. Select solid shape. 2. Measure mass on the balance. 3. Measure dimensions using appropriate instrument. 4. Calculate volume V. 5. Compute density in g cm⁻³ and convert to kg m⁻³. 6. Propagate fractional uncertainties.',
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
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearTable: 'හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const handleLoadSample = () => {
    if (solidType === 'block') {
      setMassG('168.40'); // Brass block ~ 8.4 g/cm3
      setLengthCm('4.00');
      setWidthCm('2.50');
      setHeightCm('2.00');
    } else if (solidType === 'cylinder') {
      setMassG('122.50'); // Steel cylinder ~ 7.8 g/cm3
      setCylDiameterCm('2.00');
      setCylHeightCm('5.00');
    } else {
      setMassG('33.50'); // Glass sphere ~ 2.5 g/cm3
      setSphDiameterCm('3.00');
    }
  };

  const handleClear = () => {
    setMassG('');
    setLengthCm('');
    setWidthCm('');
    setHeightCm('');
    setCylDiameterCm('');
    setCylHeightCm('');
    setSphDiameterCm('');
  };

  const m = parseFloat(massG);

  let volumeCm3: number | null = null;
  let fracUncertainty: number | null = null;
  let densityCgs: number | null = null;
  let densitySi: number | null = null;

  if (solidType === 'block') {
    const l = parseFloat(lengthCm);
    const w = parseFloat(widthCm);
    const h = parseFloat(heightCm);
    if (!isNaN(l) && !isNaN(w) && !isNaN(h) && l > 0 && w > 0 && h > 0) {
      volumeCm3 = Number((l * w * h).toFixed(3));
      if (!isNaN(m) && m > 0) {
        const deltaVOverV = (0.01 / l) + (0.01 / w) + (0.01 / h);
        const res = propagateDensityUncertainty(m, 0.01, volumeCm3, deltaVOverV * volumeCm3);
        fracUncertainty = Number(res.fractionalUncertainty.toFixed(4));
        densityCgs = Number(res.density.toFixed(3));
        densitySi = Number(convertDensity(res.density, 'g/cm^3', 'kg/m^3').toFixed(1));
      }
    }
  } else if (solidType === 'cylinder') {
    const d = parseFloat(cylDiameterCm);
    const h = parseFloat(cylHeightCm);
    if (!isNaN(d) && !isNaN(h) && d > 0 && h > 0) {
      volumeCm3 = Number((Math.PI * Math.pow(d / 2, 2) * h).toFixed(3));
      if (!isNaN(m) && m > 0) {
        const deltaVOverV = 2 * (0.01 / d) + (0.01 / h);
        const res = propagateDensityUncertainty(m, 0.01, volumeCm3, deltaVOverV * volumeCm3);
        fracUncertainty = Number(res.fractionalUncertainty.toFixed(4));
        densityCgs = Number(res.density.toFixed(3));
        densitySi = Number(convertDensity(res.density, 'g/cm^3', 'kg/m^3').toFixed(1));
      }
    }
  } else {
    const d = parseFloat(sphDiameterCm);
    if (!isNaN(d) && d > 0) {
      volumeCm3 = Number(((4 / 3) * Math.PI * Math.pow(d / 2, 3)).toFixed(3));
      if (!isNaN(m) && m > 0) {
        const deltaVOverV = 3 * (0.01 / d);
        const res = propagateDensityUncertainty(m, 0.01, volumeCm3, deltaVOverV * volumeCm3);
        fracUncertainty = Number(res.fractionalUncertainty.toFixed(4));
        densityCgs = Number(res.density.toFixed(3));
        densitySi = Number(convertDensity(res.density, 'g/cm^3', 'kg/m^3').toFixed(1));
      }
    }
  }

  if (densityCgs === null && !isNaN(m) && volumeCm3 !== null && volumeCm3 > 0) {
    densityCgs = Number((m / volumeCm3).toFixed(3));
    densitySi = Number(convertDensity(densityCgs, 'g/cm^3', 'kg/m^3').toFixed(1));
  }

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

      {/* Inputs & Measurements Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs overflow-hidden">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.selectSolid}
            </span>
            <div className="flex gap-1.5">
              <Button
                size="sm"
                variant={solidType === 'block' ? 'default' : 'outline'}
                className="text-xs h-7"
                onClick={() => setSolidType('block')}
              >
                <Box className="w-3.5 h-3.5 mr-1" /> {t.block}
              </Button>
              <Button
                size="sm"
                variant={solidType === 'cylinder' ? 'default' : 'outline'}
                className="text-xs h-7"
                onClick={() => setSolidType('cylinder')}
              >
                {t.cylinder}
              </Button>
              <Button
                size="sm"
                variant={solidType === 'sphere' ? 'default' : 'outline'}
                className="text-xs h-7"
                onClick={() => setSolidType('sphere')}
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

        <CardContent className="p-6 space-y-6">
          {/* Mass Input */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
              <label className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.massLabel}
              </label>
            </div>
            <input
              type="text"
              value={massG}
              onChange={(e) => setMassG(e.target.value)}
              placeholder="e.g. 168.40"
              className="w-32 px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D] text-xs font-mono focus:outline-[#0F766E]"
            />
            <span className="text-xs text-[#64748B]">Balance Least Count: 0.01 g</span>
          </div>

          {/* Dimensions Input based on Geometry */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {solidType === 'block' ? t.dimBlock : solidType === 'cylinder' ? t.dimCyl : t.dimSph}
            </span>

            {solidType === 'block' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.length}</span>
                  <input
                    type="text"
                    value={lengthCm}
                    onChange={(e) => setLengthCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.width}</span>
                  <input
                    type="text"
                    value={widthCm}
                    onChange={(e) => setWidthCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.height}</span>
                  <input
                    type="text"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>
            )}

            {solidType === 'cylinder' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.diameter}</span>
                  <input
                    type="text"
                    value={cylDiameterCm}
                    onChange={(e) => setCylDiameterCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.height}</span>
                  <input
                    type="text"
                    value={cylHeightCm}
                    onChange={(e) => setCylHeightCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>
            )}

            {solidType === 'sphere' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.diameter}</span>
                  <input
                    type="text"
                    value={sphDiameterCm}
                    onChange={(e) => setSphDiameterCm(e.target.value)}
                    placeholder="cm"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Density & SI Conversion Display */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              {t.calcTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.volumeLabel}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {volumeCm3 !== null ? `${volumeCm3} cm³` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.densityCgs}</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  {densityCgs !== null ? `${densityCgs} g cm⁻³` : '—'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                <span className="text-[10px] text-[#64748B] block font-sans">{t.densitySi}</span>
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                  {densitySi !== null ? `${densitySi} kg m⁻³` : '—'}
                </span>
              </div>
            </div>

            {/* Error Propagation Note */}
            {fracUncertainty !== null && (
              <div className="text-[11px] text-[#0F766E] dark:text-[#14B8A6] pt-1 border-t border-[#99F6E4]/50">
                <span>{t.uncertaintyTitle}</span>
                <span className="font-mono font-bold ml-1">
                  Δρ/ρ ≈ {fracUncertainty} (±{(fracUncertainty * 100).toFixed(2)}%)
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

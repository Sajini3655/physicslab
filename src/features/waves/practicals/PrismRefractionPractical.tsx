'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculatePrismRefractiveIndex } from '../physics/calculations';

interface PrismRefractionPracticalProps {
  locale?: Locale;
}

export const PrismRefractionPractical: React.FC<PrismRefractionPracticalProps> = ({
  locale = 'en',
}) => {
  // Prism angle readings (Reflection method)
  const [prismAngleV1Face1, setPrismAngleV1Face1] = useState<string>('145.20');
  const [prismAngleV1Face2, setPrismAngleV1Face2] = useState<string>('265.24');
  const [prismAngleV2Face1, setPrismAngleV2Face1] = useState<string>('325.18');
  const [prismAngleV2Face2, setPrismAngleV2Face2] = useState<string>('85.22');

  // Minimum deviation readings (Refraction method)
  const [minDevV1Deviated, setMinDevV1Deviated] = useState<string>('212.80');
  const [minDevV1Direct, setMinDevV1Direct] = useState<string>('173.20');
  const [minDevV2Deviated, setMinDevV2Deviated] = useState<string>('32.78');
  const [minDevV2Direct, setMinDevV2Direct] = useState<string>('353.18');

  const t = {
    en: {
      title: 'Practical 3.3: Refractive Index of a Glass Prism Using a Spectrometer',
      aim: 'Aim: To adjust a spectrometer for parallel light and determine the prism angle (A), angle of minimum deviation (Dm), and refractive index (n) of a crown glass prism.',
      apparatus: 'Apparatus: Optical spectrometer, dense flint/crown glass equilateral 60° prism, monochromatic sodium lamp or incandescent slit illuminator, spirit level, reading magnifier lens.',
      theoryTitle: 'Physical Principle & Spectrometer Geometry',
      theoryText: 'The spectrometer is levelled and focused for parallel rays using Schuster’s method.\n\n1. Measurement of Prism Angle (A):\nParallel light from the collimator strikes the apex of the prism and reflects off both optical faces. The angle between the two reflected beams is 2A:\n  2A = |θ_face1 - θ_face2|  ⟹  A = |θ_face1 - θ_face2| / 2\n\n2. Measurement of Minimum Deviation (Dm):\nAs the prism table is rotated in one direction, the refracted ray turns, pauses at an extreme turning position, and reverses direction. This stationary point is the position of minimum deviation:\n  Dm = |θ_deviated - θ_direct|\n\n3. Refractive Index of Glass (n):\nAt minimum deviation, the ray passes symmetrically through the prism (r₁ = r₂ = A/2 and i₁ = i₂ = (A + Dm)/2):\n  n = sin((A + Dm) / 2) / sin(A / 2)\nFor standard crown glass, n is approximately 1.51 – 1.53.',
      procedure: 'Procedure: 1. Focus the telescope cross-wires sharply; focus collimator until the slit appears crisp without parallax. 2. Level the prism table with a spirit level. 3. Place the prism with its apex pointing towards the collimator. Measure reflected slit positions from both faces using Vernier 1 and Vernier 2. 4. Rotate the prism to refract light; track the image while turning the prism until it reverses. Lock the turntable at the turning point and read the telescope. 5. Remove the prism and sight the straight direct ray to obtain θ_direct.',
      obsPrismAngleTitle: '1. Determination of Prism Apex Angle (A)',
      obsMinDevTitle: '2. Determination of Angle of Minimum Deviation (Dm)',
      vernier1: 'Vernier 1 (360° scale)',
      vernier2: 'Vernier 2 (opposite 180°)',
      meanA: 'Mean Angle of Prism (A):',
      meanDm: 'Mean Minimum Deviation (Dm):',
      calcRefractiveIndex: 'Calculated Refractive Index (n):',
      verdictPass: 'Refractive Index Within Crown Glass Range (1.50 – 1.56)',
      verdictFail: 'Check Vernier Zero-Wrap or Angle Subtractions',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Make the collimator slit as narrow as possible while maintaining adequate brightness to minimize pointing uncertainty. 2. Never touch the optical polished faces of the prism with bare fingers. 3. Average readings from two diametrically opposite verniers (180° apart) to eliminate any eccentric scale centering error.',
      loadSample: 'Load Sample Data (Crown Glass)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3.3: වර්ණාවලීමානය භාවිතයෙන් ප්‍රිස්මයක වර්තනාංකය සෙවීම',
      aim: 'අරමුණ: වර්ණාවලීමානයක් සමාන්තර ආලෝකයට සීරුමාරු කර, වීදුරු ප්‍රිස්මයක ප්‍රිස්ම කෝණය (A), අවම අපගමන කෝණය (Dm) සහ වර්තනාංකය (n) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ප්‍රකාශ වර්ණාවලීමානය, සමපාද 60° වීදුරු ප්‍රිස්මය, ඒකවර්ණ ආලෝක ප්‍රභවය (සෝඩියම් ලාම්පුව), මට්ටම් නලය, විශාලක කාචය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ වර්ණාවලීමාන ජ්‍යාමිතිය',
      theoryText: 'ෂූස්ටර් ක්‍රමයෙන් වර්ණාවලීමානය අනන්තයට හා සමාන්තර ආලෝකයට සීරුමාරු කරනු ලැබේ.\n\n1. ප්‍රිස්ම කෝණය (A) මැනීම:\nසමාන්තර ආලෝකය ප්‍රිස්මයේ ශීර්ෂය මත පතිත වී ඔප දැමූ මුහුණත් දෙකෙන්ම පරාවර්තනය වේ. පරාවර්තිත කිරණ දෙක අතර කෝණය 2A වේ:\n  2A = |θ_මුහුණත1 - θ_මුහුණත2|  ⟹  A = |θ_මුහුණත1 - θ_මුහුණත2| / 2\n\n2. අවම අපගමන කෝණය (Dm) මැනීම:\nප්‍රිස්ම මේසය එක් දිශාවකට කරකවන විට වර්තිත කිරණය එක පැත්තකට ගොස් නැවත හැරෙන තැනක් හමුවේ. එම හැරවුම් ලක්ෂ්‍යය අවම අපගමන පිහිටුමයි:\n  Dm = |θ_අපගමන - θ_සෘජු|\n\n3. වීදුරුවේ වර්තනාංකය (n):\nඅවම අපගමනයේදී කිරණය ප්‍රිස්මය තුළින් සමමිතිකව ගමන් කරයි (r₁ = r₂ = A/2 සහ i₁ = i₂ = (A + Dm)/2):\n  n = sin((A + Dm) / 2) / sin(A / 2)\nක්‍රවුන් වීදුරු සඳහා n අගය සාමාන්‍යයෙන් 1.51 – 1.53 පමණ වේ.',
      procedure: 'ක්‍රමවේදය: 1. දුරේක්ෂය සහ සමාන්තරකාරකය නිරක්ෂක ක්‍රමයෙන් අනන්තයට සීරුමාරු කරන්න. 2. මට්ටම් නලයෙන් ප්‍රිස්ම මේසය තිරස් කරන්න. 3. ප්‍රිස්මයේ ශීර්ෂය සමාන්තරකාරකය දෙසට හරවා මුහුණත් දෙකෙන්ම පරාවර්තිත කිරණවල පිහිටුම් වර්නියර් 1 සහ 2 මගින් කියවන්න. 4. ප්‍රිස්මය හරවා වර්තනය වන කිරණය නැවත හැරෙන අවම අපගමන පිහිටුම ලකුණු කරගන්න. 5. ප්‍රිස්මය ඉවත් කර සෘජු කිරණයේ පාඨාංකය ගෙන Dm ගණනය කරන්න.',
      obsPrismAngleTitle: '1. ප්‍රිස්ම කෝණය (A) නිර්ණය කිරීම',
      obsMinDevTitle: '2. අවම අපගමන කෝණය (Dm) නිර්ණය කිරීම',
      vernier1: 'වර්නියරය 1 (360° පරිමාණය)',
      vernier2: 'වර්නියරය 2 (ප්‍රතිවිරුද්ධ 180°)',
      meanA: 'මධ්‍යන්‍ය ප්‍රිස්ම කෝණය (A):',
      meanDm: 'මධ්‍යන්‍ය අවම අපගමනය (Dm):',
      calcRefractiveIndex: 'ගණනය කළ වර්තනාංකය (n):',
      verdictPass: 'ක්‍රවුන් වීදුරු පරාසය තුළ වර්තනාංකය සත්‍යාපනය විය (1.50 – 1.56)',
      verdictFail: 'කෝණ අන්තර හෝ වර්නියර් පරිමාණ කියවීම් පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. නිරවද්‍යතාව වැඩි කිරීමට සමාන්තරකාරකයේ සිදුර හැකිතාක් සිහින් කරගන්න. 2. ප්‍රිස්මයේ ඔප දැමූ මුහුණත් අතින් ඇල්ලීමෙන් වළකින්න. 3. විකේන්ද්‍රික දෝෂ වැළැක්වීමට ප්‍රතිවිරුද්ධ වර්නියර් දෙකෙහිම (V1 සහ V2) පාඨාංකවල මධ්‍යන්‍යය ලබාගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (ක්‍රවුන් වීදුරු)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  // Helper for angular difference taking 360 wrap into account
  const angleDiff = (a: number, b: number) => {
    let diff = Math.abs(a - b);
    if (diff > 180) diff = 360 - diff;
    return diff;
  };

  // Calculations for A
  const v1f1 = parseFloat(prismAngleV1Face1) || 0;
  const v1f2 = parseFloat(prismAngleV1Face2) || 0;
  const v2f1 = parseFloat(prismAngleV2Face1) || 0;
  const v2f2 = parseFloat(prismAngleV2Face2) || 0;

  const twoAV1 = angleDiff(v1f1, v1f2);
  const twoAV2 = angleDiff(v2f1, v2f2);
  const aV1 = twoAV1 / 2;
  const aV2 = twoAV2 / 2;
  const meanA = (aV1 + aV2) / 2;

  // Calculations for Dm
  const dDevV1 = parseFloat(minDevV1Deviated) || 0;
  const dDirV1 = parseFloat(minDevV1Direct) || 0;
  const dDevV2 = parseFloat(minDevV2Deviated) || 0;
  const dDirV2 = parseFloat(minDevV2Direct) || 0;

  const dmV1 = angleDiff(dDevV1, dDirV1);
  const dmV2 = angleDiff(dDevV2, dDirV2);
  const meanDm = (dmV1 + dmV2) / 2;

  // Refractive index
  const refractiveIndex = calculatePrismRefractiveIndex(meanA, meanDm);
  const isPass = refractiveIndex >= 1.50 && refractiveIndex <= 1.56;

  const handleLoadSample = () => {
    setPrismAngleV1Face1('145.20');
    setPrismAngleV1Face2('265.24');
    setPrismAngleV2Face1('325.18');
    setPrismAngleV2Face2('85.22');
    setMinDevV1Deviated('212.80');
    setMinDevV1Direct('173.20');
    setMinDevV2Deviated('32.78');
    setMinDevV2Direct('353.18');
  };

  const handleClear = () => {
    setPrismAngleV1Face1('');
    setPrismAngleV1Face2('');
    setPrismAngleV2Face1('');
    setPrismAngleV2Face2('');
    setMinDevV1Deviated('');
    setMinDevV1Direct('');
    setMinDevV2Deviated('');
    setMinDevV2Direct('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-[#DFE8EF] shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#14243A] font-serif">{t.title}</h2>
          <p className="text-sm text-[#475569] mt-1">{t.aim}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleLoadSample} className="text-[#0F766E] border-[#DFE8EF]">
            <Database className="w-4 h-4 mr-1.5" />
            {t.loadSample}
          </Button>
          <Button variant="outline" size="sm" onClick={handleClear} className="text-[#475569] border-[#DFE8EF]">
            <RotateCcw className="w-4 h-4 mr-1.5" />
            {t.clearInputs}
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()} className="text-[#475569] border-[#DFE8EF]">
            <Printer className="w-4 h-4 mr-1.5" />
            {t.printSheet}
          </Button>
        </div>
      </div>

      {/* Grid: Schematic & Theory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schematic Card */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'වර්ණාවලීමාන ප්‍රිස්ම කිරණ සටහන' : 'Spectrometer Prism Ray Geometry'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="210" viewBox="0 0 320 210" className="overflow-visible">
                {/* Collimator at left */}
                <rect x="10" y="85" width="60" height="30" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" rx="3" />
                <text x="40" y="103" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Collimator</text>
                
                {/* Incident parallel beam */}
                <line x1="70" y1="100" x2="140" y2="100" stroke="#F59E0B" strokeWidth="2.5" />
                <polygon points="110,97 120,100 110,103" fill="#F59E0B" />

                {/* Prism Base Table */}
                <circle cx="160" cy="100" r="45" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

                {/* Prism Triangle */}
                <polygon points="140,65 140,135 195,100" fill="#79B9E7" fillOpacity="0.4" stroke="#0284C7" strokeWidth="2" />
                <text x="145" y="75" fontSize="8" fill="#0369A1" fontWeight="bold">Apex A</text>

                {/* Refracted Ray at Minimum Deviation */}
                <line x1="140" y1="100" x2="175" y2="100" stroke="#F59E0B" strokeWidth="2" />
                <line x1="175" y1="100" x2="250" y2="145" stroke="#F59E0B" strokeWidth="2" />
                <polygon points="215,120 225,128 217,132" fill="#F59E0B" />

                {/* Direct Ray dotted line */}
                <line x1="140" y1="100" x2="260" y2="100" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />

                {/* Minimum Deviation Angle Dm arc */}
                <path d="M 230 100 A 30 30 0 0 1 223 128" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                <text x="240" y="120" fontSize="10" fill="#EF4444" fontWeight="bold">Dm</text>

                {/* Telescope */}
                <rect x="250" y="135" width="55" height="25" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" rx="3" transform="rotate(31 250 135)" />
                <text x="278" y="165" fontSize="8" fill="#1E293B" fontWeight="bold">Telescope</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'අවම අපගමනයේදී i = (A+Dm)/2 සහ r = A/2 බැවින් n = sin((A+Dm)/2) / sin(A/2)' : 'At minimum deviation: n = sin((A+Dm)/2) / sin(A/2)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Formula */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
          </CardContent>
        </Card>
      </div>

      {/* Observations: 1. Prism Angle A */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.obsPrismAngleTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vernier 1 */}
            <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] space-y-3">
              <h4 className="font-semibold text-sm text-[#14243A]">{t.vernier1}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Face 1 Reflection θ₁:</span>
                <input
                  type="number"
                  step="0.01"
                  value={prismAngleV1Face1}
                  onChange={(e) => setPrismAngleV1Face1(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Face 2 Reflection θ₂:</span>
                <input
                  type="number"
                  step="0.01"
                  value={prismAngleV1Face2}
                  onChange={(e) => setPrismAngleV1Face2(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#DFE8EF]">
                <span className="font-medium text-[#14243A]">A₁ = |θ₁ - θ₂| / 2:</span>
                <span className="font-mono font-bold text-[#0F766E]">{aV1.toFixed(2)}°</span>
              </div>
            </div>

            {/* Vernier 2 */}
            <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] space-y-3">
              <h4 className="font-semibold text-sm text-[#14243A]">{t.vernier2}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Face 1 Reflection θ₁:</span>
                <input
                  type="number"
                  step="0.01"
                  value={prismAngleV2Face1}
                  onChange={(e) => setPrismAngleV2Face1(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Face 2 Reflection θ₂:</span>
                <input
                  type="number"
                  step="0.01"
                  value={prismAngleV2Face2}
                  onChange={(e) => setPrismAngleV2Face2(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#DFE8EF]">
                <span className="font-medium text-[#14243A]">A₂ = |θ₁ - θ₂| / 2:</span>
                <span className="font-mono font-bold text-[#0F766E]">{aV2.toFixed(2)}°</span>
              </div>
            </div>
          </div>
          <div className="text-right text-sm">
            <span className="text-[#475569] mr-2">{t.meanA}</span>
            <span className="font-bold text-base text-[#14243A] font-mono">{meanA.toFixed(2)}°</span>
          </div>
        </CardContent>
      </Card>

      {/* Observations: 2. Minimum Deviation Dm */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.obsMinDevTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Vernier 1 */}
            <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] space-y-3">
              <h4 className="font-semibold text-sm text-[#14243A]">{t.vernier1}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Deviated Ray θ_dev:</span>
                <input
                  type="number"
                  step="0.01"
                  value={minDevV1Deviated}
                  onChange={(e) => setMinDevV1Deviated(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Direct Slit Ray θ_dir:</span>
                <input
                  type="number"
                  step="0.01"
                  value={minDevV1Direct}
                  onChange={(e) => setMinDevV1Direct(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#DFE8EF]">
                <span className="font-medium text-[#14243A]">Dm₁ = |θ_dev - θ_dir|:</span>
                <span className="font-mono font-bold text-[#0F766E]">{dmV1.toFixed(2)}°</span>
              </div>
            </div>

            {/* Vernier 2 */}
            <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] space-y-3">
              <h4 className="font-semibold text-sm text-[#14243A]">{t.vernier2}</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Deviated Ray θ_dev:</span>
                <input
                  type="number"
                  step="0.01"
                  value={minDevV2Deviated}
                  onChange={(e) => setMinDevV2Deviated(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#475569]">Direct Slit Ray θ_dir:</span>
                <input
                  type="number"
                  step="0.01"
                  value={minDevV2Direct}
                  onChange={(e) => setMinDevV2Direct(e.target.value)}
                  className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                />
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[#DFE8EF]">
                <span className="font-medium text-[#14243A]">Dm₂ = |θ_dev - θ_dir|:</span>
                <span className="font-mono font-bold text-[#0F766E]">{dmV2.toFixed(2)}°</span>
              </div>
            </div>
          </div>
          <div className="text-right text-sm">
            <span className="text-[#475569] mr-2">{t.meanDm}</span>
            <span className="font-bold text-base text-[#14243A] font-mono">{meanDm.toFixed(2)}°</span>
          </div>

          {/* Analytical Calculation Output */}
          <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-[#475569] text-sm block">{t.calcRefractiveIndex}</span>
              <span className="text-2xl font-bold font-mono text-[#0F766E]">
                n = {refractiveIndex.toFixed(4)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isPass ? (
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictFail}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Precautions */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.precautionsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#475569] leading-relaxed">{t.precautions}</p>
        </CardContent>
      </Card>
    </div>
  );
};

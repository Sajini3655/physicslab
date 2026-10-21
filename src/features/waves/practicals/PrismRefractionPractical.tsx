'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculatePrismRefractiveIndex } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface PrismRefractionPracticalProps {
  locale?: Locale;
}

export const PrismRefractionPractical: React.FC<PrismRefractionPracticalProps> = ({
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
    experimentId: 'exp-16-prism',
    defaultObservations: {
      prismAngleV1Face1: '145.20',
      prismAngleV1Face2: '265.24',
      prismAngleV2Face1: '325.18',
      prismAngleV2Face2: '85.22',
      minDevV1Deviated: '212.80',
      minDevV1Direct: '173.20',
      minDevV2Deviated: '32.78',
      minDevV2Direct: '353.18',
    },
  });

  const prismAngleV1Face1 = observations.prismAngleV1Face1 || '145.20';
  const prismAngleV1Face2 = observations.prismAngleV1Face2 || '265.24';
  const prismAngleV2Face1 = observations.prismAngleV2Face1 || '325.18';
  const prismAngleV2Face2 = observations.prismAngleV2Face2 || '85.22';

  const minDevV1Deviated = observations.minDevV1Deviated || '212.80';
  const minDevV1Direct = observations.minDevV1Direct || '173.20';
  const minDevV2Deviated = observations.minDevV2Deviated || '32.78';
  const minDevV2Direct = observations.minDevV2Direct || '353.18';

  const t = {
    en: {
      title: 'Practical 16, 18–20: Refractive Index of a Glass Prism Using a Spectrometer',
      aim: 'Aim: To adjust a spectrometer for parallel light and determine the prism angle (A), angle of minimum deviation (Dm), and refractive index (n) of a crown glass prism.',
      apparatus: 'Apparatus: Optical spectrometer, dense flint/crown glass equilateral 60° prism, monochromatic sodium lamp or incandescent slit illuminator, spirit level, reading magnifier lens.',
      theoryTitle: 'Physical Principle & Spectrometer Geometry',
      theoryText: 'The spectrometer is levelled and focused for parallel rays using Schuster’s method.\n\n1. Measurement of Prism Angle (A):\nParallel light from the collimator strikes the apex of the prism and reflects off both optical faces. The angle between the two reflected beams is 2A:\n  2A = |θ_face1 - θ_face2|  ⟹  A = |θ_face1 - θ_face2| / 2\n\n2. Measurement of Minimum Deviation (Dm):\nAs the prism table is rotated in one direction, the refracted ray turns, pauses at an extreme turning position, and reverses direction. This stationary point is the position of minimum deviation:\n  Dm = |θ_deviated - θ_direct|\n\n3. Refractive Index of Glass (n):\nAt minimum deviation, the ray passes symmetrically through the prism (r₁ = r₂ = A/2 and i₁ = i₂ = (A + Dm)/2):\n  n = sin((A + Dm) / 2) / sin(A / 2)\nFor standard crown glass, n is approximately 1.51 – 1.53.',
      procedure: 'Procedure: 1. Focus telescope cross-wires sharply; focus collimator until the slit appears crisp without parallax. 2. Level prism table with spirit level. 3. Place prism with apex pointing towards collimator. Measure reflected slit positions from both faces using Vernier 1 and Vernier 2. 4. Rotate prism to refract light; track image while turning prism until it reverses. Lock turntable at turning point and read telescope. 5. Remove prism and sight straight direct ray to obtain θ_direct.',
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
      precautions: '1. Make collimator slit as narrow as possible while maintaining adequate brightness to minimize pointing uncertainty. 2. Never touch optical polished faces with bare fingers. 3. Average readings from two diametrically opposite verniers (180° apart) to eliminate eccentric scale error.',
      loadSample: 'Load Sample Data (Crown Glass)',
      clearInputs: 'Clear Inputs',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 16, 18–20: වර්ණාවලීමානය භාවිතයෙන් ප්‍රිස්මයක වර්තනාංකය සෙවීම',
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
      precautions: '1. නිරවද්‍යතාව වැඩි කිරීමට සමාන්තරකාරකයේ සිදුර හැකිතාක් සිහින් කරගන්න. 2. ප්‍රිස්මයේ ඔප දැමූ මුහුණත් අතින් ඇල්ලීමෙන් වළකින්න. 3. විකේන්ද්‍රික දෝෂ වැළැක්වීමට ප්‍රතිවිරුද්ධ වර්නියර් දෙකෙහිම පාඨාංකවල මධ්‍යන්‍යය ලබාගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const angleDiff = (a: number, b: number) => {
    let diff = Math.abs(a - b);
    if (diff > 180) diff = 360 - diff;
    return diff;
  };

  // Calculations: Prism Angle (A)
  const v1f1 = parseFloat(prismAngleV1Face1) || 0;
  const v1f2 = parseFloat(prismAngleV1Face2) || 0;
  const diffV1 = angleDiff(v1f1, v1f2);
  const aV1 = diffV1 / 2;

  const v2f1 = parseFloat(prismAngleV2Face1) || 0;
  const v2f2 = parseFloat(prismAngleV2Face2) || 0;
  const diffV2 = angleDiff(v2f1, v2f2);
  const aV2 = diffV2 / 2;

  const meanA = (aV1 + aV2) / 2;

  // Calculations: Minimum Deviation (Dm)
  const dmV1dev = parseFloat(minDevV1Deviated) || 0;
  const dmV1dir = parseFloat(minDevV1Direct) || 0;
  const dmV1 = angleDiff(dmV1dev, dmV1dir);

  const dmV2dev = parseFloat(minDevV2Deviated) || 0;
  const dmV2dir = parseFloat(minDevV2Direct) || 0;
  const dmV2 = angleDiff(dmV2dev, dmV2dir);

  const meanDm = (dmV1 + dmV2) / 2;

  // Refractive index calculation
  const refractiveIndex =
    meanA > 0 && meanDm > 0 ? calculatePrismRefractiveIndex(meanA, meanDm) : 0;
  const isPass = refractiveIndex >= 1.50 && refractiveIndex <= 1.56;

  const handleLoadSample = () => {
    loadSampleObservations({
      prismAngleV1Face1: '145.20',
      prismAngleV1Face2: '265.24',
      prismAngleV2Face1: '325.18',
      prismAngleV2Face2: '85.22',
      minDevV1Deviated: '212.80',
      minDevV1Direct: '173.20',
      minDevV2Deviated: '32.78',
      minDevV2Direct: '353.18',
    });
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
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

      {/* Main Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#0F766E]" />
            <span className="font-bold text-sm text-[#14243A] dark:text-[#F8FAFC]">
              Optical Spectrometer Vernier Table
            </span>
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
          {/* Spectrometer Schematic Diagram */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
              {/* Circular Spectrometer Base Scale */}
              <circle cx="170" cy="90" r="65" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="170" cy="90" r="50" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

              {/* Collimator fixed at left (pointing to center) */}
              <rect x="20" y="85" width="85" height="10" fill="#475569" rx="1" />
              <rect x="15" y="82" width="10" height="16" fill="#1E293B" rx="1" />
              <text x="60" y="80" textAnchor="middle" fontSize="8" fill="#475569" fontWeight="bold">Collimator</text>

              {/* Equilateral Prism at turntable center */}
              <polygon points="170,68 150,103 190,103" fill="#93C5FD" fillOpacity="0.7" stroke="#2563EB" strokeWidth="1.5" />
              <text x="170" y="93" textAnchor="middle" fontSize="8" fill="#1D4ED8" fontWeight="bold">Prism (A)</text>

              {/* Reflected & Deviated Rays */}
              <line x1="105" y1="90" x2="160" y2="85" stroke="#F59E0B" strokeWidth="1.5" />
              <line x1="160" y1="85" x2="230" y2="40" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
              <line x1="160" y1="85" x2="245" y2="120" stroke="#F59E0B" strokeWidth="1.5" />

              {/* Telescope arm */}
              <g transform="rotate(35 170 90)">
                <rect x="235" y="85" width="80" height="10" fill="#334155" rx="1" />
                <rect x="310" y="82" width="10" height="16" fill="#0F172A" rx="1" />
                <text x="275" y="80" textAnchor="middle" fontSize="8" fill="#334155" fontWeight="bold">Telescope</text>
              </g>

              {/* Dual Vernier readouts */}
              <rect x="160" y="160" width="20" height="10" fill="#0F766E" rx="1" />
              <text x="170" y="168" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontWeight="bold">V1</text>
              <rect x="160" y="10" width="20" height="10" fill="#0F766E" rx="1" />
              <text x="170" y="18" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontWeight="bold">V2</text>
            </svg>
          </div>

          {/* Section 1: Prism Apex Angle (A) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.obsPrismAngleTitle}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans">{t.vernier1}</span>
                <div className="flex justify-between items-center">
                  <span>θ_face1 (°):</span>
                  <input
                    type="text"
                    value={prismAngleV1Face1}
                    onChange={(e) => updateObservations({ prismAngleV1Face1: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>θ_face2 (°):</span>
                  <input
                    type="text"
                    value={prismAngleV1Face2}
                    onChange={(e) => updateObservations({ prismAngleV1Face2: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#0F766E]">
                  <span>A₁ = 2A / 2:</span>
                  <span>{aV1.toFixed(2)}°</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                <span className="font-bold text-[#3B82F6] block font-sans">{t.vernier2}</span>
                <div className="flex justify-between items-center">
                  <span>θ_face1 (°):</span>
                  <input
                    type="text"
                    value={prismAngleV2Face1}
                    onChange={(e) => updateObservations({ prismAngleV2Face1: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>θ_face2 (°):</span>
                  <input
                    type="text"
                    value={prismAngleV2Face2}
                    onChange={(e) => updateObservations({ prismAngleV2Face2: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#3B82F6]">
                  <span>A₂ = 2A / 2:</span>
                  <span>{aV2.toFixed(2)}°</span>
                </div>
              </div>
            </div>
            <div className="text-right text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.meanA} {meanA.toFixed(2)}°
            </div>
          </div>

          {/* Section 2: Minimum Deviation (Dm) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {t.obsMinDevTitle}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                <span className="font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans">{t.vernier1}</span>
                <div className="flex justify-between items-center">
                  <span>θ_deviated (°):</span>
                  <input
                    type="text"
                    value={minDevV1Deviated}
                    onChange={(e) => updateObservations({ minDevV1Deviated: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>θ_direct (°):</span>
                  <input
                    type="text"
                    value={minDevV1Direct}
                    onChange={(e) => updateObservations({ minDevV1Direct: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#0F766E]">
                  <span>Dm₁ = |θ_dev - θ_dir|:</span>
                  <span>{dmV1.toFixed(2)}°</span>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] space-y-2">
                <span className="font-bold text-[#3B82F6] block font-sans">{t.vernier2}</span>
                <div className="flex justify-between items-center">
                  <span>θ_deviated (°):</span>
                  <input
                    type="text"
                    value={minDevV2Deviated}
                    onChange={(e) => updateObservations({ minDevV2Deviated: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>θ_direct (°):</span>
                  <input
                    type="text"
                    value={minDevV2Direct}
                    onChange={(e) => updateObservations({ minDevV2Direct: e.target.value })}
                    className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                  />
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D] font-bold text-[#3B82F6]">
                  <span>Dm₂ = |θ_dev - θ_dir|:</span>
                  <span>{dmV2.toFixed(2)}°</span>
                </div>
              </div>
            </div>
            <div className="text-right text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.meanDm} {meanDm.toFixed(2)}°
            </div>
          </div>

          {/* Section 3: Calculated Refractive Index */}
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-[#64748B] block font-sans">{t.calcRefractiveIndex}</span>
                <span className="text-xl font-bold font-mono text-[#0F766E] dark:text-[#14B8A6]">
                  n = {refractiveIndex.toFixed(4)}
                </span>
              </div>

              <div className={`p-2.5 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                isPass
                  ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
              }`}>
                {isPass ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <span>{isPass ? t.verdictPass : t.verdictFail}</span>
              </div>
            </div>
          </div>

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

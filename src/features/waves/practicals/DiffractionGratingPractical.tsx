'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Sparkles } from 'lucide-react';
import { calculateDiffractionGratingWavelength } from '../physics/calculations';

interface DiffractionGratingPracticalProps {
  locale?: Locale;
}

interface SpectralLineTrial {
  id: number;
  colorNameEn: string;
  colorNameSi: string;
  orderN: number;
  thetaLDeg: string;
  thetaRDeg: string;
  standardWavelengthNm: number;
  hexColor: string;
}

export const DiffractionGratingPractical: React.FC<DiffractionGratingPracticalProps> = ({
  locale = 'en',
}) => {
  const [gratingLinesPerMm, setGratingLinesPerMm] = useState<string>('300'); // 300 lines/mm => d = 3.333 um

  const [trials, setTrials] = useState<SpectralLineTrial[]>([
    {
      id: 1,
      colorNameEn: 'Mercury Violet',
      colorNameSi: 'මර්කරි දම්',
      orderN: 1,
      thetaLDeg: '172.98',
      thetaRDeg: '187.02',
      standardWavelengthNm: 404.7,
      hexColor: '#8B5CF6',
    },
    {
      id: 2,
      colorNameEn: 'Mercury Green',
      colorNameSi: 'මර්කරි කොළ',
      orderN: 1,
      thetaLDeg: '170.52',
      thetaRDeg: '189.48',
      standardWavelengthNm: 546.1,
      hexColor: '#10B981',
    },
    {
      id: 3,
      colorNameEn: 'Sodium Yellow',
      colorNameSi: 'සෝඩියම් කහ',
      orderN: 1,
      thetaLDeg: '169.80',
      thetaRDeg: '190.20',
      standardWavelengthNm: 589.3,
      hexColor: '#F59E0B',
    },
    {
      id: 4,
      colorNameEn: 'Hydrogen Red',
      colorNameSi: 'හයිඩ්‍රජන් රතු',
      orderN: 1,
      thetaLDeg: '168.65',
      thetaRDeg: '191.35',
      standardWavelengthNm: 656.3,
      hexColor: '#EF4444',
    },
  ]);

  const t = {
    en: {
      title: 'Practical 3.4: Wavelength of Light by Transmission Diffraction Grating',
      aim: 'Aim: To determine the wavelengths of visible spectral emission lines using a plane transmission diffraction grating and a spectrometer adjusted for normal incidence.',
      apparatus: 'Apparatus: Spectrometer, plane diffraction grating (typically 300 or 600 lines/mm), mercury vapor lamp / sodium vapor lamp, dark enclosure, reading magnifier.',
      theoryTitle: 'Physical Principle & Grating Equation',
      theoryText: 'When a parallel beam of light of wavelength λ falls normally on a diffraction grating with N lines per metre (grating element d = 1 / N):\n\nd · sin θₙ = n · λ\n\nwhere:\n• d = 1 / (grating lines per metre)\n• n is the diffraction order (n = 1, 2, ...)\n• θₙ is the angle of diffraction from normal incidence\n\nTo eliminate zero-scale alignment errors, the telescope is swung to read both symmetrical orders (left θ_L and right θ_R):\n  2θₙ = |θ_R - θ_L|  ⟹  θₙ = |θ_R - θ_L| / 2\n\nThe wavelength is then:\n  λ = (d · sin θₙ) / n',
      procedure: 'Procedure: 1. Adjust the spectrometer for parallel rays (Schuster’s method). 2. Set the diffraction grating on the turntable perpendicular to the incident beam (normal incidence). 3. View the central undiffracted image (n = 0) at direct position. 4. Turn the telescope to the first-order spectrum on the right; record θ_R for each colored line. 5. Turn telescope to the left; record θ_L for each line. 6. Compute 2θ, θ, and determine λ in nanometres.',
      obsTitle: 'Experimental Spectral Observations',
      colLine: 'Spectral Line',
      colOrder: 'Order (n)',
      colThetaL: 'Left θ_L (°)',
      colThetaR: 'Right θ_R (°)',
      colDiff: '2θ (°)',
      colTheta: 'θ (°)',
      colWavelength: 'Calculated λ (nm)',
      colStandard: 'Accepted λ (nm)',
      colDiffPerc: 'Diff %',
      gratingRating: 'Grating Specification (lines/mm):',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Ensure strict normal incidence by reflecting light from the grating surface back into the collimator. 2. Handle the grating only by its edges; never touch the ruling surface. 3. Narrow the collimator slit to separate closely spaced spectral lines (such as the sodium doublet).',
      loadSample: 'Load Sample Data (300 lines/mm)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3.4: විවර්තන දැලිස මගින් ආලෝකයේ තරංග ආයාමය සෙවීම',
      aim: 'අරමුණ: ලම්බ පතනයට සීරුමාරු කළ විවර්තන දැලිසක් සහ වර්ණාවලීමානයක් භාවිතයෙන් දෘශ්‍ය වර්ණාවලි රේඛාවල තරංග ආයාම (λ) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: වර්ණාවලීමානය, තල විවර්තන දැලිස (300 හෝ 600 රේඛා/mm), රසදිය වාෂ්ප ලාම්පුව / සෝඩියම් ලාම්පුව, විශාලක කාචය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ දැලිස් සමීකරණය',
      theoryText: 'මීටරයකට රේඛා N සංඛ්‍යාවක් ඇති විවර්තන දැලිසක් (දැලිස් නියතය d = 1 / N) මතට තරංග ආයාමය λ වූ සමාන්තර ආලෝක කදම්භයක් ලම්බව පතිත වන විට:\n\nd · sin θₙ = n · λ\n\nමෙහි:\n• d = 1 / (මීටරයට ඇති රේඛා ගණන)\n• n යනු විවර්තන ගණනය (n = 1, 2, ...)\n• θₙ යනු විවර්තන කෝණයයි\n\nශුන්‍ය දෝෂ ඉවත් කිරීමට සමමිතිකව වම්පස (θ_L) සහ දකුණුපස (θ_R) පාඨාංක ගනු ලැබේ:\n  2θₙ = |θ_R - θ_L|  ⟹  θₙ = |θ_R - θ_L| / 2\n\nතරංග ආයාමය:\n  λ = (d · sin θₙ) / n',
      procedure: 'ක්‍රමවේදය: 1. වර්ණාවලීමානය සමාන්තර ආලෝකයට සකසන්න. 2. දැලිස ලම්බ පතනය වන සේ ප්‍රිස්ම මේසය මත තබන්න. 3. මධ්‍ය ශුන්‍ය අපගමන කිරණය (n = 0) හඳුනාගන්න. 4. දුරේක්ෂය දකුණට හරවා එක් එක් වර්ණ රේඛාවේ θ_R කියවන්න. 5. දුරේක්ෂය වමට හරවා අනුරූප θ_L කියවන්න. 6. 2θ, θ සහ λ ගණනය කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (වර්ණාවලි රේඛා)',
      colLine: 'වර්ණාවලි රේඛාව',
      colOrder: 'ගණනය (n)',
      colThetaL: 'වම් θ_L (°)',
      colThetaR: 'දකුණු θ_R (°)',
      colDiff: '2θ (°)',
      colTheta: 'θ (°)',
      colWavelength: 'ගණනය කළ λ (nm)',
      colStandard: 'පිළිගත් λ (nm)',
      colDiffPerc: 'වෙනස %',
      gratingRating: 'දැලිසේ රේඛා ඝනත්වය (රේඛා/mm):',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. දැලිස මත ආලෝකය හරියටම ලම්බකව පතිත වන බව තහවුරු කරගන්න. 2. දැලිසේ ඉරි ඇඳි පෘෂ්ඨය කිසිවිටෙකත් අතින් නොඇල්ලිය යුතුය; දාරයෙන් පමණක් අල්ලන්න. 3. වර්ණාවලි රේඛා පැහැදිලිව වෙන්කර හඳුනාගැනීමට සිදුර හැකිතාක් සිහින් කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (300 lines/mm)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof SpectralLineTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const linesMm = parseFloat(gratingLinesPerMm) || 300;
  const linesPerM = linesMm * 1000;

  // Helper for angular difference taking 360 wrap into account
  const angleDiff = (a: number, b: number) => {
    let diff = Math.abs(a - b) % 360;
    if (diff > 180) diff = 360 - diff;
    return diff;
  };

  const calculatedTrials = trials.map((tr) => {
    const l = parseFloat(tr.thetaLDeg);
    const r = parseFloat(tr.thetaRDeg);

    if (!isNaN(l) && !isNaN(r) && linesPerM > 0) {
      const twoTheta = angleDiff(r, l);
      const theta = twoTheta / 2;
      const lambdaM = calculateDiffractionGratingWavelength(linesPerM, tr.orderN, theta);
      const lambdaNm = lambdaM * 1e9;
      const diffPerc = Math.abs((lambdaNm - tr.standardWavelengthNm) / tr.standardWavelengthNm) * 100;
      return {
        ...tr,
        twoTheta,
        theta,
        lambdaNm,
        diffPerc,
        isPass: diffPerc <= 3.0,
      };
    }
    return {
      ...tr,
      twoTheta: null,
      theta: null,
      lambdaNm: null,
      diffPerc: null,
      isPass: false,
    };
  });

  const handleLoadSample = () => {
    setGratingLinesPerMm('300');
    setTrials([
      {
        id: 1,
        colorNameEn: 'Mercury Violet',
        colorNameSi: 'මර්කරි දම්',
        orderN: 1,
        thetaLDeg: '172.98',
        thetaRDeg: '187.02',
        standardWavelengthNm: 404.7,
        hexColor: '#8B5CF6',
      },
      {
        id: 2,
        colorNameEn: 'Mercury Green',
        colorNameSi: 'මර්කරි කොළ',
        orderN: 1,
        thetaLDeg: '170.52',
        thetaRDeg: '189.48',
        standardWavelengthNm: 546.1,
        hexColor: '#10B981',
      },
      {
        id: 3,
        colorNameEn: 'Sodium Yellow',
        colorNameSi: 'සෝඩියම් කහ',
        orderN: 1,
        thetaLDeg: '169.80',
        thetaRDeg: '190.20',
        standardWavelengthNm: 589.3,
        hexColor: '#F59E0B',
      },
      {
        id: 4,
        colorNameEn: 'Hydrogen Red',
        colorNameSi: 'හයිඩ්‍රජන් රතු',
        orderN: 1,
        thetaLDeg: '168.65',
        thetaRDeg: '191.35',
        standardWavelengthNm: 656.3,
        hexColor: '#EF4444',
      },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, thetaLDeg: '', thetaRDeg: '' })));
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
              <Sparkles className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'විවර්තන දැලිස් වර්ණාවලි සටහන' : 'Diffraction Grating Orders Geometry'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="200" viewBox="0 0 320 200" className="overflow-visible">
                {/* Collimated incoming light */}
                <line x1="20" y1="100" x2="110" y2="100" stroke="#F59E0B" strokeWidth="2.5" />
                <polygon points="70,97 80,100 70,103" fill="#F59E0B" />
                <text x="60" y="88" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Incident Beam</text>

                {/* Diffraction Grating Element */}
                <rect x="110" y="45" width="6" height="110" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
                <line x1="113" y1="55" x2="113" y2="145" stroke="#0F766E" strokeWidth="1" strokeDasharray="2 2" />
                <text x="113" y="38" textAnchor="middle" fontSize="8" fill="#0F766E" fontWeight="bold">Grating (d = 1/N)</text>

                {/* Central Maximum n = 0 */}
                <line x1="116" y1="100" x2="280" y2="100" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="290" y="103" fontSize="9" fill="#64748B" fontWeight="bold">n = 0</text>

                {/* n = +1 (Right) */}
                <line x1="116" y1="100" x2="270" y2="55" stroke="#10B981" strokeWidth="2" />
                <text x="280" y="58" fontSize="9" fill="#10B981" fontWeight="bold">n = +1 (Right)</text>

                {/* n = -1 (Left) */}
                <line x1="116" y1="100" x2="270" y2="145" stroke="#8B5CF6" strokeWidth="2" />
                <text x="280" y="148" fontSize="9" fill="#8B5CF6" fontWeight="bold">n = -1 (Left)</text>

                {/* 2θ arc */}
                <path d="M 180 82 A 70 70 0 0 1 180 118" fill="none" stroke="#0F766E" strokeWidth="1.5" />
                <text x="195" y="103" fontSize="10" fill="#0F766E" fontWeight="bold">2θ</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'ලම්බ පතනය: d sin θ = n λ ⟹ λ = (d sin θ) / n' : 'Normal incidence: d sin θ = n λ ⟹ λ = (d sin θ) / n'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Grating Setting */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF] flex items-center justify-between">
              <span className="font-semibold text-[#14243A]">{t.gratingRating}</span>
              <input
                type="number"
                step="50"
                value={gratingLinesPerMm}
                onChange={(e) => setGratingLinesPerMm(e.target.value)}
                className="w-24 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Observations Table */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium">
            {t.obsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#F6FAFD] border-b border-[#DFE8EF] text-[#14243A]">
                  <th className="py-2.5 px-3 font-semibold">{t.colLine}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colOrder}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colThetaL}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colThetaR}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colDiff}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colTheta}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colWavelength}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colStandard}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colDiffPerc}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-medium flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tr.hexColor }} />
                      <span className="text-[#14243A]">
                        {locale === 'si' ? tr.colorNameSi : tr.colorNameEn}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-[#14243A]">{tr.orderN}</td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.01"
                        value={tr.thetaLDeg}
                        onChange={(e) => updateTrial(tr.id, 'thetaLDeg', e.target.value)}
                        className="w-20 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.01"
                        value={tr.thetaRDeg}
                        onChange={(e) => updateTrial(tr.id, 'thetaRDeg', e.target.value)}
                        className="w-20 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#475569]">
                      {tr.twoTheta !== null ? `${tr.twoTheta.toFixed(2)}°` : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#475569]">
                      {tr.theta !== null ? `${tr.theta.toFixed(2)}°` : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0F766E]">
                      {tr.lambdaNm !== null ? `${tr.lambdaNm.toFixed(1)} nm` : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#475569]">
                      {tr.standardWavelengthNm.toFixed(1)} nm
                    </td>
                    <td className="py-2.5 px-3">
                      {tr.diffPerc !== null ? (
                        <span className={`font-mono text-xs font-semibold ${tr.isPass ? 'text-emerald-700' : 'text-amber-600'}`}>
                          {tr.diffPerc.toFixed(2)}%
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

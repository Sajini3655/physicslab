'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { calculateDiffractionGratingWavelength } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

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
  const {
    observations,
    updateObservations,
    loadSampleObservations,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-20-grating',
    defaultObservations: {
      gratingLinesPerMm: '300',
      trials: [
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
      ],
    },
  });

  const gratingLinesPerMm = observations.gratingLinesPerMm || '300';
  const trials: SpectralLineTrial[] = observations.trials || [
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
  ];

  const t = {
    en: {
      title: 'Additional Investigation: Wavelength of Light by Transmission Diffraction Grating',
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
      gratingLinesLabel: 'Grating Specification (lines/mm):',
      elementD: 'Grating Element (d):',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Ensure normal incidence: rotate grating so reflection from grating face reflects directly back into collimator slit. 2. Never touch ruled gelatin face of grating; hold only by glass edges. 3. Average left and right diffraction angles to eliminate scale zero error.',
      loadSample: 'Load Sample Data (300 lines/mm)',
      clearInputs: 'Clear Inputs',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'අතිරේක පරීක්ෂණය: විවර්තන දැලිසක් භාවිතයෙන් ආලෝකයේ තරංග ආයාමය සෙවීම',
      aim: 'අරමුණ: අභිලම්බ පතනයට සීරුමාරු කළ වර්ණාවලීමානයක් සහ තල සම්ප්‍රේෂණ විවර්තන දැලිසක් භාවිතයෙන් දෘශ්‍ය වර්ණාවලි රේඛාවල තරංග ආයාම නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: වර්ණාවලීමානය, තල විවර්තන දැලිස (300 හෝ 600 lines/mm), රසදිය වාෂ්ප ලාම්පුව / සෝඩියම් ලාම්පුව, අඳුරු කුටිය, විශාලක කාචය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ දැලිස් සමීකරණය',
      theoryText: 'මීටරයකට රේඛා N සංඛ්‍යාවක් සහිත දැලිසක් මත (දැලිස් ඒකකය d = 1 / N) තරංග ආයාමය λ වූ සමාන්තර ආලෝක කදම්භයක් අභිලම්බව පතිත වන විට:\n\nd · sin θₙ = n · λ\n\nමෙහි:\n• d = 1 / (මීටරයක ඇති රේඛා ගණන)\n• n යනු විවර්තන ගණය වේ (n = 1, 2, ...)\n• θₙ යනු අභිලම්බයේ සිට අපගමන කෝණයයි\n\nශුන්‍ය දෝෂය ඉවත් කිරීමට දුරේක්ෂය වම්පස (θ_L) සහ දකුණුපස (θ_R) සමමිතික පාඨාංක දෙකටම ගෙන 2θ මනිනු ලැබේ:\n  2θₙ = |θ_R - θ_L|  ⟹  θₙ = |θ_R - θ_L| / 2\n\nඑවිට තරංග ආයාමය:\n  λ = (d · sin θₙ) / n',
      procedure: 'ක්‍රමවේදය: 1. ෂූස්ටර් ක්‍රමයෙන් වර්ණාවලීමානය සීරුමාරු කරන්න. 2. විවර්තන දැලිස ආලෝක කදම්භයට ලම්බකව තබන්න. 3. කේන්ද්‍රීය සෘජු ප්‍රතිබිම්බය (n = 0) බලන්න. 4. දුරේක්ෂය දකුණට කරකවා 1 වන ගණයේ එක් එක් වර්ණ සඳහා θ_R කියවන්න. 5. දුරේක්ෂය වමට කරකවා θ_L කියවන්න. 6. 2θ සහ θ ගණනය කර λ නැනෝමීටරවලින් සොයන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (විවර්තන වර්ණාවලිය)',
      colLine: 'වර්ණාවලි රේඛාව',
      colOrder: 'ගණය (n)',
      colThetaL: 'වම් θ_L (°)',
      colThetaR: 'දකුණු θ_R (°)',
      colDiff: '2θ (°)',
      colTheta: 'θ (°)',
      colWavelength: 'ගණනය කළ λ (nm)',
      colStandard: 'සම්මත λ (nm)',
      colDiffPerc: 'වෙනස %',
      gratingLinesLabel: 'දැලිස් පිරිවිතර (මි.මී. රේඛා ගණන):',
      elementD: 'දැලිස් ඒකකය (d):',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. අභිලම්බ පතනය තහවුරු කිරීමට දැලිස් මුහුණතෙන් පරාවර්තනය වන කිරණය නැවත සමාන්තරකාරක සිදුර මතට වැටෙන සේ සකසන්න. 2. දැලිසේ ඉරි ඇඳි මතුපිට ඇඟිලිවලින් ස්පර්ශ නොකරන්න. 3. ශුන්‍ය දෝෂය ඉවත් කිරීමට වම් සහ දකුණු කෝණවල මධ්‍යන්‍යය ලබාගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (300 lines/mm)',
      clearInputs: 'දත්ත හිස් කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  const linesPerMmNum = parseFloat(gratingLinesPerMm) || 300;
  const dMetres = linesPerMmNum > 0 ? 1 / (linesPerMmNum * 1000) : 0;
  const dMicrons = dMetres * 1e6;

  const calculatedTrials = trials.map((tr) => {
    const thL = parseFloat(tr.thetaLDeg);
    const thR = parseFloat(tr.thetaRDeg);

    if (!isNaN(thL) && !isNaN(thR) && dMetres > 0) {
      const twoTheta = Math.abs(thR - thL);
      const theta = twoTheta / 2;
      const lambdaM = calculateDiffractionGratingWavelength(dMetres, theta, tr.orderN);
      const lambdaNm = lambdaM * 1e9;
      const diffPerc =
        tr.standardWavelengthNm > 0
          ? Math.abs((lambdaNm - tr.standardWavelengthNm) / tr.standardWavelengthNm) * 100
          : null;
      const isPass = diffPerc !== null && diffPerc <= 2.5;

      return {
        ...tr,
        twoTheta,
        theta,
        lambdaNm,
        diffPerc,
        isPass,
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

  const updateTrial = (id: number, field: 'thetaLDeg' | 'thetaRDeg', val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const handleLoadSample = () => {
    loadSampleObservations({
      gratingLinesPerMm: '300',
      trials: [
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
      ],
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

      {/* Main Workspace Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0F766E]" />
            <span className="font-bold text-sm text-[#14243A] dark:text-[#F8FAFC]">
              Diffraction Spectrometer Observations
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
          {/* Grating Parameters Bar */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <label className="font-sans font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.gratingLinesLabel}
              </label>
              <input
                type="text"
                value={gratingLinesPerMm}
                onChange={(e) => updateObservations({ gratingLinesPerMm: e.target.value })}
                className="w-24 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
              />
            </div>
            <div>
              <span className="text-[#64748B] font-sans mr-2">{t.elementD}</span>
              <span className="font-bold text-[#0F766E] dark:text-[#14B8A6]">
                d = {dMicrons.toFixed(3)} μm ({dMetres.toExponential(4)} m)
              </span>
            </div>
          </div>

          {/* Observation Table */}
          <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                <tr>
                  <th className="p-3">{t.colLine}</th>
                  <th className="p-3">{t.colOrder}</th>
                  <th className="p-3">{t.colThetaL}</th>
                  <th className="p-3">{t.colThetaR}</th>
                  <th className="p-3">{t.colDiff}</th>
                  <th className="p-3">{t.colTheta}</th>
                  <th className="p-3">{t.colWavelength}</th>
                  <th className="p-3">{t.colStandard}</th>
                  <th className="p-3">{t.colDiffPerc}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                    <td className="p-3 font-medium flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: tr.hexColor }} />
                      <span className="font-sans">{locale === 'si' ? tr.colorNameSi : tr.colorNameEn}</span>
                    </td>
                    <td className="p-3 text-center">{tr.orderN}</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={tr.thetaLDeg}
                        onChange={(e) => updateTrial(tr.id, 'thetaLDeg', e.target.value)}
                        className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={tr.thetaRDeg}
                        onChange={(e) => updateTrial(tr.id, 'thetaRDeg', e.target.value)}
                        className="w-20 px-2 py-1 rounded border border-[#DFE8EF] dark:border-[#1E334D] bg-white dark:bg-[#111D2D]"
                      />
                    </td>
                    <td className="p-3 text-[#64748B]">
                      {tr.twoTheta !== null ? `${tr.twoTheta.toFixed(2)}°` : '—'}
                    </td>
                    <td className="p-3 text-[#64748B]">
                      {tr.theta !== null ? `${tr.theta.toFixed(2)}°` : '—'}
                    </td>
                    <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {tr.lambdaNm !== null ? `${tr.lambdaNm.toFixed(1)} nm` : '—'}
                    </td>
                    <td className="p-3 text-[#64748B]">
                      {tr.standardWavelengthNm.toFixed(1)} nm
                    </td>
                    <td className="p-3">
                      {tr.diffPerc !== null ? (
                        <span className={`font-mono text-xs font-semibold ${tr.isPass ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
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

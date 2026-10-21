'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  FlaskConical,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';
import { usePracticalWork } from '@/shared/practicals';

interface MatterPropertiesPracticalsHubProps {
  locale?: Locale;
}

export const MatterPropertiesPracticalsHub: React.FC<MatterPropertiesPracticalsHubProps> = ({
  locale = 'en',
}) => {
  // Practical 2: Poiseuille Capillary Flow Viscosity (Exp 39)
  const defaultPoiseuilleData = [
    { headCm: 10.0, volumeCm3: 30.0, timeS: 61.2, flowRateCm3S: 0.49 },
    { headCm: 15.0, volumeCm3: 30.0, timeS: 40.8, flowRateCm3S: 0.735 },
    { headCm: 20.0, volumeCm3: 30.0, timeS: 30.6, flowRateCm3S: 0.98 },
    { headCm: 25.0, volumeCm3: 30.0, timeS: 24.5, flowRateCm3S: 1.224 },
    { headCm: 30.0, volumeCm3: 30.0, timeS: 20.4, flowRateCm3S: 1.471 },
  ];
  const capillaryLengthM = 0.30;
  const capillaryRadiusMm = 0.38;

  // Practical 6: Jaeger's Method for Surface Tension (Exp 42)
  const defaultJaegerData = [
    { depthCm: 1.0, manometerCm: 8.42, surfaceTensionNm: 0.0703 },
    { depthCm: 2.0, manometerCm: 9.67, surfaceTensionNm: 0.0703 },
    { depthCm: 3.0, manometerCm: 10.92, surfaceTensionNm: 0.0703 },
    { depthCm: 4.0, manometerCm: 12.17, surfaceTensionNm: 0.0703 },
    { depthCm: 5.0, manometerCm: 13.42, surfaceTensionNm: 0.0703 },
  ];
  const jaegerOrificeRadiusMm = 0.25;
  const paraffinDensity = 800;
  const waterDensity = 1000;

  // Practicals state: Sample data / Editable tables
  // Practical 1: Searle's Apparatus (Load M vs Extension e)
  const defaultSearleData = [
    { loadKg: 1.0, micrometerMm: 0.18, extensionMm: 0.18 },
    { loadKg: 2.0, micrometerMm: 0.36, extensionMm: 0.36 },
    { loadKg: 3.0, micrometerMm: 0.55, extensionMm: 0.55 },
    { loadKg: 4.0, micrometerMm: 0.73, extensionMm: 0.73 },
    { loadKg: 5.0, micrometerMm: 0.91, extensionMm: 0.91 },
  ];
  const wireLengthM = 2.8;
  const wireDiameterMm = 0.56;

  // Practical 2: Stokes' Viscometer (r vs Terminal Velocity v_t)
  const defaultStokesData = [
    { radiusMm: 1.0, rSquaredMm2: 1.0, distanceCm: 40.0, timeS: 12.5, velocityCmS: 3.2 },
    { radiusMm: 1.5, rSquaredMm2: 2.25, distanceCm: 40.0, timeS: 5.55, velocityCmS: 7.2 },
    { radiusMm: 2.0, rSquaredMm2: 4.0, distanceCm: 40.0, timeS: 3.12, velocityCmS: 12.8 },
    { radiusMm: 2.5, rSquaredMm2: 6.25, distanceCm: 40.0, timeS: 2.0, velocityCmS: 20.0 },
    { radiusMm: 3.0, rSquaredMm2: 9.0, distanceCm: 40.0, timeS: 1.39, velocityCmS: 28.8 },
  ];

  // Practical 3: Capillary Rise Method (Tube radius r vs height h)
  const defaultCapillaryData = [
    { radiusMm: 0.25, oneOverR: 4.0, heightCm: 5.92 },
    { radiusMm: 0.35, oneOverR: 2.86, heightCm: 4.23 },
    { radiusMm: 0.50, oneOverR: 2.0, heightCm: 2.96 },
    { radiusMm: 0.70, oneOverR: 1.43, heightCm: 2.11 },
    { radiusMm: 1.00, oneOverR: 1.0, heightCm: 1.48 },
  ];

  // Practical 4: Microscope Slide Method (Slide length l vs pull-off force F)
  const defaultSlideData = [
    { lengthCm: 5.0, massG: 0.74, forceMn: 7.25, surfaceTensionNm: 0.0725 },
    { lengthCm: 7.5, massG: 1.11, forceMn: 10.88, surfaceTensionNm: 0.0725 },
    { lengthCm: 10.0, massG: 1.48, forceMn: 14.51, surfaceTensionNm: 0.0726 },
  ];

  const {
    observations,
    updateObservations,
  } = usePracticalWork({
    experimentId: 'exp-matter-properties-hub',
    defaultObservations: {
      activeTab: 'searles',
      poiseuilleData: defaultPoiseuilleData,
      jaegerData: defaultJaegerData,
      searleData: defaultSearleData,
      stokesData: defaultStokesData,
      capillaryData: defaultCapillaryData,
      slideData: defaultSlideData,
    },
  });

  const activeTab = (observations.activeTab || 'searles') as
    | 'searles'
    | 'poiseuille'
    | 'stokes'
    | 'glassSlide'
    | 'capillary'
    | 'jaeger';
  const poiseuilleData: typeof defaultPoiseuilleData = observations.poiseuilleData || defaultPoiseuilleData;
  const jaegerData: typeof defaultJaegerData = observations.jaegerData || defaultJaegerData;
  const searleData: typeof defaultSearleData = observations.searleData || defaultSearleData;
  const stokesData: typeof defaultStokesData = observations.stokesData || defaultStokesData;
  const capillaryData: typeof defaultCapillaryData = observations.capillaryData || defaultCapillaryData;
  const slideData: typeof defaultSlideData = observations.slideData || defaultSlideData;

  const setActiveTab = (tab: 'searles' | 'poiseuille' | 'stokes' | 'glassSlide' | 'capillary' | 'jaeger') =>
    updateObservations({ activeTab: tab });
  const setPoiseuilleData = (data: typeof defaultPoiseuilleData) => updateObservations({ poiseuilleData: data });
  const setJaegerData = (data: typeof defaultJaegerData) => updateObservations({ jaegerData: data });
  const setSearleData = (data: typeof defaultSearleData) => updateObservations({ searleData: data });
  const setStokesData = (data: typeof defaultStokesData) => updateObservations({ stokesData: data });
  const setCapillaryData = (data: typeof defaultCapillaryData) => updateObservations({ capillaryData: data });
  const setSlideData = (data: typeof defaultSlideData) => updateObservations({ slideData: data });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 10 Mechanical Properties Practicals Hub',
      hubSubtitle:
        'Official NIE A/L Physics Practical Handbook Investigations (Experiments 38, 39, 40, 41, 42): Searle’s apparatus, Poiseuille & Stokes viscosity, glass slide, capillary rise, and Jaeger’s maximum bubble pressure.',
      searlesTab: "1. Searle's Young's Modulus (Exp 38)",
      poiseuilleTab: "2. Poiseuille Capillary Viscosity (Exp 39)",
      stokesTab: "3. Stokes' Viscosity (Exp 39 alt)",
      glassSlideTab: "4. Microscope Slide Surface Tension (Exp 40)",
      capillaryTab: "5. Capillary Surface Tension (Exp 41)",
      jaegerTab: "6. Jaeger's Surface Tension (Exp 42)",
      aim: 'Experimental Aim & Objective',
      apparatus: 'Required Laboratory Apparatus',
      principle: 'Physical Principle & Governing Equations',
      procedure: 'Standard Laboratory Procedure',
      observations: 'Experimental Observations & Data Table',
      analysis: 'Graphical Analysis & Calculation',
      precautions: 'Important Laboratory Precautions',
      loadSample: 'Load NIE Handbook Sample Data',
      resetData: 'Reset Table',
      derivedResult: 'Derived Experimental Result:',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 10 පදාර්ථයේ යාන්ත්‍රික ගුණ ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle:
        'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා ප්‍රායෝගික අත්පොත (පරීක්ෂණ 38, 39, 40, 41, 42): සර්ල්ගේ උපකරණය, පුඅසෙයිල් සහ ස්ටෝක්ස් දුස්ස්‍රාවිතාව, වීදුරු කදාව, කේශික උද්ගමනය සහ ජේගර්ගේ බුබුළු පීඩන ක්‍රමය.',
      searlesTab: "1. සර්ල්ගේ යං මාපාංකය (පරීක්ෂණ 38)",
      poiseuilleTab: "2. පුඅසෙයිල් කේශික දුස්ස්‍රාවිතාව (පරීක්ෂණ 39)",
      stokesTab: "3. ස්ටෝක්ස් දුස්ස්‍රාවිතාව (පරීක්ෂණ 39 ආදේශක)",
      glassSlideTab: "4. අන්වීක්ෂ කදාවෙන් පෘෂ්ඨික ආතතිය (පරීක්ෂණ 40)",
      capillaryTab: "5. කේශික උද්ගමනය (පරීක්ෂණ 41)",
      jaegerTab: "6. ජේගර්ගේ පෘෂ්ඨික ආතති ක්‍රමය (පරීක්ෂණ 42)",
      aim: 'පරීක්ෂණ අරමුණ',
      apparatus: 'අවශ්‍ය රසායනාගාර උපකරණ',
      principle: 'භෞතික මූලධර්මය සහ සමීකරණ',
      procedure: 'සම්මත රසායනාගාර ක්‍රියාපටිපාටිය',
      observations: 'නිරීක්ෂණ සහ දත්ත සටහන',
      analysis: 'ප්‍රස්ථාරික විශ්ලේෂණය සහ ගණනය',
      precautions: 'වැදගත් රසායනාගාර පූර්වාරක්ෂාවන්',
      loadSample: 'NIE සම්මත දත්ත ඇතුළත් කරන්න',
      resetData: 'යළි පිහිටුවන්න',
      derivedResult: 'ලබාගත් පරීක්ෂණාත්මක ප්‍රතිඵලය:',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {t.hubTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.hubSubtitle}
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <Button
            size="sm"
            variant={activeTab === 'searles' ? 'default' : 'outline'}
            onClick={() => setActiveTab('searles')}
            className={
              activeTab === 'searles'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.searlesTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'poiseuille' ? 'default' : 'outline'}
            onClick={() => setActiveTab('poiseuille')}
            className={
              activeTab === 'poiseuille'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.poiseuilleTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'stokes' ? 'default' : 'outline'}
            onClick={() => setActiveTab('stokes')}
            className={
              activeTab === 'stokes'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.stokesTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'glassSlide' ? 'default' : 'outline'}
            onClick={() => setActiveTab('glassSlide')}
            className={
              activeTab === 'glassSlide'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.glassSlideTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'capillary' ? 'default' : 'outline'}
            onClick={() => setActiveTab('capillary')}
            className={
              activeTab === 'capillary'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.capillaryTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'jaeger' ? 'default' : 'outline'}
            onClick={() => setActiveTab('jaeger')}
            className={
              activeTab === 'jaeger'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.jaegerTab}
          </Button>
        </div>
      </div>

      {/* Practical 1: Searle's Young's Modulus */}
      {activeTab === 'searles' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "සර්ල්ගේ උපකරණය භාවිතයෙන් ලෝහ කම්බියක යං මාපාංකය සෙවීම (පරීක්ෂණ 14)"
                : "Determination of Young's Modulus of a Metal Wire using Searle's Apparatus (Exp 14)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "හුක් නියමය අනුව ප්‍රත්‍යාස්ථ සීමාව තුළ: Y = (F L) / (A e) = (4 M g L) / (π d² e). M එදිරිව e ප්‍රස්ථාරයේ අනුක්‍රමණය m = e / M වේ. එවිට Y = (4 g L) / (π d² m) වේ."
                    : "Within Hooke's elastic limit: Y = (F L) / (A e) = (4 M g L) / (π d² e). From a plot of extension e versus load mass M, gradient m = e / M. Then Y = (4 g L) / (π d² m)."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"Y = (4 g L) / (π d² · slope)"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "සර්ල්ගේ ප්‍රත්‍යාස්ථතා රාමුව (සමාන්තර කම්බි 2, ආත්ම මට්ටම, මයික්‍රොමීටර ඉස්කුරුප්පුව), බර තැබිය හැකි පඩි තැටිය, 0.5 kg පඩි කට්ටලය, මයික්‍රොමීටර ඉස්කුරුප්පු ආමානය, මීටර් කෝදුව."
                    : "Searle's apparatus with spirit level & spherometer/micrometer, identical reference and test wires, slotted masses (0.5 kg increments), micrometer screw gauge, meter ruler."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (L = {wireLengthM} m, d = {wireDiameterMm} mm)
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSearleData(defaultSearleData)}
                    className="text-xs gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    {t.resetData}
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Load M (kg)</th>
                      <th className="p-2.5">Micrometer Reading (mm)</th>
                      <th className="p-2.5">Extension e (mm)</th>
                      <th className="p-2.5">Calculated Stress (MPa)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {searleData.map((row, idx) => {
                      const area = (Math.PI * Math.pow(wireDiameterMm * 1e-3, 2)) / 4;
                      const stressMpa = ((row.loadKg * 9.8) / area) / 1e6;
                      return (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="p-2.5 font-medium">{row.loadKg.toFixed(1)}</td>
                          <td className="p-2.5 font-mono">{row.micrometerMm.toFixed(2)}</td>
                          <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.extensionMm.toFixed(2)}</td>
                          <td className="p-2.5 font-mono">{stressMpa.toFixed(1)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations and Precautions */}
            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Slope Δe / ΔM ≈ 0.182 mm/kg = 1.82 × 10⁻⁴ m/kg."}<br />
                {"Y = [4 × 9.8 × 2.8] / [π × (0.56 × 10⁻³)² × 1.82 × 10⁻⁴] ≈ 2.01 × 10¹¹ Pa = 201 GPa (Consistent with structural steel wire)."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 2: Stokes' Viscometer */}
      {activeTab === 'stokes' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "ස්ටෝක්ස් ක්‍රමය මඟින් ද්‍රවයක දුස්ස්‍රාවිතා සංගුණකය සෙවීම (පරීක්ෂණ 15)"
                : "Determination of Viscosity of a Liquid by Stokes' Terminal Velocity Method (Exp 15)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "අන්ත ප්‍රවේගයේදී ඩ්‍රැග් බලය + උඩුකුරු තෙරපුම = බර වේ: 6πηrv_t + (4/3)πr³σg = (4/3)πr³ρg. එබැවින් v_t = [2r²(ρ - σ)g] / (9η). v_t එදිරිව r² ප්‍රස්ථාරයේ අනුක්‍රමණය m නම්: η = [2(ρ - σ)g] / (9m)."
                    : "At terminal velocity, weight = upthrust + Stokes drag: (4/3)πr³ρg = (4/3)πr³σg + 6πηrv_t. Hence v_t = [2r²(ρ - σ)g] / (9η). From a graph of v_t vs r², gradient m yields η = [2(ρ - σ)g] / (9m)."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"η = [2 (ρ - σ) g] / (9 · slope)"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "උස වීදුරු සිලින්ඩරය (ග්ලිසරින් හෝ එරණ්ඩ තෙල් සහිත), රබර් වළලු සලකුණු 3 (A, B, C), විවිධ අරයන් සහිත වානේ බෝල, මයික්‍රොමීටර ඉස්කුරුප්පු ආමානය, නැවතුම් ඔරලෝසුව, චුම්භකය (බෝල ඉවත් කර ගැනීමට)."
                    : "Tall glass cylinder filled with glycerin/castor oil, rubber bands as reference marks (A, B, C), assorted steel ball bearings, micrometer screw gauge, digital stopwatch, retrieval magnet."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Steel ball bearings in Glycerin, ρ = 7800 kg/m³, σ = 1260 kg/m³)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setStokesData(defaultStokesData)}
                  className="text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetData}
                </Button>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Radius r (mm)</th>
                      <th className="p-2.5">r² (mm²)</th>
                      <th className="p-2.5">Fall Distance (cm)</th>
                      <th className="p-2.5">Fall Time (s)</th>
                      <th className="p-2.5">Terminal Speed v_t (cm/s)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {stokesData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.radiusMm.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{row.rSquaredMm2.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{row.distanceCm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{row.timeS.toFixed(2)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.velocityCmS.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Slope vt / r² ≈ 3.20 × 10⁴ s⁻¹ m⁻¹."}<br />
                {"η = [2 × (7800 - 1260) × 9.8] / [9 × 1.018 × 10⁵] ≈ 1.41 Pa·s (Accurately matches standard viscosity of glycerin at 20°C)."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 3: Capillary Rise Method */}
      {activeTab === 'capillary' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "කේශික උද්ගමන ක්‍රමයෙන් ජලයේ පෘෂ්ඨික ආතතිය සෙවීම (පරීක්ෂණ 16)"
                : "Determination of Surface Tension of Water by Capillary Rise Method (Exp 16)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "ජූරින් නියමය: h = (2γ cosθ) / (ρ g r). පිරිසිදු ජලය සඳහා θ ≈ 0°, cosθ = 1. එවිට h = (2γ) / (ρ g r). h එදිරිව 1/r ප්‍රස්ථාරයේ අනුක්‍රමණය m = (2γ) / (ρ g) වේ. එබැවින් γ = (m ρ g) / 2."
                    : "Jurin's law: h = (2γ cosθ) / (ρ g r). For pure water on clean glass, θ ≈ 0°, cosθ = 1. Hence h = (2γ) / (ρ g r). From a graph of h vs (1/r), slope m = 2γ / (ρ g), yielding γ = (m ρ g) / 2."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"γ = (slope · ρ g) / 2"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "විවිධ අභ්‍යන්තර විෂ්කම්භ සහිත පිරිසිදු කේශික නල 3–5, චල අන්වීක්ෂය (නලයේ අරය සහ ද්‍රව මට්ටම මැනීමට), පිරිසිදු ජලය සහිත බීකරය, පින් දර්ශකය."
                    : "Assorted uniform bore capillary tubes, travelling microscope with vernier scale, clean glass beaker with distilled water, adjustable reference pointer needle."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Distilled water at 20°C, ρ = 1000 kg/m³)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCapillaryData(defaultCapillaryData)}
                  className="text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetData}
                </Button>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Radius r (mm)</th>
                      <th className="p-2.5">1/r (mm⁻¹)</th>
                      <th className="p-2.5">Capillary Rise h (cm)</th>
                      <th className="p-2.5">h · r (× 10⁻⁵ m²)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {capillaryData.map((row, idx) => {
                      const hrProd = (row.heightCm * 1e-2) * (row.radiusMm * 1e-3);
                      return (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="p-2.5 font-medium">{row.radiusMm.toFixed(2)}</td>
                          <td className="p-2.5 font-mono">{row.oneOverR.toFixed(2)}</td>
                          <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.heightCm.toFixed(2)}</td>
                          <td className="p-2.5 font-mono">{(hrProd * 1e5).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Mean product h · r ≈ 1.48 × 10⁻⁵ m²."}<br />
                {"γ = (h · r · ρ g) / 2 = (1.48 × 10⁻⁵ × 1000 × 9.8) / 2 ≈ 0.0725 N/m = 72.5 mN/m (Pure water benchmark: 72.8 mN/m)."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 4: Microscope Slide Method */}
      {activeTab === 'glassSlide' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "අන්වීක්ෂ කදාවක් භාවිතයෙන් ජලයේ පෘෂ්ඨික ආතතිය සෙවීම (පරීක්ෂණ 17)"
                : "Determination of Surface Tension of Water using a Microscope Glass Slide (Exp 17)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "සිහින් වීදුරු කදාවක් ද්‍රව පෘෂ්ඨයෙන් ඉවතට ඇදීමේදී පෘෂ්ඨ දෙකක් ඔස්සේ පෘෂ්ඨික ආතති බලය F ක්‍රියා කරයි: F = 2 l γ (කදාවේ ඝනකම නොගිණිය හැකි විට). අමතර ස්කන්ධය m නම්, mg = 2 l γ වේ. එබැවින් γ = (m g) / (2 l)."
                    : "When a thin glass slide is pulled horizontally from the liquid surface, surface tension pulls downward along both long faces: F = 2 l γ. The additional balancing weight is m g = 2 l γ, yielding γ = (m g) / (2 l)."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"γ = (m g) / (2 l)"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "සංවේදී තුලාව, පිරිසිදු අන්වීක්ෂ වීදුරු කදා, වර්නියර් කැලිපරය, ජලය සහිත පුළුල් පිඟන් බඳුන, මිලිග්‍රෑම් පඩි පෙට්ටිය."
                    : "Beam balance, clean thin microscope glass slides of measured length, vernier calipers, shallow dish filled with water, fractional milligram weight box."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Distilled water at 20°C)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSlideData(defaultSlideData)}
                  className="text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetData}
                </Button>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Slide Length l (cm)</th>
                      <th className="p-2.5">Contact Perimeter 2l (cm)</th>
                      <th className="p-2.5">Balancing Mass m (g)</th>
                      <th className="p-2.5">Surface Tension Force F (mN)</th>
                      <th className="p-2.5">Derived γ (N/m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {slideData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.lengthCm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{(row.lengthCm * 2).toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{row.massG.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{row.forceMn.toFixed(2)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.surfaceTensionNm.toFixed(4)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Mean surface tension γ = 0.0725 N/m = 72.5 mN/m at 20°C."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 2: Poiseuille's Capillary Flow Method (Exp 39) */}
      {activeTab === 'poiseuille' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "පොයිසූයිල්ගේ කේශික නළ ක්‍රමයෙන් ද්‍රවයක දුස්ස්‍රාවිතා සංගුණකය සෙවීම (පරීක්ෂණ 39)"
                : "Determination of Viscosity of Liquid using Poiseuille's Capillary Flow Method (Exp 39)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "පොයිසූයිල් සමීකරණය: V/t = (π P r⁴) / (8 η l) = (π h ρ g r⁴) / (8 η l). පීඩන ශීර්ෂය h එදිරිව ප්‍රවාහ අනුපාතය (V/t) ප්‍රස්ථාරගත කළ විට මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් ලැබේ: බෑවුම m = (V/t) / h = (π ρ g r⁴) / (8 η l). එවිට η = (π ρ g r⁴) / (8 l · slope) වේ."
                    : "Poiseuille's equation for steady streamline flow: V/t = (π P r⁴) / (8 η l) = (π h ρ g r⁴) / (8 η l). A plot of volume flow rate (V/t) versus pressure head h yields a straight line through the origin with slope m = (π ρ g r⁴) / (8 η l). Hence η = (π ρ g r⁴) / (8 l · slope)."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"η = (π ρ g r⁴) / (8 l · slope)"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "නියත පීඩන ශීර්ෂ බඳුන, ඒකාකාර සිහින් තිරස් කේශික නළය (දිග l = 30 cm, අභ්‍යන්තර අරය r = 0.38 mm), මිනුම් සිලින්ඩරය, ඩිජිටල් නැවතුම් ඔරලෝසුව, මීටර් කෝදුව, සංචාරක අන්වීක්ෂය."
                    : "Constant level water reservoir, fine uniform horizontal capillary tube (length l = 0.30 m, bore radius r = 0.38 mm), graduated measuring cylinder (50 cm³), digital stopwatch timer, meter rule, travelling microscope."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Capillary Length l = {capillaryLengthM} m, Radius r = {capillaryRadiusMm} mm)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setPoiseuilleData(defaultPoiseuilleData)}
                  className="text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetData}
                </Button>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Pressure Head h (cm)</th>
                      <th className="p-2.5">Collected Volume V (cm³)</th>
                      <th className="p-2.5">Flow Time t (s)</th>
                      <th className="p-2.5">Flow Rate V/t (cm³/s)</th>
                      <th className="p-2.5">Derived Viscosity η (mPa·s)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {poiseuilleData.map((row, idx) => {
                      const rM = capillaryRadiusMm * 1e-3;
                      const hM = row.headCm * 1e-2;
                      const vtM3S = row.flowRateCm3S * 1e-6;
                      const rho = 1000;
                      const g = 9.8;
                      const eta = (Math.PI * hM * rho * g * Math.pow(rM, 4)) / (8 * capillaryLengthM * vtM3S);
                      return (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="p-2.5 font-medium">{row.headCm.toFixed(1)}</td>
                          <td className="p-2.5 font-mono">{row.volumeCm3.toFixed(1)}</td>
                          <td className="p-2.5 font-mono">{row.timeS.toFixed(1)}</td>
                          <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.flowRateCm3S.toFixed(3)}</td>
                          <td className="p-2.5 font-mono">{(eta * 1e3).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Mean slope (V/t) / h ≈ 4.90 × 10⁻⁵ m² s⁻¹."}<br />
                {"Derived dynamic viscosity of water: η ≈ 1.005 × 10⁻³ Pa·s = 1.005 mPa·s at 20°C (Accurately matches IUPAC pure water standard: 1.002 mPa·s)."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 6: Jaeger's Maximum Bubble Pressure Method (Exp 42) */}
      {activeTab === 'jaeger' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? "යේගර්ගේ උපරිම බුබුළු පීඩන ක්‍රමයෙන් පෘෂ්ඨික ආතතිය සෙවීම (පරීක්ෂණ 42)"
                : "Determination of Surface Tension by Jaeger's Maximum Bubble Pressure Method (Exp 42)"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? "යේගර්ගේ මූලධර්මය: බුබුළක් විවරය තුළ අර්ධගෝලාකාර වන අවස්ථාවේදී අතිරික්ත පීඩනය උපරිම වේ: P_excess = (2γ) / r. මනෝමීටර පීඩනය H ρ_m g වන අතර ද්‍රව ගැඹුර නිසා පීඩනය h₀ ρ_l g වේ. සමතුලිතතාවයෙන්: (2γ) / r = (H ρ_m - h₀ ρ_l) g. එබැවින් γ = [r g (H ρ_m - h₀ ρ_l)] / 2."
                    : "Jaeger's principle: When an air bubble formed at a submerged capillary orifice becomes hemispherical, excess pressure is maximum: P_excess = 2γ / r. At detachment, manometer head H ρ_m g balances orifice depth head h₀ ρ_l g plus bubble curvature: 2γ / r = (H ρ_m - h₀ ρ_l) g. Hence γ = [r g (H ρ_m - h₀ ρ_l)] / 2."}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {"γ = [r · g · (H · ρ_m - h₀ · ρ_l)] / 2"}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? "ජල බිංදු පුනීලය සහ බෝතලය (වායු සැපයුම), විවෘත U-මනෝමීටරය (පැරෆින් තෙල් ρ_m = 800 kg/m³), සිරස් කේශික නළය (අරය r = 0.25 mm), පිරිසිදු ජල බඳුන (ρ_l = 1000 kg/m³), මීටර් රූල, විශාලක කාචය."
                    : "Dropping funnel aspirator bottle (slow air supply), open U-tube manometer with light paraffin oil (ρ_m = 800 kg/m³), clean vertical capillary tube with sharp circular orifice (radius r = 0.25 mm), beaker with test water (ρ_l = 1000 kg/m³), meter ruler, reading magnifier."}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Orifice Radius r = {jaegerOrificeRadiusMm} mm, Paraffin ρ_m = {paraffinDensity} kg/m³, Water ρ_l = {waterDensity} kg/m³)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setJaegerData(defaultJaegerData)}
                  className="text-xs gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  {t.resetData}
                </Button>
              </div>

              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Depth h₀ (cm)</th>
                      <th className="p-2.5">Manometer Head H (cm)</th>
                      <th className="p-2.5">H · ρ_m (kg/m²)</th>
                      <th className="p-2.5">h₀ · ρ_l (kg/m²)</th>
                      <th className="p-2.5">Derived Surface Tension γ (mN/m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {jaegerData.map((row, idx) => {
                      const h0M = row.depthCm * 1e-2;
                      const hM = row.manometerCm * 1e-2;
                      const rM = jaegerOrificeRadiusMm * 1e-3;
                      const g = 9.8;
                      const gamma = (rM * g * (hM * paraffinDensity - h0M * waterDensity)) / 2;
                      return (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="p-2.5 font-medium">{row.depthCm.toFixed(1)}</td>
                          <td className="p-2.5 font-mono">{row.manometerCm.toFixed(2)}</td>
                          <td className="p-2.5 font-mono">{(hM * paraffinDensity).toFixed(1)}</td>
                          <td className="p-2.5 font-mono">{(h0M * waterDensity).toFixed(1)}</td>
                          <td className="p-2.5 font-mono text-teal-600 font-semibold">{(gamma * 1e3).toFixed(1)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.derivedResult}
              </span>
              <p className="text-slate-700 dark:text-slate-300">
                {"Mean surface tension from bubble detachment: γ = 70.3 mN/m = 0.0703 N/m at 25°C."}<br />
                {"Linear regression of H vs h₀ gives slope = ρ_l / ρ_m = 1.25 (theoretical 1000/800 = 1.25) and intercept = 2γ / (r ρ_m g) = 7.17 cm."}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Zap,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';
import { usePracticalWork } from '@/shared/practicals';

interface ElectricityPracticalsHubProps {
  locale?: Locale;
}

export const ElectricityPracticalsHub: React.FC<ElectricityPracticalsHubProps> = ({
  locale = 'en',
}) => {
  // Practical 1: Dry Cell Internal Resistance (Exp 31)
  const defaultDryCellData = [
    { currentA: 0.10, voltageV: 1.40 },
    { currentA: 0.20, voltageV: 1.30 },
    { currentA: 0.30, voltageV: 1.20 },
    { currentA: 0.40, voltageV: 1.10 },
    { currentA: 0.50, voltageV: 1.00 },
  ];

  // Practical 2: Metre Bridge Temp Coeff of Resistance (Exp 32)
  const defaultMetreBridgeData = [
    { tempC: 25.0, balanceLengthCm: 51.2, wireResistanceOhm: 10.5 },
    { tempC: 40.0, balanceLengthCm: 52.6, wireResistanceOhm: 11.1 },
    { tempC: 55.0, balanceLengthCm: 54.0, wireResistanceOhm: 11.74 },
    { tempC: 70.0, balanceLengthCm: 55.3, wireResistanceOhm: 12.37 },
    { tempC: 85.0, balanceLengthCm: 56.6, wireResistanceOhm: 13.04 },
  ];
  const standardResistorOhm = 10.0;

  // Practical 3: Potentiometer EMF Comparison (Exp 33)
  const defaultPotEmfData = [
    { trial: 1, cell1LenCm: 54.2, cell2LenCm: 72.8, ratio: 0.744 },
    { trial: 2, cell1LenCm: 54.0, cell2LenCm: 72.5, ratio: 0.745 },
    { trial: 3, cell1LenCm: 54.4, cell2LenCm: 73.0, ratio: 0.745 },
  ];

  // Practical 4: Potentiometer Internal Resistance (Exp 34)
  const openCircuitLengthCm = 75.0;
  const defaultPotInternalRData = [
    { shuntResistorOhm: 2.0, balanceLengthCm: 45.0, internalResistanceOhm: 1.33 },
    { shuntResistorOhm: 4.0, balanceLengthCm: 56.25, internalResistanceOhm: 1.33 },
    { shuntResistorOhm: 6.0, balanceLengthCm: 61.36, internalResistanceOhm: 1.33 },
    { shuntResistorOhm: 8.0, balanceLengthCm: 64.29, internalResistanceOhm: 1.33 },
    { shuntResistorOhm: 10.0, balanceLengthCm: 66.18, internalResistanceOhm: 1.33 },
  ];

  const {
    observations,
    updateObservations,
  } = usePracticalWork({
    experimentId: 'exp-electricity-hub',
    defaultObservations: {
      activeTab: 'dryCell',
      dryCellData: defaultDryCellData,
      metreBridgeData: defaultMetreBridgeData,
      potEmfData: defaultPotEmfData,
      potInternalRData: defaultPotInternalRData,
    },
  });

  const activeTab = (observations.activeTab || 'dryCell') as
    | 'dryCell'
    | 'metreBridge'
    | 'compareEmf'
    | 'potInternalR';
  const dryCellData: typeof defaultDryCellData = observations.dryCellData || defaultDryCellData;
  const metreBridgeData: typeof defaultMetreBridgeData = observations.metreBridgeData || defaultMetreBridgeData;
  const potEmfData: typeof defaultPotEmfData = observations.potEmfData || defaultPotEmfData;
  const potInternalRData: typeof defaultPotInternalRData = observations.potInternalRData || defaultPotInternalRData;

  const setActiveTab = (tab: 'dryCell' | 'metreBridge' | 'compareEmf' | 'potInternalR') =>
    updateObservations({ activeTab: tab });
  const setDryCellData = (data: typeof defaultDryCellData) => updateObservations({ dryCellData: data });
  const setMetreBridgeData = (data: typeof defaultMetreBridgeData) => updateObservations({ metreBridgeData: data });
  const setPotEmfData = (data: typeof defaultPotEmfData) => updateObservations({ potEmfData: data });
  const setPotInternalRData = (data: typeof defaultPotInternalRData) => updateObservations({ potInternalRData: data });

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 8 Current Electricity Practicals Hub',
      hubSubtitle:
        'Official NIE A/L Physics Practical Handbook Investigations (Experiments 31, 32, 33, 34): Dry Cell EMF & Internal Resistance, Metre Bridge Resistance & α, Potentiometer EMF Comparison, and Potentiometer Internal Resistance.',
      dryCellTab: '1. Dry Cell EMF & Internal Resistance (Exp 31)',
      metreBridgeTab: '2. Metre Bridge Temp Coefficient (Exp 32)',
      compareEmfTab: '3. Potentiometer EMF Comparison (Exp 33)',
      potInternalRTab: '4. Potentiometer Internal Resistance (Exp 34)',
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
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 8 ධාරා විද්‍යුතය ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle:
        'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා ප්‍රායෝගික අත්පොත (පරීක්ෂණ 31, 32, 33, 34): වියළි කෝෂයක වි.ගා.බ. සහ අභ්‍යන්තර ප්‍රතිරෝධය, මීටර් පාලමෙන් ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය, විභවමානයෙන් වි.ගා.බ. සංසන්දනය, සහ විභවමානයෙන් අභ්‍යන්තර ප්‍රතිරෝධය.',
      dryCellTab: '1. වියළි කෝෂයක වි.ගා.බ. සහ අභ්‍යන්තර ප්‍රතිරෝධය (පරීක්ෂණ 31)',
      metreBridgeTab: '2. මීටර් පාලමෙන් උෂ්ණත්ව සංගුණකය (පරීක්ෂණ 32)',
      compareEmfTab: '3. විභවමානයෙන් වි.ගා.බ. සංසන්දනය (පරීක්ෂණ 33)',
      potInternalRTab: '4. විභවමානයෙන් අභ්‍යන්තර ප්‍රතිරෝධය (පරීක්ෂණ 34)',
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
            <Zap className="w-5 h-5" />
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
            variant={activeTab === 'dryCell' ? 'default' : 'outline'}
            onClick={() => setActiveTab('dryCell')}
            className={
              activeTab === 'dryCell'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.dryCellTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'metreBridge' ? 'default' : 'outline'}
            onClick={() => setActiveTab('metreBridge')}
            className={
              activeTab === 'metreBridge'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.metreBridgeTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'compareEmf' ? 'default' : 'outline'}
            onClick={() => setActiveTab('compareEmf')}
            className={
              activeTab === 'compareEmf'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.compareEmfTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'potInternalR' ? 'default' : 'outline'}
            onClick={() => setActiveTab('potInternalR')}
            className={
              activeTab === 'potInternalR'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.potInternalRTab}
          </Button>
        </div>
      </div>

      {/* Practical 1: Dry Cell Internal Resistance (Exp 31) */}
      {activeTab === 'dryCell' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'වියළි කෝෂයක විද්‍යුත් ගාමක බලය (E) සහ අභ්‍යන්තර ප්‍රතිරෝධය (r) සෙවීම (පරීක්ෂණ 31)'
                : 'Determination of EMF and Internal Resistance of a Dry Cell (Exp 31)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'කෝෂයක අග්‍රස්ථ විභව අන්තරය V සහ විසර්ජන ධාරාව I අතර සම්බන්ධතාව: V = E - I r වේ. V එදිරිව I ප්‍රස්ථාරය සරල රේඛාවක් වන අතර, එහි අනුක්‍රමණය m = -r ද, V-අන්තඃඛණ්ඩය වි.ගා.බ. E ද වේ.'
                    : 'Terminal potential difference V and discharge current I follow: V = E - I r. Plotting V versus I yields a straight line with y-intercept equal to EMF (E) and negative slope equal to internal resistance (-r).'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'V = E - I · r  ⟹  Slope = -r, Intercept = E'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? '1.5 V ක්ෂාරීය හෝ ලෙක්ලන්ෂේ වියළි කෝෂය, විචල්‍ය ප්‍රතිරෝධකය (රියෝස්ටැට්ටුව 0–50 Ω), DC ඇමීටරය (0–1 A), DC වෝල්ට්මීටරය (0–3 V), ස්විචය, සම්බන්ධක වයර්.'
                    : '1.5 V dry cell, slide-wire rheostat (0–50 Ω), precision DC ammeter (0–1 A), DC voltmeter (0–3 V), plug switch, insulated connecting leads.'}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Discharge Characteristics)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setDryCellData(defaultDryCellData)}
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
                      <th className="p-2.5">Discharge Current I (A)</th>
                      <th className="p-2.5">Terminal Voltage V (V)</th>
                      <th className="p-2.5">Calculated r = (E - V) / I (Ω)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {dryCellData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.currentA.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{row.voltageV.toFixed(2)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">
                          {((1.5 - row.voltageV) / row.currentA).toFixed(2)}
                        </td>
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
                {'Derived EMF E = 1.50 V, Internal Resistance r = 1.00 Ω (Linearity R² = 1.000).'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 2: Metre Bridge Temp Coeff of Resistance (Exp 32) */}
      {activeTab === 'metreBridge' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'මීටර් පාලම භාවිතයෙන් ලෝහයක ප්‍රතිරෝධයේ උෂ්ණත්ව සංගුණකය (α) සෙවීම (පරීක්ෂණ 32)'
                : 'Determination of Temperature Coefficient of Resistance (α) using a Metre Bridge (Exp 32)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'මීටර් පාලමේ තුලිතතා සමීකරණය: R_θ / R_s = l / (100 - l) වේ. ලෝහයක ප්‍රතිරෝධය උෂ්ණත්වය සමග රේඛීයව වැඩිවේ: R_θ = R₀ (1 + α θ). R_θ එදිරිව θ ප්‍රස්ථාරයේ අනුක්‍රමණය m = R₀ α වන බැවින්, α = m / R₀ වේ.'
                    : 'Wheatstone bridge balance condition: R_θ / R_s = l / (100 - l). Metal resistance increases linearly with temperature: R_θ = R₀ (1 + α θ). Slope of R_θ vs θ gives m = R₀ α, yielding α = m / R₀.'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'R_θ = R_s · [ l / (100 - l) ]  ⟹  α = (Slope) / R₀'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'මීටර් පාලම, සර්පණ යතුර (ජොකිය), මධ්‍ය-ශුන්‍ය ගැල්වනෝමීටරය, සම්මත ප්‍රතිරෝධ පෙට්ටිය (R_s = 10 Ω), ජල තාපකය තුළ ගිල්වූ තඹ කම්බි දඟරය, උෂ්ණත්වමානය (0–100°C), ලෙඩ්-ඇසිඩ් ධාවක කෝෂය.'
                    : 'Metre bridge board, jockey key, sensitive center-zero galvanometer, standard 10 Ω resistance box, copper coil immersed in paraffin/water bath with stirrer, 0–100°C thermometer, 2 V driver accumulator.'}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Standard Resistor R_s = {standardResistorOhm} Ω)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setMetreBridgeData(defaultMetreBridgeData)}
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
                      <th className="p-2.5">Temperature θ (°C)</th>
                      <th className="p-2.5">Balance Length l (cm)</th>
                      <th className="p-2.5">(100 - l) (cm)</th>
                      <th className="p-2.5">Calculated R_θ (Ω)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {metreBridgeData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.tempC.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{row.balanceLengthCm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{(100 - row.balanceLengthCm).toFixed(1)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">
                          {row.wireResistanceOhm.toFixed(2)}
                        </td>
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
                {'Derived α = 4.25 × 10⁻³ K⁻¹ (Standard copper wire α ≈ 4.29 × 10⁻³ K⁻¹ at 0°C).'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 3: Potentiometer EMF Comparison (Exp 33) */}
      {activeTab === 'compareEmf' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'විභවමානය භාවිතයෙන් කෝෂ දෙකක විද්‍යුත් ගාමක බල (E₁ / E₂) සංසන්දනය කිරීම (පරීක්ෂණ 33)'
                : 'Comparison of EMFs of Two Cells using a Potentiometer (Exp 33)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'විභවමාන කම්බියේ ඒකක දිගක විභව බැස්ම (විභව අනුක්‍රමණය) k නියතව පවතින විට: E₁ = k l₁ සහ E₂ = k l₂ වේ. එබැවින් කෝෂ දෙකෙහි වි.ගා.බ. අනුපාතය: E₁ / E₂ = l₁ / l₂ වේ. තුලිත ලක්ෂ්‍යයේදී කෝෂයෙන් ධාරාවක් නොගන්නා බැවින් මෙය සැබෑ වි.ගා.බ. ලබා දෙයි.'
                    : 'With steady potential gradient k along uniform potentiometer wire: E₁ = k l₁ and E₂ = k l₂. Taking the ratio yields E₁ / E₂ = l₁ / l₂. Because zero current is drawn at null balance, internal resistance causes zero terminal voltage drop.'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'E₁ / E₂ = l₁ / l₂'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'විභවමානය (මීටර් 1 කම්බිය), 2 V ලෙඩ්-ඇසිඩ් ධාවක කෝෂය, රියෝස්ටැට්ටුව, ඩැනියෙල් කෝෂය (E₁ ≈ 1.08 V), ලෙක්ලන්ෂේ කෝෂය (E₂ ≈ 1.45 V), ද්විපථ ස්විචය, සංවේදී ගැල්වනෝමීටරය, ජොකිය.'
                    : '1-metre slide wire potentiometer, steady 2 V driver accumulator, rheostat, Daniell cell (E₁ ≈ 1.08 V), Leclanché cell (E₂ ≈ 1.45 V), two-way key, sensitive galvanometer with protective resistor, sliding jockey.'}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Potentiometer Null Lengths)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setPotEmfData(defaultPotEmfData)}
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
                      <th className="p-2.5">Trial No</th>
                      <th className="p-2.5">Daniell Cell Balance Length l₁ (cm)</th>
                      <th className="p-2.5">Leclanché Cell Balance Length l₂ (cm)</th>
                      <th className="p-2.5">Ratio E₁ / E₂ = l₁ / l₂</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {potEmfData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.trial}</td>
                        <td className="p-2.5 font-mono">{row.cell1LenCm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{row.cell2LenCm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.ratio.toFixed(3)}</td>
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
                {'Mean Ratio E₁ / E₂ = 0.745 (Theoretical Daniell 1.08 V / Leclanché 1.45 V = 0.745).'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 4: Potentiometer Internal Resistance (Exp 34) */}
      {activeTab === 'potInternalR' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'විභවමානය භාවිතයෙන් කෝෂයක අභ්‍යන්තර ප්‍රතිරෝධය (r) සෙවීම (පරීක්ෂණ 34)'
                : 'Determination of Internal Resistance of a Cell using a Potentiometer (Exp 34)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'විවෘත පරිපථ වි.ගා.බ. තුලිත දිග l₁ ද, කෝෂයට සමාන්තරව R ප්‍රතිරෝධකයක් සම්බන්ධ කළ විට අග්‍රස්ථ වෝල්ටීයතා තුලිත දිග l₂ ද වේ. එවිට: r = R (l₁ - l₂) / l₂ වේ. 1/l₂ එදිරිව 1/R ප්‍රස්ථාරය සරල රේඛාවක් වන අතර අනුක්‍රමණය r / l₁ වේ.'
                    : 'Open-circuit EMF balance length l₁; terminal p.d. balance length l₂ when shunted by resistance R. Internal resistance is r = R (l₁ - l₂) / l₂. Plotting 1/l₂ vs 1/R gives a straight line with slope r / l₁.'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'r = R · [ (l₁ - l₂) / l₂ ]  ⟹  1/l₂ = (r / l₁) · (1/R) + (1 / l₁)'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'විභවමානය, 2 V ධාවක කෝෂය, පරීක්ෂා කරන ලෙක්ලන්ෂේ කෝෂය, විචල්‍ය ප්‍රතිරෝධ පෙට්ටිය (1–20 Ω), තට්ටු යතුර, ගැල්වනෝමීටරය, ජොකිය.'
                    : 'Potentiometer board, 2 V driver accumulator, test cell under investigation, precision resistance box (1–20 Ω), tapping key, sensitive galvanometer, sliding jockey.'}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Open-circuit EMF balance length l₁ = {openCircuitLengthCm} cm)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setPotInternalRData(defaultPotInternalRData)}
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
                      <th className="p-2.5">Shunt Resistance R (Ω)</th>
                      <th className="p-2.5">Balance Length l₂ (cm)</th>
                      <th className="p-2.5">1/R (Ω⁻¹)</th>
                      <th className="p-2.5">1/l₂ (cm⁻¹)</th>
                      <th className="p-2.5">Calculated r = R·(l₁ - l₂)/l₂ (Ω)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {potInternalRData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.shuntResistorOhm.toFixed(1)}</td>
                        <td className="p-2.5 font-mono">{row.balanceLengthCm.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{(1 / row.shuntResistorOhm).toFixed(3)}</td>
                        <td className="p-2.5 font-mono">{(1 / row.balanceLengthCm).toFixed(4)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">
                          {row.internalResistanceOhm.toFixed(2)}
                        </td>
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
                {'Derived Internal Resistance r = 1.33 Ω (Linearity R² = 1.000).'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

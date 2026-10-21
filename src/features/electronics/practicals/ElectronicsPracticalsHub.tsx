'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Cpu,
  RotateCcw,
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
  LineChart,
  Sliders,
  Plus,
} from 'lucide-react';
import { usePracticalWork } from '@/shared/practicals';

interface ElectronicsPracticalsHubProps {
  locale?: Locale;
}

export const ElectronicsPracticalsHub: React.FC<ElectronicsPracticalsHubProps> = ({
  locale = 'en',
}) => {
  // Practical 1: Diode Characteristics (Exp 35)
  const defaultDiodeData = [
    { voltageV: 0.20, currentMa: 0.0, dynamicResOhm: 9999 },
    { voltageV: 0.40, currentMa: 0.05, dynamicResOhm: 4000 },
    { voltageV: 0.60, currentMa: 0.50, dynamicResOhm: 400 },
    { voltageV: 0.65, currentMa: 2.20, dynamicResOhm: 29.4 },
    { voltageV: 0.70, currentMa: 8.50, dynamicResOhm: 7.9 },
    { voltageV: 0.75, currentMa: 25.0, dynamicResOhm: 3.0 },
    { voltageV: 0.80, currentMa: 60.0, dynamicResOhm: 1.4 },
  ];

  // Practical 2: CE Transistor Characteristics (Exp 36)
  const defaultTransistorData = [
    { baseCurrentUa: 10, collectorCurrentMa: 1.20, beta: 120 },
    { baseCurrentUa: 20, collectorCurrentMa: 2.45, beta: 122 },
    { baseCurrentUa: 30, collectorCurrentMa: 3.65, beta: 121 },
    { baseCurrentUa: 40, collectorCurrentMa: 4.88, beta: 122 },
    { baseCurrentUa: 50, collectorCurrentMa: 6.05, beta: 121 },
  ];

  const {
    observations,
    updateObservations,
  } = usePracticalWork({
    experimentId: 'exp-electronics-hub',
    defaultObservations: {
      activeTab: 'diode',
      diodeData: defaultDiodeData,
      transistorData: defaultTransistorData,
      transistorMode: 'transfer',
      probeIb: 25,
      logicInputs: { a: 0, b: 0 },
      gateType: 'NAND',
    },
  });

  const activeTab = (observations.activeTab || 'diode') as 'diode' | 'transistor' | 'logicGates';
  const diodeData: typeof defaultDiodeData = observations.diodeData || defaultDiodeData;
  const transistorData: typeof defaultTransistorData = observations.transistorData || defaultTransistorData;
  const transistorMode = (observations.transistorMode || 'transfer') as 'transfer' | 'output';
  const probeIb: number = observations.probeIb !== undefined ? observations.probeIb : 25;
  const logicInputs: { a: number; b: number } = observations.logicInputs || { a: 0, b: 0 };
  const gateType = (observations.gateType || 'NAND') as 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR';

  const setActiveTab = (tab: 'diode' | 'transistor' | 'logicGates') => updateObservations({ activeTab: tab });
  const setDiodeData = (data: typeof defaultDiodeData) => updateObservations({ diodeData: data });
  const setTransistorData = (data: typeof defaultTransistorData | ((prev: typeof defaultTransistorData) => typeof defaultTransistorData)) => {
    const next = typeof data === 'function' ? data(transistorData) : data;
    updateObservations({ transistorData: next });
  };
  const setTransistorMode = (m: 'transfer' | 'output') => updateObservations({ transistorMode: m });
  const setProbeIb = (ib: number) => updateObservations({ probeIb: ib });
  const setLogicInputs = (inputs: { a: number; b: number } | ((prev: { a: number; b: number }) => { a: number; b: number })) => {
    const next = typeof inputs === 'function' ? inputs(logicInputs) : inputs;
    updateObservations({ logicInputs: next });
  };
  const setGateType = (gt: 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR') => updateObservations({ gateType: gt });

  const computeGateOutput = (a: number, b: number, type: string): number => {
    switch (type) {
      case 'AND': return a & b;
      case 'OR': return a | b;
      case 'NAND': return (a & b) ? 0 : 1;
      case 'NOR': return (a | b) ? 0 : 1;
      case 'XOR': return a ^ b;
      default: return 0;
    }
  };

  // Linear regression for Exp 36 Transfer Characteristic
  const nPts = transistorData.length;
  const sX = transistorData.reduce((acc, d) => acc + d.baseCurrentUa, 0);
  const sY = transistorData.reduce((acc, d) => acc + d.collectorCurrentMa, 0);
  const sXY = transistorData.reduce((acc, d) => acc + d.baseCurrentUa * d.collectorCurrentMa, 0);
  const sXX = transistorData.reduce((acc, d) => acc + d.baseCurrentUa * d.baseCurrentUa, 0);
  const slope = nPts > 1 && (nPts * sXX - sX * sX) !== 0
    ? (nPts * sXY - sX * sY) / (nPts * sXX - sX * sX)
    : 0.121;
  const intercept = nPts > 1 ? (sY - slope * sX) / nPts : 0;
  const betaFromSlope = slope * 1000;
  const firstPt = transistorData[0] || { baseCurrentUa: 10, collectorCurrentMa: 1.20 };
  const lastPt = transistorData[nPts - 1] || { baseCurrentUa: 50, collectorCurrentMa: 6.05 };
  const deltaIbVal = lastPt.baseCurrentUa - firstPt.baseCurrentUa;
  const deltaIcVal = lastPt.collectorCurrentMa - firstPt.collectorCurrentMa;

  const handleAddObservation = () => {
    const simulatedIc = Math.max(0, +(probeIb * 0.1215 + 0.01).toFixed(2));
    const newBeta = +(simulatedIc * 1000 / probeIb).toFixed(1);
    const existing = transistorData.find((d) => d.baseCurrentUa === probeIb);
    if (existing) {
      setTransistorData((prev) =>
        prev.map((d) => (d.baseCurrentUa === probeIb ? { ...d, collectorCurrentMa: simulatedIc, beta: newBeta } : d))
      );
    } else {
      const updated = [...transistorData, { baseCurrentUa: probeIb, collectorCurrentMa: simulatedIc, beta: newBeta }];
      updated.sort((a, b) => a.baseCurrentUa - b.baseCurrentUa);
      setTransistorData(updated);
    }
  };

  const t = {
    en: {
      hubTitle: 'A/L Physics Laboratory: Unit 9 Electronics Practicals Hub',
      hubSubtitle:
        'Official NIE A/L Physics Practical Handbook Investigations (Experiments 35, 36, 37): Semiconductor Diode I-V Characteristics, Common-Emitter BJT Characteristics, and Logic Gate Truth Table Identification.',
      diodeTab: '1. Diode I-V Characteristics (Exp 35)',
      transistorTab: '2. CE Transistor Characteristics (Exp 36)',
      logicGatesTab: '3. Logic Gate Identification (Exp 37)',
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
      transferTab: 'Transfer Characteristics (Exp 36: I_C vs I_B)',
      outputTab: 'Output Characteristics (Supplementary: I_C vs V_CE)',
      telemetryTitle: 'Interactive DC Operating Point & Circuit Probe',
      baseCurrentLabel: 'Base Current I_B (μA):',
      collectorCurrentLabel: 'Measured Collector Current I_C (mA):',
      addPointBtn: 'Record Point in Table',
      graphTitle: 'Transfer Characteristic Curve: I_C vs I_B at constant V_CE = 5.0 V',
      gainCardTitle: 'Linear-Region Gradient & Current Gain (β) Analysis',
    },
    si: {
      hubTitle: 'උසස් පෙළ භෞතික විද්‍යා රසායනාගාරය: ඒකක 9 ඉලෙක්ට්‍රොනික විද්‍යාව ප්‍රායෝගික පරීක්ෂණ',
      hubSubtitle:
        'ජාතික අධ්‍යාපන ආයතන (NIE) උසස් පෙළ භෞතික විද්‍යා ප්‍රායෝගික අත්පොත (පරීක්ෂණ 35, 36, 37): අර්ධ සන්නායක ඩයෝඩයේ I-V ලාක්ෂණික, පොදු විමෝචක BJT ලාක්ෂණික, සහ තාර්කික ද්වාර සත්‍යතා වගු හඳුනාගැනීම.',
      diodeTab: '1. ඩයෝඩයේ I-V ලාක්ෂණික (පරීක්ෂණ 35)',
      transistorTab: '2. පොදු විමෝචක ට්‍රාන්සිස්ටර ලාක්ෂණික (පරීක්ෂණ 36)',
      logicGatesTab: '3. තාර්කික ද්වාර හඳුනාගැනීම (පරීක්ෂණ 37)',
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
      transferTab: 'සම්ප්‍රේෂණ ලාක්ෂණික (පරීක්ෂණ 36: I_C එදිරිව I_B)',
      outputTab: 'ප්‍රතිදාන ලාක්ෂණික (අතිරේක: I_C එදිරිව V_CE)',
      telemetryTitle: 'අන්තර්ක්‍රියාකාරී DC මෙහෙයුම් ලක්ෂ්‍යය සහ පරිපථ මිනුම',
      baseCurrentLabel: 'පාදම ධාරාව I_B (μA):',
      collectorCurrentLabel: 'මනින ලද සංග්‍රාහක ධාරාව I_C (mA):',
      addPointBtn: 'වගුවට ලක්ෂ්‍යය එක් කරන්න',
      graphTitle: 'සම්ප්‍රේෂණ ලාක්ෂණික වක්‍රය: නියත V_CE = 5.0 V හිදී I_C එදිරිව I_B',
      gainCardTitle: 'රේඛීය කලාප අනුක්‍රමණය සහ ධාරා ලාභය (β) විශ්ලේෂණය',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900/40 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm">
            <Cpu className="w-5 h-5" />
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
            variant={activeTab === 'diode' ? 'default' : 'outline'}
            onClick={() => setActiveTab('diode')}
            className={
              activeTab === 'diode'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.diodeTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'transistor' ? 'default' : 'outline'}
            onClick={() => setActiveTab('transistor')}
            className={
              activeTab === 'transistor'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.transistorTab}
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'logicGates' ? 'default' : 'outline'}
            onClick={() => setActiveTab('logicGates')}
            className={
              activeTab === 'logicGates'
                ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs'
                : 'text-xs'
            }
          >
            {t.logicGatesTab}
          </Button>
        </div>
      </div>

      {/* Practical 1: Diode I-V Characteristics (Exp 35) */}
      {activeTab === 'diode' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'අර්ධ සන්නායක ඩයෝඩයක පෙර නැඹුරු I-V ලාක්ෂණික වක්‍රය ඇඳීම (පරීක්ෂණ 35)'
                : 'Forward I-V Characteristics of a Semiconductor Diode (Exp 35)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'සිලිකන් p-n සන්ධියක විභව බාධකය V_B ≈ 0.7 V වේ. පෙර වෝල්ටීයතාව දණහිස් අගය (knee voltage) ඉක්මවන තෙක් ධාරාව නොගලන අතර, ඉන්පසු ධාරාව සීඝ්‍රයෙන් වැඩිවේ. ගතික ප්‍රතිරෝධය r_d = ΔV / ΔI වේ.'
                    : 'A silicon p-n junction has a built-in barrier potential V_B ≈ 0.7 V. Negligible current flows until forward voltage reaches the knee voltage, after which current rises exponentially. Dynamic resistance is r_d = ΔV / ΔI.'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'r_d = ΔV / ΔI  ⟹  Knee Voltage V_k ≈ 0.70 V (Silicon)'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'සිලිකන් ඩයෝඩය (1N4007 හෝ සමාන), 0–3 V විචල්‍ය DC බල සැපයුම, DC මිලිඇමීටරය (0–100 mA), DC වෝල්ට්මීටරය (0–2 V), 100 Ω ආරක්ෂිත ප්‍රතිරෝධකය.'
                    : 'Silicon diode (1N4007 or equivalent), variable DC power supply (0–3 V), DC milliammeter (0–100 mA), digital DC voltmeter (0–2 V), 100 Ω protective series resistor.'}
                </p>
              </div>
            </div>

            {/* Observations Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                  {t.observations} (Forward Bias I-V Data)
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setDiodeData(defaultDiodeData)}
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
                      <th className="p-2.5">Forward Voltage V_D (V)</th>
                      <th className="p-2.5">Forward Current I_D (mA)</th>
                      <th className="p-2.5">Estimated Dynamic Resistance r_d (Ω)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {diodeData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <td className="p-2.5 font-medium">{row.voltageV.toFixed(2)}</td>
                        <td className="p-2.5 font-mono">{row.currentMa.toFixed(2)}</td>
                        <td className="p-2.5 font-mono text-teal-600 font-semibold">
                          {row.dynamicResOhm > 1000 ? '> 1 kΩ' : `${row.dynamicResOhm.toFixed(1)} Ω`}
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
                {'Barrier knee potential V_k ≈ 0.68 V. Dynamic resistance at 25 mA is r_d = 3.0 Ω.'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Practical 2: CE Transistor Characteristics (Exp 36) */}
      {activeTab === 'transistor' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'පොදු විමෝචක npn ට්‍රාන්සිස්ටරයක සම්ප්‍රේෂණ ලාක්ෂණික සහ ධාරා ලාභය (β) සෙවීම (පරීක්ෂණ 36)'
                : 'Transfer Characteristics and Current Gain (β) of a CE npn Transistor (Exp 36)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'පොදු විමෝචක වින්‍යාසයේදී පාදම ධාරාව I_B මගින් සංග්‍රාහක ධාරාව I_C පාලනය කරයි. සක්‍රීය කලාපයේදී I_C = β I_B වේ. I_C එදිරිව I_B ප්‍රස්ථාරයේ අනුක්‍රමණය DC ධාරා ලාභය β (h_FE) වේ.'
                    : 'In common-emitter configuration, base current I_B controls collector current I_C. In active region: I_C = β I_B. The slope of the linear transfer characteristic I_C versus I_B defines the DC current gain β (h_FE).'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'β = ΔI_C / ΔI_B  (at constant V_CE)'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'npn ට්‍රාන්සිස්ටරය (BC108 හෝ 2N3904), ද්විත්ව විචල්‍ය DC බල සැපයුම, DC මයික්‍රොඇමීටරය (0–100 μA), DC මිලිඇමීටරය (0–20 mA), ඩිජිටල් වෝල්ට්මීටරය.'
                    : 'General-purpose npn silicon BJT (BC108 or 2N3904), dual regulated DC power supplies, base microammeter (0–100 μA), collector milliammeter (0–20 mA), digital voltmeter.'}
                </p>
              </div>
            </div>

            {/* Investigation Mode Selector */}
            <div className="flex flex-wrap items-center gap-2 border-b pb-3 border-slate-200 dark:border-slate-800">
              <Button
                size="sm"
                variant={transistorMode === 'transfer' ? 'default' : 'outline'}
                onClick={() => setTransistorMode('transfer')}
                className={transistorMode === 'transfer' ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5' : 'text-xs gap-1.5'}
              >
                <LineChart className="w-3.5 h-3.5" />
                {t.transferTab}
              </Button>
              <Button
                size="sm"
                variant={transistorMode === 'output' ? 'default' : 'outline'}
                onClick={() => setTransistorMode('output')}
                className={transistorMode === 'output' ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5' : 'text-xs gap-1.5'}
              >
                <Sliders className="w-3.5 h-3.5" />
                {t.outputTab}
              </Button>
            </div>

            {transistorMode === 'transfer' ? (
              <>
                {/* Interactive Circuit Telemetry & Probe */}
                <div className="p-4 rounded-xl border border-teal-200 dark:border-teal-900/40 bg-teal-50/30 dark:bg-teal-950/20 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-teal-950 dark:text-teal-200 flex items-center gap-1.5">
                      <Sliders className="w-4 h-4 text-teal-600" />
                      {t.telemetryTitle} (V_CE = 5.0 V constant)
                    </span>
                    <Button
                      size="sm"
                      onClick={handleAddObservation}
                      className="bg-teal-600 hover:bg-teal-700 text-white text-xs gap-1.5 shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      {t.addPointBtn}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">{t.baseCurrentLabel}</span>
                        <span className="font-mono font-bold text-teal-700 dark:text-teal-300">{probeIb} μA</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="60"
                        step="5"
                        value={probeIb}
                        onChange={(e) => setProbeIb(Number(e.target.value))}
                        className="w-full accent-teal-600 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 border text-xs">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">{t.collectorCurrentLabel}</span>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        {(probeIb * 0.1215 + 0.01).toFixed(2)} mA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Observations Table */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                      <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                      {t.observations} (Transfer Characteristics at V_CE = 5.0 V)
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setTransistorData(defaultTransistorData)}
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
                          <th className="p-2.5">Base Current I_B (μA)</th>
                          <th className="p-2.5">Collector Current I_C (mA)</th>
                          <th className="p-2.5">Calculated Current Gain β = I_C / I_B</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {transistorData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                            <td className="p-2.5 font-medium">{row.baseCurrentUa} μA</td>
                            <td className="p-2.5 font-mono">{row.collectorCurrentMa.toFixed(2)} mA</td>
                            <td className="p-2.5 font-mono text-teal-600 font-semibold">{row.beta.toFixed(1)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* SVG Transfer Characteristic Plot */}
                <div className="space-y-2 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <LineChart className="w-4 h-4 text-teal-600" />
                      {t.graphTitle}
                    </span>
                    <span className="text-xs font-mono font-semibold text-teal-600 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded">
                      Gradient = {slope.toFixed(4)} mA/μA
                    </span>
                  </div>

                  <div className="w-full overflow-x-auto flex justify-center py-2">
                    <svg viewBox="0 0 520 300" className="w-full max-w-xl h-auto select-none font-sans">
                      {/* Grid background */}
                      <rect x="55" y="25" width="440" height="235" fill="none" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />

                      {/* Horizontal grid lines & ticks (I_C: 0 to 7.5 mA) */}
                      {[0, 1.5, 3.0, 4.5, 6.0, 7.5].map((val) => {
                        const y = 25 + (1 - val / 7.5) * 235;
                        return (
                          <g key={val}>
                            <line x1="55" y1={y} x2="495" y2={y} stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" className="dark:stroke-slate-800" />
                            <text x="48" y={y + 4} textAnchor="end" fontSize="10" fill="#64748B" className="font-mono">
                              {val.toFixed(1)}
                            </text>
                          </g>
                        );
                      })}

                      {/* Vertical grid lines & ticks (I_B: 0 to 60 μA) */}
                      {[0, 10, 20, 30, 40, 50, 60].map((val) => {
                        const x = 55 + (val / 60) * 440;
                        return (
                          <g key={val}>
                            <line x1={x} y1="25" x2={x} y2="260" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" className="dark:stroke-slate-800" />
                            <text x={x} y="275" textAnchor="middle" fontSize="10" fill="#64748B" className="font-mono">
                              {val}
                            </text>
                          </g>
                        );
                      })}

                      {/* Axis Lines */}
                      <line x1="55" y1="260" x2="495" y2="260" stroke="#334155" strokeWidth="2" />
                      <line x1="55" y1="25" x2="55" y2="260" stroke="#334155" strokeWidth="2" />

                      {/* Axis Labels */}
                      <text x="275" y="295" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155" className="dark:fill-slate-300">
                        Base Current I_B (μA)
                      </text>
                      <text x="-142" y="18" transform="rotate(-90)" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155" className="dark:fill-slate-300">
                        Collector Current I_C (mA)
                      </text>

                      {/* Regression Best-Fit Line */}
                      {nPts > 1 && (
                        <line
                          x1={55}
                          y1={25 + (1 - Math.max(0, intercept) / 7.5) * 235}
                          x2={55 + 440}
                          y2={25 + (1 - (slope * 60 + intercept) / 7.5) * 235}
                          stroke="#0F766E"
                          strokeWidth="2.5"
                        />
                      )}

                      {/* Slope Determination Triangle (ΔI_B and ΔI_C) */}
                      {nPts > 1 && (
                        <g>
                          {/* Horizontal ΔI_B segment */}
                          <line
                            x1={55 + (firstPt.baseCurrentUa / 60) * 440}
                            y1={25 + (1 - firstPt.collectorCurrentMa / 7.5) * 235}
                            x2={55 + (lastPt.baseCurrentUa / 60) * 440}
                            y2={25 + (1 - firstPt.collectorCurrentMa / 7.5) * 235}
                            stroke="#6366F1"
                            strokeWidth="1.5"
                            strokeDasharray="4,4"
                          />
                          {/* Vertical ΔI_C segment */}
                          <line
                            x1={55 + (lastPt.baseCurrentUa / 60) * 440}
                            y1={25 + (1 - firstPt.collectorCurrentMa / 7.5) * 235}
                            x2={55 + (lastPt.baseCurrentUa / 60) * 440}
                            y2={25 + (1 - lastPt.collectorCurrentMa / 7.5) * 235}
                            stroke="#D97706"
                            strokeWidth="1.5"
                            strokeDasharray="4,4"
                          />
                          {/* Δ Labels */}
                          <text
                            x={55 + ((firstPt.baseCurrentUa + lastPt.baseCurrentUa) / 2 / 60) * 440}
                            y={25 + (1 - firstPt.collectorCurrentMa / 7.5) * 235 + 14}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#6366F1"
                            fontWeight="bold"
                            className="font-mono"
                          >
                            ΔI_B = {deltaIbVal} μA
                          </text>
                          <text
                            x={55 + (lastPt.baseCurrentUa / 60) * 440 + 8}
                            y={25 + (1 - (firstPt.collectorCurrentMa + lastPt.collectorCurrentMa) / 2 / 7.5) * 235}
                            textAnchor="start"
                            fontSize="9"
                            fill="#D97706"
                            fontWeight="bold"
                            className="font-mono"
                          >
                            ΔI_C = {deltaIcVal.toFixed(2)} mA
                          </text>
                        </g>
                      )}

                      {/* Observation Data Points */}
                      {transistorData.map((d, i) => {
                        const cx = 55 + (d.baseCurrentUa / 60) * 440;
                        const cy = 25 + (1 - d.collectorCurrentMa / 7.5) * 235;
                        return (
                          <g key={i}>
                            <circle cx={cx} cy={cy} r="4.5" fill="#0D9488" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx={cx} cy={cy} r="1.5" fill="#FFFFFF" />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Quantitative Gain Calculation Breakdown */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-3">
                  <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    {t.gainCardTitle}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border space-y-1">
                      <span className="text-[11px] text-slate-500 block">1. Linear Gradient:</span>
                      <div className="font-mono font-bold text-teal-700 dark:text-teal-300">
                        {`ΔI_C / ΔI_B = ${slope.toFixed(4)} mA/μA`}
                      </div>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        {`(${deltaIcVal.toFixed(2)} mA / ${deltaIbVal} μA)`}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border space-y-1">
                      <span className="text-[11px] text-slate-500 block">2. Unit Conversion:</span>
                      <div className="font-mono font-bold text-slate-700 dark:text-slate-300">
                        {'mA / μA = 10⁻³ / 10⁻⁶ = × 10³'}
                      </div>
                      <span className="text-[10px] text-slate-400 block">Dimensionless amplification factor</span>
                    </div>

                    <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/40 space-y-1">
                      <span className="text-[11px] text-teal-800 dark:text-teal-300 font-bold block">3. Current Gain (β):</span>
                      <div className="font-mono font-bold text-teal-600 dark:text-teal-400 text-base">
                        {`β = ${betaFromSlope.toFixed(1)}`}
                      </div>
                      <span className="text-[10px] text-teal-700 dark:text-teal-400 block">
                        {locale === 'si' ? 'සක්‍රීය කලාප පොදු විමෝචක ධාරා ලාභය' : 'Active-region CE current gain'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs space-y-2">
                  <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {t.derivedResult}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">
                    {`Derived Common-Emitter DC Current Gain from linear-region gradient: β = ${betaFromSlope.toFixed(1)} (Operating at constant V_CE = 5.0 V in active amplification region).`}
                  </p>
                </div>
              </>
            ) : (
              /* Output Characteristics Mode (Supplementary) */
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 block">
                    {locale === 'si'
                      ? 'පොදු විමෝචක ප්‍රතිදාන ලාක්ෂණික (I_C එදිරිව V_CE):'
                      : 'Common-Emitter Output Characteristics (I_C vs V_CE at constant I_B):'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {locale === 'si'
                      ? 'ප්‍රතිදාන වක්‍ර මඟින් සංතෘප්ත කලාපය (V_CE < 0.3 V) සහ සක්‍රීය වර්ධක කලාපය (V_CE ≥ 0.3 V) වෙන්කර දක්වයි. සක්‍රීය කලාපයේදී I_C පාහේ තිරස්ව පවතින බැවින්, සම්ප්‍රේෂණ පරීක්ෂණය (Exp 36) සඳහා V_CE = 5.0 V තෝරාගනු ලැබේ.'
                      : 'The family of output curves illustrates the knee saturation zone (V_CE < 0.3 V) and the flat active amplification region (V_CE ≥ 0.3 V). Because I_C remains virtually independent of V_CE in the active region, V_CE = 5.0 V provides a stable benchmark for transfer characteristic measurements.'}
                  </p>
                </div>

                {/* SVG Output Characteristic Plot */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="w-full overflow-x-auto flex justify-center py-2">
                    <svg viewBox="0 0 520 280" className="w-full max-w-xl h-auto select-none font-sans">
                      {/* Grid */}
                      <rect x="55" y="20" width="440" height="220" fill="none" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />

                      {/* Saturation Region Shading */}
                      <rect x="55" y="20" width="22" height="220" fill="#FEF3C7" fillOpacity="0.4" />
                      <text x="66" y="35" textAnchor="middle" fontSize="8" fill="#D97706" fontWeight="bold">Sat.</text>

                      {/* Constant V_CE = 5.0 V marker line */}
                      <line x1="275" y1="20" x2="275" y2="240" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="3,3" />
                      <text x="275" y="15" textAnchor="middle" fontSize="9" fill="#0D9488" fontWeight="bold">Exp 36: V_CE = 5.0 V</text>

                      {/* Y-axis ticks (I_C: 0 to 8 mA) */}
                      {[0, 2, 4, 6, 8].map((v) => {
                        const y = 20 + (1 - v / 8) * 220;
                        return (
                          <g key={v}>
                            <line x1="55" y1={y} x2="495" y2={y} stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" className="dark:stroke-slate-800" />
                            <text x="48" y={y + 4} textAnchor="end" fontSize="10" fill="#64748B" className="font-mono">{v}</text>
                          </g>
                        );
                      })}

                      {/* X-axis ticks (V_CE: 0 to 10 V) */}
                      {[0, 2, 4, 6, 8, 10].map((v) => {
                        const x = 55 + (v / 10) * 440;
                        return (
                          <g key={v}>
                            <line x1={x} y1="20" x2={x} y2="240" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3,3" className="dark:stroke-slate-800" />
                            <text x={x} y="255" textAnchor="middle" fontSize="10" fill="#64748B" className="font-mono">{v}</text>
                          </g>
                        );
                      })}

                      {/* Axes */}
                      <line x1="55" y1="240" x2="495" y2="240" stroke="#334155" strokeWidth="2" />
                      <line x1="55" y1="20" x2="55" y2="240" stroke="#334155" strokeWidth="2" />

                      <text x="275" y="272" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155" className="dark:fill-slate-300">
                        Collector-Emitter Voltage V_CE (V)
                      </text>
                      <text x="-130" y="18" transform="rotate(-90)" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155" className="dark:fill-slate-300">
                        Collector Current I_C (mA)
                      </text>

                      {/* Output Curves for I_B = 20, 40, 60 uA */}
                      {[
                        { ib: 20, color: '#0EA5E9', icMax: 2.45 },
                        { ib: 40, color: '#10B981', icMax: 4.88 },
                        { ib: 60, color: '#F59E0B', icMax: 7.30 },
                      ].map(({ ib, color, icMax }) => {
                        // Generate smooth path: knee around V_CE = 0.3V then flat slope
                        let dPath = `M 55 240 `;
                        for (let v = 0.05; v <= 10; v += 0.2) {
                          const ic = icMax * (1 - Math.exp(-v / 0.18)) * (1 + v * 0.015);
                          const x = 55 + (v / 10) * 440;
                          const y = 20 + (1 - ic / 8) * 220;
                          dPath += `L ${x.toFixed(1)} ${y.toFixed(1)} `;
                        }
                        const labelY = 20 + (1 - (icMax * 1.15) / 8) * 220;
                        return (
                          <g key={ib}>
                            <path d={dPath} fill="none" stroke={color} strokeWidth="2" />
                            <text x="498" y={labelY} fontSize="9" fill={color} fontWeight="bold" className="font-mono">
                              I_B = {ib} μA
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Practical 3: Logic Gate Identification (Exp 37) */}
      {activeTab === 'logicGates' && (
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/40 pb-4">
            <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              {locale === 'si'
                ? 'සත්‍යතා වගු පරීක්ෂාවෙන් ඩිජිටල් තාර්කික ද්වාර හඳුනාගැනීම (පරීක්ෂණ 37)'
                : 'Experimental Identification of Logic Gates using Truth Tables (Exp 37)'}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs space-y-2">
                <span className="font-bold text-teal-900 dark:text-teal-300 block">{t.principle}</span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {locale === 'si'
                    ? 'නොදන්නා තාර්කික ද්වාරයක ආදාන A සහ B වලට විවිධ ද්විමය සංයෝජන (00, 01, 10, 11) ලබා දී ප්‍රතිදාන Y නිරීක්ෂණය කිරීමෙන් සත්‍යතා වගුව ගොඩනගා ද්වාර වර්ගය නිශ්චිතව හඳුනාගත හැකිය.'
                    : 'By applying all four binary input combinations (00, 01, 10, 11) to the inputs of an unknown dual-input gate and measuring output Y, the empirical truth table uniquely identifies whether the gate is AND, OR, NAND, NOR, or XOR.'}
                </p>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border font-mono text-teal-700 dark:text-teal-400 font-semibold text-center">
                  {'AND: A·B | OR: A+B | NAND: ~(A·B) | NOR: ~(A+B) | XOR: A⊕B'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 block">{t.apparatus}</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {locale === 'si'
                    ? 'ඩිජිටල් තාර්කික පුහුණු පුවරුව (Digital Trainer Kit), +5 V බල සැපයුම, 7400/7402/7408/7432/7486 ඒකාබද්ධ පරිපථ (IC), ආදාන ස්විච, LED ප්‍රතිදාන දර්ශක.'
                    : 'Digital logic trainer board, +5 V regulated DC supply, standard TTL ICs (7408 AND, 7432 OR, 7400 NAND, 7402 NOR, 7486 XOR), logic input toggle switches, LED indicator probes.'}
                </p>
              </div>
            </div>

            {/* Interactive Testing Box */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 space-y-4">
              <span className="text-sm font-bold block text-slate-800 dark:text-slate-200">
                {locale === 'si' ? 'අන්තර්ක්‍රියාකාරී ද්වාර පරීක්ෂණ අතුරුමුහුණත:' : 'Interactive Logic Gate Probe Station:'}
              </span>

              <div className="flex flex-wrap items-center gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Select Gate Under Test:</span>
                  <div className="flex gap-1.5">
                    {(['AND', 'OR', 'NAND', 'NOR', 'XOR'] as const).map((g) => (
                      <Button
                        key={g}
                        size="sm"
                        variant={gateType === g ? 'default' : 'outline'}
                        onClick={() => setGateType(g)}
                        className={gateType === g ? 'bg-teal-600 hover:bg-teal-700 text-white text-xs' : 'text-xs'}
                      >
                        {g}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-auto">
                  <Button
                    size="sm"
                    variant={logicInputs.a === 1 ? 'default' : 'outline'}
                    onClick={() => setLogicInputs((prev) => ({ ...prev, a: prev.a === 1 ? 0 : 1 }))}
                    className="text-xs"
                  >
                    Input A = {logicInputs.a}
                  </Button>
                  <Button
                    size="sm"
                    variant={logicInputs.b === 1 ? 'default' : 'outline'}
                    onClick={() => setLogicInputs((prev) => ({ ...prev, b: prev.b === 1 ? 0 : 1 }))}
                    className="text-xs"
                  >
                    Input B = {logicInputs.b}
                  </Button>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-600 text-white font-mono font-bold text-sm">
                    Output Y = {computeGateOutput(logicInputs.a, logicInputs.b, gateType)}
                  </div>
                </div>
              </div>

              {/* Complete Truth Table */}
              <div className="overflow-x-auto rounded-lg border bg-white dark:bg-slate-900">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-2.5">Input A</th>
                      <th className="p-2.5">Input B</th>
                      <th className="p-2.5">Measured Output Y ({gateType})</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
                    {[
                      { a: 0, b: 0 },
                      { a: 0, b: 1 },
                      { a: 1, b: 0 },
                      { a: 1, b: 1 },
                    ].map((row, idx) => {
                      const out = computeGateOutput(row.a, row.b, gateType);
                      return (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="p-2.5 font-bold">{row.a}</td>
                          <td className="p-2.5 font-bold">{row.b}</td>
                          <td className="p-2.5 text-teal-600 font-extrabold">{out}</td>
                          <td className="p-2.5 text-emerald-600 font-sans font-medium">Verified</td>
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
                {`Truth table conclusively identifies the IC as standard 2-input ${gateType} gate.`}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

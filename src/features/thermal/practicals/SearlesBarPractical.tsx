'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Gauge, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateThermalConductivitySearle } from '../physics/calculations';

interface SearlesBarPracticalProps {
  locale?: Locale;
}

interface SearleTrial {
  id: number;
  temp1C: string;
  temp2C: string;
  temp3InletC: string;
  temp4OutletC: string;
  waterMassG: string;
  collectionTimeS: string;
}

export const SearlesBarPractical: React.FC<SearlesBarPracticalProps> = ({
  locale = 'en',
}) => {
  const [barDiameterMm, setBarDiameterMm] = useState<string>('30.0');
  const [thermometerDistCm, setThermometerDistCm] = useState<string>('8.0');

  const [trials, setTrials] = useState<SearleTrial[]>([
    {
      id: 1,
      temp1C: '82.5',
      temp2C: '65.0',
      temp3InletC: '25.0',
      temp4OutletC: '30.8',
      waterMassG: '215.0',
      collectionTimeS: '60.0',
    },
    {
      id: 2,
      temp1C: '83.0',
      temp2C: '65.2',
      temp3InletC: '25.2',
      temp4OutletC: '31.1',
      waterMassG: '218.0',
      collectionTimeS: '60.0',
    },
    {
      id: 3,
      temp1C: '82.8',
      temp2C: '65.1',
      temp3InletC: '25.0',
      temp4OutletC: '30.9',
      waterMassG: '216.0',
      collectionTimeS: '60.0',
    },
  ]);

  const t = {
    en: {
      title: "Practical 4.6: Determination of Thermal Conductivity of Copper (Searle's Bar Method)",
      aim: "Aim: To determine the coefficient of thermal conductivity (k) of copper using Searle's apparatus under steady-state heat conduction.",
      apparatus: "Apparatus: Searle's bar apparatus (lagged copper bar with steam chamber and cooling coil), constant-pressure water head, 4 sensitive thermometers (0.1°C), measuring cylinder/beaker, sensitive balance, stopwatch, vernier calipers.",
      theoryTitle: "Physical Principle & Steady-State Heat Conduction",
      theoryText: "When the bar reaches a steady state (temperatures θ₁, θ₂, θ₃, and θ₄ remain constant over time), heat loss from the lagged sides is negligible. The rate of heat conducted through the cross-section of the bar equals the rate of heat absorbed by the cooling water:\n\nRate of Heat Conduction = k · A · (θ₁ - θ₂) / d\nRate of Heat Absorbed by Water = (m_w · c_w · (θ₄ - θ₃)) / t\n\nEquating both rates:\nk · A · (θ₁ - θ₂) / d = (m_w · c_w · (θ₄ - θ₃)) / t\n\nTherefore, the thermal conductivity k is:\nk = [ m_w · c_w · (θ₄ - θ₃) · d ] / [ A · (θ₁ - θ₂) · t ]\n\nwhere:\n• A = π · D² / 4 (cross-sectional area of the bar)\n• d = distance between thermometers θ₁ and θ₂ (in metres)\n• m_w / t = mass flow rate of cooling water (kg/s)\n• c_w = 4186 J / kg·K (specific heat capacity of water)\n• Accepted standard value for pure copper: k ≈ 385–400 W / (m·K).",
      procedure: "Procedure: 1. Measure the diameter D of the copper bar using vernier calipers at multiple points and the distance d between the thermometer sockets. 2. Ensure mercury/oil is placed in the thermometer wells for good thermal contact. 3. Pass steam through the steam chest and maintain a steady water flow through the cooling coil using a constant-level reservoir. 4. Wait until all 4 thermometers reach steady-state readings (typically 20–30 min). 5. Record steady temperatures θ₁, θ₂, θ₃ (inlet), and θ₄ (outlet). 6. Collect the circulating cooling water in a weighed beaker over a measured time t (e.g. 60 s) and determine its mass m_w. 7. Repeat over 3 consecutive intervals to verify steady state.",
      obsTitle: "Steady-State Observations & Measurements",
      barDimLabel: "Bar Diameter D (mm):",
      distLabel: "Thermometer Distance d (cm):",
      colTrial: "Trial",
      colT1: "θ₁ Hot (°C)",
      colT2: "θ₂ Cold (°C)",
      colT3: "θ₃ Inlet (°C)",
      colT4: "θ₄ Outlet (°C)",
      colMassWater: "Water m_w (g)",
      colTime: "Time t (s)",
      colExpK: "Calculated k (W/m·K)",
      colDiscrepancy: "Discrepancy %",
      summaryTitle: "Thermal Conductivity Analysis",
      meanKLabel: "Mean Experimental Conductivity k:",
      acceptedKLabel: "Accepted Copper Value:",
      verdictPass: "Conductivity Verified Within A/L Laboratory Standards (< 5.0%)",
      verdictFail: "Check Steady-State Conditions or Lagging",
      precautionsTitle: "Experimental Precautions",
      precautions: "1. The experiment must be conducted strictly at steady state; readings must remain unchanged for at least 5 minutes before taking measurements. 2. Good thermal contact in the thermometer wells is essential—add a drop of oil or mercury in each socket. 3. The water flow rate must be adjusted to produce a measurable but moderate temperature rise (θ₄ - θ₃ ≈ 4–8°C) so that radial heat loss from the coil is minimized. 4. Thorough thermal insulation (lagging) around the bar ensures one-dimensional, axial heat flow.",
      loadSample: "Load Verified Searle Data",
      clearInputs: "Clear Inputs",
      printSheet: "Print Laboratory Record",
    },
    si: {
      title: "ප්‍රායෝගික පරීක්ෂණ 4.6: සර්ල්ගේ දණ්ඩ උපකරණය මඟින් තඹවල තාප සන්නායකතා සංගුණකය (k) සෙවීම",
      aim: "අරමුණ: ස්ථාවර තාප සන්නයන තත්ත්ව යටතේ සර්ල්ගේ උපකරණය භාවිතයෙන් තඹ ලෝහයේ තාප සන්නායකතා සංගුණකය (k) නිර්ණය කිරීම.",
      apparatus: "උපකරණ: සර්ල්ගේ තඹ දණ්ඩ උපකරණය (වාෂ්ප පෙට්ටිය, සිසිලන දඟරය සහ පරිවාරක පෙට්ටිය සහිතව), නියත පීඩන ජල බඳුන, සංවේදී උෂ්ණත්වමාන 4ක් (0.1°C), මිනුම් සිලින්ඩරය/බීකරය, තුලාව, විරාම ඝටිකාව, වර්නියර් කැලිපරය.",
      theoryTitle: "භෞතික මූලධර්මය සහ ස්ථාවර අවස්ථා තාප සන්නයනය",
      theoryText: "දණ්ඩ ස්ථාවර අවස්ථාවට පත් වූ පසු (θ₁, θ₂, θ₃, සහ θ₄ උෂ්ණත්ව කාලය සමඟ වෙනස් නොවී පවතින විට), හොඳින් පරිවරණය කර ඇති බැවින් දණ්ඩේ පාර්ශ්වික තාප හානිය නොසලකා හැරිය හැක. එවිට දණ්ඩ හරහා සන්නයනය වන තාප සීඝ්‍රතාව සිසිලන ජලය මඟින් උරාගන්නා තාප සීඝ්‍රතාවට සමාන වේ:\n\nසන්නයන තාප සීඝ්‍රතාව = k · A · (θ₁ - θ₂) / d\nජලය උරාගන්නා තාප සීඝ්‍රතාව = (m_w · c_w · (θ₄ - θ₃)) / t\n\nමෙම සීඝ්‍රතා දෙක සමාන කිරීමෙන්:\nk · A · (θ₁ - θ₂) / d = (m_w · c_w · (θ₄ - θ₃)) / t\n\nඑබැවින් තාප සන්නායකතා සංගුණකය k:\nk = [ m_w · c_w · (θ₄ - θ₃) · d ] / [ A · (θ₁ - θ₂) · t ]\n\nමෙහි:\n• A = π · D² / 4 (දණ්ඩේ හරස්කඩ වර්ගඵලය)\n• d = θ₁ සහ θ₂ උෂ්ණත්වමාන අතර දුර (මීටර් වලින්)\n• m_w / t = ජලයේ ස්කන්ධ ගැලුම් සීඝ්‍රතාව (kg/s)\n• c_w = 4186 J / kg·K (ජලයේ විශිෂ්ට තාප ධාරිතාව)\n• පිරිසිදු තඹ සඳහා සම්මත අගය: k ≈ 385–400 W / (m·K).",
      procedure: "ක්‍රමවේදය: 1. වර්නියර් කැලිපරය භාවිතයෙන් තඹ දණ්ඩේ විෂ්කම්භය D කිහිප වරක් මැන සාමාන්‍යය ලබා ගන්න; උෂ්ණත්වමාන කුහර අතර දුර d මැන ගන්න. 2. උෂ්ණත්වමාන කුහර තුළට තෙල් ස්වල්පයක් දමා හොඳ තාප ස්පර්ශයක් ලබා දෙන්න. 3. වාෂ්ප පෙට්ටිය හරහා නිරන්තර වාෂ්ප යවන්න, නියත පීඩන බඳුන මඟින් සිසිලන දඟරය හරහා නියත ජල ගැලුමක් පවත්වා ගන්න. 4. උෂ්ණත්වමාන 4 ම ස්ථාවර අගයන් පෙන්වන තුරු රැඳී සිටින්න (මිනිත්තු 20–30 පමණ). 5. ස්ථාවර θ₁, θ₂, θ₃ (ඇතුළු වන) සහ θ₄ (පිටවන) උෂ්ණත්ව සටහන් කරගන්න. 6. කාලය t (තත්පර 60ක්) තුළ පිටවන ජල ස්කන්ධය m_w මැන ගන්න. 7. ස්ථාවර අවස්ථාව තහවුරු කරගැනීමට අඛණ්ඩ පරීක්ෂණ 3ක් සිදු කරන්න.",
      obsTitle: "ස්ථාවර අවස්ථා නිරීක්ෂණ සහ මිනුම්",
      barDimLabel: "දණ්ඩේ විෂ්කම්භය D (mm):",
      distLabel: "උෂ්ණත්වමාන අතර දුර d (cm):",
      colTrial: "වාරය",
      colT1: "θ₁ උණුසුම් (°C)",
      colT2: "θ₂ සිසිල් (°C)",
      colT3: "θ₃ ඇතුළු ජලය (°C)",
      colT4: "θ₄ පිටවන ජලය (°C)",
      colMassWater: "ජල ස්කන්ධය (g)",
      colTime: "කාලය t (s)",
      colExpK: "ගණනය කළ k (W/m·K)",
      colDiscrepancy: "විෂමතාව %",
      summaryTitle: "තාප සන්නායකතා විශ්ලේෂණය",
      meanKLabel: "සාමාන්‍ය ප්‍රායෝගික සන්නායකතාව k:",
      acceptedKLabel: "සම්මත තඹ අගය:",
      verdictPass: "උසස් පෙළ විද්‍යාගාර නිරවද්‍යතාව තුළ තහවුරු විය (< 5.0%)",
      verdictFail: "ස්ථාවර අවස්ථා තත්ත්ව හෝ පරිවරණය පරීක්ෂා කරන්න",
      precautionsTitle: "ප්‍රායෝගික ආරක්ෂක උපදෙස් සහ පූර්වෝපායයන්",
      precautions: "1. පරීක්ෂණය සම්පූර්ණයෙන්ම ස්ථාවර අවස්ථාවට පැමිණි පසු සිදු කළ යුතුය; මිනුම් ගැනීමට පෙර අවම වශයෙන් මිනිත්තු 5ක් උෂ්ණත්වමාන අගයන් නොවෙනස්ව පැවතිය යුතුය. 2. උෂ්ණත්වමාන කුහර තුළ හොඳ තාප ස්පර්ශයක් සඳහා තෙල් බිංදුවක් යෙදිය යුතුය. 3. ජල ගැලුම ඉතා වේගවත් හෝ මන්දගාමී නොවිය යුතුය (උෂ්ණත්ව වෙනස θ₄ - θ₃ ≈ 4–8°C අතර වන සේ සකසන්න). 4. පරිවාරක පෙට්ටියේ ලොම් පරිවරණය දණ්ඩ වටා හොඳින් තිබීමෙන් අක්ෂීය තාප ගැලුම පමණක් සිදුවීම සහතික කෙරේ.",
      loadSample: "සත්‍යාපිත සර්ල් දත්ත යොදන්න",
      clearInputs: "දත්ත හිස් කරන්න",
      printSheet: "වාර්තාව මුද්‍රණය කරන්න",
    },
  }[locale];

  const diamM = (parseFloat(barDiameterMm) || 30.0) / 1000;
  const distM = (parseFloat(thermometerDistCm) || 8.0) / 100;
  const barAreaM2 = (Math.PI * Math.pow(diamM, 2)) / 4;

  const STANDARD_K_COPPER = 390.0; // W / (m·K)

  const evaluatedTrials = trials.map((tr) => {
    const t1 = parseFloat(tr.temp1C) || 0;
    const t2 = parseFloat(tr.temp2C) || 0;
    const t3 = parseFloat(tr.temp3InletC) || 0;
    const t4 = parseFloat(tr.temp4OutletC) || 0;
    const massWaterKg = (parseFloat(tr.waterMassG) || 0) / 1000;
    const timeS = parseFloat(tr.collectionTimeS) || 0;
    const flowRateKgS = timeS > 0 ? massWaterKg / timeS : 0;

    const calcK = calculateThermalConductivitySearle({
      barAreaM2,
      thermometerDistanceM: distM,
      temp1C: t1,
      temp2C: t2,
      waterFlowRateKgS: flowRateKgS,
      waterInletTempC: t3,
      waterOutletTempC: t4,
    });

    const discrepancy =
      calcK > 0
        ? Math.abs((calcK - STANDARD_K_COPPER) / STANDARD_K_COPPER) * 100
        : 0;

    return {
      ...tr,
      calcK,
      discrepancy,
    };
  });

  const validKs = evaluatedTrials.filter((t) => t.calcK > 0).map((t) => t.calcK);
  const meanK =
    validKs.length > 0 ? validKs.reduce((a, b) => a + b, 0) / validKs.length : 0;
  const meanDiscrepancy =
    meanK > 0
      ? Math.abs((meanK - STANDARD_K_COPPER) / STANDARD_K_COPPER) * 100
      : 0;

  const handleUpdateTrial = (id: number, field: keyof SearleTrial, val: string) => {
    setTrials(trials.map((tr) => (tr.id === id ? { ...tr, [field]: val } : tr)));
  };

  const handleLoadSample = () => {
    setBarDiameterMm('30.0');
    setThermometerDistCm('8.0');
    setTrials([
      {
        id: 1,
        temp1C: '82.5',
        temp2C: '65.0',
        temp3InletC: '25.0',
        temp4OutletC: '30.8',
        waterMassG: '215.0',
        collectionTimeS: '60.0',
      },
      {
        id: 2,
        temp1C: '83.0',
        temp2C: '65.2',
        temp3InletC: '25.2',
        temp4OutletC: '31.1',
        waterMassG: '218.0',
        collectionTimeS: '60.0',
      },
      {
        id: 3,
        temp1C: '82.8',
        temp2C: '65.1',
        temp3InletC: '25.0',
        temp4OutletC: '30.9',
        waterMassG: '216.0',
        collectionTimeS: '60.0',
      },
    ]);
  };

  const handleClear = () => {
    setTrials(
      trials.map((tr) => ({
        ...tr,
        temp1C: '',
        temp2C: '',
        temp3InletC: '',
        temp4OutletC: '',
        waterMassG: '',
        collectionTimeS: '',
      }))
    );
  };

  return (
    <div className="space-y-6">
      {/* Title & Aim */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Gauge className="w-5 h-5 text-teal-600" />
            {t.title}
          </CardTitle>
          <p className="text-sm text-slate-600 mt-1">{t.aim}</p>
        </CardHeader>
        <CardContent className="p-4 space-y-4 text-sm text-slate-700">
          <div>
            <span className="font-semibold text-slate-900">{t.apparatus}</span>
          </div>

          <div className="bg-teal-50/50 p-4 rounded-md border border-teal-100 space-y-2">
            <h4 className="font-semibold text-teal-950">{t.theoryTitle}</h4>
            <p className="whitespace-pre-line text-slate-700 leading-relaxed font-sans text-xs sm:text-sm">
              {t.theoryText}
            </p>
          </div>

          <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
            <h5 className="font-semibold text-slate-800 mb-1">
              {locale === 'en' ? 'Method & Procedure' : 'ක්‍රමවේදය'}
            </h5>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.procedure}</p>
          </div>
        </CardContent>
      </Card>

      {/* Apparatus Dimensions */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-700">{t.barDimLabel}</label>
              <input
                type="number"
                step="0.1"
                value={barDiameterMm}
                onChange={(e) => setBarDiameterMm(e.target.value)}
                className="w-20 px-2 py-1 text-sm border border-slate-300 rounded font-mono"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-700">{t.distLabel}</label>
              <input
                type="number"
                step="0.1"
                value={thermometerDistCm}
                onChange={(e) => setThermometerDistCm(e.target.value)}
                className="w-20 px-2 py-1 text-sm border border-slate-300 rounded font-mono"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLoadSample}
              className="text-xs flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5" />
              {t.loadSample}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClear}
              className="text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.clearInputs}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="text-xs flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              {t.printSheet}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="p-2 border-r border-slate-200 text-center">{t.colTrial}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colT1}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colT2}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colT3}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colT4}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colMassWater}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colTime}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colExpK}</th>
                  <th className="p-2 text-center">{t.colDiscrepancy}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {evaluatedTrials.map((tr) => (
                  <tr key={tr.id} className="hover:bg-slate-50">
                    <td className="p-2 text-center font-mono font-medium border-r border-slate-200">
                      {tr.id}
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.temp1C}
                        onChange={(e) => handleUpdateTrial(tr.id, 'temp1C', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.temp2C}
                        onChange={(e) => handleUpdateTrial(tr.id, 'temp2C', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.temp3InletC}
                        onChange={(e) => handleUpdateTrial(tr.id, 'temp3InletC', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.temp4OutletC}
                        onChange={(e) => handleUpdateTrial(tr.id, 'temp4OutletC', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.waterMassG}
                        onChange={(e) => handleUpdateTrial(tr.id, 'waterMassG', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="1"
                        value={tr.collectionTimeS}
                        onChange={(e) => handleUpdateTrial(tr.id, 'collectionTimeS', e.target.value)}
                        className="w-16 px-1.5 py-1 text-center font-mono text-xs border border-slate-300 rounded"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center font-mono font-semibold text-teal-800">
                      {tr.calcK > 0 ? tr.calcK.toFixed(1) : '-'}
                    </td>
                    <td className="p-2 text-center font-mono text-slate-700">
                      {tr.calcK > 0 ? `${tr.discrepancy.toFixed(1)}%` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analysis Summary */}
          <div className="mt-6 p-4 rounded-lg bg-teal-50/60 border border-teal-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-900">
                {t.summaryTitle}
              </div>
              <div className="text-sm text-slate-800 flex flex-wrap items-center gap-3">
                <span>
                  <span className="font-semibold">{t.meanKLabel} </span>
                  <span className="font-mono text-base font-bold text-teal-950">
                    {meanK > 0 ? `${meanK.toFixed(1)} W/(m·K)` : 'N/A'}
                  </span>
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-xs text-slate-600">
                  {t.acceptedKLabel}{' '}
                  <span className="font-mono font-medium">385–400 W/(m·K)</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              {meanDiscrepancy < 5.0 && meanK > 0 ? (
                <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.verdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-amber-800 bg-amber-100/50 px-3 py-1.5 rounded-full border border-amber-300">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.verdictFail}</span>
                </div>
              )}
            </div>
          </div>

          {/* Precautions */}
          <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-md">
            <h5 className="font-semibold text-slate-800 text-xs sm:text-sm mb-1">
              {t.precautionsTitle}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
              {t.precautions}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

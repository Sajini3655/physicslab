'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Snowflake, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateLatentHeatOfFusion } from '../physics/calculations';

interface LatentHeatFusionPracticalProps {
  locale?: Locale;
}

interface IceTrial {
  id: number;
  massCalG: string;
  massWaterG: string;
  massIceG: string;
  tempInitC: string;
  tempFinalC: string;
}

export const LatentHeatFusionPractical: React.FC<LatentHeatFusionPracticalProps> = ({
  locale = 'en',
}) => {
  const [trials, setTrials] = useState<IceTrial[]>([
    { id: 1, massCalG: '50.0', massWaterG: '200.0', massIceG: '25.0', tempInitC: '25.0', tempFinalC: '13.5' },
    { id: 2, massCalG: '50.0', massWaterG: '200.0', massIceG: '28.2', tempInitC: '26.0', tempFinalC: '13.2' },
    { id: 3, massCalG: '50.0', massWaterG: '220.0', massIceG: '27.0', tempInitC: '24.5', tempFinalC: '13.0' },
  ]);

  const t = {
    en: {
      title: 'Practical 4.3: Specific Latent Heat of Fusion of Ice by Method of Mixtures',
      aim: 'Aim: To determine the specific latent heat of fusion of ice (L_f) using a copper calorimeter and verify against the standard accepted value (3.34 × 10⁵ J/kg).',
      apparatus: 'Apparatus: Copper calorimeter with stirrer in wooden jacket with felt lagging, thermometer (0–50°C, 0.1°C div), crushed dry ice cubes, blotting/filter paper, sensitive balance.',
      theoryTitle: 'Physical Principle & Phase Change Energy',
      theoryText: 'When dry ice at 0°C is added to water at initial temperature θ_i, it absorbs latent heat of fusion L_f to melt into water at 0°C, and the resulting water absorbs sensible heat to warm to the final equilibrium temperature θ_f:\n\nHeat Gained by Ice = Heat Lost by (Water + Calorimeter)\nm_ice · L_f + m_ice · c_w · (θ_f - 0) = (m_w · c_w + m_c · c_c) · (θ_i - θ_f)\n\nTherefore, the latent heat of fusion is:\nL_f = [ (m_w · c_w + m_c · c_c) · (θ_i - θ_f) - m_ice · c_w · θ_f ] / m_ice\n\nwhere:\n• c_w = 4186 J / kg·K (specific heat capacity of water)\n• c_c = 385 J / kg·K (specific heat capacity of copper)\n• Accepted benchmark value: L_f ≈ 3.34 × 10⁵ J / kg.',
      procedure: 'Procedure: 1. Determine mass of empty dry calorimeter + stirrer (m_c). 2. Add water to about 2/3 full at a temperature 5–6°C above room temperature to balance ambient heat losses; reweigh (m_c + m_w). 3. Record initial water temperature (θ_i). 4. Take dry pieces of melting ice, thoroughly dry their surface between sheets of blotting paper, and add into the calorimeter without splashing. 5. Stir gently until all ice is completely melted and record the minimum final temperature reached (θ_f). 6. Reweigh the calorimeter to determine the exact mass of added ice (m_ice).',
      obsTitle: 'Experimental Observations (Ice Fusion Trials)',
      colTrial: 'Trial',
      colMassWater: 'Water Mass (g)',
      colMassIce: 'Ice Mass (g)',
      colInitTemp: 'Initial θ_i (°C)',
      colFinalTemp: 'Final θ_f (°C)',
      colExpLf: 'Calculated L_f (J/kg)',
      colDiff: 'Discrepancy %',
      calcSummaryTitle: 'Analytical Summary & Ice Latent Heat',
      meanLf: 'Mean Experimental Latent Heat (L_f):',
      acceptedLf: 'Accepted Standard Value:',
      percentageDiff: 'Discrepancy from Accepted Value:',
      verdictPass: 'Latent Heat Verified Within Syllabus Tolerance (< 4.0%)',
      verdictFail: 'Check Water on Ice Surfaces or Splashing',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Ice cubes must be strictly at 0°C (melting) and thoroughly dried with blotting paper immediately before dropping into the calorimeter to avoid adding free water that does not undergo latent phase change. 2. Start with water slightly above room temperature so that final temperature is equally below room temperature; this equalizes radiation heat gained and lost. 3. Stir continuously to ensure all ice melts before recording the final temperature minimum.',
      loadSample: 'Load Verified Ice Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4.3: මිශ්‍රණ ක්‍රමයෙන් අයිස්වල විලයනයේ විශිෂ්ට ගුප්ත තාපය සෙවීම',
      aim: 'අරමුණ: තඹ කැලරිමීටරයක් භාවිතයෙන් මිශ්‍රණ ක්‍රමය මගින් අයිස්වල විලයනයේ විශිෂ්ට ගුප්ත තාපය (L_f) නිර්ණය කිරීම සහ සම්මත අගය (3.34 × 10⁵ J/kg) සමඟ සැසඳීම.',
      apparatus: 'උපකරණ: තඹ කැලරිමීටරය සහ කලතනය, පරිවාරක ලී පෙට්ටිය, උෂ්ණත්වමානය, වියළි අයිස් කැට, පෙරහන් කඩදාසි, තුලාව.',
      theoryTitle: 'භෞතික මූලධර්මය සහ කලාප විපර්යාස ශක්තිය',
      theoryText: '0°C හි පවතින වියළි අයිස්, θ_i උෂ්ණත්වයේ පවතින ජලයට දැමූ විට, අයිස් 0°C ජලය බවට පත්වීමට L_f ගුප්ත තාපය ද, ඉන්පසු θ_f අවසන් උෂ්ණත්වය දක්වා රත්වීමට සංවේදී තාපය ද ලබා ගනී:\n\nඅයිස් ලබාගත් තාපය = ජලය හා කැලරිමීටරය පිටකළ තාපය\nm_ice · L_f + m_ice · c_w · (θ_f - 0) = (m_w · c_w + m_c · c_c) · (θ_i - θ_f)\n\nඑබැවින් අයිස්වල විලයනයේ විශිෂ්ට ගුප්ත තාපය L_f:\nL_f = [ (m_w · c_w + m_c · c_c) · (θ_i - θ_f) - m_ice · c_w · θ_f ] / m_ice\n\nමෙහි:\n• c_w = 4186 J / kg·K (ජලයේ විශිෂ්ට තාප ධාරිතාව)\n• c_c = 385 J / kg·K (තඹවල විශිෂ්ට තාප ධාරිතාව)\n• පිළිගත් සම්මත අගය: L_f ≈ 3.34 × 10⁵ J / kg.',
      procedure: 'ක්‍රමවේදය: 1. වියළි කැලරිමීටරයේ සහ කලතනයේ ස්කන්ධය මනින්න (m_c). 2. කාමර උෂ්ණත්වයට වඩා 5–6°C වැඩි ජලය දමා නැවත කිරන්න (m_c + m_w). 3. මුල් උෂ්ණත්වය θ_i සටහන් කරන්න. 4. දියවන අයිස් කැට පෙරහන් කඩදාසි අතර තබා හොඳින් වියළා කැලරිමීටරයට දමන්න. 5. සියලු අයිස් දියවන තෙක් සෙමෙන් කලතමින් අවම අවසන් උෂ්ණත්වය θ_f සටහන් කරන්න. 6. කැලරිමීටරය නැවත කිරා එකතු කළ අයිස් ස්කන්ධය m_ice සොයන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (අයිස් විලයනය)',
      colTrial: 'වාරය',
      colMassWater: 'ජල ස්කන්ධය (g)',
      colMassIce: 'අයිස් ස්කන්ධය (g)',
      colInitTemp: 'මුල් θ_i (°C)',
      colFinalTemp: 'අවසන් θ_f (°C)',
      colExpLf: 'ගණනය කළ L_f (J/kg)',
      colDiff: 'වෙනස %',
      calcSummaryTitle: 'විශ්ලේෂණ සාරාංශය සහ අයිස් ගුප්ත තාපය',
      meanLf: 'මධ්‍යන්‍ය ගුප්ත තාපය (L_f):',
      acceptedLf: 'පිළිගත් සම්මත අගය:',
      percentageDiff: 'සම්මත අගයෙන් වෙනස:',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම් තුළ ගුප්ත තාපය සත්‍යාපනය විය (< 4.0%)',
      verdictFail: 'අයිස් පෘෂ්ඨයේ ජලය තිබීම හෝ විසිරීම් පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. අයිස් දැමීමට පෙර පෙරහන් කඩදාසිවලින් හොඳින් තෙත මාත්තු කළ යුතුය; නැතහොත් දියවූ ජලය එකතු වී ගණනය දෝෂ සහිත වේ. 2. විකිරණ තාප හානි තුලනය කිරීමට කාමර උෂ්ණත්වයට වඩා ඉහළ උෂ්ණත්වයකින් අරඹා කාමර උෂ්ණත්වයට වඩා පහළ උෂ්ණත්වයකින් අවසන් කරන්න. 3. අයිස් සම්පූර්ණයෙන්ම දියවන තෙක් මනාව කලවම් කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof IceTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const mcKg = parseFloat(tr.massCalG) / 1000;
    const mwKg = parseFloat(tr.massWaterG) / 1000;
    const miKg = parseFloat(tr.massIceG) / 1000;
    const tiC = parseFloat(tr.tempInitC);
    const tfC = parseFloat(tr.tempFinalC);

    if (
      !isNaN(mcKg) &&
      !isNaN(mwKg) &&
      !isNaN(miKg) &&
      !isNaN(tiC) &&
      !isNaN(tfC) &&
      miKg > 0 &&
      tiC > tfC &&
      tfC > 0
    ) {
      const expLf = calculateLatentHeatOfFusion({
        massIceKg: miKg,
        massWaterKg: mwKg,
        massCalorimeterKg: mcKg,
        initialTempWaterCalC: tiC,
        finalTempMixtureC: tfC,
      });
      const diffPerc = Math.abs((expLf - 334000) / 334000) * 100;
      return {
        ...tr,
        expLf,
        diffPerc,
      };
    }
    return { ...tr, expLf: null, diffPerc: null };
  });

  const validLfs = calculatedTrials.map((t) => t.expLf).filter((l): l is number => l !== null && l > 0);
  const meanLf = validLfs.length > 0 ? validLfs.reduce((a, b) => a + b, 0) / validLfs.length : null;

  const meanDiffPerc =
    meanLf !== null ? Math.abs((meanLf - 334000) / 334000) * 100 : null;

  const isPass = meanDiffPerc !== null && meanDiffPerc <= 4.0;

  const handleLoadSample = () => {
    setTrials([
      { id: 1, massCalG: '50.0', massWaterG: '200.0', massIceG: '25.0', tempInitC: '25.0', tempFinalC: '13.5' },
      { id: 2, massCalG: '50.0', massWaterG: '200.0', massIceG: '28.2', tempInitC: '26.0', tempFinalC: '13.2' },
      { id: 3, massCalG: '50.0', massWaterG: '220.0', massIceG: '27.0', tempInitC: '24.5', tempFinalC: '13.0' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, massWaterG: '', massIceG: '', tempInitC: '', tempFinalC: '' })));
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
              <Snowflake className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'අයිස් දියවීමේ සැකැස්ම' : 'Ice Melting in Calorimeter Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="300" height="200" viewBox="0 0 300 200" className="overflow-visible">
                {/* Calorimeter Vessel */}
                <rect x="80" y="50" width="140" height="110" fill="#F59E0B" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" rx="3" />
                <rect x="82" y="85" width="136" height="73" fill="#0284C7" fillOpacity="0.25" />

                {/* Melting Ice Cubes floating */}
                <rect x="110" y="80" width="18" height="18" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" rx="2" />
                <rect x="135" y="82" width="16" height="16" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" rx="2" />
                <rect x="160" y="79" width="18" height="18" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1" rx="2" />
                <text x="145" y="72" textAnchor="middle" fontSize="9" fill="#0369A1" fontWeight="bold">Dry Ice at 0°C</text>

                {/* Thermometer */}
                <rect x="195" y="20" width="6" height="130" fill="#FFFFFF" stroke="#64748B" strokeWidth="1" rx="2" />
                <circle cx="198" cy="145" r="5" fill="#EF4444" />
                <line x1="198" y1="45" x2="198" y2="145" stroke="#EF4444" strokeWidth="2" />
                <text x="210" y="35" fontSize="8" fill="#1E293B" fontWeight="bold">θ_f</text>

                {/* Stirrer */}
                <path d="M 100 45 L 100 145 L 110 145" fill="none" stroke="#B45309" strokeWidth="2" />
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'අයිස් ලබාගත් තාපය: m_ice L_f + m_ice c_w θ_f = (m_w c_w + m_c c_c)(θ_i - θ_f)' : 'Ice heat absorbed: m_ice L_f + m_ice c_w θ_f = (m_w c_w + m_c c_c)(θ_i - θ_f)'}
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
                  <th className="py-2.5 px-3 font-semibold">{t.colTrial}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colMassWater}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colMassIce}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colInitTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colFinalTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colExpLf}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colDiff}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-medium text-[#14243A]">{tr.id}</td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.massWaterG}
                        onChange={(e) => updateTrial(tr.id, 'massWaterG', e.target.value)}
                        className="w-20 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.massIceG}
                        onChange={(e) => updateTrial(tr.id, 'massIceG', e.target.value)}
                        className="w-20 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.tempInitC}
                        onChange={(e) => updateTrial(tr.id, 'tempInitC', e.target.value)}
                        className="w-18 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.tempFinalC}
                        onChange={(e) => updateTrial(tr.id, 'tempFinalC', e.target.value)}
                        className="w-18 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0F766E]">
                      {tr.expLf !== null ? `${(tr.expLf / 1000).toFixed(1)} kJ/kg` : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-xs">
                      {tr.diffPerc !== null ? `${tr.diffPerc.toFixed(1)}%` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analytical Summary Box */}
          <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.meanLf}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {meanLf !== null ? `${(meanLf / 1000).toFixed(1)} kJ/kg (${meanLf.toFixed(0)} J/kg)` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.acceptedLf}</span>
                <span className="font-mono font-medium text-[#14243A]">334.0 kJ/kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.percentageDiff}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {meanDiffPerc !== null ? `${meanDiffPerc.toFixed(2)}%` : '—'}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-3 rounded-lg border bg-white">
              {isPass ? (
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm">{t.verdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
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

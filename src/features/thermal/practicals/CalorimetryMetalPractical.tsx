'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Flame } from 'lucide-react';
import { calculateSpecificHeatCapacityMixture } from '../physics/calculations';

interface CalorimetryMetalPracticalProps {
  locale?: Locale;
}

interface MetalTrial {
  id: number;
  metalNameEn: string;
  metalNameSi: string;
  massSolidG: string;
  tempSolidC: string;
  massWaterG: string;
  massCalG: string;
  initTempWaterC: string;
  finalTempC: string;
  standardCJkgK: number;
}

export const CalorimetryMetalPractical: React.FC<CalorimetryMetalPracticalProps> = ({
  locale = 'en',
}) => {
  const [trials, setTrials] = useState<MetalTrial[]>([
    {
      id: 1,
      metalNameEn: 'Copper Block',
      metalNameSi: 'තඹ කුට්ටිය',
      massSolidG: '150.0',
      tempSolidC: '100.0',
      massWaterG: '200.0',
      massCalG: '50.0',
      initTempWaterC: '20.0',
      finalTempC: '25.0',
      standardCJkgK: 385,
    },
    {
      id: 2,
      metalNameEn: 'Brass Cylinder',
      metalNameSi: 'පිත්තල සිලින්ඩරය',
      massSolidG: '120.0',
      tempSolidC: '100.0',
      massWaterG: '180.0',
      massCalG: '50.0',
      initTempWaterC: '21.0',
      finalTempC: '25.7',
      standardCJkgK: 380,
    },
    {
      id: 3,
      metalNameEn: 'Aluminum Block',
      metalNameSi: 'ඇලුමිනියම් කුට්ටිය',
      massSolidG: '80.0',
      tempSolidC: '100.0',
      massWaterG: '220.0',
      massCalG: '50.0',
      initTempWaterC: '19.5',
      finalTempC: '24.9',
      standardCJkgK: 900,
    },
    {
      id: 4,
      metalNameEn: 'Lead Pellets',
      metalNameSi: 'ඊයම් කැබලි',
      massSolidG: '250.0',
      tempSolidC: '100.0',
      massWaterG: '150.0',
      massCalG: '50.0',
      initTempWaterC: '22.0',
      finalTempC: '25.9',
      standardCJkgK: 130,
    },
  ]);

  const t = {
    en: {
      title: 'Practical 4.2: Specific Heat Capacity of a Metal by Method of Mixtures',
      aim: 'Aim: To determine the specific heat capacity (c) of a metal solid using a copper calorimeter and the method of mixtures.',
      apparatus: 'Apparatus: Polished copper calorimeter with copper stirrer and lid, outer insulating wooden box with felt lining, thermometer (0–50°C, 0.1°C div), steam boiler with heater, metal solid specimen, sensitive chemical balance.',
      theoryTitle: 'Physical Principle & Conservation of Thermal Energy',
      theoryText: 'When a hot solid is transferred into cold water in a calorimeter, heat lost by the solid equals heat gained by the water and calorimeter (neglecting external heat exchanges):\n\nHeat Lost = Heat Gained\nm_s · c_s · (θ_s - θ_f) = (m_w · c_w + m_c · c_c) · (θ_f - θ_i)\n\nTherefore, the specific heat capacity of the solid is:\nc_s = [ (m_w · c_w + m_c · c_c) · (θ_f - θ_i) ] / [ m_s · (θ_s - θ_f) ]\n\nwhere:\n• c_w is specific heat capacity of water (4186 J / kg·K)\n• c_c is specific heat capacity of copper (385 J / kg·K)\n• θ_s is boiling steam temperature (approx 100°C)\n• θ_i is initial water temperature and θ_f is final maximum equilibrium temperature.',
      procedure: 'Procedure: 1. Weigh empty dry calorimeter + stirrer (m_c). 2. Add water to fill about 2/3 and reweigh (m_c + m_w). 3. Suspend specimen in the steam boiler until its temperature stabilizes at 100°C (θ_s). 4. Record initial temperature of water (θ_i). 5. Rapidly transfer the specimen into the calorimeter, stir continuously, and record the highest equilibrium temperature reached (θ_f).',
      obsTitle: 'Experimental Observations (Calorimetry Trials)',
      colMetal: 'Metal Specimen',
      colMassSolid: 'Solid Mass (g)',
      colMassWater: 'Water Mass (g)',
      colInitTemp: 'Initial θ_i (°C)',
      colFinalTemp: 'Final θ_f (°C)',
      colExpC: 'Calculated c (J/kg·K)',
      colStdC: 'Accepted c (J/kg·K)',
      colDiff: 'Discrepancy %',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. The transfer of the hot solid from the heater to the calorimeter must be extremely rapid to prevent convection/radiation heat loss to the room air. 2. Stir thoroughly and continuously to maintain uniform water temperature. 3. Avoid splashing water when dropping the solid into the calorimeter. 4. The calorimeter outer surface must be polished and lagged with felt to minimize radiation losses.',
      loadSample: 'Load Verified Specimen Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4.2: මිශ්‍රණ ක්‍රමයෙන් ලෝහයක විශිෂ්ට තාප ධාරිතාව සෙවීම',
      aim: 'අරමුණ: තඹ කැලරිමීටරයක් භාවිතයෙන් මිශ්‍රණ ක්‍රමය මගින් ලෝහ ඝනයක විශිෂ්ට තාප ධාරිතාව (c) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: මනාව ඔප දැමූ තඹ කැලරිමීටරය සහ කලතනය, පරිවාරක ලී පෙට්ටිය සහ ලොම් පුළුන්, උෂ්ණත්වමානය (0–50°C), හුමාල තාපකය, ලෝහ සාම්පලය, තුලාව.',
      theoryTitle: 'භෞතික මූලධර්මය සහ තාප සංස්ථිතිය',
      theoryText: 'තාපය පිටතට හානි නොවන පරිදි උණුසුම් ලෝහය කැලරිමීටරයේ ඇති ජලයට දැමූ විට, ලෝහය පිටකළ තාපය ජලය හා කැලරිමීටරය ලබාගත් තාපයට සමාන වේ:\n\nපිටකළ තාපය = ලබාගත් තාපය\nm_s · c_s · (θ_s - θ_f) = (m_w · c_w + m_c · c_c) · (θ_f - θ_i)\n\nඑබැවින් ලෝහයේ විශිෂ්ට තාප ධාරිතාව c_s:\nc_s = [ (m_w · c_w + m_c · c_c) · (θ_f - θ_i) ] / [ m_s · (θ_s - θ_f) ]\n\nමෙහි:\n• c_w යනු ජලයේ විශිෂ්ට තාප ධාරිතාවයි (4186 J / kg·K)\n• c_c යනු තඹවල විශිෂ්ට තාප ධාරිතාවයි (385 J / kg·K)\n• θ_s යනු ලෝහයේ මුල් උෂ්ණත්වයයි (100°C පමණ)\n• θ_i මුල් ජල උෂ්ණත්වය සහ θ_f අවසන් උපරිම මිශ්‍රණ උෂ්ණත්වයයි.',
      procedure: 'ක්‍රමවේදය: 1. වියළි කැලරිමීටරයේ සහ කලතනයේ ස්කන්ධය මනින්න (m_c). 2. ජලය 2/3 ක් පමණ දමා නැවත කිරන්න (m_c + m_w). 3. ලෝහය හුමාල තාපකයේ තබා 100°C දක්වා රත් කරන්න (θ_s). 4. ජලයේ මුල් උෂ්ණත්වය θ_i සටහන් කරන්න. 5. ලෝහය කඩිනමින් කැලරිමීටරයට මාරු කර කලතමින් උපරිම උෂ්ණත්වය θ_f සටහන් කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (මිශ්‍රණ ක්‍රමය)',
      colMetal: 'ලෝහ සාම්පලය',
      colMassSolid: 'ලෝහ ස්කන්ධය (g)',
      colMassWater: 'ජල ස්කන්ධය (g)',
      colInitTemp: 'මුල් θ_i (°C)',
      colFinalTemp: 'අවසන් θ_f (°C)',
      colExpC: 'ගණනය කළ c (J/kg·K)',
      colStdC: 'සම්මත c (J/kg·K)',
      colDiff: 'වෙනස %',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. ලෝහය රත් වූ පසු කැලරිමීටරයට දැමීම ඉතා ක්ෂණිකව කළ යුතුය; ප්‍රමාද වීමෙන් තාපය විකිරණය වේ. 2. උෂ්ණත්වය ඒකාකාරී වන පරිදි නොකඩවා කලවම් කළ යුතුය. 3. ලෝහය දැමීමේදී ජලය පිටතට විසිරීම වැළැක්විය යුතුය. 4. විකිරණ තාප හානිය අවම කිරීමට කැලරිමීටරයේ පිටත පෘෂ්ඨය ඔප දමා තිබිය යුතුය.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof MetalTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const msKg = parseFloat(tr.massSolidG) / 1000;
    const tsC = parseFloat(tr.tempSolidC);
    const mwKg = parseFloat(tr.massWaterG) / 1000;
    const mcKg = parseFloat(tr.massCalG) / 1000;
    const tiC = parseFloat(tr.initTempWaterC);
    const tfC = parseFloat(tr.finalTempC);

    if (
      !isNaN(msKg) &&
      !isNaN(tsC) &&
      !isNaN(mwKg) &&
      !isNaN(mcKg) &&
      !isNaN(tiC) &&
      !isNaN(tfC) &&
      msKg > 0 &&
      tsC > tfC &&
      tfC > tiC
    ) {
      const expC = calculateSpecificHeatCapacityMixture({
        massSolidKg: msKg,
        initialTempSolidC: tsC,
        massWaterKg: mwKg,
        massCalorimeterKg: mcKg,
        initialTempWaterCalC: tiC,
        finalTempMixtureC: tfC,
      });
      const diffPerc = Math.abs((expC - tr.standardCJkgK) / tr.standardCJkgK) * 100;
      return {
        ...tr,
        expC,
        diffPerc,
        isPass: diffPerc <= 3.5,
      };
    }
    return { ...tr, expC: null, diffPerc: null, isPass: false };
  });

  const handleLoadSample = () => {
    setTrials([
      {
        id: 1,
        metalNameEn: 'Copper Block',
        metalNameSi: 'තඹ කුට්ටිය',
        massSolidG: '150.0',
        tempSolidC: '100.0',
        massWaterG: '200.0',
        massCalG: '50.0',
        initTempWaterC: '20.0',
        finalTempC: '25.0',
        standardCJkgK: 385,
      },
      {
        id: 2,
        metalNameEn: 'Brass Cylinder',
        metalNameSi: 'පිත්තල සිලින්ඩරය',
        massSolidG: '120.0',
        tempSolidC: '100.0',
        massWaterG: '180.0',
        massCalG: '50.0',
        initTempWaterC: '21.0',
        finalTempC: '25.7',
        standardCJkgK: 380,
      },
      {
        id: 3,
        metalNameEn: 'Aluminum Block',
        metalNameSi: 'ඇලුමිනියම් කුට්ටිය',
        massSolidG: '80.0',
        tempSolidC: '100.0',
        massWaterG: '220.0',
        massCalG: '50.0',
        initTempWaterC: '19.5',
        finalTempC: '24.9',
        standardCJkgK: 900,
      },
      {
        id: 4,
        metalNameEn: 'Lead Pellets',
        metalNameSi: 'ඊයම් කැබලි',
        massSolidG: '250.0',
        tempSolidC: '100.0',
        massWaterG: '150.0',
        massCalG: '50.0',
        initTempWaterC: '22.0',
        finalTempC: '25.9',
        standardCJkgK: 130,
      },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, massSolidG: '', massWaterG: '', initTempWaterC: '', finalTempC: '' })));
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
              <Flame className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'කැලරිමීටර සැකැස්මේ සටහන' : 'Calorimeter Apparatus Cross-Section'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="300" height="210" viewBox="0 0 300 210" className="overflow-visible">
                {/* Outer Wooden Box */}
                <rect x="60" y="50" width="180" height="140" fill="#D97706" fillOpacity="0.15" stroke="#B45309" strokeWidth="2" rx="4" />
                <text x="150" y="42" textAnchor="middle" fontSize="9" fill="#92400E" fontWeight="bold">Lagged Wooden Box</text>

                {/* Felt Insulation Lining */}
                <rect x="75" y="65" width="150" height="115" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" rx="2" />

                {/* Copper Calorimeter Vessel */}
                <rect x="95" y="80" width="110" height="90" fill="#F59E0B" fillOpacity="0.25" stroke="#B45309" strokeWidth="2" rx="2" />
                <text x="150" y="185" textAnchor="middle" fontSize="8" fill="#B45309" fontWeight="bold">Copper Calorimeter (m_c)</text>

                {/* Water Level */}
                <rect x="97" y="105" width="106" height="63" fill="#0284C7" fillOpacity="0.3" />
                <text x="150" y="125" textAnchor="middle" fontSize="9" fill="#0369A1" fontWeight="bold">Water (m_w, θ_i)</text>

                {/* Metal Solid Specimen inside */}
                <rect x="135" y="135" width="30" height="25" fill="#475569" stroke="#1E293B" strokeWidth="1.5" rx="1" />
                <text x="150" y="151" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">Solid</text>

                {/* Stirrer (Copper ring and handle) */}
                <path d="M 120 70 L 120 160 L 128 160" fill="none" stroke="#B45309" strokeWidth="2" />

                {/* Thermometer entering through lid */}
                <rect x="175" y="20" width="6" height="135" fill="#FFFFFF" stroke="#64748B" strokeWidth="1" rx="2" />
                <circle cx="178" cy="155" r="5" fill="#EF4444" />
                <line x1="178" y1="50" x2="178" y2="155" stroke="#EF4444" strokeWidth="2" />
                <text x="190" y="35" fontSize="8" fill="#1E293B" fontWeight="bold">θ_f Max</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'තාප සංස්ථිතිය: m_s c_s (θ_s - θ_f) = (m_w c_w + m_c c_c)(θ_f - θ_i)' : 'Conservation of heat: m_s c_s (θ_s - θ_f) = (m_w c_w + m_c c_c)(θ_f - θ_i)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Method */}
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
                  <th className="py-2.5 px-3 font-semibold">{t.colMetal}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colMassSolid}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colMassWater}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colInitTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colFinalTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colExpC}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colStdC}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colDiff}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-medium text-[#14243A]">
                      {locale === 'si' ? tr.metalNameSi : tr.metalNameEn}
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.massSolidG}
                        onChange={(e) => updateTrial(tr.id, 'massSolidG', e.target.value)}
                        className="w-20 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
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
                        value={tr.initTempWaterC}
                        onChange={(e) => updateTrial(tr.id, 'initTempWaterC', e.target.value)}
                        className="w-18 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.finalTempC}
                        onChange={(e) => updateTrial(tr.id, 'finalTempC', e.target.value)}
                        className="w-18 px-1.5 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#0F766E]">
                      {tr.expC !== null ? `${tr.expC.toFixed(0)}` : '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#475569]">
                      {tr.standardCJkgK}
                    </td>
                    <td className="py-2.5 px-3">
                      {tr.diffPerc !== null ? (
                        <span className={`font-mono text-xs font-semibold ${tr.isPass ? 'text-emerald-700' : 'text-amber-600'}`}>
                          {tr.diffPerc.toFixed(1)}%
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

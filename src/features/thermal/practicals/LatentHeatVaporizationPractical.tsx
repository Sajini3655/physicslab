'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, CloudRain, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateLatentHeatOfVaporization } from '../physics/calculations';

interface LatentHeatVaporizationPracticalProps {
  locale?: Locale;
}

interface SteamTrial {
  id: number;
  massCalG: string;
  massWaterG: string;
  massSteamG: string;
  tempInitC: string;
  tempFinalC: string;
  boilingTempC: string;
}

export const LatentHeatVaporizationPractical: React.FC<LatentHeatVaporizationPracticalProps> = ({
  locale = 'en',
}) => {
  const [trials, setTrials] = useState<SteamTrial[]>([
    { id: 1, massCalG: '50.0', massWaterG: '200.0', massSteamG: '5.2', tempInitC: '18.0', tempFinalC: '32.5', boilingTempC: '100.0' },
    { id: 2, massCalG: '50.0', massWaterG: '200.0', massSteamG: '4.8', tempInitC: '17.5', tempFinalC: '30.9', boilingTempC: '100.0' },
    { id: 3, massCalG: '50.0', massWaterG: '220.0', massSteamG: '5.5', tempInitC: '18.5', tempFinalC: '32.1', boilingTempC: '100.0' },
  ]);

  const t = {
    en: {
      title: 'Practical 4.4: Specific Latent Heat of Vaporization of Water',
      aim: 'Aim: To determine the specific latent heat of vaporization of water (L_v) using a steam generator, water trap, and copper calorimeter.',
      apparatus: 'Apparatus: Steam generator boiler with heater, glass water trap (condenser droplet separator), rubber delivery tube with nozzle, lagged copper calorimeter with stirrer, thermometer (0–50°C, 0.1°C div), balance.',
      theoryTitle: 'Physical Principle & Latent Vaporization Energy',
      theoryText: 'When dry steam at boiling temperature θ_b (100°C) enters cold water, it condenses into water at 100°C releasing latent heat L_v, and the condensed water cools to the final equilibrium temperature θ_f:\n\nHeat Lost by Steam = Heat Gained by (Water + Calorimeter)\nm_steam · L_v + m_steam · c_w · (θ_b - θ_f) = (m_w · c_w + m_c · c_c) · (θ_f - θ_i)\n\nTherefore, the specific latent heat of vaporization is:\nL_v = [ (m_w · c_w + m_c · c_c) · (θ_f - θ_i) - m_steam · c_w · (θ_b - θ_f) ] / m_steam\n\nwhere:\n• c_w = 4186 J / kg·K (water specific heat)\n• c_c = 385 J / kg·K (copper specific heat)\n• Accepted standard value: L_v ≈ 2.26 × 10⁶ J / kg (2260 kJ / kg).',
      procedure: 'Procedure: 1. Determine mass of empty dry calorimeter + stirrer (m_c). 2. Add cold water (3–4°C below room temperature) and reweigh (m_c + m_w). 3. Boil water in the steam generator and connect the water trap; allow steam to blow freely until only dry steam emerges. 4. Record initial temperature (θ_i). 5. Insert steam nozzle beneath water surface and pass steam until temperature rises by about 12–15°C. 6. Remove nozzle, stir thoroughly, record highest temperature reached (θ_f), and reweigh to find condensed steam mass (m_steam).',
      obsTitle: 'Experimental Observations (Steam Vaporization Trials)',
      colTrial: 'Trial',
      colMassWater: 'Water Mass (g)',
      colMassSteam: 'Steam Mass (g)',
      colInitTemp: 'Initial θ_i (°C)',
      colFinalTemp: 'Final θ_f (°C)',
      colExpLv: 'Calculated L_v (kJ/kg)',
      colDiff: 'Discrepancy %',
      calcSummaryTitle: 'Analytical Summary & Water Latent Heat',
      meanLv: 'Mean Experimental Latent Heat (L_v):',
      acceptedLv: 'Accepted Standard Value:',
      percentageDiff: 'Discrepancy from Standard Value:',
      verdictPass: 'Vaporization Heat Verified Within Syllabus Tolerance (< 4.5%)',
      verdictFail: 'Check Water Trap Condensation or Splashing',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. A water trap must be installed close to the calorimeter to intercept condensed liquid droplets, ensuring that only dry gaseous steam enters the calorimeter. 2. The delivery tube must be lagged or insulated so steam does not condense before reaching the water. 3. Start with water below room temperature and finish with water above room temperature by an equal interval to minimize net radiation heat loss.',
      loadSample: 'Load Verified Steam Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4.4: ජලයේ වාෂ්පීභවනයේ විශිෂ්ට ගුප්ත තාපය සෙවීම',
      aim: 'අරමුණ: හුමාල ජනකයක්, ජල උගුලක් සහ තඹ කැලරිමීටරයක් භාවිතයෙන් ජලයේ වාෂ්පීභවනයේ විශිෂ්ට ගුප්ත තාපය (L_v) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: හුමාල ජනකය සහ තාපකය, වීදුරු ජල උගුල (දිය බිංදු වෙන්කරනය), බෙදාහැරීමේ නළය, පරිවාරක සහිත තඹ කැලරිමීටරය, උෂ්ණත්වමානය, තුලාව.',
      theoryTitle: 'භෞතික මූලධර්මය සහ වාෂ්පීභවන ගුප්ත තාපය',
      theoryText: 'තාපාංකයේ (100°C) පවතින වියළි හුමාලය සිසිල් ජලයට ඇතුළු වූ විට, 100°C ජලය බවට ඝනීභවනය වෙමින් L_v ගුප්ත තාපය මුදාහරින අතර, එම ඝනීභවනය වූ ජලය θ_f අවසන් උෂ්ණත්වය දක්වා සිසිල් වෙමින් තවදුරටත් තාපය මුදාහරී:\n\nහුමාලය පිටකළ තාපය = ජලය හා කැලරිමීටරය ලබාගත් තාපය\nm_steam · L_v + m_steam · c_w · (100 - θ_f) = (m_w · c_w + m_c · c_c) · (θ_f - θ_i)\n\nඑබැවින් වාෂ්පීභවනයේ විශිෂ්ට ගුප්ත තාපය L_v:\nL_v = [ (m_w · c_w + m_c · c_c) · (θ_f - θ_i) - m_steam · c_w · (100 - θ_f) ] / m_steam\n\nමෙහි:\n• c_w = 4186 J / kg·K (ජලයේ විශිෂ්ට තාප ධාරිතාව)\n• c_c = 385 J / kg·K (තඹවල විශිෂ්ට තාප ධාරිතාව)\n• සම්මත පිළිගත් අගය: L_v ≈ 2.26 × 10⁶ J / kg (2260 kJ / kg).',
      procedure: 'ක්‍රමවේදය: 1. වියළි කැලරිමීටරයේ සහ කලතනයේ ස්කන්ධය මනින්න (m_c). 2. කාමර උෂ්ණත්වයට වඩා 3–4°C අඩු සිසිල් ජලය දමා නැවත කිරන්න (m_c + m_w). 3. හුමාල ජනකයේ ජලය නටවා ජල උගුල හරහා වියළි හුමාලය පිටවන බව තහවුරු කරගන්න. 4. මුල් උෂ්ණත්වය θ_i සටහන් කරන්න. 5. හුමාල නළය ජලය තුළ ගිල්වා උෂ්ණත්වය 12–15°C කින් ඉහළ යන තෙක් හුමාලය යවන්න. 6. නළය ඉවත් කර කලතා උපරිම උෂ්ණත්වය θ_f සටහන් කර නැවත කිරා ඝනීභවනය වූ හුමාල ස්කන්ධය m_steam සොයන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (හුමාල වාෂ්පීභවනය)',
      colTrial: 'වාරය',
      colMassWater: 'ජල ස්කන්ධය (g)',
      colMassSteam: 'හුමාල ස්කන්ධය (g)',
      colInitTemp: 'මුල් θ_i (°C)',
      colFinalTemp: 'අවසන් θ_f (°C)',
      colExpLv: 'ගණනය කළ L_v (kJ/kg)',
      colDiff: 'වෙනස %',
      calcSummaryTitle: 'විශ්ලේෂණ සාරාංශය සහ වාෂ්පීභවන ගුප්ත තාපය',
      meanLv: 'මධ්‍යන්‍ය ගුප්ත තාපය (L_v):',
      acceptedLv: 'පිළිගත් සම්මත අගය:',
      percentageDiff: 'සම්මත අගයෙන් වෙනස:',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම් තුළ ගුප්ත තාපය සත්‍යාපනය විය (< 4.5%)',
      verdictFail: 'ජල උගුලේ ක්‍රියාකාරීත්වය හෝ විසිරීම් පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. කැලරිමීටරයට ඇතුළු වන්නේ සම්පූර්ණයෙන්ම වියළි හුමාලය බව තහවුරු කිරීමට කැලරිමීටරයට ආසන්නව ජල උගුලක් (water trap) සවි කළ යුතුය. 2. නළය තුළ හුමාලය ඝනීභවනය වීම වැළැක්වීමට නළය පරිවරණය කරන්න. 3. විකිරණ තාප හානි අවම කිරීමට කාමර උෂ්ණත්වයට වඩා පහළින් අරඹා සමාන පරතරයකින් ඉහළින් අවසන් කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof SteamTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const mcKg = parseFloat(tr.massCalG) / 1000;
    const mwKg = parseFloat(tr.massWaterG) / 1000;
    const msKg = parseFloat(tr.massSteamG) / 1000;
    const tiC = parseFloat(tr.tempInitC);
    const tfC = parseFloat(tr.tempFinalC);
    const tbC = parseFloat(tr.boilingTempC) || 100.0;

    if (
      !isNaN(mcKg) &&
      !isNaN(mwKg) &&
      !isNaN(msKg) &&
      !isNaN(tiC) &&
      !isNaN(tfC) &&
      msKg > 0 &&
      tfC > tiC &&
      tbC > tfC
    ) {
      const expLv = calculateLatentHeatOfVaporization({
        massSteamKg: msKg,
        massWaterKg: mwKg,
        massCalorimeterKg: mcKg,
        initialTempWaterCalC: tiC,
        finalTempMixtureC: tfC,
        boilingTempC: tbC,
      });
      const diffPerc = Math.abs((expLv - 2260000) / 2260000) * 100;
      return {
        ...tr,
        expLv,
        diffPerc,
      };
    }
    return { ...tr, expLv: null, diffPerc: null };
  });

  const validLvs = calculatedTrials.map((t) => t.expLv).filter((l): l is number => l !== null && l > 0);
  const meanLv = validLvs.length > 0 ? validLvs.reduce((a, b) => a + b, 0) / validLvs.length : null;

  const meanDiffPerc =
    meanLv !== null ? Math.abs((meanLv - 2260000) / 2260000) * 100 : null;

  const isPass = meanDiffPerc !== null && meanDiffPerc <= 4.5;

  const handleLoadSample = () => {
    setTrials([
      { id: 1, massCalG: '50.0', massWaterG: '200.0', massSteamG: '5.2', tempInitC: '18.0', tempFinalC: '32.5', boilingTempC: '100.0' },
      { id: 2, massCalG: '50.0', massWaterG: '200.0', massSteamG: '4.8', tempInitC: '17.5', tempFinalC: '30.9', boilingTempC: '100.0' },
      { id: 3, massCalG: '50.0', massWaterG: '220.0', massSteamG: '5.5', tempInitC: '18.5', tempFinalC: '32.1', boilingTempC: '100.0' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, massWaterG: '', massSteamG: '', tempInitC: '', tempFinalC: '' })));
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
              <CloudRain className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'හුමාල ජනකය සහ ජල උගුලේ සැකැස්ම' : 'Steam Generator & Water Trap Apparatus'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="210" viewBox="0 0 320 210" className="overflow-visible">
                {/* Boiler Boiler at Left */}
                <rect x="20" y="80" width="55" height="90" fill="#94A3B8" stroke="#475569" strokeWidth="2" rx="4" />
                <rect x="15" y="170" width="65" height="15" fill="#EF4444" fillOpacity="0.3" stroke="#DC2626" strokeWidth="1" rx="2" />
                <text x="47" y="125" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">Boiler (100°C)</text>

                {/* Steam Tube to Water Trap */}
                <path d="M 47 80 L 47 50 L 115 50 L 115 80" fill="none" stroke="#64748B" strokeWidth="4" />

                {/* Glass Water Trap in Middle */}
                <rect x="105" y="75" width="22" height="50" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" rx="3" />
                <rect x="106" y="112" width="20" height="12" fill="#0284C7" fillOpacity="0.4" />
                <text x="116" y="138" textAnchor="middle" fontSize="7" fill="#0284C7" fontWeight="bold">Water Trap</text>

                {/* Dry Steam Delivery Nozzle into Calorimeter */}
                <path d="M 120 85 L 120 60 L 225 60 L 225 130" fill="none" stroke="#D97706" strokeWidth="3" />
                <polygon points="222,130 228,130 225,135" fill="#D97706" />

                {/* Copper Calorimeter at Right */}
                <rect x="195" y="90" width="90" height="80" fill="#F59E0B" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" rx="3" />
                <rect x="197" y="115" width="86" height="53" fill="#0284C7" fillOpacity="0.25" />
                <text x="240" y="182" textAnchor="middle" fontSize="8" fill="#B45309" fontWeight="bold">Calorimeter</text>

                {/* Thermometer in Calorimeter */}
                <rect x="255" y="45" width="5" height="100" fill="#FFFFFF" stroke="#64748B" strokeWidth="1" rx="1" />
                <circle cx="257" cy="145" r="4" fill="#EF4444" />
                <line x1="257" y1="70" x2="257" y2="145" stroke="#EF4444" strokeWidth="1.5" />
                <text x="268" y="55" fontSize="8" fill="#1E293B" fontWeight="bold">θ_f</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'වියළි හුමාලය පමණක් ජලයට යැවීමට ජල උගුල (Water Trap) මගින් දිය බිංදු වෙන් කරයි.' : 'Water trap separates condensed liquid droplets so only dry steam enters calorimeter.'}
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
                  <th className="py-2.5 px-3 font-semibold">{t.colMassSteam}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colInitTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colFinalTemp}</th>
                  <th className="py-2.5 px-3 font-semibold">{t.colExpLv}</th>
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
                        value={tr.massSteamG}
                        onChange={(e) => updateTrial(tr.id, 'massSteamG', e.target.value)}
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
                      {tr.expLv !== null ? `${(tr.expLv / 1000).toFixed(0)} kJ/kg` : '—'}
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
                <span className="text-[#475569]">{t.meanLv}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {meanLv !== null ? `${(meanLv / 1000).toFixed(0)} kJ/kg (${meanLv.toFixed(0)} J/kg)` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.acceptedLv}</span>
                <span className="font-mono font-medium text-[#14243A]">2260 kJ/kg</span>
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

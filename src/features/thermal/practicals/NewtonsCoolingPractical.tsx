'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Flame, CheckCircle2, AlertCircle } from 'lucide-react';

interface NewtonsCoolingPracticalProps {
  locale?: Locale;
}

interface CoolingReading {
  timeMin: number;
  tempC: string;
}

export const NewtonsCoolingPractical: React.FC<NewtonsCoolingPracticalProps> = ({
  locale = 'en',
}) => {
  const [ambientTempC, setAmbientTempC] = useState<string>('28.0');
  const [readings, setReadings] = useState<CoolingReading[]>([
    { timeMin: 0, tempC: '70.0' },
    { timeMin: 2, tempC: '64.5' },
    { timeMin: 4, tempC: '59.8' },
    { timeMin: 6, tempC: '55.8' },
    { timeMin: 8, tempC: '52.3' },
    { timeMin: 10, tempC: '49.2' },
    { timeMin: 12, tempC: '46.5' },
    { timeMin: 14, tempC: '44.1' },
    { timeMin: 16, tempC: '42.0' },
    { timeMin: 18, tempC: '40.1' },
    { timeMin: 20, tempC: '38.4' },
  ]);

  const t = {
    en: {
      title: "Practical 4.5: Verification of Newton's Law of Cooling",
      aim: "Aim: To plot the cooling curve for a warm liquid and verify Newton's Law of Cooling by analyzing the rate of cooling (dθ/dt) as a function of excess temperature (θ - θ₀).",
      apparatus: "Apparatus: Double-walled copper calorimeter with water jacket, 0–100°C thermometer (0.1°C), mechanical stirrer, stopwatch, boiler/hot water supply.",
      theoryTitle: "Physical Principle & Newton's Law of Cooling",
      theoryText: "According to Newton's Law of Cooling, the rate of loss of heat from a body is directly proportional to its excess temperature above the surroundings, provided the temperature difference is moderate (typically < 30°C) and heat loss occurs mainly by natural/forced convection and radiation:\n\n- dQ/dt = - m · c · (dθ/dt) = k' · (θ - θ₀)\n\nTherefore, the rate of fall of temperature is:\n\ndθ/dt = - k · (θ - θ₀)\n\nwhere:\n• θ = temperature of the cooling liquid (°C)\n• θ₀ = steady ambient enclosure temperature (°C)\n• (θ - θ₀) = excess temperature\n• k = cooling constant dependent on surface area, nature of surface, mass, and specific heat capacity.\n\nA plot of cooling rate (dθ/dt) against excess temperature (θ - θ₀) yields a straight line passing through the origin.",
      procedure: "Procedure: 1. Fill the double enclosure water jacket with water to ensure a constant ambient temperature θ₀. 2. Pour hot water (around 75°C) into the inner calorimeter until it is 2/3 full. 3. Insert the thermometer and stirrer; stir gently and continuously to maintain uniform temperature. 4. Start the stopwatch when the temperature falls to 70.0°C. 5. Record the liquid temperature at 2-minute intervals for 20 minutes. 6. Plot the cooling curve (θ vs t), draw tangents at selected temperatures, and calculate dθ/dt.",
      obsTitle: "Cooling Time-Temperature Records",
      ambientLabel: "Ambient Enclosure Temperature θ₀ (°C):",
      colTime: "Time t (min)",
      colTemp: "Temp θ (°C)",
      colExcess: "Excess (θ - θ₀) (°C)",
      colRate: "Est. Rate dθ/dt (°C/min)",
      colRatio: "k = Rate / Excess (min⁻¹)",
      summaryTitle: "Cooling Law Verification & Analysis",
      meanKLabel: "Mean Cooling Constant k:",
      linearityVerdictPass: "Linearity Verified: Rate is proportional to excess temperature within experimental precision.",
      linearityVerdictFail: "Check ambient temperature stability or non-uniform stirring.",
      precautionsTitle: "Experimental Precautions",
      precautions: "1. The double-walled water jacket prevents draughts and maintains a constant surrounding temperature θ₀ throughout the experiment. 2. Stir continuously and gently to eliminate internal temperature gradients without adding mechanical work heat. 3. The thermometer bulb must be well immersed in the liquid without touching the calorimeter bottom or sides. 4. Only verify linearity for moderate temperature excesses where radiation follows approximate first-order Taylor expansion.",
      loadSample: "Load Verified Cooling Data",
      clearInputs: "Clear Inputs",
      printSheet: "Print Laboratory Record",
    },
    si: {
      title: "ප්‍රායෝගික පරීක්ෂණ 4.5: නිව්ටන්ගේ සිසිලන නියමය සත්‍යාපනය කිරීම",
      aim: "අරමුණ: උණුසුම් ද්‍රවයක සිසිලන වක්‍රය ඇඳීම සහ පරිසරයට සාපේක්ෂව වැඩිපුර උෂ්ණත්වය (θ - θ₀) මත සිසිලන සීඝ්‍රතාව (dθ/dt) රඳා පවතින ආකාරය විමර්ශනය කර නිව්ටන්ගේ සිසිලන නියමය සත්‍යාපනය කිරීම.",
      apparatus: "උපකරණ: ජල ආවරණයක් සහිත ද්විත්ව බිත්ති තඹ කැලරිමීටරය, 0–100°C උෂ්ණත්වමානය (0.1°C), ආලෝඩකය, විරාම ඝටිකාව, උණු වතුර සැපයුම.",
      theoryTitle: "භෞතික මූලධර්මය සහ නිව්ටන්ගේ සිසිලන නියමය",
      theoryText: "නිව්ටන්ගේ සිසිලන නියමයට අනුව, පරිසරයට සාපේක්ෂව වස්තුවක පවතින වැඩිපුර උෂ්ණත්වය සුළු අගයක් වන විට (සාමාන්‍යයෙන් < 30°C), වස්තුවෙන් තාපය හානිවීමේ සීඝ්‍රතාව පරිසරයට සාපේක්ෂ වැඩිපුර උෂ්ණත්වයට අනුලෝමව සමානුපාතික වේ:\n\n- dQ/dt = - m · c · (dθ/dt) = k' · (θ - θ₀)\n\nඑබැවින් උෂ්ණත්වය පහත වැටීමේ සීඝ්‍රතාව:\n\ndθ/dt = - k · (θ - θ₀)\n\nමෙහි:\n• θ = සිසිල් වන ද්‍රවයේ උෂ්ණත්වය (°C)\n• θ₀ = නියත පරිසර උෂ්ණත්වය (°C)\n• (θ - θ₀) = වැඩිපුර උෂ්ණත්වය (Excess Temperature)\n• k = පෘෂ්ඨික වර්ගඵලය, ස්වභාවය, ස්කන්ධය සහ විශිෂ්ට තාප ධාරිතාව මත රඳා පවතින නියතයකි.\n\nසිසිලන සීඝ්‍රතාව (dθ/dt) ට එදිරිව වැඩිපුර උෂ්ණත්වය (θ - θ₀) ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවක් වේ.",
      procedure: "ක්‍රමවේදය: 1. පරිසර උෂ්ණත්වය θ₀ නියතව තබා ගැනීමට ද්විත්ව බිත්ති ආවරණයට ජලය පුරවන්න. 2. අභ්‍යන්තර කැලරිමීටරයෙන් 2/3ක් පමණ වන සේ උණු වතුර (75°C පමණ) දමන්න. 3. උෂ්ණත්වමානය සහ ආලෝඩකය සවි කර, ඒකාකාර උෂ්ණත්වයක් පවත්වා ගැනීමට සෙමින් ආලෝඩනය කරන්න. 4. උෂ්ණත්වය 70.0°C ට පැමිණි විට විරාම ඝටිකාව ආරම්භ කරන්න. 5. මිනිත්තු 2 ක කාලාන්තරවලින් මිනිත්තු 20ක් පුරා උෂ්ණත්වය සටහන් කරගන්න. 6. θ ට එදිරිව t සිසිලන වක්‍රය ඇඳ, තෝරාගත් උෂ්ණත්වවලදී ස්පර්ශක ඇඳ dθ/dt ගණනය කරන්න.",
      obsTitle: "සිසිලන කාලය-උෂ්ණත්ව නිරීක්ෂණ",
      ambientLabel: "නියත පරිසර ආවරණ උෂ්ණත්වය θ₀ (°C):",
      colTime: "කාලය t (min)",
      colTemp: "උෂ්ණත්වය θ (°C)",
      colExcess: "වැඩිපුර උෂ්ණත්වය (θ - θ₀) (°C)",
      colRate: "ඇස්තමේන්තුගත dθ/dt (°C/min)",
      colRatio: "k = සීඝ්‍රතාව / වැඩිපුර (min⁻¹)",
      summaryTitle: "සිසිලන නියම විශ්ලේෂණ සාරාංශය",
      meanKLabel: "සාමාන්‍ය සිසිලන නියතය k:",
      linearityVerdictPass: "සරල රේඛීයතාව තහවුරු විය: පරීක්ෂණ නිරවද්‍යතාව තුළ සිසිලන සීඝ්‍රතාව වැඩිපුර උෂ්ණත්වයට අනුලෝමව සමානුපාතික වේ.",
      linearityVerdictFail: "පරිසර උෂ්ණත්වයේ නියතතාව හෝ ආලෝඩනයේ ඒකාකාරී බව පරීක්ෂා කරන්න.",
      precautionsTitle: "ප්‍රායෝගික ආරක්ෂක උපදෙස් සහ පූර්වෝපායයන්",
      precautions: "1. ද්විත්ව බිත්ති සහිත ජල ආවරණය මඟින් බාහිර සුළං ධාරා වැළැක්වීම සහ නියත පරිසර උෂ්ණත්වයක් පවත්වා ගැනීම සිදු වේ. 2. යාන්ත්‍රික තාපයක් එක් නොවන සේ සෙමින් නමුත් අඛණ්ඩව ආලෝඩනය කරන්න. 3. උෂ්ණත්වමාන බල්බය පතුලේ හෝ බිත්තිවල නොගෑවෙන සේ ද්‍රවය තුළ හොඳින් ගිල්විය යුතුය. 4. සිසිලන නියමය වලංගු වන්නේ සුළු වැඩිපුර උෂ්ණත්ව සඳහා පමණක් බව මතක තබා ගන්න.",
      loadSample: "සත්‍යාපිත සිසිලන දත්ත යොදන්න",
      clearInputs: "දත්ත හිස් කරන්න",
      printSheet: "වාර්තාව මුද්‍රණය කරන්න",
    },
  }[locale];

  const amb = parseFloat(ambientTempC) || 28.0;

  // Compute rates numerically using central differences (or forward/backward at ends)
  const rowsWithRates = readings.map((r, i) => {
    const temp = parseFloat(r.tempC) || 0;
    const excess = temp - amb;
    let rate = 0;

    if (i === 0 && readings.length > 1) {
      const nextTemp = parseFloat(readings[1].tempC) || 0;
      const dt = readings[1].timeMin - r.timeMin;
      rate = dt > 0 ? (temp - nextTemp) / dt : 0;
    } else if (i === readings.length - 1 && readings.length > 1) {
      const prevTemp = parseFloat(readings[i - 1].tempC) || 0;
      const dt = r.timeMin - readings[i - 1].timeMin;
      rate = dt > 0 ? (prevTemp - temp) / dt : 0;
    } else if (i > 0 && i < readings.length - 1) {
      const prevTemp = parseFloat(readings[i - 1].tempC) || 0;
      const nextTemp = parseFloat(readings[i + 1].tempC) || 0;
      const dt = readings[i + 1].timeMin - readings[i - 1].timeMin;
      rate = dt > 0 ? (prevTemp - nextTemp) / dt : 0;
    }

    const kVal = excess > 0 && rate > 0 ? rate / excess : 0;
    return {
      ...r,
      temp,
      excess,
      rate,
      kVal,
    };
  });

  const validKVals = rowsWithRates.filter((r) => r.excess > 0 && r.kVal > 0).map((r) => r.kVal);
  const meanK =
    validKVals.length > 0
      ? validKVals.reduce((a, b) => a + b, 0) / validKVals.length
      : 0;

  const handleUpdateTemp = (idx: number, val: string) => {
    const updated = [...readings];
    updated[idx].tempC = val;
    setReadings(updated);
  };

  const handleLoadSample = () => {
    setAmbientTempC('28.0');
    setReadings([
      { timeMin: 0, tempC: '70.0' },
      { timeMin: 2, tempC: '64.5' },
      { timeMin: 4, tempC: '59.8' },
      { timeMin: 6, tempC: '55.8' },
      { timeMin: 8, tempC: '52.3' },
      { timeMin: 10, tempC: '49.2' },
      { timeMin: 12, tempC: '46.5' },
      { timeMin: 14, tempC: '44.1' },
      { timeMin: 16, tempC: '42.0' },
      { timeMin: 18, tempC: '40.1' },
      { timeMin: 20, tempC: '38.4' },
    ]);
  };

  const handleClear = () => {
    setReadings(readings.map((r) => ({ ...r, tempC: '' })));
  };

  return (
    <div className="space-y-6">
      {/* Title & Aim */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-600" />
            {t.title}
          </CardTitle>
          <p className="text-sm text-slate-600 mt-1">{t.aim}</p>
        </CardHeader>
        <CardContent className="p-4 space-y-4 text-sm text-slate-700">
          <div>
            <span className="font-semibold text-slate-900">{t.apparatus}</span>
          </div>

          <div className="bg-amber-50/50 p-4 rounded-md border border-amber-100 space-y-2">
            <h4 className="font-semibold text-amber-950">{t.theoryTitle}</h4>
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

      {/* Observations Table */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-bold text-slate-800">{t.obsTitle}</CardTitle>
            <div className="mt-2 flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-700">{t.ambientLabel}</label>
              <input
                type="number"
                step="0.1"
                value={ambientTempC}
                onChange={(e) => setAmbientTempC(e.target.value)}
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
                  <th className="p-2 border-r border-slate-200 text-center">{t.colTime}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colTemp}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colExcess}</th>
                  <th className="p-2 border-r border-slate-200 text-center">{t.colRate}</th>
                  <th className="p-2 text-center">{t.colRatio}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rowsWithRates.map((row, idx) => (
                  <tr key={row.timeMin} className="hover:bg-slate-50">
                    <td className="p-2 text-center font-mono font-medium border-r border-slate-200">
                      {row.timeMin}
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center">
                      <input
                        type="number"
                        step="0.1"
                        value={row.tempC}
                        onChange={(e) => handleUpdateTemp(idx, e.target.value)}
                        className="w-20 px-2 py-1 text-center font-mono text-sm border border-slate-300 rounded focus:border-amber-500 focus:outline-none"
                      />
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center font-mono text-slate-700">
                      {row.excess > 0 ? row.excess.toFixed(1) : '-'}
                    </td>
                    <td className="p-2 border-r border-slate-200 text-center font-mono text-slate-700">
                      {row.rate > 0 ? row.rate.toFixed(3) : '-'}
                    </td>
                    <td className="p-2 text-center font-mono font-semibold text-amber-800">
                      {row.kVal > 0 ? row.kVal.toFixed(4) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analysis Summary */}
          <div className="mt-6 p-4 rounded-lg bg-amber-50/60 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                {t.summaryTitle}
              </div>
              <div className="text-sm text-slate-800">
                <span className="font-semibold">{t.meanKLabel} </span>
                <span className="font-mono text-base font-bold text-amber-950">
                  {meanK > 0 ? `${meanK.toFixed(4)} min⁻¹` : 'N/A'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              {meanK > 0.04 && meanK < 0.08 ? (
                <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.linearityVerdictPass}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-amber-800 bg-amber-100/50 px-3 py-1.5 rounded-full border border-amber-300">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.linearityVerdictFail}</span>
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

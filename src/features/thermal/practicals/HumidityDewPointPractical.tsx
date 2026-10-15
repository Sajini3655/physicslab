'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CloudRain, RotateCcw, Database, CheckCircle2, AlertCircle, Droplets, Sparkles } from 'lucide-react';

interface HumidityDewPointPracticalProps {
  locale?: Locale;
}

export const HumidityDewPointPractical: React.FC<HumidityDewPointPracticalProps> = ({
  locale = 'en',
}) => {
  // Inputs: room temp, dew appearance, dew disappearance
  const [roomTemp, setRoomTemp] = useState<string>('30.0');
  const [dewAppearanceTemp, setDewAppearanceTemp] = useState<string>('23.6');
  const [dewDisappearanceTemp, setDewDisappearanceTemp] = useState<string>('24.4');
  const [surfaceMisted, setSurfaceMisted] = useState<boolean>(false);

  const t = {
    en: {
      title: 'Practical 4.7 (Exp 29): Determination of Relative Humidity by Dew Point Method',
      aim: 'Aim: To determine the dew point of the laboratory air using a polished calorimeter, look up the saturated vapour pressure (SVP) of water at the dew point and room temperature, and calculate the relative humidity of air.',
      apparatus: 'Apparatus: Thin-walled polished copper calorimeter, calorimeter outer vessel with stirrer, sensitive 0–50°C thermometer (graduated to 0.1°C), small pieces of ice flakes, room thermometer, blotting paper, piece of cardboard or glass cover.',
      theoryTitle: 'Physical Principle & Regnault’s Dew Point Method',
      theoryText: 'The dew point (θ_D) is the temperature to which moist air must be cooled at constant pressure to become saturated with water vapour.\n\n1. Measurement of Dew Point:\nSmall pieces of ice are added to water in the polished calorimeter with continuous gentle stirring. The temperature θ₁ at which the polished outer surface first loses its lustre (mist/dew appears) is noted. Adding ice is halted, and while stirring, the temperature θ₂ at which the film of mist completely disappears is recorded:\n  θ_D = (θ₁ + θ₂) / 2\n\n2. Calculation of Relative Humidity (RH):\nFrom saturated vapour pressure (SVP) tables of water:\n  SVP at dew point θ_D = P(θ_D) = actual partial vapour pressure of water in ambient air\n  SVP at room temperature θ_R = P(θ_R) = saturation vapour pressure at room temperature\n\n  Relative Humidity (RH) = [ P(θ_D) / P(θ_R) ] × 100%',
      procedureTitle: 'Standard Experimental Procedure',
      procedure: '1. Record the ambient room temperature θ_R using a dry thermometer shielded from direct draughts and sunlight.\n2. Ensure the exterior of the calorimeter is thoroughly polished, clean, and grease-free.\n3. Fill the calorimeter half-full of water at room temperature.\n4. Add crushed ice in very small pinches while stirring continuously. Watch the reflection of a bright object (e.g. lamp or pencil) on the polished surface.\n5. Note the temperature θ₁ the instant mist clouds the shiny surface.\n6. Stop adding ice immediately. Stir continuously and record the temperature θ₂ when the dew clears.\n7. Repeat 3 times to obtain a consistent mean dew point θ_D.\n8. Determine water SVP at θ_D and θ_R using standard psychrometric tables, then compute Relative Humidity.',
      controlsTitle: 'Experimental Observations & Temperature Readings',
      roomTempLabel: 'Ambient Room Temperature θ_R (°C):',
      dewAppearanceLabel: 'Temperature of First Dew Appearance θ₁ (°C):',
      dewDisappearanceLabel: 'Temperature of Dew Disappearance θ₂ (°C):',
      simulateIce: 'Add Ice & Stir (Observe Calorimeter Surface)',
      simulateWarm: 'Allow to Warm Up (Clear Dew)',
      resultsTitle: 'Calculated Thermodynamic Results',
      dewPointLabel: 'Mean Dew Point (θ_D):',
      svpDewLabel: 'Actual Vapour Pressure P(θ_D):',
      svpRoomLabel: 'Saturation Vapour Pressure P(θ_R):',
      rhLabel: 'Calculated Relative Humidity (RH):',
      typicalRangeNote: 'Typical tropical ambient laboratory RH ranges between 60% and 85%.',
      precautionsTitle: 'Key Experimental Precautions',
      precautions: '1. The calorimeter must be thoroughly polished so that the slightest film of moisture is immediately discernible.\n2. Ice flakes must be added slowly in tiny quantities with constant stirring to ensure the thermometer reflects the true water temperature.\n3. The experimenter must not breathe towards the polished surface, as exhaled moisture will induce premature condensation.\n4. A second uncooled reference calorimeter should ideally be placed nearby to distinguish the onset of mist by direct visual comparison.',
      loadSample: 'Load Coastal Tropical Sample Data',
      resetData: 'Reset Readings',
      surfaceShiny: 'Calorimeter Surface: Bright Polished Mirror Finish',
      surfaceDew: 'Calorimeter Surface: Misted Dew Film (Condensation Detected)',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 4.7 (පරීක්ෂණ 29): තුෂාර අංක ක්‍රමයෙන් සාපේක්ෂ ආර්ද්‍රතාව සෙවීම',
      aim: 'අරමුණ: ඔප දැමූ කැලරිමීටරයක් භාවිතයෙන් රසායනාගාරයේ වාතයේ තුෂාර අංකය නිර්ණය කිරීම, තුෂාර අංකයේදී සහ කාමර උෂ්ණත්වයේදී ජලයේ සන්තෘප්ත වාෂ්ප පීඩනය (SVP) වගු ඇසුරින් ලබාගෙන සාපේක්ෂ ආර්ද්‍රතාව ගණනය කිරීම.',
      apparatus: 'උපකරණ: සිහින් බිත්ති සහිත ඔප දැමූ තඹ කැලරිමීටරය, කැලරිමීටර ආවරණ බඳුන හා මන්තය, 0–50°C සංවේදී උෂ්ණත්වමානය (0.1°C බෙදුම් සහිත), සිහින්ව කුඩු කළ අයිස් කැට, කාමර උෂ්ණත්වමානය, පිසදමන කඩදාසි.',
      theoryTitle: 'භෞතික මූලධර්මය සහ රෙනෝල්ට්ගේ තුෂාර අංක ක්‍රමය',
      theoryText: 'තුෂාර අංකය (θ_D) යනු නියත පීඩනයේදී වාතයේ ඇති ජල වාෂ්ප සන්තෘප්ත වන තෙක් සිසිල් කළ යුතු උෂ්ණත්වයයි.\n\n1. තුෂාර අංකය මැනීම:\nඔප දැමූ කැලරිමීටරයේ ජලයට කුඩා අයිස් කැට එක් කරමින් මෘදුව මන්ථනය කරනු ලැබේ. පිටත ඔප දැමූ පෘෂ්ඨය මත තුෂාර (මීදුම් පටලය) පළමුව හටගන්නා උෂ්ණත්වය θ₁ සටහන් කර ගනී. අයිස් දැමීම නවතා, මන්ථනය කරමින් තුෂාර පටලය නැවත සම්පූර්ණයෙන්ම මැකී යන උෂ්ණත්වය θ₂ සටහන් කර ගනී:\n  θ_D = (θ₁ + θ₂) / 2\n\n2. සාපේක්ෂ ආර්ද්‍රතාව (RH) ගණනය කිරීම:\nජලයේ සන්තෘප්ත වාෂ්ප පීඩන (SVP) වගුවෙන්:\n  තුෂාර අංකයේදී SVP = P(θ_D) = වාතයේ සැබෑ ජල වාෂ්ප පීඩනය\n  කාමර උෂ්ණත්වයේදී SVP = P(θ_R) = කාමර උෂ්ණත්වයේ සන්තෘප්ත වාෂ්ප පීඩනය\n\n  සාපේක්ෂ ආර්ද්‍රතාව (RH) = [ P(θ_D) / P(θ_R) ] × 100%',
      procedureTitle: 'සම්මත පරීක්ෂණ ක්‍රමවේදය',
      procedure: '1. කාමර උෂ්ණත්වය θ_R වියළි උෂ්ණත්වමානයකින් සටහන් කරගන්න.\n2. කැලරිමීටරයේ පිටත පෘෂ්ඨය හොඳින් ඔප දමා පිරිසිදු කරගන්න.\n3. කැලරිමීටරයෙන් අඩකට කාමර උෂ්ණත්වයේ පවතින ජලය පුරවන්න.\n4. නොකඩවා මන්ථනය කරමින් ඉතා කුඩා අයිස් කැට ස්වල්පය බැගින් එක් කරන්න.\n5. පෘෂ්ඨය මඳක් බොඳවී තුෂාර හටගන්නා ක්ෂණයේදීම උෂ්ණත්වය θ₁ සටහන් කරගන්න.\n6. අයිස් දැමීම නවතා, මන්ථනය කරමින් තුෂාර පටලය නැතිවී යන උෂ්ණත්වය θ₂ සටහන් කරගන්න.\n7. පරීක්ෂණය 3 වරක් පුනරාවර්තනය කර මධ්‍යන්‍ය තුෂාර අංකය θ_D ලබාගන්න.\n8. වාෂ්ප පීඩන වගුවෙන් P(θ_D) සහ P(θ_R) සොයා සාපේක්ෂ ආර්ද්‍රතාව ගණනය කරන්න.',
      controlsTitle: 'නිරීක්ෂණ සහ උෂ්ණත්ව කියවීම්',
      roomTempLabel: 'කාමර උෂ්ණත්වය θ_R (°C):',
      dewAppearanceLabel: 'තුෂාර හටගන්නා උෂ්ණත්වය θ₁ (°C):',
      dewDisappearanceLabel: 'තුෂාර නැතිවන උෂ්ණත්වය θ₂ (°C):',
      simulateIce: 'අයිස් එක්කර මන්ථනය කරන්න (කැලරිමීටර පෘෂ්ඨය නිරීක්ෂණය)',
      simulateWarm: 'නැවත රත්වීමට ඉඩහරින්න (තුෂාර ඉවත් වීම)',
      resultsTitle: 'ගණනය කළ තාපගතික ප්‍රතිඵල',
      dewPointLabel: 'මධ්‍යන්‍ය තුෂාර අංකය (θ_D):',
      svpDewLabel: 'සැබෑ වාෂ්ප පීඩනය P(θ_D):',
      svpRoomLabel: 'සන්තෘප්ත වාෂ්ප පීඩනය P(θ_R):',
      rhLabel: 'ගණනය කළ සාපේක්ෂ ආර්ද්‍රතාව (RH):',
      typicalRangeNote: 'ශ්‍රී ලංකාවේ සාමාන්‍ය වෙරළබඩ පරිසරයේ RH අගය 65% – 85% අතර වේ.',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. තුෂාර ස්වල්පයක් බැඳුණද පැහැදිලිව පෙනෙන පරිදි කැලරිමීටරය හොඳින් ඔප දමා තිබිය යුතුය.\n2. අයිස් දැමිය යුත්තේ ඉතා සෙමිනි; ජලය හොඳින් මන්ථනය කළ යුතුය.\n3. පරීක්ෂකයා කැලරිමීටරය දෙසට ප්‍රශ්වාස නොකළ යුතුය.\n4. තුෂාර හටගැනීම වඩාත් පැහැදිලිව හඳුනාගැනීමට සංසන්දනය සඳහා කාමර උෂ්ණත්වයේ තවත් කැලරිමීටරයක් අසලින් තැබීම යෝග්‍ය වේ.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (ශ්‍රී ලංකා වෙරළබඩ දිනක දත්ත)',
      resetData: 'දත්ත හිස් කරන්න',
      surfaceShiny: 'කැලරිමීටර පෘෂ්ඨය: දීප්තිමත් දර්පණ ඔපය (තුෂාර රහිතයි)',
      surfaceDew: 'කැලරිමීටර පෘෂ්ඨය: බොඳවූ තුෂාර පටලය (ඝනීභවනය හඳුනාගැනිණි)',
    },
  }[locale];

  // Saturated Vapour Pressure calculation using standard Magnus-Tetens formula (kPa)
  const calcSvpKpa = (tC: number): number => {
    if (isNaN(tC)) return 0;
    return 0.61078 * Math.exp((17.27 * tC) / (tC + 237.3));
  };

  const tRoom = parseFloat(roomTemp) || 0;
  const tApp = parseFloat(dewAppearanceTemp) || 0;
  const tDis = parseFloat(dewDisappearanceTemp) || 0;

  const dewPoint = (tApp + tDis) / 2;
  const svpDewKpa = calcSvpKpa(dewPoint);
  const svpRoomKpa = calcSvpKpa(tRoom);
  const relativeHumidity = svpRoomKpa > 0 ? (svpDewKpa / svpRoomKpa) * 100 : 0;

  const handleLoadSample = () => {
    setRoomTemp('30.0');
    setDewAppearanceTemp('23.6');
    setDewDisappearanceTemp('24.4');
    setSurfaceMisted(true);
  };

  const handleReset = () => {
    setRoomTemp('');
    setDewAppearanceTemp('');
    setDewDisappearanceTemp('');
    setSurfaceMisted(false);
  };

  return (
    <div className="space-y-6">
      {/* Title & Aim */}
      <Card className="border border-teal-100 dark:border-teal-900/40 shadow-sm">
        <CardHeader className="bg-teal-50/50 dark:bg-teal-950/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-600 text-white rounded-xl shadow-sm">
              <CloudRain className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {t.title}
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.aim}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span className="font-semibold text-teal-700 dark:text-teal-400">{t.apparatus}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                {t.theoryTitle}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {t.theoryText}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                {t.procedureTitle}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
                {t.procedure}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Observation Inputs & Interactive Calorimeter Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-7 border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-100">
                {t.controlsTitle}
              </CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handleLoadSample} className="text-xs gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  {t.loadSample}
                </Button>
                <Button size="sm" variant="ghost" onClick={handleReset} className="text-xs gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.resetData}
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {t.roomTempLabel}
              </label>
              <input
                type="number"
                step="0.1"
                value={roomTemp}
                onChange={(e) => setRoomTemp(e.target.value)}
                placeholder="e.g. 30.0"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {t.dewAppearanceLabel}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={dewAppearanceTemp}
                  onChange={(e) => setDewAppearanceTemp(e.target.value)}
                  placeholder="e.g. 23.6"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {t.dewDisappearanceLabel}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={dewDisappearanceTemp}
                  onChange={(e) => setDewDisappearanceTemp(e.target.value)}
                  placeholder="e.g. 24.4"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Interactive Visual Cue */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              surfaceMisted
                ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-200'
                : 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
            }`}>
              <div className="flex items-center gap-3">
                {surfaceMisted ? (
                  <Droplets className="w-6 h-6 text-sky-600 animate-pulse" />
                ) : (
                  <Sparkles className="w-6 h-6 text-amber-500" />
                )}
                <div className="text-xs font-medium">
                  {surfaceMisted ? t.surfaceDew : t.surfaceShiny}
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button
                  size="sm"
                  onClick={() => setSurfaceMisted(true)}
                  className="text-xs bg-sky-600 hover:bg-sky-700 text-white"
                >
                  {t.simulateIce}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSurfaceMisted(false)}
                  className="text-xs"
                >
                  {t.simulateWarm}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calculated Results Panel */}
        <Card className="lg:col-span-5 border border-teal-200 dark:border-teal-900 shadow-sm bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-900 dark:to-slate-950">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-600" />
              {t.resultsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">{t.dewPointLabel}</span>
              <div className="text-xl font-bold text-teal-700 dark:text-teal-400 font-mono">
                {tApp && tDis ? `${dewPoint.toFixed(2)} °C` : '—'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400">{t.svpDewLabel}</span>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono">
                  {tApp && tDis ? `${svpDewKpa.toFixed(3)} kPa` : '—'}
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs text-slate-500 dark:text-slate-400">{t.svpRoomLabel}</span>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono">
                  {tRoom ? `${svpRoomKpa.toFixed(3)} kPa` : '—'}
                </div>
              </div>
            </div>

            <div className="p-4 bg-teal-600 text-white rounded-xl shadow-md space-y-1">
              <span className="text-xs text-teal-100 uppercase tracking-wider font-semibold">
                {t.rhLabel}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono">
                {relativeHumidity > 0 && relativeHumidity <= 100
                  ? `${relativeHumidity.toFixed(1)} %`
                  : '—'}
              </div>
              <p className="text-[11px] text-teal-100 pt-1 border-t border-teal-500/50">
                {t.typicalRangeNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Precautions Card */}
      <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            {t.precautionsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
            {t.precautions}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

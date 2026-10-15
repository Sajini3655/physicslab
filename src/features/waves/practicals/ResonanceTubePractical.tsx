'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Waves, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateResonanceTubeSpeed, calculateSpeedOfSoundInGas } from '../physics/calculations';

interface ResonanceTubePracticalProps {
  locale?: Locale;
}

interface ResonanceTrial {
  id: number;
  freqHz: string;
  l1Cm: string;
  l2Cm: string;
}

export const ResonanceTubePractical: React.FC<ResonanceTubePracticalProps> = ({
  locale = 'en',
}) => {
  const [ambientTempC, setAmbientTempC] = useState<string>('25.0');
  const [trials, setTrials] = useState<ResonanceTrial[]>([
    { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
    { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
    { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
    { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
    { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
  ]);

  const t = {
    en: {
      title: 'Practical 3.2: Velocity of Sound in Air by Resonance Tube Apparatus',
      aim: 'Aim: To determine the speed of sound in air at room temperature and the end correction of the tube using a resonance tube and a set of tuning forks.',
      apparatus: 'Apparatus: Resonance tube apparatus with water reservoir, set of standard tuning forks (256 Hz–512 Hz), rubber mallet, metre rule, internal calipers (to measure tube diameter), thermometer.',
      theoryTitle: 'Physical Principle & Acoustic Resonance',
      theoryText: 'An air column closed at one end by water resonates with an external tuning fork when its effective acoustic length forms an odd quarter-wavelength standing wave.\n\nBecause the antinode forms slightly outside the open mouth of the tube by an end correction e (approx 0.3 · d where d is internal diameter):\n• 1st Resonance:  l₁ + e = λ / 4\n• 2nd Resonance:  l₂ + e = 3λ / 4\n\nSubtracting the two resonance positions cancels the unknown end correction:\n  l₂ - l₁ = λ / 2  ⟹  λ = 2 · (l₂ - l₁)\n  v = f · λ = 2 · f · (l₂ - l₁)\n\nThe end correction is determined from:\n  e = (l₂ - 3 · l₁) / 2\n\nAlternatively, plotting l₁ against 1/f yields a straight line with slope v/4 and negative intercept -e.',
      procedure: 'Procedure: 1. Record the ambient air temperature and measure the inner diameter of the glass tube. 2. Strike a tuning fork of known frequency f on a rubber pad and hold it horizontally over the open tube mouth. 3. Lower the water reservoir gradually from the top until a distinct, maximum sound intensity (1st resonance) is heard; record l₁. 4. Lower the reservoir further until the next loud resonance (2nd resonance) is heard; record l₂. 5. Repeat for at least 4 different tuning forks.',
      obsTitle: 'Experimental Observations (First & Second Resonance Lengths)',
      trialCol: 'Trial',
      forkCol: 'Fork f (Hz)',
      l1Col: '1st Resonance l₁ (cm)',
      l2Col: '2nd Resonance l₂ (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'Calculated Speed v (m/s)',
      endCorrCol: 'End Corr. e (cm)',
      calcSummaryTitle: 'Analytical Results & Temperature Comparison',
      meanSpeed: 'Mean Experimental Speed of Sound (v):',
      theoreticalSpeed: 'Theoretical Speed at Current Temp:',
      meanEndCorr: 'Mean End Correction (e):',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Velocity Verified Within Syllabus Tolerances (< 3.0%)',
      verdictFail: 'Check Resonance Detection or Wavelength Difference',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Hold the vibrating tuning fork prongs horizontally in line with the tube mouth without touching the glass rim. 2. Avoid meniscus reading errors by aligning the eye horizontally with the bottom of the water meniscus. 3. Avoid drafty airflow or loud background noises that obscure the acoustic resonance maximum.',
      loadSample: 'Load Sample Data (25°C)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3.2: අනුනාද නළය මගින් වාතයේ ධ්වනි ප්‍රවේගය සෙවීම',
      aim: 'අරමුණ: අනුනාද නළ උපකරණය සහ සුසර දෙබල භාවිතයෙන් කාමර උෂ්ණත්වයේදී වාතයේ ධ්වනි ප්‍රවේගය සහ නළයේ අන්ත ශෝධනය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ජල බඳුනක් සහිත අනුනාද නළ උපකරණය, සුසර දෙබල කට්ටලය (256 Hz–512 Hz), රබර් මිටිය, මීටර් රූල, නළයේ අභ්‍යන්තර විෂ්කම්භය මැනීමට අභ්‍යන්තර පාඨක, උෂ්ණත්වමානය.',
      theoryTitle: 'භෞතික මූලධර්මය සහ ධ්වනි අනුනාදය',
      theoryText: 'ජලයෙන් එක් කෙළවරක් වැසුණු වායු කඳක්, බාහිර සුසර දෙබලක් සමග අනුනාද වන්නේ එහි සඵල දිග තුළ λ/4 හි ඔත්තේ ගුණාකාරයක ස්ථාවර තරංගයක් ඇති වූ විටයි.\n\nනළයේ විවෘත මුවවිටින් මඳක් පිටතට e අන්ත ශෝධනයක් සහිතව ප්‍රස්පන්දය හටගන්නා බැවින්:\n• 1 වන අනුනාදය:  l₁ + e = λ / 4\n• 2 වන අනුනාදය:  l₂ + e = 3λ / 4\n\nසමීකරණ අඩු කිරීමෙන් e ඉවත් වේ:\n  l₂ - l₁ = λ / 2  ⟹  λ = 2 · (l₂ - l₁)\n  v = f · λ = 2 · f · (l₂ - l₁)\n\nඅන්ත ශෝධනය:\n  e = (l₂ - 3 · l₁) / 2\n\nහෝ l₁ එදිරිව 1/f ප්‍රස්තාරය ඇඳීමෙන් බෑවුම = v/4 සහ අන්තඃඛණ්ඩය = -e මගින් ද අගයන් සෙවිය හැක.',
      procedure: 'ක්‍රමවේදය: 1. කාමර උෂ්ණත්වය සහ වීදුරු නළයේ ඇතුළත විෂ්කම්භය මැන සටහන් කරන්න. 2. f සංඛ්‍යාතයේ සුසර දෙබලක් රබර් මිටියෙන් ගසා නළ මුවවිටට ඉහළින් තිරස්ව තබන්න. 3. ජල මට්ටම ඉහළ සිට සෙමෙන් පහත් කරමින් ප්‍රථම උපරිම ධ්වනි තීව්‍රතාව ඇසෙන ලක්ෂ්‍යයේදී l₁ මනින්න. 4. තවදුරටත් පහත් කර දෙවන ඝෝෂාකාරී අනුනාදය ලැබෙන l₂ මනින්න. 5. විවිධ සුසර දෙබල සඳහා පරීක්ෂණය නැවත කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (ප්‍රථම සහ දෙවන අනුනාද දිග)',
      trialCol: 'වාරය',
      forkCol: 'දෙබලේ f (Hz)',
      l1Col: '1 වන අනුනාද දිග l₁ (cm)',
      l2Col: '2 වන අනුනාද දිග l₂ (cm)',
      diffCol: '(l₂ - l₁) (cm)',
      speedCol: 'ගණනය කළ ප්‍රවේගය v (m/s)',
      endCorrCol: 'අන්ත ශෝධනය e (cm)',
      calcSummaryTitle: 'විශ්ලේෂණ ප්‍රතිඵල සහ උෂ්ණත්ව සැසඳීම',
      meanSpeed: 'මධ්‍යන්‍ය පරීක්ෂණාත්මක ධ්වනි ප්‍රවේගය (v):',
      theoreticalSpeed: 'වත්මන් උෂ්ණත්වයේ සෛද්ධාන්තික ප්‍රවේගය:',
      meanEndCorr: 'මධ්‍යන්‍ය අන්ත ශෝධනය (e):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'විෂය නිර්දේශ ඉවසීම තුළ ප්‍රවේගය සත්‍යාපනය විය (< 3.0%)',
      verdictFail: 'අනුනාද දිග හෝ තරංග ආයාම වෙනස පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. කම්පනය වන සුසර දෙබල අග්‍ර නළ මුවවිටට ලම්බකව තිරස්ව තබා නළ දාරයේ නොගෑවෙන සේ අල්ලාගත යුතුය. 2. ජල මෙනිස්කසයේ පහළ මට්ටම සමග ඇස තිරස්ව තබා පාඨාංක කියවිය යුතුය. 3. අනුනාදය නිවැරදිව හඳුනාගැනීමට පරිසරයේ සුළං හෝ බාහිර ශබ්ද අවම කරගන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (25°C)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof ResonanceTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const f = parseFloat(tr.freqHz);
    const l1 = parseFloat(tr.l1Cm) / 100;
    const l2 = parseFloat(tr.l2Cm) / 100;

    if (!isNaN(f) && !isNaN(l1) && !isNaN(l2) && l2 > l1 && f > 0) {
      const res = calculateResonanceTubeSpeed(f, l1, l2);
      return {
        ...tr,
        diffCm: (l2 - l1) * 100,
        speed: res.speedOfSoundMs,
        endCorrCm: res.endCorrectionM * 100,
      };
    }
    return { ...tr, diffCm: null, speed: null, endCorrCm: null };
  });

  const validSpeeds = calculatedTrials.map((t) => t.speed).filter((s): s is number => s !== null);
  const meanSpeed = validSpeeds.length > 0 ? validSpeeds.reduce((a, b) => a + b, 0) / validSpeeds.length : null;

  const validEndCorrs = calculatedTrials.map((t) => t.endCorrCm).filter((e): e is number => e !== null);
  const meanEndCorrection = validEndCorrs.length > 0 ? validEndCorrs.reduce((a, b) => a + b, 0) / validEndCorrs.length : null;

  const tempVal = parseFloat(ambientTempC) || 25.0;
  const theoreticalSpeed = calculateSpeedOfSoundInGas(tempVal);
  const percDiff =
    meanSpeed !== null && theoreticalSpeed > 0
      ? Math.abs((meanSpeed - theoreticalSpeed) / theoreticalSpeed) * 100
      : null;

  const isPass = percDiff !== null && percDiff <= 3.0;

  const handleLoadSample = () => {
    setAmbientTempC('25.0');
    setTrials([
      { id: 1, freqHz: '512', l1Cm: '15.5', l2Cm: '48.9' },
      { id: 2, freqHz: '480', l1Cm: '16.6', l2Cm: '52.3' },
      { id: 3, freqHz: '384', l1Cm: '21.0', l2Cm: '65.5' },
      { id: 4, freqHz: '320', l1Cm: '25.5', l2Cm: '79.1' },
      { id: 5, freqHz: '256', l1Cm: '32.1', l2Cm: '99.0' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, freqHz: '', l1Cm: '', l2Cm: '' })));
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
              <Waves className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'අනුනාද නළ උපකරණයේ ස්ථාවර තරංග සැකැස්ම' : 'Resonance Tube Acoustic Standing Waves'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="220" viewBox="0 0 320 220" className="overflow-visible">
                {/* 1st Resonance Tube (Left) */}
                <g transform="translate(40, 20)">
                  <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">1st Resonance (λ/4)</text>
                  
                  {/* Tuning Fork */}
                  <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                  
                  {/* Glass Tube */}
                  <rect x="20" y="25" width="30" height="150" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* Water column */}
                  <rect x="21" y="85" width="28" height="89" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                  
                  {/* End correction dashed bracket */}
                  <line x1="55" y1="20" x2="55" y2="25" stroke="#D97706" strokeWidth="1.5" />
                  <text x="60" y="24" fontSize="8" fill="#D97706" fontWeight="bold">e</text>
                  
                  {/* Length l1 bracket */}
                  <line x1="55" y1="25" x2="55" y2="85" stroke="#0F766E" strokeWidth="1.5" />
                  <text x="60" y="58" fontSize="9" fill="#0F766E" fontWeight="bold">l₁</text>
                  
                  {/* Standing wave envelope */}
                  <path d="M 23 20 Q 47 55 35 85" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M 47 20 Q 23 55 35 85" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="35" y="18" textAnchor="middle" fontSize="8" fill="#0F766E">Antinode (A)</text>
                  <text x="35" y="96" textAnchor="middle" fontSize="8" fill="#0284C7">Node (N)</text>
                </g>

                {/* 2nd Resonance Tube (Right) */}
                <g transform="translate(180, 20)">
                  <text x="35" y="0" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14243A">2nd Resonance (3λ/4)</text>
                  
                  {/* Tuning Fork */}
                  <path d="M 25 15 L 25 5 L 45 5 L 45 15 M 35 5 L 35 -5" fill="none" stroke="#475569" strokeWidth="2" />
                  
                  {/* Glass Tube */}
                  <rect x="20" y="25" width="30" height="150" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* Water column lower */}
                  <rect x="21" y="150" width="28" height="24" fill="#0284C7" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1" />
                  
                  {/* Length l2 bracket */}
                  <line x1="55" y1="25" x2="55" y2="150" stroke="#0F766E" strokeWidth="1.5" />
                  <text x="60" y="90" fontSize="9" fill="#0F766E" fontWeight="bold">l₂</text>
                  
                  {/* Standing wave envelope (3/4 wave) */}
                  <path d="M 23 20 Q 47 40 35 65 Q 23 105 47 125 Q 38 140 35 150" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />
                  <path d="M 47 20 Q 23 40 35 65 Q 47 105 23 125 Q 32 140 35 150" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="35" y="18" textAnchor="middle" fontSize="8" fill="#0F766E">Antinode (A)</text>
                  <text x="35" y="68" textAnchor="middle" fontSize="8" fill="#475569">Node (N)</text>
                  <text x="35" y="162" textAnchor="middle" fontSize="8" fill="#0284C7">Node (N)</text>
                </g>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'අනුනාද දිග වෙනස (l₂ - l₁) = λ / 2 මගින් අන්ත ශෝධනය e ඉවත් කර v = 2f(l₂ - l₁) ලබා ගනී.' : 'Wavelength difference (l₂ - l₁) = λ / 2 eliminates end correction e: v = 2f(l₂ - l₁)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Ambient Conditions */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF] flex items-center justify-between">
              <span className="font-semibold text-[#14243A]">
                {locale === 'si' ? 'කාමර උෂ්ණත්වය (°C):' : 'Ambient Room Temp (°C):'}
              </span>
              <input
                type="number"
                step="0.5"
                value={ambientTempC}
                onChange={(e) => setAmbientTempC(e.target.value)}
                className="w-20 px-2 py-1 text-sm bg-white border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
              />
            </div>
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
                  <th className="py-2.5 px-4 font-semibold">{t.trialCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.forkCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.l1Col}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.l2Col}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.diffCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.speedCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.endCorrCol}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-medium text-[#14243A]">{tr.id}</td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        value={tr.freqHz}
                        onChange={(e) => updateTrial(tr.id, 'freqHz', e.target.value)}
                        placeholder="e.g. 512"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.l1Cm}
                        onChange={(e) => updateTrial(tr.id, 'l1Cm', e.target.value)}
                        placeholder="e.g. 15.5"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.l2Cm}
                        onChange={(e) => updateTrial(tr.id, 'l2Cm', e.target.value)}
                        placeholder="e.g. 48.9"
                        className="w-20 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono font-medium text-[#475569]">
                      {tr.diffCm !== null ? `${tr.diffCm.toFixed(1)} cm` : '—'}
                    </td>
                    <td className="py-2.5 px-4 font-mono font-semibold text-[#0F766E]">
                      {tr.speed !== null ? `${tr.speed.toFixed(1)} m/s` : '—'}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-[#475569]">
                      {tr.endCorrCm !== null ? `${tr.endCorrCm.toFixed(2)} cm` : '—'}
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
                <span className="text-[#475569]">{t.meanSpeed}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {meanSpeed !== null ? `${meanSpeed.toFixed(1)} m/s` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.theoreticalSpeed}</span>
                <span className="font-mono font-medium text-[#14243A]">
                  {theoreticalSpeed > 0 ? `${theoreticalSpeed.toFixed(1)} m/s` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.meanEndCorr}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {meanEndCorrection !== null ? `${meanEndCorrection.toFixed(2)} cm` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.percentageDiff}</span>
                <span className="font-mono font-semibold text-[#14243A]">
                  {percDiff !== null ? `${percDiff.toFixed(2)}%` : '—'}
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

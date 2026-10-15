'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Music, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateStringFundamentalFrequency } from '../physics/calculations';

interface SonometerPracticalProps {
  locale?: Locale;
}

interface SonometerTrial {
  id: number;
  forkFreqHz: string;
  resLengthCm: string;
  tensionKg: string;
}

export const SonometerPractical: React.FC<SonometerPracticalProps> = ({
  locale = 'en',
}) => {
  const [wireLinearDensity, setWireLinearDensity] = useState<string>('0.0012'); // kg/m (steel wire)

  const [trials, setTrials] = useState<SonometerTrial[]>([
    { id: 1, forkFreqHz: '256', resLengthCm: '38.0', tensionKg: '3.0' },
    { id: 2, forkFreqHz: '320', resLengthCm: '30.4', tensionKg: '3.0' },
    { id: 3, forkFreqHz: '384', resLengthCm: '25.3', tensionKg: '3.0' },
    { id: 4, forkFreqHz: '512', resLengthCm: '19.0', tensionKg: '3.0' },
  ]);

  const t = {
    en: {
      title: 'Practical 3.1: Laws of Transverse Vibrations of a Stretched String (Sonometer)',
      aim: 'Aim: To verify the laws of transverse vibration of a stretched string (f ∝ 1/L and f ∝ √T) and determine the linear mass density of the wire using a sonometer.',
      apparatus: 'Apparatus: Sonometer wooden sounding box with two movable bridges and pulley, set of standard tuning forks (256–512 Hz), rubber mallet, slotted weight hanger and weights, paper rider, meter rule.',
      theoryTitle: 'Physical Principle & Sonometer Resonance',
      theoryText: 'A stretched string of length L between bridges vibrates in its fundamental mode when a stationary wave forms with nodes at the bridges and an antinode at the center (λ = 2L):\n\nv = √(T / μ)   and   v = f · λ = 2 · f · L\n\nTherefore, the fundamental frequency is:\nf = (1 / 2L) · √(T / μ)\n\n• Law of Length: At constant tension T, f · L = constant (f ∝ 1/L).\n• Law of Tension: At constant length L, f / √T = constant (f ∝ √T).\n\nWhen a vibrating tuning fork is placed on the sounding box, resonance occurs when the natural frequency of the string segment matches the fork frequency. At resonance, the antinodal amplitude becomes maximum and tosses off the small paper rider placed at the midpoint.',
      procedure: 'Procedure: 1. Place a known mass (e.g. 3.0 kg) on the hanger to establish tension T = M·g. 2. Place a small V-shaped paper rider at the midpoint between the two movable knife-edge bridges. 3. Strike a tuning fork of frequency f on a rubber mallet and hold its stem firmly against the sonometer sounding board. 4. Adjust the movable bridge until the paper rider flutters vigorously and flies off. 5. Measure the distance L between the bridge knife edges. 6. Repeat for various tuning forks to verify f · L = const.',
      obsTitle: 'Experimental Observations (Frequency vs Resonance Length)',
      trialCol: 'Trial',
      forkCol: 'Fork Frequency f (Hz)',
      lengthCol: 'Resonance Length L (cm)',
      tensionCol: 'Tension Load M (kg)',
      flProductCol: 'f · L Product (Hz · m)',
      calcSummaryTitle: 'Analytical Verification & String Density',
      meanProduct: 'Mean (f · L) Product:',
      theoFrequency: 'Theoretical Predicted Frequency (for Trial 1):',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Sonometer Law Verified (f · L Constant Within 4%)',
      verdictFail: 'Check Bridge Alignment or Paper Rider Placement',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. The paper rider must be positioned strictly at the midpoint between the two knife-edge bridges where the fundamental antinode forms. 2. The bridges must be sharp and perpendicular to the wire so the vibrating segment length L is sharply defined. 3. Avoid excessive friction at the pulley axle by oiling if necessary.',
      loadSample: 'Load Sample Data (Steel Wire)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3.1: ආතත තන්තුවක තීර්යක් කම්පන නියම සත්‍යාපනය (තන්තුමානය)',
      aim: 'අරමුණ: තන්තුමානයක් භාවිතයෙන් ආතත තන්තුවක තීර්යක් කම්පන නියම (f ∝ 1/L සහ f ∝ √T) සත්‍යාපනය කිරීම සහ තන්තුවේ ඒකක දිගක ස්කන්ධය නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: තන්තුමාන ධ්වනි පෙට්ටිය, චලනය කළ හැකි පාලම් දෙකක්, කප්පිය, සුසර දෙබල කට්ටලය (256–512 Hz), රබර් මිටිය, පඩි තැටිය සහ බර පඩි, කඩදාසි අසරුවා, මීටර් රූල.',
      theoryTitle: 'භෞතික මූලධර්මය සහ තන්තුමාන අනුනාදය',
      theoryText: 'පාලම් දෙකක් අතර L දිගැති ආතත තන්තුවක් එහි මූලික ප්‍රකාරයෙන් කම්පනය වන විට පාලම් මත නිශ්පන්ද ද මධ්‍යයේ ප්‍රස්පන්දයක් ද සහිත ස්ථාවර තරංගයක් ඇතිවේ (λ = 2L):\n\nv = √(T / μ)   සහ   v = f · λ = 2 · f · L\n\nඑබැවින් මූලික සංඛ්‍යාතය:\nf = (1 / 2L) · √(T / μ)\n\n• දිග පිළිබඳ නියමය: නියත ආතතියකදී, f · L = නියතයකි (f ∝ 1/L).\n• ආතතිය පිළිබඳ නියමය: නියත දිගකදී, f / √T = නියතයකි (f ∝ √T).\n\nකම්පනය වන සුසර දෙබල ධ්වනි පෙට්ටිය මත තැබූ විට, තන්තුවේ ස්වභාවික සංඛ්‍යාතය දෙබලේ සංඛ්‍යාතයට සමාන වන විට අනුනාදය හටගනී. අනුනාදයේදී මධ්‍යයේ ඇති කුඩා කඩදාසි අසරුවා විසිවී යයි.',
      procedure: 'ක්‍රමවේදය: 1. පඩි තැටියට ස්කන්ධයක් (උදා. 3.0 kg) යොදා ආතතිය T = M·g සකසන්න. 2. පාලම් දෙක අතර මධ්‍යයේ V-හැඩැති කුඩා කඩදාසි අසරුවෙකු තබන්න. 3. සංඛ්‍යාතය f වූ සුසර දෙබලක් රබර් මිටියෙන් ගසා එහි මිට තන්තුමාන ලෑල්ල මත තද කරන්න. 4. අසරුවා වේගයෙන් ගැහී විසිවන තෙක් පාලමක් සෙමෙන් චලනය කරන්න. 5. පාලම් දෙක අතර දිග L මනින්න. 6. විවිධ සුසර දෙබල සඳහා පරීක්ෂණය නැවත කර f · L = නියත බව පෙන්වන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (සංඛ්‍යාතය සහ අනුනාද දිග)',
      trialCol: 'වාරය',
      forkCol: 'දෙබලේ සංඛ්‍යාතය f (Hz)',
      lengthCol: 'අනුනාද දිග L (cm)',
      tensionCol: 'ආතති ස්කන්ධය M (kg)',
      flProductCol: 'f · L ගුණිතය (Hz · m)',
      calcSummaryTitle: 'විශ්ලේෂණය සහ නීති සත්‍යාපනය',
      meanProduct: 'මධ්‍යන්‍ය (f · L) ගුණිතය:',
      theoFrequency: 'සෛද්ධාන්තික සංඛ්‍යාතය (වාරය 1 සඳහා):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'තන්තුමාන නීතිය සත්‍යාපනය විය (f · L නියතය 4% තුළ)',
      verdictFail: 'පාලම් පිහිටුම හෝ අසරුවාගේ පිහිටීම පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. කඩදාසි අසරුවා හරියටම පාලම් දෙක අතර මැද (ප්‍රස්පන්දය ඇතිවන තැන) තැබිය යුතුය. 2. පාලම්වල තියුණු දාර තන්තුවට ලම්බක විය යුතුය. 3. කප්පියේ ඝර්ෂණය අවම කිරීමට අවශ්‍ය නම් තෙල් යොදන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (වානේ තන්තුව)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof SonometerTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const f = parseFloat(tr.forkFreqHz);
    const lM = parseFloat(tr.resLengthCm) / 100;
    const prod = !isNaN(f) && !isNaN(lM) && lM > 0 ? f * lM : null;
    return { ...tr, prod };
  });

  const validProds = calculatedTrials.map((t) => t.prod).filter((p): p is number => p !== null);
  const meanProduct = validProds.length > 0 ? validProds.reduce((a, b) => a + b, 0) / validProds.length : null;

  // Theoretical verification for trial 1
  const mLoad = parseFloat(trials[0].tensionKg) || 3.0;
  const lVal = (parseFloat(trials[0].resLengthCm) || 38.0) / 100;
  const muVal = parseFloat(wireLinearDensity) || 0.0012;
  const theoFreq =
    lVal > 0 && muVal > 0 ? calculateStringFundamentalFrequency(lVal, mLoad * 9.8, muVal) : 0;
  const actFreq = parseFloat(trials[0].forkFreqHz) || 256;
  const percDiff =
    theoFreq > 0 ? Math.abs((theoFreq - actFreq) / actFreq) * 100 : null;

  const isPass = percDiff !== null && percDiff <= 4.0;

  const handleLoadSample = () => {
    setWireLinearDensity('0.0012');
    setTrials([
      { id: 1, forkFreqHz: '256', resLengthCm: '38.0', tensionKg: '3.0' },
      { id: 2, forkFreqHz: '320', resLengthCm: '30.4', tensionKg: '3.0' },
      { id: 3, forkFreqHz: '384', resLengthCm: '25.3', tensionKg: '3.0' },
      { id: 4, forkFreqHz: '512', resLengthCm: '19.0', tensionKg: '3.0' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, forkFreqHz: '', resLengthCm: '' })));
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
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

      {/* Grid: Sonometer Apparatus Schematic & Theory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schematic Card */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Music className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'තන්තුමාන උපකරණයේ සැකැස්ම' : 'Sonometer Apparatus Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="300" height="200" viewBox="0 0 300 200" className="overflow-visible">
                {/* Wooden Sounding Box */}
                <rect x="20" y="80" width="220" height="40" fill="#D97706" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" rx="2" />
                <circle cx="60" cy="100" r="6" fill="#B45309" fillOpacity="0.4" />
                <circle cx="180" cy="100" r="6" fill="#B45309" fillOpacity="0.4" />
                <text x="120" y="115" textAnchor="middle" fontSize="9" fill="#92400E">Sounding Box</text>

                {/* Fixed Peg at left */}
                <circle cx="30" cy="70" r="3" fill="#1E293B" />
                <line x1="30" y1="70" x2="30" y2="80" stroke="#1E293B" strokeWidth="3" />

                {/* Pulley at right */}
                <circle cx="240" cy="70" r="8" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
                <circle cx="240" cy="70" r="2" fill="#1E293B" />

                {/* Movable Knife Edge Bridges */}
                {/* Bridge 1 */}
                <polygon points="70,80 65,70 75,70" fill="#0F766E" />
                {/* Bridge 2 */}
                <polygon points="190,80 185,70 195,70" fill="#0F766E" />

                {/* Wire */}
                <line x1="30" y1="70" x2="240" y2="70" stroke="#334155" strokeWidth="2" />
                {/* Vertical drop over pulley */}
                <line x1="248" y1="70" x2="248" y2="150" stroke="#334155" strokeWidth="2" />

                {/* Slotted Weight Hanger */}
                <rect x="240" y="150" width="16" height="30" fill="#64748B" rx="1" />
                <text x="262" y="168" fontSize="9" fill="#1E293B" fontWeight="bold">T = Mg</text>

                {/* Paper Rider at midpoint */}
                <polygon points="130,68 127,62 133,62" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
                <text x="130" y="56" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">Paper Rider</text>

                {/* Standing Wave Envelope (Fundamental) */}
                <path d="M 70 70 Q 130 55 190 70" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M 70 70 Q 130 85 190 70" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="3 2" />

                {/* Resonance Length Dimension L */}
                <line x1="70" y1="95" x2="190" y2="95" stroke="#0F766E" strokeWidth="1" />
                <polygon points="70,95 75,93 75,97" fill="#0F766E" />
                <polygon points="190,95 185,93 185,97" fill="#0F766E" />
                <text x="130" y="104" textAnchor="middle" fontSize="10" fill="#0F766E" fontWeight="bold">L</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'අනුනාදයේදී මධ්‍යයේ ප්‍රස්පන්දයක් හටගෙන කඩදාසි අසරුවා විසිවේ: f = (1/2L)√(T/μ)' : 'Resonance fundamental antinode tosses paper rider: f = (1/2L)√(T/μ)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Procedure */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF]">
              <span className="font-semibold text-[#14243A]">{t.apparatus.split(':')[0]}:</span>
              <span>{t.apparatus.split(':')[1]}</span>
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
                  <th className="py-2.5 px-4 font-semibold">{t.lengthCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.tensionCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.flProductCol}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-medium text-[#14243A]">{tr.id}</td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        value={tr.forkFreqHz}
                        onChange={(e) => updateTrial(tr.id, 'forkFreqHz', e.target.value)}
                        placeholder="e.g. 256"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.resLengthCm}
                        onChange={(e) => updateTrial(tr.id, 'resLengthCm', e.target.value)}
                        placeholder="e.g. 38.0"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.5"
                        value={tr.tensionKg}
                        onChange={(e) => updateTrial(tr.id, 'tensionKg', e.target.value)}
                        placeholder="e.g. 3.0"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono font-semibold text-[#0F766E]">
                      {tr.prod !== null ? tr.prod.toFixed(2) : '—'}
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
                <span className="text-[#475569]">{t.meanProduct}</span>
                <span className="font-bold text-[#14243A] font-mono text-base">
                  {meanProduct !== null ? `${meanProduct.toFixed(2)} Hz · m` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.theoFrequency}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {theoFreq > 0 ? `${theoFreq.toFixed(1)} Hz` : '—'}
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

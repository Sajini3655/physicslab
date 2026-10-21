'use client';

import React from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Music, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateStringFundamentalFrequency } from '../physics/calculations';
import { usePracticalWork } from '@/shared/practicals';

interface SonometerPracticalProps {
  locale?: Locale;
}

interface SonometerTrial {
  id: number;
  forkFreqHz: string;
  resLengthCm: string;
  tensionKg: string;
}

interface TensionTrial {
  id: number;
  tensionKg: string;
  resLengthCm: string;
}

export const SonometerPractical: React.FC<SonometerPracticalProps> = ({
  locale = 'en',
}) => {
  const {
    observations,
    updateObservations,
    loadSampleObservations,
    reset,
    isCompleted,
    setCompleted,
  } = usePracticalWork({
    experimentId: 'exp-12-sonometer',
    defaultObservations: {
      subMode: 'law_of_length',
      wireLinearDensity: '0.0012',
      trials: [
        { id: 1, forkFreqHz: '256', resLengthCm: '38.0', tensionKg: '3.0' },
        { id: 2, forkFreqHz: '320', resLengthCm: '30.4', tensionKg: '3.0' },
        { id: 3, forkFreqHz: '384', resLengthCm: '25.3', tensionKg: '3.0' },
        { id: 4, forkFreqHz: '512', resLengthCm: '19.0', tensionKg: '3.0' },
      ],
      tensionTrials: [
        { id: 1, tensionKg: '1.0', resLengthCm: '22.0' },
        { id: 2, tensionKg: '2.0', resLengthCm: '31.1' },
        { id: 3, tensionKg: '3.0', resLengthCm: '38.1' },
        { id: 4, tensionKg: '4.0', resLengthCm: '44.0' },
      ],
      fixedForkHz: '256',
    },
  });

  const subMode = (observations.subMode || 'law_of_length') as 'law_of_length' | 'law_of_tension';
  const setSubMode = (mode: 'law_of_length' | 'law_of_tension') => updateObservations({ subMode: mode });

  const wireLinearDensity = observations.wireLinearDensity || '0.0012';

  const trials: SonometerTrial[] = observations.trials || [
    { id: 1, forkFreqHz: '256', resLengthCm: '38.0', tensionKg: '3.0' },
    { id: 2, forkFreqHz: '320', resLengthCm: '30.4', tensionKg: '3.0' },
    { id: 3, forkFreqHz: '384', resLengthCm: '25.3', tensionKg: '3.0' },
    { id: 4, forkFreqHz: '512', resLengthCm: '19.0', tensionKg: '3.0' },
  ];

  const tensionTrials: TensionTrial[] = observations.tensionTrials || [
    { id: 1, tensionKg: '1.0', resLengthCm: '22.0' },
    { id: 2, tensionKg: '2.0', resLengthCm: '31.1' },
    { id: 3, tensionKg: '3.0', resLengthCm: '38.1' },
    { id: 4, tensionKg: '4.0', resLengthCm: '44.0' },
  ];

  const t = {
    en: {
      title: 'Practical 12 & 13: Laws of Transverse Vibrations of a Stretched String (Sonometer)',
      aim: 'Aim: To verify the Law of Length (f ∝ 1/L at constant tension, Exp 12) and the Law of Tension (L ∝ √T at constant frequency, Exp 13) and determine the linear mass density of the wire.',
      apparatus: 'Apparatus: Sonometer wooden sounding box with two movable knife-edge bridges and low-friction pulley, set of standard tuning forks (256–512 Hz), rubber mallet, slotted weight hanger and masses, paper rider, meter rule.',
      modeLength: 'Exp 12: Law of Length (f ∝ 1/L)',
      modeTension: 'Exp 13: Law of Tension (L ∝ √T)',
      theoryTitleLength: 'Law of Length (Exp 12: Constant Tension T)',
      theoryTextLength: 'For a wire under constant tension T, fundamental frequency f = (1 / 2L) · √(T / μ). Rearranging gives f · L = 0.5 · √(T / μ) = constant. A graph of L against 1/f gives a straight line through the origin with slope k = 0.5 · √(T / μ).',
      theoryTitleTension: 'Law of Tension (Exp 13: Constant Frequency f)',
      theoryTextTension: 'For a wire excited at fixed frequency f, resonance length L = (1 / 2f) · √(T / μ) = (√(M·g) / 2f√μ). Hence L ∝ √M, or L / √M = constant. A graph of L against √M yields a straight line through the origin.',
      procedureLength: 'Procedure: 1. Hang constant mass M = 3.0 kg (T = M·g). 2. Place light paper rider at midpoint between bridges. 3. Strike tuning fork on rubber mallet, press stem to sounding box. 4. Adjust bridge until paper rider flies off at resonance. 5. Record L for each fork frequency.',
      procedureTension: 'Procedure: 1. Keep tuning fork frequency fixed (e.g. 256 Hz). 2. Vary suspended mass M (1.0 to 4.0 kg). 3. At each tension, adjust bridge distance L until paper rider flutters and is thrown off. 4. Verify L / √M = constant.',
      obsTitleLength: 'Observations: Frequency vs Resonance Length (Constant Tension = 3.0 kg)',
      obsTitleTension: 'Observations: Tension vs Resonance Length (Fixed Fork f = 256 Hz)',
      trialCol: 'Trial',
      forkCol: 'Fork Frequency f (Hz)',
      lengthCol: 'Resonance Length L (cm)',
      tensionCol: 'Tension Load M (kg)',
      sqrtTensionCol: '√M (kg^0.5)',
      flProductCol: 'f · L Product (Hz · m)',
      ratioCol: 'L / √M (cm / kg^0.5)',
      calcSummaryTitle: 'Analytical Verification & String Density',
      meanProduct: 'Mean (f · L) Product:',
      meanRatio: 'Mean (L / √M) Ratio:',
      theoFrequency: 'Theoretical Predicted Frequency (Trial 1):',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Sonometer Law Verified (Constant Within 4%)',
      verdictFail: 'Check Bridge Alignment or Paper Rider Placement',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Paper rider must be strictly positioned at the midpoint of the bridges (fundamental antinode). 2. Knife-edge bridges must be sharp and perpendicular to the wire. 3. Minimize pulley friction with light lubrication.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      submitLab: 'Submit Practical Record',
      submittedMsg: 'Practical record completed and saved to your laboratory log.',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 12 සහ 13: තන්තුමානයෙන් ආතත තන්තුවක තීර්යක් කම්පන නියම',
      aim: 'අරමුණ: නියත ආතතියකදී දිග පිළිබඳ නියමය (f ∝ 1/L, පරීක්ෂණ 12) සහ නියත සංඛ්‍යාතයකදී ආතති නියමය (L ∝ √T, පරීක්ෂණ 13) සත්‍යාපනය කිරීම.',
      apparatus: 'උපකරණ: තන්තුමාන ධ්වනි පෙට්ටිය, චල පාලම්, කප්පිය, සුසර දෙබල (256–512 Hz), රබර් මිටිය, බර පඩි සහ තැටිය, කඩදාසි අසරුවා, මීටර් රූල.',
      modeLength: 'පරීක්ෂණ 12: දිග පිළිබඳ නියමය (f ∝ 1/L)',
      modeTension: 'පරීක්ෂණ 13: ආතති නියමය (L ∝ √T)',
      theoryTitleLength: 'දිග පිළිබඳ නියමය (පරීක්ෂණ 12: නියත ආතතිය T)',
      theoryTextLength: 'නියත ආතතියක් යටතේ මූලික සංඛ්‍යාතය f = (1 / 2L) · √(T / μ) වේ. එනම් f · L = නියතයකි. L එදිරිව 1/f ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි.',
      theoryTitleTension: 'ආතති නියමය (පරීක්ෂණ 13: නියත සංඛ්‍යාතය f)',
      theoryTextTension: 'නියත සංඛ්‍යාතයකදී අනුනාද දිග L = (1 / 2f) · √(T / μ) වේ. එබැවින් L ∝ √M හෝ L / √M = නියතයකි. L එදිරිව √M ප්‍රස්තාරය මූල ලක්ෂ්‍යය හරහා යන සරල රේඛාවකි.',
      procedureLength: 'ක්‍රමවේදය: 1. නියත බරක් (3.0 kg) එල්ලන්න. 2. පාලම් මැද කඩදාසි අසරුවා තබන්න. 3. සුසර දෙබල කම්පනය කර ලෑල්ල මත තබන්න. 4. අසරුවා විසිවන තෙක් පාලම් සකසා දිග L මනින්න.',
      procedureTension: 'ක්‍රමවේදය: 1. දෙබලේ සංඛ්‍යාතය නියතව (256 Hz) තබන්න. 2. බර M වෙනස් කරන්න (1–4 kg). 3. එක් එක් බර සඳහා අනුනාද දිග L මැන L / √M නියත බව පෙන්වන්න.',
      obsTitleLength: 'නිරීක්ෂණ: සංඛ්‍යාතය එදිරිව අනුනාද දිග (නියත ආතතිය = 3.0 kg)',
      obsTitleTension: 'නිරීක්ෂණ: ආතති ස්කන්ධය එදිරිව අනුනාද දිග (නියත සංඛ්‍යාතය = 256 Hz)',
      trialCol: 'වාරය',
      forkCol: 'දෙබලේ සංඛ්‍යාතය f (Hz)',
      lengthCol: 'අනුනාද දිග L (cm)',
      tensionCol: 'ආතති ස්කන්ධය M (kg)',
      sqrtTensionCol: '√M (kg^0.5)',
      flProductCol: 'f · L ගුණිතය (Hz · m)',
      ratioCol: 'L / √M (cm / kg^0.5)',
      calcSummaryTitle: 'විශ්ලේෂණය සහ නීති සත්‍යාපනය',
      meanProduct: 'මධ්‍යන්‍ය (f · L) ගුණිතය:',
      meanRatio: 'මධ්‍යන්‍ය (L / √M) අනුපාතය:',
      theoFrequency: 'සෛද්ධාන්තික සංඛ්‍යාතය (වාරය 1 සඳහා):',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'තන්තුමාන නීතිය සත්‍යාපනය විය (4% තුළ)',
      verdictFail: 'පාලම් පිහිටුම හෝ අසරුවාගේ පිහිටීම පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. කඩදාසි අසරුවා පාලම් දෙක අතර මැද තැබිය යුතුය. 2. පාලම්වල දාර තන්තුවට ලම්බක විය යුතුය. 3. කප්පියේ ඝර්ෂණය අවම විය යුතුය.',
      loadSample: 'ආදර්ශ දත්ත පූරණය',
      clearInputs: 'දත්ත හිස් කරන්න',
      submitLab: 'ප්‍රායෝගික සටහන භාරදෙන්න',
      submittedMsg: 'ප්‍රායෝගික වාර්තාව සම්පූර්ණ කර රසායනාගාර සටහනට සුරකින ලදී.',
    },
  }[locale];

  // Calculations for Exp 12 (Law of Length)
  const calculatedTrials = trials.map((tr) => {
    const f = parseFloat(tr.forkFreqHz);
    const lM = parseFloat(tr.resLengthCm) / 100;
    const prod = !isNaN(f) && !isNaN(lM) && lM > 0 ? f * lM : null;
    return { ...tr, prod };
  });
  const validProds = calculatedTrials.map((t) => t.prod).filter((p): p is number => p !== null);
  const meanProduct = validProds.length > 0 ? validProds.reduce((a, b) => a + b, 0) / validProds.length : null;

  const mLoad = parseFloat(trials[0]?.tensionKg || '3.0') || 3.0;
  const lVal = (parseFloat(trials[0]?.resLengthCm || '38.0') || 38.0) / 100;
  const muVal = parseFloat(wireLinearDensity) || 0.0012;
  const theoFreq =
    lVal > 0 && muVal > 0 ? calculateStringFundamentalFrequency(lVal, mLoad * 9.8, muVal) : 0;
  const actFreq = parseFloat(trials[0]?.forkFreqHz || '256') || 256;
  const percDiff =
    theoFreq > 0 ? Math.abs((theoFreq - actFreq) / actFreq) * 100 : null;
  const isPassLength = percDiff !== null && percDiff <= 4.0;

  // Calculations for Exp 13 (Law of Tension)
  const calculatedTensionTrials = tensionTrials.map((tr) => {
    const m = parseFloat(tr.tensionKg);
    const l = parseFloat(tr.resLengthCm);
    const sqrtM = !isNaN(m) && m > 0 ? Math.sqrt(m) : null;
    const ratio = !isNaN(l) && sqrtM !== null && sqrtM > 0 ? l / sqrtM : null;
    return { ...tr, sqrtM, ratio };
  });
  const validRatios = calculatedTensionTrials.map((t) => t.ratio).filter((r): r is number => r !== null);
  const meanRatio = validRatios.length > 0 ? validRatios.reduce((a, b) => a + b, 0) / validRatios.length : null;
  const isPassTension = validRatios.length > 0 && validRatios.every((r) => Math.abs(r - (meanRatio || 0)) / (meanRatio || 1) <= 0.04);

  const updateTrial = (id: number, field: keyof SonometerTrial, val: string) => {
    const updated = trials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ trials: updated });
  };

  const updateTensionTrial = (id: number, field: keyof TensionTrial, val: string) => {
    const updated = tensionTrials.map((t) => (t.id === id ? { ...t, [field]: val } : t));
    updateObservations({ tensionTrials: updated });
  };

  const handleLoadSample = () => {
    if (subMode === 'law_of_length') {
      loadSampleObservations({
        wireLinearDensity: '0.0012',
        trials: [
          { id: 1, forkFreqHz: '256', resLengthCm: '38.0', tensionKg: '3.0' },
          { id: 2, forkFreqHz: '320', resLengthCm: '30.4', tensionKg: '3.0' },
          { id: 3, forkFreqHz: '384', resLengthCm: '25.3', tensionKg: '3.0' },
          { id: 4, forkFreqHz: '512', resLengthCm: '19.0', tensionKg: '3.0' },
        ],
      });
    } else {
      loadSampleObservations({
        fixedForkHz: '256',
        tensionTrials: [
          { id: 1, tensionKg: '1.0', resLengthCm: '22.0' },
          { id: 2, tensionKg: '2.0', resLengthCm: '31.1' },
          { id: 3, tensionKg: '3.0', resLengthCm: '38.1' },
          { id: 4, tensionKg: '4.0', resLengthCm: '44.0' },
        ],
      });
    }
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3">
          <CardTitle className="text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </CardTitle>
          <p className="text-xs sm:text-sm text-[#0F766E] dark:text-[#14B8A6] font-medium">
            {t.aim}
          </p>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-3 text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
          <p><strong>{t.apparatus}</strong></p>
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">
              {subMode === 'law_of_length' ? t.theoryTitleLength : t.theoryTitleTension}
            </span>
            <p>{subMode === 'law_of_length' ? t.theoryTextLength : t.theoryTextTension}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {subMode === 'law_of_length' ? t.procedureLength : t.procedureTension}
          </p>
        </CardContent>
      </Card>

      {/* Mode Switcher & Workspace */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={subMode === 'law_of_length' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('law_of_length')}
            >
              <Music className="w-3.5 h-3.5 mr-1" />
              {t.modeLength}
            </Button>
            <Button
              size="sm"
              variant={subMode === 'law_of_tension' ? 'default' : 'outline'}
              className="text-xs h-8 rounded-lg"
              onClick={() => setSubMode('law_of_tension')}
            >
              <Music className="w-3.5 h-3.5 mr-1" />
              {t.modeTension}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 rounded-lg"
              onClick={handleLoadSample}
            >
              <Database className="w-3.5 h-3.5 mr-1" />
              {t.loadSample}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-8 rounded-lg"
              onClick={handleClear}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              {t.clearInputs}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0 space-y-6">
          {/* Sonometer Schematic Diagram */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-auto">
              {/* Wooden Sounding Box */}
              <rect x="20" y="70" width="240" height="40" fill="#D97706" fillOpacity="0.2" stroke="#B45309" strokeWidth="2" rx="2" />
              <circle cx="60" cy="90" r="6" fill="#B45309" fillOpacity="0.4" />
              <circle cx="200" cy="90" r="6" fill="#B45309" fillOpacity="0.4" />
              <text x="140" y="105" textAnchor="middle" fontSize="9" fill="#92400E" fontWeight="bold">Sonometer Sounding Box</text>

              {/* Fixed Peg at left */}
              <circle cx="30" cy="60" r="3" fill="#1E293B" />
              <line x1="30" y1="60" x2="30" y2="70" stroke="#1E293B" strokeWidth="3" />

              {/* Pulley at right */}
              <circle cx="260" cy="60" r="8" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
              <circle cx="260" cy="60" r="2" fill="#1E293B" />

              {/* Movable Knife Edge Bridges */}
              {/* Bridge 1 */}
              <polygon points="70,70 65,60 75,60" fill="#0F766E" />
              {/* Bridge 2 */}
              <polygon points="210,70 205,60 215,60" fill="#0F766E" />

              {/* Stretched Wire */}
              <line x1="30" y1="60" x2="260" y2="60" stroke="#1E293B" strokeWidth="1.5" />
              <line x1="260" y1="60" x2="260" y2="120" stroke="#1E293B" strokeWidth="1.5" />

              {/* Suspended slotted mass hanger */}
              <g transform="translate(260, 120)">
                <line x1="0" y1="0" x2="0" y2="15" stroke="#1E293B" strokeWidth="2" />
                <rect x="-10" y="15" width="20" height="15" fill="#475569" rx="2" />
                <text x="0" y="26" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="bold">T = Mg</text>
              </g>

              {/* Paper rider at midpoint */}
              <polygon points="140,60 137,52 143,52" fill="#EF4444" stroke="#DC2626" strokeWidth="0.8" />
              <text x="140" y="46" textAnchor="middle" fontSize="8" fill="#EF4444" fontWeight="bold">Paper Rider</text>

              {/* Resonant length L indicator */}
              <line x1="70" y1="130" x2="210" y2="130" stroke="#0F766E" strokeWidth="1.5" />
              <text x="140" y="145" textAnchor="middle" fontSize="9" fill="#0F766E" fontWeight="bold">Resonant Length L</text>
            </svg>
          </div>

          {/* SubMode 1: Exp 12 Law of Length */}
          {subMode === 'law_of_length' ? (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.forkCol}</th>
                      <th className="p-3">{t.lengthCol}</th>
                      <th className="p-3">{t.tensionCol}</th>
                      <th className="p-3">{t.flProductCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.forkFreqHz}
                            onChange={(e) => updateTrial(tr.id, 'forkFreqHz', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.resLengthCm}
                            onChange={(e) => updateTrial(tr.id, 'resLengthCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.tensionKg}
                            onChange={(e) => updateTrial(tr.id, 'tensionKg', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                          {tr.prod !== null ? `${tr.prod.toFixed(2)} Hz·m` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Analytical Summary */}
              <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.meanProduct}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {meanProduct !== null ? `${meanProduct.toFixed(2)} Hz·m` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.theoFrequency}</span>
                    <span className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC]">
                      {theoFreq > 0 ? `${theoFreq.toFixed(1)} Hz` : '—'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                    <span className="text-[10px] text-[#64748B] block font-sans">{t.percentageDiff}</span>
                    <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                      {percDiff !== null ? `${percDiff.toFixed(2)}%` : '—'}
                    </span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                  isPassLength
                    ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                }`}>
                  {isPassLength ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                  <span>{isPassLength ? t.verdictPass : t.verdictFail}</span>
                </div>
              </div>
            </div>
          ) : (
            /* SubMode 2: Exp 13 Law of Tension */
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-[#DFE8EF] dark:border-[#1E334D]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F6FAFD] dark:bg-[#0B131E] border-b border-[#DFE8EF] dark:border-[#1E334D] text-[#14243A] dark:text-[#F8FAFC]">
                    <tr>
                      <th className="p-3 w-16">{t.trialCol}</th>
                      <th className="p-3">{t.tensionCol}</th>
                      <th className="p-3">{t.sqrtTensionCol}</th>
                      <th className="p-3">{t.lengthCol}</th>
                      <th className="p-3">{t.ratioCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE8EF] dark:divide-[#1E334D]">
                    {calculatedTensionTrials.map((tr) => (
                      <tr key={tr.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                        <td className="p-3 font-bold text-center">{tr.id}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.tensionKg}
                            onChange={(e) => updateTensionTrial(tr.id, 'tensionKg', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 text-[#64748B]">
                          {tr.sqrtM !== null ? tr.sqrtM.toFixed(3) : '—'}
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={tr.resLengthCm}
                            onChange={(e) => updateTensionTrial(tr.id, 'resLengthCm', e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md border border-[#DFE8EF] dark:border-[#1E334D] bg-[#FFFFFF] dark:bg-[#111D2D]"
                          />
                        </td>
                        <td className="p-3 font-bold text-[#0F766E] dark:text-[#14B8A6]">
                          {tr.ratio !== null ? `${tr.ratio.toFixed(2)} cm/√kg` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tension Summary */}
              <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
                <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60 flex items-center justify-between">
                  <span className="text-xs text-[#64748B] block font-sans">{t.meanRatio}</span>
                  <span className="text-base font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {meanRatio !== null ? `${meanRatio.toFixed(2)} cm / √kg` : '—'}
                  </span>
                </div>

                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                  isPassTension
                    ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                    : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
                }`}>
                  {isPassTension ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                  <span>{isPassTension ? 'Law of Tension Verified (L ∝ √T Constant Within 4%)' : 'Check Bridge Positions'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Precautions Footer */}
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.precautionsTitle}</span>
            <p>{t.precautions}</p>
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#DFE8EF] dark:border-[#1E334D]">
            <Button
              className="w-full sm:w-auto bg-[#0F766E] hover:bg-[#0D655E] text-white"
              onClick={() => setCompleted(true)}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> {t.submitLab}
            </Button>
            {isCompleted && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {t.submittedMsg}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

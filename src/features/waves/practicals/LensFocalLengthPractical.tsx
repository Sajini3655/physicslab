'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Printer, RotateCcw, Database, Scan, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateLensFocalLengthDisplacement } from '../physics/calculations';

interface LensFocalLengthPracticalProps {
  locale?: Locale;
}

interface LensTrial {
  id: number;
  screenDistDCm: string;
  lensPos1Cm: string;
  lensPos2Cm: string;
}

export const LensFocalLengthPractical: React.FC<LensFocalLengthPracticalProps> = ({
  locale = 'en',
}) => {
  const [nominalFocalLengthCm, setNominalFocalLengthCm] = useState<string>('15.0');

  const [trials, setTrials] = useState<LensTrial[]>([
    { id: 1, screenDistDCm: '80.0', lensPos1Cm: '20.0', lensPos2Cm: '60.0' },
    { id: 2, screenDistDCm: '85.0', lensPos1Cm: '19.2', lensPos2Cm: '65.8' },
    { id: 3, screenDistDCm: '90.0', lensPos1Cm: '18.7', lensPos2Cm: '71.3' },
    { id: 4, screenDistDCm: '95.0', lensPos1Cm: '18.3', lensPos2Cm: '76.7' },
    { id: 5, screenDistDCm: '100.0', lensPos1Cm: '18.0', lensPos2Cm: '82.0' },
  ]);

  const t = {
    en: {
      title: 'Practical 3.5: Focal Length of a Convex Lens by Displacement Method',
      aim: 'Aim: To determine the focal length of a convex lens using the displacement (conjugate foci) method on an optical bench.',
      apparatus: 'Apparatus: Optical bench with uprights, biconvex lens, illuminated object wire-gauze cross-wire, white receiving screen, metre scale.',
      theoryTitle: 'Physical Principle & Conjugate Foci',
      theoryText: 'When the distance D between an object and a screen is greater than four times the focal length (D > 4f), there are two distinct positions of the lens that produce a sharply focused real image on the screen.\n\nLet the separation between these two lens positions be the displacement d:\n  • Position 1 (closer to object): Produces a magnified real image.\n  • Position 2 (closer to screen): Produces a diminished real image.\n\nFrom the thin lens equation 1/v - 1/u = 1/f:\n  f = (D² - d²) / (4 · D)\n\nAdvantages of the displacement method:\n1. It eliminates the index error of the lens upright because only the difference d = |x₂ - x₁| between two positions on the bench is measured.\n2. The relationship O = √(I₁ · I₂) allows the true object size to be determined independently.',
      procedure: 'Procedure: 1. Find the approximate focal length of the convex lens by projecting a distant window onto the wall. 2. Set the object-to-screen distance D to a value comfortably greater than 4f (e.g. 80 cm for f ≈ 15 cm). 3. Move the lens from the object toward the screen to find the first sharp magnified image; record lens position x₁. 4. Continue moving the lens toward the screen to find the second sharp diminished image; record lens position x₂. 5. Compute displacement d = |x₂ - x₁| and calculate f. 6. Repeat for 5 different screen distances D.',
      obsTitle: 'Experimental Observations (Displacement Method)',
      trialCol: 'Trial',
      screenDistCol: 'Screen Distance D (cm)',
      pos1Col: 'Lens Position 1 x₁ (cm)',
      pos2Col: 'Lens Position 2 x₂ (cm)',
      dispCol: 'Displacement d (cm)',
      focalCol: 'Focal Length f (cm)',
      calcSummaryTitle: 'Analytical Summary & Focal Length Verification',
      meanFocal: 'Mean Calculated Focal Length (f):',
      nominalFocal: 'Nominal Benchmark Focal Length:',
      percentageDiff: 'Discrepancy:',
      verdictPass: 'Focal Length Verified Within Standard Tolerances (< 3.0%)',
      verdictFail: 'Check Conjugate Positions or D > 4f Condition',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Ensure the distance D between object and screen strictly satisfies D > 4f, otherwise no real image can be formed on the screen. 2. The optical centers of the object, lens, and screen must lie on the same horizontal optical axis. 3. Adjust the lens slowly while rocking back and forth around the focus to identify the true sharpest image without parallax.',
      loadSample: 'Load Sample Data (f ≈ 15 cm)',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 3.5: විස්ථාපන ක්‍රමයෙන් උත්තල කාචයක නාභීය දුර සෙවීම',
      aim: 'අරමුණ: ප්‍රකාශ බංකුව මත විස්ථාපන ක්‍රමය (අනුබද්ධ නාභි ක්‍රමය) මගින් උත්තල කාචයක නාභීය දුර (f) නිර්ණය කිරීම.',
      apparatus: 'උපකරණ: ප්‍රකාශ බංකුව සහ රඳවන, උත්තල කාචය, ආලෝකමත් වස්තුව (කම්බි දැල සහිත), සුදු තිරය, මීටර් රූල.',
      theoryTitle: 'භෞතික මූලධර්මය සහ අනුබද්ධ නාභි සංකල්පය',
      theoryText: 'වස්තුව සහ තිරය අතර දුර D, කාචයේ නාභීය දුර මෙන් සතර ගුණයකට වඩා වැඩි වූ විට (D > 4f), තිරය මත තියුණු තාත්වික ප්‍රතිබිම්බයක් ලබාගත හැකි කාච පිහිටුම් දෙකක් පවතී.\n\nමෙම පිහිටුම් දෙක අතර පරතරය විස්ථාපනය d වේ:\n  • පිහිටුම 1 (වස්තුවට ආසන්න): විශාලිත තාත්වික ප්‍රතිබිම්බයක් ලැබේ.\n  • පිහිටුම 2 (තිරයට ආසන්න): කුඩා වූ තාත්වික ප්‍රතිබිම්බයක් ලැබේ.\n\nතුනී කාච සූත්‍රය මගින්:\n  f = (D² - d²) / (4 · D)\n\nවිස්ථාපන ක්‍රමයේ විශේෂ වාසි:\n1. මෙහිදී මනින්නේ පිහිටුම් දෙක අතර වෙනස d = |x₂ - x₁| පමණක් බැවින් කාච රඳවනයේ ශුන්‍ය දෝෂය සම්පූර්ණයෙන්ම මැකී යයි.\n2. ප්‍රතිබිම්බ ප්‍රමාණ දෙකේ ගුණිතයේ වර්ගමූලය මගින් වස්තුවේ සත්‍ය ප්‍රමාණය සෙවිය හැක: O = √(I₁ · I₂).',
      procedure: 'ක්‍රමවේදය: 1. ඈත වස්තුවක ප්‍රතිබිම්බයක් තිරය මතට ලබාගෙන කාචයේ දළ නාභීය දුර සොයාගන්න. 2. වස්තුව සහ තිරය අතර දුර D > 4f වන සේ (උදා. f ≈ 15 cm නම් D = 80 cm) තබන්න. 3. වස්තුවේ සිට තිරය දෙසට කාචය ගෙන ගොස් පළමු විශාලිත තියුණු ප්‍රතිබිම්බය ලැබෙන x₁ සටහන් කරන්න. 4. තවදුරටත් ඉදිරියට ගෙන ගොස් දෙවන කුඩා වූ තියුණු ප්‍රතිබිම්බය ලැබෙන x₂ සටහන් කරන්න. 5. විස්ථාපනය d = |x₂ - x₁| ගණනය කර f = (D² - d²)/(4D) සූත්‍රයෙන් f සොයන්න. 6. විවිධ D අගයන් සඳහා පරීක්ෂණය නැවත කරන්න.',
      obsTitle: 'නිරීක්ෂණ සටහන (විස්ථාපන ක්‍රමය)',
      trialCol: 'වාරය',
      screenDistCol: 'තිර දුර D (cm)',
      pos1Col: 'කාච පිහිටුම 1 x₁ (cm)',
      pos2Col: 'කාච පිහිටුම 2 x₂ (cm)',
      dispCol: 'විස්ථාපනය d (cm)',
      focalCol: 'නාභීය දුර f (cm)',
      calcSummaryTitle: 'විශ්ලේෂණ සාරාංශය සහ නාභීය දුර සත්‍යාපනය',
      meanFocal: 'මධ්‍යන්‍ය ගණනය කළ නාභීය දුර (f):',
      nominalFocal: 'නාමික සම්මත නාභීය දුර:',
      percentageDiff: 'ප්‍රතිශත වෙනස:',
      verdictPass: 'සම්මත ඉවසීම් සීමා තුළ නාභීය දුර සත්‍යාපනය විය (< 3.0%)',
      verdictFail: 'අනුබද්ධ පිහිටුම් හෝ D > 4f කොන්දේසිය පරීක්ෂා කරන්න',
      precautionsTitle: 'ප්‍රායෝගික පූර්වෝපායයන්',
      precautions: '1. තාත්වික ප්‍රතිබිම්බයක් සෑදීමට වස්තුව සහ තිරය අතර පරතරය D > 4f කොන්දේසිය තෘප්ත කළ යුතුමය. 2. වස්තුවේ, කාචයේ සහ තිරයේ ප්‍රකාශ කේන්ද්‍ර එකම තිරස් ප්‍රකාශ අක්ෂයක පිහිටිය යුතුය. 3. තියුණුම ප්‍රතිබිම්බය නිවැරදිව හඳුනාගැනීමට කාචය ඉදිරියට-පසුපසට සෙමෙන් චලනය කරමින් නිරීක්ෂණය කරන්න.',
      loadSample: 'ආදර්ශ දත්ත පූරණය (f ≈ 15 cm)',
      clearInputs: 'දත්ත හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const updateTrial = (id: number, field: keyof LensTrial, val: string) => {
    setTrials(trials.map((t) => (t.id === id ? { ...t, [field]: val } : t)));
  };

  const calculatedTrials = trials.map((tr) => {
    const dVal = parseFloat(tr.screenDistDCm);
    const x1 = parseFloat(tr.lensPos1Cm);
    const x2 = parseFloat(tr.lensPos2Cm);

    if (!isNaN(dVal) && !isNaN(x1) && !isNaN(x2) && dVal > 0) {
      const disp = Math.abs(x2 - x1);
      const fM = calculateLensFocalLengthDisplacement(dVal / 100, disp / 100);
      const fCm = fM * 100;
      return {
        ...tr,
        disp,
        fCm,
      };
    }
    return { ...tr, disp: null, fCm: null };
  });

  const validFs = calculatedTrials.map((t) => t.fCm).filter((f): f is number => f !== null && f > 0);
  const meanFocal = validFs.length > 0 ? validFs.reduce((a, b) => a + b, 0) / validFs.length : null;

  const nominalF = parseFloat(nominalFocalLengthCm) || 15.0;
  const percDiff =
    meanFocal !== null && nominalF > 0 ? Math.abs((meanFocal - nominalF) / nominalF) * 100 : null;

  const isPass = percDiff !== null && percDiff <= 3.0;

  const handleLoadSample = () => {
    setNominalFocalLengthCm('15.0');
    setTrials([
      { id: 1, screenDistDCm: '80.0', lensPos1Cm: '20.0', lensPos2Cm: '60.0' },
      { id: 2, screenDistDCm: '85.0', lensPos1Cm: '19.2', lensPos2Cm: '65.8' },
      { id: 3, screenDistDCm: '90.0', lensPos1Cm: '18.7', lensPos2Cm: '71.3' },
      { id: 4, screenDistDCm: '95.0', lensPos1Cm: '18.3', lensPos2Cm: '76.7' },
      { id: 5, screenDistDCm: '100.0', lensPos1Cm: '18.0', lensPos2Cm: '82.0' },
    ]);
  };

  const handleClear = () => {
    setTrials(trials.map((t) => ({ ...t, screenDistDCm: '', lensPos1Cm: '', lensPos2Cm: '' })));
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
              <Scan className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'විස්ථාපන ක්‍රමයේ ප්‍රකාශ සැකැස්ම' : 'Displacement Method Optical Bench Schematic'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center p-4 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <svg width="320" height="200" viewBox="0 0 320 200" className="overflow-visible">
                {/* Optical bench rail */}
                <line x1="20" y1="140" x2="300" y2="140" stroke="#94A3B8" strokeWidth="4" />

                {/* Object upright at x = 30 */}
                <rect x="28" y="70" width="4" height="70" fill="#1E293B" />
                <polygon points="30,60 25,70 35,70" fill="#EF4444" />
                <text x="30" y="52" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Object</text>

                {/* Screen upright at x = 280 */}
                <rect x="278" y="70" width="4" height="70" fill="#1E293B" />
                <rect x="274" y="60" width="12" height="40" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
                <text x="280" y="52" textAnchor="middle" fontSize="9" fill="#1E293B" fontWeight="bold">Screen</text>

                {/* Lens Position 1 (x = 90) */}
                <g transform="translate(90, 70)">
                  <path d="M 0 0 C 6 25 6 45 0 70 C -6 45 -6 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">Pos 1</text>
                </g>

                {/* Lens Position 2 (x = 220) */}
                <g transform="translate(220, 70)">
                  <path d="M 0 0 C 6 25 6 45 0 70 C -6 45 -6 25 0 0" fill="#79B9E7" fillOpacity="0.5" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1="0" y1="70" x2="0" y2="75" stroke="#1E293B" strokeWidth="3" />
                  <text x="0" y="-8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">Pos 2</text>
                </g>

                {/* Displacement d arrow */}
                <line x1="90" y1="110" x2="220" y2="110" stroke="#0F766E" strokeWidth="1.5" />
                <polygon points="90,110 95,108 95,112" fill="#0F766E" />
                <polygon points="220,110 215,108 215,112" fill="#0F766E" />
                <text x="155" y="104" textAnchor="middle" fontSize="9" fill="#0F766E" fontWeight="bold">Displacement d</text>

                {/* Total screen distance D arrow */}
                <line x1="30" y1="165" x2="280" y2="165" stroke="#1E293B" strokeWidth="1.5" />
                <polygon points="30,165 35,163 35,167" fill="#1E293B" />
                <polygon points="280,165 275,163 275,167" fill="#1E293B" />
                <text x="155" y="180" textAnchor="middle" fontSize="10" fill="#1E293B" fontWeight="bold">Total Distance D &gt; 4f</text>
              </svg>
            </div>
            <p className="text-xs text-[#475569] text-center mt-2 italic">
              {locale === 'si' ? 'නාභීය දුර සූත්‍රය: f = (D² - d²) / (4D) (කාච ශුන්‍ය දෝෂවලින් තොරයි)' : 'Focal length: f = (D² - d²) / (4D) (independent of lens index error)'}
            </p>
          </CardContent>
        </Card>

        {/* Theory & Controls */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium">
              {t.theoryTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#475569]">
            <p className="whitespace-pre-line leading-relaxed">{t.theoryText}</p>
            <div className="p-3 bg-[#F6FAFD] rounded-md border border-[#DFE8EF] flex items-center justify-between">
              <span className="font-semibold text-[#14243A]">{t.nominalFocal}</span>
              <input
                type="number"
                step="0.5"
                value={nominalFocalLengthCm}
                onChange={(e) => setNominalFocalLengthCm(e.target.value)}
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
                  <th className="py-2.5 px-4 font-semibold">{t.screenDistCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.pos1Col}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.pos2Col}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.dispCol}</th>
                  <th className="py-2.5 px-4 font-semibold">{t.focalCol}</th>
                </tr>
              </thead>
              <tbody>
                {calculatedTrials.map((tr) => (
                  <tr key={tr.id} className="border-b border-[#DFE8EF] hover:bg-slate-50">
                    <td className="py-2.5 px-4 font-medium text-[#14243A]">{tr.id}</td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.5"
                        value={tr.screenDistDCm}
                        onChange={(e) => updateTrial(tr.id, 'screenDistDCm', e.target.value)}
                        placeholder="e.g. 80.0"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.lensPos1Cm}
                        onChange={(e) => updateTrial(tr.id, 'lensPos1Cm', e.target.value)}
                        placeholder="e.g. 20.0"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        step="0.1"
                        value={tr.lensPos2Cm}
                        onChange={(e) => updateTrial(tr.id, 'lensPos2Cm', e.target.value)}
                        placeholder="e.g. 60.0"
                        className="w-24 px-2 py-1 text-sm border border-[#DFE8EF] rounded outline-none focus:ring-1 focus:ring-[#0F766E]"
                      />
                    </td>
                    <td className="py-2.5 px-4 font-mono font-medium text-[#475569]">
                      {tr.disp !== null ? `${tr.disp.toFixed(1)} cm` : '—'}
                    </td>
                    <td className="py-2.5 px-4 font-mono font-bold text-[#0F766E]">
                      {tr.fCm !== null ? `${tr.fCm.toFixed(2)} cm` : '—'}
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
                <span className="text-[#475569]">{t.meanFocal}</span>
                <span className="font-bold text-[#0F766E] font-mono text-base">
                  {meanFocal !== null ? `${meanFocal.toFixed(2)} cm` : '—'}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#475569]">{t.nominalFocal}</span>
                <span className="font-mono font-medium text-[#14243A]">
                  {nominalF.toFixed(1)} cm
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

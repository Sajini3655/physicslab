'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RotateCcw, Database, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateForceBoardResultant } from '../physics/calculations';

interface ForceParallelogramPracticalProps {
  locale?: Locale;
}

export const ForceParallelogramPractical: React.FC<ForceParallelogramPracticalProps> = ({
  locale = 'en',
}) => {
  const [pG, setPG] = useState<string>('300'); // Force P in grams-weight
  const [qG, setQG] = useState<string>('400'); // Force Q in grams-weight
  const [rG, setRG] = useState<string>('500'); // Central balancing weight R
  const [angleDeg, setAngleDeg] = useState<string>('90'); // Angle between P and Q (degrees)

  const t = {
    en: {
      title: 'Practical 2.1: Verification of the Parallelogram Law & Triangle of Forces',
      aim: 'Aim: To verify the Parallelogram Law of Forces and Triangle of Forces for three coplanar concurrent forces in static equilibrium using Gravesande’s force board.',
      apparatus: 'Apparatus: Gravesande’s force board, two frictionless pulleys, three slotted weight hangers with weights (P, Q, R), thin light cord, drawing paper, mirror strip, protractor, set squares.',
      theoryTitle: 'Physical Principle & Parallelogram Geometry',
      theoryText: 'When three coplanar concurrent forces P, Q, and R act on a knot in equilibrium, the vector sum is zero: P + Q + R = 0. According to the Parallelogram Law, the resultant of P and Q is represented in magnitude and direction by the diagonal of the parallelogram whose adjacent sides represent P and Q. For equilibrium, this diagonal resultant F_diag must be equal in magnitude and collinear in opposite direction to counterweight R: F_diag = √(P² + Q² + 2PQ cos θ) ≈ R.',
      procedure: 'Procedure: 1. Fix drawing paper to the vertical force board. 2. Pass strings over pulleys and suspend weights P and Q; suspend weight R from central knot O. 3. Adjust weights so knot O settles freely near the board center without touching the board or pulleys. 4. Using a mirror strip to eliminate parallax, mark the line of each thread with two pricks. 5. Measure angle θ between strings P and Q. 6. Draw vectors to scale and calculate the diagonal resultant.',
      obsTitle: 'Equilibrium Force Observations',
      forcePLabel: 'Force P (g wt):',
      forceQLabel: 'Force Q (g wt):',
      forceRLabel: 'Counterweight R (g wt):',
      angleLabel: 'Angle θ between P and Q (°):',
      calcTitle: 'Analytical Resultant & Error Analysis',
      calcDiag: 'Calculated Diagonal Resultant:',
      measuredR: 'Measured Balancing Weight R:',
      discrepancy: 'Percentage Discrepancy:',
      verdictPass: 'Equilibrium Verified (Discrepancy ≤ 5%)',
      verdictFail: 'Check Friction / Pulley Alignment',
      vectorLoopTitle: 'Triangle of Forces Closure Check',
      vectorLoopText: 'If vectors P, Q, and R are drawn tip-to-tail to scale, they form a closed triangle, proving that the net external force ΣF = 0.',
      precautionsTitle: 'Experimental Precautions',
      precautions: '1. Tap the force board gently before reading to minimize pulley axle friction. 2. Use a plane mirror strip under strings to avoid parallax error when marking lines. 3. Ensure the central knot O does not rub against the drawing paper or board surface.',
      loadSample: 'Load Sample Data',
      clearInputs: 'Clear Inputs',
      printSheet: 'Print Laboratory Record',
    },
    si: {
      title: 'ප්‍රායෝගික පරීක්ෂණය 2.1: බල සමාන්තරාස්‍ර සහ බල ත්‍රිකෝණ නීතිය සත්‍යාපනය කිරීම',
      aim: 'අරමුණ: ග්‍රේව්සැන්ඩ් බල ලෑල්ල භාවිතයෙන් ස්ථිතික තුල්‍යතාවයේ පවතින ඒකතල සමගාමී බල තුනක් සඳහා බල සමාන්තරාස්‍ර නියමය සහ බල ත්‍රිකෝණ නියමය සත්‍යාපනය කිරීම.',
      apparatus: 'උපකරණ: ග්‍රේව්සැන්ඩ් බල ලෑල්ල, ඝර්ෂණ-විරහිත කප්පි දෙකක්, පඩි තැටි 3ක් සහිත බර පඩි (P, Q, R), සැහැල්ලු නූල්, චිත්‍ර ඇඳීමේ කඩදාසි, දර්පණ පටියක්, කෝණමානයක්, සෘජුකෝණ ත්‍රිකෝණ.',
      theoryTitle: 'භෞතික මූලධර්මය සහ සමාන්තරාස්‍ර ජ්‍යාමිතිය',
      theoryText: 'ගැටයක් O මත ක්‍රියාකරන ඒකතල සමගාමී බල P, Q, සහ R තුල්‍යතාවයේ පවතින විට දෛශික ඓක්‍යය ශූන්‍ය වේ: P + Q + R = 0. බල සමාන්තරාස්‍ර නීතියට අනුව, P සහ Q බල නිරූපණය කරන බද්ධ පාද මඟින් තනන සමාන්තරාස්‍රයේ විකර්ණයෙන් සම්ප්‍රයුක්ත බලය F_diag ලැබේ. තුල්‍යතාවය සඳහා මෙම විකර්ණ සම්ප්‍රයුක්තය ප්‍රතිවිරුද්ධ දිශාවට ක්‍රියාකරන R බරට විශාලත්වයෙන් සමාන විය යුතුය: F_diag = √(P² + Q² + 2PQ cos θ) ≈ R.',
      procedure: 'ක්‍රමවේදය: 1. බල ලෑල්ල මත චිත්‍ර කඩදාසිය සවි කරන්න. 2. කප්පි හරහා නූල් යවා P සහ Q බර එල්ලන්න; මැද ගැටයෙන් R බර එල්ලන්න. 3. ගැටය O ලෑල්ලේ හෝ කප්පිවල නොගෑවී මධ්‍යයේ නිදහසේ සමතුලිත වීමට සලස්වන්න. 4. දෘෂ්ටි විලාස දෝෂය වැළැක්වීමට දර්පණ පටියක් යොදා නූල්වල දිශා ලකුණු කරන්න. 5. කෝණය θ මැන සමාන්තරාස්‍ර විකර්ණය ගණනය කරන්න.',
      obsTitle: 'තුල්‍යතා බල නිරීක්ෂණ',
      forcePLabel: 'බලය P (g wt):',
      forceQLabel: 'බලය Q (g wt):',
      forceRLabel: 'තුල්‍යතා බර R (g wt):',
      angleLabel: 'P සහ Q අතර කෝණය θ (°):',
      calcTitle: 'සම්ප්‍රයුක්තය සහ දෝෂ විශ්ලේෂණය',
      calcDiag: 'ගණනය කළ විකර්ණ සම්ප්‍රයුක්තය:',
      measuredR: 'මනින ලද තුල්‍යතා බර R:',
      discrepancy: 'ප්‍රතිශත අපගමනය:',
      verdictPass: 'තුල්‍යතාව සත්‍යාපනය විය (අපගමනය ≤ 5%)',
      verdictFail: 'කප්පි ඝර්ෂණය / පෙළගැස්ම පරීක්ෂා කරන්න',
      vectorLoopTitle: 'බල ත්‍රිකෝණය සංවෘත වීමේ පරීක්ෂාව',
      vectorLoopText: 'P, Q සහ R දෛශික පරිමාණයකට මුලට-අග ඇඳි විට සංවෘත ත්‍රිකෝණයක් සෑදේ නම්, ශුද්ධ බාහිර බලය ΣF = 0 බව තහවුරු වේ.',
      precautionsTitle: 'පරීක්ෂණාත්මක පූර්වෝපායයන්',
      precautions: '1. කප්පි අක්ෂයේ ඝර්ෂණය අවම කිරීමට පාඨාංක ගැනීමට පෙර ලෑල්ලට මෘදුව තට්ටු කරන්න. 2. නූල් දිශා ලකුණු කිරීමේදී දෘෂ්ටි විලාස දෝෂය වැළැක්වීමට තල දර්පණ පටියක් භාවිත කරන්න. 3. මැද ගැටය කඩදාසියේ නොගෑවෙන බවට වග බලා ගන්න.',
      loadSample: 'ආදර්ශ දත්ත පුරවන්න',
      clearInputs: 'හිස් කරන්න',
      printSheet: 'වාර්තාව මුද්‍රණය කරන්න',
    },
  }[locale];

  const numP = parseFloat(pG);
  const numQ = parseFloat(qG);
  const numR = parseFloat(rG);
  const numAngle = parseFloat(angleDeg);

  const isValid =
    !isNaN(numP) && !isNaN(numQ) && !isNaN(numR) && !isNaN(numAngle) &&
    numP > 0 && numQ > 0 && numR > 0 && numAngle >= 0 && numAngle <= 180;

  const analysis = isValid
    ? calculateForceBoardResultant(numP, numQ, numAngle, numR)
    : null;

  const handleLoadSample = (preset: '345' | 'equal' | 'general') => {
    if (preset === '345') {
      setPG('300');
      setQG('400');
      setRG('500');
      setAngleDeg('90');
    } else if (preset === 'equal') {
      setPG('250');
      setQG('250');
      setRG('250');
      setAngleDeg('120');
    } else {
      setPG('200');
      setQG('300');
      setRG('435');
      setAngleDeg('60');
    }
  };

  const handleClear = () => {
    setPG('');
    setQG('');
    setRG('');
    setAngleDeg('');
  };

  return (
    <div className="space-y-6">
      {/* Aim & Theory Card */}
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
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.theoryTitle}</span>
            <p>{t.theoryText}</p>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.procedure}
          </p>
        </CardContent>
      </Card>

      {/* Force Board Diagram & Observations */}
      <Card className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl shadow-2xs">
        <CardHeader className="p-6 pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-base font-bold text-[#14243A] dark:text-[#F8FAFC] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#0F766E] dark:text-[#14B8A6]" />
            {t.obsTitle}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-8 rounded-lg"
              onClick={() => handleLoadSample('345')}
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
          {/* SVG Diagram of Gravesande's Apparatus */}
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] flex justify-center">
            <svg viewBox="0 0 380 220" className="w-full max-w-md h-auto drop-shadow-xs">
              {/* Force Board Canvas */}
              <rect x="20" y="20" width="340" height="180" rx="10" fill="#FFFFFF" stroke="#DFE8EF" strokeWidth="1.5" />
              {/* Board Title Label */}
              <text x="35" y="40" fontSize="10" fontWeight="bold" fill="#64748B">Gravesande Force Board</text>

              {/* Pulleys Left and Right */}
              <circle cx="70" cy="50" r="10" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="310" cy="50" r="10" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />

              {/* Central Knot O */}
              <circle cx="190" cy="110" r="4" fill="#14243A" />
              <text x="195" y="105" fontSize="11" fontWeight="bold" fill="#14243A">O</text>

              {/* Strings */}
              {/* String to Pulley 1 (Force P) */}
              <line x1="190" y1="110" x2="70" y2="50" stroke="#0F766E" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="70" y1="50" x2="70" y2="150" stroke="#0F766E" strokeWidth="2" />
              <rect x="58" y="150" width="24" height="20" rx="3" fill="#0F766E" />
              <text x="70" y="164" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">P</text>

              {/* String to Pulley 2 (Force Q) */}
              <line x1="190" y1="110" x2="310" y2="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="310" y1="50" x2="310" y2="150" stroke="#3B82F6" strokeWidth="2" />
              <rect x="298" y="150" width="24" height="20" rx="3" fill="#3B82F6" />
              <text x="310" y="164" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">Q</text>

              {/* String Downward (Counterweight R) */}
              <line x1="190" y1="110" x2="190" y2="185" stroke="#DC2626" strokeWidth="2.5" />
              <rect x="178" y="185" width="24" height="20" rx="3" fill="#DC2626" />
              <text x="190" y="199" fontSize="9" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">R</text>

              {/* Angle Arc at O */}
              <path d="M 160 95 A 35 35 0 0 1 220 95" fill="none" stroke="#B45309" strokeWidth="1.5" />
              <text x="190" y="88" fontSize="10" fontWeight="bold" fill="#B45309" textAnchor="middle">{angleDeg || 'θ'}°</text>
            </svg>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <label className="text-[11px] font-bold text-[#0F766E] dark:text-[#14B8A6] block font-sans mb-1">
                {t.forcePLabel}
              </label>
              <input
                type="text"
                value={pG}
                onChange={(e) => setPG(e.target.value)}
                placeholder="e.g. 300"
                className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#3B82F6] block font-sans mb-1">
                {t.forceQLabel}
              </label>
              <input
                type="text"
                value={qG}
                onChange={(e) => setQG(e.target.value)}
                placeholder="e.g. 400"
                className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#DC2626] block font-sans mb-1">
                {t.forceRLabel}
              </label>
              <input
                type="text"
                value={rG}
                onChange={(e) => setRG(e.target.value)}
                placeholder="e.g. 500"
                className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-[#B45309] block font-sans mb-1">
                {t.angleLabel}
              </label>
              <input
                type="text"
                value={angleDeg}
                onChange={(e) => setAngleDeg(e.target.value)}
                placeholder="e.g. 90"
                className="w-full px-3 py-2 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E]"
              />
            </div>
          </div>

          {/* Analysis Results */}
          {analysis && (
            <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
              <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
                {t.calcTitle}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.calcDiag}</span>
                  <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                    {analysis.diagonalResultantG} g wt
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.measuredR}</span>
                  <span className="text-sm font-bold text-[#14243A] dark:text-[#F8FAFC]">
                    {numR} g wt
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
                  <span className="text-[10px] text-[#64748B] block font-sans">{t.discrepancy}</span>
                  <span className="text-sm font-bold text-[#B45309]">
                    {analysis.percentageDiscrepancy}%
                  </span>
                </div>
              </div>

              {/* Verdict Banner */}
              <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-semibold ${
                analysis.isEquilibriumVerified
                  ? 'bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-amber-100/70 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300'
              }`}>
                {analysis.isEquilibriumVerified ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <span>{analysis.isEquilibriumVerified ? t.verdictPass : t.verdictFail}</span>
              </div>
            </div>
          )}

          {/* Precautions Footer */}
          <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1">
            <span className="font-bold text-[#14243A] dark:text-[#F8FAFC] block">{t.precautionsTitle}</span>
            <p>{t.precautions}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

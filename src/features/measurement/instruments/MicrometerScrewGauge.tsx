'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { ZoomIn, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface MicrometerScrewGaugeProps {
  locale?: Locale;
  initialReadingMm?: number;
  showInspector?: boolean;
  onReadingChange?: (readingMm: number, correctedMm: number) => void;
}

export const MicrometerScrewGauge: React.FC<MicrometerScrewGaugeProps> = ({
  locale = 'en',
  initialReadingMm = 4.38,
  showInspector = true,
  onReadingChange,
}) => {
  const [readingMm, setReadingMm] = useState<number>(initialReadingMm);
  const [zeroErrorMm, setZeroErrorMm] = useState<number>(0.0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [userGuess, setUserGuess] = useState<string>('');
  const [guessFeedback, setGuessFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [selectedPreset, setSelectedPreset] = useState<'custom' | 'wire' | 'coin_thick' | 'glass_slip'>('custom');

  const pitchMm = 0.5;
  const circularDivisions = 50;
  const leastCount = pitchMm / circularDivisions; // 0.01 mm

  const roundToLc = (val: number) => {
    return Math.round(val / leastCount) * leastCount;
  };

  const clampedReading = Math.max(0, Math.min(25, roundToLc(readingMm)));
  const correctedReading = Math.max(0, Number((clampedReading - zeroErrorMm).toFixed(2)));

  const handleReadingChange = (newVal: number) => {
    const rounded = roundToLc(Math.max(0, Math.min(25, newVal)));
    setReadingMm(rounded);
    const corr = Math.max(0, Number((rounded - zeroErrorMm).toFixed(2)));
    onReadingChange?.(rounded, corr);
    setGuessFeedback('idle');
  };

  // Sleeve scale breakdown: integer mm, half-mm sub-division
  const sleeveMainMm = Math.floor(clampedReading);
  const hasHalfMm = clampedReading - sleeveMainMm >= 0.5;
  const sleeveReading = sleeveMainMm + (hasHalfMm ? 0.5 : 0.0);
  const circularDivision = Math.round((clampedReading - sleeveReading) / leastCount) % circularDivisions;

  const t = {
    en: {
      title: 'Micrometer Screw Gauge Simulator',
      subtitle: 'Pitch: 0.5 mm | 50 Circular Divisions | Least Count: 0.01 mm',
      sleeveScale: 'Sleeve Reading (Linear Scale)',
      circularScale: 'Circular Scale Reading (CSR)',
      observed: 'Observed Reading',
      zeroError: 'Zero Error (e)',
      corrected: 'Corrected Reading',
      zeroFormula: 'Corrected = Observed - (Zero Error)',
      presets: 'Specimen Presets',
      custom: 'Free Exploration',
      wire: 'Nichrome Wire (0.72 mm)',
      coinThick: 'Coin Thickness (1.85 mm)',
      glassSlip: 'Glass Slip (1.14 mm)',
      zeroNone: 'Zero Error: 0.00 mm',
      zeroPos: 'Positive (+0.03 mm)',
      zeroNeg: 'Negative (-0.03 mm)',
      checkYourself: 'Self-Check Reading',
      enterReading: 'Enter reading in mm (e.g. 4.38)',
      checkBtn: 'Verify',
      revealBtn: 'Reveal Reading',
      hideBtn: 'Hide Details',
      correct: 'Correct! Accurate to 0.01 mm.',
      incorrect: 'Notice whether the 0.5 mm division is uncovered on the sleeve!',
      fineControls: 'Spindle & Thimble Control',
      zoomLens: 'Sleeve & Thimble Datum Alignment',
    },
    si: {
      title: 'මයික්‍රොමීටර් ඉස්කුරුප්පු ආමාන අනුකරණය',
      subtitle: 'අන්තරාලය: 0.5 mm | වට පරිමාණ කොටස්: 50 | කුඩාම මිනුම: 0.01 mm',
      sleeveScale: 'කොපු (සරල රේඛීය) පරිමාණ පාඨාංකය',
      circularScale: 'වට පරිමාණ පාඨාංකය (CSR)',
      observed: 'නිරීක්ෂිත පාඨාංකය',
      zeroError: 'ශූන්‍ය දෝෂය (e)',
      corrected: 'ශෝධිත පාඨාංකය',
      zeroFormula: 'ශෝධිත පාඨාංකය = නිරීක්ෂිත - (ශූන්‍ය දෝෂය)',
      presets: 'නිදර්ශක සැකසුම්',
      custom: 'නිදහස් ගවේෂණය',
      wire: 'නික්‍රෝම් කම්බිය (0.72 mm)',
      coinThick: 'කාසියේ ඝනකම (1.85 mm)',
      glassSlip: 'වීදුරු තහඩුව (1.14 mm)',
      zeroNone: 'ශූන්‍ය දෝෂය රහිත: 0.00 mm',
      zeroPos: 'ධන ශූන්‍ය දෝෂය (+0.03 mm)',
      zeroNeg: 'සෘණ ශූන්‍ය දෝෂය (-0.03 mm)',
      checkYourself: 'පාඨාංකය කියවීමේ අභ්‍යාසය',
      enterReading: 'මිලිමීටර වලින් ඇතුළත් කරන්න (උදා: 4.38)',
      checkBtn: 'පරීක්ෂා කරන්න',
      revealBtn: 'පිළිතුර පෙන්වන්න',
      hideBtn: 'තොරතුරු සඟවන්න',
      correct: 'නිවැරදියි! 0.01 mm දක්වා නිරවද්‍යයි.',
      incorrect: 'කොපුවේ 0.5 mm රේඛාව නිරාවරණය වී ඇත්දැයි හොඳින් බලන්න!',
      fineControls: 'දඟරය සහ කරකැවුම පාලනය',
      zoomLens: 'දත්ත රේඛාව සහ වට පරිමාණ පෙළගැස්ම',
    },
  }[locale];

  const handleCheckGuess = () => {
    const val = parseFloat(userGuess.trim());
    if (isNaN(val)) return;
    if (Math.abs(val - clampedReading) <= 0.006) {
      setGuessFeedback('correct');
    } else {
      setGuessFeedback('incorrect');
    }
  };

  // Graphical parameters for SVG
  const pxPerMm = 12; // 1 mm = 12 px
  const thimbleOffset = clampedReading * pxPerMm;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D] pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </h3>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.subtitle}
          </p>
        </div>

        {/* Specimen Presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <Button
            size="sm"
            variant={selectedPreset === 'custom' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => { setSelectedPreset('custom'); }}
          >
            {t.custom}
          </Button>
          <Button
            size="sm"
            variant={selectedPreset === 'wire' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('wire');
              handleReadingChange(0.72);
            }}
          >
            {t.wire}
          </Button>
          <Button
            size="sm"
            variant={selectedPreset === 'glass_slip' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('glass_slip');
              handleReadingChange(1.14);
            }}
          >
            {t.glassSlip}
          </Button>
          <Button
            size="sm"
            variant={selectedPreset === 'coin_thick' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('coin_thick');
              handleReadingChange(1.85);
            }}
          >
            {t.coinThick}
          </Button>
        </div>
      </div>

      {/* SVG Instrument Canvas */}
      <div className="relative w-full overflow-x-auto bg-[#F6FAFD] dark:bg-[#0B131E] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 select-none">
        <svg
          viewBox="0 0 660 250"
          className="w-full min-w-[600px] h-auto drop-shadow-xs"
        >
          <defs>
            <linearGradient id="uFrameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F766E" />
              <stop offset="50%" stopColor="#115E59" />
              <stop offset="100%" stopColor="#042F2E" />
            </linearGradient>
            <linearGradient id="steelRod" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="thimbleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>

          {/* U-SHAPED FRAME */}
          <path
            d="M 120 115 C 120 220 230 220 250 115 L 230 115 C 210 195 140 195 140 115 Z"
            fill="url(#uFrameGrad)"
            stroke="#042F2E"
            strokeWidth="2"
          />

          {/* Frame Label */}
          <text
            x="185"
            y="180"
            fill="#CCFBF1"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="1"
          >
            0 - 25 mm / 0.01 mm
          </text>

          {/* FIXED ANVIL (Left tip) */}
          <rect
            x="110"
            y="105"
            width="25"
            height="20"
            fill="url(#steelRod)"
            stroke="#475569"
            strokeWidth="1.5"
            rx="1"
          />

          {/* SPECIMEN INSERTED (If reading > 0) */}
          {clampedReading > 0 && (
            <rect
              x="135"
              y="100"
              width={clampedReading * pxPerMm}
              height="30"
              rx="2"
              fill="#79B9E7"
              fillOpacity="0.5"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          )}

          {/* MOVABLE SPINDLE */}
          {/* Spindle rod extends from thimble to anvil */}
          <rect
            x={135 + thimbleOffset}
            y="105"
            width={125 - thimbleOffset + 40}
            height="20"
            fill="url(#steelRod)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* BARREL / SLEEVE (Fixed Cylinder containing Datum Line) */}
          <rect
            x="245"
            y="98"
            width="140"
            height="34"
            fill="url(#steelRod)"
            stroke="#334155"
            strokeWidth="1.5"
          />

          {/* Horizontal Datum Line */}
          <line
            x1="245"
            y1="115"
            x2="385"
            y2="115"
            stroke="#0F172A"
            strokeWidth="1.5"
          />

          {/* Sleeve Millimeter Graticule (0 to 10 mm on view) */}
          {Array.from({ length: 11 }).map((_, mm) => {
            const x = 248 + mm * pxPerMm;
            return (
              <g key={`sleeve-mm-${mm}`}>
                {/* Upper 1 mm markings */}
                <line
                  x1={x}
                  y1="115"
                  x2={x}
                  y2="103"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y="101"
                  fontSize="7"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#0F172A"
                  fontFamily="monospace"
                >
                  {mm}
                </text>
                {/* Lower 0.5 mm sub-divisions */}
                {mm < 10 && (
                  <line
                    x1={x + pxPerMm / 2}
                    y1="115"
                    x2={x + pxPerMm / 2}
                    y2="125"
                    stroke="#0F172A"
                    strokeWidth="0.9"
                  />
                )}
              </g>
            );
          })}

          {/* ROTATING THIMBLE (Moves right with opening) */}
          <g transform={`translate(${thimbleOffset}, 0)`}>
            {/* Beveled Thimble Edge */}
            <path
              d="M 270 92 L 290 95 L 290 135 L 270 138 Z"
              fill="url(#thimbleGrad)"
              stroke="#334155"
              strokeWidth="1.5"
            />
            {/* Main Thimble Knurled Body */}
            <rect
              x="290"
              y="94"
              width="100"
              height="42"
              fill="url(#thimbleGrad)"
              stroke="#334155"
              strokeWidth="1.5"
            />
            {/* Knurling Hatch Lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={`knurl-${i}`}
                x1={300 + i * 8}
                y1="96"
                x2={300 + i * 8}
                y2="134"
                stroke="#64748B"
                strokeWidth="1"
              />
            ))}

            {/* Circular Scale Marks on Bevel Edge */}
            {/* Show visible divisions centered on current circular division */}
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((offset) => {
              const divNum = (circularDivision + offset + circularDivisions) % circularDivisions;
              const y = 115 - offset * 4.5;
              if (y < 95 || y > 135) return null;
              const isMajor = divNum % 5 === 0;

              return (
                <g key={`thimble-mark-${offset}`}>
                  <line
                    x1="270"
                    y1={y}
                    x2={isMajor ? "282" : "277"}
                    stroke="#0F172A"
                    strokeWidth={isMajor ? 1.2 : 0.8}
                  />
                  {isMajor && (
                    <text
                      x="285"
                      y={y + 3}
                      fontSize="7"
                      fontWeight="bold"
                      fill="#0F172A"
                      fontFamily="monospace"
                    >
                      {divNum}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Ratchet Stop (Rightmost end) */}
            <rect
              x="390"
              y="102"
              width="30"
              height="26"
              rx="2"
              fill="#475569"
              stroke="#1E293B"
              strokeWidth="1"
            />
            <circle cx="410" cy="115" r="3" fill="#94A3B8" />
          </g>
        </svg>

        {/* Live Spindle Readout */}
        <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 dark:bg-[#111D2D]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono text-[#0F766E] dark:text-[#14B8A6] font-bold">
          Spindle Gap: {clampedReading.toFixed(2)} mm
        </div>
      </div>

      {/* Controls & Stepping */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fine Thimble Rotation */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.fineControls}
            </span>
            <span className="text-xs font-mono text-[#0F766E] font-semibold">
              {clampedReading.toFixed(2)} mm
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="15"
            step={leastCount}
            value={clampedReading}
            onChange={(e) => handleReadingChange(parseFloat(e.target.value))}
            className="w-full accent-[#0F766E] cursor-pointer"
          />

          <div className="flex flex-wrap items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading - 0.5)}
            >
              -0.5 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading - 0.01)}
            >
              -0.01 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading + 0.01)}
            >
              +0.01 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading + 0.5)}
            >
              +0.5 mm
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-7 px-2 ml-auto text-[#64748B]"
              onClick={() => handleReadingChange(0)}
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Close Jaws
            </Button>
          </div>
        </div>

        {/* Zero Error Controls */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.zeroError}
            </span>
            <span className={`text-xs font-mono font-semibold ${zeroErrorMm === 0 ? 'text-[#64748B]' : zeroErrorMm > 0 ? 'text-[#B45309]' : 'text-[#7C3AED]'}`}>
              {zeroErrorMm > 0 ? `+${zeroErrorMm.toFixed(2)}` : zeroErrorMm.toFixed(2)} mm
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={zeroErrorMm === 0 ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setZeroErrorMm(0.0)}
            >
              {t.zeroNone}
            </Button>
            <Button
              size="sm"
              variant={zeroErrorMm === 0.03 ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setZeroErrorMm(0.03)}
            >
              {t.zeroPos}
            </Button>
            <Button
              size="sm"
              variant={zeroErrorMm === -0.03 ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setZeroErrorMm(-0.03)}
            >
              {t.zeroNeg}
            </Button>
          </div>

          <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] leading-tight">
            {t.zeroFormula}
          </p>
        </div>
      </div>

      {/* Alignment Lens Details */}
      <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
        <div className="flex items-center gap-2">
          <ZoomIn className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
          <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
            {t.zoomLens}
          </span>
        </div>
        <p className="text-xs text-[#0F766E] dark:text-[#14B8A6] leading-relaxed">
          Sleeve reading: <strong>{sleeveReading.toFixed(1)} mm</strong> (Uncovered: {sleeveMainMm} mm {hasHalfMm ? '+ 0.5 mm' : ''}) | Circular division on datum line: <strong>Division #{circularDivision}</strong> ({circularDivision} × 0.01 mm = {(circularDivision * 0.01).toFixed(2)} mm).
        </p>
      </div>

      {/* Inspector / Quiz */}
      {showInspector && (
        <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.checkYourself}
            </span>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-7 text-[#0F766E]"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? <EyeOff className="w-3.5 h-3.5 mr-1" /> : <Eye className="w-3.5 h-3.5 mr-1" />}
              {showAnswer ? t.hideBtn : t.revealBtn}
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={t.enterReading}
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] bg-[#F6FAFD] dark:bg-[#0B131E] text-xs text-[#14243A] dark:text-[#F8FAFC] w-56 font-mono focus:outline-[#0F766E]"
            />
            <Button
              size="sm"
              onClick={handleCheckGuess}
              className="text-xs h-8 bg-[#0F766E] text-white hover:bg-[#0d645e]"
            >
              {t.checkBtn}
            </Button>
          </div>

          {guessFeedback === 'correct' && (
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ {t.correct}
            </p>
          )}
          {guessFeedback === 'incorrect' && (
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              ✗ {t.incorrect}
            </p>
          )}

          {showAnswer && (
            <div className="p-3.5 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] text-xs space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span>{t.sleeveScale}:</span>
                <span className="font-bold">{sleeveReading.toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between">
                <span>{t.circularScale}:</span>
                <span className="font-bold">{circularDivision} × 0.01 mm = {(circularDivision * 0.01).toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between text-[#0F766E] border-t border-[#DFE8EF] dark:border-[#1E334D] pt-1">
                <span className="font-bold">{t.observed}:</span>
                <span className="font-bold">{clampedReading.toFixed(2)} mm</span>
              </div>
              {zeroErrorMm !== 0 && (
                <div className="flex justify-between text-indigo-600 pt-1">
                  <span className="font-bold">{t.corrected}:</span>
                  <span className="font-bold">{correctedReading.toFixed(2)} mm</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

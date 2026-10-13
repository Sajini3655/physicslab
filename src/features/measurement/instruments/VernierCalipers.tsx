'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { ZoomIn, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface VernierCalipersProps {
  locale?: Locale;
  initialReadingMm?: number;
  leastCount?: 0.1 | 0.02;
  showInspector?: boolean;
  onReadingChange?: (readingMm: number, correctedMm: number) => void;
}

export const VernierCalipers: React.FC<VernierCalipersProps> = ({
  locale = 'en',
  initialReadingMm = 24.6,
  leastCount = 0.1,
  showInspector = true,
  onReadingChange,
}) => {
  const [readingMm, setReadingMm] = useState<number>(initialReadingMm);
  const [zeroErrorMm, setZeroErrorMm] = useState<number>(0.0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [userGuess, setUserGuess] = useState<string>('');
  const [guessFeedback, setGuessFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [selectedPreset, setSelectedPreset] = useState<'custom' | 'cylinder_ext' | 'cylinder_int' | 'cylinder_depth'>('custom');

  const roundToLc = (val: number) => {
    return Math.round(val / leastCount) * leastCount;
  };

  const clampedReading = Math.max(0, Math.min(120, roundToLc(readingMm)));
  const correctedReading = Math.max(0, Number((clampedReading - zeroErrorMm).toFixed(2)));

  const handleReadingChange = (newVal: number) => {
    const rounded = roundToLc(Math.max(0, Math.min(120, newVal)));
    setReadingMm(rounded);
    const corr = Math.max(0, Number((rounded - zeroErrorMm).toFixed(2)));
    onReadingChange?.(rounded, corr);
    setGuessFeedback('idle');
  };

  const msr = Math.floor(clampedReading);
  const vsrDivision = Math.round(((clampedReading - msr) / leastCount));

  const t = {
    en: {
      title: 'Vernier Calipers Simulator',
      subtitle: leastCount === 0.1 ? '10-division Vernier (Least Count: 0.1 mm)' : '50-division Vernier (Least Count: 0.02 mm)',
      mainScale: 'Main Scale Reading (MSR)',
      vernierScale: 'Coincident Vernier Division (VSR)',
      observed: 'Observed Reading',
      zeroError: 'Zero Error (e)',
      corrected: 'Corrected Reading',
      zeroCorrectionFormula: 'Corrected = Observed - (Zero Error)',
      presets: 'Preset Investigations',
      custom: 'Free Exploration',
      cylExt: 'Cylinder Ext. Diameter (25.4 mm)',
      cylInt: 'Cylinder Int. Diameter (18.6 mm)',
      cylDepth: 'Cylinder Depth (42.3 mm)',
      zeroNone: 'Zero Error: 0.0 mm',
      zeroPos: 'Positive (+0.2 mm)',
      zeroNeg: 'Negative (-0.2 mm)',
      checkYourself: 'Self-Check Reading',
      enterReading: 'Enter reading in mm (e.g. 24.6)',
      checkBtn: 'Verify',
      revealBtn: 'Reveal Reading',
      hideBtn: 'Hide Details',
      correct: 'Correct! Excellent measurement technique.',
      incorrect: 'Not quite. Check the coincident Vernier line carefully.',
      fineControls: 'Fine Stepping',
      zoomLens: 'High-Precision Vernier View (Coincidence Detector)',
    },
    si: {
      title: 'වර්නියර් කැලිපර අනුකරණය',
      subtitle: leastCount === 0.1 ? 'කොටස් 10 වර්නියරය (කුඩාම මිනුම: 0.1 mm)' : 'කොටස් 50 වර්නියරය (කුඩාම මිනුම: 0.02 mm)',
      mainScale: 'ප්‍රධාන පරිමාණ පාඨාංකය (MSR)',
      vernierScale: 'සමපාත වන වර්නියර් කොටස (VSR)',
      observed: 'නිරීක්ෂිත පාඨාංකය',
      zeroError: 'ශූන්‍ය දෝෂය (e)',
      corrected: 'ශෝධිත පාඨාංකය',
      zeroCorrectionFormula: 'ශෝධිත පාඨාංකය = නිරීක්ෂිත - (ශූන්‍ය දෝෂය)',
      presets: 'පූර්ව නිදර්ශන මිනුම්',
      custom: 'නිදහස් ගවේෂණය',
      cylExt: 'සිලින්ඩර බාහිර විෂ්කම්භය (25.4 mm)',
      cylInt: 'සිලින්ඩර අභ්‍යන්තර විෂ්කම්භය (18.6 mm)',
      cylDepth: 'සිලින්ඩර ගැඹුර (42.3 mm)',
      zeroNone: 'ශූන්‍ය දෝෂය රහිත: 0.0 mm',
      zeroPos: 'ධන ශූන්‍ය දෝෂය (+0.2 mm)',
      zeroNeg: 'සෘණ ශූන්‍ය දෝෂය (-0.2 mm)',
      checkYourself: 'පාඨාංකය කියවීමේ අභ්‍යාසය',
      enterReading: 'මිලිමීටර වලින් ඇතුළත් කරන්න (උදා: 24.6)',
      checkBtn: 'පරීක්ෂා කරන්න',
      revealBtn: 'පිළිතුර පෙන්වන්න',
      hideBtn: 'තොරතුරු සඟවන්න',
      correct: 'නිවැරදියි! නිරවද්‍ය මිනුම් තාක්ෂණය.',
      incorrect: 'නැවත බලන්න. ප්‍රධාන හා වර්නියර් රේඛා සමපාත වන තැන හොඳින් නිරීක්ෂණය කරන්න.',
      fineControls: 'සියුම් ගැලපීම',
      zoomLens: 'විශාලනය කළ වර්නියර් දසුන (සමපාත රේඛාව)',
    },
  }[locale];

  const handleCheckGuess = () => {
    const val = parseFloat(userGuess.trim());
    if (isNaN(val)) return;
    if (Math.abs(val - clampedReading) <= leastCount / 2 + 0.001) {
      setGuessFeedback('correct');
    } else {
      setGuessFeedback('incorrect');
    }
  };

  const pixelsPerMm = 4;
  const sliderOffset = clampedReading * pixelsPerMm;

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

        {/* Preset Selector */}
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
            variant={selectedPreset === 'cylinder_ext' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('cylinder_ext');
              handleReadingChange(25.4);
            }}
          >
            {t.cylExt}
          </Button>
          <Button
            size="sm"
            variant={selectedPreset === 'cylinder_int' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('cylinder_int');
              handleReadingChange(18.6);
            }}
          >
            {t.cylInt}
          </Button>
          <Button
            size="sm"
            variant={selectedPreset === 'cylinder_depth' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedPreset('cylinder_depth');
              handleReadingChange(42.3);
            }}
          >
            {t.cylDepth}
          </Button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full overflow-x-auto bg-[#F6FAFD] dark:bg-[#0B131E] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 select-none">
        <svg
          viewBox="0 0 620 220"
          className="w-full min-w-[580px] h-auto drop-shadow-xs"
        >
          <defs>
            <linearGradient id="metalBevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="vernierPlate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>

          {/* MAIN FRAME & FIXED JAW */}
          {/* External Fixed Jaw (bottom left) */}
          <path
            d="M 60 70 L 60 180 L 80 180 L 80 110 L 100 70 Z"
            fill="url(#metalBevel)"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          {/* Internal Fixed Jaw (top left) */}
          <path
            d="M 60 70 L 60 20 L 75 20 L 80 70 Z"
            fill="url(#metalBevel)"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          {/* Main Beam / Scale Body */}
          <rect
            x="60"
            y="70"
            width="540"
            height="40"
            fill="url(#metalBevel)"
            stroke="#64748B"
            strokeWidth="1.5"
          />

          {/* Main Scale Markings (0 to 120 mm) */}
          {Array.from({ length: 121 }).map((_, mm) => {
            const x = 100 + mm * pixelsPerMm;
            if (x > 580) return null;
            const isCm = mm % 10 === 0;
            const isHalfCm = mm % 5 === 0 && !isCm;
            const tickH = isCm ? 18 : isHalfCm ? 12 : 8;

            return (
              <g key={`main-tick-${mm}`}>
                <line
                  x1={x}
                  y1={70}
                  x2={x}
                  y2={70 + tickH}
                  stroke="#1E293B"
                  strokeWidth={isCm ? 1.2 : 0.7}
                />
                {isCm && (
                  <text
                    x={x}
                    y={98}
                    fontSize="9"
                    fontWeight="600"
                    textAnchor="middle"
                    fill="#1E293B"
                    fontFamily="monospace"
                  >
                    {mm / 10}
                  </text>
                )}
              </g>
            );
          })}
          <text x="575" y="82" fontSize="8" fill="#475569" fontWeight="bold">cm</text>

          {/* MOVABLE SLIDER & JAWS */}
          <g transform={`translate(${sliderOffset}, 0)`}>
            {/* Movable Lower External Jaw */}
            <path
              d="M 100 110 L 100 180 L 120 180 L 120 110 Z"
              fill="url(#metalBevel)"
              stroke="#475569"
              strokeWidth="1.5"
            />
            {/* Movable Upper Internal Jaw */}
            <path
              d="M 100 70 L 100 20 L 115 20 L 120 70 Z"
              fill="url(#metalBevel)"
              stroke="#475569"
              strokeWidth="1.5"
            />
            {/* Vernier Plate Body */}
            <rect
              x="95"
              y="66"
              width="90"
              height="48"
              rx="3"
              fill="url(#vernierPlate)"
              stroke="#0F766E"
              strokeWidth="1.5"
              fillOpacity="0.95"
            />
            {/* Cutout window showing main scale */}
            <rect
              x="100"
              y="70"
              width="80"
              height="18"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1"
            />

            {/* Vernier Scale Markings (10 divisions spanning 9 mm -> 36 px) */}
            {Array.from({ length: 11 }).map((_, div) => {
              // 10 vernier divisions = 9 mm on main scale => each division = 0.9 mm = 3.6 px
              const x = 100 + div * (9 * pixelsPerMm / 10);
              const isTerminal = div === 0 || div === 10;
              const isMid = div === 5;
              const tickH = isTerminal ? 14 : isMid ? 11 : 8;

              return (
                <g key={`vernier-tick-${div}`}>
                  <line
                    x1={x}
                    y1={110}
                    x2={x}
                    y2={110 - tickH}
                    stroke="#0F766E"
                    strokeWidth={isTerminal || isMid ? 1.2 : 0.8}
                  />
                  {(div === 0 || div === 5 || div === 10) && (
                    <text
                      x={x}
                      y={102}
                      fontSize="8"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill="#0F766E"
                      fontFamily="monospace"
                    >
                      {div}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Thumb grip screw */}
            <circle cx="170" cy="90" r="4" fill="#94A3B8" stroke="#475569" />
          </g>

          {/* OBJECT BEING MEASURED (Rendered between external jaws if > 0) */}
          {clampedReading > 0 && (
            <rect
              x="80"
              y="130"
              width={clampedReading * pixelsPerMm}
              height="45"
              rx="2"
              fill="#79B9E7"
              fillOpacity="0.4"
              stroke="#0284C7"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          )}
        </svg>

        {/* Reading Overlay Indicator */}
        <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 dark:bg-[#111D2D]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono text-[#0F766E] dark:text-[#14B8A6] font-bold">
          Jaw Opening: {clampedReading.toFixed(1)} mm
        </div>
      </div>

      {/* Stepping & Zero Error Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fine Stepping */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.fineControls}
            </span>
            <span className="text-xs font-mono text-[#0F766E] font-semibold">
              {clampedReading.toFixed(1)} mm
            </span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
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
              onClick={() => handleReadingChange(clampedReading - 1.0)}
            >
              -1.0 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading - leastCount)}
            >
              -{leastCount} mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading + leastCount)}
            >
              +{leastCount} mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleReadingChange(clampedReading + 1.0)}
            >
              +1.0 mm
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
              {zeroErrorMm > 0 ? `+${zeroErrorMm.toFixed(1)}` : zeroErrorMm.toFixed(1)} mm
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
              variant={zeroErrorMm === 0.2 ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setZeroErrorMm(0.2)}
            >
              {t.zeroPos}
            </Button>
            <Button
              size="sm"
              variant={zeroErrorMm === -0.2 ? 'default' : 'outline'}
              className="text-xs h-7 rounded-lg"
              onClick={() => setZeroErrorMm(-0.2)}
            >
              {t.zeroNeg}
            </Button>
          </div>

          <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] leading-tight">
            {t.zeroCorrectionFormula}
          </p>
        </div>
      </div>

      {/* High-Precision Zoom Inset */}
      <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
        <div className="flex items-center gap-2">
          <ZoomIn className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
          <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
            {t.zoomLens}
          </span>
        </div>
        <p className="text-xs text-[#0F766E] dark:text-[#14B8A6] leading-relaxed">
          MSR = <strong>{msr} mm</strong> | Coincident Vernier division = <strong>Division #{vsrDivision}</strong> ({vsrDivision} × {leastCount} = {(vsrDivision * leastCount).toFixed(2)} mm).
        </p>
      </div>

      {/* Inspector / Self-Check Quiz */}
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
                <span>{t.mainScale}:</span>
                <span className="font-bold">{msr} mm</span>
              </div>
              <div className="flex justify-between">
                <span>{t.vernierScale}:</span>
                <span className="font-bold">{vsrDivision} × {leastCount} mm = {(vsrDivision * leastCount).toFixed(2)} mm</span>
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

'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { RotateCcw, Calculator } from 'lucide-react';
import { calculateSpherometerCurvature } from '../physics/calculations';

interface SpherometerProps {
  locale?: Locale;
  initialHeightMm?: number;
  initialLegSeparationMm?: number;
  showInspector?: boolean;
  onCalculationChange?: (hMm: number, rMm: number | null) => void;
}

export const Spherometer: React.FC<SpherometerProps> = ({
  locale = 'en',
  initialHeightMm = 1.34,
  initialLegSeparationMm = 40.0,
  showInspector = true,
  onCalculationChange,
}) => {
  const [hMm, setHMm] = useState<number>(initialHeightMm);
  const [legSeparationMm, setLegSeparationMm] = useState<number>(initialLegSeparationMm);
  const [selectedSurface, setSelectedSurface] = useState<'plane' | 'convex_lens' | 'concave_mirror' | 'custom'>('convex_lens');

  const pitchMm = 1.0;
  const circularDivisions = 100;
  const leastCount = pitchMm / circularDivisions; // 0.01 mm

  const roundToLc = (v: number) => Math.round(v / leastCount) * leastCount;
  const clampedH = Math.max(-5, Math.min(10, roundToLc(hMm)));

  const curvatureResult = calculateSpherometerCurvature(legSeparationMm, clampedH, leastCount);
  const currentRadius = curvatureResult.radiusMm;

  const handleHeightChange = (newH: number) => {
    const rounded = roundToLc(Math.max(-5, Math.min(10, newH)));
    setHMm(rounded);
    const res = calculateSpherometerCurvature(legSeparationMm, rounded, leastCount);
    onCalculationChange?.(rounded, res.radiusMm);
  };

  const handleLegChange = (newA: number) => {
    const clampedA = Math.max(20, Math.min(60, Number(newA.toFixed(1))));
    setLegSeparationMm(clampedA);
    const res = calculateSpherometerCurvature(clampedA, clampedH, leastCount);
    onCalculationChange?.(clampedH, res.radiusMm);
  };

  const t = {
    en: {
      title: 'Spherometer Simulator',
      subtitle: 'Pitch: 1.0 mm | 100 Circular Divisions | Least Count: 0.01 mm',
      surfacePresets: 'Surface Presets',
      planeGlass: 'Plane Glass Plate (h = 0.00 mm)',
      convexLens: 'Convex Lens Surface (h = 1.34 mm)',
      concaveMirror: 'Concave Mirror (h = 1.69 mm)',
      custom: 'Custom Surface',
      elevation: 'Central Screw Elevation (h)',
      legDistance: 'Mean Distance Between Outer Legs (a)',
      radiusOfCurvature: 'Radius of Curvature (R)',
      planeInfinite: 'R = ∞ (Plane Surface)',
      formulaTitle: 'Curvature Formula',
      formula: 'R = (a² / 6h) + (h / 2)',
      verticalScale: 'Pitch Scale Reading (mm)',
      circularScale: 'Circular Disc Head Reading',
      stepControls: 'Screw Elevation Adjustment',
      zoomNotice: 'Center screw tip touches the surface when equilibrium resistance is felt.',
      derivationNote: 'Term a²/(6h) derives from the spherical cap geometry on an equilateral triangle tripod of side a.',
    },
    si: {
      title: 'ගෝලමාන අනුකරණය',
      subtitle: 'අන්තරාලය: 1.0 mm | වට පරිමාණ කොටස්: 100 | කුඩාම මිනුම: 0.01 mm',
      surfacePresets: 'පෘෂ්ඨ සැකසුම්',
      planeGlass: 'තල වීදුරු තහඩුව (h = 0.00 mm)',
      convexLens: 'උත්තල කාච පෘෂ්ඨය (h = 1.34 mm)',
      concaveMirror: 'අවතල දර්පණය (h = 1.69 mm)',
      custom: 'අභිමත පෘෂ්ඨය',
      elevation: 'මැද ඉස්කුරුප්පුවේ එසවීම (h)',
      legDistance: 'බාහිර පාද අතර මධ්‍යන්‍ය දුර (a)',
      radiusOfCurvature: 'වක්‍රතා අරය (R)',
      planeInfinite: 'R = ∞ (තල පෘෂ්ඨය)',
      formulaTitle: 'වක්‍රතා අරය සමීකරණය',
      formula: 'R = (a² / 6h) + (h / 2)',
      verticalScale: 'අන්තරාල (මිලිමීටර්) පරිමාණ පාඨාංකය',
      circularScale: 'වෘත්තාකාර තැටි පරිමාණ පාඨාංකය',
      stepControls: 'මැද ඉස්කුරුප්පුව එසවීම/පහත් කිරීම',
      zoomNotice: 'මැද ඉස්කුරුප්පු තුඩ පෘෂ්ඨය ස්පර්ශ වන විට සමතුලිත ප්‍රතිරෝධය දැනේ.',
      derivationNote: 'පාදය a වූ සමපාද ත්‍රිකෝණ පාදිකාවක් මත ගෝලීය පියන ජ්‍යාමිතියෙන් a²/(6h) පදය ව්‍යුත්පන්න වේ.',
    },
  }[locale];

  const fullMm = Math.floor(clampedH);
  const circularDiv = Math.round(((clampedH - fullMm) / leastCount)) % circularDivisions;

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
            variant={selectedSurface === 'plane' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedSurface('plane');
              handleHeightChange(0.0);
            }}
          >
            {t.planeGlass}
          </Button>
          <Button
            size="sm"
            variant={selectedSurface === 'convex_lens' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedSurface('convex_lens');
              setLegSeparationMm(40.0);
              handleHeightChange(1.34);
            }}
          >
            {t.convexLens}
          </Button>
          <Button
            size="sm"
            variant={selectedSurface === 'concave_mirror' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => {
              setSelectedSurface('concave_mirror');
              setLegSeparationMm(45.0);
              handleHeightChange(-1.69);
            }}
          >
            {t.concaveMirror}
          </Button>
        </div>
      </div>

      {/* Spherometer SVG Visualizer */}
      <div className="relative w-full overflow-x-auto bg-[#F6FAFD] dark:bg-[#0B131E] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 select-none">
        <svg
          viewBox="0 0 540 260"
          className="w-full min-w-[500px] h-auto drop-shadow-xs"
        >
          <defs>
            <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="silverHead" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="curvedGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* SPHERICAL OR PLANE SURFACE UNDERNEATH */}
          {clampedH === 0 ? (
            /* Flat Plane Glass Plate */
            <rect
              x="80"
              y="210"
              width="380"
              height="20"
              rx="2"
              fill="url(#curvedGlass)"
              stroke="#0284C7"
              strokeWidth="1.5"
            />
          ) : clampedH > 0 ? (
            /* Convex Curvature Surface */
            <path
              d="M 80 230 Q 270 195 460 230 L 460 240 L 80 240 Z"
              fill="url(#curvedGlass)"
              stroke="#0284C7"
              strokeWidth="1.5"
            />
          ) : (
            /* Concave Curvature Surface (depressed center) */
            <path
              d="M 80 210 Q 270 232 460 210 L 460 240 L 80 240 Z"
              fill="url(#curvedGlass)"
              stroke="#0284C7"
              strokeWidth="1.5"
            />
          )}

          {/* TRIPOD FRAME (Brass 3-Legged Base) */}
          {/* Left outer leg */}
          <line x1="160" y1="170" x2="150" y2="210" stroke="#B45309" strokeWidth="6" strokeLinecap="round" />
          {/* Right outer leg */}
          <line x1="380" y1="170" x2="390" y2="210" stroke="#B45309" strokeWidth="6" strokeLinecap="round" />
          {/* Triangular Crossbar */}
          <path
            d="M 140 165 L 400 165 L 270 175 Z"
            fill="url(#brassGrad)"
            stroke="#92400E"
            strokeWidth="1.5"
          />

          {/* VERTICAL PITCH SCALE (Attached to Frame at x = 205) */}
          <rect
            x="200"
            y="70"
            width="22"
            height="100"
            fill="url(#silverHead)"
            stroke="#475569"
            strokeWidth="1"
          />
          {/* Vertical mm Scale Ticks (-5 to +10 mm) */}
          {Array.from({ length: 16 }).map((_, i) => {
            const y = 80 + i * 5.5;
            const isCm = i % 5 === 0;
            return (
              <g key={`pitch-tick-${i}`}>
                <line x1="214" y1={y} x2={isCm ? "222" : "218"} stroke="#0F172A" strokeWidth={isCm ? 1 : 0.6} />
                {isCm && (
                  <text x="210" y={y + 3} fontSize="6" textAnchor="end" fill="#0F172A" fontFamily="monospace">
                    {10 - i}
                  </text>
                )}
              </g>
            );
          })}

          {/* CENTRAL MOVABLE SCREW */}
          {/* Screw Rod passing down to surface */}
          <rect
            x="266"
            y={50 - clampedH * 5}
            width="8"
            height={155 + clampedH * 5 - (clampedH === 0 ? 0 : 8)}
            fill="#64748B"
            stroke="#334155"
            strokeWidth="1"
          />

          {/* CIRCULAR DISC HEAD (Moves up with h) */}
          <g transform={`translate(0, ${-clampedH * 5})`}>
            {/* Top Grip Knob */}
            <rect
              x="260"
              y="20"
              width="20"
              height="30"
              rx="3"
              fill="#94A3B8"
              stroke="#475569"
              strokeWidth="1"
            />
            {/* Large Circular Disc Plate (Diameter ~150px) */}
            <ellipse
              cx="270"
              cy="60"
              rx="65"
              ry="14"
              fill="url(#silverHead)"
              stroke="#334155"
              strokeWidth="1.5"
            />
            {/* Circular Scale Rim Markings */}
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((offset) => {
              const divNum = (circularDiv + offset + 100) % 100;
              const x = 270 + offset * 12;
              return (
                <g key={`circ-${offset}`}>
                  <line x1={x} y1="64" x2={x} y2="72" stroke="#0F172A" strokeWidth="0.8" />
                  {offset % 2 === 0 && (
                    <text x={x} y="62" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#0F172A" fontFamily="monospace">
                      {divNum}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Central Screw Tip Contact Pointer */}
          <circle
            cx="270"
            cy={210 - (clampedH === 0 ? 0 : 8)}
            r="3"
            fill="#EF4444"
          />
        </svg>

        {/* Floating Readout */}
        <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 dark:bg-[#111D2D]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono text-[#0F766E] dark:text-[#14B8A6] font-bold">
          Elevation h: {clampedH.toFixed(2)} mm
        </div>
      </div>

      {/* Measurement Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Elevation Screw Controls */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.stepControls}
            </span>
            <span className="text-xs font-mono text-[#0F766E] font-semibold">
              h = {clampedH.toFixed(2)} mm
            </span>
          </div>

          <input
            type="range"
            min="-4"
            max="6"
            step={leastCount}
            value={clampedH}
            onChange={(e) => handleHeightChange(parseFloat(e.target.value))}
            className="w-full accent-[#0F766E] cursor-pointer"
          />

          <div className="flex flex-wrap items-center gap-1.5">
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleHeightChange(clampedH - 0.1)}
            >
              -0.10 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleHeightChange(clampedH - leastCount)}
            >
              -0.01 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleHeightChange(clampedH + leastCount)}
            >
              +0.01 mm
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs h-7 px-2"
              onClick={() => handleHeightChange(clampedH + 0.1)}
            >
              +0.10 mm
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-7 px-2 ml-auto text-[#64748B]"
              onClick={() => handleHeightChange(0)}
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Flat Zero
            </Button>
          </div>
        </div>

        {/* Leg Separation Setting */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.legDistance}
            </span>
            <span className="text-xs font-mono text-[#0F766E] font-semibold">
              a = {legSeparationMm.toFixed(1)} mm
            </span>
          </div>

          <input
            type="range"
            min="25"
            max="55"
            step="0.5"
            value={legSeparationMm}
            onChange={(e) => handleLegChange(parseFloat(e.target.value))}
            className="w-full accent-[#0F766E] cursor-pointer"
          />

          <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
            <span>Triangular pricks:</span>
            <span className="font-mono font-semibold text-[#14243A] dark:text-[#F8FAFC]">
              a₁ ≈ {(legSeparationMm - 0.1).toFixed(1)}, a₂ ≈ {(legSeparationMm + 0.1).toFixed(1)}, a₃ ≈ {legSeparationMm.toFixed(1)} mm
            </span>
          </div>
        </div>
      </div>

      {/* Calculated Radius of Curvature Box */}
      {showInspector && (
        <div className="p-5 rounded-2xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#0F766E] dark:text-[#14B8A6]" />
              <span className="text-sm font-bold text-[#0F766E] dark:text-[#14B8A6]">
                {t.radiusOfCurvature}
              </span>
            </div>

            <div className="text-lg font-bold font-mono text-[#0F766E] dark:text-[#14B8A6]">
              {currentRadius !== null ? `R = ${currentRadius} mm` : t.planeInfinite}
            </div>
          </div>

          <div className="text-xs text-[#0F766E] dark:text-[#14B8A6] font-mono bg-[#FFFFFF]/70 dark:bg-[#111D2D]/70 p-3 rounded-xl border border-[#99F6E4]/50 space-y-1.5">
            <div className="flex justify-between">
              <span>Orientation:</span>
              <span className="font-sans font-semibold">{curvatureResult.description[locale]}</span>
            </div>
            <div className="flex justify-between border-t border-[#99F6E4]/40 pt-1">
              <span>Formula:</span>
              <span>R = (a² / 6|h|) + (|h| / 2)</span>
            </div>
            {currentRadius !== null && (
              <div className="flex justify-between text-[#042F2E] dark:text-[#CCFBF1] font-semibold pt-1 border-t border-[#99F6E4]/40">
                <span>Calculation:</span>
                <span>
                  ({legSeparationMm.toFixed(1)}² / (6 × {Math.abs(clampedH).toFixed(2)})) + ({Math.abs(clampedH).toFixed(2)} / 2) = {currentRadius} mm
                </span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-[#0F766E] dark:text-[#14B8A6] leading-relaxed">
            {t.derivationNote}
          </p>
        </div>
      )}
    </div>
  );
};

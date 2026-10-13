'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';

interface InteractiveVectorCanvasProps {
  locale?: Locale;
  showInspector?: boolean;
}

export const InteractiveVectorCanvas: React.FC<InteractiveVectorCanvasProps> = ({
  locale = 'en',
  showInspector = true,
}) => {
  const [mode, setMode] = useState<'resolution' | 'addition'>('resolution');
  const [additionVisual, setAdditionVisual] = useState<'parallelogram' | 'head-to-tail'>('parallelogram');

  // Vector A: Magnitude & Angle (degrees)
  const [magA, setMagA] = useState<number>(8.0);
  const [angleA, setAngleA] = useState<number>(36.87); // 3-4-5 default

  // Vector B: Magnitude & Angle (for addition mode)
  const [magB, setMagB] = useState<number>(6.0);
  const [angleB, setAngleB] = useState<number>(90.0);

  const radA = (angleA * Math.PI) / 180;
  const radB = (angleB * Math.PI) / 180;

  // Components of A
  const ax = Number((magA * Math.cos(radA)).toFixed(2));
  const ay = Number((magA * Math.sin(radA)).toFixed(2));

  // Components of B
  const bx = Number((magB * Math.cos(radB)).toFixed(2));
  const by = Number((magB * Math.sin(radB)).toFixed(2));

  // Resultant R = A + B
  const rx = Number((ax + bx).toFixed(2));
  const ry = Number((ay + by).toFixed(2));
  const magR = Number(Math.sqrt(rx * rx + ry * ry).toFixed(2));
  const angleR = Number(((Math.atan2(ry, rx) * 180) / Math.PI).toFixed(1));

  // Canvas scaling: center at (200, 160), scale 14 px per unit
  const cx = 180;
  const cy = 160;
  const scale = 14;

  const t = {
    en: {
      title: 'Interactive 2D Vector Workspace',
      subtitle: 'Geometric representation, rectangular component resolution, and vector addition',
      resolutionMode: 'Component Resolution (Ax, Ay)',
      additionMode: 'Vector Addition (A + B = R)',
      parallelogramLaw: 'Parallelogram Law',
      headToTailLaw: 'Triangle (Head-to-Tail) Law',
      vectorA: 'Vector A',
      vectorB: 'Vector B',
      resultantR: 'Resultant Vector R',
      magnitude: 'Magnitude',
      angle: 'Direction Angle θ',
      xComponent: 'x-component: Ax = A cos θ',
      yComponent: 'y-component: Ay = A sin θ',
      resultantFormula: 'R = √(Rx² + Ry²), tan θ_R = Ry / Rx',
      presets: 'Classical Scenarios',
      pythagoras345: '3-4-5 Right Triangle (4 units @ 0°, 3 units @ 90°)',
      equalOrthogonal: 'Equal Orthogonal (10 N @ 0°, 10 N @ 90°)',
      opposing: 'Opposing Collinear (12 N @ 0°, 5 N @ 180°)',
      componentSummary: 'Component Breakdown & Analytical Summation',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී 2D දෛශික වැඩබිම',
      subtitle: 'ජ්‍යාමිතික නිරූපණය, සෘජුකෝණී සංරචක විභේදනය සහ දෛශික එකතු කිරීම',
      resolutionMode: 'සංරචක විභේදනය (Ax, Ay)',
      additionMode: 'දෛශික එකතු කිරීම (A + B = R)',
      parallelogramLaw: 'සමාන්තරාස්‍ර නීතිය',
      headToTailLaw: 'ත්‍රිකෝණ (මුලට-අග) නීතිය',
      vectorA: 'දෛශිකය A',
      vectorB: 'දෛශිකය B',
      resultantR: 'සම්ප්‍රයුක්ත දෛශිකය R',
      magnitude: 'විශාලත්වය',
      angle: 'දිශා කෝණය θ',
      xComponent: 'x-සංරචකය: Ax = A cos θ',
      yComponent: 'y-සංරචකය: Ay = A sin θ',
      resultantFormula: 'R = √(Rx² + Ry²), tan θ_R = Ry / Rx',
      presets: 'සම්භාව්‍ය අවස්ථා',
      pythagoras345: '3-4-5 සෘජුකෝණී ත්‍රිකෝණය (ඒකක 4 @ 0°, ඒකක 3 @ 90°)',
      equalOrthogonal: 'සමාන ලම්බක බල (10 N @ 0°, 10 N @ 90°)',
      opposing: 'ප්‍රතිවිරුද්ධ ඒකරේඛීය (12 N @ 0°, 5 N @ 180°)',
      componentSummary: 'සංරචක විශ්ලේෂණය සහ වීජීය ඓක්‍යය',
    },
  }[locale];

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFE8EF] dark:border-[#1E334D] pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
            {t.title}
          </h3>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            variant={mode === 'resolution' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => setMode('resolution')}
          >
            {t.resolutionMode}
          </Button>
          <Button
            size="sm"
            variant={mode === 'addition' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => setMode('addition')}
          >
            {t.additionMode}
          </Button>
        </div>
      </div>

      {/* Classical Presets */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] mr-1">
          {t.presets}:
        </span>
        <Button
          size="sm"
          variant="outline"
          className="text-xs h-7 rounded-lg"
          onClick={() => {
            setMode('addition');
            setMagA(8);
            setAngleA(0);
            setMagB(6);
            setAngleB(90);
          }}
        >
          {t.pythagoras345}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-xs h-7 rounded-lg"
          onClick={() => {
            setMode('addition');
            setMagA(10);
            setAngleA(0);
            setMagB(10);
            setAngleB(90);
          }}
        >
          {t.equalOrthogonal}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-xs h-7 rounded-lg"
          onClick={() => {
            setMode('addition');
            setMagA(12);
            setAngleA(0);
            setMagB(5);
            setAngleB(180);
          }}
        >
          {t.opposing}
        </Button>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full overflow-x-auto bg-[#F6FAFD] dark:bg-[#0B131E] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 select-none">
        <svg
          viewBox="0 0 460 300"
          className="w-full min-w-[420px] h-auto drop-shadow-xs"
        >
          <defs>
            <marker id="arrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0F766E" />
            </marker>
            <marker id="arrowB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#3B82F6" />
            </marker>
            <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
            </marker>
            <marker id="arrowProj" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
            </marker>
          </defs>

          {/* Coordinate Grid Lines */}
          {Array.from({ length: 19 }).map((_, i) => {
            const x = 30 + i * 20;
            return <line key={`grid-x-${i}`} x1={x} y1="20" x2={x} y2="280" stroke="#E2E8F0" strokeWidth="0.7" />;
          })}
          {Array.from({ length: 14 }).map((_, i) => {
            const y = 20 + i * 20;
            return <line key={`grid-y-${i}`} x1="30" y1={y} x2="430" y2={y} stroke="#E2E8F0" strokeWidth="0.7" />;
          })}

          {/* Axes */}
          {/* X Axis */}
          <line x1="30" y1={cy} x2="430" y2={cy} stroke="#64748B" strokeWidth="1.5" />
          <text x="420" y={cy - 6} fontSize="10" fontWeight="bold" fill="#64748B">+x</text>
          {/* Y Axis */}
          <line x1={cx} y1="20" x2={cx} y2="280" stroke="#64748B" strokeWidth="1.5" />
          <text x={cx + 6} y="32" fontSize="10" fontWeight="bold" fill="#64748B">+y</text>

          {/* Origin O */}
          <circle cx={cx} cy={cy} r="3" fill="#14243A" />
          <text x={cx - 14} y={cy + 14} fontSize="9" fontWeight="bold" fill="#64748B">O</text>

          {/* MODE: RESOLUTION */}
          {mode === 'resolution' && (
            <g>
              {/* Projection dashed lines */}
              <line
                x1={cx + ax * scale}
                y1={cy - ay * scale}
                x2={cx + ax * scale}
                y2={cy}
                stroke="#0F766E"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <line
                x1={cx + ax * scale}
                y1={cy - ay * scale}
                x2={cx}
                y2={cy - ay * scale}
                stroke="#0F766E"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />

              {/* Component Ax on x-axis */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + ax * scale}
                y2={cy}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (ax * scale) / 2}
                y={cy + 16}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
                textAnchor="middle"
              >
                Ax = {ax}
              </text>

              {/* Component Ay on y-axis */}
              <line
                x1={cx}
                y1={cy}
                x2={cx}
                y2={cy - ay * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx - 18}
                y={cy - (ay * scale) / 2}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
                textAnchor="end"
              >
                Ay = {ay}
              </text>

              {/* Vector A */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + ax * scale}
                y2={cy - ay * scale}
                stroke="#0F766E"
                strokeWidth="3.5"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + ax * scale + 8}
                y={cy - ay * scale - 4}
                fontSize="11"
                fontWeight="bold"
                fill="#0F766E"
              >
                A ({magA})
              </text>

              {/* Angle arc */}
              <path
                d={`M ${cx + 25} ${cy} A 25 25 0 0 0 ${cx + 25 * Math.cos(radA)} ${cy - 25 * Math.sin(radA)}`}
                fill="none"
                stroke="#B45309"
                strokeWidth="1.5"
              />
              <text
                x={cx + 32}
                y={cy - 8}
                fontSize="9"
                fontWeight="bold"
                fill="#B45309"
              >
                {angleA}°
              </text>
            </g>
          )}

          {/* MODE: ADDITION */}
          {mode === 'addition' && (
            <g>
              {/* Vector A */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + ax * scale}
                y2={cy - ay * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (ax * scale) / 2 - 8}
                y={cy - (ay * scale) / 2 - 6}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
              >
                A
              </text>

              {/* Vector B in Parallelogram vs Head-to-Tail */}
              {additionVisual === 'parallelogram' ? (
                <>
                  {/* B from origin */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx + bx * scale}
                    y2={cy - by * scale}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    markerEnd="url(#arrowB)"
                  />
                  <text
                    x={cx + (bx * scale) / 2 - 8}
                    y={cy - (by * scale) / 2 - 6}
                    fontSize="10"
                    fontWeight="bold"
                    fill="#3B82F6"
                  >
                    B
                  </text>

                  {/* Parallelogram ghost dashed sides */}
                  <line
                    x1={cx + ax * scale}
                    y1={cy - ay * scale}
                    x2={cx + rx * scale}
                    y2={cy - ry * scale}
                    stroke="#3B82F6"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1={cx + bx * scale}
                    y1={cy - by * scale}
                    x2={cx + rx * scale}
                    y2={cy - ry * scale}
                    stroke="#0F766E"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                </>
              ) : (
                /* Head-to-Tail (Triangle Law) */
                <>
                  <line
                    x1={cx + ax * scale}
                    y1={cy - ay * scale}
                    x2={cx + rx * scale}
                    y2={cy - ry * scale}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    markerEnd="url(#arrowB)"
                  />
                  <text
                    x={cx + ax * scale + (bx * scale) / 2 + 6}
                    y={cy - ay * scale - (by * scale) / 2}
                    fontSize="10"
                    fontWeight="bold"
                    fill="#3B82F6"
                  >
                    B
                  </text>
                </>
              )}

              {/* Resultant Vector R */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + rx * scale}
                y2={cy - ry * scale}
                stroke="#DC2626"
                strokeWidth="3.5"
                markerEnd="url(#arrowR)"
              />
              <text
                x={cx + rx * scale + 8}
                y={cy - ry * scale - 4}
                fontSize="11"
                fontWeight="bold"
                fill="#DC2626"
              >
                R ({magR})
              </text>
            </g>
          )}
        </svg>

        {/* Live Vector Magnitude / Angle Badge */}
        <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 dark:bg-[#111D2D]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono font-bold">
          {mode === 'resolution' ? (
            <span className="text-[#0F766E] dark:text-[#14B8A6]">
              A = {magA} @ {angleA}° | Ax = {ax}, Ay = {ay}
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-400">
              R = {magR} @ {angleR}° (Rx = {rx}, Ry = {ry})
            </span>
          )}
        </div>
      </div>

      {/* Sliders & Numerical Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Vector A Sliders */}
        <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.vectorA}: |A| = {magA}, θ = {angleA}°
            </span>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-[#64748B]">
              <span>Magnitude:</span>
              <span className="font-mono">{magA}</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.5"
              value={magA}
              onChange={(e) => setMagA(parseFloat(e.target.value))}
              className="w-full accent-[#0F766E] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-[#64748B]">
              <span>Angle θ:</span>
              <span className="font-mono">{angleA}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="180"
              step="1"
              value={angleA}
              onChange={(e) => setAngleA(parseFloat(e.target.value))}
              className="w-full accent-[#0F766E] cursor-pointer"
            />
          </div>
        </div>

        {/* Vector B Sliders (if Addition) or Ax/Ay display (if Resolution) */}
        {mode === 'addition' ? (
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#3B82F6]">
                {t.vectorB}: |B| = {magB}, θ = {angleB}°
              </span>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant={additionVisual === 'parallelogram' ? 'default' : 'outline'}
                  className="text-[10px] h-6 px-1.5"
                  onClick={() => setAdditionVisual('parallelogram')}
                >
                  {t.parallelogramLaw}
                </Button>
                <Button
                  size="sm"
                  variant={additionVisual === 'head-to-tail' ? 'default' : 'outline'}
                  className="text-[10px] h-6 px-1.5"
                  onClick={() => setAdditionVisual('head-to-tail')}
                >
                  {t.headToTailLaw}
                </Button>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-[#64748B]">
                <span>Magnitude:</span>
                <span className="font-mono">{magB}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={magB}
                onChange={(e) => setMagB(parseFloat(e.target.value))}
                className="w-full accent-[#3B82F6] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-[#64748B]">
                <span>Angle θ:</span>
                <span className="font-mono">{angleB}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                step="1"
                value={angleB}
                onChange={(e) => setAngleB(parseFloat(e.target.value))}
                className="w-full accent-[#3B82F6] cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-2">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6] block">
              Cartesian Component Equations:
            </span>
            <div className="space-y-1.5 text-xs font-mono text-[#0F766E] dark:text-[#14B8A6]">
              <div className="flex justify-between bg-[#FFFFFF]/70 dark:bg-[#111D2D]/70 p-2 rounded-lg">
                <span>{t.xComponent}:</span>
                <span className="font-bold">{magA} × cos({angleA}°) = {ax}</span>
              </div>
              <div className="flex justify-between bg-[#FFFFFF]/70 dark:bg-[#111D2D]/70 p-2 rounded-lg">
                <span>{t.yComponent}:</span>
                <span className="font-bold">{magA} × sin({angleA}°) = {ay}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Analytical Resultant Box (in Addition mode) */}
      {mode === 'addition' && showInspector && (
        <div className="p-4 rounded-xl bg-[#FEF2F2] dark:bg-[#450A0A] border border-[#FECACA] dark:border-[#7F1D1D] text-xs font-mono space-y-2">
          <div className="flex justify-between font-bold text-red-700 dark:text-red-300">
            <span>{t.resultantR}:</span>
            <span>R = {magR} @ {angleR}°</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-red-600 dark:text-red-400">
            <div>Rx = Ax + Bx = {ax} + {bx} = {rx}</div>
            <div>Ry = Ay + By = {ay} + {by} = {ry}</div>
          </div>
        </div>
      )}
    </div>
  );
};

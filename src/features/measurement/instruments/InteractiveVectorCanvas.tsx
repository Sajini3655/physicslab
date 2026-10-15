'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { resolveVector, addVectors, subtractVectors } from '../physics/calculations';

interface InteractiveVectorCanvasProps {
  locale?: Locale;
  showInspector?: boolean;
}

export const InteractiveVectorCanvas: React.FC<InteractiveVectorCanvasProps> = ({
  locale = 'en',
  showInspector = true,
}) => {
  const [mode, setMode] = useState<'resolution' | 'addition' | 'subtraction' | 'polygon'>('resolution');
  const [additionVisual, setAdditionVisual] = useState<'parallelogram' | 'head-to-tail'>('parallelogram');

  // Vector A: Magnitude & Angle (degrees)
  const [magA, setMagA] = useState<number>(8.0);
  const [angleA, setAngleA] = useState<number>(36.87); // 3-4-5 default

  // Vector B: Magnitude & Angle
  const [magB, setMagB] = useState<number>(6.0);
  const [angleB, setAngleB] = useState<number>(90.0);

  // Vector C: Magnitude & Angle (for polygon mode)
  const [magC, setMagC] = useState<number>(7.0);
  const [angleC, setAngleC] = useState<number>(210.0);

  // Pure physics calculations
  const compA = resolveVector(magA, angleA);
  const compB = resolveVector(magB, angleB);
  const compC = resolveVector(magC, angleC);

  const radA = (angleA * Math.PI) / 180;

  const additionResult = addVectors([
    { magnitude: magA, angleDegrees: angleA },
    { magnitude: magB, angleDegrees: angleB },
  ]);

  const subtractionResult = subtractVectors(
    { magnitude: magA, angleDegrees: angleA },
    { magnitude: magB, angleDegrees: angleB }
  );

  const polygonResult = addVectors([
    { magnitude: magA, angleDegrees: angleA },
    { magnitude: magB, angleDegrees: angleB },
    { magnitude: magC, angleDegrees: angleC },
  ]);

  // Canvas scaling: center at (200, 160), scale 12 px per unit
  const cx = 200;
  const cy = 160;
  const scale = 12;

  const t = {
    en: {
      title: 'Interactive 2D Vector Workspace',
      subtitle: 'Geometric representation, rectangular component resolution, addition, subtraction & polygon law',
      resolutionMode: 'Resolution (Ax, Ay)',
      additionMode: 'Addition (A + B)',
      subtractionMode: 'Subtraction (A - B)',
      polygonMode: 'Polygon Law (3 Vectors)',
      parallelogramLaw: 'Parallelogram Law',
      headToTailLaw: 'Triangle (Head-to-Tail) Law',
      vectorA: 'Vector A',
      vectorB: 'Vector B',
      vectorC: 'Vector C',
      negativeB: '-B (Opposite of B)',
      resultantR: 'Resultant Vector R',
      differenceD: 'Difference Vector D (A - B)',
      polygonR: 'Polygon Resultant (A + B + C)',
      magnitude: 'Magnitude',
      angle: 'Direction Angle θ',
      xComponent: 'x-component: Ax = A cos θ',
      yComponent: 'y-component: Ay = A sin θ',
      subtractionNote: 'Vector Subtraction: D = A - B = A + (-B). Notice the negative vector is flipped 180° and added head-to-tail.',
      polygonNote: 'Polygon Law: Head-to-tail addition of coplanar vectors with resultant closing the polygon from first tail to final head.',
      presets: 'Classical Scenarios',
      pythagoras345: '3-4-5 Triangle (4 @ 0°, 3 @ 90°)',
      equalOrthogonal: 'Equal Orthogonal (10 @ 0°, 10 @ 90°)',
      opposing: 'Opposing Collinear (12 @ 0°, 5 @ 180°)',
      subtractionPreset: 'Relative Vector (10 @ 0° - 8 @ 60°)',
      equilibriumTriangle: '3-Vector Equilibrium (10 @ 0°, 10 @ 120°, 10 @ 240°)',
      componentSummary: 'Component Breakdown & Analytical Summation',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී 2D දෛශික වැඩබිම',
      subtitle: 'ජ්‍යාමිතික නිරූපණය, සෘජුකෝණී සංරචක විභේදනය, එකතු කිරීම, අඩු කිරීම සහ බහුඅස්‍ර නීතිය',
      resolutionMode: 'සංරචක විභේදනය (Ax, Ay)',
      additionMode: 'එකතු කිරීම (A + B)',
      subtractionMode: 'අඩු කිරීම (A - B)',
      polygonMode: 'බහුඅස්‍ර නීතිය (දෛශික 3)',
      parallelogramLaw: 'සමාන්තරාස්‍ර නීතිය',
      headToTailLaw: 'ත්‍රිකෝණ (මුලට-අග) නීතිය',
      vectorA: 'දෛශිකය A',
      vectorB: 'දෛශිකය B',
      vectorC: 'දෛශිකය C',
      negativeB: '-B (B හි ප්‍රතිවිරුද්ධය)',
      resultantR: 'සම්ප්‍රයුක්ත දෛශිකය R',
      differenceD: 'අන්තර දෛශිකය D (A - B)',
      polygonR: 'බහුඅස්‍ර සම්ප්‍රයුක්තය (A + B + C)',
      magnitude: 'විශාලත්වය',
      angle: 'දිශා කෝණය θ',
      xComponent: 'x-සංරචකය: Ax = A cos θ',
      yComponent: 'y-සංරචකය: Ay = A sin θ',
      subtractionNote: 'දෛශික අඩු කිරීම: D = A - B = A + (-B). සෘණ දෛශිකය 180° න් හැරවී මුලට-අග ලෙස එකතු වේ.',
      polygonNote: 'බහුඅස්‍ර නීතිය: ඒකතල දෛශික මුලට-අග පිළිවෙළින් තබා පළමු මුල සිට අවසන් අග දක්වා බහුඅස්‍රය පියවීමෙන් සම්ප්‍රයුක්තය ලැබේ.',
      presets: 'සම්භාව්‍ය අවස්ථා',
      pythagoras345: '3-4-5 ත්‍රිකෝණය (4 @ 0°, 3 @ 90°)',
      equalOrthogonal: 'සමාන ලම්බක බල (10 @ 0°, 10 @ 90°)',
      opposing: 'ප්‍රතිවිරුද්ධ ඒකරේඛීය (12 @ 0°, 5 @ 180°)',
      subtractionPreset: 'සාපේක්ෂ දෛශිකය (10 @ 0° - 8 @ 60°)',
      equilibriumTriangle: '3-දෛශික තුල්‍යතාව (10 @ 0°, 10 @ 120°, 10 @ 240°)',
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

        <div className="flex flex-wrap items-center gap-1.5">
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
          <Button
            size="sm"
            variant={mode === 'subtraction' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => setMode('subtraction')}
          >
            {t.subtractionMode}
          </Button>
          <Button
            size="sm"
            variant={mode === 'polygon' ? 'default' : 'outline'}
            className="text-xs h-7 rounded-lg"
            onClick={() => setMode('polygon')}
          >
            {t.polygonMode}
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
        <Button
          size="sm"
          variant="outline"
          className="text-xs h-7 rounded-lg"
          onClick={() => {
            setMode('subtraction');
            setMagA(10);
            setAngleA(0);
            setMagB(8);
            setAngleB(60);
          }}
        >
          {t.subtractionPreset}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="text-xs h-7 rounded-lg"
          onClick={() => {
            setMode('polygon');
            setMagA(10);
            setAngleA(0);
            setMagB(10);
            setAngleB(120);
            setMagC(10);
            setAngleC(240);
          }}
        >
          {t.equilibriumTriangle}
        </Button>
      </div>

      {/* Mode Helper Banner */}
      {(mode === 'subtraction' || mode === 'polygon') && (
        <div className="p-3 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] text-xs text-[#0F766E] dark:text-[#14B8A6]">
          {mode === 'subtraction' ? t.subtractionNote : t.polygonNote}
        </div>
      )}

      {/* SVG Canvas */}
      <div className="relative w-full overflow-x-auto bg-[#F6FAFD] dark:bg-[#0B131E] rounded-xl border border-[#DFE8EF] dark:border-[#1E334D] p-3 select-none">
        <svg
          viewBox="0 0 480 320"
          className="w-full min-w-[440px] h-auto drop-shadow-xs"
        >
          <defs>
            <marker id="arrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0F766E" />
            </marker>
            <marker id="arrowB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#3B82F6" />
            </marker>
            <marker id="arrowC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#8B5CF6" />
            </marker>
            <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
            </marker>
            <marker id="arrowGhost" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
            </marker>
          </defs>

          {/* Coordinate Grid Lines */}
          {Array.from({ length: 22 }).map((_, i) => {
            const x = 20 + i * 20;
            return <line key={`grid-x-${i}`} x1={x} y1="20" x2={x} y2="300" stroke="#E2E8F0" strokeWidth="0.7" />;
          })}
          {Array.from({ length: 15 }).map((_, i) => {
            const y = 20 + i * 20;
            return <line key={`grid-y-${i}`} x1="20" y1={y} x2={460} y2={y} stroke="#E2E8F0" strokeWidth="0.7" />;
          })}

          {/* Axes */}
          {/* X Axis */}
          <line x1="20" y1={cy} x2="460" y2={cy} stroke="#64748B" strokeWidth="1.5" />
          <text x="450" y={cy - 6} fontSize="10" fontWeight="bold" fill="#64748B">+x</text>
          {/* Y Axis */}
          <line x1={cx} y1="20" x2={cx} y2="300" stroke="#64748B" strokeWidth="1.5" />
          <text x={cx + 6} y="32" fontSize="10" fontWeight="bold" fill="#64748B">+y</text>

          {/* Origin O */}
          <circle cx={cx} cy={cy} r="3" fill="#14243A" />
          <text x={cx - 14} y={cy + 14} fontSize="9" fontWeight="bold" fill="#64748B">O</text>

          {/* MODE: RESOLUTION */}
          {mode === 'resolution' && (
            <g>
              {/* Projection dashed lines */}
              <line
                x1={cx + compA.rx * scale}
                y1={cy - compA.ry * scale}
                x2={cx + compA.rx * scale}
                y2={cy}
                stroke="#0F766E"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <line
                x1={cx + compA.rx * scale}
                y1={cy - compA.ry * scale}
                x2={cx}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />

              {/* Component Ax on x-axis */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + compA.rx * scale}
                y2={cy}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (compA.rx * scale) / 2}
                y={cy + 16}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
                textAnchor="middle"
              >
                Ax = {compA.rx}
              </text>

              {/* Component Ay on y-axis */}
              <line
                x1={cx}
                y1={cy}
                x2={cx}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx - 18}
                y={cy - (compA.ry * scale) / 2}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
                textAnchor="end"
              >
                Ay = {compA.ry}
              </text>

              {/* Vector A */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + compA.rx * scale}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="3.5"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + compA.rx * scale + 8}
                y={cy - compA.ry * scale - 4}
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
                x2={cx + compA.rx * scale}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (compA.rx * scale) / 2 - 8}
                y={cy - (compA.ry * scale) / 2 - 6}
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
                    x2={cx + compB.rx * scale}
                    y2={cy - compB.ry * scale}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    markerEnd="url(#arrowB)"
                  />
                  <text
                    x={cx + (compB.rx * scale) / 2 - 8}
                    y={cy - (compB.ry * scale) / 2 - 6}
                    fontSize="10"
                    fontWeight="bold"
                    fill="#3B82F6"
                  >
                    B
                  </text>

                  {/* Parallelogram ghost dashed sides */}
                  <line
                    x1={cx + compA.rx * scale}
                    y1={cy - compA.ry * scale}
                    x2={cx + additionResult.rx * scale}
                    y2={cy - additionResult.ry * scale}
                    stroke="#3B82F6"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1={cx + compB.rx * scale}
                    y1={cy - compB.ry * scale}
                    x2={cx + additionResult.rx * scale}
                    y2={cy - additionResult.ry * scale}
                    stroke="#0F766E"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                </>
              ) : (
                /* Head-to-Tail (Triangle Law) */
                <>
                  <line
                    x1={cx + compA.rx * scale}
                    y1={cy - compA.ry * scale}
                    x2={cx + additionResult.rx * scale}
                    y2={cy - additionResult.ry * scale}
                    stroke="#3B82F6"
                    strokeWidth="3"
                    markerEnd="url(#arrowB)"
                  />
                  <text
                    x={cx + compA.rx * scale + (compB.rx * scale) / 2 + 6}
                    y={cy - compA.ry * scale - (compB.ry * scale) / 2}
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
                x2={cx + additionResult.rx * scale}
                y2={cy - additionResult.ry * scale}
                stroke="#DC2626"
                strokeWidth="3.5"
                markerEnd="url(#arrowR)"
              />
              <text
                x={cx + additionResult.rx * scale + 8}
                y={cy - additionResult.ry * scale - 4}
                fontSize="11"
                fontWeight="bold"
                fill="#DC2626"
              >
                R ({additionResult.resultantMagnitude})
              </text>
            </g>
          )}

          {/* MODE: SUBTRACTION (A - B = A + (-B)) */}
          {mode === 'subtraction' && (
            <g>
              {/* Vector A */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + compA.rx * scale}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (compA.rx * scale) / 2 - 8}
                y={cy - (compA.ry * scale) / 2 - 6}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
              >
                A
              </text>

              {/* Original Vector B from origin (ghost reference) */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + compB.rx * scale}
                y2={cy - compB.ry * scale}
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                markerEnd="url(#arrowGhost)"
              />
              <text
                x={cx + compB.rx * scale + 6}
                y={cy - compB.ry * scale}
                fontSize="9"
                fontWeight="bold"
                fill="#94A3B8"
              >
                +B (ref)
              </text>

              {/* Negative Vector -B added head-to-tail from head of A */}
              <line
                x1={cx + compA.rx * scale}
                y1={cy - compA.ry * scale}
                x2={cx + subtractionResult.rx * scale}
                y2={cy - subtractionResult.ry * scale}
                stroke="#3B82F6"
                strokeWidth="3"
                markerEnd="url(#arrowB)"
              />
              <text
                x={cx + compA.rx * scale - (compB.rx * scale) / 2 + 8}
                y={cy - compA.ry * scale + (compB.ry * scale) / 2}
                fontSize="10"
                fontWeight="bold"
                fill="#3B82F6"
              >
                -B
              </text>

              {/* Difference Vector D = A - B */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + subtractionResult.rx * scale}
                y2={cy - subtractionResult.ry * scale}
                stroke="#DC2626"
                strokeWidth="3.5"
                markerEnd="url(#arrowR)"
              />
              <text
                x={cx + subtractionResult.rx * scale + 8}
                y={cy - subtractionResult.ry * scale - 4}
                fontSize="11"
                fontWeight="bold"
                fill="#DC2626"
              >
                D ({subtractionResult.resultantMagnitude})
              </text>
            </g>
          )}

          {/* MODE: POLYGON LAW (3 VECTORS A + B + C) */}
          {mode === 'polygon' && (
            <g>
              {/* Vector A (from origin) */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + compA.rx * scale}
                y2={cy - compA.ry * scale}
                stroke="#0F766E"
                strokeWidth="3"
                markerEnd="url(#arrowA)"
              />
              <text
                x={cx + (compA.rx * scale) / 2 - 8}
                y={cy - (compA.ry * scale) / 2 - 6}
                fontSize="10"
                fontWeight="bold"
                fill="#0F766E"
              >
                A
              </text>

              {/* Vector B (from head of A) */}
              <line
                x1={cx + compA.rx * scale}
                y1={cy - compA.ry * scale}
                x2={cx + (compA.rx + compB.rx) * scale}
                y2={cy - (compA.ry + compB.ry) * scale}
                stroke="#3B82F6"
                strokeWidth="3"
                markerEnd="url(#arrowB)"
              />
              <text
                x={cx + compA.rx * scale + (compB.rx * scale) / 2 + 8}
                y={cy - compA.ry * scale - (compB.ry * scale) / 2}
                fontSize="10"
                fontWeight="bold"
                fill="#3B82F6"
              >
                B
              </text>

              {/* Vector C (from head of B) */}
              <line
                x1={cx + (compA.rx + compB.rx) * scale}
                y1={cy - (compA.ry + compB.ry) * scale}
                x2={cx + polygonResult.rx * scale}
                y2={cy - polygonResult.ry * scale}
                stroke="#8B5CF6"
                strokeWidth="3"
                markerEnd="url(#arrowC)"
              />
              <text
                x={cx + (compA.rx + compB.rx) * scale + (compC.rx * scale) / 2 + 8}
                y={cy - (compA.ry + compB.ry) * scale - (compC.ry * scale) / 2}
                fontSize="10"
                fontWeight="bold"
                fill="#8B5CF6"
              >
                C
              </text>

              {/* Resultant Vector R closing the polygon */}
              <line
                x1={cx}
                y1={cy}
                x2={cx + polygonResult.rx * scale}
                y2={cy - polygonResult.ry * scale}
                stroke="#DC2626"
                strokeWidth="3.5"
                markerEnd="url(#arrowR)"
              />
              <text
                x={cx + polygonResult.rx * scale + 8}
                y={cy - polygonResult.ry * scale - 4}
                fontSize="11"
                fontWeight="bold"
                fill="#DC2626"
              >
                {polygonResult.resultantMagnitude < 0.2 ? 'Equilibrium (R ≈ 0)' : `R (${polygonResult.resultantMagnitude})`}
              </text>
            </g>
          )}
        </svg>

        {/* Live Vector Magnitude / Angle Badge */}
        <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 dark:bg-[#111D2D]/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D] text-xs font-mono font-bold">
          {mode === 'resolution' && (
            <span className="text-[#0F766E] dark:text-[#14B8A6]">
              A = {magA} @ {angleA}° | Ax = {compA.rx}, Ay = {compA.ry}
            </span>
          )}
          {mode === 'addition' && (
            <span className="text-red-600 dark:text-red-400">
              R = {additionResult.resultantMagnitude} @ {additionResult.resultantAngleDegrees}° (Rx = {additionResult.rx}, Ry = {additionResult.ry})
            </span>
          )}
          {mode === 'subtraction' && (
            <span className="text-red-600 dark:text-red-400">
              D = {subtractionResult.resultantMagnitude} @ {subtractionResult.resultantAngleDegrees}° (Dx = {subtractionResult.rx}, Dy = {subtractionResult.ry})
            </span>
          )}
          {mode === 'polygon' && (
            <span className="text-red-600 dark:text-red-400">
              R = {polygonResult.resultantMagnitude} @ {polygonResult.resultantAngleDegrees}° (Rx = {polygonResult.rx}, Ry = {polygonResult.ry})
            </span>
          )}
        </div>
      </div>

      {/* Sliders & Numerical Inputs */}
      <div className={`grid grid-cols-1 ${mode === 'polygon' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
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
              max="360"
              step="1"
              value={angleA}
              onChange={(e) => setAngleA(parseFloat(e.target.value))}
              className="w-full accent-[#0F766E] cursor-pointer"
            />
          </div>
        </div>

        {/* Vector B Sliders (if Addition / Subtraction / Polygon) or Ax/Ay display (if Resolution) */}
        {mode !== 'resolution' ? (
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#3B82F6]">
                {t.vectorB}: |B| = {magB}, θ = {angleB}°
              </span>
              {mode === 'addition' && (
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
              )}
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
                max="360"
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
                <span className="font-bold">{magA} × cos({angleA}°) = {compA.rx}</span>
              </div>
              <div className="flex justify-between bg-[#FFFFFF]/70 dark:bg-[#111D2D]/70 p-2 rounded-lg">
                <span>{t.yComponent}:</span>
                <span className="font-bold">{magA} × sin({angleA}°) = {compA.ry}</span>
              </div>
            </div>
          </div>
        )}

        {/* Vector C Sliders (if Polygon mode) */}
        {mode === 'polygon' && (
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8B5CF6]">
                {t.vectorC}: |C| = {magC}, θ = {angleC}°
              </span>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-[#64748B]">
                <span>Magnitude:</span>
                <span className="font-mono">{magC}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={magC}
                onChange={(e) => setMagC(parseFloat(e.target.value))}
                className="w-full accent-[#8B5CF6] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-[#64748B]">
                <span>Angle θ:</span>
                <span className="font-mono">{angleC}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={angleC}
                onChange={(e) => setAngleC(parseFloat(e.target.value))}
                className="w-full accent-[#8B5CF6] cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Analytical Resultant Box (in Addition / Subtraction / Polygon mode) */}
      {mode !== 'resolution' && showInspector && (
        <div className="p-4 rounded-xl bg-[#FEF2F2] dark:bg-[#450A0A] border border-[#FECACA] dark:border-[#7F1D1D] text-xs font-mono space-y-2">
          {mode === 'addition' && (
            <>
              <div className="flex justify-between font-bold text-red-700 dark:text-red-300">
                <span>{t.resultantR}:</span>
                <span>R = {additionResult.resultantMagnitude} @ {additionResult.resultantAngleDegrees}°</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-red-600 dark:text-red-400">
                <div>Rx = Ax + Bx = {compA.rx} + {compB.rx} = {additionResult.rx}</div>
                <div>Ry = Ay + By = {compA.ry} + {compB.ry} = {additionResult.ry}</div>
              </div>
            </>
          )}

          {mode === 'subtraction' && (
            <>
              <div className="flex justify-between font-bold text-red-700 dark:text-red-300">
                <span>{t.differenceD}:</span>
                <span>D = {subtractionResult.resultantMagnitude} @ {subtractionResult.resultantAngleDegrees}°</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-red-600 dark:text-red-400">
                <div>Dx = Ax - Bx = {compA.rx} - {compB.rx} = {subtractionResult.rx}</div>
                <div>Dy = Ay - By = {compA.ry} - {compB.ry} = {subtractionResult.ry}</div>
              </div>
            </>
          )}

          {mode === 'polygon' && (
            <>
              <div className="flex justify-between font-bold text-red-700 dark:text-red-300">
                <span>{t.polygonR}:</span>
                <span>R = {polygonResult.resultantMagnitude} @ {polygonResult.resultantAngleDegrees}°</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-red-600 dark:text-red-400">
                <div>Rx = Ax + Bx + Cx = {compA.rx} + {compB.rx} + {compC.rx} = {polygonResult.rx}</div>
                <div>Ry = Ay + By + Cy = {compA.ry} + {compB.ry} + {compC.ry} = {polygonResult.ry}</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

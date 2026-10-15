'use client';

import React, { useState } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { RotateCcw, Target } from 'lucide-react';
import { calculateTravellingMicroscopeDimensions } from '../physics/calculations';

interface TravellingMicroscopeProps {
  locale?: Locale;
  initialPosMm?: number;
  showInspector?: boolean;
  onReadingsRecorded?: (data: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    dInt: number;
    dExt: number;
    rInt: number;
    rExt: number;
  }) => void;
}

export const TravellingMicroscope: React.FC<TravellingMicroscopeProps> = ({
  locale = 'en',
  initialPosMm = 32.50,
  showInspector = true,
  onReadingsRecorded,
}) => {
  // Tube geometry: center at 40.00 mm
  // Inner radius = 3.20 mm -> edges at 36.80 mm and 43.20 mm
  // Outer radius = 6.40 mm -> edges at 33.60 mm and 46.40 mm
  const centerMm = 40.00;
  const targetX1 = 33.60; // Left outer
  const targetX2 = 36.80; // Left inner
  const targetX3 = 43.20; // Right inner
  const targetX4 = 46.40; // Right outer

  const [currentPosMm, setCurrentPosMm] = useState<number>(initialPosMm);
  const [recordedX, setRecordedX] = useState<{
    x1?: number;
    x2?: number;
    x3?: number;
    x4?: number;
  }>({});

  const pitchMm = 0.5; // Main scale divisions = 0.5 mm
  const vernierDivisions = 50;
  const leastCount = pitchMm / vernierDivisions; // 0.01 mm

  const roundToLc = (v: number) => Math.round(v / leastCount) * leastCount;
  const clampedPos = Math.max(20, Math.min(60, roundToLc(currentPosMm)));

  const handlePosChange = (newPos: number) => {
    setCurrentPosMm(roundToLc(Math.max(20, Math.min(60, newPos))));
  };

  const recordPosition = (point: 'x1' | 'x2' | 'x3' | 'x4') => {
    const updated = { ...recordedX, [point]: clampedPos };
    setRecordedX(updated);

    if (updated.x1 !== undefined && updated.x2 !== undefined && updated.x3 !== undefined && updated.x4 !== undefined) {
      const dims = calculateTravellingMicroscopeDimensions(updated.x1, updated.x2, updated.x3, updated.x4);
      onReadingsRecorded?.({
        x1: updated.x1,
        x2: updated.x2,
        x3: updated.x3,
        x4: updated.x4,
        dInt: dims.internalDiameter,
        dExt: dims.externalDiameter,
        rInt: dims.internalRadius,
        rExt: dims.externalRadius,
      });
    }
  };

  // Main scale vs vernier scale breakdown
  const mainScaleInterval = 0.5;
  const mainScaleUnits = Math.floor(clampedPos / mainScaleInterval);
  const msr = Number((mainScaleUnits * mainScaleInterval).toFixed(1));
  const vernierDiv = Math.round((clampedPos - msr) / leastCount) % vernierDivisions;

  const t = {
    en: {
      title: 'Travelling Microscope Simulator',
      subtitle: 'Main Scale: 0.5 mm divisions | 50 Vernier Divisions | Least Count: 0.01 mm',
      reticleView: 'Eyepiece Crosswire View (Magnified 20×)',
      horizontalVernier: 'Horizontal Carriage Vernier Scale',
      aimInstruction: 'Rotate fine screw to align vertical crosswire with each tube boundary, then record reading.',
      x1Label: 'x₁: Left Outer Edge',
      x2Label: 'x₂: Left Inner Edge',
      x3Label: 'x₃: Right Inner Edge',
      x4Label: 'x₄: Right Outer Edge',
      alignTo: 'Align to',
      recordBtn: 'Record Reading',
      recordedReadings: 'Recorded Tube Observations',
      internalDia: 'Internal Diameter d_int = x₃ - x₂',
      externalDia: 'External Diameter d_ext = x₄ - x₁',
      internalRad: 'Internal Radius r_int',
      externalRad: 'External Radius r_ext',
      wallThickness: 'Wall Thickness t = r_ext - r_int',
      resetRecords: 'Clear Records',
    },
    si: {
      title: 'චල අන්වීක්ෂ අනුකරණය',
      subtitle: 'ප්‍රධාන පරිමාණය: 0.5 mm කොටස් | වර්නියර් කොටස්: 50 | කුඩාම මිනුම: 0.01 mm',
      reticleView: 'උපනෙත් දෘෂ්ටි ක්‍ෂේත්‍රය (හරස් කම්බි දසුන - 20× විශාලනය)',
      horizontalVernier: 'තිරස් චලන වර්නියර් පරිමාණය',
      aimInstruction: 'නලයේ එක් එක් මායිම සමඟ සිරස් හරස් කම්බිය සමපාත වන සේ සියුම් ඉස්කුරුප්පුව කරකවා පාඨාංකය සටහන් කරන්න.',
      x1Label: 'x₁: වම් බාහිර මායිම',
      x2Label: 'x₂: වම් අභ්‍යන්තර මායිම',
      x3Label: 'x₃: දකුණු අභ්‍යන්තර මායිම',
      x4Label: 'x₄: දකුණු බාහිර මායිම',
      alignTo: 'සමපාත කරන්න',
      recordBtn: 'පාඨාංකය සටහන් කරන්න',
      recordedReadings: 'නලයේ සටහන් කරගත් මිනුම්',
      internalDia: 'අභ්‍යන්තර විෂ්කම්භය d_int = x₃ - x₂',
      externalDia: 'බාහිර විෂ්කම්භය d_ext = x₄ - x₁',
      internalRad: 'අභ්‍යන්තර අරය r_int',
      externalRad: 'බාහිර අරය r_ext',
      wallThickness: 'බිත්ති ඝනකම t = r_ext - r_int',
      resetRecords: 'මිනුම් මකන්න',
    },
  }[locale];

  // Visual position offset in reticle view
  // Tube center is at 40 mm. Relative offset in mm = (40 - clampedPos)
  const pxPerMmCrosswire = 20; // High magnification
  const tubeVisualOffset = (centerMm - clampedPos) * pxPerMmCrosswire;

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-6">
      {/* Header */}
      <div className="border-b border-[#DFE8EF] dark:border-[#1E334D] pb-4">
        <h3 className="text-base sm:text-lg font-bold text-[#14243A] dark:text-[#F8FAFC]">
          {t.title}
        </h3>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* RETICLE EYEPIECE CIRCULAR VIEW */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-64 h-64 rounded-full border-4 border-[#1E293B] bg-[#020617] overflow-hidden shadow-inner flex items-center justify-center">
            {/* Visual Specimen: Rubber tube cross-section */}
            <svg viewBox="0 0 256 256" className="absolute inset-0 w-full h-full">
              {/* Backlight circular illumination */}
              <circle cx="128" cy="128" r="120" fill="#FEF08A" fillOpacity="0.85" />

              {/* Rubber Tube Group moving horizontally relative to crosswire */}
              <g transform={`translate(${128 + tubeVisualOffset}, 128)`}>
                {/* Outer rubber tube ring (r = 6.4 mm * 20 px/mm = 128 px) */}
                <circle
                  cx="0"
                  cy="0"
                  r={6.4 * pxPerMmCrosswire}
                  fill="#78716C"
                  stroke="#292524"
                  strokeWidth="3"
                />
                {/* Inner bore lumen (r = 3.2 mm * 20 px/mm = 64 px) */}
                <circle
                  cx="0"
                  cy="0"
                  r={3.2 * pxPerMmCrosswire}
                  fill="#FEF08A"
                  fillOpacity="0.95"
                  stroke="#292524"
                  strokeWidth="3"
                />
              </g>

              {/* FIXED EYEPIECE CROSSHAIRS (Vertical and Horizontal) */}
              {/* Vertical Crosswire */}
              <line x1="128" y1="0" x2="128" y2="256" stroke="#000000" strokeWidth="1.5" />
              {/* Horizontal Crosswire */}
              <line x1="0" y1="128" x2="256" y2="128" stroke="#000000" strokeWidth="1.5" />
              {/* Central intersection indicator */}
              <circle cx="128" cy="128" r="2" fill="#EF4444" />
            </svg>

            {/* Circular Vignette Border */}
            <div className="absolute inset-0 rounded-full border-[10px] border-[#0F172A]/90 pointer-events-none" />
          </div>

          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
              {t.reticleView}
            </span>
            <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] max-w-xs">
              {t.aimInstruction}
            </p>
          </div>
        </div>

        {/* VERNIER SCALE READOUT & TRAVERSAL CONTROLS */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#F6FAFD] dark:bg-[#0B131E] border border-[#DFE8EF] dark:border-[#1E334D] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {t.horizontalVernier}
              </span>
              <span className="text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6]">
                Position = {clampedPos.toFixed(2)} mm
              </span>
            </div>

            {/* Scale Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#FFFFFF] dark:bg-[#111D2D] p-3 rounded-lg border border-[#DFE8EF] dark:border-[#1E334D]">
              <div>
                <span className="text-[#64748B] block text-[10px]">MSR (0.5 mm):</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">{msr.toFixed(1)} mm</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[10px]">VSR ({leastCount} mm):</span>
                <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                  #{vernierDiv} ({(vernierDiv * leastCount).toFixed(2)} mm)
                </span>
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="30"
              max="50"
              step={leastCount}
              value={clampedPos}
              onChange={(e) => handlePosChange(parseFloat(e.target.value))}
              className="w-full accent-[#0F766E] cursor-pointer"
            />

            {/* Stepping buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-2"
                onClick={() => handlePosChange(clampedPos - 0.5)}
              >
                -0.50 mm
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-2"
                onClick={() => handlePosChange(clampedPos - 0.01)}
              >
                -0.01 mm
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-2"
                onClick={() => handlePosChange(clampedPos + 0.01)}
              >
                +0.01 mm
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7 px-2"
                onClick={() => handlePosChange(clampedPos + 0.5)}
              >
                +0.50 mm
              </Button>
            </div>
          </div>

          {/* Quick-align presets & Record actions */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#14243A] dark:text-[#F8FAFC] block">
              Boundary Alignment & Recording:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 justify-start"
                  onClick={() => handlePosChange(targetX1)}
                >
                  <Target className="w-3.5 h-3.5 mr-1 text-[#0F766E]" /> {t.x1Label}
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="text-xs h-7 bg-[#0F766E] text-white"
                  onClick={() => recordPosition('x1')}
                >
                  {t.recordBtn} {recordedX.x1 ? `(${recordedX.x1.toFixed(2)})` : ''}
                </Button>
              </div>

              <div className="flex flex-col gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 justify-start"
                  onClick={() => handlePosChange(targetX2)}
                >
                  <Target className="w-3.5 h-3.5 mr-1 text-[#0F766E]" /> {t.x2Label}
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="text-xs h-7 bg-[#0F766E] text-white"
                  onClick={() => recordPosition('x2')}
                >
                  {t.recordBtn} {recordedX.x2 ? `(${recordedX.x2.toFixed(2)})` : ''}
                </Button>
              </div>

              <div className="flex flex-col gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 justify-start"
                  onClick={() => handlePosChange(targetX3)}
                >
                  <Target className="w-3.5 h-3.5 mr-1 text-[#0F766E]" /> {t.x3Label}
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="text-xs h-7 bg-[#0F766E] text-white"
                  onClick={() => recordPosition('x3')}
                >
                  {t.recordBtn} {recordedX.x3 ? `(${recordedX.x3.toFixed(2)})` : ''}
                </Button>
              </div>

              <div className="flex flex-col gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 justify-start"
                  onClick={() => handlePosChange(targetX4)}
                >
                  <Target className="w-3.5 h-3.5 mr-1 text-[#0F766E]" /> {t.x4Label}
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="text-xs h-7 bg-[#0F766E] text-white"
                  onClick={() => recordPosition('x4')}
                >
                  {t.recordBtn} {recordedX.x4 ? `(${recordedX.x4.toFixed(2)})` : ''}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Observation Summary Table */}
      {showInspector && (
        <div className="p-4 rounded-xl bg-[#F0FDFA] dark:bg-[#042F2E] border border-[#99F6E4] dark:border-[#115E59] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#0F766E] dark:text-[#14B8A6]">
              {t.recordedReadings}
            </span>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-7 text-[#0F766E]"
              onClick={() => setRecordedX({})}
            >
              <RotateCcw className="w-3 h-3 mr-1" /> {t.resetRecords}
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
              <span className="text-[10px] text-[#64748B] block">x₁ (Left Out):</span>
              <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {recordedX.x1 !== undefined ? `${recordedX.x1.toFixed(2)} mm` : '—'}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
              <span className="text-[10px] text-[#64748B] block">x₂ (Left In):</span>
              <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {recordedX.x2 !== undefined ? `${recordedX.x2.toFixed(2)} mm` : '—'}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
              <span className="text-[10px] text-[#64748B] block">x₃ (Right In):</span>
              <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {recordedX.x3 !== undefined ? `${recordedX.x3.toFixed(2)} mm` : '—'}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-[#FFFFFF]/80 dark:bg-[#111D2D]/80 border border-[#99F6E4]/60">
              <span className="text-[10px] text-[#64748B] block">x₄ (Right Out):</span>
              <span className="font-bold text-[#14243A] dark:text-[#F8FAFC]">
                {recordedX.x4 !== undefined ? `${recordedX.x4.toFixed(2)} mm` : '—'}
              </span>
            </div>
          </div>

          {/* Computed Results */}
          {recordedX.x1 !== undefined && recordedX.x2 !== undefined && recordedX.x3 !== undefined && recordedX.x4 !== undefined && (
            <div className="p-3 rounded-lg bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#99F6E4] text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span>{t.internalDia}:</span>
                <span className="font-bold">{(recordedX.x3 - recordedX.x2).toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between">
                <span>{t.externalDia}:</span>
                <span className="font-bold">{(recordedX.x4 - recordedX.x1).toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between text-[#0F766E] border-t border-[#DFE8EF] dark:border-[#1E334D] pt-1">
                <span>{t.internalRad}:</span>
                <span className="font-bold">{((recordedX.x3 - recordedX.x2) / 2).toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between text-[#0F766E]">
                <span>{t.externalRad}:</span>
                <span className="font-bold">{((recordedX.x4 - recordedX.x1) / 2).toFixed(2)} mm</span>
              </div>
              <div className="flex justify-between font-bold text-teal-800 dark:text-teal-300 border-t border-[#DFE8EF] pt-1">
                <span>{t.wallThickness}:</span>
                <span>{(((recordedX.x4 - recordedX.x1) - (recordedX.x3 - recordedX.x2)) / 2).toFixed(2)} mm</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

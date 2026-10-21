'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Gauge, ArrowUpRight } from 'lucide-react';
import { calculateProjectileMotion } from '../physics/calculations';

interface ProjectilesSimulationProps {
  locale?: Locale;
}

export const ProjectilesSimulation: React.FC<ProjectilesSimulationProps> = ({
  locale = 'en',
}) => {
  const [velocity, setVelocity] = useState<number>(25); // m/s
  const [angleDeg, setAngleDeg] = useState<number>(45); // degrees
  const [initialHeight, setInitialHeight] = useState<number>(0); // m
  const [gravity, setGravity] = useState<number>(9.8); // m/s²
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const animRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  const motion = calculateProjectileMotion({
    u: velocity,
    angleDegrees: angleDeg,
    y0: initialHeight,
    g: gravity,
  });

  const t = {
    en: {
      title: 'Interactive 2D Projectile Motion Laboratory',
      subtitle: 'Simulate projectile kinematics under gravity with real-time vector decomposition, trajectory plotting, and parametric controls.',
      velocityLabel: 'Initial Velocity u (m s⁻¹):',
      angleLabel: 'Launch Angle θ (°):',
      heightLabel: 'Launch Height h₀ (m):',
      gravityLabel: 'Gravity g (m s⁻²):',
      flightTime: 'Time of Flight T:',
      maxHeight: 'Maximum Height H:',
      range: 'Horizontal Range R:',
      vx: 'Horizontal Velocity v_x:',
      vy: 'Vertical Velocity v_y:',
      play: 'Play Simulation',
      pause: 'Pause',
      reset: 'Reset',
      scrubLabel: 'Scrub Time (s):',
      earthG: 'Earth (9.8)',
      standardG: 'Exam Standard (10.0)',
      moonG: 'Moon (1.62)',
      marsG: 'Mars (3.71)',
      principlesTitle: 'Theoretical Kinematic Principles',
      principles: '1. Horizontal Motion: Constant velocity with zero acceleration: x(t) = u·cos(θ)·t\n2. Vertical Motion: Constant downward acceleration: y(t) = h₀ + u·sin(θ)·t - 0.5·g·t²\n3. Independence of Orthogonal Motions: Horizontal velocity remains invariant (v_x = u·cos(θ)) throughout flight, while vertical velocity varies linearly (v_y = u·sin(θ) - g·t) and reaches zero at the apex.',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී 2D ප්‍රක්ෂේප්‍ය චලන විද්‍යාගාරය',
      subtitle: 'ගුරුත්වය යටතේ ප්‍රක්ෂේප්‍ය චලනය, දෛශික වියෝජනය සහ පථ සටහන තත්‍ය කාලීනව අත්හදා බලන්න.',
      velocityLabel: 'මුල් ප්‍රවේගය u (m s⁻¹):',
      angleLabel: 'ප්‍රක්ෂේපණ කෝණය θ (°):',
      heightLabel: 'මුල් උස h₀ (m):',
      gravityLabel: 'ගුරුත්වජ ත්වරණය g (m s⁻²):',
      flightTime: 'චලන කාලය T:',
      maxHeight: 'උපරිම උස H:',
      range: 'තිරස් පරාසය R:',
      vx: 'තිරස් ප්‍රවේගය v_x:',
      vy: 'සිරස් ප්‍රවේගය v_y:',
      play: 'ධාවනය කරන්න',
      pause: 'විරාමය',
      reset: 'නැවත මුලට',
      scrubLabel: 'කාලය වෙනස් කරන්න (s):',
      earthG: 'පෘථිවිය (9.8)',
      standardG: 'විභාග සම්මතය (10.0)',
      moonG: 'චන්ද්‍රයා (1.62)',
      marsG: 'අඟහරු (3.71)',
      principlesTitle: 'න්‍යායාත්මක චලිත මූලධර්ම',
      principles: '1. තිරස් චලිතය: ශූන්‍ය ත්වරණය යටතේ නියත ප්‍රවේගය: x(t) = u·cos(θ)·t\n2. සිරස් චලිතය: නියත ගුරුත්වජ ත්වරණය: y(t) = h₀ + u·sin(θ)·t - 0.5·g·t²\n3. ස්වාධීන චලිත මූලධර්මය: ගමන් මඟ පුරා තිරස් ප්‍රවේගය නියතව පවතින අතර (v_x = u·cos(θ)), සිරස් ප්‍රවේගය ක්‍රමයෙන් වෙනස් වී (v_y = u·sin(θ) - g·t) උපරිම උසෙහිදී ශූන්‍ය වේ.',
    },
  }[locale];

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) {
      lastTimestampRef.current = null;
      return;
    }

    const step = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      const dt = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setCurrentTime((prev) => {
        const nextTime = prev + dt;
        if (nextTime >= motion.timeOfFlight) {
          setIsPlaying(false);
          return motion.timeOfFlight;
        }
        return nextTime;
      });

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying, motion.timeOfFlight]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Current Kinematic State
  const rad = (angleDeg * Math.PI) / 180;
  const ux = velocity * Math.cos(rad);
  const uy = velocity * Math.sin(rad);

  const tClamped = Math.min(currentTime, motion.timeOfFlight);
  const currentX = ux * tClamped;
  const currentY = Math.max(0, initialHeight + uy * tClamped - 0.5 * gravity * tClamped * tClamped);
  const currentVx = ux;
  const currentVy = uy - gravity * tClamped;

  // Coordinate Mapping for Canvas / SVG
  // Determine bounds
  const maxX = Math.max(10, motion.range * 1.15);
  const maxY = Math.max(10, motion.maxHeight * 1.3);

  const svgWidth = 600;
  const svgHeight = 320;
  const padLeft = 45;
  const padBottom = 30;
  const graphW = svgWidth - padLeft - 20;
  const graphH = svgHeight - padBottom - 20;

  const toPxX = (x: number) => padLeft + (x / maxX) * graphW;
  const toPxY = (y: number) => svgHeight - padBottom - (y / maxY) * graphH;

  // Build Trajectory Path String
  const numSteps = 50;
  let pathD = '';
  for (let i = 0; i <= numSteps; i++) {
    const t_i = (i / numSteps) * motion.timeOfFlight;
    const xi = ux * t_i;
    const yi = Math.max(0, initialHeight + uy * t_i - 0.5 * gravity * t_i * t_i);
    const px = toPxX(xi);
    const py = toPxY(yi);
    if (i === 0) pathD += `M ${px} ${py}`;
    else pathD += ` L ${px} ${py}`;
  }

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-[#DFE8EF] shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#14243A] font-serif">{t.title}</h2>
          <p className="text-sm text-[#475569] mt-1">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <Button size="sm" onClick={() => setIsPlaying(false)} className="bg-amber-600 hover:bg-amber-700 text-white">
              <Pause className="w-4 h-4 mr-1.5" />
              {t.pause}
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => {
                if (currentTime >= motion.timeOfFlight) setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="bg-[#0F766E] hover:bg-[#0D655E] text-white"
            >
              <Play className="w-4 h-4 mr-1.5" />
              {t.play}
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handleReset} className="text-[#475569] border-[#DFE8EF]">
            <RotateCcw className="w-4 h-4 mr-1.5" />
            {t.reset}
          </Button>
        </div>
      </div>

      {/* Trajectory Canvas Card */}
      <Card className="border-[#DFE8EF] bg-white overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <div className="w-full overflow-x-auto bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] p-2">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-[800px] mx-auto block overflow-visible">
              {/* Axes */}
              <line x1={padLeft} y1={svgHeight - padBottom} x2={svgWidth - 10} y2={svgHeight - padBottom} stroke="#64748B" strokeWidth="2" />
              <line x1={padLeft} y1={svgHeight - padBottom} x2={padLeft} y2={15} stroke="#64748B" strokeWidth="2" />
              <text x={svgWidth - 15} y={svgHeight - padBottom - 8} fontSize="11" fill="#14243A" fontWeight="bold" textAnchor="end">X (m)</text>
              <text x={padLeft + 8} y={20} fontSize="11" fill="#14243A" fontWeight="bold">Y (m)</text>

              {/* Grid Tickmarks */}
              {[0.25, 0.5, 0.75, 1.0].map((frac) => {
                const tickX = frac * maxX;
                const px = toPxX(tickX);
                return (
                  <g key={`x-${frac}`}>
                    <line x1={px} y1={svgHeight - padBottom} x2={px} y2={svgHeight - padBottom + 5} stroke="#64748B" strokeWidth="1.5" />
                    <line x1={px} y1={svgHeight - padBottom} x2={px} y2={20} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={px} y={svgHeight - padBottom + 16} fontSize="10" fill="#64748B" textAnchor="middle">{tickX.toFixed(0)}</text>
                  </g>
                );
              })}
              {[0.25, 0.5, 0.75, 1.0].map((frac) => {
                const tickY = frac * maxY;
                const py = toPxY(tickY);
                return (
                  <g key={`y-${frac}`}>
                    <line x1={padLeft - 5} y1={py} x2={padLeft} y2={py} stroke="#64748B" strokeWidth="1.5" />
                    <line x1={padLeft} y1={py} x2={svgWidth - 10} y2={py} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                    <text x={padLeft - 8} y={py + 3} fontSize="10" fill="#64748B" textAnchor="end">{tickY.toFixed(0)}</text>
                  </g>
                );
              })}

              {/* Parabolic Trajectory Path */}
              <path d={pathD} fill="none" stroke="#79B9E7" strokeWidth="3" strokeDasharray="4 2" />

              {/* Range & Max Height Markers */}
              <line
                x1={toPxX(motion.range)}
                y1={toPxY(0)}
                x2={toPxX(motion.range)}
                y2={toPxY(0) + 8}
                stroke="#0F766E"
                strokeWidth="2"
              />
              <circle cx={toPxX(motion.range)} cy={toPxY(0)} r="4" fill="#0F766E" />
              <text x={toPxX(motion.range)} y={toPxY(0) - 10} fontSize="10" fill="#0F766E" fontWeight="bold" textAnchor="middle">
                R={motion.range.toFixed(1)}m
              </text>

              {/* Apex Marker */}
              {motion.maxHeight > initialHeight && (
                <g>
                  <circle cx={toPxX(motion.range / 2)} cy={toPxY(motion.maxHeight)} r="4" fill="#D97706" />
                  <text x={toPxX(motion.range / 2)} y={toPxY(motion.maxHeight) - 8} fontSize="10" fill="#D97706" fontWeight="bold" textAnchor="middle">
                    H={motion.maxHeight.toFixed(1)}m
                  </text>
                </g>
              )}

              {/* Current Projectile Ball */}
              <circle
                cx={toPxX(currentX)}
                cy={toPxY(currentY)}
                r="7"
                fill="#0F766E"
                stroke="#FFFFFF"
                strokeWidth="2"
              />

              {/* Current Velocity Vectors */}
              {/* Vx vector (Horizontal, Green) */}
              <line
                x1={toPxX(currentX)}
                y1={toPxY(currentY)}
                x2={toPxX(currentX) + (currentVx / 50) * 80}
                y2={toPxY(currentY)}
                stroke="#10B981"
                strokeWidth="2"
              />
              {/* Vy vector (Vertical, Amber) */}
              <line
                x1={toPxX(currentX)}
                y1={toPxY(currentY)}
                x2={toPxX(currentX)}
                y2={toPxY(currentY) - (currentVy / 50) * 80}
                stroke="#F59E0B"
                strokeWidth="2"
              />
              {/* Total V vector (Teal) */}
              <line
                x1={toPxX(currentX)}
                y1={toPxY(currentY)}
                x2={toPxX(currentX) + (currentVx / 50) * 80}
                y2={toPxY(currentY) - (currentVy / 50) * 80}
                stroke="#0F766E"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Time scrubber slider */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-semibold text-[#14243A] whitespace-nowrap">{t.scrubLabel}</span>
            <input
              type="range"
              min="0"
              max={motion.timeOfFlight}
              step="0.01"
              value={tClamped}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentTime(parseFloat(e.target.value));
              }}
              className="w-full accent-[#0F766E] cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-[#0F766E] w-14 text-right">
              {tClamped.toFixed(2)}s
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Control Sliders & Kinematic Readouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Parametric Controls */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'චලන පරාමිතීන් පාලනය' : 'Kinematic Parameters'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Velocity */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#14243A] mb-1">
                <span>{t.velocityLabel}</span>
                <span className="font-mono text-[#0F766E]">{velocity} m s⁻¹</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={velocity}
                onChange={(e) => {
                  setVelocity(parseFloat(e.target.value));
                  handleReset();
                }}
                className="w-full accent-[#0F766E]"
              />
            </div>

            {/* Launch Angle */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#14243A] mb-1">
                <span>{t.angleLabel}</span>
                <span className="font-mono text-[#0F766E]">{angleDeg}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="1"
                value={angleDeg}
                onChange={(e) => {
                  setAngleDeg(parseFloat(e.target.value));
                  handleReset();
                }}
                className="w-full accent-[#0F766E]"
              />
            </div>

            {/* Initial Height */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#14243A] mb-1">
                <span>{t.heightLabel}</span>
                <span className="font-mono text-[#0F766E]">{initialHeight} m</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="1"
                value={initialHeight}
                onChange={(e) => {
                  setInitialHeight(parseFloat(e.target.value));
                  handleReset();
                }}
                className="w-full accent-[#0F766E]"
              />
            </div>

            {/* Gravity presets */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#14243A] mb-1">
                <span>{t.gravityLabel}</span>
                <span className="font-mono text-[#0F766E]">{gravity} m s⁻²</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
                {[
                  { label: t.earthG, val: 9.8 },
                  { label: t.standardG, val: 10.0 },
                  { label: t.moonG, val: 1.62 },
                  { label: t.marsG, val: 3.71 },
                ].map((gPreset) => (
                  <button
                    key={gPreset.val}
                    type="button"
                    onClick={() => {
                      setGravity(gPreset.val);
                      handleReset();
                    }}
                    className={`text-xs py-1.5 px-2 rounded border text-center transition-colors ${
                      gravity === gPreset.val
                        ? 'bg-[#0F766E] text-white border-[#0F766E] font-medium'
                        : 'border-[#DFE8EF] text-[#475569] hover:bg-slate-50'
                    }`}
                  >
                    {gPreset.label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Kinematic Readouts */}
        <Card className="border-[#DFE8EF] bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-[#0F766E]" />
              {locale === 'si' ? 'තත්‍ය කාලීන චාලක ප්‍රතිඵල' : 'Real-Time Kinematic Readouts'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3 p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF]">
              <div>
                <span className="text-xs text-[#475569] block">{t.flightTime}</span>
                <span className="text-base font-bold font-mono text-[#14243A]">{motion.timeOfFlight.toFixed(2)} s</span>
              </div>
              <div>
                <span className="text-xs text-[#475569] block">{t.maxHeight}</span>
                <span className="text-base font-bold font-mono text-[#0F766E]">{motion.maxHeight.toFixed(2)} m</span>
              </div>
              <div>
                <span className="text-xs text-[#475569] block">{t.range}</span>
                <span className="text-base font-bold font-mono text-[#0F766E]">{motion.range.toFixed(2)} m</span>
              </div>
              <div>
                <span className="text-xs text-[#475569] block">{locale === 'si' ? 'වර්තමාන උස Y:' : 'Current Height Y:'}</span>
                <span className="text-base font-bold font-mono text-[#14243A]">{currentY.toFixed(2)} m</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#DFE8EF] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#475569] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  {t.vx}
                </span>
                <span className="font-mono font-bold text-[#14243A]">{currentVx.toFixed(2)} m s⁻¹ (constant)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#475569] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  {t.vy}
                </span>
                <span className="font-mono font-bold text-[#14243A]">{currentVy.toFixed(2)} m s⁻¹</span>
              </div>
            </div>

            {/* Principles summary */}
            <div className="p-3 bg-[#F6FAFD] rounded-lg border border-[#DFE8EF] text-xs text-[#475569] leading-relaxed whitespace-pre-line">
              <span className="font-semibold text-[#14243A] block mb-1">{t.principlesTitle}</span>
              {t.principles}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

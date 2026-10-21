'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Globe, Activity, Rocket } from 'lucide-react';
import {
  EARTH_MASS_KG,
  EARTH_RADIUS_M,
  calculateOrbitalVelocity,
  calculateOrbitalPeriod,
  calculateFieldIntensity,
  calculateGravitationalPotential,
  calculateEscapeVelocity,
  calculateSatelliteTotalEnergy,
} from '../physics/calculations';

interface OrbitalMechanicsSimulationProps {
  locale?: Locale;
}

type OrbitMode = 'leo' | 'meo' | 'geo' | 'escape';

export const OrbitalMechanicsSimulation: React.FC<OrbitalMechanicsSimulationProps> = ({
  locale = 'en',
}) => {
  const [mode, setMode] = useState<OrbitMode>('leo');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Satellite mass: 1000 kg
  const satelliteMassKg = 1000;

  // Altitude in km (default 400 km for LEO)
  const [altitudeKm, setAltitudeKm] = useState<number>(400);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const angleRef = useRef<number>(0);
  const escapePosRef = useRef<{ x: number; y: number; vx: number; vy: number }>({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  });

  // Radii and metrics
  const rM = EARTH_RADIUS_M + altitudeKm * 1000;
  const vOrbitalMs = calculateOrbitalVelocity(EARTH_MASS_KG, rM);
  const vOrbitalKms = vOrbitalMs / 1000;
  const periodS = calculateOrbitalPeriod(EARTH_MASS_KG, rM);
  const periodHours = periodS / 3600;
  const gIntensity = calculateFieldIntensity(EARTH_MASS_KG, rM);
  const potentialMJ = calculateGravitationalPotential(EARTH_MASS_KG, rM) / 1e6;
  const vEscapeMs = calculateEscapeVelocity(EARTH_MASS_KG, EARTH_RADIUS_M);
  const vEscapeKms = vEscapeMs / 1000;
  const totalEnergyGJ =
    calculateSatelliteTotalEnergy(EARTH_MASS_KG, satelliteMassKg, rM) / 1e9;

  // Mode Selection Presets
  const handleSelectMode = (newMode: OrbitMode) => {
    setMode(newMode);
    angleRef.current = 0;
    if (newMode === 'leo') {
      setAltitudeKm(400); // ISS altitude ~400 km
    } else if (newMode === 'meo') {
      setAltitudeKm(20200); // GPS altitude ~20,200 km
    } else if (newMode === 'geo') {
      setAltitudeKm(35786); // Geostationary ~35,786 km
    } else if (newMode === 'escape') {
      setAltitudeKm(400);
      escapePosRef.current = {
        x: 0,
        y: -(EARTH_RADIUS_M + 400000) / 1000,
        vx: 11.2,
        vy: 0,
      };
    }
  };

  // Canvas 60fps Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Scale: Canvas radius for Earth = 36 px
      // Earth actual radius = 6371 km
      const earthCanvasR = 36;
      const kmToPx = earthCanvasR / 6371;

      // Draw Starfield background
      ctx.fillStyle = '#090D16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Equipotential dashed rings
      ctx.strokeStyle = '#1E293B';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      // Reference GEO ring (~42,164 km radius)
      const geoCanvasR = (6371 + 35786) * kmToPx;
      ctx.beginPath();
      ctx.arc(centerX, centerY, geoCanvasR, 0, Math.PI * 2);
      ctx.stroke();

      // Earth atmosphere glow
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        earthCanvasR - 2,
        centerX,
        centerY,
        earthCanvasR + 10
      );
      glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
      glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthCanvasR + 10, 0, Math.PI * 2);
      ctx.fill();

      // Draw Earth Sphere
      const earthGrad = ctx.createRadialGradient(
        centerX - 8,
        centerY - 8,
        4,
        centerX,
        centerY,
        earthCanvasR
      );
      earthGrad.addColorStop(0, '#38BDF8');
      earthGrad.addColorStop(0.6, '#0284C7');
      earthGrad.addColorStop(1, '#0C4A6E');
      ctx.fillStyle = earthGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthCanvasR, 0, Math.PI * 2);
      ctx.fill();

      // Continents sketch on Earth
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(centerX - 6, centerY - 6, 12, 0, Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(centerX + 8, centerY + 8, 8, 0, Math.PI);
      ctx.fill();

      ctx.setLineDash([]); // Reset line dash

      if (mode !== 'escape') {
        // Circular Orbit Radius on Canvas
        const satCanvasR = (6371 + altitudeKm) * kmToPx;

        // Draw Orbit Trajectory Line
        ctx.strokeStyle = '#0EA5E9';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, satCanvasR, 0, Math.PI * 2);
        ctx.stroke();

        // Update Satellite Position
        if (isPlaying) {
          // Angular velocity omega = 2pi / T. Speed scaled for smooth visualization
          const speedFactor = mode === 'geo' ? 0.008 : mode === 'meo' ? 0.015 : 0.035;
          angleRef.current += speedFactor;
        }

        const satX = centerX + satCanvasR * Math.cos(angleRef.current);
        const satY = centerY + satCanvasR * Math.sin(angleRef.current);

        // Velocity vector tangent
        const velVecLen = 22;
        const vx = -Math.sin(angleRef.current) * velVecLen;
        const vy = Math.cos(angleRef.current) * velVecLen;
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(satX, satY);
        ctx.lineTo(satX + vx, satY + vy);
        ctx.stroke();

        // Gravitational force vector towards center
        ctx.strokeStyle = '#EF4444';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(satX, satY);
        ctx.lineTo(
          satX - (satX - centerX) * 0.15,
          satY - (satY - centerY) * 0.15
        );
        ctx.stroke();

        // Satellite body
        ctx.fillStyle = '#F8FAFC';
        ctx.beginPath();
        ctx.arc(satX, satY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Solar panels
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(satX - 8, satY - 1.5, 4, 3);
        ctx.fillRect(satX + 4, satY - 1.5, 4, 3);
      } else {
        // Escape Trajectory Animation
        if (isPlaying) {
          const esc = escapePosRef.current;
          const distKm = Math.sqrt(esc.x * esc.x + esc.y * esc.y);
          if (distKm > 0) {
            const accKmS2 =
              (calculateFieldIntensity(EARTH_MASS_KG, distKm * 1000) / 1000) *
              0.8;
            const ax = -accKmS2 * (esc.x / distKm);
            const ay = -accKmS2 * (esc.y / distKm);
            esc.vx += ax * 0.08;
            esc.vy += ay * 0.08;
            esc.x += esc.vx * 0.08;
            esc.y += esc.vy * 0.08;
          }

          // Reset if escaped canvas bounds
          if (Math.abs(esc.x) * kmToPx > canvas.width || Math.abs(esc.y) * kmToPx > canvas.height) {
            escapePosRef.current = {
              x: 0,
              y: -(EARTH_RADIUS_M + 400000) / 1000,
              vx: 11.2,
              vy: 0,
            };
          }
        }

        const escCanvasX = centerX + escapePosRef.current.x * kmToPx;
        const escCanvasY = centerY + escapePosRef.current.y * kmToPx;

        // Escape spacecraft icon
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(escCanvasX, escCanvasY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Exhaust plume
        ctx.fillStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.beginPath();
        ctx.arc(escCanvasX - 6, escCanvasY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Legend in top-left
      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px monospace';
      ctx.fillText(`Scale: 1 Earth Radius = 6,371 km`, 16, 24);
      ctx.fillText(`GEO Orbit Radius = 42,164 km`, 16, 38);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    animFrameIdRef.current = animId;

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [mode, altitudeKm, isPlaying]);

  const t = {
    en: {
      title: 'Interactive Orbital Mechanics & Satellite Trajectories Laboratory',
      subtitle:
        'Explore circular satellite orbits, Keplerian periods, geostationary synchronization, and hyperbolic escape velocities around Earth.',
      leoBtn: 'Low Earth Orbit (LEO, 400 km)',
      meoBtn: 'Medium Earth Orbit (GPS, 20,200 km)',
      geoBtn: 'Geostationary Orbit (GEO, 35,786 km)',
      escapeBtn: 'Escape Velocity (11.2 km/s)',
      altitudeSlider: 'Orbital Altitude h above Earth (km):',
      speedLabel: 'Orbital Speed (v_o = √(GM/r)):',
      periodLabel: 'Orbital Period (T = 2π√(r³/GM)):',
      gravityLabel: 'Field Intensity (g_h = GM/r²):',
      potentialLabel: 'Gravitational Potential (V = -GM/r):',
      energyLabel: 'Total Mechanical Energy (E = -GMm/2r):',
      escapeSpeedLabel: 'Earth Escape Velocity (v_e = √(2GM/R)):',
      theoryTitle: 'Orbital Mechanics & Governing Physical Laws',
      theoryText:
        '• Newton’s Universal Gravitation: F = G · M · m / r²\n• Centripetal Force Balance: m · v_o² / r = G · M · m / r² ⟹ v_o = √(G · M / r)\n• Kepler’s Third Law: T² = (4π² / GM) · r³\n• Geostationary Orbit: T = 24.0 hours (86,400 s) in the equatorial plane, yielding r ≈ 42,164 km and altitude h ≈ 35,786 km\n• Escape Velocity: v_e = √(2 · G · M / R) = √(2 · g₀ · R) ≈ 11.2 km/s for Earth\n• Mechanical Energy: E = KE + PE = (1/2)m v_o² - GMm/r = - GMm / (2r) (Bound negative state)',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී කක්ෂීය යාන්ත්‍ර විද්‍යාව සහ චන්ද්‍රිකා ගමන්පථ විද්‍යාගාරය',
      subtitle:
        'පෘථිවිය වටා චක්‍රාකාර චන්ද්‍රිකා කක්ෂ, කෙප්ලර් ආවර්ත කාල, භූ-ස්ථාවර සමමුහුර්තකරණය සහ මිදීමේ ප්‍රවේග ගමන්පථ සජීවීව ගවේෂණය කරන්න.',
      leoBtn: 'පහළ පෘථිවි කක්ෂය (LEO, 400 km)',
      meoBtn: 'මධ්‍යම පෘථිවි කක්ෂය (GPS, 20,200 km)',
      geoBtn: 'භූ-ස්ථාවර කක්ෂය (GEO, 35,786 km)',
      escapeBtn: 'මිදීමේ ප්‍රවේගය (11.2 km/s)',
      altitudeSlider: 'පෘථිවි මතුපිට සිට කක්ෂ උන්නතාංශය h (km):',
      speedLabel: 'කක්ෂීය ප්‍රවේගය (v_o = √(GM/r)):',
      periodLabel: 'කක්ෂීය ආවර්ත කාලය (T = 2π√(r³/GM)):',
      gravityLabel: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර තීව්‍රතාව (g_h = GM/r²):',
      potentialLabel: 'ගුරුත්වාකර්ෂණ විභවය (V = -GM/r):',
      energyLabel: 'මුළු යාන්ත්‍රික ශක්තිය (E = -GMm/2r):',
      escapeSpeedLabel: 'පෘථිවියෙන් මිදීමේ ප්‍රවේගය (v_e = √(2GM/R)):',
      theoryTitle: 'කක්ෂීය යාන්ත්‍ර විද්‍යාව සහ භෞතික නියම',
      theoryText:
        '• නිව්ටන්ගේ සර්වත්‍ර ගුරුත්වාකර්ෂණ නියමය: F = G · M · m / r²\n• අභිකේන්ද්‍ර බල තුලනය: m · v_o² / r = G · M · m / r² ⟹ v_o = √(G · M / r)\n• කෙප්ලර්ගේ 3 වන නියමය: T² = (4π² / GM) · r³\n• භූ-ස්ථාවර කක්ෂය: සමක තලයේ T = පැය 24.0 (තත්පර 86,400) වන අතර, කක්ෂ අරය r ≈ 42,164 km සහ උස h ≈ 35,786 km වේ\n• මිදීමේ ප්‍රවේගය: v_e = √(2 · G · M / R) = √(2 · g₀ · R) ≈ 11.2 km/s\n• මුළු යාන්ත්‍රික ශක්තිය: E = KE + PE = - GMm / (2r) (බැඳි ඍණ ශක්ති තත්ත්වය)',
    },
  }[locale];

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Globe className="w-5 h-5 text-sky-600" />
              {t.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? 'Pause' : 'Resume'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSelectMode(mode)}
              className="text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Orbit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {/* Orbit Presets */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={mode === 'leo' ? 'default' : 'outline'}
              onClick={() => handleSelectMode('leo')}
              className={mode === 'leo' ? 'bg-[#0F766E]' : ''}
            >
              {t.leoBtn}
            </Button>
            <Button
              size="sm"
              variant={mode === 'meo' ? 'default' : 'outline'}
              onClick={() => handleSelectMode('meo')}
              className={mode === 'meo' ? 'bg-[#0F766E]' : ''}
            >
              {t.meoBtn}
            </Button>
            <Button
              size="sm"
              variant={mode === 'geo' ? 'default' : 'outline'}
              onClick={() => handleSelectMode('geo')}
              className={mode === 'geo' ? 'bg-[#0F766E]' : ''}
            >
              {t.geoBtn}
            </Button>
            <Button
              size="sm"
              variant={mode === 'escape' ? 'default' : 'outline'}
              onClick={() => handleSelectMode('escape')}
              className={mode === 'escape' ? 'bg-amber-600 hover:bg-amber-700' : ''}
            >
              <Rocket className="w-3.5 h-3.5 mr-1" />
              {t.escapeBtn}
            </Button>
          </div>

          {/* Interactive Canvas Container */}
          <div className="w-full bg-[#090D16] border border-slate-800 rounded-xl overflow-hidden flex justify-center p-2">
            <canvas
              ref={canvasRef}
              width={760}
              height={360}
              className="w-full max-w-[760px] h-[360px] rounded-lg shadow-inner"
            />
          </div>

          {/* Altitude Slider (for non-escape mode) */}
          {mode !== 'escape' && (
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>{t.altitudeSlider}</span>
                <span className="font-mono text-sky-800">
                  {altitudeKm.toLocaleString()} km (r = {(6371 + altitudeKm).toLocaleString()} km)
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="40000"
                step="200"
                value={altitudeKm}
                onChange={(e) => setAltitudeKm(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
            </div>
          )}

          {/* Telemetry Metrics Panel */}
          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-950">
              <Activity className="w-4 h-4 text-sky-700" />
              Real-Time Orbital Physics Telemetry (m = 1,000 kg)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.speedLabel}</div>
                <div className="text-lg font-bold font-mono text-sky-900 mt-0.5">
                  {vOrbitalKms.toFixed(2)} km/s
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.periodLabel}</div>
                <div className="text-lg font-bold font-mono text-sky-900 mt-0.5">
                  {periodHours < 1
                    ? `${(periodS / 60).toFixed(1)} min`
                    : `${periodHours.toFixed(2)} hrs`}
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.gravityLabel}</div>
                <div className="text-lg font-bold font-mono text-slate-800 mt-0.5">
                  {gIntensity.toFixed(3)} m/s²
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.potentialLabel}</div>
                <div className="text-lg font-bold font-mono text-slate-800 mt-0.5">
                  {potentialMJ.toFixed(2)} MJ/kg
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.energyLabel}</div>
                <div className="text-lg font-bold font-mono text-rose-800 mt-0.5">
                  {totalEnergyGJ.toFixed(2)} GJ
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-sky-100 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">{t.escapeSpeedLabel}</div>
                <div className="text-lg font-bold font-mono text-emerald-800 mt-0.5">
                  {vEscapeKms.toFixed(2)} km/s
                </div>
              </div>
            </div>
          </div>

          {/* Theory Box */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
            <div className="font-semibold text-slate-800 text-sm">{t.theoryTitle}</div>
            <p className="whitespace-pre-line leading-relaxed font-sans">{t.theoryText}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

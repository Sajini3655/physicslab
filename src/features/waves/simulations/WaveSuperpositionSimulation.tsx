'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Locale } from '@/shared/curriculum';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Activity, Layers, Sliders } from 'lucide-react';

interface WaveSuperpositionSimulationProps {
  locale?: Locale;
}

export const WaveSuperpositionSimulation: React.FC<WaveSuperpositionSimulationProps> = ({
  locale = 'en',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [mode, setMode] = useState<'standing' | 'beats'>('standing');
  const [freq1, setFreq1] = useState<number>(1.0); // Hz
  const [freq2, setFreq2] = useState<number>(1.0); // Hz
  const [amp1, setAmp1] = useState<number>(35); // px
  const [amp2, setAmp2] = useState<number>(35); // px
  const [phaseDiffDeg, setPhaseDiffDeg] = useState<number>(0); // deg

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  const t = {
    en: {
      title: 'Interactive Wave Superposition & Stationary Waves Laboratory',
      subtitle: 'Explore the Principle of Superposition, standing waves formation with nodes and antinodes, and acoustic beats in real-time.',
      modeStanding: 'Standing Waves (Opposing Waves)',
      modeBeats: 'Interference & Beats (Co-directional)',
      freq1Label: 'Wave 1 Frequency f₁ (Hz)',
      freq2Label: 'Wave 2 Frequency f₂ (Hz)',
      amp1Label: 'Wave 1 Amplitude A₁ (px)',
      amp2Label: 'Wave 2 Amplitude A₂ (px)',
      phaseLabel: 'Phase Difference Δϕ (°)',
      wave1Legend: 'Wave 1 (Forward)',
      wave2Legend: 'Wave 2 (Reflected / Second)',
      resultantLegend: 'Resultant Wave y = y₁ + y₂',
      nodesLegend: 'Displacement Nodes (Zero Motion)',
      antinodesLegend: 'Antinodes (Max Motion 2A)',
      physicsInfoTitle: 'Mathematical Physics of Superposition',
      physicsInfoStanding: 'Principle of Superposition: When two identical waves travel in opposite directions:\n\ny₁ = A · sin(kx - ωt)   and   y₂ = A · sin(kx + ωt)\n\ny = y₁ + y₂ = [2A · sin(kx)] · cos(ωt)\n\n• Nodes occur where sin(kx) = 0 ⟹ x = n(λ / 2). The medium at nodes is permanently at rest.\n• Antinodes occur where sin(kx) = ±1 ⟹ x = (2n + 1)(λ / 4). Amplitude reaches 2A.\n• Distance between two adjacent nodes = λ / 2.',
      physicsInfoBeats: 'Acoustic Beats: When two waves of slightly different frequencies f₁ and f₂ travel in the same direction:\n\ny₁ = A · sin(2π f₁ t)   and   y₂ = A · sin(2π f₂ t)\n\ny = [2A · cos(2π (f₁ - f₂) t / 2)] · sin(2π (f₁ + f₂) t / 2)\n\n• Beat Frequency: f_beat = |f₁ - f₂|\n• The modulated envelope pulsates in loudness with a periodic waxing and waning intensity.',
      beatFreqDisplay: 'Beat Frequency f_beat = |f₁ - f₂|:',
    },
    si: {
      title: 'අන්තර්ක්‍රියාකාරී තරංග අධිස්ථාපනය සහ ස්ථාවර තරංග විද්‍යාගාරය',
      subtitle: 'තරංග අධිස්ථාපන මූලධර්මය, නිශ්පන්ද-ප්‍රස්පන්ද සහිත ස්ථාවර තරංග ඇතිවීම සහ ස්පන්ද (Beats) සජීවීව අධ්‍යයනය කරන්න.',
      modeStanding: 'ස්ථාවර තරංග (ප්‍රතිවිරුද්ධ තරංග)',
      modeBeats: 'මැදිහත්වීම සහ ස්පන්ද (එකම දිශාවේ)',
      freq1Label: '1 වන තරංගයේ සංඛ්‍යාතය f₁ (Hz)',
      freq2Label: '2 වන තරංගයේ සංඛ්‍යාතය f₂ (Hz)',
      amp1Label: '1 වන තරංගයේ විස්තාරය A₁ (px)',
      amp2Label: '2 වන තරංගයේ විස්තාරය A₂ (px)',
      phaseLabel: 'කලා වෙනස Δϕ (°)',
      wave1Legend: '1 වන තරංගය (ඉදිරියට)',
      wave2Legend: '2 වන තරංගය (පරාවර්තිත / දෙවන)',
      resultantLegend: 'සම්ප්‍රයුක්ත තරංගය y = y₁ + y₂',
      nodesLegend: 'විස්ථාපන නිශ්පන්ද (චලනය ශුන්‍ය)',
      antinodesLegend: 'ප්‍රස්පන්ද (උපරිම විස්තාරය 2A)',
      physicsInfoTitle: 'අධිස්ථාපනයේ ගණිතමය භෞතික විද්‍යාව',
      physicsInfoStanding: 'අධිස්ථාපන මූලධර්මය: එක හා සමාන තරංග දෙකක් ප්‍රතිවිරුද්ධ දිශාවලට ගමන් කරන විට:\n\ny₁ = A · sin(kx - ωt)   සහ   y₂ = A · sin(kx + ωt)\n\ny = y₁ + y₂ = [2A · sin(kx)] · cos(ωt)\n\n• නිශ්පන්ද: sin(kx) = 0 වන තැන්වලදී ⟹ x = n(λ / 2). නිශ්පන්දවල අංශු සදාකාලිකවම නිශ්චලව පවතී.\n• ප්‍රස්පන්ද: sin(kx) = ±1 වන තැන්වලදී ⟹ x = (2n + 1)(λ / 4). විස්තාරය 2A දක්වා උපරිම වේ.\n• යාබද නිශ්පන්ද දෙකක් අතර දුර = λ / 2.',
      physicsInfoBeats: 'ධ්වනි ස්පන්ද (Beats): මඳක් වෙනස් සංඛ්‍යාත f₁ සහ f₂ සහිත තරංග දෙකක් එකම දිශාවට ගමන් කරන විට:\n\ny₁ = A · sin(2π f₁ t)   සහ   y₂ = A · sin(2π f₂ t)\n\ny = [2A · cos(2π (f₁ - f₂) t / 2)] · sin(2π (f₁ + f₂) t / 2)\n\n• ස්පන්ද සංඛ්‍යාතය: f_beat = |f₁ - f₂|\n• සංස්ලේෂී තරංගයේ ඝෝෂාව වරින් වර වැඩිවෙමින් හා අඩුවෙමින් ශබ්දය ඇසේ.',
      beatFreqDisplay: 'ස්පන්ද සංඛ්‍යාතය f_beat = |f₁ - f₂|:',
    },
  }[locale];

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTimestamp = performance.now();

    const render = (now: number) => {
      const dt = (now - lastTimestamp) / 1000;
      lastTimestamp = now;

      if (isPlaying) {
        timeRef.current += dt;
      }

      const tSec = timeRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.strokeStyle = '#F1F5F9';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center baseline
      const centerY = height / 2;
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      const wavelengthPx = 200; // px
      const k = (2 * Math.PI) / wavelengthPx;
      const omega1 = 2 * Math.PI * freq1;
      const omega2 = 2 * Math.PI * freq2;
      const phaseRad = (phaseDiffDeg * Math.PI) / 180;

      // Draw Wave 1 (Light Blue)
      ctx.strokeStyle = '#79B9E7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        // travels right: (kx - omega1 * t)
        const y = centerY - amp1 * Math.sin(k * x - omega1 * tSec);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Wave 2 (Green)
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        let y = centerY;
        if (mode === 'standing') {
          // travels left: (kx + omega2 * t)
          y = centerY - amp2 * Math.sin(k * x + omega2 * tSec + phaseRad);
        } else {
          // co-directional travels right: (kx - omega2 * t)
          y = centerY - amp2 * Math.sin(k * x - omega2 * tSec + phaseRad);
        }
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Resultant Wave (Bold Teal)
      ctx.strokeStyle = '#0F766E';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const y1 = amp1 * Math.sin(k * x - omega1 * tSec);
        let y2 = 0;
        if (mode === 'standing') {
          y2 = amp2 * Math.sin(k * x + omega2 * tSec + phaseRad);
        } else {
          y2 = amp2 * Math.sin(k * x - omega2 * tSec + phaseRad);
        }
        const yRes = centerY - (y1 + y2);
        if (x === 0) ctx.moveTo(x, yRes);
        else ctx.lineTo(x, yRes);
      }
      ctx.stroke();

      // In Standing mode, mark nodes and antinodes
      if (mode === 'standing' && Math.abs(freq1 - freq2) < 0.05 && Math.abs(amp1 - amp2) < 5) {
        const halfLambda = wavelengthPx / 2;
        // Nodes are at x where sin(kx) = 0 => x = n * halfLambda
        for (let xNode = 0; xNode <= width; xNode += halfLambda) {
          ctx.fillStyle = '#EF4444';
          ctx.beginPath();
          ctx.arc(xNode, centerY, 5, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = '#991B1B';
          ctx.font = '10px sans-serif';
          ctx.fillText('N', xNode - 4, centerY + 18);
        }

        // Antinodes are at x = (n + 0.5) * halfLambda
        for (let xAnti = halfLambda / 2; xAnti <= width; xAnti += halfLambda) {
          ctx.strokeStyle = '#F59E0B';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(xAnti, centerY - 2 * amp1);
          ctx.lineTo(xAnti, centerY + 2 * amp1);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = '#D97706';
          ctx.font = '10px sans-serif';
          ctx.fillText('A', xAnti - 4, centerY - 2 * amp1 - 5);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPlaying, mode, freq1, freq2, amp1, amp2, phaseDiffDeg]);

  const handleReset = () => {
    timeRef.current = 0;
    setFreq1(1.0);
    setFreq2(1.0);
    setAmp1(35);
    setAmp2(35);
    setPhaseDiffDeg(0);
  };

  const beatFrequency = Math.abs(freq1 - freq2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-[#DFE8EF] shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#14243A] font-serif">{t.title}</h2>
          <p className="text-sm text-[#475569] mt-1">{t.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={isPlaying ? 'default' : 'outline'}
            onClick={() => setIsPlaying(!isPlaying)}
            className={isPlaying ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white' : 'text-[#14243A] border-[#DFE8EF]'}
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-1.5" /> : <Play className="w-4 h-4 mr-1.5" />}
            {isPlaying ? (locale === 'si' ? 'විරාමය' : 'Pause') : (locale === 'si' ? 'ධාවනය' : 'Play')}
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset} className="text-[#475569] border-[#DFE8EF]">
            <RotateCcw className="w-4 h-4 mr-1.5" />
            {locale === 'si' ? 'නැවත පිහිටුවන්න' : 'Reset'}
          </Button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={mode === 'standing' ? 'default' : 'outline'}
          onClick={() => {
            setMode('standing');
            setFreq1(1.0);
            setFreq2(1.0);
          }}
          className={
            mode === 'standing'
              ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
              : 'text-[#475569] border-[#DFE8EF]'
          }
        >
          <Layers className="w-4 h-4 mr-1.5" />
          {t.modeStanding}
        </Button>
        <Button
          size="sm"
          variant={mode === 'beats' ? 'default' : 'outline'}
          onClick={() => {
            setMode('beats');
            setFreq1(1.0);
            setFreq2(1.2);
          }}
          className={
            mode === 'beats'
              ? 'bg-[#0F766E] hover:bg-[#0D655E] text-white shadow-sm'
              : 'text-[#475569] border-[#DFE8EF]'
          }
        >
          <Activity className="w-4 h-4 mr-1.5" />
          {t.modeBeats}
        </Button>
      </div>

      {/* Canvas Card */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardContent className="p-4 space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-[#DFE8EF] bg-white flex justify-center">
            <canvas
              ref={canvasRef}
              width={720}
              height={260}
              className="w-full max-w-[720px] h-auto block"
            />
          </div>

          {/* Color Legends */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-medium text-[#475569]">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 rounded bg-[#79B9E7]" />
              <span>{t.wave1Legend}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 rounded bg-[#34D399]" />
              <span>{t.wave2Legend}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1.5 rounded bg-[#0F766E]" />
              <span className="font-bold text-[#0F766E]">{t.resultantLegend}</span>
            </div>
            {mode === 'standing' && (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span>{t.nodesLegend}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded border border-[#F59E0B] border-dashed" />
                  <span>{t.antinodesLegend}</span>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Freq 1 */}
        <div className="p-4 bg-white rounded-xl border border-[#DFE8EF] space-y-2">
          <div className="flex justify-between text-xs text-[#475569]">
            <span>{t.freq1Label}</span>
            <span className="font-mono font-bold text-[#14243A]">{freq1.toFixed(1)} Hz</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={freq1}
            onChange={(e) => setFreq1(parseFloat(e.target.value))}
            className="w-full accent-[#0F766E]"
          />
        </div>

        {/* Freq 2 */}
        <div className="p-4 bg-white rounded-xl border border-[#DFE8EF] space-y-2">
          <div className="flex justify-between text-xs text-[#475569]">
            <span>{t.freq2Label}</span>
            <span className="font-mono font-bold text-[#14243A]">{freq2.toFixed(1)} Hz</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={freq2}
            onChange={(e) => setFreq2(parseFloat(e.target.value))}
            className="w-full accent-[#0F766E]"
          />
        </div>

        {/* Amplitude 1 */}
        <div className="p-4 bg-white rounded-xl border border-[#DFE8EF] space-y-2">
          <div className="flex justify-between text-xs text-[#475569]">
            <span>{t.amp1Label}</span>
            <span className="font-mono font-bold text-[#14243A]">{amp1} px</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            step="5"
            value={amp1}
            onChange={(e) => setAmp1(parseInt(e.target.value))}
            className="w-full accent-[#0F766E]"
          />
        </div>

        {/* Phase Difference */}
        <div className="p-4 bg-white rounded-xl border border-[#DFE8EF] space-y-2">
          <div className="flex justify-between text-xs text-[#475569]">
            <span>{t.phaseLabel}</span>
            <span className="font-mono font-bold text-[#14243A]">{phaseDiffDeg}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="15"
            value={phaseDiffDeg}
            onChange={(e) => setPhaseDiffDeg(parseInt(e.target.value))}
            className="w-full accent-[#0F766E]"
          />
        </div>
      </div>

      {/* Beats Readout in Beats Mode */}
      {mode === 'beats' && (
        <div className="p-4 bg-[#F6FAFD] rounded-xl border border-[#DFE8EF] flex items-center justify-between">
          <span className="font-medium text-sm text-[#14243A]">{t.beatFreqDisplay}</span>
          <span className="font-mono font-bold text-lg text-[#0F766E]">
            {beatFrequency.toFixed(2)} Hz ({beatFrequency > 0 ? `${(1 / beatFrequency).toFixed(2)} s period` : '—'})
          </span>
        </div>
      )}

      {/* Theory & Mathematical Explanation */}
      <Card className="border-[#DFE8EF] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-[#14243A] font-medium flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#0F766E]" />
            {t.physicsInfoTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-line">
            {mode === 'standing' ? t.physicsInfoStanding : t.physicsInfoBeats}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

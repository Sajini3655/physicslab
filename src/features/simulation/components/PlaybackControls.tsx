'use client';

import React from 'react';
import { Play, Pause, RotateCcw, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScenarioTarget, getAnswerVisibilityPolicy } from '@/shared/scenarios/uniform-motion';

export type PlaybackSpeed = 0.25 | 0.5 | 1;

interface PlaybackControlsProps {
  isPlaying: boolean;
  isComplete: boolean;
  progressRatio: number;
  currentElapsedSeconds: number;
  totalDurationSeconds: number;
  target: ScenarioTarget;
  speed: PlaybackSpeed;
  onPlay: () => void;
  onPause: () => void;
  onReplay: () => void;
  onSpeedChange: (speed: PlaybackSpeed) => void;
  onSeek: (ratio: number) => void;
  labels: {
    play: string;
    pause: string;
    resume: string;
    replay: string;
    reset: string;
    speed: string;
    progress: string;
    completed: string;
    ready: string;
  };
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  isComplete,
  progressRatio,
  currentElapsedSeconds,
  totalDurationSeconds,
  target,
  speed,
  onPlay,
  onPause,
  onReplay,
  onSpeedChange,
  onSeek,
  labels,
}) => {
  const speeds: PlaybackSpeed[] = [0.25, 0.5, 1];
  const visibilityPolicy = getAnswerVisibilityPolicy(target);

  // Answer visibility policy for progress readout:
  // If target === 't', do NOT show duration in seconds to avoid leaking the answer!
  let progressText = `${Math.round(progressRatio * 100)}%`;
  if (!visibilityPolicy.hideDurationTimer) {
    progressText = `${currentElapsedSeconds.toFixed(1)}s / ${totalDurationSeconds.toFixed(1)}s (${Math.round(progressRatio * 100)}%)`;
  }

  return (
    <div className="w-full bg-[#FFFFFF] dark:bg-[#111D2D] border border-[#DFE8EF] dark:border-[#1E334D] rounded-2xl p-4 sm:p-5 flex flex-col gap-4 shadow-xs">
      {/* Top row: Progress bar / Scrubber */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
        <label htmlFor="playback-scrubber" className="text-xs font-semibold text-[#14243A] dark:text-[#E2E8F0] min-w-[70px] shrink-0">
          {labels.progress}:
        </label>
        <div className="flex items-center gap-3 w-full">
          <input
            id="playback-scrubber"
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={progressRatio}
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            className="w-full h-2.5 bg-[#DFE8EF] dark:bg-[#1E334D] rounded-lg appearance-none cursor-pointer accent-[#0F766E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 touch-manipulation"
            aria-label={labels.progress}
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={Math.round(progressRatio * 100) / 100}
            aria-valuetext={progressText}
          />
          <span className="text-xs font-mono font-bold text-[#0F766E] dark:text-[#14B8A6] min-w-[75px] text-right shrink-0">
            {progressText}
          </span>
        </div>
      </div>

      {/* Bottom row: Control buttons and speed selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#DFE8EF] dark:border-[#1E334D]">
        <div className="flex items-center gap-2.5">
          {/* Prominent Play / Pause Toggle (Primary action in teal) */}
          {isPlaying ? (
            <Button
              type="button"
              variant="default"
              size="default"
              onClick={onPause}
              className="min-h-[44px] px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold shadow-xs flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
              aria-label={labels.pause}
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>{labels.pause}</span>
            </Button>
          ) : (
            <Button
              type="button"
              variant="default"
              size="default"
              onClick={onPlay}
              className="min-h-[44px] px-5 bg-[#0F766E] hover:bg-[#0D655E] active:bg-[#115E59] text-white rounded-xl font-semibold shadow-xs flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 transition-colors cursor-pointer"
              aria-label={isComplete ? labels.replay : labels.play}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isComplete ? labels.replay : labels.play}</span>
            </Button>
          )}

          {/* Replay Button */}
          <Button
            type="button"
            variant="outline"
            size="default"
            onClick={onReplay}
            className="min-h-[44px] px-4 border border-[#DFE8EF] dark:border-[#1E334D] hover:bg-[#F0F6FA] dark:hover:bg-[#17273C] text-[#14243A] dark:text-[#CBD5E1] rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            aria-label={labels.replay}
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden xs:inline">{labels.replay}</span>
          </Button>
        </div>

        {/* Playback Speed Multipliers */}
        <div className="flex items-center gap-1.5" role="group" aria-label={labels.speed}>
          <span className="text-xs text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1 mr-1">
            <Gauge className="w-3.5 h-3.5 text-[#0F766E] dark:text-[#14B8A6]" />
            <span className="hidden sm:inline">{labels.speed}:</span>
          </span>
          {speeds.map((s) => {
            const isSelected = speed === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => onSpeedChange(s)}
                className={`min-h-[44px] min-w-[44px] px-2.5 py-1 text-xs font-mono font-bold rounded-xl transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 outline-none ${
                  isSelected
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'bg-[#F0F6FA] dark:bg-[#17273C] text-[#475569] dark:text-[#CBD5E1] hover:bg-[#DFE8EF] dark:hover:bg-[#1E334D] hover:text-[#14243A] dark:hover:text-[#FFFFFF]'
                }`}
                aria-label={`${labels.speed} ${s}x`}
                aria-pressed={isSelected}
              >
                {s}x
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

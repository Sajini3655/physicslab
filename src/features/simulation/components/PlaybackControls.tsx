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
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-3.5 shadow-sm">
      {/* Top row: Progress bar / Scrubber */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
        <label htmlFor="playback-scrubber" className="text-xs font-semibold text-slate-600 dark:text-slate-400 min-w-[65px] shrink-0">
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
            className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 touch-manipulation"
            aria-label={labels.progress}
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={Math.round(progressRatio * 100) / 100}
            aria-valuetext={progressText}
          />
          <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 min-w-[70px] text-right shrink-0">
            {progressText}
          </span>
        </div>
      </div>

      {/* Bottom row: Control buttons and speed selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          {/* Prominent Play / Pause Toggle */}
          {isPlaying ? (
            <Button
              type="button"
              variant="default"
              size="default"
              onClick={onPause}
              className="min-h-[44px] px-5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium shadow-sm flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
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
              className="min-h-[44px] px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-sm flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors cursor-pointer"
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
            className="min-h-[44px] px-4 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            aria-label={labels.replay}
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden xs:inline">{labels.replay}</span>
          </Button>
        </div>

        {/* Playback Speed Multipliers */}
        <div className="flex items-center gap-1.5" role="group" aria-label={labels.speed}>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
            <Gauge className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{labels.speed}:</span>
          </span>
          {speeds.map((s) => {
            const isSelected = speed === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => onSpeedChange(s)}
                className={`min-h-[44px] min-w-[44px] px-2.5 py-1 text-xs font-mono font-semibold rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 outline-none ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
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

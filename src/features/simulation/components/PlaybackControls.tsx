'use client';

import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
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

  // Answer visibility policy for progress label:
  // If target === 't', do NOT show duration in seconds to prevent revealing the unknown answer!
  let progressText = `${Math.round(progressRatio * 100)}%`;
  if (!visibilityPolicy.hideDurationTimer) {
    progressText = `${currentElapsedSeconds.toFixed(1)}s / ${totalDurationSeconds.toFixed(1)}s (${Math.round(progressRatio * 100)}%)`;
  }

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col gap-3 shadow-md">
      {/* Top row: Progress bar / Scrubber */}
      <div className="flex items-center gap-3 w-full">
        <span className="text-xs font-medium text-slate-400 min-w-[60px]">
          {labels.progress}
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progressRatio}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label={labels.progress}
          aria-valuemin={0}
          aria-valuemax={1}
          aria-valuenow={Math.round(progressRatio * 100) / 100}
          aria-valuetext={progressText}
        />
        <span className="text-xs font-mono font-medium text-sky-400 min-w-[70px] text-right">
          {progressText}
        </span>
      </div>

      {/* Bottom row: Control buttons and speed switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2">
          {/* Play / Pause Toggle */}
          {isPlaying ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={onPause}
              className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30"
              aria-label={labels.pause}
            >
              <Pause className="w-4 h-4" />
              <span>{labels.pause}</span>
            </Button>
          ) : (
            <Button
              variant="default"
              size="sm"
              onClick={onPlay}
              className="flex items-center gap-1.5 bg-sky-600 text-white hover:bg-sky-500 shadow-sm"
              aria-label={isComplete ? labels.replay : labels.play}
            >
              <Play className="w-4 h-4" />
              <span>{isComplete ? labels.replay : labels.play}</span>
            </Button>
          )}

          {/* Replay Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={onReplay}
            className="flex items-center gap-1.5 text-slate-300 border-slate-700 hover:bg-slate-800"
            aria-label={labels.replay}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{labels.replay}</span>
          </Button>
        </div>

        {/* Playback Speed Multipliers */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 mr-1">{labels.speed}:</span>
          {speeds.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSpeedChange(s)}
              className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                speed === s
                  ? 'bg-sky-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
              aria-label={`${labels.speed} ${s}x`}
              aria-pressed={speed === s}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

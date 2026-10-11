'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ConfirmedUniformMotionScenario } from '@/shared/scenarios/uniform-motion';
import { calculateSimulationFrame, solveUniformMotion } from '../physics/engine';
import { SimulationTrack } from './SimulationTrack';
import { PlaybackControls, PlaybackSpeed } from './PlaybackControls';
import { ScenarioInfoPanel } from './ScenarioInfoPanel';

export interface UniformMotionSimulationProps {
  scenario: ConfirmedUniformMotionScenario;
  showInfoPanel?: boolean;
  labels: {
    title: string;
    subtitle: string;
    scenarioDetails: string;
    question: string;
    object: string;
    axis: string;
    givenValues: string;
    targetUnknown: string;
    displacement: string;
    velocity: string;
    time: string;
    unknownValue: string;
    origin: string;
    startPoint: string;
    endPoint: string;
    visibilityNotice: string;
    controls: {
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
  };
}

export const UniformMotionSimulation: React.FC<UniformMotionSimulationProps> = ({
  scenario,
  showInfoPanel = false,
  labels,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<PlaybackSpeed>(1);
  const [elapsedSimulationSeconds, setElapsedSimulationSeconds] = useState(0);

  const rafIdRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const isPlayingRef = useRef(isPlaying);
  const speedRef = useRef(speed);
  const elapsedRef = useRef(elapsedSimulationSeconds);

  // Sync refs with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    elapsedRef.current = elapsedSimulationSeconds;
  }, [elapsedSimulationSeconds]);

  const isValidSnapshot = Boolean(
    scenario &&
    scenario.scenario &&
    typeof scenario.confirmedRevision === 'number' &&
    scenario.confirmationId === scenario.scenario.scenarioId
  );

  const physical = isValidSnapshot ? solveUniformMotion(scenario.scenario) : null;
  const totalDuration = physical ? Math.max(0, physical.time) : 0;
  const frame = isValidSnapshot
    ? calculateSimulationFrame(scenario, elapsedSimulationSeconds)
    : { currentDisplacementMetres: 0, currentElapsedSeconds: 0, progressRatio: 0, isComplete: false };

  const stopAnimation = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    lastTimestampRef.current = null;
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    stopAnimation();
  }, [stopAnimation]);

  const handlePlay = useCallback(() => {
    if (frame.isComplete) {
      // If completed, replay from start
      setElapsedSimulationSeconds(0);
      elapsedRef.current = 0;
    }
    setIsPlaying(true);
    lastTimestampRef.current = null;
  }, [frame.isComplete]);

  const handleReplay = useCallback(() => {
    stopAnimation();
    setElapsedSimulationSeconds(0);
    elapsedRef.current = 0;
    setIsPlaying(true);
    lastTimestampRef.current = null;
  }, [stopAnimation]);

  const handleSeek = useCallback(
    (ratio: number) => {
      stopAnimation();
      setIsPlaying(false);
      const targetSeconds = Math.max(0, ratio * totalDuration);
      setElapsedSimulationSeconds(targetSeconds);
      elapsedRef.current = targetSeconds;
    },
    [stopAnimation, totalDuration]
  );

  const handleSpeedChange = useCallback((newSpeed: PlaybackSpeed) => {
    setSpeed(newSpeed);
  }, []);

  // Animation frame loop
  useEffect(() => {
    if (!isPlaying) {
      stopAnimation();
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaWallSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const deltaSimSeconds = deltaWallSeconds * speedRef.current;
      const nextElapsed = elapsedRef.current + deltaSimSeconds;

      if (nextElapsed >= totalDuration) {
        setElapsedSimulationSeconds(totalDuration);
        elapsedRef.current = totalDuration;
        setIsPlaying(false);
        stopAnimation();
        return;
      }

      setElapsedSimulationSeconds(nextElapsed);
      elapsedRef.current = nextElapsed;

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      stopAnimation();
    };
  }, [isPlaying, totalDuration, stopAnimation]);

  // Tab visibility handling: Auto-pause when tab is hidden, do NOT auto-resume
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlayingRef.current) {
        handlePause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handlePause]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlayingRef.current) {
          handlePause();
        } else {
          handlePlay();
        }
      } else if (e.code === 'KeyR') {
        e.preventDefault();
        handleReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePlay, handlePause, handleReplay]);

  if (!isValidSnapshot || !physical) {
    return (
      <div className="p-6 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-800 dark:text-rose-200">
        <p className="font-semibold text-sm">Invalid Scenario Snapshot</p>
        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">
          Simulation requires an explicitly confirmed scenario snapshot.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* SVG Motion Canvas */}
      <SimulationTrack
        scenario={scenario}
        currentDisplacementMetres={frame.currentDisplacementMetres}
        labels={{
          origin: labels.origin,
          startPoint: labels.startPoint,
          endPoint: labels.endPoint,
          object: labels.object,
        }}
      />

      {/* Playback Controls */}
      <PlaybackControls
        isPlaying={isPlaying}
        isComplete={frame.isComplete}
        progressRatio={frame.progressRatio}
        currentElapsedSeconds={frame.currentElapsedSeconds}
        totalDurationSeconds={totalDuration}
        target={scenario.scenario.target}
        speed={speed}
        onPlay={handlePlay}
        onPause={handlePause}
        onReplay={handleReplay}
        onSpeedChange={handleSpeedChange}
        onSeek={handleSeek}
        labels={labels.controls}
      />

      {/* Optional Standalone Scenario Info Panel */}
      {showInfoPanel && (
        <ScenarioInfoPanel
          scenario={scenario}
          labels={{
            scenarioDetails: labels.scenarioDetails,
            question: labels.question,
            object: labels.object,
            axis: labels.axis,
            givenValues: labels.givenValues,
            targetUnknown: labels.targetUnknown,
            displacement: labels.displacement,
            velocity: labels.velocity,
            time: labels.time,
            unknownValue: labels.unknownValue,
            visibilityNotice: labels.visibilityNotice,
          }}
        />
      )}
    </div>
  );
};

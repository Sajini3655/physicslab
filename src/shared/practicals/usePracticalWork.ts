'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';
import {
  PracticalRecord,
  savePracticalRecord,
  resetPracticalRecord,
  PRACTICAL_WORK_STORAGE_KEY,
  PRACTICAL_WORK_UPDATED_EVENT,
  sanitizePracticalWorkState,
} from './practicalStore';

const listeners = new Set<() => void>();

function subscribePracticalWork(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === PRACTICAL_WORK_STORAGE_KEY) {
      callback();
    }
  };

  const handleCustomEvent = () => {
    callback();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
    window.addEventListener(PRACTICAL_WORK_UPDATED_EVENT, handleCustomEvent);
  }

  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener(PRACTICAL_WORK_UPDATED_EVENT, handleCustomEvent);
    }
  };
}

function getStoredSnapshot(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(PRACTICAL_WORK_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

interface UsePracticalWorkOptions<
  TObs extends Record<string, unknown> = Record<string, unknown>,
  TCalc extends Record<string, string> = Record<string, string>,
> {
  experimentId: string;
  defaultMode?: 'guided' | 'independent';
  defaultZeroError?: string;
  defaultObservations?: TObs;
  defaultCalculations?: TCalc;
}

export function usePracticalWork<
  TObs extends Record<string, unknown> = Record<string, unknown>,
  TCalc extends Record<string, string> = Record<string, string>,
>({
  experimentId,
  defaultMode = 'guided',
  defaultZeroError = '0.0',
  defaultObservations = {} as TObs,
  defaultCalculations = {} as TCalc,
}: UsePracticalWorkOptions<TObs, TCalc>) {
  const rawSnapshot = useSyncExternalStore(
    subscribePracticalWork,
    getStoredSnapshot,
    () => ''
  );

  const isHydrated = typeof window !== 'undefined';

  const record: PracticalRecord | undefined = useMemo(() => {
    if (!rawSnapshot) return undefined;
    try {
      const parsed = JSON.parse(rawSnapshot);
      const state = sanitizePracticalWorkState(parsed);
      return state.records[experimentId];
    } catch {
      return undefined;
    }
  }, [rawSnapshot, experimentId]);

  const mode = record?.mode ?? defaultMode;
  const zeroError = record?.zeroError ?? defaultZeroError;

  const observations = useMemo<TObs>(() => {
    return {
      ...defaultObservations,
      ...(record?.observations as Partial<TObs> | undefined),
    };
  }, [defaultObservations, record?.observations]);

  const calculations = useMemo<TCalc>(() => {
    return {
      ...defaultCalculations,
      ...(record?.calculations as Partial<TCalc> | undefined),
    };
  }, [defaultCalculations, record?.calculations]);

  const calculationResults = record?.calculationResults;
  const calculationFeedback = record?.calculationFeedback;
  const rubricScores = useMemo(() => record?.rubricScores ?? {}, [record?.rubricScores]);
  const conclusionAnswers = useMemo(() => record?.conclusionAnswers ?? {}, [record?.conclusionAnswers]);
  const isCompleted = record?.isCompleted ?? false;

  const setMode = useCallback(
    (newMode: 'guided' | 'independent') => {
      savePracticalRecord({ experimentId, mode: newMode });
    },
    [experimentId]
  );

  const setZeroError = useCallback(
    (ze: string) => {
      savePracticalRecord({ experimentId, zeroError: ze });
    },
    [experimentId]
  );

  const updateObservation = useCallback(
    (key: string, value: unknown) => {
      savePracticalRecord({
        experimentId,
        observations: { [key]: value },
      });
    },
    [experimentId]
  );

  const updateObservations = useCallback(
    (newObs: Partial<TObs>) => {
      savePracticalRecord({
        experimentId,
        observations: newObs as Record<string, unknown>,
      });
    },
    [experimentId]
  );

  const updateCalculation = useCallback(
    (key: string, value: string) => {
      savePracticalRecord({
        experimentId,
        calculations: { [key]: value },
      });
    },
    [experimentId]
  );

  const updateCalculations = useCallback(
    (newCalcs: Partial<TCalc>) => {
      savePracticalRecord({
        experimentId,
        calculations: newCalcs as Record<string, string>,
      });
    },
    [experimentId]
  );

  const setCalculationCheck = useCallback(
    (results: Record<string, boolean>, feedback?: Record<string, { en: string; si: string }>) => {
      savePracticalRecord({
        experimentId,
        calculationResults: results,
        calculationFeedback: feedback,
      });
    },
    [experimentId]
  );

  const updateRubricScore = useCallback(
    (rubricKey: string, score: number) => {
      savePracticalRecord({
        experimentId,
        rubricScores: { [rubricKey]: score },
      });
    },
    [experimentId]
  );

  const updateConclusionAnswer = useCallback(
    (key: string, answer: string) => {
      savePracticalRecord({
        experimentId,
        conclusionAnswers: { [key]: answer },
      });
    },
    [experimentId]
  );

  const setCompleted = useCallback(
    (completed: boolean) => {
      savePracticalRecord({
        experimentId,
        isCompleted: completed,
      });
    },
    [experimentId]
  );

  const loadSampleObservations = useCallback(
    (sampleObs: Partial<TObs>, sampleZe?: string) => {
      savePracticalRecord({
        experimentId,
        observations: sampleObs as Record<string, unknown>,
        zeroError: sampleZe,
      });
    },
    [experimentId]
  );

  const reset = useCallback(() => {
    resetPracticalRecord(experimentId);
  }, [experimentId]);

  return {
    isHydrated,
    mode,
    setMode,
    zeroError,
    setZeroError,
    observations,
    updateObservation,
    updateObservations,
    calculations,
    updateCalculation,
    updateCalculations,
    calculationResults,
    calculationFeedback,
    setCalculationCheck,
    rubricScores,
    updateRubricScore,
    conclusionAnswers,
    updateConclusionAnswer,
    isCompleted,
    setCompleted,
    loadSampleObservations,
    reset,
  };
}

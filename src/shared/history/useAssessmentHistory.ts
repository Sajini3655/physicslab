'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';
import {
  HISTORY_STORAGE_KEY,
  HISTORY_CHANGE_EVENT,
  DEFAULT_HISTORY_STATE,
  AssessmentHistoryState,
  AssessmentAttemptRecord,
  RevisionState,
  parseStoredHistory,
  recordAssessmentAttempt,
  updateAttemptRubricScore,
  updateAttemptRevisionState,
  saveStoredHistory,
} from './historyStore';

const listeners = new Set<() => void>();

function subscribeHistory(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === HISTORY_STORAGE_KEY) {
      callback();
    }
  };

  const handleCustomEvent = () => {
    callback();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
    window.addEventListener(HISTORY_CHANGE_EVENT, handleCustomEvent);
  }

  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener(HISTORY_CHANGE_EVENT, handleCustomEvent);
    }
  };
}

function getStoredSnapshot(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(HISTORY_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

export function useAssessmentHistory() {
  const rawSnapshot = useSyncExternalStore(
    subscribeHistory,
    getStoredSnapshot,
    () => '' // SSR snapshot: empty string
  );

  const state = useMemo<AssessmentHistoryState>(() => {
    if (!rawSnapshot) return DEFAULT_HISTORY_STATE;
    return parseStoredHistory(rawSnapshot);
  }, [rawSnapshot]);

  const attempts = state.attempts;

  const getAttempt = useCallback(
    (attemptId: string): AssessmentAttemptRecord | undefined => {
      return attempts.find((a) => a.id === attemptId);
    },
    [attempts]
  );

  const getAttemptsForUnit = useCallback(
    (unitIdOrSlug: string): AssessmentAttemptRecord[] => {
      return attempts.filter(
        (a) => a.unitId === unitIdOrSlug || a.unitSlug === unitIdOrSlug
      );
    },
    [attempts]
  );

  const getLatestAttemptForUnit = useCallback(
    (unitIdOrSlug: string): AssessmentAttemptRecord | undefined => {
      const unitAttempts = attempts.filter(
        (a) => a.unitId === unitIdOrSlug || a.unitSlug === unitIdOrSlug
      );
      if (unitAttempts.length === 0) return undefined;
      // Already sorted newest-first in attempts list, but fallback to submittedAt
      return unitAttempts.reduce((latest, current) =>
        current.submittedAt > latest.submittedAt ? current : latest
      );
    },
    [attempts]
  );

  const recordAttempt = useCallback((attempt: AssessmentAttemptRecord) => {
    recordAssessmentAttempt(attempt);
  }, []);

  const updateRubric = useCallback(
    (attemptId: string, questionId: string, rubricScores: Record<string, number>) => {
      updateAttemptRubricScore(attemptId, questionId, rubricScores);
    },
    []
  );

  const updateRevision = useCallback(
    (attemptId: string, revisionUpdate: Partial<RevisionState>) => {
      updateAttemptRevisionState(attemptId, revisionUpdate);
    },
    []
  );

  const clearHistory = useCallback(() => {
    saveStoredHistory(DEFAULT_HISTORY_STATE);
  }, []);

  return {
    state,
    attempts,
    getAttempt,
    getAttemptsForUnit,
    getLatestAttemptForUnit,
    recordAttempt,
    updateRubric,
    updateRevision,
    clearHistory,
  };
}

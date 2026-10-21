'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';
import {
  recordAssessmentAttempt,
  buildQuestionAttemptDetails,
  calculateAttemptScore,
  resolveUnitInfo,
  updateAttemptRubricScore,
} from '@/shared/history';

export interface AssessmentSessionState<TQuestion, TResult> {
  questions: TQuestion[];
  answers: Record<string, string>;
  submitted: boolean;
  result: TResult | null;
  showSolutions: Record<string, boolean>;
  attemptId?: string;
  submittedAt?: number;
  rubricScores?: Record<string, Record<string, number>>;
}

export interface UseAssessmentSessionOptions<TQuestion, TResult> {
  storageKey: string;
  generateQuestions: () => TQuestion[];
  evaluateAssessment: (questions: TQuestion[], answers: Record<string, string>) => TResult;
}

const listenersMap = new Map<string, Set<() => void>>();

function subscribeKey(fullKey: string, callback: () => void) {
  if (!listenersMap.has(fullKey)) {
    listenersMap.set(fullKey, new Set());
  }
  const set = listenersMap.get(fullKey)!;
  set.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === fullKey) {
      callback();
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
  }

  return () => {
    set.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
    }
  };
}

function notifyKey(fullKey: string) {
  const set = listenersMap.get(fullKey);
  if (set) {
    set.forEach((cb) => cb());
  }
}

function getStoredSnapshot(fullKey: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return sessionStorage.getItem(fullKey) || '';
  } catch {
    return '';
  }
}

function generateAttemptId(storageKey: string): string {
  const rand = Math.random().toString(36).substring(2, 8);
  return `attempt-${storageKey}-${Date.now()}-${rand}`;
}

export function useAssessmentSession<TQuestion extends { id: string }, TResult>({
  storageKey,
  generateQuestions,
  evaluateAssessment,
}: UseAssessmentSessionOptions<TQuestion, TResult>) {
  const fullKey = `physicslab_assessment_${storageKey}`;

  const subscribe = useCallback(
    (onStoreChange: () => void) => subscribeKey(fullKey, onStoreChange),
    [fullKey]
  );

  const rawSnapshot = useSyncExternalStore(
    subscribe,
    () => getStoredSnapshot(fullKey),
    () => ''
  );

  const fallbackQuestions = useMemo(() => generateQuestions(), [generateQuestions]);

  const activeState = useMemo<AssessmentSessionState<TQuestion, TResult>>(() => {
    if (rawSnapshot) {
      try {
        const parsed = JSON.parse(rawSnapshot);
        if (Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          return {
            questions: parsed.questions,
            answers: parsed.answers || {},
            submitted: !!parsed.submitted,
            result: parsed.result || null,
            showSolutions: parsed.showSolutions || {},
            attemptId: typeof parsed.attemptId === 'string' ? parsed.attemptId : undefined,
            submittedAt: typeof parsed.submittedAt === 'number' ? parsed.submittedAt : undefined,
            rubricScores: parsed.rubricScores || {},
          };
        }
      } catch {
        // Fall back to fresh initial questions if corrupted
      }
    }
    return {
      questions: fallbackQuestions,
      answers: {},
      submitted: false,
      result: null,
      showSolutions: {},
      attemptId: undefined,
      submittedAt: undefined,
      rubricScores: {},
    };
  }, [rawSnapshot, fallbackQuestions]);

  const saveToStorage = useCallback(
    (nextState: AssessmentSessionState<TQuestion, TResult>) => {
      if (typeof window === 'undefined') return;
      try {
        sessionStorage.setItem(fullKey, JSON.stringify(nextState));
        notifyKey(fullKey);
      } catch (err) {
        console.error('Failed to save assessment to sessionStorage:', err);
      }
    },
    [fullKey]
  );

  const handleSelectOption = useCallback(
    (qId: string, optionId: string) => {
      if (activeState.submitted) return;
      const nextAnswers = { ...activeState.answers, [qId]: optionId };
      saveToStorage({ ...activeState, answers: nextAnswers });
    },
    [activeState, saveToStorage]
  );

  const handleNumericalChange = useCallback(
    (qId: string, val: string) => {
      if (activeState.submitted) return;
      const nextAnswers = { ...activeState.answers, [qId]: val };
      saveToStorage({ ...activeState, answers: nextAnswers });
    },
    [activeState, saveToStorage]
  );

  const setAnswers = useCallback(
    (updater: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => {
      if (activeState.submitted) return;
      const nextAnswers = typeof updater === 'function' ? updater(activeState.answers) : updater;
      saveToStorage({ ...activeState, answers: nextAnswers });
    },
    [activeState, saveToStorage]
  );

  const handleSubmit = useCallback(() => {
    const res = evaluateAssessment(activeState.questions, activeState.answers);
    const attemptId = activeState.attemptId || generateAttemptId(storageKey);
    const submittedAt = activeState.submittedAt || Date.now();

    try {
      const questionDetails = buildQuestionAttemptDetails(
        activeState.questions,
        activeState.answers,
        activeState.rubricScores
      );
      const scoreSummary = calculateAttemptScore(questionDetails);
      const unitInfo = resolveUnitInfo(storageKey);

      recordAssessmentAttempt({
        id: attemptId,
        unitId: unitInfo.unitId,
        unitSlug: unitInfo.slug,
        unitSyllabusOrder: unitInfo.syllabusOrder,
        submittedAt,
        totalQuestions: activeState.questions.length,
        answeredQuestions: Object.values(activeState.answers).filter((a) => a && a.trim() !== '').length,
        score: scoreSummary,
        questions: questionDetails,
      });
    } catch (err) {
      console.warn('Failed to record assessment to history:', err);
    }

    saveToStorage({
      ...activeState,
      attemptId,
      submittedAt,
      submitted: true,
      result: res,
    });
  }, [activeState, evaluateAssessment, saveToStorage, storageKey]);

  const handleReset = useCallback(() => {
    const freshQuestions = generateQuestions();
    const freshAttemptId = generateAttemptId(storageKey);
    const freshState: AssessmentSessionState<TQuestion, TResult> = {
      questions: freshQuestions,
      answers: {},
      submitted: false,
      result: null,
      showSolutions: {},
      attemptId: freshAttemptId,
      submittedAt: undefined,
      rubricScores: {},
    };
    saveToStorage(freshState);
  }, [generateQuestions, saveToStorage, storageKey]);

  const updateRubricScore = useCallback(
    (questionId: string, rubricScores: Record<string, number>) => {
      const nextRubrics = {
        ...(activeState.rubricScores || {}),
        [questionId]: rubricScores,
      };
      const attemptId = activeState.attemptId || generateAttemptId(storageKey);

      saveToStorage({
        ...activeState,
        attemptId,
        rubricScores: nextRubrics,
      });

      if (activeState.submitted) {
        try {
          updateAttemptRubricScore(attemptId, questionId, rubricScores);
        } catch (err) {
          console.warn('Failed to update rubric score in history:', err);
        }
      }
    },
    [activeState, saveToStorage, storageKey]
  );

  const toggleSolution = useCallback(
    (qId: string) => {
      const nextSolutions = {
        ...activeState.showSolutions,
        [qId]: !activeState.showSolutions[qId],
      };
      saveToStorage({ ...activeState, showSolutions: nextSolutions });
    },
    [activeState, saveToStorage]
  );

  const answeredCount = useMemo(
    () => Object.keys(activeState.answers).filter((k) => activeState.answers[k]?.trim() !== '').length,
    [activeState.answers]
  );

  return {
    questions: activeState.questions,
    answers: activeState.answers,
    setAnswers,
    submitted: activeState.submitted,
    result: activeState.result,
    showSolutions: activeState.showSolutions,
    attemptId: activeState.attemptId,
    rubricScores: activeState.rubricScores,
    handleSelectOption,
    handleNumericalChange,
    handleSubmit,
    handleReset,
    updateRubricScore,
    toggleSolution,
    answeredCount,
  };
}

'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';

export interface AssessmentSessionState<TQuestion, TResult> {
  questions: TQuestion[];
  answers: Record<string, string>;
  submitted: boolean;
  result: TResult | null;
  showSolutions: Record<string, boolean>;
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
    saveToStorage({ ...activeState, submitted: true, result: res });
  }, [activeState, evaluateAssessment, saveToStorage]);

  const handleReset = useCallback(() => {
    const freshQuestions = generateQuestions();
    const freshState: AssessmentSessionState<TQuestion, TResult> = {
      questions: freshQuestions,
      answers: {},
      submitted: false,
      result: null,
      showSolutions: {},
    };
    saveToStorage(freshState);
  }, [generateQuestions, saveToStorage]);

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
    handleSelectOption,
    handleNumericalChange,
    handleSubmit,
    handleReset,
    toggleSolution,
    answeredCount,
  };
}

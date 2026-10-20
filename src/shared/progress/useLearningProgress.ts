'use client';

import { useSyncExternalStore, useCallback, useMemo } from 'react';
import {
  PROGRESS_STORAGE_KEY,
  DEFAULT_PROGRESS_STATE,
  LearningProgressState,
  parseStoredProgress,
  calculateUnitProgress,
  resolveBookmarkedLessons,
} from './progressStore';
import { getAllLessons, getLesson, getUnitBySlug } from '@/shared/curriculum';

const listeners = new Set<() => void>();

function subscribeProgress(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === PROGRESS_STORAGE_KEY) {
      callback();
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
  }

  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
    }
  };
}

function notifyProgress() {
  listeners.forEach((cb) => cb());
}

function getStoredSnapshot(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(PROGRESS_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

export function useLearningProgress() {
  const rawSnapshot = useSyncExternalStore(
    subscribeProgress,
    getStoredSnapshot,
    () => '' // SSR snapshot: empty string
  );

  const state = useMemo<LearningProgressState>(() => {
    if (!rawSnapshot) return DEFAULT_PROGRESS_STATE;
    return parseStoredProgress(rawSnapshot);
  }, [rawSnapshot]);

  const saveState = useCallback((nextState: LearningProgressState) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(nextState));
      notifyProgress();
    } catch (err) {
      console.warn('Failed to save learning progress to localStorage:', err);
    }
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => state.completedLessonIds.includes(lessonId),
    [state.completedLessonIds]
  );

  const isBookmarked = useCallback(
    (lessonId: string) => state.bookmarkedLessonIds.includes(lessonId),
    [state.bookmarkedLessonIds]
  );

  const toggleCompleted = useCallback(
    (lessonId: string) => {
      const current = parseStoredProgress(getStoredSnapshot());
      const exists = current.completedLessonIds.includes(lessonId);
      const nextCompleted = exists
        ? current.completedLessonIds.filter((id) => id !== lessonId)
        : [...current.completedLessonIds, lessonId];
      saveState({
        ...current,
        completedLessonIds: nextCompleted,
      });
    },
    [saveState]
  );

  const setCompleted = useCallback(
    (lessonId: string, completed: boolean) => {
      const current = parseStoredProgress(getStoredSnapshot());
      const exists = current.completedLessonIds.includes(lessonId);
      if (completed && !exists) {
        saveState({
          ...current,
          completedLessonIds: [...current.completedLessonIds, lessonId],
        });
      } else if (!completed && exists) {
        saveState({
          ...current,
          completedLessonIds: current.completedLessonIds.filter((id) => id !== lessonId),
        });
      }
    },
    [saveState]
  );

  const toggleBookmarked = useCallback(
    (lessonId: string) => {
      const current = parseStoredProgress(getStoredSnapshot());
      const exists = current.bookmarkedLessonIds.includes(lessonId);
      const nextBookmarked = exists
        ? current.bookmarkedLessonIds.filter((id) => id !== lessonId)
        : [...current.bookmarkedLessonIds, lessonId];
      saveState({
        ...current,
        bookmarkedLessonIds: nextBookmarked,
      });
    },
    [saveState]
  );

  const setBookmarked = useCallback(
    (lessonId: string, bookmarked: boolean) => {
      const current = parseStoredProgress(getStoredSnapshot());
      const exists = current.bookmarkedLessonIds.includes(lessonId);
      if (bookmarked && !exists) {
        saveState({
          ...current,
          bookmarkedLessonIds: [...current.bookmarkedLessonIds, lessonId],
        });
      } else if (!bookmarked && exists) {
        saveState({
          ...current,
          bookmarkedLessonIds: current.bookmarkedLessonIds.filter((id) => id !== lessonId),
        });
      }
    },
    [saveState]
  );

  const recordVisit = useCallback(
    (unitSlug: string, lessonSlug: string) => {
      const lesson = getLesson(unitSlug, lessonSlug);
      if (!lesson) return;

      const current = parseStoredProgress(getStoredSnapshot());
      if (
        current.lastVisited?.unitSlug === unitSlug &&
        current.lastVisited?.lessonSlug === lessonSlug
      ) {
        return; // Avoid unnecessary re-writes and storage events
      }

      // Opening a lesson does NOT mark it complete; only records last visited
      saveState({
        ...current,
        lastVisited: {
          unitSlug,
          lessonSlug,
          lessonId: lesson.id,
          visitedAt: Date.now(),
        },
      });
    },
    [saveState]
  );

  const getUnitProgress = useCallback(
    (unitSlug: string) => {
      const unit = getUnitBySlug(unitSlug);
      if (!unit) return { completed: 0, total: 0, percentage: 0 };
      return calculateUnitProgress(unit, state.completedLessonIds);
    },
    [state.completedLessonIds]
  );

  const bookmarkedLessons = useMemo(
    () => resolveBookmarkedLessons(state.bookmarkedLessonIds),
    [state.bookmarkedLessonIds]
  );

  const totalLessons = useMemo(() => getAllLessons().length, []);
  const totalCompleted = state.completedLessonIds.length;
  const overallPercentage = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const clearProgress = useCallback(() => {
    saveState(DEFAULT_PROGRESS_STATE);
  }, [saveState]);

  return {
    state,
    completedLessonIds: state.completedLessonIds,
    bookmarkedLessonIds: state.bookmarkedLessonIds,
    bookmarkedLessons,
    lastVisited: state.lastVisited,
    isCompleted,
    isBookmarked,
    toggleCompleted,
    setCompleted,
    toggleBookmarked,
    setBookmarked,
    recordVisit,
    getUnitProgress,
    totalCompleted,
    totalLessons,
    overallPercentage,
    clearProgress,
  };
}

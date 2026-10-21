import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  DEFAULT_PROGRESS_STATE,
  sanitizeProgressState,
  parseStoredProgress,
  calculateUnitProgress,
  resolveBookmarkedLessons,
  PROGRESS_STORAGE_KEY,
} from '../progressStore';
import { getAllUnits } from '@/shared/curriculum';

describe('Learning Progress Store Logic & Sanitization', () => {
  const mockStorage: Record<string, string> = {};

  beforeEach(() => {
    for (const key in mockStorage) {
      delete mockStorage[key];
    }

    vi.stubGlobal('localStorage', {
      getItem: (k: string) => mockStorage[k] || null,
      setItem: (k: string, v: string) => {
        mockStorage[k] = v;
      },
      removeItem: (k: string) => {
        delete mockStorage[k];
      },
      clear: () => {
        for (const key in mockStorage) delete mockStorage[key];
      },
    });
  });

  it('returns default empty state when given null or undefined input', () => {
    expect(parseStoredProgress(null)).toEqual(DEFAULT_PROGRESS_STATE);
    expect(parseStoredProgress('')).toEqual(DEFAULT_PROGRESS_STATE);
    expect(sanitizeProgressState(null)).toEqual(DEFAULT_PROGRESS_STATE);
    expect(sanitizeProgressState(undefined)).toEqual(DEFAULT_PROGRESS_STATE);
  });

  it('handles corrupted JSON strings gracefully without throwing', () => {
    expect(parseStoredProgress('{ invalid json ...')).toEqual(DEFAULT_PROGRESS_STATE);
    expect(parseStoredProgress('12345')).toEqual(DEFAULT_PROGRESS_STATE);
    expect(parseStoredProgress('["not", "an", "object"]')).toEqual(DEFAULT_PROGRESS_STATE);
  });

  it('resets to default if version is unsupported or mismatched', () => {
    const raw = {
      version: 99,
      completedLessonIds: ['lesson-1-1'],
      bookmarkedLessonIds: [],
      lastVisited: null,
    };
    expect(sanitizeProgressState(raw)).toEqual(DEFAULT_PROGRESS_STATE);
  });

  it('filters out invalid or removed lesson IDs while preserving valid ones', () => {
    const raw = {
      version: 1,
      completedLessonIds: ['lesson-1-1', 'non-existent-fake-id', 1234, null],
      bookmarkedLessonIds: ['lesson-2-1', 'deleted-lesson-xyz'],
      lastVisited: null,
    };

    const sanitized = sanitizeProgressState(raw);
    expect(sanitized.completedLessonIds).toEqual(['lesson-1-1']);
    expect(sanitized.bookmarkedLessonIds).toEqual(['lesson-2-1']);
  });

  it('validates lastVisited against curriculum catalogue', () => {
    // Valid lesson
    const validRaw = {
      version: 1,
      completedLessonIds: [],
      bookmarkedLessonIds: [],
      lastVisited: {
        unitSlug: 'mechanics',
        lessonSlug: 'projectiles',
        visitedAt: 123456789,
      },
    };
    const validSanitized = sanitizeProgressState(validRaw);
    expect(validSanitized.lastVisited).not.toBeNull();
    expect(validSanitized.lastVisited?.unitSlug).toBe('mechanics');
    expect(validSanitized.lastVisited?.lessonSlug).toBe('projectiles');

    // Invalid/removed lesson
    const invalidRaw = {
      version: 1,
      completedLessonIds: [],
      bookmarkedLessonIds: [],
      lastVisited: {
        unitSlug: 'mechanics',
        lessonSlug: 'phantom-lesson-that-does-not-exist',
        visitedAt: 123456789,
      },
    };
    const invalidSanitized = sanitizeProgressState(invalidRaw);
    expect(invalidSanitized.lastVisited).toBeNull();
  });

  it('calculates unit progress accurately from actual curriculum', () => {
    const units = getAllUnits();
    const unit1 = units.find((u) => u.slug === 'measurement')!;
    expect(unit1).toBeDefined();

    // With 0 completed
    const zeroProgress = calculateUnitProgress(unit1, []);
    expect(zeroProgress.completed).toBe(0);
    expect(zeroProgress.total).toBe(unit1.lessons.length);
    expect(zeroProgress.percentage).toBe(0);

    // With 1 completed
    const firstLessonId = unit1.lessons[0].id;
    const partialProgress = calculateUnitProgress(unit1, [firstLessonId]);
    expect(partialProgress.completed).toBe(1);
    expect(partialProgress.percentage).toBe(Math.round((1 / unit1.lessons.length) * 100));

    // With all completed
    const allIds = unit1.lessons.map((l) => l.id);
    const fullProgress = calculateUnitProgress(unit1, allIds);
    expect(fullProgress.completed).toBe(unit1.lessons.length);
    expect(fullProgress.percentage).toBe(100);
  });

  it('resolves bookmarked lessons with full unit and lesson metadata', () => {
    const units = getAllUnits();
    const unit1 = units[0];
    const lesson1 = unit1.lessons[0];

    const resolved = resolveBookmarkedLessons([lesson1.id, 'fake-id-999']);
    expect(resolved.length).toBe(1);
    expect(resolved[0].lesson.id).toBe(lesson1.id);
    expect(resolved[0].unit.slug).toBe(unit1.slug);
  });

  it('keeps progress storage key isolated from assessment session storage', () => {
    expect(PROGRESS_STORAGE_KEY).toBe('physicslab_learning_progress_v1');
    expect(PROGRESS_STORAGE_KEY).not.toContain('session');
    expect(PROGRESS_STORAGE_KEY).not.toContain('assessment');
  });
});

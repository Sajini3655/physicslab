import {
  getAllLessons,
  getLesson,
  getUnitBySlug,
  LessonDefinition,
  UnitDefinition,
} from '@/shared/curriculum';

export const PROGRESS_STORAGE_KEY = 'physicslab_learning_progress_v1';

export interface LastVisitedLesson {
  unitSlug: string;
  lessonSlug: string;
  lessonId: string;
  visitedAt: number;
}

export interface LearningProgressState {
  version: 1;
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  lastVisited: LastVisitedLesson | null;
}

export const DEFAULT_PROGRESS_STATE: LearningProgressState = {
  version: 1,
  completedLessonIds: [],
  bookmarkedLessonIds: [],
  lastVisited: null,
};

/**
 * Validates and sanitizes raw progress state.
 * Filters out nonexistent lesson IDs to guarantee integrity if curriculum changes.
 */
export function sanitizeProgressState(raw: unknown): LearningProgressState {
  if (!raw || typeof raw !== 'object') {
    return DEFAULT_PROGRESS_STATE;
  }

  const obj = raw as Record<string, unknown>;

  // Check version (only version 1 is supported currently)
  if (obj.version !== 1) {
    return DEFAULT_PROGRESS_STATE;
  }

  const allLessons = getAllLessons();
  const validLessonIdSet = new Set(allLessons.map((l) => l.id));

  // Sanitize completedLessonIds: must be array of valid strings
  const completedLessonIds: string[] = Array.isArray(obj.completedLessonIds)
    ? Array.from(
        new Set(
          obj.completedLessonIds.filter(
            (id): id is string => typeof id === 'string' && validLessonIdSet.has(id)
          )
        )
      )
    : [];

  // Sanitize bookmarkedLessonIds: must be array of valid strings
  const bookmarkedLessonIds: string[] = Array.isArray(obj.bookmarkedLessonIds)
    ? Array.from(
        new Set(
          obj.bookmarkedLessonIds.filter(
            (id): id is string => typeof id === 'string' && validLessonIdSet.has(id)
          )
        )
      )
    : [];

  // Sanitize lastVisited: must be valid unit and lesson
  let lastVisited: LastVisitedLesson | null = null;
  if (obj.lastVisited && typeof obj.lastVisited === 'object') {
    const lv = obj.lastVisited as Record<string, unknown>;
    if (
      typeof lv.unitSlug === 'string' &&
      typeof lv.lessonSlug === 'string'
    ) {
      const validLesson = getLesson(lv.unitSlug, lv.lessonSlug);
      if (validLesson) {
        lastVisited = {
          unitSlug: lv.unitSlug,
          lessonSlug: lv.lessonSlug,
          lessonId: validLesson.id,
          visitedAt: typeof lv.visitedAt === 'number' ? lv.visitedAt : Date.now(),
        };
      }
    }
  }

  return {
    version: 1,
    completedLessonIds,
    bookmarkedLessonIds,
    lastVisited,
  };
}

/**
 * Parses raw JSON string into sanitized state.
 */
export function parseStoredProgress(rawJson: string | null): LearningProgressState {
  if (!rawJson) return DEFAULT_PROGRESS_STATE;
  try {
    const parsed = JSON.parse(rawJson);
    return sanitizeProgressState(parsed);
  } catch {
    return DEFAULT_PROGRESS_STATE;
  }
}

/**
 * Retrieves progress for a specific unit given list of completed IDs.
 */
export function calculateUnitProgress(
  unit: UnitDefinition,
  completedLessonIds: string[]
): { completed: number; total: number; percentage: number } {
  const total = unit.lessons.length;
  if (total === 0) return { completed: 0, total: 0, percentage: 0 };

  const completedSet = new Set(completedLessonIds);
  const completed = unit.lessons.filter((l) => completedSet.has(l.id)).length;
  const percentage = Math.round((completed / total) * 100);

  return { completed, total, percentage };
}

/**
 * Resolves full lesson definitions for a list of bookmarked lesson IDs.
 */
export function resolveBookmarkedLessons(
  bookmarkedLessonIds: string[]
): Array<{ unit: UnitDefinition; lesson: LessonDefinition }> {
  const result: Array<{ unit: UnitDefinition; lesson: LessonDefinition }> = [];
  const idSet = new Set(bookmarkedLessonIds);

  const allLessons = getAllLessons();
  for (const lesson of allLessons) {
    if (idSet.has(lesson.id)) {
      const unit = getUnitBySlug(lesson.unitSlug);
      if (unit) {
        result.push({ unit, lesson });
      }
    }
  }

  return result;
}

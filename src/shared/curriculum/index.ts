import { UNITS } from './catalogue';
import { UnitDefinition, LessonDefinition, Locale } from './types';

export * from './types';
export * from './catalogue';

/**
 * Returns all 11 syllabus units in their official order.
 */
export function getAllUnits(): UnitDefinition[] {
  return UNITS;
}

/**
 * Find a specific unit by its slug.
 */
export function getUnitBySlug(slug: string): UnitDefinition | undefined {
  return UNITS.find((u) => u.slug === slug);
}

/**
 * Return all lessons across all units (flattened).
 */
export function getAllLessons(): LessonDefinition[] {
  return UNITS.flatMap((u) => u.lessons);
}

/**
 * Find a specific lesson by unit slug and lesson slug.
 */
export function getLesson(unitSlug: string, lessonSlug: string): LessonDefinition | undefined {
  const unit = getUnitBySlug(unitSlug);
  if (!unit) return undefined;
  let lesson = unit.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson && unitSlug === 'measurement' && lessonSlug === 'errors-in-measurement') {
    lesson = unit.lessons.find((l) => l.slug === 'errors-and-uncertainties');
  }
  return lesson;
}

/**
 * Get adjacent lessons (previous and next) within the overall curriculum catalogue.
 */
export function getAdjacentLessons(
  unitSlug: string,
  lessonSlug: string
): {
  previous: { unit: UnitDefinition; lesson: LessonDefinition } | null;
  next: { unit: UnitDefinition; lesson: LessonDefinition } | null;
} {
  const allLessonsWithUnits = UNITS.flatMap((unit) =>
    unit.lessons.map((lesson) => ({ unit, lesson }))
  );

  const currentIndex = allLessonsWithUnits.findIndex(
    (item) => item.unit.slug === unitSlug && item.lesson.slug === lessonSlug
  );

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? allLessonsWithUnits[currentIndex - 1] : null;
  const next =
    currentIndex < allLessonsWithUnits.length - 1
      ? allLessonsWithUnits[currentIndex + 1]
      : null;

  return { previous, next };
}

/**
 * Search lessons by title, summary, topic outline, or keywords in English or Sinhala.
 */
export function searchLessons(
  query: string,
  locale: Locale = 'en'
): Array<{
  unit: UnitDefinition;
  lesson: LessonDefinition;
  matchScore: number;
}> {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const results: Array<{
    unit: UnitDefinition;
    lesson: LessonDefinition;
    matchScore: number;
  }> = [];

  for (const unit of UNITS) {
    for (const lesson of unit.lessons) {
      let score = 0;
      const title = lesson.title[locale].toLowerCase();
      const summary = lesson.summary[locale].toLowerCase();
      const altTitle = lesson.title[locale === 'en' ? 'si' : 'en'].toLowerCase();
      const unitTitle = unit.title[locale].toLowerCase();
      const syllabusRef = lesson.syllabusRef.toLowerCase();

      if (title === cleanQuery) {
        score += 100;
      } else if (title.includes(cleanQuery)) {
        score += 50;
      }

      if (altTitle.includes(cleanQuery)) {
        score += 30;
      }

      if (syllabusRef.includes(cleanQuery)) {
        score += 40;
      }

      if (summary.includes(cleanQuery)) {
        score += 20;
      }

      if (unitTitle.includes(cleanQuery)) {
        score += 15;
      }

      // Check topic outline
      for (const topic of lesson.topicOutline) {
        if (
          topic[locale].toLowerCase().includes(cleanQuery) ||
          topic[locale === 'en' ? 'si' : 'en'].toLowerCase().includes(cleanQuery)
        ) {
          score += 10;
          break;
        }
      }

      if (score > 0) {
        results.push({ unit, lesson, matchScore: score });
      }
    }
  }

  return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Get curriculum-wide totals (derived directly from catalogue).
 */
export function getCurriculumStats() {
  const units = getAllUnits();
  const lessons = getAllLessons();
  const readyLessons = lessons.filter((l) => l.status === 'ready');
  const simulatedLessons = lessons.filter((l) => l.hasSimulation);

  return {
    totalUnits: units.length,
    totalLessons: lessons.length,
    readyCount: readyLessons.length,
    outlineCount: lessons.length - readyLessons.length,
    simulationCount: simulatedLessons.length,
  };
}

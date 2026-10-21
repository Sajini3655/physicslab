import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export const HISTORY_STORAGE_KEY = 'physicslab_assessment_history_v1';

export type QuestionGradingStatus =
  | 'correct'
  | 'incorrect'
  | 'unanswered'
  | 'self_assessed'
  | 'pending';

export interface RubricItemSnapshot {
  description: { en: string; si: string };
  point: number;
}

export interface QuestionPartSnapshot {
  partId: string;
  label: { en: string; si: string };
  prompt: { en: string; si: string };
  modelAnswer: { en: string; si: string };
  rubric: RubricItemSnapshot[];
}

export interface QuestionAttemptDetail {
  questionId: string;
  type: 'mcq' | 'numerical' | 'structured';
  submittedAnswer: string;
  isCorrect?: boolean;
  gradingStatus: QuestionGradingStatus;
  awardedMarks: number;
  availableMarks: number;
  questionText: { en: string; si: string };
  hint?: { en: string; si: string };
  solution?: { en: string; si: string };
  options?: Array<{ id: string; text: { en: string; si: string } }>;
  correctOptionId?: string;
  expected?: number;
  tolerance?: number;
  unit?: string;
  parts?: QuestionPartSnapshot[];
  rubricScores?: Record<string, number>;
}

export interface AttemptScoreSummary {
  automaticScore: number;
  automaticTotal: number;
  rubricScore: number;
  rubricTotal: number;
  pendingManualMarks: number;
  totalAwarded: number;
  totalAvailable: number;
  percentage: number;
}

export interface RevisionState {
  answers: Record<string, string>;
  checked: Record<string, boolean>;
  results: Record<string, boolean>;
  revealedSolutions: Record<string, boolean>;
  completed: boolean;
}

export interface AssessmentAttemptRecord {
  id: string;
  unitId: string;
  unitSlug: string;
  unitSyllabusOrder: number;
  submittedAt: number;
  totalQuestions: number;
  answeredQuestions: number;
  score: AttemptScoreSummary;
  questions: QuestionAttemptDetail[];
  revisionState?: RevisionState;
}

export interface AssessmentHistoryState {
  version: 1;
  attempts: AssessmentAttemptRecord[];
}

export const DEFAULT_HISTORY_STATE: AssessmentHistoryState = {
  version: 1,
  attempts: [],
};

export const STORAGE_KEY_TO_UNIT_MAP: Record<
  string,
  { slug: string; syllabusOrder: number; title: { en: string; si: string } }
> = {
  'unit-1': { slug: 'measurement', syllabusOrder: 1, title: { en: 'Measurement', si: 'මිනුම' } },
  'unit-2': { slug: 'mechanics', syllabusOrder: 2, title: { en: 'Mechanics', si: 'යාන්ත්‍ර විද්‍යාව' } },
  'unit-3': { slug: 'oscillations-and-waves', syllabusOrder: 3, title: { en: 'Oscillations and Waves', si: 'කම්පන සහ තරංග' } },
  'unit-4': { slug: 'thermal-physics', syllabusOrder: 4, title: { en: 'Thermal Physics', si: 'තාප භෞතික විද්‍යාව' } },
  'unit-5': { slug: 'gravitational-field', syllabusOrder: 5, title: { en: 'Gravitational Field', si: 'ගුරුත්වාකර්ෂණ ක්ෂේත්‍ර' } },
  'unit-6': { slug: 'electrostatic-field', syllabusOrder: 6, title: { en: 'Electrostatic Field', si: 'ස්ථිති විද්‍යුත් ක්ෂේත්‍ර' } },
  'unit-7': { slug: 'magnetic-field', syllabusOrder: 7, title: { en: 'Magnetic Field', si: 'චුම්බක ක්ෂේත්‍ර' } },
  'unit-8': { slug: 'current-electricity', syllabusOrder: 8, title: { en: 'Current Electricity', si: 'ධාරා විද්‍යුතය' } },
  'unit-9': { slug: 'electronics', syllabusOrder: 9, title: { en: 'Electronics', si: 'ඉලෙක්ට්‍රොනික විද්‍යාව' } },
  'unit-10': { slug: 'mechanical-properties-of-matter', syllabusOrder: 10, title: { en: 'Mechanical Properties of Matter', si: 'පදාර්ථයේ යාන්ත්‍රික ගුණ' } },
  'unit-11': { slug: 'matter-and-radiation', syllabusOrder: 11, title: { en: 'Matter and Radiation', si: 'පදාර්ථය සහ විකිරණ' } },
};

/**
 * Resolves unit slug and syllabus order from storage key or slug.
 */
export function resolveUnitInfo(storageKeyOrSlug: string): {
  unitId: string;
  slug: string;
  syllabusOrder: number;
  title: { en: string; si: string };
} {
  if (STORAGE_KEY_TO_UNIT_MAP[storageKeyOrSlug]) {
    const meta = STORAGE_KEY_TO_UNIT_MAP[storageKeyOrSlug];
    return {
      unitId: storageKeyOrSlug,
      slug: meta.slug,
      syllabusOrder: meta.syllabusOrder,
      title: meta.title,
    };
  }

  // Look up by slug
  for (const [key, meta] of Object.entries(STORAGE_KEY_TO_UNIT_MAP)) {
    if (meta.slug === storageKeyOrSlug) {
      return {
        unitId: key,
        slug: meta.slug,
        syllabusOrder: meta.syllabusOrder,
        title: meta.title,
      };
    }
  }

  return {
    unitId: storageKeyOrSlug,
    slug: storageKeyOrSlug,
    syllabusOrder: 1,
    title: { en: storageKeyOrSlug, si: storageKeyOrSlug },
  };
}

export interface RawRubricItemLike {
  description?: { en: string; si: string };
  point?: number;
}

export interface RawQuestionPartLike {
  id?: string;
  partId?: string;
  label?: { en: string; si: string };
  prompt?: { en: string; si: string };
  question?: { en: string; si: string };
  modelAnswer?: { en: string; si: string };
  rubric?: RawRubricItemLike[];
}

export interface RawQuestionLike {
  id?: string;
  questionId?: string;
  type?: 'mcq' | 'numerical' | 'structured' | string;
  question?: { en: string; si: string };
  questionText?: { en: string; si: string };
  hint?: { en: string; si: string };
  solution?: { en: string; si: string };
  options?: Array<{ id: string; text: { en: string; si: string } }>;
  correctOptionId?: string;
  expected?: number;
  tolerance?: number;
  unit?: string | { en: string; si: string };
  parts?: RawQuestionPartLike[];
}

/**
 * Evaluates an individual question given a student's answer and optional rubric scores.
 */
export function evaluateSingleQuestion(
  question: RawQuestionLike,
  studentAnswer: string | undefined,
  rubricScores?: Record<string, number>
): {
  gradingStatus: QuestionGradingStatus;
  awardedMarks: number;
  availableMarks: number;
  isCorrect?: boolean;
} {
  const ans = studentAnswer?.trim();
  const qType = question.type || 'mcq';

  if (!ans) {
    let available = 1;
    if (qType === 'structured' && Array.isArray(question.parts)) {
      available = question.parts.reduce((sum: number, p: RawQuestionPartLike) => {
        if (Array.isArray(p.rubric)) {
          return sum + p.rubric.reduce((s: number, r: RawRubricItemLike) => s + (Number(r.point) || 1), 0);
        }
        return sum + 1;
      }, 0);
    }
    return {
      gradingStatus: 'unanswered',
      awardedMarks: 0,
      availableMarks: available,
      isCorrect: false,
    };
  }

  if (qType === 'mcq') {
    const isCorrect =
      typeof question.correctOptionId === 'string' &&
      ans.toUpperCase() === question.correctOptionId.trim().toUpperCase();
    return {
      gradingStatus: isCorrect ? 'correct' : 'incorrect',
      awardedMarks: isCorrect ? 1 : 0,
      availableMarks: 1,
      isCorrect,
    };
  }

  if (qType === 'numerical' && question.expected !== undefined) {
    const parsed = parseNumericalInput(ans);
    if (parsed !== null) {
      const tol = question.tolerance ?? (0.05 * Math.abs(question.expected || 1));
      const isCorrect = Math.abs(parsed - question.expected) <= tol;
      return {
        gradingStatus: isCorrect ? 'correct' : 'incorrect',
        awardedMarks: isCorrect ? 1 : 0,
        availableMarks: 1,
        isCorrect,
      };
    }
    return {
      gradingStatus: 'incorrect',
      awardedMarks: 0,
      availableMarks: 1,
      isCorrect: false,
    };
  }

  if (qType === 'structured') {
    let totalAvailable = 0;
    if (Array.isArray(question.parts)) {
      totalAvailable = question.parts.reduce((sum: number, p: RawQuestionPartLike) => {
        if (Array.isArray(p.rubric)) {
          return sum + p.rubric.reduce((s: number, r: RawRubricItemLike) => s + (Number(r.point) || 1), 0);
        }
        return sum + 1;
      }, 0);
    } else {
      totalAvailable = 1;
    }

    if (rubricScores && Object.keys(rubricScores).length > 0) {
      const awarded = Object.values(rubricScores).reduce((a, b) => a + (Number(b) || 0), 0);
      return {
        gradingStatus: 'self_assessed',
        awardedMarks: awarded,
        availableMarks: totalAvailable,
      };
    }

    return {
      gradingStatus: 'pending',
      awardedMarks: 0,
      availableMarks: totalAvailable,
    };
  }

  return {
    gradingStatus: 'unanswered',
    awardedMarks: 0,
    availableMarks: 1,
  };
}

/**
 * Calculates score summary across question details.
 */
export function calculateAttemptScore(questions: QuestionAttemptDetail[]): AttemptScoreSummary {
  let automaticScore = 0;
  let automaticTotal = 0;
  let rubricScore = 0;
  let rubricTotal = 0;
  let pendingManualMarks = 0;

  for (const q of questions) {
    if (q.type === 'structured') {
      rubricTotal += q.availableMarks;
      if (q.gradingStatus === 'self_assessed') {
        rubricScore += q.awardedMarks;
      } else {
        pendingManualMarks += q.availableMarks;
      }
    } else {
      automaticTotal += q.availableMarks;
      if (q.gradingStatus === 'correct') {
        automaticScore += q.awardedMarks;
      }
    }
  }

  const totalAwarded = automaticScore + rubricScore;
  const totalAvailable = automaticTotal + rubricTotal;
  const percentage = totalAvailable > 0 ? Math.round((totalAwarded / totalAvailable) * 100) : 0;

  return {
    automaticScore,
    automaticTotal,
    rubricScore,
    rubricTotal,
    pendingManualMarks,
    totalAwarded,
    totalAvailable,
    percentage,
  };
}

/**
 * Creates a complete snapshot of questions with their grading results.
 */
export function buildQuestionAttemptDetails(
  rawQuestions: RawQuestionLike[],
  answers: Record<string, string>,
  existingRubrics?: Record<string, Record<string, number>>
): QuestionAttemptDetail[] {
  return rawQuestions.map((q) => {
    const qId = q.id || q.questionId || '';
    const studentAnswer = answers[qId] || '';
    const rubrics = existingRubrics?.[qId];
    const evalRes = evaluateSingleQuestion(q, studentAnswer, rubrics);

    const detail: QuestionAttemptDetail = {
      questionId: qId,
      type: q.type === 'numerical' ? 'numerical' : q.type === 'structured' ? 'structured' : 'mcq',
      submittedAnswer: studentAnswer,
      isCorrect: evalRes.isCorrect,
      gradingStatus: evalRes.gradingStatus,
      awardedMarks: evalRes.awardedMarks,
      availableMarks: evalRes.availableMarks,
      questionText: q.question || q.questionText || { en: '', si: '' },
      hint: q.hint,
      solution: q.solution,
      options: q.options,
      correctOptionId: q.correctOptionId,
      expected: q.expected,
      tolerance: q.tolerance,
      unit: typeof q.unit === 'string' ? q.unit : (q.unit?.en || undefined),
      rubricScores: rubrics,
    };

    if (Array.isArray(q.parts)) {
      detail.parts = q.parts.map((p: RawQuestionPartLike, idx: number) => ({
        partId: p.partId || p.id || `part-${idx}`,
        label: p.label || { en: `Part (${String.fromCharCode(97 + idx)})`, si: `(${String.fromCharCode(97 + idx)}) කොටස` },
        prompt: p.prompt || p.question || { en: '', si: '' },
        modelAnswer: p.modelAnswer || { en: '', si: '' },
        rubric: Array.isArray(p.rubric)
          ? p.rubric.map((r: RawRubricItemLike) => ({
              description: r.description || { en: '', si: '' },
              point: Number(r.point) || 1,
            }))
          : [],
      }));
    }

    return detail;
  });
}

/**
 * Sanitizes stored history state.
 */
export function sanitizeHistoryState(raw: unknown): AssessmentHistoryState {
  if (!raw || typeof raw !== 'object') {
    return DEFAULT_HISTORY_STATE;
  }

  const obj = raw as Record<string, unknown>;
  if (obj.version !== 1 || !Array.isArray(obj.attempts)) {
    return DEFAULT_HISTORY_STATE;
  }

  const sanitizedAttempts: AssessmentAttemptRecord[] = [];
  const seenIds = new Set<string>();

  for (const item of obj.attempts) {
    if (!item || typeof item !== 'object') continue;
    const a = item as Record<string, unknown>;
    if (typeof a.id !== 'string' || !a.id || seenIds.has(a.id)) continue;
    seenIds.add(a.id);

    if (typeof a.unitId !== 'string' || !Array.isArray(a.questions)) continue;

    const unitInfo = resolveUnitInfo(
      (typeof a.unitSlug === 'string' ? a.unitSlug : undefined) || a.unitId
    );

    const questions: QuestionAttemptDetail[] = (a.questions as unknown[])
      .filter(
        (q): q is Record<string, unknown> =>
          !!q && typeof q === 'object' && typeof (q as Record<string, unknown>).questionId === 'string'
      )
      .map((q) => ({
        questionId: String(q.questionId),
        type: q.type === 'numerical' ? 'numerical' : q.type === 'structured' ? 'structured' : 'mcq',
        submittedAnswer: typeof q.submittedAnswer === 'string' ? q.submittedAnswer : '',
        isCorrect: typeof q.isCorrect === 'boolean' ? q.isCorrect : undefined,
        gradingStatus: [
          'correct',
          'incorrect',
          'unanswered',
          'self_assessed',
          'pending',
        ].includes(String(q.gradingStatus))
          ? (q.gradingStatus as QuestionGradingStatus)
          : 'unanswered',
        awardedMarks: typeof q.awardedMarks === 'number' ? q.awardedMarks : 0,
        availableMarks: typeof q.availableMarks === 'number' ? q.availableMarks : 1,
        questionText: (q.questionText as { en: string; si: string }) || { en: '', si: '' },
        hint: q.hint as { en: string; si: string } | undefined,
        solution: q.solution as { en: string; si: string } | undefined,
        options: Array.isArray(q.options)
          ? (q.options as Array<{ id: string; text: { en: string; si: string } }>)
          : undefined,
        correctOptionId: typeof q.correctOptionId === 'string' ? q.correctOptionId : undefined,
        expected: typeof q.expected === 'number' ? q.expected : undefined,
        tolerance: typeof q.tolerance === 'number' ? q.tolerance : undefined,
        unit: typeof q.unit === 'string' ? q.unit : undefined,
        parts: Array.isArray(q.parts) ? (q.parts as QuestionPartSnapshot[]) : undefined,
        rubricScores:
          q.rubricScores && typeof q.rubricScores === 'object'
            ? (q.rubricScores as Record<string, number>)
            : undefined,
      }));

    const rawScore =
      a.score && typeof a.score === 'object' ? (a.score as Record<string, unknown>) : undefined;
    const score = rawScore
      ? {
          automaticScore: Number(rawScore.automaticScore) || 0,
          automaticTotal: Number(rawScore.automaticTotal) || 0,
          rubricScore: Number(rawScore.rubricScore) || 0,
          rubricTotal: Number(rawScore.rubricTotal) || 0,
          pendingManualMarks: Number(rawScore.pendingManualMarks) || 0,
          totalAwarded: Number(rawScore.totalAwarded) || 0,
          totalAvailable: Number(rawScore.totalAvailable) || 0,
          percentage: Number(rawScore.percentage) || 0,
        }
      : calculateAttemptScore(questions);

    const rawRev =
      a.revisionState && typeof a.revisionState === 'object'
        ? (a.revisionState as Record<string, unknown>)
        : undefined;
    const revisionState: RevisionState | undefined = rawRev
      ? {
          answers: (rawRev.answers as Record<string, string>) || {},
          checked: (rawRev.checked as Record<string, boolean>) || {},
          results: (rawRev.results as Record<string, boolean>) || {},
          revealedSolutions: (rawRev.revealedSolutions as Record<string, boolean>) || {},
          completed: !!rawRev.completed,
        }
      : undefined;

    sanitizedAttempts.push({
      id: String(a.id),
      unitId: String(a.unitId),
      unitSlug: unitInfo.slug,
      unitSyllabusOrder: unitInfo.syllabusOrder,
      submittedAt: typeof a.submittedAt === 'number' ? a.submittedAt : Date.now(),
      totalQuestions: typeof a.totalQuestions === 'number' ? a.totalQuestions : questions.length,
      answeredQuestions:
        typeof a.answeredQuestions === 'number'
          ? a.answeredQuestions
          : questions.filter((q) => q.submittedAnswer.trim() !== '').length,
      score,
      questions,
      revisionState,
    });
  }

  return {
    version: 1,
    attempts: sanitizedAttempts,
  };
}

/**
 * Parses raw JSON string into sanitized history state.
 */
export function parseStoredHistory(rawJson: string | null): AssessmentHistoryState {
  if (!rawJson) return DEFAULT_HISTORY_STATE;
  try {
    const parsed = JSON.parse(rawJson);
    return sanitizeHistoryState(parsed);
  } catch {
    return DEFAULT_HISTORY_STATE;
  }
}

/**
 * Retrieves current history state directly from localStorage safely.
 */
export function getStoredHistory(): AssessmentHistoryState {
  if (typeof localStorage === 'undefined') return DEFAULT_HISTORY_STATE;
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    return parseStoredHistory(raw);
  } catch {
    return DEFAULT_HISTORY_STATE;
  }
}

export const HISTORY_CHANGE_EVENT = 'physicslab-assessment-history-changed';

export function notifyHistoryChanged(): void {
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new Event(HISTORY_CHANGE_EVENT));
    } catch {
      // Ignore in environments where Event constructor or window dispatch fails
    }
  }
}

/**
 * Saves history state directly to localStorage safely.
 */
export function saveStoredHistory(state: AssessmentHistoryState): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(state));
    notifyHistoryChanged();
  } catch (err) {
    console.warn('Failed to save assessment history to localStorage:', err);
  }
}

/**
 * Records or updates a submitted assessment attempt.
 * Language changes, reloads, and opening solutions will NOT create duplicate history entries.
 */
export function recordAssessmentAttempt(attempt: AssessmentAttemptRecord): AssessmentHistoryState {
  const current = getStoredHistory();
  const existingIdx = current.attempts.findIndex((a) => a.id === attempt.id);

  if (existingIdx >= 0) {
    // Attempt already exists with this attempt ID: update in-place without duplicating
    const existing = current.attempts[existingIdx];
    current.attempts[existingIdx] = {
      ...existing,
      score: attempt.score,
      questions: attempt.questions,
      revisionState: existing.revisionState || attempt.revisionState,
    };
    saveStoredHistory(current);
    return current;
  }

  // Brand new attempt: add to beginning of list
  const nextAttempts = [attempt, ...current.attempts];
  const nextState: AssessmentHistoryState = {
    version: 1,
    attempts: nextAttempts,
  };
  saveStoredHistory(nextState);
  return nextState;
}

/**
 * Updates self-assessed rubric scores for a structured question in an attempt.
 * Updates the same attempt without changing its attempt ID or submission date.
 */
export function updateAttemptRubricScore(
  attemptId: string,
  questionId: string,
  rubricScores: Record<string, number>
): AssessmentHistoryState {
  const current = getStoredHistory();
  const attempt = current.attempts.find((a) => a.id === attemptId);
  if (!attempt) return current;

  const targetQuestion = attempt.questions.find((q) => q.questionId === questionId);
  if (!targetQuestion) return current;

  targetQuestion.rubricScores = {
    ...(targetQuestion.rubricScores || {}),
    ...rubricScores,
  };

  const evalRes = evaluateSingleQuestion(targetQuestion, targetQuestion.submittedAnswer, targetQuestion.rubricScores);
  targetQuestion.awardedMarks = evalRes.awardedMarks;
  targetQuestion.gradingStatus = evalRes.gradingStatus;

  // Recalculate attempt score
  attempt.score = calculateAttemptScore(attempt.questions);

  saveStoredHistory(current);
  return current;
}

/**
 * Updates revision practice state for mistakes in an attempt.
 * Keeps revision practice separate from the original assessment score!
 */
export function updateAttemptRevisionState(
  attemptId: string,
  revisionUpdate: Partial<RevisionState>
): AssessmentHistoryState {
  const current = getStoredHistory();
  const attempt = current.attempts.find((a) => a.id === attemptId);
  if (!attempt) return current;

  const existingRevision = attempt.revisionState || {
    answers: {},
    checked: {},
    results: {},
    revealedSolutions: {},
    completed: false,
  };

  attempt.revisionState = {
    answers: { ...existingRevision.answers, ...(revisionUpdate.answers || {}) },
    checked: { ...existingRevision.checked, ...(revisionUpdate.checked || {}) },
    results: { ...existingRevision.results, ...(revisionUpdate.results || {}) },
    revealedSolutions: {
      ...existingRevision.revealedSolutions,
      ...(revisionUpdate.revealedSolutions || {}),
    },
    completed: revisionUpdate.completed ?? existingRevision.completed,
  };

  saveStoredHistory(current);
  return current;
}

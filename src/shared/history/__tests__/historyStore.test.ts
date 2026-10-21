import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  HISTORY_STORAGE_KEY,
  DEFAULT_HISTORY_STATE,
  resolveUnitInfo,
  evaluateSingleQuestion,
  getStoredHistory,
  recordAssessmentAttempt,
  updateAttemptRubricScore,
  updateAttemptRevisionState,
  AssessmentAttemptRecord,
} from '../historyStore';

describe('Assessment History Store', () => {
  let mockStorage: Record<string, string> = {};

  beforeEach(() => {
    mockStorage = {};
    const mockLocalStorage = {
      getItem: vi.fn((key: string) => mockStorage[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        mockStorage[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete mockStorage[key];
      }),
      clear: vi.fn(() => {
        mockStorage = {};
      }),
    };
    vi.stubGlobal('localStorage', mockLocalStorage);
  });

  describe('resolveUnitInfo', () => {
    it('resolves unit info by storage key', () => {
      const info = resolveUnitInfo('unit-1');
      expect(info.unitId).toBe('unit-1');
      expect(info.slug).toBe('measurement');
      expect(info.syllabusOrder).toBe(1);
      expect(info.title.en).toBe('Measurement');
      expect(info.title.si).toBe('මිනුම');
    });

    it('resolves unit info by slug', () => {
      const info = resolveUnitInfo('mechanics');
      expect(info.unitId).toBe('unit-2');
      expect(info.slug).toBe('mechanics');
      expect(info.syllabusOrder).toBe(2);
    });

    it('falls back gracefully for unknown unit keys', () => {
      const info = resolveUnitInfo('unknown-unit');
      expect(info.unitId).toBe('unknown-unit');
      expect(info.slug).toBe('unknown-unit');
    });
  });

  describe('evaluateSingleQuestion', () => {
    it('marks empty answer as unanswered', () => {
      const q = { id: 'q1', type: 'mcq', correctOptionId: 'A' };
      const res = evaluateSingleQuestion(q, '');
      expect(res.gradingStatus).toBe('unanswered');
      expect(res.awardedMarks).toBe(0);
      expect(res.availableMarks).toBe(1);
      expect(res.isCorrect).toBe(false);
    });

    it('evaluates MCQ correctly and incorrectly', () => {
      const q = { id: 'q1', type: 'mcq', correctOptionId: 'B' };
      const correct = evaluateSingleQuestion(q, 'B');
      expect(correct.gradingStatus).toBe('correct');
      expect(correct.awardedMarks).toBe(1);
      expect(correct.isCorrect).toBe(true);

      const incorrect = evaluateSingleQuestion(q, 'C');
      expect(incorrect.gradingStatus).toBe('incorrect');
      expect(incorrect.awardedMarks).toBe(0);
      expect(incorrect.isCorrect).toBe(false);
    });

    it('evaluates numerical question with tolerance', () => {
      const q = { id: 'q2', type: 'numerical', expected: 9.8, tolerance: 0.1 };
      const res1 = evaluateSingleQuestion(q, '9.82');
      expect(res1.gradingStatus).toBe('correct');
      expect(res1.awardedMarks).toBe(1);

      const res2 = evaluateSingleQuestion(q, '10.5');
      expect(res2.gradingStatus).toBe('incorrect');
      expect(res2.awardedMarks).toBe(0);
    });

    it('evaluates structured question as pending when no rubrics are scored', () => {
      const q = {
        id: 'q3',
        type: 'structured',
        parts: [
          { id: 'p1', rubric: [{ point: 1 }, { point: 2 }] },
          { id: 'p2', rubric: [{ point: 2 }] },
        ],
      };
      const res = evaluateSingleQuestion(q, 'written student answer');
      expect(res.gradingStatus).toBe('pending');
      expect(res.awardedMarks).toBe(0);
      expect(res.availableMarks).toBe(5);
    });

    it('evaluates structured question as self_assessed when rubric scores are provided', () => {
      const q = {
        id: 'q3',
        type: 'structured',
        parts: [
          { id: 'p1', rubric: [{ point: 1 }, { point: 2 }] },
          { id: 'p2', rubric: [{ point: 2 }] },
        ],
      };
      const res = evaluateSingleQuestion(q, 'written student answer', { 'p1_r0': 1, 'p2_r0': 2 });
      expect(res.gradingStatus).toBe('self_assessed');
      expect(res.awardedMarks).toBe(3);
      expect(res.availableMarks).toBe(5);
    });
  });

  describe('recordAssessmentAttempt and Deduplication', () => {
    it('saves a new attempt to history', () => {
      const sampleAttempt: AssessmentAttemptRecord = {
        id: 'attempt-1',
        unitId: 'unit-1',
        unitSlug: 'measurement',
        unitSyllabusOrder: 1,
        submittedAt: 1700000000000,
        totalQuestions: 2,
        answeredQuestions: 2,
        score: {
          automaticScore: 2,
          automaticTotal: 2,
          rubricScore: 0,
          rubricTotal: 0,
          pendingManualMarks: 0,
          totalAwarded: 2,
          totalAvailable: 2,
          percentage: 100,
        },
        questions: [
          {
            questionId: 'q1',
            type: 'mcq',
            submittedAnswer: 'A',
            gradingStatus: 'correct',
            awardedMarks: 1,
            availableMarks: 1,
            questionText: { en: 'Q1', si: 'ප්‍ර1' },
          },
          {
            questionId: 'q2',
            type: 'mcq',
            submittedAnswer: 'B',
            gradingStatus: 'correct',
            awardedMarks: 1,
            availableMarks: 1,
            questionText: { en: 'Q2', si: 'ප්‍ර2' },
          },
        ],
      };

      recordAssessmentAttempt(sampleAttempt);
      const history = getStoredHistory();
      expect(history.attempts.length).toBe(1);
      expect(history.attempts[0].id).toBe('attempt-1');
      expect(history.attempts[0].score.percentage).toBe(100);
    });

    it('does not create duplicate entry when language switches or reloaded with same attempt ID', () => {
      const sampleAttempt: AssessmentAttemptRecord = {
        id: 'attempt-1',
        unitId: 'unit-1',
        unitSlug: 'measurement',
        unitSyllabusOrder: 1,
        submittedAt: 1700000000000,
        totalQuestions: 1,
        answeredQuestions: 1,
        score: {
          automaticScore: 1,
          automaticTotal: 1,
          rubricScore: 0,
          rubricTotal: 0,
          pendingManualMarks: 0,
          totalAwarded: 1,
          totalAvailable: 1,
          percentage: 100,
        },
        questions: [],
      };

      recordAssessmentAttempt(sampleAttempt);
      // Simulate reload or lang switch submitting same attempt ID
      recordAssessmentAttempt(sampleAttempt);
      recordAssessmentAttempt(sampleAttempt);

      const history = getStoredHistory();
      expect(history.attempts.length).toBe(1);
    });

    it('preserves previous attempts when retaking an assessment with a new attempt ID', () => {
      const attempt1: AssessmentAttemptRecord = {
        id: 'attempt-1',
        unitId: 'unit-1',
        unitSlug: 'measurement',
        unitSyllabusOrder: 1,
        submittedAt: 1700000000000,
        totalQuestions: 1,
        answeredQuestions: 1,
        score: {
          automaticScore: 0,
          automaticTotal: 1,
          rubricScore: 0,
          rubricTotal: 0,
          pendingManualMarks: 0,
          totalAwarded: 0,
          totalAvailable: 1,
          percentage: 0,
        },
        questions: [],
      };

      const attempt2: AssessmentAttemptRecord = {
        id: 'attempt-2',
        unitId: 'unit-1',
        unitSlug: 'measurement',
        unitSyllabusOrder: 1,
        submittedAt: 1700000050000,
        totalQuestions: 1,
        answeredQuestions: 1,
        score: {
          automaticScore: 1,
          automaticTotal: 1,
          rubricScore: 0,
          rubricTotal: 0,
          pendingManualMarks: 0,
          totalAwarded: 1,
          totalAvailable: 1,
          percentage: 100,
        },
        questions: [],
      };

      recordAssessmentAttempt(attempt1);
      recordAssessmentAttempt(attempt2);

      const history = getStoredHistory();
      expect(history.attempts.length).toBe(2);
      expect(history.attempts[0].id).toBe('attempt-2'); // newest first
      expect(history.attempts[1].id).toBe('attempt-1');
      expect(history.attempts[1].score.percentage).toBe(0);
      expect(history.attempts[0].score.percentage).toBe(100);
    });
  });

  describe('updateAttemptRubricScore', () => {
    it('updates structured rubric score on the correct attempt in-place', () => {
      const attempt: AssessmentAttemptRecord = {
        id: 'attempt-struct',
        unitId: 'unit-2',
        unitSlug: 'mechanics',
        unitSyllabusOrder: 2,
        submittedAt: 1700000000000,
        totalQuestions: 1,
        answeredQuestions: 1,
        score: {
          automaticScore: 0,
          automaticTotal: 0,
          rubricScore: 0,
          rubricTotal: 2,
          pendingManualMarks: 2,
          totalAwarded: 0,
          totalAvailable: 2,
          percentage: 0,
        },
        questions: [
          {
            questionId: 'q-struct-1',
            type: 'structured',
            submittedAnswer: 'F = ma',
            gradingStatus: 'pending',
            awardedMarks: 0,
            availableMarks: 2,
            questionText: { en: 'Explain F=ma', si: 'F=ma පැහැදිලි කරන්න' },
            parts: [
              {
                partId: 'p1',
                label: { en: 'Part (a)', si: '(a) කොටස' },
                prompt: { en: 'Prompt', si: 'විමසුම' },
                modelAnswer: { en: 'Model', si: 'ආදර්ශ' },
                rubric: [{ description: { en: 'State law', si: 'නියමය ප්‍රකාශ කිරීම' }, point: 2 }],
              },
            ],
          },
        ],
      };

      recordAssessmentAttempt(attempt);

      // Student marks the rubric as 2 points
      updateAttemptRubricScore('attempt-struct', 'q-struct-1', { 'p1_r0': 2 });

      const updatedHistory = getStoredHistory();
      const updatedAttempt = updatedHistory.attempts[0];
      expect(updatedAttempt.score.rubricScore).toBe(2);
      expect(updatedAttempt.score.pendingManualMarks).toBe(0);
      expect(updatedAttempt.score.totalAwarded).toBe(2);
      expect(updatedAttempt.score.percentage).toBe(100);
      expect(updatedAttempt.questions[0].gradingStatus).toBe('self_assessed');
    });
  });

  describe('updateAttemptRevisionState', () => {
    it('preserves the original assessment score and updates mistake revision state independently', () => {
      const attempt: AssessmentAttemptRecord = {
        id: 'attempt-rev',
        unitId: 'unit-1',
        unitSlug: 'measurement',
        unitSyllabusOrder: 1,
        submittedAt: 1700000000000,
        totalQuestions: 2,
        answeredQuestions: 2,
        score: {
          automaticScore: 1,
          automaticTotal: 2,
          rubricScore: 0,
          rubricTotal: 0,
          pendingManualMarks: 0,
          totalAwarded: 1,
          totalAvailable: 2,
          percentage: 50,
        },
        questions: [
          {
            questionId: 'q1',
            type: 'mcq',
            submittedAnswer: 'A',
            gradingStatus: 'correct',
            awardedMarks: 1,
            availableMarks: 1,
            questionText: { en: 'Q1', si: 'ප්‍ර1' },
          },
          {
            questionId: 'q2',
            type: 'mcq',
            submittedAnswer: 'B',
            gradingStatus: 'incorrect',
            awardedMarks: 0,
            availableMarks: 1,
            questionText: { en: 'Q2', si: 'ප්‍ර2' },
          },
        ],
      };

      recordAssessmentAttempt(attempt);

      // Update revision practice
      updateAttemptRevisionState('attempt-rev', {
        answers: { q2: 'C' },
        checked: { q2: true },
        results: { q2: true },
        completed: true,
      });

      const updatedHistory = getStoredHistory();
      const stored = updatedHistory.attempts[0];

      // Original score MUST NOT change!
      expect(stored.score.automaticScore).toBe(1);
      expect(stored.score.totalAwarded).toBe(1);
      expect(stored.score.percentage).toBe(50);
      expect(stored.questions[1].gradingStatus).toBe('incorrect');

      // Revision state is preserved
      expect(stored.revisionState?.completed).toBe(true);
      expect(stored.revisionState?.answers['q2']).toBe('C');
      expect(stored.revisionState?.results['q2']).toBe(true);
    });
  });

  describe('Corrupt data handling', () => {
    it('returns DEFAULT_HISTORY_STATE when localStorage contains invalid JSON', () => {
      mockStorage[HISTORY_STORAGE_KEY] = 'not-valid-json{{{';
      const history = getStoredHistory();
      expect(history).toEqual(DEFAULT_HISTORY_STATE);
    });

    it('returns DEFAULT_HISTORY_STATE when version does not match', () => {
      mockStorage[HISTORY_STORAGE_KEY] = JSON.stringify({ version: 99, attempts: [] });
      const history = getStoredHistory();
      expect(history).toEqual(DEFAULT_HISTORY_STATE);
    });
  });
});

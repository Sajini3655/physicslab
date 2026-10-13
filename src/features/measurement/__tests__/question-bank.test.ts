import { describe, it, expect } from 'vitest';
import { MEASUREMENT_QUESTION_BANK } from '../questions/bank';
import { generateUnit1Assessment, evaluateAssessment } from '../questions/assessment';

describe('Unit 1 Measurement - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains at least 60 original questions across Unit 1', () => {
      expect(MEASUREMENT_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
      expect(MEASUREMENT_QUESTION_BANK.length).toBe(72);
    });

    it('ensures all question IDs are globally unique', () => {
      const idSet = new Set<string>();
      MEASUREMENT_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(MEASUREMENT_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and explanations', () => {
      MEASUREMENT_QUESTION_BANK.forEach((q) => {
        expect(q.question.en).toBeTruthy();
        expect(q.question.si).toBeTruthy();
        expect(q.hint.en).toBeTruthy();
        expect(q.hint.si).toBeTruthy();
        expect(q.solution.en).toBeTruthy();
        expect(q.solution.si).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 1\.[1-5]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = MEASUREMENT_QUESTION_BANK.filter((q) => q.type === 'mcq');
      expect(mcqs.length).toBeGreaterThan(40);

      mcqs.forEach((q) => {
        expect(q.options).toBeDefined();
        expect(q.options!.length).toBeGreaterThanOrEqual(4);
        expect(q.correctOptionId).toBeDefined();

        const validIds = q.options!.map((opt) => opt.id);
        expect(validIds).toContain(q.correctOptionId);

        q.options!.forEach((opt) => {
          expect(opt.id).toBeTruthy();
          expect(opt.text.en).toBeTruthy();
          expect(opt.text.si).toBeTruthy();
        });
      });
    });

    it('validates numerical question structure and tolerances', () => {
      const nums = MEASUREMENT_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThan(5);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(q.tolerance).toBeDefined();
        expect(q.tolerance).toBeGreaterThan(0);
      });
    });

    it('covers all 5 NIE syllabus competencies', () => {
      const counts: Record<string, number> = {
        'Competency 1.1': 0,
        'Competency 1.2': 0,
        'Competency 1.3': 0,
        'Competency 1.4': 0,
        'Competency 1.5': 0,
      };

      MEASUREMENT_QUESTION_BANK.forEach((q) => {
        counts[q.competencyRef] = (counts[q.competencyRef] || 0) + 1;
      });

      expect(counts['Competency 1.1']).toBeGreaterThanOrEqual(10);
      expect(counts['Competency 1.2']).toBeGreaterThanOrEqual(10);
      expect(counts['Competency 1.3']).toBeGreaterThanOrEqual(10);
      expect(counts['Competency 1.4']).toBeGreaterThanOrEqual(12);
      expect(counts['Competency 1.5']).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Summative Assessment Generator', () => {
    it('generates a balanced 20-question unit assessment', () => {
      const assessment = generateUnit1Assessment();
      expect(assessment.length).toBe(20);

      const compMap: Record<string, number> = {};
      assessment.forEach((q) => {
        compMap[q.competencyRef] = (compMap[q.competencyRef] || 0) + 1;
      });

      // Targets: 1.1 (3), 1.2 (4), 1.3 (3), 1.4 (6), 1.5 (4)
      expect(compMap['Competency 1.1']).toBe(3);
      expect(compMap['Competency 1.2']).toBe(4);
      expect(compMap['Competency 1.3']).toBe(3);
      expect(compMap['Competency 1.4']).toBe(6);
      expect(compMap['Competency 1.5']).toBe(4);
    });
  });

  describe('Assessment Evaluator', () => {
    it('evaluates a 100% correct assessment submission', () => {
      const questions = generateUnit1Assessment();
      const perfectAnswers: Record<string, string> = {};

      questions.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = String(q.expected);
        }
      });

      const result = evaluateAssessment(questions, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);

      Object.values(result.competencyBreakdown).forEach((b) => {
        expect(b.correct).toBe(b.total);
        expect(b.percentage).toBe(100);
      });
    });

    it('evaluates an empty / zero submission and identifies all weak competencies', () => {
      const questions = generateUnit1Assessment();
      const emptyAnswers: Record<string, string> = {};

      const result = evaluateAssessment(questions, emptyAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(0);
      expect(result.percentageScore).toBe(0);
      expect(result.weakCompetencies.length).toBe(5);
    });

    it('evaluates numerical answers within tolerance correctly', () => {
      const numericalQ = MEASUREMENT_QUESTION_BANK.find((q) => q.type === 'numerical')!;
      expect(numericalQ).toBeDefined();

      const questions = [numericalQ];
      // Slightly off answer, but within tolerance
      const answersWithin = {
        [numericalQ.id]: String(numericalQ.expected! + (numericalQ.tolerance! * 0.5)),
      };
      const resWithin = evaluateAssessment(questions, answersWithin);
      expect(resWithin.totalCorrect).toBe(1);

      // Outside tolerance
      const answersOutside = {
        [numericalQ.id]: String(numericalQ.expected! + (numericalQ.tolerance! * 2)),
      };
      const resOutside = evaluateAssessment(questions, answersOutside);
      expect(resOutside.totalCorrect).toBe(0);
    });
  });
});

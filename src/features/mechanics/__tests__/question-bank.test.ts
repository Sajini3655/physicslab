import { describe, it, expect } from 'vitest';
import { MECHANICS_QUESTION_BANK } from '../questions/bank';
import { generateUnit2Assessment, evaluateMechanicsAssessment } from '../questions/assessment';

describe('Unit 2 Mechanics - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains at least 60 original questions across Unit 2', () => {
      expect(MECHANICS_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('contains at least 10 structured multipart questions with marking rubrics', () => {
      const structured = MECHANICS_QUESTION_BANK.filter((q) => q.type === 'structured');
      expect(structured.length).toBeGreaterThanOrEqual(10);
      structured.forEach((q) => {
        expect(q.parts).toBeDefined();
        expect(q.parts!.length).toBeGreaterThanOrEqual(2);
        q.parts!.forEach((p) => {
          expect(p.prompt.en.trim()).toBeTruthy();
          expect(p.prompt.si.trim()).toBeTruthy();
          expect(p.allocatedMarks).toBeGreaterThan(0);
          expect(p.rubric.length).toBeGreaterThan(0);
          expect(p.modelAnswer.en.trim()).toBeTruthy();
          expect(p.modelAnswer.si.trim()).toBeTruthy();
        });
      });
    });

    it('ensures all question IDs are globally unique', () => {
      const idSet = new Set<string>();
      MECHANICS_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(MECHANICS_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      MECHANICS_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 2\.[1-8]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = MECHANICS_QUESTION_BANK.filter((q) => q.type === 'mcq');
      expect(mcqs.length).toBeGreaterThanOrEqual(30);

      mcqs.forEach((q) => {
        expect(q.options).toBeDefined();
        expect(q.options!.length).toBeGreaterThanOrEqual(4);
        expect(q.correctOptionId).toBeDefined();

        const validIds = q.options!.map((opt) => opt.id);
        expect(validIds).toContain(q.correctOptionId);

        q.options!.forEach((opt) => {
          expect(opt.id).toBeTruthy();
          expect(opt.text.en.trim()).toBeTruthy();
          expect(opt.text.si.trim()).toBeTruthy();
        });
      });
    });

    it('validates numerical question structure and tolerances', () => {
      const nums = MECHANICS_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(15);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(q.tolerance).toBeDefined();
        expect(q.tolerance).toBeGreaterThan(0);
        if (q.unit) {
          expect(q.unit.en).toBeDefined();
          expect(q.unit.si).toBeDefined();
        }
      });
    });

    it('covers all 8 mechanics competencies with at least 5 questions each', () => {
      const counts: Record<string, number> = {};
      MECHANICS_QUESTION_BANK.forEach((q) => {
        counts[q.competencyRef] = (counts[q.competencyRef] || 0) + 1;
      });

      for (let i = 1; i <= 8; i++) {
        const key = `Competency 2.${i}`;
        expect(counts[key], `Expected >= 5 questions for ${key}`).toBeGreaterThanOrEqual(5);
      }
    });

    it('includes structured practical questions for all 5 official experiments', () => {
      const practicalQuestions = MECHANICS_QUESTION_BANK.filter(
        (q) => q.category === 'structured-practical'
      );
      expect(practicalQuestions.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Mechanics Summative Assessment Generator & Evaluator', () => {
    it('generates a balanced 20-question assessment across all 8 competencies', () => {
      const exam = generateUnit2Assessment();
      expect(exam.length).toBe(20);

      const compCounts: Record<string, number> = {};
      exam.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      for (let i = 1; i <= 8; i++) {
        expect(compCounts[`Competency 2.${i}`]).toBeGreaterThanOrEqual(2);
      }
    });

    it('correctly scores an exam with 100% correct answers', () => {
      const exam = generateUnit2Assessment();
      const perfectAnswers: Record<string, string> = {};

      exam.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'submitted';
        }
      });

      const res = evaluateMechanicsAssessment(exam, perfectAnswers);
      expect(res.totalQuestions).toBe(20);
      expect(res.totalCorrect).toBe(20);
      expect(res.percentageScore).toBe(100);
      expect(res.weakCompetencies.length).toBe(0);
    });

    it('correctly evaluates numerical answers within tolerance and scientific notation', () => {
      const exam = generateUnit2Assessment();
      const numericalQ = exam.find((q) => q.type === 'numerical');
      expect(numericalQ).toBeDefined();

      if (numericalQ && numericalQ.expected !== undefined) {
        const answers: Record<string, string> = {
          [numericalQ.id]: (numericalQ.expected + (numericalQ.tolerance! * 0.5)).toString(),
        };

        const res = evaluateMechanicsAssessment([numericalQ], answers);
        expect(res.totalCorrect).toBe(1);
        expect(res.percentageScore).toBe(100);
      }
    });

    it('identifies weak competencies when score falls below 60%', () => {
      const exam = generateUnit2Assessment();
      // Leave all answers empty
      const emptyAnswers: Record<string, string> = {};
      const res = evaluateMechanicsAssessment(exam, emptyAnswers);

      expect(res.totalCorrect).toBe(0);
      expect(res.percentageScore).toBe(0);
      expect(res.weakCompetencies.length).toBe(8);
    });
  });
});

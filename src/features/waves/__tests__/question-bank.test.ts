import { describe, it, expect } from 'vitest';
import { WAVES_QUESTION_BANK } from '../questions/bank';
import { generateUnit3Assessment, evaluateWavesAssessment } from '../questions/assessment';

describe('Unit 3 Oscillations & Waves - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 3', () => {
      expect(WAVES_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('contains at least 10 structured multipart questions with marking rubrics', () => {
      const structured = WAVES_QUESTION_BANK.filter((q) => q.type === 'structured');
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
      WAVES_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(WAVES_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      WAVES_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 3\.(1[0-1]|[1-9])$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = WAVES_QUESTION_BANK.filter((q) => q.type === 'mcq');
      expect(mcqs.length).toBeGreaterThanOrEqual(15);

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
      const nums = WAVES_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(20);

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

    it('covers all waves competencies with questions', () => {
      const counts: Record<string, number> = {};
      WAVES_QUESTION_BANK.forEach((q) => {
        counts[q.competencyRef] = (counts[q.competencyRef] || 0) + 1;
      });

      for (let i = 1; i <= 11; i++) {
        const key = `Competency 3.${i}`;
        expect(counts[key], `Expected >= 1 questions for ${key}`).toBeGreaterThanOrEqual(1);
      }
    });

    it('includes structured practical questions for official experiments', () => {
      const practicalQuestions = WAVES_QUESTION_BANK.filter(
        (q) => q.category === 'structured-practical'
      );
      expect(practicalQuestions.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Waves Summative Assessment Generator & Evaluator', () => {
    it('generates a balanced 20-question assessment covering all 11 competencies', () => {
      const exam = generateUnit3Assessment();
      expect(exam.length).toBe(20);

      const compCounts: Record<string, number> = {};
      exam.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      for (let i = 1; i <= 11; i++) {
        expect(compCounts[`Competency 3.${i}`]).toBeGreaterThanOrEqual(1);
      }
    });

    it('evaluates student answers accurately and identifies weak competencies', () => {
      const exam = generateUnit3Assessment();
      const mockAnswers: Record<string, string> = {};

      // Fill in answers: correct for first 10, incorrect for remainder
      exam.forEach((q, idx) => {
        if (idx < 10) {
          if (q.type === 'mcq') {
            mockAnswers[q.id] = q.correctOptionId!;
          } else if (q.type === 'numerical') {
            mockAnswers[q.id] = String(q.expected);
          } else if (q.type === 'structured') {
            mockAnswers[q.id] = 'submitted';
          }
        } else {
          mockAnswers[q.id] = '999999';
        }
      });

      const result = evaluateWavesAssessment(exam, mockAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(10);
      expect(result.percentageScore).toBe(50);
      expect(Array.isArray(result.weakCompetencies)).toBe(true);
    });

    it('correctly scores an exam with 100% correct answers', () => {
      const exam = generateUnit3Assessment();
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

      const res = evaluateWavesAssessment(exam, perfectAnswers);
      expect(res.totalQuestions).toBe(20);
      expect(res.totalCorrect).toBe(20);
      expect(res.percentageScore).toBe(100);
      expect(res.weakCompetencies.length).toBe(0);
    });
  });
});

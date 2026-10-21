import { describe, it, expect } from 'vitest';
import { GRAVITATION_QUESTIONS } from '../questions/bank';
import {
  generateUnit5Assessment,
  evaluateGravitationAssessment,
} from '../questions/assessment';

describe('Unit 5 Gravitational Field - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 5 (>= 60 questions)', () => {
      expect(GRAVITATION_QUESTIONS.length).toBeGreaterThanOrEqual(60);
    });

    it('validates structured questions and marking rubrics (>= 10 structured questions)', () => {
      const structured = GRAVITATION_QUESTIONS.filter((q) => q.type === 'structured');
      expect(structured.length).toBeGreaterThanOrEqual(10);

      structured.forEach((q) => {
        expect(q.parts).toBeDefined();
        expect(q.parts!.length).toBeGreaterThanOrEqual(2);
        q.parts!.forEach((part) => {
          expect(part.id).toBeTruthy();
          expect(part.prompt.en.trim()).toBeTruthy();
          expect(part.prompt.si.trim()).toBeTruthy();
          expect(part.allocatedMarks).toBeGreaterThan(0);
          expect(part.modelAnswer.en.trim()).toBeTruthy();
          expect(part.modelAnswer.si.trim()).toBeTruthy();
          expect(part.rubric.length).toBeGreaterThanOrEqual(1);
          part.rubric.forEach((r) => {
            expect(r.point).toBeGreaterThan(0);
            expect(r.description.en.trim()).toBeTruthy();
            expect(r.description.si.trim()).toBeTruthy();
          });
        });
      });
    });

    it('ensures all question IDs are globally unique', () => {
      const idSet = new Set<string>();
      GRAVITATION_QUESTIONS.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(GRAVITATION_QUESTIONS.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      GRAVITATION_QUESTIONS.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 5\.[1-4]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = GRAVITATION_QUESTIONS.filter((q) => q.type === 'mcq');
      expect(mcqs.length).toBeGreaterThanOrEqual(20);

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
      const nums = GRAVITATION_QUESTIONS.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(10);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(Number.isFinite(q.expected)).toBe(true);
        expect(q.tolerance).toBeGreaterThan(0);
        expect(q.unit).toBeDefined();
        expect(q.unit!.en.trim()).toBeTruthy();
        expect(q.unit!.si.trim()).toBeTruthy();
      });
    });

    it('verifies coverage across both syllabus competencies', () => {
      const competencies = ['Competency 5.1', 'Competency 5.2'];
      competencies.forEach((comp) => {
        const count = GRAVITATION_QUESTIONS.filter((q) => q.competencyRef === comp).length;
        expect(count).toBeGreaterThanOrEqual(15);
      });
    });
  });

  describe('Summative Assessment Generator & Evaluator', () => {
    it('generates a 20-question exam with 10 questions from each competency', () => {
      const assessment = generateUnit5Assessment();
      expect(assessment.length).toBe(20);

      const compCounts: Record<string, number> = {};
      assessment.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      expect(compCounts['Competency 5.1']).toBe(10);
      expect(compCounts['Competency 5.2']).toBe(10);
    });

    it('correctly scores a 100% perfect exam submission', () => {
      const questions = generateUnit5Assessment();
      const perfectAnswers: Record<string, string> = {};

      questions.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'Completed working and reasoning';
        }
      });

      const result = evaluateGravitationAssessment(questions, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);
    });

    it('accurately identifies weak competencies when below 60%', () => {
      const questions = generateUnit5Assessment();
      const partialAnswers: Record<string, string> = {};

      // Answer only Competency 5.1 questions correctly, leave others blank
      questions.forEach((q) => {
        if (q.competencyRef === 'Competency 5.1') {
          perfectOption(q, partialAnswers);
        }
      });

      function perfectOption(q: typeof questions[0], dict: Record<string, string>) {
        if (q.type === 'mcq') {
          dict[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          dict[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          dict[q.id] = 'Completed working and reasoning';
        }
      }

      const result = evaluateGravitationAssessment(questions, partialAnswers);
      expect(result.totalCorrect).toBe(10);
      expect(result.percentageScore).toBe(50);
      expect(result.competencyBreakdown['Competency 5.1'].percentage).toBe(100);
      expect(result.competencyBreakdown['Competency 5.2'].percentage).toBe(0);
      expect(result.weakCompetencies).toContain('Competency 5.2');
      expect(result.weakCompetencies).not.toContain('Competency 5.1');
    });

    it('accepts numerical answers within tolerance boundaries', () => {
      const numQuestions = GRAVITATION_QUESTIONS.filter((q) => q.type === 'numerical');
      const testQ = numQuestions[0];
      const answers: Record<string, string> = {};

      // Test slightly above expected, within tolerance
      const slightlyAbove = testQ.expected! + (testQ.tolerance! * 0.5);
      answers[testQ.id] = slightlyAbove.toString();

      const result = evaluateGravitationAssessment([testQ], answers);
      expect(result.totalCorrect).toBe(1);

      // Test far outside tolerance
      answers[testQ.id] = (testQ.expected! + testQ.tolerance! * 3).toString();
      const failResult = evaluateGravitationAssessment([testQ], answers);
      expect(failResult.totalCorrect).toBe(0);
    });
  });
});

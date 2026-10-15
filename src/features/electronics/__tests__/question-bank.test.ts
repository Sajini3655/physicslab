import { describe, it, expect } from 'vitest';
import { ELECTRONICS_QUESTION_BANK } from '../questions/bank';
import {
  generateUnit9Assessment,
  evaluateElectronicsAssessment,
} from '../questions/assessment';

describe('Unit 9 Electronics - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 9 (>= 60 questions)', () => {
      expect(ELECTRONICS_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('validates structured questions and marking rubrics (>= 10 structured questions)', () => {
      const structured = ELECTRONICS_QUESTION_BANK.filter((q) => q.type === 'structured');
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
      ELECTRONICS_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(ELECTRONICS_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      ELECTRONICS_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 9\.[1-4]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = ELECTRONICS_QUESTION_BANK.filter((q) => q.type === 'mcq');
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
      const nums = ELECTRONICS_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(10);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(Number.isFinite(q.expected)).toBe(true);
        expect(q.tolerance).toBeGreaterThan(0);
        expect(q.unit).toBeDefined();
        expect(q.unit!.en.trim()).toBeDefined();
        expect(q.unit!.si.trim()).toBeDefined();
      });
    });

    it('verifies coverage across all 4 syllabus competencies (9.1 to 9.4)', () => {
      const competencies = [
        'Competency 9.1',
        'Competency 9.2',
        'Competency 9.3',
        'Competency 9.4',
      ];
      competencies.forEach((comp) => {
        const count = ELECTRONICS_QUESTION_BANK.filter((q) => q.competencyRef === comp).length;
        expect(count).toBeGreaterThanOrEqual(10);
      });
    });
  });

  describe('Summative Assessment Generator & Evaluator', () => {
    it('generates a 20-question exam drawn across all 4 competencies', () => {
      const assessment = generateUnit9Assessment();
      expect(assessment.length).toBe(20);

      const compCounts: Record<string, number> = {};
      assessment.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      expect(compCounts['Competency 9.1']).toBe(5);
      expect(compCounts['Competency 9.2']).toBe(5);
      expect(compCounts['Competency 9.3']).toBe(5);
      expect(compCounts['Competency 9.4']).toBe(5);
    });

    it('evaluates a perfect score attempt correctly', () => {
      const assessment = generateUnit9Assessment();
      const perfectAnswers: Record<string, string> = {};

      assessment.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'Completed structured working';
        }
      });

      const result = evaluateElectronicsAssessment(assessment, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);
    });

    it('evaluates numerical answers within tolerance as correct', () => {
      const assessment = generateUnit9Assessment();
      const numericalQs = assessment.filter((q) => q.type === 'numerical');

      if (numericalQs.length > 0) {
        const answers: Record<string, string> = {};
        numericalQs.forEach((q) => {
          const slightOffset = q.expected! + (q.tolerance ?? 0.1) * 0.5;
          answers[q.id] = slightOffset.toString();
        });

        const result = evaluateElectronicsAssessment(numericalQs, answers);
        expect(result.totalCorrect).toBe(numericalQs.length);
      }
    });

    it('identifies weak competencies when score is below 60%', () => {
      const assessment = generateUnit9Assessment();
      const zeroAnswers: Record<string, string> = {};
      assessment.forEach((q) => {
        zeroAnswers[q.id] = 'wrong_ans';
      });

      const result = evaluateElectronicsAssessment(assessment, zeroAnswers);
      expect(result.totalCorrect).toBe(0);
      expect(result.percentageScore).toBe(0);
      expect(result.weakCompetencies.length).toBe(4);
    });
  });
});

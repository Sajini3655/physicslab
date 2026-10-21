import { describe, it, expect } from 'vitest';
import { ELECTRICITY_QUESTION_BANK } from '../questions/bank';
import {
  generateUnit8Assessment,
  evaluateElectricityAssessment,
} from '../questions/assessment';

describe('Unit 8 Current Electricity - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 8 (>= 60 questions)', () => {
      expect(ELECTRICITY_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('validates structured questions and marking rubrics (>= 10 structured questions)', () => {
      const structured = ELECTRICITY_QUESTION_BANK.filter((q) => q.type === 'structured');
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
      ELECTRICITY_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(ELECTRICITY_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      ELECTRICITY_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 8\.[1-6]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = ELECTRICITY_QUESTION_BANK.filter((q) => q.type === 'mcq');
      expect(mcqs.length).toBeGreaterThanOrEqual(25);

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
      const nums = ELECTRICITY_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(15);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(Number.isFinite(q.expected)).toBe(true);
        expect(q.tolerance).toBeGreaterThan(0);
        expect(q.unit).toBeDefined();
        expect(q.unit!.en.trim()).toBeTruthy();
        expect(q.unit!.si.trim()).toBeTruthy();
      });
    });

    it('verifies coverage across all 6 syllabus competencies (8.1 to 8.6)', () => {
      const competencies = [
        'Competency 8.1',
        'Competency 8.2',
        'Competency 8.3',
        'Competency 8.4',
        'Competency 8.5',
        'Competency 8.6',
      ];
      competencies.forEach((comp) => {
        const count = ELECTRICITY_QUESTION_BANK.filter((q) => q.competencyRef === comp).length;
        expect(count).toBeGreaterThanOrEqual(8);
      });
    });
  });

  describe('Summative Assessment Generator & Evaluator', () => {
    it('generates a 20-question exam drawn across all 6 competencies', () => {
      const assessment = generateUnit8Assessment();
      expect(assessment.length).toBe(20);

      const compCounts: Record<string, number> = {};
      assessment.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      expect(compCounts['Competency 8.1']).toBe(3);
      expect(compCounts['Competency 8.2']).toBe(3);
      expect(compCounts['Competency 8.3']).toBe(4);
      expect(compCounts['Competency 8.4']).toBe(3);
      expect(compCounts['Competency 8.5']).toBe(4);
      expect(compCounts['Competency 8.6']).toBe(3);
    });

    it('correctly scores a 100% perfect exam submission', () => {
      const questions = generateUnit8Assessment();
      const perfectAnswers: Record<string, string> = {};

      questions.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'Completed structured working';
        }
      });

      const result = evaluateElectricityAssessment(questions, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);
    });

    it('accurately identifies weak competencies when below 60%', () => {
      const questions = generateUnit8Assessment();
      const partialAnswers: Record<string, string> = {};

      // Answer only Competency 8.1 questions correctly, leave others blank
      questions.forEach((q) => {
        if (q.competencyRef === 'Competency 8.1') {
          if (q.type === 'mcq') {
            partialAnswers[q.id] = q.correctOptionId!;
          } else if (q.type === 'numerical') {
            partialAnswers[q.id] = q.expected!.toString();
          } else if (q.type === 'structured') {
            partialAnswers[q.id] = 'Completed structured working';
          }
        }
      });

      const result = evaluateElectricityAssessment(questions, partialAnswers);
      expect(result.totalCorrect).toBe(3);
      expect(result.percentageScore).toBe(15);
      expect(result.competencyBreakdown['Competency 8.1'].percentage).toBe(100);
      expect(result.competencyBreakdown['Competency 8.2'].percentage).toBe(0);
      expect(result.weakCompetencies).toContain('Competency 8.2');
      expect(result.weakCompetencies).toContain('Competency 8.3');
      expect(result.weakCompetencies).toContain('Competency 8.4');
      expect(result.weakCompetencies).toContain('Competency 8.5');
      expect(result.weakCompetencies).toContain('Competency 8.6');
      expect(result.weakCompetencies).not.toContain('Competency 8.1');
    });

    it('accepts numerical answers within tolerance boundaries', () => {
      const numQuestions = ELECTRICITY_QUESTION_BANK.filter((q) => q.type === 'numerical');
      const testQ = numQuestions[0];
      const answers: Record<string, string> = {};

      // Test slightly above expected, within tolerance
      const slightlyAbove = testQ.expected! + (testQ.tolerance! * 0.5);
      answers[testQ.id] = slightlyAbove.toString();

      const result = evaluateElectricityAssessment([testQ], answers);
      expect(result.totalCorrect).toBe(1);

      // Test far outside tolerance
      answers[testQ.id] = (testQ.expected! + testQ.tolerance! * 3).toString();
      const failResult = evaluateElectricityAssessment([testQ], answers);
      expect(failResult.totalCorrect).toBe(0);
    });
  });
});

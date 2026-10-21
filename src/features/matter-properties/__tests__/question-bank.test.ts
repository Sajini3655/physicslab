import { describe, it, expect } from 'vitest';
import { MATTER_PROPERTIES_QUESTION_BANK } from '../questions/bank';
import {
  generateUnit10Assessment,
  evaluateMatterPropertiesAssessment,
} from '../questions/assessment';

describe('Unit 10 Mechanical Properties of Matter - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 10 (>= 60 questions)', () => {
      expect(MATTER_PROPERTIES_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('contains at least 10 structured multipart questions with marking rubrics', () => {
      const structured = MATTER_PROPERTIES_QUESTION_BANK.filter((q) => q.type === 'structured');
      expect(structured.length).toBeGreaterThanOrEqual(10);
      structured.forEach((q) => {
        expect(q.parts).toBeDefined();
        expect(q.parts!.length).toBeGreaterThanOrEqual(2);
        q.parts!.forEach((p) => {
          expect(p.partLabel).toBeTruthy();
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
      MATTER_PROPERTIES_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(MATTER_PROPERTIES_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      MATTER_PROPERTIES_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 10\.[1-3]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = MATTER_PROPERTIES_QUESTION_BANK.filter((q) => q.type === 'mcq');
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
      const nums = MATTER_PROPERTIES_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(15);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(Number.isFinite(q.expected)).toBe(true);
        expect(q.tolerance).toBeGreaterThan(0);
        expect(q.unit).toBeDefined();
        expect(q.unit!.en.trim()).toBeDefined();
        expect(q.unit!.si.trim()).toBeDefined();
      });
    });

    it('verifies coverage across all 3 syllabus competencies (10.1 to 10.3)', () => {
      const competencies = [
        'Competency 10.1',
        'Competency 10.2',
        'Competency 10.3',
      ];
      competencies.forEach((comp) => {
        const count = MATTER_PROPERTIES_QUESTION_BANK.filter((q) => q.competencyRef === comp).length;
        expect(count).toBeGreaterThanOrEqual(8);
      });
    });
  });

  describe('Summative Assessment Generator & Evaluator', () => {
    it('generates a 20-question exam drawn across all 3 competencies', () => {
      const assessment = generateUnit10Assessment();
      expect(assessment.length).toBe(20);

      const compCounts: Record<string, number> = {};
      assessment.forEach((q) => {
        compCounts[q.competencyRef] = (compCounts[q.competencyRef] || 0) + 1;
      });

      expect(compCounts['Competency 10.1']).toBe(7);
      expect(compCounts['Competency 10.2']).toBe(7);
      expect(compCounts['Competency 10.3']).toBe(6);
    });

    it('evaluates a perfect score attempt correctly', () => {
      const assessment = generateUnit10Assessment();
      const perfectAnswers: Record<string, string> = {};

      assessment.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = q.expected!.toString();
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'valid structured answer';
        }
      });

      const result = evaluateMatterPropertiesAssessment(assessment, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);
    });

    it('evaluates numerical answers within tolerance as correct', () => {
      const assessment = generateUnit10Assessment();
      const numericalQs = assessment.filter((q) => q.type === 'numerical');

      if (numericalQs.length > 0) {
        const answers: Record<string, string> = {};
        numericalQs.forEach((q) => {
          const slightOffset = q.expected! + (q.tolerance ?? 0.1) * 0.5;
          answers[q.id] = slightOffset.toString();
        });

        const result = evaluateMatterPropertiesAssessment(numericalQs, answers);
        expect(result.totalCorrect).toBe(numericalQs.length);
      }
    });

    it('identifies weak competencies when score is below 60%', () => {
      const assessment = generateUnit10Assessment();
      const zeroAnswers: Record<string, string> = {};
      assessment.forEach((q) => {
        zeroAnswers[q.id] = 'wrong_ans';
      });

      const result = evaluateMatterPropertiesAssessment(assessment, zeroAnswers);
      expect(result.totalCorrect).toBe(0);
      expect(result.percentageScore).toBe(0);
      expect(result.weakCompetencies.length).toBe(3);
    });
  });
});

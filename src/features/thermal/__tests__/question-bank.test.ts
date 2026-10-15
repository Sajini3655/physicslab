import { describe, it, expect } from 'vitest';
import { THERMAL_QUESTION_BANK } from '../questions/bank';
import {
  generateUnit4Assessment,
  evaluateThermalAssessment,
} from '../questions/assessment';
import { ThermalCompetencyRef } from '../questions/types';

describe('Unit 4 Thermal Physics - Question Bank & Summative Assessment', () => {
  describe('Question Bank Schema & Content Quality', () => {
    it('contains a rich set of original questions across Unit 4 (>= 60 questions)', () => {
      expect(THERMAL_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);
    });

    it('contains at least 10 structured multipart questions with marking rubrics', () => {
      const structured = THERMAL_QUESTION_BANK.filter((q) => q.type === 'structured');
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
      THERMAL_QUESTION_BANK.forEach((q) => {
        expect(idSet.has(q.id)).toBe(false);
        idSet.add(q.id);
      });
      expect(idSet.size).toBe(THERMAL_QUESTION_BANK.length);
    });

    it('ensures each question has complete bilingual content, hints, and step-by-step solutions', () => {
      THERMAL_QUESTION_BANK.forEach((q) => {
        expect(q.question.en.trim()).toBeTruthy();
        expect(q.question.si.trim()).toBeTruthy();
        expect(q.hint.en.trim()).toBeTruthy();
        expect(q.hint.si.trim()).toBeTruthy();
        expect(q.solution.en.trim()).toBeTruthy();
        expect(q.solution.si.trim()).toBeTruthy();
        expect(q.competencyRef).toMatch(/^Competency 4\.[1-9]$/);
      });
    });

    it('validates MCQ question structure', () => {
      const mcqs = THERMAL_QUESTION_BANK.filter((q) => q.type === 'mcq');
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
      const nums = THERMAL_QUESTION_BANK.filter((q) => q.type === 'numerical');
      expect(nums.length).toBeGreaterThanOrEqual(20);

      nums.forEach((q) => {
        expect(typeof q.expected).toBe('number');
        expect(q.tolerance).toBeDefined();
        expect(q.tolerance).toBeGreaterThan(0);
        if (q.unit) {
          expect(q.unit.en.trim()).toBeTruthy();
          expect(q.unit.si.trim()).toBeTruthy();
        }
      });
    });

    it('covers all 9 syllabus competencies', () => {
      const comps = new Set(THERMAL_QUESTION_BANK.map((q) => q.competencyRef));
      for (let i = 1; i <= 9; i++) {
        expect(comps.has(`Competency 4.${i}` as ThermalCompetencyRef)).toBe(true);
      }
    });

    it('contains structured practical questions covering canonical practicals', () => {
      const practicals = THERMAL_QUESTION_BANK.filter(
        (q) => q.category === 'structured-practical'
      );
      expect(practicals.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('Summative Assessment Generator & Scoring Engine', () => {
    it('generates a 20-question balanced examination across all 9 competencies', () => {
      const assessment = generateUnit4Assessment();
      expect(assessment.length).toBe(20);

      const byComp: Record<string, number> = {};
      assessment.forEach((q) => {
        byComp[q.competencyRef] = (byComp[q.competencyRef] || 0) + 1;
      });

      for (let i = 1; i <= 9; i++) {
        expect(byComp[`Competency 4.${i}`]).toBeGreaterThanOrEqual(2);
      }
    });

    it('accurately scores a perfect submission (100%)', () => {
      const assessment = generateUnit4Assessment();
      const perfectAnswers: Record<string, string> = {};

      assessment.forEach((q) => {
        if (q.type === 'mcq') {
          perfectAnswers[q.id] = q.correctOptionId!;
        } else if (q.type === 'numerical') {
          perfectAnswers[q.id] = String(q.expected);
        } else if (q.type === 'structured') {
          perfectAnswers[q.id] = 'submitted';
        }
      });

      const result = evaluateThermalAssessment(assessment, perfectAnswers);
      expect(result.totalQuestions).toBe(20);
      expect(result.totalCorrect).toBe(20);
      expect(result.percentageScore).toBe(100);
      expect(result.weakCompetencies.length).toBe(0);
    });

    it('identifies weak competencies below 60% threshold', () => {
      const assessment = generateUnit4Assessment();
      // Only answer Competency 4.1 correctly, leave others blank
      const partialAnswers: Record<string, string> = {};

      assessment.forEach((q) => {
        if (q.competencyRef === 'Competency 4.1') {
          if (q.type === 'mcq') {
            partialAnswers[q.id] = q.correctOptionId!;
          } else if (q.type === 'numerical') {
            partialAnswers[q.id] = String(q.expected);
          } else if (q.type === 'structured') {
            partialAnswers[q.id] = 'submitted';
          }
        }
      });

      const result = evaluateThermalAssessment(assessment, partialAnswers);
      expect(result.totalCorrect).toBe(2);
      expect(result.percentageScore).toBe(10);
      expect(result.weakCompetencies).toContain('Competency 4.2');
      expect(result.weakCompetencies).toContain('Competency 4.3');
      expect(result.weakCompetencies).toContain('Competency 4.4');
      expect(result.weakCompetencies).toContain('Competency 4.5');
      expect(result.weakCompetencies).not.toContain('Competency 4.1');
    });
  });
});

import { describe, it, expect } from 'vitest';
import { QUANTUM_NUCLEAR_QUESTION_BANK } from '../questions/bank';
import {
  generateQuantumAssessment,
  evaluateQuantumAssessment,
} from '../questions/assessment';
import { QuantumCompetency } from '../questions/types';

describe('Unit 11: Matter and Radiation - Question Bank & Assessment Engine', () => {
  it('satisfies overall bank size and type quotas (>= 60 total, >= 25 MCQs, >= 15 Numericals, >= 10 structured)', () => {
    expect(QUANTUM_NUCLEAR_QUESTION_BANK.length).toBeGreaterThanOrEqual(60);

    const mcqs = QUANTUM_NUCLEAR_QUESTION_BANK.filter((q) => q.type === 'mcq');
    const numericals = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
      (q) => q.type === 'numerical'
    );
    const structured = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
      (q) => q.type === 'structured'
    );

    expect(mcqs.length).toBeGreaterThanOrEqual(25);
    expect(numericals.length).toBeGreaterThanOrEqual(15);
    expect(structured.length).toBeGreaterThanOrEqual(10);
  });

  it('validates structured questions and marking rubrics', () => {
    const structured = QUANTUM_NUCLEAR_QUESTION_BANK.filter((q) => q.type === 'structured');
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

  it('provides comprehensive coverage across competencies 11.1 to 11.7', () => {
    const baseCompetencies: QuantumCompetency[] = ['11.1', '11.2', '11.3', '11.5', '11.6'];
    baseCompetencies.forEach((comp) => {
      const questionsForComp = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
        (q) => q.competency === comp
      );
      expect(questionsForComp.length).toBeGreaterThanOrEqual(7);
    });

    const allComps = new Set(QUANTUM_NUCLEAR_QUESTION_BANK.map((q) => q.competency));
    for (let c = 1; c <= 7; c++) {
      expect(allComps.has(`11.${c}` as QuantumCompetency)).toBe(true);
    }
  });

  it('has unique IDs across all questions in the bank', () => {
    const ids = QUANTUM_NUCLEAR_QUESTION_BANK.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('guarantees 100% bilingual parity in question texts', () => {
    QUANTUM_NUCLEAR_QUESTION_BANK.forEach((q) => {
      expect(q.question.en.trim().length).toBeGreaterThan(10);
      expect(q.question.si.trim().length).toBeGreaterThan(10);
    });
  });

  it('validates MCQ options and correct answer bindings', () => {
    const mcqs = QUANTUM_NUCLEAR_QUESTION_BANK.filter((q) => q.type === 'mcq');

    mcqs.forEach((q) => {
      expect(q.options).toBeDefined();
      expect(q.options!.length).toBeGreaterThanOrEqual(4);
      expect(q.correctOptionId).toBeDefined();

      const validOptionIds = q.options!.map((opt) => opt.id);
      expect(validOptionIds).toContain(q.correctOptionId);

      q.options!.forEach((opt) => {
        expect(opt.text.en.trim().length).toBeGreaterThan(0);
        expect(opt.text.si.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('validates numerical answers and positive tolerance specifications', () => {
    const numericals = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
      (q) => q.type === 'numerical'
    );

    numericals.forEach((q) => {
      expect(q.numericalAnswer).toBeDefined();
      expect(typeof q.numericalAnswer!.value).toBe('number');
      expect(q.numericalAnswer!.unit.trim().length).toBeGreaterThan(0);
      expect(q.numericalAnswer!.tolerance).toBeGreaterThan(0);
      expect(q.numericalAnswer!.tolerance).toBeLessThanOrEqual(0.15);
    });
  });

  it('ensures comprehensive bilingual hints and step-by-step explanations', () => {
    QUANTUM_NUCLEAR_QUESTION_BANK.forEach((q) => {
      expect(q.hint.en.trim().length).toBeGreaterThan(5);
      expect(q.hint.si.trim().length).toBeGreaterThan(5);
      expect(q.explanation.en.trim().length).toBeGreaterThan(10);
      expect(q.explanation.si.trim().length).toBeGreaterThan(10);
    });
  });

  it('generates a balanced 20-question examination with proper type mix', () => {
    const exam = generateQuantumAssessment();
    expect(exam.length).toBe(20);

    const mcqs = exam.filter((q) => q.type === 'mcq');
    const numericals = exam.filter((q) => q.type === 'numerical');

    expect(mcqs.length).toBe(12);
    expect(numericals.length).toBe(8);

    // Verify all 5 key competencies (11.1, 11.2, 11.3, 11.5, 11.6) are represented
    const comps = new Set(exam.map((q) => q.competency));
    expect(comps.size).toBe(5);
  });

  it('evaluates perfect exam score accurately', () => {
    const exam = generateQuantumAssessment();
    const answers: Record<string, string> = {};

    exam.forEach((q) => {
      if (q.type === 'mcq') {
        answers[q.id] = q.correctOptionId!;
      } else if (q.type === 'numerical' && q.numericalAnswer) {
        answers[q.id] = q.numericalAnswer.value.toString();
      } else if (q.type === 'structured') {
        answers[q.id] = 'valid structured answer';
      }
    });

    const result = evaluateQuantumAssessment(exam, answers, 1200);
    expect(result.score).toBe(20);
    expect(result.percentage).toBe(100);
    expect(result.details.length).toBe(20);

    // Verify all represented competencies achieved 100%
    Object.values(result.competencyBreakdown).forEach((breakdown) => {
      if (breakdown.total > 0) {
        expect(breakdown.percentage).toBe(100);
      }
    });
  });

  it('evaluates incorrect and tolerant numerical answers properly', () => {
    const exam = generateQuantumAssessment();
    const answers: Record<string, string> = {};

    // Answer with a slight delta within 3% tolerance for first numerical
    let testedNumerical = false;
    exam.forEach((q) => {
      if (q.type === 'mcq') {
        answers[q.id] = 'WRONG';
      } else if (q.type === 'numerical' && q.numericalAnswer && !testedNumerical) {
        // slightly offset within tolerance
        const offset = q.numericalAnswer.value * 1.02;
        answers[q.id] = offset.toString();
        testedNumerical = true;
      }
    });

    const result = evaluateQuantumAssessment(exam, answers, 900);
    expect(result.score).toBe(1); // exactly the one numerical within tolerance
  });
});

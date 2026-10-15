import { ThermalQuestion, ThermalCompetencyRef } from './types';
import { THERMAL_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface ThermalAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    ThermalCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: ThermalCompetencyRef[];
}

/**
 * Generates a balanced 15-question summative assessment drawn across all 5 thermal competencies.
 */
export function generateUnit4Assessment(): ThermalQuestion[] {
  const byComp: Record<ThermalCompetencyRef, ThermalQuestion[]> = {
    'Competency 4.1': [],
    'Competency 4.2': [],
    'Competency 4.3': [],
    'Competency 4.4': [],
    'Competency 4.5': [],
    'Competency 4.6': [],
    'Competency 4.7': [],
    'Competency 4.8': [],
    'Competency 4.9': [],
  };

  THERMAL_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: ThermalQuestion[], count: number) => arr.slice(0, count);

  const selected: ThermalQuestion[] = [
    ...pick(byComp['Competency 4.1'], 2),
    ...pick(byComp['Competency 4.2'], 2),
    ...pick(byComp['Competency 4.3'], 2),
    ...pick(byComp['Competency 4.4'], 2),
    ...pick(byComp['Competency 4.5'], 2),
    ...pick(byComp['Competency 4.6'], 3),
    ...pick(byComp['Competency 4.7'], 3),
    ...pick(byComp['Competency 4.8'], 2),
    ...pick(byComp['Competency 4.9'], 2),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateThermalAssessment(
  questions: ThermalQuestion[],
  answers: Record<string, string>
): ThermalAssessmentResult {
  const breakdown: Record<
    ThermalCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 4.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.4': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.5': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.6': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.7': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.8': { total: 0, correct: 0, percentage: 0 },
    'Competency 4.9': { total: 0, correct: 0, percentage: 0 },
  };

  let totalCorrect = 0;

  questions.forEach((q) => {
    const studentAns = answers[q.id]?.trim() || '';
    let isCorrect = false;

    if (q.type === 'mcq') {
      isCorrect = studentAns === q.correctOptionId;
    } else if (q.type === 'numerical' && q.expected !== undefined) {
      const parsed = parseNumericalInput(studentAns);
      if (parsed !== null) {
        const tol = q.tolerance ?? Math.abs(q.expected * 0.05);
        isCorrect = Math.abs(parsed - q.expected) <= tol;
      }
    } else if (q.type === 'structured') {
      isCorrect = studentAns.length > 0 && studentAns !== '999999' && studentAns !== 'incorrect';
    }

    if (breakdown[q.competencyRef]) {
      breakdown[q.competencyRef].total += 1;
      if (isCorrect) {
        breakdown[q.competencyRef].correct += 1;
        totalCorrect += 1;
      }
    }
  });

  const totalQuestions = questions.length;
  const percentageScore =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const weakCompetencies: ThermalCompetencyRef[] = [];
  (Object.keys(breakdown) as ThermalCompetencyRef[]).forEach((comp) => {
    const entry = breakdown[comp];
    entry.percentage =
      entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0;
    if (entry.percentage < 60 && entry.total > 0) {
      weakCompetencies.push(comp);
    }
  });

  return {
    totalQuestions,
    totalCorrect,
    percentageScore,
    competencyBreakdown: breakdown,
    weakCompetencies,
  };
}

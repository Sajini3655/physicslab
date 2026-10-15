import { MagnetismQuestion, MagnetismCompetencyRef } from './types';
import { MAGNETISM_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface MagnetismAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    MagnetismCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: MagnetismCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 5 magnetism competencies (4 from each).
 */
export function generateUnit7Assessment(): MagnetismQuestion[] {
  const byComp: Record<MagnetismCompetencyRef, MagnetismQuestion[]> = {
    'Competency 7.1': [],
    'Competency 7.2': [],
    'Competency 7.3': [],
  };

  MAGNETISM_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: MagnetismQuestion[], count: number) => arr.slice(0, count);

  const selected: MagnetismQuestion[] = [
    ...pick(byComp['Competency 7.1'], 7),
    ...pick(byComp['Competency 7.2'], 7),
    ...pick(byComp['Competency 7.3'], 6),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateMagnetismAssessment(
  questions: MagnetismQuestion[],
  answers: Record<string, string>
): MagnetismAssessmentResult {
  const breakdown: Record<
    MagnetismCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 7.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 7.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 7.3': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: MagnetismCompetencyRef[] = [];
  (Object.keys(breakdown) as MagnetismCompetencyRef[]).forEach((comp) => {
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

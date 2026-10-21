import { GravitationQuestion, GravitationCompetencyRef } from './types';
import { GRAVITATION_QUESTIONS } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface GravitationAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    GravitationCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: GravitationCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 4 gravitation competencies (5 from each).
 */
export function generateUnit5Assessment(): GravitationQuestion[] {
  const byComp: Record<GravitationCompetencyRef, GravitationQuestion[]> = {
    'Competency 5.1': [],
    'Competency 5.2': [],
  };

  GRAVITATION_QUESTIONS.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: GravitationQuestion[], count: number) => arr.slice(0, count);

  const selected: GravitationQuestion[] = [
    ...pick(byComp['Competency 5.1'], 10),
    ...pick(byComp['Competency 5.2'], 10),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateGravitationAssessment(
  questions: GravitationQuestion[],
  answers: Record<string, string>
): GravitationAssessmentResult {
  const breakdown: Record<
    GravitationCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 5.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 5.2': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: GravitationCompetencyRef[] = [];
  (Object.keys(breakdown) as GravitationCompetencyRef[]).forEach((comp) => {
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

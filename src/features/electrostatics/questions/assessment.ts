import { ElectrostaticsQuestion, ElectrostaticsCompetencyRef } from './types';
import { ELECTROSTATICS_QUESTIONS } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface ElectrostaticsAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    ElectrostaticsCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: ElectrostaticsCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 4 electrostatics competencies (5 from each).
 */
export function generateUnit6Assessment(): ElectrostaticsQuestion[] {
  const byComp: Record<ElectrostaticsCompetencyRef, ElectrostaticsQuestion[]> = {
    'Competency 6.1': [],
    'Competency 6.2': [],
    'Competency 6.3': [],
    'Competency 6.4': [],
  };

  ELECTROSTATICS_QUESTIONS.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: ElectrostaticsQuestion[], count: number) => arr.slice(0, count);

  const selected: ElectrostaticsQuestion[] = [
    ...pick(byComp['Competency 6.1'], 5),
    ...pick(byComp['Competency 6.2'], 5),
    ...pick(byComp['Competency 6.3'], 5),
    ...pick(byComp['Competency 6.4'], 5),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateElectrostaticsAssessment(
  questions: ElectrostaticsQuestion[],
  answers: Record<string, string>
): ElectrostaticsAssessmentResult {
  const breakdown: Record<
    ElectrostaticsCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 6.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 6.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 6.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 6.4': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: ElectrostaticsCompetencyRef[] = [];
  (Object.keys(breakdown) as ElectrostaticsCompetencyRef[]).forEach((comp) => {
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

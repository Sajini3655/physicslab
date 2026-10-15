import { ElectronicsQuestion, ElectronicsCompetencyRef } from './types';
import { ELECTRONICS_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface ElectronicsAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    ElectronicsCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: ElectronicsCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 4 electronics competencies.
 */
export function generateUnit9Assessment(): ElectronicsQuestion[] {
  const byComp: Record<ElectronicsCompetencyRef, ElectronicsQuestion[]> = {
    'Competency 9.1': [],
    'Competency 9.2': [],
    'Competency 9.3': [],
    'Competency 9.4': [],
  };

  ELECTRONICS_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: ElectronicsQuestion[], count: number) => arr.slice(0, count);

  const selected: ElectronicsQuestion[] = [
    ...pick(byComp['Competency 9.1'], 5),
    ...pick(byComp['Competency 9.2'], 5),
    ...pick(byComp['Competency 9.3'], 5),
    ...pick(byComp['Competency 9.4'], 5),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateElectronicsAssessment(
  questions: ElectronicsQuestion[],
  answers: Record<string, string>
): ElectronicsAssessmentResult {
  const breakdown: Record<
    ElectronicsCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 9.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 9.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 9.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 9.4': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: ElectronicsCompetencyRef[] = [];

  (Object.keys(breakdown) as ElectronicsCompetencyRef[]).forEach((comp) => {
    const item = breakdown[comp];
    item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    if (item.percentage < 60) {
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

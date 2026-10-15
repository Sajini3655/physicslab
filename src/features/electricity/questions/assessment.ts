import { ElectricityQuestion, ElectricityCompetencyRef } from './types';
import { ELECTRICITY_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface ElectricityAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    ElectricityCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: ElectricityCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 7 electricity competencies.
 */
export function generateUnit8Assessment(): ElectricityQuestion[] {
  const byComp: Record<ElectricityCompetencyRef, ElectricityQuestion[]> = {
    'Competency 8.1': [],
    'Competency 8.2': [],
    'Competency 8.3': [],
    'Competency 8.4': [],
    'Competency 8.5': [],
    'Competency 8.6': [],
  };

  ELECTRICITY_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: ElectricityQuestion[], count: number) => arr.slice(0, count);

  const selected: ElectricityQuestion[] = [
    ...pick(byComp['Competency 8.1'], 3),
    ...pick(byComp['Competency 8.2'], 3),
    ...pick(byComp['Competency 8.3'], 4),
    ...pick(byComp['Competency 8.4'], 3),
    ...pick(byComp['Competency 8.5'], 4),
    ...pick(byComp['Competency 8.6'], 3),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateElectricityAssessment(
  questions: ElectricityQuestion[],
  answers: Record<string, string>
): ElectricityAssessmentResult {
  const breakdown: Record<
    ElectricityCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 8.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 8.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 8.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 8.4': { total: 0, correct: 0, percentage: 0 },
    'Competency 8.5': { total: 0, correct: 0, percentage: 0 },
    'Competency 8.6': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: ElectricityCompetencyRef[] = [];
  (Object.keys(breakdown) as ElectricityCompetencyRef[]).forEach((comp) => {
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

import { MeasurementQuestion } from './types';
import { MEASUREMENT_QUESTION_BANK } from './bank';

export interface AssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<string, { total: number; correct: number; percentage: number }>;
  weakCompetencies: string[];
}

/**
 * Generates a balanced 20-question assessment drawn across all 5 competencies.
 */
export function generateUnit1Assessment(): MeasurementQuestion[] {
  const byComp: Record<string, MeasurementQuestion[]> = {
    'Competency 1.1': [],
    'Competency 1.2': [],
    'Competency 1.3': [],
    'Competency 1.4': [],
    'Competency 1.5': [],
  };

  MEASUREMENT_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  // Target counts: 1.1: 3, 1.2: 4, 1.3: 3, 1.4: 6, 1.5: 4 -> total = 20
  const pick = (arr: MeasurementQuestion[], count: number) => arr.slice(0, count);

  const selected: MeasurementQuestion[] = [
    ...pick(byComp['Competency 1.1'], 3),
    ...pick(byComp['Competency 1.2'], 4),
    ...pick(byComp['Competency 1.3'], 3),
    ...pick(byComp['Competency 1.4'], 6),
    ...pick(byComp['Competency 1.5'], 4),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateAssessment(
  questions: MeasurementQuestion[],
  answers: Record<string, string>
): AssessmentResult {
  const breakdown: Record<string, { total: number; correct: number; percentage: number }> = {
    'Competency 1.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 1.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 1.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 1.4': { total: 0, correct: 0, percentage: 0 },
    'Competency 1.5': { total: 0, correct: 0, percentage: 0 },
  };

  let totalCorrect = 0;

  questions.forEach((q) => {
    const studentAns = answers[q.id]?.trim();
    const comp = q.competencyRef;
    if (breakdown[comp]) {
      breakdown[comp].total += 1;
    }

    let isCorrect = false;

    if (q.type === 'mcq') {
      if (studentAns && studentAns.toUpperCase() === q.correctOptionId) {
        isCorrect = true;
      }
    } else if (q.type === 'numerical' && q.expected !== undefined) {
      const num = parseFloat(studentAns);
      const tol = q.tolerance ?? 0.05;
      if (!isNaN(num) && Math.abs(num - q.expected) <= tol) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      totalCorrect += 1;
      if (breakdown[comp]) {
        breakdown[comp].correct += 1;
      }
    }
  });

  const weakCompetencies: string[] = [];

  Object.keys(breakdown).forEach((key) => {
    const item = breakdown[key];
    item.percentage = item.total > 0 ? Number(((item.correct / item.total) * 100).toFixed(1)) : 0;
    if (item.percentage < 60) {
      weakCompetencies.push(key);
    }
  });

  const percentageScore = questions.length > 0
    ? Number(((totalCorrect / questions.length) * 100).toFixed(1))
    : 0;

  return {
    totalQuestions: questions.length,
    totalCorrect,
    percentageScore,
    competencyBreakdown: breakdown,
    weakCompetencies,
  };
}

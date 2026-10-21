import { WavesQuestion, WavesCompetencyRef } from './types';
import { WAVES_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface WavesAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<WavesCompetencyRef, { total: number; correct: number; percentage: number }>;
  weakCompetencies: WavesCompetencyRef[];
}

/**
 * Generates a balanced assessment drawn across all 7 waves competencies.
 */
export function generateUnit3Assessment(): WavesQuestion[] {
  const byComp: Record<WavesCompetencyRef, WavesQuestion[]> = {
    'Competency 3.1': [],
    'Competency 3.2': [],
    'Competency 3.3': [],
    'Competency 3.4': [],
    'Competency 3.5': [],
    'Competency 3.6': [],
    'Competency 3.7': [],
    'Competency 3.8': [],
    'Competency 3.9': [],
    'Competency 3.10': [],
    'Competency 3.11': [],
  };

  WAVES_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: WavesQuestion[], count: number) => arr.slice(0, count);

  const selected: WavesQuestion[] = [
    ...pick(byComp['Competency 3.1'], 2),
    ...pick(byComp['Competency 3.2'], 2),
    ...pick(byComp['Competency 3.3'], 2),
    ...pick(byComp['Competency 3.4'], 2),
    ...pick(byComp['Competency 3.5'], 2),
    ...pick(byComp['Competency 3.6'], 2),
    ...pick(byComp['Competency 3.7'], 2),
    ...pick(byComp['Competency 3.8'], 2),
    ...pick(byComp['Competency 3.9'], 2),
    ...pick(byComp['Competency 3.10'], 1),
    ...pick(byComp['Competency 3.11'], 1),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateWavesAssessment(
  questions: WavesQuestion[],
  answers: Record<string, string>
): WavesAssessmentResult {
  const breakdown: Record<WavesCompetencyRef, { total: number; correct: number; percentage: number }> = {
    'Competency 3.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.4': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.5': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.6': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.7': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.8': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.9': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.10': { total: 0, correct: 0, percentage: 0 },
    'Competency 3.11': { total: 0, correct: 0, percentage: 0 },
  };

  let totalCorrect = 0;

  questions.forEach((q) => {
    const comp = q.competencyRef;
    breakdown[comp].total += 1;

    const studentAns = answers[q.id];
    let isCorrect = false;

    if (q.type === 'mcq') {
      if (studentAns && studentAns.trim() === q.correctOptionId) {
        isCorrect = true;
      }
    } else if (q.type === 'numerical' && q.expected !== undefined) {
      const parsed = parseNumericalInput(studentAns);
      if (parsed !== null) {
        const tol = q.tolerance ?? 0.05 * Math.abs(q.expected);
        if (Math.abs(parsed - q.expected) <= tol) {
          isCorrect = true;
        }
      }
    } else if (q.type === 'structured') {
      if (studentAns && studentAns.trim().length > 0 && studentAns !== '999999' && studentAns !== 'incorrect') {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      breakdown[comp].correct += 1;
      totalCorrect += 1;
    }
  });

  const totalQuestions = questions.length;
  const percentageScore = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

  const weakCompetencies: WavesCompetencyRef[] = [];

  (Object.keys(breakdown) as WavesCompetencyRef[]).forEach((comp) => {
    const { total, correct } = breakdown[comp];
    const pct = total > 0 ? (correct / total) * 100 : 0;
    breakdown[comp].percentage = Number(pct.toFixed(1));
    if (total > 0 && pct < 60) {
      weakCompetencies.push(comp);
    }
  });

  return {
    totalQuestions,
    totalCorrect,
    percentageScore: Number(percentageScore.toFixed(1)),
    competencyBreakdown: breakdown,
    weakCompetencies,
  };
}

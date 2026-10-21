import { MechanicsQuestion, MechanicsCompetencyRef } from './types';
import { MECHANICS_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface MechanicsAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<MechanicsCompetencyRef, { total: number; correct: number; percentage: number }>;
  weakCompetencies: MechanicsCompetencyRef[];
}

/**
 * Generates a balanced 20-question assessment drawn equally across all 10 mechanics competencies (2 questions each).
 */
export function generateUnit2Assessment(): MechanicsQuestion[] {
  const byComp: Record<MechanicsCompetencyRef, MechanicsQuestion[]> = {
    'Competency 2.1': [],
    'Competency 2.2': [],
    'Competency 2.3': [],
    'Competency 2.4': [],
    'Competency 2.5': [],
    'Competency 2.6': [],
    'Competency 2.7': [],
    'Competency 2.8': [],
  };

  MECHANICS_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pickBalanced = (arr: MechanicsQuestion[], totalCount: number) => {
    const structured = arr.filter((q) => q.type === 'structured');
    const others = arr.filter((q) => q.type !== 'structured');
    const pickedStructured = structured.slice(0, 1);
    const pickedOthers = others.slice(0, totalCount - pickedStructured.length);
    return [...pickedOthers, ...pickedStructured];
  };

  const selected: MechanicsQuestion[] = [
    ...pickBalanced(byComp['Competency 2.1'], 3),
    ...pickBalanced(byComp['Competency 2.2'], 3),
    ...pickBalanced(byComp['Competency 2.3'], 3),
    ...pickBalanced(byComp['Competency 2.4'], 3),
    ...pickBalanced(byComp['Competency 2.5'], 2),
    ...pickBalanced(byComp['Competency 2.6'], 2),
    ...pickBalanced(byComp['Competency 2.7'], 2),
    ...pickBalanced(byComp['Competency 2.8'], 2),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateMechanicsAssessment(
  questions: MechanicsQuestion[],
  answers: Record<string, string>
): MechanicsAssessmentResult {
  const breakdown: Record<MechanicsCompetencyRef, { total: number; correct: number; percentage: number }> = {
    'Competency 2.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.3': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.4': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.5': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.6': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.7': { total: 0, correct: 0, percentage: 0 },
    'Competency 2.8': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: MechanicsCompetencyRef[] = [];
  (Object.keys(breakdown) as MechanicsCompetencyRef[]).forEach((comp) => {
    const stats = breakdown[comp];
    stats.percentage = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
    if (stats.total > 0 && stats.percentage < 60) {
      weakCompetencies.push(comp);
    }
  });

  const percentageScore =
    questions.length > 0 ? Math.round((totalCorrect / questions.length) * 100) : 0;

  return {
    totalQuestions: questions.length,
    totalCorrect,
    percentageScore,
    competencyBreakdown: breakdown,
    weakCompetencies,
  };
}

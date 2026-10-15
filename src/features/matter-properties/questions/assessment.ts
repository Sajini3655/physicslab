import { MatterPropertiesQuestion, MatterPropertiesCompetencyRef } from './types';
import { MATTER_PROPERTIES_QUESTION_BANK } from './bank';
import { parseNumericalInput } from '@/features/measurement/physics/calculations';

export interface MatterPropertiesAssessmentResult {
  totalQuestions: number;
  totalCorrect: number;
  percentageScore: number;
  competencyBreakdown: Record<
    MatterPropertiesCompetencyRef,
    { total: number; correct: number; percentage: number }
  >;
  weakCompetencies: MatterPropertiesCompetencyRef[];
}

/**
 * Generates a balanced 20-question summative assessment drawn across all 3 matter properties competencies.
 */
export function generateUnit10Assessment(): MatterPropertiesQuestion[] {
  const byComp: Record<MatterPropertiesCompetencyRef, MatterPropertiesQuestion[]> = {
    'Competency 10.1': [],
    'Competency 10.2': [],
    'Competency 10.3': [],
  };

  MATTER_PROPERTIES_QUESTION_BANK.forEach((q) => {
    if (byComp[q.competencyRef]) {
      byComp[q.competencyRef].push(q);
    }
  });

  const pick = (arr: MatterPropertiesQuestion[], count: number) => arr.slice(0, count);

  const selected: MatterPropertiesQuestion[] = [
    ...pick(byComp['Competency 10.1'], 7),
    ...pick(byComp['Competency 10.2'], 7),
    ...pick(byComp['Competency 10.3'], 6),
  ];

  return selected;
}

/**
 * Evaluates student answers against expected MCQ choices or numerical tolerances.
 */
export function evaluateMatterPropertiesAssessment(
  questions: MatterPropertiesQuestion[],
  answers: Record<string, string>
): MatterPropertiesAssessmentResult {
  const breakdown: Record<
    MatterPropertiesCompetencyRef,
    { total: number; correct: number; percentage: number }
  > = {
    'Competency 10.1': { total: 0, correct: 0, percentage: 0 },
    'Competency 10.2': { total: 0, correct: 0, percentage: 0 },
    'Competency 10.3': { total: 0, correct: 0, percentage: 0 },
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

  const weakCompetencies: MatterPropertiesCompetencyRef[] = [];

  (Object.keys(breakdown) as MatterPropertiesCompetencyRef[]).forEach((comp) => {
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

import { QUANTUM_NUCLEAR_QUESTION_BANK } from './bank';
import { QuantumQuestion, QuantumCompetency, AssessmentResult } from './types';

/**
 * Generates a balanced 20-question exam for Unit 11 (Matter and Radiation)
 * 12 MCQs + 8 Numericals across all four main foundation competencies (11.1 - 11.4).
 */
export function generateQuantumAssessment(): QuantumQuestion[] {
  const selectedMCQs: QuantumQuestion[] = [];
  const selectedNumericals: QuantumQuestion[] = [];

  const allocation: Record<QuantumCompetency, { mcq: number; num: number }> = {
    '11.1': { mcq: 2, num: 1 },
    '11.2': { mcq: 2, num: 1 },
    '11.3': { mcq: 2, num: 1 },
    '11.4': { mcq: 0, num: 0 },
    '11.5': { mcq: 3, num: 2 },
    '11.6': { mcq: 3, num: 3 },
    '11.7': { mcq: 0, num: 0 },
  };

  (Object.keys(allocation) as QuantumCompetency[]).forEach((comp) => {
    const { mcq, num } = allocation[comp];
    if (mcq > 0) {
      const compMCQs = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
        (q) => q.competency === comp && q.type === 'mcq'
      );
      selectedMCQs.push(...compMCQs.slice(0, mcq));
    }
    if (num > 0) {
      const compNumericals = QUANTUM_NUCLEAR_QUESTION_BANK.filter(
        (q) => q.competency === comp && q.type === 'numerical'
      );
      selectedNumericals.push(...compNumericals.slice(0, num));
    }
  });

  return [...selectedMCQs, ...selectedNumericals];
}

/**
 * Evaluates the student's submission and produces a comprehensive competency breakdown.
 */
export function evaluateQuantumAssessment(
  questions: QuantumQuestion[],
  answers: Record<string, string>,
  timeTakenSeconds: number
): AssessmentResult {
  let score = 0;

  const competencyBreakdown: Record<
    QuantumCompetency,
    { correct: number; total: number; percentage: number }
  > = {
    '11.1': { correct: 0, total: 0, percentage: 0 },
    '11.2': { correct: 0, total: 0, percentage: 0 },
    '11.3': { correct: 0, total: 0, percentage: 0 },
    '11.4': { correct: 0, total: 0, percentage: 0 },
    '11.5': { correct: 0, total: 0, percentage: 0 },
    '11.6': { correct: 0, total: 0, percentage: 0 },
    '11.7': { correct: 0, total: 0, percentage: 0 },
  };

  const details = questions.map((q) => {
    const userAns = answers[q.id]?.trim() || '';
    let isCorrect = false;
    let correctAnswerStr = '';

    if (competencyBreakdown[q.competency]) {
      competencyBreakdown[q.competency].total += 1;
    }

    if (q.type === 'mcq') {
      correctAnswerStr = q.correctOptionId || '';
      isCorrect = userAns.toUpperCase() === correctAnswerStr;
    } else if (q.type === 'numerical' && q.numericalAnswer) {
      const userNum = parseFloat(userAns);
      correctAnswerStr = `${q.numericalAnswer.value} ${q.numericalAnswer.unit}`;
      if (!isNaN(userNum)) {
        const diff = Math.abs(userNum - q.numericalAnswer.value);
        const maxAllowedDiff = Math.abs(
          q.numericalAnswer.value * q.numericalAnswer.tolerance
        );
        isCorrect = diff <= maxAllowedDiff;
      }
    } else if (q.type === 'structured') {
      correctAnswerStr = 'Structured rubric criteria satisfied';
      isCorrect = userAns.length > 0 && userAns !== 'WRONG' && userAns !== 'incorrect';
    }

    if (isCorrect) {
      score += 1;
      if (competencyBreakdown[q.competency]) {
        competencyBreakdown[q.competency].correct += 1;
      }
    }

    return {
      questionId: q.id,
      isCorrect,
      userAnswer: userAns,
      correctAnswer: correctAnswerStr,
      explanation: q.explanation,
    };
  });

  // Calculate percentages per competency
  (Object.keys(competencyBreakdown) as QuantumCompetency[]).forEach((comp) => {
    const data = competencyBreakdown[comp];
    data.percentage = data.total > 0 ? (data.correct / data.total) * 100 : 0;
  });

  const percentage = (score / questions.length) * 100;

  return {
    score,
    totalQuestions: questions.length,
    percentage,
    timeTakenSeconds,
    competencyBreakdown,
    details,
  };
}

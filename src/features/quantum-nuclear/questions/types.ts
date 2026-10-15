import { StructuredSubPart } from '@/shared/curriculum/types';

export type QuantumCompetency =
  | '11.1' // Black-Body Radiation & Quantum Theory
  | '11.2' // Photoelectric Effect & Photons
  | '11.3' // Wave-Particle Duality
  | '11.4' // X-Rays
  | '11.5' // Atomic Models & Line Spectra
  | '11.6' // Nuclear Physics, Radioactivity & Nuclear Energy
  | '11.7'; // Fundamental Particles & Interactions

export type QuestionType = 'mcq' | 'numerical' | 'structured';
export type DifficultyLevel = 'foundation' | 'intermediate' | 'advanced';

export interface BilingualText {
  en: string;
  si: string;
}

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: BilingualText;
}

export interface QuantumQuestion {
  id: string;
  competency: QuantumCompetency;
  type: QuestionType;
  difficulty: DifficultyLevel;
  question: BilingualText;
  parts?: StructuredSubPart[];
  options?: QuestionOption[]; // For MCQs
  correctOptionId?: 'A' | 'B' | 'C' | 'D' | 'E'; // For MCQs
  numericalAnswer?: {
    value: number;
    unit: string;
    tolerance: number; // e.g. 0.05 for 5%
  };
  hint: BilingualText;
  explanation: BilingualText;
}

export interface AssessmentResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  timeTakenSeconds: number;
  competencyBreakdown: Record<
    QuantumCompetency,
    { correct: number; total: number; percentage: number }
  >;
  details: {
    questionId: string;
    isCorrect: boolean;
    userAnswer: string;
    correctAnswer: string;
    explanation: BilingualText;
  }[];
}

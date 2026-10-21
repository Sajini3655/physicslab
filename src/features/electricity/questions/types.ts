import { StructuredSubPart } from '@/shared/curriculum/types';

export type ElectricityCategory =
  | 'current-drift-velocity'
  | 'resistance-temperature'
  | 'dc-energy-power'
  | 'emf-internal-resistance'
  | 'kirchhoff-laws-networks'
  | 'potentiometer-bridge'
  | 'electromagnetic-induction'
  | 'ac-transformers'
  | 'structured-practical';

export type ElectricityDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type ElectricityQuestionType = 'mcq' | 'numerical' | 'structured';

export type ElectricityCompetencyRef =
  | 'Competency 8.1'
  | 'Competency 8.2'
  | 'Competency 8.3'
  | 'Competency 8.4'
  | 'Competency 8.5'
  | 'Competency 8.6';

export interface ElectricityQuestion {
  id: string;
  competencyRef: ElectricityCompetencyRef;
  category: ElectricityCategory;
  difficulty: ElectricityDifficulty;
  type: ElectricityQuestionType;
  question: {
    en: string;
    si: string;
  };
  options?: Array<{
    id: string;
    text: {
      en: string;
      si: string;
    };
  }>;
  correctOptionId?: string;
  expected?: number;
  tolerance?: number;
  unit?: {
    en: string;
    si: string;
  };
  parts?: StructuredSubPart[];
  hint: {
    en: string;
    si: string;
  };
  solution: {
    en: string;
    si: string;
  };
}

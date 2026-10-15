import { StructuredSubPart } from '@/shared/curriculum/types';

export type ThermalCategory =
  | 'thermometry'
  | 'thermal-expansion'
  | 'calorimetry'
  | 'latent-heat'
  | 'cooling-laws'
  | 'gas-laws'
  | 'kinetic-theory'
  | 'heat-transfer'
  | 'thermodynamics-first-law'
  | 'structured-practical';

export type ThermalDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type ThermalQuestionType = 'mcq' | 'numerical' | 'structured';

export type ThermalCompetencyRef =
  | 'Competency 4.1'
  | 'Competency 4.2'
  | 'Competency 4.3'
  | 'Competency 4.4'
  | 'Competency 4.5'
  | 'Competency 4.6'
  | 'Competency 4.7'
  | 'Competency 4.8'
  | 'Competency 4.9';

export interface ThermalQuestion {
  id: string;
  competencyRef: ThermalCompetencyRef;
  category: ThermalCategory;
  difficulty: ThermalDifficulty;
  type: ThermalQuestionType;
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

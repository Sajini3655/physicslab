import { StructuredSubPart } from '@/shared/curriculum/types';

export type MagnetismCategory =
  | 'magnetic-flux-field'
  | 'terrestrial-magnetism'
  | 'moving-charge-lorentz'
  | 'velocity-selector-hall'
  | 'current-force-wires'
  | 'galvanometer-torque'
  | 'meter-conversions'
  | 'current-magnetic-fields'
  | 'structured-practical';

export type MagnetismDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type MagnetismQuestionType = 'mcq' | 'numerical' | 'structured';

export type MagnetismCompetencyRef =
  | 'Competency 7.1'
  | 'Competency 7.2'
  | 'Competency 7.3';

export interface MagnetismQuestion {
  id: string;
  competencyRef: MagnetismCompetencyRef;
  category: MagnetismCategory;
  difficulty: MagnetismDifficulty;
  type: MagnetismQuestionType;
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

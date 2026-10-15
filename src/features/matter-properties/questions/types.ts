import { StructuredSubPart } from '@/shared/curriculum/types';

export type MatterPropertiesCategory =
  | 'elasticity-solids'
  | 'viscosity-fluids'
  | 'surface-tension'
  | 'structured-practical';

export type MatterPropertiesDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type MatterPropertiesQuestionType = 'mcq' | 'numerical' | 'structured';

export type MatterPropertiesCompetencyRef =
  | 'Competency 10.1'
  | 'Competency 10.2'
  | 'Competency 10.3';

export interface MatterPropertiesQuestion {
  id: string;
  competencyRef: MatterPropertiesCompetencyRef;
  category: MatterPropertiesCategory;
  difficulty: MatterPropertiesDifficulty;
  type: MatterPropertiesQuestionType;
  question: {
    en: string;
    si: string;
  };
  parts?: StructuredSubPart[];
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
  hint: {
    en: string;
    si: string;
  };
  solution: {
    en: string;
    si: string;
  };
}

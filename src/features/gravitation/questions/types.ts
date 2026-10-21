import { StructuredSubPart } from '@/shared/curriculum/types';

export type GravitationCategory =
  | 'universal-gravitation'
  | 'field-intensity'
  | 'gravitational-potential'
  | 'orbital-mechanics'
  | 'geostationary-satellites'
  | 'escape-velocity'
  | 'structured-practical';

export type GravitationDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type GravitationQuestionType = 'mcq' | 'numerical' | 'structured';

export type GravitationCompetencyRef =
  | 'Competency 5.1'
  | 'Competency 5.2';

export interface GravitationQuestion {
  id: string;
  competencyRef: GravitationCompetencyRef;
  category: GravitationCategory;
  difficulty: GravitationDifficulty;
  type: GravitationQuestionType;
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

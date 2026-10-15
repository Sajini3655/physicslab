import { StructuredSubPart } from '@/shared/curriculum/types';

export type ElectrostaticsCategory =
  | 'coulomb-law'
  | 'electric-field'
  | 'electric-potential'
  | 'gauss-law-conductors'
  | 'capacitance-dielectrics'
  | 'capacitor-energy'
  | 'structured-practical';

export type ElectrostaticsDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type ElectrostaticsQuestionType = 'mcq' | 'numerical' | 'structured';

export type ElectrostaticsCompetencyRef =
  | 'Competency 6.1'
  | 'Competency 6.2'
  | 'Competency 6.3'
  | 'Competency 6.4';

export interface ElectrostaticsQuestion {
  id: string;
  competencyRef: ElectrostaticsCompetencyRef;
  category: ElectrostaticsCategory;
  difficulty: ElectrostaticsDifficulty;
  type: ElectrostaticsQuestionType;
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

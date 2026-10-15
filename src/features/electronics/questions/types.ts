import { StructuredSubPart } from '@/shared/curriculum/types';

export type ElectronicsCategory =
  | 'semiconductors-doping'
  | 'pn-junction-diodes'
  | 'rectification-power-supplies'
  | 'bjt-amplifiers'
  | 'operational-amplifiers'
  | 'digital-logic-gates'
  | 'structured-practical';

export type ElectronicsDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type ElectronicsQuestionType = 'mcq' | 'numerical' | 'structured';

export type ElectronicsCompetencyRef =
  | 'Competency 9.1'
  | 'Competency 9.2'
  | 'Competency 9.3'
  | 'Competency 9.4';

export interface ElectronicsQuestion {
  id: string;
  competencyRef: ElectronicsCompetencyRef;
  category: ElectronicsCategory;
  difficulty: ElectronicsDifficulty;
  type: ElectronicsQuestionType;
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

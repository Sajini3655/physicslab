export type MechanicsCategory =
  | 'kinematics'
  | 'projectiles'
  | 'newtons-laws-momentum'
  | 'force-equilibrium'
  | 'moments-and-couples'
  | 'work-energy-power'
  | 'circular-motion'
  | 'rotational-dynamics'
  | 'hydrostatics-manometry'
  | 'flotation-hydrometry'
  | 'fluid-dynamics'
  | 'structured-practical';

import { StructuredSubPart } from '@/shared/curriculum/types';

export type MechanicsDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type MechanicsQuestionType = 'mcq' | 'numerical' | 'structured';

export type MechanicsCompetencyRef =
  | 'Competency 2.1'
  | 'Competency 2.2'
  | 'Competency 2.3'
  | 'Competency 2.4'
  | 'Competency 2.5'
  | 'Competency 2.6'
  | 'Competency 2.7'
  | 'Competency 2.8';

export interface MechanicsQuestion {
  id: string;
  competencyRef: MechanicsCompetencyRef;
  category: MechanicsCategory;
  difficulty: MechanicsDifficulty;
  type: MechanicsQuestionType;
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

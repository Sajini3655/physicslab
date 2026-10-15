export type QuestionCategory =
  | 'scientific-investigation'
  | 'units-and-prefixes'
  | 'dimensional-analysis'
  | 'errors-and-uncertainties'
  | 'instruments'
  | 'practical-reasoning'
  | 'vectors';

export type QuestionDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type QuestionType = 'mcq' | 'numerical';

export interface MeasurementQuestion {
  id: string;
  competencyRef: 'Competency 1.1' | 'Competency 1.2' | 'Competency 1.3' | 'Competency 1.4' | 'Competency 1.5';
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  type: QuestionType;
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
  hint: {
    en: string;
    si: string;
  };
  solution: {
    en: string;
    si: string;
  };
}

import { StructuredSubPart } from '@/shared/curriculum/types';

export type WavesCategory =
  | 'shm-oscillations'
  | 'wave-properties'
  | 'sound-doppler'
  | 'stationary-waves-strings'
  | 'stationary-waves-pipes'
  | 'geometrical-optics-prisms'
  | 'thin-lenses-instruments'
  | 'wave-optics-interference'
  | 'diffraction-polarization'
  | 'electromagnetic-spectrum'
  | 'human-eye-vision'
  | 'structured-practical';

export type WavesDifficulty = 'foundation' | 'intermediate' | 'advanced';

export type WavesQuestionType = 'mcq' | 'numerical' | 'structured';

export type WavesCompetencyRef =
  | 'Competency 3.1'
  | 'Competency 3.2'
  | 'Competency 3.3'
  | 'Competency 3.4'
  | 'Competency 3.5'
  | 'Competency 3.6'
  | 'Competency 3.7'
  | 'Competency 3.8'
  | 'Competency 3.9'
  | 'Competency 3.10'
  | 'Competency 3.11';

export interface WavesQuestion {
  id: string;
  competencyRef: WavesCompetencyRef;
  category: WavesCategory;
  difficulty: WavesDifficulty;
  type: WavesQuestionType;
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

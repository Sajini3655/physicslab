export type Locale = 'en' | 'si';

export type LessonStatus = 'ready' | 'outline';

export interface LearningObjective {
  en: string;
  si: string;
}

export interface PracticeQuestion {
  id: string;
  question: {
    en: string;
    si: string;
  };
  hint?: {
    en: string;
    si: string;
  };
  answer?: {
    en: string;
    si: string;
  };
}

export interface LessonContent {
  introduction: {
    en: string;
    si: string;
  };
  keyConcepts: Array<{
    title: {
      en: string;
      si: string;
    };
    description: {
      en: string;
      si: string;
    };
    formula?: string;
  }>;
  commonMisconceptions?: Array<{
    misconception: {
      en: string;
      si: string;
    };
    clarification: {
      en: string;
      si: string;
    };
  }>;
  practiceQuestions?: PracticeQuestion[];
}

export interface LessonDefinition {
  id: string;
  slug: string;
  unitSlug: string;
  unitOrder: number;
  lessonOrder: number;
  syllabusRef: string; // e.g. "Competency 2.1"
  title: {
    en: string;
    si: string;
  };
  summary: {
    en: string;
    si: string;
  };
  learningObjectives: LearningObjective[];
  topicOutline: Array<{
    en: string;
    si: string;
  }>;
  status: LessonStatus;
  hasSimulation: boolean;
  simulationType?: 'uniform-motion';
  content?: LessonContent;
}

export interface UnitDefinition {
  id: string;
  slug: string;
  syllabusOrder: number;
  title: {
    en: string;
    si: string;
  };
  description: {
    en: string;
    si: string;
  };
  competencyRange: string;
  lessons: LessonDefinition[];
}

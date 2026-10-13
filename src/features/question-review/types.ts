import type {
  UniformMotionDraft,
  UniformMotionCandidate,
  DisplacementUnit,
  VelocityUnit,
  TimeUnit,
  ScenarioTarget,
} from '@/shared/scenarios/uniform-motion';

export type {
  UniformMotionDraft,
  UniformMotionCandidate,
  DisplacementUnit,
  VelocityUnit,
  TimeUnit,
  ScenarioTarget,
};

export interface InterpretationSuccessResponse {
  status: 'success';
  draft: UniformMotionDraft;
}

export interface InterpretationUnsupportedResponse {
  status: 'unsupported';
  reason: string;
  details?: string;
}

export interface InterpretationErrorResponse {
  status: 'error';
  error: {
    code: string;
    message: string;
    details?: {
      retryAfter?: string;
      [key: string]: unknown;
    };
  };
}

export type InterpretationResponse =
  | InterpretationSuccessResponse
  | InterpretationUnsupportedResponse
  | InterpretationErrorResponse;

export interface StoredScenarioReview {
  version: 1;
  draft: UniformMotionDraft | null;
  interpretedSource: {
    originalText: string;
    locale: 'en' | 'si';
  } | null;
  temporaryValues: {
    s?: string;
    u?: string;
    t?: string;
  };
}

export interface CandidateReadinessResult {
  isReady: boolean;
  isStale: boolean;
  candidate: UniformMotionCandidate | null;
  issues: string[];
}

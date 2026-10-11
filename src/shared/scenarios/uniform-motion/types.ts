/**
 * Uniform Motion Scenario Type Definitions
 * Re-exports canonical contract types from schema.ts and provides simulation-specific types.
 */

export type {
  UniformMotionDraft,
  UniformMotionCandidate,
  ConfirmedUniformMotionScenario,
  PhysicsValidationResult,
} from './schema';

export type DisplacementUnit = 'm' | 'km' | 'cm';
export type VelocityUnit = 'm/s' | 'km/h';
export type TimeUnit = 's' | 'min' | 'h';

export type ScenarioTarget = 's' | 'u' | 't';

export type PhysicsValidationIssueCode =
  | 'MISSING_QUANTITY'
  | 'INVALID_TARGET'
  | 'UNSUPPORTED_UNIT'
  | 'NEGATIVE_TIME'
  | 'SIGN_MISMATCH'
  | 'INDETERMINATE_TIME'
  | 'INDETERMINATE_VELOCITY'
  | 'IMPOSSIBLE_STATIONARY_DISPLACEMENT'
  | 'IMPOSSIBLE_ZERO_DURATION_DISPLACEMENT'
  | 'NON_FINITE_VALUE'
  | 'DIVISION_BY_ZERO';

export interface PhysicsValidationIssue {
  code: PhysicsValidationIssueCode | string;
  field?: 'displacement' | 'velocity' | 'time' | 'target' | 'axis' | 'general' | 's' | 'u' | 't';
  message: string;
  messageKey?: string;
}

export interface NormalizedPhysicalState {
  displacement: number; // in metres (s), signed
  velocity: number;     // in m/s (u), signed
  time: number;         // in seconds (t >= 0)
  target: ScenarioTarget;
  targetUnit: string;
}

export interface AnswerVisibilityPolicy {
  hideDisplacementEndpoints: boolean;
  hideVelocityBadge: boolean;
  hideDurationTimer: boolean;
}

export function getAnswerVisibilityPolicy(target: ScenarioTarget): AnswerVisibilityPolicy {
  return {
    hideDisplacementEndpoints: target === 's',
    hideVelocityBadge: target === 'u',
    hideDurationTimer: target === 't',
  };
}

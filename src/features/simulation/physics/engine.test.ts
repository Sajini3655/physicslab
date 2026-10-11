import { describe, it, expect } from 'vitest';
import {
  validateUniformMotion,
  solveUniformMotion,
  confirmScenario,
  calculateSimulationFrame,
  cleanPrecision,
} from './engine';
import {
  UniformMotionCandidate,
  toBaseDisplacement,
  fromBaseDisplacement,
  toBaseVelocity,
  fromBaseVelocity,
  toBaseTime,
  fromBaseTime,
  getAnswerVisibilityPolicy,
  validCandidateUnknownS,
  validCandidateUnknownU,
  validCandidateUnknownT,
  physicallyIndeterminateCandidate,
} from '@/shared/scenarios/uniform-motion';

describe('Physics Engine - Required Milestone Table Calculations', () => {
  it('Milestone 1: Given u = 20 m/s, t = 10 s -> Target Displacement s = 200 m', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownS,
      target: 's',
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 20, unit: 'm/s' },
      t: { type: 'given', value: 10, unit: 's' },
    };

    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const physical = solveUniformMotion(candidate);
    expect(physical.displacement).toBe(200);
    expect(physical.velocity).toBe(20);
    expect(physical.time).toBe(10);
    expect(physical.target).toBe('s');
    expect(physical.targetUnit).toBe('m');
  });

  it('Milestone 2: Given s = -50 m, t = 5 s -> Target Velocity u = -10 m/s', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownU,
      target: 'u',
      s: { type: 'given', value: -50, unit: 'm' },
      u: { type: 'unknown', unit: 'm/s' },
      t: { type: 'given', value: 5, unit: 's' },
    };

    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const physical = solveUniformMotion(candidate);
    expect(physical.displacement).toBe(-50);
    expect(physical.velocity).toBe(-10);
    expect(physical.time).toBe(5);
    expect(physical.target).toBe('u');
    expect(physical.targetUnit).toBe('m/s');
  });

  it('Milestone 3: Given s = -120 km, u = -60 km/h -> Target Time t = 2 h (7200 s)', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownT,
      target: 't',
      s: { type: 'given', value: -120, unit: 'km' },
      u: { type: 'given', value: -60, unit: 'km/h' },
      t: { type: 'unknown', unit: 'h' },
    };

    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const physical = solveUniformMotion(candidate);
    expect(physical.displacement).toBe(-120000);
    expect(Math.abs(physical.velocity - (-60 / 3.6))).toBeLessThan(1e-6);
    expect(physical.time).toBe(7200); // 2 hours = 7200 s
    expect(fromBaseTime(physical.time, 'h')).toBe(2);
    expect(physical.target).toBe('t');
    expect(physical.targetUnit).toBe('h');
  });
});

describe('Physics Engine - Physical Validation & Edge Cases', () => {
  it('validates stationary motion (u = 0, s = 0)', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownS,
      target: 's',
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 0, unit: 'm/s' },
      t: { type: 'given', value: 10, unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const physical = solveUniformMotion(candidate);
    expect(physical.displacement).toBe(0);
    expect(physical.velocity).toBe(0);
    expect(physical.time).toBe(10);
  });

  it('validates zero duration motion (t = 0)', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownS,
      target: 's',
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 15, unit: 'm/s' },
      t: { type: 'given', value: 0, unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const physical = solveUniformMotion(candidate);
    expect(physical.displacement).toBe(0);
    expect(physical.time).toBe(0);
  });

  it('rejects opposite signs for displacement and velocity when solving for time', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownT,
      target: 't',
      s: { type: 'given', value: 100, unit: 'm' },
      u: { type: 'given', value: -10, unit: 'm/s' },
      t: { type: 'unknown', unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(false);
    if (!valResult.isValid) {
      expect(valResult.issues.some((i) => i.code === 'SIGN_MISMATCH')).toBe(true);
    }
  });

  it('rejects indeterminate time when both s=0 and u=0', () => {
    const valResult = validateUniformMotion(physicallyIndeterminateCandidate);
    expect(valResult.isValid).toBe(false);
    if (!valResult.isValid) {
      expect(valResult.issues.some((i) => i.code === 'INDETERMINATE_TIME')).toBe(true);
    }
  });

  it('rejects impossible displacement with stationary velocity when solving for time', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownT,
      target: 't',
      s: { type: 'given', value: 50, unit: 'm' },
      u: { type: 'given', value: 0, unit: 'm/s' },
      t: { type: 'unknown', unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(false);
    if (!valResult.isValid) {
      expect(valResult.issues.some((i) => i.code === 'IMPOSSIBLE_STATIONARY_DISPLACEMENT')).toBe(true);
    }
  });

  it('rejects indeterminate velocity when both s=0 and t=0', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownU,
      target: 'u',
      s: { type: 'given', value: 0, unit: 'm' },
      u: { type: 'unknown', unit: 'm/s' },
      t: { type: 'given', value: 0, unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(false);
    if (!valResult.isValid) {
      expect(valResult.issues.some((i) => i.code === 'INDETERMINATE_VELOCITY')).toBe(true);
    }
  });

  it('rejects non-zero displacement in zero duration when solving for velocity', () => {
    const candidate: UniformMotionCandidate = {
      ...validCandidateUnknownU,
      target: 'u',
      s: { type: 'given', value: 100, unit: 'm' },
      u: { type: 'unknown', unit: 'm/s' },
      t: { type: 'given', value: 0, unit: 's' },
    };
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(false);
    if (!valResult.isValid) {
      expect(valResult.issues.some((i) => i.code === 'IMPOSSIBLE_ZERO_DURATION_DISPLACEMENT')).toBe(true);
    }
  });
});

describe('Scenario Confirmation Lifecycle Flow', () => {
  it('creates canonical ConfirmedUniformMotionScenario matching candidate revision and scenarioId', () => {
    const candidate = validCandidateUnknownS;
    const valResult = validateUniformMotion(candidate);
    expect(valResult.isValid).toBe(true);

    const confirmed = confirmScenario(candidate, valResult);
    expect(confirmed.confirmationId).toBe(candidate.scenarioId);
    expect(confirmed.confirmedRevision).toBe(candidate.revision);
    expect(confirmed.scenario.scenarioId).toBe(candidate.scenarioId);
    expect(typeof confirmed.confirmedAt).toBe('string');
  });

  it('throws error when attempting to confirm with a mismatched revision', () => {
    const candidate = { ...validCandidateUnknownS, revision: 2 };
    const valResult = { scenarioId: candidate.scenarioId, revision: 1, isValid: true as const };

    expect(() => confirmScenario(candidate, valResult)).toThrow();
  });

  it('throws error when attempting to confirm an invalid result', () => {
    const candidate = validCandidateUnknownS;
    const invalidResult = {
      scenarioId: candidate.scenarioId,
      revision: candidate.revision,
      isValid: false as const,
      issues: [{ code: 'TEST_ERROR', message: 'Error' }],
    };

    expect(() => confirmScenario(candidate, invalidResult)).toThrow();
  });
});

describe('Simulation Frame Calculations', () => {
  it('calculates frame progression accurately and stops at exact endpoint', () => {
    const valResult = validateUniformMotion(validCandidateUnknownS);
    const confirmed = confirmScenario(validCandidateUnknownS, valResult);

    // Initial frame at t = 0
    const frame0 = calculateSimulationFrame(confirmed, 0);
    expect(frame0.currentElapsedSeconds).toBe(0);
    expect(frame0.currentDisplacementMetres).toBe(0);
    expect(frame0.progressRatio).toBe(0);
    expect(frame0.isComplete).toBe(false);

    // Midpoint frame at t = 5 s (50% of 10s => s = 100m)
    const frameMid = calculateSimulationFrame(confirmed, 5);
    expect(frameMid.currentElapsedSeconds).toBe(5);
    expect(frameMid.currentDisplacementMetres).toBe(100);
    expect(frameMid.progressRatio).toBe(0.5);
    expect(frameMid.isComplete).toBe(false);

    // End frame at t = 10 s (100% => s = 200m)
    const frameEnd = calculateSimulationFrame(confirmed, 10);
    expect(frameEnd.currentElapsedSeconds).toBe(10);
    expect(frameEnd.currentDisplacementMetres).toBe(200);
    expect(frameEnd.progressRatio).toBe(1);
    expect(frameEnd.isComplete).toBe(true);

    // Overshot time clamps safely to endpoint
    const frameOver = calculateSimulationFrame(confirmed, 15);
    expect(frameOver.currentElapsedSeconds).toBe(10);
    expect(frameOver.currentDisplacementMetres).toBe(200);
    expect(frameOver.progressRatio).toBe(1);
    expect(frameOver.isComplete).toBe(true);
  });

  it('handles zero duration frame safely', () => {
    const zeroCand: UniformMotionCandidate = {
      ...validCandidateUnknownS,
      target: 's',
      s: { type: 'unknown', unit: 'm' },
      u: { type: 'given', value: 0, unit: 'm/s' },
      t: { type: 'given', value: 0, unit: 's' },
    };
    const valResult = validateUniformMotion(zeroCand);
    const confirmed = confirmScenario(zeroCand, valResult);

    const frame = calculateSimulationFrame(confirmed, 0);
    expect(frame.currentElapsedSeconds).toBe(0);
    expect(frame.progressRatio).toBe(1);
    expect(frame.isComplete).toBe(true);
  });
});

describe('Answer Visibility Policy', () => {
  it('hides displacement endpoint when target is displacement (s)', () => {
    const policy = getAnswerVisibilityPolicy('s');
    expect(policy.hideDisplacementEndpoints).toBe(true);
    expect(policy.hideVelocityBadge).toBe(false);
    expect(policy.hideDurationTimer).toBe(false);
  });

  it('hides velocity badge when target is velocity (u)', () => {
    const policy = getAnswerVisibilityPolicy('u');
    expect(policy.hideDisplacementEndpoints).toBe(false);
    expect(policy.hideVelocityBadge).toBe(true);
    expect(policy.hideDurationTimer).toBe(false);
  });

  it('hides duration timer when target is elapsed time (t)', () => {
    const policy = getAnswerVisibilityPolicy('t');
    expect(policy.hideDisplacementEndpoints).toBe(false);
    expect(policy.hideVelocityBadge).toBe(false);
    expect(policy.hideDurationTimer).toBe(true);
  });
});

describe('Unit Conversion Utilities', () => {
  it('converts displacement accurately across m, km, cm', () => {
    expect(toBaseDisplacement(5, 'km')).toBe(5000);
    expect(fromBaseDisplacement(5000, 'km')).toBe(5);
    expect(toBaseDisplacement(150, 'cm')).toBe(1.5);
    expect(fromBaseDisplacement(1.5, 'cm')).toBe(150);
  });

  it('converts velocity accurately across m/s and km/h', () => {
    expect(toBaseVelocity(72, 'km/h')).toBe(20);
    expect(fromBaseVelocity(20, 'km/h')).toBe(72);
  });

  it('converts time accurately across s, min, h', () => {
    expect(toBaseTime(2, 'h')).toBe(7200);
    expect(fromBaseTime(7200, 'h')).toBe(2);
    expect(toBaseTime(5, 'min')).toBe(300);
    expect(fromBaseTime(300, 'min')).toBe(5);
  });

  it('cleans floating point artifacts correctly', () => {
    expect(cleanPrecision(0.1 + 0.2)).toBe(0.3);
    expect(cleanPrecision(7199.999999999999)).toBe(7200);
  });
});

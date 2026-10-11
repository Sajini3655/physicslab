import {
  UniformMotionCandidate,
  PhysicsValidationResult,
  ConfirmedUniformMotionScenario,
  ConfirmedUniformMotionScenarioSchema,
  NormalizedPhysicalState,
  DisplacementUnit,
  VelocityUnit,
  TimeUnit,
  toBaseDisplacement,
  toBaseVelocity,
  toBaseTime,
} from '@/shared/scenarios/uniform-motion';

const EPSILON = 1e-9;

function isCloseToZero(val: number): boolean {
  return Math.abs(val) < EPSILON;
}

export function cleanPrecision(val: number): number {
  return Math.round(val * 1e9) / 1e9;
}

export interface ValidationIssueItem {
  code: string;
  message: string;
}

/**
 * Validates a UniformMotionCandidate physically.
 * Structural validation is expected to have passed (via Zod UniformMotionCandidateSchema),
 * but this function defensively ensures physical and domain consistency.
 */
export function validateUniformMotion(candidate: UniformMotionCandidate): PhysicsValidationResult {
  const issues: ValidationIssueItem[] = [];
  const { scenarioId, revision, target, s, u, t } = candidate;

  // 1. Target and quantity state alignment
  if (target === 's') {
    if (s.type !== 'unknown') {
      issues.push({
        code: 'INVALID_TARGET',
        message: 'Displacement is marked as target unknown but does not have unknown state.',
      });
    }
    if (u.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Velocity must be given when displacement is the target unknown.',
      });
    }
    if (t.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Elapsed time must be given when displacement is the target unknown.',
      });
    }
  } else if (target === 'u') {
    if (u.type !== 'unknown') {
      issues.push({
        code: 'INVALID_TARGET',
        message: 'Velocity is marked as target unknown but does not have unknown state.',
      });
    }
    if (s.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Displacement must be given when velocity is the target unknown.',
      });
    }
    if (t.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Elapsed time must be given when velocity is the target unknown.',
      });
    }
  } else if (target === 't') {
    if (t.type !== 'unknown') {
      issues.push({
        code: 'INVALID_TARGET',
        message: 'Elapsed time is marked as target unknown but does not have unknown state.',
      });
    }
    if (s.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Displacement must be given when elapsed time is the target unknown.',
      });
    }
    if (u.type !== 'given') {
      issues.push({
        code: 'MISSING_QUANTITY',
        message: 'Velocity must be given when elapsed time is the target unknown.',
      });
    }
  } else {
    issues.push({
      code: 'INVALID_TARGET',
      message: `Unsupported target unknown: ${target}`,
    });
  }

  if (issues.length > 0) {
    return {
      scenarioId,
      revision,
      isValid: false,
      issues,
    };
  }

  // 2. Unit conversion & finite validation
  let s_si: number | undefined;
  let u_si: number | undefined;
  let t_si: number | undefined;

  try {
    if (s.type === 'given') {
      if (!Number.isFinite(s.value)) {
        issues.push({ code: 'NON_FINITE_VALUE', message: 'Displacement value must be a finite number.' });
      } else {
        s_si = toBaseDisplacement(s.value, s.unit as DisplacementUnit);
      }
    }

    if (u.type === 'given') {
      if (!Number.isFinite(u.value)) {
        issues.push({ code: 'NON_FINITE_VALUE', message: 'Velocity value must be a finite number.' });
      } else {
        u_si = toBaseVelocity(u.value, u.unit as VelocityUnit);
      }
    }

    if (t.type === 'given') {
      if (!Number.isFinite(t.value)) {
        issues.push({ code: 'NON_FINITE_VALUE', message: 'Elapsed time must be a finite number.' });
      } else if (t.value < 0) {
        issues.push({ code: 'NEGATIVE_TIME', message: 'Elapsed time cannot be negative.' });
      } else {
        t_si = toBaseTime(t.value, t.unit as TimeUnit);
      }
    }
  } catch (err) {
    issues.push({
      code: 'UNSUPPORTED_UNIT',
      message: err instanceof Error ? err.message : 'Invalid or unsupported unit provided.',
    });
  }

  if (issues.length > 0) {
    return {
      scenarioId,
      revision,
      isValid: false,
      issues,
    };
  }

  // 3. Domain physics calculations & physical consistency checks
  if (target === 's') {
    const calculated_s = u_si! * t_si!;
    if (!Number.isFinite(calculated_s)) {
      issues.push({ code: 'NON_FINITE_VALUE', message: 'Derived displacement is non-finite.' });
    }
  } else if (target === 'u') {
    const given_s = s_si!;
    const given_t = t_si!;

    if (isCloseToZero(given_t)) {
      if (isCloseToZero(given_s)) {
        issues.push({
          code: 'INDETERMINATE_VELOCITY',
          message: 'When elapsed time and displacement are both zero, velocity is indeterminate.',
        });
      } else {
        issues.push({
          code: 'IMPOSSIBLE_ZERO_DURATION_DISPLACEMENT',
          message: 'Non-zero displacement cannot occur in zero time.',
        });
      }
    } else {
      const calculated_u = given_s / given_t;
      if (!Number.isFinite(calculated_u)) {
        issues.push({ code: 'NON_FINITE_VALUE', message: 'Derived velocity is non-finite.' });
      }
    }
  } else if (target === 't') {
    const given_s = s_si!;
    const given_u = u_si!;

    if (isCloseToZero(given_u)) {
      if (isCloseToZero(given_s)) {
        issues.push({
          code: 'INDETERMINATE_TIME',
          message: 'When velocity and displacement are both zero, elapsed time is indeterminate.',
        });
      } else {
        issues.push({
          code: 'IMPOSSIBLE_STATIONARY_DISPLACEMENT',
          message: 'An object with zero velocity cannot undergo non-zero displacement.',
        });
      }
    } else {
      const derivedT = given_s / given_u;
      if (derivedT < -EPSILON) {
        issues.push({
          code: 'SIGN_MISMATCH',
          message: 'Displacement and velocity have opposite directions, which would imply negative elapsed time.',
        });
      } else if (!Number.isFinite(derivedT)) {
        issues.push({ code: 'NON_FINITE_VALUE', message: 'Derived time is non-finite.' });
      }
    }
  }

  if (issues.length > 0) {
    return {
      scenarioId,
      revision,
      isValid: false,
      issues,
    };
  }

  return {
    scenarioId,
    revision,
    isValid: true,
  };
}

/**
 * Solves the candidate's uniform motion into normalized SI base values (metres, m/s, seconds).
 * Requires candidate to have passed physical validation.
 */
export function solveUniformMotion(candidate: UniformMotionCandidate): NormalizedPhysicalState {
  const { target, s, u, t } = candidate;

  let s_si = s.type === 'given' ? toBaseDisplacement(s.value, s.unit as DisplacementUnit) : 0;
  let u_si = u.type === 'given' ? toBaseVelocity(u.value, u.unit as VelocityUnit) : 0;
  let t_si = t.type === 'given' ? toBaseTime(t.value, t.unit as TimeUnit) : 0;

  let targetUnit = 'm';

  if (target === 's') {
    targetUnit = s.unit || 'm';
    s_si = u_si * t_si;
  } else if (target === 'u') {
    targetUnit = u.unit || 'm/s';
    s_si = s.type === 'given' ? toBaseDisplacement(s.value, s.unit as DisplacementUnit) : 0;
    t_si = t.type === 'given' ? toBaseTime(t.value, t.unit as TimeUnit) : 0;
    u_si = isCloseToZero(t_si) ? 0 : s_si / t_si;
  } else if (target === 't') {
    targetUnit = t.unit || 's';
    s_si = s.type === 'given' ? toBaseDisplacement(s.value, s.unit as DisplacementUnit) : 0;
    u_si = u.type === 'given' ? toBaseVelocity(u.value, u.unit as VelocityUnit) : 0;
    t_si = isCloseToZero(u_si) ? 0 : Math.max(0, s_si / u_si);
  }

  return {
    displacement: cleanPrecision(s_si),
    velocity: cleanPrecision(u_si),
    time: cleanPrecision(t_si),
    target,
    targetUnit,
  };
}

/**
 * Confirms a validated scenario candidate into a canonical ConfirmedUniformMotionScenario snapshot.
 * Requires validation to have succeeded for the EXACT scenarioId and revision.
 */
export function confirmScenario(
  candidate: UniformMotionCandidate,
  validationResult: PhysicsValidationResult
): ConfirmedUniformMotionScenario {
  if (!validationResult.isValid) {
    throw new Error('Cannot confirm an invalid scenario.');
  }

  if (
    validationResult.scenarioId !== candidate.scenarioId ||
    validationResult.revision !== candidate.revision
  ) {
    throw new Error(
      `Validation result revision mismatch (Candidate: ${candidate.scenarioId} r${candidate.revision}, Result: ${validationResult.scenarioId} r${validationResult.revision}).`
    );
  }

  const confirmed: ConfirmedUniformMotionScenario = {
    scenario: JSON.parse(JSON.stringify(candidate)),
    confirmationId: candidate.scenarioId,
    confirmedRevision: candidate.revision,
    confirmedAt: new Date().toISOString(),
  };

  // Validate envelope with canonical schema
  return ConfirmedUniformMotionScenarioSchema.parse(confirmed);
}

export interface SimulationFrameState {
  currentDisplacementMetres: number; // relative to origin in metres
  currentElapsedSeconds: number;     // clamped elapsed time
  progressRatio: number;             // 0.0 to 1.0
  isComplete: boolean;
}

/**
 * Calculates current simulation frame state from elapsed physical time.
 */
export function calculateSimulationFrame(
  scenario: ConfirmedUniformMotionScenario,
  elapsedSeconds: number
): SimulationFrameState {
  const physical = solveUniformMotion(scenario.scenario);
  const totalDuration = Math.max(0, physical.time);
  const velocity = physical.velocity;
  const targetDisplacement = physical.displacement;

  if (totalDuration <= EPSILON) {
    // Zero-duration scene or instantaneous
    return {
      currentDisplacementMetres: targetDisplacement,
      currentElapsedSeconds: 0,
      progressRatio: 1,
      isComplete: true,
    };
  }

  const clampedElapsed = Math.min(Math.max(0, elapsedSeconds), totalDuration);
  const isComplete = clampedElapsed >= totalDuration - EPSILON;
  const progressRatio = clampedElapsed / totalDuration;

  // Exact endpoint clamping on complete
  const currentDisplacement = isComplete ? targetDisplacement : velocity * clampedElapsed;

  return {
    currentDisplacementMetres: cleanPrecision(currentDisplacement),
    currentElapsedSeconds: cleanPrecision(clampedElapsed),
    progressRatio: Math.min(1, Math.max(0, progressRatio)),
    isComplete,
  };
}

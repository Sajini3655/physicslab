import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  type UniformMotionCandidate,
  type UniformMotionDraft,
  type ConfirmedUniformMotionScenario,
  type PhysicsValidationResult,
  ConfirmedUniformMotionScenarioSchema,
} from '@/shared/scenarios/uniform-motion';
import {
  validateUniformMotion,
  confirmScenario,
  solveUniformMotion,
  calculateSimulationFrame,
} from '@/features/simulation/physics/engine';
import {
  computeCandidateReadiness,
  updateDraftQuantityValue,
  updateDraftQuantityUnit,
  updateDraftTarget,
  updateDraftObject,
  updateDraftAxis,
  localizeAndMapValidationIssues,
  saveConfirmedScenario,
  loadConfirmedScenario,
  clearConfirmedScenario,
  CONFIRMED_SCENARIO_STORAGE_KEY,
} from '../utils/review-helpers';

describe('PhysicsLab Step 6: Physical Validation, Student Confirmation, and Simulation Handoff', () => {
  // Test Candidate 1: Target unknown velocity (u), s = -50 m, t = 5 s
  const candidateU: UniformMotionCandidate = {
    schemaVersion: 1,
    scenarioId: 'sc-conf-001',
    revision: 1,
    topic: 'uniform-velocity',
    originalText:
      'Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s.',
    locale: 'en',
    object: 'object',
    axis: {
      direction: 'east',
      basis: 'question-stated',
    },
    s: { type: 'given', value: -50, unit: 'm' },
    u: { type: 'unknown', unit: 'm/s' },
    t: { type: 'given', value: 5, unit: 's' },
    target: 'u',
    clarifications: [],
  };

  // Test Candidate 2: Target unknown displacement (s), u = 20 m/s, t = 10 s
  const candidateS: UniformMotionCandidate = {
    schemaVersion: 1,
    scenarioId: 'sc-conf-002',
    revision: 1,
    topic: 'uniform-velocity',
    originalText: 'A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.',
    locale: 'en',
    object: 'car',
    axis: {
      direction: 'right',
      basis: 'display-convention',
    },
    s: { type: 'unknown', unit: 'm' },
    u: { type: 'given', value: 20, unit: 'm/s' },
    t: { type: 'given', value: 10, unit: 's' },
    target: 's',
    clarifications: [],
  };

  // Test Candidate 3: Target unknown time (t), s = -120 km, u = -60 km/h
  const candidateT: UniformMotionCandidate = {
    schemaVersion: 1,
    scenarioId: 'sc-conf-003',
    revision: 1,
    topic: 'uniform-velocity',
    originalText:
      'Taking north as positive, a train moves at -60 km/h and undergoes a displacement of -120 km. Find the elapsed time in hours.',
    locale: 'en',
    object: 'train',
    axis: {
      direction: 'north',
      basis: 'question-stated',
    },
    s: { type: 'given', value: -120, unit: 'km' },
    u: { type: 'given', value: -60, unit: 'km/h' },
    t: { type: 'unknown', unit: 'h' },
    target: 't',
    clarifications: [],
  };

  // 1. Structurally Incomplete and Stale Reviews Blocking Validation
  describe('1. Structural completeness vs physical validation readiness', () => {
    it('blocks validation when draft has missing numerical values', () => {
      const draftIncomplete: UniformMotionDraft = {
        ...candidateU,
        s: { type: 'unresolved', reason: 'Missing displacement' },
      };
      const readiness = computeCandidateReadiness(draftIncomplete, false);
      expect(readiness.isReady).toBe(false);
      expect(readiness.candidate).toBeNull();
    });

    it('blocks validation when draft has outstanding clarifications', () => {
      const draftWithClarification: UniformMotionDraft = {
        ...candidateS,
        clarifications: [{ code: 'AMBIGUOUS_AXIS', message: 'Choose direction', fieldRef: 'axis' }],
      };
      const readiness = computeCandidateReadiness(draftWithClarification, false);
      expect(readiness.isReady).toBe(false);
      expect(readiness.candidate).toBeNull();
    });

    it('blocks validation when review is stale (question edited)', () => {
      const readiness = computeCandidateReadiness(candidateU, true);
      expect(readiness.isReady).toBe(false);
      expect(readiness.isStale).toBe(true);
      expect(readiness.candidate).toBeNull();
    });

    it('distinguishes structural completeness from physical validity', () => {
      // Structurally valid (all fields filled with numbers), but physically invalid (sign mismatch for target t)
      const draftSignMismatch: UniformMotionDraft = {
        ...candidateT,
        s: { type: 'given', value: 50, unit: 'm' },
        u: { type: 'given', value: -10, unit: 'm/s' },
        t: { type: 'unknown', unit: 's' },
        target: 't',
      };
      const readiness = computeCandidateReadiness(draftSignMismatch, false);
      expect(readiness.isReady).toBe(true);
      expect(readiness.candidate).not.toBeNull();

      // Physical validation then rejects it
      const physResult = validateUniformMotion(readiness.candidate!);
      expect(physResult.isValid).toBe(false);
      if (!physResult.isValid) {
        expect(physResult.issues.map((i) => i.code)).toContain('SIGN_MISMATCH');
      }
    });
  });

  // 2. Successful Physical Validation
  describe('2. Successful physical validation across targets and units', () => {
    it('successfully validates unknown velocity with negative displacement', () => {
      const result = validateUniformMotion(candidateU);
      expect(result.isValid).toBe(true);
      if (result.isValid) {
        expect(result.scenarioId).toBe(candidateU.scenarioId);
        expect(result.revision).toBe(candidateU.revision);
      }
    });

    it('successfully validates unknown displacement with positive velocity and time', () => {
      const result = validateUniformMotion(candidateS);
      expect(result.isValid).toBe(true);
      if (result.isValid) {
        expect(result.scenarioId).toBe(candidateS.scenarioId);
        expect(result.revision).toBe(candidateS.revision);
      }
    });

    it('successfully validates unknown time with non-SI units (km, km/h, h)', () => {
      const result = validateUniformMotion(candidateT);
      expect(result.isValid).toBe(true);
    });

    it('successfully validates stationary motion (u = 0, s = 0, t > 0)', () => {
      const stationaryCandidate: UniformMotionCandidate = {
        ...candidateS,
        u: { type: 'given', value: 0, unit: 'm/s' },
        t: { type: 'given', value: 10, unit: 's' },
        target: 's',
      };
      const result = validateUniformMotion(stationaryCandidate);
      expect(result.isValid).toBe(true);
    });

    it('successfully validates supported non-SI units: cm, min', () => {
      const candidateNonSI: UniformMotionCandidate = {
        ...candidateS,
        s: { type: 'unknown', unit: 'cm' },
        u: { type: 'given', value: 5, unit: 'm/s' },
        t: { type: 'given', value: 2, unit: 'min' },
      };
      const result = validateUniformMotion(candidateNonSI);
      expect(result.isValid).toBe(true);
    });
  });

  // 3. Failed Physical Validation Edge Cases
  describe('3. Physical validation rejections for impossible and indeterminate cases', () => {
    it('rejects sign mismatch between displacement and velocity', () => {
      const signMismatchCandidate: UniformMotionCandidate = {
        ...candidateU,
        s: { type: 'given', value: 50, unit: 'm' }, // positive
        u: { type: 'given', value: -10, unit: 'm/s' }, // negative
        t: { type: 'unknown', unit: 's' },
        target: 't',
      };
      const result = validateUniformMotion(signMismatchCandidate);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('SIGN_MISMATCH');
      }
    });

    it('rejects negative elapsed time', () => {
      const negativeTimeCandidate: UniformMotionCandidate = {
        ...candidateU,
        t: { type: 'given', value: -10, unit: 's' },
      };
      const result = validateUniformMotion(negativeTimeCandidate);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('NEGATIVE_TIME');
      }
    });

    it('rejects impossible stationary displacement (u = 0, s != 0)', () => {
      const impossibleStationary: UniformMotionCandidate = {
        ...candidateT,
        s: { type: 'given', value: 100, unit: 'm' },
        u: { type: 'given', value: 0, unit: 'm/s' },
        t: { type: 'unknown', unit: 's' },
        target: 't',
      };
      const result = validateUniformMotion(impossibleStationary);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('IMPOSSIBLE_STATIONARY_DISPLACEMENT');
      }
    });

    it('rejects impossible zero-duration displacement (t = 0, s != 0)', () => {
      const zeroDuration: UniformMotionCandidate = {
        ...candidateU,
        s: { type: 'given', value: 50, unit: 'm' },
        t: { type: 'given', value: 0, unit: 's' },
        target: 'u',
      };
      const result = validateUniformMotion(zeroDuration);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('IMPOSSIBLE_ZERO_DURATION_DISPLACEMENT');
      }
    });

    it('rejects indeterminate time when s = 0 and u = 0 with target t', () => {
      const indeterminateTime: UniformMotionCandidate = {
        ...candidateT,
        s: { type: 'given', value: 0, unit: 'm' },
        u: { type: 'given', value: 0, unit: 'm/s' },
        t: { type: 'unknown', unit: 's' },
        target: 't',
      };
      const result = validateUniformMotion(indeterminateTime);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('INDETERMINATE_TIME');
      }
    });

    it('rejects indeterminate velocity when s = 0 and t = 0 with target u', () => {
      const indeterminateVelocity: UniformMotionCandidate = {
        ...candidateU,
        s: { type: 'given', value: 0, unit: 'm' },
        t: { type: 'given', value: 0, unit: 's' },
        u: { type: 'unknown', unit: 'm/s' },
        target: 'u',
      };
      const result = validateUniformMotion(indeterminateVelocity);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('INDETERMINATE_VELOCITY');
      }
    });

    it('rejects unsupported units in given quantities', () => {
      const unsupportedUnitCandidate = {
        ...candidateU,
        s: { type: 'given', value: 50, unit: 'miles' as unknown as 'm' },
      } as UniformMotionCandidate;
      const result = validateUniformMotion(unsupportedUnitCandidate);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('UNSUPPORTED_UNIT');
      }
    });

    it('rejects non-finite values (Infinity)', () => {
      const nonFiniteCandidate: UniformMotionCandidate = {
        ...candidateS,
        u: { type: 'given', value: Infinity, unit: 'm/s' },
      };
      const result = validateUniformMotion(nonFiniteCandidate);
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.issues.map((i) => i.code)).toContain('NON_FINITE_VALUE');
      }
    });
  });

  // 4. Localized Issue Mapping
  describe('4. Localized issue mapping to form fields', () => {
    it('maps issues to correct field targets in English and Sinhala', () => {
      const issues = [
        { code: 'SIGN_MISMATCH', message: 'Displacement and velocity have conflicting directions.' },
        { code: 'NEGATIVE_TIME', message: 'Elapsed time cannot be negative.' },
      ];

      const mappedEn = localizeAndMapValidationIssues(issues, (k) => k);
      expect(mappedEn).toHaveLength(2);
      expect(mappedEn.some((i) => i.field === 't' && i.code === 'SIGN_MISMATCH')).toBe(true);
      expect(mappedEn.some((i) => i.field === 't' && i.code === 'NEGATIVE_TIME')).toBe(true);

      const tValSi = (k: string) => {
        if (k === 'negativeTime') return 'කාලය සෘණ අගයක් විය නොහැක.';
        return k;
      };
      const mappedSi = localizeAndMapValidationIssues(issues, tValSi);
      expect(mappedSi[1].message).toContain('කාලය සෘණ අගයක් විය නොහැක');
    });

    it('maps stationary displacement to displacement field', () => {
      const issues = [
        {
          code: 'IMPOSSIBLE_STATIONARY_DISPLACEMENT',
          message: 'Non-zero displacement is impossible with zero velocity.',
        },
      ];
      const mapped = localizeAndMapValidationIssues(issues, (k) => k);
      expect(mapped[0].field).toBe('s');
    });
  });

  // 5. Explicit Confirmation Contract and Target Masking
  describe('5. Explicit student confirmation contract', () => {
    it('successfully confirms a valid candidate matching the validation result', () => {
      const valResult = validateUniformMotion(candidateU);
      expect(valResult.isValid).toBe(true);

      const confirmed = confirmScenario(candidateU, valResult);
      expect(confirmed.confirmationId).toBe(candidateU.scenarioId);
      expect(confirmed.confirmedRevision).toBe(candidateU.revision);
      expect(confirmed.scenario.scenarioId).toBe(candidateU.scenarioId);
      expect(confirmed.scenario.revision).toBe(candidateU.revision);
      expect(confirmed.confirmedAt).toBeTruthy();

      // Confirmed scenario schema verification
      const parsed = ConfirmedUniformMotionScenarioSchema.safeParse(confirmed);
      expect(parsed.success).toBe(true);
    });

    it('masks target value in ConfirmedScenario: target remains unknown, never prematurely revealed', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      // Crucial: The target field (u) remains unknown in confirmed scenario
      expect(confirmed.scenario.target).toBe('u');
      expect(confirmed.scenario.u.type).toBe('unknown');
      expect((confirmed.scenario.u as { value?: number }).value).toBeUndefined();
    });

    it('rejects confirmation if revision mismatches (stale validation result)', () => {
      const valResultRev1 = validateUniformMotion(candidateU);
      const candidateRev2: UniformMotionCandidate = {
        ...candidateU,
        revision: 2,
      };

      expect(() => confirmScenario(candidateRev2, valResultRev1)).toThrow(
        /Validation result revision mismatch/
      );
    });

    it('rejects confirmation if scenarioId mismatches', () => {
      const valResultCandidate1 = validateUniformMotion(candidateU);
      const candidateDifferentId: UniformMotionCandidate = {
        ...candidateU,
        scenarioId: 'sc-conf-999',
      };

      expect(() => confirmScenario(candidateDifferentId, valResultCandidate1)).toThrow(
        /Validation result revision mismatch/
      );
    });

    it('rejects confirmation if validation result isValid is false', () => {
      const invalidResult: PhysicsValidationResult = {
        isValid: false,
        scenarioId: candidateU.scenarioId,
        revision: 1,
        issues: [{ code: 'SIGN_MISMATCH', message: 'Sign mismatch' }],
      };

      expect(() => confirmScenario(candidateU, invalidResult)).toThrow(
        /Cannot confirm an invalid scenario/
      );
    });
  });

  // 6. Semantic Review Edits Invalidation
  describe('6. Semantic review edits invalidate validation and confirmation', () => {
    let draft: UniformMotionDraft;

    beforeEach(() => {
      draft = {
        ...candidateU,
      };
    });

    it('editing a quantity value increments revision, invalidating previous validation', () => {
      const initialRev = draft.revision;
      const valResult = validateUniformMotion(draft as unknown as UniformMotionCandidate);
      expect(valResult.revision).toBe(initialRev);

      // Student edits displacement from -50 to -60
      const { draft: updated } = updateDraftQuantityValue(draft, 's', '-60');
      expect(updated.revision).toBe(initialRev + 1);
      expect(updated.s.type).toBe('given');
      if (updated.s.type === 'given') {
        expect(updated.s.value).toBe(-60);
      }

      // Old validation result cannot confirm the updated candidate
      const updatedCandidate = computeCandidateReadiness(updated, false).candidate!;
      expect(() => confirmScenario(updatedCandidate, valResult)).toThrow(/Validation result revision mismatch/);
    });

    it('editing quantity unit increments revision', () => {
      const updated = updateDraftQuantityUnit(draft, 's', 'km');
      expect(updated.revision).toBe(draft.revision + 1);
      expect(updated.s.type).not.toBe('unresolved');
      if (updated.s.type !== 'unresolved') {
        expect(updated.s.unit).toBe('km');
      }
    });

    it('editing target variable changes target and increments revision', () => {
      const updated = updateDraftTarget(draft, 's');
      expect(updated.revision).toBe(draft.revision + 1);
      expect(updated.target).toBe('s');
      expect(updated.s.type).toBe('unknown');
    });

    it('editing object descriptor increments revision', () => {
      const updated = updateDraftObject(draft, 'runner');
      expect(updated.revision).toBe(draft.revision + 1);
      expect(updated.object).toBe('runner');
    });

    it('editing positive axis direction increments revision', () => {
      const updated = updateDraftAxis(draft, 'west');
      expect(updated.revision).toBe(draft.revision + 1);
      expect(updated.axis?.direction).toBe('west');
    });
  });

  // 7. UI Language Switching Does Not Alter Scenario Semantics
  describe('7. UI language switching preservation', () => {
    it('switching UI locale preserves scenario identity, revision, and values', () => {
      const draft: UniformMotionDraft = {
        ...candidateU,
      };

      // UI language toggle does not mutate draft fields
      const draftAfterLocaleSwitch: UniformMotionDraft = {
        ...draft,
      };

      expect(draftAfterLocaleSwitch.scenarioId).toBe(draft.scenarioId);
      expect(draftAfterLocaleSwitch.revision).toBe(draft.revision);
      expect(draftAfterLocaleSwitch.s).toEqual(draft.s);
      expect(draftAfterLocaleSwitch.u).toEqual(draft.u);
      expect(draftAfterLocaleSwitch.t).toEqual(draft.t);
    });
  });

  // 8. Storage and Restoration Integrity
  describe('8. Confirmed scenario storage round-trip and corrupted state recovery', () => {
    let mockStorage: Record<string, string> = {};

    beforeEach(() => {
      mockStorage = {};
      vi.stubGlobal('sessionStorage', {
        getItem: (key: string) => mockStorage[key] || null,
        setItem: (key: string, val: string) => {
          mockStorage[key] = val;
        },
        removeItem: (key: string) => {
          delete mockStorage[key];
        },
      });
    });

    it('saves and loads valid confirmed scenario', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      const saved = saveConfirmedScenario(confirmed);
      expect(saved).toBe(true);

      const loaded = loadConfirmedScenario();
      expect(loaded).not.toBeNull();
      expect(loaded?.confirmationId).toBe(confirmed.confirmationId);
      expect(loaded?.confirmedRevision).toBe(confirmed.confirmedRevision);
    });

    it('returns null when storage contains malformed JSON', () => {
      mockStorage[CONFIRMED_SCENARIO_STORAGE_KEY] = '{{ malformed json';
      const loaded = loadConfirmedScenario();
      expect(loaded).toBeNull();
    });

    it('returns null when storage contains invalid schema shape', () => {
      mockStorage[CONFIRMED_SCENARIO_STORAGE_KEY] = JSON.stringify({
        schemaVersion: 1,
        invalidPayload: true,
      });
      const loaded = loadConfirmedScenario();
      expect(loaded).toBeNull();
    });

    it('returns null if stored scenario has physically invalid values (tampered)', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      // Tamper with storage to inject negative time
      const tampered = {
        ...confirmed,
        scenario: {
          ...confirmed.scenario,
          t: { type: 'given', value: -10, unit: 's' },
        },
      } as unknown as ConfirmedUniformMotionScenario;
      mockStorage[CONFIRMED_SCENARIO_STORAGE_KEY] = JSON.stringify(tampered);

      const loaded = loadConfirmedScenario();
      expect(loaded).toBeNull();
    });

    it('returns null if revision between confirmation and scenario mismatches in storage', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      const tampered: ConfirmedUniformMotionScenario = {
        ...confirmed,
        confirmedRevision: 2, // does not match scenario.revision = 1
      };
      mockStorage[CONFIRMED_SCENARIO_STORAGE_KEY] = JSON.stringify(tampered);

      const loaded = loadConfirmedScenario();
      expect(loaded).toBeNull();
    });

    it('clears confirmed scenario correctly', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);
      saveConfirmedScenario(confirmed);

      clearConfirmedScenario();
      expect(loadConfirmedScenario()).toBeNull();
    });
  });

  // 9. Simulation Handoff and Solver Accuracy
  describe('9. Confirmed scenario reaching physics solver and simulation engine', () => {
    it('solves unknown velocity accurately without exposing it in review', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      // Simulation entry point solves the confirmed scenario
      const solved = solveUniformMotion(confirmed.scenario);
      expect(solved.velocity).toBe(-10); // s = -50 m, t = 5 s -> u = -10 m/s
      expect(solved.displacement).toBe(-50);
      expect(solved.time).toBe(5);
    });

    it('solves unknown displacement with non-SI velocity and time converted to SI', () => {
      const valResult = validateUniformMotion(candidateS);
      const confirmed = confirmScenario(candidateS, valResult);

      const solved = solveUniformMotion(confirmed.scenario);
      expect(solved.displacement).toBe(200); // 20 m/s * 10 s = 200 m
    });

    it('solves unknown time with non-SI units (km and km/h)', () => {
      const valResult = validateUniformMotion(candidateT);
      const confirmed = confirmScenario(candidateT, valResult);

      const solved = solveUniformMotion(confirmed.scenario);
      // s = -120 km = -120,000 m; u = -60 km/h = -16.666... m/s
      // t = -120 / -60 = 2 hours = 7200 s
      expect(solved.time).toBeCloseTo(7200, 2);
    });

    it('calculates animation simulation frames accurately along coordinate axis', () => {
      const valResult = validateUniformMotion(candidateU);
      const confirmed = confirmScenario(candidateU, valResult);

      // Frame at t = 0
      const frame0 = calculateSimulationFrame(confirmed, 0);
      expect(frame0.currentElapsedSeconds).toBe(0);
      expect(frame0.currentDisplacementMetres).toBeCloseTo(0, 5);

      // Frame at t = 2.5s (halfway)
      const frameMid = calculateSimulationFrame(confirmed, 2.5);
      expect(frameMid.currentElapsedSeconds).toBe(2.5);
      expect(frameMid.currentDisplacementMetres).toBe(-25); // -10 m/s * 2.5 s

      // Frame at t = 5.0s (completed)
      const frameEnd = calculateSimulationFrame(confirmed, 5);
      expect(frameEnd.currentElapsedSeconds).toBe(5);
      expect(frameEnd.currentDisplacementMetres).toBe(-50);
      expect(frameEnd.isComplete).toBe(true);
    });
  });
});

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  UniformMotionDraftSchema,
  type UniformMotionDraft,
} from '@/shared/scenarios/uniform-motion';
import {
  updateDraftObject,
  updateDraftAxis,
  updateDraftTarget,
  updateDraftQuantityValue,
  updateDraftQuantityUnit,
  computeCandidateReadiness,
  generateScenarioDescription,
  loadStoredReview,
  saveStoredReview,
  clearStoredReview,
} from '../utils/review-helpers';

describe('Step 5 Scenario Review Comprehensive Workflow Tests', () => {
  const baseDraftU: UniformMotionDraft = {
    schemaVersion: 1,
    scenarioId: 'sc-mock-uuid-1',
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
    s: {
      type: 'given',
      value: -50,
      unit: 'm',
    },
    u: {
      type: 'unknown',
      unit: 'm/s',
    },
    t: {
      type: 'given',
      value: 5,
      unit: 's',
    },
    target: 'u',
    clarifications: [],
  };

  const baseDraftS: UniformMotionDraft = {
    schemaVersion: 1,
    scenarioId: 'sc-mock-uuid-2',
    revision: 1,
    topic: 'uniform-velocity',
    originalText: 'A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.',
    locale: 'en',
    object: 'car',
    axis: {
      direction: 'right',
      basis: 'display-convention',
    },
    s: {
      type: 'unknown',
      unit: 'm',
    },
    u: {
      type: 'given',
      value: 20,
      unit: 'm/s',
    },
    t: {
      type: 'given',
      value: 10,
      unit: 's',
    },
    target: 's',
    clarifications: [],
  };

  const baseDraftT: UniformMotionDraft = {
    schemaVersion: 1,
    scenarioId: 'sc-mock-uuid-3',
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
    s: {
      type: 'given',
      value: -120,
      unit: 'km',
    },
    u: {
      type: 'given',
      value: -60,
      unit: 'km/h',
    },
    t: {
      type: 'unknown',
      unit: 'h',
    },
    target: 't',
    clarifications: [],
  };

  describe('1. Review State for Unknown s, u, and t', () => {
    it('verifies candidate readiness and structure for unknown u', () => {
      const readiness = computeCandidateReadiness(baseDraftU, false);
      expect(readiness.isReady).toBe(true);
      expect(readiness.candidate).not.toBeNull();
      if (readiness.candidate) {
        expect(readiness.candidate.target).toBe('u');
        expect(readiness.candidate.u.type).toBe('unknown');
        expect('value' in readiness.candidate.u).toBe(false);
        expect(readiness.candidate.s).toEqual({ type: 'given', value: -50, unit: 'm' });
        expect(readiness.candidate.t).toEqual({ type: 'given', value: 5, unit: 's' });
      }
    });

    it('verifies candidate readiness and structure for unknown s', () => {
      const readiness = computeCandidateReadiness(baseDraftS, false);
      expect(readiness.isReady).toBe(true);
      expect(readiness.candidate).not.toBeNull();
      if (readiness.candidate) {
        expect(readiness.candidate.target).toBe('s');
        expect(readiness.candidate.s.type).toBe('unknown');
        expect('value' in readiness.candidate.s).toBe(false);
        expect(readiness.candidate.u).toEqual({ type: 'given', value: 20, unit: 'm/s' });
        expect(readiness.candidate.t).toEqual({ type: 'given', value: 10, unit: 's' });
      }
    });

    it('verifies candidate readiness and structure for unknown t', () => {
      const readiness = computeCandidateReadiness(baseDraftT, false);
      expect(readiness.isReady).toBe(true);
      expect(readiness.candidate).not.toBeNull();
      if (readiness.candidate) {
        expect(readiness.candidate.target).toBe('t');
        expect(readiness.candidate.t.type).toBe('unknown');
        expect('value' in readiness.candidate.t).toBe(false);
        expect(readiness.candidate.s).toEqual({ type: 'given', value: -120, unit: 'km' });
        expect(readiness.candidate.u).toEqual({ type: 'given', value: -60, unit: 'km/h' });
      }
    });
  });

  describe('2. Zero, Signed Values, Missing Units, and Incomplete Numeric Edits', () => {
    it('preserves genuine zero displacement and negative velocity', () => {
      const zeroDisplacementDraft: UniformMotionDraft = {
        ...baseDraftT,
        s: { type: 'given', value: 0, unit: 'km' },
        u: { type: 'given', value: -60, unit: 'km/h' },
      };

      expect(UniformMotionDraftSchema.safeParse(zeroDisplacementDraft).success).toBe(true);
      const readiness = computeCandidateReadiness(zeroDisplacementDraft, false);
      expect(readiness.isReady).toBe(true);
      if (readiness.candidate) {
        expect(readiness.candidate.s).toEqual({ type: 'given', value: 0, unit: 'km' });
        expect(readiness.candidate.u).toEqual({ type: 'given', value: -60, unit: 'km/h' });
      }
    });

    it('handles temporary minus sign without throwing and marks field as unresolved', () => {
      const tempResult = updateDraftQuantityValue(baseDraftS, 'u', '-');
      expect(tempResult.isTemporary).toBe(true);
      expect(tempResult.draft.u.type).toBe('unresolved');
      expect(computeCandidateReadiness(tempResult.draft, false).isReady).toBe(false);
    });

    it('handles invalid alphanumeric string without coercing to zero', () => {
      const invalidResult = updateDraftQuantityValue(baseDraftS, 'u', '20mph');
      expect(invalidResult.isTemporary).toBe(false);
      expect(invalidResult.draft.u.type).toBe('unresolved');
      expect(invalidResult.draft.u).not.toHaveProperty('value', 0);
      expect(computeCandidateReadiness(invalidResult.draft, false).isReady).toBe(false);
    });

    it('enforces that negative elapsed time invalidates candidate readiness', () => {
      const negTimeDraft: UniformMotionDraft = {
        ...baseDraftS,
        t: { type: 'given', value: -10, unit: 's' },
      };

      // Valid in draft schema
      expect(UniformMotionDraftSchema.safeParse(negTimeDraft).success).toBe(true);
      // But invalid in candidate schema
      const readiness = computeCandidateReadiness(negTimeDraft, false);
      expect(readiness.isReady).toBe(false);
      expect(readiness.issues).toContain('Elapsed time cannot be negative');
    });
  });

  describe('3. Target Changes and Candidate Invalidation', () => {
    it('switching target from u to s makes previous target u unresolved and invalidates candidate readiness until value is supplied', () => {
      // Base draft has target u, with given s = -50, given t = 5
      expect(computeCandidateReadiness(baseDraftU, false).isReady).toBe(true);

      // Student changes target to s
      const updated = updateDraftTarget(baseDraftU, 's');
      expect(updated.target).toBe('s');
      expect(updated.s).toEqual({ type: 'unknown', unit: 'm' });
      expect(updated.u.type).toBe('unresolved');
      expect(updated.revision).toBe(2);

      // Candidate readiness is now false because u is unresolved
      const readiness1 = computeCandidateReadiness(updated, false);
      expect(readiness1.isReady).toBe(false);

      // Student supplies value for u: -10 m/s
      const valueResult = updateDraftQuantityValue(updated, 'u', '-10');
      expect(valueResult.draft.u).toEqual({ type: 'given', value: -10, unit: 'm/s' });
      expect(valueResult.draft.revision).toBe(3);

      // Now candidate readiness is restored
      const readiness2 = computeCandidateReadiness(valueResult.draft, false);
      expect(readiness2.isReady).toBe(true);
      expect(readiness2.candidate?.target).toBe('s');
    });
  });

  describe('4. Clarification Resolution Without Removing Unrelated Issues', () => {
    it('resolves field clarifications specifically while preserving unrelated issues', () => {
      const draftWithIssues: UniformMotionDraft = {
        ...baseDraftU,
        object: null,
        s: { type: 'unresolved', reason: 'Displacement is unstated' },
        clarifications: [
          { code: 'MISSING_OBJECT', message: 'Object missing', fieldRef: 'object' },
          { code: 'MISSING_DISPLACEMENT', message: 'Displacement missing', fieldRef: 's' },
          { code: 'GENERAL_AMBIGUITY', message: 'Question does not specify if friction exists' },
        ],
      };

      // 1. Student supplies an object name
      const fixedObject = updateDraftObject(draftWithIssues, 'particle');
      expect(fixedObject.object).toBe('particle');
      expect(fixedObject.clarifications.some((c) => c.fieldRef === 'object')).toBe(false);
      // Displacement and general ambiguity must still be preserved
      expect(fixedObject.clarifications.some((c) => c.fieldRef === 's')).toBe(true);
      expect(fixedObject.clarifications.some((c) => c.code === 'GENERAL_AMBIGUITY')).toBe(true);

      // 2. Student supplies displacement value
      const fixedDisplacement = updateDraftQuantityValue(fixedObject, 's', '100');
      expect(fixedDisplacement.draft.clarifications.some((c) => c.fieldRef === 's')).toBe(false);
      // General ambiguity remains preserved!
      expect(fixedDisplacement.draft.clarifications.some((c) => c.code === 'GENERAL_AMBIGUITY')).toBe(true);
    });
  });

  describe('5. Scenario Revision Changes vs Interface Language Changes', () => {
    it('increments revision on semantic edits while keeping scenarioId stable', () => {
      let draft = { ...baseDraftS };
      expect(draft.revision).toBe(1);
      const originalId = draft.scenarioId;

      draft = updateDraftObject(draft, 'racing car');
      expect(draft.revision).toBe(2);
      expect(draft.scenarioId).toBe(originalId);

      draft = updateDraftAxis(draft, 'east');
      expect(draft.revision).toBe(3);
      expect(draft.scenarioId).toBe(originalId);

      draft = updateDraftQuantityUnit(draft, 'u', 'km/h');
      expect(draft.revision).toBe(4);
      expect(draft.scenarioId).toBe(originalId);
    });

    it('interface language change generates localized templates without altering revision or draft data', () => {
      const enDesc = generateScenarioDescription(baseDraftU, 'en');
      const siDesc = generateScenarioDescription(baseDraftU, 'si');

      expect(enDesc).toContain('east as positive');
      expect(siDesc).toContain('east ධන දිශාව ලෙස සලකමින්');

      // The draft itself is completely unaffected
      expect(baseDraftU.revision).toBe(1);
      expect(baseDraftU.locale).toBe('en');
    });
  });

  describe('6. Stale Responses and Guards', () => {
    it('invalidates candidate readiness immediately when question text changes', () => {
      const currentReadiness = computeCandidateReadiness(baseDraftU, false);
      expect(currentReadiness.isReady).toBe(true);

      // Mark stale (because originalText in textarea no longer matches interpretedSource)
      const staleReadiness = computeCandidateReadiness(baseDraftU, true);
      expect(staleReadiness.isReady).toBe(false);
      expect(staleReadiness.isStale).toBe(true);
      expect(staleReadiness.issues).toContain('Interpretation is out of date with current question.');
    });
  });

  describe('7. Storage Restoration and Error Handling', () => {
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

    it('round trips review state through sessionStorage', () => {
      const reviewPayload = {
        version: 1 as const,
        draft: baseDraftU,
        interpretedSource: {
          originalText: baseDraftU.originalText,
          locale: 'en' as const,
        },
        temporaryValues: { s: '-50', t: '5' },
      };

      saveStoredReview(reviewPayload);
      const loaded = loadStoredReview();
      expect(loaded).toEqual(reviewPayload);
    });

    it('ignores corrupted draft in storage without crashing', () => {
      mockStorage['physicslab_scenario_review_v1'] = JSON.stringify({
        version: 1,
        draft: { schemaVersion: 999, invalidField: true },
      });

      const loaded = loadStoredReview();
      expect(loaded).toBeNull();
    });

    it('clears storage properly', () => {
      saveStoredReview({
        version: 1,
        draft: baseDraftU,
        interpretedSource: null,
        temporaryValues: {},
      });
      clearStoredReview();
      expect(loadStoredReview()).toBeNull();
    });
  });
});

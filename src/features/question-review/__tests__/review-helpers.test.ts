import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { UniformMotionDraft } from '@/shared/scenarios/uniform-motion';
import {
  parseStrictNumber,
  resolveFieldClarifications,
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
  REVIEW_STORAGE_KEY,
} from '../utils/review-helpers';

describe('Step 5 Scenario Review Helpers', () => {
  const baseDraft: UniformMotionDraft = {
    schemaVersion: 1,
    scenarioId: 'sc-test-123',
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

  describe('resolveFieldClarifications', () => {
    it('resolves field-specific clarifications while preserving unrelated and question-level issues', () => {
      const clarifications = [
        { code: 'MISSING_OBJECT', message: 'Object is missing', fieldRef: 'object' },
        { code: 'UNRESOLVED_DISPLACEMENT', message: 'Displacement is ambiguous', fieldRef: 's' },
        { code: 'GENERAL_NOTE', message: 'General question ambiguity' },
      ];

      const resolved = resolveFieldClarifications(clarifications, 'object');
      expect(resolved.length).toBe(2);
      expect(resolved.some((c) => c.fieldRef === 'object')).toBe(false);
      expect(resolved.some((c) => c.fieldRef === 's')).toBe(true);
      expect(resolved.some((c) => c.code === 'GENERAL_NOTE')).toBe(true);
    });
  });

  describe('parseStrictNumber', () => {
    it('parses valid positive, negative, zero, and floating-point numbers', () => {
      expect(parseStrictNumber('20')).toEqual({ isValid: true, isTemporary: false, value: 20 });
      expect(parseStrictNumber('-50')).toEqual({ isValid: true, isTemporary: false, value: -50 });
      expect(parseStrictNumber('0')).toEqual({ isValid: true, isTemporary: false, value: 0 });
      expect(parseStrictNumber('3.14')).toEqual({ isValid: true, isTemporary: false, value: 3.14 });
      expect(parseStrictNumber('-0.5')).toEqual({ isValid: true, isTemporary: false, value: -0.5 });
      expect(parseStrictNumber('.75')).toEqual({ isValid: true, isTemporary: false, value: 0.75 });
    });

    it('identifies incomplete temporary typing states', () => {
      expect(parseStrictNumber('')).toEqual({ isValid: false, isTemporary: true });
      expect(parseStrictNumber('   ')).toEqual({ isValid: false, isTemporary: true });
      expect(parseStrictNumber('-')).toEqual({ isValid: false, isTemporary: true });
      expect(parseStrictNumber('+')).toEqual({ isValid: false, isTemporary: true });
      expect(parseStrictNumber('.')).toEqual({ isValid: false, isTemporary: true });
      expect(parseStrictNumber('-.')).toEqual({ isValid: false, isTemporary: true });
    });

    it('strictly rejects partial parses and non-numeric strings without coercing to zero', () => {
      expect(parseStrictNumber('12abc')).toEqual({ isValid: false, isTemporary: false });
      expect(parseStrictNumber('abc')).toEqual({ isValid: false, isTemporary: false });
      expect(parseStrictNumber('1.2.3')).toEqual({ isValid: false, isTemporary: false });
      expect(parseStrictNumber('--5')).toEqual({ isValid: false, isTemporary: false });
    });
  });

  describe('updateDraftObject', () => {
    it('updates object name and increments revision', () => {
      const updated = updateDraftObject(baseDraft, 'train');
      expect(updated.object).toBe('train');
      expect(updated.revision).toBe(2);
      expect(updated.scenarioId).toBe(baseDraft.scenarioId);
    });

    it('sets object to null and adds clarification when emptied', () => {
      const updated = updateDraftObject(baseDraft, '   ');
      expect(updated.object).toBeNull();
      expect(updated.revision).toBe(2);
      expect(updated.clarifications.some((c) => c.fieldRef === 'object')).toBe(true);
    });

    it('resolves MISSING_OBJECT clarification when a valid object is supplied', () => {
      const withClarification: UniformMotionDraft = {
        ...baseDraft,
        object: null,
        clarifications: [{ code: 'MISSING_OBJECT', message: 'Object is missing', fieldRef: 'object' }],
      };
      const updated = updateDraftObject(withClarification, 'car');
      expect(updated.object).toBe('car');
      expect(updated.clarifications.some((c) => c.fieldRef === 'object')).toBe(false);
    });
  });

  describe('updateDraftAxis', () => {
    it('updates axis direction, sets basis to student-selected, and increments revision without altering quantity signs', () => {
      const updated = updateDraftAxis(baseDraft, 'west');
      expect(updated.axis?.direction).toBe('west');
      expect(updated.axis?.basis).toBe('student-selected');
      expect(updated.revision).toBe(2);
      // Ensures displacement sign is NEVER silently flipped
      expect(updated.s).toEqual({ type: 'given', value: -50, unit: 'm' });
    });
  });

  describe('updateDraftTarget', () => {
    it('switches target from u to s: s becomes unknown, u becomes unresolved, t preserved, revision increments', () => {
      const updated = updateDraftTarget(baseDraft, 's');
      expect(updated.target).toBe('s');
      expect(updated.s).toEqual({ type: 'unknown', unit: 'm' });
      expect(updated.u.type).toBe('unresolved');
      expect(updated.t).toEqual({ type: 'given', value: 5, unit: 's' });
      expect(updated.revision).toBe(2);
      // u clarification added
      expect(updated.clarifications.some((c) => c.fieldRef === 'u')).toBe(true);
    });

    it('switches target from u to t: t becomes unknown, u becomes unresolved, s preserved', () => {
      const updated = updateDraftTarget(baseDraft, 't');
      expect(updated.target).toBe('t');
      expect(updated.t).toEqual({ type: 'unknown', unit: 's' });
      expect(updated.u.type).toBe('unresolved');
      expect(updated.s).toEqual({ type: 'given', value: -50, unit: 'm' });
      expect(updated.revision).toBe(2);
    });
  });

  describe('updateDraftQuantityValue', () => {
    it('updates valid number, preserves sign, increments revision, and clears unresolved clarifications', () => {
      const draftWithIssue: UniformMotionDraft = {
        ...baseDraft,
        s: { type: 'unresolved', reason: 'Missing displacement' },
        clarifications: [{ code: 'UNRESOLVED_DISPLACEMENT', message: 'Missing', fieldRef: 's' }],
      };

      const result = updateDraftQuantityValue(draftWithIssue, 's', '-75');
      expect(result.isTemporary).toBe(false);
      expect(result.draft.s).toEqual({ type: 'given', value: -75, unit: 'm' });
      expect(result.draft.revision).toBe(2);
      expect(result.draft.clarifications.some((c) => c.fieldRef === 's')).toBe(false);
    });

    it('handles temporary input "-" by keeping unresolved without throwing or crashing', () => {
      const result = updateDraftQuantityValue(baseDraft, 's', '-');
      expect(result.isTemporary).toBe(true);
      expect(result.draft.s.type).toBe('unresolved');
      expect(result.draft.revision).toBe(2);
    });

    it('handles invalid input "12abc" as unresolved without coercing to zero', () => {
      const result = updateDraftQuantityValue(baseDraft, 's', '12abc');
      expect(result.isTemporary).toBe(false);
      expect(result.draft.s.type).toBe('unresolved');
      expect(result.draft.s).not.toHaveProperty('value', 0);
    });
  });

  describe('updateDraftQuantityUnit', () => {
    it('updates unit and increments revision', () => {
      const updated = updateDraftQuantityUnit(baseDraft, 's', 'km');
      expect(updated.s).toEqual({ type: 'given', value: -50, unit: 'km' });
      expect(updated.revision).toBe(2);
    });
  });

  describe('computeCandidateReadiness', () => {
    it('returns ready when all candidate criteria are met and draft is current', () => {
      const result = computeCandidateReadiness(baseDraft, false);
      expect(result.isReady).toBe(true);
      expect(result.candidate).not.toBeNull();
      expect(result.issues).toEqual([]);
    });

    it('returns not ready when draft is stale even if structurally complete', () => {
      const result = computeCandidateReadiness(baseDraft, true);
      expect(result.isReady).toBe(false);
      expect(result.isStale).toBe(true);
      expect(result.candidate).toBeNull();
    });

    it('returns not ready when object is null', () => {
      const draft: UniformMotionDraft = {
        ...baseDraft,
        object: null,
      };
      const result = computeCandidateReadiness(draft, false);
      expect(result.isReady).toBe(false);
      expect(result.candidate).toBeNull();
    });

    it('returns not ready when elapsed time is negative', () => {
      const draft: UniformMotionDraft = {
        ...baseDraft,
        t: { type: 'given', value: -5, unit: 's' },
      };
      const result = computeCandidateReadiness(draft, false);
      expect(result.isReady).toBe(false);
      expect(result.issues).toContain('Elapsed time cannot be negative');
    });

    it('returns not ready when there are outstanding clarifications', () => {
      const draft: UniformMotionDraft = {
        ...baseDraft,
        clarifications: [{ code: 'AMBIGUOUS_OBJECT', message: 'Ambiguous entity', fieldRef: 'object' }],
      };
      const result = computeCandidateReadiness(draft, false);
      expect(result.isReady).toBe(false);
    });
  });

  describe('generateScenarioDescription', () => {
    it('generates accurate English scenario summary without solving or guessing direction', () => {
      const desc = generateScenarioDescription(baseDraft, 'en');
      expect(desc).toContain('object');
      expect(desc).toContain('east as positive');
      expect(desc).toContain('displacement is -50 m');
      expect(desc).toContain('time is 5 s');
      expect(desc).toContain('Find velocity (u) in m/s.');
      // Never contains calculated answer
      expect(desc).not.toContain('-10');
    });

    it('generates accurate Sinhala scenario summary', () => {
      const sinhalaDraft: UniformMotionDraft = {
        ...baseDraft,
        locale: 'si',
        object: 'මෝටර් රථය',
      };
      const desc = generateScenarioDescription(sinhalaDraft, 'si');
      expect(desc).toContain('මෝටර් රථය');
      expect(desc).toContain('east ධන දිශාව ලෙස සලකමින්');
      expect(desc).toContain('විස්ථාපනය -50 m වේ');
      expect(desc).toContain('ගත වූ කාලය 5 s වේ');
      expect(desc).toContain('ප්‍රවේගය (u) m/s වලින් සෙවිය යුතුය.');
    });
  });

  describe('storage helpers', () => {
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

    it('saves and loads stored review correctly', () => {
      const data = {
        version: 1 as const,
        draft: baseDraft,
        interpretedSource: {
          originalText: baseDraft.originalText,
          locale: 'en' as const,
        },
        temporaryValues: { s: '-50', t: '5' },
      };

      const saved = saveStoredReview(data);
      expect(saved).toBe(true);

      const loaded = loadStoredReview();
      expect(loaded).toEqual(data);
    });

    it('handles malformed JSON in storage gracefully by returning null', () => {
      mockStorage[REVIEW_STORAGE_KEY] = '{ malformed json: ...';
      const loaded = loadStoredReview();
      expect(loaded).toBeNull();
    });

    it('handles invalid draft structure in storage gracefully', () => {
      mockStorage[REVIEW_STORAGE_KEY] = JSON.stringify({
        version: 1,
        draft: { invalidField: 123 },
      });
      const loaded = loadStoredReview();
      expect(loaded).toBeNull();
    });

    it('clears stored review properly', () => {
      saveStoredReview({
        version: 1,
        draft: baseDraft,
        interpretedSource: null,
        temporaryValues: {},
      });
      clearStoredReview();
      expect(loadStoredReview()).toBeNull();
    });
  });
});

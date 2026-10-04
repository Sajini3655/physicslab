import { describe, it, expect } from 'vitest';
import { 
  UniformMotionCandidateSchema, 
  UniformMotionDraftSchema, 
  ConfirmedUniformMotionScenarioSchema 
} from './schema';
import { 
  validCandidateUnknownS, 
  validCandidateUnknownU, 
  validCandidateUnknownT, 
  physicallyIndeterminateCandidate, 
  invalidDraftMissingUnits 
} from './fixtures';

describe('Uniform Motion Contract', () => {
  describe('Candidate Validation', () => {
    it('accepts valid candidate with unknown s', () => {
      expect(UniformMotionCandidateSchema.safeParse(validCandidateUnknownS).success).toBe(true);
    });
    
    it('accepts valid candidate with unknown u', () => {
      expect(UniformMotionCandidateSchema.safeParse(validCandidateUnknownU).success).toBe(true);
    });

    it('accepts valid candidate with unknown t', () => {
      expect(UniformMotionCandidateSchema.safeParse(validCandidateUnknownT).success).toBe(true);
    });
    
    it('accepts valid zero given values (structurally complete, physics indeterminate)', () => {
      expect(UniformMotionCandidateSchema.safeParse(physicallyIndeterminateCandidate).success).toBe(true);
    });

    it('rejects candidate with negative elapsed time', () => {
      const invalid = { ...validCandidateUnknownS, t: { type: "given" as const, value: -5, unit: "s" as const } };
      expect(UniformMotionCandidateSchema.safeParse(invalid).success).toBe(false);
    });

    it('rejects unresolved quantities for candidate', () => {
      expect(UniformMotionCandidateSchema.safeParse(invalidDraftMissingUnits).success).toBe(false);
    });
    
    it('rejects mismatch between target and quantity states', () => {
      const invalid = { ...validCandidateUnknownS, target: "u" };
      expect(UniformMotionCandidateSchema.safeParse(invalid).success).toBe(false);
    });

    it('rejects wrong units', () => {
      const invalid = { ...validCandidateUnknownS, s: { type: "unknown", unit: "invalid-unit" } };
      expect(UniformMotionCandidateSchema.safeParse(invalid).success).toBe(false);
    });

    it('rejects numeric strings for values', () => {
      const invalid = { ...validCandidateUnknownS, u: { type: "given", value: "20", unit: "m/s" } };
      expect(UniformMotionCandidateSchema.safeParse(invalid).success).toBe(false);
    });
    
    it('rejects non-finite values', () => {
      const invalid = { ...validCandidateUnknownS, u: { type: "given", value: Infinity, unit: "m/s" } };
      expect(UniformMotionCandidateSchema.safeParse(invalid).success).toBe(false);
    });
  });

  describe('Draft Validation', () => {
    it('accepts draft with unresolved quantities', () => {
      expect(UniformMotionDraftSchema.safeParse(invalidDraftMissingUnits).success).toBe(true);
    });

    it('accepts negative elapsed time in draft', () => {
      const draft = { ...validCandidateUnknownS, t: { type: "given" as const, value: -5, unit: "s" as const }, clarifications: [] };
      expect(UniformMotionDraftSchema.safeParse(draft).success).toBe(true);
    });
  });

  describe('Confirmation Validation', () => {
    it('accepts valid confirmation matching scenario id and revision', () => {
      const confirmation = {
        scenario: validCandidateUnknownS,
        confirmationId: validCandidateUnknownS.scenarioId,
        confirmedRevision: validCandidateUnknownS.revision,
        confirmedAt: new Date().toISOString()
      };
      expect(ConfirmedUniformMotionScenarioSchema.safeParse(confirmation).success).toBe(true);
    });

    it('rejects confirmation ID mismatch', () => {
      const confirmation = {
        scenario: validCandidateUnknownS,
        confirmationId: "wrong-id",
        confirmedRevision: validCandidateUnknownS.revision,
        confirmedAt: new Date().toISOString()
      };
      expect(ConfirmedUniformMotionScenarioSchema.safeParse(confirmation).success).toBe(false);
    });

    it('rejects confirmation revision mismatch', () => {
      const confirmation = {
        scenario: validCandidateUnknownS,
        confirmationId: validCandidateUnknownS.scenarioId,
        confirmedRevision: 999,
        confirmedAt: new Date().toISOString()
      };
      expect(ConfirmedUniformMotionScenarioSchema.safeParse(confirmation).success).toBe(false);
    });
  });
});

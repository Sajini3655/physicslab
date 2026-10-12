import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import {
  mapExtractionToDraft,
  normalizeObjectName,
  interpretQuestion,
  createGroqClient,
  GROQ_BASE_URL,
  type ExtractionTransport,
} from '../index';
import { POST } from '@/app/api/questions/interpret/route';
import { QuestionSubmissionInput } from '../../schema';
import { UniformMotionDraftSchema } from '@/shared/scenarios/uniform-motion';

describe('Step 4 Question Interpretation API & Service (Groq Provider)', () => {
  describe('Mapper: mapExtractionToDraft', () => {
    const baseInput: QuestionSubmissionInput = {
      lessonId: 'mechanics',
      topicId: 'straight-line-motion',
      subtopicId: 'uniform-velocity',
      originalText: 'A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.',
      locale: 'en',
    };

    it('maps scenario with unknown s (displacement target) and unstated axis display-convention', () => {
      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'car',
        axisDirection: null,
        s: {
          status: 'unknown',
          value: null,
          unit: 'm',
          unresolvedReason: null,
        },
        u: {
          status: 'given',
          value: 20,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'given',
          value: 10,
          unit: 's',
          unresolvedReason: null,
        },
        target: 's',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, baseInput);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      // Authoritative domain validation
      expect(UniformMotionDraftSchema.safeParse(draft).success).toBe(true);

      // Verify fields
      expect(draft.target).toBe('s');
      expect(draft.s).toEqual({ type: 'unknown', unit: 'm' });
      // No numerical answer on target
      expect('value' in draft.s).toBe(false);

      expect(draft.u).toEqual({ type: 'given', value: 20, unit: 'm/s' });
      expect(draft.t).toEqual({ type: 'given', value: 10, unit: 's' });
      expect(draft.object).toBe('car');

      // Unstated axis maps to display-convention
      expect(draft.axis).toEqual({ direction: 'right', basis: 'display-convention' });

      // Application-owned metadata
      expect(draft.schemaVersion).toBe(1);
      expect(draft.revision).toBe(1);
      expect(draft.topic).toBe('uniform-velocity');
      expect(draft.scenarioId).toMatch(/^sc-/);
      expect(draft.locale).toBe('en');
    });

    it('maps scenario with unknown u (velocity target), signed negative values, and stated axis', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText:
          'Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'object',
        axisDirection: 'east',
        s: {
          status: 'given',
          value: -50,
          unit: 'm',
          unresolvedReason: null,
        },
        u: {
          status: 'unknown',
          value: null,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'given',
          value: 5,
          unit: 's',
          unresolvedReason: null,
        },
        target: 'u',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      expect(draft.target).toBe('u');
      expect(draft.u).toEqual({ type: 'unknown', unit: 'm/s' });
      expect('value' in draft.u).toBe(false);

      // Preserves negative sign
      expect(draft.s).toEqual({ type: 'given', value: -50, unit: 'm' });
      expect(draft.t).toEqual({ type: 'given', value: 5, unit: 's' });

      // Question-stated axis is preserved
      expect(draft.axis).toEqual({ direction: 'east', basis: 'question-stated' });
    });

    it('maps scenario with unknown t (time target), zero displacement, and negative velocity', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText:
          'Taking north as positive, a train moves at -60 km/h and has a displacement of 0 km. Find the time in hours.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'train',
        axisDirection: 'north',
        s: {
          status: 'given',
          value: 0,
          unit: 'km',
          unresolvedReason: null,
        },
        u: {
          status: 'given',
          value: -60,
          unit: 'km/h',
          unresolvedReason: null,
        },
        t: {
          status: 'unknown',
          value: null,
          unit: 'h',
          unresolvedReason: null,
        },
        target: 't',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      expect(draft.target).toBe('t');
      expect(draft.t).toEqual({ type: 'unknown', unit: 'h' });
      expect('value' in draft.t).toBe(false);

      // Preserves 0 and negative value
      expect(draft.s).toEqual({ type: 'given', value: 0, unit: 'km' });
      expect(draft.u).toEqual({ type: 'given', value: -60, unit: 'km/h' });
    });

    it('preserves exact Sinhala source text, whitespace, line breaks, and locale', () => {
      const sinhalaRawText =
        '   \nමෝටර් රථයක් 20 m/s ඒකාකාර ප්‍රවේගයෙන් තත්පර 10 ක් ගමන් කරයි.\nඑහි විස්ථාපනය මීටර වලින් සොයන්න.   \n';
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: sinhalaRawText,
        locale: 'si',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'මෝටර් රථය',
        axisDirection: null,
        s: {
          status: 'unknown',
          value: null,
          unit: 'm',
          unresolvedReason: null,
        },
        u: {
          status: 'given',
          value: 20,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'given',
          value: 10,
          unit: 's',
          unresolvedReason: null,
        },
        target: 's',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      // Exact string preservation without trimming
      expect(draft.originalText).toBe(sinhalaRawText);
      expect(draft.locale).toBe('si');
      expect(draft.object).toBe('මෝටර් රථය');
    });

    it('retains missing quantities as unresolved with useful clarifications', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: 'A car moves at 20 m/s. Find its displacement in metres.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'car',
        axisDirection: null,
        s: {
          status: 'unknown',
          value: null,
          unit: 'm',
          unresolvedReason: null,
        },
        u: {
          status: 'given',
          value: 20,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'unresolved',
          value: null,
          unit: null,
          unresolvedReason: 'Elapsed time is not specified in the question.',
        },
        target: 's',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      expect(draft.t.type).toBe('unresolved');
      if (draft.t.type === 'unresolved') {
        expect(draft.t.reason).toContain('Elapsed time is not specified');
      }
      expect(draft.clarifications.some((c) => c.fieldRef === 't')).toBe(true);
      expect(UniformMotionDraftSchema.safeParse(draft).success).toBe(true);
    });

    it('maps unsupported motion questions to status unsupported', () => {
      const extraction: ExtractionTransport = {
        isSupported: false,
        unsupportedReason: 'Question involves accelerating motion from rest.',
        object: null,
        axisDirection: null,
        s: { status: 'unresolved', value: null, unit: null, unresolvedReason: null },
        u: { status: 'unresolved', value: null, unit: null, unresolvedReason: null },
        t: { status: 'unresolved', value: null, unit: null, unresolvedReason: null },
        target: null,
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, baseInput);
      expect(result.status).toBe('unsupported');
      if (result.status === 'unsupported') {
        expect(result.reason).toBe('Question involves accelerating motion from rest.');
      }
    });

    it('rejects unsupported units and converts them to unresolved with clarification', () => {
      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'car',
        axisDirection: null,
        s: {
          status: 'given',
          value: 100,
          unit: 'miles', // Unsupported unit
          unresolvedReason: 'Miles is not a supported displacement unit.',
        },
        u: {
          status: 'given',
          value: 20,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'unknown',
          value: null,
          unit: 'h',
          unresolvedReason: null,
        },
        target: 't',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, baseInput);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      expect(draft.s.type).toBe('unresolved');
      expect(draft.clarifications.some((c) => c.fieldRef === 's')).toBe(true);
    });

    it('enforces application-owned metadata and forbids model-invented confirmation fields', () => {
      const extraction = {
        isSupported: true,
        unsupportedReason: null,
        object: 'runner',
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 5, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 10, unit: 's', unresolvedReason: null },
        target: 's' as const,
        clarifications: [],
        // Model attempts to inject authority fields:
        confirmed: true,
        physicsValid: true,
        answerVisibility: 'all',
      };

      const result = mapExtractionToDraft(extraction as unknown as ExtractionTransport, baseInput);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft as unknown as Record<string, unknown>;
      expect(draft.confirmed).toBeUndefined();
      expect(draft.physicsValid).toBeUndefined();
      expect(draft.answerVisibility).toBeUndefined();
      expect(draft.schemaVersion).toBe(1);
      expect(draft.revision).toBe(1);
      expect(draft.topic).toBe('uniform-velocity');
    });

    it('maps explicitly stated generic object in Sinhala question to contract representation "object"', () => {
      const sinhalaQuestion =
        'නැගෙනහිර දිශාව ධන ලෙස සලකන්න. වස්තුවක් ඒකාකාර ප්රවේගයෙන් ගමන් කරයි. තත්පර 5 කදී එහි විස්ථාපනය -50 m වේ. එහි ප්රවේගය m/s වලින් සොයන්න.';
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: sinhalaQuestion,
        locale: 'si',
      };

      // Model extracts generic object as 'object'
      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'object',
        axisDirection: 'east',
        s: {
          status: 'given',
          value: -50,
          unit: 'm',
          unresolvedReason: null,
        },
        u: {
          status: 'unknown',
          value: null,
          unit: 'm/s',
          unresolvedReason: null,
        },
        t: {
          status: 'given',
          value: 5,
          unit: 's',
          unresolvedReason: null,
        },
        target: 'u',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      const draft = result.draft;
      expect(draft.object).toBe('object');
      expect(draft.clarifications).toEqual([]);
      expect(draft.target).toBe('u');
      expect(draft.u).toEqual({ type: 'unknown', unit: 'm/s' });
      expect('value' in draft.u).toBe(false);
      expect(draft.s).toEqual({ type: 'given', value: -50, unit: 'm' });
      expect(draft.t).toEqual({ type: 'given', value: 5, unit: 's' });
      expect(draft.axis).toEqual({ direction: 'east', basis: 'question-stated' });
      expect(draft.originalText).toBe(sinhalaQuestion);
      expect(UniformMotionDraftSchema.safeParse(draft).success).toBe(true);
    });

    it('normalizes Sinhala generic object string "වස්තුවක්" to contract representation "object"', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText:
          'නැගෙනහිර දිශාව ධන ලෙස සලකන්න. වස්තුවක් ඒකාකාර ප්රවේගයෙන් ගමන් කරයි. තත්පර 5 කදී එහි විස්ථාපනය -50 m වේ. එහි ප්රවේගය m/s වලින් සොයන්න.',
        locale: 'si',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'වස්තුවක්',
        axisDirection: 'east',
        s: { status: 'given', value: -50, unit: 'm', unresolvedReason: null },
        u: { status: 'unknown', value: null, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 5, unit: 's', unresolvedReason: null },
        target: 'u',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBe('object');
      expect(result.draft.clarifications).toEqual([]);
      expect(UniformMotionDraftSchema.safeParse(result.draft).success).toBe(true);
    });

    it('normalizes English generic object string "an object" to contract representation "object"', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText:
          'Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'an object',
        axisDirection: 'east',
        s: { status: 'given', value: -50, unit: 'm', unresolvedReason: null },
        u: { status: 'unknown', value: null, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 5, unit: 's', unresolvedReason: null },
        target: 'u',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBe('object');
      expect(result.draft.clarifications).toEqual([]);
      expect(UniformMotionDraftSchema.safeParse(result.draft).success).toBe(true);
    });

    it('preserves unresolved null object and adds MISSING_OBJECT clarification for genuinely missing object (English)', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: 'Moves at 20 m/s for 10 s. Find displacement.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: null,
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 20, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 10, unit: 's', unresolvedReason: null },
        target: 's',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBeNull();
      const objClarification = result.draft.clarifications.find((c) => c.fieldRef === 'object');
      expect(objClarification).toBeDefined();
      expect(objClarification?.code).toBe('MISSING_OBJECT');
      expect(objClarification?.message).toBe('The moving object is not stated in the question.');
      expect(UniformMotionDraftSchema.safeParse(result.draft).success).toBe(true);
    });

    it('preserves unresolved null object and adds MISSING_OBJECT clarification for genuinely missing object (Sinhala)', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: '20 m/s ප්‍රවේගයෙන් තත්පර 10 ක් ගමන් කරයි. විස්ථාපනය සොයන්න.',
        locale: 'si',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: null,
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 20, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 10, unit: 's', unresolvedReason: null },
        target: 's',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBeNull();
      const objClarification = result.draft.clarifications.find((c) => c.fieldRef === 'object');
      expect(objClarification).toBeDefined();
      expect(objClarification?.code).toBe('MISSING_OBJECT');
      expect(objClarification?.message).toBe('චලනය වන වස්තුව සඳහන් කර නොමැත.');
      expect(UniformMotionDraftSchema.safeParse(result.draft).success).toBe(true);
    });

    it('preserves model-provided AMBIGUOUS_OBJECT clarification without duplicate MISSING_OBJECT', () => {
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: 'A dog chases a cat at 5 m/s for 3 s. Find displacement.',
        locale: 'en',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: null,
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 5, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 3, unit: 's', unresolvedReason: null },
        target: 's',
        clarifications: [
          {
            code: 'AMBIGUOUS_OBJECT',
            message: 'Multiple objects mentioned without a clear moving subject.',
            fieldRef: 'object',
          },
        ],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBeNull();
      const objectClarifications = result.draft.clarifications.filter((c) => c.fieldRef === 'object');
      expect(objectClarifications.length).toBe(1);
      expect(objectClarifications[0].code).toBe('AMBIGUOUS_OBJECT');
      expect(objectClarifications[0].message).toBe('Multiple objects mentioned without a clear moving subject.');
    });

    it('filters out erroneous MISSING_OBJECT clarification when object was successfully extracted', () => {
      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'object',
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 20, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 10, unit: 's', unresolvedReason: null },
        target: 's',
        clarifications: [
          {
            code: 'MISSING_OBJECT',
            message: 'Erroneous clarification from provider.',
            fieldRef: 'object',
          },
        ],
      };

      const result = mapExtractionToDraft(extraction, baseInput);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      expect(result.draft.object).toBe('object');
      expect(result.draft.clarifications.some((c) => c.code === 'MISSING_OBJECT')).toBe(false);
    });

    it('faithfully preserves exact raw input text with terminal-entry spacing without silent cleaning', () => {
      const textWithTerminalArtifact =
        'නැගෙනහිර දිශාව ධන ලෙස සලකන්න. වස්තුවක් ඒකාකාර ප්රවේගයෙන් ගමන් ක         කරයි. තත්පර 5 කදී එහි විස්ථාපනය -50 m වේ. එහි ප්රවේගය m/s වලින් සොයන්න.';
      const input: QuestionSubmissionInput = {
        lessonId: 'mechanics',
        topicId: 'straight-line-motion',
        subtopicId: 'uniform-velocity',
        originalText: textWithTerminalArtifact,
        locale: 'si',
      };

      const extraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'object',
        axisDirection: 'east',
        s: { status: 'given', value: -50, unit: 'm', unresolvedReason: null },
        u: { status: 'unknown', value: null, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 5, unit: 's', unresolvedReason: null },
        target: 'u',
        clarifications: [],
      };

      const result = mapExtractionToDraft(extraction, input);
      expect(result.status).toBe('success');
      if (result.status !== 'success') return;

      // Exact input text must be preserved without normalization, regex-replace, or trimming
      expect(result.draft.originalText).toBe(textWithTerminalArtifact);
      expect(result.draft.originalText).toContain('ගමන් ක         කරයි');
    });
  });

  describe('Helper: normalizeObjectName', () => {
    it('normalizes English generic object synonyms to "object"', () => {
      expect(normalizeObjectName('object')).toBe('object');
      expect(normalizeObjectName('Object')).toBe('object');
      expect(normalizeObjectName('an object')).toBe('object');
      expect(normalizeObjectName('the object')).toBe('object');
      expect(normalizeObjectName('a body')).toBe('object');
      expect(normalizeObjectName('body')).toBe('object');
      expect(normalizeObjectName('a particle')).toBe('object');
      expect(normalizeObjectName('particle')).toBe('object');
    });

    it('normalizes Sinhala generic object synonyms to "object"', () => {
      expect(normalizeObjectName('වස්තුව')).toBe('object');
      expect(normalizeObjectName('වස්තුවක්')).toBe('object');
      expect(normalizeObjectName('ද්‍රව්‍යය')).toBe('object');
      expect(normalizeObjectName('ද්‍රව්‍යයක්')).toBe('object');
    });

    it('preserves specific entity names with whitespace trimmed', () => {
      expect(normalizeObjectName('  car  ')).toBe('car');
      expect(normalizeObjectName('train')).toBe('train');
      expect(normalizeObjectName('මෝටර් රථය')).toBe('මෝටර් රථය');
      expect(normalizeObjectName('දුම්රිය')).toBe('දුම්රිය');
    });

    it('returns null for empty, whitespace, null, or undefined', () => {
      expect(normalizeObjectName(null)).toBeNull();
      expect(normalizeObjectName(undefined)).toBeNull();
      expect(normalizeObjectName('')).toBeNull();
      expect(normalizeObjectName('   ')).toBeNull();
    });
  });

  describe('Groq Provider & Client Configuration', () => {
    it('initializes client with Groq baseURL, credentials, and maxRetries: 0', () => {
      const client = createGroqClient('gsk_test_api_key_123');
      expect(client.baseURL).toBe(GROQ_BASE_URL);
      expect(client.baseURL).toBe('https://api.groq.com/openai/v1');
      expect(client.apiKey).toBe('gsk_test_api_key_123');
      expect(client.maxRetries).toBe(0);
    });
  });

  describe('Service: interpretQuestion (Groq Provider)', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      process.env = { ...originalEnv };
      delete process.env.GROQ_API_KEY;
      delete process.env.GROQ_MODEL;
      delete process.env.OPENAI_API_KEY;
      delete process.env.OPENAI_MODEL;
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    const testInput: QuestionSubmissionInput = {
      lessonId: 'mechanics',
      topicId: 'straight-line-motion',
      subtopicId: 'uniform-velocity',
      originalText: 'A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement.',
      locale: 'en',
    };

    it('returns CONFIG_MISSING error when Groq credentials/model are not configured', async () => {
      const result = await interpretQuestion(testInput);
      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('CONFIG_MISSING');
        expect(result.error.message).toContain('Groq');
      }
    });

    it('fails with CONFIG_MISSING when Groq credentials are missing even if OpenAI credentials exist', async () => {
      // Simulate environment where OpenAI credentials exist but Groq credentials are absent
      process.env.OPENAI_API_KEY = 'sk-paid-openai-key-that-must-not-be-used';
      process.env.OPENAI_MODEL = 'gpt-4o';
      delete process.env.GROQ_API_KEY;
      delete process.env.GROQ_MODEL;

      const result = await interpretQuestion(testInput);
      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('CONFIG_MISSING');
        expect(result.error.message).toContain('Groq');
      }
    });

    it('calls responses.parse with Groq model, store: false, low reasoning effort, and bounded tokens', async () => {
      const mockExtraction: ExtractionTransport = {
        isSupported: true,
        unsupportedReason: null,
        object: 'car',
        axisDirection: null,
        s: { status: 'unknown', value: null, unit: 'm', unresolvedReason: null },
        u: { status: 'given', value: 20, unit: 'm/s', unresolvedReason: null },
        t: { status: 'given', value: 10, unit: 's', unresolvedReason: null },
        target: 's',
        clarifications: [],
      };

      const parseSpy = vi.fn().mockResolvedValue({
        status: 'completed',
        output_parsed: mockExtraction,
        output: [
          {
            type: 'message',
            content: [{ type: 'output_text', text: JSON.stringify(mockExtraction), parsed: mockExtraction }],
          },
        ],
      });

      const mockClient = {
        responses: {
          parse: parseSpy,
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('success');
      expect(parseSpy).toHaveBeenCalledTimes(1);

      const callArgs = parseSpy.mock.calls[0][0];
      expect(callArgs.model).toBe('openai/gpt-oss-120b');
      expect(callArgs.store).toBe(false);
      expect(callArgs.max_output_tokens).toBe(1500);
      expect(callArgs.reasoning?.effort).toBe('low');
      expect(callArgs.text?.format).toBeDefined();
    });

    it('handles provider refusal without returning a fabricated draft', async () => {
      const mockClient = {
        responses: {
          parse: vi.fn().mockResolvedValue({
            status: 'completed',
            output_parsed: null,
            output: [
              {
                type: 'message',
                content: [{ type: 'refusal', refusal: 'Groq refused to fulfill this request.' }],
              },
            ],
          }),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('PROVIDER_REFUSAL');
        expect(result.error.message).toContain('Groq refused');
      }
    });

    it('handles incomplete or unparseable output', async () => {
      const mockClient = {
        responses: {
          parse: vi.fn().mockResolvedValue({
            status: 'incomplete',
            output_parsed: null,
            output: [],
          }),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('INCOMPLETE_OUTPUT');
      }
    });

    it('handles Groq connection timeout without fallback fixtures', async () => {
      const timeoutError = new OpenAI.APIConnectionTimeoutError({ message: 'Groq request timed out' });
      const mockClient = {
        responses: {
          parse: vi.fn().mockRejectedValue(timeoutError),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('TIMEOUT');
        expect(result.error.message).toContain('Groq');
      }
    });

    it('handles Groq rate limits and preserves Retry-After information without automatic retry loops', async () => {
      const headers = new Headers();
      headers.set('retry-after', '25');
      const rateLimitError = new OpenAI.RateLimitError(
        429,
        { message: 'Rate limit reached' },
        'Rate limit reached',
        headers
      );
      const mockClient = {
        responses: {
          parse: vi.fn().mockRejectedValue(rateLimitError),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('RATE_LIMIT_EXCEEDED');
        expect(result.error.message).toContain('25 seconds');
        expect(result.error.details).toEqual({ retryAfter: '25' });
      }
    });

    it('handles Groq authentication failure', async () => {
      const authError = new OpenAI.AuthenticationError(
        401,
        { message: 'Invalid API key' },
        'Invalid API key',
        new Headers()
      );
      const mockClient = {
        responses: {
          parse: vi.fn().mockRejectedValue(authError),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('PROVIDER_AUTH_ERROR');
        expect(result.error.message).toContain('GROQ_API_KEY');
      }
    });

    it('does not trigger a paid fallback or fabricated output on Groq provider failure', async () => {
      const apiError = new OpenAI.APIError(
        500,
        { message: 'Groq internal server error' },
        'Groq internal error',
        new Headers()
      );
      const mockClient = {
        responses: {
          parse: vi.fn().mockRejectedValue(apiError),
        },
      } as unknown as OpenAI;

      const result = await interpretQuestion(testInput, {
        client: mockClient,
        model: 'openai/gpt-oss-120b',
      });

      expect(result.status).toBe('error');
      if (result.status === 'error') {
        expect(result.error.code).toBe('PROVIDER_ERROR');
        expect(result.error.message).toContain('Groq');
      }
    });
  });

  describe('Route Handler: POST /api/questions/interpret', () => {
    it('returns 400 MALFORMED_JSON on invalid JSON syntax without calling provider', async () => {
      const req = new NextRequest('http://localhost:3000/api/questions/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: '{ malformed json: true, ',
      });

      const res = await POST(req);
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.status).toBe('error');
      expect(json.error.code).toBe('MALFORMED_JSON');
    });

    it('returns 400 INVALID_REQUEST on schema validation failure (e.g. blank question text)', async () => {
      const req = new NextRequest('http://localhost:3000/api/questions/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          lessonId: 'mechanics',
          topicId: 'straight-line-motion',
          subtopicId: 'uniform-velocity',
          originalText: '   ', // Blank whitespace text
          locale: 'en',
        }),
      });

      const res = await POST(req);
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.status).toBe('error');
      expect(json.error.code).toBe('INVALID_REQUEST');
    });

    it('returns 400 INVALID_REQUEST when character limit exceeds 4000', async () => {
      const longText = 'a'.repeat(4001);
      const req = new NextRequest('http://localhost:3000/api/questions/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          lessonId: 'mechanics',
          topicId: 'straight-line-motion',
          subtopicId: 'uniform-velocity',
          originalText: longText,
          locale: 'en',
        }),
      });

      const res = await POST(req);
      expect(res.status).toBe(400);
      const json = await res.json();
      expect(json.status).toBe('error');
      expect(json.error.code).toBe('INVALID_REQUEST');
    });

    it('returns 413 PAYLOAD_TOO_LARGE when Content-Length exceeds 64KB', async () => {
      const req = new NextRequest('http://localhost:3000/api/questions/interpret', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'content-length': '70000',
        },
        body: JSON.stringify({}),
      });

      const res = await POST(req);
      expect(res.status).toBe(413);
      const json = await res.json();
      expect(json.status).toBe('error');
      expect(json.error.code).toBe('PAYLOAD_TOO_LARGE');
    });
  });
});

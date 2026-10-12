import crypto from 'node:crypto';
import {
  UniformMotionDraftSchema,
  type UniformMotionDraft,
} from '@/shared/scenarios/uniform-motion';
import type { QuestionSubmissionInput } from '../schema';
import type { ExtractionTransport, InterpretationResult } from './types';

const SUPPORTED_S_UNITS = ['m', 'km', 'cm'] as const;
type SupportedSUnit = (typeof SUPPORTED_S_UNITS)[number];

const SUPPORTED_U_UNITS = ['m/s', 'km/h'] as const;
type SupportedUUnit = (typeof SUPPORTED_U_UNITS)[number];

const SUPPORTED_T_UNITS = ['s', 'min', 'h'] as const;
type SupportedTUnit = (typeof SUPPORTED_T_UNITS)[number];

function isSupportedSUnit(unit: string | null | undefined): unit is SupportedSUnit {
  return typeof unit === 'string' && (SUPPORTED_S_UNITS as readonly string[]).includes(unit);
}

function isSupportedUUnit(unit: string | null | undefined): unit is SupportedUUnit {
  return typeof unit === 'string' && (SUPPORTED_U_UNITS as readonly string[]).includes(unit);
}

function isSupportedTUnit(unit: string | null | undefined): unit is SupportedTUnit {
  return typeof unit === 'string' && (SUPPORTED_T_UNITS as readonly string[]).includes(unit);
}

const GENERIC_OBJECT_TERMS = new Set([
  'object',
  'an object',
  'the object',
  'a body',
  'body',
  'a particle',
  'particle',
  'වස්තුව',
  'වස්තුවක්',
  'ද්‍රව්‍යය',
  'ද්‍රව්‍යයක්',
]);

/**
 * Normalizes explicitly stated moving objects.
 * Maps generic object terms in English and Sinhala to the canonical contract representation "object".
 * Preserves specific object names (e.g., "car", "train", "මෝටර් රථය").
 * Returns null if no object is provided or if string is empty/whitespace.
 */
export function normalizeObjectName(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (trimmed.length === 0) return null;
  const lower = trimmed.toLowerCase();
  if (GENERIC_OBJECT_TERMS.has(lower)) {
    return 'object';
  }
  return trimmed;
}

/**
 * Maps an extraction transport object produced by OpenAI into an authoritative UniformMotionDraft.
 * Enforces contract rules:
 * - Application-supplied schemaVersion, scenarioId, revision, topic, originalText, and locale.
 * - Requested target is strictly unknown with no numeric answer.
 * - Missing or ambiguous values remain unresolved with clarification issues.
 * - Preserves zero, negative signs, and original supported units without conversion.
 * - Applies display-convention axis when axis is unstated in the question.
 * - Rejects any model attempts to supply authority fields or solve quantities.
 */
export function mapExtractionToDraft(
  extraction: ExtractionTransport,
  input: QuestionSubmissionInput
): InterpretationResult {
  if (!extraction.isSupported) {
    return {
      status: 'unsupported',
      reason:
        extraction.unsupportedReason?.trim() ||
        (input.locale === 'si'
          ? 'මෙම ප්‍රශ්නය ඒකාකාර ප්‍රවේග චලිත විෂය පථයට අයත් නොවේ.'
          : 'This question involves motion outside the scope of uniform velocity.'),
    };
  }

  const scenarioId = `sc-${crypto.randomUUID()}`;
  const target = extraction.target;

  // Determine axis: preserve question-stated axis if provided; otherwise apply display-convention
  let axis: UniformMotionDraft['axis'] = null;
  if (extraction.axisDirection && extraction.axisDirection.trim().length > 0) {
    axis = {
      direction: extraction.axisDirection.trim(),
      basis: 'question-stated',
    };
  } else {
    // Contract display convention: rightward positive axis
    axis = {
      direction: 'right',
      basis: 'display-convention',
    };
  }

  const clarifications: UniformMotionDraft['clarifications'] = [];

  // Map displacement (s)
  let s: UniformMotionDraft['s'];
  if (target === 's' || extraction.s.status === 'unknown') {
    s = {
      type: 'unknown',
      unit: isSupportedSUnit(extraction.s.unit) ? extraction.s.unit : null,
    };
  } else if (extraction.s.status === 'given') {
    if (
      typeof extraction.s.value === 'number' &&
      Number.isFinite(extraction.s.value) &&
      isSupportedSUnit(extraction.s.unit)
    ) {
      s = {
        type: 'given',
        value: extraction.s.value,
        unit: extraction.s.unit,
      };
    } else {
      const reason =
        extraction.s.unresolvedReason?.trim() ||
        (input.locale === 'si'
          ? 'විස්ථාපන අගය හෝ ඒකකය (m, km, cm) අපැහැදිලි හෝ නොගැලපේ.'
          : 'Displacement value or unit (m, km, cm) is missing or unsupported.');
      s = {
        type: 'unresolved',
        reason,
        originalText: extraction.s.unit ?? undefined,
      };
      clarifications.push({
        code: 'UNRESOLVED_DISPLACEMENT',
        message: reason,
        fieldRef: 's',
      });
    }
  } else {
    const reason =
      extraction.s.unresolvedReason?.trim() ||
      (input.locale === 'si'
        ? 'විස්ථාපනය සඳහන් කර නොමැත.'
        : 'Displacement is not stated in the question.');
    s = {
      type: 'unresolved',
      reason,
      originalText: extraction.s.unit ?? undefined,
    };
    clarifications.push({
      code: 'MISSING_DISPLACEMENT',
      message: reason,
      fieldRef: 's',
    });
  }

  // Map velocity (u)
  let u: UniformMotionDraft['u'];
  if (target === 'u' || extraction.u.status === 'unknown') {
    u = {
      type: 'unknown',
      unit: isSupportedUUnit(extraction.u.unit) ? extraction.u.unit : null,
    };
  } else if (extraction.u.status === 'given') {
    if (
      typeof extraction.u.value === 'number' &&
      Number.isFinite(extraction.u.value) &&
      isSupportedUUnit(extraction.u.unit)
    ) {
      u = {
        type: 'given',
        value: extraction.u.value,
        unit: extraction.u.unit,
      };
    } else {
      const reason =
        extraction.u.unresolvedReason?.trim() ||
        (input.locale === 'si'
          ? 'ප්‍රවේග අගය හෝ ඒකකය (m/s, km/h) අපැහැදිලි හෝ නොගැලපේ.'
          : 'Velocity value or unit (m/s, km/h) is missing or unsupported.');
      u = {
        type: 'unresolved',
        reason,
        originalText: extraction.u.unit ?? undefined,
      };
      clarifications.push({
        code: 'UNRESOLVED_VELOCITY',
        message: reason,
        fieldRef: 'u',
      });
    }
  } else {
    const reason =
      extraction.u.unresolvedReason?.trim() ||
      (input.locale === 'si'
        ? 'ප්‍රවේගය සඳහන් කර නොමැත.'
        : 'Velocity is not stated in the question.');
    u = {
      type: 'unresolved',
      reason,
      originalText: extraction.u.unit ?? undefined,
    };
    clarifications.push({
      code: 'MISSING_VELOCITY',
      message: reason,
      fieldRef: 'u',
    });
  }

  // Map elapsed time (t)
  let t: UniformMotionDraft['t'];
  if (target === 't' || extraction.t.status === 'unknown') {
    t = {
      type: 'unknown',
      unit: isSupportedTUnit(extraction.t.unit) ? extraction.t.unit : null,
    };
  } else if (extraction.t.status === 'given') {
    if (
      typeof extraction.t.value === 'number' &&
      Number.isFinite(extraction.t.value) &&
      isSupportedTUnit(extraction.t.unit)
    ) {
      t = {
        type: 'given',
        value: extraction.t.value,
        unit: extraction.t.unit,
      };
    } else {
      const reason =
        extraction.t.unresolvedReason?.trim() ||
        (input.locale === 'si'
          ? 'ගත වූ කාලය හෝ ඒකකය (s, min, h) අපැහැදිලි හෝ නොගැලපේ.'
          : 'Elapsed time value or unit (s, min, h) is missing or unsupported.');
      t = {
        type: 'unresolved',
        reason,
        originalText: extraction.t.unit ?? undefined,
      };
      clarifications.push({
        code: 'UNRESOLVED_TIME',
        message: reason,
        fieldRef: 't',
      });
    }
  } else {
    const reason =
      extraction.t.unresolvedReason?.trim() ||
      (input.locale === 'si'
        ? 'ගත වූ කාලය සඳහන් කර නොමැත.'
        : 'Elapsed time is not stated in the question.');
    t = {
      type: 'unresolved',
      reason,
      originalText: extraction.t.unit ?? undefined,
    };
    clarifications.push({
      code: 'MISSING_TIME',
      message: reason,
      fieldRef: 't',
    });
  }

  // Target coherence: ensure requested target is strictly unknown
  if (target === 's' && s.type !== 'unknown') {
    s = { type: 'unknown', unit: 'unit' in s ? s.unit : null };
  } else if (target === 'u' && u.type !== 'unknown') {
    u = { type: 'unknown', unit: 'unit' in u ? u.unit : null };
  } else if (target === 't' && t.type !== 'unknown') {
    t = { type: 'unknown', unit: 'unit' in t ? t.unit : null };
  }

  const object = normalizeObjectName(extraction.object);

  // Add model clarifications that don't duplicate generated codes
  for (const c of extraction.clarifications) {
    // If the object was successfully identified, filter out any erroneous MISSING_OBJECT clarification
    if (object !== null && (c.code === 'MISSING_OBJECT' || c.fieldRef === 'object')) {
      continue;
    }
    if (c.code && c.message && !clarifications.some((existing) => existing.code === c.code)) {
      clarifications.push({
        code: c.code,
        message: c.message,
        fieldRef: c.fieldRef ? c.fieldRef : undefined,
      });
    }
  }

  // If object is genuinely unresolved/missing, ensure an appropriate clarification is provided
  if (object === null) {
    const hasObjectClarification = clarifications.some(
      (c) => c.fieldRef === 'object' || c.code === 'MISSING_OBJECT' || c.code === 'AMBIGUOUS_OBJECT'
    );
    if (!hasObjectClarification) {
      clarifications.push({
        code: 'MISSING_OBJECT',
        message:
          input.locale === 'si'
            ? 'චලනය වන වස්තුව සඳහන් කර නොමැත.'
            : 'The moving object is not stated in the question.',
        fieldRef: 'object',
      });
    }
  }

  const draft: UniformMotionDraft = {
    schemaVersion: 1,
    scenarioId,
    revision: 1,
    topic: 'uniform-velocity',
    originalText: input.originalText,
    locale: input.locale,
    object,
    axis,
    s,
    u,
    t,
    target,
    clarifications,
  };

  // Authoritative validation against the domain UniformMotionDraftSchema
  const parseResult = UniformMotionDraftSchema.safeParse(draft);
  if (!parseResult.success) {
    return {
      status: 'error',
      error: {
        code: 'INVALID_EXTRACTION',
        message: 'Constructed draft failed domain contract validation.',
        details: parseResult.error.issues,
      },
    };
  }

  return {
    status: 'success',
    draft: parseResult.data,
  };
}

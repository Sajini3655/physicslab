import {
  UniformMotionDraftSchema,
  UniformMotionCandidateSchema,
  ConfirmedUniformMotionScenarioSchema,
  type UniformMotionDraft,
  type ConfirmedUniformMotionScenario,
  type DisplacementUnit,
  type VelocityUnit,
  type TimeUnit,
} from '@/shared/scenarios/uniform-motion';
import { validateUniformMotion } from '@/features/simulation/physics/engine';
import type {
  StoredScenarioReview,
  CandidateReadinessResult,
  LocalizedValidationIssue,
} from '../types';

export const REVIEW_STORAGE_KEY = 'physicslab_scenario_review_v1';
export const CONFIRMED_SCENARIO_STORAGE_KEY = 'physicslab_confirmed_scenario_v1';

export interface ParseNumberResult {
  isValid: boolean;
  isTemporary: boolean;
  value?: number;
}

/**
 * Strictly parses user numeric inputs.
 * Distinguishes temporary editing states (e.g. empty, "-", "+", ".") from valid finite numbers
 * and strictly rejects partial parses (e.g. "12abc").
 */
export function parseStrictNumber(val: string): ParseNumberResult {
  const trimmed = val.trim();
  if (trimmed === '' || trimmed === '-' || trimmed === '+' || trimmed === '.' || trimmed === '-.' || trimmed === '+.') {
    return { isValid: false, isTemporary: true };
  }

  // Strict regex for floating point / integer numbers
  const isNumericFormat = /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(trimmed);
  if (!isNumericFormat) {
    return { isValid: false, isTemporary: false };
  }

  const num = Number(trimmed);
  if (Number.isNaN(num) || !Number.isFinite(num)) {
    return { isValid: false, isTemporary: false };
  }

  return { isValid: true, isTemporary: false, value: num };
}

/**
 * Resolves clarifications associated with a specific field when that field is properly addressed.
 * Preserves general clarifications (without fieldRef) and clarifications for other fields.
 */
export function resolveFieldClarifications(
  clarifications: UniformMotionDraft['clarifications'],
  fieldRef: 'object' | 'axis' | 's' | 'u' | 't'
): UniformMotionDraft['clarifications'] {
  return clarifications.filter((c) => {
    if (c.fieldRef === fieldRef) return false;
    if (fieldRef === 'object' && (c.code === 'MISSING_OBJECT' || c.code === 'AMBIGUOUS_OBJECT')) return false;
    if (fieldRef === 'axis' && c.code === 'UNSTATED_AXIS') return false;
    if (fieldRef === 's' && (c.code === 'MISSING_DISPLACEMENT' || c.code === 'UNRESOLVED_DISPLACEMENT')) return false;
    if (fieldRef === 'u' && (c.code === 'MISSING_VELOCITY' || c.code === 'UNRESOLVED_VELOCITY')) return false;
    if (fieldRef === 't' && (c.code === 'MISSING_TIME' || c.code === 'UNRESOLVED_TIME')) return false;
    return true;
  });
}

/**
 * Updates the moving object name in the draft.
 * Increments revision. Resolves object-related clarifications when set, or adds MISSING_OBJECT if cleared.
 */
export function updateDraftObject(
  draft: UniformMotionDraft,
  rawObject: string | null
): UniformMotionDraft {
  const trimmed = rawObject ? rawObject.trim() : null;
  const object = trimmed && trimmed.length > 0 ? trimmed : null;

  const clarifications = resolveFieldClarifications(draft.clarifications, 'object');
  if (object === null) {
    clarifications.push({
      code: 'MISSING_OBJECT',
      message:
        draft.locale === 'si'
          ? 'චලනය වන වස්තුව සඳහන් කර නොමැත.'
          : 'The moving object is not stated.',
      fieldRef: 'object',
    });
  }

  return {
    ...draft,
    object,
    revision: draft.revision + 1,
    clarifications,
  };
}

/**
 * Updates the positive axis direction.
 * Sets basis to 'student-selected'.
 * Never silently flips quantity signs.
 */
export function updateDraftAxis(
  draft: UniformMotionDraft,
  direction: string
): UniformMotionDraft {
  const trimmed = direction.trim() || 'right';
  const clarifications = resolveFieldClarifications(draft.clarifications, 'axis');

  return {
    ...draft,
    axis: {
      direction: trimmed,
      basis: 'student-selected',
    },
    revision: draft.revision + 1,
    clarifications,
  };
}

/**
 * Updates the target quantity (s, u, or t).
 * - Newly selected target becomes unknown with no numeric value.
 * - Previous target becomes unresolved until the student supplies a value.
 * - Does not invent missing values.
 */
export function updateDraftTarget(
  draft: UniformMotionDraft,
  newTarget: 's' | 'u' | 't'
): UniformMotionDraft {
  if (draft.target === newTarget) {
    return draft;
  }

  const prevTarget = draft.target;
  let s = { ...draft.s };
  let u = { ...draft.u };
  let t = { ...draft.t };
  let clarifications = [...draft.clarifications];

  // Set new target as unknown
  if (newTarget === 's') {
    const unit = 'unit' in s && s.unit ? s.unit : 'm';
    s = { type: 'unknown', unit: unit as DisplacementUnit };
    clarifications = resolveFieldClarifications(clarifications, 's');
  } else if (newTarget === 'u') {
    const unit = 'unit' in u && u.unit ? u.unit : 'm/s';
    u = { type: 'unknown', unit: unit as VelocityUnit };
    clarifications = resolveFieldClarifications(clarifications, 'u');
  } else if (newTarget === 't') {
    const unit = 'unit' in t && t.unit ? t.unit : 's';
    t = { type: 'unknown', unit: unit as TimeUnit };
    clarifications = resolveFieldClarifications(clarifications, 't');
  }

  // Previous target becomes unresolved because it had no numeric value
  if (prevTarget === 's' && newTarget !== 's') {
    const reason =
      draft.locale === 'si'
        ? 'ඉලක්කය වෙනස් කිරීමෙන් පසු විස්ථාපනය අවශ්‍ය වේ.'
        : 'Displacement is required after changing target.';
    s = { type: 'unresolved', reason };
    clarifications.push({ code: 'MISSING_DISPLACEMENT', message: reason, fieldRef: 's' });
  } else if (prevTarget === 'u' && newTarget !== 'u') {
    const reason =
      draft.locale === 'si'
        ? 'ඉලක්කය වෙනස් කිරීමෙන් පසු ප්‍රවේගය අවශ්‍ය වේ.'
        : 'Velocity is required after changing target.';
    u = { type: 'unresolved', reason };
    clarifications.push({ code: 'MISSING_VELOCITY', message: reason, fieldRef: 'u' });
  } else if (prevTarget === 't' && newTarget !== 't') {
    const reason =
      draft.locale === 'si'
        ? 'ඉලක්කය වෙනස් කිරීමෙන් පසු ගත වූ කාලය අවශ්‍ය වේ.'
        : 'Elapsed time is required after changing target.';
    t = { type: 'unresolved', reason };
    clarifications.push({ code: 'MISSING_TIME', message: reason, fieldRef: 't' });
  }

  return {
    ...draft,
    target: newTarget,
    s,
    u,
    t,
    revision: draft.revision + 1,
    clarifications,
  };
}

/**
 * Updates a quantity's value from user text input.
 * Handles temporary states (e.g. typing "-") and invalid text gracefully without coercing to zero.
 */
export function updateDraftQuantityValue(
  draft: UniformMotionDraft,
  field: 's' | 'u' | 't',
  rawString: string
): { draft: UniformMotionDraft; isTemporary: boolean } {
  const parsed = parseStrictNumber(rawString);

  if (parsed.isValid && typeof parsed.value === 'number') {
    const clarifications = resolveFieldClarifications(draft.clarifications, field);

    if (field === 's') {
      const unit = ('unit' in draft.s && draft.s.unit) || 'm';
      return {
        draft: {
          ...draft,
          s: { type: 'given', value: parsed.value, unit: unit as DisplacementUnit },
          revision: draft.revision + 1,
          clarifications,
        },
        isTemporary: false,
      };
    } else if (field === 'u') {
      const unit = ('unit' in draft.u && draft.u.unit) || 'm/s';
      return {
        draft: {
          ...draft,
          u: { type: 'given', value: parsed.value, unit: unit as VelocityUnit },
          revision: draft.revision + 1,
          clarifications,
        },
        isTemporary: false,
      };
    } else {
      const unit = ('unit' in draft.t && draft.t.unit) || 's';
      return {
        draft: {
          ...draft,
          t: { type: 'given', value: parsed.value, unit: unit as TimeUnit },
          revision: draft.revision + 1,
          clarifications,
        },
        isTemporary: false,
      };
    }
  }

  // Not valid yet: either temporary (like "-") or invalid (like "12abc")
  const reason =
    draft.locale === 'si'
      ? 'වලංගු සංඛ්‍යාත්මක අගයක් ඇතුළත් කරන්න.'
      : 'Enter a valid numeric value.';

  const clarifications = resolveFieldClarifications(draft.clarifications, field);
  clarifications.push({
    code: `UNRESOLVED_${field.toUpperCase()}`,
    message: reason,
    fieldRef: field,
  });

  const unresolved = { type: 'unresolved' as const, reason };

  return {
    draft: {
      ...draft,
      [field]: unresolved,
      revision: draft.revision + 1,
      clarifications,
    },
    isTemporary: parsed.isTemporary,
  };
}

/**
 * Updates a quantity's unit.
 */
export function updateDraftQuantityUnit(
  draft: UniformMotionDraft,
  field: 's' | 'u' | 't',
  unit: string
): UniformMotionDraft {
  if (field === 's') {
    const s = { ...draft.s };
    if (s.type === 'given' || s.type === 'unknown') {
      s.unit = unit as DisplacementUnit;
    }
    return { ...draft, s, revision: draft.revision + 1 };
  } else if (field === 'u') {
    const u = { ...draft.u };
    if (u.type === 'given' || u.type === 'unknown') {
      u.unit = unit as VelocityUnit;
    }
    return { ...draft, u, revision: draft.revision + 1 };
  } else {
    const t = { ...draft.t };
    if (t.type === 'given' || t.type === 'unknown') {
      t.unit = unit as TimeUnit;
    }
    return { ...draft, t, revision: draft.revision + 1 };
  }
}

/**
 * Computes structural candidate readiness from the current draft and staleness status.
 * Rejects candidate status if the interpretation is stale, if any required quantity is missing/unresolved,
 * or if there are outstanding clarifications.
 */
export function computeCandidateReadiness(
  draft: UniformMotionDraft | null,
  isStale: boolean
): CandidateReadinessResult {
  if (!draft) {
    return {
      isReady: false,
      isStale: false,
      candidate: null,
      issues: ['No draft available.'],
    };
  }

  if (isStale) {
    return {
      isReady: false,
      isStale: true,
      candidate: null,
      issues: ['Interpretation is out of date with current question.'],
    };
  }

  const parsed = UniformMotionCandidateSchema.safeParse(draft);
  if (parsed.success) {
    return {
      isReady: true,
      isStale: false,
      candidate: parsed.data,
      issues: [],
    };
  }

  return {
    isReady: false,
    isStale: false,
    candidate: null,
    issues: parsed.error.issues.map((i) => i.message),
  };
}

/**
 * Generates a short scenario description locally from the current draft state using templates.
 * Does not make an AI request or guess directions of travel.
 */
export function generateScenarioDescription(
  draft: UniformMotionDraft,
  uiLocale: 'en' | 'si'
): string {
  if (uiLocale === 'si') {
    const obj = draft.object ? draft.object : 'වස්තුවක්';
    const axisText = draft.axis
      ? `${draft.axis.direction} ධන දිශාව ලෙස සලකමින්`
      : 'ධන දිශාවක් නොමැතිව';

    const givenParts: string[] = [];
    if (draft.s.type === 'given') {
      givenParts.push(`විස්ථාපනය ${draft.s.value} ${draft.s.unit} වේ`);
    }
    if (draft.u.type === 'given') {
      givenParts.push(`ප්‍රවේගය ${draft.u.value} ${draft.u.unit} වේ`);
    }
    if (draft.t.type === 'given') {
      givenParts.push(`ගත වූ කාලය ${draft.t.value} ${draft.t.unit} වේ`);
    }

    const givenSummary =
      givenParts.length > 0 ? `${givenParts.join(', ')}.` : '';

    let targetText = '';
    if (draft.target === 's') {
      const uStr = 'unit' in draft.s && draft.s.unit ? ` ${draft.s.unit} වලින්` : '';
      targetText = `විස්ථාපනය (s)${uStr} සෙවිය යුතුය.`;
    } else if (draft.target === 'u') {
      const uStr = 'unit' in draft.u && draft.u.unit ? ` ${draft.u.unit} වලින්` : '';
      targetText = `ප්‍රවේගය (u)${uStr} සෙවිය යුතුය.`;
    } else if (draft.target === 't') {
      const uStr = 'unit' in draft.t && draft.t.unit ? ` ${draft.t.unit} වලින්` : '';
      targetText = `ගත වූ කාලය (t)${uStr} සෙවිය යුතුය.`;
    }

    return `${obj} ${axisText} සරල රේඛාවක් ඔස්සේ ඒකාකාර ප්‍රවේගයෙන් ගමන් කරයි. ${givenSummary} ${targetText}`.trim();
  }

  // English
  const obj = draft.object ? draft.object : 'An object';
  const axisText = draft.axis
    ? `with ${draft.axis.direction} as positive`
    : 'without a stated positive axis';

  const givenParts: string[] = [];
  if (draft.s.type === 'given') {
    givenParts.push(`displacement is ${draft.s.value} ${draft.s.unit}`);
  }
  if (draft.u.type === 'given') {
    givenParts.push(`velocity is ${draft.u.value} ${draft.u.unit}`);
  }
  if (draft.t.type === 'given') {
    givenParts.push(`time is ${draft.t.value} ${draft.t.unit}`);
  }

  const givenSummary =
    givenParts.length > 0 ? `Given: ${givenParts.join(', ')}.` : '';

  let targetText = '';
  if (draft.target === 's') {
    const uStr = 'unit' in draft.s && draft.s.unit ? ` in ${draft.s.unit}` : '';
    targetText = `Find displacement (s)${uStr}.`;
  } else if (draft.target === 'u') {
    const uStr = 'unit' in draft.u && draft.u.unit ? ` in ${draft.u.unit}` : '';
    targetText = `Find velocity (u)${uStr}.`;
  } else if (draft.target === 't') {
    const uStr = 'unit' in draft.t && draft.t.unit ? ` in ${draft.t.unit}` : '';
    targetText = `Find elapsed time (t)${uStr}.`;
  }

  return `${obj} moves along a straight line at constant velocity, ${axisText}. ${givenSummary} ${targetText}`.trim();
}

function getSessionStorage(): Storage | null {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return window.sessionStorage;
    }
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Loads and validates scenario review data from sessionStorage.
 */
export function loadStoredReview(): StoredScenarioReview | null {
  try {
    const storage = getSessionStorage();
    if (!storage) return null;
    const raw = storage.getItem(REVIEW_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== 1) return null;

    if (parsed.draft !== null) {
      const validation = UniformMotionDraftSchema.safeParse(parsed.draft);
      if (!validation.success) {
        return null;
      }
      return {
        version: 1,
        draft: validation.data,
        interpretedSource: parsed.interpretedSource || null,
        temporaryValues: parsed.temporaryValues || {},
      };
    }

    return {
      version: 1,
      draft: null,
      interpretedSource: null,
      temporaryValues: parsed.temporaryValues || {},
    };
  } catch {
    return null;
  }
}

/**
 * Saves scenario review data to sessionStorage.
 */
export function saveStoredReview(data: StoredScenarioReview): boolean {
  try {
    const storage = getSessionStorage();
    if (!storage) return false;
    storage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely removes scenario review data from sessionStorage.
 */
export function clearStoredReview(): void {
  try {
    const storage = getSessionStorage();
    if (!storage) return;
    storage.removeItem(REVIEW_STORAGE_KEY);
  } catch {}
}

/**
 * Saves a confirmed scenario snapshot to sessionStorage for simulation handoff.
 */
export function saveConfirmedScenario(confirmed: ConfirmedUniformMotionScenario): boolean {
  try {
    const storage = getSessionStorage();
    if (!storage) return false;
    const validated = ConfirmedUniformMotionScenarioSchema.safeParse(confirmed);
    if (!validated.success) return false;
    storage.setItem(CONFIRMED_SCENARIO_STORAGE_KEY, JSON.stringify(validated.data));
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads and strictly validates a confirmed scenario snapshot from sessionStorage.
 * Verifies schema shape and runs deterministic physical validation before returning.
 * Returns null if data is missing, malformed, or physically invalid.
 */
export function loadConfirmedScenario(): ConfirmedUniformMotionScenario | null {
  try {
    const storage = getSessionStorage();
    if (!storage) return null;
    const raw = storage.getItem(CONFIRMED_SCENARIO_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const validated = ConfirmedUniformMotionScenarioSchema.safeParse(parsed);
    if (!validated.success) return null;

    const confirmed = validated.data;
    // Re-verify deterministic physical validation to ensure integrity
    const valResult = validateUniformMotion(confirmed.scenario);
    if (
      !valResult.isValid ||
      valResult.scenarioId !== confirmed.scenario.scenarioId ||
      valResult.revision !== confirmed.scenario.revision ||
      confirmed.confirmationId !== confirmed.scenario.scenarioId ||
      confirmed.confirmedRevision !== confirmed.scenario.revision
    ) {
      return null;
    }

    return confirmed;
  } catch {
    return null;
  }
}

/**
 * Safely removes confirmed scenario snapshot from sessionStorage.
 */
export function clearConfirmedScenario(): void {
  try {
    const storage = getSessionStorage();
    if (!storage) return;
    storage.removeItem(CONFIRMED_SCENARIO_STORAGE_KEY);
  } catch {}
}

/**
 * Maps raw physical validation issues into localized messages with associated target fields where possible.
 */
export function localizeAndMapValidationIssues(
  issues: Array<{ code: string; message: string }>,
  tVal: (key: string) => string
): LocalizedValidationIssue[] {
  return issues.map((issue) => {
    const code = issue.code;
    let field: LocalizedValidationIssue['field'] = 'general';
    let messageKey: string | null = null;

    switch (code) {
      case 'INVALID_TARGET':
        field = 'target';
        messageKey = 'invalidTarget';
        break;
      case 'NEGATIVE_TIME':
        field = 't';
        messageKey = 'negativeTime';
        break;
      case 'SIGN_MISMATCH':
        field = 't';
        messageKey = 'signMismatch';
        break;
      case 'INDETERMINATE_TIME':
        field = 't';
        messageKey = 'indeterminateTime';
        break;
      case 'INDETERMINATE_VELOCITY':
        field = 'u';
        messageKey = 'indeterminateVelocity';
        break;
      case 'IMPOSSIBLE_STATIONARY_DISPLACEMENT':
        field = 's';
        messageKey = 'impossibleStationaryDisplacement';
        break;
      case 'IMPOSSIBLE_ZERO_DURATION_DISPLACEMENT':
        field = 's';
        messageKey = 'impossibleZeroDurationDisplacement';
        break;
      case 'NON_FINITE_VALUE':
        messageKey = 'nonFiniteValue';
        if (/displacement/i.test(issue.message)) field = 's';
        else if (/velocity/i.test(issue.message)) field = 'u';
        else if (/time/i.test(issue.message)) field = 't';
        break;
      case 'MISSING_QUANTITY':
        if (/displacement/i.test(issue.message)) {
          field = 's';
          messageKey = 'missingDisplacement';
        } else if (/velocity/i.test(issue.message)) {
          field = 'u';
          messageKey = 'missingVelocity';
        } else if (/time/i.test(issue.message)) {
          field = 't';
          messageKey = 'missingTime';
        }
        break;
      case 'UNSUPPORTED_UNIT':
        messageKey = 'unsupportedUnit';
        break;
      case 'DIVISION_BY_ZERO':
        messageKey = 'divisionByZero';
        break;
      default:
        break;
    }

    let message = issue.message;
    if (messageKey) {
      try {
        const translated = tVal(messageKey);
        if (translated) message = translated;
      } catch {
        message = issue.message;
      }
    }

    return {
      code,
      field,
      message,
    };
  });
}

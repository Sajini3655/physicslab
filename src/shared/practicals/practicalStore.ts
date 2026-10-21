export const PRACTICAL_WORK_STORAGE_KEY = 'physicslab_practical_work_v1';
export const PRACTICAL_WORK_UPDATED_EVENT = 'physicslab_practical_work_updated';

export interface PracticalRecord {
  experimentId: string;
  updatedAt: number;
  mode: 'guided' | 'independent';
  zeroError?: string;
  observations: Record<string, unknown>;
  calculations: Record<string, string>;
  calculationResults?: Record<string, boolean>;
  calculationFeedback?: Record<string, { en: string; si: string }>;
  rubricScores?: Record<string, number>;
  conclusionAnswers?: Record<string, string>;
  isCompleted?: boolean;
}

export interface PracticalWorkState {
  version: 1;
  records: Record<string, PracticalRecord>;
}

export const DEFAULT_PRACTICAL_WORK_STATE: PracticalWorkState = {
  version: 1,
  records: {},
};

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

/**
 * Validates and sanitizes raw practical work state from localStorage.
 */
export function sanitizePracticalWorkState(raw: unknown): PracticalWorkState {
  if (!raw || typeof raw !== 'object') {
    return { version: 1, records: {} };
  }

  const obj = raw as Record<string, unknown>;
  if (obj.version !== 1 || !obj.records || typeof obj.records !== 'object') {
    return { version: 1, records: {} };
  }

  const sanitizedRecords: Record<string, PracticalRecord> = {};
  const rawRecords = obj.records as Record<string, unknown>;

  for (const [key, value] of Object.entries(rawRecords)) {
    if (!value || typeof value !== 'object') continue;
    const r = value as Record<string, unknown>;
    if (typeof r.experimentId !== 'string') continue;

    sanitizedRecords[key] = {
      experimentId: r.experimentId,
      updatedAt: typeof r.updatedAt === 'number' ? r.updatedAt : Date.now(),
      mode: r.mode === 'independent' ? 'independent' : 'guided',
      zeroError: typeof r.zeroError === 'string' ? r.zeroError : undefined,
      observations: r.observations && typeof r.observations === 'object' ? (r.observations as Record<string, unknown>) : {},
      calculations: r.calculations && typeof r.calculations === 'object' ? (r.calculations as Record<string, string>) : {},
      calculationResults: r.calculationResults && typeof r.calculationResults === 'object' ? (r.calculationResults as Record<string, boolean>) : undefined,
      calculationFeedback: r.calculationFeedback && typeof r.calculationFeedback === 'object' ? (r.calculationFeedback as Record<string, { en: string; si: string }>) : undefined,
      rubricScores: r.rubricScores && typeof r.rubricScores === 'object' ? (r.rubricScores as Record<string, number>) : undefined,
      conclusionAnswers: r.conclusionAnswers && typeof r.conclusionAnswers === 'object' ? (r.conclusionAnswers as Record<string, string>) : undefined,
      isCompleted: typeof r.isCompleted === 'boolean' ? r.isCompleted : false,
    };
  }

  return {
    version: 1,
    records: sanitizedRecords,
  };
}

/**
 * Load all practical work from localStorage.
 */
export function getStoredPracticalWork(): PracticalWorkState {
  if (!isBrowser()) {
    return { version: 1, records: {} };
  }

  try {
    const raw = window.localStorage.getItem(PRACTICAL_WORK_STORAGE_KEY);
    if (!raw) return { version: 1, records: {} };
    const parsed = JSON.parse(raw);
    return sanitizePracticalWorkState(parsed);
  } catch {
    return { version: 1, records: {} };
  }
}

/**
 * Persist practical work state to localStorage.
 */
export function saveStoredPracticalWork(state: PracticalWorkState): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(PRACTICAL_WORK_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(
      new CustomEvent(PRACTICAL_WORK_UPDATED_EVENT, {
        detail: { records: state.records },
      })
    );
  } catch (err) {
    console.error('Failed to save practical work to localStorage', err);
  }
}

/**
 * Retrieve record for a specific experiment.
 */
export function getPracticalRecord(experimentId: string): PracticalRecord | null {
  const state = getStoredPracticalWork();
  return state.records[experimentId] || null;
}

/**
 * Save or update an experiment's practical record.
 */
export function savePracticalRecord(
  partial: Partial<PracticalRecord> & { experimentId: string }
): PracticalRecord {
  const state = getStoredPracticalWork();
  const existing = state.records[partial.experimentId];

  const updated: PracticalRecord = {
    experimentId: partial.experimentId,
    updatedAt: Date.now(),
    mode: partial.mode ?? existing?.mode ?? 'guided',
    zeroError: partial.zeroError !== undefined ? partial.zeroError : existing?.zeroError,
    observations: {
      ...(existing?.observations ?? {}),
      ...(partial.observations ?? {}),
    },
    calculations: {
      ...(existing?.calculations ?? {}),
      ...(partial.calculations ?? {}),
    },
    calculationResults: partial.calculationResults !== undefined ? partial.calculationResults : existing?.calculationResults,
    calculationFeedback: partial.calculationFeedback !== undefined ? partial.calculationFeedback : existing?.calculationFeedback,
    rubricScores: {
      ...(existing?.rubricScores ?? {}),
      ...(partial.rubricScores ?? {}),
    },
    conclusionAnswers: {
      ...(existing?.conclusionAnswers ?? {}),
      ...(partial.conclusionAnswers ?? {}),
    },
    isCompleted: partial.isCompleted !== undefined ? partial.isCompleted : (existing?.isCompleted ?? false),
  };

  state.records[partial.experimentId] = updated;
  saveStoredPracticalWork(state);
  return updated;
}

/**
 * Reset a single experiment's saved observations and answers.
 */
export function resetPracticalRecord(experimentId: string): void {
  const state = getStoredPracticalWork();
  if (state.records[experimentId]) {
    delete state.records[experimentId];
    saveStoredPracticalWork(state);
  }
}

/**
 * Clears all practical records.
 */
export function clearAllPracticalWork(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(PRACTICAL_WORK_STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent(PRACTICAL_WORK_UPDATED_EVENT, {
      detail: { records: {} },
    })
  );
}

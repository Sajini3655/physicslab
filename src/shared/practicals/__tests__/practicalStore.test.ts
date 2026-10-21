import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  PRACTICAL_WORK_STORAGE_KEY,
  getStoredPracticalWork,
  saveStoredPracticalWork,
  getPracticalRecord,
  savePracticalRecord,
  resetPracticalRecord,
  clearAllPracticalWork,
  sanitizePracticalWorkState,
} from '../practicalStore';

describe('Practical Store (physicslab_practical_work_v1)', () => {
  let mockStorage: Record<string, string> = {};

  beforeEach(() => {
    mockStorage = {};
    const mockLocalStorage = {
      getItem: vi.fn((key: string) => mockStorage[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        mockStorage[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete mockStorage[key];
      }),
      clear: vi.fn(() => {
        mockStorage = {};
      }),
    };
    vi.stubGlobal('localStorage', mockLocalStorage);
    vi.stubGlobal('window', {
      localStorage: mockLocalStorage,
      dispatchEvent: vi.fn(),
    });
  });

  it('returns default empty state when localStorage is empty', () => {
    const state = getStoredPracticalWork();
    expect(state.version).toBe(1);
    expect(state.records).toEqual({});
  });

  it('sanitizes invalid or corrupted state gracefully', () => {
    const corrupted = { version: 2, invalid: true };
    const sanitized = sanitizePracticalWorkState(corrupted);
    expect(sanitized.version).toBe(1);
    expect(sanitized.records).toEqual({});

    const badRecords = {
      version: 1,
      records: {
        'exp-1': { experimentId: 123 }, // invalid experimentId
        'exp-2': null,
        'exp-3': { experimentId: 'exp-3', mode: 'independent', zeroError: '+0.1' },
      },
    };
    const sanitized2 = sanitizePracticalWorkState(badRecords);
    expect(sanitized2.records['exp-1']).toBeUndefined();
    expect(sanitized2.records['exp-2']).toBeUndefined();
    expect(sanitized2.records['exp-3']).toBeDefined();
    expect(sanitized2.records['exp-3'].mode).toBe('independent');
    expect(sanitized2.records['exp-3'].zeroError).toBe('+0.1');
  });

  it('saves and retrieves an experiment record', () => {
    savePracticalRecord({
      experimentId: 'exp-1-vernier',
      mode: 'independent',
      zeroError: '+0.1',
      observations: { extTrials: ['25.4', '25.3', '25.5'] },
      calculations: { meanExt: '25.4', corrExt: '25.3' },
      rubricScores: { q1: 2 },
    });

    const record = getPracticalRecord('exp-1-vernier');
    expect(record).not.toBeNull();
    expect(record?.experimentId).toBe('exp-1-vernier');
    expect(record?.mode).toBe('independent');
    expect(record?.zeroError).toBe('+0.1');
    expect(record?.observations.extTrials).toEqual(['25.4', '25.3', '25.5']);
    expect(record?.calculations.meanExt).toBe('25.4');
    expect(record?.rubricScores?.q1).toBe(2);

    // Check direct localStorage JSON
    const raw = mockStorage[PRACTICAL_WORK_STORAGE_KEY];
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed.records['exp-1-vernier']).toBeDefined();
  });

  it('merges updates into existing record without overwriting unrelated fields', () => {
    savePracticalRecord({
      experimentId: 'exp-2-micrometer',
      mode: 'guided',
      zeroError: '+0.02',
      observations: { diaTrials: ['24.32', '24.30', '24.34'] },
    });

    savePracticalRecord({
      experimentId: 'exp-2-micrometer',
      calculations: { volume: '857.3' },
      isCompleted: true,
    });

    const record = getPracticalRecord('exp-2-micrometer');
    expect(record?.mode).toBe('guided');
    expect(record?.zeroError).toBe('+0.02');
    expect(record?.observations.diaTrials).toEqual(['24.32', '24.30', '24.34']);
    expect(record?.calculations.volume).toBe('857.3');
    expect(record?.isCompleted).toBe(true);
  });

  it('resets a single experiment record without affecting others', () => {
    savePracticalRecord({ experimentId: 'exp-1', mode: 'guided' });
    savePracticalRecord({ experimentId: 'exp-2', mode: 'independent' });

    resetPracticalRecord('exp-1');

    expect(getPracticalRecord('exp-1')).toBeNull();
    expect(getPracticalRecord('exp-2')).not.toBeNull();
  });

  it('saves entire practical work state directly', () => {
    saveStoredPracticalWork({
      version: 1,
      records: {
        'exp-direct': {
          experimentId: 'exp-direct',
          updatedAt: Date.now(),
          mode: 'guided',
          observations: { val: '123' },
          calculations: {},
        },
      },
    });

    const record = getPracticalRecord('exp-direct');
    expect(record?.observations.val).toBe('123');
  });

  it('clears all practical records', () => {
    savePracticalRecord({ experimentId: 'exp-1', mode: 'guided' });
    savePracticalRecord({ experimentId: 'exp-2', mode: 'guided' });

    clearAllPracticalWork();

    const state = getStoredPracticalWork();
    expect(state.records).toEqual({});
  });
});

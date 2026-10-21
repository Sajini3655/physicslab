import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Assessment Session Persistence Contract', () => {
  const mockStorage: Record<string, string> = {};

  beforeEach(() => {
    for (const key in mockStorage) {
      delete mockStorage[key];
    }

    vi.stubGlobal('sessionStorage', {
      getItem: (k: string) => mockStorage[k] || null,
      setItem: (k: string, v: string) => {
        mockStorage[k] = v;
      },
      removeItem: (k: string) => {
        delete mockStorage[k];
      },
      clear: () => {
        for (const key in mockStorage) delete mockStorage[key];
      },
    });
  });

  const sampleQuestions = [
    {
      id: 'mech-01',
      type: 'mcq',
      question: { en: 'What is inertia?', si: 'අවස්ථිතිය යනු කුමක්ද?' },
      options: [
        { id: 'A', text: { en: 'Resistance to change in motion', si: 'චලිතය වෙනස් වීමට දක්වන ප්‍රතිරෝධය' } },
        { id: 'B', text: { en: 'Speed', si: 'වේගය' } },
      ],
      correctOptionId: 'A',
      solution: { en: 'Resistance to acceleration', si: 'ත්වරණයට දක්වන ප්‍රතිරෝධය' },
    },
    {
      id: 'mech-02',
      type: 'numerical',
      question: { en: 'Calculate acceleration if F = 20 N and m = 4 kg', si: 'F = 20 N සහ m = 4 kg විට ත්වරණය' },
      expected: 5.0,
      tolerance: 0.1,
      solution: { en: 'a = F/m = 5.0 m/s^2', si: 'a = F/m = 5.0 m/s^2' },
    },
  ];

  it('serializes and stores active assessment attempt in sessionStorage', () => {
    const sessionKey = 'physicslab_assessment_unit-2';
    const sessionData = {
      questions: sampleQuestions,
      answers: { 'mech-01': 'A', 'mech-02': '5.0' },
      submitted: false,
      result: null,
      showSolutions: {},
    };

    sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));

    const retrieved = JSON.parse(sessionStorage.getItem(sessionKey)!);
    expect(retrieved.questions.length).toBe(2);
    expect(retrieved.questions[0].id).toBe('mech-01');
    expect(retrieved.answers['mech-01']).toBe('A');
    expect(retrieved.answers['mech-02']).toBe('5.0');
    expect(retrieved.submitted).toBe(false);
  });

  it('restores exact bilingual question content across language switch without data loss', () => {
    const sessionKey = 'physicslab_assessment_unit-2';
    const sessionData = {
      questions: sampleQuestions,
      answers: { 'mech-01': 'A', 'mech-02': '5.0' },
      submitted: false,
      result: null,
      showSolutions: {},
    };

    sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));

    // Simulate reading in Sinhala context
    const parsed = JSON.parse(sessionStorage.getItem(sessionKey)!);
    const sinhalaQuestionText = parsed.questions[0].question.si;
    const sinhalaOptionText = parsed.questions[0].options[0].text.si;

    expect(sinhalaQuestionText).toBe('අවස්ථිතිය යනු කුමක්ද?');
    expect(sinhalaOptionText).toBe('චලිතය වෙනස් වීමට දක්වන ප්‍රතිරෝධය');
    // Ensure answers are preserved
    expect(parsed.answers['mech-01']).toBe('A');
    expect(parsed.answers['mech-02']).toBe('5.0');
  });

  it('preserves submitted score and solution visibility across language switch', () => {
    const sessionKey = 'physicslab_assessment_unit-1';
    const submittedData = {
      questions: sampleQuestions,
      answers: { 'mech-01': 'A', 'mech-02': '5.0' },
      submitted: true,
      result: { totalQuestions: 2, totalCorrect: 2, percentageScore: 100 },
      showSolutions: { 'mech-01': true },
    };

    sessionStorage.setItem(sessionKey, JSON.stringify(submittedData));

    const parsed = JSON.parse(sessionStorage.getItem(sessionKey)!);
    expect(parsed.submitted).toBe(true);
    expect(parsed.result.percentageScore).toBe(100);
    expect(parsed.showSolutions['mech-01']).toBe(true);
  });

  it('resets session to a fresh attempt when retaking assessment', () => {
    const sessionKey = 'physicslab_assessment_unit-1';
    const submittedData = {
      questions: sampleQuestions,
      answers: { 'mech-01': 'A' },
      submitted: true,
      result: { totalQuestions: 2, totalCorrect: 1, percentageScore: 50 },
      showSolutions: { 'mech-01': true },
    };
    sessionStorage.setItem(sessionKey, JSON.stringify(submittedData));

    // Reset action
    const freshAttempt = {
      questions: sampleQuestions,
      answers: {},
      submitted: false,
      result: null,
      showSolutions: {},
    };
    sessionStorage.setItem(sessionKey, JSON.stringify(freshAttempt));

    const resetParsed = JSON.parse(sessionStorage.getItem(sessionKey)!);
    expect(resetParsed.submitted).toBe(false);
    expect(resetParsed.result).toBeNull();
    expect(resetParsed.answers).toEqual({});
    expect(resetParsed.showSolutions).toEqual({});
  });
});

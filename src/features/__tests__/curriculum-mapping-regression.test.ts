import { describe, it, expect } from 'vitest';
import { MECHANICS_QUESTION_BANK } from '../mechanics/questions/bank';
import { MECHANICS_LESSONS } from '../mechanics/curriculum';
import { generateUnit2Assessment } from '../mechanics/questions/assessment';

import { MAGNETISM_QUESTION_BANK } from '../magnetism/questions/bank';
import { MAGNETISM_LESSONS } from '../magnetism/curriculum';
import { generateUnit7Assessment } from '../magnetism/questions/assessment';

import { ELECTRICITY_QUESTION_BANK } from '../electricity/questions/bank';
import { ELECTRICITY_LESSONS } from '../electricity/curriculum';
import { generateUnit8Assessment } from '../electricity/questions/assessment';

describe('Curriculum Topic Mapping Regression Checks (Units 2, 7, 8)', () => {
  describe('Unit 2: Mechanics (Competencies 2.1 – 2.8)', () => {
    it('verifies all 8 competencies have distinct questions and no legacy 2.9/2.10/2.11 mappings', () => {
      const allowed = [
        'Competency 2.1',
        'Competency 2.2',
        'Competency 2.3',
        'Competency 2.4',
        'Competency 2.5',
        'Competency 2.6',
        'Competency 2.7',
        'Competency 2.8',
      ];

      MECHANICS_QUESTION_BANK.forEach((q) => {
        expect(allowed).toContain(q.competencyRef);
      });
    });

    it('verifies representative structured questions mapped to their specific official competencies', () => {
      const qMap = new Map(MECHANICS_QUESTION_BANK.map((q) => [q.id, q]));

      // 2.1 Kinematics
      expect(qMap.get('mech-sq02')?.competencyRef).toBe('Competency 2.1');
      // 2.2 Resultant forces, moments, centres of gravity
      expect(qMap.get('mech-sq05')?.competencyRef).toBe('Competency 2.2');
      // 2.3 Newton’s laws and momentum
      expect(qMap.get('mech-sq03')?.competencyRef).toBe('Competency 2.3');
      // 2.4 Equilibrium
      expect(qMap.get('mech-sq04')?.competencyRef).toBe('Competency 2.4');
      // 2.5 Work, energy and power
      expect(qMap.get('mech-sq06')?.competencyRef).toBe('Competency 2.5');
      // 2.6 Rotational and circular motion
      expect(qMap.get('mech-sq07')?.competencyRef).toBe('Competency 2.6');
      expect(qMap.get('mech-sq08')?.competencyRef).toBe('Competency 2.6');
      // 2.7 Hydrostatics
      expect(qMap.get('mech-sq09')?.competencyRef).toBe('Competency 2.7');
      // 2.8 Fluid dynamics
      expect(qMap.get('mech-sq10')?.competencyRef).toBe('Competency 2.8');
    });

    it('verifies assessment generator creates 20 questions distributed across 2.1 to 2.8', () => {
      const assessment = generateUnit2Assessment();
      expect(assessment.length).toBe(20);
      const uniqueComps = new Set(assessment.map((q) => q.competencyRef));
      expect(uniqueComps.size).toBe(8);
    });

    it('verifies representative mechanics lessons and syllabusRef mappings', () => {
      const lessonMap = new Map(MECHANICS_LESSONS.map((l) => [l.id, l]));
      expect(lessonMap.get('lesson-2-1')?.syllabusRef).toBe('Competency 2.1');
      expect(lessonMap.get('lesson-2-4')?.syllabusRef).toBe('Competency 2.1');
      expect(lessonMap.get('lesson-2-5')?.syllabusRef).toBe('Competency 2.3');
      expect(lessonMap.get('lesson-2-6')?.syllabusRef).toBe('Competency 2.4');
      expect(lessonMap.get('lesson-2-7')?.syllabusRef).toBe('Competency 2.2');
      expect(lessonMap.get('lesson-2-8')?.syllabusRef).toBe('Competency 2.5');
      expect(lessonMap.get('lesson-2-9')?.syllabusRef).toBe('Competency 2.6');
      expect(lessonMap.get('lesson-2-10')?.syllabusRef).toBe('Competency 2.6');
      expect(lessonMap.get('lesson-2-11')?.syllabusRef).toBe('Competency 2.7 & 2.8');
    });
  });

  describe('Unit 7: Magnetic Field (Competencies 7.1 – 7.3)', () => {
    it('verifies all questions in bank map strictly to 7.1, 7.2, or 7.3', () => {
      const allowed = ['Competency 7.1', 'Competency 7.2', 'Competency 7.3'];
      MAGNETISM_QUESTION_BANK.forEach((q) => {
        expect(allowed).toContain(q.competencyRef);
      });
    });

    it('verifies representative lessons and their official competency mappings', () => {
      const lessonMap = new Map(MAGNETISM_LESSONS.map((l) => [l.id, l]));

      // 7.1: Magnetic forces and Hall effect
      expect(lessonMap.get('lesson-7-2')?.syllabusRef).toBe('Competency 7.1');
      expect(lessonMap.get('lesson-7-3')?.syllabusRef).toBe('Competency 7.1');

      // 7.2: Fields produced by currents
      expect(lessonMap.get('lesson-7-1')?.syllabusRef).toBe('Competency 7.2');
      expect(lessonMap.get('lesson-7-5')?.syllabusRef).toBe('Competency 7.2');

      // 7.3: Coil torque, galvanometers and DC motors
      expect(lessonMap.get('lesson-7-4')?.syllabusRef).toBe('Competency 7.3');
    });

    it('verifies representative questions and structured questions for Unit 7', () => {
      const qMap = new Map(MAGNETISM_QUESTION_BANK.map((q) => [q.id, q]));

      // 7.1 Magnetic forces and Hall effect
      expect(qMap.get('mag-sq02')?.competencyRef).toBe('Competency 7.1');
      expect(qMap.get('mag-sq03')?.competencyRef).toBe('Competency 7.1');
      expect(qMap.get('mag-sq04')?.competencyRef).toBe('Competency 7.1');

      // 7.2 Fields produced by currents & terrestrial magnetism
      expect(qMap.get('mag-sq01')?.competencyRef).toBe('Competency 7.2');
      expect(qMap.get('mag-sq09')?.competencyRef).toBe('Competency 7.2');
      expect(qMap.get('mag-sq10')?.competencyRef).toBe('Competency 7.2');

      // 7.3 Coil torque, galvanometers & DC motors
      expect(qMap.get('mag-sq07')?.competencyRef).toBe('Competency 7.3');
      expect(qMap.get('mag-sq08')?.competencyRef).toBe('Competency 7.3');
    });

    it('verifies assessment generator creates 20 questions across 7.1, 7.2, and 7.3', () => {
      const assessment = generateUnit7Assessment();
      expect(assessment.length).toBe(20);
      const counts: Record<string, number> = {};
      assessment.forEach((q) => {
        counts[q.competencyRef] = (counts[q.competencyRef] || 0) + 1;
      });
      expect(counts['Competency 7.1']).toBe(7);
      expect(counts['Competency 7.2']).toBe(7);
      expect(counts['Competency 7.3']).toBe(6);
    });
  });

  describe('Unit 8: Current Electricity (Competencies 8.1 – 8.6)', () => {
    it('verifies all questions in bank map strictly to 8.1 through 8.6', () => {
      const allowed = [
        'Competency 8.1',
        'Competency 8.2',
        'Competency 8.3',
        'Competency 8.4',
        'Competency 8.5',
        'Competency 8.6',
      ];
      ELECTRICITY_QUESTION_BANK.forEach((q) => {
        expect(allowed).toContain(q.competencyRef);
      });
    });

    it('verifies representative lessons and their official competency mappings', () => {
      const lessonMap = new Map(ELECTRICITY_LESSONS.map((l) => [l.id, l]));

      // 8.1: Current, resistance, resistivity, combinations & Ohm's law
      expect(lessonMap.get('lesson-8-1')?.syllabusRef).toBe('Competency 8.1');
      expect(lessonMap.get('lesson-8-2')?.syllabusRef).toBe('Competency 8.1');

      // 8.2 & 8.3: DC energy/power, EMF & internal resistance
      expect(lessonMap.get('lesson-8-3')?.syllabusRef).toBe('Competency 8.2 & 8.3');

      // 8.4: Kirchhoff's laws and circuit analysis
      expect(lessonMap.get('lesson-8-4')?.syllabusRef).toBe('Competency 8.4');

      // 8.5: Measuring instruments, bridges and potentiometers
      expect(lessonMap.get('lesson-8-5')?.syllabusRef).toBe('Competency 8.5');

      // 8.6: Electromagnetic induction, AC and transformers
      expect(lessonMap.get('lesson-8-6')?.syllabusRef).toBe('Competency 8.6');

      // Practical hub lesson
      const practicalLesson = lessonMap.get('lesson-8-10');
      expect(practicalLesson).toBeDefined();
      expect(practicalLesson?.slug).toBe('practical-investigations');
      expect(practicalLesson?.simulationType).toBe('electricity-practicals');
    });

    it('verifies representative questions and category distinctions for 8.1, 8.2, and 8.3', () => {
      const qMap = new Map(ELECTRICITY_QUESTION_BANK.map((q) => [q.id, q]));

      // 8.1: Resistance & combinations
      expect(qMap.get('cur-8-2-01')?.competencyRef).toBe('Competency 8.1');
      expect(qMap.get('cur-sq02')?.competencyRef).toBe('Competency 8.1');

      // 8.2: DC energy and power
      expect(qMap.get('cur-8-2-09')?.competencyRef).toBe('Competency 8.2');
      expect(qMap.get('cur-8-2-10')?.competencyRef).toBe('Competency 8.2');
      expect(qMap.get('cur-8-2-13')?.competencyRef).toBe('Competency 8.2');
      expect(qMap.get('cur-8-3-04')?.competencyRef).toBe('Competency 8.2');
      expect(qMap.get('cur-sq04')?.competencyRef).toBe('Competency 8.2');

      // 8.3: EMF and internal resistance
      expect(qMap.get('cur-8-3-01')?.competencyRef).toBe('Competency 8.3');
      expect(qMap.get('cur-8-3-09')?.competencyRef).toBe('Competency 8.3');
      expect(qMap.get('cur-sq03')?.competencyRef).toBe('Competency 8.3');
    });

    it('verifies assessment generator creates 20 questions distributed across 8.1 to 8.6', () => {
      const assessment = generateUnit8Assessment();
      expect(assessment.length).toBe(20);
      const counts: Record<string, number> = {};
      assessment.forEach((q) => {
        counts[q.competencyRef] = (counts[q.competencyRef] || 0) + 1;
      });
      expect(counts['Competency 8.1']).toBe(3);
      expect(counts['Competency 8.2']).toBe(3);
      expect(counts['Competency 8.3']).toBe(4);
      expect(counts['Competency 8.4']).toBe(3);
      expect(counts['Competency 8.5']).toBe(4);
      expect(counts['Competency 8.6']).toBe(3);
    });
  });
});

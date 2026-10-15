import { describe, it, expect } from 'vitest';
import {
  VACUUM_PERMITTIVITY_EPSILON_0,
  COULOMB_CONSTANT_K,
  calculateCoulombForce,
  calculateElectricField,
  calculateElectricPotential,
  calculatePotentialEnergy,
  calculateWorkInElectricField,
  calculateUniformFieldBetweenPlates,
  calculateParallelPlateCapacitance,
  calculateEquivalentCapacitanceSeries,
  calculateEquivalentCapacitanceParallel,
  calculateCapacitorEnergy,
  calculateCapacitorEnergyFromCharge,
  calculateCapacitorEnergyFromChargeAndVoltage,
  calculateEnergyDensity,
  calculateSphericalConductorCapacitance,
  calculateFieldConductingSphere,
  calculatePotentialConductingSphere,
} from '../physics/calculations';

describe('Unit 6: Electrostatic Field - Physics Calculations', () => {
  describe('Coulomb Law & Electric Field (Competency 6.1)', () => {
    it('verifies standard Coulomb constant k ≈ 8.988 × 10⁹ N m² C⁻²', () => {
      expect(COULOMB_CONSTANT_K).toBeCloseTo(8.988e9, -6);
      expect(VACUUM_PERMITTIVITY_EPSILON_0).toBeCloseTo(8.854e-12, 14);
    });

    it('calculates Coulomb force between two 1 μC charges separated by 10 cm in vacuum', () => {
      const q1 = 1e-6;
      const q2 = 1e-6;
      const r = 0.1; // 10 cm = 0.1 m
      const force = calculateCoulombForce(q1, q2, r);
      // F = 8.98755e9 * 1e-12 / 0.01 = 0.8988 N
      expect(force).toBeCloseTo(0.8988, 3);
    });

    it('calculates Coulomb force in a dielectric medium (ε_r = 80 for water)', () => {
      const q1 = 1e-6;
      const q2 = 1e-6;
      const r = 0.1;
      const forceWater = calculateCoulombForce(q1, q2, r, 80);
      const forceVacuum = calculateCoulombForce(q1, q2, r, 1);
      expect(forceWater).toBeCloseTo(forceVacuum / 80, 5);
    });

    it('calculates electric field strength from a +5 μC point charge at 0.5 m', () => {
      const field = calculateElectricField(5e-6, 0.5);
      // E = 8.98755e9 * 5e-6 / 0.25 = 179,751 N/C
      expect(field).toBeCloseTo(179751, -1);
    });
  });

  describe('Electric Potential & Energy (Competency 6.2)', () => {
    it('calculates positive electric potential near a positive charge', () => {
      const v = calculateElectricPotential(2e-6, 0.2); // +2 μC at 20 cm
      // V = 8.98755e9 * 2e-6 / 0.2 = 89,875 V
      expect(v).toBeCloseTo(89875, -1);
      expect(v).toBeGreaterThan(0);
    });

    it('calculates negative electric potential near a negative charge', () => {
      const v = calculateElectricPotential(-2e-6, 0.2);
      expect(v).toBeCloseTo(-89875, -1);
      expect(v).toBeLessThan(0);
    });

    it('calculates interaction potential energy between like and unlike charges', () => {
      const uLike = calculatePotentialEnergy(1e-6, 2e-6, 0.1);
      const uUnlike = calculatePotentialEnergy(1e-6, -2e-6, 0.1);
      expect(uLike).toBeGreaterThan(0);
      expect(uUnlike).toBeLessThan(0);
      expect(Math.abs(uLike)).toBeCloseTo(Math.abs(uUnlike), 6);
    });

    it('calculates external work done moving a +3 μC charge from V1 = 100 V to V2 = 500 V', () => {
      const work = calculateWorkInElectricField(3e-6, 100, 500);
      // W = 3e-6 * 400 = 1.2e-3 J = 1.2 mJ
      expect(work).toBeCloseTo(1.2e-3, 6);
    });
  });

  describe('Uniform Field & Conductors (Competency 6.3)', () => {
    it('calculates uniform electric field between plates with 200 V across 5 mm', () => {
      const eField = calculateUniformFieldBetweenPlates(200, 0.005);
      // E = 200 / 0.005 = 40,000 V/m
      expect(eField).toBe(40000);
    });

    it('verifies electric field inside a charged conducting sphere is zero (Faraday cage effect)', () => {
      const R = 0.2; // 20 cm radius
      const Q = 10e-6; // 10 μC
      const eInside = calculateFieldConductingSphere(Q, R, 0.1); // at r = 10 cm
      expect(eInside).toBe(0);
    });

    it('verifies electric field outside a charged conducting sphere equals equivalent point charge field', () => {
      const R = 0.2;
      const Q = 10e-6;
      const eOutside = calculateFieldConductingSphere(Q, R, 0.5); // at r = 50 cm
      const ePoint = calculateElectricField(Q, 0.5);
      expect(eOutside).toBe(ePoint);
    });

    it('verifies potential inside a conducting sphere is uniform and equal to surface potential', () => {
      const R = 0.2;
      const Q = 10e-6;
      const vSurface = calculatePotentialConductingSphere(Q, R, 0.2);
      const vCenter = calculatePotentialConductingSphere(Q, R, 0.0);
      const vInside = calculatePotentialConductingSphere(Q, R, 0.1);
      expect(vCenter).toBe(vSurface);
      expect(vInside).toBe(vSurface);
    });
  });

  describe('Capacitance, Combinations & Energy (Competency 6.4)', () => {
    it('calculates parallel-plate capacitance for 0.04 m² area and 2 mm air gap', () => {
      const C = calculateParallelPlateCapacitance(0.04, 0.002, 1.0);
      // C = 8.854188e-12 * 0.04 / 0.002 = 1.7708e-10 F ≈ 177.1 pF
      expect(C).toBeCloseTo(1.771e-10, 12);
    });

    it('calculates capacitance increase with mica dielectric (ε_r = 6.0)', () => {
      const cAir = calculateParallelPlateCapacitance(0.04, 0.002, 1.0);
      const cMica = calculateParallelPlateCapacitance(0.04, 0.002, 6.0);
      expect(cMica).toBeCloseTo(6.0 * cAir, 12);
    });

    it('calculates equivalent capacitance for series capacitors (10 μF, 20 μF, 30 μF)', () => {
      // 1/C = 1/10 + 1/20 + 1/30 = (6 + 3 + 2)/60 = 11/60 => C = 60/11 ≈ 5.4545 μF
      const cSeries = calculateEquivalentCapacitanceSeries([10e-6, 20e-6, 30e-6]);
      expect(cSeries).toBeCloseTo((60 / 11) * 1e-6, 9);
    });

    it('calculates equivalent capacitance for parallel capacitors (10 μF, 20 μF, 30 μF)', () => {
      // C = 10 + 20 + 30 = 60 μF
      const cParallel = calculateEquivalentCapacitanceParallel([10e-6, 20e-6, 30e-6]);
      expect(cParallel).toBeCloseTo(60e-6, 9);
    });

    it('verifies consistency between all three capacitor energy formulas (U = 1/2 CV² = Q²/2C = 1/2 QV)', () => {
      const C = 50e-6; // 50 μF
      const V = 12; // 12 V
      const Q = C * V; // 600 μC

      const u1 = calculateCapacitorEnergy(C, V);
      const u2 = calculateCapacitorEnergyFromCharge(Q, C);
      const u3 = calculateCapacitorEnergyFromChargeAndVoltage(Q, V);

      expect(u1).toBeCloseTo(3.6e-3, 6); // 3.6 mJ
      expect(u2).toBeCloseTo(u1, 9);
      expect(u3).toBeCloseTo(u1, 9);
    });

    it('calculates electrostatic energy density for E = 10⁶ V/m in vacuum', () => {
      // u = 1/2 * 8.854188e-12 * 1e12 = 4.427 J/m³
      const u = calculateEnergyDensity(1e6, 1.0);
      expect(u).toBeCloseTo(4.427, 2);
    });

    it('calculates capacitance of an isolated conducting sphere of radius 1 m', () => {
      // C = 4πε₀ R = 1 / COULOMB_CONSTANT_K ≈ 1.11e-10 F = 111 pF
      const C = calculateSphericalConductorCapacitance(1.0);
      expect(C).toBeCloseTo(1.1126e-10, 13);
    });
  });
});

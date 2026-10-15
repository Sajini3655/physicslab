import { describe, it, expect } from 'vitest';
import {
  VACUUM_PERMEABILITY_MU_0,
  ELEMENTARY_CHARGE_E,
  ELECTRON_MASS_KG,
  PROTON_MASS_KG,
  calculateMagneticForceOnCharge,
  calculateCyclotronRadius,
  calculateCyclotronPeriod,
  calculateVelocitySelectorSpeed,
  calculateHallVoltage,
  calculateMagneticForceOnConductor,
  calculateForceBetweenParallelWires,
  calculateTorqueOnCoil,
  calculateMagneticDipoleMoment,
  calculateGalvanometerCurrentSensitivity,
  calculateAmmeterShuntResistance,
  calculateVoltmeterMultiplierResistance,
  calculateFieldLongStraightWire,
  calculateFieldCircularCoilCenter,
  calculateFieldSolenoid,
  calculateEarthFieldComponents,
} from '../physics/calculations';

describe('Unit 7: Magnetic Field - Physics Calculations', () => {
  describe('Constants & Moving Charges in Magnetic Field (Competencies 7.1 & 7.2)', () => {
    it('verifies standard vacuum permeability constant μ₀ ≈ 4π × 10⁻⁷ T m A⁻¹', () => {
      expect(VACUUM_PERMEABILITY_MU_0).toBeCloseTo(4 * Math.PI * 1e-7, 12);
      expect(ELEMENTARY_CHARGE_E).toBeCloseTo(1.602176634e-19, 24);
    });

    it('calculates magnetic force on a 2 μC charge moving at 5 × 10⁵ m/s at 30° in 0.4 T field', () => {
      const q = 2e-6;
      const v = 5e5;
      const B = 0.4;
      const angle = (30 * Math.PI) / 180;
      const force = calculateMagneticForceOnCharge(q, v, B, angle);
      // F = 2e-6 * 5e5 * 0.4 * sin(30°) = 1.0 * 0.4 * 0.5 = 0.2 N
      expect(force).toBeCloseTo(0.2, 5);
    });

    it('calculates cyclotron radius for an electron in a 0.01 T magnetic field at 2 × 10⁶ m/s', () => {
      const r = calculateCyclotronRadius(ELECTRON_MASS_KG, 2e6, ELEMENTARY_CHARGE_E, 0.01);
      // r = (9.10938e-31 * 2e6) / (1.60218e-19 * 0.01) = 1.82187e-24 / 1.60218e-21 ≈ 1.137 mm
      expect(r).toBeCloseTo(1.137e-3, 5);
    });

    it('verifies cyclotron period is strictly independent of particle velocity', () => {
      const T1 = calculateCyclotronPeriod(PROTON_MASS_KG, ELEMENTARY_CHARGE_E, 0.5);
      // T = 2π * 1.6726e-27 / (1.6022e-19 * 0.5) ≈ 1.3117e-7 s
      expect(T1).toBeCloseTo(1.3117e-7, 10);
    });

    it('calculates velocity selector balance speed v = E / B', () => {
      const E = 60000; // 60 kV/m
      const B = 0.2; // 0.2 T
      const v = calculateVelocitySelectorSpeed(E, B);
      expect(v).toBe(300000); // 3 × 10⁵ m/s
    });

    it('calculates Hall voltage in a copper strip (n = 8.5 × 10²⁸ m⁻³, thickness 0.1 mm, I = 5 A, B = 1.2 T)', () => {
      const B = 1.2;
      const I = 5.0;
      const n = 8.5e28;
      const q = ELEMENTARY_CHARGE_E;
      const t = 1e-4; // 0.1 mm = 10⁻⁴ m
      const V_H = calculateHallVoltage(B, I, n, q, t);
      // V_H = (1.2 * 5) / (8.5e28 * 1.6022e-19 * 1e-4) = 6.0 / (1.36187e6) ≈ 4.406 μV
      expect(V_H).toBeCloseTo(4.406e-6, 8);
    });
  });

  describe('Forces on Currents and Parallel Conductors (Competency 7.3)', () => {
    it('calculates magnetic force on a 25 cm wire carrying 4.0 A perpendicular to 0.5 T field', () => {
      const force = calculateMagneticForceOnConductor(0.5, 4.0, 0.25);
      // F = 0.5 * 4.0 * 0.25 = 0.50 N
      expect(force).toBeCloseTo(0.5, 5);
    });

    it('verifies standard definition of Ampere: force between 1 A currents at 1 m separation equals 2 × 10⁻⁷ N/m', () => {
      const forcePerMetre = calculateForceBetweenParallelWires(1.0, 1.0, 1.0, 1.0);
      expect(forcePerMetre).toBeCloseTo(2.0e-7, 12);
    });
  });

  describe('Torque on Coils & Galvanometer Conversions (Competency 7.4)', () => {
    it('calculates torque on a 50-turn rectangular coil of area 0.02 m² carrying 2 A in 0.3 T field', () => {
      const torque = calculateTorqueOnCoil(0.3, 2.0, 50, 0.02);
      // τ = 0.3 * 2.0 * 50 * 0.02 = 0.60 N m
      expect(torque).toBeCloseTo(0.6, 5);
    });

    it('calculates magnetic dipole moment m = NIA', () => {
      const m = calculateMagneticDipoleMoment(100, 3.0, 0.015);
      // m = 100 * 3.0 * 0.015 = 4.5 A m²
      expect(m).toBeCloseTo(4.5, 5);
    });

    it('calculates galvanometer current sensitivity S_I = BAN / C', () => {
      const S_I = calculateGalvanometerCurrentSensitivity(0.2, 0.005, 200, 1e-6);
      // S_I = (0.2 * 0.005 * 200) / 1e-6 = 0.2 / 1e-6 = 200,000 rad/A
      expect(S_I).toBeCloseTo(200000, 0);
    });

    it('calculates shunt resistance to convert 5 mA, 20 Ω galvanometer to a 10 A ammeter', () => {
      const Ig = 0.005; // 5 mA
      const Rg = 20.0;
      const I_max = 10.0;
      const Rs = calculateAmmeterShuntResistance(Ig, Rg, I_max);
      // Rs = (0.005 * 20) / (10 - 0.005) = 0.1 / 9.995 ≈ 0.010005 Ω
      expect(Rs).toBeCloseTo(0.010005, 5);
    });

    it('calculates multiplier resistance to convert 1 mA, 50 Ω galvanometer to a 15 V voltmeter', () => {
      const Ig = 0.001; // 1 mA
      const Rg = 50.0;
      const V_max = 15.0;
      const Rm = calculateVoltmeterMultiplierResistance(Ig, Rg, V_max);
      // Rm = (15 / 0.001) - 50 = 15000 - 50 = 14,950 Ω
      expect(Rm).toBe(14950);
    });
  });

  describe('Current-Generated Magnetic Fields & Terrestrial Components (Competencies 7.1 & 7.5)', () => {
    it('calculates magnetic field 5 cm from a long straight wire carrying 10 A', () => {
      const B = calculateFieldLongStraightWire(10.0, 0.05);
      // B = (4πe-7 * 10) / (2π * 0.05) = 2e-7 * 10 / 0.05 = 4e-5 T = 40 μT
      expect(B).toBeCloseTo(4e-5, 9);
    });

    it('calculates magnetic field at center of a 20-turn circular coil of radius 10 cm carrying 1.5 A', () => {
      const B = calculateFieldCircularCoilCenter(1.5, 0.1, 20);
      // B = (4πe-7 * 20 * 1.5) / (2 * 0.1) = (1.2e-4 * π) / 0.2 = 6e-4 * π ≈ 1.885e-4 T
      expect(B).toBeCloseTo(1.88496e-4, 7);
    });

    it('calculates magnetic field inside an 800 turns/m solenoid carrying 2.5 A', () => {
      const B = calculateFieldSolenoid(2.5, 800);
      // B = 4πe-7 * 800 * 2.5 = 4πe-7 * 2000 = 8πe-4 ≈ 2.5133e-3 T = 2.51 mT
      expect(B).toBeCloseTo(2.5133e-3, 5);
    });

    it('calculates Earth magnetic field components for B_H = 30 μT and dip angle 60°', () => {
      const dipAngleRad = (60 * Math.PI) / 180;
      const { B_V, B_total } = calculateEarthFieldComponents(30e-6, dipAngleRad);
      // B_V = 30e-6 * tan(60°) = 30e-6 * √3 ≈ 51.96 μT
      // B_total = 30e-6 / cos(60°) = 30e-6 / 0.5 = 60 μT
      expect(B_V).toBeCloseTo(51.96e-6, 7);
      expect(B_total).toBeCloseTo(60.0e-6, 7);
    });
  });
});

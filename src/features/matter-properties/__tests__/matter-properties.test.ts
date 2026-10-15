import { describe, it, expect } from 'vitest';
import {
  calculateStress,
  calculateStrain,
  calculateYoungModulus,
  calculateWireExtension,
  calculateStrainEnergy,
  calculateEnergyDensity,
  calculateViscousForce,
  calculatePoiseuilleFlowRate,
  calculateStokesDragForce,
  calculateTerminalVelocity,
  calculateViscosityFromTerminalVelocity,
  calculateSurfaceTensionForce,
  calculateExcessPressureDrop,
  calculateExcessPressureBubble,
  calculateCapillaryRise,
  calculateSurfaceTensionFromCapillaryRise,
} from '../physics/calculations';

describe('Unit 10: Mechanical Properties of Matter - Physics Calculations Engine', () => {
  describe('Competency 10.1: Elasticity of Solids & Young’s Modulus', () => {
    it('calculates tensile stress correctly', () => {
      // F = 100 N, Area = 2e-6 m^2 -> sigma = 50e6 Pa = 50 MPa
      const stress = calculateStress(100, 2e-6);
      expect(stress).toBeCloseTo(5e7, 1);
    });

    it('calculates tensile strain correctly', () => {
      // extension = 2 mm = 2e-3 m, L = 2 m -> strain = 1e-3
      const strain = calculateStrain(2e-3, 2.0);
      expect(strain).toBeCloseTo(1e-3, 6);
    });

    it('calculates Young’s modulus of steel wire', () => {
      // F = 98 N, L = 2 m, A = 1e-6 m^2, dL = 1e-3 m
      // Y = (98 * 2) / (1e-6 * 1e-3) = 196 / 1e-9 = 1.96e11 Pa
      const y = calculateYoungModulus(98, 2.0, 1e-6, 1e-3);
      expect(y).toBeCloseTo(1.96e11, -5);
    });

    it('calculates wire extension given diameter and Young modulus', () => {
      // F = 100 N, L = 3 m, d = 1 mm (r = 0.5 mm, A = pi * 0.25e-6 = 7.854e-7 m^2), Y = 2e11 Pa
      // dL = (4 * 100 * 3) / (pi * 1e-6 * 2e11) = 1200 / (6.283e5) = 1.9098e-3 m
      const ext = calculateWireExtension(100, 3.0, 1e-3, 2e11);
      expect(ext).toBeCloseTo(1.9098e-3, 6);
    });

    it('calculates strain energy (0.5 * F * dL)', () => {
      // F = 100 N, dL = 2e-3 m -> U = 0.1 J
      const u = calculateStrainEnergy(100, 2e-3);
      expect(u).toBeCloseTo(0.1, 4);
    });

    it('calculates strain energy density (0.5 * Y * strain^2)', () => {
      // Y = 2e11, strain = 1e-3 -> u = 0.5 * 2e11 * 1e-6 = 1e5 J/m^3
      const density = calculateEnergyDensity(2e11, 1e-3);
      expect(density).toBeCloseTo(1e5, 1);
    });

    it('handles zero or invalid area gracefully', () => {
      expect(calculateStress(100, 0)).toBe(0);
      expect(calculateYoungModulus(100, 2, 0, 1e-3)).toBe(0);
      expect(calculateWireExtension(100, 2, 0, 2e11)).toBe(0);
    });
  });

  describe('Competency 10.2: Viscosity of Fluids & Stokes’ Law', () => {
    it('calculates Newton viscous force', () => {
      // eta = 0.1 Pa s, A = 0.05 m^2, dv/dx = 20 s^-1 -> F = 0.1 * 0.05 * 20 = 0.1 N
      const f = calculateViscousForce(0.1, 0.05, 20);
      expect(f).toBeCloseTo(0.1, 4);
    });

    it('calculates Poiseuille volume flow rate through a capillary tube', () => {
      // P = 1000 Pa, r = 1e-3 m, eta = 1e-3 Pa s (water), L = 0.2 m
      // Q = (pi * 1000 * 1e-12) / (8 * 1e-3 * 0.2) = 3.14159e-9 / 1.6e-3 = 1.9635e-6 m^3/s
      const q = calculatePoiseuilleFlowRate(1000, 1e-3, 1e-3, 0.2);
      expect(q).toBeCloseTo(1.9635e-6, 9);
    });

    it('calculates Stokes drag force on a spherical ball', () => {
      // eta = 1.0 Pa s (castor oil), r = 2e-3 m, v = 0.05 m/s
      // Fd = 6 * pi * 1.0 * 2e-3 * 0.05 = 6 * pi * 1e-4 = 1.88495e-3 N
      const fd = calculateStokesDragForce(1.0, 2e-3, 0.05);
      expect(fd).toBeCloseTo(1.88495e-3, 6);
    });

    it('calculates terminal velocity of a steel sphere in glycerin', () => {
      // r = 2e-3 m, rho = 7800 kg/m^3 (steel), sigma = 1260 kg/m^3 (glycerin), eta = 1.4 Pa s, g = 9.8
      // deltaDensity = 6540 kg/m^3
      // vt = [2 * (2e-3)^2 * 6540 * 9.8] / [9 * 1.4] = [2 * 4e-6 * 64092] / 12.6 = 0.512736 / 12.6 = 0.04069 m/s
      const vt = calculateTerminalVelocity(2e-3, 7800, 1260, 1.4, 9.8);
      expect(vt).toBeCloseTo(0.04069, 4);
    });

    it('derives viscosity from terminal velocity with mutual consistency', () => {
      const r = 2e-3;
      const rho = 7800;
      const sigma = 1260;
      const etaOriginal = 1.4;
      const vt = calculateTerminalVelocity(r, rho, sigma, etaOriginal, 9.8);

      const etaCalculated = calculateViscosityFromTerminalVelocity(r, rho, sigma, vt, 9.8);
      expect(etaCalculated).toBeCloseTo(etaOriginal, 5);
    });
  });

  describe('Competency 10.3: Surface Tension & Capillary Action', () => {
    it('calculates surface tension force along a contact line', () => {
      // gamma = 0.072 N/m, L = 0.1 m -> F = 0.0072 N
      const f = calculateSurfaceTensionForce(0.072, 0.1);
      expect(f).toBeCloseTo(0.0072, 5);
    });

    it('calculates excess pressure inside a spherical water drop', () => {
      // gamma = 0.072 N/m, R = 1e-3 m -> dP = 2 * 0.072 / 1e-3 = 144 Pa
      const dp = calculateExcessPressureDrop(0.072, 1e-3);
      expect(dp).toBeCloseTo(144.0, 2);
    });

    it('calculates excess pressure inside a hollow soap bubble (double surface)', () => {
      // gamma = 0.030 N/m, R = 2e-2 m -> dP = 4 * 0.030 / 0.02 = 6.0 Pa
      const dp = calculateExcessPressureBubble(0.030, 2e-2);
      expect(dp).toBeCloseTo(6.0, 3);
    });

    it('calculates capillary rise in a narrow glass tube (water, contact angle 0)', () => {
      // gamma = 0.072 N/m, theta = 0, rho = 1000 kg/m^3, r = 0.5e-3 m, g = 9.8
      // h = (2 * 0.072 * 1) / (1000 * 9.8 * 0.5e-3) = 0.144 / 4.9 = 0.029387 m (~2.94 cm)
      const h = calculateCapillaryRise(0.072, 0, 1000, 0.5e-3, 9.8);
      expect(h).toBeCloseTo(0.029387, 5);
    });

    it('derives surface tension from capillary height with mutual consistency', () => {
      const gammaTrue = 0.0728;
      const r = 0.4e-3;
      const rho = 1000;
      const h = calculateCapillaryRise(gammaTrue, 0, rho, r, 9.8);

      const gammaDerived = calculateSurfaceTensionFromCapillaryRise(h, r, rho, 0, 9.8);
      expect(gammaDerived).toBeCloseTo(gammaTrue, 5);
    });
  });
});

import { describe, it, expect } from 'vitest';
import {
  SPEED_OF_LIGHT,
  ELEMENTARY_CHARGE,
  calculatePhotonEnergy,
  calculatePhotonFrequency,
  calculatePhotonWavelength,
  calculatePhotoelectricMaxKE,
  calculateStoppingPotential,
  calculateThresholdFrequency,
  calculateThresholdWavelength,
  calculateDeBroglieWavelength,
  calculateElectronDeBroglieWavelength,
  calculateXRayMinWavelength,
  calculateBohrEnergyLevel,
  calculateHydrogenTransitionWavelength,
  calculateNuclearRadius,
  calculateNuclearDensity,
  calculateMassDefect,
  calculateBindingEnergyMeV,
  calculateBindingEnergyPerNucleonMeV,
  calculateRadioactiveDecayConstant,
  calculateRemainingFraction,
  calculateRemainingNuclei,
  calculateActivityBq,
} from '../physics/calculations';

describe('Unit 11: Matter and Radiation - Physics Calculations Engine', () => {
  describe('Photon Properties and Photoelectric Effect (Competency 11.1)', () => {
    it('calculates photon energy and frequency accurately', () => {
      // Yellow sodium line: 589 nm
      const wavelength = 589e-9;
      const freq = calculatePhotonFrequency(wavelength);
      expect(freq).toBeCloseTo(5.09e14, -12);

      const energyJ = calculatePhotonEnergy(freq);
      const energyEv = energyJ / ELEMENTARY_CHARGE;
      expect(energyEv).toBeCloseTo(2.106, 2);

      const reconstructedWavelength = calculatePhotonWavelength(freq);
      expect(reconstructedWavelength).toBeCloseTo(589e-9, 11);
    });

    it('calculates maximum KE and stopping potential for Cesium', () => {
      // Cesium work function Phi = 2.14 eV
      const phiJ = 2.14 * ELEMENTARY_CHARGE;
      // Incident violet light: lambda = 400 nm -> f = 7.5e14 Hz
      const freq = SPEED_OF_LIGHT / 400e-9;
      const maxKE = calculatePhotoelectricMaxKE(freq, phiJ);
      const maxKEEv = maxKE / ELEMENTARY_CHARGE;

      // Photon energy E = 3.10 eV -> maxKE = 3.10 - 2.14 = 0.96 eV
      expect(maxKEEv).toBeCloseTo(0.96, 1);

      const vs = calculateStoppingPotential(maxKE);
      expect(vs).toBeCloseTo(0.96, 1);
    });

    it('returns zero kinetic energy and stopping potential below threshold', () => {
      // Cesium with infrared light: lambda = 700 nm -> E = 1.77 eV < 2.14 eV
      const phiJ = 2.14 * ELEMENTARY_CHARGE;
      const freq = SPEED_OF_LIGHT / 700e-9;
      const maxKE = calculatePhotoelectricMaxKE(freq, phiJ);
      expect(maxKE).toBe(0);

      const vs = calculateStoppingPotential(maxKE);
      expect(vs).toBe(0);
    });

    it('calculates threshold frequency and threshold wavelength', () => {
      // Zinc work function Phi = 4.31 eV
      const phiJ = 4.31 * ELEMENTARY_CHARGE;
      const f0 = calculateThresholdFrequency(phiJ);
      const lambda0 = calculateThresholdWavelength(phiJ);

      // f0 = 4.31 * 1.6e-19 / 6.626e-34 approx 1.04e15 Hz (UV)
      expect(f0).toBeCloseTo(1.04e15, -13);
      // lambda0 approx 288 nm
      expect(lambda0 * 1e9).toBeCloseTo(288, 0);
    });
  });

  describe('de Broglie Waves and X-Rays (Competency 11.2)', () => {
    it('calculates de Broglie wavelength for accelerated electrons', () => {
      // Electron accelerated through V = 100 V: lambda approx 0.123 nm = 1.23e-10 m
      const lambda = calculateElectronDeBroglieWavelength(100);
      expect(lambda * 1e9).toBeCloseTo(0.123, 2);
    });

    it('calculates de Broglie wavelength from momentum', () => {
      const p = 6.626e-24; // kg m/s
      const lambda = calculateDeBroglieWavelength(p);
      expect(lambda).toBeCloseTo(1e-10, 12);
    });

    it('calculates Duane-Hunt minimum cutoff wavelength for X-rays', () => {
      // Coolidge tube at 50 kV: lambda_min approx 0.0248 nm
      const lambdaMin = calculateXRayMinWavelength(50000);
      expect(lambdaMin * 1e9).toBeCloseTo(0.0248, 3);
    });
  });

  describe('Bohr Hydrogen Model and Spectral Series (Competency 11.3)', () => {
    it('calculates quantized energy levels of hydrogen', () => {
      expect(calculateBohrEnergyLevel(1)).toBeCloseTo(-13.61, 1);
      expect(calculateBohrEnergyLevel(2)).toBeCloseTo(-3.40, 1);
      expect(calculateBohrEnergyLevel(3)).toBeCloseTo(-1.51, 1);
      expect(calculateBohrEnergyLevel(4)).toBeCloseTo(-0.85, 1);
    });

    it('calculates Balmer H-alpha red line transition wavelength', () => {
      // nUpper = 3 to nLower = 2: Balmer H-alpha (656.3 nm red line)
      const lambda = calculateHydrogenTransitionWavelength(2, 3);
      expect(lambda * 1e9).toBeCloseTo(656.3, 0);
    });

    it('calculates Lyman-alpha UV transition wavelength', () => {
      // nUpper = 2 to nLower = 1: Lyman-alpha (121.5 nm UV line)
      const lambda = calculateHydrogenTransitionWavelength(1, 2);
      expect(lambda * 1e9).toBeCloseTo(121.5, 0);
    });
  });

  describe('Nuclear Structure, Binding Energy and Radioactivity (Competency 11.4)', () => {
    it('calculates nuclear radius and demonstrates constant nuclear density', () => {
      // Fe-56 (A = 56)
      const radiusFe = calculateNuclearRadius(56);
      expect(radiusFe).toBeCloseTo(4.6e-15, 16);

      // Nuclear density should be ~ 2.3e17 kg/m^3 for both Fe-56 and U-238
      const densityFe = calculateNuclearDensity(56);
      const densityU = calculateNuclearDensity(238);
      expect(densityFe).toBeCloseTo(2.3e17, -16);
      expect(densityU).toBeCloseTo(2.3e17, -16);
    });

    it('calculates mass defect and binding energy for Helium-4', () => {
      // He-4 nucleus: Z = 2, A = 4, actual mass = 4.0015 u
      const defectU = calculateMassDefect(2, 4, 4.0015);
      expect(defectU).toBeCloseTo(0.03038, 4);

      const beMeV = calculateBindingEnergyMeV(defectU);
      expect(beMeV).toBeCloseTo(28.3, 1);

      const bePerNucleon = calculateBindingEnergyPerNucleonMeV(defectU, 4);
      expect(bePerNucleon).toBeCloseTo(7.07, 1);
    });

    it('calculates radioactive decay law and remaining fraction', () => {
      const halfLifeS = 3600; // 1 hour
      const lambda = calculateRadioactiveDecayConstant(halfLifeS);
      expect(lambda).toBeCloseTo(1.925e-4, 6);

      // After 1 half-life (3600 s), remaining fraction is 0.5
      const frac1 = calculateRemainingFraction(lambda, 3600);
      expect(frac1).toBeCloseTo(0.5, 3);

      // After 2 half-lives (7200 s), remaining fraction is 0.25
      const frac2 = calculateRemainingFraction(lambda, 7200);
      expect(frac2).toBeCloseTo(0.25, 3);

      // Starting with 1,000,000 nuclei
      const remaining = calculateRemainingNuclei(1000000, lambda, 3600);
      expect(remaining).toBeCloseTo(500000, 0);

      // Activity A = lambda * N
      const activity = calculateActivityBq(lambda, 1000000);
      expect(activity).toBeCloseTo(192.5, 0);
    });
  });

  describe('Defensive Validation and Error Handling', () => {
    it('throws errors on negative or invalid parameters', () => {
      expect(() => calculatePhotonEnergy(-10)).toThrow();
      expect(() => calculatePhotonFrequency(0)).toThrow();
      expect(() => calculatePhotonWavelength(-5)).toThrow();
      expect(() => calculateThresholdFrequency(-100)).toThrow();
      expect(() => calculateThresholdWavelength(0)).toThrow();
      expect(() => calculateDeBroglieWavelength(0)).toThrow();
      expect(() => calculateElectronDeBroglieWavelength(-10)).toThrow();
      expect(() => calculateXRayMinWavelength(-50)).toThrow();
      expect(() => calculateBohrEnergyLevel(0)).toThrow();
      expect(() => calculateHydrogenTransitionWavelength(2, 1)).toThrow();
      expect(() => calculateNuclearRadius(0)).toThrow();
      expect(() => calculateMassDefect(5, 3, 4.0)).toThrow();
      expect(() => calculateRadioactiveDecayConstant(0)).toThrow();
    });
  });
});

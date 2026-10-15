import { describe, it, expect } from 'vitest';
import {
  calculateTemperatureFromThermometricProperty,
  celsiusToKelvin,
  kelvinToCelsius,
  calculateLinearExpansion,
  calculateRealLiquidExpansivity,
  calculateSpecificHeatCapacityMixture,
  calculateLatentHeatOfFusion,
  calculateLatentHeatOfVaporization,
  calculateNewtonCoolingRate,
  verifyBoylesLaw,
  calculateIdealGasPressure,
  calculateRootMeanSquareSpeed,
  calculateTranslationalKEPerMolecule,
  calculateThermalConductivitySearle,
  calculateNetThermalRadiation,
  calculateWienPeakWavelength,
  calculateFirstLawWork,
} from '../physics/calculations';

describe('Unit 4 Thermal Physics - Mathematical Calculations Engine', () => {
  describe('Thermometry & Temperature Scales (Competency 4.1)', () => {
    it('calculates temperature accurately from linear thermometric properties', () => {
      // Platinum resistance thermometer: R0 = 100.0 ohm, R100 = 138.5 ohm, Rt = 119.25 ohm => 50.0 °C
      const temp = calculateTemperatureFromThermometricProperty(119.25, 100.0, 138.5);
      expect(temp).toBeCloseTo(50.0, 1);
    });

    it('converts between Celsius and Kelvin accurately', () => {
      expect(celsiusToKelvin(25.0)).toBe(298.15);
      expect(kelvinToCelsius(373.15)).toBe(100.0);
    });
  });

  describe('Thermal Expansion (Competency 4.2)', () => {
    it('calculates linear expansion of a steel rail', () => {
      // 20 m steel rail, alpha = 1.2e-5 /K, deltaT = 30 K => deltaL = 20 * 1.2e-5 * 30 = 0.0072 m
      const res = calculateLinearExpansion(20.0, 1.2e-5, 30.0);
      expect(res.deltaLengthM).toBeCloseTo(0.0072, 4);
      expect(res.finalLengthM).toBe(20.0072);
    });

    it('calculates real liquid expansivity by correcting for vessel expansion', () => {
      // gamma_apparent = 15e-5 /K, alpha_glass = 1.0e-5 /K => gamma_real = 15e-5 + 3*(1.0e-5) = 18e-5 /K
      const gammaReal = calculateRealLiquidExpansivity(15e-5, 1.0e-5);
      expect(gammaReal).toBeCloseTo(18e-5, 5);
    });
  });

  describe('Calorimetry & Latent Heat (Competency 4.3)', () => {
    it('determines specific heat capacity of copper by method of mixtures', () => {
      // Solid: 0.150 kg copper at 100 °C
      // Water: 0.200 kg at 20 °C
      // Calorimeter: 0.050 kg at 20 °C (c_cal = 385 J/kg K)
      // Final temp: 25.0 °C
      const c = calculateSpecificHeatCapacityMixture({
        massSolidKg: 0.15,
        initialTempSolidC: 100.0,
        massWaterKg: 0.2,
        massCalorimeterKg: 0.05,
        initialTempWaterCalC: 20.0,
        finalTempMixtureC: 25.0,
      });
      // Heat gained = (0.2 * 4186 + 0.05 * 385) * 5 = (837.2 + 19.25) * 5 = 4282.25 J
      // c_solid = 4282.25 / (0.15 * 75) = 4282.25 / 11.25 = 380.6 J/(kg K)
      expect(c).toBeCloseTo(380.6, 0.5);
    });

    it('calculates specific latent heat of fusion of ice', () => {
      // 0.025 kg ice added to 0.200 kg water + 0.050 kg calorimeter initially at 25 °C, drops to 13.5 °C
      const lf = calculateLatentHeatOfFusion({
        massIceKg: 0.025,
        massWaterKg: 0.2,
        massCalorimeterKg: 0.05,
        initialTempWaterCalC: 25.0,
        finalTempMixtureC: 13.5,
      });
      // Expected around 3.34e5 J/kg
      expect(lf).toBeGreaterThan(3.2e5);
      expect(lf).toBeLessThan(3.5e5);
    });

    it('calculates specific latent heat of vaporization of steam', () => {
      // 0.005 kg steam condensed into 0.200 kg water + 0.050 kg calorimeter initially at 18 °C, rises to 32.5 °C
      const lv = calculateLatentHeatOfVaporization({
        massSteamKg: 0.005,
        massWaterKg: 0.2,
        massCalorimeterKg: 0.05,
        initialTempWaterCalC: 18.0,
        finalTempMixtureC: 32.5,
      });
      // Expected around 2.25e6 J/kg
      expect(lv).toBeGreaterThan(2.1e6);
      expect(lv).toBeLessThan(2.4e6);
    });

    it('calculates cooling rate under Newton’s law of cooling', () => {
      const rate = calculateNewtonCoolingRate(0.002, 60.0, 25.0);
      expect(rate).toBeCloseTo(0.07, 3);
    });
  });

  describe('Gas Laws & Kinetic Theory (Competency 4.4)', () => {
    it('verifies Boyle’s law product constancy', () => {
      const prod = verifyBoylesLaw(101325, 0.024);
      expect(prod).toBeCloseTo(2431.8, 1);
    });

    it('calculates ideal gas pressure', () => {
      // 1 mol at 300 K in 0.025 m^3: P = (1 * 8.314 * 300) / 0.025 = 99768 Pa
      const p = calculateIdealGasPressure(1.0, 0.025, 300.0);
      expect(p).toBeCloseTo(99768.0, 1);
    });

    it('calculates root-mean-square speed of nitrogen molecules at room temperature', () => {
      // M = 0.028 kg/mol, T = 300 K: c_rms = sqrt(3 * 8.314 * 300 / 0.028) = sqrt(267235.7) = 516.9 m/s
      const cRms = calculateRootMeanSquareSpeed(300.0, 0.028);
      expect(cRms).toBeCloseTo(516.9, 0.5);
    });

    it('calculates translational kinetic energy per molecule', () => {
      // E_k = 1.5 * 1.38e-23 * 300 = 6.21e-21 J
      const ke = calculateTranslationalKEPerMolecule(300.0);
      expect(ke).toBeCloseTo(6.213e-21, 23);
    });
  });

  describe('Heat Transfer & Thermodynamics (Competency 4.5)', () => {
    it('calculates thermal conductivity using Searle’s bar data', () => {
      // Copper bar: A = 0.0016 m^2, d = 0.10 m, temp1 = 80 °C, temp2 = 60 °C (grad = 200 K/m)
      // Water: flow rate = 0.002 kg/s, temp rise = 30 °C - 18 °C = 12 K
      // Heat rate = 0.002 * 4186 * 12 = 100.464 W
      // k = 100.464 / (0.0016 * 200) = 100.464 / 0.32 = 314.0 W/(m K)
      const k = calculateThermalConductivitySearle({
        barAreaM2: 0.0016,
        thermometerDistanceM: 0.1,
        temp1C: 80.0,
        temp2C: 60.0,
        waterFlowRateKgS: 0.002,
        waterInletTempC: 18.0,
        waterOutletTempC: 30.0,
      });
      expect(k).toBeCloseTo(313.9, 1);
    });

    it('calculates net thermal radiation under Stefan-Boltzmann law', () => {
      // Area = 1.5 m^2, e = 0.90, T = 310 K, T0 = 293 K
      const p = calculateNetThermalRadiation(0.9, 1.5, 310.0, 293.0);
      expect(p).toBeGreaterThan(100);
      expect(p).toBeLessThan(200);
    });

    it('calculates peak emission wavelength under Wien’s displacement law', () => {
      // Sun surface T = 5800 K: lambda_max = 2.898e-3 / 5800 = 4.996e-7 m = 500 nm
      const lambdaNm = calculateWienPeakWavelength(5800.0);
      expect(lambdaNm).toBeCloseTo(499.6, 1);
    });

    it('applies First Law of Thermodynamics to calculate work done', () => {
      // Delta_Q = 500 J, Delta_U = 200 J => Delta_W = 300 J
      const w = calculateFirstLawWork(500.0, 200.0);
      expect(w).toBe(300.0);
    });
  });
});

import { describe, it, expect } from 'vitest';
import {
  calculateSHMState,
  calculateSimplePendulumPeriod,
  calculatePendulumGravityRegression,
  calculateSpringMassPeriod,
  calculateHelicalSpringRegression,
  calculateSpeedOfSoundInGas,
  calculateSoundIntensityLevel,
  calculateDopplerFrequency,
  calculateStringFundamentalFrequency,
  verifySonometerLaws,
  calculateResonanceTubeSpeed,
  calculateResonanceLinearRegression,
  calculateRefractionAngle,
  calculatePrismRefractiveIndex,
  calculateLensFocalLengthDisplacement,
  calculateThinLensNoParallax,
  calculatePrismCriticalAngleRefractiveIndex,
  calculateConcaveLensMirrorNoParallax,
  calculateConcaveLensMirrorRegression,
  calculateYoungsFringeWidth,
  calculateDiffractionGratingWavelength,
} from '../physics/calculations';

describe('Unit 3: Oscillations and Waves - Pure Physics Engine', () => {
  describe('Simple Harmonic Motion (SHM)', () => {
    it('calculates displacement, velocity, acceleration, and verifies energy conservation', () => {
      // A = 0.2 m, omega = 10 rad/s, m = 2 kg
      // At t = 0: x = 0, v = 2.0 m/s, a = 0
      const state0 = calculateSHMState({
        amplitudeM: 0.2,
        angularFreqRadS: 10,
        timeS: 0,
        massKg: 2,
      });

      expect(state0.x).toBe(0);
      expect(state0.v).toBe(2.0);
      expect(state0.a).toBe(0);
      expect(state0.potentialEnergyJ).toBe(0);
      expect(state0.kineticEnergyJ).toBe(4.0);
      expect(state0.totalEnergyJ).toBe(4.0);

      // At quarter period: t = pi / (2 * 10) = pi / 20 s
      const tQuarter = Math.PI / 20;
      const stateQuarter = calculateSHMState({
        amplitudeM: 0.2,
        angularFreqRadS: 10,
        timeS: tQuarter,
        massKg: 2,
      });

      expect(stateQuarter.x).toBeCloseTo(0.2, 3);
      expect(stateQuarter.v).toBeCloseTo(0, 3);
      expect(stateQuarter.a).toBeCloseTo(-20, 2);
      expect(stateQuarter.kineticEnergyJ).toBeCloseTo(0, 3);
      expect(stateQuarter.potentialEnergyJ).toBeCloseTo(4.0, 3);
      expect(stateQuarter.totalEnergyJ).toBeCloseTo(4.0, 3);
    });

    it('calculates simple pendulum period T = 2*pi*sqrt(L/g)', () => {
      // L = 0.993 m, g = 9.8 m/s^2 -> T ≈ 2.00 s (seconds pendulum)
      const t = calculateSimplePendulumPeriod(0.993, 9.8);
      expect(t).toBeCloseTo(2.0, 1);
    });

    it('calculates spring-mass period T = 2*pi*sqrt(m/k)', () => {
      // m = 1 kg, k = 100 N/m -> T = 2*pi / 10 ≈ 0.628 s
      const t = calculateSpringMassPeriod(1, 100);
      expect(t).toBeCloseTo(0.628, 3);
    });
  });

  describe('Acoustics & Doppler Effect', () => {
    it('calculates speed of sound with temperature', () => {
      // At 0 °C: v = 331.3 m/s
      const v0 = calculateSpeedOfSoundInGas(0);
      expect(v0).toBe(331.3);

      // At 20 °C: v ≈ 343.2 m/s
      const v20 = calculateSpeedOfSoundInGas(20);
      expect(v20).toBeCloseTo(343.2, 1);
    });

    it('calculates sound intensity level in decibels', () => {
      // I = 1e-4 W/m^2 -> beta = 10 * log10(1e8) = 80 dB
      const beta = calculateSoundIntensityLevel(1e-4);
      expect(beta).toBe(80.0);

      // Threshold: I = 1e-12 W/m^2 -> 0 dB
      const beta0 = calculateSoundIntensityLevel(1e-12);
      expect(beta0).toBe(0.0);
    });

    it('calculates Doppler shift when source approaches stationary observer', () => {
      // f = 500 Hz, v = 340 m/s, v_s = 34 m/s approaching
      // f' = 500 * (340 / (340 - 34)) = 500 * (340 / 306) ≈ 555.56 Hz
      const fObs = calculateDopplerFrequency({
        sourceFrequencyHz: 500,
        soundSpeedMs: 340,
        observerSpeedMs: 0,
        sourceSpeedMs: 34,
        observerMovingTowardsSource: false,
        sourceMovingTowardsObserver: true,
      });

      expect(fObs).toBeCloseTo(555.56, 1);
    });
  });

  describe('Strings & Resonance Practicals', () => {
    it('calculates stretched string fundamental frequency', () => {
      // L = 0.5 m, T = 100 N, mu = 0.01 kg/m
      // v = sqrt(100 / 0.01) = 100 m/s -> f = 100 / (2 * 0.5) = 100 Hz
      const f = calculateStringFundamentalFrequency(0.5, 100, 0.01);
      expect(f).toBe(100.0);
    });

    it('verifies sonometer law invariance', () => {
      const res = verifySonometerLaws(256, 0.35, 49);
      expect(res.fLProduct).toBeCloseTo(89.6, 1);
      expect(res.fOverSqrtT).toBeCloseTo(36.57, 1);
    });

    it('calculates speed of sound and end correction from resonance tube readings', () => {
      // f = 512 Hz, l1 = 0.155 m, l2 = 0.490 m
      // lambda = 2 * (0.490 - 0.155) = 2 * 0.335 = 0.670 m
      // v = 512 * 0.670 = 343.04 m/s
      // e = (0.490 - 3 * 0.155) / 2 = (0.490 - 0.465) / 2 = 0.025 / 2 = 0.0125 m
      const res = calculateResonanceTubeSpeed(512, 0.155, 0.490);
      expect(res.wavelengthM).toBe(0.67);
      expect(res.speedOfSoundMs).toBe(343.04);
      expect(res.endCorrectionM).toBe(0.0125);
    });
  });

  describe('Geometrical & Physical Optics', () => {
    it('calculates refraction angle and detects total internal reflection', () => {
      // Glass (1.5) to air (1.0), critical angle = arcsin(1/1.5) ≈ 41.81°
      const resUnder = calculateRefractionAngle(1.5, 1.0, 30);
      expect(resUnder.isTotalInternalReflection).toBe(false);
      expect(resUnder.angle2Deg).toBeCloseTo(48.59, 1);
      expect(resUnder.criticalAngleDeg).toBeCloseTo(41.81, 1);

      const resTIR = calculateRefractionAngle(1.5, 1.0, 50);
      expect(resTIR.isTotalInternalReflection).toBe(true);
    });

    it('calculates prism refractive index at minimum deviation', () => {
      // Equilateral prism A = 60°, Dm = 38°
      // n = sin((60 + 38)/2) / sin(30) = sin(49) / 0.5 ≈ 0.7547 / 0.5 ≈ 1.509
      const n = calculatePrismRefractiveIndex(60, 38);
      expect(n).toBeCloseTo(1.509, 2);
    });

    it('calculates lens focal length via displacement method', () => {
      // Screen distance D = 1.0 m, lens displacement d = 0.4 m
      // f = (D^2 - d^2) / (4D) = (1.0 - 0.16) / 4 = 0.84 / 4 = 0.21 m
      const f = calculateLensFocalLengthDisplacement(1.0, 0.4);
      expect(f).toBe(0.21);
    });

    it('calculates Young double slit fringe width', () => {
      // lambda = 600 nm = 6e-7 m, D = 1.5 m, d = 0.5 mm = 5e-4 m
      // beta = (6e-7 * 1.5) / 5e-4 = 9e-7 / 5e-4 = 1.8e-3 m = 1.8 mm
      const beta = calculateYoungsFringeWidth(6e-7, 1.5, 5e-4);
      expect(beta).toBe(0.0018);
    });

    it('calculates wavelength using transmission diffraction grating', () => {
      // 500,000 lines/m (d = 2e-6 m), order n = 1, theta = 17.46°
      // lambda = (2e-6 * sin(17.46°)) / 1 ≈ 2e-6 * 0.300 = 6.00e-7 m (600 nm)
      const lambda = calculateDiffractionGratingWavelength(500000, 1, 17.4576);
      expect(lambda).toBeCloseTo(6.0e-7, 8);
    });

    it('calculates thin lens focal length via no-parallax method (Exp 21.1)', () => {
      // u = 0.30 m, v = 0.30 m -> f = (0.3 * 0.3) / (0.3 + 0.3) = 0.15 m
      const f = calculateThinLensNoParallax(0.30, 0.30);
      expect(f).toBe(0.15);
    });

    it('calculates acceleration due to gravity via simple pendulum T^2 vs L regression (Exp 10)', () => {
      // T^2 = (4 * pi^2 / g) * L where g = 9.81 m/s^2 -> slope ≈ 4.024
      const points = [
        { lengthM: 0.50, periodSquaredS2: 2.012 },
        { lengthM: 0.60, periodSquaredS2: 2.414 },
        { lengthM: 0.70, periodSquaredS2: 2.817 },
        { lengthM: 0.80, periodSquaredS2: 3.219 },
      ];
      const res = calculatePendulumGravityRegression(points);
      expect(res.gravityMs2).toBeCloseTo(9.81, 1);
      expect(res.rSquared).toBeGreaterThan(0.99);
    });

    it('calculates spring constant and effective mass via helical spring regression (Exp 11)', () => {
      // k = 20 N/m, me = 0.015 kg
      // T^2 = (4 * pi^2 / 20) * m + (4 * pi^2 * 0.015 / 20) = 1.9739 * m + 0.0296
      const points = [
        { massKg: 0.05, periodSquaredS2: 1.9739 * 0.05 + 0.0296 },
        { massKg: 0.10, periodSquaredS2: 1.9739 * 0.10 + 0.0296 },
        { massKg: 0.15, periodSquaredS2: 1.9739 * 0.15 + 0.0296 },
        { massKg: 0.20, periodSquaredS2: 1.9739 * 0.20 + 0.0296 },
      ];
      const res = calculateHelicalSpringRegression(points);
      expect(res.springConstantNm).toBeCloseTo(20.0, 1);
      expect(res.effectiveMassKg).toBeCloseTo(0.015, 2);
    });

    it('calculates sound velocity and end correction via resonance tube linear regression (Exp 15)', () => {
      // v = 340 m/s, e = 0.009 m
      // l = (v/4)(1/f) - e = 85 * (1/f) - 0.009
      const points = [
        { frequencyHz: 512, lengthM: 85 * (1 / 512) - 0.009 },
        { frequencyHz: 480, lengthM: 85 * (1 / 480) - 0.009 },
        { frequencyHz: 384, lengthM: 85 * (1 / 384) - 0.009 },
        { frequencyHz: 320, lengthM: 85 * (1 / 320) - 0.009 },
        { frequencyHz: 256, lengthM: 85 * (1 / 256) - 0.009 },
      ];
      const res = calculateResonanceLinearRegression(points);
      expect(res.speedOfSoundMs).toBeCloseTo(340.0, 1);
      expect(res.endCorrectionM).toBeCloseTo(0.009, 3);
    });

    it('calculates prism refractive index via critical angle method (Exp 18)', () => {
      // Construction measures angle between incident and reflected rays: 2c = 82.54°
      // Halving step: c = 82.54° / 2 = 41.27°
      // n = 1 / sin(41.27°) = 1 / 0.6596 ≈ 1.516
      const res = calculatePrismCriticalAngleRefractiveIndex(82.54);
      expect(res.criticalAngleDeg).toBe(41.27);
      expect(res.refractiveIndex).toBeCloseTo(1.516, 3);
    });

    it('calculates concave lens focal length via plane mirror strip no-parallax (Exp 21.2)', () => {
      // Cartesian convention: u = -20.0 cm, v = -8.57 cm
      // 1/f = 1/v - 1/u = -1/8.57 - (-1/20) = -0.116686 + 0.050 = -0.066686 cm^-1
      // f = 1 / -0.066686 ≈ -15.00 cm
      const res = calculateConcaveLensMirrorNoParallax(20.0, 8.57);
      expect(res.signedUCm).toBe(-20.0);
      expect(res.signedVCm).toBe(-8.57);
      expect(res.focalLengthCm).toBeCloseTo(-15.0, 1);
    });

    it('determines concave lens negative focal length from 1/v vs 1/u regression (Exp 21.2)', () => {
      // f = -15.0 cm => 1/f = -1/15 ≈ -0.06667
      // 1/v = 1/u + 1/f => y = 1*x - 0.06667
      const trials = [
        { uCm: 20.0, vCm: 1 / (1 / 20.0 + 1 / 15.0) }, // v = 8.571 cm
        { uCm: 25.0, vCm: 1 / (1 / 25.0 + 1 / 15.0) }, // v = 9.375 cm
        { uCm: 30.0, vCm: 1 / (1 / 30.0 + 1 / 15.0) }, // v = 10.000 cm
        { uCm: 40.0, vCm: 1 / (1 / 40.0 + 1 / 15.0) }, // v = 10.909 cm
        { uCm: 50.0, vCm: 1 / (1 / 50.0 + 1 / 15.0) }, // v = 11.538 cm
      ];
      const reg = calculateConcaveLensMirrorRegression(trials);
      expect(reg.slope).toBeCloseTo(1.000, 3);
      expect(reg.intercept).toBeCloseTo(-0.06667, 4);
      expect(reg.focalLengthCm).toBeCloseTo(-15.0, 1);
      expect(reg.rSquared).toBeGreaterThan(0.999);
    });
  });
});

import { describe, it, expect } from 'vitest';
import {
  calculateVernierReading,
  applyZeroCorrection,
  calculateMicrometerReading,
  calculateSpherometerCurvature,
  calculateTravellingMicroscopeDiameters,
  convertDensity,
  propagateDensityUncertainty,
  resolveVector,
  addVectors,
} from '../physics/calculations';

describe('Unit 1 Measurement - Instrument Physics & Metrology', () => {
  describe('Vernier Calipers', () => {
    it('calculates observed reading with least count 0.1 mm', () => {
      // MSR = 24 mm, coincident vernier division = 6
      const reading = calculateVernierReading(24, 6, 0.1);
      expect(reading).toBe(24.6);
    });

    it('calculates observed reading with least count 0.02 mm', () => {
      // MSR = 15 mm, coincident division = 24 -> 15 + 24 * 0.02 = 15.48 mm
      const reading = calculateVernierReading(15, 24, 0.02);
      expect(reading).toBe(15.48);
    });

    it('corrects for positive zero error by subtracting the error', () => {
      // Positive zero error (+0.2 mm): Corrected = 24.6 - (+0.2) = 24.4 mm
      const observed = 24.6;
      const zeroError = 0.2;
      const corrected = applyZeroCorrection(observed, zeroError);
      expect(corrected).toBe(24.4);
    });

    it('corrects for negative zero error by effectively adding the magnitude', () => {
      // Negative zero error (-0.3 mm): Corrected = 24.6 - (-0.3) = 24.9 mm
      const observed = 24.6;
      const zeroError = -0.3;
      const corrected = applyZeroCorrection(observed, zeroError);
      expect(corrected).toBe(24.9);
    });

    it('preserves reading when zero error is exactly 0', () => {
      const observed = 32.1;
      const corrected = applyZeroCorrection(observed, 0);
      expect(corrected).toBe(32.1);
    });
  });

  describe('Micrometer Screw Gauge', () => {
    it('calculates reading from sleeve and thimble divisions', () => {
      // Sleeve reading = 4.5 mm (4 main mm + 0.5 mm half-mm line visible)
      // Thimble division = 32, LC = 0.01 mm -> 4.5 + 0.32 = 4.82 mm
      const reading = calculateMicrometerReading(4.5, 32, 0.01);
      expect(reading).toBe(4.82);
    });

    it('corrects positive zero error (thimble zero below datum line)', () => {
      // Observed = 4.82 mm, Zero error = +0.03 mm -> 4.79 mm
      const corrected = applyZeroCorrection(4.82, 0.03);
      expect(corrected).toBe(4.79);
    });

    it('corrects negative zero error (thimble zero above datum line)', () => {
      // Observed = 4.82 mm, Zero error = -0.04 mm -> 4.86 mm
      const corrected = applyZeroCorrection(4.82, -0.04);
      expect(corrected).toBe(4.86);
    });
  });

  describe('Spherometer Curvature Calculations', () => {
    it('calculates radius of curvature R = a^2 / (6h) + h / 2', () => {
      // a = 30.0 mm, h = 1.0 mm -> R = 900 / 6 + 0.5 = 150 + 0.5 = 150.5 mm
      const result = calculateSpherometerCurvature(30.0, 1.0);
      expect(result.isPlane).toBe(false);
      expect(result.radiusMm).toBe(150.5);
    });

    it('calculates radius of curvature for larger leg spacing', () => {
      // a = 40.0 mm, h = 1.0 mm -> R = 1600 / 6 + 0.5 = 266.67 + 0.5 = 267.17 mm
      const result = calculateSpherometerCurvature(40.0, 1.0);
      expect(result.isPlane).toBe(false);
      expect(result.radiusMm).toBe(267.17);
    });

    it('safely handles plane surface with h = 0 without division by zero', () => {
      const result = calculateSpherometerCurvature(40.0, 0.0);
      expect(result.isPlane).toBe(true);
      expect(result.radiusMm).toBeNull();
    });

    it('safely handles microscopic sagitta near zero threshold', () => {
      const result = calculateSpherometerCurvature(40.0, 0.0005);
      expect(result.isPlane).toBe(true);
      expect(result.radiusMm).toBeNull();
    });
  });

  describe('Travelling Microscope Non-contact Measurements', () => {
    it('calculates internal diameter, external diameter, and wall thickness correctly', () => {
      // Traversing along diameter:
      // x1 = 10.00 mm (outer left boundary)
      // x2 = 12.00 mm (inner left boundary)
      // x3 = 18.00 mm (inner right boundary)
      // x4 = 20.00 mm (outer right boundary)
      const res = calculateTravellingMicroscopeDiameters(10.0, 12.0, 18.0, 20.0);
      expect(res.internalDiameter).toBe(6.0); // |12 - 18|
      expect(res.externalDiameter).toBe(10.0); // |10 - 20|
      expect(res.wallThickness).toBe(2.0); // (10 - 6) / 2
    });
  });

  describe('Density & Uncertainty Propagation', () => {
    it('converts density between CGS (g cm^-3) and SI (kg m^-3) accurately', () => {
      // 1 g cm^-3 = 1000 kg m^-3
      expect(convertDensity(1, 'g/cm^3', 'kg/m^3')).toBe(1000);
      expect(convertDensity(8.9, 'g/cm^3', 'kg/m^3')).toBe(8900);
      expect(convertDensity(7800, 'kg/m^3', 'g/cm^3')).toBe(7.8);
      expect(convertDensity(13600, 'kg/m^3', 'g/cm^3')).toBe(13.6);
    });

    it('correctly propagates fractional and absolute uncertainties', () => {
      // Mass m = 100 g, delta m = 0.1 g -> delta m / m = 0.001 (0.1%)
      // Volume V = 20 cm^3, delta V = 0.2 cm^3 -> delta V / V = 0.01 (1.0%)
      // Density rho = 5 g cm^-3
      // Fractional uncertainty = 0.001 + 0.01 = 0.011 (1.1%)
      // Absolute uncertainty = 5 * 0.011 = 0.055 g cm^-3
      const prop = propagateDensityUncertainty(100, 0.1, 20, 0.2);
      expect(prop.density).toBe(5);
      expect(prop.fractionalUncertainty).toBe(0.011);
      expect(prop.percentageUncertainty).toBe(1.1);
      expect(prop.absoluteUncertainty).toBe(0.055);
    });

    it('guards against division by zero if volume or mass is zero', () => {
      const prop = propagateDensityUncertainty(0, 0, 0, 0);
      expect(prop.density).toBe(0);
      expect(prop.fractionalUncertainty).toBe(0);
    });
  });

  describe('2D Vector Resolution & Addition', () => {
    it('resolves vector into perpendicular components', () => {
      // Vector A = 10 at 0 degrees -> Ax = 10, Ay = 0
      const a0 = resolveVector(10, 0);
      expect(a0.rx).toBe(10);
      expect(a0.ry).toBe(0);

      // Vector A = 10 at 90 degrees -> Ax = 0, Ay = 10
      const a90 = resolveVector(10, 90);
      expect(a90.rx).toBe(0);
      expect(a90.ry).toBe(10);

      // Vector A = 10 at 30 degrees -> Ax = 8.66, Ay = 5.0
      const a30 = resolveVector(10, 30);
      expect(a30.rx).toBe(8.66);
      expect(a30.ry).toBe(5.0);
    });

    it('adds perpendicular vectors forming a 3-4-5 right triangle', () => {
      const vecA = { magnitude: 3, angleDegrees: 0 };
      const vecB = { magnitude: 4, angleDegrees: 90 };
      const result = addVectors([vecA, vecB]);

      expect(result.rx).toBe(3);
      expect(result.ry).toBe(4);
      expect(result.resultantMagnitude).toBe(5);
      expect(result.resultantAngleDegrees).toBeCloseTo(53.1, 1);
    });

    it('adds collinear opposite vectors resulting in zero or difference', () => {
      const vecA = { magnitude: 10, angleDegrees: 0 };
      const vecB = { magnitude: 10, angleDegrees: 180 };
      const result = addVectors([vecA, vecB]);

      expect(result.resultantMagnitude).toBe(0);
    });
  });
});

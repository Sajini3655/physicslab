import { describe, it, expect } from 'vitest';
import {
  GRAVITATIONAL_CONSTANT_G,
  EARTH_MASS_KG,
  EARTH_RADIUS_M,
  EARTH_SURFACE_G,
  MOON_MASS_KG,
  EARTH_MOON_DISTANCE_M,
  calculateGravitationalForce,
  calculateFieldIntensity,
  calculateFieldIntensityAtAltitude,
  calculateFieldIntensityAtDepth,
  calculateNeutralPointDistance,
  calculateGravitationalPotential,
  calculateGravitationalPotentialEnergy,
  calculateWorkInGravitationalField,
  calculateEscapeVelocity,
  calculateOrbitalVelocity,
  calculateOrbitalPeriod,
  calculateOrbitalRadiusForPeriod,
  calculateSatelliteTotalEnergy,
  calculateSatelliteBindingEnergy,
} from '../physics/calculations';

describe('Unit 5: Gravitational Field Physics Calculations', () => {
  describe('Universal Gravitational Force (Competency 5.1)', () => {
    it('calculates the gravitational force between Earth and a 70 kg human on surface', () => {
      const force = calculateGravitationalForce(EARTH_MASS_KG, 70, EARTH_RADIUS_M);
      // F = mg ≈ 70 * 9.807 = 686.5 N
      expect(force).toBeCloseTo(687.1, 0);
    });

    it('returns zero for invalid parameters', () => {
      expect(calculateGravitationalForce(0, 70, EARTH_RADIUS_M)).toBe(0);
      expect(calculateGravitationalForce(EARTH_MASS_KG, -10, EARTH_RADIUS_M)).toBe(0);
      expect(calculateGravitationalForce(EARTH_MASS_KG, 70, 0)).toBe(0);
    });
  });

  describe('Gravitational Field Intensity (Competency 5.2)', () => {
    it('calculates standard Earth surface gravity g ≈ 9.8 m/s²', () => {
      const g = calculateFieldIntensity(EARTH_MASS_KG, EARTH_RADIUS_M);
      expect(g).toBeCloseTo(9.816, 2);
    });

    it('calculates field intensity at altitude h = R (double radius)', () => {
      // At h = R, r = 2R, g_h = g_0 / 4 ≈ 2.45 m/s²
      const gh = calculateFieldIntensityAtAltitude(EARTH_MASS_KG, EARTH_RADIUS_M, EARTH_RADIUS_M);
      expect(gh).toBeCloseTo(9.816 / 4, 1);
    });

    it('calculates field intensity at depth d = R/2 (halfway to center)', () => {
      // Under uniform density, g_d = g_0 * (1 - 0.5) = g_0 / 2 ≈ 4.90 m/s²
      const gd = calculateFieldIntensityAtDepth(EARTH_SURFACE_G, EARTH_RADIUS_M, EARTH_RADIUS_M / 2);
      expect(gd).toBeCloseTo(4.9035, 1);
    });

    it('returns g = 0 at Earth center (depth = R)', () => {
      const gdCenter = calculateFieldIntensityAtDepth(EARTH_SURFACE_G, EARTH_RADIUS_M, EARTH_RADIUS_M);
      expect(gdCenter).toBe(0);
    });

    it('calculates the neutral point between Earth and Moon', () => {
      const x = calculateNeutralPointDistance(EARTH_MASS_KG, MOON_MASS_KG, EARTH_MOON_DISTANCE_M);
      // Neutral point is approx 3.46 × 10^8 m from Earth's center (approx 90% of distance)
      expect(x).toBeGreaterThan(3.4e8);
      expect(x).toBeLessThan(3.5e8);
    });
  });

  describe('Gravitational Potential & Escape Velocity (Competency 5.3)', () => {
    it('calculates gravitational potential on Earth surface (negative quantity)', () => {
      const v = calculateGravitationalPotential(EARTH_MASS_KG, EARTH_RADIUS_M);
      // V = -GM/R ≈ -6.25 × 10^7 J/kg
      expect(v).toBeLessThan(0);
      expect(Math.abs(v)).toBeCloseTo(6.256e7, -4);
    });

    it('calculates gravitational potential energy of mass on surface U = -GMm/R', () => {
      const u = calculateGravitationalPotentialEnergy(EARTH_MASS_KG, 100, EARTH_RADIUS_M);
      expect(u).toBeLessThan(0);
      expect(Math.abs(u)).toBeCloseTo(6.256e9, -6);
      expect(GRAVITATIONAL_CONSTANT_G).toBeCloseTo(6.674e-11, 13);
    });

    it('calculates work done moving a 100 kg mass between potentials', () => {
      const v1 = -6.2e7;
      const v2 = -3.1e7;
      const work = calculateWorkInGravitationalField(100, v1, v2);
      expect(work).toBeCloseTo(100 * (v2 - v1), 0);
      expect(work).toBeGreaterThan(0);
    });

    it('calculates Earth surface escape velocity v_e ≈ 11.2 km/s', () => {
      const ve = calculateEscapeVelocity(EARTH_MASS_KG, EARTH_RADIUS_M);
      expect(ve).toBeGreaterThan(11100);
      expect(ve).toBeLessThan(11300);
      expect(ve / 1000).toBeCloseTo(11.2, 1);
    });
  });

  describe('Orbital Mechanics & Satellites (Competency 5.4)', () => {
    it('calculates Low Earth Orbit (LEO) orbital speed at r = 6700 km', () => {
      const rLeo = 6.7e6; // m
      const vo = calculateOrbitalVelocity(EARTH_MASS_KG, rLeo);
      // v_o ≈ 7.7 km/s
      expect(vo).toBeGreaterThan(7600);
      expect(vo).toBeLessThan(7800);
    });

    it('calculates LEO orbital period to be approx 90 minutes (5400 s)', () => {
      const rLeo = 6.7e6; // m
      const periodS = calculateOrbitalPeriod(EARTH_MASS_KG, rLeo);
      expect(periodS / 60).toBeCloseTo(91, 0); // ~91 minutes
    });

    it('calculates geostationary satellite orbital radius for T = 24 hours (86400 s)', () => {
      const rGeo = calculateOrbitalRadiusForPeriod(EARTH_MASS_KG, 86400);
      // Geostationary radius r ≈ 42,200 km = 4.22 × 10^7 m
      expect(rGeo).toBeGreaterThan(4.21e7);
      expect(rGeo).toBeLessThan(4.24e7);

      // Altitude h = r - R ≈ 35,870 km (approx 3.59 × 10^4 km)
      const altitudeGeoKm = (rGeo - EARTH_RADIUS_M) / 1000;
      expect(altitudeGeoKm).toBeGreaterThan(35800);
      expect(altitudeGeoKm).toBeLessThan(36000);
    });

    it('calculates total mechanical energy of an orbiting satellite (negative)', () => {
      const mSat = 1000; // kg
      const r = 7.0e6; // m
      const energy = calculateSatelliteTotalEnergy(EARTH_MASS_KG, mSat, r);
      expect(energy).toBeLessThan(0);
      expect(Math.abs(energy)).toBeCloseTo(2.847e10, -8);
    });

    it('calculates satellite binding energy to be exactly equal and opposite to total energy', () => {
      const mSat = 500;
      const r = 8.0e6;
      const totalE = calculateSatelliteTotalEnergy(EARTH_MASS_KG, mSat, r);
      const bindingE = calculateSatelliteBindingEnergy(EARTH_MASS_KG, mSat, r);
      expect(bindingE).toBe(-totalE);
      expect(bindingE).toBeGreaterThan(0);
    });
  });
});

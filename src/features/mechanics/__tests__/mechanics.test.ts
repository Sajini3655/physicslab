import { describe, it, expect } from 'vitest';
import {
  calculateLinearKinematics,
  calculateVerticalMotionUnderGravity,
  calculateProjectileMotion,
  calculateInclinedPlaneForces,
  calculateWorkDone,
  calculateKineticEnergy,
  calculateGravitationalPE,
  calculateElasticPE,
  calculatePower,
  calculate1DCollision,
  calculateCircularMotion,
  calculateVerticalCircle,
  calculateMomentOfInertia,
  calculateRotationalTorque,
  calculateHydrostaticPressure,
  calculateUTubeRelativeDensity,
  calculateHaresApparatusRelativeDensity,
  calculateWeightedTestTubeFlotation,
  calculateForceBoardResultant,
  calculatePrincipleOfMoments,
} from '../physics/calculations';

describe('Unit 2 Mechanics - Physics Calculations & Metrology', () => {
  describe('Linear Kinematics', () => {
    it('solves uniformly accelerated motion with u, a, t', () => {
      // u = 10 m/s, a = 2 m/s^2, t = 5 s -> v = 20 m/s, s = 50 + 25 = 75 m
      const res = calculateLinearKinematics({ u: 10, a: 2, t: 5 });
      expect(res.v).toBe(20);
      expect(res.s).toBe(75);
    });

    it('solves stopping distance under braking (deceleration)', () => {
      // u = 20 m/s, a = -4 m/s^2, v = 0 -> s = (0 - 400) / -8 = 50 m, t = 5 s
      const res = calculateLinearKinematics({ u: 20, v: 0, a: -4 });
      expect(res.s).toBe(50);
      expect(res.t).toBe(5);
    });

    it('solves displacement given initial and final velocities with duration', () => {
      // u = 5 m/s, v = 15 m/s, t = 4 s -> s = (5 + 15)/2 * 4 = 40 m, a = 2.5 m/s^2
      const res = calculateLinearKinematics({ u: 5, v: 15, t: 4 });
      expect(res.s).toBe(40);
      expect(res.a).toBe(2.5);
    });
  });

  describe('Vertical Motion Under Gravity', () => {
    it('calculates apex height and time to peak for vertical projection', () => {
      // u = 29.4 m/s, g = 9.8 m/s^2 -> t_peak = 3.0 s, max_h = 29.4^2 / (2 * 9.8) = 44.1 m
      const res = calculateVerticalMotionUnderGravity({ u: 29.4, t: 3.0 });
      expect(res.timeToPeak).toBe(3);
      expect(res.maxHeight).toBe(44.1);
      expect(res.v).toBe(0);
      expect(res.y).toBe(44.1);
    });

    it('tracks position and downward velocity after apex', () => {
      // u = 20 m/s, t = 3.0 s, g = 9.8 m/s^2 -> v = 20 - 29.4 = -9.4 m/s
      const res = calculateVerticalMotionUnderGravity({ u: 20, t: 3.0 });
      expect(res.v).toBe(-9.4);
      expect(res.y).toBeCloseTo(15.9, 1);
    });
  });

  describe('Projectile Motion in Two Dimensions', () => {
    it('calculates symmetric ground-to-ground projectile metrics', () => {
      // u = 20 m/s, angle = 45 deg, g = 9.8 m/s^2
      // R = 20^2 * sin(90) / 9.8 = 400 / 9.8 ~ 40.816 m
      // H = 20^2 * sin^2(45) / (2 * 9.8) = 400 * 0.5 / 19.6 ~ 10.204 m
      const res = calculateProjectileMotion({ u: 20, angleDegrees: 45 });
      expect(res.range).toBeCloseTo(40.82, 1);
      expect(res.maxHeight).toBeCloseTo(10.20, 1);
      expect(res.timeOfFlight).toBeCloseTo(2.89, 1);
      expect(res.trajectoryPoints.length).toBeGreaterThan(10);
    });

    it('handles horizontal projection from elevated platform', () => {
      // u = 10 m/s, angle = 0 deg, y0 = 19.6 m, g = 9.8 m/s^2 -> t = sqrt(2 * 19.6 / 9.8) = 2.0 s, R = 20.0 m
      const res = calculateProjectileMotion({ u: 10, angleDegrees: 0, y0: 19.6 });
      expect(res.timeOfFlight).toBe(2);
      expect(res.range).toBe(20);
      expect(res.maxHeight).toBe(19.6);
    });
  });

  describe('Friction and Inclined Planes', () => {
    it('determines static equilibrium when angle is below angle of friction', () => {
      // mass = 10 kg, angle = 20 deg, mu_s = 0.5 (tan(20) ~ 0.364 < 0.5 -> will not slide)
      const res = calculateInclinedPlaneForces({ massKg: 10, angleDegrees: 20, muStatic: 0.5 });
      expect(res.willSlide).toBe(false);
      expect(res.acceleration).toBe(0);
      expect(res.normalReaction).toBeGreaterThan(0);
      expect(res.limitingFriction).toBeGreaterThan(res.parallelGravityForce);
    });

    it('calculates downhill acceleration when sliding occurs', () => {
      // mass = 10 kg, angle = 45 deg, mu_s = 0.2, mu_k = 0.2
      // a = 9.8 * (sin(45) - 0.2 * cos(45)) = 9.8 * 0.7071 * 0.8 ~ 5.54 m/s^2
      const res = calculateInclinedPlaneForces({ massKg: 10, angleDegrees: 45, muStatic: 0.2, muDynamic: 0.2 });
      expect(res.willSlide).toBe(true);
      expect(res.acceleration).toBeCloseTo(5.54, 1);
    });
  });

  describe('Work, Energy, and Power', () => {
    it('calculates work done at an angle and kinetic energy', () => {
      // W = 50 N * 10 m * cos(60) = 250 J
      const work = calculateWorkDone(50, 10, 60);
      expect(work).toBe(250);

      // Ek = 0.5 * 2 kg * 10^2 = 100 J
      const ek = calculateKineticEnergy(2, 10);
      expect(ek).toBe(100);
    });

    it('calculates gravitational and elastic potential energy', () => {
      // Ep = 5 kg * 9.8 * 4 m = 196 J
      const ep = calculateGravitationalPE(5, 4);
      expect(ep).toBe(196);

      // Ee = 0.5 * 200 N/m * 0.1^2 = 1.0 J
      const ee = calculateElasticPE(200, 0.1);
      expect(ee).toBe(1.0);
    });

    it('calculates power output from force and velocity', () => {
      // P = 300 N * 20 m/s = 6000 W (6 kW)
      const p = calculatePower({ forceN: 300, velocityMs: 20 });
      expect(p).toBe(6000);
    });
  });

  describe('Linear Momentum and Collisions', () => {
    it('conserves momentum in 1D elastic collision', () => {
      // m1 = 2 kg, u1 = 6 m/s; m2 = 3 kg, u2 = 0 m/s; e = 1.0
      // v1 = (2 - 3)/5 * 6 = -1.2 m/s
      // v2 = (2 * 2 * 6)/5 = 4.8 m/s
      const col = calculate1DCollision({ m1: 2, u1: 6, m2: 3, u2: 0, e: 1.0 });
      expect(col.v1).toBeCloseTo(-1.2, 1);
      expect(col.v2).toBeCloseTo(4.8, 1);
      expect(col.initialTotalMomentum).toBe(12);
      expect(col.finalTotalMomentum).toBeCloseTo(12, 1);
      expect(col.kineticEnergyLost).toBeCloseTo(0, 1);
    });

    it('calculates kinetic energy loss in completely inelastic collision (e = 0)', () => {
      // m1 = 2 kg, u1 = 10 m/s; m2 = 3 kg, u2 = 0; e = 0
      // v1 = v2 = 20 / 5 = 4 m/s
      // Ek_init = 0.5 * 2 * 100 = 100 J
      // Ek_final = 0.5 * 5 * 16 = 40 J -> Loss = 60 J
      const col = calculate1DCollision({ m1: 2, u1: 10, m2: 3, u2: 0, e: 0 });
      expect(col.v1).toBe(4);
      expect(col.v2).toBe(4);
      expect(col.kineticEnergyLost).toBe(60);
    });
  });

  describe('Circular Motion & Vertical Loops', () => {
    it('calculates centripetal acceleration, force, and road banking angle', () => {
      // r = 50 m, v = 20 m/s, m = 1000 kg
      // a_c = 400 / 50 = 8 m/s^2, F_c = 8000 N
      // tan(theta) = 400 / (50 * 9.8) = 400 / 490 ~ 0.8163 -> theta ~ 39.22 deg
      const res = calculateCircularMotion({ radiusM: 50, speedMs: 20, massKg: 1000 });
      expect(res.centripetalAcceleration).toBe(8);
      expect(res.centripetalForce).toBe(8000);
      expect(res.idealBankingAngleDegrees).toBeCloseTo(39.22, 1);
    });

    it('calculates critical speeds in vertical circular motion', () => {
      // r = 2.5 m, g = 9.8 -> v_crit_top = sqrt(9.8 * 2.5) = sqrt(24.5) ~ 4.95 m/s
      const topSafe = calculateVerticalCircle({ radiusM: 2.5, massKg: 1, speedMs: 6.0, position: 'top' });
      expect(topSafe.isStable).toBe(true);
      expect(topSafe.minSpeedTop).toBeCloseTo(4.95, 1);

      const topUnstable = calculateVerticalCircle({ radiusM: 2.5, massKg: 1, speedMs: 4.0, position: 'top' });
      expect(topUnstable.isStable).toBe(false);
    });
  });

  describe('Rotational Dynamics', () => {
    it('calculates moment of inertia for standard rigid bodies', () => {
      // Uniform thin rod of mass 3 kg, length 2 m about center: (1/12) * 3 * 4 = 1.0 kg m^2
      const iRodCenter = calculateMomentOfInertia('thin_rod_center', 3, 2);
      expect(iRodCenter).toBe(1.0);

      // Solid cylinder/disc mass 4 kg, radius 0.5 m: 0.5 * 4 * 0.25 = 0.5 kg m^2
      const iDisc = calculateMomentOfInertia('solid_cylinder_disc', 4, 0.5);
      expect(iDisc).toBe(0.5);

      // Solid sphere mass 5 kg, radius 1.0 m: (2/5) * 5 * 1 = 2.0 kg m^2
      const iSphere = calculateMomentOfInertia('solid_sphere', 5, 1.0);
      expect(iSphere).toBe(2.0);
    });

    it('calculates angular acceleration from torque: alpha = tau / I', () => {
      // tau = 15 Nm, I = 3.0 kg m^2 -> alpha = 5.0 rad/s^2
      const res = calculateRotationalTorque(15, 3.0);
      expect(res.angularAccelerationRadS2).toBe(5.0);
    });
  });

  describe('Fluid Statics & Canonical Practicals', () => {
    it('calculates hydrostatic gauge and absolute pressure', () => {
      // depth = 10 m in water (rho = 1000 kg/m^3), P_gauge = 10 * 1000 * 9.8 = 98000 Pa
      const press = calculateHydrostaticPressure(10, 1000);
      expect(press.gaugePressurePa).toBe(98000);
      expect(press.absolutePressurePa).toBe(98000 + 101325);
    });

    it('calculates relative density from U-tube liquid column heights', () => {
      // Water height = 120 mm, oil height = 150 mm -> rho_rel = 120 / 150 = 0.8
      const utube = calculateUTubeRelativeDensity(120, 150, 1000);
      expect(utube.relativeDensity).toBe(0.8);
      expect(utube.density2KgM3).toBe(800);
    });

    it('computes mean relative density and best-fit gradient in Hare apparatus', () => {
      // Observations with rho_rel = 0.8 (e.g. paraffin oil)
      const readings = [
        { waterHeightMm: 80, liquidHeightMm: 100 },
        { waterHeightMm: 120, liquidHeightMm: 150 },
        { waterHeightMm: 160, liquidHeightMm: 200 },
      ];
      const hares = calculateHaresApparatusRelativeDensity(readings);
      expect(hares.meanRelativeDensity).toBe(0.8);
      expect(hares.gradient).toBe(0.8);
    });

    it('calculates liquid density using weighted test tube hydrometer', () => {
      // Tube mass = 40 g, cross section = 4 cm^2, immersion depth = 10 cm -> Vol = 40 cm^3 -> rho = 1.0 g/cm^3
      const testTube = calculateWeightedTestTubeFlotation({
        tubeMassG: 40,
        submergedDepthCm: 10,
        crossSectionAreaCm2: 4,
      });
      expect(testTube.densityGCm3).toBe(1.0);
      expect(testTube.densityKgM3).toBe(1000);
    });

    it('verifies Gravesande force board parallelogram equilibrium within tolerance', () => {
      // P = 300 g, Q = 400 g at theta = 90 deg -> R_diag = 500 g. Counterweight R = 500 g
      const fb = calculateForceBoardResultant(300, 400, 90, 500);
      expect(fb.diagonalResultantG).toBe(500);
      expect(fb.percentageDiscrepancy).toBe(0);
      expect(fb.isEquilibriumVerified).toBe(true);
    });

    it('verifies the Principle of Moments on a balanced metre rule', () => {
      // Pivot at 50 cm. m1 = 100 g at 30 cm (d = 20 cm -> CCW = 2000 g cm)
      // m2 = 50 g at 90 cm (d = 40 cm -> CW = 2000 g cm)
      const moments = calculatePrincipleOfMoments({
        pivotCm: 50,
        weights: [
          { massG: 100, positionCm: 30 },
          { massG: 50, positionCm: 90 },
        ],
      });
      expect(moments.anticlockwiseMomentGCm).toBe(2000);
      expect(moments.clockwiseMomentGCm).toBe(2000);
      expect(moments.isBalanced).toBe(true);
    });
  });
});

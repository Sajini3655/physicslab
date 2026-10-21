/**
 * PhysicsLab - Unit 2: Mechanics (යාන්ත්‍ර විද්‍යාව)
 * Pure, independently testable physical formulas, metrological algorithms, and error propagation.
 */

export const STANDARD_GRAVITY_G = 9.80665; // Standard acceleration of gravity (m s^-2)
export const DENSITY_OF_WATER = 1000; // kg m^-3 (at 4 °C)

// ============================================================================
// 1. KINEMATICS & LINEAR MOTION
// ============================================================================

export interface LinearKinematicsResult {
  v: number; // final velocity (m/s)
  s: number; // displacement (m)
  t: number; // time (s)
  a: number; // acceleration (m/s^2)
}

/**
 * Solves uniformly accelerated motion:
 * v = u + at
 * s = ut + 0.5 * a * t^2
 * v^2 = u^2 + 2as
 * s = (u + v) / 2 * t
 */
export function calculateLinearKinematics(params: {
  u: number;
  a?: number;
  t?: number;
  s?: number;
  v?: number;
}): LinearKinematicsResult {
  const { u } = params;
  let { a, t, s, v } = params;

  if (a !== undefined && t !== undefined) {
    v = u + a * t;
    s = u * t + 0.5 * a * t * t;
  } else if (a !== undefined && s !== undefined) {
    const vSquared = u * u + 2 * a * s;
    v = vSquared >= 0 ? Math.sqrt(vSquared) : 0;
    t = a !== 0 ? (v - u) / a : s / u;
  } else if (v !== undefined && t !== undefined) {
    a = t !== 0 ? (v - u) / t : 0;
    s = ((u + v) / 2) * t;
  } else if (v !== undefined && a !== undefined && a !== 0) {
    t = (v - u) / a;
    s = (v * v - u * u) / (2 * a);
  } else if (s !== undefined && t !== undefined && t !== 0) {
    v = (2 * s) / t - u;
    a = (v - u) / t;
  }

  return {
    v: Number((v ?? 0).toFixed(3)),
    s: Number((s ?? 0).toFixed(3)),
    t: Number((t ?? 0).toFixed(3)),
    a: Number((a ?? 0).toFixed(3)),
  };
}

/**
 * Calculates vertical motion under gravity g = 9.8 m/s^2.
 */
export function calculateVerticalMotionUnderGravity(params: {
  u: number; // upward positive velocity (m/s)
  y0?: number; // initial height (m)
  t: number; // time elapsed (s)
  g?: number; // gravity magnitude (default 9.8 m/s^2)
}): {
  y: number; // vertical position (m)
  v: number; // vertical velocity (m/s)
  maxHeight: number; // peak height reached (m)
  timeToPeak: number; // time to reach peak (s)
} {
  const { u, t } = params;
  const y0 = params.y0 ?? 0;
  const g = params.g ?? 9.8;

  const rawY = y0 + u * t - 0.5 * g * t * t;
  const rawV = u - g * t;
  const y = Math.abs(rawY) < 1e-9 ? 0 : rawY;
  const v = Math.abs(rawV) < 1e-9 ? 0 : rawV;
  const timeToPeak = Math.max(0, u / g);
  const maxHeight = y0 + (u * u) / (2 * g);

  return {
    y: Number(y.toFixed(3)),
    v: Number(v.toFixed(3)),
    maxHeight: Number(maxHeight.toFixed(3)),
    timeToPeak: Number(timeToPeak.toFixed(3)),
  };
}

// ============================================================================
// 2. PROJECTILE MOTION IN TWO DIMENSIONS
// ============================================================================

export interface ProjectileMotionResult {
  timeOfFlight: number; // total flight duration (s)
  maxHeight: number; // maximum vertical altitude (m)
  range: number; // total horizontal distance (m)
  trajectoryPoints: Array<{ x: number; y: number; t: number }>;
}

/**
 * Calculates 2D projectile trajectory from ground or elevated platform.
 */
export function calculateProjectileMotion(params: {
  u: number; // launch speed (m/s)
  angleDegrees: number; // launch angle from horizontal (deg)
  y0?: number; // launch height (m, default 0)
  g?: number; // gravity (default 9.8 m/s^2)
  numPoints?: number;
}): ProjectileMotionResult {
  const { u, angleDegrees } = params;
  const y0 = params.y0 ?? 0;
  const g = params.g ?? 9.8;
  const numPoints = params.numPoints ?? 50;

  const rad = (angleDegrees * Math.PI) / 180;
  const ux = u * Math.cos(rad);
  const uy = u * Math.sin(rad);

  // Time of flight when landing at y = 0: y0 + uy*t - 0.5*g*t^2 = 0
  // 0.5*g*t^2 - uy*t - y0 = 0 -> quadratic formula
  const discriminant = uy * uy + 2 * g * y0;
  const timeOfFlight = discriminant >= 0 ? (uy + Math.sqrt(discriminant)) / g : 0;

  // Maximum height above ground
  const maxHeight = y0 + (uy > 0 ? (uy * uy) / (2 * g) : 0);

  // Horizontal range
  const range = ux * timeOfFlight;

  // Discrete trajectory points for rendering
  const trajectoryPoints: Array<{ x: number; y: number; t: number }> = [];
  if (timeOfFlight > 0) {
    const dt = timeOfFlight / numPoints;
    for (let i = 0; i <= numPoints; i++) {
      const t = i * dt;
      const x = ux * t;
      const y = Math.max(0, y0 + uy * t - 0.5 * g * t * t);
      trajectoryPoints.push({
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        t: Number(t.toFixed(2)),
      });
    }
  }

  return {
    timeOfFlight: Number(timeOfFlight.toFixed(3)),
    maxHeight: Number(maxHeight.toFixed(3)),
    range: Number(range.toFixed(3)),
    trajectoryPoints,
  };
}

// ============================================================================
// 3. NEWTON'S LAWS, FRICTION & INCLINED PLANES
// ============================================================================

export interface InclinedPlaneResult {
  normalReaction: number; // N
  parallelGravityForce: number; // N (mg sin theta)
  limitingFriction: number; // N (mu_s * R)
  willSlide: boolean;
  netForce: number; // N
  acceleration: number; // m/s^2 down plane
}

/**
 * Calculates forces and acceleration on an inclined plane.
 */
export function calculateInclinedPlaneForces(params: {
  massKg: number;
  angleDegrees: number;
  muStatic: number;
  muDynamic?: number;
  g?: number;
}): InclinedPlaneResult {
  const { massKg, angleDegrees, muStatic } = params;
  const muDynamic = params.muDynamic ?? muStatic;
  const g = params.g ?? 9.8;

  const rad = (angleDegrees * Math.PI) / 180;
  const weight = massKg * g;
  const normalReaction = weight * Math.cos(rad);
  const parallelGravityForce = weight * Math.sin(rad);
  const limitingFriction = muStatic * normalReaction;

  const willSlide = parallelGravityForce > limitingFriction;
  let netForce = 0;
  let acceleration = 0;

  if (willSlide) {
    const dynamicFriction = muDynamic * normalReaction;
    netForce = parallelGravityForce - dynamicFriction;
    acceleration = netForce / massKg;
  }

  return {
    normalReaction: Number(normalReaction.toFixed(2)),
    parallelGravityForce: Number(parallelGravityForce.toFixed(2)),
    limitingFriction: Number(limitingFriction.toFixed(2)),
    willSlide,
    netForce: Number(netForce.toFixed(2)),
    acceleration: Number(acceleration.toFixed(2)),
  };
}

// ============================================================================
// 4. WORK, ENERGY & POWER
// ============================================================================

/**
 * Calculates work done by a force W = F * s * cos(theta).
 */
export function calculateWorkDone(
  forceN: number,
  displacementM: number,
  angleDegrees: number = 0
): number {
  const rad = (angleDegrees * Math.PI) / 180;
  return Number((forceN * displacementM * Math.cos(rad)).toFixed(2));
}

/**
 * Calculates kinetic energy: Ek = 0.5 * m * v^2.
 */
export function calculateKineticEnergy(massKg: number, velocityMs: number): number {
  if (massKg <= 0) return 0;
  return Number((0.5 * massKg * velocityMs * velocityMs).toFixed(2));
}

/**
 * Calculates gravitational potential energy: Ep = m * g * h.
 */
export function calculateGravitationalPE(
  massKg: number,
  heightM: number,
  g: number = 9.8
): number {
  return Number((massKg * g * heightM).toFixed(2));
}

/**
 * Calculates elastic potential energy in a spring: Ee = 0.5 * k * x^2.
 */
export function calculateElasticPE(springConstantNm: number, extensionM: number): number {
  return Number((0.5 * springConstantNm * extensionM * extensionM).toFixed(2));
}

/**
 * Calculates power P = F * v or P = W / t.
 */
export function calculatePower(params: {
  workJoules?: number;
  timeSeconds?: number;
  forceN?: number;
  velocityMs?: number;
}): number {
  const { workJoules, timeSeconds, forceN, velocityMs } = params;
  if (forceN !== undefined && velocityMs !== undefined) {
    return Number((forceN * velocityMs).toFixed(2));
  }
  if (workJoules !== undefined && timeSeconds !== undefined && timeSeconds > 0) {
    return Number((workJoules / timeSeconds).toFixed(2));
  }
  return 0;
}

// ============================================================================
// 5. LINEAR MOMENTUM, IMPULSE & COLLISIONS
// ============================================================================

export interface CollisionResult {
  v1: number; // velocity of body 1 after collision (m/s)
  v2: number; // velocity of body 2 after collision (m/s)
  initialTotalMomentum: number; // kg m/s
  finalTotalMomentum: number; // kg m/s
  initialKineticEnergy: number; // J
  finalKineticEnergy: number; // J
  kineticEnergyLost: number; // J
}

/**
 * Calculates 1D collision for two bodies with coefficient of restitution e (0 <= e <= 1).
 * e = 1: Perfectly elastic (kinetic energy conserved)
 * e = 0: Completely inelastic (bodies stick together)
 */
export function calculate1DCollision(params: {
  m1: number; // mass of body 1 (kg)
  u1: number; // velocity of body 1 (m/s)
  m2: number; // mass of body 2 (kg)
  u2: number; // velocity of body 2 (m/s)
  e?: number; // coefficient of restitution (default 1)
}): CollisionResult {
  const { m1, u1, m2, u2 } = params;
  const e = params.e ?? 1.0;

  const totalMass = m1 + m2;
  // v1 = [m1*u1 + m2*u2 - m2*e*(u1 - u2)] / (m1 + m2)
  const v1 = (m1 * u1 + m2 * u2 - m2 * e * (u1 - u2)) / totalMass;
  // v2 = [m1*u1 + m2*u2 + m1*e*(u1 - u2)] / (m1 + m2)
  const v2 = (m1 * u1 + m2 * u2 + m1 * e * (u1 - u2)) / totalMass;

  const pInitial = m1 * u1 + m2 * u2;
  const pFinal = m1 * v1 + m2 * v2;

  const ekInitial = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2;
  const ekFinal = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
  const ekLost = Math.max(0, ekInitial - ekFinal);

  return {
    v1: Number(v1.toFixed(3)),
    v2: Number(v2.toFixed(3)),
    initialTotalMomentum: Number(pInitial.toFixed(3)),
    finalTotalMomentum: Number(pFinal.toFixed(3)),
    initialKineticEnergy: Number(ekInitial.toFixed(3)),
    finalKineticEnergy: Number(ekFinal.toFixed(3)),
    kineticEnergyLost: Number(ekLost.toFixed(3)),
  };
}

// ============================================================================
// 6. UNIFORM CIRCULAR MOTION
// ============================================================================

export interface CircularMotionResult {
  angularVelocityRadS: number;
  centripetalAcceleration: number; // m/s^2
  centripetalForce: number; // N
  idealBankingAngleDegrees: number; // for road curves
}

/**
 * Calculates uniform circular motion parameters and banking angle.
 */
export function calculateCircularMotion(params: {
  radiusM: number;
  speedMs?: number;
  omegaRadS?: number;
  massKg?: number;
  g?: number;
}): CircularMotionResult {
  const { radiusM } = params;
  const g = params.g ?? 9.8;
  const massKg = params.massKg ?? 1.0;

  let v = params.speedMs ?? 0;
  let omega = params.omegaRadS ?? 0;

  if (v !== 0 && omega === 0 && radiusM > 0) {
    omega = v / radiusM;
  } else if (omega !== 0 && v === 0) {
    v = omega * radiusM;
  }

  const ac = radiusM > 0 ? (v * v) / radiusM : 0;
  const fc = massKg * ac;

  // Road banking angle tan(theta) = v^2 / (r * g)
  const tanTheta = radiusM > 0 && g > 0 ? (v * v) / (radiusM * g) : 0;
  const idealBankingAngleDegrees = (Math.atan(tanTheta) * 180) / Math.PI;

  return {
    angularVelocityRadS: Number(omega.toFixed(3)),
    centripetalAcceleration: Number(ac.toFixed(3)),
    centripetalForce: Number(fc.toFixed(3)),
    idealBankingAngleDegrees: Number(idealBankingAngleDegrees.toFixed(2)),
  };
}

/**
 * Calculates critical speed and tensions in a vertical circular loop.
 * v_top_min = sqrt(g * r)
 */
export function calculateVerticalCircle(params: {
  radiusM: number;
  massKg: number;
  speedMs: number; // speed at current point
  position: 'top' | 'bottom';
  g?: number;
}): { tensionN: number; isStable: boolean; minSpeedTop: number } {
  const { radiusM, massKg, speedMs, position } = params;
  const g = params.g ?? 9.8;

  const minSpeedTop = Math.sqrt(g * radiusM);
  let tensionN = 0;
  let isStable = true;

  if (position === 'top') {
    // T_top = m * v^2 / r - m * g
    tensionN = (massKg * speedMs * speedMs) / radiusM - massKg * g;
    isStable = tensionN >= 0;
  } else {
    // T_bottom = m * v^2 / r + m * g
    tensionN = (massKg * speedMs * speedMs) / radiusM + massKg * g;
    isStable = true;
  }

  return {
    tensionN: Number(Math.max(0, tensionN).toFixed(2)),
    isStable,
    minSpeedTop: Number(minSpeedTop.toFixed(2)),
  };
}

// ============================================================================
// 7. ROTATIONAL DYNAMICS & MOMENT OF INERTIA
// ============================================================================

export type RigidBodyShape =
  | 'thin_rod_center'
  | 'thin_rod_end'
  | 'solid_cylinder_disc'
  | 'solid_sphere'
  | 'hollow_sphere';

/**
 * Calculates moment of inertia for canonical standard geometries.
 */
export function calculateMomentOfInertia(
  shape: RigidBodyShape,
  massKg: number,
  dimensionM: number // length L for rod, radius R for cylinder/sphere
): number {
  if (massKg <= 0 || dimensionM <= 0) return 0;
  const m = massKg;
  const d = dimensionM;

  switch (shape) {
    case 'thin_rod_center':
      return Number(((1 / 12) * m * d * d).toFixed(5));
    case 'thin_rod_end':
      return Number(((1 / 3) * m * d * d).toFixed(5));
    case 'solid_cylinder_disc':
      return Number((0.5 * m * d * d).toFixed(5));
    case 'solid_sphere':
      return Number(((2 / 5) * m * d * d).toFixed(5));
    case 'hollow_sphere':
      return Number(((2 / 3) * m * d * d).toFixed(5));
  }
}

/**
 * Calculates angular acceleration tau = I * alpha.
 */
export function calculateRotationalTorque(
  torqueNm: number,
  momentOfInertiaKgM2: number
): { angularAccelerationRadS2: number } {
  if (momentOfInertiaKgM2 <= 0) return { angularAccelerationRadS2: 0 };
  return {
    angularAccelerationRadS2: Number((torqueNm / momentOfInertiaKgM2).toFixed(3)),
  };
}

// ============================================================================
// 8. FLUID STATICS & PRACTICALS
// ============================================================================

/**
 * Calculates hydrostatic gauge and absolute pressure: P = h * rho * g + P_atm.
 */
export function calculateHydrostaticPressure(
  depthM: number,
  densityKgM3: number,
  atmosphericPressurePa: number = 101325,
  g: number = 9.8
): { gaugePressurePa: number; absolutePressurePa: number } {
  const gaugePressure = depthM * densityKgM3 * g;
  const absolutePressure = gaugePressure + atmosphericPressurePa;
  return {
    gaugePressurePa: Number(gaugePressure.toFixed(1)),
    absolutePressurePa: Number(absolutePressure.toFixed(1)),
  };
}

/**
 * U-Tube immiscible liquids balance:
 * h1 * rho1 = h2 * rho2 => rho2 = rho1 * (h1 / h2)
 */
export function calculateUTubeRelativeDensity(
  height1Mm: number,
  height2Mm: number,
  density1KgM3: number = 1000
): { relativeDensity: number; density2KgM3: number } {
  if (height2Mm <= 0) return { relativeDensity: 0, density2KgM3: 0 };
  const relativeDensity = height1Mm / height2Mm;
  const density2 = density1KgM3 * relativeDensity;
  return {
    relativeDensity: Number(relativeDensity.toFixed(3)),
    density2KgM3: Number(density2.toFixed(1)),
  };
}

/**
 * Hare's Apparatus relative density calculation:
 * hw * rhow = hL * rhoL => rho_rel = hw / hL
 */
export function calculateHaresApparatusRelativeDensity(
  readings: Array<{ waterHeightMm: number; liquidHeightMm: number }>
): {
  meanRelativeDensity: number;
  gradient: number; // hw vs hL slope
  observations: Array<{ hw: number; hL: number; relDensity: number }>;
} {
  if (readings.length === 0) {
    return { meanRelativeDensity: 0, gradient: 0, observations: [] };
  }

  const observations = readings.map((r) => {
    const ratio = r.liquidHeightMm > 0 ? r.waterHeightMm / r.liquidHeightMm : 0;
    return {
      hw: r.waterHeightMm,
      hL: r.liquidHeightMm,
      relDensity: Number(ratio.toFixed(3)),
    };
  });

  const valid = observations.filter((o) => o.hL > 0 && o.hw > 0);
  const sumRatio = valid.reduce((acc, cur) => acc + cur.relDensity, 0);
  const meanRel = valid.length > 0 ? sumRatio / valid.length : 0;

  // Best-fit gradient through origin: m = sum(hw * hL) / sum(hL^2)
  let sumProduct = 0;
  let sumL2 = 0;
  valid.forEach((v) => {
    sumProduct += v.hw * v.hL;
    sumL2 += v.hL * v.hL;
  });
  const gradient = sumL2 > 0 ? sumProduct / sumL2 : meanRel;

  return {
    meanRelativeDensity: Number(meanRel.toFixed(3)),
    gradient: Number(gradient.toFixed(3)),
    observations,
  };
}

/**
 * Calculates Hare's apparatus density from paired arrays of water heights and liquid heights.
 */
export function calculateHaresApparatusDensity(
  waterHeights: number[],
  liquidHeights: number[],
  waterDensityKgM3: number = 1000
): { gradient: number; liquidDensity: number } {
  if (waterHeights.length < 2 || liquidHeights.length < 2) {
    return { gradient: 0, liquidDensity: 0 };
  }

  let sumProd = 0;
  let sumL2 = 0;
  const len = Math.min(waterHeights.length, liquidHeights.length);

  for (let i = 0; i < len; i++) {
    const hw = waterHeights[i];
    const hl = liquidHeights[i];
    if (hw > 0 && hl > 0) {
      sumProd += hw * hl;
      sumL2 += hl * hl;
    }
  }

  const gradient = sumL2 > 0 ? sumProd / sumL2 : 0;
  const liquidDensity = gradient * waterDensityKgM3;

  return {
    gradient: Number(gradient.toFixed(4)),
    liquidDensity: Number(liquidDensity.toFixed(1)),
  };
}

/**
 * Loaded test tube flotation:
 * M = A * h * rho => rho_rel = hw / hL (for constant mass)
 * or rho = M / (A * h)
 */
export function calculateWeightedTestTubeFlotation(params: {
  tubeMassG: number;
  submergedDepthCm: number;
  crossSectionAreaCm2: number;
}): { densityGCm3: number; densityKgM3: number } {
  const { tubeMassG, submergedDepthCm, crossSectionAreaCm2 } = params;
  if (submergedDepthCm <= 0 || crossSectionAreaCm2 <= 0) {
    return { densityGCm3: 0, densityKgM3: 0 };
  }
  const submergedVolCm3 = crossSectionAreaCm2 * submergedDepthCm;
  const densityGCm3 = tubeMassG / submergedVolCm3;
  const densityKgM3 = densityGCm3 * 1000;

  return {
    densityGCm3: Number(densityGCm3.toFixed(3)),
    densityKgM3: Number(densityKgM3.toFixed(1)),
  };
}

/**
 * Calculates loaded test tube hydrometer slope and liquid density from arrays of total masses M (g) and depths h (cm).
 */
export function calculateWeightedTestTubeHydrometer(
  massesG: number[],
  depthsCm: number[],
  tubeAreaCm2: number
): { slope: number; liquidDensityGcm3: number } {
  if (massesG.length < 2 || depthsCm.length < 2 || tubeAreaCm2 <= 0) {
    return { slope: 0, liquidDensityGcm3: 0 };
  }

  let sumMh = 0;
  let sumH2 = 0;
  const len = Math.min(massesG.length, depthsCm.length);

  for (let i = 0; i < len; i++) {
    const m = massesG[i];
    const h = depthsCm[i];
    if (m > 0 && h > 0) {
      sumMh += m * h;
      sumH2 += h * h;
    }
  }

  const slope = sumH2 > 0 ? sumMh / sumH2 : 0;
  const liquidDensityGcm3 = tubeAreaCm2 > 0 ? slope / tubeAreaCm2 : 0;

  return {
    slope: Number(slope.toFixed(4)),
    liquidDensityGcm3: Number(liquidDensityGcm3.toFixed(3)),
  };
}

// ============================================================================
// 9. FORCE BOARD & PRINCIPLE OF MOMENTS
// ============================================================================

/**
 * Gravesande's force board parallelogram resultant:
 * Forces P and Q at angle theta: R_diag = sqrt(P^2 + Q^2 + 2*P*Q*cos(theta))
 */
export function calculateForceBoardResultant(
  forcePG: number,
  forceQG: number,
  angleDegrees: number,
  counterweightRG: number
): {
  diagonalResultantG: number;
  percentageDiscrepancy: number;
  isEquilibriumVerified: boolean;
} {
  const rad = (angleDegrees * Math.PI) / 180;
  const rSquared =
    forcePG * forcePG + forceQG * forceQG + 2 * forcePG * forceQG * Math.cos(rad);
  const diagonalResultant = rSquared >= 0 ? Math.sqrt(rSquared) : 0;
  const diff = Math.abs(diagonalResultant - counterweightRG);
  const pctDiscrepancy =
    counterweightRG > 0 ? (diff / counterweightRG) * 100 : 0;

  return {
    diagonalResultantG: Number(diagonalResultant.toFixed(2)),
    percentageDiscrepancy: Number(pctDiscrepancy.toFixed(2)),
    isEquilibriumVerified: pctDiscrepancy <= 5.0, // within 5% experimental tolerance
  };
}

/**
 * Principle of Moments on a uniform metre rule:
 * Clockwise moment vs Anti-clockwise moment.
 */
export function calculatePrincipleOfMoments(params: {
  pivotCm: number;
  weights: Array<{ massG: number; positionCm: number }>;
}): {
  clockwiseMomentGCm: number;
  anticlockwiseMomentGCm: number;
  netMomentGCm: number;
  isBalanced: boolean;
} {
  const { pivotCm, weights } = params;
  let clockwise = 0;
  let anticlockwise = 0;

  weights.forEach((w) => {
    const d = w.positionCm - pivotCm;
    const moment = w.massG * Math.abs(d);
    if (d > 0) {
      clockwise += moment;
    } else if (d < 0) {
      anticlockwise += moment;
    }
  });

  const netMoment = clockwise - anticlockwise;
  const isBalanced = Math.abs(netMoment) <= 5.0; // small threshold

  return {
    clockwiseMomentGCm: Number(clockwise.toFixed(2)),
    anticlockwiseMomentGCm: Number(anticlockwise.toFixed(2)),
    netMomentGCm: Number(netMoment.toFixed(2)),
    isBalanced,
  };
}

/**
 * Determination of an unknown body's mass using principle of moments and distance graph:
 * M_x * d1 = m * d2 => d2 = (M_x / m) * d1
 * Linear regression through origin: slope m_grad = sum(d1 * d2) / sum(d1^2)
 * M_x = m * m_grad
 */
export function calculateMomentsDistanceGraph(
  counterMassG: number,
  trials: Array<{ d1Cm: number; d2Cm: number }>
): {
  slope: number;
  calculatedMassG: number;
  rSquared: number;
} {
  const valid = trials.filter((t) => t.d1Cm > 0 && t.d2Cm > 0);
  if (valid.length < 2 || counterMassG <= 0) {
    return { slope: 0, calculatedMassG: 0, rSquared: 0 };
  }

  let sumD1D2 = 0;
  let sumD1Sq = 0;
  let sumD2Sq = 0;

  for (const t of valid) {
    sumD1D2 += t.d1Cm * t.d2Cm;
    sumD1Sq += t.d1Cm * t.d1Cm;
    sumD2Sq += t.d2Cm * t.d2Cm;
  }

  const slope = sumD1Sq > 0 ? sumD1D2 / sumD1Sq : 0;
  const calculatedMassG = counterMassG * slope;
  const rSquared = sumD1Sq > 0 && sumD2Sq > 0 ? (sumD1D2 * sumD1D2) / (sumD1Sq * sumD2Sq) : 1;

  return {
    slope: Number(slope.toFixed(4)),
    calculatedMassG: Number(calculatedMassG.toFixed(2)),
    rSquared: Number(rSquared.toFixed(4)),
  };
}


/**
 * Unit 5: Gravitational Field Physics Calculations Engine
 *
 * Implements standard physical equations for Newton's Universal Gravitation,
 * field intensity, gravitational potential, orbital mechanics, and satellite dynamics
 * matching the official NIE Sri Lanka G.C.E. Advanced Level Physics Syllabus.
 */

// ============================================================================
// CONSTANTS (CODATA 2018 / Official NIE Syllabus Standards)
// ============================================================================

export const GRAVITATIONAL_CONSTANT_G = 6.6743e-11; // N · m² / kg²
export const EARTH_MASS_KG = 5.972e24; // kg
export const EARTH_RADIUS_M = 6.371e6; // m (mean radius)
export const EARTH_SURFACE_G = 9.807; // m / s²
export const MOON_MASS_KG = 7.348e22; // kg
export const EARTH_MOON_DISTANCE_M = 3.844e8; // m

// ============================================================================
// 1. NEWTON'S LAW OF UNIVERSAL GRAVITATION (COMPETENCY 5.1)
// ============================================================================

/**
 * Calculates the gravitational attraction between two point masses:
 * F = G * (m1 * m2) / r^2
 */
export function calculateGravitationalForce(
  mass1Kg: number,
  mass2Kg: number,
  distanceM: number
): number {
  if (distanceM <= 0 || mass1Kg <= 0 || mass2Kg <= 0) return 0;
  const f = (GRAVITATIONAL_CONSTANT_G * mass1Kg * mass2Kg) / Math.pow(distanceM, 2);
  return Number(f.toPrecision(6));
}

// ============================================================================
// 2. GRAVITATIONAL FIELD INTENSITY (COMPETENCY 5.2)
// ============================================================================

/**
 * Calculates gravitational field intensity at radial distance r from center:
 * g = G * M / r^2
 */
export function calculateFieldIntensity(massKg: number, distanceM: number): number {
  if (distanceM <= 0 || massKg <= 0) return 0;
  const g = (GRAVITATIONAL_CONSTANT_G * massKg) / Math.pow(distanceM, 2);
  return Number(g.toFixed(4));
}

/**
 * Calculates gravitational field intensity at altitude h above planetary surface:
 * g_h = G * M / (R + h)^2
 */
export function calculateFieldIntensityAtAltitude(
  planetaryMassKg: number,
  planetaryRadiusM: number,
  altitudeM: number
): number {
  const totalR = planetaryRadiusM + altitudeM;
  if (totalR <= 0 || planetaryMassKg <= 0) return 0;
  const g = (GRAVITATIONAL_CONSTANT_G * planetaryMassKg) / Math.pow(totalR, 2);
  return Number(g.toFixed(4));
}

/**
 * Calculates gravitational field intensity at depth d beneath planetary surface
 * (assuming uniform planetary mass density):
 * g_d = g_0 * (1 - d / R)
 */
export function calculateFieldIntensityAtDepth(
  surfaceGravityMs2: number,
  planetaryRadiusM: number,
  depthM: number
): number {
  if (planetaryRadiusM <= 0 || depthM < 0) return 0;
  if (depthM >= planetaryRadiusM) return 0; // at center g = 0
  const g = surfaceGravityMs2 * (1 - depthM / planetaryRadiusM);
  return Number(g.toFixed(4));
}

/**
 * Calculates the distance from mass1 to the neutral point between two bodies
 * where net gravitational field intensity is zero (g_net = 0):
 * G*m1 / x^2 = G*m2 / (d - x)^2  =>  x = d / (1 + sqrt(m2 / m1))
 */
export function calculateNeutralPointDistance(
  mass1Kg: number,
  mass2Kg: number,
  separationDistanceM: number
): number {
  if (mass1Kg <= 0 || mass2Kg <= 0 || separationDistanceM <= 0) return 0;
  const ratio = Math.sqrt(mass2Kg / mass1Kg);
  const x = separationDistanceM / (1 + ratio);
  return Number(x.toPrecision(6));
}

// ============================================================================
// 3. GRAVITATIONAL POTENTIAL & ENERGY (COMPETENCY 5.3)
// ============================================================================

/**
 * Calculates gravitational potential at distance r (taking V = 0 at infinity):
 * V = - G * M / r
 */
export function calculateGravitationalPotential(
  massKg: number,
  distanceM: number
): number {
  if (distanceM <= 0 || massKg <= 0) return 0;
  const v = -(GRAVITATIONAL_CONSTANT_G * massKg) / distanceM;
  return Number(v.toPrecision(6)); // J / kg
}

/**
 * Calculates gravitational potential energy between two masses:
 * U = - G * (M * m) / r
 */
export function calculateGravitationalPotentialEnergy(
  mass1Kg: number,
  mass2Kg: number,
  distanceM: number
): number {
  if (distanceM <= 0 || mass1Kg <= 0 || mass2Kg <= 0) return 0;
  const u = -(GRAVITATIONAL_CONSTANT_G * mass1Kg * mass2Kg) / distanceM;
  return Number(u.toPrecision(6)); // Joules
}

/**
 * Calculates work done by external agent to move mass m between two potentials:
 * W = m * (V_final - V_initial)
 */
export function calculateWorkInGravitationalField(
  massKg: number,
  initialPotentialJkg: number,
  finalPotentialJkg: number
): number {
  if (massKg <= 0) return 0;
  const w = massKg * (finalPotentialJkg - initialPotentialJkg);
  return Number(w.toPrecision(6)); // Joules
}

/**
 * Calculates escape velocity from a spherical body:
 * v_e = sqrt(2 * G * M / R)
 */
export function calculateEscapeVelocity(
  planetaryMassKg: number,
  planetaryRadiusM: number
): number {
  if (planetaryRadiusM <= 0 || planetaryMassKg <= 0) return 0;
  const v = Math.sqrt((2 * GRAVITATIONAL_CONSTANT_G * planetaryMassKg) / planetaryRadiusM);
  return Number(v.toFixed(1)); // m / s
}

// ============================================================================
// 4. ORBITAL MECHANICS & SATELLITES (COMPETENCY 5.4)
// ============================================================================

/**
 * Calculates circular orbital speed for a satellite at radius r:
 * v_o = sqrt(G * M / r)
 */
export function calculateOrbitalVelocity(
  centralMassKg: number,
  orbitalRadiusM: number
): number {
  if (orbitalRadiusM <= 0 || centralMassKg <= 0) return 0;
  const v = Math.sqrt((GRAVITATIONAL_CONSTANT_G * centralMassKg) / orbitalRadiusM);
  return Number(v.toFixed(1)); // m / s
}

/**
 * Calculates orbital period of a satellite in circular orbit:
 * T = 2 * pi * sqrt(r^3 / (G * M))
 */
export function calculateOrbitalPeriod(
  centralMassKg: number,
  orbitalRadiusM: number
): number {
  if (orbitalRadiusM <= 0 || centralMassKg <= 0) return 0;
  const t =
    2 * Math.PI * Math.sqrt(Math.pow(orbitalRadiusM, 3) / (GRAVITATIONAL_CONSTANT_G * centralMassKg));
  return Number(t.toFixed(1)); // seconds
}

/**
 * Calculates the orbital radius required for a satellite with a specified period T
 * (e.g., geostationary orbit with T = 86400 s):
 * r = (G * M * T^2 / (4 * pi^2))^(1/3)
 */
export function calculateOrbitalRadiusForPeriod(
  centralMassKg: number,
  periodSeconds: number
): number {
  if (centralMassKg <= 0 || periodSeconds <= 0) return 0;
  const num = GRAVITATIONAL_CONSTANT_G * centralMassKg * Math.pow(periodSeconds, 2);
  const den = 4 * Math.pow(Math.PI, 2);
  const r = Math.cbrt(num / den);
  return Number(r.toFixed(0)); // metres
}

/**
 * Calculates total mechanical energy of a satellite in circular orbit:
 * E = KE + PE = (1/2) * m * v_o^2 - G * M * m / r = - G * M * m / (2 * r)
 */
export function calculateSatelliteTotalEnergy(
  centralMassKg: number,
  satelliteMassKg: number,
  orbitalRadiusM: number
): number {
  if (orbitalRadiusM <= 0 || centralMassKg <= 0 || satelliteMassKg <= 0) return 0;
  const e = -(GRAVITATIONAL_CONSTANT_G * centralMassKg * satelliteMassKg) / (2 * orbitalRadiusM);
  return Number(e.toPrecision(6)); // Joules
}

/**
 * Calculates binding energy of an orbiting satellite (energy required to escape to infinity):
 * E_binding = - E_total = G * M * m / (2 * r)
 */
export function calculateSatelliteBindingEnergy(
  centralMassKg: number,
  satelliteMassKg: number,
  orbitalRadiusM: number
): number {
  if (orbitalRadiusM <= 0 || centralMassKg <= 0 || satelliteMassKg <= 0) return 0;
  const eb = (GRAVITATIONAL_CONSTANT_G * centralMassKg * satelliteMassKg) / (2 * orbitalRadiusM);
  return Number(eb.toPrecision(6)); // Joules
}

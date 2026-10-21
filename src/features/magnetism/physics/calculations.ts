/**
 * Unit 7: Magnetic Field - Physics Calculations Engine
 * Based on official NIE G.C.E. A/L Physics syllabus and BIPM SI definitions.
 */

// Universal Physical Constants
export const VACUUM_PERMEABILITY_MU_0 = 4 * Math.PI * 1e-7; // T m A⁻¹ or N A⁻² (approx 1.256637e-6)
export const ELEMENTARY_CHARGE_E = 1.602176634e-19; // C
export const ELECTRON_MASS_KG = 9.1093837e-31; // kg
export const PROTON_MASS_KG = 1.67262192e-27; // kg

/**
 * Calculates magnetic force on a moving charge: F = |q| * v * B * sin(θ)
 */
export function calculateMagneticForceOnCharge(
  q: number,
  v: number,
  B: number,
  angleRad: number = Math.PI / 2
): number {
  return Math.abs(q) * Math.abs(v) * Math.abs(B) * Math.abs(Math.sin(angleRad));
}

/**
 * Calculates cyclotron radius of a charged particle in a perpendicular B-field:
 * r = (m * v) / (|q| * B)
 */
export function calculateCyclotronRadius(m: number, v: number, q: number, B: number): number {
  if (m <= 0) throw new Error('Mass m must be positive.');
  if (q === 0) throw new Error('Charge q cannot be zero for magnetic deflection.');
  if (B <= 0) throw new Error('Magnetic field B must be positive.');

  return (m * Math.abs(v)) / (Math.abs(q) * B);
}

/**
 * Calculates orbital period of a charged particle in a perpendicular B-field:
 * T = (2π * m) / (|q| * B)
 */
export function calculateCyclotronPeriod(m: number, q: number, B: number): number {
  if (m <= 0) throw new Error('Mass m must be positive.');
  if (q === 0) throw new Error('Charge q cannot be zero.');
  if (B <= 0) throw new Error('Magnetic field B must be positive.');

  return (2 * Math.PI * m) / (Math.abs(q) * B);
}

/**
 * Calculates selected velocity in a velocity selector with crossed E and B fields:
 * v = E / B
 */
export function calculateVelocitySelectorSpeed(E: number, B: number): number {
  if (B <= 0) throw new Error('Magnetic field B must be positive.');
  return Math.abs(E) / B;
}

/**
 * Calculates Hall voltage across a conductor/semiconductor slab:
 * V_H = (B * I) / (n * q * t)
 */
export function calculateHallVoltage(
  B: number,
  I: number,
  n: number,
  q: number,
  t: number
): number {
  if (n <= 0) throw new Error('Carrier concentration n must be positive.');
  if (q === 0) throw new Error('Carrier charge q cannot be zero.');
  if (t <= 0) throw new Error('Slab thickness t must be positive.');

  return (B * I) / (n * q * t);
}

/**
 * Calculates magnetic force on a straight current-carrying conductor:
 * F = B * I * l * sin(θ)
 */
export function calculateMagneticForceOnConductor(
  B: number,
  I: number,
  l: number,
  angleRad: number = Math.PI / 2
): number {
  return Math.abs(B) * Math.abs(I) * Math.abs(l) * Math.abs(Math.sin(angleRad));
}

/**
 * Calculates magnetic force between two parallel long straight currents separated by distance d:
 * F = (μ₀ * I₁ * I₂ * l) / (2π * d)
 */
export function calculateForceBetweenParallelWires(
  I1: number,
  I2: number,
  d: number,
  length: number = 1.0
): number {
  if (d <= 0) throw new Error('Distance d must be positive.');
  if (length <= 0) throw new Error('Length must be positive.');

  return (VACUUM_PERMEABILITY_MU_0 * Math.abs(I1 * I2) * length) / (2 * Math.PI * d);
}

/**
 * Calculates maximum torque on a rectangular or planar current coil in a B-field:
 * τ = B * I * N * A * sin(θ)
 */
export function calculateTorqueOnCoil(
  B: number,
  I: number,
  N: number,
  A: number,
  angleRad: number = Math.PI / 2
): number {
  return Math.abs(B) * Math.abs(I) * N * A * Math.abs(Math.sin(angleRad));
}

/**
 * Calculates magnetic dipole moment m = N * I * A (A m² or J T⁻¹)
 */
export function calculateMagneticDipoleMoment(N: number, I: number, A: number): number {
  return N * I * A;
}

/**
 * Calculates current sensitivity of a moving-coil galvanometer:
 * S_I = θ / I = (B * A * N) / C (rad/A or div/A)
 */
export function calculateGalvanometerCurrentSensitivity(
  B: number,
  A: number,
  N: number,
  torsionConstantC: number
): number {
  if (torsionConstantC <= 0) throw new Error('Restoring torsion constant C must be positive.');
  return (B * A * N) / torsionConstantC;
}

/**
 * Calculates shunt resistance required to convert galvanometer into ammeter of range I_max:
 * R_s = (I_g * R_g) / (I_max - I_g)
 */
export function calculateAmmeterShuntResistance(Ig: number, Rg: number, I_max: number): number {
  if (I_max <= Ig) throw new Error('Desired ammeter range I_max must exceed full-scale deflection current Ig.');
  return (Ig * Rg) / (I_max - Ig);
}

/**
 * Calculates multiplier series resistance required to convert galvanometer into voltmeter of range V_max:
 * R_m = (V_max / I_g) - R_g
 */
export function calculateVoltmeterMultiplierResistance(Ig: number, Rg: number, V_max: number): number {
  if (Ig <= 0) throw new Error('Galvanometer current Ig must be positive.');
  const Rm = (V_max / Ig) - Rg;
  if (Rm < 0) throw new Error('Desired voltage range V_max cannot be measured by meter without amplification.');
  return Rm;
}

/**
 * Calculates magnetic field intensity at distance r from a long straight wire:
 * B = (μ₀ * I) / (2π * r)
 */
export function calculateFieldLongStraightWire(I: number, r: number): number {
  if (r <= 0) throw new Error('Distance r must be positive.');
  return (VACUUM_PERMEABILITY_MU_0 * Math.abs(I)) / (2 * Math.PI * r);
}

/**
 * Calculates magnetic field at center of a flat circular coil of N turns and radius r:
 * B = (μ₀ * N * I) / (2 * r)
 */
export function calculateFieldCircularCoilCenter(I: number, r: number, N: number = 1): number {
  if (r <= 0) throw new Error('Coil radius r must be positive.');
  return (VACUUM_PERMEABILITY_MU_0 * N * Math.abs(I)) / (2 * r);
}

/**
 * Calculates magnetic field inside an ideal long solenoid:
 * B = μ₀ * n * I, where n = turns per metre
 */
export function calculateFieldSolenoid(I: number, turnsPerMetre: number): number {
  if (turnsPerMetre < 0) throw new Error('Turns per metre cannot be negative.');
  return VACUUM_PERMEABILITY_MU_0 * turnsPerMetre * Math.abs(I);
}

/**
 * Calculates Earth's vertical field component and total field given horizontal component B_H and dip angle:
 * B_V = B_H * tan(θ), B_total = B_H / cos(θ)
 */
export function calculateEarthFieldComponents(
  B_H: number,
  dipAngleRad: number
): { B_V: number; B_total: number } {
  const B_V = B_H * Math.tan(dipAngleRad);
  const B_total = B_H / Math.cos(dipAngleRad);
  return { B_V, B_total };
}

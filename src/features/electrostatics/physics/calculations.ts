/**
 * Unit 6: Electrostatic Field - Physics Calculations Engine
 * Based on official NIE G.C.E. A/L Physics syllabus and BIPM SI definitions.
 */

// Universal Physical Constants
export const VACUUM_PERMITTIVITY_EPSILON_0 = 8.8541878128e-12; // F/m or C² N⁻¹ m⁻²
export const COULOMB_CONSTANT_K = 1 / (4 * Math.PI * VACUUM_PERMITTIVITY_EPSILON_0); // ≈ 8.98755e9 N m² C⁻²
export const ELEMENTARY_CHARGE_E = 1.602176634e-19; // C
export const ELECTRON_MASS_KG = 9.1093837e-31; // kg
export const PROTON_MASS_KG = 1.67262192e-27; // kg

/**
 * Calculates Coulomb electrostatic force between two point charges.
 * F = (1 / 4πε₀εᵣ) * |q₁ q₂| / r²
 */
export function calculateCoulombForce(
  q1: number,
  q2: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (r <= 0) throw new Error('Distance r must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  const k = COULOMB_CONSTANT_K / relativePermittivity;
  return (k * Math.abs(q1 * q2)) / (r * r);
}

/**
 * Calculates electric field strength at distance r from a point charge Q.
 * E = (1 / 4πε₀εᵣ) * Q / r²
 */
export function calculateElectricField(
  Q: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (r <= 0) throw new Error('Distance r must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  const k = COULOMB_CONSTANT_K / relativePermittivity;
  return (k * Q) / (r * r);
}

/**
 * Calculates electric potential V at distance r from a point charge Q.
 * V = (1 / 4πε₀εᵣ) * Q / r
 */
export function calculateElectricPotential(
  Q: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (r <= 0) throw new Error('Distance r must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  const k = COULOMB_CONSTANT_K / relativePermittivity;
  return (k * Q) / r;
}

/**
 * Calculates electric potential energy U of two point charges separated by r.
 * U = (1 / 4πε₀εᵣ) * (q₁ q₂) / r
 */
export function calculatePotentialEnergy(
  q1: number,
  q2: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (r <= 0) throw new Error('Distance r must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  const k = COULOMB_CONSTANT_K / relativePermittivity;
  return (k * q1 * q2) / r;
}

/**
 * Calculates work done by external agent moving a charge q between two potentials.
 * W = q * (V₂ - V₁) = q * ΔV
 */
export function calculateWorkInElectricField(q: number, V1: number, V2: number): number {
  return q * (V2 - V1);
}

/**
 * Calculates uniform electric field between parallel plates separated by distance d with voltage V.
 * E = V / d
 */
export function calculateUniformFieldBetweenPlates(voltage: number, distance: number): number {
  if (distance <= 0) throw new Error('Distance d must be positive.');
  return voltage / distance;
}

/**
 * Calculates parallel-plate capacitance C = ε₀ εᵣ A / d.
 */
export function calculateParallelPlateCapacitance(
  area: number,
  distance: number,
  relativePermittivity: number = 1.0
): number {
  if (area <= 0) throw new Error('Plate area must be positive.');
  if (distance <= 0) throw new Error('Plate separation d must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  return (VACUUM_PERMITTIVITY_EPSILON_0 * relativePermittivity * area) / distance;
}

/**
 * Calculates equivalent capacitance for capacitors in series:
 * 1 / C_s = 1/C₁ + 1/C₂ + ... + 1/Cₙ
 */
export function calculateEquivalentCapacitanceSeries(capacitances: number[]): number {
  if (capacitances.length === 0) return 0;
  for (const c of capacitances) {
    if (c <= 0) throw new Error('All capacitances must be positive.');
  }

  const reciprocalSum = capacitances.reduce((sum, c) => sum + 1 / c, 0);
  return 1 / reciprocalSum;
}

/**
 * Calculates equivalent capacitance for capacitors in parallel:
 * C_p = C₁ + C₂ + ... + Cₙ
 */
export function calculateEquivalentCapacitanceParallel(capacitances: number[]): number {
  if (capacitances.length === 0) return 0;
  for (const c of capacitances) {
    if (c <= 0) throw new Error('All capacitances must be positive.');
  }

  return capacitances.reduce((sum, c) => sum + c, 0);
}

/**
 * Calculates energy stored in a capacitor from capacitance C and voltage V:
 * U = 1/2 * C * V²
 */
export function calculateCapacitorEnergy(C: number, V: number): number {
  if (C < 0) throw new Error('Capacitance cannot be negative.');
  return 0.5 * C * V * V;
}

/**
 * Calculates energy stored in a capacitor from charge Q and capacitance C:
 * U = Q² / (2C)
 */
export function calculateCapacitorEnergyFromCharge(Q: number, C: number): number {
  if (C <= 0) throw new Error('Capacitance must be positive.');
  return (Q * Q) / (2 * C);
}

/**
 * Calculates energy stored in a capacitor from charge Q and voltage V:
 * U = 1/2 * Q * V
 */
export function calculateCapacitorEnergyFromChargeAndVoltage(Q: number, V: number): number {
  return 0.5 * Q * V;
}

/**
 * Calculates electrostatic energy density in an electric field:
 * u = 1/2 * ε₀ εᵣ E²  (J/m³)
 */
export function calculateEnergyDensity(E: number, relativePermittivity: number = 1.0): number {
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');
  return 0.5 * VACUUM_PERMITTIVITY_EPSILON_0 * relativePermittivity * E * E;
}

/**
 * Calculates capacitance of an isolated spherical conductor of radius R:
 * C = 4πε₀εᵣ R
 */
export function calculateSphericalConductorCapacitance(
  radius: number,
  relativePermittivity: number = 1.0
): number {
  if (radius <= 0) throw new Error('Radius must be positive.');
  if (relativePermittivity <= 0) throw new Error('Relative permittivity must be positive.');

  return (4 * Math.PI * VACUUM_PERMITTIVITY_EPSILON_0 * relativePermittivity) * radius;
}

/**
 * Calculates electric field inside and outside a charged conducting sphere of radius R:
 * r < R: E = 0
 * r >= R: E = (1 / 4πε₀εᵣ) * Q / r²
 */
export function calculateFieldConductingSphere(
  Q: number,
  radius: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (radius <= 0) throw new Error('Sphere radius must be positive.');
  if (r < 0) throw new Error('Distance r cannot be negative.');
  if (r < radius) return 0; // Shielded inside conductor

  return calculateElectricField(Q, r, relativePermittivity);
}

/**
 * Calculates electric potential inside and outside a charged conducting sphere of radius R:
 * r <= R: V = (1 / 4πε₀εᵣ) * Q / R (constant throughout volume)
 * r > R:  V = (1 / 4πε₀εᵣ) * Q / r
 */
export function calculatePotentialConductingSphere(
  Q: number,
  radius: number,
  r: number,
  relativePermittivity: number = 1.0
): number {
  if (radius <= 0) throw new Error('Sphere radius must be positive.');
  if (r < 0) throw new Error('Distance r cannot be negative.');

  const effectiveRadius = Math.max(radius, r);
  return calculateElectricPotential(Q, effectiveRadius, relativePermittivity);
}

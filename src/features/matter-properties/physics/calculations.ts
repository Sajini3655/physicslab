/**
 * Pure physics calculations for Unit 10: Mechanical Properties of Matter
 * Covers Competencies 10.1 (Elasticity), 10.2 (Viscosity), and 10.3 (Surface Tension).
 */

// ============================================================================
// Competency 10.1: Elasticity of Solids & Young's Modulus
// ============================================================================

/**
 * Calculates tensile stress: σ = F / A (Pa or N m^-2).
 */
export function calculateStress(force: number, area: number): number {
  if (area <= 0) return 0;
  return force / area;
}

/**
 * Calculates tensile strain: ε = ΔL / L (dimensionless).
 */
export function calculateStrain(extension: number, originalLength: number): number {
  if (originalLength <= 0) return 0;
  return extension / originalLength;
}

/**
 * Calculates Young's modulus: Y = (F * L) / (A * ΔL) (Pa or N m^-2).
 */
export function calculateYoungModulus(
  force: number,
  originalLength: number,
  area: number,
  extension: number
): number {
  if (area <= 0 || extension <= 0) return 0;
  return (force * originalLength) / (area * extension);
}

/**
 * Calculates extension of a circular cylindrical wire: ΔL = (4 * F * L) / (π * d^2 * Y) (m).
 */
export function calculateWireExtension(
  force: number,
  originalLength: number,
  diameter: number,
  youngModulus: number
): number {
  if (diameter <= 0 || youngModulus <= 0) return 0;
  const area = (Math.PI * Math.pow(diameter, 2)) / 4;
  return (force * originalLength) / (area * youngModulus);
}

/**
 * Calculates elastic potential energy (strain energy): U = 0.5 * F * ΔL (J).
 */
export function calculateStrainEnergy(force: number, extension: number): number {
  return 0.5 * force * extension;
}

/**
 * Calculates strain energy density (energy per unit volume): u = 0.5 * Y * ε^2 (J m^-3).
 */
export function calculateEnergyDensity(youngModulus: number, strain: number): number {
  return 0.5 * youngModulus * Math.pow(strain, 2);
}

// ============================================================================
// Competency 10.2: Viscosity of Fluids & Stokes' Law
// ============================================================================

/**
 * Calculates Newton's viscous force between parallel fluid layers: F = η * A * (dv/dx) (N).
 */
export function calculateViscousForce(
  viscosity: number,
  area: number,
  velocityGradient: number
): number {
  return viscosity * area * velocityGradient;
}

/**
 * Calculates volume flow rate of a viscous fluid through a cylindrical tube (Poiseuille's Law):
 * Q = (π * P * r^4) / (8 * η * L) (m^3 s^-1).
 */
export function calculatePoiseuilleFlowRate(
  pressureDifference: number,
  radius: number,
  viscosity: number,
  length: number
): number {
  if (viscosity <= 0 || length <= 0) return 0;
  return (Math.PI * pressureDifference * Math.pow(radius, 4)) / (8 * viscosity * length);
}

/**
 * Calculates Stokes' viscous drag force on a spherical body: F_d = 6 * π * η * r * v (N).
 */
export function calculateStokesDragForce(
  viscosity: number,
  radius: number,
  velocity: number
): number {
  return 6 * Math.PI * viscosity * radius * velocity;
}

/**
 * Calculates terminal velocity of a falling sphere in a viscous liquid:
 * v_t = [2 * r^2 * (ρ - σ) * g] / [9 * η] (m s^-1).
 * where ρ is sphere density and σ is liquid density.
 */
export function calculateTerminalVelocity(
  radius: number,
  sphereDensity: number,
  liquidDensity: number,
  viscosity: number,
  g = 9.8
): number {
  if (viscosity <= 0 || radius <= 0) return 0;
  const deltaDensity = sphereDensity - liquidDensity;
  return (2 * Math.pow(radius, 2) * deltaDensity * g) / (9 * viscosity);
}

/**
 * Calculates liquid viscosity from observed terminal velocity:
 * η = [2 * r^2 * (ρ - σ) * g] / [9 * v_t] (Pa s).
 */
export function calculateViscosityFromTerminalVelocity(
  radius: number,
  sphereDensity: number,
  liquidDensity: number,
  terminalVelocity: number,
  g = 9.8
): number {
  if (terminalVelocity <= 0 || radius <= 0) return 0;
  const deltaDensity = sphereDensity - liquidDensity;
  return (2 * Math.pow(radius, 2) * deltaDensity * g) / (9 * terminalVelocity);
}

// ============================================================================
// Competency 10.3: Surface Tension & Capillary Action
// ============================================================================

/**
 * Calculates surface tension force along a single contact line of length L: F = γ * L (N).
 */
export function calculateSurfaceTensionForce(surfaceTension: number, length: number): number {
  return surfaceTension * length;
}

/**
 * Calculates excess pressure inside a spherical liquid drop: ΔP = 2γ / R (Pa).
 */
export function calculateExcessPressureDrop(surfaceTension: number, radius: number): number {
  if (radius <= 0) return 0;
  return (2 * surfaceTension) / radius;
}

/**
 * Calculates excess pressure inside a hollow soap bubble (2 liquid-air surfaces): ΔP = 4γ / R (Pa).
 */
export function calculateExcessPressureBubble(surfaceTension: number, radius: number): number {
  if (radius <= 0) return 0;
  return (4 * surfaceTension) / radius;
}

/**
 * Calculates capillary rise in a narrow circular tube (Jurin's Law):
 * h = (2 * γ * cos(θ)) / (ρ * g * r) (m).
 */
export function calculateCapillaryRise(
  surfaceTension: number,
  contactAngleRad: number,
  liquidDensity: number,
  radius: number,
  g = 9.8
): number {
  if (liquidDensity <= 0 || radius <= 0) return 0;
  return (2 * surfaceTension * Math.cos(contactAngleRad)) / (liquidDensity * g * radius);
}

/**
 * Calculates surface tension from capillary rise measurement:
 * γ = (h * r * ρ * g) / [2 * cos(θ)] (N m^-1).
 */
export function calculateSurfaceTensionFromCapillaryRise(
  height: number,
  radius: number,
  liquidDensity: number,
  contactAngleRad = 0,
  g = 9.8
): number {
  const cosTheta = Math.cos(contactAngleRad);
  if (cosTheta <= 0) return 0;
  return (height * radius * liquidDensity * g) / (2 * cosTheta);
}

/**
 * Unit 8: Current Electricity - Physics Calculations Engine
 * Based on official NIE G.C.E. A/L Physics syllabus and BIPM SI definitions.
 */

export const ELEMENTARY_CHARGE_E = 1.602176634e-19; // C
export const COPPER_ELECTRON_DENSITY = 8.49e28; // m⁻³
export const COPPER_RESISTIVITY_20C = 1.68e-8; // Ω m

/**
 * Calculates drift velocity of charge carriers in a conductor:
 * v_d = I / (n * A * q)
 */
export function calculateDriftVelocity(
  current: number,
  carrierDensity: number,
  crossSectionArea: number,
  carrierCharge: number = ELEMENTARY_CHARGE_E
): number {
  if (carrierDensity <= 0) throw new Error('Carrier density n must be positive.');
  if (crossSectionArea <= 0) throw new Error('Cross-sectional area A must be positive.');
  if (carrierCharge === 0) throw new Error('Carrier charge cannot be zero.');

  return Math.abs(current) / (carrierDensity * crossSectionArea * Math.abs(carrierCharge));
}

/**
 * Calculates current density J = I / A (A m⁻²)
 */
export function calculateCurrentDensity(current: number, crossSectionArea: number): number {
  if (crossSectionArea <= 0) throw new Error('Cross-sectional area A must be positive.');
  return current / crossSectionArea;
}

/**
 * Calculates electrical resistance from resistivity, length, and area:
 * R = (ρ * l) / A
 */
export function calculateResistanceFromResistivity(
  resistivity: number,
  length: number,
  crossSectionArea: number
): number {
  if (resistivity < 0) throw new Error('Resistivity ρ cannot be negative.');
  if (length <= 0) throw new Error('Length l must be positive.');
  if (crossSectionArea <= 0) throw new Error('Cross-sectional area A must be positive.');

  return (resistivity * length) / crossSectionArea;
}

/**
 * Calculates resistance at temperature θ given base resistance R₀ and temperature coefficient α:
 * R_θ = R₀ * (1 + α * Δθ)
 */
export function calculateResistanceWithTemperature(
  R0: number,
  alpha: number,
  deltaTempC: number
): number {
  if (R0 < 0) throw new Error('Base resistance R0 cannot be negative.');
  return R0 * (1 + alpha * deltaTempC);
}

/**
 * Calculates terminal voltage of a cell delivering current I:
 * V = E - I * r (discharging) or V = E + I * r (charging)
 */
export function calculateTerminalVoltage(
  emf: number,
  internalResistance: number,
  current: number,
  isCharging: boolean = false
): number {
  if (internalResistance < 0) throw new Error('Internal resistance r cannot be negative.');
  return isCharging
    ? emf + Math.abs(current) * internalResistance
    : emf - Math.abs(current) * internalResistance;
}

/**
 * Calculates maximum electrical power delivered to a load resistor:
 * Occurs when R_load = r, giving P_max = E² / (4 * r)
 */
export function calculateMaxPowerTransfer(emf: number, internalResistance: number): number {
  if (internalResistance <= 0) throw new Error('Internal resistance r must be positive.');
  return (emf * emf) / (4 * internalResistance);
}

/**
 * Calculates equivalent resistance of resistors in series:
 * R_eq = Σ R_i
 */
export function calculateSeriesResistance(resistors: number[]): number {
  if (resistors.length === 0) return 0;
  return resistors.reduce((sum, r) => {
    if (r < 0) throw new Error('Resistance cannot be negative.');
    return sum + r;
  }, 0);
}

/**
 * Calculates equivalent resistance of resistors in parallel:
 * 1 / R_eq = Σ (1 / R_i)
 */
export function calculateParallelResistance(resistors: number[]): number {
  if (resistors.length === 0) return 0;
  let recipSum = 0;
  for (const r of resistors) {
    if (r <= 0) throw new Error('Resistor value in parallel must be positive and non-zero.');
    recipSum += 1 / r;
  }
  return 1 / recipSum;
}

/**
 * Calculates output voltage of a two-resistor potential divider:
 * V_out = V_in * (R2 / (R1 + R2))
 */
export function calculatePotentialDividerVoltage(
  vin: number,
  r1: number,
  r2: number
): number {
  if (r1 < 0 || r2 < 0) throw new Error('Resistors cannot be negative.');
  if (r1 + r2 === 0) throw new Error('Total resistance cannot be zero.');
  return vin * (r2 / (r1 + r2));
}

/**
 * Calculates unknown EMF using potentiometer balance length:
 * E2 = E1 * (l2 / l1)
 */
export function calculatePotentiometerEmf(E1: number, l1: number, l2: number): number {
  if (l1 <= 0) throw new Error('Balance length l1 must be positive.');
  if (l2 < 0) throw new Error('Balance length l2 cannot be negative.');
  return E1 * (l2 / l1);
}

/**
 * Calculates internal resistance of a cell using potentiometer:
 * r = R_shunt * ((l0 - l) / l)
 */
export function calculatePotentiometerInternalResistance(
  l0_openCircuit: number,
  l_shunted: number,
  shuntResistance: number
): number {
  if (l_shunted <= 0) throw new Error('Shunted balance length must be positive.');
  if (l0_openCircuit < l_shunted)
    throw new Error('Open circuit balance length l0 must be greater than or equal to shunted length l.');
  if (shuntResistance <= 0) throw new Error('Shunt resistance must be positive.');

  return shuntResistance * ((l0_openCircuit - l_shunted) / l_shunted);
}

/**
 * Calculates unknown resistance S in a balanced Wheatstone Bridge:
 * P / Q = R / S  =>  S = (Q * R) / P
 */
export function calculateWheatstoneBridgeUnknown(P: number, Q: number, R: number): number {
  if (P <= 0) throw new Error('Resistor P must be positive.');
  if (Q <= 0 || R <= 0) throw new Error('Resistors Q and R must be positive.');
  return (Q * R) / P;
}

/**
 * Calculates motional EMF across a conductor moving through a perpendicular magnetic field:
 * E = B * l * v
 */
export function calculateMotionalEmf(B: number, length: number, velocity: number): number {
  return Math.abs(B) * Math.abs(length) * Math.abs(velocity);
}

/**
 * Calculates induced EMF via Faraday's Law:
 * E = -N * (ΔΦ / Δt)
 */
export function calculateFaradayInducedEmf(
  N: number,
  deltaFluxWb: number,
  deltaTimeSec: number
): number {
  if (deltaTimeSec <= 0) throw new Error('Time interval must be positive.');
  return -N * (deltaFluxWb / deltaTimeSec);
}

/**
 * Converts peak sinusoidal voltage to RMS voltage:
 * V_rms = V_peak / √2 ≈ 0.7071 * V_peak
 */
export function calculateRmsVoltage(vPeak: number): number {
  return Math.abs(vPeak) / Math.SQRT2;
}

/**
 * Converts RMS voltage to peak voltage:
 * V_peak = V_rms * √2
 */
export function calculatePeakVoltage(vRms: number): number {
  return Math.abs(vRms) * Math.SQRT2;
}

/**
 * Calculates secondary voltage of an ideal transformer:
 * V_s = V_p * (N_s / N_p)
 */
export function calculateTransformerSecondaryVoltage(
  Vp: number,
  Np: number,
  Ns: number
): number {
  if (Np <= 0) throw new Error('Primary turns Np must be positive.');
  if (Ns < 0) throw new Error('Secondary turns Ns cannot be negative.');
  return Vp * (Ns / Np);
}

/**
 * Calculates transformer efficiency:
 * η = (P_out / P_in) * 100% = ((V_s * I_s) / (V_p * I_p)) * 100%
 */
export function calculateTransformerEfficiency(
  Vs: number,
  Is: number,
  Vp: number,
  Ip: number
): number {
  const pin = Vp * Ip;
  if (pin <= 0) throw new Error('Input power must be positive.');
  const pout = Vs * Is;
  return (pout / pin) * 100;
}

/**
 * Unit 9: Electronics - Physics Calculations Engine
 * Based on official NIE G.C.E. A/L Physics syllabus and standard circuit analysis.
 */

export const SILICON_BARRIER_POTENTIAL = 0.7; // V
export const GERMANIUM_BARRIER_POTENTIAL = 0.3; // V

/**
 * Calculates dynamic resistance of a diode:
 * r_d = ΔV / ΔI
 */
export function calculateDynamicResistance(deltaV: number, deltaI: number): number {
  if (deltaI <= 0) throw new Error('Change in current deltaI must be positive.');
  return deltaV / deltaI;
}

/**
 * Calculates DC output voltage of an unfiltered full-wave bridge rectifier:
 * V_dc = (2 * (V_peak - 2 * V_diode)) / π
 */
export function calculateFullWaveBridgeDcVoltage(
  vPeak: number,
  diodeDrop: number = SILICON_BARRIER_POTENTIAL
): number {
  const vEffectivePeak = Math.max(0, vPeak - 2 * diodeDrop);
  return (2 * vEffectivePeak) / Math.PI;
}

/**
 * Calculates peak-to-peak ripple voltage of a full-wave rectifier with capacitor filter:
 * V_ripple = I_dc / (2 * f * C)
 */
export function calculateFullWaveRippleVoltage(
  iDc: number,
  frequencyHz: number,
  capacitanceFarads: number
): number {
  if (frequencyHz <= 0) throw new Error('Frequency must be positive.');
  if (capacitanceFarads <= 0) throw new Error('Capacitance must be positive.');
  return iDc / (2 * frequencyHz * capacitanceFarads);
}

/**
 * Calculates transistor emitter current from base and collector currents:
 * I_E = I_B + I_C
 */
export function calculateTransistorEmitterCurrent(Ib: number, Ic: number): number {
  return Ib + Ic;
}

/**
 * Calculates DC current gain beta (h_FE):
 * β = I_C / I_B
 */
export function calculateTransistorBeta(Ic: number, Ib: number): number {
  if (Ib <= 0) throw new Error('Base current Ib must be positive.');
  return Ic / Ib;
}

/**
 * Calculates alpha (common base current gain) from beta:
 * α = β / (β + 1)
 */
export function calculateTransistorAlpha(beta: number): number {
  if (beta <= 0) throw new Error('Beta must be positive.');
  return beta / (beta + 1);
}

/**
 * Calculates Common-Emitter (CE) transistor collector-emitter voltage:
 * V_CE = V_CC - I_C * R_C
 */
export function calculateTransistorVce(Vcc: number, Ic: number, Rc: number): number {
  const vce = Vcc - Ic * Rc;
  return Math.max(0, vce); // Clipped at saturation (~0.2 V practically, >=0 V)
}

/**
 * Calculates voltage gain of a Common-Emitter (CE) amplifier:
 * A_v = -β * (R_C / R_in)
 */
export function calculateCeAmplifierVoltageGain(
  beta: number,
  Rc: number,
  Rin: number
): number {
  if (Rin <= 0) throw new Error('Input resistance Rin must be positive.');
  return -beta * (Rc / Rin);
}

/**
 * Calculates closed-loop voltage gain of an inverting Op-Amp amplifier:
 * A_v = -R_f / R_in
 */
export function calculateInvertingOpAmpGain(Rf: number, Rin: number): number {
  if (Rin <= 0) throw new Error('Input resistor Rin must be positive.');
  if (Rf < 0) throw new Error('Feedback resistor Rf cannot be negative.');
  return -Rf / Rin;
}

/**
 * Calculates output voltage of an inverting Op-Amp with rail saturation clipping:
 * V_out = clip(-V_in * (R_f / R_in), -V_sat, +V_sat)
 */
export function calculateInvertingOpAmpOutput(
  Vin: number,
  Rf: number,
  Rin: number,
  Vsat: number = 14.0
): number {
  const idealVout = Vin * calculateInvertingOpAmpGain(Rf, Rin);
  return Math.max(-Vsat, Math.min(Vsat, idealVout));
}

/**
 * Calculates closed-loop voltage gain of a non-inverting Op-Amp amplifier:
 * A_v = 1 + (R_f / R_1)
 */
export function calculateNonInvertingOpAmpGain(Rf: number, R1: number): number {
  if (R1 <= 0) throw new Error('Resistor R1 must be positive.');
  if (Rf < 0) throw new Error('Feedback resistor Rf cannot be negative.');
  return 1 + Rf / R1;
}

/**
 * Calculates output voltage of a non-inverting Op-Amp with rail saturation clipping:
 * V_out = clip(V_in * (1 + R_f / R_1), -V_sat, +V_sat)
 */
export function calculateNonInvertingOpAmpOutput(
  Vin: number,
  Rf: number,
  R1: number,
  Vsat: number = 14.0
): number {
  const idealVout = Vin * calculateNonInvertingOpAmpGain(Rf, R1);
  return Math.max(-Vsat, Math.min(Vsat, idealVout));
}

/**
 * Evaluates basic digital logic gates:
 */
export function evaluateLogicGate(
  gateType: 'NOT' | 'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR' | 'XNOR',
  inputs: [boolean, boolean?]
): boolean {
  const [a, b = false] = inputs;
  switch (gateType) {
    case 'NOT':
      return !a;
    case 'AND':
      return a && b;
    case 'OR':
      return a || b;
    case 'NAND':
      return !(a && b);
    case 'NOR':
      return !(a || b);
    case 'XOR':
      return a !== b;
    case 'XNOR':
      return a === b;
    default:
      throw new Error(`Unsupported logic gate type: ${gateType}`);
  }
}

import { describe, it, expect } from 'vitest';
import {
  calculateDynamicResistance,
  calculateFullWaveBridgeDcVoltage,
  calculateFullWaveRippleVoltage,
  calculateTransistorEmitterCurrent,
  calculateTransistorBeta,
  calculateTransistorAlpha,
  calculateTransistorVce,
  calculateCeAmplifierVoltageGain,
  calculateInvertingOpAmpGain,
  calculateInvertingOpAmpOutput,
  calculateNonInvertingOpAmpGain,
  calculateNonInvertingOpAmpOutput,
  evaluateLogicGate,
} from '../physics/calculations';

describe('Unit 9: Electronics - Physics Calculations Engine', () => {
  it('calculates dynamic resistance r_d = ΔV / ΔI', () => {
    // ΔV = 0.05 V (50 mV), ΔI = 2.5 mA (0.0025 A) => r_d = 20 Ω
    const rd = calculateDynamicResistance(0.05, 0.0025);
    expect(rd).toBe(20);
  });

  it('calculates full-wave bridge DC output voltage with silicon diode drops', () => {
    // V_peak = 15.4 V, 2 diode drops = 1.4 V => V_eff_peak = 14.0 V
    // V_dc = 2 * 14 / π ≈ 8.91 V
    const vdc = calculateFullWaveBridgeDcVoltage(15.4, 0.7);
    expect(vdc).toBeCloseTo(8.91, 2);
  });

  it('calculates ripple voltage of a full-wave rectifier with capacitor filter', () => {
    // I_dc = 0.1 A (100 mA), f = 50 Hz, C = 1000 μF (1e-3 F)
    // V_ripple = 0.1 / (2 * 50 * 1e-3) = 0.1 / 0.1 = 1.0 V
    const vRipple = calculateFullWaveRippleVoltage(0.1, 50, 1e-3);
    expect(vRipple).toBe(1.0);
  });

  it('calculates transistor currents, beta, and alpha relations', () => {
    const Ib = 20e-6; // 20 μA
    const Ic = 2.0e-3; // 2 mA
    const Ie = calculateTransistorEmitterCurrent(Ib, Ic);
    expect(Ie).toBe(2.02e-3);

    const beta = calculateTransistorBeta(Ic, Ib);
    expect(beta).toBe(100);

    const alpha = calculateTransistorAlpha(beta);
    // α = 100 / 101 ≈ 0.9901
    expect(alpha).toBeCloseTo(0.9901, 4);
  });

  it('calculates CE amplifier V_ce and voltage gain', () => {
    // Vcc = 12 V, Ic = 2 mA, Rc = 3 kΩ => Vce = 12 - (2mA * 3kΩ) = 6 V
    const vce = calculateTransistorVce(12, 2e-3, 3000);
    expect(vce).toBe(6);

    // β = 100, Rc = 3000 Ω, Rin = 1500 Ω => Av = -100 * (3000 / 1500) = -200
    const gain = calculateCeAmplifierVoltageGain(100, 3000, 1500);
    expect(gain).toBe(-200);
  });

  it('calculates inverting Op-Amp closed-loop gain and output with rail clipping', () => {
    // Rf = 50 kΩ, Rin = 10 kΩ => Av = -5
    const gain = calculateInvertingOpAmpGain(50000, 10000);
    expect(gain).toBe(-5);

    // Vin = 2 V => Vout = -10 V (within ±14V rails)
    const voutNormal = calculateInvertingOpAmpOutput(2.0, 50000, 10000, 14.0);
    expect(voutNormal).toBe(-10);

    // Vin = 4 V => ideal -20 V, clipped at -14 V
    const voutClipped = calculateInvertingOpAmpOutput(4.0, 50000, 10000, 14.0);
    expect(voutClipped).toBe(-14);
  });

  it('calculates non-inverting Op-Amp closed-loop gain and output', () => {
    // Rf = 40 kΩ, R1 = 10 kΩ => Av = 1 + 4 = 5
    const gain = calculateNonInvertingOpAmpGain(40000, 10000);
    expect(gain).toBe(5);

    // Vin = 1.5 V => Vout = 7.5 V
    const vout = calculateNonInvertingOpAmpOutput(1.5, 40000, 10000, 14.0);
    expect(vout).toBe(7.5);
  });

  it('evaluates digital logic gates according to standard Boolean truth tables', () => {
    expect(evaluateLogicGate('NOT', [true])).toBe(false);
    expect(evaluateLogicGate('NOT', [false])).toBe(true);

    expect(evaluateLogicGate('AND', [true, true])).toBe(true);
    expect(evaluateLogicGate('AND', [true, false])).toBe(false);

    expect(evaluateLogicGate('OR', [false, false])).toBe(false);
    expect(evaluateLogicGate('OR', [true, false])).toBe(true);

    expect(evaluateLogicGate('NAND', [true, true])).toBe(false);
    expect(evaluateLogicGate('NAND', [true, false])).toBe(true);

    expect(evaluateLogicGate('NOR', [false, false])).toBe(true);
    expect(evaluateLogicGate('NOR', [true, false])).toBe(false);

    expect(evaluateLogicGate('XOR', [true, false])).toBe(true);
    expect(evaluateLogicGate('XOR', [true, true])).toBe(false);

    expect(evaluateLogicGate('XNOR', [true, true])).toBe(true);
    expect(evaluateLogicGate('XNOR', [true, false])).toBe(false);
  });
});

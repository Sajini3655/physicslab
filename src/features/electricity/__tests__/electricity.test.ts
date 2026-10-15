import { describe, it, expect } from 'vitest';
import {
  calculateDriftVelocity,
  calculateCurrentDensity,
  calculateResistanceFromResistivity,
  calculateResistanceWithTemperature,
  calculateTerminalVoltage,
  calculateMaxPowerTransfer,
  calculateSeriesResistance,
  calculateParallelResistance,
  calculatePotentialDividerVoltage,
  calculatePotentiometerEmf,
  calculatePotentiometerInternalResistance,
  calculateWheatstoneBridgeUnknown,
  calculateMotionalEmf,
  calculateFaradayInducedEmf,
  calculateRmsVoltage,
  calculatePeakVoltage,
  calculateTransformerSecondaryVoltage,
  calculateTransformerEfficiency,
  COPPER_ELECTRON_DENSITY,
  ELEMENTARY_CHARGE_E,
} from '../physics/calculations';

describe('Unit 8: Current Electricity - Physics Calculations Engine', () => {
  it('calculates drift velocity correctly using I = n A v_d e', () => {
    // Current 2 A in 1 mm² copper wire
    const area = 1e-6; // 1 mm²
    const current = 2.0;
    const vd = calculateDriftVelocity(current, COPPER_ELECTRON_DENSITY, area, ELEMENTARY_CHARGE_E);
    // vd = 2 / (8.49e28 * 1e-6 * 1.602e-19) ≈ 1.47e-4 m/s
    expect(vd).toBeCloseTo(1.47e-4, 5);
  });

  it('calculates current density J = I / A', () => {
    const J = calculateCurrentDensity(5.0, 2e-6);
    expect(J).toBe(2.5e6);
  });

  it('calculates resistance from resistivity: R = ρ l / A', () => {
    // Copper wire 10 m long, 1 mm² area, ρ = 1.68e-8
    const R = calculateResistanceFromResistivity(1.68e-8, 10.0, 1e-6);
    expect(R).toBeCloseTo(0.168, 4);
  });

  it('calculates temperature dependence: R_θ = R₀ (1 + α Δθ)', () => {
    // R0 = 100 Ω, α = 0.004 K⁻¹, Δθ = 50°C
    const R = calculateResistanceWithTemperature(100, 0.004, 50);
    expect(R).toBe(120);
  });

  it('calculates terminal voltage during discharge and charge', () => {
    // E = 12 V, r = 0.5 Ω, I = 4 A
    const vDischarge = calculateTerminalVoltage(12, 0.5, 4, false);
    expect(vDischarge).toBe(10); // 12 - 4*0.5 = 10 V

    const vCharge = calculateTerminalVoltage(12, 0.5, 4, true);
    expect(vCharge).toBe(14); // 12 + 4*0.5 = 14 V
  });

  it('calculates maximum power transfer when R_load = r', () => {
    // E = 20 V, r = 5 Ω => P_max = E² / (4r) = 400 / 20 = 20 W
    const pmax = calculateMaxPowerTransfer(20, 5);
    expect(pmax).toBe(20);
  });

  it('calculates equivalent series and parallel resistances', () => {
    const series = calculateSeriesResistance([10, 20, 30]);
    expect(series).toBe(60);

    // Parallel 10 Ω, 20 Ω, 20 Ω => 1/10 + 1/20 + 1/20 = 0.2 => 5 Ω
    const parallel = calculateParallelResistance([10, 20, 20]);
    expect(parallel).toBeCloseTo(5, 5);
  });

  it('calculates potential divider output voltage', () => {
    // Vin = 12 V, R1 = 4 kΩ, R2 = 8 kΩ => Vout = 12 * (8 / 12) = 8 V
    const vout = calculatePotentialDividerVoltage(12, 4000, 8000);
    expect(vout).toBe(8);
  });

  it('calculates unknown EMF via potentiometer balance ratio', () => {
    // E1 = 2.0 V, l1 = 60 cm, l2 = 45 cm => E2 = 2.0 * (45/60) = 1.5 V
    const E2 = calculatePotentiometerEmf(2.0, 60, 45);
    expect(E2).toBe(1.5);
  });

  it('calculates cell internal resistance via potentiometer method', () => {
    // l0 = 80 cm, l = 60 cm, R_shunt = 12 Ω
    // r = 12 * (80 - 60) / 60 = 12 * (20/60) = 4 Ω
    const r = calculatePotentiometerInternalResistance(80, 60, 12);
    expect(r).toBe(4);
  });

  it('calculates Wheatstone bridge balance resistor', () => {
    // P = 100 Ω, Q = 200 Ω, R = 150 Ω => S = (200 * 150) / 100 = 300 Ω
    const S = calculateWheatstoneBridgeUnknown(100, 200, 150);
    expect(S).toBe(300);
  });

  it('calculates motional EMF: E = B l v', () => {
    // B = 0.5 T, l = 0.4 m, v = 15 m/s => E = 0.5 * 0.4 * 15 = 3.0 V
    const emf = calculateMotionalEmf(0.5, 0.4, 15);
    expect(emf).toBe(3.0);
  });

  it('calculates Faraday induced EMF: E = -N (ΔΦ / Δt)', () => {
    // N = 500 turns, ΔΦ = -0.02 Wb, Δt = 0.1 s => E = -500 * (-0.02 / 0.1) = 100 V
    const emf = calculateFaradayInducedEmf(500, -0.02, 0.1);
    expect(emf).toBeCloseTo(100, 5);
  });

  it('converts sinusoidal RMS and peak voltages correctly', () => {
    // Peak 325 V => RMS ≈ 230 V
    const rms = calculateRmsVoltage(325.27);
    expect(rms).toBeCloseTo(230, 0);

    const peak = calculatePeakVoltage(230);
    expect(peak).toBeCloseTo(325.27, 1);
  });

  it('calculates transformer secondary voltage and efficiency', () => {
    // Vp = 230 V, Np = 1000, Ns = 100 => Vs = 23 V
    const Vs = calculateTransformerSecondaryVoltage(230, 1000, 100);
    expect(Vs).toBe(23);

    // Pin = 230 V * 0.5 A = 115 W, Pout = 23 V * 4.5 A = 103.5 W => η = (103.5 / 115) * 100 = 90%
    const eff = calculateTransformerEfficiency(23, 4.5, 230, 0.5);
    expect(eff).toBe(90);
  });
});

/**
 * Sri Lankan G.C.E. A/L Physics - Unit 11: Matter and Radiation
 * Pure, deterministic physics calculation engine for quantum, atomic, and nuclear phenomena.
 */

// Fundamental Physical Constants (CODATA 2018 / Sri Lankan A/L standards)
export const PLANCK_CONSTANT = 6.62607015e-34; // J s
export const SPEED_OF_LIGHT = 2.99792458e8; // m/s
export const ELEMENTARY_CHARGE = 1.602176634e-19; // C
export const ELECTRON_MASS = 9.1093837e-31; // kg
export const PROTON_MASS_U = 1.007276; // u
export const NEUTRON_MASS_U = 1.008665; // u
export const ATOMIC_MASS_UNIT_KG = 1.6605390666e-27; // kg
export const MEV_PER_U = 931.494; // MeV/u
export const RYDBERG_CONSTANT = 1.097373e7; // m^-1
export const NUCLEAR_RADIUS_CONSTANT = 1.2e-15; // m (1.2 fm)

/**
 * Calculates photon energy E = h * f (in Joules).
 */
export function calculatePhotonEnergy(frequencyHz: number): number {
  if (frequencyHz < 0) {
    throw new Error('Frequency must be non-negative.');
  }
  return PLANCK_CONSTANT * frequencyHz;
}

/**
 * Calculates photon frequency from wavelength f = c / lambda (in Hz).
 */
export function calculatePhotonFrequency(wavelengthM: number): number {
  if (wavelengthM <= 0) {
    throw new Error('Wavelength must be strictly positive.');
  }
  return SPEED_OF_LIGHT / wavelengthM;
}

/**
 * Calculates photon wavelength from frequency lambda = c / f (in meters).
 */
export function calculatePhotonWavelength(frequencyHz: number): number {
  if (frequencyHz <= 0) {
    throw new Error('Frequency must be strictly positive.');
  }
  return SPEED_OF_LIGHT / frequencyHz;
}

/**
 * Calculates maximum kinetic energy of emitted photoelectrons: K_max = h*f - Phi.
 * If h*f < Phi, returns 0 (no emission).
 */
export function calculatePhotoelectricMaxKE(
  frequencyHz: number,
  workFunctionJ: number
): number {
  if (frequencyHz < 0 || workFunctionJ < 0) {
    throw new Error('Frequency and work function must be non-negative.');
  }
  const photonEnergy = PLANCK_CONSTANT * frequencyHz;
  const maxKE = photonEnergy - workFunctionJ;
  return maxKE > 0 ? maxKE : 0;
}

/**
 * Calculates stopping potential V_s = K_max / e (in Volts).
 */
export function calculateStoppingPotential(maxKEJ: number): number {
  if (maxKEJ <= 0) return 0;
  return maxKEJ / ELEMENTARY_CHARGE;
}

/**
 * Calculates threshold frequency f_0 = Phi / h (in Hz).
 */
export function calculateThresholdFrequency(workFunctionJ: number): number {
  if (workFunctionJ <= 0) {
    throw new Error('Work function must be strictly positive.');
  }
  return workFunctionJ / PLANCK_CONSTANT;
}

/**
 * Calculates threshold wavelength lambda_0 = (h * c) / Phi (in meters).
 */
export function calculateThresholdWavelength(workFunctionJ: number): number {
  if (workFunctionJ <= 0) {
    throw new Error('Work function must be strictly positive.');
  }
  return (PLANCK_CONSTANT * SPEED_OF_LIGHT) / workFunctionJ;
}

/**
 * Calculates de Broglie wavelength lambda = h / p (in meters).
 */
export function calculateDeBroglieWavelength(momentumKgmS: number): number {
  if (momentumKgmS <= 0) {
    throw new Error('Momentum must be strictly positive.');
  }
  return PLANCK_CONSTANT / momentumKgmS;
}

/**
 * Calculates non-relativistic de Broglie wavelength of an electron accelerated through potential V:
 * lambda = h / sqrt(2 * m_e * e * V) (in meters).
 */
export function calculateElectronDeBroglieWavelength(
  acceleratingVoltageV: number
): number {
  if (acceleratingVoltageV <= 0) {
    throw new Error('Accelerating voltage must be strictly positive.');
  }
  const momentum = Math.sqrt(
    2 * ELECTRON_MASS * ELEMENTARY_CHARGE * acceleratingVoltageV
  );
  return PLANCK_CONSTANT / momentum;
}

/**
 * Calculates minimum cutoff wavelength in continuous X-ray spectrum (Duane-Hunt limit):
 * lambda_min = (h * c) / (e * V_a) (in meters).
 */
export function calculateXRayMinWavelength(
  acceleratingVoltageV: number
): number {
  if (acceleratingVoltageV <= 0) {
    throw new Error('Accelerating voltage must be strictly positive.');
  }
  return (
    (PLANCK_CONSTANT * SPEED_OF_LIGHT) /
    (ELEMENTARY_CHARGE * acceleratingVoltageV)
  );
}

/**
 * Calculates Bohr hydrogen energy level E_n = -13.6 / n^2 (in eV).
 */
export function calculateBohrEnergyLevel(n: number): number {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('Principal quantum number n must be a positive integer.');
  }
  return -13.605693 / (n * n);
}

/**
 * Calculates emitted photon wavelength for hydrogen transition from nUpper to nLower:
 * 1 / lambda = R_H * (1/nLower^2 - 1/nUpper^2) (in meters).
 */
export function calculateHydrogenTransitionWavelength(
  nLower: number,
  nUpper: number
): number {
  if (
    !Number.isInteger(nLower) ||
    !Number.isInteger(nUpper) ||
    nLower < 1 ||
    nUpper <= nLower
  ) {
    throw new Error('nUpper must be an integer greater than nLower >= 1.');
  }
  const factor = 1 / (nLower * nLower) - 1 / (nUpper * nUpper);
  const oneOverLambda = RYDBERG_CONSTANT * factor;
  return 1 / oneOverLambda;
}

/**
 * Calculates nuclear radius R = R_0 * A^(1/3) (in meters).
 */
export function calculateNuclearRadius(massNumberA: number): number {
  if (massNumberA < 1) {
    throw new Error('Mass number A must be at least 1.');
  }
  return NUCLEAR_RADIUS_CONSTANT * Math.cbrt(massNumberA);
}

/**
 * Calculates estimated nuclear density rho = M / V (in kg/m^3).
 */
export function calculateNuclearDensity(massNumberA: number): number {
  if (massNumberA < 1) {
    throw new Error('Mass number A must be at least 1.');
  }
  const radius = calculateNuclearRadius(massNumberA);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const massKg = massNumberA * ATOMIC_MASS_UNIT_KG;
  return massKg / volume;
}

/**
 * Calculates mass defect Delta m = [Z * m_p + (A - Z) * m_n] - M_nucleus (in atomic mass units u).
 */
export function calculateMassDefect(
  protonsZ: number,
  nucleonsA: number,
  nucleusMassU: number
): number {
  if (protonsZ < 1 || nucleonsA < protonsZ || nucleusMassU <= 0) {
    throw new Error('Invalid nuclear parameters for mass defect calculation.');
  }
  const neutronsN = nucleonsA - protonsZ;
  const constituentMassU = protonsZ * PROTON_MASS_U + neutronsN * NEUTRON_MASS_U;
  const defect = constituentMassU - nucleusMassU;
  return defect > 0 ? defect : 0;
}

/**
 * Calculates nuclear binding energy in MeV: BE = Delta m * 931.494 MeV/u.
 */
export function calculateBindingEnergyMeV(massDefectU: number): number {
  if (massDefectU < 0) {
    throw new Error('Mass defect cannot be negative.');
  }
  return massDefectU * MEV_PER_U;
}

/**
 * Calculates nuclear binding energy per nucleon: (BE / A) (in MeV/nucleon).
 */
export function calculateBindingEnergyPerNucleonMeV(
  massDefectU: number,
  nucleonsA: number
): number {
  if (nucleonsA < 1) {
    throw new Error('Nucleons A must be at least 1.');
  }
  const totalBE = calculateBindingEnergyMeV(massDefectU);
  return totalBE / nucleonsA;
}

/**
 * Calculates radioactive decay constant lambda = ln(2) / T_1/2 (in s^-1).
 */
export function calculateRadioactiveDecayConstant(halfLifeS: number): number {
  if (halfLifeS <= 0) {
    throw new Error('Half-life must be strictly positive.');
  }
  return Math.LN2 / halfLifeS;
}

/**
 * Calculates remaining fraction of radioactive nuclei N(t) / N_0 = exp(-lambda * t).
 */
export function calculateRemainingFraction(
  decayConstantSInv: number,
  timeS: number
): number {
  if (decayConstantSInv < 0 || timeS < 0) {
    throw new Error('Decay constant and elapsed time must be non-negative.');
  }
  return Math.exp(-decayConstantSInv * timeS);
}

/**
 * Calculates number of remaining radioactive nuclei: N(t) = N_0 * exp(-lambda * t).
 */
export function calculateRemainingNuclei(
  n0: number,
  decayConstantSInv: number,
  timeS: number
): number {
  if (n0 < 0) {
    throw new Error('Initial count n0 must be non-negative.');
  }
  return n0 * calculateRemainingFraction(decayConstantSInv, timeS);
}

/**
 * Calculates instantaneous activity A = lambda * N (in Becquerels / decays per second).
 */
export function calculateActivityBq(
  decayConstantSInv: number,
  currentN: number
): number {
  if (decayConstantSInv < 0 || currentN < 0) {
    throw new Error('Decay constant and nucleus count must be non-negative.');
  }
  return decayConstantSInv * currentN;
}

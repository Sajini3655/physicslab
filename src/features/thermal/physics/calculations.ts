/**
 * Pure physics calculation engine for Unit 4: Thermal Physics (තාප භෞතික විද්‍යාව)
 * Strictly aligned with NIE A/L Physics syllabus competencies (4.1 to 4.5).
 */

export const IDEAL_GAS_CONSTANT_R = 8.314; // J / (mol · K)
export const BOLTZMANN_CONSTANT_K = 1.380649e-23; // J / K
export const AVOGADRO_CONSTANT_NA = 6.02214076e23; // mol^-1
export const STEFAN_BOLTZMANN_SIGMA = 5.670374419e-8; // W / (m^2 · K^4)
export const WIEN_DISPLACEMENT_B = 2.897771955e-3; // m · K
export const SPECIFIC_HEAT_WATER = 4186; // J / (kg · K)
export const SPECIFIC_HEAT_COPPER = 385; // J / (kg · K)

// ============================================================================
// 1. THERMOMETRY & SCALES (COMPETENCY 4.1)
// ============================================================================

/**
 * Calculates Celsius temperature using a linear thermometric property X:
 * t = ((X_t - X_0) / (X_100 - X_0)) * 100 °C
 */
export function calculateTemperatureFromThermometricProperty(
  xT: number,
  x0: number,
  x100: number
): number {
  if (x100 === x0) return 0;
  const t = ((xT - x0) / (x100 - x0)) * 100;
  return Number(t.toFixed(2));
}

/**
 * Celsius to Kelvin: T = t + 273.15
 */
export function celsiusToKelvin(tempC: number): number {
  return Number((tempC + 273.15).toFixed(2));
}

/**
 * Kelvin to Celsius: t = T - 273.15
 */
export function kelvinToCelsius(tempK: number): number {
  return Number((tempK - 273.15).toFixed(2));
}

// ============================================================================
// 2. THERMAL EXPANSION (COMPETENCY 4.2)
// ============================================================================

/**
 * Linear expansion: Delta_L = L0 * alpha * Delta_T
 * L_t = L0 * (1 + alpha * Delta_T)
 */
export function calculateLinearExpansion(
  initialLengthM: number,
  linearExpansivityK: number,
  tempChangeK: number
): { deltaLengthM: number; finalLengthM: number } {
  const delta = initialLengthM * linearExpansivityK * tempChangeK;
  const finalLen = initialLengthM + delta;
  return {
    deltaLengthM: Number(delta.toExponential(4)),
    finalLengthM: Number(finalLen.toFixed(6)),
  };
}

/**
 * Real vs Apparent cubical expansion of liquids:
 * gamma_real = gamma_apparent + gamma_vessel (where gamma_vessel = 3 * alpha_glass)
 */
export function calculateRealLiquidExpansivity(
  apparentExpansivityK: number,
  vesselLinearExpansivityK: number
): number {
  const gammaVessel = 3 * vesselLinearExpansivityK;
  const gammaReal = apparentExpansivityK + gammaVessel;
  return Number(gammaReal.toExponential(4));
}

// ============================================================================
// 3. CALORIMETRY & LATENT HEAT (COMPETENCY 4.3 & PRACTICALS)
// ============================================================================

/**
 * Heat gained or lost: Q = m * c * Delta_T
 */
export function calculateSensibleHeat(
  massKg: number,
  specificHeatJkgK: number,
  tempChangeK: number
): number {
  return Number((massKg * specificHeatJkgK * tempChangeK).toFixed(2));
}

/**
 * Method of mixtures for specific heat capacity of a metal:
 * Heat lost by hot solid = Heat gained by (water + calorimeter)
 * m_s * c_s * (theta_s - theta_f) = (m_w * c_w + m_c * c_c) * (theta_f - theta_i)
 */
export function calculateSpecificHeatCapacityMixture(params: {
  massSolidKg: number;
  initialTempSolidC: number;
  massWaterKg: number;
  massCalorimeterKg: number;
  initialTempWaterCalC: number;
  finalTempMixtureC: number;
  specificHeatWater?: number;
  specificHeatCalorimeter?: number;
}): number {
  const {
    massSolidKg,
    initialTempSolidC,
    massWaterKg,
    massCalorimeterKg,
    initialTempWaterCalC,
    finalTempMixtureC,
    specificHeatWater = SPECIFIC_HEAT_WATER,
    specificHeatCalorimeter = SPECIFIC_HEAT_COPPER,
  } = params;

  const deltaTSolid = initialTempSolidC - finalTempMixtureC;
  const deltaTWaterCal = finalTempMixtureC - initialTempWaterCalC;

  if (massSolidKg <= 0 || deltaTSolid <= 0 || deltaTWaterCal <= 0) return 0;

  const heatGained =
    (massWaterKg * specificHeatWater + massCalorimeterKg * specificHeatCalorimeter) *
    deltaTWaterCal;
  const cSolid = heatGained / (massSolidKg * deltaTSolid);

  return Number(cSolid.toFixed(1));
}

/**
 * Latent heat of fusion of ice by method of mixtures:
 * m_ice * L_f + m_ice * c_w * (theta_f - 0) = (m_w * c_w + m_c * c_c) * (theta_i - theta_f)
 */
export function calculateLatentHeatOfFusion(params: {
  massIceKg: number;
  massWaterKg: number;
  massCalorimeterKg: number;
  initialTempWaterCalC: number;
  finalTempMixtureC: number;
  specificHeatWater?: number;
  specificHeatCalorimeter?: number;
}): number {
  const {
    massIceKg,
    massWaterKg,
    massCalorimeterKg,
    initialTempWaterCalC,
    finalTempMixtureC,
    specificHeatWater = SPECIFIC_HEAT_WATER,
    specificHeatCalorimeter = SPECIFIC_HEAT_COPPER,
  } = params;

  const deltaTCooling = initialTempWaterCalC - finalTempMixtureC;
  if (massIceKg <= 0 || deltaTCooling <= 0) return 0;

  const heatReleased =
    (massWaterKg * specificHeatWater + massCalorimeterKg * specificHeatCalorimeter) *
    deltaTCooling;
  const heatWarmingMeltedIce = massIceKg * specificHeatWater * finalTempMixtureC;

  const lf = (heatReleased - heatWarmingMeltedIce) / massIceKg;
  return Number(lf.toFixed(0)); // J / kg
}

/**
 * Latent heat of vaporization of steam by method of mixtures:
 * m_steam * L_v + m_steam * c_w * (100 - theta_f) = (m_w * c_w + m_c * c_c) * (theta_f - theta_i)
 */
export function calculateLatentHeatOfVaporization(params: {
  massSteamKg: number;
  massWaterKg: number;
  massCalorimeterKg: number;
  initialTempWaterCalC: number;
  finalTempMixtureC: number;
  boilingTempC?: number;
  specificHeatWater?: number;
  specificHeatCalorimeter?: number;
}): number {
  const {
    massSteamKg,
    massWaterKg,
    massCalorimeterKg,
    initialTempWaterCalC,
    finalTempMixtureC,
    boilingTempC = 100.0,
    specificHeatWater = SPECIFIC_HEAT_WATER,
    specificHeatCalorimeter = SPECIFIC_HEAT_COPPER,
  } = params;

  const deltaTWarming = finalTempMixtureC - initialTempWaterCalC;
  const deltaTCoolingCondensate = boilingTempC - finalTempMixtureC;

  if (massSteamKg <= 0 || deltaTWarming <= 0 || deltaTCoolingCondensate <= 0) return 0;

  const heatGained =
    (massWaterKg * specificHeatWater + massCalorimeterKg * specificHeatCalorimeter) *
    deltaTWarming;
  const heatReleasedCondensate = massSteamKg * specificHeatWater * deltaTCoolingCondensate;

  const lv = (heatGained - heatReleasedCondensate) / massSteamKg;
  return Number(lv.toFixed(0)); // J / kg
}

/**
 * Newton's Law of Cooling rate: dTheta/dt = -k * (theta - theta_0)
 */
export function calculateNewtonCoolingRate(
  coolingConstantK: number,
  bodyTempC: number,
  ambientTempC: number
): number {
  if (bodyTempC <= ambientTempC) return 0;
  return Number((coolingConstantK * (bodyTempC - ambientTempC)).toFixed(4)); // °C / s
}

// ============================================================================
// 4. GAS LAWS & KINETIC THEORY (COMPETENCY 4.4)
// ============================================================================

/**
 * Boyle's Law product: P * V = constant
 */
export function verifyBoylesLaw(pressurePa: number, volumeM3: number): number {
  return Number((pressurePa * volumeM3).toFixed(2));
}

/**
 * Ideal Gas Law: P * V = n * R * T
 */
export function calculateIdealGasPressure(
  moles: number,
  volumeM3: number,
  tempKelvin: number
): number {
  if (volumeM3 <= 0 || tempKelvin <= 0) return 0;
  return Number(((moles * IDEAL_GAS_CONSTANT_R * tempKelvin) / volumeM3).toFixed(1));
}

/**
 * Kinetic theory RMS speed: c_rms = sqrt(3 * R * T / M)
 */
export function calculateRootMeanSquareSpeed(
  tempKelvin: number,
  molarMassKgMol: number
): number {
  if (tempKelvin <= 0 || molarMassKgMol <= 0) return 0;
  const c2 = (3 * IDEAL_GAS_CONSTANT_R * tempKelvin) / molarMassKgMol;
  return Number(Math.sqrt(c2).toFixed(2)); // m/s
}

/**
 * Average translational kinetic energy per molecule: E_k = 3/2 * k_B * T
 */
export function calculateTranslationalKEPerMolecule(tempKelvin: number): number {
  if (tempKelvin <= 0) return 0;
  const ke = 1.5 * BOLTZMANN_CONSTANT_K * tempKelvin;
  return Number(ke.toExponential(4)); // Joules
}

// ============================================================================
// 5. HEAT TRANSFER & THERMODYNAMICS (COMPETENCY 4.5)
// ============================================================================

/**
 * Searle's bar thermal conductivity:
 * Rate of heat conducted = Rate of heat gained by cooling water
 * k * A * ((theta1 - theta2) / d) = (m_w * c_w * (theta4 - theta3)) / t
 */
export function calculateThermalConductivitySearle(params: {
  barAreaM2: number;
  thermometerDistanceM: number;
  temp1C: number;
  temp2C: number;
  waterFlowRateKgS: number;
  waterInletTempC: number;
  waterOutletTempC: number;
  specificHeatWater?: number;
}): number {
  const {
    barAreaM2,
    thermometerDistanceM,
    temp1C,
    temp2C,
    waterFlowRateKgS,
    waterInletTempC,
    waterOutletTempC,
    specificHeatWater = SPECIFIC_HEAT_WATER,
  } = params;

  const tempGrad = (temp1C - temp2C) / thermometerDistanceM;
  const waterTempRise = waterOutletTempC - waterInletTempC;

  if (barAreaM2 <= 0 || tempGrad <= 0 || waterFlowRateKgS <= 0 || waterTempRise <= 0) return 0;

  const heatRate = waterFlowRateKgS * specificHeatWater * waterTempRise;
  const k = heatRate / (barAreaM2 * tempGrad);

  return Number(k.toFixed(1)); // W / (m · K)
}

/**
 * Stefan-Boltzmann radiation rate: P = e * sigma * A * (T^4 - T0^4)
 */
export function calculateNetThermalRadiation(
  emissivity: number,
  areaM2: number,
  bodyTempK: number,
  ambientTempK: number
): number {
  if (areaM2 <= 0 || bodyTempK <= 0) return 0;
  const p =
    emissivity *
    STEFAN_BOLTZMANN_SIGMA *
    areaM2 *
    (Math.pow(bodyTempK, 4) - Math.pow(ambientTempK, 4));
  return Number(p.toFixed(2)); // Watts
}

/**
 * Wien's displacement law peak wavelength: lambda_max = b / T
 */
export function calculateWienPeakWavelength(tempKelvin: number): number {
  if (tempKelvin <= 0) return 0;
  const lambdaM = WIEN_DISPLACEMENT_B / tempKelvin;
  return Number((lambdaM * 1e9).toFixed(1)); // in nanometers (nm)
}

/**
 * First Law of Thermodynamics: Delta_Q = Delta_U + Delta_W
 */
export function calculateFirstLawWork(heatAddedJ: number, internalEnergyChangeJ: number): number {
  return Number((heatAddedJ - internalEnergyChangeJ).toFixed(2));
}

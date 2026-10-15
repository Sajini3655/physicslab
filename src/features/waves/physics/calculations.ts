/**
 * Oscillations & Waves Physics Calculations Engine
 * Verified against NIE G.C.E. (A/L) Physics Syllabus & Resource Book (Unit 3).
 */

// ============================================================================
// 1. SIMPLE HARMONIC MOTION (SHM)
// ============================================================================

export interface SHMKinematicsResult {
  x: number; // displacement (m)
  v: number; // velocity (m/s)
  a: number; // acceleration (m/s^2)
  kineticEnergyJ: number;
  potentialEnergyJ: number;
  totalEnergyJ: number;
}

/**
 * Calculates SHM kinematics and energetics at time t:
 * x(t) = A * sin(omega * t + phi)
 * v(t) = omega * A * cos(omega * t + phi)
 * a(t) = -omega^2 * x(t)
 */
export function calculateSHMState(params: {
  amplitudeM: number;
  angularFreqRadS: number;
  timeS: number;
  phaseAngleRad?: number;
  massKg?: number;
}): SHMKinematicsResult {
  const { amplitudeM, angularFreqRadS, timeS } = params;
  const phi = params.phaseAngleRad ?? 0;
  const m = params.massKg ?? 1.0;

  const theta = angularFreqRadS * timeS + phi;
  const rawX = amplitudeM * Math.sin(theta);
  const rawV = angularFreqRadS * amplitudeM * Math.cos(theta);
  const rawA = -angularFreqRadS * angularFreqRadS * rawX;

  const x = Math.abs(rawX) < 1e-9 ? 0 : rawX;
  const v = Math.abs(rawV) < 1e-9 ? 0 : rawV;
  const a = Math.abs(rawA) < 1e-9 ? 0 : rawA;

  const ke = 0.5 * m * v * v;
  const pe = 0.5 * m * angularFreqRadS * angularFreqRadS * x * x;
  const te = 0.5 * m * angularFreqRadS * angularFreqRadS * amplitudeM * amplitudeM;

  return {
    x: Number(x.toFixed(4)),
    v: Number(v.toFixed(4)),
    a: Number(a.toFixed(4)),
    kineticEnergyJ: Number(ke.toFixed(4)),
    potentialEnergyJ: Number(pe.toFixed(4)),
    totalEnergyJ: Number(te.toFixed(4)),
  };
}

/**
 * Period of a simple pendulum: T = 2*pi * sqrt(L / g)
 */
export function calculateSimplePendulumPeriod(lengthM: number, g: number = 9.8): number {
  if (lengthM <= 0 || g <= 0) return 0;
  return Number((2 * Math.PI * Math.sqrt(lengthM / g)).toFixed(3));
}

/**
 * Period of a spring-mass system: T = 2*pi * sqrt(m / k)
 */
export function calculateSpringMassPeriod(massKg: number, springConstantNm: number): number {
  if (massKg <= 0 || springConstantNm <= 0) return 0;
  return Number((2 * Math.PI * Math.sqrt(massKg / springConstantNm)).toFixed(3));
}

// ============================================================================
// 2. SPEED OF SOUND, INTENSITY & DOPPLER EFFECT
// ============================================================================

/**
 * Speed of sound in an ideal gas: v = sqrt(gamma * R * T / M)
 * or temperature dependence from 0 deg C: v = v0 * sqrt(T_kelvin / 273.15)
 */
export function calculateSpeedOfSoundInGas(tempCelsius: number, v0: number = 331.3): number {
  const kelvin = tempCelsius + 273.15;
  if (kelvin <= 0) return 0;
  return Number((v0 * Math.sqrt(kelvin / 273.15)).toFixed(2));
}

/**
 * Sound intensity level in decibels: beta = 10 * log10(I / I0) where I0 = 1e-12 W/m^2.
 */
export function calculateSoundIntensityLevel(
  intensityWm2: number,
  referenceI0: number = 1e-12
): number {
  if (intensityWm2 <= 0 || referenceI0 <= 0) return 0;
  return Number((10 * Math.log10(intensityWm2 / referenceI0)).toFixed(1));
}

/**
 * Doppler effect observed frequency:
 * f' = f * ((v +/- v_observer) / (v -/+ v_source))
 */
export function calculateDopplerFrequency(params: {
  sourceFrequencyHz: number;
  soundSpeedMs: number;
  observerSpeedMs: number;
  sourceSpeedMs: number;
  observerMovingTowardsSource: boolean;
  sourceMovingTowardsObserver: boolean;
}): number {
  const { sourceFrequencyHz, soundSpeedMs, observerSpeedMs, sourceSpeedMs } = params;

  const num = soundSpeedMs + (params.observerMovingTowardsSource ? observerSpeedMs : -observerSpeedMs);
  const den = soundSpeedMs - (params.sourceMovingTowardsObserver ? sourceSpeedMs : -sourceSpeedMs);

  if (den <= 0) return Infinity;
  return Number((sourceFrequencyHz * (num / den)).toFixed(2));
}

// ============================================================================
// 3. VIBRATION OF STRINGS & AIR COLUMNS (PRACTICALS)
// ============================================================================

/**
 * Fundamental frequency of a stretched string: f = (1 / (2*L)) * sqrt(T / mu)
 */
export function calculateStringFundamentalFrequency(
  lengthM: number,
  tensionN: number,
  massPerUnitLengthKgM: number
): number {
  if (lengthM <= 0 || tensionN <= 0 || massPerUnitLengthKgM <= 0) return 0;
  const v = Math.sqrt(tensionN / massPerUnitLengthKgM);
  return Number((v / (2 * lengthM)).toFixed(2));
}

/**
 * Sonometer law verification:
 * Returns product f * L (constant at fixed tension) and f / sqrt(T) (constant at fixed length).
 */
export function verifySonometerLaws(
  frequencyHz: number,
  resonanceLengthM: number,
  tensionN: number
): { fLProduct: number; fOverSqrtT: number } {
  return {
    fLProduct: Number((frequencyHz * resonanceLengthM).toFixed(3)),
    fOverSqrtT: tensionN > 0 ? Number((frequencyHz / Math.sqrt(tensionN)).toFixed(3)) : 0,
  };
}

/**
 * Resonance tube speed of sound and end correction calculation:
 * First resonance: l1 + e = lambda / 4
 * Second resonance: l2 + e = 3 * lambda / 4
 * => lambda = 2 * (l2 - l1)
 * => v = 2 * f * (l2 - l1)
 * => e = (l2 - 3*l1) / 2
 */
export function calculateResonanceTubeSpeed(
  frequencyHz: number,
  firstResonanceLengthM: number,
  secondResonanceLengthM: number
): {
  wavelengthM: number;
  speedOfSoundMs: number;
  endCorrectionM: number;
} {
  const wavelength = 2 * (secondResonanceLengthM - firstResonanceLengthM);
  const speed = frequencyHz * wavelength;
  const endCorrection = (secondResonanceLengthM - 3 * firstResonanceLengthM) / 2;

  return {
    wavelengthM: Number(wavelength.toFixed(4)),
    speedOfSoundMs: Number(speed.toFixed(2)),
    endCorrectionM: Number(endCorrection.toFixed(4)),
  };
}

// ============================================================================
// 4. GEOMETRICAL OPTICS & REFRACTION
// ============================================================================

/**
 * Snell's Law: n1 * sin(theta1) = n2 * sin(theta2)
 * Critical angle: sin(c) = n2 / n1 (where n1 > n2)
 */
export function calculateRefractionAngle(
  n1: number,
  n2: number,
  angle1Deg: number
): { angle2Deg: number; isTotalInternalReflection: boolean; criticalAngleDeg: number } {
  const rad1 = (angle1Deg * Math.PI) / 180;
  const sin2 = (n1 / n2) * Math.sin(rad1);
  const criticalAngleDeg = n1 > n2 ? (Math.asin(n2 / n1) * 180) / Math.PI : 90;

  if (sin2 > 1.0) {
    return {
      angle2Deg: 90,
      isTotalInternalReflection: true,
      criticalAngleDeg: Number(criticalAngleDeg.toFixed(2)),
    };
  }

  const angle2Deg = (Math.asin(sin2) * 180) / Math.PI;
  return {
    angle2Deg: Number(angle2Deg.toFixed(2)),
    isTotalInternalReflection: false,
    criticalAngleDeg: Number(criticalAngleDeg.toFixed(2)),
  };
}

/**
 * Spectrometer Prism Refraction:
 * Refractive index n = sin((A + Dm) / 2) / sin(A / 2)
 */
export function calculatePrismRefractiveIndex(
  prismAngleADeg: number,
  minDeviationDmDeg: number
): number {
  if (prismAngleADeg <= 0 || minDeviationDmDeg <= 0) return 0;
  const aRad = (prismAngleADeg * Math.PI) / 180;
  const dmRad = (minDeviationDmDeg * Math.PI) / 180;

  const num = Math.sin((aRad + dmRad) / 2);
  const den = Math.sin(aRad / 2);

  if (den === 0) return 0;
  return Number((num / den).toFixed(4));
}

/**
 * Thin Lens Formula: 1/v - 1/u = 1/f (Cartesian sign convention)
 * Displacement Method: f = (D^2 - d^2) / (4*D)
 */
export function calculateLensFocalLengthDisplacement(
  screenDistanceDM: number,
  lensDisplacementDM: number
): number {
  if (screenDistanceDM <= 0 || screenDistanceDM <= lensDisplacementDM) return 0;
  const f = (screenDistanceDM * screenDistanceDM - lensDisplacementDM * lensDisplacementDM) / (4 * screenDistanceDM);
  return Number(f.toFixed(4));
}

// ============================================================================
// 5. PHYSICAL OPTICS (INTERFERENCE & DIFFRACTION)
// ============================================================================

/**
 * Young's Double Slit fringe width: beta = (lambda * D) / d
 */
export function calculateYoungsFringeWidth(
  wavelengthM: number,
  slitToScreenDM: number,
  slitSeparationDM: number
): number {
  if (slitSeparationDM <= 0) return 0;
  return Number(((wavelengthM * slitToScreenDM) / slitSeparationDM).toFixed(6));
}

/**
 * Diffraction Grating: d * sin(theta) = n * lambda
 * Wavelength lambda = (d * sin(theta)) / n
 * where d = 1 / linesPerMetre
 */
export function calculateDiffractionGratingWavelength(
  linesPerMetre: number,
  orderN: number,
  diffractionAngleDeg: number
): number {
  if (linesPerMetre <= 0 || orderN <= 0) return 0;
  const d = 1 / linesPerMetre;
  const rad = (diffractionAngleDeg * Math.PI) / 180;
  const wavelength = (d * Math.sin(rad)) / orderN;
  return Number(wavelength.toFixed(9)); // in metres
}

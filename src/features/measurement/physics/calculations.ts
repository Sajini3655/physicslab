/**
 * Measurement Unit Physics Calculations
 * Verified against NIE G.C.E. (A/L) Physics Syllabus & Resource Book (Unit 1: Measurement).
 */

/**
 * Calculates observed reading from a Vernier caliper scale.
 * Formula: Reading = MSR + (VSR * Least Count)
 */
export function calculateVernierReading(
  msr: number,
  vsrDivision: number,
  leastCount: number = 0.1
): number {
  return Number((msr + vsrDivision * leastCount).toFixed(2));
}

/**
 * Applies zero error correction to an observed reading.
 * Fundamental Metrology Rule:
 * Corrected Reading = Observed Reading - (Signed Zero Error)
 *
 * Example:
 * - Positive zero error (+0.2 mm): Corrected = 15.6 - (+0.2) = 15.4 mm
 * - Negative zero error (-0.3 mm): Corrected = 15.6 - (-0.3) = 15.9 mm
 */
export function applyZeroCorrection(observed: number, zeroError: number): number {
  return Number((observed - zeroError).toFixed(3));
}

/**
 * Calculates reading from a Micrometer Screw Gauge.
 * Formula: Reading = Sleeve Reading + (Thimble Division * Least Count)
 */
export function calculateMicrometerReading(
  sleeveMm: number,
  thimbleDiv: number,
  leastCount: number = 0.01
): number {
  return Number((sleeveMm + thimbleDiv * leastCount).toFixed(3));
}

/**
 * Calculates radius of spherical curvature using a Spherometer.
 * Formula: R = (a^2 / 6h) + (h / 2)
 * Where:
 * - a = mean distance between outer tripod legs (mm)
 * - h = height (sagitta) of curved surface relative to plane glass (mm)
 *
 * Handles planar limit (h <= 0.001 mm) where R -> infinity.
 */
export function calculateSpherometerCurvature(
  meanLegDistanceMm: number,
  sagittaMm: number
): {
  radiusMm: number | null;
  isPlane: boolean;
} {
  if (sagittaMm <= 0.001) {
    return { radiusMm: null, isPlane: true };
  }
  const term1 = (meanLegDistanceMm * meanLegDistanceMm) / (6 * sagittaMm);
  const term2 = sagittaMm / 2;
  return {
    radiusMm: Number((term1 + term2).toFixed(2)),
    isPlane: false,
  };
}

/**
 * Calculates radial dimensions of a cylindrical tube from travelling microscope coordinates.
 * Using four boundary coordinates x1, x2, x3, x4 in a continuous single-direction traverse.
 *
 * Internal diameter d_int = |x2 - x3|
 * External diameter d_ext = |x1 - x4|
 * Wall thickness t = (d_ext - d_int) / 2
 */
export function calculateTravellingMicroscopeDiameters(
  x1: number,
  x2: number,
  x3: number,
  x4: number
): {
  internalDiameter: number;
  externalDiameter: number;
  wallThickness: number;
} {
  const internalDiameter = Number(Math.abs(x2 - x3).toFixed(3));
  const externalDiameter = Number(Math.abs(x1 - x4).toFixed(3));
  const wallThickness = Number(((externalDiameter - internalDiameter) / 2).toFixed(3));
  return {
    internalDiameter,
    externalDiameter,
    wallThickness,
  };
}

/**
 * Converts density between CGS (g cm^-3) and SI (kg m^-3).
 * Conversion Factor: 1 g cm^-3 = 1000 kg m^-3
 */
export function convertDensity(
  value: number,
  fromUnit: 'g/cm^3' | 'kg/m^3',
  toUnit: 'g/cm^3' | 'kg/m^3'
): number {
  if (fromUnit === toUnit) return value;
  if (fromUnit === 'g/cm^3' && toUnit === 'kg/m^3') {
    return Number((value * 1000).toFixed(4));
  }
  return Number((value / 1000).toFixed(6));
}

/**
 * Propagates uncertainties in density calculation: rho = m / V
 * Maximum fractional uncertainty: Delta rho / rho = Delta m / m + Delta V / V
 */
export function propagateDensityUncertainty(
  mass: number,
  deltaMass: number,
  volume: number,
  deltaVolume: number
): {
  density: number;
  fractionalUncertainty: number;
  percentageUncertainty: number;
  absoluteUncertainty: number;
} {
  if (volume <= 0 || mass <= 0) {
    return { density: 0, fractionalUncertainty: 0, percentageUncertainty: 0, absoluteUncertainty: 0 };
  }
  const density = mass / volume;
  const fractionalUncertainty = (deltaMass / mass) + (deltaVolume / volume);
  const percentageUncertainty = fractionalUncertainty * 100;
  const absoluteUncertainty = density * fractionalUncertainty;

  return {
    density: Number(density.toFixed(4)),
    fractionalUncertainty: Number(fractionalUncertainty.toFixed(4)),
    percentageUncertainty: Number(percentageUncertainty.toFixed(2)),
    absoluteUncertainty: Number(absoluteUncertainty.toFixed(4)),
  };
}

/**
 * Resolves a vector into perpendicular rectangular components (Ax, Ay).
 * Ax = A * cos(theta), Ay = A * sin(theta) (angle measured from +X axis)
 */
export function resolveVector(
  magnitude: number,
  angleDegrees: number
): { rx: number; ry: number } {
  const rad = (angleDegrees * Math.PI) / 180;
  return {
    rx: Number((magnitude * Math.cos(rad)).toFixed(2)),
    ry: Number((magnitude * Math.sin(rad)).toFixed(2)),
  };
}

/**
 * Adds multiple 2D vectors together and determines resultant magnitude and direction.
 */
export function addVectors(
  vectors: Array<{ magnitude: number; angleDegrees: number }>
): {
  rx: number;
  ry: number;
  resultantMagnitude: number;
  resultantAngleDegrees: number;
} {
  let sumX = 0;
  let sumY = 0;
  for (const v of vectors) {
    const { rx, ry } = resolveVector(v.magnitude, v.angleDegrees);
    sumX += rx;
    sumY += ry;
  }
  const resultantMagnitude = Number(Math.sqrt(sumX * sumX + sumY * sumY).toFixed(2));
  let resultantAngleDegrees = Number(((Math.atan2(sumY, sumX) * 180) / Math.PI).toFixed(1));
  if (resultantAngleDegrees < 0) {
    resultantAngleDegrees = Number((resultantAngleDegrees + 360).toFixed(1));
  }
  return {
    rx: Number(sumX.toFixed(2)),
    ry: Number(sumY.toFixed(2)),
    resultantMagnitude,
    resultantAngleDegrees,
  };
}

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
 * Breaks down any micrometer reading (0 to 25 mm) into exact sleeve and circular scale positions
 * using integer-hundredths arithmetic to eliminate floating-point rounding artifacts.
 */
export function getMicrometerScaleBreakdown(
  readingMm: number,
  leastCount: number = 0.01
): {
  clampedReading: number;
  sleeveMainMm: number;
  hasHalfMm: boolean;
  sleeveReading: number;
  circularDivision: number;
  mainMm: number;
  halfMmVisible: boolean;
  circularDiv: number;
} {
  const rounded = Math.round(readingMm / leastCount) * leastCount;
  const clamped = Math.max(0, Math.min(25, Number(rounded.toFixed(2))));
  const totalHundredths = Math.round(clamped * 100);

  const sleevePitchCount = Math.floor(totalHundredths / 50); // 0.5 mm = 50 hundredths
  const sleeveReading = Number((sleevePitchCount * 0.5).toFixed(1));
  const sleeveMainMm = Math.floor(sleeveReading);
  const hasHalfMm = sleeveReading - sleeveMainMm >= 0.49;
  const circularDivision = totalHundredths % 50;

  return {
    clampedReading: clamped,
    sleeveMainMm,
    hasHalfMm,
    sleeveReading,
    circularDivision,
    mainMm: sleeveMainMm,
    halfMmVisible: hasHalfMm,
    circularDiv: circularDivision,
  };
}

export interface SpherometerCurvatureResult {
  radiusMm: number | null;
  surfaceType: 'plane' | 'convex' | 'concave' | 'unresolvable';
  isPlane: boolean;
  description: {
    en: string;
    si: string;
  };
}

/**
 * Calculates radius of spherical curvature using a Spherometer.
 * Formula: R = (a^2 / 6|h|) + (|h| / 2)
 * Where:
 * - a = mean distance between outer tripod legs (mm)
 * - h = signed height (sagitta) of curved surface relative to plane glass (mm)
 *
 * Physical Orientations:
 * - h = 0: Ideal flat plane (R = infinity)
 * - 0 < |h| < leastCount: Curvature unresolvable by instrument
 * - h > 0: Convex surface (center elevated)
 * - h < 0: Concave surface (center depressed)
 */
export function calculateSpherometerCurvature(
  meanLegDistanceMm: number,
  sagittaMm: number,
  leastCountMm: number = 0.01
): SpherometerCurvatureResult {
  const absH = Math.abs(sagittaMm);

  if (absH === 0) {
    return {
      radiusMm: null,
      surfaceType: 'plane',
      isPlane: true,
      description: {
        en: 'Ideal flat plane (R = ∞)',
        si: 'පරිපූර්ණ තල පෘෂ්ඨයකි (R = ∞)',
      },
    };
  }

  if (absH < leastCountMm) {
    return {
      radiusMm: null,
      surfaceType: 'unresolvable',
      isPlane: true,
      description: {
        en: `Sagitta (|h| = ${absH.toFixed(3)} mm) is below instrument resolution (${leastCountMm} mm); curvature cannot be distinguished from a flat plane.`,
        si: `එසවීම (|h| = ${absH.toFixed(3)} mm) උපකරණයේ කුඩාම මිනුමට (${leastCountMm} mm) වඩා කුඩා බැවින් වක්‍රතාව තල පෘෂ්ඨයකින් වෙන්කර හඳුනාගත නොහැක.`,
      },
    };
  }

  const term1 = (meanLegDistanceMm * meanLegDistanceMm) / (6 * absH);
  const term2 = absH / 2;
  const radius = Number((term1 + term2).toFixed(2));

  const surfaceType = sagittaMm > 0 ? 'convex' : 'concave';
  return {
    radiusMm: radius,
    surfaceType,
    isPlane: false,
    description: {
      en: sagittaMm > 0
        ? `Convex surface (elevated center, h = +${sagittaMm.toFixed(2)} mm, R = ${radius} mm)`
        : `Concave surface (depressed center, h = ${sagittaMm.toFixed(2)} mm, R = ${radius} mm)`,
      si: sagittaMm > 0
        ? `උත්තල පෘෂ්ඨය (මධ්‍යය එසවුණු, h = +${sagittaMm.toFixed(2)} mm, R = ${radius} mm)`
        : `අවතල පෘෂ්ඨය (මධ්‍යය ගිලුණු, h = ${sagittaMm.toFixed(2)} mm, R = ${radius} mm)`,
    },
  };
}

/**
 * Calculates radial dimensions of a cylindrical tube from travelling microscope coordinates.
 * Using four boundary coordinates x1, x2, x3, x4 in a continuous single-direction traverse.
 *
 * Internal diameter d_int = |x2 - x3|; Internal radius r_int = d_int / 2
 * External diameter d_ext = |x1 - x4|; External radius r_ext = d_ext / 2
 * Wall thickness t = (d_ext - d_int) / 2 = r_ext - r_int
 */
export function calculateTravellingMicroscopeDimensions(
  x1: number,
  x2: number,
  x3: number,
  x4: number
): {
  internalDiameter: number;
  externalDiameter: number;
  internalRadius: number;
  externalRadius: number;
  wallThickness: number;
} {
  const internalDiameter = Number(Math.abs(x2 - x3).toFixed(3));
  const externalDiameter = Number(Math.abs(x1 - x4).toFixed(3));
  const internalRadius = Number((internalDiameter / 2).toFixed(3));
  const externalRadius = Number((externalDiameter / 2).toFixed(3));
  const wallThickness = Number((externalRadius - internalRadius).toFixed(3));

  return {
    internalDiameter,
    externalDiameter,
    internalRadius,
    externalRadius,
    wallThickness,
  };
}

export const calculateTravellingMicroscopeDiameters = calculateTravellingMicroscopeDimensions;

/**
 * Calculates cylinder material volume distinguishing open hollow tubes from closed-bottom vessels.
 *
 * Open tube:
 * - V_solid = pi * (R_ext^2 - r_int^2) * H
 *
 * Closed-bottom cylinder (e.g. calorimeter vessel, boiling tube):
 * - External volume: V_ext = pi * R_ext^2 * H_ext
 * - Cavity volume: V_cavity = pi * r_int^2 * h_cavity
 * - Base thickness: t_base = H_ext - h_cavity
 * - Material solid volume: V_solid = V_ext - V_cavity
 */
export function calculateCylinderMaterialVolume(params: {
  geometry: 'open_tube' | 'closed_bottom';
  rExt: number;
  rInt: number;
  heightExt: number;
  depthCavity?: number;
}): {
  externalVolume: number;
  cavityVolume: number;
  solidVolume: number;
  baseThickness?: number;
} {
  const { geometry, rExt, rInt, heightExt, depthCavity } = params;

  if (geometry === 'open_tube') {
    const extVol = Number((Math.PI * rExt * rExt * heightExt).toFixed(1));
    const cavVol = Number((Math.PI * rInt * rInt * heightExt).toFixed(1));
    const solidVol = Number((extVol - cavVol).toFixed(1));
    return {
      externalVolume: extVol,
      cavityVolume: cavVol,
      solidVolume: solidVol,
    };
  }

  // Closed bottom cylinder
  const dCav = depthCavity ?? heightExt;
  const extVol = Number((Math.PI * rExt * rExt * heightExt).toFixed(1));
  const cavVol = Number((Math.PI * rInt * rInt * dCav).toFixed(1));
  const solidVol = Number(Math.max(0, extVol - cavVol).toFixed(1));
  const baseThickness = Number(Math.max(0, heightExt - dCav).toFixed(2));

  return {
    externalVolume: extVol,
    cavityVolume: cavVol,
    solidVolume: solidVol,
    baseThickness,
  };
}

/**
 * Calculates coin volume and fractional uncertainty from diameter and thickness.
 * V = pi * (D / 2)^2 * t
 * Fractional uncertainty: dV / V = 2 * (LC / D) + (LC / t)
 */
export function calculateCoinVolumeAndUncertainty(
  diameterMm: number,
  thicknessMm: number,
  leastCountMm: number = 0.01
): {
  volumeMm3: number;
  fractionalUncertainty: number;
  percentageUncertainty: number;
} {
  if (diameterMm <= 0 || thicknessMm <= 0) {
    return { volumeMm3: 0, fractionalUncertainty: 0, percentageUncertainty: 0 };
  }
  const radius = diameterMm / 2;
  const volume = Number((Math.PI * radius * radius * thicknessMm).toFixed(2));
  const fracUnc = Number((2 * (leastCountMm / diameterMm) + (leastCountMm / thicknessMm)).toFixed(4));
  const pctUnc = Number((fracUnc * 100).toFixed(2));

  return {
    volumeMm3: volume,
    fractionalUncertainty: fracUnc,
    percentageUncertainty: pctUnc,
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

/**
 * Subtracts vector B from vector A: D = A - B = A + (-B)
 */
export function subtractVectors(
  vecA: { magnitude: number; angleDegrees: number },
  vecB: { magnitude: number; angleDegrees: number }
): {
  rx: number;
  ry: number;
  resultantMagnitude: number;
  resultantAngleDegrees: number;
} {
  const negB = {
    magnitude: vecB.magnitude,
    angleDegrees: (vecB.angleDegrees + 180) % 360,
  };
  return addVectors([vecA, negB]);
}

/**
 * Robust numerical input parser supporting commas, scientific notation (e.g. "2.5 x 10^3"),
 * and stripping trailing units (e.g. "28.6 mm").
 * Does NOT convert empty strings or whitespace to zero!
 */
export function parseNumericalInput(input: string | undefined): number | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (trimmed === '') return null;

  const sanitized = trimmed.replace(/,/g, '');

  // Scientific notation regex e.g. "2.5 x 10^3", "2.5*10^3", "2.5e3"
  const sciMatch = sanitized.match(/^([+-]?\d+(?:\.\d+)?)\s*(?:[x*×]|(?:[x*×]\s*10\^))\s*(?:10\^|\^)?([+-]?\d+)/i);
  if (sciMatch) {
    const mantissa = parseFloat(sciMatch[1]);
    const exponent = parseFloat(sciMatch[2]);
    if (!isNaN(mantissa) && !isNaN(exponent)) {
      return mantissa * Math.pow(10, exponent);
    }
  }

  const val = parseFloat(sanitized);
  return isNaN(val) ? null : val;
}

/**
 * Calculates rectangular block volume from length, width, and height.
 * V = l * w * h
 */
export function calculateBlockVolume(length: number, width: number, height: number): number {
  if (length <= 0 || width <= 0 || height <= 0) return 0;
  return Number((length * width * height).toFixed(2));
}

/**
 * Calculates sphere volume from diameter.
 * V = (4/3) * pi * (D / 2)^3
 */
export function calculateSphereVolume(diameter: number): number {
  if (diameter <= 0) return 0;
  const radius = diameter / 2;
  return Number(((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2));
}

/**
 * Calculates cross-sectional area of a wire from diameter.
 * A = (pi / 4) * d^2
 */
export function calculateWireCrossSection(diameterMm: number): number {
  if (diameterMm <= 0) return 0;
  return Number(((Math.PI / 4) * diameterMm * diameterMm).toFixed(4));
}

/**
 * Calculates thickness of a single sheet of paper from a multi-sheet stack.
 * t_single = t_stack / sheetCount
 */
export function calculatePaperThickness(stackThicknessMm: number, sheetCount: number = 100): number {
  if (stackThicknessMm <= 0 || sheetCount <= 0) return 0;
  return Number((stackThicknessMm / sheetCount).toFixed(4));
}

/**
 * Calculates internal capillary tube bore dimensions from horizontal and vertical traverses.
 */
export function calculateCapillaryBoreDimensions(
  diameterHorizontalMm: number,
  diameterVerticalMm: number
): {
  meanDiameterMm: number;
  radiusMm: number;
  crossSectionAreaMm2: number;
} {
  if (diameterHorizontalMm <= 0 || diameterVerticalMm <= 0) {
    return { meanDiameterMm: 0, radiusMm: 0, crossSectionAreaMm2: 0 };
  }
  const meanDia = Number(((diameterHorizontalMm + diameterVerticalMm) / 2).toFixed(3));
  const radius = Number((meanDia / 2).toFixed(3));
  const area = Number((Math.PI * radius * radius).toFixed(4));
  return {
    meanDiameterMm: meanDia,
    radiusMm: radius,
    crossSectionAreaMm2: area,
  };
}

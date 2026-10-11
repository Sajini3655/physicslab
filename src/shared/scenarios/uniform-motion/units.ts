import { DisplacementUnit, VelocityUnit, TimeUnit } from './types';

/**
 * Normalizes displacement to SI base unit (metres).
 */
export function toBaseDisplacement(value: number, unit: DisplacementUnit): number {
  switch (unit) {
    case 'm':
      return value;
    case 'km':
      return value * 1000;
    case 'cm':
      return value * 0.01;
    default:
      throw new Error(`Unsupported displacement unit: ${unit}`);
  }
}

/**
 * Converts SI base displacement (metres) to the specified unit.
 */
export function fromBaseDisplacement(metres: number, unit: DisplacementUnit): number {
  switch (unit) {
    case 'm':
      return metres;
    case 'km':
      return metres / 1000;
    case 'cm':
      return metres / 0.01;
    default:
      throw new Error(`Unsupported displacement unit: ${unit}`);
  }
}

/**
 * Normalizes velocity to SI base unit (metres per second).
 */
export function toBaseVelocity(value: number, unit: VelocityUnit): number {
  switch (unit) {
    case 'm/s':
      return value;
    case 'km/h':
      // 1 km/h = 1000 m / 3600 s = 1 / 3.6 m/s
      return value / 3.6;
    default:
      throw new Error(`Unsupported velocity unit: ${unit}`);
  }
}

/**
 * Converts SI base velocity (metres per second) to the specified unit.
 */
export function fromBaseVelocity(mps: number, unit: VelocityUnit): number {
  switch (unit) {
    case 'm/s':
      return mps;
    case 'km/h':
      return mps * 3.6;
    default:
      throw new Error(`Unsupported velocity unit: ${unit}`);
  }
}

/**
 * Normalizes time to SI base unit (seconds).
 */
export function toBaseTime(value: number, unit: TimeUnit): number {
  switch (unit) {
    case 's':
      return value;
    case 'min':
      return value * 60;
    case 'h':
      return value * 3600;
    default:
      throw new Error(`Unsupported time unit: ${unit}`);
  }
}

/**
 * Converts SI base time (seconds) to the specified unit.
 */
export function fromBaseTime(seconds: number, unit: TimeUnit): number {
  switch (unit) {
    case 's':
      return seconds;
    case 'min':
      return seconds / 60;
    case 'h':
      return seconds / 3600;
    default:
      throw new Error(`Unsupported time unit: ${unit}`);
  }
}

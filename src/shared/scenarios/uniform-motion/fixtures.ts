import type { UniformMotionDraft, UniformMotionCandidate } from './schema';

export const validCandidateUnknownS: UniformMotionCandidate = {
  schemaVersion: 1,
  scenarioId: "sc-1",
  revision: 1,
  topic: "uniform-velocity",
  originalText: "A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.",
  locale: "en",
  object: "car",
  axis: { direction: "right", basis: "display-convention" },
  s: { type: "unknown", unit: "m" },
  u: { type: "given", value: 20, unit: "m/s" },
  t: { type: "given", value: 10, unit: "s" },
  target: "s",
  clarifications: []
};

export const validCandidateUnknownU: UniformMotionCandidate = {
  schemaVersion: 1,
  scenarioId: "sc-2",
  revision: 1,
  topic: "uniform-velocity",
  originalText: "Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s.",
  locale: "en",
  object: "object",
  axis: { direction: "east", basis: "question-stated" },
  s: { type: "given", value: -50, unit: "m" },
  u: { type: "unknown", unit: "m/s" },
  t: { type: "given", value: 5, unit: "s" },
  target: "u",
  clarifications: []
};

export const validCandidateUnknownT: UniformMotionCandidate = {
  schemaVersion: 1,
  scenarioId: "sc-3",
  revision: 1,
  topic: "uniform-velocity",
  originalText: "Taking north as positive, a train moves at a constant velocity of -60 km/h and undergoes a displacement of -120 km. Find the elapsed time in hours.",
  locale: "en",
  object: "train",
  axis: { direction: "north", basis: "question-stated" },
  s: { type: "given", value: -120, unit: "km" },
  u: { type: "given", value: -60, unit: "km/h" },
  t: { type: "unknown", unit: "h" },
  target: "t",
  clarifications: []
};

export const physicallyIndeterminateCandidate: UniformMotionCandidate = {
  schemaVersion: 1,
  scenarioId: "sc-4",
  revision: 1,
  topic: "uniform-velocity",
  originalText: "If it doesn't move, how long does it take to move 0m?",
  locale: "en",
  object: "it",
  axis: { direction: "right", basis: "display-convention" },
  s: { type: "given", value: 0, unit: "m" },
  u: { type: "given", value: 0, unit: "m/s" },
  t: { type: "unknown", unit: "s" },
  target: "t",
  clarifications: []
};

export const invalidDraftMissingUnits: UniformMotionDraft = {
  schemaVersion: 1,
  scenarioId: "draft-1",
  revision: 1,
  topic: "uniform-velocity",
  originalText: "Travels 100 in 10s. Find speed.",
  locale: "en",
  object: "car",
  axis: { direction: "right", basis: "display-convention" },
  s: { type: "unresolved", reason: "missing unit", originalText: "100" },
  u: { type: "unknown", unit: "m/s" },
  t: { type: "given", value: 10, unit: "s" },
  target: "u",
  clarifications: [
    { code: "MISSING_UNIT", message: "Displacement value '100' lacks a unit.", fieldRef: "s" }
  ]
};

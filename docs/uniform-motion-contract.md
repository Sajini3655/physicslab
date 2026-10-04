# Uniform Motion Contract

This document outlines the shared data contract for the uniform-velocity module.

## Workflow Overview
The agreed workflow connects the question-review phase to the simulation phase:
**Editable draft → structurally complete candidate → physical validation of that candidate revision → explicit student confirmation → simulation using the confirmed snapshot.**

### Responsibilities
- **Developer 1 (My work)**: Question input, interpretation, review/editing, confirmation handler, and producing the `UniformMotionCandidate`.
- **Developer 2 (Sajini)**: 
  - **Physical validation**: Consumes a `UniformMotionCandidate` and returns a `PhysicsValidationResult` associated with that scenario ID and revision.
  - **Simulation**: Starts only from a `ConfirmedUniformMotionScenario`. Handles the physics engine, unit conversion, physical consistency checks, SVG simulation, and playback.

## Public Exports and Validation Terminology

The contract defines strict structural validation using Zod schemas. This ensures the data shape is perfectly sound before handing off to physical/domain validation.

- **`UniformMotionDraftSchema` / `UniformMotionDraft`**: Used for the editable input state. It permits missing units, unresolved information, and negative elapsed time values.
- **`UniformMotionCandidateSchema` / `UniformMotionCandidate`**: A structurally complete scenario. Requirements:
  - Resolved object and axis information.
  - Exactly one `unknown` quantity, matching the resolved `target`.
  - The other two quantities in the `given` state.
  - No unresolved quantities or clarification issues.
  - Non-negative elapsed time when `t` is given.
- **`PhysicsValidationResultSchema` / `PhysicsValidationResult`**: Represents physical/domain validation returned by Sajini's engine. It includes the scenario ID, revision, a valid/invalid discriminant, and structured issues for invalid results. This domain validation handles unit normalization, sign and physical consistency, division-by-zero, indeterminate cases (e.g., `s=0, u=0` unknown `t`), and finite derived results.
- **`ConfirmedUniformMotionScenarioSchema` / `ConfirmedUniformMotionScenario`**: An envelope containing a snapshot of the candidate scenario and confirmation metadata.

## Quantity States, Units, Signs, and Axis Conventions
- **`s`**: Displacement (not distance). Supported units: `m`, `km`, `cm`.
- **`u`**: Velocity. Supported units: `m/s`, `km/h`.
- **`t`**: Elapsed Time. Supported units: `s`, `min`, `h`.

**Quantity States**:
- `given`: A finite numeric value and a supported unit.
- `unknown`: The requested target quantity. No numeric value, and an optional requested unit.
- `unresolved`: Missing or ambiguous information, providing a reason and optional original text.

**Axis and Sign Conventions**:
- `s` and `u` are signed values and can be positive, negative, or zero relative to the selected positive axis.
- The `axis` tracks the positive-axis direction and basis (`question-stated`, `student-selected`, `display-convention`). 
- Do not store an independent motion-direction field that can contradict the algebraic signs of `s` and `u`.
- Motion conventionally starts at the coordinate origin; do not present this as a given position unless explicitly stated in the question.

## Confirmation Guarantees
- A successful physical validation result must match the current candidate ID and revision.
- Editing any part of the draft invalidates both previous physical validation and confirmation. Any modification increments the revision ID.
- The future application handler will create a separate confirmation snapshot only after the student explicitly clicks Confirm.
- Schema acceptance alone does not prove a student clicked Confirm or guarantee deep runtime immutability. The `ConfirmedUniformMotionScenario` schema ensures confirmation metadata matches the enclosed snapshot structurally.

## Independent Thinking (Answer Visibility)
No target values are calculated or returned inside the review or confirmed input contracts. The frontend must derive numerical visibility strictly from the `target` parameter:
- **Unknown `s`**: Hide the calculated displacement and numerical position/ruler labels that directly disclose it.
- **Unknown `u`**: Hide the calculated velocity readout.
- **Unknown `t`**: Hide the calculated duration and timer labels that disclose it.
- These rules apply identically to tooltips and accessible text. AI-controlled display flags cannot override these rules.

## JSON Examples (Candidates)

### Target: Unknown s
```json
{
  "schemaVersion": 1,
  "scenarioId": "sc-1",
  "revision": 1,
  "topic": "uniform-velocity",
  "originalText": "A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.",
  "locale": "en",
  "object": "car",
  "axis": {
    "direction": "right",
    "basis": "display-convention"
  },
  "s": {
    "type": "unknown",
    "unit": "m"
  },
  "u": {
    "type": "given",
    "value": 20,
    "unit": "m/s"
  },
  "t": {
    "type": "given",
    "value": 10,
    "unit": "s"
  },
  "target": "s",
  "clarifications": []
}
```

### Target: Unknown u
```json
{
  "schemaVersion": 1,
  "scenarioId": "sc-2",
  "revision": 1,
  "topic": "uniform-velocity",
  "originalText": "Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s.",
  "locale": "en",
  "object": "object",
  "axis": {
    "direction": "east",
    "basis": "question-stated"
  },
  "s": {
    "type": "given",
    "value": -50,
    "unit": "m"
  },
  "u": {
    "type": "unknown",
    "unit": "m/s"
  },
  "t": {
    "type": "given",
    "value": 5,
    "unit": "s"
  },
  "target": "u",
  "clarifications": []
}
```

### Target: Unknown t
```json
{
  "schemaVersion": 1,
  "scenarioId": "sc-3",
  "revision": 1,
  "topic": "uniform-velocity",
  "originalText": "Taking north as positive, a train moves at a constant velocity of -60 km/h and undergoes a displacement of -120 km. Find the elapsed time in hours.",
  "locale": "en",
  "object": "train",
  "axis": {
    "direction": "north",
    "basis": "question-stated"
  },
  "s": {
    "type": "given",
    "value": -120,
    "unit": "km"
  },
  "u": {
    "type": "given",
    "value": -60,
    "unit": "km/h"
  },
  "t": {
    "type": "unknown",
    "unit": "h"
  },
  "target": "t",
  "clarifications": []
}
```

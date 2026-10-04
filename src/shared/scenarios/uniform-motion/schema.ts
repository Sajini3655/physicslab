import { z } from "zod";

export const AxisSchema = z.object({
  direction: z.string().min(1),
  basis: z.enum(["question-stated", "student-selected", "display-convention"])
});

export const ClarificationSchema = z.object({
  code: z.string(),
  message: z.string(),
  fieldRef: z.string().optional()
});

const SUnit = z.enum(["m", "km", "cm"]);
const UUnit = z.enum(["m/s", "km/h"]);
const TUnit = z.enum(["s", "min", "h"]);

export const GivenS = z.object({ type: z.literal("given"), value: z.number().finite(), unit: SUnit });
export const GivenU = z.object({ type: z.literal("given"), value: z.number().finite(), unit: UUnit });
export const GivenT = z.object({ type: z.literal("given"), value: z.number().finite(), unit: TUnit });

export const UnknownS = z.object({ type: z.literal("unknown"), unit: SUnit.nullable() });
export const UnknownU = z.object({ type: z.literal("unknown"), unit: UUnit.nullable() });
export const UnknownT = z.object({ type: z.literal("unknown"), unit: TUnit.nullable() });

export const UnresolvedQuantity = z.object({
  type: z.literal("unresolved"),
  reason: z.string().min(1),
  originalText: z.string().optional()
});

export const SQuantity = z.discriminatedUnion("type", [GivenS, UnknownS, UnresolvedQuantity]);
export const UQuantity = z.discriminatedUnion("type", [GivenU, UnknownU, UnresolvedQuantity]);
export const TQuantity = z.discriminatedUnion("type", [GivenT, UnknownT, UnresolvedQuantity]);

export const UniformMotionDraftSchema = z.object({
  schemaVersion: z.literal(1),
  scenarioId: z.string().min(1),
  revision: z.number().int().positive(),
  topic: z.literal("uniform-velocity"),
  originalText: z.string(),
  locale: z.enum(["en", "si"]),
  object: z.string().min(1).nullable(),
  axis: AxisSchema.nullable(),
  s: SQuantity,
  u: UQuantity,
  t: TQuantity,
  target: z.enum(["s", "u", "t"]).nullable(),
  clarifications: z.array(ClarificationSchema)
});

export type UniformMotionDraft = z.infer<typeof UniformMotionDraftSchema>;

const BaseCandidate = UniformMotionDraftSchema.extend({
  object: z.string().min(1),
  axis: AxisSchema,
  clarifications: z.array(z.any()).length(0)
});

const CandidateS = BaseCandidate.extend({
  target: z.literal("s"),
  s: UnknownS,
  u: GivenU,
  t: GivenT.refine(val => val.value >= 0, { message: "Elapsed time cannot be negative" })
});

const CandidateU = BaseCandidate.extend({
  target: z.literal("u"),
  s: GivenS,
  u: UnknownU,
  t: GivenT.refine(val => val.value >= 0, { message: "Elapsed time cannot be negative" })
});

const CandidateT = BaseCandidate.extend({
  target: z.literal("t"),
  s: GivenS,
  u: GivenU,
  t: UnknownT
});

export const UniformMotionCandidateSchema = z.discriminatedUnion("target", [
  CandidateS,
  CandidateU,
  CandidateT
]);

export type UniformMotionCandidate = z.infer<typeof UniformMotionCandidateSchema>;

export const ConfirmedUniformMotionScenarioSchema = z.object({
  scenario: UniformMotionCandidateSchema,
  confirmationId: z.string().min(1),
  confirmedRevision: z.number().int().positive(),
  confirmedAt: z.string().datetime()
}).superRefine((data, ctx) => {
  if (data.confirmationId !== data.scenario.scenarioId) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Confirmation ID mismatch", path: ["confirmationId"] });
  }
  if (data.confirmedRevision !== data.scenario.revision) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Confirmation revision mismatch", path: ["confirmedRevision"] });
  }
});

export type ConfirmedUniformMotionScenario = z.infer<typeof ConfirmedUniformMotionScenarioSchema>;

export const PhysicsValidationResultSchema = z.discriminatedUnion("isValid", [
  z.object({
    scenarioId: z.string().min(1),
    revision: z.number().int().positive(),
    isValid: z.literal(true)
  }),
  z.object({
    scenarioId: z.string().min(1),
    revision: z.number().int().positive(),
    isValid: z.literal(false),
    issues: z.array(z.object({ code: z.string(), message: z.string() }))
  })
]);

export type PhysicsValidationResult = z.infer<typeof PhysicsValidationResultSchema>;

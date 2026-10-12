import { z } from 'zod';
import type { UniformMotionDraft } from '@/shared/scenarios/uniform-motion';

export const QuantityExtractionSchema = z.object({
  status: z.enum(['given', 'unknown', 'unresolved']),
  value: z.number().nullable(),
  unit: z.string().nullable(),
  unresolvedReason: z.string().nullable(),
});

export type QuantityExtraction = z.infer<typeof QuantityExtractionSchema>;

export const ClarificationTransportSchema = z.object({
  code: z.string(),
  message: z.string(),
  fieldRef: z.string().nullable(),
});

export type ClarificationTransport = z.infer<typeof ClarificationTransportSchema>;

export const ExtractionTransportSchema = z.object({
  isSupported: z.boolean(),
  unsupportedReason: z.string().nullable(),
  object: z.string().nullable(),
  axisDirection: z.string().nullable(),
  s: QuantityExtractionSchema,
  u: QuantityExtractionSchema,
  t: QuantityExtractionSchema,
  target: z.enum(['s', 'u', 't']).nullable(),
  clarifications: z.array(ClarificationTransportSchema),
});

export type ExtractionTransport = z.infer<typeof ExtractionTransportSchema>;

export type InterpretationErrorCode =
  | 'INVALID_REQUEST'
  | 'MALFORMED_JSON'
  | 'PAYLOAD_TOO_LARGE'
  | 'CONFIG_MISSING'
  | 'PROVIDER_REFUSAL'
  | 'INCOMPLETE_OUTPUT'
  | 'INVALID_EXTRACTION'
  | 'RATE_LIMIT_EXCEEDED'
  | 'TIMEOUT'
  | 'PROVIDER_AUTH_ERROR'
  | 'PROVIDER_BAD_REQUEST'
  | 'PROVIDER_ERROR'
  | 'INTERNAL_ERROR';

export interface InterpretationError {
  code: InterpretationErrorCode;
  message: string;
  details?: unknown;
}

export type InterpretationResult =
  | { status: 'success'; draft: UniformMotionDraft }
  | { status: 'unsupported'; reason: string; details?: string }
  | { status: 'error'; error: InterpretationError };

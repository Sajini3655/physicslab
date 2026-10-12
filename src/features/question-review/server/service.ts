import OpenAI from 'openai';
import { zodTextFormat } from 'openai/helpers/zod';
import type { QuestionSubmissionInput } from '../schema';
import { getServerConfig, ConfigurationError } from './config';
import { createGroqClient } from './client';
import { buildSystemPrompt, buildUserMessage } from './prompt';
import { mapExtractionToDraft } from './mapper';
import {
  ExtractionTransportSchema,
  type InterpretationResult,
} from './types';

export interface InterpretOptions {
  client?: OpenAI;
  model?: string;
}

/**
 * Server-only interpretation service for secondary-school uniform-motion questions.
 * Contacts Groq using the OpenAI-compatible Responses API with Structured Outputs to extract scenario facts,
 * then maps the structured extraction to an authoritative UniformMotionDraft.
 *
 * Guaranteed invariants:
 * - Powered by Groq (https://api.groq.com/openai/v1) using GROQ_API_KEY and GROQ_MODEL.
 * - Never falls back to OpenAI or fabricated mock output.
 * - Never solves or derives requested quantities.
 * - Requested target quantity remains unknown without numeric answer.
 * - Preserves Retry-After information on rate limits without repeated automatic retries.
 * - Never returns reasoning traces to the frontend.
 */
export async function interpretQuestion(
  input: QuestionSubmissionInput,
  options: InterpretOptions = {}
): Promise<InterpretationResult> {
  let client: OpenAI;
  let model: string;

  try {
    if (options.client && options.model) {
      client = options.client;
      model = options.model;
    } else {
      const config = getServerConfig();
      client = options.client ?? createGroqClient(config.apiKey);
      model = options.model ?? config.model;
    }
  } catch (err) {
    if (err instanceof ConfigurationError) {
      return {
        status: 'error',
        error: {
          code: 'CONFIG_MISSING',
          message: 'Groq question interpretation is not properly configured on the server.',
        },
      };
    }
    return {
      status: 'error',
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to initialize interpretation service.',
      },
    };
  }

  try {
    const response = await client.responses.parse({
      model,
      instructions: buildSystemPrompt(input.locale),
      input: buildUserMessage(input),
      text: {
        format: zodTextFormat(ExtractionTransportSchema, 'uniform_motion_extraction'),
      },
      store: false,
      max_output_tokens: 1500,
      reasoning: {
        effort: 'low',
      },
    });

    // Check for explicit provider refusal
    if (Array.isArray(response.output)) {
      for (const item of response.output) {
        if (item.type === 'message') {
          for (const content of item.content) {
            if (content.type === 'refusal') {
              return {
                status: 'error',
                error: {
                  code: 'PROVIDER_REFUSAL',
                  message: content.refusal || 'Groq provider refused to process the question.',
                },
              };
            }
          }
        }
      }
    }

    const outputParsed = response.output_parsed;
    if (!outputParsed) {
      return {
        status: 'error',
        error: {
          code: 'INCOMPLETE_OUTPUT',
          message: 'The interpretation provider did not return structured extraction output.',
        },
      };
    }

    const extractionValidation = ExtractionTransportSchema.safeParse(outputParsed);
    if (!extractionValidation.success) {
      return {
        status: 'error',
        error: {
          code: 'INVALID_EXTRACTION',
          message: 'Extracted data violated the transport schema.',
          details: extractionValidation.error.issues,
        },
      };
    }

    return mapExtractionToDraft(extractionValidation.data, input);
  } catch (error: unknown) {
    if (error instanceof OpenAI.APIConnectionTimeoutError) {
      return {
        status: 'error',
        error: {
          code: 'TIMEOUT',
          message: 'The interpretation request to Groq timed out. Please try again.',
        },
      };
    }

    if (error instanceof OpenAI.RateLimitError) {
      const retryAfter =
        (typeof error.headers?.get === 'function' ? error.headers.get('retry-after') : null) ??
        (error.headers as unknown as Record<string, string> | undefined)?.['retry-after'] ??
        null;

      return {
        status: 'error',
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message: retryAfter
            ? `Groq rate limit exceeded. Please retry after ${retryAfter} seconds.`
            : 'Groq interpretation rate limit exceeded. Please wait a moment and try again.',
          details: retryAfter ? { retryAfter } : undefined,
        },
      };
    }

    if (
      error instanceof OpenAI.AuthenticationError ||
      error instanceof OpenAI.PermissionDeniedError
    ) {
      return {
        status: 'error',
        error: {
          code: 'PROVIDER_AUTH_ERROR',
          message: 'Groq API authentication failed. Verify your GROQ_API_KEY.',
        },
      };
    }

    if (error instanceof OpenAI.BadRequestError) {
      return {
        status: 'error',
        error: {
          code: 'PROVIDER_BAD_REQUEST',
          message: 'Groq provider rejected request parameters.',
        },
      };
    }

    if (error instanceof OpenAI.APIError) {
      return {
        status: 'error',
        error: {
          code: 'PROVIDER_ERROR',
          message: 'The Groq interpretation provider encountered an error.',
        },
      };
    }

    return {
      status: 'error',
      error: {
        code: 'INTERNAL_ERROR',
        message: 'An unexpected internal error occurred during interpretation.',
      },
    };
  }
}

import OpenAI from 'openai';

export const GROQ_BASE_URL = 'https://api.groq.com/openai/v1';

/**
 * Creates an OpenAI SDK client explicitly targeting Groq's OpenAI-compatible endpoint.
 * Configured with:
 * - baseURL: https://api.groq.com/openai/v1
 * - timeout: 15000 ms (bounded request budget)
 * - maxRetries: 0 (avoids repeated automatic retries burning rate limits)
 * Server-only execution.
 */
export function createGroqClient(apiKey: string): OpenAI {
  return new OpenAI({
    apiKey,
    baseURL: GROQ_BASE_URL,
    timeout: 15000,
    maxRetries: 0,
  });
}

/**
 * Backwards-compatible alias for createGroqClient.
 */
export const createOpenAIClient = createGroqClient;

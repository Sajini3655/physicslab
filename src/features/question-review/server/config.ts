export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export interface ServerConfig {
  apiKey: string;
  model: string;
}

/**
 * Lazily retrieves server-side Groq configuration from environment variables.
 * Fails with ConfigurationError if GROQ_API_KEY or GROQ_MODEL is missing.
 * No hardcoded default model is assumed or silently invented.
 * Must NOT read or fall back to OPENAI_API_KEY or OPENAI_MODEL.
 */
export function getServerConfig(): ServerConfig {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  const model = process.env.GROQ_MODEL?.trim();

  if (!apiKey || !model) {
    const missing: string[] = [];
    if (!apiKey) missing.push('GROQ_API_KEY');
    if (!model) missing.push('GROQ_MODEL');
    throw new ConfigurationError(
      `Missing required environment variable(s): ${missing.join(', ')}. Configure them in your environment.`
    );
  }

  return { apiKey, model };
}

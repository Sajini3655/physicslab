import { NextRequest, NextResponse } from 'next/server';
import { QuestionSubmissionInputSchema } from '@/features/question-review/schema';
import {
  interpretQuestion,
  type InterpretationErrorCode,
  type InterpretationResult,
} from '@/features/question-review/server';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 64 * 1024; // 64 KB maximum request size

function mapErrorCodeToStatus(code: InterpretationErrorCode): number {
  switch (code) {
    case 'INVALID_REQUEST':
    case 'MALFORMED_JSON':
      return 400;
    case 'PAYLOAD_TOO_LARGE':
      return 413;
    case 'RATE_LIMIT_EXCEEDED':
      return 429;
    case 'TIMEOUT':
      return 504;
    case 'CONFIG_MISSING':
    case 'INTERNAL_ERROR':
      return 500;
    case 'PROVIDER_REFUSAL':
    case 'INCOMPLETE_OUTPUT':
    case 'INVALID_EXTRACTION':
    case 'PROVIDER_AUTH_ERROR':
    case 'PROVIDER_BAD_REQUEST':
    case 'PROVIDER_ERROR':
    default:
      return 502;
  }
}

export async function POST(req: NextRequest): Promise<NextResponse<InterpretationResult>> {
  // 1. Bound request-body size via Content-Length header if present
  const contentLengthHeader = req.headers.get('content-length');
  if (contentLengthHeader) {
    const parsedLength = parseInt(contentLengthHeader, 10);
    if (!Number.isNaN(parsedLength) && parsedLength > MAX_BODY_BYTES) {
      return NextResponse.json<InterpretationResult>(
        {
          status: 'error',
          error: {
            code: 'PAYLOAD_TOO_LARGE',
            message: `Request body exceeds maximum size limit of ${MAX_BODY_BYTES} bytes.`,
          },
        },
        { status: 413 }
      );
    }
  }

  // 2. Read body text safely with byte budget enforcement
  let rawBodyText: string;
  try {
    rawBodyText = await req.text();
    if (new TextEncoder().encode(rawBodyText).length > MAX_BODY_BYTES) {
      return NextResponse.json<InterpretationResult>(
        {
          status: 'error',
          error: {
            code: 'PAYLOAD_TOO_LARGE',
            message: `Request body exceeds maximum size limit of ${MAX_BODY_BYTES} bytes.`,
          },
        },
        { status: 413 }
      );
    }
  } catch {
    return NextResponse.json<InterpretationResult>(
      {
        status: 'error',
        error: {
          code: 'MALFORMED_JSON',
          message: 'Failed to read request body.',
        },
      },
      { status: 400 }
    );
  }

  // 3. Parse JSON safely
  let rawJson: unknown;
  try {
    rawJson = JSON.parse(rawBodyText);
  } catch {
    return NextResponse.json<InterpretationResult>(
      {
        status: 'error',
        error: {
          code: 'MALFORMED_JSON',
          message: 'Request body must be valid JSON.',
        },
      },
      { status: 400 }
    );
  }

  // 4. Validate payload with domain submission schema
  const validationResult = QuestionSubmissionInputSchema.safeParse(rawJson);
  if (!validationResult.success) {
    return NextResponse.json<InterpretationResult>(
      {
        status: 'error',
        error: {
          code: 'INVALID_REQUEST',
          message: 'Request validation failed.',
          details: validationResult.error.issues,
        },
      },
      { status: 400 }
    );
  }

  // 5. Preserve exact un-trimmed original text (including exact whitespace, newlines, and Sinhala characters)
  const exactOriginalText =
    typeof (rawJson as { originalText?: unknown })?.originalText === 'string'
      ? (rawJson as { originalText: string }).originalText
      : validationResult.data.originalText;

  const submissionInput = {
    ...validationResult.data,
    originalText: exactOriginalText,
  };

  // 6. Contact interpretation service
  const result = await interpretQuestion(submissionInput);

  if (result.status === 'success') {
    return NextResponse.json<InterpretationResult>(result, { status: 200 });
  }

  if (result.status === 'unsupported') {
    return NextResponse.json<InterpretationResult>(result, { status: 200 });
  }

  // Error outcome
  const httpStatus = mapErrorCodeToStatus(result.error.code);
  return NextResponse.json<InterpretationResult>(result, { status: httpStatus });
}

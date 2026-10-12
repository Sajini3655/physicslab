# Question Interpretation API (`POST /api/questions/interpret`)

This document describes the server-side question interpretation API implemented in Step 4 of PhysicsLab, powered by **Groq** via its OpenAI-compatible Responses API and Structured Outputs. The endpoint transforms a student's raw English or Sinhala uniform-motion question into an editable `UniformMotionDraft` while preserving student reasoning and leaving the requested target quantity unsolved.

---

## 1. Endpoint Overview

- **Route**: `POST /api/questions/interpret`
- **Runtime**: Next.js App Router Route Handler (`nodejs` runtime)
- **Content-Type**: `application/json`
- **Max Request Size**: 64 KB (enforced via `Content-Length` header check and body stream byte inspection)
- **Active Provider**: **Groq** (`https://api.groq.com/openai/v1`) using the official OpenAI JavaScript SDK
- **Middleware Exemption**: Excluded from localized page route rewriting (`src/proxy.ts` matcher covers `['/', '/(si|en)/:path*']`), ensuring `/api/...` calls return direct JSON without redirects.

---

## 2. Environment Configuration

The service lazily reads server-side configuration only when interpretation is requested. Automated unit tests and Next.js builds run without requiring credentials.

| Environment Variable | Description | Default | Required at Runtime |
|---|---|---|---|
| `GROQ_API_KEY` | Secret API key for Groq Cloud API | *None* | Yes (server-only) |
| `GROQ_MODEL` | Target Groq model supporting Structured Outputs (documented: `openai/gpt-oss-120b`) | *None* | Yes (server-only) |

> [!IMPORTANT]
> The application requires `GROQ_API_KEY` and `GROQ_MODEL`. It does **not** require or read `OPENAI_API_KEY` or `OPENAI_MODEL`, and never falls back to OpenAI or paid endpoints. If either Groq variable is missing when a request arrives, the endpoint returns HTTP 500 with code `CONFIG_MISSING`.

A template `.env.example` is provided in the repository root:
```env
# PhysicsLab Server Environment Variables (Groq Provider)
GROQ_API_KEY=
GROQ_MODEL=openai/gpt-oss-120b
```

---

## 3. Request Contract

Requests reuse the validated domain submission schema (`QuestionSubmissionInputSchema`):

```json
{
  "lessonId": "mechanics",
  "topicId": "straight-line-motion",
  "subtopicId": "uniform-velocity",
  "originalText": "A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres.",
  "locale": "en"
}
```

### Validation Rules
- `lessonId`: Must be exactly `"mechanics"`.
- `topicId`: Must be exactly `"straight-line-motion"`.
- `subtopicId`: Must be exactly `"uniform-velocity"`.
- `originalText`: 1–4000 characters; must contain non-whitespace text. The exact raw string (including line breaks, whitespace, and Sinhala Unicode characters) is preserved in the resulting draft.
- `locale`: `"en"` | `"si"`. Indicates question language independently of interface language.

---

## 4. Response Contract

The endpoint returns a typed discriminated union on `status`:

### 4.1 Success (`status: "success"`) — HTTP 200
Returned when the question is parsed into a valid `UniformMotionDraft`:

```json
{
  "status": "success",
  "draft": {
    "schemaVersion": 1,
    "scenarioId": "sc-4b5c719e-4e47-4952-b88d-71b305886fe2",
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
}
```

### 4.2 Unsupported Question (`status: "unsupported"`) — HTTP 200
Returned when the input question involves physics outside the single-object uniform-velocity scope (e.g., acceleration, deceleration, multiple objects, direction reversals):

```json
{
  "status": "unsupported",
  "reason": "This question involves accelerating motion, which is outside the scope of uniform velocity."
}
```

### 4.3 Operational / Client Error (`status: "error"`) — HTTP 4xx / 5xx
Returned upon request validation failure, configuration issues, rate limits, or provider failure:

```json
{
  "status": "error",
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Groq rate limit exceeded. Please retry after 20 seconds.",
    "details": {
      "retryAfter": "20"
    }
  }
}
```

---

## 5. Stable Error Codes & HTTP Statuses

| Error Code | HTTP Status | Description |
|---|---|---|
| `INVALID_REQUEST` | 400 | Request body failed schema validation (e.g., blank text, length > 4000, invalid topic). |
| `MALFORMED_JSON` | 400 | Request body is not syntactically valid JSON. |
| `PAYLOAD_TOO_LARGE` | 413 | Request body exceeds 64 KB limit. |
| `RATE_LIMIT_EXCEEDED` | 429 | Groq API rate limit reached. Preserves `retryAfter` detail if supplied in `Retry-After` header. |
| `CONFIG_MISSING` | 500 | `GROQ_API_KEY` or `GROQ_MODEL` is missing on the server. |
| `INTERNAL_ERROR` | 500 | Unexpected server error. |
| `PROVIDER_REFUSAL` | 502 | The Groq model refused to process the prompt. |
| `INCOMPLETE_OUTPUT` | 502 | Provider returned truncated or unparseable structured output. |
| `INVALID_EXTRACTION` | 502 | Extracted data could not be validated against the uniform-motion draft schema. |
| `PROVIDER_AUTH_ERROR` | 502 | Invalid `GROQ_API_KEY` supplied. |
| `PROVIDER_BAD_REQUEST` | 502 | Invalid request arguments sent to Groq. |
| `PROVIDER_ERROR` | 502 | General Groq API failure. |
| `TIMEOUT` | 504 | Upstream call to Groq timed out (15 s timeout). |

---

## 6. Provider Settings & Safety Guarantees

1. **Provider Isolation**:
   - The client is initialized with `baseURL: "https://api.groq.com/openai/v1"`.
   - `maxRetries: 0` disables repeated automatic retries to avoid rapidly exhausting Groq Free tier quotas.
2. **Reasoning Control**:
   - Configured with `reasoning: { effort: 'low' }` for the `openai/gpt-oss-120b` model, controlling reasoning token usage.
   - Reasoning traces are never forwarded or exposed to the frontend.
3. **Preserve Student Reasoning (Zero Calculation)**:
   - The requested target quantity (`target`) is strictly mapped to `type: "unknown"`.
   - The unknown target **never** receives a numeric `value` or solved answer.
   - Clarifications **never** disclose worked steps, formulas, or computed results.
4. **Application Authority**:
   - `schemaVersion` (1), `scenarioId` (`sc-...`), `revision` (1), `topic` (`uniform-velocity`), `originalText`, and `locale` are assigned strictly by the application.
   - The provider cannot inject authority flags (`confirmed`, `physicsValid`, `answerVisibility`).
5. **No Runtime Fallback to Fake Data**:
   - On provider failure or refusal, the API returns a typed error. It never fabricates successful draft fixtures or falls back to paid OpenAI endpoints.

---

## 7. Windows PowerShell Smoke-Test Examples

### 7.1 Verify Validation Rejection (No API Key Required)

Run this against your local development server (`http://localhost:3000`):

```powershell
$headers = @{ "Content-Type" = "application/json" }
$body = @{
    lessonId = "mechanics"
    topicId = "straight-line-motion"
    subtopicId = "uniform-velocity"
    originalText = "   "
    locale = "en"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/questions/interpret" `
        -Method Post `
        -Headers $headers `
        -Body $body
} catch {
    $streamReader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
    $errorJson = $streamReader.ReadToEnd()
    Write-Host "Received expected error response:"
    Write-Host $errorJson
}
```

### 7.2 Live Interpretation Smoke-Test (Requires Active Groq Key in Environment)

```powershell
# Set environment variables in your terminal session or .env.local before running:
# $env:GROQ_API_KEY = "gsk_..."
# $env:GROQ_MODEL = "openai/gpt-oss-120b"

$headers = @{ "Content-Type" = "application/json" }
$body = @{
    lessonId = "mechanics"
    topicId = "straight-line-motion"
    subtopicId = "uniform-velocity"
    originalText = "A car moves at a constant velocity of 25 m/s for 12 s. Find its displacement in metres."
    locale = "en"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:3000/api/questions/interpret" `
    -Method Post `
    -Headers $headers `
    -Body $body

$response | ConvertTo-Json -Depth 5
```

---

## 8. Bilingual Live-Model Testing Checklist

> [!NOTE]
> The automated test suite (`npm test`) verifies boundary and mapping behavior using mocked provider responses to avoid costs. The checklist below is for manual live testing once real credentials are provided. **This checklist has not yet been run against a live Groq account.**

- [ ] **Test Case 1 (English, Target s)**:
  `"A car moves at a constant velocity of 20 m/s for 10 s. Find its displacement in metres."`
  - Expected: `target: "s"`, `s.type: "unknown"`, `u.value: 20`, `t.value: 10`, `axis.basis: "display-convention"`.
- [ ] **Test Case 2 (English, Signed Target u, Question-Stated Axis)**:
  `"Taking east as positive, an object moves at constant velocity and has a displacement of -50 m over 5 s. Find its velocity in m/s."`
  - Expected: `target: "u"`, `u.type: "unknown"`, `s.value: -50`, `t.value: 5`, `axis.direction: "east"`, `axis.basis: "question-stated"`.
- [ ] **Test Case 3 (English, Target t, Zero Displacement)**:
  `"Taking north as positive, a train moves at a constant velocity of -60 km/h and undergoes a displacement of 0 km. Find the elapsed time in hours."`
  - Expected: `target: "t"`, `t.type: "unknown"`, `s.value: 0`, `u.value: -60`.
- [ ] **Test Case 4 (Sinhala, Target s)**:
  `"මෝටර් රථයක් 20 m/s ඒකාකාර ප්‍රවේගයෙන් තත්පර 10 ක් ගමන් කරයි. එහි විස්ථාපනය මීටර වලින් සොයන්න."`
  - Expected: `target: "s"`, `s.type: "unknown"`, `s.unit: "m"`, `u.value: 20`, `t.value: 10`, `object: "මෝටර් රථය"`.
- [ ] **Test Case 5 (Sinhala, Target u, Signed Negative)**:
  `"නැගෙනහිර ධන දිශාව ලෙස ගනිමින්, වස්තුවක් ඒකාකාර ප්‍රවේගයෙන් ගමන් කර තත්පර 5 කදී -50 m විස්ථාපනයක් ලබයි. එහි ප්‍රවේගය m/s වලින් සොයන්න."`
  - Expected: `target: "u"`, `u.type: "unknown"`, `s.value: -50`, `t.value: 5`, `axis.direction: "නැගෙනහිර"`.
- [ ] **Test Case 6 (Sinhala, Target t)**:
  `"දුම්රියක් -60 km/h ඒකාකාර ප්‍රවේගයෙන් ගමන් කරමින් -120 km විස්ථාපනයක් ලබයි. ගත වූ කාලය පැය වලින් සොයන්න."`
  - Expected: `target: "t"`, `t.type: "unknown"`, `s.value: -120`, `u.value: -60`.
- [ ] **Test Case 7 (Unsupported Acceleration Question - English)**:
  `"A car accelerates from rest at 2 m/s^2 for 5 s. Find its final velocity."`
  - Expected: `status: "unsupported"`, reason explains acceleration is unsupported.
- [ ] **Test Case 8 (Unsupported Acceleration Question - Sinhala)**:
  `"මෝටර් රථයක් නිශ්චලතාවයේ සිට 2 m/s^2 ත්වරණයකින් තත්පර 5ක් ගමන් කරයි. එහි ප්‍රවේගය සොයන්න."`
  - Expected: `status: "unsupported"`, reason explains ත්වරණය (acceleration) is unsupported.
- [ ] **Test Case 9 (Missing Information / Unresolved Quantity)**:
  `"A car moves at 20 m/s. What is its displacement?"`
  - Expected: `target: "s"`, `t.type: "unresolved"`, clarifications list missing time.

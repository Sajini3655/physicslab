# PhysicsLab Deployment Guide & Hosted Student Experience

This guide documents the live deployment configuration, hosting architecture, environment variables, validation procedures, and operational rollback instructions for PhysicsLab on [Vercel](https://vercel.com).

---

## 1. Live Production Deployment Details

- **Live Production URL**: [https://physicslab-eta.vercel.app](https://physicslab-eta.vercel.app)
- **Direct Candidate Deployment**: [https://physicslab-q20ey5fs6-sajini3655s-projects.vercel.app](https://physicslab-q20ey5fs6-sajini3655s-projects.vercel.app)
- **Deployment Platform**: Vercel (Production Environment, Serverless Edge Network)
- **Project Name**: `physicslab` (`sajini3655s-projects/physicslab`)
- **Project ID**: `prj_nWwSWdAT2e3xpwJC3aL30Rhp21rZ`
- **Visibility**: Publicly accessible HTTPS URL suitable for student trials and LinkedIn sharing.
- **Deployment Protection**: SSO Protection Disabled for public access (`vercel project protection disable --sso`).

---

## 2. Architecture & Platform Requirements

- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI Engine**: React 19, Tailwind CSS 4, Radix UI / shadcn/ui components
- **Internationalization**: `next-intl` (Bilingual English `en` & Sinhala `si` routes)
- **Runtime Environment**: Node.js 22 LTS Serverless Runtime
- **Serverless API Routes**:
  - `POST /api/questions/interpret` (`runtime: 'nodejs'`) handles bilingual physics question structuring and extraction via Groq Cloud API.

---

## 3. Environment Variables Configuration

The following server-only variables are configured in the Vercel project settings (`Settings -> Environment Variables`):

| Variable | Requirement | Environments | Description / Purpose |
| :--- | :---: | :---: | :--- |
| `GROQ_API_KEY` | Required for AI Review | Production, Preview, Development | Secret API key for Groq Cloud LLM service (`/api/questions/interpret`). |
| `GROQ_MODEL` | Required for AI Review | Production, Preview, Development | Structured outputs model identifier: `openai/gpt-oss-120b`. |

> [!NOTE]
> All 42 official practicals (Experiments 1–42), simulation engines, interactive instruments, summative assessments, rubric evaluations, mistake revision, and learning progress dashboards run entirely in the browser client using `localStorage`. They operate independently of any server-side credentials.

---

## 4. Student Data Isolation & Storage Scope

Student learning data (practical observations, rubric self-evaluations, completed assessments, mistake review logs, and curriculum progress) is persisted via client-side `localStorage`.

- **Origin Isolation**: Web browser storage is strictly scoped to the site origin (`https://physicslab-eta.vercel.app`). Observations or test records created on `http://localhost:3000` do not conflict with or leak into the hosted HTTPS URL.
- **Trial Experience**: Students accessing the hosted trial start with fresh observations and can experience both guided and independent modes without pre-existing state.

---

## 5. Deployment Commands & Workflow

### Deploying Changes to Production
To build and deploy changes to the live production URL:
```bash
# 1. Typecheck and run tests locally
npm run typecheck
npm test

# 2. Deploy directly to Vercel Production
npx vercel deploy --prod --yes
```

### Deploying a Preview Candidate
To deploy without immediate promotion to the production alias:
```bash
npx vercel deploy --prod --skip-domain --yes
```

### Rollback Procedure
If a regression is identified in production, instantly revert to a previous working deployment:
```bash
# Inspect recent deployments
npx vercel list

# Instantly roll back production alias to a known-healthy deployment
npx vercel rollback <deployment-url-or-id>
# Example:
# npx vercel rollback dpl_6naHq6zZEd2r5fuFoXLhwMHZDjc8
```

Alternatively, rollbacks can be triggered with one click in the Vercel Dashboard under **Deployments → Select Deployment → Instant Rollback**.

---

## 6. Automated Post-Deployment Verification Suite

Run the end-to-end Playwright verification script against the live hosted URL:

```bash
# Verify against production URL
PLAYWRIGHT_TEST_BASE_URL="https://physicslab-eta.vercel.app" node tests/verify-hosted-deployment.mjs
```

### Verified Features & Evidence:
1. **Root Redirect**: Root `https://physicslab-eta.vercel.app/` redirects smoothly to `/[locale]` (`/en`).
2. **Bilingual Switching**: Seamless toggling between English (`/en`) and Sinhala (`/si`) without state degradation.
3. **Lesson Navigation**: Full curriculum navigation across Unit 1 (Measurement), Unit 2 (Mechanics), Unit 3 (Oscillations & Waves), Thermal Physics, Electricity, and Electronics.
4. **Waves Practicals Hub (Optics Alignment)**:
   - **Experiment 18**: Prism critical-angle method ($n = 1/\sin c$) with image-disappearance ray geometry and halving check.
   - **Experiment 20**: Spectrometer minimum deviation method ($D = 38.60^\circ$) with dual vernier angle subtraction and grating mode.
   - **Experiment 21.2**: Concave lens plane mirror strip no-parallax method with linear regression $1/v$ vs $1/u$ ($f = -15.0\text{ cm}$).
5. **Assessment Lifecycle & History**:
   - MCQ and numerical input completion.
   - Solution and rubric hiding prior to submission.
   - Post-submission score card, marking rubrics, physical explanations, and persistence into **My Learning** dashboard.
6. **Mobile 375px Viewport**:
   - Zero horizontal overflow (`scrollWidth === clientWidth === 375px`).
   - Clean multi-line tab wrapping on Sinhala labels in `WavesPracticalsHub`.
7. **Live AI Question Interpretation (`POST /api/questions/interpret`)**:
   - Verified in production with Groq Cloud LLM (`openai/gpt-oss-120b`).
   - Real-time extraction of moving object, positive axis direction, given velocity, time, and unknown displacement rendered into the Scenario Review card.

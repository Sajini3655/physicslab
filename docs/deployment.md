# PhysicsLab Deployment Guide & Hosted Student Experience

This guide documents the deployment configuration, environment variables, validation procedures, and hosting instructions for PhysicsLab on [Vercel](https://vercel.com).

---

## 1. Architecture & Platform Requirements

- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI Engine**: React 19, Tailwind CSS 4, shadcn/ui components
- **Internationalization**: `next-intl` (Bilingual English `en` & Sinhala `si`)
- **Runtime Environment**: Node.js 20+ / 22 LTS
- **Serverless API Routes**:
  - `POST /api/questions/interpret` (`runtime: 'nodejs'`) handles bilingual physics question structuring and extraction via Groq Cloud API.

---

## 2. Environment Variables

Configure the following variables in the hosting provider dashboard (e.g. Vercel Project Settings → Environment Variables):

| Variable | Requirement | Visibility | Description / Purpose |
| :--- | :---: | :---: | :--- |
| `GROQ_API_KEY` | Optional / Feature-specific | Server-Only (Secret) | API key for Groq Cloud LLM service (`/api/questions/interpret`). If omitted, question submission returns a typed `500 CONFIG_MISSING` error with guidance, while the rest of the application remains fully functional. |
| `GROQ_MODEL` | Optional (defaults to `openai/gpt-oss-120b`) | Server-Only | Model identifier for Groq structured output extraction. |

> [!NOTE]
> All official practicals (Experiments 1–42), simulation engines, interactive instruments, summative assessments, rubric evaluations, mistake revision, and learning progress dashboards run entirely in the browser client using `localStorage`. They do not require any server-side credentials or database connections.

---

## 3. Storage Scope & Student Data Isolation

Student learning data (practical observations, rubric self-evaluations, completed assessments, mistake review logs, and curriculum progress) is persisted via client-side `localStorage`.

- **Origin Isolation**: Web browser storage is strictly scoped to the site origin (`https://<deployment-url>`). Observations or test records created on `http://localhost:3000` will not automatically transfer to the hosted HTTPS URL.
- **Trial Setup**: Students accessing the hosted trial start with empty observations and can experience the guided or independent modes afresh.

---

## 4. Local Quality Assurance & Pre-Deployment Verification

Before triggering any deployment, verify the codebase locally using non-watch scripts:

```bash
# 1. Typecheck
npm run typecheck

# 2. Linting
npm run lint

# 3. Unit and regression test suite
npm run test

# 4. Production Next.js build
npm run build

# 5. Playwright end-to-end practical and journey verification
node tests/verify-practical-experience.mjs
```

---

## 5. Deployment Instructions (Vercel)

### Option A: Automatic GitHub CI/CD Integration (Recommended)
1. Import repository `https://github.com/vishiiboy/physicslab.git` into your Vercel account.
2. Select Framework Preset: **Next.js**.
3. Set Root Directory: `./`.
4. (Optional) Under **Environment Variables**, add `GROQ_API_KEY` and `GROQ_MODEL`.
5. Deploy. Every push to `main` creates a Production deployment, and branches (such as `chore/sajini-preview-deployment`) automatically generate a Preview deployment URL.

### Option B: Vercel CLI Deployment
1. Log in or supply an access token:
   ```bash
   npx vercel login
   # OR set token
   export VERCEL_TOKEN="<your-vercel-token>"
   ```
2. Link project (first time):
   ```bash
   npx vercel link
   ```
3. Deploy preview:
   ```bash
   npx vercel deploy
   ```
4. Deploy to production:
   ```bash
   npx vercel deploy --prod
   ```

---

## 6. Hosted Post-Deployment Verification Checklist

Verify the deployed application at `https://<deployed-url>`:
- [ ] Root redirect: `https://<deployed-url>` redirects to `/[locale]` (e.g. `/en`).
- [ ] Language switch: English (`/en`) $\leftrightarrow$ Sinhala (`/si`).
- [ ] Unit & lesson navigation: `/en/units/oscillations-and-waves/practical-investigations`.
- [ ] Experiment 18 (Prism Critical Angle): Eye position slider along face $BC$, halving diagnostic check ($n = 1/\sin c$).
- [ ] Experiment 20 (Spectrometer Minimum Deviation): Turntable rotation turning point ($38.60^\circ$), dual verniers with wraparound, refractive index formula.
- [ ] Experiment 21.2 (Concave Lens No-Parallax): Plane mirror strip method, eye-shift slider, Cartesian regression $1/v$ vs $1/u$ with negative intercept ($f = -15.0\text{ cm}$).
- [ ] Student journey: Lesson $\to$ Practical $\to$ Assessment $\to$ Mistake Review $\to$ My Learning.
- [ ] Persistence across page reloads and language switching.
- [ ] Mobile responsive layout at 375px viewport with zero horizontal scroll.

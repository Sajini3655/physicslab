# PhysicsLab

### Explore A/L Physics in English and Sinhala.

PhysicsLab is a bilingual learning platform for Sri Lankan G.C.E. Advanced Level Physics students. It brings together interactive lessons, physics simulations, virtual laboratory experiments, and assessments to help students explore concepts through guided practice.

**[Live Demo](https://physicslab-eta.vercel.app)** · **[This Repository](https://github.com/Sajini3655/physicslab)** · **[Upstream Repository](https://github.com/vishiiboy/physicslab)**

Co-developed by **[Vishwa Prabodhana](https://github.com/vishiiboy)** and **[Sajini Tharushika](https://github.com/Sajini3655)**. This repository is Sajini's public fork of the shared PhysicsLab project.

## Features

- **Bilingual learning:** English and Sinhala interfaces, with language switching and localized learning content.
- **Interactive lessons:** Physics explanations, guided activities, and opportunities to practise calculations.
- **Virtual laboratory experiments:** Explore instruments such as vernier calipers, micrometers, spherometers, and travelling microscopes.
- **Physics simulations:** Investigate uniform motion, orbital mechanics, and other concepts through interactive controls and visualizations.
- **AI-assisted question interpretation:** Use Groq-powered interpretation to turn a physics question into a structured scenario that students can review and edit.
- **Assessments and feedback:** Complete assessments with marking rubrics, explanations, assessment history, and mistake revision.
- **Learning progress:** Track activity through the **My Learning** dashboard and return to saved practical work.
- **Responsive interface:** Access lessons and practicals on desktop and mobile devices.

## Technology Stack

| Area | Technologies |
| --- | --- |
| Application | Next.js 16 with the App Router, React 19, TypeScript |
| Styling and components | Tailwind CSS 4, shadcn/ui, Radix UI |
| Localization | next-intl, English and Sinhala translation files |
| AI interpretation | Groq Cloud API |
| Validation | Zod |
| Testing | Vitest, Playwright |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 24
- npm 11.6 or later
- A Groq API key for AI-assisted question interpretation

### 1. Clone the repository

```bash
git clone https://github.com/Sajini3655/physicslab.git
cd physicslab
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Copy `.env.example` to a new file named `.env.local` in the project root. Configure the Groq settings:

```dotenv
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b
```

Keep the API key server-side. Do not commit `.env.local` or expose the key through a `NEXT_PUBLIC_` variable.

### 4. Start the development server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## Quality Checks

| Command | Purpose |
| --- | --- |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npx vitest run` | Run the Vitest test suite once |

The `tests/` directory also contains Playwright verification scripts for practical workflows and the hosted application. See the [deployment guide](docs/deployment.md) for deployment and verification details.

## Localization and Saved Progress

- English routes use `/en`; Sinhala routes use `/si`.
- Translation files are maintained in `messages/en.json` and `messages/si.json`.
- Learning progress and practical work use browser-local storage. Saved data is specific to the browser and device; it is not synchronized between devices.
- Clearing browser storage can remove locally saved progress.

## Project Structure

| Path | Contents |
| --- | --- |
| `src/` | Application routes, components, physics logic, and supporting services |
| `messages/` | English and Sinhala translations |
| `public/` | Static assets |
| `tests/` | Automated tests and verification scripts |
| `docs/` | Project contracts and deployment documentation |
| `.env.example` | Environment configuration template |
| `vercel.json` | Vercel deployment configuration |

## Deployment

PhysicsLab is hosted on **Vercel**:

**[https://physicslab-eta.vercel.app](https://physicslab-eta.vercel.app)**

For your own deployment, configure `GROQ_API_KEY` and `GROQ_MODEL` in the Vercel project's environment settings. See [docs/deployment.md](docs/deployment.md) for the project's deployment notes.

## Contributors and Responsibilities

PhysicsLab is a collaborative project developed by Vishwa Prabodhana and Sajini Tharushika, with complementary responsibilities across the application.

### Vishwa Prabodhana

**Question Workflows, AI Integration, and Localization**

- Developed the bilingual topic-selection and physics-question input interfaces.
- Integrated the server-side AI interpretation API for structured question extraction.
- Implemented editable scenario review for extracted variables and problem details.
- Built scenario confirmation workflows for passing reviewed data to simulations.
- Implemented English and Sinhala localization for the question workflow.
- Added question-draft persistence across refreshes and language switches.

**GitHub:** [vishiiboy](https://github.com/vishiiboy)

### Sajini Tharushika

**Physics Simulations, Practical Workflows, and Validation**

- Developed the physics engine, interactive simulations, and playback controls.
- Built virtual instruments and practical experiment workflows for physics learning.
- Implemented calculation checks and validation of physics results.
- Added browser-local persistence for practical work and learning progress.
- Improved responsive practical layouts for desktop and mobile devices.
- Wrote automated physics and workflow tests using Vitest and Playwright.

**GitHub:** [Sajini3655](https://github.com/Sajini3655)

### Shared Responsibility

The Vercel deployment was a joint contribution by both developers.

## Feedback

The shared project is maintained at **[vishiiboy/physicslab](https://github.com/vishiiboy/physicslab)**. Feedback, bug reports, and suggestions can be submitted through the **[upstream issue tracker](https://github.com/vishiiboy/physicslab/issues)**.

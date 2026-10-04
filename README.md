# PhysicsLab

PhysicsLab is a Sinhala/English learning application for Sri Lankan A/L Physics. Its purpose is to help students visualize the situation described in a physics question while preserving their independent thinking.

## Current Implementation Status
**STEP 1 Complete**: Project foundation established with Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/ui, and next-intl for localization. A minimal working starter page for the "Uniform velocity" module has been implemented with an English/Sinhala language switcher.
**STEP 2 Complete**: Shared scenario data contract established for uniform velocity. See [Uniform Motion Contract](docs/uniform-motion-contract.md).

## Prerequisites
- Node.js 24 LTS (e.g. v24.12.0+)
- npm 11.6+

## Installation
```bash
npm install
```

## Local Development
Start the development server:
```bash
npm run dev
```

## Validation Commands
Run the following scripts to ensure code quality:
- `npm run lint`: ESLint checking
- `npm run typecheck`: TypeScript static checking
- `npm run build`: Production build test

## Localization
The application supports English (`en`) and Sinhala (`si`) via `next-intl`. English is the default language. Language preferences are persisted across refreshes. Translations are stored in `messages/en.json` and `messages/si.json`.

## Developer Responsibilities
This project is built collaboratively by two developers:
- **Developer 1**: Question input, interpretation API, editable review, confirmation, and localization (Frontend/Full-stack).
- **Developer 2 (Sajini)**: Physics engine, SVG simulation, playback controls, and physics tests.

## Next Steps
**STEP 3**: Implementation of the user-facing interpretation editing forms and simulation integration.

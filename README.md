# Elsasa Company Website

Official company profile website for **Elsasa Company**. This project provides a modern, maintainable frontend foundation for a company landing page will be built on in later milestones.

## Technology Stack

- **Vue 3** — Progressive JavaScript framework
- **TypeScript** — Type-safe JavaScript
- **Vite** — Fast build tool and dev server
- **PrimeVue** — UI component library
- **PrimeIcons** — Icon library
- **Vue Router** — Client-side routing
- **ESLint** — Code linting
- **Prettier** — Code formatting

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`) to view the site.

## Google Analytics

This site uses [Google Analytics 4](https://analytics.google.com/) (GA4) via the official `gtag.js` snippet. Analytics is loaded from application code (`src/lib/analytics.ts`), not hardcoded in `index.html`.

### Configuration

Set the measurement ID in an environment variable:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

For production builds, the value is read from `.env.production`. Copy `.env.example` if you need a starting point:

```bash
cp .env.example .env.production
```

### Where to place the Measurement ID

| File | Purpose |
| ---- | ------- |
| `.env.production` | Used when running `npm run build` (committed default for this project) |
| `.env.production.local` | Optional local override (ignored by git via `*.local`) |

The ID is injected at build time through Vite's `import.meta.env.VITE_GA_MEASUREMENT_ID`.

### Which environments enable analytics

| Environment | Analytics |
| ----------- | --------- |
| `npm run dev` | Disabled |
| `npm run build` / deployed production | Enabled when `VITE_GA_MEASUREMENT_ID` is set |
| `npm run preview` | Enabled when built with a measurement ID |

### How to disable analytics

- **Development:** Analytics is always off; no action needed.
- **Production:** Remove the variable, leave it empty, or delete `.env.production` before building. Page views are not sent when `VITE_GA_MEASUREMENT_ID` is unset.

Route changes in the Vue SPA are tracked automatically via Vue Router (`page_view` events on each navigation).

## Build Production

Create an optimized production build:

```bash
npm run build
```

The static output is written to the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Future Deployment Target

This project is intended for deployment to **Cloudflare Pages**. The build output in `dist/` will be published as a static site in a later milestone.

## Project Structure

```
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── layout/
│   └── common/
├── pages/
├── router/
├── App.vue
└── main.ts
public/
```

## Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run preview` | Preview production build   |
| `npm run lint`  | Lint and fix source files      |
| `npm run format`| Format source files with Prettier |

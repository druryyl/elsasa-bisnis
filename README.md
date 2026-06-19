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

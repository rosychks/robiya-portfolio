# Robiya Olimjonova — Portfolio

Next.js 14 (App Router) + Tailwind CSS portfolio in a glassmorphism style, with a language switcher (RU / UZ / EN).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

Deploy easily on [Vercel](https://vercel.com) — just import this folder as a project.

## Where to edit content

- `lib/translations.ts` — all text in Russian, Uzbek and English (bio, experience, projects, skills, education, contact links).
- `components/` — one file per section (Hero, Projects, Experience, Skills, CertEdu, Contact, Nav).
- Project GitHub links for "Agentic RAG Assistant" and "Synapse" currently point to the GitHub profile — update them in `lib/translations.ts` (`projects[].github`) once you have the exact repo URLs.
- Add a real PDF resume to `public/` and link it from `components/Hero.tsx` if you want a "Download Resume" button.

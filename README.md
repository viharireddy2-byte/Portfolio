# Vihari Reddy Aleti — Portfolio

A production-quality personal portfolio for a Data Engineer, built with React, Vite, and Tailwind CSS. The design is built to closely match a reference portfolio's structure and visual language: a light/dark-mode toggle, a two-tone name treatment, a unified reverse-chronological "Journey" timeline (work + education combined), project cards with headline metrics, and a categorized Technical Skills grid.

## Tech stack

- **Vite** — fast dev server and production build, zero-config for a static site with no server-side needs
- **React 19** — component model for a maintainable, reusable UI
- **Tailwind CSS v4** — utility CSS with design tokens (colors, fonts) defined once in `src/index.css`, including class-based dark mode via `@custom-variant dark`
- **lucide-react** — icon set (GitHub/LinkedIn use small custom SVGs in `src/components/icons.jsx`, since those brand marks aren't in the current lucide package)

No framework beyond Vite+React is used — a portfolio like this has no server logic, so Next.js or a meta-framework would add build complexity without benefit. It deploys as static files, which is exactly what GitHub Pages serves.

## Project structure

```
├── public/
│   ├── favicon.svg
│   ├── profile.jpg        # profile photo
│   └── resume.pdf         # downloadable resume
├── src/
│   ├── data/
│   │   ├── profile.js      # personal info, hero stats, journey (work+education), skills, certifications
│   │   └── projects.js     # ← add new projects here
│   ├── components/          # one component per section, reusable pieces
│   ├── hooks/
│   │   ├── useActiveSection.js  # scroll tracking for nav underline
│   │   └── useTheme.js          # light/dark mode, persisted to localStorage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # design tokens (light + dark colors, fonts) + Tailwind import
├── index.html                # SEO meta tags
├── vite.config.js            # includes GitHub Pages `base` path
└── .github/workflows/deploy.yml   # auto-deploy on push to main
```

## Content model — adding a new project

Projects are **not** hard-coded into components. To add a project, open `src/data/projects.js` and add a new object to the `projects` array:

```js
{
  id: "my-new-project",
  number: "04",
  category: "Batch & CDC",            // short label shown on the card
  title: "Project Title",
  dates: "Jan 2026 – Present",
  githubUrl: "https://github.com/you/repo",
  tagline: "One-line summary of what it does.",
  metrics: [{ value: "2M+", label: "records" }],   // optional headline numbers
  highlights: ["What you built", "Result you can back up"],
  technologies: ["Python", "Airflow", "Snowflake"],
}
```

The Projects section renders this list automatically — no component changes needed. The same pattern applies to `src/data/profile.js` for updating your summary, hero stats, journey entries, skill categories, or certifications.

### Adding a new Journey entry

`journey` in `src/data/profile.js` is a single reverse-chronological array mixing work and education — add an object with `id`, `type`, `start`, `end`, `duration`, `title`, `org`, and an optional `highlights` array (rendered as bullets).

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`) with hot reload.

To produce a production build locally:

```bash
npm run build
npm run preview   # serve the built dist/ folder locally to sanity-check it
```

## Deploying to GitHub Pages

This repo is configured for **GitHub Actions → GitHub Pages** deployment, so pushing to `main` automatically rebuilds and republishes the site.

### One-time setup

1. Create a GitHub repository named `Portfolio` (or update `base` in `vite.config.js` to match whatever name you use — see below).
2. Push this project to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/viharireddy2-byte/Portfolio.git
   git push -u origin main
   ```
3. In the GitHub repo, go to **Settings → Pages**, and under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push (or re-run the workflow from the **Actions** tab) — the site will build and deploy automatically. It will be live at:
   ```
   https://viharireddy2-byte.github.io/Portfolio/
   ```

### Everyday updates

Once set up, publishing changes is just:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions rebuilds and redeploys automatically — no manual build/upload step.

### If you rename the repository

The `base` path in `vite.config.js` must match the repo name (this is what makes assets resolve correctly under `username.github.io/repo-name/`):

```js
export default defineConfig({
  plugins: [react()],
  base: '/Your-Repo-Name/',
})
```

If you deploy to a **custom domain** or to `username.github.io` (a "user site" repo), set `base: '/'` instead.

## Updating your resume

Replace `public/resume.pdf` with a new export any time — the download links in the hero and footer always point to `/resume.pdf` and need no other changes.

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`), alt text on the profile photo, visible focus states (`:focus-visible`), and `prefers-reduced-motion` support are all built in.
- The theme toggle button has an accessible label that updates with the current mode, and the chosen theme persists across visits via `localStorage`.
- Fonts are loaded from Google Fonts with `display=swap`; the JS bundle is small (no heavy chart/animation libraries).

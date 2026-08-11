# Vihari Reddy Aleti — Portfolio

A production-quality personal portfolio for a Data Engineer, built with React, Vite, and Tailwind CSS. The visual language is drawn from the medallion (Bronze → Silver → Gold) lakehouse architecture described in the Projects section: the hero renders it as an animated pipeline schematic, and a "lineage rail" tracks reading progress down the page like a pipeline monitoring view.

## Tech stack

- **Vite** — fast dev server and production build, zero-config for a static site with no server-side needs
- **React 19** — component model for a maintainable, reusable UI
- **Tailwind CSS v4** — utility CSS with design tokens (colors, fonts) defined once in `src/index.css`
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
│   │   ├── profile.js      # personal info, skills, experience, education, certifications
│   │   └── projects.js     # ← add new projects here
│   ├── components/          # one component per section, reusable pieces
│   ├── hooks/
│   │   └── useActiveSection.js  # scroll tracking for nav + lineage rail
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # design tokens (colors, fonts) + Tailwind import
├── index.html                # SEO meta tags
├── vite.config.js            # includes GitHub Pages `base` path
└── .github/workflows/deploy.yml   # auto-deploy on push to main
```

## Content model — adding a new project

Projects are **not** hard-coded into components. To add a project, open `src/data/projects.js` and add a new object to the `projects` array:

```js
{
  id: "my-new-project",       // unique, url-safe
  title: "Project Title",
  tier: "gold",                 // "gold" | "silver" | "bronze" — cosmetic accent color only
  date: "2026",
  featured: true,
  description: "One or two sentences on what it does and why.",
  tools: ["Python", "Airflow", "Snowflake"],
  githubUrl: "https://github.com/you/repo",   // omit if none
  liveUrl: "https://your-demo.com",            // omit if none
  highlights: [
    { stat: "50%", label: "short label", detail: "One sentence of detail." },
    // 2–4 highlights works best visually
  ],
}
```

The Projects section renders this list automatically — no component changes needed. The same pattern applies to `src/data/profile.js` for updating your summary, skills, experience, education, or certifications.

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

Replace `public/resume.pdf` with a new export any time — the download links in the nav and Contact section always point to `/resume.pdf` and need no other changes.

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`), alt text on the profile photo, visible focus states (`:focus-visible`), and `prefers-reduced-motion` support are all built in.
- The lineage rail and pipeline animation are decorative (`aria-hidden`) and skip real content for screen readers.
- Fonts are loaded from Google Fonts with `display=swap`; the JS bundle is small (no heavy chart/animation libraries).

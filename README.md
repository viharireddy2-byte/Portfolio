# Vihari Reddy — Portfolio

React and Vite portfolio covering Data Engineering, Data Analysis, and Business Intelligence. Retains the original blue visual identity, portrait, dark mode, and experience timeline.

## Content

- `src/data/profile.js`: introduction, professional experience, education, skills, training, contact details, and resume links.
- `src/data/projects.js`: 11 resume-backed projects, grouped into 4 Data Engineering, 4 Data Analysis, and 3 Business Intelligence projects.
- `src/components/Projects.jsx`: category filters; Data Engineering is selected initially. Selecting a category shows only its projects.
- Project cards display only the project name, What I Built highlights, and a GitHub link. Category filters remain; introductory copy, result counts, metric badges, and technology chips are omitted. Work, education, and training dates remain.
- `public/resume.pdf`: the single current resume supplied by the owner; download links are labeled “Resume”.

Content was reconciled against the Data Engineer, Data Analyst, and Business Intelligence resumes supplied for this update. Project performance numbers retain the resumes' workload and benchmark context. Basketpulse figures describe generated data; the manufacturing generation benchmark is local.

## Development

```sh
npm ci
npm run dev
npm run build
```

GitHub Actions builds pushes to `main` and deploys `dist` to GitHub Pages. Vite's base path is configured in `vite.config.js`.

## Contact details

Dallas, TX and the LinkedIn URL were confirmed by the owner. Relocation preference is omitted. Contact email and resume downloads use the supplied current resumes.

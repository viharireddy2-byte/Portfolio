import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub repo name so assets resolve correctly when
// deployed to https://<username>.github.io/Portfolio/ via GitHub Pages.
// If you rename the repo, update this to match.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})

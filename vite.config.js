import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves at the domain root; GitHub Pages uses the repository path.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/Portfolio/',
})

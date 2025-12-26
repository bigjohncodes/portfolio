import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Root path for custom domain (johnagboola.com)
  // Change to '/portfolio/' if using GitHub Pages subdirectory
  base: '/',
  build: {
    outDir: 'dist'
  }
})

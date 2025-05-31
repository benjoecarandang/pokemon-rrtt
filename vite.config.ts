import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pokemon-rrtt/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Ensure clean builds
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // project site lives at: https://rohobits.github.io/everyday-essentials/
  base: '/everyday-essentials/',
  plugins: [react()],
  build: { outDir: 'dist' }
})

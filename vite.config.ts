import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// vite.config.ts
export default defineConfig({
  base: './', // または '/リポジトリ名/'
  plugins: [react(), tailwindcss()],
})

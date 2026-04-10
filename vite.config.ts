import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // これを追加することで、どのURL階層でも正しく動作します
  plugins: [
    react(),
    tailwindcss(),
  ],
})

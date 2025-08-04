import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
//  base: '/writora/', // ✅ base should be outside the plugins array
  plugins: [
    react(),
    tailwindcss()
  ]
})

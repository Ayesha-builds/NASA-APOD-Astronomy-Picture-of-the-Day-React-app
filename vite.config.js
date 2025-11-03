import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite automatically loads .env files — no need to use dotenv manually

export default defineConfig({
  plugins: [react()],
})



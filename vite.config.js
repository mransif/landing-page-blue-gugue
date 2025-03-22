import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/landing-page-blue-gugue/',
  build: {
    chunkSizeWarningLimit: 4000,  // Increase the limit (default is 500)
  },
})

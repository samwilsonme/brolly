import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// Vite config
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    // Proxy API calls to backend during local development
    proxy: {
      '/api': 'http://localhost:3001',  // Local backend API endpoint
    }
  }
})
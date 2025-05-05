import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      // Proxy API requests to the Vercel dev server
      // Assumes Vercel CLI runs functions on default port 3000
      // Adjust the target if your Vercel dev server uses a different port
      '/api': {
         target: 'http://localhost:3000', // Or wherever `vercel dev` runs
         changeOrigin: true,
         // Optional: rewrite path if needed, but usually not for /api
         // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
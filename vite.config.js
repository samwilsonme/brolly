import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: './client', // Explicitly set the root directory to client/
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api/weather': {
        target: 'http://localhost:3000', // Backend URL
        changeOrigin: true,
      },
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/meal-o-matic/', // Update this to match your repository name
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mealOMatic/', // Update this to match your repository name
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
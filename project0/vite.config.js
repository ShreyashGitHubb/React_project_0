import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React_Projects/project0/',
  build: {
    outDir: 'dist', 
  },
});
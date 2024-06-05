import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    copy({
      targets: [
        { src: 'public/_redirects', dest: 'dist' } // Ensure this line is added
      ]
    })
  ],
  build: {
    outDir: 'dist',
  },
});
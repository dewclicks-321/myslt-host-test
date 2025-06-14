import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  build: {
    assetsDir: 'assets',
  }
})

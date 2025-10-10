import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const basePath = mode === 'development' ? '/' : '/interview-react/'
  return {
    plugins: [react()],
    server: {
      port: 8080
    },
    base: basePath
  }
})
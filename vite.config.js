import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ],
  server: {
    port: process.env.PORT || 3000, // Use the PORT environment variable or default to 3000
    host: '0.0.0.0', // Bind to all interfaces to allow external access
  },
})

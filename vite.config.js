import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { autterSourceMaps } from '@autter/runtime-cli/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), autterSourceMaps()],
})

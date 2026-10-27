import { execSync } from 'node:child_process'
import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { autterSourceMaps } from '@autter/runtime-cli/vite'

// Deployed commit SHA, reported as the Autter Runtime release.
function commitSha() {
  const fromEnv = process.env.VERCEL_GIT_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || process.env.GIT_SHA
  if (fromEnv) return fromEnv
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch {
    return 'unknown'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), autterSourceMaps()],
  define: {
    __AUTTER_RELEASE__: JSON.stringify(commitSha()),
  },
})

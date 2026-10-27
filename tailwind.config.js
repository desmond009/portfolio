/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f5f2ec',
        card: '#fbf9f5',
        ink: {
          DEFAULT: '#2a1f1a',
          soft: '#4a3f38',
        },
        muted: '#6b625a',
        chip: '#b8afa6',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

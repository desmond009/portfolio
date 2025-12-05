/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0f172a',
          secondary: '#1e293b',
        },
        primary: {
          teal: '#06b6d4',
          cyan: '#14b8a6',
        },
        secondary: {
          blue: '#3b82f6',
        },
        text: {
          light: '#e2e8f0',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 30px rgba(6, 182, 212, 0.5)',
      },
    },
  },
  plugins: [],
}


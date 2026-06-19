/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#080a0c',
        neon: '#c7a35c',
        dark: {
          base: '#080a0c',
          secondary: '#111416',
        },
        primary: {
          teal: '#86a9a6',
          cyan: '#86a9a6',
        },
        secondary: {
          blue: '#7aa7a5',
        },
        text: {
          light: '#f3eee2',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(199, 163, 92, 0.24)',
        'glow-lg': '0 0 44px rgba(134, 169, 166, 0.24)',
        neon: '0 0 26px rgba(199, 163, 92, 0.2)',
        glass: '0 24px 90px rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
}

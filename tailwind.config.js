/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#020608',
        neon: '#39ff88',
        dark: {
          base: '#020608',
          secondary: '#071217',
        },
        primary: {
          teal: '#39ff88',
          cyan: '#67e8f9',
        },
        secondary: {
          blue: '#38bdf8',
        },
        text: {
          light: '#f8fafc',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(57, 255, 136, 0.28)',
        'glow-lg': '0 0 44px rgba(103, 232, 249, 0.34)',
        neon: '0 0 26px rgba(57, 255, 136, 0.22)',
        glass: '0 24px 90px rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
}

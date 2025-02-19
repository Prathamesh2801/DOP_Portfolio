/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#0f0f0f',
        'bg-modal': 'hsla(0, 0%, 6%, .95)',
        'copy': '#ecede8',
        'copy-dim': 'hsla(72, 12%, 92%, .75)',
        'accent': '#e8594e',
        'subtle': '#232323',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'jersey': ['"Jersey 15"', 'serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e8594e",
          "base-100": "#0f0f0f",
          "base-200": "#0f0f0f",
          "base-300": "#232323",
          "base-content": "#ecede8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


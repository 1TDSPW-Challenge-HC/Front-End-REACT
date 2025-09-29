/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': 'var(--background-header)',
        'text-light': 'var(--texto-claro)',
        'text-dark': 'var(--texto-escuro)',
        'section-bg': 'var(--background-section)',
        'footer-bg': 'var(--background-footer)',
        'button': 'var(--button)',
        'button-selected': 'var(--button-selected)',
      }
    },
  },
  plugins: [],
}

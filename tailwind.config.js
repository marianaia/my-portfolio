/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-back": "var(--header-text-back)",
        "text-dark": "var(--text-color-dark)"
      }
    },
  },
  plugins: [],
}
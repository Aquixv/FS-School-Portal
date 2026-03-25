/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These match the 'Academic Curator' theme exactly
        "primary": "#2858b2",
        "primary-container": "#759efd",
        "secondary": "#005f99",
        "background": "#f5f6f7",
        "surface": "#f5f6f7",
        "on-surface": "#2c2f30",
        "on-background": "#2c2f30",
        "surface-container": "#e6e8ea",
        "outline": "#757778",
        // Add more from that list if you see them missing!
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
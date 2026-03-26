// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2858b2",
        "primary-container": "#759efd",
        "on-surface": "#2c2f30",
        "on-surface-variant": "#595c5d",
        "surface-container-low": "#eff1f2",
        "surface-container-lowest": "#ffffff",
        "tertiary": "#a83206",
        "tertiary-container": "#ff9473",
        // Add the rest from the <script id="tailwind-config"> in the original HTML
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
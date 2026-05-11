/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f2ff",
          200: "#bce9ff",
          300: "#8fdcff",
          400: "#5bc9ff",
          500: "#2ab0ff",
          600: "#0f8fdd",
          700: "#1172b3",
          800: "#165f92",
          900: "#184f78",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.22)",
        glow: "0 0 0 1px rgba(42,176,255,0.35), 0 10px 30px rgba(42,176,255,0.2)",
      },
    },
  },
  plugins: [],
};

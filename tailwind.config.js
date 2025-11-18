/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        primary: "#0F766E",
        accent: "#F59E0B",
        ink: "#0B0F10",
        "slate-900": "#111827",
        "gray-100": "#F3F4F6",
        white: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};


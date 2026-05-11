/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faeede",
          100: "#f6e3cb",
          200: "#efd5b6",
          300: "#e6c39a",
          400: "#d8ad7c",
        },
        brand: {
          50: "#fff1e6",
          100: "#ffdfc4",
          200: "#ffbc8a",
          300: "#ff9959",
          400: "#f47a32",
          500: "#e8661c",
          600: "#cf5413",
          700: "#a3400f",
          800: "#79300b",
        },
        ink: {
          900: "#1a1410",
          800: "#2b1f17",
          700: "#3f2e22",
          600: "#5e483a",
          500: "#7a6453",
          400: "#9a8470",
        },
        nightcream: "#1c1410",
        navy: {
          500: "#3b6cb0",
          600: "#2f5a99",
          700: "#26487d",
          800: "#1e3a64",
        },
        pastel: {
          blue: "#cfe3f0",
          purple: "#d8c9ec",
          sage: "#cfdcc9",
          peach: "#ead8cb",
          mint: "#cee0d4",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(60, 32, 14, 0.18)",
        card: "0 20px 40px -20px rgba(60, 32, 14, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float-slow": "float 8s ease-in-out infinite",
        "blob": "blob 18s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,30px) scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

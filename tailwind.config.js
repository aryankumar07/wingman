/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        spin: "spin 1.5s linear infinite",
        "spin-fast": "spin 0.8s linear infinite",
        pulse: "pulse 1.2s infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

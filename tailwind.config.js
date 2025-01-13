/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/hero-bg.png')",
        aboutBg: "url('/about-bg.png')",
      },
    },
  },
  plugins: [],
};

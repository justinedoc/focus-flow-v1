/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/hero-bg.png')",
        aboutBg: "url('/about-bg.png')",
        "text-gradient":
          "linear-gradient(90deg, #DD7DFF 0%, #E1CD86 29%, #8BCB92 51%, #71C2EF 76%, #3BFFFF 100%)",
      },
    },
  },
  plugins: [],
};

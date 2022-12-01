/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        NexisTheme: {

          "primary": "#1678CB",

          "secondary": "#3B8BEA",

          "accent": "#242424",

          "neutral": "#68D6F5",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

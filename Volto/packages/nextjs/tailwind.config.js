// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: colors.green[400],
          secondary: colors.orange[500],
          "secondary-content": colors.white,
          accent: colors.cyan[600],
          neutral: colors.slate[800],
          "neutral-content": colors.slate[200],
          "base-100": colors.white,
          "base-200": colors.gray[100],
          "base-300": colors.gray[200],
          "base-content": colors.gray[800],
        },
      },
      // {
      //   dark: {
      //     "color-scheme": "dark",
      //     primary: colors.green[600],
      //     secondary: colors.orange[500],
      //     accent: colors.orange[600],
      //     "base-100": colors.black,
      //     "base-200": colors.gray[900],
      //     "base-300": colors.gray[800],
      //     "base-content": colors.gray[300],
      //     neutral: colors.gray[700],
      //     info: colors.blue[600],
      //     success: colors.green[600],
      //     warning: colors.yellow[400],
      //     error: colors.red[600],
      //   },
      // },
    ],
    logs: false,
    rounded: "0.75rem", // Slightly bigger than medium rounding
    buttonBorderWidth: "0px", // Remove borders
    buttonShadow: "none", // Remove shadows
  },
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};

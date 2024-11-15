/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9FC490",
          "primary-content": "#2C3628",
          secondary: "#E8F0E6",
          "secondary-content": "#2C3628",
          accent: "#7EA36E",
          "accent-content": "#2C3628",
          neutral: "#2C3628",
          "neutral-content": "#F7F7F7",
          "base-100": "#F7F7F7",
          "base-200": "#EFF2EE",
          "base-300": "#E8F0E6",
          "base-content": "#2C3628",
          info: "#9FC490",
          success: "#7EA36E",
          warning: "#D4B483",
          error: "#C17767",

          "--rounded-btn": "0.5rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#9FC490",
          "primary-content": "#1A1D19",
          secondary: "#2C3628",
          "secondary-content": "#E8F0E6",
          accent: "#7EA36E",
          "accent-content": "#E8F0E6",
          neutral: "#E8F0E6",
          "neutral-content": "#2C3628",
          "base-100": "#1A1D19",
          "base-200": "#232823",
          "base-300": "#2C3628",
          "base-content": "#E8F0E6",
          info: "#9FC490",
          success: "#7EA36E",
          warning: "#D4B483",
          error: "#C17767",
          "--rounded-btn": "0.5rem",
          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};

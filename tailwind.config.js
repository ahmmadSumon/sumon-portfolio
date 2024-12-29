/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enable dark mode with the "class" strategy
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "", // No prefix by default
  theme: {
    container: {
      center: true, // Centers container content
      padding: "15px", // Adds padding around the container
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: "960px", // Corrected to standard breakpoint
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Ensure --font-jetbrainsMono is defined in your CSS
    },
    extend: {
      colors: {
        primary: '#1c1c22', // Custom primary color
        accent: {
          DEFAULT: "#06D001", // Accent color
          hover: '#00e187', // Accent hover color
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Accordion down animation
        "accordion-up": "accordion-up 0.2s ease-out", // Accordion up animation
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Ensure this plugin is installed
};

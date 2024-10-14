// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all of your components so Tailwind can tree-shake unused styles in production builds.
  ],
  theme: {
    extend: {
      // Extend Tailwind's default palette, fonts, breakpoints, etc.
      colors: {
        "brand-blue": "#007ace",
        "brand-red": "#ff0000",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [
    // Add any plugins here if needed, e.g., forms, typography, etc.
    // require("@tailwindcss/forms"),
  ],
  variants: {
    // Enable additional variants like hover, focus, active, etc.
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};

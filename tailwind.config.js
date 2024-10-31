/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "460": "460px",
      },
      height: {
        "596": "596px"
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts,js,html}", "./src/routes/**/*.{svelte,ts,js,html}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}


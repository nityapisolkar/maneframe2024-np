/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts,js,html}", "./src/routes/**/*.{svelte,ts,js,html}"],
  theme: {
    extend: {
      keyframes: {
        bounce_small: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'bounce-small': 'bounce_small 1s infinite',
      }
    },
  },
  plugins: [require('daisyui')],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // keep existing keys if anything else relies on them
      },
      // Make Montserrat the default sans for utility classes if needed
      // Tailwind's default 'sans' can be overridden globally by adding it here
      // (some projects prefer to set this in a global CSS, we import Montserrat in globals.css)
      colors: {
        'background': '#ffffff',
        'subtle': '#f8f9fa',
        'primary': '#000000',
        'secondary': '#1f1f1f',
        'text-main': '#111111',
        'text-muted': '#6b7280',
        'border-gray': '#e5e7eb',
        'dark': {
          100: '#1a1a1a',
          200: '#141414',
          300: '#0f0f0f',
          400: '#0a0a0a',
          500: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-metal': 'linear-gradient(to right, #4b5563, #9ca3af, #4b5563)',
      },
    },
  },
  plugins: [],
}
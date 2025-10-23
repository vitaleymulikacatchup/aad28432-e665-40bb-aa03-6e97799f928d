/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ria-red': '#d73027',
        'ria-blue': '#1e40af',
        'ria-green': '#16a34a',
        'ria-orange': '#ea580c',
        'ria-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}
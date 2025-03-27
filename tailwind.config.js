/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#111827', // Dark background
				'dark-accent': '#1f2937', // Slightly lighter dark for contrast
				'gold': '#D4AF37', // Gold accent color
				'off-white': '#f5f5dc'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'], // Example serif font
				'sans': ['Montserrat', 'sans-serif'], // Example sans font
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
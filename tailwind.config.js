/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Delius"', 'cursive']
			},
		},
	},
	plugins: [
	],
}
export default config
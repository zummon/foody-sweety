/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
export default config
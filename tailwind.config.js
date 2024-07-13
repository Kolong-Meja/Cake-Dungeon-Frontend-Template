/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'light-cream': '#FFEEDE',
				'little-dark-cream': '#D4B393',
				'dark-cocoa': '#190C0A'
			}
		},
		fontFamily: {
			bodoni: ['Libre Bodoni', 'serif']
		}
	},
	plugins: []
};

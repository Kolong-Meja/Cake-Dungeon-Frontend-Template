/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'light-cream': '#FFEEDE',
				'little-dark-cream': '#D4B393',
				cream: '#AF7A4A',
				'dark-cocoa': '#190C0A',
				cocoa: '#3d2420'
			}
		},
		fontFamily: {
			bodoni: ['Libre Bodoni', 'serif'],
			lato: ['Lato', 'sans-serif']
		}
	},
	plugins: []
};

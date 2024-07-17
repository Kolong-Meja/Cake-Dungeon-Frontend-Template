/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'lighter-cream': '#FFF7F0',
				'light-cream': '#FFEEDE',
				'cream': '#D4B393',
				'dark-cream': '#AF7A4A',
				'dark-cocoa': '#190C0A',
				'cocoa': '#3d2420'
			},
			keyframes: {
				slideInDown: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1
					}
				},
				slideOutUp: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 1,
					}
				}
			}
		},
		fontFamily: {
			bodoni: ['Libre Bodoni', 'serif'],
			lato: ['Lato', 'sans-serif']
		},
		animation: {
			slideInDown: 'slideInDown 0.1s ease-out forwards',
			slideOutUp: 'slideOutUp 0.1s ease-out forwards',
		},
	},
	plugins: []
};

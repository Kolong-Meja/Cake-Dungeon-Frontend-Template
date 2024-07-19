import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				'lighter-cream': '#FFF7F0',
				'light-cream': '#FFEEDE',
				brown: {
					50: '#F8F4E1',
					400: '#AF8F6F',
					700: '#74512D',
					900: '#543310',
				},
				cream: {
					50: '#FFF2E1',
					200: '#EAD8C0',
					500: '#D1BB9E',
					900: '#A79277'
				},
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
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
						opacity: 1
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 1
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
			slideOutUp: 'slideOutUp 0.1s ease-out forwards'
		}
	},
	plugins: [flowbitePlugin],
	darkMode: 'class'
};

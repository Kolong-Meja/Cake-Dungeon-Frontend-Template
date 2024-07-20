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
					100: '#e0dcc5',
					200: '#bda68f',
					300: '#b09478',
					400: '#AF8F6F',
					500: '#9c7c5c',
					700: '#74512D',
					800: '#573715',
					900: '#543310'
				},
				cream: {
					50: '#FFF2E1',
					100: '#eddeca',
					200: '#EAD8C0',
					300: '#d6c3a9',
					400: '#c2ae93',
					500: '#D1BB9E',
					600: '#ccb393',
					700: '#b8a48a',
					800: '#b09b80',
					900: '#A79277'
				},
				primary: {
					50: '#FFF2E1',
					100: '#eddeca',
					200: '#EAD8C0',
					300: '#d6c3a9',
					400: '#c2ae93',
					500: '#D1BB9E',
					600: '#ccb393',
					700: '#b8a48a',
					800: '#b09b80',
					900: '#A79277'
				}
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				fadeInDown: {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, -100%, 0)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)'
					}
				},
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
			fadeIn: 'fadeIn 1s ease-in forwards',
			fadeInDown: 'fadeInDown 1s ease-in forwards',
			slideInDown: 'slideInDown 0.2s ease-out forwards',
			slideOutUp: 'slideOutUp 0.2s ease-out forwards'
		}
	},
	plugins: [flowbitePlugin],
	darkMode: 'class'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#7dd3fc',
					secondary: '#c7d2fe',
					accent: '#5eead4',
					neutral: '#374151',
					'base-100': '#e0f2fe',
					info: '#3ABFF8',
					success: '#34d399',
					warning: '#FBBD23',
					error: '#F87272',
				},
			},
		],
	},
};

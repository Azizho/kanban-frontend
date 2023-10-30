import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			plus_jakarta_sans: ['Plus Jakarta Sans', 'sans-serif'],
		},
		colors: {
			kanban_blueviolet_100: '#635FC7',
			kanban_blueviolet_50: '#A8A4FF',
			kanban_black_100: '#000112',
			kanban_black_200: '#20212C',
			kanban_black_300: '#2B2C37',
			kanban_black_400: '#3E3F4E',
			kanban_black_500: '#828FA3',
			kanban_white_100: '#fff',
			kanban_white_200: '#F4F7FD',
			kanban_white_300: '#E4EBFA',
			kanban_red_100: '#EA5555',
			kanban_red_200: '#FF9898',
			kanban_turquoise_100: '#49C4E5',
		},
		extend: {
			borderColor: {
				loading_transparent: '#fff transparent transparent transparent',
				loading_transparent_dark:
					'#20212C transparent transparent transparent',
			},
			borderRadius: {
				o_one: '0px 100px 100px 0px;',
			},
		},
	},
	plugins: [],
};
export default config;

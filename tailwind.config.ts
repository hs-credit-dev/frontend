import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layout/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			boxShadow: {
				custom: '0px 4px 20px 0px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [],
};
export default config;

import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'brand-magenta': '#D617B7',
				'brand-cyan': '#00D4E0',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			animation: {
				blob: 'blob 7s infinite',
				float: 'float 6s ease-in-out infinite',
			},
			keyframes: {
				blob: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
			},
		},
		plugins: [forms],
	},
}

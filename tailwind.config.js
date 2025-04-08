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
				brand: {
					primary: 'var(--primary)',
					secondary: 'var(--secondary)',
					'primary-light': 'var(--primary-light)',
					'secondary-light': 'var(--secondary-light)',
				},
			},
			backgroundColor: {
				primary: 'var(--bg-primary)',
				secondary: 'var(--bg-secondary)',
				tertiary: 'var(--bg-tertiary)',
			},
			textColor: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				muted: 'var(--text-muted)',
			},
			borderColor: {
				primary: 'var(--border-primary)',
				secondary: 'var(--border-secondary)',
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
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
	},
	plugins: [forms],
}

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ThemeSwitcher = () => {
	const [currentTheme, setCurrentTheme] = useState('default')

	// Initialize theme from localStorage on component mount
	useEffect(() => {
		// Get saved theme or use default
		const savedTheme = localStorage.getItem('theme') || 'default'
		setCurrentTheme(savedTheme)

		// Apply theme to document
		if (savedTheme === 'teal') {
			document.documentElement.setAttribute('data-theme', 'teal')
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = currentTheme === 'default' ? 'teal' : 'default'
		setCurrentTheme(newTheme)

		// Update theme attribute
		if (newTheme === 'teal') {
			document.documentElement.setAttribute('data-theme', 'teal')
		} else {
			document.documentElement.removeAttribute('data-theme')
		}

		// Save to localStorage
		localStorage.setItem('theme', newTheme)
	}

	return (
		<motion.button
			onClick={toggleTheme}
			className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
			whileTap={{ scale: 0.9 }}
			aria-label="Toggle color theme"
		>
			{currentTheme === 'default' ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					style={{ color: 'var(--secondary)' }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					style={{ color: 'var(--secondary)' }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					/>
				</svg>
			)}
		</motion.button>
	)
}

export default ThemeSwitcher

'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
	theme: 'dark',
	toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark')

	// Load saved theme on mount
	useEffect(() => {
		const saved = localStorage.getItem('theme') || 'dark'
		setTheme(saved)
		if (saved === 'light') {
			document.documentElement.setAttribute('data-theme', 'light')
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
	}, [])

	const toggleTheme = () => {
		const next = theme === 'dark' ? 'light' : 'dark'
		setTheme(next)
		if (next === 'light') {
			document.documentElement.setAttribute('data-theme', 'light')
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
		localStorage.setItem('theme', next)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)

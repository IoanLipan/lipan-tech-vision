'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const icon = 'absolute transition-all duration-500 ease-out-expo'

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	return (
		<button
			onClick={toggleTheme}
			className="relative flex h-11 w-11 items-center justify-center rounded-full text-gold transition-colors hover:bg-raised active:scale-90"
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<Moon size={20} className={`${icon} ${isDark ? 'opacity-100' : '-rotate-90 scale-50 opacity-0'}`} />
			<Sun size={20} className={`${icon} ${isDark ? 'rotate-90 scale-50 opacity-0' : 'opacity-100'}`} />
		</button>
	)
}

export default ThemeSwitcher

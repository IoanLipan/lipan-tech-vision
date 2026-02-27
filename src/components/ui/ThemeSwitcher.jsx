'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	return (
		<motion.button
			onClick={toggleTheme}
			className="relative flex items-center justify-center w-10 h-10 rounded-full focus:outline-none overflow-hidden transition-colors hover:bg-[var(--secondary)]/10"
			whileHover={{ scale: 1.15 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 400, damping: 20 }}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{/* Moon icon — shown in dark mode */}
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 absolute"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
				style={{ color: 'var(--primary)' }}
				initial={false}
				animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : -90, scale: isDark ? 1 : 0.5 }}
				transition={{ duration: 0.3 }}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
				/>
			</motion.svg>

			{/* Sun icon — shown in light mode */}
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 absolute"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
				style={{ color: 'var(--primary)' }}
				initial={false}
				animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? 90 : 0, scale: isDark ? 0.5 : 1 }}
				transition={{ duration: 0.3 }}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z"
				/>
			</motion.svg>
		</motion.button>
	)
}

export default ThemeSwitcher

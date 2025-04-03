'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	// Navigation items
	const navItems = [
		{ id: 'home', label: 'Home', path: '/' },
		{ id: 'projects', label: 'Projects', path: '/projects' },
		{ id: 'tech-knowledge', label: 'Tech Knowledge', path: '/tech-knowledge' },
		{ id: 'engineer', label: 'Engineering', path: '/engineer' },
		{ id: 'athlete', label: 'Athlete', path: '/athlete' },
		{ id: 'travel', label: 'Travel', path: '/travel' },
		{ id: 'contact', label: 'Contact', path: '/contact' },
	]

	// Handle scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<motion.header
			className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
				isScrolled
					? 'bg-gray-900/90 border-gray-800'
					: 'bg-transparent border-transparent'
			}`}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/">
					<div className="flex items-center space-x-2">
						<div className="relative w-10 h-10">
							<Image
								src="/images/logo.png"
                width={40}
                height={40}
								alt="Lipan Tech Vision Logo"
								className="object-contain"
							/>
						</div>
						<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D617B7] to-[#00D4E0]">
							Lipan Tech Vision
						</span>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex">
					<ul className="flex space-x-1">
						{navItems.map((item) => (
							<li key={item.id}>
								<Link href={item.path}>
									<div
										className={`px-4 py-2 rounded-md transition-all ${
											pathname === item.path
												? 'bg-gradient-to-r from-[#D617B7] to-[#00D4E0] text-white'
												: 'text-gray-300 hover:text-white hover:bg-gray-800'
										}`}
									>
										{item.label}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile menu button */}
				<button
					className="lg:hidden text-white"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={
								isMobileMenuOpen
									? 'M6 18L18 6M6 6l12 12'
									: 'M4 6h16M4 12h16m-7 6h7'
							}
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="md:hidden bg-gray-900 border-b border-gray-800"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<nav className="container mx-auto px-4 py-4">
							<ul className="flex flex-col space-y-2">
								{navItems.map((item) => (
									<li key={item.id}>
										<Link
											href={item.path}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<div
												className={`px-4 py-2 rounded-md transition-all ${
													pathname === item.path
														? 'bg-gradient-to-r from-[#D617B7] to-[#00D4E0] text-white'
														: 'text-gray-300 hover:text-white hover:bg-gray-800'
												}`}
											>
												{item.label}
											</div>
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	)
}

export default Header

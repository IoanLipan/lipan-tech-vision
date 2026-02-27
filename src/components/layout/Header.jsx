'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeSwitcher from '../ui/ThemeSwitcher'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	const navItems = [
		{ id: 'home', label: 'Home', path: '/' },
		{ id: 'projects', label: 'Projects', path: '/projects' },
		{ id: 'tech-knowledge', label: 'Tech Knowledge', path: '/tech-knowledge' },
		{ id: 'engineer', label: 'Engineering', path: '/engineer' },
		{ id: 'contact', label: 'Contact', path: '/contact' },
	]

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Prevent body scroll when mobile menu open
	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isMobileMenuOpen])

	return (
		<>
			{/* Thin gradient accent bar pinned to very top */}
			<div
				className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
				style={{ background: 'var(--gradient)' }}
			/>

			<motion.header
				className={`sticky top-[3px] z-50 backdrop-blur-md transition-all duration-300 ${
					isScrolled ? 'bg-primary/90' : 'bg-primary/50'
				}`}
				style={{
					boxShadow: isScrolled
						? '0 8px 32px 0 rgba(0,0,0,0.30)'
						: '0 4px 18px 0 rgba(0,0,0,0.15)',
				}}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
					{/* Logo */}
					<Link href="/">
						<div className="flex items-center gap-2.5">
							<div className="relative w-9 h-9">
								<Image
									src="/images/logo.png"
									alt="Lipan Tech Vision Logo"
									fill
									priority
									className="object-contain"
								/>
							</div>
							<div className="flex flex-col leading-none"
								style={{
									background: 'linear-gradient(135deg, var(--primary) 20%, var(--secondary) 100%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
								}}
							>
								<span className="text-xs font-black uppercase tracking-widest">
									Lipan
								</span>
								<span className="text-xs font-black uppercase tracking-widest">
									Tech Vision
								</span>
							</div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center">
						<ul className="flex items-center">
							{navItems.map((item) => (
								<li key={item.id}>
									<Link href={item.path}>
										<div
											className={`relative px-4 py-5 text-xs font-bold uppercase tracking-widest transition-colors ${
												pathname === item.path
													? 'text-[var(--secondary)]'
													: 'text-muted hover:text-primary'
											}`}
										>
											{item.label}
											{pathname === item.path && (
												<motion.span
													layoutId="nav-underline"
													className="absolute bottom-0 left-0 w-full h-[2px]"
													style={{ background: 'var(--secondary)' }}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 35,
													}}
												/>
											)}
										</div>
									</Link>
								</li>
							))}
						</ul>
						<div className="ml-4 pl-4 border-l border-primary">
							<ThemeSwitcher />
						</div>
					</nav>

					{/* Mobile controls */}
					<div className="flex items-center gap-3 md:hidden">
						<ThemeSwitcher />
						<button
							onClick={() => setIsMobileMenuOpen(true)}
							aria-label="Open menu"
							style={{ color: 'var(--secondary)' }}
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
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="fixed inset-0 z-[100] md:hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						{/* Backdrop */}
						<motion.div
							className="absolute inset-0 bg-black/70 backdrop-blur-sm"
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						{/* Parchment-style drawer panel */}
						<motion.div
							className="absolute top-0 right-0 h-full w-[300px] overflow-y-auto border-l-2"
							style={{
								borderColor: 'var(--secondary)',
								background: 'var(--bg-secondary)',
								backgroundImage:
									'repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(140, 110, 50, 0.06) 32px, rgba(140, 110, 50, 0.06) 33px)',
							}}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 220 }}
						>
							{/* Drawer header */}
							<div
								className="flex items-center justify-between px-6 py-5 border-b"
								style={{ borderColor: 'var(--border-primary)' }}
							>
								<span
									className="text-xs font-black uppercase tracking-widest"
									style={{ color: 'var(--secondary)' }}
								>
									Navigation
								</span>
								<button
									onClick={() => setIsMobileMenuOpen(false)}
									aria-label="Close menu"
									style={{ color: 'var(--secondary)' }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							{/* Nav items with stagger */}
							<nav className="px-6 py-4">
								<ul>
									{navItems.map((item, i) => (
										<motion.li
											key={item.id}
											initial={{ opacity: 0, x: 24 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												delay: 0.06 * i + 0.08,
												type: 'spring',
												stiffness: 300,
												damping: 28,
											}}
										>
											<Link
												href={item.path}
												onClick={() => setIsMobileMenuOpen(false)}
											>
												<div
													className={`flex items-center gap-2 py-4 text-sm font-bold uppercase tracking-widest border-b transition-colors ${
														pathname !== item.path
															? 'text-muted hover:text-primary'
															: ''
													}`}
													style={{
														borderColor: 'var(--border-primary)',
														color:
															pathname === item.path
																? 'var(--secondary)'
																: undefined,
													}}
												>
													{pathname === item.path && (
														<span
															className="w-1.5 h-1.5 rounded-full shrink-0"
															style={{ background: 'var(--secondary)' }}
														/>
													)}
													{item.label}
												</div>
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Header

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import Logo from './Logo'
import { navItems } from './nav'

// Phones: logo + theme toggle that scroll away (navigation lives in BottomNav).
// Desktop: fixed bar that frosts once the page scrolls.
const Header = () => {
	const pathname = usePathname()
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			className={`absolute inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 md:fixed ${
				scrolled ? 'md:bg-page/80 md:shadow-[0_1px_0_var(--border-primary)] md:backdrop-blur-xl' : ''
			}`}
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
				<Logo />

				<div className="flex items-center gap-1 md:gap-2">
					<nav aria-label="Primary" className="hidden md:block">
						<ul className="flex items-center">
							{navItems.slice(1, -1).map(({ path, label }) => (
								<li key={path}>
									<Link
										href={path}
										aria-current={pathname === path ? 'page' : undefined}
										className={`flex items-center gap-2 px-4 py-2 text-[15px] font-medium transition-colors ${
											pathname === path ? 'text-fg' : 'text-muted hover:text-fg'
										}`}
									>
										<span
											className={`h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-300 ${
												pathname === path ? 'scale-100' : 'scale-0'
											}`}
										/>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<ThemeSwitcher />
					<Link href="/contact" className="btn btn-primary ml-2 hidden !min-h-10 !px-5 text-[15px] md:inline-flex">
						Start a project
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from './nav'

// Thumb-reachable tab bar for phones. The highlight pill slides between tabs with a CSS transition.
export default function BottomNav() {
	const pathname = usePathname()
	const active = navItems.findIndex((item) => item.path === pathname)

	return (
		<nav
			aria-label="Primary"
			className="fixed inset-x-3 z-50 md:hidden"
			style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
		>
			<ul className="relative grid grid-cols-5 rounded-[1.6rem] border border-line-2 bg-surface/80 p-1.5 shadow-[0_12px_40px_rgb(0_0_0/0.35)] backdrop-blur-xl">
				<span
					aria-hidden="true"
					className="absolute inset-y-1.5 left-1.5 rounded-[1.2rem] bg-raised transition-[transform,opacity] duration-500 ease-out-expo"
					style={{
						width: 'calc((100% - 0.75rem) / 5)',
						transform: `translateX(${Math.max(active, 0) * 100}%)`,
						opacity: active < 0 ? 0 : 1,
					}}
				/>
				{navItems.map(({ path, label, Icon }, i) => (
					<li key={path} className="relative">
						<Link
							href={path}
							aria-current={i === active ? 'page' : undefined}
							className={`flex flex-col items-center gap-1 py-2 text-[11px] font-medium transition-colors active:scale-90 ${
								i === active ? 'text-fg' : 'text-muted'
							}`}
						>
							<Icon
								size={20}
								strokeWidth={i === active ? 2.25 : 1.75}
								style={i === active ? { color: 'var(--primary)' } : undefined}
							/>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

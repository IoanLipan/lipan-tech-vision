'use client'

const techs = [
	'React', 'Next.js', 'TypeScript', 'Node.js', 'Vue.js',
	'TailwindCSS', 'MongoDB', 'Docker', 'GraphQL', 'AWS',
	'Framer Motion', 'Storybook', 'Shopify', 'Firebase',
	'PostgreSQL', 'Express.js', 'Git', 'Vercel', 'Livekit',
	'Payload CMS', 'Tanstack Query', 'MapLibre',
]

export default function TechTicker() {
	// Duplicate the list so the loop is seamless
	const doubled = [...techs, ...techs]

	return (
		<div className="relative py-5 overflow-hidden border-y border-primary bg-primary">
			{/* Left fade mask */}
			<div
				className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
				style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }}
			/>
			{/* Right fade mask */}
			<div
				className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
				style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }}
			/>

			<div className="flex gap-10 animate-ticker whitespace-nowrap">
				{doubled.map((tech, i) => (
					<span
						key={i}
						className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted"
					>
						<span
							className="w-1.5 h-1.5 rounded-full shrink-0"
							style={{ background: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--accent-red, #8B1A2C)' }}
						/>
						{tech}
					</span>
				))}
			</div>
		</div>
	)
}

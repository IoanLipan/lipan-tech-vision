const techs = [
	'React', 'Next.js', 'TypeScript', 'Vue.js', 'Node.js', 'TailwindCSS', 'anime.js',
	'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Shopify', 'LiveKit', 'MapLibre',
	'Payload CMS', 'TanStack Query', 'Capacitor', 'Storybook',
]

export default function TechTicker() {
	return (
		<div
			className="overflow-hidden border-y border-line py-5"
			style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}
			aria-label="Technologies I work with"
		>
			<ul className="marquee">
				{[...techs, ...techs].map((tech, i) => (
					<li
						key={i}
						aria-hidden={i >= techs.length || undefined}
						className="flex items-center gap-6 pr-6 text-lg font-medium text-muted md:text-2xl"
					>
						{tech}
						<span className="h-1.5 w-1.5 rotate-45 bg-gold" />
					</li>
				))}
			</ul>
		</div>
	)
}

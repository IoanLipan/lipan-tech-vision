'use client'

import { useState } from 'react'
import { animate, stagger } from 'animejs'
import { useAnime } from '@/lib/anime'
import { projects, getProjectCategories, isLive } from '@/data/projects'
import PageHeader from '@/components/PageHeader'
import ProjectSheet from '@/components/ui/ProjectSheet'
import ProjectShot from '@/components/ui/ProjectShot'

const categories = getProjectCategories()
const count = (category) =>
	category === 'All' ? projects.length : projects.filter((p) => p.category === category).length

export default function ProjectsPage() {
	const [active, setActive] = useState('All')
	const [selected, setSelected] = useState(null)
	const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

	// Cards deal in on load and on every filter change
	const grid = useAnime(
		(self) => {
			if (self.matches.reduce) return
			animate('.p-card', {
				y: [40, 0],
				duration: 800,
				delay: stagger(55),
				ease: 'out(4)',
			})
		},
		[active],
	)

	return (
		<>
			<PageHeader
				title="Projects"
				intro="Everything I've shipped: client work, products built at work, and my own experiments."
			/>
			<ProjectSheet project={selected} onClose={() => setSelected(null)} />

			{/* Filter chips: sticky and swipeable on phones */}
			<div className="sticky top-0 z-30 bg-page/85 backdrop-blur-xl md:top-[4.5rem]">
				<div
					role="toolbar"
					aria-label="Filter projects"
					className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8"
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActive(category)}
							aria-pressed={active === category}
							className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[15px] font-medium transition-colors active:scale-95 ${
								active === category
									? 'border-fg bg-fg text-page'
									: 'border-line-2 text-fg-2 hover:border-fg hover:text-fg'
							}`}
						>
							{category}
							<span className={active === category ? 'text-page/60' : 'text-muted'}>{count(category)}</span>
						</button>
					))}
				</div>
			</div>

			<section className="px-5 pb-20 pt-6 md:px-8 md:pb-32 md:pt-10">
				<ul ref={grid} className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
					{visible.map((project, i) => (
						<li key={project.id} className="p-card group relative">
							<ProjectShot
								project={project}
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								priority={i < 3}
								className="rounded-2xl border border-line"
								imgClassName="transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
							/>
							<div className="mt-4 flex items-center justify-between text-sm text-muted">
								<span>{project.category}</span>
								{isLive(project) && (
									<span className="inline-flex items-center gap-1.5 font-medium text-live">
										<span className="h-1.5 w-1.5 rounded-full bg-live" />
										Live
									</span>
								)}
							</div>
							<h2 className="mt-1 text-2xl font-bold">
								<button
									onClick={() => setSelected(project)}
									className="text-left after:absolute after:inset-0 after:content-['']"
								>
									{project.title}
								</button>
							</h2>
							<p className="mt-1 text-fg-2">{project.description}</p>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

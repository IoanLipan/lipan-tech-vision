'use client'

import { useState } from 'react'
import Link from 'next/link'
import { animate, onScroll } from 'animejs'
import { ArrowRight } from 'lucide-react'
import { useAnime } from '@/lib/anime'
import { getFeaturedProjects, projects, isLive } from '@/data/projects'
import ProjectSheet from '@/components/ui/ProjectSheet'
import ProjectShot from '@/components/ui/ProjectShot'

const featured = getFeaturedProjects()

/**
 * Sticky card stack: each card pins near the top and the next one slides over it.
 * anime.js scrubs the buried card's scale/dim and each screenshot's zoom to scroll position.
 */
const FeaturedProjects = () => {
	const [selected, setSelected] = useState(null)

	const root = useAnime((self) => {
		if (self.matches.reduce) return
		const cards = [...root.current.querySelectorAll('.stack-card')]
		const scrub = (target) => {
			const top = parseFloat(getComputedStyle(target).top)
			return onScroll({ target, enter: 'end start', leave: `start+=${top} start`, sync: true })
		}
		cards.forEach((card, i) => {
			animate(card.querySelector('.stack-img'), { scale: [1.15, 1], ease: 'linear', autoplay: scrub(card) })
			const phone = card.querySelector('.stack-phone')
			if (phone) animate(phone, { y: ['35%', '0%'], ease: 'linear', autoplay: scrub(card) })
			const next = cards[i + 1]
			if (!next) return
			animate(card.querySelector('.stack-inner'), { scale: [1, 0.9], ease: 'linear', autoplay: scrub(next) })
			animate(card.querySelector('.stack-dim'), { opacity: [0, 0.55], ease: 'linear', autoplay: scrub(next) })
		})
	})

	return (
		<section id="work" ref={root} className="scroll-mt-4 px-5 py-20 md:px-8 md:py-32">
			<ProjectSheet project={selected} onClose={() => setSelected(null)} />

			<div className="mx-auto max-w-7xl">
				<div className="flex items-end justify-between gap-6">
					<div>
						<h2 data-reveal="words" className="text-[2.6rem] font-bold md:text-7xl">
							Selected work
						</h2>
						<p data-reveal className="mt-4 max-w-md text-fg-2 md:text-lg">
							Recent products I designed and built. Open any of them for the story and the stack.
						</p>
					</div>
					<Link href="/projects" className="btn btn-ghost hidden shrink-0 md:inline-flex">
						All {projects.length} projects
					</Link>
				</div>

				<ol className="mt-10 [--stack-top:1rem] md:mt-16 md:[--stack-top:6.5rem]">
					{featured.map((project, i) => (
						<li
							key={project.id}
							className="stack-card sticky mb-6 md:mb-12"
							style={{ top: `calc(var(--stack-top) + ${i * 12}px)` }}
						>
							<article className="stack-inner group relative origin-top overflow-hidden rounded-[1.75rem] border border-line bg-surface md:grid md:grid-cols-12 md:items-center">
								<ProjectShot
									project={project}
									sizes="(max-width: 768px) 100vw, 60vw"
									priority={i < 2}
									className="md:col-span-7"
									imgClassName="stack-img"
									phoneClassName="stack-phone"
								/>

								<div className="flex flex-col p-5 pb-6 md:col-span-5 md:p-10">
									<div className="flex items-center justify-between text-sm text-muted">
										<span>{project.category}</span>
										{isLive(project) && (
											<span className="inline-flex items-center gap-1.5 font-medium text-live">
												<span className="h-1.5 w-1.5 rounded-full bg-live" />
												Live
											</span>
										)}
									</div>
									<h3 className="mt-2 text-[1.75rem] font-bold md:mt-4 md:text-5xl">
										{/* Stretched button: the whole card opens the sheet */}
										<button
											onClick={() => setSelected(project)}
											className="text-left after:absolute after:inset-0 after:z-10 after:content-['']"
										>
											{project.title}
										</button>
									</h3>
									<p className="mt-2 text-fg-2 md:mt-4 md:text-lg">{project.description}</p>
									<ul className="mt-4 flex flex-wrap gap-2">
										{project.technologies.slice(0, 3).map((tech) => (
											<li key={tech} className="rounded-full bg-raised px-3 py-1 text-sm text-fg-2">
												{tech}
											</li>
										))}
									</ul>
									<span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-accent">
										View details
										<ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
									</span>
								</div>

								<div className="stack-dim pointer-events-none absolute inset-0 bg-black opacity-0" />
							</article>
						</li>
					))}
				</ol>

				<Link href="/projects" className="btn btn-ghost mt-4 w-full md:hidden">
					See all {projects.length} projects
				</Link>
			</div>
		</section>
	)
}

export default FeaturedProjects

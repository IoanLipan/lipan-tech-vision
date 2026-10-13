'use client'

import { animate, onScroll, stagger, utils } from 'animejs'
import { Check, Layers, MousePointerClick, Target, TrendingUp } from 'lucide-react'
import { useAnime } from '@/lib/anime'

// This site's home page, Google Lighthouse (mobile), Oct 2026. Re-measure after big changes.
const scores = [
	{ label: 'Performance', value: 93 },
	{ label: 'Accessibility', value: 100 },
	{ label: 'Best practices', value: 100 },
	{ label: 'SEO', value: 100 },
]

const points = [
	{ Icon: Layers, title: 'Whole product', text: 'Frontend to database, no hand-offs.' },
	{ Icon: MousePointerClick, title: 'Motion with purpose', text: 'Feels alive, never in the way.' },
	{ Icon: TrendingUp, title: 'Built to grow', text: 'New features without rewrites.' },
	{ Icon: Target, title: 'Product thinking', text: 'Your goals first, then the code.' },
]

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const R = 52
const C = 2 * Math.PI * R

const Expertise = () => {
	// Rings fill and numbers count up when they arrive; the week's checks pop in one by one
	const root = useAnime((self) => {
		if (self.matches.reduce) return
		const once = (target) => onScroll({ target, enter: 'bottom-=10% top', sync: 'play', repeat: false })
		utils.$('.ring-fill').forEach((el) =>
			animate(el, { strokeDashoffset: [C, +el.dataset.offset], duration: 1800, ease: 'out(3)', autoplay: once(el) }),
		)
		utils.$('.ring-num').forEach((el) =>
			animate(el, { innerHTML: [0, +el.dataset.value], modifier: utils.round(0), duration: 1800, ease: 'out(3)', autoplay: once(el) }),
		)
		animate('.day-dot', { scale: [0, 1], duration: 700, delay: stagger(140, { start: 200 }), ease: 'out(4)', autoplay: once('.week') })
	})

	return (
		<section ref={root} className="px-5 py-20 md:px-8 md:py-32">
			<div className="mx-auto max-w-7xl">
				<h2 data-reveal="words" className="text-[2.6rem] font-bold md:text-6xl">
					Why work with me
				</h2>

				<div data-reveal="stagger" className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
					{/* Proof, not adjectives */}
					<div className="col-span-2 flex flex-col rounded-3xl border border-line bg-surface p-5 md:row-span-2 md:p-8">
						<h3 className="text-xl font-semibold md:text-3xl">Fast by default</h3>
						<p className="mt-1 text-sm text-fg-2 md:text-base">This site, scored by Google Lighthouse on mobile.</p>
						<ul className="mt-6 grid grid-cols-4 gap-2 md:mt-auto md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:pt-8">
							{scores.map(({ label, value }) => (
								<li key={label} className="flex flex-col items-center gap-2 text-center">
									<div className="relative aspect-square w-full max-w-[124px]">
										<svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
											<circle cx="60" cy="60" r={R} fill="none" strokeWidth="8" className="stroke-line-2" />
											<circle
												className="ring-fill stroke-live"
												data-offset={C * (1 - value / 100)}
												cx="60"
												cy="60"
												r={R}
												fill="none"
												strokeWidth="8"
												strokeLinecap="round"
												strokeDasharray={C}
												strokeDashoffset={C * (1 - value / 100)}
											/>
										</svg>
										<span className="ring-num absolute inset-0 flex items-center justify-center text-lg font-bold tabular-nums md:text-3xl" data-value={value}>
											{value}
										</span>
									</div>
									<span className="text-[11px] leading-tight text-muted md:text-sm">{label}</span>
								</li>
							))}
						</ul>
					</div>

					{points.map(({ Icon, title, text }) => (
						<div key={title} className="flex flex-col rounded-3xl border border-line bg-surface p-5 md:p-6">
							<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-raised text-gold">
								<Icon size={22} />
							</span>
							<h3 className="mt-auto pt-6 font-semibold md:text-lg">{title}</h3>
							<p className="mt-1 text-sm text-fg-2">{text}</p>
						</div>
					))}

					<div className="col-span-2 flex flex-col gap-6 rounded-3xl border border-line bg-surface p-5 md:col-span-4 md:flex-row md:items-center md:justify-between md:p-8">
						<div>
							<h3 className="text-xl font-semibold md:text-3xl">No surprises</h3>
							<p className="mt-1 text-sm text-fg-2 md:text-base">Deadlines met, regular check-ins, updates in plain English.</p>
						</div>
						<ol className="week flex justify-between gap-2 md:gap-5">
							{week.map((day) => (
								<li key={day} className="flex flex-col items-center gap-2">
									<span className="day-dot flex h-10 w-10 items-center justify-center rounded-full bg-gold text-on-accent md:h-12 md:w-12">
										<Check size={20} strokeWidth={3} />
									</span>
									<span className="text-xs text-muted">{day}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Expertise

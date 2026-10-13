'use client'

import { animate, onScroll, stagger, utils } from 'animejs'
import { useAnime } from '@/lib/anime'
import { projects } from '@/data/projects'

const statement =
	'Online stores, real-time video calls, live fleet tracking, habit apps. Different industries, same obsession: the parts people feel, like speed, motion and clarity, so your product feels as good as it works.'

const facts = [
	{ value: 5, suffix: '+', label: 'years in production' },
	{ value: projects.length, suffix: '', label: 'projects shipped' },
	{ value: 10, suffix: '+', label: 'happy clients' },
]

// The statement lights up word by word, scrubbed to scroll position.
export default function Stats() {
	const root = useAnime((self) => {
		if (self.matches.reduce) return
		animate('.st-word', {
			opacity: [0.45, 1], // 45% keeps unlit words above AA contrast for large text
			duration: 200,
			delay: stagger(60),
			ease: 'linear',
			autoplay: onScroll({ target: '.st-text', enter: 'bottom-=5% top', leave: 'center+=10% bottom', sync: 0.5 }),
		})
		// Numbers count up once when the row arrives (server HTML already holds the final values)
		utils.$('.st-num').forEach((el) =>
			animate(el, {
				innerHTML: [0, +el.dataset.value],
				modifier: utils.round(0),
				duration: 1600,
				ease: 'out(3)',
				autoplay: onScroll({ target: '.st-facts', enter: 'bottom-=10% top', sync: 'play', repeat: false }),
			}),
		)
	})

	return (
		<section ref={root} className="px-5 py-24 md:px-8 md:py-40">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
				<p className="st-text max-w-[22ch] lg:col-span-8 text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.02em] md:text-6xl">
					{statement.split(' ').map((word, i) => (
						<span key={i} className="st-word">
							{word}{' '}
						</span>
					))}
				</p>

				<dl data-reveal="stagger" className="st-facts mt-14 grid grid-cols-3 gap-4 border-t border-line pt-6 md:mt-20 md:max-w-3xl lg:col-span-4 lg:mt-0 lg:grid-cols-1 lg:gap-0 lg:border-t-0 lg:pt-0">
					{facts.map(({ value, suffix, label }) => (
						<div key={label} className="flex flex-col-reverse lg:border-t lg:border-line lg:py-6">
							<dt className="mt-1 text-sm leading-snug text-muted md:text-base">{label}</dt>
							<dd className="text-3xl font-bold tabular-nums tracking-tight text-gold md:text-5xl">
								<span className="st-num" data-value={value}>
									{value}
								</span>
								{suffix}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}

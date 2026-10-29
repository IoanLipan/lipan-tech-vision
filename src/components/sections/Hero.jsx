'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { animate, createTimeline, onScroll, stagger } from 'animejs'
import { useAnime } from '@/lib/anime'
import HeroShowcase from './HeroShowcase'
import DotField from '@/components/ui/DotField'

// Fixed line breaks: letters change width while animating, so lines must never reflow.
const LINES = ['Fast, fluid', 'apps for web', 'and mobile.']

const Hero = () => {
	const dots = useRef(null)

	const root = useAnime((self) => {
		if (self.matches.reduce) return
		const section = root.current

		// ── Intro: dots ripple out from the centre while the letters widen into place ──
		dots.current.ripple()
		createTimeline({ defaults: { ease: 'out(4)' } })
			.add('.hl-char', { '--wdth': [62, 100], '--wght': [200, 800], duration: 1300, delay: stagger(28) })
			.add('[data-intro]', { opacity: [0, 1], y: [28, 0], duration: 1100, delay: stagger(110) }, 400)
			.add('.showcase', { y: [40, 0], duration: 1400 }, 300)

		// ── Scroll out: lines drift up at different speeds, the phone lags behind, dots sink ──
		const scrollOut = () => onScroll({ target: section, enter: 'start start', leave: 'start end', sync: 0.5 })
		animate('.hl-line', { y: (_, i) => `${-(15 + i * 22)}%`, ease: 'linear', autoplay: scrollOut() })
		animate('.hero-visual', { y: '12%', ease: 'linear', autoplay: scrollOut() })
		animate('.dot-field', { y: '25%', opacity: 0, ease: 'linear', autoplay: scrollOut() })

		// ── Tap the background: ripple from that point ──
		const onDown = (e) => !e.target.closest('a, button, .showcase') && dots.current.ripple(e.clientX, e.clientY)
		section.addEventListener('pointerdown', onDown)
		return () => section.removeEventListener('pointerdown', onDown)
	})

	return (
		<section
			ref={root}
			className="relative overflow-hidden px-5 pb-16 pt-24 md:px-8 md:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-20 lg:pt-28"
		>
			<DotField ref={dots} className="dot-field" />

			<div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
				<div className="lg:col-span-7">
					<p data-intro className="mb-6 inline-flex items-center gap-2.5 text-[15px] text-fg-2">
						<span className="relative flex h-2 w-2">
							<span className="absolute h-full w-full animate-ping rounded-full bg-live opacity-60" />
							<span className="relative h-2 w-2 rounded-full bg-live" />
						</span>
						Available for new projects
					</p>

					<h1 className="headline text-[12.8vw] md:text-[min(10vw,6.5rem)] lg:text-[min(6.6vw,7rem)]">
						<span className="sr-only">{LINES.join(' ')}</span>
						{LINES.map((line) => (
							<span key={line} aria-hidden="true" className="hl-line block whitespace-nowrap">
								{line.split(' ').map((word, w) => (
									<span key={w}>
										{w > 0 && ' '}
										<span className="inline-block">
											{[...word].map((char, c) => (
												<span key={c} className="hl-char">
													{char}
												</span>
											))}
										</span>
									</span>
								))}
							</span>
						))}
					</h1>

					{/* No intro fade: this paragraph is the largest thing on a phone screen (LCP) */}
					<p className="mt-7 max-w-[40ch] text-lg text-fg-2 md:text-xl">
						I&apos;m <span className="font-semibold text-fg">Ioan Lipan</span>, a front-end and full-stack
						developer in Bucharest. I build for the web, iOS and Android from one codebase, and for five years
						I&apos;ve shipped products people enjoy using.
					</p>
					<div data-intro className="mt-8 flex flex-wrap gap-3">
						<Link href="#work" className="btn btn-primary">
							See my work
						</Link>
						<Link href="/contact" className="btn btn-ghost">
							Start a project
						</Link>
					</div>
				</div>

				<div className="hero-visual lg:col-span-5 lg:justify-self-center">
					<HeroShowcase />
				</div>
			</div>
		</section>
	)
}

export default Hero

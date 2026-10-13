'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { animate, createTimeline, spring, svg } from 'animejs'
import { ArrowLeft } from 'lucide-react'
import { useAnime } from '@/lib/anime'

const TOTAL = 10
const RADIUS = 44
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ThankYouPage() {
	const router = useRouter()
	const [count, setCount] = useState(TOTAL)

	useEffect(() => {
		if (count <= 0) {
			router.push('/')
			return
		}
		const t = setTimeout(() => setCount((c) => c - 1), 1000)
		return () => clearTimeout(t)
	}, [count, router])

	// Badge pops, check draws itself, then the copy rises in
	const root = useAnime((self) => {
		if (self.matches.reduce) return
		createTimeline()
			.add('.ty-badge', { scale: [0, 1], ease: spring({ bounce: 0.45, duration: 700 }) })
			.add(svg.createDrawable('.ty-check'), { draw: ['0 0', '0 1'], duration: 500, ease: 'out(3)' }, 250)
			.add('[data-intro]', { opacity: [0, 1], y: [20, 0], duration: 800, ease: 'out(4)', delay: (_, i) => i * 90 }, 350)
	})

	// Countdown ring eases toward each new second
	useEffect(() => {
		animate('.ty-ring', { strokeDashoffset: CIRCUMFERENCE * (1 - count / TOTAL), duration: 900, ease: 'linear' })
	}, [count])

	return (
		<div ref={root} className="flex min-h-[100svh] items-center justify-center px-5 py-28">
			<div className="w-full max-w-lg text-center">
				<div className="ty-badge mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent bg-accent/15">
					<svg className="h-12 w-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path className="ty-check" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
					</svg>
				</div>

				<h1 data-intro className="text-4xl font-bold md:text-5xl">
					Message sent
				</h1>
				<p data-intro className="mx-auto mt-4 max-w-sm text-lg text-fg-2">
					Thanks for reaching out. I&apos;ll get back to you as soon as I can.
				</p>

				<div data-intro className="relative mx-auto mt-12 flex h-[120px] w-[120px] items-center justify-center">
					<svg width="120" height="120" className="absolute inset-0 -rotate-90" aria-hidden="true">
						<circle cx="60" cy="60" r={RADIUS} fill="none" strokeWidth="4" className="stroke-line-2" />
						<circle
							className="ty-ring stroke-accent"
							cx="60"
							cy="60"
							r={RADIUS}
							fill="none"
							strokeWidth="4"
							strokeLinecap="round"
							strokeDasharray={CIRCUMFERENCE}
							strokeDashoffset={0}
						/>
					</svg>
					<span className="text-3xl font-bold tabular-nums text-accent">{count}</span>
				</div>
				<p data-intro className="mt-4 text-sm text-muted">
					Taking you back home automatically
				</p>

				<div data-intro className="mt-10">
					<Link href="/" className="btn btn-primary">
						<ArrowLeft size={18} />
						Back to home
					</Link>
				</div>
			</div>
		</div>
	)
}

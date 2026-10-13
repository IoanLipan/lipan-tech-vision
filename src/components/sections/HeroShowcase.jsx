'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { animate, utils } from 'animejs'
import { Pause, Play } from 'lucide-react'
import { projects, isLive } from '@/data/projects'
import { REDUCE } from '@/lib/anime'
import ProjectSheet from '@/components/ui/ProjectSheet'

const reel = projects.filter((p) => p.imageScroll)
const HOLD = 900 // ms resting at the top and bottom of each page

/**
 * A phone that scrolls through live projects on its own, like someone browsing them.
 * Progress bars jump between projects; it pauses on hover, off-screen, or with the pause button
 * (WCAG 2.2.2). Reduced motion: no auto-play, the bars become plain tabs.
 */
export default function HeroShowcase() {
	const [active, setActive] = useState(0)
	const [paused, setPaused] = useState(false)
	const [selected, setSelected] = useState(null)
	const [loaded, setLoaded] = useState([0, 1]) // pages fetched so far: current + next only
	const root = useRef(null)
	const anims = useRef([])
	const hold = useRef({ user: false, hover: false, offscreen: false })

	const sync = () => {
		const stop = Object.values(hold.current).some(Boolean)
		anims.current.forEach((a) => (stop ? a.pause() : a.play()))
	}

	// One page: rest, scroll to the bottom, rest, then hand over to the next project
	useEffect(() => {
		const el = root.current
		const fills = [...el.querySelectorAll('.bar-fill')]
		const reduce = window.matchMedia(REDUCE).matches
		// Bars before the current one are full, after it empty (reduced motion: only the current one, like tabs)
		fills.forEach((f, i) => utils.set(f, { scaleX: i === active || (i < active && !reduce) ? 1 : 0 }))
		const next = (active + 1) % reel.length
		setLoaded((l) => (l.includes(active) && l.includes(next) ? l : [...new Set([...l, active, next])]))
		if (reduce) return

		const img = el.querySelector(`[data-slide="${active}"] img`)
		const screen = el.querySelector('.phone-screen')
		let cancelled = false
		const start = () => {
			if (cancelled) return
			const distance = Math.max(0, img.offsetHeight - screen.offsetHeight)
			const scroll = Math.max(3500, distance * 3.2)
			utils.set(img, { y: 0 })
			anims.current = [
				animate(img, { y: -distance, delay: HOLD, duration: scroll, ease: 'inOut(2)' }),
				animate(fills[active], {
					scaleX: [0, 1],
					duration: HOLD * 2 + scroll,
					ease: 'linear',
					onComplete: () => setActive((i) => (i + 1) % reel.length),
				}),
			]
			sync()
		}
		img.decode().then(start, start)
		// Pause rather than revert: the outgoing page keeps its position while it fades out
		return () => {
			cancelled = true
			anims.current.forEach((a) => a.pause())
			anims.current = []
		}
	}, [active])

	// Pause while the phone is off-screen
	useEffect(() => {
		const io = new IntersectionObserver(([entry]) => {
			hold.current.offscreen = !entry.isIntersecting
			sync()
		})
		io.observe(root.current)
		return () => io.disconnect()
	}, [])

	const togglePause = () => {
		hold.current.user = !paused
		setPaused(!paused)
		sync()
	}

	// Desktop: the phone leans toward the cursor and holds still while you look
	const onPointerMove = (e) => {
		if (e.pointerType !== 'mouse' || window.matchMedia(REDUCE).matches) return
		const r = e.currentTarget.getBoundingClientRect()
		const x = (e.clientX - r.left) / r.width - 0.5
		const y = (e.clientY - r.top) / r.height - 0.5
		animate(e.currentTarget.querySelector('.phone-tilt'), { rotateY: x * 14, rotateX: -y * 10, duration: 700, ease: 'out(3)' })
	}
	const onPointerEnter = (e) => {
		if (e.pointerType !== 'mouse') return
		hold.current.hover = true
		sync()
	}
	const onPointerLeave = (e) => {
		hold.current.hover = false
		sync()
		animate(e.currentTarget.querySelector('.phone-tilt'), { rotateY: 0, rotateX: 0, duration: 900, ease: 'out(3)' })
	}

	const project = reel[active]
	const next = reel[(active + 1) % reel.length]

	return (
		<div ref={root} className="showcase relative mx-auto w-fit">
			<ProjectSheet project={selected} onClose={() => setSelected(null)} />

			<div
				className="relative"
				style={{ perspective: '1200px' }}
				onPointerMove={onPointerMove}
				onPointerEnter={onPointerEnter}
				onPointerLeave={onPointerLeave}
			>
				{/* Next project, tucked behind (desktop) */}
				<div
					aria-hidden="true"
					className="absolute -left-[38%] top-[9%] hidden w-[78%] -rotate-[8deg] rounded-[2.2rem] bg-black p-[7px] opacity-60 shadow-2xl ring-1 ring-white/10 lg:block"
				>
					<div className="relative aspect-[390/844] overflow-hidden rounded-[1.8rem] bg-raised">
						<Image key={next.id} src={next.imageMobile} alt="" fill sizes="240px" className="object-cover object-top" />
					</div>
				</div>

				<div className="phone-tilt relative" style={{ transformStyle: 'preserve-3d' }}>
					<button
						onClick={() => setSelected(project)}
						aria-label={`Open ${project.title}`}
						className="relative block w-[236px] rounded-[2.6rem] bg-black p-[9px] text-left shadow-[0_30px_80px_rgb(0_0_0/0.55)] ring-1 ring-white/15 lg:w-[clamp(250px,21vw,300px)]"
					>
						<div className="phone-screen relative aspect-[390/844] overflow-hidden rounded-[2.1rem] bg-raised">
							<span className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-black" />
							{reel.map((p, i) => (
								<div
									key={p.id}
									data-slide={i}
									aria-hidden={i !== active}
									className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
								>
									{(loaded.includes(i) || i === active || i === (active + 1) % reel.length) && (
										<Image
											src={p.imageScroll}
											alt=""
											width={0}
											height={0}
											sizes="(max-width: 1024px) 236px, 300px"
											priority={i === 0}
											className="h-auto w-full"
										/>
									)}
								</div>
							))}
						</div>
					</button>
				</div>
			</div>

			{/* Progress / tabs */}
			<div className="mt-5 flex gap-1.5" role="tablist" aria-label="Showcased projects">
				{reel.map((p, i) => (
					<button
						key={p.id}
						role="tab"
						aria-selected={i === active}
						aria-label={p.title}
						onClick={() => setActive(i)}
						className="flex h-6 flex-1 cursor-pointer items-center"
					>
						<span className="relative h-[3px] w-full overflow-hidden rounded-full bg-line-2">
							<span className="bar-fill absolute inset-0 origin-left rounded-full bg-gold" />
						</span>
					</button>
				))}
			</div>

			<div className="mt-2 flex items-center justify-between gap-3">
				<div className="min-w-0">
					<p className="flex items-center gap-2 truncate font-semibold">
						{project.title}
						{isLive(project) && (
							<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-live">
								<span className="sr-only">Live</span>
							</span>
						)}
					</p>
					<p className="truncate text-sm text-muted">{project.category}</p>
				</div>
				<button
					onClick={togglePause}
					aria-label={paused ? 'Play showcase' : 'Pause showcase'}
					className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-2 text-fg-2 transition-colors hover:border-fg hover:text-fg"
				>
					{paused ? <Play size={16} /> : <Pause size={16} />}
				</button>
			</div>
		</div>
	)
}

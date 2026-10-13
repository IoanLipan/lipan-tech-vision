'use client'

import { useEffect, useRef } from 'react'
import ProjectShot from './ProjectShot'
import { animate, spring } from 'animejs'
import { ArrowUpRight, Lock, X } from 'lucide-react'
import { isLive } from '@/data/projects'

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Project details. Native <dialog> gives focus trapping, Esc and the top layer for free;
 * anime.js handles the motion. Phones get a bottom sheet you can swipe down to close.
 */
export default function ProjectSheet({ project, onClose }) {
	const ref = useRef(null)
	const closing = useRef(false)

	// fromY: where a swipe left the sheet, so the exit continues from the finger instead of jumping
	const close = (fromY = 0) => {
		const dialog = ref.current
		if (!dialog?.open || closing.current) return
		closing.current = true
		animate(dialog, {
			...(isDesktop() ? { opacity: 0, scale: 0.96 } : { y: [fromY, dialog.offsetHeight] }),
			duration: reduced() ? 0 : 320,
			ease: 'in(3)',
			onComplete: () => {
				dialog.close()
				dialog.removeAttribute('style')
				closing.current = false
				onClose()
			},
		})
	}

	useEffect(() => {
		const dialog = ref.current
		if (!project || dialog.open) return
		dialog.showModal()
		dialog.scrollTop = 0
		if (reduced()) return
		if (isDesktop()) {
			animate(dialog, { opacity: [0, 1], scale: [0.96, 1], duration: 500, ease: 'out(4)' })
		} else {
			animate(dialog, { y: ['100%', '0%'], ease: spring({ bounce: 0.18, duration: 550 }) })
		}
	}, [project])

	// Swipe the handle down to dismiss
	const drag = useRef(null)
	const onPointerDown = (e) => {
		drag.current = { start: e.clientY, dy: 0 }
		e.currentTarget.setPointerCapture(e.pointerId)
	}
	const onPointerMove = (e) => {
		if (!drag.current) return
		drag.current.dy = Math.max(0, e.clientY - drag.current.start)
		ref.current.style.transform = `translateY(${drag.current.dy}px)`
	}
	const onPointerUp = () => {
		if (!drag.current) return
		const { dy } = drag.current
		drag.current = null
		if (dy > 110) close(dy)
		else animate(ref.current, { y: [dy, 0], ease: spring({ bounce: 0.3, duration: 400 }) })
	}

	const live = project && isLive(project)

	return (
		<dialog
			ref={ref}
			className="sheet"
			aria-labelledby="sheet-title"
			onCancel={(e) => {
				e.preventDefault()
				close()
			}}
			onClick={(e) => e.target === ref.current && close()}
		>
			{project && (
				<div>
					{/* Drag handle (phones) */}
					<div
						className="sticky top-0 z-20 flex justify-center bg-surface py-3 md:hidden"
						style={{ touchAction: 'none' }}
						onPointerDown={onPointerDown}
						onPointerMove={onPointerMove}
						onPointerUp={onPointerUp}
						onPointerCancel={onPointerUp}
					>
						<span className="h-1.5 w-12 rounded-full bg-line-2" />
					</div>

					<button
						onClick={() => close()}
						aria-label="Close"
						className="absolute right-4 top-4 z-30 hidden h-10 w-10 items-center justify-center rounded-full bg-page/70 text-fg backdrop-blur transition-colors hover:bg-page md:flex"
					>
						<X size={20} />
					</button>

					<ProjectShot
						project={project}
						real
						sizes="(max-width: 768px) 100vw, 900px"
						className="mx-4 rounded-2xl md:mx-0 md:rounded-none"
					/>

					<div className="px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6 md:px-10 md:pb-10 md:pt-8">
						<p className="text-sm text-muted">
							{project.category}
							{project.freelance && ', freelance'}
							{project.workRelated && ', built at work'}
						</p>
						<h2 id="sheet-title" className="mt-1 text-3xl font-bold md:text-4xl">
							{project.title}
						</h2>
						<p className="mt-4 max-w-[65ch] text-fg-2">{project.descriptionExpanded}</p>

						<ul className="mt-6 flex flex-wrap gap-2">
							{project.technologies.map((tech) => (
								<li key={tech} className="rounded-full border border-line-2 px-3 py-1 text-sm text-fg-2">
									{tech}
								</li>
							))}
						</ul>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							{live ? (
								<a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
									Open live site
									<ArrowUpRight size={18} className="nudge" />
								</a>
							) : (
								<p className="inline-flex items-center gap-2 text-sm text-muted">
									<Lock size={16} />
									Private project, no public link
								</p>
							)}
							<button onClick={() => close()} className="btn btn-ghost md:hidden">
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</dialog>
	)
}

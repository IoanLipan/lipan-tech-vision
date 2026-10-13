'use client'

import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { animate } from 'animejs'
import { REDUCE } from '@/lib/anime'

const REST = 0.22 // resting dot opacity
const WAVE = 70 // px, thickness of a ripple's bright band

/**
 * Canvas dot grid with ripples. One element instead of ~1k DOM dots: anime.js animates each
 * ripple's progress and the canvas redraws from it, so ripples stay smooth on low-end phones.
 * `ripple(x, y)` takes client coordinates; with no args it ripples from the centre.
 */
const DotField = forwardRef(function DotField({ className = '' }, ref) {
	const canvas = useRef(null)
	const state = useRef({ ripples: [], dots: [], w: 0, h: 0 })

	const draw = () => {
		const c = canvas.current
		if (!c) return
		const ctx = c.getContext('2d')
		const { ripples, dots, w, h } = state.current
		const color = getComputedStyle(c).color
		ctx.clearRect(0, 0, w, h)
		ctx.fillStyle = color
		for (const [x, y] of dots) {
			let k = 0
			for (const r of ripples) {
				const d = Math.hypot(x - r.x, y - r.y) - r.front
				k = Math.max(k, Math.exp(-(d * d) / (WAVE * WAVE)) * (1 - r.p))
			}
			ctx.globalAlpha = REST + (1 - REST) * k
			ctx.beginPath()
			ctx.arc(x, y, 1.5 * (1 + 1.4 * k), 0, Math.PI * 2)
			ctx.fill()
		}
	}

	useImperativeHandle(ref, () => ({
		ripple(clientX, clientY) {
			if (window.matchMedia(REDUCE).matches) return
			const box = canvas.current.getBoundingClientRect()
			const { w, h } = state.current
			const x = clientX == null ? w / 2 : clientX - box.left
			const y = clientY == null ? h / 2 : clientY - box.top
			const reach = Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + WAVE
			const r = { x, y, p: 0, front: 0 }
			state.current.ripples.push(r)
			animate(r, {
				p: 1,
				front: reach,
				duration: 1600,
				ease: 'out(2)',
				onUpdate: draw,
				onComplete: () => {
					state.current.ripples = state.current.ripples.filter((o) => o !== r)
					draw()
				},
			})
		},
	}))

	// Size to the parent at device resolution (before the hero's intro runs); spacing grows on big screens
	useLayoutEffect(() => {
		const c = canvas.current
		const fit = () => {
			const { width: w, height: h } = c.parentElement.getBoundingClientRect()
			const dpr = Math.min(window.devicePixelRatio || 1, 2)
			c.width = w * dpr
			c.height = h * dpr
			c.style.width = `${w}px`
			c.style.height = `${h}px`
			c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0)
			const gap = Math.max(26, Math.round(w / 46))
			const cols = Math.floor(w / gap)
			const rows = Math.floor(h / gap)
			const ox = (w - (cols - 1) * gap) / 2
			const oy = (h - (rows - 1) * gap) / 2
			const dots = []
			for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) dots.push([ox + i * gap, oy + j * gap])
			state.current = { ...state.current, dots, w, h }
			draw()
		}
		fit()
		const ro = new ResizeObserver(fit)
		ro.observe(c.parentElement)
		// Redraw when the theme flips (dot colour comes from CSS)
		const mo = new MutationObserver(draw)
		mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
		return () => {
			ro.disconnect()
			mo.disconnect()
		}
	}, [])

	return <canvas ref={canvas} aria-hidden="true" className={`pointer-events-none absolute inset-0 text-muted ${className}`} />
})

export default DotField

'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { animate, createScope, onScroll, splitText, stagger, utils } from 'animejs'
import { REDUCE } from '@/lib/anime'

/**
 * Site-wide scroll reveals. Mark markup, no per-component code:
 *   data-reveal          element fades + rises when it scrolls in
 *   data-reveal="stagger" its children do, one after another
 *   data-reveal="words"   text rises word by word out of a clipped line (static text only)
 *   data-reveal="morph"   its .hl-char letters widen and thicken into place (stays visible: good for LCP)
 */
export default function Motion() {
	const pathname = usePathname()

	useLayoutEffect(() => {
		window.__motion = true // tells the boot script's failsafe that the app hydrated
		const scope = createScope({ mediaQueries: { reduce: REDUCE } }).add((self) => {
			if (self.matches.reduce) return

			document.querySelectorAll('[data-reveal]').forEach((el) => {
				const mode = el.dataset.reveal
				const trigger = () =>
					onScroll({ target: el, enter: 'bottom-=8% top', sync: 'play', repeat: false })

				if (mode === 'morph') {
					animate(el.querySelectorAll('.hl-char'), {
						'--wdth': [62, 100],
						'--wght': [200, 800],
						duration: 1200,
						delay: stagger(30),
						ease: 'out(4)',
						autoplay: trigger(),
					})
					return
				}

				if (mode === 'words') {
					const { words } = splitText(el, { words: { wrap: 'clip' } })
					utils.set(words, { y: '130%' })
					utils.set(el, { opacity: 1 })
					animate(words, {
						y: '0%',
						duration: 1100,
						delay: stagger(45),
						ease: 'out(4)',
						autoplay: trigger(),
					})
					return
				}

				const targets = mode === 'stagger' ? [...el.children] : el
				utils.set(targets, { opacity: 0, y: 28 })
				animate(targets, {
					opacity: 1,
					y: 0,
					duration: 900,
					delay: stagger(80),
					ease: 'out(4)',
					autoplay: trigger(),
				})
			})
		})
		return () => scope.revert()
	}, [pathname])

	return null
}

'use client'

import { useLayoutEffect, useRef } from 'react'
import { createScope } from 'animejs'

export const REDUCE = '(prefers-reduced-motion: reduce)'

/**
 * Runs `setup(scope)` inside an anime.js scope rooted at the returned ref.
 * Everything created inside (animations, onScroll observers, splitText) is reverted on unmount.
 * Check `scope.matches.reduce` to skip motion for reduced-motion users.
 */
export function useAnime(setup, deps = []) {
	const root = useRef(null)
	useLayoutEffect(() => {
		const scope = createScope({ root, mediaQueries: { reduce: REDUCE } }).add(setup)
		return () => scope.revert()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps)
	return root
}

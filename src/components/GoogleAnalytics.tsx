'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/gtag'

export default function GoogleAnalytics() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		if (pathname) {
			const url = pathname + searchParams.toString()
			pageview(url)
		}
	}, [pathname, searchParams])

	return null
}

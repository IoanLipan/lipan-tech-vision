'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Closing prompt on inner pages. Home already ends with the contact section; contact pages don't need it.
const HIDDEN = ['/', '/contact', '/thank-you']

export default function FooterCta() {
	if (HIDDEN.includes(usePathname())) return null
	return (
		<section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
				<h2 data-reveal="words" className="max-w-[14ch] text-[2.4rem] font-bold md:text-6xl">
					Have a project in mind?
				</h2>
				<div data-reveal className="flex flex-wrap gap-3">
					<Link href="/contact" className="btn btn-primary">
						Start a project
					</Link>
					<a href="mailto:ioanlipan1@gmail.com" className="btn btn-ghost">
						Email me
					</a>
				</div>
			</div>
		</section>
	)
}

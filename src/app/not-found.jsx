import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata = { title: 'Page not found - Ioan Lipan' }

export default function NotFound() {
	return (
		<>
			<PageHeader
				title="Page not found"
				intro="This link doesn't lead anywhere, maybe it moved. Everything I've built is one tap away."
			/>
			<div className="px-5 pb-24 md:px-8 md:pb-32">
				<div data-reveal className="mx-auto flex max-w-7xl flex-wrap gap-3">
					<Link href="/projects" className="btn btn-primary">
						See projects
					</Link>
					<Link href="/" className="btn btn-ghost">
						Go home
					</Link>
				</div>
			</div>
		</>
	)
}

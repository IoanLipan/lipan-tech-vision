import Logo from './Logo'
import FooterCta from './FooterCta'

const links = [
	{ label: 'Email', href: 'mailto:ioanlipan1@gmail.com' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/ioan-lipan-4539891b2/' },
	{ label: 'GitHub', href: 'https://github.com/IoanLipan' },
]

const Footer = () => (
	<footer>
		<FooterCta />
		<div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-line px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
			<div>
				<Logo />
				<p className="mt-3 text-sm text-muted">© {new Date().getFullYear()} Lipan Tech Vision. Built by hand in Bucharest.</p>
			</div>
			<ul className="flex gap-6">
				{links.map(({ label, href }) => (
					<li key={label}>
						<a
							href={href}
							target={href.startsWith('http') ? '_blank' : undefined}
							rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className="inline-block py-2 text-[15px] font-medium text-muted transition-colors hover:text-fg"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</div>
	</footer>
)

export default Footer

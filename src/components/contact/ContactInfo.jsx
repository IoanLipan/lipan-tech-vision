const contactItems = [
	{
		label: 'Email',
		value: 'ioanlipan1@gmail.com',
		href: 'mailto:ioanlipan1@gmail.com',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 shrink-0"
				style={{ color: 'var(--secondary)' }}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		label: 'Location',
		value: 'Bucharest, Romania',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 shrink-0"
				style={{ color: 'var(--secondary)' }}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/lipan-ioan',
		href: 'https://www.linkedin.com/in/ioan-lipan-4539891b2/',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 shrink-0"
				style={{ color: 'var(--secondary)' }}
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
]

const ContactInfo = () => (
	<div className="space-y-6">
		{contactItems.map(({ label, value, href, icon }) => (
			<div key={label} className="flex items-start space-x-4">
				{icon}
				<div>
					<h4 className="font-medium">{label}</h4>
					{href ? (
						<a
							href={href}
							target={href.startsWith('http') ? '_blank' : undefined}
							rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className="text-muted hover:text-[var(--secondary)] transition-colors"
						>
							{value}
						</a>
					) : (
						<p className="text-muted">{value}</p>
					)}
				</div>
			</div>
		))}
	</div>
)

export default ContactInfo

'use client'

import { useState } from 'react'
import { Check, Copy, Linkedin, MapPin } from 'lucide-react'

const EMAIL = 'ioanlipan1@gmail.com'

// Big tappable email with one-tap copy, plus LinkedIn and location.
const ContactInfo = () => {
	const [copied, setCopied] = useState(false)

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL)
			setCopied(true)
			setTimeout(() => setCopied(false), 1800)
		} catch {
			window.location.href = `mailto:${EMAIL}`
		}
	}

	return (
		<div>
			<div className="flex items-center gap-2">
				<a
					href={`mailto:${EMAIL}`}
					className="break-all py-2 text-xl font-semibold underline decoration-line-2 underline-offset-[6px] transition-colors hover:decoration-accent md:text-2xl"
				>
					{EMAIL}
				</a>
				<button
					onClick={copy}
					aria-label={copied ? 'Email copied' : 'Copy email address'}
					className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-raised hover:text-fg active:scale-90"
				>
					{copied ? <Check size={18} className="text-live" /> : <Copy size={18} />}
				</button>
			</div>
			<p aria-live="polite" className="h-5 text-sm text-live">
				{copied && 'Copied to clipboard'}
			</p>

			<ul className="mt-4 space-y-3 text-fg-2">
				<li>
					<a
						href="https://www.linkedin.com/in/ioan-lipan-4539891b2/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-11 items-center gap-3 transition-colors hover:text-fg"
					>
						<Linkedin size={18} className="text-accent" />
						LinkedIn
					</a>
				</li>
				<li className="inline-flex items-center gap-3">
					<MapPin size={18} className="text-accent" />
					Bucharest, Romania. Working with teams worldwide.
				</li>
			</ul>
		</div>
	)
}

export default ContactInfo

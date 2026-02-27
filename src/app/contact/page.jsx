'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const availableFor = [
	'Full-Stack Web Development',
	'Front-End Web Development',
	'Technical Consulting',
	'Project Collaboration',
	'Freelance Opportunities',
]

export default function ContactPage() {
	const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
	const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

	return (
		<div className="min-h-screen bg-primary">
			{/* Hero Section */}
			<section ref={headerRef} className="py-24 bg-primary relative overflow-hidden">
				<div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
				<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--secondary)' }} />
				<div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--primary)' }} />
				<div className="container mx-auto px-4 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
						transition={{ duration: 0.6 }}
						className="max-w-3xl"
					>
						<p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--secondary)' }}>
							— Let's Talk
						</p>
						<h1 className="text-5xl md:text-7xl font-black leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							Get In Touch
						</h1>
						<p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
							Have a project? An idea? Just want to say hello? I read every message.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section ref={formRef} className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Info column */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
							<p className="text-secondary mb-12">
								Whether you have a question about my services, want to discuss a
								potential project, or just want to say hello, I'm here to help. Fill
								out the form and I'll get back to you as soon as possible.
							</p>

							<ContactInfo />

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="mt-12 p-6 glass rounded-xl border border-primary"
							>
								<h4 className="font-bold mb-4" style={{ color: 'var(--secondary)' }}>
									Available for:
								</h4>
								<ul className="space-y-2 text-secondary">
									{availableFor.map((item) => (
										<li key={item} className="flex items-center gap-2">
											<svg
												className="h-4 w-4 shrink-0 text-green-400"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{item}
										</li>
									))}
								</ul>
							</motion.div>
						</motion.div>

						{/* Form column */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
							transition={{ duration: 0.6 }}
						>
							<ContactForm
								redirectPath="/thank-you"
								buttonFullWidth
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Back to Home */}
			<section className="py-12 bg-primary">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Link href="/">
							<div
								className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
								style={{ color: 'var(--secondary)' }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
										clipRule="evenodd"
									/>
								</svg>
								Back to Home
							</div>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		setIsSubmitting(true)
		// FormSubmit.co will handle the actual submission
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<section ref={ref} className="py-20 bg-primary">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-12 relative inline-block">
						Get In Touch
						<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 lg:grid-cols-2 gap-12"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div variants={itemVariants}>
						<h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
						<p className="text-secondary mb-8">
							Have a project in mind or want to discuss collaboration
							opportunities? Fill out the form and I'll get back to you as soon
							as possible.
						</p>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-[var(--primary)]"
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
								<div>
									<h4 className="font-medium">Email</h4>
									<a
										href="mailto:ioanlipan1@gmail.com"
										className="text-muted hover:text-[var(--primary)] transition-colors"
									>
										ioanlipan1@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-[var(--secondary)]"
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
								<div>
									<h4 className="font-medium">Location</h4>
									<p className="text-muted">Bucharest, Romania</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-[var(--primary)]"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								<div>
									<h4 className="font-medium">LinkedIn</h4>
									<a
										href="https://linkedin.com/in/lipan-ioan"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted hover:text-[var(--primary)] transition-colors"
									>
										linkedin.com/in/lipan-ioan
									</a>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div variants={itemVariants}>
						{/* FormSubmit.co Form */}
						<form
							action="https://formsubmit.co/ioanlipan1@gmail.com"
							method="POST"
							className="space-y-6"
							onSubmit={handleSubmit}
						>
							{/* FormSubmit.co Configuration */}
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							<input
								type="hidden"
								name="_subject"
								value="New Portfolio Contact Form Message!"
							/>
							<input
								type="hidden"
								name="_next"
								value={
									typeof window !== 'undefined'
										? `${window.location.origin}/?contact=success`
										: ''
								}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-secondary mb-1"
									>
										Name *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full bg-secondary border border-primary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-colors"
										placeholder="Your name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-secondary mb-1"
									>
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full bg-secondary border border-primary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors"
										placeholder="your.email@example.com"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-secondary mb-1"
								>
									Subject *
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full bg-secondary border border-primary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-colors"
									placeholder="What's this about?"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-secondary mb-1"
								>
									Message *
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className="w-full bg-secondary border border-primary rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors resize-vertical"
									placeholder="Tell me about your project or just say hello!"
									required
								></textarea>
							</div>

							<motion.button
								type="submit"
								className="px-8 py-3 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
								whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
								whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<span className="flex items-center justify-center">
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</span>
								) : (
									'Send Message'
								)}
							</motion.button>

							{/* Success message when redirected back with success parameter */}
							{typeof window !== 'undefined' &&
								new URLSearchParams(window.location.search).get('contact') ===
									'success' && (
									<motion.div
										className="mt-4 p-3 bg-green-800/20 border border-green-500 text-green-400 rounded-md"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<div className="flex items-center">
											<svg
												className="h-5 w-5 mr-2"
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
											Thanks for your message! I'll get back to you soon.
										</div>
									</motion.div>
								)}
						</form>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default ContactSection

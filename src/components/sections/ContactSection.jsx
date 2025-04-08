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
	const [submitted, setSubmitted] = useState(false)

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const handleChange = (e) => {
		const { id, value } = e.target
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		// In production, replace with actual API call
		setTimeout(() => {
			setIsSubmitting(false)
			setSubmitted(true)
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: '',
			})

			// Reset submission message after 5 seconds
			setTimeout(() => {
				setSubmitted(false)
			}, 5000)
		}, 1500)
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
		<section ref={ref} className="py-20 bg-gray-900">
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
						<p className="text-gray-300 mb-8">
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
									<p className="text-gray-400">contact@lipantechvision.com</p>
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
									<p className="text-gray-400">Global</p>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div variants={itemVariants}>
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
										placeholder="Your name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
										placeholder="Your email"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
									placeholder="Subject"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={5}
									value={formData.message}
									onChange={handleChange}
									className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
									placeholder="Your message"
									required
								></textarea>
							</div>

							<motion.button
								type="submit"
								className="px-8 py-3 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity w-full md:w-auto"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
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

							{submitted && (
								<motion.div
									className="mt-4 p-3 bg-green-800/20 border border-green-500 text-green-400 rounded-md"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
								>
									Thanks for your message! I'll get back to you soon.
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

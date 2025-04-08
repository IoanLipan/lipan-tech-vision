'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState('')

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
		setError('')

		// Simulate form submission
		// In production, replace with actual API call
		try {
			// Simulated API delay
			await new Promise((resolve) => setTimeout(resolve, 1500))

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
		} catch (err) {
			setIsSubmitting(false)
			setError('An error occurred. Please try again later.')
			console.error('Form submission error:', err)
		}
	}

	// Contact methods
	const contactMethods = [
		{
			name: 'Email',
			value: 'contact@lipantechvision.com',
			icon: (
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
			),
		},
		{
			name: 'Location',
			value: 'Global',
			icon: (
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
			),
		},
		{
			name: 'Follow',
			value: '@lipantechvision',
			icon: (
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
						d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
					/>
				</svg>
			),
		},
	]

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [formRef, formInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<div className="min-h-screen bg-gray-900">
			{/* Hero Section */}
			<section
				ref={headerRef}
				className="py-20 bg-gray-900 relative overflow-hidden"
			>
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							Get In Touch
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Have a project in mind or want to discuss collaboration
							opportunities? I'd love to hear from you.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Contact Form and Info */}
			<section ref={formRef} className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Info Column */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={
								formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
							}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
							<p className="text-gray-300 mb-12">
								Whether you have a question about my services, want to discuss a
								potential project, or just want to say hello, I'm here to help.
								Fill out the form and I'll get back to you as soon as possible.
							</p>

							<div className="space-y-8">
								{contactMethods.map((method, index) => (
									<motion.div
										key={index}
										className="flex items-start space-x-4"
										initial={{ opacity: 0, y: 20 }}
										animate={
											formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
										}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									>
										{method.icon}
										<div>
											<h4 className="font-medium">{method.name}</h4>
											<p className="text-gray-400">{method.value}</p>
										</div>
									</motion.div>
								))}
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.8 }}
								className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700"
							>
								<h4 className="font-bold mb-2">Available for:</h4>
								<ul className="space-y-2 text-gray-300">
									<li className="flex items-center">
										<svg
											className="h-5 w-5 mr-2 text-green-400"
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
										Web Development Projects
									</li>
									<li className="flex items-center">
										<svg
											className="h-5 w-5 mr-2 text-green-400"
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
										Technical Consulting
									</li>
									<li className="flex items-center">
										<svg
											className="h-5 w-5 mr-2 text-green-400"
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
										Speaking Engagements
									</li>
								</ul>
							</motion.div>
						</motion.div>

						{/* Form Column */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={
								formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
							}
							transition={{ duration: 0.6 }}
						>
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
											className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
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
											className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
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
										className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
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
										rows={6}
										value={formData.message}
										onChange={handleChange}
										className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
										placeholder="Your message"
										required
									></textarea>
								</div>

								<motion.button
									type="submit"
									className="px-8 py-3 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity w-full"
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

								{error && (
									<motion.div
										className="mt-4 p-3 bg-red-800/20 border border-red-500 text-red-400 rounded-md"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										{error}
									</motion.div>
								)}
							</form>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Back To Home Button */}
			<section className="py-12 bg-gray-900">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Link href="/">
							<div className="inline-flex items-center text-[var(--primary)] hover:text-[#7FEAEF] transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
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

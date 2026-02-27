'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FormField from '@/components/ui/FormField'

const ContactForm = ({
	redirectPath,
	successParam,
	successParamValue,
	buttonFullWidth = false,
}) => {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)

	useEffect(() => {
		setShowSuccess(
			new URLSearchParams(window.location.search).get(successParam) === successParamValue
		)
	}, [successParam, successParamValue])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => setIsSubmitting(true)

	return (
		<form
			action="https://formsubmit.co/ioanlipan1@gmail.com"
			method="POST"
			className="space-y-6"
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_template" value="table" />
			<input type="hidden" name="_subject" value="New Portfolio Contact Form Message!" />
			<input
				type="hidden"
				name="_next"
				value={
					typeof window !== 'undefined' ? `${window.location.origin}${redirectPath}` : ''
				}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormField
					label="Name"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your name"
				/>
				<FormField
					label="Email"
					id="email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="your.email@example.com"
				/>
			</div>

			<FormField
				label="Subject"
				id="subject"
				name="subject"
				value={formData.subject}
				onChange={handleChange}
				placeholder="What's this about?"
			/>

			<FormField
				label="Message"
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				placeholder="Tell me about your project or just say hello!"
				rows={5}
			/>

			<motion.button
				type="submit"
				className={`px-8 py-3 rounded-sm border-2 border-[var(--secondary)] bg-[var(--secondary)] text-[var(--bg-primary)] font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-[var(--secondary)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${buttonFullWidth ? 'w-full' : 'w-full md:w-auto'}`}
				whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
				whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<span className="flex items-center justify-center">
						<svg
							className="animate-spin -ml-1 mr-3 h-5 w-5"
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
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
						Sending...
					</span>
				) : (
					'Send Message'
				)}
			</motion.button>

			{showSuccess && (
				<motion.div
					className="mt-4 p-3 bg-green-800/20 border border-green-500 text-green-400 rounded-md"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<div className="flex items-center">
						<svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
	)
}

export default ContactForm

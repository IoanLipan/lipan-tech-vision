'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import FormField from '@/components/ui/FormField'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (data) => {
	const errs = {}
	if (!data.name.trim()) errs.name = 'Name is required'
	if (!data.email.trim()) {
		errs.email = 'Email is required'
	} else if (!emailRegex.test(data.email)) {
		errs.email = 'Please enter a valid email address'
	}
	if (!data.subject.trim()) errs.subject = 'Subject is required'
	if (!data.message.trim()) errs.message = 'Message is required'
	return errs
}

const ContactForm = ({
	redirectPath,
	buttonFullWidth = false,
}) => {
	const router = useRouter()
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
	const [errors, setErrors] = useState({})
	const [touched, setTouched] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		if (touched[name]) {
			setErrors((prev) => ({ ...prev, ...validate({ ...formData, [name]: value }) }))
		}
	}

	const handleBlur = (e) => {
		const { name } = e.target
		setTouched((prev) => ({ ...prev, [name]: true }))
		setErrors(validate({ ...formData }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const errs = validate(formData)
		if (Object.keys(errs).length > 0) {
			setErrors(errs)
			setTouched({ name: true, email: true, subject: true, message: true })
			return
		}
		setIsSubmitting(true)
		setSubmitError('')
		try {
			const res = await fetch('https://formsubmit.co/ajax/ioanlipan1@gmail.com', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
					_subject: 'New Portfolio Contact Form Message!',
					_template: 'table',
					_captcha: 'false',
				}),
			})
			if (res.ok) {
				router.push(redirectPath)
			} else {
				throw new Error('Submission failed')
			}
		} catch {
			setSubmitError('Something went wrong. Please try again or email me directly.')
			setIsSubmitting(false)
		}
	}

	return (
		<form className="space-y-6" onSubmit={handleSubmit} noValidate>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<FormField
					label="Name"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder="Your name"
					error={touched.name ? errors.name : undefined}
				/>
				<FormField
					label="Email"
					id="email"
					name="email"
					type="email"
					value={formData.email}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder="your.email@example.com"
					error={touched.email ? errors.email : undefined}
				/>
			</div>

			<FormField
				label="Subject"
				id="subject"
				name="subject"
				value={formData.subject}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="What's this about?"
				error={touched.subject ? errors.subject : undefined}
			/>

			<FormField
				label="Message"
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="Tell me about your project or just say hello!"
				rows={5}
				error={touched.message ? errors.message : undefined}
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

			{submitError && (
				<motion.p
					className="text-sm text-red-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					{submitError}
				</motion.p>
			)}
		</form>
	)
}

export default ContactForm

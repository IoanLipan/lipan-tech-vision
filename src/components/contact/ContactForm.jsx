'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
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
		<form className="space-y-5" onSubmit={handleSubmit} noValidate>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				<FormField
					label="Name"
					id="name"
					name="name"
					autoComplete="name"
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
					inputMode="email"
					autoComplete="email"
					value={formData.email}
					onChange={handleChange}
					onBlur={handleBlur}
					placeholder="you@company.com"
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
				placeholder="New app, redesign, a quick question…"
				error={touched.subject ? errors.subject : undefined}
			/>

			<FormField
				label="Message"
				id="message"
				name="message"
				value={formData.message}
				onChange={handleChange}
				onBlur={handleBlur}
				placeholder="What are you building, and when do you need it?"
				rows={5}
				error={touched.message ? errors.message : undefined}
			/>

			<button
				type="submit"
				className={`btn btn-primary disabled:cursor-not-allowed disabled:opacity-60 ${buttonFullWidth ? 'w-full' : 'w-full md:w-auto'}`}
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<>
						<LoaderCircle size={18} className="animate-spin" />
						Sending…
					</>
				) : (
					'Send message'
				)}
			</button>

			{submitError && (
				<p role="alert" className="text-sm text-red-400">
					{submitError}
				</p>
			)}
		</form>
	)
}

export default ContactForm

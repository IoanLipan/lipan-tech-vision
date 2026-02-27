'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const ContactSection = () => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	}

	return (
		<section ref={ref} className="py-20 bg-primary">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl lg:text-5xl xl:text-6xl font-black mb-14 leading-tight">
						<span className="font-light text-muted">Get In </span>
						<span style={{ color: 'var(--secondary)' }}>Touch</span>
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
							Have a project in mind or want to discuss collaboration opportunities? Fill
							out the form and I'll get back to you as soon as possible.
						</p>
						<ContactInfo />
					</motion.div>

					<motion.div variants={itemVariants}>
						<ContactForm
							redirectPath="/thank-you"
							successParam="contact"
							successParamValue="success"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default ContactSection

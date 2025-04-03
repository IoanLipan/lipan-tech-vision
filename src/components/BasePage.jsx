'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SectionPage({
	title,
	description,
	content,
	colorAccent = 'from-[#D617B7] to-[#00D4E0]',
}) {
	return (
		<div className="min-h-screen bg-gray-900">
			{/* Hero Section */}
			<section className="py-20 bg-gray-900 relative overflow-hidden">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto"
					>
						<h1
							className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorAccent}`}
						>
							{title}
						</h1>
						<p className="text-xl text-gray-300 mb-8">{description}</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D617B7] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00D4E0] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Content Section */}
			<section className="py-12 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="max-w-4xl mx-auto prose prose-invert"
					>
						{content}
					</motion.div>
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
							<div className="inline-flex items-center text-[#00D4E0] hover:text-[#7FEAEF] transition-colors">
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

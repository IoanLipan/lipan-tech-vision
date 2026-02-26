'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ProblemSolverPage() {
	// Case studies
	const caseStudies = [
		{
			title: 'E-commerce Conversion Optimization',
			challenge:
				'An e-commerce platform was struggling with a high cart abandonment rate of 78%, significantly above industry average.',
			approach:
				'Conducted comprehensive user testing and analytics review to identify friction points in the checkout process.',
			solution:
				'Redesigned the checkout flow, simplified form fields, and added trust indicators at critical decision points.',
			result:
				'Reduced cart abandonment by 32% and increased conversions by 24% within two months.',
		},
		{
			title: 'Enterprise Data Integration',
			challenge:
				'A financial services company was operating with siloed data across multiple legacy systems, causing reporting inconsistencies and decision-making delays.',
			approach:
				'Performed a thorough audit of data flows and system architecture. Identified key integration points and stakeholder requirements.',
			solution:
				'Designed a central data lake architecture with automated ETL pipelines and implemented a business intelligence layer for consistent reporting.',
			result:
				'Reduced report generation time from 3 days to 4 hours, eliminated data discrepancies, and enabled real-time decision making.',
		},
		{
			title: 'Mobile App Performance',
			challenge:
				"A startup's mobile application was suffering from slow load times and frequent crashes, leading to poor user reviews and high uninstall rates.",
			approach:
				'Performed code review, implemented performance profiling, and analyzed crash reports to identify bottlenecks and stability issues.',
			solution:
				'Optimized database queries, implemented efficient caching strategies, and refactored memory-intensive processes.',
			result:
				'Reduced app load time by 60%, decreased crash rate from 8% to 0.5%, and improved app store rating from 2.8 to 4.6 stars.',
		},
	]

	// Problem-solving methodology
	const methodology = [
		{
			step: 'Define',
			description:
				'Clearly articulate the problem and establish measurable goals for success.',
			icon: '🔍',
		},
		{
			step: 'Research',
			description:
				'Gather data, analyze patterns, and understand the context of the problem.',
			icon: '📊',
		},
		{
			step: 'Ideate',
			description:
				'Generate multiple potential solutions without judgment or constraint.',
			icon: '💡',
		},
		{
			step: 'Evaluate',
			description:
				'Assess each solution against defined criteria and constraints.',
			icon: '⚖️',
		},
		{
			step: 'Implement',
			description:
				'Develop and deploy the chosen solution with careful planning.',
			icon: '🛠️',
		},
		{
			step: 'Measure',
			description:
				'Track key metrics to evaluate effectiveness and identify improvements.',
			icon: '📈',
		},
	]

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [methodologyRef, methodologyInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [caseStudiesRef, caseStudiesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<div className="min-h-screen bg-primary">
			{/* Hero Section */}
			<section
				ref={headerRef}
				className="py-20 bg-primary relative overflow-hidden"
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
							Problem Solver
						</h1>
						<p className="text-xl text-secondary mb-8">
							Approaching complex challenges with analytical thinking and
							creative solutions.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Methodology Section */}
			<section ref={methodologyRef} className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							methodologyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold">
							<span className="font-light text-muted">My </span><span style={{ color: 'var(--secondary)' }}>Problem-Solving Methodology</span>
							</h2>
					</motion.div>

					<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{methodology.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={
									methodologyInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								className="bg-primary p-6 rounded-lg border border-primary hover:border-[var(--secondary)] transition-all"
								whileHover={{ y: -5, transition: { duration: 0.2 } }}
							>
								<div className="flex items-center mb-4">
									<span className="text-3xl mr-3">{step.icon}</span>
									<h3 className="text-xl font-bold">
										{index + 1}. {step.step}
									</h3>
								</div>
								<p className="text-secondary">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section ref={caseStudiesRef} className="py-20 bg-primary">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							caseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold">
							<span className="font-light text-muted">Case </span><span style={{ color: 'var(--secondary)' }}>Studies</span>
							</h2>
					</motion.div>

					<div className="max-w-4xl mx-auto space-y-12">
						{caseStudies.map((study, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={
									caseStudiesInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
								className="bg-secondary p-8 rounded-lg border border-primary"
							>
								<h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">
									{study.title}
								</h3>

								<div className="space-y-4">
									<div>
										<h4 className="font-bold text-[var(--secondary)] mb-1">
											Challenge:
										</h4>
										<p className="text-secondary">{study.challenge}</p>
									</div>

									<div>
										<h4 className="font-bold text-[var(--secondary)] mb-1">
											Approach:
										</h4>
										<p className="text-secondary">{study.approach}</p>
									</div>

									<div>
										<h4 className="font-bold text-[var(--secondary)] mb-1">
											Solution:
										</h4>
										<p className="text-secondary">{study.solution}</p>
									</div>

									<div>
										<h4 className="font-bold text-[var(--secondary)] mb-1">
											Result:
										</h4>
										<p className="text-secondary">{study.result}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Back To Home Button */}
			<section className="py-12 bg-primary">
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

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function EngineerPage() {
	// Engineering projects
	const projects = [
		{
			title: 'AI-Driven Analytics Platform',
			description:
				'Designed and implemented a machine learning pipeline for predictive analytics, reducing data processing time by 60%.',
			technologies: ['Python', 'TensorFlow', 'AWS', 'Docker'],
			role: 'Lead Engineer',
			year: '2023',
		},
		{
			title: 'Enterprise Microservices Architecture',
			description:
				'Redesigned a monolithic application into a scalable microservices architecture, improving system reliability and scalability.',
			technologies: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ'],
			role: 'Systems Architect',
			year: '2022',
		},
		{
			title: 'IoT Energy Monitoring System',
			description:
				'Developed a real-time energy monitoring system for smart buildings using IoT sensors and cloud computing.',
			technologies: ['Raspberry Pi', 'MQTT', 'AWS IoT', 'React'],
			role: 'IoT Engineer',
			year: '2021',
		},
	]

	// Engineering principles
	const principles = [
		{
			title: 'Elegant Simplicity',
			description:
				'I believe in creating solutions that are as simple as possible, but no simpler. Complexity should be introduced only when necessary.',
			icon: '✨',
		},
		{
			title: 'Scalable Architecture',
			description:
				'Building systems that can grow and adapt to changing requirements without requiring complete rewrites.',
			icon: '📈',
		},
		{
			title: 'User-Centered Design',
			description:
				'Engineering is ultimately about solving human problems. I always keep the end user in mind, even when working on backend systems.',
			icon: '👤',
		},
		{
			title: 'Continuous Learning',
			description:
				'The tech landscape evolves rapidly. I commit to staying current with emerging technologies and best practices.',
			icon: '🧠',
		},
	]

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [projectsRef, projectsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [principlesRef, principlesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

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
							Engineering Expertise
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Designing and building robust, scalable systems that solve
							real-world problems.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Engineering Projects */}
			<section ref={projectsRef} className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold relative inline-block">
							Key Engineering Projects
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={projectsInView ? 'visible' : 'hidden'}
						className="max-w-4xl mx-auto space-y-8"
					>
						{projects.map((project, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[var(--primary)] transition-all"
								whileHover={{ y: -5, transition: { duration: 0.2 } }}
							>
								<div className="flex flex-wrap justify-between items-start gap-4 mb-3">
									<h3 className="text-xl font-bold">{project.title}</h3>
									<div className="flex gap-3">
										<span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
											{project.role}
										</span>
										<span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
											{project.year}
										</span>
									</div>
								</div>

								<p className="text-gray-300 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Engineering Principles */}
			<section ref={principlesRef} className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold relative inline-block">
							Engineering Principles
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{principles.map((principle, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={
									principlesInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[var(--secondary)] transition-all"
								whileHover={{ y: -5, transition: { duration: 0.2 } }}
							>
								<div className="text-3xl mb-4">{principle.icon}</div>
								<h3 className="text-xl font-bold mb-2">{principle.title}</h3>
								<p className="text-gray-400">{principle.description}</p>
							</motion.div>
						))}
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

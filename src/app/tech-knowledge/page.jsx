'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function TechKnowledgePage() {
	// Tech categories
	const categories = [
		{
			name: 'Frontend',
			skills: [
				{ name: 'React', level: 90, icon: '⚛️' },
				{ name: 'Next.js', level: 85, icon: '▲' },
				{ name: 'Vue.js', level: 80, icon: '🖖' },
				{ name: 'JavaScript', level: 95, icon: '🟨' },
				{ name: 'TypeScript', level: 85, icon: '🔷' },
				{ name: 'Tailwind CSS', level: 90, icon: '🌊' },
				{ name: 'Framer Motion', level: 75, icon: '🎭' },
			],
		},
		{
			name: 'Backend',
			skills: [
				{ name: 'Node.js', level: 85, icon: '🟢' },
				{ name: 'Express', level: 80, icon: '🚂' },
				{ name: 'MongoDB', level: 75, icon: '🍃' },
				{ name: 'SQL', level: 70, icon: '📊' },
				{ name: 'Firebase', level: 80, icon: '🔥' },
				{ name: 'GraphQL', level: 65, icon: '⬢' },
			],
		},
		{
			name: 'DevOps & Tools',
			skills: [
				{ name: 'Git', level: 90, icon: '📝' },
				{ name: 'Docker', level: 70, icon: '🐳' },
				{ name: 'CI/CD', level: 75, icon: '🔄' },
				{ name: 'AWS', level: 60, icon: '☁️' },
				{ name: 'Vercel', level: 85, icon: '▲' },
			],
		},
	]

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const skillVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [skillsRef, skillsInView] = useInView({
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
							Tech Knowledge
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							An overview of my technical skills, expertise, and proficiency in
							various technologies.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Skills Section */}
			<section ref={skillsRef} className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={skillsInView ? 'visible' : 'hidden'}
						className="max-w-5xl mx-auto space-y-16"
					>
						{categories.map((category, categoryIndex) => (
							<div key={categoryIndex} className="space-y-6">
								<motion.h2
									className="text-2xl font-bold relative inline-block"
									variants={skillVariants}
								>
									{category.name}
									<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
								</motion.h2>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											className="bg-gray-900 p-6 rounded-lg border border-gray-700"
											variants={skillVariants}
											whileHover={{ y: -5, transition: { duration: 0.2 } }}
										>
											<div className="flex items-center justify-between mb-3">
												<div className="flex items-center">
													<span className="text-2xl mr-3">{skill.icon}</span>
													<h3 className="text-xl font-semibold">
														{skill.name}
													</h3>
												</div>
												<span className="text-sm text-gray-400">
													{skill.level}%
												</span>
											</div>

											<div className="w-full bg-gray-700 rounded-full h-2.5">
												<motion.div
													className="h-2.5 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"
													initial={{ width: 0 }}
													animate={{ width: `${skill.level}%` }}
													transition={{
														duration: 1,
														delay: 0.3 + skillIndex * 0.1,
													}}
												/>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						))}
					</motion.div>

					{/* Optional: Learning Journey */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="max-w-4xl mx-auto mt-20 p-8 bg-gray-900 rounded-lg border border-gray-700"
					>
						<h2 className="text-2xl font-bold mb-6 text-center">
							Current Learning Journey
						</h2>
						<p className="text-gray-300 mb-6 text-center">
							I'm always expanding my knowledge. Here's what I'm currently
							focusing on:
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							{[
								'AI & Machine Learning',
								'Web3',
								'Mobile App Development',
								'UI/UX Design',
							].map((item, index) => (
								<span
									key={index}
									className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 border border-gray-700"
								>
									{item}
								</span>
							))}
						</div>
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

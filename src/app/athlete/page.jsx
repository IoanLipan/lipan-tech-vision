'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function AthletePage() {
	// Sample achievements data
	const achievements = [
		{
			year: '2023',
			title: 'Chicago Marathon',
			description:
				'Completed in 3:45:21, surpassing my personal goal by 10 minutes.',
			category: 'Running',
		},
		{
			year: '2022',
			title: 'Olympic Triathlon',
			description:
				'Finished in the top 15% of my age group with a time of 2:32:18.',
			category: 'Triathlon',
		},
		{
			year: '2021',
			title: 'National Powerlifting Championship',
			description: 'Set personal records in squat, bench press, and deadlift.',
			category: 'Strength',
		},
		{
			year: '2020',
			title: 'Half Marathon Series',
			description:
				'Completed three half marathons with an average time of 1:42:05.',
			category: 'Running',
		},
		{
			year: '2019',
			title: 'CrossFit Regional Competition',
			description:
				'Ranked in the top 10 in my division out of 120 competitors.',
			category: 'CrossFit',
		},
	]

	// Training philosophy data
	const philosophyPoints = [
		{
			title: 'Consistency Over Intensity',
			description:
				'I believe that showing up day after day yields better results than sporadic bursts of intense activity.',
			icon: '📆',
		},
		{
			title: 'Data-Driven Approach',
			description:
				'I track all my workouts, nutrition, and recovery to make informed decisions about my training.',
			icon: '📊',
		},
		{
			title: 'Balance and Recovery',
			description:
				'I prioritize proper recovery, sleep, and nutrition as essential components of athletic performance.',
			icon: '⚖️',
		},
		{
			title: 'Mindset and Mental Toughness',
			description:
				'I train my mind as much as my body, developing resilience and focus for both athletic and professional challenges.',
			icon: '🧠',
		},
	]

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [timelineRef, timelineInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [philosophyRef, philosophyInView] = useInView({
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
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D617B7] to-[#00D4E0]">
							Athletic Journey
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Pushing physical limits and applying athletic discipline to all
							aspects of life.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D617B7] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00D4E0] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Timeline Section */}
			<section ref={timelineRef} className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold relative inline-block">
							Athletic Achievements
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D617B7] to-[#00D4E0]"></span>
						</h2>
					</motion.div>

					<div className="max-w-4xl mx-auto">
						{achievements.map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
								animate={
									timelineInView
										? { opacity: 1, x: 0 }
										: { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
								}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative pl-10 pb-12 border-l-2 border-gray-700 last:border-transparent"
							>
								<div className="absolute left-[-8px] top-0 bg-gray-800 p-1">
									<div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D617B7] to-[#00D4E0]"></div>
								</div>

								<div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[#00D4E0] transition-all">
									<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
										<h3 className="text-xl font-bold">{achievement.title}</h3>
										<div className="flex gap-3">
											<span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
												{achievement.year}
											</span>
											<span className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
												{achievement.category}
											</span>
										</div>
									</div>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Philosophy Section */}
			<section ref={philosophyRef} className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-12"
					>
						<h2 className="text-3xl font-bold relative inline-block">
							Training Philosophy
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D617B7] to-[#00D4E0]"></span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{philosophyPoints.map((point, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={
									philosophyInView
										? { opacity: 1, y: 0 }
										: { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#D617B7] transition-all"
								whileHover={{ y: -5, transition: { duration: 0.2 } }}
							>
								<div className="text-3xl mb-4">{point.icon}</div>
								<h3 className="text-xl font-bold mb-2">{point.title}</h3>
								<p className="text-gray-400">{point.description}</p>
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

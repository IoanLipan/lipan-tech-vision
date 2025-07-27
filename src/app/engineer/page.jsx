'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { GraduationCap, School, BookOpen } from 'lucide-react'

export default function EngineerPage() {
	// Academic timeline data
	const academicTimeline = [
		{
			id: 1,
			title: 'Engineer Diploma',
			period: '2022',
			institution: 'Polytechnic University of Bucharest',
			description:
				'My final thesis was a Traffic Sign Detection Application that used a CNN (Convolutional Neural Network) to train a model to detect traffic signs. The project achieved 94% accuracy in real-time detection and was implemented with optimization for edge computing devices.',
			icon: <GraduationCap className="h-8 w-8" />,
			type: 'graduation',
		},
		{
			id: 2,
			title: 'Polytechnic University of Bucharest',
			period: '2018 - 2022',
			institution:
				'Faculty of Electronics, Telecommunications and Information Technology',
			description:
				'I graduated the Faculty of Electronics, Telecommunications and Information Technology. During the 4 years I encountered a lot of programming subjects: Object-Oriented Programming (OOP), MATLAB, Python, C++, and Computer Networks. This comprehensive education helped me better understand fundamental concepts and I found my passion for software development.',
			icon: <School className="h-8 w-8" />,
			type: 'university',
		},
		{
			id: 3,
			title: 'National High-School "Ferdinand I", Bacau',
			period: '2014 - 2018',
			institution: 'Mathematical-Informatics Profile',
			description:
				'I finished the mathematical-informatics profile, scoring 10/10 in the mathematics Baccalaureate. During high school, I developed strong analytical thinking skills and was introduced to programming fundamentals, which laid the foundation for my future career in technology.',
			icon: <BookOpen className="h-8 w-8" />,
			type: 'highschool',
		},
	]

	// Engineering principles
	const principles = [
		{
			title: 'Problem-First Approach',
			description:
				'I believe in understanding the problem deeply before jumping to solutions. Every engineering challenge starts with asking the right questions.',
			icon: '🔍',
		},
		{
			title: 'Scalable Solutions',
			description:
				'Building systems that can grow and adapt to changing requirements without requiring complete rewrites.',
			icon: '📈',
		},
		{
			title: 'Continuous Learning',
			description:
				'The tech landscape evolves rapidly. I commit to staying current with emerging technologies and best practices.',
			icon: '🧠',
		},
		{
			title: 'Quality over Speed',
			description:
				'While delivery speed matters, I prioritize writing clean, maintainable code that stands the test of time.',
			icon: '⚡',
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

	const [principlesRef, principlesInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const timelineItemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0],
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
							Academic Journey
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							My educational path that shaped my engineering mindset and
							technical expertise.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Academic Timeline */}
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
							Educational Timeline
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={timelineInView ? 'visible' : 'hidden'}
						className="max-w-4xl mx-auto"
					>
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--secondary)] to-[var(--primary)]"></div>

							{/* Timeline items */}
							<div className="space-y-12">
								{academicTimeline.map((item, index) => (
									<motion.div
										key={item.id}
										variants={timelineItemVariants}
										className="relative flex items-start"
									>
										{/* Icon */}
										<div className="absolute left-0 flex items-center justify-center w-16 h-16 bg-gray-900 border-4 border-[var(--secondary)] rounded-full text-[var(--primary)]">
											{item.icon}
										</div>

										{/* Content */}
										<div className="ml-24 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-[var(--secondary)] transition-all w-full">
											<div className="flex flex-wrap items-center justify-between mb-3">
												<h3 className="text-xl font-bold text-white">
													{item.title}
												</h3>
												<span className="px-3 py-1 text-sm rounded-full bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]">
													{item.period}
												</span>
											</div>

											<h4 className="text-lg font-semibold text-[var(--secondary)] mb-3">
												{item.institution}
											</h4>

											<p className="text-gray-300 leading-relaxed">
												{item.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
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
							Engineering Philosophy
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

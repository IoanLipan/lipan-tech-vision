'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { GraduationCap, School, BookOpen } from 'lucide-react'

export default function EngineerPage() {
	const academicTimeline = [
		{
			id: 1,
			title: 'Engineer Diploma',
			period: '2022',
			institution: 'Polytechnic University of Bucharest',
			description:
				'My final thesis was a Traffic Sign Detection Application that used a CNN (Convolutional Neural Network) to train a model to detect traffic signs. The project achieved 94% accuracy in real-time detection and was implemented with optimization for edge computing devices.',
			icon: <GraduationCap className="h-7 w-7" />,
		},
		{
			id: 2,
			title: 'Polytechnic University of Bucharest',
			period: '2018 – 2022',
			institution: 'Faculty of Electronics, Telecommunications & IT',
			description:
				'I graduated the Faculty of Electronics, Telecommunications and Information Technology. During 4 years I encountered OOP, MATLAB, Python, C++, and Computer Networks. This comprehensive education helped me understand fundamental concepts and sparked my passion for software development.',
			icon: <School className="h-7 w-7" />,
		},
		{
			id: 3,
			title: 'National High-School "Ferdinand I", Bacau',
			period: '2014 – 2018',
			institution: 'Mathematical-Informatics Profile',
			description:
				'I finished the mathematical-informatics profile, scoring 10/10 in the mathematics Baccalaureate. I developed strong analytical thinking and was introduced to programming fundamentals, which laid the foundation for my career in technology.',
			icon: <BookOpen className="h-7 w-7" />,
		},
	]

	const principles = [
		{
			title: 'Your Vision First',
			description:
				'Before writing a single line of code, I learn your business and goals. What you want to achieve drives every decision — not what looks impressive technically.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.001z" />
				</svg>
			),
			num: '01',
		},
		{
			title: 'Zero Surprises',
			description:
				'Timelines, costs, and progress — always transparent. Plain-English updates, not technical jargon. You will always know exactly where things stand.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
				</svg>
			),
			num: '02',
		},
		{
			title: 'Built to Scale',
			description:
				'What we ship today will not hold you back tomorrow. Your product grows with your users, your team, and your ambitions — no costly rewrites.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
				</svg>
			),
			num: '03',
		},
		{
			title: 'On Time, As Promised',
			description:
				'Deadlines are commitments, not suggestions. I plan carefully, communicate early, and deliver what was agreed — no excuses, no delays.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
				</svg>
			),
			num: '04',
		},
	]

	const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
	const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })
	const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
	}

	const timelineItemVariants = {
		hidden: { opacity: 0, x: -40 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } },
	}

	return (
		<div className="min-h-screen bg-primary">
			{/* ── Hero ── */}
			<section ref={headerRef} className="py-24 bg-primary relative overflow-hidden">
				{/* Dot-grid */}
				<div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
				{/* Blobs */}
				<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--secondary)' }} />
				<div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--primary)' }} />

				<div className="container mx-auto px-4 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
						transition={{ duration: 0.6 }}
						className="max-w-3xl"
					>
						<p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--secondary)' }}>
							— Background & Philosophy
						</p>
						<h1 className="text-5xl md:text-7xl font-black leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							Academic Journey
						</h1>
						<p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
							My educational path that shaped my engineering mindset and
							technical expertise.
						</p>
					</motion.div>
				</div>
			</section>

			{/* ── Academic Timeline ── */}
			<section ref={timelineRef} className="py-20 lg:py-28 bg-secondary">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-14"
					>
						<h2 className="text-3xl lg:text-4xl font-black">
							<span className="font-light text-muted">Educational </span>
							<span style={{ color: 'var(--secondary)' }}>Timeline</span>
						</h2>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={timelineInView ? 'visible' : 'hidden'}
						className="max-w-4xl mx-auto"
					>
						<div className="relative">
							{/* Vertical line */}
							<div
								className="absolute left-8 top-0 bottom-0 w-[2px]"
								style={{ background: 'linear-gradient(to bottom, var(--secondary), var(--primary))' }}
							/>

							<div className="space-y-10">
								{academicTimeline.map((item, index) => (
									<motion.div
										key={item.id}
										variants={timelineItemVariants}
										className="relative flex items-start"
									>
										{/* Icon circle */}
										<div
											className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 glass shrink-0"
											style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}
										>
											{item.icon}
										</div>

										{/* Card */}
										<div className="ml-8 glass rounded-xl border border-primary hover:border-[var(--secondary)] transition-all w-full p-6 relative overflow-hidden">
											{/* Decorative index */}
											<span
												className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none opacity-[0.07]"
												style={{ color: 'var(--secondary)' }}
											>
												{String(academicTimeline.length - index).padStart(2, '0')}
											</span>

											<div className="flex flex-wrap items-start justify-between gap-2 mb-3">
												<h3 className="text-lg font-black text-primary pr-8">
													{item.title}
												</h3>
												<span
													className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm border shrink-0"
													style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}
												>
													{item.period}
												</span>
											</div>

											<p className="text-sm font-semibold mb-3" style={{ color: 'var(--secondary)' }}>
												{item.institution}
											</p>

											<p className="text-secondary text-sm leading-relaxed">
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

			{/* ── Engineering Philosophy ── */}
			<section ref={principlesRef} className="py-20 lg:py-28 bg-primary">
				<div className="container mx-auto px-4 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto mb-14"
					>
						<h2 className="text-3xl lg:text-4xl font-black">
							<span className="font-light text-muted">Engineering </span>
							<span style={{ color: 'var(--secondary)' }}>Philosophy</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
						{principles.map((principle, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={principlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
								className="glass p-7 rounded-xl border border-primary hover:border-[var(--secondary)] transition-all relative overflow-hidden"
								whileHover={{ y: -4, transition: { duration: 0.2 } }}
							>
								{/* Decorative number */}
								<span
									className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none opacity-[0.07]"
									style={{ color: 'var(--secondary)' }}
								>
									{principle.num}
								</span>

								<div className="mb-5">{principle.icon}</div>
								<h3 className="text-lg font-black mb-2 text-primary">{principle.title}</h3>
								<p className="text-secondary text-sm leading-relaxed">{principle.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── Back to Home ── */}
			<section className="py-10 bg-primary border-t border-primary">
				<div className="container mx-auto px-4 lg:px-8">
					<Link href="/">
						<div
							className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
							style={{ color: 'var(--secondary)' }}
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
							</svg>
							Back to Home
						</div>
					</Link>
				</div>
			</section>
		</div>
	)
}

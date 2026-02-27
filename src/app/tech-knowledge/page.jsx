'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
	ReactIcon,
	NextIcon,
	VueIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	TailwindIcon,
	FramerIcon,
	NodeIcon,
	ExpressIcon,
	MongoIcon,
	SQLIcon,
	FirebaseIcon,
	GraphQLIcon,
	GitIcon,
	DockerIcon,
	CICDIcon,
	AWSIcon,
	VercelIcon,
	StorybookIcon,
	ShopifyIcon,
	PageflyIcon,
	LiquidIcon,
	MaplibreIcon,
	KonvaIcon,
	CMSPayloadIcon,
	LivekitIcon,
	TanstackDarkIcon,
	TanstackLightIcon,
} from '@/components/ui/TechIcons'
import { useTheme } from '@/context/ThemeContext'

export default function TechKnowledgePage() {
	const { theme } = useTheme()

	const categories = [
		{
			name: 'Frontend',
			label: '— UI & Interfaces',
			skills: [
				{ name: 'React', icon: <ReactIcon width={40} height={40} /> },
				{ name: 'Next.js', icon: <NextIcon width={40} height={40} /> },
				{ name: 'Vue.js', icon: <VueIcon width={40} height={40} /> },
				{ name: 'JavaScript', icon: <JavaScriptIcon width={40} height={40} /> },
				{ name: 'TypeScript', icon: <TypeScriptIcon width={40} height={40} /> },
				{ name: 'TailwindCSS', icon: <TailwindIcon width={40} height={40} /> },
				{
					name: 'Tanstack Query',
					icon:
						theme === 'light' ? (
							<TanstackDarkIcon width={40} height={40} />
						) : (
							<TanstackLightIcon width={40} height={40} />
						),
				},
				{ name: 'Framer Motion', icon: <FramerIcon width={40} height={40} /> },
				{ name: 'Storybook', icon: <StorybookIcon width={40} height={40} /> },
				{
					name: 'MapLibre',
					icon: <MaplibreIcon width={40} height={40} className="scale-[2.5]" />,
				},
				{ name: 'Konva', icon: <KonvaIcon width={40} height={40} /> },
				{ name: 'Livekit', icon: <LivekitIcon width={40} height={40} /> },
				{ name: 'Shopify', icon: <ShopifyIcon width={40} height={40} /> },
				{ name: 'Pagefly', icon: <PageflyIcon width={40} height={40} /> },
				{ name: 'Liquid', icon: <LiquidIcon width={40} height={40} /> },
			],
		},
		{
			name: 'Backend',
			label: '— Server & Data',
			skills: [
				{ name: 'Node.js', icon: <NodeIcon width={40} height={40} /> },
				{ name: 'Express.js', icon: <ExpressIcon width={40} height={40} /> },
				{ name: 'MongoDB', icon: <MongoIcon width={40} height={40} /> },
				{ name: 'SQL', icon: <SQLIcon width={40} height={40} /> },
				{ name: 'Firebase', icon: <FirebaseIcon width={40} height={40} /> },
				{
					name: 'CMS Payload',
					icon: <CMSPayloadIcon width={40} height={40} />,
				},
				{ name: 'GraphQL', icon: <GraphQLIcon width={40} height={40} /> },
			],
		},
		{
			name: 'DevOps & Tools',
			label: '— Infrastructure',
			skills: [
				{ name: 'Git', icon: <GitIcon width={40} height={40} /> },
				{ name: 'Docker', icon: <DockerIcon width={40} height={40} /> },
				{ name: 'CI/CD', icon: <CICDIcon width={40} height={40} /> },
				{ name: 'AWS', icon: <AWSIcon width={40} height={40} /> },
				{ name: 'Vercel', icon: <VercelIcon width={40} height={40} /> },
			],
		},
	]

	const skillVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
	}

	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})
	const [skillsRef, skillsInView] = useInView({
		triggerOnce: true,
		threshold: 0.05,
	})

	return (
		<div className="min-h-screen bg-primary">
			{/* ── Hero ── */}
			<section
				ref={headerRef}
				className="py-24 bg-primary relative overflow-hidden"
			>
				<div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
				<div
					className="absolute -top-24 -right-24 w-96 h-96 rounded-full filter blur-3xl opacity-10"
					style={{ background: 'var(--secondary)' }}
				/>
				<div
					className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full filter blur-3xl opacity-10"
					style={{ background: 'var(--primary)' }}
				/>
				<div className="container mx-auto px-4 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={
							headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-3xl"
					>
						<p
							className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
							style={{ color: 'var(--secondary)' }}
						>
							— Stack &amp; Tools
						</p>
						<h1 className="text-5xl md:text-7xl font-black leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							Tech Knowledge
						</h1>
						<p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
							The tools I reach for every day — from pixel-perfect UI to
							production infrastructure.
						</p>
					</motion.div>
				</div>
			</section>

			{/* ── Skills ── */}
			<section ref={skillsRef} className="py-20 lg:py-28 bg-secondary">
				<div className="container mx-auto px-4 lg:px-8">
					<div className="max-w-6xl mx-auto space-y-20">
						{categories.map((category, categoryIndex) => (
							<div key={categoryIndex}>
								{/* Category heading */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={
										skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
									className="mb-10"
								>
									<p
										className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
										style={{ color: 'var(--secondary)' }}
									>
										{category.label}
									</p>
									<h2 className="text-3xl lg:text-4xl font-black">
										<span className="font-light text-muted">
											{category.name.split(' ')[0]}{' '}
										</span>
										<span style={{ color: 'var(--secondary)' }}>
											{category.name.split(' ').slice(1).join(' ') || ''}
										</span>
									</h2>
								</motion.div>

								{/* Skills grid */}
								<motion.div
									className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4"
									initial="hidden"
									animate={skillsInView ? 'visible' : 'hidden'}
									transition={{
										staggerChildren: 0.06,
										delayChildren: categoryIndex * 0.12,
									}}
								>
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											variants={skillVariants}
											className="glass rounded-xl border border-primary hover:border-[var(--secondary)] transition-colors p-4 flex flex-col items-center gap-3 group"
											whileHover={{ y: -4, transition: { duration: 0.2 } }}
										>
											<div className="w-10 h-10 flex items-center justify-center">
												{skill.icon}
											</div>
											<span className="text-xs font-semibold text-center leading-tight text-muted group-hover:text-primary transition-colors">
												{skill.name}
											</span>
										</motion.div>
									))}
								</motion.div>
							</div>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
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
				</div>
			</section>
		</div>
	)
}

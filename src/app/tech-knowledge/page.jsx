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
	TanstackIcon,
} from '@/components/ui/TechIcons'

export default function TechKnowledgePage() {
	const categories = [
		{
			name: 'Frontend',
			skills: [
				{
					name: 'React',
					icon: <ReactIcon width={64} height={64} />,
				},
				{
					name: 'Next.js',
					icon: <NextIcon width={64} height={64} />,
				},
				{
					name: 'Vue.js',
					icon: <VueIcon width={64} height={64} />,
				},
				{
					name: 'JavaScript',
					icon: <JavaScriptIcon width={64} height={64} />,
				},
				{
					name: 'TypeScript',
					icon: <TypeScriptIcon width={64} height={64} />,
				},
				{
					name: 'TailwindCSS',
					icon: <TailwindIcon width={64} height={64} />,
				},
				{
					name: 'Tanstack Query',
					icon: <TanstackIcon width={64} height={64} />,
				},
				{
					name: 'Framer Motion',
					icon: <FramerIcon width={64} height={64} />,
				},
				{
					name: 'Storybook',
					icon: <StorybookIcon width={64} height={64} />,
				},
				{
					name: 'MapLibre',
					icon: <MaplibreIcon width={64} height={64} className="scale-[2.5]" />,
				},
				{
					name: 'Konva',
					icon: <KonvaIcon width={64} height={64} />,
				},
				{
					name: 'Livekit',
					icon: <LivekitIcon width={64} height={64} />,
				},
				{
					name: 'Shopify',
					icon: <ShopifyIcon width={64} height={64} />,
				},
				{
					name: 'Pagefly (Shopify)',
					icon: <PageflyIcon width={64} height={64} />,
				},
				{
					name: 'Liquid (Shopify)',
					icon: <LiquidIcon width={64} height={64} />,
				},
			],
		},
		{
			name: 'Backend',
			skills: [
				{
					name: 'Node.js',
					icon: <NodeIcon width={64} height={64} />,
				},
				{
					name: 'Express.js',
					icon: <ExpressIcon width={64} height={64} />,
				},
				{
					name: 'MongoDB',
					icon: <MongoIcon width={64} height={64} />,
				},
				{
					name: 'SQL',
					icon: <SQLIcon width={64} height={64} />,
				},
				{
					name: 'Firebase',
					icon: <FirebaseIcon width={64} height={64} />,
				},
				{
					name: 'CMS Payload',
					icon: <CMSPayloadIcon width={64} height={64} />,
				},
				{
					name: 'GraphQL',
					icon: <GraphQLIcon width={64} height={64} />,
				},
			],
		},
		{
			name: 'DevOps & Tools',
			skills: [
				{
					name: 'Git',
					icon: <GitIcon width={64} height={64} />,
				},
				{
					name: 'Docker',
					icon: <DockerIcon width={64} height={64} />,
				},
				{
					name: 'CI/CD',
					icon: <CICDIcon width={64} height={64} />,
				},
				{
					name: 'AWS',
					icon: <AWSIcon width={64} height={64} />,
				},
				{
					name: 'Vercel',
					icon: <VercelIcon width={64} height={64} />,
				},
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
							Tech Knowledge
						</h1>
						<p className="text-xl text-secondary mb-8">
							An overview of my technical skills and expertise in various
							technologies.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Skills Section */}
			<section ref={skillsRef} className="py-20 bg-secondary">
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
									className="text-2xl font-bold"
									style={{ color: 'var(--secondary)' }}
									variants={skillVariants}
								>
									{category.name}
								</motion.h2>

								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											className="bg-primary p-6 rounded-lg border border-primary flex flex-col items-center text-center hover:border-[var(--secondary)] transition-colors"
											variants={skillVariants}
											whileHover={{ y: -5, transition: { duration: 0.2 } }}
										>
											<div className="mb-3">{skill.icon}</div>
											<h3 className="text-lg font-semibold">{skill.name}</h3>
										</motion.div>
									))}
								</div>
							</div>
						))}
					</motion.div>
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

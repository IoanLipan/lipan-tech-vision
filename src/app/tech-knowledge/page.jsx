'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import {
	ReactTechIcon,
	NextTechIcon,
	VueTechIcon,
	JavaScriptTechIcon,
	TypeScriptTechIcon,
	TailwindTechIcon,
	FramerTechIcon,
	NodeTechIcon,
	ExpressTechIcon,
	MongoTechIcon,
	SQLTechIcon,
	FirebaseTechIcon,
	GraphQLTechIcon,
	GitTechIcon,
	DockerTechIcon,
	CICDTechIcon,
	AWSTechIcon,
	VercelTechIcon,
	StorybookTechIcon,
	ShopifyTechIcon,
	PageflyTechIcon,
	LiquidTechIcon,
	MaplibreTechIcon,
	KonvaTechIcon,
	CMSPayloadTechIcon,
	LivekitTechIcon,
	TanstackTechIcon,
} from '@/components/ui/TechIcons'

export default function TechKnowledgePage() {
	const categories = [
		{
			name: 'Frontend',
			skills: [
				{
					name: 'React',
					icon: <ReactTechIcon />,
				},
				{
					name: 'Next.js',
					icon: <NextTechIcon />,
				},
				{
					name: 'Vue.js',
					icon: <VueTechIcon />,
				},
				{
					name: 'JavaScript',
					icon: <JavaScriptTechIcon />,
				},
				{
					name: 'TypeScript',
					icon: <TypeScriptTechIcon />,
				},
				{
					name: 'TailwindCSS',
					icon: <TailwindTechIcon />,
				},
				{
					name: 'Tanstack Query',
					icon: <TanstackTechIcon />,
				},
				{
					name: 'Framer Motion',
					icon: <FramerTechIcon />,
				},
				{
					name: 'Storybook',
					icon: <StorybookTechIcon />,
				},
				{
					name: 'MapLibre',
					icon: <MaplibreTechIcon />,
				},
				{
					name: 'Konva',
					icon: <KonvaTechIcon />,
				},
				{
					name: 'Livekit',
					icon: <LivekitTechIcon />,
				},
				{
					name: 'Shopify',
					icon: <ShopifyTechIcon />,
				},
				{
					name: 'Pagefly (Shopify)',
					icon: <PageflyTechIcon />,
				},
				{
					name: 'Liquid (Shopify)',
					icon: <LiquidTechIcon />,
				},
			],
		},
		{
			name: 'Backend',
			skills: [
				{
					name: 'Node.js',
					icon: <NodeTechIcon />,
				},
				{
					name: 'Express.js',
					icon: <ExpressTechIcon />,
				},
				{
					name: 'MongoDB',
					icon: <MongoTechIcon />,
				},
				{
					name: 'SQL',
					icon: <SQLTechIcon />,
				},
				{
					name: 'Firebase',
					icon: <FirebaseTechIcon />,
				},
				{
					name: 'CMS Payload',
					icon: <CMSPayloadTechIcon />,
				},
				{
					name: 'GraphQL',
					icon: <GraphQLTechIcon />,
				},
			],
		},
		{
			name: 'DevOps & Tools',
			skills: [
				{
					name: 'Git',
					icon: <GitTechIcon />,
				},
				{
					name: 'Docker',
					icon: <DockerTechIcon />,
				},
				{
					name: 'CI/CD',
					icon: <CICDTechIcon />,
				},
				{
					name: 'AWS',
					icon: <AWSTechIcon />,
				},
				{
					name: 'Vercel',
					icon: <VercelTechIcon />,
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

								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center hover:border-[var(--secondary)] transition-colors"
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

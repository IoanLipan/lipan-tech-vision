'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeaturedProjects = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	// Sample projects - replace with your real projects
	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description:
				'A fully responsive e-commerce platform built with Next.js and integrated with Stripe payments.',
			technologies: ['Next.js', 'Stripe', 'MongoDB'],
			image: '/images/project-placeholder.jpg',
		},
		{
			id: 2,
			title: 'AI Content Assistant',
			description:
				'AI-powered content generator that helps create marketing copy based on user prompts.',
			technologies: ['React', 'OpenAI API', 'Node.js'],
			image: '/images/project-placeholder.jpg',
		},
		{
			id: 3,
			title: 'Fitness Tracking App',
			description:
				'Mobile application for tracking workouts and nutrition with personalized recommendations.',
			technologies: ['React Native', 'Firebase', 'Redux'],
			image: '/images/project-placeholder.jpg',
		},
	]

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
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	}

	return (
		<section ref={ref} className="py-20 bg-gray-900">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-12 relative inline-block">
						Featured Projects
						<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#D617B7] to-[#00D4E0]"></span>
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#00D4E0] transition-all group"
							variants={itemVariants}
							whileHover={{ y: -10 }}
						>
							<div className="aspect-video bg-gray-700 relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[#D617B7]/20 to-[#00D4E0]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-300 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-2 py-1 bg-gray-700 rounded-md text-xs"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Link href="/projects">
						<div className="inline-flex items-center text-[#00D4E0] hover:text-[#7FEAEF]">
							View all projects
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</Link>
				</motion.div>
			</div>
		</section>
	)
}

export default FeaturedProjects

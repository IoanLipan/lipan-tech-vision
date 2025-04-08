'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getFeaturedProjects } from '@/data/projects'

const FeaturedProjects = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const projects = getFeaturedProjects()

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
		<section ref={ref} className="py-20 bg-primary">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-12 relative inline-block">
						Featured Projects
						<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient"></span>
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
							className="bg-secondary rounded-lg overflow-hidden border border-primary hover:border-[var(--secondary)] transition-all group"
							variants={itemVariants}
							whileHover={{ y: -10 }}
						>
							<div className="aspect-video relative overflow-hidden bg-tertiary">
								<Image
									src={project.image}
									alt={project.title}
									width={400}
									height={225}
									className="object-cover w-full h-full transition-transform group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-semibold">{project.title}</h3>
									{project.workRelated && (
										<span className="px-2 py-1 text-xs bg-[var(--primary)]/20 border border-[var(--primary)] rounded-full text-[var(--primary)]">
											Work Related
										</span>
									)}
								</div>
								<p className="text-muted mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-2 py-1 bg-tertiary rounded-md text-xs"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex justify-end">
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[var(--secondary)] hover:text-[var(--secondary-light)] inline-flex items-center"
									>
										View project
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 ml-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
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
						<div className="inline-flex items-center text-[var(--secondary)] hover:text-[var(--secondary-light)] group">
							View all projects
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
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

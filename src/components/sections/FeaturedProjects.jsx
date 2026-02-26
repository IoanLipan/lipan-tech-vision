'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getFeaturedProjects } from '@/data/projects'

const FeaturedProjects = () => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
	const projects = getFeaturedProjects()

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
	}

	const [featured, ...rest] = projects

	return (
		<section ref={ref} className="py-20 lg:py-28 bg-primary">
			<div className="container mx-auto px-4 lg:px-8">
				{/* Section heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					className="flex items-end justify-between mb-12"
				>
					<h2 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight">
						<span className="font-light text-muted">Featured </span>
						<span style={{ color: 'var(--secondary)' }}>Projects</span>
					</h2>
					<Link href="/projects">
						<div className="hidden md:inline-flex items-center text-[var(--secondary)] hover:text-[var(--secondary-light)] group text-sm font-medium">
							View all
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

				{/* Grid: featured card (2 cols) + rest (1 col each) */}
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-3 gap-6"
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
					transition={{ staggerChildren: 0.15 }}
				>
					{/* ── Featured card — spans 2 columns, horizontal layout ── */}
					{featured && (
						<motion.div
							key={featured.id}
							className="lg:col-span-2 glass rounded-xl overflow-hidden border border-primary hover:border-[var(--secondary)] transition-colors group"
							style={{ willChange: "transform" }}
							variants={itemVariants}
							whileHover={{ y: -4 }}
						>
							<div className="flex flex-col md:flex-row h-full">
								{/* Image — left half on md+ */}
								<div className="md:w-1/2 relative overflow-hidden bg-tertiary min-h-[220px]">
									<Image
										src={featured.image}
										alt={featured.title}
										fill
										className="object-cover transition-transform group-hover:scale-105"
										sizes="(max-width: 768px) 100vw, 50vw"
										priority
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg-secondary)]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>

								{/* Content — right half */}
								<div className="md:w-1/2 p-7 lg:p-9 flex flex-col justify-between">
									<div>
										<div className="flex items-center gap-2 mb-4">
											{featured.workRelated && (
												<span className="px-2.5 py-1 text-xs bg-[var(--primary)]/20 border border-[var(--primary)] rounded-full text-[var(--primary)]">
													Work Related
												</span>
											)}
											{featured.freelance && (
												<span className="px-2.5 py-1 text-xs bg-[var(--secondary)]/20 border border-[var(--secondary)] rounded-full text-[var(--secondary)]">
													Freelance
												</span>
											)}
										</div>
										<h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
											{featured.title}
										</h3>
										<p className="text-muted mb-5 leading-relaxed">
											{featured.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{featured.technologies.slice(0, 5).map((tech, i) => (
												<span
													key={i}
													className="px-2.5 py-1 bg-tertiary rounded-md text-xs font-medium"
												>
													{tech}
												</span>
											))}
											{featured.technologies.length > 5 && (
												<span className="px-2.5 py-1 text-xs text-muted">
													+{featured.technologies.length - 5} more
												</span>
											)}
										</div>
									</div>
									<div className="mt-6">
										<a
											href={featured.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border-2 border-[var(--secondary)] bg-transparent text-[var(--secondary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--secondary)] hover:text-[var(--bg-primary)] transition-all duration-200"
										>
											View project
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
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
							</div>
						</motion.div>
					)}

					{/* ── Regular cards ── */}
					{rest.map((project) => (
						<motion.div
							key={project.id}
							className="glass rounded-xl overflow-hidden border border-primary hover:border-[var(--secondary)] transition-colors group"
							style={{ willChange: "transform" }}
							variants={itemVariants}
							whileHover={{ y: -4 }}
						>
							<div className="aspect-video relative overflow-hidden bg-tertiary">
								<Image
									src={project.image}
									alt={project.title}
									width={400}
									height={225}
									className="object-cover w-full h-full transition-transform group-hover:scale-105"
									sizes="(max-width: 1024px) 100vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-bold">{project.title}</h3>
									{project.workRelated && (
										<span className="px-2 py-1 text-xs bg-[var(--primary)]/20 border border-[var(--primary)] rounded-full text-[var(--primary)] shrink-0 ml-2">
											Work
										</span>
									)}
									{project.freelance && (
										<span className="px-2 py-1 text-xs bg-[var(--secondary)]/20 border border-[var(--secondary)] rounded-full text-[var(--secondary)] shrink-0 ml-2">
											Freelance
										</span>
									)}
								</div>
								<p className="text-muted mb-4 text-sm leading-relaxed">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5 mb-5">
									{project.technologies.slice(0, 4).map((tech, i) => (
										<span
											key={i}
											className="px-2 py-0.5 bg-tertiary rounded text-xs"
										>
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[var(--secondary)] hover:text-[var(--secondary-light)] inline-flex items-center text-sm font-medium"
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
						</motion.div>
					))}
				</motion.div>

				{/* Mobile "view all" link */}
				<motion.div
					className="mt-10 text-center md:hidden"
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Link href="/projects">
						<div className="inline-flex items-center text-[var(--secondary)] hover:text-[var(--secondary-light)] group font-medium">
							View all projects
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
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

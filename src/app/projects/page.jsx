'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { projects, getProjectCategories } from '@/data/projects'
import ProjectModal from '@/components/ui/ProjectModal'

export default function ProjectsPage() {
	// Get categories from our data file
	const categories = getProjectCategories()

	const [activeCategory, setActiveCategory] = useState('All')
	const [filteredProjects, setFilteredProjects] = useState(projects)

	// State for modal
	const [selectedProject, setSelectedProject] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	// Open modal with selected project
	const openProjectModal = (project) => {
		setSelectedProject(project)
		setIsModalOpen(true)
	}

	// Close modal
	const closeProjectModal = () => {
		setIsModalOpen(false)
		// Reset selected project after animation completes
		setTimeout(() => {
			setSelectedProject(null)
		}, 300)
	}

	// Filter projects when category changes
	useEffect(() => {
		if (activeCategory === 'All') {
			setFilteredProjects(projects)
		} else {
			setFilteredProjects(
				projects.filter((project) => project.category === activeCategory)
			)
		}
	}, [activeCategory])

	// Preload images on component mount
	useEffect(() => {
		// Preload the first 6 project images for faster initial loading
		const imagesToPreload = projects.slice(0, 6)
		imagesToPreload.forEach((project) => {
			const link = document.createElement('link')
			link.rel = 'preload'
			link.as = 'image'
			link.href = project.image
			document.head.appendChild(link)
		})

		// Cleanup function to remove preload links
		return () => {
			const preloadLinks = document.querySelectorAll(
				'link[rel="preload"][as="image"]'
			)
			preloadLinks.forEach((link) => {
				if (imagesToPreload.some((project) => project.image === link.href)) {
					document.head.removeChild(link)
				}
			})
		}
	}, [])

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

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	// Intersection observer for each section
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [filtersRef, filtersInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [projectsRef, projectsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<div className="min-h-screen bg-primary">
			{/* Modal */}
			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={closeProjectModal}
			/>

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
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
							My Projects
						</h1>
						<p className="text-xl text-secondary mb-8">
							Explore my portfolio of innovative solutions across various
							technologies and domains.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Filters */}
			<section ref={filtersRef} className="py-8 bg-secondary">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="flex flex-wrap justify-center gap-4"
					>
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-5 py-1.5 rounded-full border font-bold uppercase tracking-widest text-xs transition-all ${
									activeCategory === category
										? 'border-[var(--secondary)] bg-[var(--secondary)]/10 text-[var(--secondary)]'
										: 'border-primary text-muted hover:border-[var(--secondary)] hover:text-[var(--secondary)]'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{category}
							</motion.button>
						))}
					</motion.div>
				</div>
			</section>

			{/* Projects Grid */}
			<section ref={projectsRef} className="py-20 bg-primary">
				<div className="container mx-auto px-4">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate={projectsInView ? 'visible' : 'hidden'}
					>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className="bg-secondary rounded-lg overflow-hidden border border-primary hover:border-[var(--secondary)] transition-all group cursor-pointer"
								variants={itemVariants}
								onClick={() => openProjectModal(project)}
								layoutId={`project-container-${project.id}`}
							>
								<div className="aspect-video relative overflow-hidden bg-tertiary">
									<Image
										src={project.image}
										alt={project.title}
										width={400}
										height={225}
										className="object-cover w-full h-full transition-transform group-hover:scale-105"
										// Prioritize loading for first 6 images
										priority={index < 6}
										// Add responsive sizes for better performance
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
										// Enable eager loading for above-the-fold images
										loading={index < 6 ? 'eager' : 'lazy'}
										// Add placeholder for better UX
										placeholder="blur"
										blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
										{project.freelance && (
											<span className="px-2 py-1 text-xs bg-[var(--secondary)]/20 border border-[var(--secondary)] rounded-full text-[var(--secondary)]">
												Freelance
											</span>
										)}
									</div>
									<p className="text-muted mb-4 line-clamp-2">
										{project.description}
									</p>
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
										<button
											onClick={(e) => {
												e.stopPropagation()
												openProjectModal(project)
											}}
											className="text-[var(--secondary)] hover:text-[var(--secondary-light)] inline-flex items-center"
										>
											View details
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
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Empty state */}
					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="text-center py-20"
						>
							<h3 className="text-2xl font-semibold mb-4">No projects found</h3>
							<p className="text-muted mb-8">
								No projects match the selected category.
							</p>
							<button
								onClick={() => setActiveCategory('All')}
								className="px-6 py-2 rounded-md bg-secondary hover:bg-tertiary transition-colors"
							>
								Show all projects
							</button>
						</motion.div>
					)}
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
							<div className="inline-flex items-center text-[var(--secondary)] hover:text-[var(--secondary-light)] transition-colors">
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

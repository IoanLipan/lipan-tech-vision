'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectModal = ({ project, isOpen, onClose }) => {
	const modalRef = useRef(null)

	// Close modal when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target) && isOpen) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	// Close modal when pressing Escape key
	useEffect(() => {
		const handleEscKey = (e) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscKey)
		return () => {
			document.removeEventListener('keydown', handleEscKey)
		}
	}, [isOpen, onClose])

	// Lock body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<AnimatePresence>
			{isOpen && project && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						ref={modalRef}
						className="relative w-full max-w-4xl bg-secondary rounded-lg overflow-hidden"
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{
							type: 'spring',
							damping: 30,
							stiffness: 300,
						}}
					>
						{/* Close button */}
						<button
							className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
							onClick={onClose}
							aria-label="Close modal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Project image */}
						<div className="relative w-full h-72 md:h-96">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
								priority
							/>
						</div>

						{/* Project content */}
						<div className="p-6 md:p-8">
							<div className="flex flex-wrap items-start justify-between gap-4 mb-4">
								<h2 className="text-2xl md:text-3xl font-bold">
									{project.title}
								</h2>
								{project.workRelated && (
									<span className="px-3 py-1 text-sm bg-[var(--primary)]/20 border border-[var(--primary)] rounded-full text-[var(--primary)]">
										Work Related
									</span>
								)}
							</div>

							<p className="text-muted mb-6">{project.descriptionExpanded}</p>

							<div className="flex flex-wrap gap-2 mb-8">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-tertiary rounded-md text-sm"
									>
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-center">
								{project.url && project.url !== '' && project.url !== '#' ? (
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient text-white font-medium hover:opacity-90 transition-opacity"
									>
										Visit Project
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 ml-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								) : (
									<div className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-tertiary text-secondary font-medium">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
												clipRule="evenodd"
											/>
										</svg>
										Project is Private
									</div>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ProjectModal

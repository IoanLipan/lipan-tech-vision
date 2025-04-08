'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
	// Variants for staggered animations
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1.0],
			},
		},
	}

	// Background blob animation
	const blobVariants = {
		initial: {
			scale: 0.8,
			opacity: 0.2,
		},
		animate: {
			scale: 1,
			opacity: 0.3,
			transition: {
				duration: 8,
				repeat: Infinity,
				repeatType: 'reverse',
			},
		},
	}

	return (
		<section className="relative py-20 min-h-[80vh] flex items-center overflow-hidden">
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-3xl"
					variants={containerVariants}
					initial="hidden"
					animate="show"
				>
					<motion.h1
						className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"
						variants={itemVariants}
					>
						Lipan Tech Vision
					</motion.h1>

					<motion.p
						className="text-xl md:text-2xl text-gray-300 mb-8"
						variants={itemVariants}
					>
						Engineering the future through innovation and problem-solving
					</motion.p>

					<motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
						<Link href="/projects">
							<motion.div
								className="px-8 py-3 rounded-md bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white font-medium hover:opacity-90 transition-opacity"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								View Projects
							</motion.div>
						</Link>
						<Link href="/contact">
							<motion.div
								className="px-8 py-3 rounded-md border border-[var(--secondary)] text-white font-medium hover:bg-gray-800 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								Get In Touch
							</motion.div>
						</Link>
					</motion.div>
				</motion.div>
			</div>

			{/* Abstract shapes in background */}
			<div className="absolute top-0 right-0 w-full h-full overflow-hidden">
				<motion.div
					className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--secondary)] filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					custom={1}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[var(--primary)] filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					custom={2}
					style={{ animationDelay: '2s' }}
				/>
			</div>
		</section>
	)
}

export default Hero

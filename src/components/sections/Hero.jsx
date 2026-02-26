'use client'

import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Hero = () => {
	// Mouse position for parallax blobs (normalized 0–1)
	const mouseX = useMotionValue(0.5)
	const mouseY = useMotionValue(0.5)

	// Each blob moves at a different speed / direction
	const blob1X = useTransform(mouseX, [0, 1], [-18, 18])
	const blob1Y = useTransform(mouseY, [0, 1], [-18, 18])
	const blob2X = useTransform(mouseX, [0, 1], [12, -12])
	const blob2Y = useTransform(mouseY, [0, 1], [12, -12])
	const blob3X = useTransform(mouseX, [0, 1], [-8, 8])
	const blob3Y = useTransform(mouseY, [0, 1], [8, -8])

	useEffect(() => {
		const handleMouseMove = (e) => {
			mouseX.set(e.clientX / window.innerWidth)
			mouseY.set(e.clientY / window.innerHeight)
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [mouseX, mouseY])

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
		},
	}

	const blobVariants = {
		initial: { scale: 0.8, opacity: 0.15 },
		animate: {
			scale: 1,
			opacity: 0.25,
			transition: { duration: 8, repeat: Infinity, repeatType: 'reverse' },
		},
	}

	return (
		<section className="relative py-20 min-h-[90vh] flex items-center overflow-hidden">
			{/* Subtle dot-grid background */}
			<div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-3xl"
					variants={containerVariants}
					initial="hidden"
					animate="show"
				>
					{/* Available-for-work badge */}
					<motion.div className="mb-6" variants={itemVariants}>
						<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-secondary)] text-sm font-medium text-secondary">
							<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow inline-block" />
							Available for work
						</span>
					</motion.div>

					<motion.h1
						className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"
						variants={itemVariants}
					>
						Lipan Tech Vision
					</motion.h1>

					<motion.p
						className="text-lg md:text-xl text-secondary mb-4"
						variants={itemVariants}
					>
						Engineering the future through innovation and problem-solving
					</motion.p>

					<motion.p
						className="text-xl md:text-2xl text-secondary mb-10"
						variants={itemVariants}
					>
						I have{' '}
						<strong className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							4+ years
						</strong>{' '}
						of working experience with international teams on all kinds of projects.
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
								className="px-8 py-3 rounded-md border border-[var(--secondary)] text-primary font-medium hover:bg-[var(--bg-secondary)] transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								Get In Touch
							</motion.div>
						</Link>
					</motion.div>
				</motion.div>
			</div>

			{/* Parallax blobs in background */}
			<div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[var(--secondary)] filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					style={{ x: blob1X, y: blob1Y }}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[var(--primary)] filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					style={{ x: blob2X, y: blob2Y, transitionDelay: '2s' }}
				/>
				{/* Third blob — velvet red accent */}
				<motion.div
					className="absolute top-1/2 right-[10%] w-56 h-56 rounded-full filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					style={{
						x: blob3X,
						y: blob3Y,
						backgroundColor: '#8B1A2C',
						transitionDelay: '4s',
					}}
				/>
			</div>
		</section>
	)
}

export default Hero

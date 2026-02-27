'use client'

import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Hero = () => {
	const mouseX = useMotionValue(0.5)
	const mouseY = useMotionValue(0.5)

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
		show: { opacity: 1, transition: { staggerChildren: 0.15 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, x: 40 },
		show: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
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
		<section className="relative py-20 lg:py-28 min-h-[90vh] flex items-center overflow-hidden">
			{/* Dot-grid background */}
			<div className="absolute inset-0 dot-grid-bg opacity-60 pointer-events-none" />

			<div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
				{/* 2-column on xl: text left, terminal card right */}
				<div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-16 items-center">
					{/* ── Left: text content ── */}
					<motion.div
						className="xl:col-span-3"
						variants={containerVariants}
						initial="hidden"
						animate="show"
					>
						{/* Available badge */}
						<motion.div className="mb-6" variants={itemVariants}>
							<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-secondary)] text-sm font-medium text-secondary">
								<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow inline-block" />
								Available for work
							</span>
						</motion.div>

						{/* Main headline — 2-line hierarchy */}
						<motion.h1
							className="font-black mb-6 leading-none"
							style={{
								background: 'linear-gradient(135deg, var(--primary) 25%, var(--secondary) 40%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
							variants={itemVariants}
						>
							<span
								className="block"
								style={{ fontSize: 'clamp(4rem, 8.5vw, 9rem)' }}
							>
								Lipan
							</span>
							<span
								className="block"
								style={{ fontSize: 'clamp(1.6rem, 3.2vw, 3.5rem)', letterSpacing: '0.14em' }}
							>
								TECH VISION
							</span>
						</motion.h1>

						<motion.p
							className="text-lg md:text-xl lg:text-2xl text-secondary mb-4 max-w-xl"
							variants={itemVariants}
						>
							Engineering the future through innovation and problem-solving
						</motion.p>

						<motion.p
							className="text-lg md:text-xl lg:text-2xl text-secondary mb-10 max-w-xl"
							variants={itemVariants}
						>
							<strong style={{ color: 'var(--secondary)', fontSize: '1.7rem' }}>5+ years</strong> of
							experience with international teams.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4"
							variants={itemVariants}
						>
							<Link href="/projects">
								<motion.div
									className="px-8 py-3.5 rounded-sm border-2 border-[var(--secondary)] bg-[var(--secondary)] text-[var(--bg-primary)] font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-[var(--secondary)] transition-all duration-200"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.98 }}
								>
									View Projects
								</motion.div>
							</Link>
							<Link href="/contact">
								<motion.div
									className="px-8 py-3.5 rounded-sm border-2 border-[var(--secondary)] bg-transparent text-[var(--secondary)] font-bold uppercase tracking-widest text-sm hover:bg-[var(--secondary)] hover:text-[var(--bg-primary)] transition-all duration-200"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.98 }}
								>
									Get In Touch
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>

					{/* ── Right: terminal card (xl only) ── */}
					<motion.div
						className="hidden xl:block xl:col-span-2"
						variants={cardVariants}
						initial="hidden"
						animate="show"
					>
						<div
							className="rounded-xl border border-[var(--border-secondary)] overflow-hidden shadow-2xl"
							style={{
								background: 'var(--bg-tertiary)',
								boxShadow:
									'0 0 60px color-mix(in srgb, var(--primary) 15%, transparent)',
							}}
						>
							{/* Window chrome */}
							<div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)]">
								<span className="w-3 h-3 rounded-full bg-red-500/80" />
								<span className="w-3 h-3 rounded-full bg-yellow-400/80" />
								<span className="w-3 h-3 rounded-full bg-green-400/80" />
								<span className="ml-4 text-xs text-muted font-mono">
									about.ts
								</span>
							</div>

							{/* Code body */}
							<div className="p-6 font-mono text-sm leading-7">
								<p className="text-muted">{'// Ioan Lipan'}</p>
								<br />
								<p>
									<span style={{ color: 'var(--secondary)' }}>const </span>
									<span className="text-primary">developer</span>
									<span className="text-primary"> = {'{'}</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">name</span>
									<span className="text-primary">: </span>
									<span style={{ color: 'var(--primary)' }}>"Ioan Lipan"</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">role</span>
									<span className="text-primary">: </span>
									<span style={{ color: 'var(--primary)' }}>
										"Full Stack Dev"
									</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">exp</span>
									<span className="text-primary">: </span>
									<span style={{ color: 'var(--primary)' }}>"5+ years"</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">location</span>
									<span className="text-primary">: </span>
									<span style={{ color: 'var(--primary)' }}>
										"Bucharest, RO"
									</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">available</span>
									<span className="text-primary">: </span>
									<span className="text-green-400">true</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-6">
									<span className="text-muted">stack</span>
									<span className="text-primary">: [</span>
								</p>
								<p className="pl-12">
									<span style={{ color: 'var(--primary)' }}>"React"</span>
									<span className="text-primary">, </span>
									<span style={{ color: 'var(--primary)' }}>"Vue.js"</span>
									<span className="text-primary">, </span>
									<span style={{ color: 'var(--primary)' }}>"Next.js"</span>
									<span className="text-primary">,</span>
								</p>
								<p className="pl-12">
									<span style={{ color: 'var(--primary)' }}>"Node.js"</span>
									<span className="text-primary">, </span>
									<span style={{ color: 'var(--primary)' }}>"TypeScript"</span>
								</p>
								<p className="pl-6">
									<span className="text-primary">]</span>
								</p>
								<p>
									<span className="text-primary">{'}'}</span>
									<span className="inline-block w-2 h-5 bg-[var(--secondary)] opacity-70 ml-1 animate-pulse align-middle" />
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Parallax blobs */}
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
					style={{ x: blob2X, y: blob2Y }}
				/>
				<motion.div
					className="absolute top-1/2 right-[10%] w-56 h-56 rounded-full filter blur-3xl"
					variants={blobVariants}
					initial="initial"
					animate="animate"
					style={{ x: blob3X, y: blob3Y, backgroundColor: '#8B1A2C' }}
				/>
			</div>
		</section>
	)
}

export default Hero

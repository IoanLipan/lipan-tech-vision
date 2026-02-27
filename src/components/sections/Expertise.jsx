'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Expertise = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const expertiseAreas = [
		{
			title: 'Full-Stack',
			description:
				'Frontend, backend, database — I own it all. One developer, zero hand-off gaps, and a working product at the end.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H9.229z" clipRule="evenodd" />
				</svg>
			),
		},
		{
			title: 'Performance',
			description:
				'Fast apps keep users. I cut load times, optimize queries, and build for real traffic — not just demos.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
				</svg>
			),
		},
		{
			title: 'Scalable',
			description:
				'Code that grows with you. Adding features never means rewriting everything. Built right from day one.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
				</svg>
			),
		},
		{
			title: 'Product Thinking',
			description:
				'I understand your goals before touching the keyboard. We build the right thing — not just a thing.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
				</svg>
			),
		},
		{
			title: 'Clean Code',
			description:
				'Readable, documented, testable. Code your next developer can maintain — not decipher.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
				</svg>
			),
		},
		{
			title: 'Reliability',
			description:
				'Deadlines met. Scope managed. No surprises. You always know where your project stands.',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--secondary)' }}>
					<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
			),
		},
	]

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
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<section ref={ref} className="py-20 lg:py-28 bg-secondary">
			<div className="container mx-auto px-4 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					className="mb-14"
				>
					<h2 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight">
						<span className="font-light text-muted">My </span>
						<span style={{ color: 'var(--secondary)' }}>Expertise</span>
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{expertiseAreas.map((expertise, index) => (
						<motion.div
							key={index}
							className="expertise-card glass p-7 lg:p-8 rounded-xl border border-primary hover:border-[var(--secondary)] transform hover:-translate-y-2 transition-all relative overflow-hidden"
							variants={itemVariants}
							whileHover={{ scale: 1.02 }}
							transition={{ type: 'spring', stiffness: 30 }}
							onMouseMove={(e) => {
								const rect = e.currentTarget.getBoundingClientRect()
								const x = e.clientX - rect.left
								const y = e.clientY - rect.top
								e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
								e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
							}}
						>
							{/* Spotlight glow */}
							<div className="card-spotlight" />

							{/* Large decorative index number */}
							<span
								className="absolute top-4 right-5 text-7xl font-black leading-none select-none pointer-events-none"
								style={{ color: 'var(--border-secondary)', opacity: 0.6 }}
							>
								{String(index + 1).padStart(2, '0')}
							</span>

							<div className="mb-5">{expertise.icon}</div>
							<h3 className="text-xl lg:text-2xl font-bold mb-2">
								{expertise.title}
							</h3>
							<p className="text-secondary text-sm lg:text-base leading-relaxed">
								{expertise.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Expertise

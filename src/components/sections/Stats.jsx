'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
	{ value: 4, suffix: '+', label: 'Years Experience' },
	{ value: 18, suffix: '+', label: 'Projects Built' },
	{ value: 24, suffix: '+', label: 'Technologies' },
	{ value: 3, suffix: '', label: 'Continents Worked' },
]

function AnimatedCounter({ target, suffix, isVisible }) {
	const [count, setCount] = useState(0)
	const hasRun = useRef(false)

	useEffect(() => {
		if (!isVisible || hasRun.current) return
		hasRun.current = true

		const duration = 1400
		const steps = 40
		const increment = target / steps
		const stepTime = duration / steps
		let current = 0

		const timer = setInterval(() => {
			current += increment
			if (current >= target) {
				setCount(target)
				clearInterval(timer)
			} else {
				setCount(Math.floor(current))
			}
		}, stepTime)

		return () => clearInterval(timer)
	}, [isVisible, target])

	return (
		<span>
			{count}
			{suffix}
		</span>
	)
}

export default function Stats() {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

	return (
		<section ref={ref} className="py-16 bg-secondary border-y border-primary">
			<div className="container mx-auto px-4">
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-8"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className="text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
								<AnimatedCounter
									target={stat.value}
									suffix={stat.suffix}
									isVisible={inView}
								/>
							</div>
							<p className="text-muted text-sm uppercase tracking-widest font-medium">
								{stat.label}
							</p>
							{/* Separator line except last */}
							{index < stats.length - 1 && (
								<div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[var(--border-primary)]" />
							)}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

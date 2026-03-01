'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
	{ value: 5, suffix: '+', label: 'Years Experience' },
	{ value: 10, suffix: '+', label: 'Projects Built' },
	{ value: 24, suffix: '+', label: 'Technologies' },
	{ value: 10, suffix: '+', label: 'Happy Clients' },
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
		<section ref={ref} className="py-16 lg:py-24 bg-secondary border-y border-primary">
			<div className="container mx-auto px-4 lg:px-8">
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-0 divide-x-0 md:divide-x md:divide-[var(--border-primary)]"
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className="text-center px-4 lg:px-8"
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: index * 0.12 }}
						>
							{/* Big number */}
							<div
								className="font-black text-gradient leading-none mb-3"
								style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
							>
								<AnimatedCounter
									target={stat.value}
									suffix={stat.suffix}
									isVisible={inView}
								/>
							</div>
							<p className="text-muted text-xs lg:text-sm uppercase tracking-[0.2em] font-semibold">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

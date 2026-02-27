'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TOTAL = 10
const RADIUS = 44
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ThankYouPage() {
	const router = useRouter()
	const [count, setCount] = useState(TOTAL)

	useEffect(() => {
		if (count <= 0) {
			router.push('/')
			return
		}
		const t = setTimeout(() => setCount((c) => c - 1), 1000)
		return () => clearTimeout(t)
	}, [count, router])

	const progress = count / TOTAL
	const dashOffset = CIRCUMFERENCE * (1 - progress)

	return (
		<div className="min-h-screen bg-primary flex items-center justify-center px-4">
			<motion.div
				className="text-center max-w-lg w-full"
				initial={{ opacity: 0, y: 32 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{/* Checkmark circle */}
				<motion.div
					className="mx-auto mb-10 flex items-center justify-center w-24 h-24 rounded-full"
					style={{ background: 'color-mix(in srgb, var(--secondary) 15%, transparent)', border: '2px solid var(--secondary)' }}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
				>
					<motion.svg
						className="w-12 h-12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						style={{ color: 'var(--secondary)' }}
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<motion.path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2.5}
							d="M5 13l4 4L19 7"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						/>
					</motion.svg>
				</motion.div>

				{/* Headline */}
				<motion.h1
					className="text-4xl md:text-5xl font-black mb-4 leading-tight"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					style={{
						background: 'linear-gradient(135deg, var(--primary) 20%, var(--secondary) 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					Message Sent!
				</motion.h1>

				<motion.p
					className="text-secondary text-lg mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.45 }}
				>
					Thanks for reaching out — I'll get back to you as soon as possible.
				</motion.p>

				{/* Countdown ring */}
				<motion.div
					className="mx-auto mb-8 relative flex items-center justify-center"
					style={{ width: 120, height: 120 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.6 }}
				>
					{/* Track */}
					<svg width="120" height="120" className="absolute inset-0 -rotate-90">
						<circle
							cx="60"
							cy="60"
							r={RADIUS}
							fill="none"
							stroke="currentColor"
							strokeWidth="4"
							className="text-primary"
							style={{ color: 'color-mix(in srgb, var(--secondary) 15%, transparent)' }}
						/>
						{/* Progress arc */}
						<motion.circle
							cx="60"
							cy="60"
							r={RADIUS}
							fill="none"
							strokeWidth="4"
							stroke="var(--secondary)"
							strokeLinecap="round"
							strokeDasharray={CIRCUMFERENCE}
							animate={{ strokeDashoffset: dashOffset }}
							transition={{ duration: 0.9, ease: 'linear' }}
						/>
					</svg>
					{/* Number */}
					<div className="relative flex flex-col items-center">
						<span
							className="text-3xl font-black tabular-nums leading-none"
							style={{ color: 'var(--secondary)' }}
						>
							{count}
						</span>
						<span className="text-xs font-bold uppercase tracking-widest text-muted mt-1">
							sec
						</span>
					</div>
				</motion.div>

				<motion.p
					className="text-sm text-muted mb-10 uppercase tracking-widest font-bold"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.7 }}
				>
					Redirecting to home automatically&hellip;
				</motion.p>

				{/* Back to Home button */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.8 }}
				>
					<Link href="/">
						<motion.div
							className="inline-flex items-center gap-2 px-8 py-3 rounded-sm border-2 font-bold uppercase tracking-widest text-sm transition-all duration-200"
							style={{
								borderColor: 'var(--secondary)',
								background: 'var(--secondary)',
								color: 'var(--bg-primary)',
							}}
							whileHover={{
								background: 'transparent',
								color: 'var(--secondary)',
							}}
							whileTap={{ scale: 0.97 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
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
						</motion.div>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	)
}

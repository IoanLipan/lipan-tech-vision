'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Expertise = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	// Expertise areas with SVG icons
	const expertiseAreas = [
		{
			title: 'Web Development',
			description:
				'Creating responsive, modern web applications with the latest technologies.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#webDevGradient)"
				>
					<defs>
						<linearGradient
							id="webDevGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H9.229z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			title: 'Performance',
			description:
				'Dedicated to excellence and pushing technical boundaries.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#performanceGradient)"
				>
					<defs>
						<linearGradient
							id="performanceGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			title: 'Engineering',
			description:
				'Building solutions with a focus on efficiency and scalability.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#engineerGradient)"
				>
					<defs>
						<linearGradient
							id="engineerGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path
						fillRule="evenodd"
						d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			title: 'Problem Solving',
			description:
				'Approaching challenges with analytical thinking and creative solutions.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#problemSolverGradient)"
				>
					<defs>
						<linearGradient
							id="problemSolverGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
				</svg>
			),
		},
		{
			title: 'Travel Enthusiast',
			description: 'Exploring new cultures and gaining global perspectives.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#travelGradient)"
				>
					<defs>
						<linearGradient
							id="travelGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg>
			),
		},
		{
			title: 'Technical Knowledge',
			description:
				'Deep understanding of various technologies and programming languages.',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					viewBox="0 0 20 20"
					fill="url(#techKnowledgeGradient)"
				>
					<defs>
						<linearGradient
							id="techKnowledgeGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="var(--secondary)" />
							<stop offset="100%" stopColor="var(--primary)" />
						</linearGradient>
					</defs>
					<path
						fillRule="evenodd"
						d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
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
		<section ref={ref} className="py-20 bg-gray-800">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl font-bold mb-12 relative inline-block">
						My Expertise
						<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					{expertiseAreas.map((expertise, index) => (
						<motion.div
							key={index}
							className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[var(--secondary)] transform hover:-translate-y-2 transition-all"
							variants={itemVariants}
							whileHover={{ scale: 1.03 }}
							transition={{ type: 'spring', stiffness: 30 }}
						>
							<div className="mb-4">{expertise.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
							<p className="text-gray-300">{expertise.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Expertise

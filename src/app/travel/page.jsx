'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function TravelPage() {
	// Sample destinations data
	const destinations = [
		{
			id: 1,
			name: 'Japan',
			continent: 'Asia',
			year: '2023',
			highlights: ['Tokyo', 'Kyoto', 'Mount Fuji'],
			description:
				'Explored the perfect blend of traditional culture and modern technology. Highlights included visiting ancient temples, experiencing the bullet train, and enjoying the incredible cuisine.',
		},
		{
			id: 2,
			name: 'Iceland',
			continent: 'Europe',
			year: '2022',
			highlights: ['Reykjavik', 'Blue Lagoon', 'Golden Circle'],
			description:
				'Witnessed the natural wonders of Iceland, from geysers and waterfalls to hot springs and volcanic landscapes. The northern lights were a breathtaking experience.',
		},
		{
			id: 3,
			name: 'Peru',
			continent: 'South America',
			year: '2021',
			highlights: ['Machu Picchu', 'Lima', 'Sacred Valley'],
			description:
				'Hiked the Inca Trail to Machu Picchu, explored the vibrant capital of Lima, and experienced the rich cultural heritage of the Andean region.',
		},
		{
			id: 4,
			name: 'Morocco',
			continent: 'Africa',
			year: '2020',
			highlights: ['Marrakech', 'Sahara Desert', 'Fes'],
			description:
				'Ventured through ancient medinas, rode camels in the Sahara, and sampled the flavorful cuisine. The rich colors and textures of Morocco were unforgettable.',
		},
		{
			id: 5,
			name: 'New Zealand',
			continent: 'Oceania',
			year: '2019',
			highlights: ['Queenstown', 'Milford Sound', 'Rotorua'],
			description:
				'Experienced adventure sports in Queenstown, cruised through the stunning Milford Sound fjord, and learned about Maori culture in Rotorua.',
		},
		{
			id: 6,
			name: 'Canada',
			continent: 'North America',
			year: '2018',
			highlights: ['Banff', 'Vancouver', 'Toronto'],
			description:
				'Explored the majestic Canadian Rockies, vibrant cities, and serene lakes. The diversity of landscapes and friendly culture made this trip memorable.',
		},
	]

	// Travel philosophy
	const philosophy = [
		"Travel isn't just about seeing new places, but about gaining perspective and understanding different ways of life.",
		'I believe in immersive travel - connecting with locals, trying authentic cuisine, and stepping outside the tourist bubble.',
		'Each journey teaches valuable lessons that I bring back to my professional work and personal growth.',
	]

	// Filter state
	const [activeContinent, setActiveContinent] = useState('All')
	const continents = [
		'All',
		'Asia',
		'Europe',
		'North America',
		'South America',
		'Africa',
		'Oceania',
	]

	// Filtered destinations
	const filteredDestinations =
		activeContinent === 'All'
			? destinations
			: destinations.filter((dest) => dest.continent === activeContinent)

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
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	// Intersection observer hooks
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [filterRef, filterInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [destinationsRef, destinationsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const [philosophyRef, philosophyInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<div className="min-h-screen bg-gray-900">
			{/* Hero Section */}
			<section
				ref={headerRef}
				className="py-20 bg-gray-900 relative overflow-hidden"
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
						<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]">
							Travel Adventures
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Exploring the world, one destination at a time. My journeys,
							experiences, and the lessons learned along the way.
						</p>
					</motion.div>
				</div>

				{/* Background decoration */}
				<div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-3xl opacity-10"></div>
				<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-10"></div>
			</section>

			{/* Filter Section */}
			<section ref={filterRef} className="py-8 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							filterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="flex flex-wrap justify-center gap-4"
					>
						{continents.map((continent) => (
							<motion.button
								key={continent}
								onClick={() => setActiveContinent(continent)}
								className={`px-4 py-2 rounded-full transition-all ${
									activeContinent === continent
										? 'bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white'
										: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{continent}
							</motion.button>
						))}
					</motion.div>
				</div>
			</section>

			{/* Destinations Grid */}
			<section ref={destinationsRef} className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={destinationsInView ? 'visible' : 'hidden'}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{filteredDestinations.map((destination) => (
							<motion.div
								key={destination.id}
								variants={itemVariants}
								whileHover={{ y: -10, transition: { duration: 0.3 } }}
								className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[var(--primary)] transition-all"
							>
								<div className="p-6">
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-2xl font-bold">{destination.name}</h3>
										<div className="flex gap-2">
											<span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
												{destination.continent}
											</span>
											<span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
												{destination.year}
											</span>
										</div>
									</div>

									<p className="text-gray-300 mb-4">
										{destination.description}
									</p>

									<div className="mt-4">
										<h4 className="text-sm uppercase text-gray-500 mb-2">
											Highlights:
										</h4>
										<div className="flex flex-wrap gap-2">
											{destination.highlights.map((highlight, index) => (
												<span
													key={index}
													className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
												>
													{highlight}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Empty state */}
					{filteredDestinations.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="text-center py-20"
						>
							<h3 className="text-2xl font-semibold mb-4">
								No destinations found
							</h3>
							<p className="text-gray-400 mb-8">
								No destinations match the selected continent.
							</p>
							<button
								onClick={() => setActiveContinent('All')}
								className="px-6 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
							>
								Show all destinations
							</button>
						</motion.div>
					)}
				</div>
			</section>

			{/* Travel Philosophy */}
			<section ref={philosophyRef} className="py-20 bg-gray-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h2 className="text-3xl font-bold mb-10 relative inline-block">
							My Travel Philosophy
							<span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></span>
						</h2>

						<div className="space-y-6">
							{philosophy.map((text, index) => (
								<motion.p
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={
										philosophyInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
									className="text-xl text-gray-300 italic"
								>
									"{text}"
								</motion.p>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={
								philosophyInView
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0.9 }
							}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700 inline-block"
						>
							<p className="text-lg">
								Next destination:{' '}
								<span className="text-[var(--primary)]">Thailand 2025</span>
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Back To Home Button */}
			<section className="py-12 bg-gray-900">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Link href="/">
							<div className="inline-flex items-center text-[var(--primary)] hover:text-[#7FEAEF] transition-colors">
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

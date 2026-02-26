'use client'

import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import TechTicker from '@/components/ui/TechTicker'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Expertise from '@/components/sections/Expertise'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
	return (
		<>
			<Hero />
			<Stats />
			<TechTicker />
			<FeaturedProjects />
			<Expertise />
			<ContactSection />
		</>
	)
}

'use client'

import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Expertise from '@/components/sections/Expertise'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProjects />
			<Expertise />
			<ContactSection />
		</>
	)
}

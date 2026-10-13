'use client'

import { animate, onScroll } from 'animejs'
import { useAnime } from '@/lib/anime'
import PageHeader from '@/components/PageHeader'

const education = [
	{
		period: '2022',
		title: 'Engineer diploma',
		institution: 'Polytechnic University of Bucharest',
		description:
			'My thesis was a traffic sign detection app: a convolutional neural network trained to spot and classify signs in real time, reaching 94% accuracy and optimized to run on edge devices.',
	},
	{
		period: '2018 – 2022',
		title: 'Electronics, Telecommunications & IT',
		institution: 'Polytechnic University of Bucharest',
		description:
			'Four years of OOP, C++, Python, MATLAB and computer networks. It gave me the fundamentals, and it is where software development stopped being a subject and became the job I wanted.',
	},
	{
		period: '2014 – 2018',
		title: 'Mathematics & Computer Science',
		institution: 'National High School "Ferdinand I", Bacău',
		description:
			'Graduated with a 10/10 in the mathematics Baccalaureate. Analytical thinking first, then my first programs.',
	},
]

const principles = [
	{
		title: 'Your vision first',
		description:
			'Before writing a line of code I learn your business and goals. What you want to achieve drives every decision, not what looks impressive technically.',
	},
	{
		title: 'Zero surprises',
		description:
			'Timelines, costs and progress are always visible. Plain-English updates, no jargon. You know exactly where things stand.',
	},
	{
		title: 'Built to scale',
		description:
			'What we ship today will not hold you back tomorrow. Your product grows with your users and your team, without costly rewrites.',
	},
	{
		title: 'On time, as promised',
		description:
			'Deadlines are commitments. I plan carefully, flag risks early and deliver what was agreed.',
	},
]

export default function EngineerPage() {
	// The timeline rail fills as you read down it
	const root = useAnime((self) => {
		if (self.matches.reduce) return
		animate('.rail-fill', {
			scaleY: [0, 1],
			ease: 'linear',
			autoplay: onScroll({ target: '.rail', enter: 'center start', leave: 'center end', sync: 0.5 }),
		})
	})

	return (
		<div ref={root}>
			<PageHeader
				title="About"
				intro="Engineer by training, front-end developer by obsession. The path that shaped how I work, and the principles I work by."
			/>

			<section className="px-5 py-12 md:px-8 md:py-20">
				<div className="mx-auto max-w-7xl md:grid md:grid-cols-12 md:gap-8">
					<h2 data-reveal="words" className="text-[2.25rem] font-bold md:col-span-4 md:text-5xl">
						Education
					</h2>
					<ol className="rail relative mt-10 md:col-span-8 md:mt-0">
						<span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-line-2">
							<span className="rail-fill absolute inset-0 origin-top bg-gold" />
						</span>
						{education.map((item) => (
							<li key={item.period} data-reveal className="relative pb-12 pl-10 last:pb-0">
								<span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-gold bg-page" />
								<p className="text-sm font-medium text-gold">{item.period}</p>
								<h3 className="mt-1 text-2xl font-bold md:text-3xl">{item.title}</h3>
								<p className="mt-1 text-muted">{item.institution}</p>
								<p className="mt-3 max-w-[60ch] text-fg-2">{item.description}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="px-5 py-16 md:px-8 md:py-28">
				<div className="mx-auto max-w-7xl md:grid md:grid-cols-12 md:gap-8">
					<h2 data-reveal="words" className="text-[2.25rem] font-bold md:col-span-4 md:text-5xl">
						How I work
					</h2>
					<ul data-reveal="stagger" className="mt-10 md:col-span-8 md:mt-0">
						{principles.map(({ title, description }) => (
							<li key={title} className="grid gap-2 border-t border-line py-6 md:grid-cols-2 md:gap-8 md:py-8">
								<h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
								<p className="text-fg-2">{description}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	)
}

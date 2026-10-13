'use client'

import PageHeader from '@/components/PageHeader'
import {
	ReactIcon,
	NextIcon,
	VueIcon,
	JavaScriptIcon,
	TypeScriptIcon,
	TailwindIcon,
	FramerIcon,
	AnimeIcon,
	RiveIcon,
	ClaudeIcon,
	CapacitorIcon,
	GithubIcon,
	GitlabIcon,
	BitbucketIcon,
	NodeIcon,
	ExpressIcon,
	MongoIcon,
	SQLIcon,
	FirebaseIcon,
	GraphQLIcon,
	GitIcon,
	DockerIcon,
	CICDIcon,
	AWSIcon,
	VercelIcon,
	StorybookIcon,
	ShopifyIcon,
	PageflyIcon,
	LiquidIcon,
	MaplibreIcon,
	KonvaIcon,
	CMSPayloadIcon,
	LivekitIcon,
	TanstackDarkIcon,
	TanstackLightIcon,
} from '@/components/ui/TechIcons'
import { useTheme } from '@/context/ThemeContext'

export default function TechKnowledgePage() {
	const { theme } = useTheme()

	const categories = [
		{
			name: 'Frontend',
			skills: [
				{ name: 'React', icon: <ReactIcon width={40} height={40} /> },
				{ name: 'Next.js', icon: <NextIcon width={40} height={40} /> },
				{ name: 'Vue.js', icon: <VueIcon width={40} height={40} /> },
				{ name: 'Capacitor', icon: <CapacitorIcon width={40} height={40} /> },
				{ name: 'JavaScript', icon: <JavaScriptIcon width={40} height={40} /> },
				{ name: 'TypeScript', icon: <TypeScriptIcon width={40} height={40} /> },
				{ name: 'TailwindCSS', icon: <TailwindIcon width={40} height={40} /> },
				{
					name: 'Tanstack Query',
					icon:
						theme === 'light' ? (
							<TanstackDarkIcon width={40} height={40} />
						) : (
							<TanstackLightIcon width={40} height={40} />
						),
				},
				{ name: 'anime.js', icon: <AnimeIcon width={40} height={40} /> },
				{ name: 'Rive', icon: <RiveIcon width={40} height={40} /> },
				{ name: 'Framer Motion', icon: <FramerIcon width={40} height={40} /> },
				{ name: 'Storybook', icon: <StorybookIcon width={40} height={40} /> },
				{
					name: 'MapLibre',
					icon: <MaplibreIcon width={40} height={40} />,
				},
				{ name: 'Konva', icon: <KonvaIcon width={40} height={40} /> },
				{ name: 'Livekit', icon: <LivekitIcon width={40} height={40} /> },
				{ name: 'Shopify', icon: <ShopifyIcon width={40} height={40} /> },
				{ name: 'Pagefly', icon: <PageflyIcon width={40} height={40} /> },
				{ name: 'Liquid', icon: <LiquidIcon width={40} height={40} /> },
			],
		},
		{
			name: 'Backend',
			skills: [
				{ name: 'Node.js', icon: <NodeIcon width={40} height={40} /> },
				{ name: 'Express.js', icon: <ExpressIcon width={40} height={40} /> },
				{ name: 'MongoDB', icon: <MongoIcon width={40} height={40} /> },
				{ name: 'SQL', icon: <SQLIcon width={40} height={40} /> },
				{ name: 'Firebase', icon: <FirebaseIcon width={40} height={40} /> },
				{
					name: 'CMS Payload',
					icon: <CMSPayloadIcon width={40} height={40} />,
				},
			],
		},
		{
			name: 'DevOps & Tools',
			skills: [
				{ name: 'Git', icon: <GitIcon width={40} height={40} /> },
				{ name: 'GitHub', icon: <GithubIcon width={40} height={40} /> },
				{ name: 'GitLab', icon: <GitlabIcon width={40} height={40} /> },
				{ name: 'Bitbucket', icon: <BitbucketIcon width={40} height={40} /> },
				{ name: 'Docker', icon: <DockerIcon width={40} height={40} /> },
				{ name: 'CI/CD', icon: <CICDIcon width={40} height={40} /> },
				{ name: 'AWS', icon: <AWSIcon width={40} height={40} /> },
				{ name: 'Vercel', icon: <VercelIcon width={40} height={40} /> },
				{ name: 'Claude', icon: <ClaudeIcon width={40} height={40} /> },
			],
		},
	]

	return (
		<>
			<PageHeader
				title="Stack"
				intro="The tools I reach for every day, from pixel-perfect UI to production infrastructure."
			/>

			<div className="space-y-16 px-5 pb-20 md:space-y-24 md:px-8 md:pb-32">
				{categories.map((category) => (
					<section key={category.name} className="mx-auto max-w-7xl md:grid md:grid-cols-12 md:gap-8">
						<h2 data-reveal="words" className="text-[2.25rem] font-bold md:col-span-3 md:text-5xl">
							{category.name}
						</h2>
						<ul
							data-reveal="stagger"
							className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:col-span-9 md:mt-0 lg:grid-cols-5"
						>
							{category.skills.map((skill) => (
								<li
									key={skill.name}
									className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-2 py-5 transition-colors hover:border-line-2"
								>
									<div className="flex h-10 w-10 items-center justify-center overflow-hidden text-fg">{skill.icon}</div>
									<span className="text-center text-[13px] font-medium leading-tight text-fg-2">{skill.name}</span>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</>
	)
}

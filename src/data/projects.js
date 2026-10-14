export const projects = [
	{
		id: 14,
		title: 'guitarRot',
		description: 'Mobile-first guitar trainer with a playable fretboard',
		descriptionExpanded:
			'A mobile-first guitar learning app that turns a phone into a practice companion. Tap any fret on the interactive fretboard to hear the note, open the chord library where every shape strums on tap, and study scale positions box by box. Sound is synthesized live with the Web Audio API, and an app-style tab bar splits the experience into Feed, Songs, Learn and Quiz.',
		technologies: ['React', 'Vite', 'TailwindCSS', 'Web Audio API', 'Vercel'],
		category: 'Mobile App',
		image: '/images/projects/guitar_rot_cover.webp',
		imageMobile: '/images/projects/guitar_rot_mobile.webp',
		imageScroll: '/images/projects/guitar_rot_scroll.webp',
		url: 'https://guitar-rot.vercel.app/',
	},
	{
		id: 4,
		title: 'ComaromTrade',
		description: 'B2B e-commerce platform for construction materials',
		descriptionExpanded:
			'A Shopify-based e-commerce solution for an international construction materials trading company. The storefront was customized using Liquid templating to support a large product catalog with category filtering and detailed product specs. PageFly was used to build high-converting landing pages, and the checkout experience was tailored for B2B bulk purchasing flows.',
		technologies: ['Shopify', 'Liquid', 'PageFly'],
		category: 'E-commerce',
		image: '/images/projects/comarom_cover.webp',
		screenshot: '/images/projects/comarom.webp',
		imageMobile: '/images/projects/comarom_mobile.webp',
		imageScroll: '/images/projects/comarom_scroll.webp',
		url: 'https://www.comaromtrade.ro/',
		freelance: true,
	},
	{
		id: 6,
		title: 'Calculator SRL',
		description: 'Romanian business financial calculator tool',
		descriptionExpanded:
			'A financial calculator web app tailored for Romanian entrepreneurs setting up or managing an SRL (limited liability company). The tool helps users estimate net salary, dividend taxes, social contributions, and overall tax burden under different company configurations. Built with React for reactive calculations and deployed on Vercel for instant availability.',
		technologies: ['React', 'TailwindCSS', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/calculator_srl_cover.webp',
		screenshot: '/images/projects/calculator_srl.webp',
		imageMobile: '/images/projects/calculator_srl_mobile.webp',
		imageScroll: '/images/projects/calculator_srl_scroll.webp',
		url: 'https://www.calculator-srl.com/',
		freelance: true,
	},
	{
		id: 2,
		title: 'Noelina',
		description: 'Custom Shopify storefront for a jewelry brand',
		descriptionExpanded:
			'A tailored Shopify e-commerce store for a jewelry brand, focused on delivering a premium shopping experience. The theme was customized to reflect the brand identity with refined typography, curated product presentation, and a streamlined checkout flow. Built entirely within the Shopify ecosystem with attention to mobile responsiveness and page load performance.',
		technologies: ['Shopify'],
		category: 'E-commerce',
		image: '/images/projects/noelina_cover.webp',
		screenshot: '/images/projects/noelina.webp',
		imageMobile: '/images/projects/noelina_mobile.webp',
		imageScroll: '/images/projects/noelina_scroll.webp',
		url: 'https://noelina.ro/',
		freelance: true,
	},
	{
		id: 11,
		title: 'The Loupes Company',
		description: 'E-commerce platform for dental loupes and accessories',
		descriptionExpanded:
			'A high-performance e-commerce platform for a dental optics company selling custom-fit loupes and accessories to dental professionals. Built with React, the store features product configuration flows, optimized image delivery, and fast page loads prioritized for Core Web Vitals. The project involved close collaboration with the client to translate a specialist product catalog into a clear, conversion-focused shopping experience.',
		technologies: ['React', 'TailwindCSS'],
		category: 'E-commerce',
		image: '/images/projects/tlc_commerce_cover.webp',
		screenshot: '/images/projects/tlc_commerce.webp',
		imageMobile: '/images/projects/tlc_commerce_mobile.webp',
		imageScroll: '/images/projects/tlc_commerce_scroll.webp',
		url: 'https://theloupescompany.com/',
		workRelated: true,
	},
	{
		id: 3,
		title: 'SwiperMaster',
		description: 'Live tracking for street-cleaning fleets',
		descriptionExpanded:
			"A fleet platform built for a city's street-cleaning service. Dispatchers follow every sweeper on a live map, see each route as it's driven, and watch the day's plan fill up with a completion percentage per area. Built with React and MapLibre for a fast, responsive operator dashboard, and shipped with Docker.",
		technologies: ['React', 'MapLibre', 'TailwindCSS', 'Docker'],
		category: 'Web Development',
		image: '/images/projects/swipermaster_cover.webp',
		screenshot: '/images/projects/dustbusters.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 15,
		title: 'IG Tracker',
		description: 'See who unfollowed you, straight from your Instagram export',
		descriptionExpanded:
			"A follower tracker that works with Instagram's official data export instead of risky logins. Drop in the followers and following files and it lists who doesn't follow you back and who unfollowed you since your last check, with a history of previous checks. Guided steps walk users through getting their data, and the upload flow stays clear on both desktop and phone.",
		technologies: ['React', 'Vite', 'TailwindCSS', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/ig_tracker_cover.webp',
		imageMobile: '/images/projects/ig_tracker_mobile.webp',
		imageScroll: '/images/projects/ig_tracker_scroll.webp',
		url: 'https://ig-tracker-two.vercel.app/',
	},
	{
		id: 5,
		title: 'MetalFrameHouses',
		description: 'Corporate website for a steel frame construction company',
		descriptionExpanded:
			'A corporate website and client portal for a sustainable steel frame construction company. Built with React and Payload CMS, the site allows the team to manage project portfolios, publish case studies, and handle quote requests without developer involvement. Deployed on Vercel with Docker-based staging environments for safe content previews before going live.',
		technologies: ['React', 'Payload CMS', 'TailwindCSS', 'Docker', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/ecosteel_cover.webp',
		screenshot: '/images/projects/ecosteel.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 1,
		title: 'Iron Will',
		description: 'Cross-platform discipline & habit tracking app',
		descriptionExpanded:
			'A cross-platform mobile and web application built with Capacitor and React, allowing users to build and track daily habits, streaks, and personal goals. The backend is powered by Node.js and Express.js with a MongoDB database, handling user accounts, progress history, and push notifications. TailwindCSS ensures a clean, consistent UI across both iOS, Android, and browser.',
		technologies: ['Capacitor', 'React', 'TailwindCSS', 'MongoDB', 'Node.js', 'Express.js'],
		category: 'Mobile App',
		image: '/images/projects/iron_will_cover.webp',
		screenshot: '/images/projects/iron_will.webp',
		url: '#',
		freelance: true,
	},
	{
		id: 7,
		title: 'LiveKit Video Calls',
		description: 'Real-time video collaboration platform with shared canvas',
		descriptionExpanded:
			'A real-time video calling platform built with Vue.js and LiveKit for high-quality, low-latency video streaming. The platform features a shared interactive canvas powered by Konva, enabling participants to draw and annotate together during calls. Yjs handles real-time document synchronization across clients, Redis manages session state, and the entire stack is containerized with Docker.',
		technologies: [
			'Vue.js',
			'Konva',
			'Yjs',
			'TailwindCSS',
			'Redis',
			'LiveKit',
			'Docker',
		],
		category: 'Web Development',
		image: '/images/projects/livekit_cover.webp',
		screenshot: '/images/projects/livekit.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 8,
		title: 'Post&Mail App',
		description: 'Secure document dispatch and tracking platform',
		descriptionExpanded:
			'A document management platform for handling the sending, receiving, and archiving of official correspondence. Built with Vue.js and backed by AWS S3 for secure file storage, the app enables teams to track document status, manage recipients, and maintain a searchable archive. Docker ensures consistent environments across development and production deployments.',
		technologies: ['Vue.js', 'TailwindCSS', 'AWS S3', 'Docker'],
		category: 'Web Development',
		image: '/images/projects/nolas_cover.webp',
		screenshot: '/images/projects/nolas.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 9,
		title: 'Employee CRM',
		description: 'Full-stack employee management and work scheduling CRM',
		descriptionExpanded:
			'A full-stack CRM built with the MERN stack for managing employees, tracking work hours, and planning weekly schedules. Features include JWT-based authentication, role-based access control for managers and staff, and a visual work planner where hours can be assigned per employee per day. The RESTful API was built with Express and Node.js, with MongoDB handling all data persistence.',
		technologies: ['React', 'MongoDB', 'Express.js', 'Node.js', 'Material-UI'],
		category: 'Web Development',
		image: '/images/projects/crm_app_cover.webp',
		screenshot: '/images/projects/crm_app.webp',
		url: '#',
		freelance: true,
	},
	{
		id: 10,
		title: 'UI Library',
		description: 'Enterprise Vue.js component library for design consistency',
		descriptionExpanded:
			'An internal Vue.js component library built to standardize UI across multiple enterprise applications. The library includes 30+ reusable components following atomic design principles, with each component documented and demoed in Storybook. SASS with BEM methodology keeps styles modular and maintainable. The library is distributed as an NPM package with full TypeScript type definitions.',
		technologies: ['Vue.js', 'Storybook'],
		category: 'Web Development',
		image: '/images/projects/ui_library_cover.webp',
		screenshot: '/images/projects/ui_library.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 12,
		title: 'AVM Assistant',
		description: 'Accessibility web app for users with sensory and motor impairments',
		descriptionExpanded:
			'An accessibility-focused web application built to assist users with auditory, visual, and motor impairments. The React frontend connects to a Django backend and provides tools including screen reader enhancements, high-contrast and font scaling controls, keyboard navigation improvements, and voice command support via the WebSpeech API. Developed with WCAG 2.1 guidelines as a core design constraint throughout.',
		technologies: ['React', 'Django'],
		category: 'Web Development',
		image: '/images/projects/avm_assistant_cover.webp',
		screenshot: '/images/projects/avm_assistant.webp',
		url: '#', // repo is private
	},
	{
		id: 13,
		title: 'Traffic Sign Detector',
		description: 'AI model for real-time traffic sign detection and classification',
		descriptionExpanded:
			'A computer vision project using YOLOv4 for real-time detection and classification of traffic signs. The model was trained on a custom dataset of over 10,000 annotated images, with data augmentation applied to improve robustness across lighting and weather conditions. Achieved 94% mAP (mean Average Precision) on the test set, with the inference pipeline optimized for edge deployment.',
		technologies: ['YOLOv4'],
		category: 'AI',
		image: '/images/projects/traffic_sign_detection_cover.webp',
		screenshot: '/images/projects/traffic_sign_detection.webp',
		url: 'https://github.com/IoanLipan/Traffic-sign-detection',
	},
]

export const isLive = (project) => Boolean(project.url) && project.url !== '#'

const featuredIds = [14, 4, 6, 2, 11, 3]

export const getFeaturedProjects = () => featuredIds.map((id) => projects.find((p) => p.id === id))

export const getProjectCategories = () => {
	const categories = [
		'All',
		...new Set(projects.map((project) => project.category)),
	]
	return categories
}

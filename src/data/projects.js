export const projects = [
	{
		id: 1,
		title: 'Iron Will',
		description: 'Cross-platform discipline & habit tracking app',
		descriptionExpanded:
			'A cross-platform mobile and web application built with Capacitor and React, allowing users to build and track daily habits, streaks, and personal goals. The backend is powered by Node.js and Express.js with a MongoDB database, handling user accounts, progress history, and push notifications. TailwindCSS ensures a clean, consistent UI across both iOS, Android, and browser.',
		technologies: ['Capacitor', 'React', 'TailwindCSS', 'MongoDB', 'Node.js', 'Express.js'],
		category: 'Mobile App',
		image: '/images/projects/iron-will.webp',
		url: '#',
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
		image: '/images/projects/noelina.webp',
		url: '#',
		freelance: true,
	},
	{
		id: 3,
		title: 'GPS Car Tracking App',
		description: 'Fleet management platform with real-time GPS tracking',
		descriptionExpanded:
			'A fleet management platform built for a street cleaning company, enabling dispatchers to monitor vehicle positions in real time using MapLibre. The application handles route assignment, shift scheduling, and service area management. Built with React and containerized with Docker for reliable deployment, with TailwindCSS powering a responsive operator dashboard.',
		technologies: ['React', 'MapLibre', 'TailwindCSS', 'Docker'],
		category: 'Web Development',
		image: '/images/projects/dustbusters.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 4,
		title: 'ComaromTrade',
		description: 'B2B e-commerce platform for construction materials',
		descriptionExpanded:
			'A Shopify-based e-commerce solution for an international construction materials trading company. The storefront was customized using Liquid templating to support a large product catalog with category filtering and detailed product specs. PageFly was used to build high-converting landing pages, and the checkout experience was tailored for B2B bulk purchasing flows.',
		technologies: ['Shopify', 'Liquid', 'PageFly'],
		category: 'E-commerce',
		image: '/images/projects/comarom.webp',
		url: 'https://www.comaromtrade.ro/',
		freelance: true,
	},
	{
		id: 5,
		title: 'MetalFrameHouses',
		description: 'Corporate website for a steel frame construction company',
		descriptionExpanded:
			'A corporate website and client portal for a sustainable steel frame construction company. Built with React and Payload CMS, the site allows the team to manage project portfolios, publish case studies, and handle quote requests without developer involvement. Deployed on Vercel with Docker-based staging environments for safe content previews before going live.',
		technologies: ['React', 'Payload CMS', 'TailwindCSS', 'Docker', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/ecosteel.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 6,
		title: 'Calculator SRL',
		description: 'Romanian business financial calculator tool',
		descriptionExpanded:
			'A financial calculator web app tailored for Romanian entrepreneurs setting up or managing an SRL (limited liability company). The tool helps users estimate net salary, dividend taxes, social contributions, and overall tax burden under different company configurations. Built with React for reactive calculations and deployed on Vercel for instant availability.',
		technologies: ['React', 'TailwindCSS', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/calculator_srl.webp',
		url: 'https://www.calculator-srl.com/',
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
		image: '/images/projects/livekit.webp',
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
		image: '/images/projects/nolas.webp',
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
		image: '/images/projects/crm_app.webp',
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
		image: '/images/projects/ui_library.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 11,
		title: 'The Loupes Company',
		description: 'E-commerce platform for dental loupes and accessories',
		descriptionExpanded:
			'A high-performance e-commerce platform for a dental optics company selling custom-fit loupes and accessories to dental professionals. Built with React, the store features product configuration flows, optimized image delivery, and fast page loads prioritized for Core Web Vitals. The project involved close collaboration with the client to translate a specialist product catalog into a clear, conversion-focused shopping experience.',
		technologies: ['React', 'TailwindCSS'],
		category: 'E-commerce',
		image: '/images/projects/tlcCommerce.webp',
		url: 'https://theloupescompany.com/',
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
		image: '/images/projects/avm_assistant.webp',
		url: 'https://github.com/IoanLipan/avm_assistant',
	},
	{
		id: 13,
		title: 'Traffic Sign Detector',
		description: 'AI model for real-time traffic sign detection and classification',
		descriptionExpanded:
			'A computer vision project using YOLOv4 for real-time detection and classification of traffic signs. The model was trained on a custom dataset of over 10,000 annotated images, with data augmentation applied to improve robustness across lighting and weather conditions. Achieved 94% mAP (mean Average Precision) on the test set, with the inference pipeline optimized for edge deployment.',
		technologies: ['YOLOv4'],
		category: 'AI',
		image: '/images/projects/traffic_sign_detection.webp',
		url: 'https://github.com/IoanLipan/Traffic-sign-detection',
	},
]

export const getFeaturedProjects = () => {
	return [
		projects.find((p) => p.id === 1),
		projects.find((p) => p.id === 2),
		projects.find((p) => p.id === 3),
		projects.find((p) => p.id === 4),
		projects.find((p) => p.id === 5),
	]
}

export const getProjectCategories = () => {
	const categories = [
		'All',
		...new Set(projects.map((project) => project.category)),
	]
	return categories
}

export const projects = [
	{
		id: 1,
		title: 'GPS Car Tracking App',
		description: 'Professional street cleaning service management platform',
		descriptionExpanded:
			'A comprehensive cleaning service management platform built with React and MapLibre for interactive location mapping. Features include real-time scheduling, route optimization for cleaning teams, customer management with service history, and automated billing. Implemented Docker containerization for consistent deployment across environments and used TailwindCSS for responsive design.',
		technologies: ['React', 'MapLibre', 'TailwindCSS', 'Docker'],
		category: 'Web Development',
		image: '/images/projects/dustbusters.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 2,
		title: 'ComaromTrade',
		description: 'E-commerce platform for international trade',
		descriptionExpanded:
			'Shopify-based e-commerce solution for international trading company specializing in construction materials. Customized with Liquid templating for dynamic product catalogs, integrated PageFly for advanced page building capabilities, and implemented multi-currency support with automated exchange rate updates. Features include bulk order management and B2B customer portals.',
		technologies: ['Shopify', 'Liquid', 'PageFly'],
		category: 'E-commerce',
		image: '/images/projects/comarom.webp',
		url: 'https://www.comaromtrade.ro/',
		freelance: true,
	},
	{
		id: 3,
		title: 'MetalFrameHouses',
		description: 'Sustainable steel construction company website',
		descriptionExpanded:
			'Modern corporate website for sustainable steel construction company built with React and Payload CMS for content management. Features include project portfolio showcase, real-time project tracking for clients, environmental impact calculator, and automated quote generation. Deployed on Vercel with Docker containerization for scalable performance.',
		technologies: ['React', 'Payload CMS', 'TailwindCSS', 'Docker', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/ecosteel.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 4,
		title: 'Calculator SRL',
		description: 'Financial calculator for business planning',
		descriptionExpanded:
			'Advanced financial calculator application for business planning and analysis. Built with React for dynamic calculations and TailwindCSS for responsive design. Features include loan calculators, investment projections, tax calculations, and financial planning tools. Deployed on Vercel with optimized performance and SEO.',
		technologies: ['React', 'TailwindCSS', 'Vercel'],
		category: 'Web Development',
		image: '/images/projects/calculator_srl.webp',
		url: 'https://www.calculator-srl.com/',
		freelance: true,
	},
	{
		id: 5,
		title: 'LiveKit Video Calls',
		description: 'Real-time collaborative video calling platform',
		descriptionExpanded:
			'Advanced video calling platform with real-time collaboration features built with Vue.js. Integrated Konva for interactive whiteboard functionality, Yjs for real-time document collaboration, and LiveKit for high-quality video streaming. Features include screen sharing, recording capabilities, Redis for session management, and Docker deployment for scalability.',
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
		id: 6,
		title: 'Post&Mail App',
		description: 'Document management and storage platform',
		descriptionExpanded:
			'Comprehensive document management platform built with Vue.js for efficient file organization and sharing. Integrated AWS S3 for secure cloud storage with automated backup systems. Features include document versioning, access control, search functionality, and collaboration tools. Dockerized for consistent deployment and scalability.',
		technologies: ['Vue.js', 'TailwindCSS', 'AWS S3', 'Docker'],
		category: 'Web Development',
		image: '/images/projects/nolas.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 7,
		title: 'Employee CRM',
		description:
			'You can create, delete, rename users and add hours to their work planner!',
		descriptionExpanded:
			'Developed a full-stack CRM system with MERN architecture (MongoDB, Express, React, Node.js). Features include authentication with JWT, role-based access control, RESTful API endpoints with proper error handling, and Material-UI components for a responsive interface. Implemented MongoDB aggregation pipelines for complex reporting features.',
		technologies: ['React', 'MongoDB', 'Express.js', 'Node.js', 'Material-UI'],
		category: 'Web Development',
		image: '/images/projects/crm_app.webp',
		url: '#',
		freelance: true,
	},
	{
		id: 8,
		title: 'UI library',
		description: 'A library with homogenized UI components for developers',
		descriptionExpanded:
			'Developed a comprehensive Vue.js component library with 30+ reusable UI components designed for consistency across enterprise applications. Used Storybook for component documentation and testing. Implemented atomic design principles, SASS architecture with BEM methodology, and extensive unit tests with Jest and Vue Test Utils. Published as an NPM package with thorough TypeScript type definitions.',
		technologies: ['Vue.js'],
		category: 'Web Development',
		image: '/images/projects/ui_library.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 9,
		title: 'TLC',
		description: 'A e-commerce website for a dentist accessories company',
		descriptionExpanded:
			'Built a high-performance e-commerce platform for dental equipment using React with Redux Toolkit for state management. Implemented cart functionality with optimistic UI updates, secure checkout with Stripe integration, and product filtering with advanced search capabilities. Features include image optimization techniques, lazy loading, code splitting, and server-side rendering for optimal SEO and Core Web Vitals scores.',
		technologies: ['React', 'TailwindCSS'],
		category: 'E-commerce',
		image: '/images/projects/tlcCommerce.webp',
		url: 'https://theloupescompany.com/',
		workRelated: true,
	},
	{
		id: 10,
		title: 'Eat-n-Split',
		description: 'Calculate the check at a shared table!',
		descriptionExpanded:
			'A React-based bill splitting application that utilizes React state management and custom hooks to calculate individual contributions based on shared expenses. Implemented a responsive UI with dynamic recalculation of amounts using the reducer pattern for efficient state updates.',
		technologies: ['React'],
		category: 'Web Development',
		image: '/images/projects/eat_n_split.webp',
		url: 'https://eat-n-split-amber-mu.vercel.app/',
	},
	{
		id: 11,
		title: 'Travel Packing List',
		description: 'You can create a list for packing and tick away the items!',
		descriptionExpanded:
			'Interactive packing list application built with React that employs a custom drag-and-drop system for item prioritization. Features include local storage persistence, sorting algorithms for item categorization, and a responsive design with CSS Grid and Flexbox. Used React memo and useCallback for performance optimization when dealing with large lists.',
		technologies: ['React'],
		category: 'Web Development',
		image: '/images/projects/travelList.webp',
		url: 'https://travel-list-mocha-six.vercel.app/',
	},
	{
		id: 12,
		title: 'Reading List',
		description:
			'You can add books to your reading list and see statistics about reading them!',
		descriptionExpanded:
			'Next.js application integrated with the Google Books API for book discovery and tracking. Implemented server-side rendering for SEO optimization and faster initial load. Features include a custom analytics dashboard with data visualization using Chart.js, user authentication with NextAuth.js, and Tailwind CSS for responsive styling. Uses Incremental Static Regeneration to efficiently cache book data.',
		technologies: ['Next.js', 'React', 'TailwindCSS', 'Google Books API'],
		category: 'Web Development',
		image: '/images/projects/reading_list.webp',
		url: 'https://reading-list-rho.vercel.app/',
	},
	{
		id: 13,
		title: 'Catch The Squirrels!',
		description:
			'A simple game with a twist. You have to catch all the squirrels!',
		descriptionExpanded:
			'Mobile game developed with React Native that implements custom animations and gesture handling. Features include a physics engine for realistic movement, optimized rendering with React Native Reanimated, and a score system with leaderboards stored in Firebase. Used native modules for device-specific optimizations and haptic feedback integration.',
		technologies: ['React Native'],
		category: 'Mobile App',
		image: '/images/projects/catch_the_squirrels.webp',
		url: 'https://github.com/IoanLipan/CatchTheSquirrels',
	},
	{
		id: 14,
		title: 'Pizza Menu',
		description:
			'A simple pizza menu. You can see if the restaurant is open right now!',
		descriptionExpanded:
			'Interactive restaurant menu built with React that uses Context API for state management across components. Implemented custom time-based logic to display restaurant availability based on business hours. Features include dynamic pricing calculation, filtering options for dietary restrictions, and CSS Grid for responsive menu layouts.',
		technologies: ['React', 'CSS'],
		category: 'Web Development',
		image: '/images/projects/pizzaMenu.webp',
		url: 'https://pizza-menu-sand.vercel.app/',
	},
	{
		id: 15,
		title: 'Advice App',
		description:
			'Advice app connected to AdvicesApi. Click to see another advice!',
		descriptionExpanded:
			'React application that consumes the Advice Slip JSON API using custom React Query hooks for efficient data fetching and caching. Implemented debouncing for API requests, error boundary handling, and offline support with service workers. Features include share functionality with the Web Share API and speech synthesis for accessibility.',
		technologies: ['React'],
		category: 'Web Development',
		image: '/images/projects/adviceApp.webp',
		url: 'https://react-advice-app-topaz.vercel.app/',
	},
	{
		id: 16,
		title: 'What to wear',
		description:
			'A weather app with suggestions for dressing properly for the weather',
		descriptionExpanded:
			'Weather application built with React and TailwindCSS that fetches data from multiple weather APIs and uses machine learning algorithms to provide clothing recommendations based on current conditions. Implemented geolocation services, progressive web app capabilities for offline use, and a custom algorithm that factors in wind chill, humidity, and UV index for more accurate suggestions.',
		technologies: ['React', 'TailwindCSS', 'Genez.io'],
		category: 'Web Development',
		image: '/images/projects/weatherApp.webp',
		url: 'https://rose-junior-opossum.app.genez.io/',
	},
	{
		id: 17,
		title: 'AVM Assistant',
		description:
			'A web-app to help Auditive, Visualy or Motricly impaired people',
		descriptionExpanded:
			'Accessibility-focused web application built with React frontend and Django backend that provides tools for users with various disabilities. Implemented WCAG 2.1 AAA compliance, screen reader optimization, gesture recognition for motor impairments, and audio transcription services. Features include high-contrast modes, font scaling, keyboard navigation enhancements, and voice command capabilities using WebSpeech API.',
		technologies: ['React', 'Django'],
		category: 'Web Development',
		image: '/images/projects/avm_assistant.webp',
		url: 'https://github.com/IoanLipan/avm_assistant',
	},
	{
		id: 18,
		title: 'Traffic Sign Detector',
		description: 'A trained model that detects traffic signs with AI',
		descriptionExpanded:
			'Computer vision project using YOLOv4 for real-time traffic sign detection and classification. Trained on a custom dataset of over 10,000 images with data augmentation techniques for improved accuracy. Achieved 94% mAP (mean Average Precision) with optimization for edge devices using TensorRT. Implemented a pipeline for continuous model improvement with active learning and automated annotation.',
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

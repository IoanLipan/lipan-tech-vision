export const projects = [
	{
		id: 1,
		title: 'Eat-n-Split',
		description: 'Calculate the check at a shared table!',
		descriptionExpanded:
			'A React-based bill splitting application that utilizes React state management and custom hooks to calculate individual contributions based on shared expenses. Implemented a responsive UI with dynamic recalculation of amounts using the reducer pattern for efficient state updates.',
		technologies: ['ReactJS'],
		category: 'Web Development',
		image: '/images/projects/eat_n_split.webp',
		url: 'https://eat-n-split-amber-mu.vercel.app/',
	},
	{
		id: 2,
		title: 'Employee CRM',
		description:
			'You can create, delete, rename users and add hours to their work planner!',
		descriptionExpanded:
			'Developed a full-stack CRM system with MERN architecture (MongoDB, Express, React, Node.js). Features include authentication with JWT, role-based access control, RESTful API endpoints with proper error handling, and Material-UI components for a responsive interface. Implemented MongoDB aggregation pipelines for complex reporting features.',
		technologies: ['ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Material-UI'],
		category: 'Web Development',
		image: '/images/projects/crm_app.webp',
		url: '#',
	},
	{
		id: 3,
		title: 'Travel Packing List',
		description: 'You can create a list for packing and tick away the items!',
		descriptionExpanded:
			'Interactive packing list application built with React that employs a custom drag-and-drop system for item prioritization. Features include local storage persistence, sorting algorithms for item categorization, and a responsive design with CSS Grid and Flexbox. Used React memo and useCallback for performance optimization when dealing with large lists.',
		technologies: ['ReactJS'],
		category: 'Web Development',
		image: '/images/projects/travelList.webp',
		url: 'https://travel-list-mocha-six.vercel.app/',
	},
	{
		id: 4,
		title: 'Reading List',
		description:
			'You can add books to your reading list and see statistics about reading them!',
		descriptionExpanded:
			'Next.js application integrated with the Google Books API for book discovery and tracking. Implemented server-side rendering for SEO optimization and faster initial load. Features include a custom analytics dashboard with data visualization using Chart.js, user authentication with NextAuth.js, and Tailwind CSS for responsive styling. Uses Incremental Static Regeneration to efficiently cache book data.',
		technologies: ['NextJS', 'ReactJS', 'TailwindCSS', 'Google BooksAPI'],
		category: 'Web Development',
		image: '/images/projects/reading_list.webp',
		url: 'https://reading-list-rho.vercel.app/',
	},
	{
		id: 5,
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
		id: 6,
		title: 'Pizza Menu',
		description:
			'A simple pizza menu. You can see if the restaurant is open right now!',
		descriptionExpanded:
			'Interactive restaurant menu built with React that uses Context API for state management across components. Implemented custom time-based logic to display restaurant availability based on business hours. Features include dynamic pricing calculation, filtering options for dietary restrictions, and CSS Grid for responsive menu layouts.',
		technologies: ['ReactJS', 'CSS'],
		category: 'Web Development',
		image: '/images/projects/pizzaMenu.webp',
		url: 'https://pizza-menu-sand.vercel.app/',
	},
	{
		id: 7,
		title: 'Advice App',
		description:
			'Advice app connected to AdvicesApi. Click to see another advice!',
		descriptionExpanded:
			'React application that consumes the Advice Slip JSON API using custom React Query hooks for efficient data fetching and caching. Implemented debouncing for API requests, error boundary handling, and offline support with service workers. Features include share functionality with the Web Share API and speech synthesis for accessibility.',
		technologies: ['ReactJS'],
		category: 'Web Development',
		image: '/images/projects/adviceApp.webp',
		url: 'https://react-advice-app-topaz.vercel.app/',
	},
	{
		id: 8,
		title: 'What to wear',
		description:
			'A weather app with suggestions for dressing properly for the weather',
		descriptionExpanded:
			'Weather application built with React and TailwindCSS that fetches data from multiple weather APIs and uses machine learning algorithms to provide clothing recommendations based on current conditions. Implemented geolocation services, progressive web app capabilities for offline use, and a custom algorithm that factors in wind chill, humidity, and UV index for more accurate suggestions.',
		technologies: ['ReactJS', 'TailwindCSS', 'genez.io'],
		category: 'Web Development',
		image: '/images/projects/weatherApp.webp',
		url: 'https://rose-junior-opossum.app.genez.io/',
	},
	{
		id: 9,
		title: 'UI library',
		description: 'A library with homogenized UI components for developers',
		descriptionExpanded:
			'Developed a comprehensive Vue.js component library with 30+ reusable UI components designed for consistency across enterprise applications. Used Storybook for component documentation and testing. Implemented atomic design principles, SASS architecture with BEM methodology, and extensive unit tests with Jest and Vue Test Utils. Published as an NPM package with thorough TypeScript type definitions.',
		technologies: ['VueJS'],
		category: 'Web Development',
		image: '/images/projects/ui_library.webp',
		url: '#',
		workRelated: true,
	},
	{
		id: 10,
		title: 'TLC',
		description: 'A e-commerce website for a dentist accessories company',
		descriptionExpanded:
			'Built a high-performance e-commerce platform for dental equipment using React with Redux Toolkit for state management. Implemented cart functionality with optimistic UI updates, secure checkout with Stripe integration, and product filtering with advanced search capabilities. Features include image optimization techniques, lazy loading, code splitting, and server-side rendering for optimal SEO and Core Web Vitals scores.',
		technologies: ['ReactJS', 'TailWindCSS'],
		category: 'E-commerce',
		image: '/images/projects/tlcCommerce.webp',
		url: 'https://theloupescompany.com/',
		workRelated: true,
	},
	{
		id: 11,
		title: 'AVM Assistant',
		description:
			'A web-app to help Auditive, Visualy or Motricly impaired people',
		descriptionExpanded:
			'Accessibility-focused web application built with React frontend and Django backend that provides tools for users with various disabilities. Implemented WCAG 2.1 AAA compliance, screen reader optimization, gesture recognition for motor impairments, and audio transcription services. Features include high-contrast modes, font scaling, keyboard navigation enhancements, and voice command capabilities using WebSpeech API.',
		technologies: ['ReactJS', 'DJango'],
		category: 'Web Development',
		image: '/images/projects/avm_assistant.webp',
		url: 'https://github.com/IoanLipan/avm_assistant',
	},
	{
		id: 12,
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

// Function to get featured projects (you can change the logic as needed)
export const getFeaturedProjects = () => {
	return [
		projects.find((p) => p.id === 4), // Reading List
		projects.find((p) => p.id === 10), // TLC
		projects.find((p) => p.id === 12), // Traffic Sign Detector
	]
}

// Function to get all unique categories from projects
export const getProjectCategories = () => {
	const categories = [
		'All',
		...new Set(projects.map((project) => project.category)),
	]
	return categories
}

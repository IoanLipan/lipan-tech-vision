import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
	title: {
		default: 'Ioan Lipan - Full Stack Developer & Engineer',
		template: '%s | Ioan Lipan',
	},
	description:
		'Full-stack developer and engineer specializing in React, Next.js, Vue.js, and modern web technologies. Based in Bucharest, Romania.',
	keywords: [
		'Ioan Lipan',
		'Full Stack Developer',
		'React Developer',
		'Next.js',
		'Vue.js',
		'Web Developer',
		'Engineer',
		'Bucharest',
		'Romania',
	],
	authors: [{ name: 'Ioan Lipan' }],
	creator: 'Ioan Lipan',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ioanlipan.com',
		title: 'Ioan Lipan - Full Stack Developer & Engineer',
		description:
			'Full-stack developer and engineer specializing in React, Next.js, Vue.js, and modern web technologies.',
		siteName: 'Ioan Lipan Portfolio',
		images: [
			{
				url: '/images/logo.jpg',
				width: 1200,
				height: 630,
				alt: 'Ioan Lipan - Full Stack Developer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ioan Lipan - Full Stack Developer & Engineer',
		description:
			'Full-stack developer and engineer specializing in React, Next.js, Vue.js, and modern web technologies.',
		creator: '@ioanlipan',
		images: ['/images/logo.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'G-9H8LZTF7FF', // Add if you use Google Search Console
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth`}>
			<head>
				{/* Google Analytics */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=G-9H8LZTF7FF`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-9H8LZTF7FF', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
			</head>
			<body className="bg-gray-900 text-white">
				<GoogleAnalytics />
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

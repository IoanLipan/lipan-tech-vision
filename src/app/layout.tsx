import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
	title: 'Ioan Lipan - Full Stack Developer & Engineer',
	description:
		'Full-stack developer and engineer specializing in React, Next.js, Vue.js, and modern web technologies. Based in Bucharest, Romania.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth`}>
			<head>
				{/* Google Analytics - Simple Setup */}
				{process.env.NEXT_PUBLIC_GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
							`}
						</Script>
					</>
				)}
			</head>
			<body className="bg-gray-900 text-white">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

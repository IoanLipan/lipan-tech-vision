import { ReactNode } from 'react'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'
import { ThemeProvider } from '@/context/ThemeContext'
import ScrollProgress from '@/components/ui/ScrollProgress'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-display',
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
	title: 'Ioan Lipan - Full Stack Developer & Engineer',
	description:
		'Full-stack developer and engineer specializing in React, Next.js, Vue.js, and modern web technologies. Based in Bucharest, Romania.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
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
			<body className="bg-primary text-primary">
				<ThemeProvider>
					<ScrollProgress />
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

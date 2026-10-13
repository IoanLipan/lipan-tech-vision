import { ReactNode } from 'react'
import './globals.css'
import { Archivo } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import Motion from '@/components/Motion'
import Script from 'next/script'
import { ThemeProvider } from '@/context/ThemeContext'

// Variable font: width + weight axes are animated in the hero headline
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo' })

const description =
	'Front-end & full-stack developer in Bucharest. I build fast, fluid web and mobile apps with React, Next.js and Vue.'

export const metadata = {
	metadataBase: new URL('https://ioanlipan.com'),
	title: 'Ioan Lipan - Front-end & Full-stack Developer',
	description,
	openGraph: {
		title: 'Ioan Lipan - Front-end & Full-stack Developer',
		description,
		url: '/',
		siteName: 'Lipan Tech Vision',
		type: 'website',
	},
	twitter: { card: 'summary_large_image' },
}

export const viewport = {
	themeColor: '#0a0e1a',
	viewportFit: 'cover',
}

// Runs before paint: restores the saved theme, and opts into motion (reveal targets start hidden, no flash)
// unless the visitor prefers reduced motion. Failsafe: if the app hasn't hydrated in 5s, show everything.
const bootScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('motion');setTimeout(function(){if(!window.__motion)d.classList.remove('motion')},5000)}`

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={archivo.variable} suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: bootScript }} />
				{process.env.NEXT_PUBLIC_GA_ID && (
					<>
						<link rel="preconnect" href="https://www.googletagmanager.com" />
						<link rel="preconnect" href="https://region1.google-analytics.com" />
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
							strategy="lazyOnload"
						/>
						<Script id="google-analytics" strategy="lazyOnload">
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
			<body>
				<ThemeProvider>
					<div className="scroll-progress" aria-hidden="true" />
					<Header />
					<main>{children}</main>
					<Footer />
					<BottomNav />
					<Motion />
				</ThemeProvider>
			</body>
		</html>
	)
}

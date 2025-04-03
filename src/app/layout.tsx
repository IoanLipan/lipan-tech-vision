import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
	title: 'Lipan Tech Vision',
	description: 'Engineering the future through innovation and problem-solving',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} scroll-smooth`}>
			<body className="bg-gray-900 text-white">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

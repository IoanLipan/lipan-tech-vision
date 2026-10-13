import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

// Link preview card (LinkedIn, WhatsApp, Slack…), rendered at build time
export const alt = 'Ioan Lipan, front-end and full-stack developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const font = (file) => readFile(join(process.cwd(), 'src/assets/fonts', file))

export default async function OpengraphImage() {
	const [regular, extraBold] = await Promise.all([font('Archivo-Regular.ttf'), font('Archivo-ExtraBold.ttf')])
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '72px 80px',
					background: '#0a0e1a',
					color: '#f2ece0',
					fontFamily: 'Archivo',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#c9c3b6' }}>
					<div style={{ width: 14, height: 14, borderRadius: 7, background: '#34d399' }} />
					Available for new projects
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', fontSize: 104, fontWeight: 800, lineHeight: 0.98, letterSpacing: -4 }}>
					<span>Fast, fluid apps</span>
					<span>for web and mobile.</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 30 }}>
					<span style={{ display: 'flex' }}>
						Ioan Lipan<span style={{ color: '#8c92a3' }}>, front-end & full-stack developer</span>
					</span>
					<span style={{ color: '#d4b05c', fontWeight: 800, letterSpacing: 4 }}>LIPAN TECH VISION</span>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{ name: 'Archivo', data: regular, weight: 400 },
				{ name: 'Archivo', data: extraBold, weight: 800 },
			],
		},
	)
}

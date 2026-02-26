/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable SVG imports as React components
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},

	// Image optimization for Vercel's built-in edge CDN
	// next/image is automatically CDN-backed on Vercel — no custom loader needed.
	// Vercel optimizes, converts, and caches images at the edge automatically.
	images: {
		formats: ['image/avif', 'image/webp'],
		// Cache optimized images at the edge for 60 days
		minimumCacheTTL: 5184000,
		// Responsive breakpoints matching the layout grid
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 400],
	},

	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
				],
			},
		]
	},
}

module.exports = nextConfig

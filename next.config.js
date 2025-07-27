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

	// Image optimization
	images: {
		formats: ['image/webp', 'image/avif'],
	},

	// Remove experimental optimizeCss as it may cause issues
	// experimental: {
	//   optimizeCss: true,
	// },

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

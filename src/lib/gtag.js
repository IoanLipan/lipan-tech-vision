export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
	if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
		window.gtag('config', GA_TRACKING_ID, {
			page_path: url,
		})
	}
}

export const event = ({ action, category, label, value }) => {
	if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		})
	}
}

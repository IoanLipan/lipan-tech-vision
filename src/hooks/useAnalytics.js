'use client'

import { event } from '@/lib/gtag'

export const useAnalytics = () => {
	const trackEvent = (eventName, parameters = {}) => {
		event({
			action: eventName,
			category: parameters.category || 'User Interaction',
			label: parameters.label || '',
			value: parameters.value || undefined,
		})
	}

	// Specific tracking functions
	const trackContactForm = (formType = 'contact') => {
		trackEvent('form_submit', {
			category: 'Contact',
			label: formType,
		})
	}

	const trackProjectView = (projectName) => {
		trackEvent('project_view', {
			category: 'Projects',
			label: projectName,
		})
	}

	const trackDownload = (fileName) => {
		trackEvent('file_download', {
			category: 'Downloads',
			label: fileName,
		})
	}

	const trackExternalLink = (url, linkText) => {
		trackEvent('click', {
			category: 'External Links',
			label: `${linkText} - ${url}`,
		})
	}

	const trackPageSection = (sectionName) => {
		trackEvent('scroll', {
			category: 'Page Engagement',
			label: sectionName,
		})
	}

	return {
		trackEvent,
		trackContactForm,
		trackProjectView,
		trackDownload,
		trackExternalLink,
		trackPageSection,
	}
}

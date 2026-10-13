import { Check } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const availableFor = [
	'Web and mobile apps, from idea to launch',
	'Front-end work on an existing product',
	'Shopify and e-commerce builds',
	'Technical consulting and code reviews',
]

export default function ContactPage() {
	return (
		<>
			<PageHeader
				title="Let's talk"
				intro="Have a project, an idea, or just a question? I read every message and reply personally."
			/>

			<section className="px-5 pb-20 md:px-8 md:pb-32">
				<div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-8">
					<div data-reveal="stagger" className="space-y-10 md:col-span-5">
						<ContactInfo />
						<div>
							<h2 className="text-xl font-semibold">Good fit for</h2>
							<ul className="mt-4 space-y-3 text-fg-2">
								{availableFor.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<Check size={18} className="mt-1 shrink-0 text-gold" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div data-reveal className="rounded-[1.75rem] border border-line bg-surface p-5 md:col-span-7 md:p-10">
						<ContactForm redirectPath="/thank-you" buttonFullWidth />
					</div>
				</div>
			</section>
		</>
	)
}

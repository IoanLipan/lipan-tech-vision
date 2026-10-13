import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const ContactSection = () => (
	<section id="contact" className="border-t border-line px-5 py-20 md:px-8 md:py-32">
		<div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:gap-8">
			<div className="md:col-span-5">
				<h2 data-reveal="words" className="text-[2.6rem] font-bold md:text-6xl">
					Have a project in mind?
				</h2>
				<p data-reveal className="mb-8 mt-5 max-w-md text-fg-2 md:text-lg">
					Tell me what you&apos;re building. I read every message and reply personally.
				</p>
				<div data-reveal>
					<ContactInfo />
				</div>
			</div>
			<div data-reveal className="rounded-[1.75rem] border border-line bg-surface p-5 md:col-span-7 md:p-10">
				<ContactForm redirectPath="/thank-you" />
			</div>
		</div>
	</section>
)

export default ContactSection

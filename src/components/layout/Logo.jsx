import Link from 'next/link'
import Image from 'next/image'

// Both logo variants render; CSS picks one per theme so there is no wrong-logo flash.
export default function Logo({ size = 36 }) {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			<Image src="/images/logo-ltv-dark.png" alt="" width={size} height={size} priority className="light:hidden" />
			<Image src="/images/logo-ltv-light.png" alt="" width={size} height={size} className="hidden light:block" />
			<span className="whitespace-nowrap text-[13px] font-extrabold uppercase leading-[1.05] tracking-[0.08em]">
				<span className="block">Lipan</span>{' '}
				<span className="block text-gold">Tech Vision</span>
			</span>
		</Link>
	)
}

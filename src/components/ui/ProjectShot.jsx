import Image from 'next/image'

/**
 * Project art filling a 16:10 frame (cover art, or the real screenshot with `real`). When the project
 * has a phone screenshot, it sits in a phone frame bottom-right, fully visible (frame ratio matches the capture).
 */
export default function ProjectShot({ project, real = false, sizes, priority, className = '', imgClassName = '', phoneClassName = '' }) {
	// Real screenshots come in mixed ratios: show them whole at their natural height
	const shot = real && project.screenshot
	return (
		<div className={`relative overflow-hidden bg-raised ${shot ? '' : 'aspect-[16/10]'} ${className}`}>
			{shot ? (
				<Image src={shot} alt="" width={0} height={0} sizes={sizes} priority={priority} className={`h-auto w-full ${imgClassName}`} />
			) : (
				<Image src={project.image} alt="" fill sizes={sizes} priority={priority} className={`object-cover object-top ${imgClassName}`} />
			)}
			{project.imageMobile && (
				<div
					className={`absolute bottom-[6%] right-[4%] aspect-[390/844] h-[88%] overflow-hidden rounded-[11%/5%] bg-black shadow-[0_18px_50px_rgb(0_0_0/0.55)] ring-[3px] ring-black/90 ${phoneClassName}`}
				>
					<Image src={project.imageMobile} alt="" fill sizes="(max-width: 768px) 30vw, 220px" className="object-cover" />
				</div>
			)}
		</div>
	)
}

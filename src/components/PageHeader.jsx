// Shared top of inner pages. Title letters widen into place like the home headline (see Motion.jsx).
export default function PageHeader({ title, intro }) {
	return (
		<section className="px-5 pb-10 pt-28 md:px-8 md:pb-16 md:pt-44">
			<div className="mx-auto max-w-7xl">
				<h1 data-reveal="morph" className="headline text-[3.25rem] md:text-8xl">
					<span className="sr-only">{title}</span>
					{title.split(' ').map((word, w) => (
						<span key={w} aria-hidden="true">
							{w > 0 && ' '}
							<span className="inline-block whitespace-nowrap">
								{[...word].map((char, c) => (
									<span key={c} className="hl-char">
										{char}
									</span>
								))}
							</span>
						</span>
					))}
				</h1>
				{intro && (
					<p data-reveal className="mt-6 max-w-xl text-lg text-fg-2 md:text-xl">
						{intro}
					</p>
				)}
			</div>
		</section>
	)
}

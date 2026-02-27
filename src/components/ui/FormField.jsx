'use client'

const inputBase =
	'w-full bg-secondary border border-primary rounded-md py-3 px-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-colors'

const FormField = ({
	label,
	id,
	name,
	type = 'text',
	value,
	onChange,
	placeholder,
	required = true,
	rows,
}) => (
	<div>
		<label htmlFor={id} className="block text-sm font-medium text-secondary mb-1">
			{label} *
		</label>
		{rows ? (
			<textarea
				id={id}
				name={name}
				rows={rows}
				value={value}
				onChange={onChange}
				className={`${inputBase} resize-vertical`}
				placeholder={placeholder}
				required={required}
			/>
		) : (
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				className={inputBase}
				placeholder={placeholder}
				required={required}
			/>
		)}
	</div>
)

export default FormField

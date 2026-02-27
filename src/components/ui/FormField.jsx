'use client'

const inputBase =
	'w-full bg-secondary border rounded-md py-3 px-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] transition-colors'

const FormField = ({
	label,
	id,
	name,
	type = 'text',
	value,
	onChange,
	onBlur,
	placeholder,
	required = true,
	rows,
	error,
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
				onBlur={onBlur}
				className={`${inputBase} resize-vertical ${error ? 'border-red-500' : 'border-primary'}`}
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
				onBlur={onBlur}
				className={`${inputBase} ${error ? 'border-red-500' : 'border-primary'}`}
				placeholder={placeholder}
				required={required}
			/>
		)}
		{error && (
			<p className="mt-1 text-xs text-red-400">{error}</p>
		)}
	</div>
)

export default FormField

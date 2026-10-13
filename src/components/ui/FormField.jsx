// 16px text keeps iOS Safari from zooming into fields on focus
const inputBase =
	'w-full rounded-2xl border bg-page px-4 py-3.5 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none'

const FormField = ({ label, id, rows, error, required = true, ...props }) => (
	<div>
		<label htmlFor={id} className="mb-2 block text-sm font-medium text-fg-2">
			{label}
		</label>
		{rows ? (
			<textarea
				id={id}
				rows={rows}
				required={required}
				aria-invalid={!!error}
				className={`${inputBase} resize-y ${error ? 'border-red-400' : 'border-line-2'}`}
				{...props}
			/>
		) : (
			<input
				id={id}
				required={required}
				aria-invalid={!!error}
				className={`${inputBase} ${error ? 'border-red-400' : 'border-line-2'}`}
				{...props}
			/>
		)}
		{error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
	</div>
)

export default FormField

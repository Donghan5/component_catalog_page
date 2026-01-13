import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string;
}

export const Checkbox = ({ label, id, className = '', ...props }: CheckboxProps) => {
	const inputId = id || props.name || Math.random().toString(36).slice(2);

	return (
		<div className={`flex items-center ${className}`}>
			<div className="relative flex items-center">
				<input
					type="checkbox"
					id={inputId}
					className="peer h-4 w-4 opacity-0 absolute z-10 cursor-pointer"
					{...props}
				/>

				<div className="h-4 w-4 border-gray-300 rounded bg-white transition-colors duration-200
								peer-checked:bg-blue-600 peer-checked:border-transparent
								peer-focus:ring-2 peer-focus:ring-blue-200">

					<svg
						className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={3}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>				
				</div>				
			</div>

			{label && (
				<label htmlFor={inputId} className="ml-2 text-sm text-gray-700 select-none cursor-pointer">
					{label}
				</label>
			)}
		</div>
	);
};
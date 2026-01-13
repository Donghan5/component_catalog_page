import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	helperText?: string;
}

export const Input = ({
	label,
	error,
	helperText,
	id,
	className = '',
	...props
}: InputProps) => {
	const baseBorder = error
		? "border-red-500 focus:border-red-500 focus:ring-red-200"
		: "border-gray-300 focus:border-blue-500 focus:ring-blue-200";

	return (
		<div className="w-full flex flex-col gap-1.5">
			{label && (
				<label
					htmlFor={id}
					className="text-sm font-medium text-gray-700"
				>
					{label}
				</label>
			)}

			<input
				id={id}
				className={`
					w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200
					text-gray-900 placeholder-gray-400
					focus:ring-2
					disabled:bg-gray-100 disabled:text-gray-500 cursor-text
					${baseBorder}
					${className}
				`}
				{...props}
			/>

			{error ? (
				<p className="text-xs text-red-500 mt-1">{error}</p>
			): helperText ? (
				<p className="text-xs text-gray-500 mt-1">{helperText}</p>
			): null}
		</div>
	)
}

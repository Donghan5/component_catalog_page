import React from 'react';

// Define Variant and size of button
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'full';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	label?: string;
}

export const Button = ({
	variant = 'primary',
	size = 'md',
	label,
	children,
	className = '',
	...props

}: ButtonProps) => {
	const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
	
	const variants: Record<ButtonVariant, string> = {
		primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
		secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
		danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
		outline: "border border-gray-300 text-gray-900 hover:bg-gray-50 focus:text-gray-900",
	};

	const sizes: Record<ButtonSize, string> = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-5 py-2.5 text-base",
		lg: "px-6 py-3 text-lg",
		full: "w-full py-3 text-base",
	};

	const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

	return (
		<button className={buttonClass} {...props}>
			{label || children}
		</button>
	);
}

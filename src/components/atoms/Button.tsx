import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
	const baseStyle = {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'var(--radius-md)',
		fontWeight: '500',
		transition: 'var(--transition)',
		cursor: 'pointer',
		border: '1px solid transparent',
	};

	const variants = {
		primary: {
			backgroundColor: 'var(--primary)',
			color: 'white',
			border: '1px solid var(--primary)',
		},
		secondary: {
			backgroundColor: 'var(--surface)',
			color: 'var(--text-main)',
			border: '1px solid var(--border)',
		},
		ghost: {
			backgroundColor: 'transparent',
			color: 'var(--text-muted)',
		}
	};

	const sizes = {
		sm: { padding: '0.25rem 0.75rem', fontSize: '0.875rem' },
		md: { padding: '0.5rem 1rem', fontSize: '1rem' },
		lg: { padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
	};

	const style = {
		...baseStyle,
		...variants[variant],
		...sizes[size],
	};

	return (
		<button
			style={style}
			{...props}
			onMouseOver={(e) => {
				if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
				if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--text-muted)';
			}}
			onMouseOut={(e) => {
				if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--primary)';
				if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--border)';
			}}
		>
			{children}
		</button>
	);
};

export default Button;

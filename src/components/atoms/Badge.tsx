import React from 'react';

const Badge = ({ children, variant = 'info' }) => {
	const variants = {
		info: { bg: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.3)' },
		success: { bg: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.3)' },
		warning: { bg: 'rgba(234, 179, 8, 0.2)', color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.3)' },
		error: { bg: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' },
	};

	const style = {
		display: 'inline-flex',
		padding: '0.25rem 0.75rem',
		borderRadius: '9999px',
		fontSize: '0.75rem',
		fontWeight: '600',
		backgroundColor: variants[variant].bg,
		color: variants[variant].color,
		border: variants[variant].border,
	};

	return <span style={style}>{children}</span>;
};

export default Badge;

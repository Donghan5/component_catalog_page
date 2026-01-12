import React from 'react';

const Card = ({ title, children, footer }) => {
	return (
		<div style={{
			backgroundColor: 'var(--surface)',
			borderRadius: 'var(--radius-lg)',
			border: '1px solid var(--border)',
			boxShadow: 'var(--shadow-md)',
			overflow: 'hidden',
			transition: 'var(--transition)'
		}}>
			{title && (
				<div style={{
					padding: '1.5rem',
					borderBottom: '1px solid var(--border)'
				}}>
					<h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
				</div>
			)}
			<div style={{ padding: '1.5rem' }}>
				{children}
			</div>
			{footer && (
				<div style={{
					padding: '1rem 1.5rem',
					backgroundColor: 'rgba(0,0,0,0.1)',
					borderTop: '1px solid var(--border)'
				}}>
					{footer}
				</div>
			)}
		</div>
	);
};

export default Card;

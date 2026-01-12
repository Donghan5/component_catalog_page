import React from 'react';
import Badge from '../atoms/Badge';

const Navbar = () => {
	return (
		<nav style={{
			height: '64px',
			borderBottom: '1px solid var(--border)',
			display: 'flex',
			alignItems: 'center',
			padding: '0 2rem',
			justifyContent: 'space-between',
			backgroundColor: 'var(--surface)'
		}}>
			<div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Component Catalog</div>
			<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
				<span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>v1.0.0</span>
				<Badge variant="success">Live</Badge>
			</div>
		</nav>
	);
};

export default Navbar;

import React from 'react';

const Sidebar = ({ activePage, onNavigate }) => {
	const links = [
		{ id: 'button', label: 'Buttons', icon: '🔘' },
		{ id: 'input', label: 'Inputs', icon: '⌨️' },
		{ id: 'card', label: 'Cards (Mols)', icon: '🃏' },
	];

	return (
		<aside style={{
			width: '250px',
			borderRight: '1px solid var(--border)',
			backgroundColor: 'var(--surface)',
			height: '100%',
			padding: '2rem 1rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem'
		}}>
			<div style={{ marginBottom: '2rem', paddingLeft: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
				Components
			</div>
			{links.map(link => (
				<div
					key={link.id}
					onClick={() => onNavigate(link.id)}
					style={{
						padding: '0.75rem 1rem',
						borderRadius: 'var(--radius-md)',
						cursor: 'pointer',
						display: 'flex',
						alignItems: 'center',
						gap: '0.75rem',
						color: activePage === link.id ? 'var(--primary)' : 'var(--text-muted)',
						backgroundColor: activePage === link.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
						transition: 'var(--transition)',
						fontWeight: activePage === link.id ? '600' : '400'
					}}
				>
					<span>{link.icon}</span>
					{link.label}
				</div>
			))}
		</aside>
	);
};

export default Sidebar;

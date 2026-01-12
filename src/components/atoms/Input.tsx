import React from 'react';

const Input = ({ label, placeholder, type = 'text', ...props }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
			{label && (
				<label style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '500' }}>
					{label}
				</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				style={{
					padding: '0.75rem 1rem',
					borderRadius: 'var(--radius-md)',
					border: '1px solid var(--border)',
					backgroundColor: 'var(--surface)',
					color: 'var(--text-main)',
					outline: 'none',
					transition: 'var(--transition)',
					width: '100%'
				}}
				onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
				onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
				{...props}
			/>
		</div>
	);
};

export default Input;

import React from 'react';
import Input from '../components/atoms/Input';
import Card from '../components/molecules/Card';

const InputPage = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
			<div>
				<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Input Component</h2>
				<p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
					Inputs allow users to enter text. They support labels and different states.
				</p>
			</div>

			<Card title="Basic Inputs">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
					<Input label="Username" placeholder="Enter your username" />
					<Input label="Email Address" type="email" placeholder="john@example.com" />
					<Input label="Password" type="password" placeholder="••••••••" />
				</div>
			</Card>

			<Card title="Without Labels">
				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
					<Input placeholder="Search..." />
				</div>
			</Card>
		</div>
	);
};

export default InputPage;

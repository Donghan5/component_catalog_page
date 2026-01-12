import React from 'react';
import Button from '../components/atoms/Button';
import Card from '../components/molecules/Card';

const ButtonPage = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
			<div>
				<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Button Component</h2>
				<p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
					Buttons trigger actions or navigation. They come in various styles and sizes.
				</p>
			</div>

			<Card title="Variants">
				<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
				</div>
			</Card>

			<Card title="Sizes">
				<div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
					<Button size="sm">Small</Button>
					<Button size="md">Medium</Button>
					<Button size="lg">Large</Button>
				</div>
			</Card>

			<Card title="Interactive">
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Button onClick={() => alert('Clicked!')}>Click Me</Button>
				</div>
			</Card>
		</div>
	);
};

export default ButtonPage;

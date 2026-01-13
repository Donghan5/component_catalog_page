import React from 'react';
import { Button } from '../components/atoms/Button';

export const ButtonPage = () => {
	return (
		<div className="space-y-10">

			<section>
				<h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">1. Variants</h2>
				<div className="flex flowx-wrap gap-4">
					<Button variant="primary">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="danger">Danger</Button>
					<Button variant="outline">Outline</Button>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">2. Sizes</h2>
				<div className="flex flowx-wrap gap-4">
					<Button size="sm" variant="primary">Small</Button>
					<Button size="md" variant="primary">Medium (Default)</Button>
					<Button size="lg" variant="primary">Large</Button>
				</div>
				<div className="mt-4 max-w-sm">
					<Button size="full" variant="secondary">Full width</Button>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">3. States</h2>
				<div className="flex gap-4">
					<Button variant="primary" onClick={() => alert('Primary button clicked')}>Click me</Button>
					<Button variant="primary" disabled>Disabled</Button>
				</div>
			</section>
		</div>
	);
};

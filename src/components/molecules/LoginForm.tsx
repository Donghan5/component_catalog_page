import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Checkbox } from '../atoms/Checkbox';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [keepLogin, setKeepLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// mocking backend response
		setTimeout(() => {
			alert(`Login with ${email} and ${password}`)
			setIsLoading(false);
		}, 2000);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">

			<div className="space-y-4">
				<Input
					id="email"
					label="Email"
					type="email"
					placeholder="user@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<Input
					id="password"
					label="Password"
					type="password"
					placeholder="*********"
					helperText="At least 8 characters"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<div className="flex items-center justify-between">
				<Checkbox
					label="Keep Login"
					checked={keepLogin}
					onChange={(e) => setKeepLogin(e.target.checked)}
				/>

				<a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
					Forgot Password? Search Password!
				</a>
			</div>

			<Button
				type="submit"
				size="lg"
				variant="primary"
				className="w-full"
				disabled={isLoading}
			>
				{isLoading ? 'Logging in...' : 'Login'}
			</Button>
		</form>
	);
};
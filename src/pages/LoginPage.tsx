import { Card } from '../components/molecules/Card';
import { LoginForm } from '../components/molecules/LoginForm';

export const LoginPage = () => {
	return (
		<div className="max-w-md mx-auto mt-10">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
				<p className="text-gray-600 mt-2">Please login to your account.</p>
			</div>
			<Card>
				<LoginForm />
			</Card>

			<p className="text-center text-sm text-gray-500 mt-6">
				Don't have an account?{' '}
				<a href="#" className="font-medium text-blue-600 hover:text-blue-500">
					Sign Up
				</a>
			</p>
		</div>
	);
};
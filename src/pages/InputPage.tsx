import { Input } from "../components/atoms/Input";

export const InputPage = () => {
	return (
		<div className="space-y-10 max-w-xl">
			<section>
				<h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">1. Basic Input</h2>
				<div className="space-y-4">
					<Input 
						id="default"
						label="Default Input"
						placeholder="Input Something"
					/>
					<Input
						label="Helper text"
						placeholder="Email address"
						helperText="We'll never share your email with anyone else."
					/>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">2. States</h2>
				<div className="space-y-4">
					<Input
						label="Error Status"
						placeholder="Wrong input"
						value="wrong_input"
						readOnly
						error="Please enter a valid email address"
					/>
					<Input
						label="Disabled"
						placeholder="Disabled input"
						disabled
					/>
				</div>
			</section>
		</div>
	);
};
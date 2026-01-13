import { useState } from "react";
import { Checkbox } from "../components/atoms/Checkbox";

export const CheckboxPage = () => {
	const [agreed, setAgreed] = useState(false);

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold">Checkbox</h2>

			<section className="space-y-4">
				<h3 className="text-lg font-semibold">1. Basic</h3>
				<Checkbox label="Remember me" />
				<Checkbox label="Subscribe to newsletter" defaultChecked />
			</section>

			<section className="space-y-4">
				<h3 className="text-lg font-semibold">2. Controlled State</h3>
				<div className="p-4 bg-gray-50 rounded border">
					<Checkbox
						label="Agree to terms and conditions"
						checked={agreed}
						onChange={(e) => setAgreed(e.target.checked)}
					/>
					<p className="mt-2 text-sm text-gray-600">
						Status: {agreed ? <span className="text-green-600 font-bold">Agreed</span> : <span className="text-red-600 font-bold">Not Agreed</span>}
					</p>
				</div>
			</section>

			<section className="space-y-4">
				<h3 className="text-lg font-semibold">3. States</h3>
				<div className="p-4 bg-gray-50 rounded border">
					<Checkbox label="Disabled" disabled />
				</div>
			</section>
		</div>
	)
};
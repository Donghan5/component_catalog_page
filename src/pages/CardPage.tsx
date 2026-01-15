import { Card } from '../components/molecules/Card';
import { Button } from '../components/atoms/Button';

export const CardPage = () => {
	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold">Cards</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card title="Default card" description="Most basic format that include title and description">
					<p className="test-gray-600">
						This is the content of the card. You can add any content you want here.
					</p>
				</Card>

				<Card title="Card with Button" description="This one has a button">
					<p className="text-gray-600 mb-4">
						Inside a card, you can put button or other components.
					</p>
					<div className="flex justify-end">
						<Button size="sm">See more</Button>
					</div>
				</Card>

				<Card className="bg-blue-50 border-blue-100">
					<p className="text-blue-800 font-medium">
						Card without title and description. You can put just content here.
					</p>
				</Card>
			</div>
		</div>
	)
}
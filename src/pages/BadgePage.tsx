import { Badge } from '../components/atoms/Badge';

export const BadgePage = () => {
	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold">Badges</h2>

			<div className="space-y-2">
				<p className="text-gray-500 text-sm">Default style</p>
				<div className="flex gap-2">
					<Badge variant="default">Default</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="error">Error</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<p className="text-gray-500 text-sm">Example usage</p>
				<div className="flex gap-4 items-center border p-4 rounded-lg">
					<span>Order status:</span>
					<Badge variant="success">Delivered</Badge>
				</div>
			</div>
		</div>
	);
};
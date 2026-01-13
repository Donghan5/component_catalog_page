import React from 'react';

interface CardProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	className?: string;
}

export const Card = ({ children, title, description, className = ''}: CardProps) => {
	return (
		<div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}>
			{(title || description) && (
				<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
					{title && <h3 className="text-lg font-bold text-gray-900">{title}</h3>}
					{description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
				</div>
			)}

			<div className="p-6">
				{children}
			</div>
		</div>
	);
};
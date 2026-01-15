import { NavLink } from 'react-router-dom';

interface NavItem {
	name: string;
	path: string;
}

const navItems: NavItem[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Button', path: '/components/button' },
	{ name: 'Input', path: '/components/input' },
	{ name: 'Card', path: '/components/card' },
	{ name: 'Badge', path: '/components/badge' },
	{ name: 'Checkbox', path: '/components/checkbox' },
	{ name: 'Modal', path: '/components/modal' },
	{ name: 'Post List', path: '/components/post-list' },
];

export const Sidebar = () => {
	return (
		<aside className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col fixed left-0 top-0">
			<div className="p-6 border-b border-gray-200">
				<h1 className="text-2xl font-bold text-blue-600">My catalog</h1>
				<p className="text-xs text-gray-500 mt-1">TS & Tailwind Playground</p>
			</div>

			<nav className="flex-1 overflow-y-auto py-4">
				<ul>
					{navItems.map((item) => (
						<li key={item.path}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									`block px-6 py-3 text-sm font-medium transition-colors duration-200 ${isActive
										? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
										: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
									}`
								}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};
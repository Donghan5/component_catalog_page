import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
	return (
		<div className="flex min-h-screen bg-white">
			<Sidebar />
			
			<main className="flex-1 ml-64 p-10">
				<Outlet />
			</main>
		</div>
	);
};
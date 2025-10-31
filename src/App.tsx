import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div className="text-3xl font-bold text-center mt-40">
				Work in Progress...
			</div>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

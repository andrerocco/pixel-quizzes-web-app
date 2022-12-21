import { createBrowserRouter } from 'react-router-dom';
// Páginas
import Home from './templates/Home';
import Login from './templates/Login';

export const routes = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Home />,
	},
]);

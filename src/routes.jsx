import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
// Páginas
import Home from './templates/Home';
import Login from './templates/Login';
import SignUp from './templates/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/home',
        element: (
            <RequireAuth>
                <Home />
            </RequireAuth>
        ),
    },
    {
        path: '/',
        element: (
            <RequireAuth>
                <Home />
            </RequireAuth>
        ),
    },
]);

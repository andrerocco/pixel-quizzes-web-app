import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
// Páginas
import Home from './templates/Home';
import Login from './templates/Login';
import QuizHistory from './templates/QuizHistory';
import RecoverPassword from './templates/RecoverPassword';
import SignUp from './templates/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '/recover-password',
        element: <RecoverPassword />,
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
    {
        path: '/history',
        element: (
            <RequireAuth>
                <QuizHistory />
            </RequireAuth>
        ),
    },
]);

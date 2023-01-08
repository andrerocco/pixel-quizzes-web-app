import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import RequireQuizStart from './components/RequireQuizStart';
import { QuizProvider } from './contexts/QuizzesProvider';
// Páginas
import Home from './templates/Home';
import Login from './templates/Login';
import QuizDetails from './templates/QuizDetails';
import QuizHistory from './templates/QuizHistory';
import QuizQuestion from './templates/QuizQuestion';
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
    {
        path: '/quiz/:id/details/',
        element: (
            <RequireAuth>
                <QuizProvider>
                    <QuizDetails />
                </QuizProvider>
            </RequireAuth>
        ),
    },
    {
        path: '/quiz/:id/questions/',
        element: (
            <RequireAuth>
                <QuizProvider>
                    <RequireQuizStart>
                        <QuizQuestion />
                    </RequireQuizStart>
                </QuizProvider>
            </RequireAuth>
        ),
    },
]);

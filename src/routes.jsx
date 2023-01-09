import { createBrowserRouter } from 'react-router-dom';
// Contexts
import { QuizProvider } from './contexts/QuizzesProvider';
// Components
import Home from './templates/Home';
import Login from './templates/Login';
import QuizDetails from './templates/QuizDetails';
import QuizHistory from './templates/QuizHistory';
import QuizQuestion from './templates/QuizQuestion';
import QuizResults from './templates/QuizResults';
import RecoverPassword from './templates/RecoverPassword';
import SignUp from './templates/SignUp';
// Higher Order Components
import RequireAuth from './components/RequireAuth';
import RequireQuizCondition from './components/RequireQuizCondition';

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
                    <RequireQuizCondition condition="quiz_active">
                        <QuizQuestion />
                    </RequireQuizCondition>
                </QuizProvider>
            </RequireAuth>
        ),
    },
    {
        path: '/quiz/:id/results/',
        element: (
            <RequireAuth>
                <QuizProvider>
                    <RequireQuizCondition condition="quiz_finished">
                        <QuizResults />
                    </RequireQuizCondition>
                </QuizProvider>
            </RequireAuth>
        ),
    },
]);

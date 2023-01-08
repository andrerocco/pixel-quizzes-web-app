import P from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// Contexts
import { QuizContext } from '../contexts/QuizzesProvider/context';

function RequireQuizStart({ children }) {
    const {
        quizState: { quiz_active: quizActive },
    } = useContext(QuizContext);

    // User needs to click on "Start Quiz" in the quiz details page
    if (!quizActive) {
        return <Navigate to="/" />;
    }
    return children;
}

RequireQuizStart.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};

export default RequireQuizStart;

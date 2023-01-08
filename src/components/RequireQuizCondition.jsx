import P from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// Contexts
import { QuizContext } from '../contexts/QuizzesProvider/context';

function RequireQuizCondition({ children, condition }) {
    const { quizState } = useContext(QuizContext);
    const quizCondition = quizState[condition];

    if (!quizCondition) {
        return <Navigate to="/" />;
    }
    return children;
}

RequireQuizCondition.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]).isRequired,
    condition: P.string.isRequired,
};

export default RequireQuizCondition;

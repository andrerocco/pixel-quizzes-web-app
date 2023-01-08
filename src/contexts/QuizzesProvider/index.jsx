import P from 'prop-types';
import { useReducer } from 'react';
// Context, reducer and data
import { QuizContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

export const QuizProvider = ({ children }) => {
    const [quizState, quizDispatch] = useReducer(reducer, data);

    return <QuizContext.Provider value={{ quizState, quizDispatch }}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
    children: P.oneOfType([P.string, P.element, P.node]).isRequired,
};

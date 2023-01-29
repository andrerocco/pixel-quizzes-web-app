import axios from 'axios';
// Types
import * as types from './types';

export const activateQuiz = (quizId) => async (dispatch) => {
    await axios
        .get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${quizId}`)
        .then((response) => {
            dispatch({ type: types.ACTIVATE_QUIZ, payload: response });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deactivateQuiz = () => (dispatch) => {
    dispatch({ type: types.DEACTIVATE_QUIZ });
};

export const incrementScore = () => (dispatch) => {
    dispatch({ type: types.INCREMENT_SCORE });
};

export const nextQuestion = () => (dispatch) => {
    dispatch({ type: types.NEXT_QUESTION });
};

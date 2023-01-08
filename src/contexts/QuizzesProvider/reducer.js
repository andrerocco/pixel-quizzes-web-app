import * as types from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.ACTIVATE_QUIZ: {
            const {
                data: { id, data: questions },
            } = action.payload;

            return {
                ...state,
                quiz_active: true,
                quiz_finished: false,
                quiz_id: id,
                score: 0,
                current_question_index: 0,
                current_question: questions[0],
                quiz_questions: questions,
            };
        }
        case types.DEACTIVATE_QUIZ: {
            return {
                ...state,
                quiz_active: false,
                quiz_finished: false,
                quiz_id: null,
                score: 0,
                current_question: {
                    id: undefined,
                    banner_image: undefined,
                    question_text: undefined,
                    correct_answer_index: undefined,
                    answers: [],
                },
                quiz_questions: [],
            };
        }
        case types.INCREMENT_SCORE: {
            return {
                ...state,
                score: state.score + 1,
            };
        }
        case types.NEXT_QUESTION: {
            const { quiz_questions, current_question_index } = state;
            const next_question_index = current_question_index + 1;

            if (next_question_index >= quiz_questions.length) {
                return { ...state, quiz_finished: true };
            } else {
                return {
                    ...state,
                    current_question_index: next_question_index,
                    current_question: quiz_questions[next_question_index],
                };
            }
        }
    }

    console.log('Action not found: ', action.type);
    return { ...state };
};

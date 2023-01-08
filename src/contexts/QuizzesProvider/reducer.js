import * as types from './types';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.ACTIVATE_QUIZ: {
            const {
                data: { id, data: questions },
            } = action.payload;

            return { ...state, quiz_active: true, quiz_id: id, current_question: 0, questions: questions };
        }
        case types.DEACTIVATE_QUIZ: {
            return { ...state, quiz_active: false, quiz_id: null, current_question: undefined, questions: [] };
        }
    }

    console.log('Action not found: ', action.type);
    return { ...state };
};

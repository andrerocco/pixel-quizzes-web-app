import './styles.css';
import { useContext, useEffect, useState } from 'react';
// Components
import { PreviousButton } from '../../components/PreviousButton';
// Contexts
import { QuizContext } from '../../contexts/QuizzesProvider/context';
import { deactivateQuiz } from '../../contexts/QuizzesProvider/actions';
import { LoadingBlock } from '../../components/LoadingBlock';

function QuizQuestion() {
    /* eslint-disable no-unused-vars */
    const [isLoading, setLoading] = useState(true);

    const quizContext = useContext(QuizContext);
    const { quizState, quizDispatch } = quizContext;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(quizState.current_question);
    const [questionsAmount, setQuestionsAmount] = useState(quizState.questions.length);
    const [questionText, setQuestionText] = useState(quizState.questions[currentQuestionIndex].question_text);
    const [questionImage, setQuestionImage] = useState(quizState.questions[currentQuestionIndex].banner_image);
    const [questionAnswers, setQuestionAnswers] = useState(quizState.questions[currentQuestionIndex].answers);

    useEffect(() => {
        setCurrentQuestionIndex(quizState.current_question);
        setQuestionsAmount(quizState.questions.length);
        setQuestionText(quizState.questions[currentQuestionIndex].question_text);
        setQuestionImage(quizState.questions[currentQuestionIndex].banner_image);
        setQuestionAnswers(quizState.questions[currentQuestionIndex].answers);

        setLoading(false);
    }, [quizState, currentQuestionIndex]);

    function handleGoBack() {
        // If the user clicks on the "go back" button, the quiz is deactivated
        deactivateQuiz()(quizDispatch);
    }

    return (
        <div className="QuizQuestionWrapper">
            <PreviousButton id="previous-button" onClick={() => handleGoBack()} />
            <LoadingBlock loadingStatus={isLoading}>
                <p>
                    {currentQuestionIndex + 1} de {questionsAmount}
                </p>
                <h2>{questionText}</h2>
                <img src={questionImage} alt="Question image" />
            </LoadingBlock>
        </div>
    );
}

export default QuizQuestion;

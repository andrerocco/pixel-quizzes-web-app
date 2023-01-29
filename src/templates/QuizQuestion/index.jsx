import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import { OptionButtonsList } from '../../components/OptionButtonsList';
import { LoadingBlock } from '../../components/LoadingBlock';
import { PreviousButton } from '../../components/PreviousButton';
// Contexts
import { QuizContext } from '../../contexts/QuizzesProvider/context';
import { deactivateQuiz, incrementScore, nextQuestion } from '../../contexts/QuizzesProvider/actions';
import { Button } from '../../components/Button';

function QuizQuestion() {
    /* eslint-disable no-unused-vars */
    const navigate = useNavigate();
    const { id } = useParams();

    // Component state variables
    const [isLoading, setLoading] = useState(true);
    const [nextButtonVisible, setNextButtonVisible] = useState(false);

    // Quiz context variables
    const quizContext = useContext(QuizContext);
    const { quizState, quizDispatch } = quizContext;

    // Quiz question state variables
    const [questionsAmount, setQuestionsAmount] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionText, setQuestionText] = useState('');
    const [questionBannerImage, setQuestionBannerImage] = useState('');
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [questionCorrectIndex, setQuestionCorrectIndex] = useState(undefined);

    useEffect(() => {
        try {
            setQuestionsAmount(quizState.quiz_questions.length);
            setCurrentQuestionIndex(quizState.current_question_index);
            setQuestionText(quizState.current_question.question_text);
            setQuestionBannerImage(quizState.current_question.banner_image);
            setQuestionAnswers(quizState.current_question.answers);
            setQuestionCorrectIndex(quizState.current_question.correct_answer_index);

            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(true);
        }
    }, [quizState, navigate]);

    useEffect(() => {
        // If the quiz is finished, the user is redirected to the quiz results page
        if (quizState.quiz_finished) {
            navigate(`/quiz/${id}/results/`);
        }
    }, [quizState, navigate, id]);

    function handleGoBack() {
        // If the user clicks on the "go back" button, the quiz is deactivated
        deactivateQuiz()(quizDispatch);
    }

    function handleAnswer() {
        // If the user clicks on an answer, the next button is shown
        setNextButtonVisible(true);
    }

    function handleRightAnswer() {
        // If the user clicks on a right answer, the quiz score is incremented
        incrementScore()(quizDispatch);
    }

    function handleWrongAnswer() {
        //pass
    }

    function handleNextQuestion() {
        setNextButtonVisible(false);
        setLoading(true); // Sets the loading that may be unset when the useEffect is triggered
        nextQuestion()(quizDispatch);
    }

    return (
        <div className="QuizQuestionWrapper">
            <PreviousButton id="previous-button" onClick={() => handleGoBack()} />
            <LoadingBlock loadingStatus={isLoading}>
                {!isLoading && (
                    <div id="question-container">
                        <p id="question-number">
                            {currentQuestionIndex + 1} de {questionsAmount}
                        </p>
                        <h2 id="question-text">{questionText}</h2>
                        <div id="banner-image" style={{ backgroundImage: `url(${questionBannerImage})` }}></div>
                        <OptionButtonsList
                            optionsList={questionAnswers}
                            correctAnswer={questionCorrectIndex}
                            bulletType="alphabet"
                            listGap={'20px'}
                            id="option-buttons-list"
                            onAnswer={() => handleAnswer()}
                            onRightAnswer={() => handleRightAnswer()}
                            onWrongAnswer={() => handleWrongAnswer()}
                        />
                        <Button
                            label="Continuar"
                            type="button"
                            onClick={() => handleNextQuestion()}
                            style={{
                                opacity: nextButtonVisible ? '1' : '0',
                                pointerEvents: nextButtonVisible ? 'all' : 'none',
                                Animation: 'fade-in 0.1s ease-in-out',
                            }}
                            id="next-button"
                        />
                    </div>
                )}
            </LoadingBlock>
        </div>
    );
}

export default QuizQuestion;

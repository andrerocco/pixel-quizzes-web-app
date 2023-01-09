import './styles.css';
import { useContext, useEffect, useState } from 'react';
// Components
import { PreviousButton } from '../../components/PreviousButton';
// Contexts
import { QuizContext } from '../../contexts/QuizzesProvider/context';
import { deactivateQuiz } from '../../contexts/QuizzesProvider/actions';
import { Button } from '../../components/Button';

function QuizResults() {
    // Quiz context variables
    const quizContext = useContext(QuizContext);
    const { quizState, quizDispatch } = quizContext;

    // Quiz state variables
    const [questionsAmount, setQuestionsAmount] = useState(0);
    const [scoreAmount, setScoreAmount] = useState(0);
    const [text, setText] = useState(['', '']);

    useEffect(() => {
        try {
            setQuestionsAmount(quizState.quiz_questions.length);
            setScoreAmount(quizState.score);

            if (scoreAmount === questionsAmount) {
                setText([
                    'Você é um mestre',
                    'Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!',
                ]);
            } else {
                setText([
                    'Quase lá...',
                    'Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!',
                ]);
            }
        } catch (error) {
            console.log(error);
        }
    }, [quizState, questionsAmount, scoreAmount]);

    function handleGoBack() {
        // If the user clicks on the "go back" button, the quiz is deactivated
        deactivateQuiz()(quizDispatch);
    }

    return (
        <div className="QuizResultsWrapper">
            <div id="results-container">
                <PreviousButton id="previous-button" onClick={() => handleGoBack()} />
                <h3>Resultados</h3>
                <h1>
                    {scoreAmount}/{questionsAmount}
                </h1>
                <h3>{text[0]}</h3>
                <p>{text[1]}</p>
                <Button label="Finalizar" type="button" onClick={() => handleGoBack()} />
            </div>
        </div>
    );
}

export default QuizResults;

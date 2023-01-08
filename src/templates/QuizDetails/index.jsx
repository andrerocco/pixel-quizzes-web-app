import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// Components
import { PreviousButton } from '../../components/PreviousButton';
import { DifficultyLabel } from '../../components/DifficultyLabel';
import { LoadingBlock } from '../../components/LoadingBlock';
import { Button } from '../../components/Button';
// Assets
import quizDetailsIllustration from '../../assets/illustrations/quiz-details-illustration.svg';
// Contexts
import { QuizContext } from '../../contexts/QuizzesProvider/context';
import { activateQuiz } from '../../contexts/QuizzesProvider/actions';

function QuizDetails() {
    /* eslint-disable no-unused-vars */

    const { id: quizId } = useParams();
    const [quizDetails, setQuizDetails] = useState({});
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Context
    const quizContext = useContext(QuizContext);
    const { quizState, quizDispatch } = quizContext;

    // (ComponentDidMount)
    useEffect(() => {
        async function fetchQuizDetails(quizId) {
            const quizDetails = await axios.get(
                `https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes/${quizId}`,
            );
            setQuizDetails(quizDetails.data);
            setLoading(false);
        }
        fetchQuizDetails(quizId);
    }, [quizId]);

    async function handleStartQuiz() {
        await activateQuiz(quizId)(quizDispatch).then(() => {
            setTimeout(() => {
                navigate(`/quiz/${quizId}/questions/`);
            }, 20);
        });
    }

    return (
        <div className="QuizDetailsWrapper">
            <PreviousButton id="previous-button" onClick={() => navigate('/home')} />
            <LoadingBlock loadingStatus={isLoading}>
                {!isLoading && (
                    <div id="quiz-details">
                        <h1>{quizDetails.title}</h1>
                        <img className="no-drag" src={quizDetailsIllustration} alt="Vector illustration" />
                        <div id="difficulty-label">
                            <DifficultyLabel label={quizDetails.difficulty} difficulty={quizDetails.difficulty} />
                        </div>
                        <h3>Sobre o quiz</h3>
                        <p>{quizDetails.description}</p>
                        <h3>Quantidade de perguntas</h3>
                        <p>{quizDetails.questions_count}</p>
                        <div id="start-quiz-button">
                            <Button label="Fazer tentativa" onClick={() => handleStartQuiz()}></Button>
                        </div>
                    </div>
                )}
            </LoadingBlock>
        </div>
    );
}

export default QuizDetails;

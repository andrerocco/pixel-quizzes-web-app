import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Components
import { LoadingBlock } from '../../components/LoadingBlock';
import { QuizGrid } from '../../components/QuizGrid';
import { PreviousButton } from '../../components/PreviousButton';

function QuizHistory() {
    /* eslint-disable no-unused-vars */

    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    // (ComponentDidMount)
    // Fetches the data from the API
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Sets the loading state to true before fetching the data

            const quizzesResponse = await axios.get(
                'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true',
            );
            setQuizzes(quizzesResponse.data);

            setLoading(false); // Sets the loading state to false when the data is fetched
        };
        fetchData();
    }, []);

    return (
        <div className="QuizHistoryWrapper">
            <div id="header-navbar">
                <div id="navbar-left">
                    <PreviousButton onClick={() => navigate('/home')} />
                    <h1>Seu histórico</h1>
                </div>
            </div>
            <LoadingBlock loadingStatus={isLoading} className="page-content">
                {quizzes.length > 0 && <QuizGrid quizzes={quizzes} />}
            </LoadingBlock>
        </div>
    );
}

export default QuizHistory;

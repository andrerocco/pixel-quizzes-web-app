import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// Hooks
import useDebounce from '../../hooks/useDebounce';
// Components
import { SearchField } from '../../components/SearchField';
import { QuizGrid } from '../../components/QuizGrid';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { DropdownButton } from '../../components/Dropdown/DropdownButton';
import { DropdownItem } from '../../components/Dropdown/DropdownItem';
import { LoadingBlock } from '../../components/LoadingBlock';
import { QuizNotFound } from '../../components/QuizNotFound';

function Home() {
    /* eslint-disable no-unused-vars */

    const [user, setUser] = useState({});
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 300);

    const navigate = useNavigate();

    // (ComponentDidMount)
    // Fetches the data from the API
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Sets the loading state to true before fetching the data

            const userResponse = await axios.get(
                'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile',
            );
            setUser(userResponse.data);
            const quizzesResponse = await axios.get(
                'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=false',
            );
            setAllQuizzes(quizzesResponse.data);
            setQuizzes(quizzesResponse.data);

            setLoading(false); // Sets the loading state to false when the data is fetched
        };
        fetchData();
    }, []);

    // Filters the quizzes based on the search value
    useEffect(() => {
        async function fetchSearchResults() {
            setLoading(true); // Sets the loading state to true before fetching the data

            const searchResults = await axios
                .get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?q=${debouncedSearch}`)
                .then((response) => response.data)
                .catch((error) => console.log(error));
            setQuizzes(searchResults);

            setLoading(false); // Sets the loading state to false when the data is fetched
        }

        if (debouncedSearch) {
            fetchSearchResults();
        } else {
            setQuizzes(allQuizzes);
        }
    }, [debouncedSearch, allQuizzes]);

    function handleFilterClick(value) {
        setSearchValue(value.replace('#', ''));
    }

    function handleQuizClick(id) {
        navigate(`/quiz/${id}/details`);
    }

    return (
        <div className="HomeWrapper">
            <nav id="header-navbar">
                <div id="home-navbar-left">
                    <WelcomeTitle greeting={'Olá,'}>{user.name}</WelcomeTitle>
                </div>
                <div id="home-navbar-right">
                    <button type="button" onClick={() => navigate('/history')}>
                        Histórico
                    </button>
                    <DropdownButton label={'Temas'}>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#HTML</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#UX</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#Swift</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#UI</DropdownItem>
                    </DropdownButton>
                    <SearchField
                        placeholder="Pesquisar quiz"
                        style={{ width: '404px' }}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </nav>
            <div id="home-content-wrapper">
                <LoadingBlock loadingStatus={isLoading}>
                    {quizzes.length > 0 && <QuizGrid quizzes={quizzes} onQuizClick={(id) => handleQuizClick(id)} />}
                    {quizzes.length <= 0 && (
                        <QuizNotFound message="Quiz não encontrado">
                            Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...
                        </QuizNotFound>
                    )}
                </LoadingBlock>
            </div>
        </div>
    );
}

export default Home;

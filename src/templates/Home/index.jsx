import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import { SearchField } from '../../components/SearchField';
import { QuizGrid } from '../../components/QuizGrid';
import { WelcomeTitle } from '../../components/WelcomeTitle';
import { DropdownButton } from '../../components/Dropdown/DropdownButton';
import { DropdownItem } from '../../components/Dropdown/DropdownItem';

function Home() {
    /* eslint-disable no-unused-vars */

    const [user, setUser] = useState({});
    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    function fetchUser() {
        return axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
    }

    function fetchAllQuizzes() {
        return axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes');
    }

    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUser();
            const quizzesData = await fetchAllQuizzes();
            console.log(userData);
            console.log(quizzesData);
        };
        fetchData();
    }, []);

    function handleFilterClick(value) {
        console.log(value);
    }

    return (
        <div className="HomeWrapper">
            <nav id="home-navbar">
                <div id="home-navbar-left">
                    <WelcomeTitle greeting={'Olá,'}>{user.name}</WelcomeTitle>
                </div>
                <div id="home-navbar-right">
                    <button type="button">Histórico</button>
                    <DropdownButton label={'Temas'}>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#HTML</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#UX</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#Swift</DropdownItem>
                        <DropdownItem onClick={(e) => handleFilterClick(e.target.innerText)}>#UI</DropdownItem>
                    </DropdownButton>
                    <SearchField
                        placeholder="Pesquisar quiz"
                        style={{ width: '404px' }}
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>
            </nav>
            <div id="home-content">
                {quizzes.length > 0 && <QuizGrid quizzes={quizzes} />}
                {quizzes.length <= 0 && <p>Nenhum post encontrado</p>}
            </div>
        </div>
    );
}

export default Home;

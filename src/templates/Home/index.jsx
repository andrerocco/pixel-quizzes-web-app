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

    function fetchUser() {
        return axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
    }

    function fetchAllQuizzes() {
        return axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes');
    }

    useEffect(() => {
        (async () => {
            await fetchUser().then((response) => {
                setUser(response.data);
            });
        })(); // Fetches the user data and sets it to the user state
        (async () => {
            await fetchAllQuizzes().then((response) => {
                setQuizzes(response.data);
            });
        })(); // Fetches all posts and sets it to the posts state
    }, []);

    function handleFilterClick(value) {
        console.log(value);
    }

    return (
        <div className="HomeWrapper">
            <div id="home-header">
                <div id="home-header-left">
                    <WelcomeTitle greeting={'Olá,'}>{user.name}</WelcomeTitle>
                </div>
                <div id="home-header-right">
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
            </div>
            <div id="home-content">
                {quizzes.length > 0 && <QuizGrid quizzes={quizzes} />}
                {quizzes.length <= 0 && <p>Nenhum post encontrado</p>}
            </div>
        </div>
    );
}

export default Home;

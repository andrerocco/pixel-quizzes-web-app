import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import { SearchField } from '../../components/SearchField';

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

    return (
        <div className="HomeWrapper">
            <div className="home-header">
                <div id="home-header-left">
                    <p>Olá,</p>
                    <h1>userName</h1>
                </div>
                <div id="home-header-right">
                    <button type="button">Histórico</button>
                    <button type="button">Temas</button>
                    <SearchField
                        placeholder="Pesquisar quiz"
                        style={{ width: '404px' }}
                        onChange={(e) => console.log(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

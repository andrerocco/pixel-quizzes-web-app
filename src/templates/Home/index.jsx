import { SearchField } from '../../components/SearchField';
import './styles.css';

function Home() {
    return (
        <div className="HomeWrapper">
            <div className="home-header">
                <div id="home-header-left">
                    <p>Olá,</p>
                    <h1>Juliana Antonieta</h1>
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

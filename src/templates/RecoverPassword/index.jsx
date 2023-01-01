import './styles.css';
import { useNavigate } from 'react-router-dom';
// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

function RecoverPassword() {
    const navigate = useNavigate();

    /* FIXHERE */
    const handleHandleRecover = (event) => {
        event.preventDefault(); // Prevents the page from reloading
        console.log('Recover password');
        navigate('/login');
    };

    return (
        <div className="RecoverPasswordWrapper">
            <form onSubmit={(e) => handleHandleRecover(e)} id="recover-password-form">
                <h1>Recuperar Senha</h1>
                <TextInput type="email" placeholder="Email" required />
                <Button type="submit" label="Recuperar" />
            </form>
        </div>
    );
}

export default RecoverPassword;

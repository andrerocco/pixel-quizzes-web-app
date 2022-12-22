import './styles.css';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { PasswordInput } from '../../components/PasswordInput';
// Assets
import quizzesTypography from '../../assets/pixel-quizzes-typography.svg';
import quizzesIllustration from '../../assets/illustrations/quizzes-illustration.svg';
// Contexts
import { useAuth } from '../../contexts/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // Used to redirect the user to the page he was trying to access before being redirected to the login page

    const redirectTo = location.state?.path || '/';

    const handleLogin = (event) => {
        event.preventDefault(); // Prevents the page from reloading

        auth.login({ username: email, password: password });
        navigate(redirectTo, { replace: true }); // Replace: true prevents the user from going back to the login page by pressing the back button
    };

    return (
        <div className="LoginWrapper">
            <div id="illustration-typography">
                <img src={quizzesIllustration} alt="Quizzes Illustration" id="quizzes-illustration" />
                <img src={quizzesTypography} alt="Pixel Quizzes Typography" id="pixel-quizzes-typography" />
            </div>
            <form onSubmit={(e) => handleLogin(e)} id="login-form">
                <h1>Entrar</h1>
                <TextInput
                    type="email"
                    id="email-input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <PasswordInput placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                <p>Esqueceu sua senha?</p>
                <Button type="submit" label="Login" />
                <p onClick={() => navigate('/signup')}>Criar uma conta</p>
            </form>
        </div>
    );
}

export default Login;

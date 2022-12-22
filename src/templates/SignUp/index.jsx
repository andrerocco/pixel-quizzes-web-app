import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { TextInput } from '../../components/TextInput';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';
// Contexts
import { useAuth } from '../../contexts/auth';

function SignUp() {
    /* eslint-disable no-unused-vars */

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault(); // Prevents the page from reloading

        auth.signup({ name: name, email: email, password: password });
        navigate('/home', { replace: true }); // Replace: true prevents the user from going back to the login page by pressing the back button
    };

    return (
        <div className="SignUpWrapper">
            <form onSubmit={(e) => handleSignUp(e)} id="sign-up-form">
                <div id="sign-up-title">
                    <h1>Cadastre-se</h1>
                    <p>Crie uma conta gratuitamente</p>
                </div>
                <TextInput type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} required />
                <TextInput type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <PasswordInput placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit" label="Cadastre-se" />
            </form>
        </div>
    );
}

export default SignUp;

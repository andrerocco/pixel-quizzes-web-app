import './styles.css';
import { useState } from 'react';
// Componentes
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { PasswordInput } from '../../components/PasswordInput';

function Login() {
    /* eslint-disable no-unused-vars */

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        console.log('Email: ' + email + ' Password: ' + password);

        event.preventDefault();
    };

    return (
        <div className="Login">
            <form onSubmit={(e) => handleLogin(e)}>
                <TextInput
                    type="email"
                    id="email-input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <PasswordInput placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit" label="Login" />
            </form>
        </div>
    );
}

export default Login;

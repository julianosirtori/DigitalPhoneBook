import React, { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import api from '../../services/api';
import history from '../../services/history';
import { login } from '../../services/auth';

import { Container, FormLogin } from './styles';
import { InputController, ButtonSubmit } from '../../styles/admin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function handleEmail(event) {
        const { value } = event.target;
        setEmail(value);
        // this.setState({
        //     [name]: value,
        // });
    }

    function handlePassword(event) {
        const { value } = event.target;
        setPassword(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await api.post('/sessions', { email, password });
            const { token } = response.data;
            login(token);
            setLoading(false);
            setError('');
            history.push('/telefones');
        } catch (err) {
            const { data } = err.response;

            setLoading(false);
            setError(data.error);
        }
    }

    return (
        <>
            <Container>
                <FormLogin onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <InputController>
                        <label>Email*</label>
                        <input
                            placeholder="Digite o seu email aqui"
                            type="email"
                            required
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </InputController>
                    <InputController>
                        <label>Senha*</label>
                        <input
                            placeholder="Digite a sua senha aqui"
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={handlePassword}
                        />
                    </InputController>

                    <ButtonSubmit loading={loading ? 1 : 0}>
                        {loading ? (
                            <AiOutlineReload />
                        ) : (
                            <strong>Entrar</strong>
                        )}
                    </ButtonSubmit>
                    <p>{error}</p>
                </FormLogin>
            </Container>
        </>
    );
}

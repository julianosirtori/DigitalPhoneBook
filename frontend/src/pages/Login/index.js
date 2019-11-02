import React, { Component } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container, FormLogin } from './styles';
import AdminStyle, { InputController, ButtonSubmit } from '../../styles/admin';

export default class Login extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
    };

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true });
        try {
            const response = await api.post('/sessions', this.state);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            this.setState({ error: '' });
            const { history } = this.props;
            history.push('/telefones');
        } catch (err) {
            const { data } = err.response;
            const { error } = data;
            this.setState({ error });
        }
        this.setState({ loading: false });
    };

    render() {
        const { email, password, error, loading } = this.state;
        return (
            <>
                <AdminStyle />
                <Container>
                    <FormLogin onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <InputController>
                            <label>Email*</label>
                            <input
                                placeholder="Digite o seu telene aqui"
                                type="email"
                                required
                                name="email"
                                value={email}
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
                            />
                        </InputController>

                        <ButtonSubmit disabled={loading} loading={loading}>
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
}

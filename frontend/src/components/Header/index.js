import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { logout } from '../../services/auth';

import { Container, Navigate } from './styles';

import history from '../../services/history';

export default function Header() {
    function handleButtonSair() {
        logout();
        history.push('/login');
    }

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="PhoneManager" />
            </Link>
            <Navigate>
                <Link to="telefones">Telefones</Link>
                <Link to="usuarios">Usuários</Link>
                <button onClick={handleButtonSair} type="button">
                    Sair
                </button>
            </Navigate>
        </Container>
    );
}

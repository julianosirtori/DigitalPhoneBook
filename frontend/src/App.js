import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <ToastContainer />
            <GlobalStyle />
        </Router>
    );
}

export default App;

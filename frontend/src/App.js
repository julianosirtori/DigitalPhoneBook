import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <ToastContainer />
            <Routes />
            <GlobalStyle />
        </>
    );
}

export default App;

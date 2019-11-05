import React from 'react';

import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <Routes />
            <GlobalStyle />
        </>
    );
}

export default App;

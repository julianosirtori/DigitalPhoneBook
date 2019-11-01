import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Telefones from './pages/Telefones';
import User from './pages/User';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/telefones" component={Telefones} />
                <Route path="/usurios" component={User} />
            </Switch>
        </BrowserRouter>
    );
}

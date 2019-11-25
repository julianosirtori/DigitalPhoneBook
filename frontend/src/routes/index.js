import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Telefones from '../pages/Telefones';
import User from '../pages/User';
import Search from '../pages/Search';

import Route from './Route';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/telefones" isPrivate component={Telefones} />
                <Route path="/usuarios" isPrivate component={User} />
            </Switch>
        </BrowserRouter>
    );
}

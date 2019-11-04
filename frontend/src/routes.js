import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Telefones from './pages/Telefones';
import User from './pages/User';
import Search from './pages/Search';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            )
        }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/telefones" component={Telefones} />
                <PrivateRoute path="/usurios" component={User} />
            </Switch>
        </BrowserRouter>
    );
}

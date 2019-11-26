import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';

import AdministrationLayout from '../pages/_layout/administration';
import DefaultLayout from '../pages/_layout/default';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = isAuthenticated();

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }

    const Layout = signed ? AdministrationLayout : DefaultLayout;

    return (
        <Layout>
            <Route {...rest} render={props => <Component {...props} />} />
        </Layout>
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = isAuthenticated;

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }
    return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};

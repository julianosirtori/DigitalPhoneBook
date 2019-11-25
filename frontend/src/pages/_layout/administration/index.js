import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AdministrationLayout({ children }) {
    return <Container>{children}</Container>;
}

AdministrationLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

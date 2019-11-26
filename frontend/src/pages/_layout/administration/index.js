import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Header from '../../../components/Header';

export default function AdministrationLayout({ children }) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
}

AdministrationLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

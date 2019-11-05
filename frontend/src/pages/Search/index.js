import React, { Component } from 'react';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../services/api';
import {
    Container,
    ImageLogo,
    InputSearch,
    ListPhones,
    ItemPhone,
    DescritionPhone,
    NumberPhone,
    Tags,
    Footer,
    ContainerSearch,
} from './styles';

export default class Search extends Component {
    state = {
        phones: [],
        search: '',
    };

    handleInputSearch = async event => {
        const { value } = event.target;
        this.setState({
            search: value,
        });

        if (value !== '' && value.length > 2) {
            try {
                const response = await api.get(`/searchs/${value}`);
                this.setState({
                    phones: response.data,
                });
            } catch (error) {
                console.log(error);
                toast.error('Ocorreu um erro');
            }
        }
    };

    render() {
        const { phones, search } = this.state;
        return (
            <>
                <ToastContainer />
                <Container>
                    <ContainerSearch>
                        <ImageLogo />
                        <InputSearch
                            type="text"
                            placeholder="Comece a Digitar para pesquisar"
                            value={search}
                            onChange={this.handleInputSearch}
                        />
                    </ContainerSearch>

                    <ListPhones>
                        {phones.map(phone => (
                            <ItemPhone key={phone.id}>
                                <MdCall size={48} color="#0E4194" />
                                <DescritionPhone>
                                    <strong>{phone.name}</strong>
                                    <Tags>
                                        {phone.tags.split(';').map(tag => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </Tags>
                                </DescritionPhone>
                                <NumberPhone>{phone.phone}</NumberPhone>
                            </ItemPhone>
                        ))}
                    </ListPhones>

                    <Footer>
                        <Link to="telefones">Administração</Link>
                    </Footer>
                </Container>
            </>
        );
    }
}

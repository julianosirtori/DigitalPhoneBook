import React, { Component } from 'react';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
        loading: false,
    };

    handleInputSearch = async event => {
        const { value } = event.target;
        this.setState({
            search: value,
        });
        this.setState({ loading: true });
        if (value !== '' && value.length % 2 === 0) {
            try {
                const response = await api.get(`/searchs/${value}`);
                this.setState({
                    phones: response.data,
                    loading: false,
                });
            } catch (error) {
                console.log(error);
                this.setState({ loading: false });
            }
        }
    };

    render() {
        const { phones, search, loading } = this.state;
        return (
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
        );
    }
}

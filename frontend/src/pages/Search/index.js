import React, { useState } from 'react';
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

export default function Search() {
    const [phones, setPhones] = useState([]);
    const [search, setSearch] = useState('');

    async function handleInputSearch(event) {
        const { value } = event.target;
        setSearch(value);

        if (value !== '' && value.length > 2) {
            try {
                const response = await api.get(`/searchs/${value}`);
                setPhones(response.data);
            } catch (error) {
                console.log(error);
                toast.error('Ocorreu um erro');
            }
        }
    }

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
                        onChange={handleInputSearch}
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

import React, { Component } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import api from '../../services/api';

import {
    Container,
    ContainerBotoes,
    FormTelefone,
    TableTelefones,
    BtnUsuarios,
    BtnLogout,
} from './styles';

import AdminStyle, { InputController, ButtonSubmit } from '../../styles/admin';

export default class Telefones extends Component {
    state = {
        phones: [],
        newPhone: {},
        loading: false,
    };

    async componentDidMount() {
        const response = await api.get('/phones');
        console.log(response);
    }

    render() {
        const { phones, newPhone, loading } = this.state;
        return (
            <>
                <AdminStyle />
                <Container>
                    <ContainerBotoes>
                        <BtnUsuarios to="/user">Usuarios</BtnUsuarios>
                        <BtnLogout to="/login">Sair</BtnLogout>
                    </ContainerBotoes>
                    <FormTelefone>
                        <h1>Cadastro de Ramais</h1>
                        <InputController>
                            <label>Descrição*</label>
                            <input
                                type="text"
                                name="name"
                                value={newPhone.name}
                                placeholder="Descrição do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Telefone*</label>
                            <input
                                type="text"
                                name="phone"
                                value={newPhone.phone}
                                placeholder="Numero do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Tags*</label>
                            <input
                                type="text"
                                name="tags"
                                value={newPhone.tags}
                                placeholder="Tags separadas com ;"
                            />
                        </InputController>
                        <ButtonSubmit loading={loading ? 1 : 0}>
                            {loading ? (
                                <AiOutlineReload />
                            ) : (
                                <strong>Cadastrar</strong>
                            )}
                        </ButtonSubmit>
                    </FormTelefone>
                    <TableTelefones>
                        {phones.map(phone => (
                            <p>{phone.phone}</p>
                        ))}
                    </TableTelefones>
                </Container>
            </>
        );
    }
}

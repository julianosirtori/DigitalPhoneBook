import React, { Component } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

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
        telefones: [],
        telefone: {},
        loading: false,
    };

    render() {
        const { telefones, telefone, loading } = this.state;
        return (
            <>
                <AdminStyle />
                <Container>
                    <ContainerBotoes>
                        <BtnUsuarios>Usuarios</BtnUsuarios>
                        <BtnLogout>Sair</BtnLogout>
                    </ContainerBotoes>
                    <FormTelefone>
                        <h1>Cadastro de Ramais</h1>
                        <InputController>
                            <label>Descrição*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Descrição do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Telefone*</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Numero do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Telefone*</label>
                            <input
                                type="text"
                                name="tags"
                                placeholder="Tags separadas com ;"
                            />
                        </InputController>
                        <ButtonSubmit disabled={loading} loading={loading}>
                            {loading ? (
                                <AiOutlineReload />
                            ) : (
                                <strong>Cadastrar</strong>
                            )}
                        </ButtonSubmit>
                    </FormTelefone>
                    <TableTelefones />
                </Container>
            </>
        );
    }
}

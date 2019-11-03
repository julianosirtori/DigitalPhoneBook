import React, { Component } from 'react';
import { AiOutlineReload, AiFillEdit, AiFillDelete } from 'react-icons/ai';

import api from '../../services/api';
import { logout } from '../../services/auth';

import {
    Container,
    ContainerBotoes,
    FormTelefone,
    TableTelefones,
    BtnUsuarios,
    BtnLogout,
    ButtonEditar,
    ButtonApagar,
} from './styles';

import AdminStyle, { InputController, ButtonSubmit } from '../../styles/admin';

export default class Telefones extends Component {
    state = {
        phones: [],
        id: '',
        name: '',
        phone: '',
        tags: '',
        loading: false,
    };

    async componentDidMount() {
        this.findAllPhones();
    }

    handleInput = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async () => {
        const { name, phone, tags } = this.state;
        try {
            this.setState({ loading: true });
            await api.post('/phones', { name, phone, tags });
            this.findAllPhones();
            this.setState({
                loading: false,
                name: '',
                id: '',
                phone: '',
                tags: '',
            });
        } catch (erro) {
            console.log(erro);
        }
    };

    handleSubmitEdit = async () => {
        const { name, phone, tags, id } = this.state;
        try {
            this.setState({ loading: true });
            await api.put(`/phones/${id}`, { name, phone, tags });
            this.findAllPhones();
            this.setState({
                loading: false,
                name: '',
                id: '',
                phone: '',
                tags: '',
            });
        } catch (erro) {
            console.log(erro);
        }
    };

    handleButtonEdit = async id => {
        try {
            this.setState({ loading: true });
            const response = await api.get(`/phones/${id}`);
            const { name, phone, tags } = response.data;
            this.setState({ name, phone, id, tags, loading: false });
        } catch (erro) {
            console.log(erro);
        }
    };

    handleButtonDelete = async id => {
        const resposta = window.confirm('Tem certeza que desja Apagar ?');
        if (resposta) {
            try {
                this.setState({ loading: true });
                await api.delete(`/phones/${id}`);
                await this.findAllPhones();
                this.setState({ loading: false });
            } catch (erro) {
                console.log(erro);
            }
        }
    };

    handleButtonSair = () => {
        logout();
        const { history } = this.props;
        history.push('/login');
    };

    async findAllPhones() {
        try {
            const response = await api.get('/phones');
            const { data } = response;
            this.setState({ phones: data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { phones, name, phone, tags, id, loading } = this.state;
        return (
            <>
                <AdminStyle />
                <Container>
                    <ContainerBotoes>
                        <BtnUsuarios to="/user">Usuarios</BtnUsuarios>
                        <BtnLogout onClick={this.handleButtonSair}>
                            Sair
                        </BtnLogout>
                    </ContainerBotoes>
                    <FormTelefone>
                        <h1>Cadastro de Ramais</h1>
                        <input name="id" type="hidden" value={id} />
                        <InputController>
                            <label>Descrição*</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInput}
                                placeholder="Descrição do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Telefone*</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={this.handleInput}
                                value={phone}
                                placeholder="Numero do Telefone"
                            />
                        </InputController>
                        <InputController>
                            <label>Tags*</label>
                            <input
                                type="text"
                                name="tags"
                                onChange={this.handleInput}
                                value={tags}
                                placeholder="Tags separadas com ;"
                            />
                        </InputController>
                        <ButtonSubmit
                            onClick={
                                id === ''
                                    ? this.handleSubmit
                                    : this.handleSubmitEdit
                            }
                            loading={loading ? 1 : 0}
                        >
                            {loading ? (
                                <AiOutlineReload />
                            ) : (
                                <strong>Cadastrar</strong>
                            )}
                        </ButtonSubmit>
                    </FormTelefone>
                    <TableTelefones>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tags</th>
                                <th>Telefone</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {phones.map(phone => (
                                <tr key={phone.id}>
                                    <td>{phone.name}</td>
                                    <td>{phone.tags}</td>
                                    <td>{phone.phone}</td>
                                    <td>
                                        <ButtonEditar
                                            onClick={() =>
                                                this.handleButtonEdit(phone.id)
                                            }
                                        >
                                            <AiFillEdit size={14} />
                                        </ButtonEditar>
                                        <ButtonApagar
                                            onClick={() =>
                                                this.handleButtonDelete(
                                                    phone.id
                                                )
                                            }
                                        >
                                            <AiFillDelete size={14} />
                                        </ButtonApagar>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </TableTelefones>
                </Container>
            </>
        );
    }
}

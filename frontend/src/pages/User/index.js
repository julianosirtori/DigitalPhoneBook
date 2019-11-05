import React, { Component } from 'react';
import {
    AiOutlineReload,
    AiFillEdit,
    AiFillDelete,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from 'react-icons/ai';

import api from '../../services/api';
import { logout } from '../../services/auth';

import { BtnTelefones } from './styles';

import {
    InputController,
    Table,
    ButtonSubmit,
    Container,
    ContainerBotoes,
    BtnLogout,
    ButtonEditar,
    Form,
    ButtonApagar,
    Paginator,
    ButtonNavigationPage,
} from '../../styles/admin';

export default class User extends Component {
    state = {
        users: [],
        id: '',
        name: '',
        page: 1,
        email: '',
        loading: false,
    };

    async componentDidMount() {
        this.findUsers();
    }

    handleSubmit = async () => {
        const { name, email } = this.state;
        try {
            this.setState({ loading: true });
            await api.post('/users', { name, email });
            this.findUsers();
            this.setState({
                loading: false,
                name: '',
                id: '',
                email: '',
            });
        } catch (erro) {
            console.log(erro);
        }
    };

    handleSubmitEdit = async () => {
        const { name, email, id } = this.state;
        try {
            this.setState({ loading: true });
            await api.put(`/users/${id}`, { name, email });
            this.findUsers();
            this.setState({
                loading: false,
                name: '',
                id: '',
                email: '',
            });
        } catch (erro) {
            console.log(erro);
        }
    };

    nextPage = async () => {
        const { page } = this.state;
        this.setState({
            page: page + 1,
        });
        window.scrollTo(0, 0);
        await this.findPhones();
    };

    prevPage = async () => {
        const { page } = this.state;
        this.setState({
            page: page - 1,
        });

        window.scrollTo(0, 0);
        await this.findPhones();
    };

    handleButtonEdit = async id => {
        try {
            this.setState({ loading: true });
            const response = await api.get(`/users/${id}`);
            const { name, email } = response.data;
            this.setState({ name, id, email, loading: false });
        } catch (erro) {
            console.log(erro);
        }
    };

    handleButtonDelete = async id => {
        const resposta = window.confirm('Tem certeza que desja Apagar ?');
        if (resposta) {
            try {
                this.setState({ loading: true });
                await api.delete(`/users/${id}`);
                await this.findUsers();
                this.setState({ loading: false });
            } catch (erro) {
                console.log(erro);
            }
        }
    };

    handleInput = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleButtonSair = () => {
        logout();
        const { history } = this.props;
        history.push('/login');
    };

    findUsers = async () => {
        try {
            const response = await api.get('/users');
            const { data } = response;
            this.setState({ users: data });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { users, name, email, id, page, loading } = this.state;
        return (
            <>
                <Container>
                    <ContainerBotoes>
                        <BtnTelefones to="/telefones">Telefones</BtnTelefones>
                        <BtnLogout onClick={this.handleButtonSair}>
                            Sair
                        </BtnLogout>
                    </ContainerBotoes>
                    <Form>
                        <h1>Cadastro de Usuários</h1>
                        <input name="id" type="hidden" value={id} />
                        <InputController>
                            <label>Nome*</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleInput}
                                placeholder="Nome do usuário"
                            />
                        </InputController>
                        <InputController>
                            <label>Telefone*</label>
                            <input
                                type="email"
                                name="email"
                                onChange={this.handleInput}
                                value={email}
                                placeholder="Email de acesso"
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
                    </Form>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>

                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <ButtonEditar
                                            onClick={() =>
                                                this.handleButtonEdit(user.id)
                                            }
                                        >
                                            <AiFillEdit size={14} />
                                        </ButtonEditar>
                                        <ButtonApagar
                                            onClick={() =>
                                                this.handleButtonDelete(user.id)
                                            }
                                        >
                                            <AiFillDelete size={14} />
                                        </ButtonApagar>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginator>
                        <ButtonNavigationPage onClick={this.prevPage}>
                            <AiOutlineArrowLeft size={16} />
                        </ButtonNavigationPage>
                        <span>Pagina: {page}</span>
                        <ButtonNavigationPage onClick={this.nextPage}>
                            <AiOutlineArrowRight size={16} />
                        </ButtonNavigationPage>
                    </Paginator>
                </Container>
            </>
        );
    }
}

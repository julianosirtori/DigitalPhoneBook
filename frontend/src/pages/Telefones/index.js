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

import { BtnUsuarios, ContainerSerch } from './styles';

import AdminStyle, {
    InputController,
    Table,
    Form,
    ButtonSubmit,
    Container,
    ContainerBotoes,
    BtnLogout,
    ButtonEditar,
    ButtonApagar,
    Paginator,
    ButtonNavigationPage,
} from '../../styles/admin';

export default class Telefones extends Component {
    state = {
        phones: [],
        id: '',
        name: '',
        phone: '',
        tags: '',
        search: '',
        loading: false,
        page: 1,
    };

    async componentDidMount() {
        this.findPhones();
    }

    handleInput = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleInputSearch = event => {
        const { value } = event.target;
        this.setState({ search: value });
        this.findPhones();
    };

    handleSubmit = async () => {
        const { name, phone, tags } = this.state;
        try {
            this.setState({ loading: true });
            await api.post('/phones', { name, phone, tags });
            this.findPhones();
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
            this.findPhones();
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
                await this.findPhones();
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

    async findPhones() {
        const { page, search } = this.state;
        try {
            const response = await api.get('/phones', {
                params: {
                    page,
                    search,
                },
            });
            const { data } = response;
            this.setState({ phones: data });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const {
            phones,
            name,
            phone,
            tags,
            id,
            loading,
            page,
            search,
        } = this.state;
        return (
            <>
                <AdminStyle />
                <Container>
                    <ContainerBotoes>
                        <BtnUsuarios to="/usuarios">Usuarios</BtnUsuarios>
                        <BtnLogout onClick={this.handleButtonSair}>
                            Sair
                        </BtnLogout>
                    </ContainerBotoes>
                    <Form>
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
                    </Form>
                    <ContainerSerch>
                        <InputController>
                            <input
                                type="text"
                                value={search}
                                onChange={this.handleInputSearch}
                                placeholder="Comece a digitar para pesquisar"
                            />
                        </InputController>
                    </ContainerSerch>

                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Tags</th>
                                <th>Telefone</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {phones.map(phon => (
                                <tr key={phon.id}>
                                    <td>{phon.name}</td>
                                    <td>{phon.tags}</td>
                                    <td>{phon.phone}</td>
                                    <td>
                                        <ButtonEditar
                                            onClick={() =>
                                                this.handleButtonEdit(phon.id)
                                            }
                                        >
                                            <AiFillEdit size={14} />
                                        </ButtonEditar>
                                        <ButtonApagar
                                            onClick={() =>
                                                this.handleButtonDelete(phon.id)
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

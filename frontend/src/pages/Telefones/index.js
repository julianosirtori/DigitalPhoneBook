import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
    AiOutlineReload,
    AiFillEdit,
    AiFillDelete,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from 'react-icons/ai';

import api from '../../services/api';

import { ContainerSerch } from './styles';

import {
    InputController,
    Table,
    Form,
    ButtonSubmit,
    Container,
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
            toast.success('Telefone Cadastrado com sucesso!!');
        } catch (erro) {
            console.log(erro);
            toast.error('Ocorreu um erro');
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
            toast.success('Telefone Editado com sucesso!!');
        } catch (erro) {
            console.log(erro);
            toast.error('Ocorreu um erro');
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
            toast.error('Ocorreu um erro');
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
                toast.success('Telefone Apagado com sucesso!!');
            } catch (erro) {
                console.log(erro);
                toast.error('Ocorreu um erro');
            }
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
            const { status } = err.response;
            console.log(err.response);
            if (status === 401) {
                // const { history } = this.props;
                // history.push('/login');
            } else {
                toast.error('Ocorreu um erro');
            }
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
                <Container>
                    <Form>
                        <h1>Telefones</h1>
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
                            <label>
                                Tags (separadas por ; (ponto e virgula))*
                            </label>
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
                            <label>
                                Comece a digitar no campo abaixo para pesquisar
                            </label>
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
                                <th>Descrição</th>
                                <th>Tags</th>
                                <th>Telefone</th>
                                <th>Ações</th>
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

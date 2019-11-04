import React, { Component } from 'react';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

    handleInputSearch = event => {
        const { value } = event.target;
        this.setState({
            search: value,
        });
    };

    render() {
        const { phones, search } = this.state;
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
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                    <ItemPhone>
                        <MdCall size={48} color="#0E4194" />
                        <DescritionPhone>
                            <strong>Juliano Sirtori</strong>
                            <Tags>
                                <span>#informatica</span>
                                <span>#central</span>
                                <span>#qlikview</span>
                            </Tags>
                        </DescritionPhone>
                        <NumberPhone>606</NumberPhone>
                    </ItemPhone>
                </ListPhones>

                <Footer>
                    <Link to="telefones">Administração</Link>
                </Footer>
            </Container>
        );
    }
}

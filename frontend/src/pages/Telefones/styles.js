import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    max-width: 824px;
    margin: 32px auto;
    flex-direction: column;
    align-items: center;
    background: white;
    min-height: 100%;
    border-radius: 6px;
`;
export const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 16px 16px;
    justify-content: flex-end;
`;

export const BtnUsuarios = styled(Link)`
    background: #0e4194;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 4px 13px;
    border-radius: 4px;
    margin-right: 16px;
`;
export const BtnLogout = styled(Link)`
    background: #e30613;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 4px 13px;
    border-radius: 4px;
    margin-right: 16px;
`;

export const FormTelefone = styled.div`
    width: 100%;
    max-width: 632px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 36px;
        color: #0e4194;
        font-weight: bold;
    }
`;
export const TableTelefones = styled.div``;

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
export const BtnLogout = styled.button`
    background: #e30613;
    border: none;
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
export const ButtonEditar = styled.button`
    border: none;
    background: #0e4194;
    color: white;
    margin-right: 16px;
    text-decoration: none;
    font-weight: bold;
    padding: 4px 13px;
    border-radius: 4px;
`;
export const ButtonApagar = styled.button`
    border: none;
    background: #e30613;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 4px 13px;
    border-radius: 4px;
`;
export const TableTelefones = styled.table`
    width: 100%;
    max-width: 680px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
        color: rgba(0, 0, 0, 0.6);
    }

    tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    td,
    th {
        padding: 15px 10px;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        border-radius: 2px;
    }
`;

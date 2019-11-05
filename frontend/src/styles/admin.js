import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

export const Form = styled.div`
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

export const InputController = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    width: 100%;

    label {
        color: #000000;
        font-weight: bold;
    }

    input {
        border-radius: 4px;
        border: 1px solid #c4c4c4;
        padding: 4px;
    }
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const ButtonSubmit = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    margin-top: 32px;
    background: #0e4194;
    color: white;
    font-weight: bold;
    border: none;
    padding: 8px 0;
    text-align: center;
    width: 174px;
    transition: 0.3s background;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}

    &:hover {
        background: ${darken(0.2, '#0e4194')};
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 824px;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    background: white;
    min-height: 100%;
`;

export const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 16px 16px;
    justify-content: flex-end;
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

export const Table = styled.table`
    width: 100%;
    max-width: 680px;

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

export const Paginator = styled.div`
    display: flex;
    width: 100%;
    max-width: 680px;
    flex-direction: row;
    padding: 8px;
    justify-content: space-between;
    margin-top: 16px;

    span {
        font-size: 16px;
        color: #0e4194;
        font-weight: bold;
    }
`;
export const ButtonNavigationPage = styled.button`
    border: none;
    background: #0e4194;
    color: white;
    padding: 5px;

    &:hover {
        cursor: pointer;
    }
`;

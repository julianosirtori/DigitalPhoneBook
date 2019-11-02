import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    min-height: 100%;
`;

export const FormLogin = styled.form`
    margin: 0 auto;
    background: white;
    padding: 34px;
    border-radius: 6px;
    height: 320px;
    width: 440px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 36px;
        color: #0e4194;
    }

    p {
        color: red;
        font-weight: bold;
        margin-top: 15px;
    }
`;

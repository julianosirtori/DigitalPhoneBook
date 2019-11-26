import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    box-shadow: 0 0 4px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;

    img {
        width: 150px;
    }
`;

export const Navigate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
        color: #0e4194;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        margin-right: 16px;
    }

    button {
        color: #e30613;
        background: none;
        border: none;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        margin-right: 16px;

        &:hover {
            cursor: pointer;
        }
    }
`;

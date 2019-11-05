import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import background from '../assets/images/background.png';

export default createGlobalStyle`
  body{
        background: url(${background}) no-repeat fixed;
        background-size: cover;
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

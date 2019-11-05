import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

export const Container = styled.div`
    display: flex;
    max-width: 824px;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    background: white;
    min-height: 100vh;
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 512px;
    padding: 6px;
    margin: 0px auto;
    margin-top: 56px;
    margin-bottom: 8px;
`;

export const ImageLogo = styled.img.attrs({
    src: Logo,
})`
    /* width: 90%; */
    height: 115px;
    margin: 0px auto;
`;
export const InputSearch = styled.input`
    margin-top: 25px;
    padding: 8px 32px;
    height: 44px;
    font-size: 16px;
    border: 0.5px solid #b3b7bc;
    box-shadow: 0px 4px 6px rgba(32, 33, 36, 0.28);
    border-radius: 50px;
`;

export const ListPhones = styled.ul`
    margin: 0 auto;
    width: 720px;
    height: 496px;
    overflow: hidden;
    overflow-y: scroll;
    list-style: none;
    padding-right: 8px;

    /* width */
    ::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 50px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const ItemPhone = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #0e4194;
    padding-bottom: 2px;
    margin-top: 32px;
`;

export const DescritionPhone = styled.div`
    margin: auto 15px auto 15px;
    flex: 1;
    /* width: 100%; */
    strong {
        color: #0e4194;
        font-size: 34px;
        line-height: 40px;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-direction: row;

    span {
        background-color: #e30613;
        border-radius: 4px;
        color: white;
        padding: 2px 4px;
        margin-left: 8px;
        font-size: 12px;
    }
`;

export const NumberPhone = styled.div`
    color: #e30613;
    font-size: 28px;
    font-weight: bold;
    margin: auto 15px auto 15px;
`;

export const Footer = styled.div`
    height: 35px;
    width: 100%;
    /* background: #e3e3e3; */
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    a {
        color: white;
        text-decoration: none;
        font-size: 12px;
        margin: auto 16px;
    }
`;

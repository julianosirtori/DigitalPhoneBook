import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.png';

export default createGlobalStyle`
  body{
        background: url(${background}) no-repeat;
        background-size: cover;
    }
`;

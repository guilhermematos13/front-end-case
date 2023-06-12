import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'sans-serif';

    &:focus {
        outline: none;
    }
 }

 body {
    background-color: ${(props) => props.theme['grayscale-800']};
    
    p {
      margin-bottom: 0;
    }
 }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    html {
        font-family: sans-serif;
        font-size: 24px;
        color: ${(props) => props.theme.font.colors.primary};
    }

    h1 {
        font-size: 1.2rem;
    }
`;

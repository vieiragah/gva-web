import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #777;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #000;
    }
    body, html {
        height: 100%;
        width: 100%;
    }
`;

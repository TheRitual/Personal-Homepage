import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        transition: background 0.5s;
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        overflow-y: scroll;
        padding-bottom: 108px;
        background-color: ${({ theme }) => theme.colors.pageBackground};
    }
`;
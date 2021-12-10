import styled, { css } from "styled-components";
import alpha from "color-alpha";

export const BoxWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    @media(max-width: 700px) {
        justify-content: center;
    }
`;

export const ThemeBox = styled.section`
    background-color: ${alpha("#808080", 0.5)};
    padding: 10px;
    border-radius: 30px;
    height: 52px;
    ${({ pointer }) => pointer && css`cursor: pointer;`}
    @media(max-width: 700px) {
        justify-content: center;
        padding: 5px;
        height: auto;
    }
`
export const SwitchContainer = styled.div`
    padding: 0;
    text-align: right;
    @media(max-width: 700px) {
        text-align: center;
        margin: 0;
    }
`;
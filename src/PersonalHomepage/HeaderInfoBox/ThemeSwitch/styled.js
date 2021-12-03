import styled, { css } from "styled-components";
import alpha from "color-alpha";

export const BoxWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
`;

export const ThemeBox = styled.section`
    background-color: ${alpha("#808080", 0.5)};
    padding: 10px;
    border-radius: 30px;
    height: 52px;
    ${({pointer}) => pointer && css`cursor: pointer;`}
`
export const SwitchContainer = styled.div`
    padding: 0;
    text-align: right;
    margin: 0 0 38px;
`;
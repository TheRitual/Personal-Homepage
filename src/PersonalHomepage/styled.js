import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    padding: 0;
`;

export const Header = styled.header`
    width: 100%;
    max-width: 1216px;
    margin: 115px auto 63px;
    display: grid;
    grid-template-columns: minmax(100px, 398px) auto;
    column-gap: 66px;
    row-gap: 0px;
    @media(max-width: 700px) {
        margin: 0;
        padding: 0;
        grid-template-columns: 50% 50%;
        column-gap: 5px;
    }
`;

export const IconWrapper = styled.div`
    width: fit-content;
    margin: auto;
`;

export const Page = styled.div`
    @media(max-width: 700px) {
        margin: auto;
        width: fit-content;
        padding: 16px;
    }
`;
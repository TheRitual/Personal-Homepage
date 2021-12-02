import styled from "styled-components";

export const PortfolioGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, max(50%));
    column-gap: 32px;
    row-gap: 32px;
    margin-bottom: 120px;
    width: 100%;
`;
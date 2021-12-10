import styled from "styled-components";

export const HeaderWrapper = styled.section`
    @media(max-width: 700px){
        grid-column: span 2;
    }
`;

export const HeaderTitle = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 25px 0;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 22px;
    }
`;

export const HeaderContent = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.tileTextColor};
    max-width: 640px;
    @media(max-width: 700px){
        max-width: auto;
        font-size: 17px;
    }
`;
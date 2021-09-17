import styled from "styled-components";

export const HeaderTitle = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textColor};
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
`;
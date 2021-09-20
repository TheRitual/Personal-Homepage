import styled from "styled-components";

export const LoadingContainer = styled.section`
    width: fit-content;
    height: fit-content;
    margin: 88px auto 140px;
    padding: 0;
`;

export const LoadingInformation = styled.p`
    margin: 0 auto 48px;
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    letter-spacing: 0.05em;
`;

export const LoadingWrapper = styled.div`
    width: 200px;
    margin: auto;
    padding: 0;
`;

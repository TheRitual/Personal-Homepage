import styled from "styled-components";

export const LargeLink = styled.a`
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 24px 0;
    &:hover {
        color: ${({ theme }) => theme.colors.linkColorHover}
    }
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textColor};
`;
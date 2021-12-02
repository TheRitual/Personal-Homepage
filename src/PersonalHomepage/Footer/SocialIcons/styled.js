import styled from "styled-components";

export const IconsWrapper = styled.section`
    margin: 56px 0 109px;

`;

export const SocialLink = styled.a`
    display: inline-block;
    text-decoration: none;
    margin: 0 24px 0 0;
    color: ${({ theme }) => theme.colors.textColor};
    &:hover {
        color: ${({ theme }) => theme.colors.linkColorHover}
    }
`;
import styled from "styled-components";
import { ReactComponent as SocialGH } from "./social_gh.svg";

export const IconGHPrimary = styled(SocialGH)`
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.primary};
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;
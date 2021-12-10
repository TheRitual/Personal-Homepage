import styled from "styled-components";
import { ReactComponent as SocialFB } from "./social_fb.svg";
import { ReactComponent as SocialGH } from "./social_gh.svg";
import { ReactComponent as SocialInsta } from "./social_insta.svg";
import { ReactComponent as SocialLI } from "./social_lin.svg";

export const IconFB = styled(SocialFB)`
    height: 48px;
    width: 48px;
    color: inherit;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const IconGH = styled(SocialGH)`
    height: 48px;
    width: 48px;
    color: inherit;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const IconInsta = styled(SocialInsta)`
    height: 48px;
    width: 48px;
    color: inherit;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const IconLI = styled(SocialLI)`
    height: 48px;
    width: 48px;
    color: inherit;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;
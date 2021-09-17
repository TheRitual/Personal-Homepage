import styled from "styled-components";
import { ReactComponent as BulletIcon } from "../icons/bullet.svg";
import { ReactComponent as Envelope } from "../icons/envelope.svg";
import { ReactComponent as SocialFB } from "../icons/social_fb.svg";
import { ReactComponent as SocialGH } from "../icons/social_gh.svg";
import { ReactComponent as SocialInsta } from "../icons/social_insta.svg";
import { ReactComponent as SocialLI } from "../icons/social_lin.svg";



export const Bullet = styled(BulletIcon)`
    height: 12px;
    padding: 0;
    margin: 6px 16px 0 0;
    color: ${({ theme }) => theme.colors.primary};
`;

export const EnvelopeIcon = styled(Envelope)`
    height: 20px;
    vertical-align: middle;
    margin: 0 18px 0 2px;
`;

export const IconFB = styled(SocialFB)`
    height: 48px;
    width: 48px;
    color: inherit;
`;

export const IconGH = styled(SocialGH)`
    height: 48px;
    width: 48px;
    color: inherit;
`;

export const IconInsta = styled(SocialInsta)`
    height: 48px;
    width: 48px;
    color: inherit;
`;

export const IconLI = styled(SocialLI)`
    height: 48px;
    width: 48px;
    color: inherit;
`;

export const IconGHPrimary = styled(SocialGH)`
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.primary};
`;
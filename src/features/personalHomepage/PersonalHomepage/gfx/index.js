import styled, { keyframes } from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";
import { ReactComponent as LoadingCircle } from "./loading.svg";
import { ReactComponent as Envelope } from "./envelope.svg";
import { ReactComponent as SocialFB } from "./social_fb.svg";
import { ReactComponent as SocialGH } from "./social_gh.svg";
import { ReactComponent as SocialInsta } from "./social_insta.svg";
import { ReactComponent as SocialLI } from "./social_lin.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(LoadingCircle)`
    height: 160px;
    width: 160px;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    animation: ${rotate} 2s linear infinite;
`;

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
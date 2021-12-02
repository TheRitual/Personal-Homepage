import styled from "styled-components";
import { ReactComponent as Envelope } from "./envelope.svg";
import { ReactComponent as SocialGH } from "./social_gh.svg";

export const EnvelopeIcon = styled(Envelope)`
    height: 20px;
    vertical-align: middle;
    margin: 0 18px 0 2px;
`;

export const IconGHPrimary = styled(SocialGH)`
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.primary};
`;
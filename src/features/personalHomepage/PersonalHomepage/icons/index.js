import styled from "styled-components";
import { ReactComponent as BulletIcon } from "../icons/bullet.svg";
import { ReactComponent as Envelope } from "../icons/envelope.svg";

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


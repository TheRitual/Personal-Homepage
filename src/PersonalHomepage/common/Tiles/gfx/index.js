import styled from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet.svg";

export const Bullet = styled(BulletIcon)`
    height: 12px;
    padding: 0;
    margin: 6px 16px 0 0;
    color: ${({ theme }) => theme.colors.primary};
`;
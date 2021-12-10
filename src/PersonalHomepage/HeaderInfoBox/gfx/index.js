import styled from "styled-components";
import { ReactComponent as Envelope } from "./envelope.svg";

export const EnvelopeIcon = styled(Envelope)`
    height: 20px;
    vertical-align: middle;
    margin: 0 18px 0 2px;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        height: 16px;
        margin: 0 14px 0 0;
    }
`;
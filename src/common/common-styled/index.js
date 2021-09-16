import styled from "styled-components";

export const Info = styled.span`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.info};
`;
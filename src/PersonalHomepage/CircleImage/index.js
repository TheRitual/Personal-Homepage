import styled from "styled-components";

const CircleImage = styled.img`
    border-radius: 50%;
    width: 100%;
    margin: 0;
    grid-row: span 2;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin: 12px;
        grid-row: auto;
    }
`;

export default CircleImage;
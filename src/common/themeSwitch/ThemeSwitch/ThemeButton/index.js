import styled from "styled-components";

export const ThemeButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid ${({theme}) => theme.colors.primaryColor};
    background-color: ${({theme}) => theme.colors.tileBackground};
    margin: 5px;
    cursor: pointer;
`;
import styled from "styled-components";

export const ThemeButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({bgcolor}) => {console.log(bgcolor);return bgcolor;}};
    border: 3px solid ${({color}) => color};
    margin: 5px;
    cursor: pointer;
`;
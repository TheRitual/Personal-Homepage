import styled from "styled-components";

const Button = styled.button`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.buttonTextColor};
    padding: 12px 16px;
    background: ${({ theme }) => theme.colors.buttonColor};
    border: 1px solid ${({ theme }) => theme.colors.buttonTextColor};
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        border: 1px solid rgba(209, 213, 218, 0.3);
        box-shadow:
            2px -2px 0px ${({ theme }) => theme.colors.buttonShadow},
            -2px 2px 0px ${({ theme }) => theme.colors.buttonShadow},
            2px 2px 0px ${({ theme }) => theme.colors.buttonShadow},
            -2px -2px 0px ${({ theme }) => theme.colors.buttonShadow};
    }
    & svg {
        height: 20px;
        vertical-align: middle;
        margin: 0 18px 0 2px;
    }
`;

export default Button;
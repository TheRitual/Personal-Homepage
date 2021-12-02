import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingCircle } from "./loading.svg";

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
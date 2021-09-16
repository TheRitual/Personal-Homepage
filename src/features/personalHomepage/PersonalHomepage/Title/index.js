import styled from "styled-components";

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #252525;
`;

export const TitleWrapper = styled.div`
    padding: 0 0 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineDecoration};
    margin-bottom: 32px;
`;

export default Title;
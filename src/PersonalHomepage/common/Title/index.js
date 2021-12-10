import styled from "styled-components";

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.titleColor};
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 18px;
    }
`;

export const TitleCenter = styled(Title)`
    text-align: center;
    margin: 13px auto 8px;
`;

export const TitleWrapper = styled.div`
    padding: 0 0 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lineDecoration};
    margin-bottom: 32px;
`;

export const SubTitle = styled.h4`
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    font-weight: normal;
    margin: 8px auto 24px;
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 17px;
    }
`;

export default Title;
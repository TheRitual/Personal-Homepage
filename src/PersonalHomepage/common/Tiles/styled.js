import styled, { css } from "styled-components";
import alpha from "color-alpha";

export const StyledTile = styled.article`
    ${({ theme }) =>
        css`
            box-shadow: 0px -2px 50px ${alpha(theme.colors.shadowA, 0.1)}, 0px 16px 58px ${alpha(theme.colors.shadowB, 0.3)};
            background: ${theme.colors.tileBackground};
            color: ${theme.colors.tileTextColor};
            border-radius: 4px;
            padding: 32px;
            margin: 72px 0;
        `}
`;

export const StyledBorderedTile = styled(StyledTile)`
    ${({ theme }) =>
        css`
            border: 6px solid ${theme.colors.tileBorder};
            padding: 56px 56px 80px;
            margin: 0;
            &:hover {
            border-color: ${({ theme }) => theme.colors.tileBorderHover};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                padding: 24px;
            }
        `}
`;

export const ColoredTitle = styled.h3`
    ${({ theme }) =>
        css`
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: 0.05em;
            color: ${theme.colors.primary};
            margin-bottom: 24px;
            @media(max-width: ${theme.breakpoints.mobile}) {
                margin-bottom: 16px;
                font-size: 16px;
                line-height: 19px;
            }
        `}
`;

export const Description = styled.p`
    ${({ theme }) =>
        css`
            font-size: 18px;
            line-height: 1.4;
            letter-spacing: 0.05em;
            color: ${theme.colors.info};
            @media(max-width: ${theme.breakpoints.mobile}) {
                font-size: 14px;
                line-height: 17px;
            }
            
    `}
`;

export const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    max-width: 100%;
`;

export const LinkListItem = styled.li`
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin: 8px 0;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const LinkListLink = styled.a`
    ${({ theme }) =>
        css`
            margin-left: 8px;
            text-decoration: none;
            color: ${theme.colors.linkColor};
            &:hover {
                color: ${theme.colors.linkColorHover};
                border-bottom: 1px solid ${theme.colors.linkColorHover};
            }
            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
                font-size: 14px;
                line-height: 17px;
            }
    }
        `
    }
`;

export const GridList = styled.ul`
    list-style: none;
    margin-top: 32px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 16px;
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 16px;
        grid-template-columns: 1fr;
    }
`;

export const GridListItem = styled.li`
    display: flex;
    line-height: 1.4;
`;

export const ListItemText = styled.p`
    font-size: 18px;
    margin: 0;
    padding: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`;
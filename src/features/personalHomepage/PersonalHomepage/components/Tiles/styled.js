import styled from "styled-components"

export const StyledTile = styled.article`
    background: ${({ theme }) => theme.colors.tileBackground};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.colors.shadowA}, 0px 16px 58px ${({ theme }) => theme.colors.shadowB};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.tileTextColor};
    padding: 32px;
    margin: 72px 0;
`;

export const StyledBorderedTile = styled(StyledTile)`
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
    padding: 56px;
    margin: 0;
    &:hover {
        border-color: ${({ theme }) => theme.colors.tileBorderHover};
    }
`;

export const ColoredTitle = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.info};
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
`;

export const LinkListLink = styled.a`
    margin-left: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColor};
    &:hover {
        color: ${({ theme }) => theme.colors.linkColorHover};
        border-bottom: 1px solid ${({ theme }) => theme.colors.linkColorHover};
    }
`;

export const GridList = styled.ul`
    list-style: none;
    margin-top: 32px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
`;

export const GridListItem = styled.li`
    display: flex;
    line-height: 1.4;
`;

export const ListItemText = styled.p`
    font-size: 18px;
    margin: 0;
    padding: 0;
`;
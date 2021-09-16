import styled from "styled-components"

export const Tile = styled.section`
    background: ${({ theme }) => theme.colors.tileBackground};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.colors.shadowA}, 0px 16px 58px ${({ theme }) => theme.colors.shadowB};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.tileTextColor};
    padding: 32px;
    margin: 72px 0;
`;

export const BorderedTile = styled(Tile)`
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
    padding: 56px;
    margin: 0;
    &:hover {
        border-color: ${({ theme }) => theme.colors.tileBorderHover};
    }
`;
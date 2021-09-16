import styled from "styled-components"

const Tile = styled.section`
    background: #FFFFFF;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const BorderedTile = styled(Tile)`
    border: 6px solid rgba(209, 213, 218, 0.3);
`;

export default Tile;
import { BorderedTile } from "../Tiles";
import { PortfolioWrapper } from "./styled";

const links = [
    {
        description: "Demo",
        link: "http://demo.com",
    },
    {
        description: "Code",
        link: "http://code.io",
    },
];

const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
        </PortfolioWrapper>
    );
}

export default Portfolio;
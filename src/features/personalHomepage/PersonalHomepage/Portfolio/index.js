import { IconGHPrimary } from "../icons";
import { IconWrapper } from "../styled";
import { BorderedTile } from "../Tiles";
import { SubTitle, TitleCenter } from "../Title";
import { PortfolioGrid } from "./styled";

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
        <>
            <IconWrapper><IconGHPrimary /></IconWrapper>
            <TitleCenter> Portfolio </TitleCenter>
            <SubTitle> My recent projects </SubTitle>
            <PortfolioGrid>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            </PortfolioGrid>
        </>
    );
}

export default Portfolio;
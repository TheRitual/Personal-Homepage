import { IconGHPrimary } from "../../icons";
import { IconWrapper } from "../../styled";
import { SubTitle, TitleCenter } from "../../components/Title";
import { PortfolioGrid } from "./styled";
import { BorderedTile } from "../../components/Tiles";

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
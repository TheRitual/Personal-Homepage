import { IconGHPrimary } from "../../icons";
import { IconWrapper } from "../../styled";
import { SubTitle, TitleCenter } from "../../components/Title";
import { PortfolioGrid } from "./styled";
import { BorderedTile } from "../../components/Tiles";
import { useSelector } from "react-redux";
import { selectIsProjectsEmpty, selectProjects } from "../../../portfolioSlice";

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const isEmpty = useSelector(selectIsProjectsEmpty);

    return (
        <>
            <IconWrapper><IconGHPrimary /></IconWrapper>
            <TitleCenter> Portfolio </TitleCenter>
            <SubTitle> My recent projects </SubTitle>
            <PortfolioGrid>
                {isEmpty || projects.map((project, index) => (
                    <BorderedTile title={project.title} links={project.links} key={index}> {project.description} </BorderedTile>
                ))}
            </PortfolioGrid>
        </>
    );
}

export default Portfolio;
import { IconGHPrimary } from "../../gfx";
import { IconWrapper } from "../../styled";
import { SubTitle, TitleCenter } from "../../components/Title";
import { PortfolioGrid } from "./styled";
import { BorderedTile } from "../../components/Tiles";
import { useSelector } from "react-redux";
import { selectIsLoading, selectIsProjectsEmpty, selectProjects } from "../../../portfolioSlice";
import LoadingBox from "./LoadingBox";

const Portfolio = () => {
    const projects = useSelector(selectProjects);
    const isEmpty = useSelector(selectIsProjectsEmpty);
    const isLoading = useSelector(selectIsLoading);
    return (
        <>
            <IconWrapper><IconGHPrimary /></IconWrapper>
            <TitleCenter> Portfolio </TitleCenter>
            <SubTitle> My recent projects </SubTitle>
            {isLoading ?
                <LoadingBox />
            :
                <PortfolioGrid>
                    {isEmpty ||
                        projects.map((project, index) => (
                            <BorderedTile title={project.title} links={project.links} key={index}> {project.description} </BorderedTile>
                        ))}
                </PortfolioGrid>
            }
        </>
    );
}

export default Portfolio;
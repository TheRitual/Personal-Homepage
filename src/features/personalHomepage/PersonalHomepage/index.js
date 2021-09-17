import CircleImage from "./CircleImage";
import { Header, IconWrapper, Main } from "./styled";
import HeaderInfoBox from "./HeaderInfoBox";
import { BorderedTile, Tile } from "./Tiles";
import { IconGHPrimary } from "./icons";
import { SubTitle, TitleCenter } from "./Title";


const PersonalHomepage = () => {

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

    const list = [
        "Effective communication",
        "Teamwork",
        "Responsibility",
        "Creativity",
        "Problem-solving",
        "Leadership",
        "Extroversion",
        "People skills",
    ];

    return (
        <>
            <Header>
                <CircleImage src="https://swashvillage.org/storage/img/images_2/timothe-chalamet-biography_11.jpg" />
                <HeaderInfoBox />
            </Header>
            <Main>
                <Tile title="My skillset includes 🛠️" list={list} />
                <Tile title="What I want to learn next 🚀" />
                <IconWrapper><IconGHPrimary /></IconWrapper>
                <TitleCenter> Portfolio </TitleCenter>
                <SubTitle> My recent projects </SubTitle>
                <BorderedTile title="Movie Browser" links={links}> Text </BorderedTile>
            </Main>
        </>
    );
}

export default PersonalHomepage;
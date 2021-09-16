import CircleImage from "./CircleImage";
import { Header, Main } from "./styled";
import HeaderInfoBox from "./HeaderInfoBox";
import { BorderedTile, Tile } from "./Tiles";


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

    return (
        <>
            <Header>
                <CircleImage src="https://swashvillage.org/storage/img/images_2/timothe-chalamet-biography_11.jpg" />
                <HeaderInfoBox />
            </Header>
            <Main>
                <Tile title="My skillset includes 🛠️">Test</Tile>
                <Tile title="What I want to learn next 🚀">Test</Tile>
                <BorderedTile title="Movie Browser" links={links}>
                    Tekst
                </BorderedTile>
            </Main>
        </>
    );
}

export default PersonalHomepage;
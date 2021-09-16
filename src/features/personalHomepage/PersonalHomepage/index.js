import ThemeSwitch from "../../../common/themeSwitch/ThemeSwitch";
import CircleImage from "../CircleImage";
import { Tile, BorderedTile } from "../Tiles";
import { Header, Main } from "./styled";


const PersonalHomepage = () => {
    return (
        <>
            <Header>
                <CircleImage src="https://swashvillage.org/storage/img/images_2/timothe-chalamet-biography_11.jpg" />
                <div>
                    <ThemeSwitch />
                </div>
            </Header>
            <Main>
                <Tile>Test</Tile>
                <BorderedTile>Test2</BorderedTile>
            </Main>
        </>
    );
}

export default PersonalHomepage;
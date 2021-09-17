import CircleImage from "./CircleImage";
import { Header, Main } from "./styled";
import HeaderInfoBox from "./HeaderInfoBox";
import Skills from "./Skills";
import Portfolio from "./Portfolio";


const PersonalHomepage = () => {
    return (
        <>
            <Header>
                <CircleImage src="https://swashvillage.org/storage/img/images_2/timothe-chalamet-biography_11.jpg" />
                <HeaderInfoBox />
            </Header>
            <Main>
                <Skills />
                <Portfolio />
            </Main>
        </>
    );
}

export default PersonalHomepage;
import CircleImage from "./CircleImage";
import { Header, Main, Page } from "./styled";
import HeaderInfoBox from "./HeaderInfoBox";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./portfolioSlice";
import ThemeSwitch from "./ThemeSwitch";
import ProfilePicture from "./gfx/profile_picture.jpg";

const PersonalHomepage = () => {
    const dispatch = useDispatch();
    dispatch(fetchProjects());
    return (
        <Page>
            <Header>
                <CircleImage src={ProfilePicture} />
                <ThemeSwitch />
                <HeaderInfoBox />
            </Header>
            <Main>
                <Skills />
                <Portfolio />
                <Footer />
            </Main>
        </Page>
    );
}

export default PersonalHomepage;
import CircleImage from "./CircleImage";
import { Header, Main } from "./styled";
import HeaderInfoBox from "./HeaderInfoBox";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./portfolioSlice";
import ProfilePicture from "./gfx/profile_picture.jpg";

const PersonalHomepage = () => {
    const dispatch = useDispatch();
    dispatch(fetchProjects());
    return (
        <>
            <Header>
                <CircleImage src={ProfilePicture} />
                <HeaderInfoBox />
            </Header>
            <Main>
                <Skills />
                <Portfolio />
                <Footer />
            </Main>
        </>
    );
}

export default PersonalHomepage;
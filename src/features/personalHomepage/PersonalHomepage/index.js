import CircleImage from "./components/CircleImage";
import { Header, Main } from "./styled";
import HeaderInfoBox from "./sections/HeaderInfoBox";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../portfolioSlice";
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
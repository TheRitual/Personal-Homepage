import CircleImage from "./components/CircleImage";
import { Header, Main } from "./styled";
import HeaderInfoBox from "./sections/HeaderInfoBox";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Footer from "./sections/Footer";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../portfolioSlice";

const PersonalHomepage = () => {
    const dispatch = useDispatch();
    dispatch(fetchProjects());
    return (
        <>
            <Header>
                <CircleImage src="https://swashvillage.org/storage/img/images_2/timothe-chalamet-biography_11.jpg" />
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
import Info from "../../../../../common/components/Info";
import Button from "../../components/Button";
import { EnvelopeIcon } from "../../icons";
import { HeaderContent, HeaderTitle } from "./styled";
import ThemeSwitch from "../../../../../common/themeSwitch/ThemeSwitch";


const HeaderInfoBox = () => {
    return (
        <div>
            <ThemeSwitch />
            <Info>This is</Info>
            <HeaderTitle>Timothée Chalamet</HeaderTitle>
            <HeaderContent>
                👨🏻‍💻 I’m a passionate Actor in love with Dune,currently looking for new job opportunities.
            </HeaderContent>
            <Button as="a" href="mailto:marcin.kawczynski@theritual.eu">
                <EnvelopeIcon />
                Hire Me
            </Button>
        </div>
    );
}

export default HeaderInfoBox;
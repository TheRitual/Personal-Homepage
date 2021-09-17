import { Info } from "../../../../common/common-styled";
import ThemeSwitch from "../../../../common/themeSwitch/ThemeSwitch";
import Button from "../Button";
import { EnvelopeIcon } from "../icons";
import { HeaderContent, HeaderTitle } from "./styled";


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
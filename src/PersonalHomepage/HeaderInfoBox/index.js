import Info from "../common/Info";
import Button from "../common/Button";
import { EnvelopeIcon } from "./gfx";
import { HeaderContent, HeaderTitle } from "./styled";
import ThemeSwitch from "./ThemeSwitch";


const HeaderInfoBox = () => {
    return (
        <div>
            <ThemeSwitch />
            <Info>This is</Info>
            <HeaderTitle>Marcin Kawczyński</HeaderTitle>
            <HeaderContent>
            🧑‍💻 Passionate Junior Front-End Developer, coding in React.js/JavaScript. Currently looking for new job opportunities.
            </HeaderContent>
            <Button as="a" href="mailto:marcin.kawczynski@theritual.eu">
                <EnvelopeIcon />
                Hire Me
            </Button>
        </div>
    );
}

export default HeaderInfoBox;
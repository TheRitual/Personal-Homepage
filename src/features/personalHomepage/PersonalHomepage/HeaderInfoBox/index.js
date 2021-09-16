import { Info } from "../../../../common/common-styled";
import ThemeSwitch from "../../../../common/themeSwitch/ThemeSwitch";
import { HeaderContainer } from "./styled";

const HeaderInfoBox = () => {
    return (
        <HeaderContainer>
            <ThemeSwitch />
            <Info>This is</Info>
        </HeaderContainer>
    );
}

export default HeaderInfoBox;
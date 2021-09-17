import { ThemeButton } from "./ThemeButton";
import { withTheme } from "styled-components";
import { SwitchContainer } from "./styled";
import Info from "../../components/Info";

const ThemeSwitch = (props) => {
    return (
        <SwitchContainer>
            <Info>
                Change Theme:
            </Info>
            <ThemeButton />
            <Info>
                {`${props.theme.colors.themeShade}/${props.theme.colors.themeColor}`}
            </Info>
        </SwitchContainer>
    );
}

export default withTheme(ThemeSwitch);
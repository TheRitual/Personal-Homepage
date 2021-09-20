import { ThemeButton } from "./ThemeButton";
import { withTheme } from "styled-components";
import { SwitchContainer } from "./styled";
import Info from "../../components/Info";
import { useDispatch } from "react-redux";
import { changeShade, selectShade } from "../themeSlice";
import { useSelector } from "react-redux";

const ThemeSwitch = (props) => {

    const dispatch = useDispatch();
    const shade = useSelector(selectShade);
    const changedShade = shade === "light" ? "dark" : "light";

    return (
        <SwitchContainer>
            <Info>
                Change Theme:
            </Info>
            <ThemeButton onClick={() => dispatch(changeShade(changedShade))} />
            <Info>
                {`${props.theme.colors.themeShade}/${props.theme.colors.themeColor}`}
            </Info>
        </SwitchContainer>
    );
}

export default withTheme(ThemeSwitch);
import { ThemeButton } from "./SwitchBox/ThemeButton";
import { withTheme } from "styled-components";
import { BoxWrapper, SwitchContainer, ThemeBox } from "./styled";
import Info from "../../common/Info";
import SwitchBox from "./SwitchBox";
import { useSelector } from "react-redux";
import { selectColor, selectShade, selectThemeBoxVisible, setThemeBoxVisibility } from "./themeSlice";
import { useDispatch } from "react-redux";

const ThemeSwitch = (props) => {
    const dispatch = useDispatch();
    const isThemeBoxVisible = useSelector(selectThemeBoxVisible);
    const shade = useSelector(selectShade);
    const color = useSelector(selectColor);

    return (
        <SwitchContainer>
            {isThemeBoxVisible ?
                <SwitchBox />
                :
                <BoxWrapper>
                    <ThemeBox onClick={() => dispatch(setThemeBoxVisibility(true))} pointer>
                        <Info>
                            Change Theme:
                        </Info>
                        <ThemeButton color={props.theme.colors.primary} bgcolor={props.theme.colors.tileBackground} />
                        <Info>
                            {shade}/{color}
                        </Info>
                    </ThemeBox>
                </BoxWrapper>}
        </SwitchContainer>
    );
}

export default withTheme(ThemeSwitch);
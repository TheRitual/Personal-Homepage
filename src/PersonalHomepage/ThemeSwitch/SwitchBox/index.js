import { useDispatch } from "react-redux";
import { withTheme } from "styled-components";
import Info from "../../common/Info";
import { changeShade, changeColor, setThemeBoxVisibility } from "../themeSlice";
import { BoxWrapper, ThemeBox } from "../styled";
import { ThemeButton } from "./ThemeButton";

const SwitchBox = (props) => {
    const dispatch = useDispatch();

    const setColor = (changedColor) => {
        dispatch(changeColor(changedColor));
        dispatch(setThemeBoxVisibility(false));
    }

    const setShade = (changedShade) => {
        dispatch(changeShade(changedShade));
        dispatch(setThemeBoxVisibility(false));
    }

    return (
        <BoxWrapper>
            <ThemeBox>
            <Info>Shade:</Info>        
                {props.theme.themes.shades.map(shade => 
                    <ThemeButton color={props.theme.colors.primary} bgcolor={shade.color} onClick={() => setShade(shade.name)} />
                )}
                <Info>Color:</Info>        
                {props.theme.themes.colors.map(color => 
                    <ThemeButton bgcolor={props.theme.colors.tileBackground} color={color.color} onClick={() => setColor(color.name)} />
                )}
            </ThemeBox>
        </BoxWrapper>
    );
}

export default withTheme(SwitchBox);
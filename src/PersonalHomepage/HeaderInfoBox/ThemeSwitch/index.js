import { ThemeButton } from "./ThemeButton";
import { withTheme } from "styled-components";
import { SwitchContainer } from "./styled";
import Info from "../../common/Info";
import { useDispatch } from "react-redux";
import { changeShade, selectShade } from "./themeSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import SwitchBox from "./SwitchBox";

const ThemeSwitch = (props) => {
    const dispatch = useDispatch();
    const [isThemeBoxVisible, setIsThemeBoxVisible] = useState(false);
    const shade = useSelector(selectShade);
    const changedShade = shade === "light" ? "dark" : "light";

    const changeTheme = (changedShade) => {
        dispatch(changeShade(changedShade));
        setIsThemeBoxVisible(false);
    }

    return (
        <SwitchContainer>
            {isThemeBoxVisible ? 
            <SwitchBox>
                <ThemeButton onClick={() => changeTheme(changedShade)} />
            </SwitchBox>
             :
            <div>
                <Info>
                    Change Theme:
                </Info>
                <ThemeButton onClick={() => setIsThemeBoxVisible(true)} />
                <Info>
                    {`${props.theme.colors.themeShade}/${props.theme.colors.themeColor}`}
                </Info>
            </div>}
        </SwitchContainer>
    );
}

export default withTheme(ThemeSwitch);
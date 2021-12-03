import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import PersonalHomepage from "../PersonalHomepage";
import { GlobalStyle } from "../core/globalStyles";
import themeConstructor from "../core/themes";
import { useSelector } from "react-redux";
import { selectColor, selectShade } from "../PersonalHomepage/HeaderInfoBox/ThemeSwitch/themeSlice";

const App = () => {
  const shade = useSelector(selectShade);
  const color = useSelector(selectColor);

  const selectedTheme = themeConstructor(shade, color);

  return (
    <ThemeProvider theme={selectedTheme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;

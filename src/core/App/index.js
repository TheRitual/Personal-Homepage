import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { selectColor, selectShade } from "../../common/themeSwitch/themeSlice";
import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import themeConstructor from "../../utils/themes";
import { GlobalStyle } from "./globalStyles";

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

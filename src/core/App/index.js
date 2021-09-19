import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import themeConstructor from "../../utils/themes";
import { GlobalStyle } from "./globalStyles";

const selectedTheme = themeConstructor("light", "blue");

const App = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;

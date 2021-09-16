import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import themeConstructor from "../../utils/themes";
import { GlobalStyle } from "../globalStyles";

const selectedTheme = themeConstructor();

const App = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

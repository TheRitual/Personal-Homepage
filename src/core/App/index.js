import { ThemeProvider } from "styled-components";
import themeConstructor from "../../utils/themes";
import { GlobalStyle } from "../globalStyles";

const selectedTheme = themeConstructor();

const App = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

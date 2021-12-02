import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import PersonalHomepage from "../PersonalHomepage";
import { GlobalStyle } from "../core/globalStyles";
import themeConstructor from "../core/themes";

const App = () => {

  const selectedTheme = themeConstructor("dark","blue");

  return (
    <ThemeProvider theme={selectedTheme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;

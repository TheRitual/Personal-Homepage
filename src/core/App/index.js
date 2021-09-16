import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyles";

const selectedTheme = "default";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

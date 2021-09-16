import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Tile, BorderedTile } from "../../features/personalHomepage/Tiles";
import themeConstructor from "../../utils/themes";
import { GlobalStyle } from "../globalStyles";
import { Main } from "./styled";

const selectedTheme = themeConstructor("light", "blue");

const App = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <Normalize />
      <GlobalStyle />
      <Main>
        <Tile>Test</Tile>
        <BorderedTile>Test2</BorderedTile>
      </Main>
    </ThemeProvider>
  );
}

export default App;

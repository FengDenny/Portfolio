import { HashRouter as Router, useRoutes } from "react-router-dom";
import { GlobalStyles, Container } from "./styled-components/globalStyled";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "./styled-components/styled";
import Home from "./pages/Home/Home";
import Navbar from "./utility/Navbar/Navbar";
import { theme } from "./styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

function App() {
  let element = useRoutes([{ path: "/", element: <Home /> }]);

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <GlobalStyles />
      <Container>
        <ThemeProvider theme={theme}>
          <Navbar />
          {element}
        </ThemeProvider>
      </Container>
    </ModalProvider>
  );
}

export default App;

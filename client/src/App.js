import { HashRouter as Router, useRoutes } from "react-router-dom";
import { GlobalStyles, Container } from "./styled-components/globalStyled";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "./styled-components/styled";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <GlobalStyles />
      <Container>
        <Navbar />
        {element}
        <Footer />
      </Container>
    </ModalProvider>
  );
}

export default App;

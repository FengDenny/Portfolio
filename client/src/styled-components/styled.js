import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

// Modal
export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

// Main
export const Main = styled.main`
  height: ${(props) => props.theme.height};
  grid-area: main;
  padding: 0.25rem;
`;

// Navbar
export const NavbarContainer = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.theme.justifyContent};
  padding: 0.25rem;
  margin-top: 1rem;
`;

export const NavbarLogo = styled.img`
  width: auto;
  height: 30px;
`;

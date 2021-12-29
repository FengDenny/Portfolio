import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";
import { MediaQueries } from "./MediaQueries.styled";
import { motion } from "framer-motion";

// Modal
export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

// Main
export const Main = styled.main`
  position: relative;
  grid-area: main;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 0;
`;
// Content
export const ProjectContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  position: relative;
  grid-area: content;

  ${MediaQueries("mobileL")`
    margin-top:38px;
  }
   `}

  ${MediaQueries("mobileM")`
    margin-top:127px;
  }
   `}
`;

// Navbar
export const Nav = styled.nav`
  position: relative;
  ${MediaQueries("laptop")`
  right:40px;
  top:30px;
  display: flex;
flex-direction: column;
`}
`;
export const NavDesktop = styled.ul`
  position: relative;
  display: flex;
  ${MediaQueries("laptop")`
    display:none;
`}
`;

export const NavbarContainer = styled.nav`
  position: relative;
  grid-area: nav;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.theme.justifyContent};
  padding: 0.25rem;
  margin-top: 1rem;
  height: 50px;
`;

export const NavbarLogo = styled.img`
  width: auto;
  height: 64px;
  cursor: pointer;
`;
export const NavLink = styled.a`
  position: relative;
  font-size: ${(props) => props.theme.fontSizeXSM};
  color: ${(props) => props.theme.primaryColor};
  font-weight: ${(props) => props.theme.fontWeight};
  padding: 1rem;
  top: 5px;
  :hover {
    text-decoration: underline;
    color: var(--secondary-color);
  }
  :active {
    text-decoration: underline;
  }
`;

// Footer
export const FooterContainer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  background: var(--bg-color);

  .footer-ul {
    right: 8px;
    position: relative;
    margin-top: 5px;
  }
`;

// Hambuger
export const StyledBurger = styled(motion.button)`
  position: absolute;
  top: 2%;
  right: 2rem;
  display: none;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: "all 1s";
      background: var(--primary-color);
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      transition: "all 1s";
      background: var(--primary-color);
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transition: "all 1s";
      background: var(--primary-color);
    }
  }
  ${MediaQueries("laptop")`
  display: flex;
  flex-direction: column;
`}
`;
export const StyledMenu = styled(motion.div)``;

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
  height: 45%;

  ${MediaQueries("laptop")`
  height: 50%;
`};
`;

// About
export const AboutSection = styled(motion.section)`
  position: relative;
  grid-area: about;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props) => props.theme.marginLeftSM};

  ${MediaQueries("laptop")`
  margin:auto !important;
`};
`;

export const AboutContent = styled(motion.div)`
  margin-top: ${(props) => props.theme.marginTop};
  .about-card {
    width: 42rem;
    height: 20rem;
    border-radius: 10px;
    background: var(--primary-color);
    overflow: hidden;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    display: flex;
    flex-direction: column;

    .underline {
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--white-color);
    }
    nav {
      background: var(--primary-color);
      padding: 5px 5px 0;
      height: 44px;
    }
    main {
      display: flex;
      justify-content: flex-start;
      margin-left: 1rem;
      padding: 10px;
      font-size: var(--font-size-md);
      color: var(--white-color);
      flex-grow: 1;
      user-select: none;
    }

    ul {
      display: flex;
    }

    li {
      padding: 10px 15px;
      position: relative;
      background: var(--primary-color);
      color: var(--white-color);
      cursor: pointer;
      height: 3rem;
      display: flex;
      align-items: center;
      flex: 1;
      position: relative;
      user-select: none;
      font-weight: bold;
    }
    span {
      font-weight: normal;
      font-size: 14px;
      color: var(--secondary-color);
    }
  }
  ${MediaQueries("laptop")`
  .about-card {
    width:34rem;
    margin:auto;
    position: relative;
    left: 0.5rem;
  }

`};

  ${MediaQueries("tablet")`
  .about-card {
    width:31rem;
    margin:auto;
    position: relative;
    left: 0.5rem;
  }
`};

  ${MediaQueries("mobileL")`
  .about-card {
    width: 23rem;
    margin-right: 46px;
  }
`};
`;

// Content
export const ProjectContent = styled(motion.section)`
  display: flex;
  flex-direction: column;
  position: relative;
  grid-area: project;

  // ${MediaQueries("mobileL")`
  //   margin-top:38px;
  // }
  //  `}

  ${MediaQueries("mobileM")`
    margin-top:127px;

  }
   `}
`;

export const TechnicalContent = styled(motion.section)`
  grid-area: technical;
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

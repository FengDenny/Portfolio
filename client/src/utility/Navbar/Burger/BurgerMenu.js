import React from "react";
import { ButtonPrimary } from "../../../styled-components/globalStyled";
import {
  NavLink,
  StyledMenu,
  Nav,
  NavLI,
  NavDesktop,
} from "../../../styled-components/styled";
import ResumePDF from "../../../data/Denny Feng's Resume.pdf";
import { AnimatePresence } from "framer-motion";
export default function BurgerMenu({ open = false, closeNavMenu }) {
  const NavLinks = () => {
    return (
      <>
        <NavLI>
          <NavLink href='/#about'>About</NavLink>
        </NavLI>
        <NavLI>
          <NavLink href='/#portfolio'>Portfolio</NavLink>
        </NavLI>
        <NavLI>
          <NavLink href='/#services'>Services</NavLink>
        </NavLI>
        <NavLI>
          <NavLink href='/#contact'>Contact</NavLink>
        </NavLI>

        <ButtonPrimary
          onClick={() =>
            window.open(ResumePDF, "_blank", "noopener", "noreferrer")
          }
        >
          Resume
        </ButtonPrimary>
      </>
    );
  };

  return (
    <AnimatePresence>
      {open ? (
        <StyledMenu
          initial={{ x: "100%" }}
          animate={{
            x: 0,
          }}
          exit={{
            x: "100%",
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          <Nav onClick={() => closeNavMenu()}>
            <NavLinks />
          </Nav>
        </StyledMenu>
      ) : (
        <NavDesktop>
          <NavLinks />
        </NavDesktop>
      )}
    </AnimatePresence>
  );
}

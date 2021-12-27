import React from "react";
import { ButtonPrimary } from "../../../styled-components/globalStyled";
import {
  NavLink,
  StyledMenu,
  Nav,
  NavDesktop,
} from "../../../styled-components/styled";
import ResumePDF from "../../../data/Denny Resume.pdf";
import { AnimatePresence } from "framer-motion";
export default function BurgerMenu({ open = false, closeNavMenu }) {
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
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Contact</NavLink>
            <ButtonPrimary
              onClick={() =>
                window.open(ResumePDF, "_blank", "noopener", "noreferrer")
              }
            >
              Resume
            </ButtonPrimary>
          </Nav>
        </StyledMenu>
      ) : (
        <NavDesktop>
          <NavLink href='#'>About</NavLink>
          <NavLink href='#'>Contact</NavLink>
          <ButtonPrimary
            onClick={() =>
              window.open(ResumePDF, "_blank", "noopener", "noreferrer")
            }
          >
            Resume
          </ButtonPrimary>
        </NavDesktop>
      )}
    </AnimatePresence>
  );
}

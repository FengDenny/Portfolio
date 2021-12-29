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
            <li>
              <NavLink href='about'>About</NavLink>
            </li>
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
          <li>
            <NavLink href='/#/about'>About</NavLink>
          </li>

          <li>
            <NavLink href='#'>Contact</NavLink>
          </li>

          <li>
            <ButtonPrimary
              onClick={() =>
                window.open(ResumePDF, "_blank", "noopener", "noreferrer")
              }
            >
              Resume
            </ButtonPrimary>
          </li>
        </NavDesktop>
      )}
    </AnimatePresence>
  );
}

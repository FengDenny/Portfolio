import React from "react";
import { ButtonPrimary } from "../../../styled-components/globalStyled";
import { NavLink, StyledMenu, Nav } from "../../../styled-components/styled";
import ResumePDF from "../../../data/Denny Resume.pdf";
export default function BurgerMenu({ open }) {
  return (
    <StyledMenu open={open}>
      <Nav>
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
  );
}

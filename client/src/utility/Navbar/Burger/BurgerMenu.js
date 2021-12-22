import React from "react";
import { ButtonPrimary } from "../../../styled-components/globalStyled";
import { NavLink, StyledMenu, Nav } from "../../../styled-components/styled";

export default function BurgerMenu({ open }) {
  return (
    <StyledMenu open={open}>
      <Nav>
        <NavLink href='#'>About</NavLink>
        <NavLink href='#'>Contact</NavLink>
        <ButtonPrimary>Resume</ButtonPrimary>
      </Nav>
    </StyledMenu>
  );
}

import React from "react";
import { StyledBurger } from "../../../styled-components/styled";

export default function NavBurger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

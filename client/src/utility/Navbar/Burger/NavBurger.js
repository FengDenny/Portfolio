import React from "react";
import { StyledBurger } from "../../../styled-components/styled";

export default function NavBurger({ open, setOpen }) {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen((open) => !open)}
      animate={{
        scale: open ? 0.8 : 1,
        opacity: open ? 0.5 : 1,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

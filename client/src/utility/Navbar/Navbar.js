import React, { useEffect, useState, useRef } from "react";
import { theme } from "../../styled-components/globalStyled";
import { NavbarLogo, NavbarContainer } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import BurgerMenu from "./Burger/BurgerMenu";
import NavBurger from "./Burger/NavBurger";
import NavLogo from "../../images/logos/logo_port.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  // Nav Burger
  const [open, setOpen] = useState(false);
  const node = useRef();

  const closeNavMenu = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer ref={node}>
        <div className='nav-brand'>
          <NavbarLogo src={NavLogo} alt='DF' onClick={() => navigate("/#")} />
        </div>
        <NavBurger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} closeNavMenu={closeNavMenu} />
      </NavbarContainer>
    </ThemeProvider>
  );
}

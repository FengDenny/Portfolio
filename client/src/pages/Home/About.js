import React from "react";
import {
  theme,
  MobileContainer,
  HRLine,
  H2,
} from "../../styled-components/globalStyled";
import {
  FooterContainer,
  NavLink,
  AboutSection,
} from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import AboutLayout from "../../components/About/AboutLayout";
import { about } from "../../data/about";
export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <AboutSection theme={{ marginLeftSM: "5rem" }} id='about'>
        <MobileContainer mobile={"true"}>
          <H2>About Me</H2>
          <HRLine theme={{ width: "139px" }} />
        </MobileContainer>

        {about.map((about, id) => (
          <AboutLayout about={about} key={id} />
        ))}
      </AboutSection>
    </ThemeProvider>
  );
}

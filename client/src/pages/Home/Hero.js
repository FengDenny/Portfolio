import React from "react";
import { Main } from "../../styled-components/styled";
import {
  theme,
  HeroH1,
  DisplayFlex,
  DisplayFlexRow,
  Paragraph,
  Span,
  HeroLink,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <DisplayFlex>
          <HeroH1>Hi! I'm Denny Feng.</HeroH1>
          <Paragraph>
            A Software Engineer utilizing <Span>React</Span> to build{" "}
            <Span>UX</Span>/<Span>UI</Span>.
          </Paragraph>
          <DisplayFlexRow>
            <HeroLink href='https://github.com/FengDenny'>
              <FaGithub />
            </HeroLink>
            <HeroLink href='https://www.linkedin.com/in/denny-feng/'>
              <FaLinkedin />
            </HeroLink>
          </DisplayFlexRow>
        </DisplayFlex>
      </Main>
    </ThemeProvider>
  );
}

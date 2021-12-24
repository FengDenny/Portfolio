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
  PositionBottomRelative,
  HeroCardContainer,
  HeroCard,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cardVariants } from "../../components/Variants/Variants";

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <PositionBottomRelative>
          <DisplayFlex>
            <HeroCardContainer
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.8 }}
            >
              <HeroCard variants={cardVariants}>
                <HeroH1>Hi! I'm Denny Feng.</HeroH1>
                <Paragraph>
                  A Software Engineer utilizing <Span>React</Span> to build{" "}
                  <Span>UX</Span>/<Span>UI</Span>.
                </Paragraph>
                <DisplayFlexRow>
                  <HeroLink
                    href='https://github.com/FengDenny'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub />
                  </HeroLink>
                  <HeroLink
                    href='https://www.linkedin.com/in/denny-feng/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaLinkedin />
                  </HeroLink>
                </DisplayFlexRow>
              </HeroCard>
            </HeroCardContainer>
          </DisplayFlex>
        </PositionBottomRelative>
      </Main>
    </ThemeProvider>
  );
}

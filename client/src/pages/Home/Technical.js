import React from "react";
import { TechnicalContent } from "../../styled-components/styled";
import {
  H2,
  theme,
  TechnicalContainer,
  ParagraphSM,
  Span,
  Circles,
  GridContainer,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import Circle from "../../components/Technical/layout";
import { technical } from "../../data/technical";

export default function Technical() {
  return (
    <ThemeProvider theme={theme}>
      <TechnicalContent>
        <TechnicalContainer>
          <H2
            theme={{
              fontSizeMD: "var(--font-size-lg)",
              primaryColor: "var(--primary-color)",
            }}
            header
          >
            Developing websites. Using the power of <Span>React</Span>.
          </H2>
          <ParagraphSM
            theme={{
              primaryColor: "var(--primary-color)",
              fontWeight: "200",
              fontSizeMD: "var(--font-size-sm)",
              marginRight: "16rem",
            }}
            pmobile
          >
            I develop and design websites that provides scalability, user
            experiences, and great user interfaces.{" "}
          </ParagraphSM>
          <GridContainer>
            {technical.map((technical, id) => (
              <Circle technical={technical} key={id} />
            ))}
          </GridContainer>
        </TechnicalContainer>
      </TechnicalContent>
    </ThemeProvider>
  );
}

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
import TechnicalLayout from "../../components/Technical/layout";
import { technical, technicalHeader } from "../../data/technical";

export default function Technical() {
  return (
    <ThemeProvider theme={theme}>
      <TechnicalContent id='services'>
        {" "}
        {technicalHeader &&
          technicalHeader.map((item) => {
            const { id, title, span, description } = item;

            return (
              <>
                {" "}
                <TechnicalContainer key={id}>
                  <H2
                    theme={{
                      fontSizeMD: "var(--font-size-lg)",
                      primaryColor: "var(--primary-color)",
                    }}
                    header
                  >
                    {title}
                    <Span>{span}</Span>.
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
                    {description}
                  </ParagraphSM>

                  <GridContainer>
                    {technical.map((technical, id) => (
                      <TechnicalLayout technical={technical} key={id} />
                    ))}
                  </GridContainer>
                </TechnicalContainer>
              </>
            );
          })}
      </TechnicalContent>
    </ThemeProvider>
  );
}

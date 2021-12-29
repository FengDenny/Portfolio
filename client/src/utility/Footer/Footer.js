import React from "react";
import {
  theme,
  DisplayFlexCenter,
  GorditasH2,
  Paragraph,
  DisplayFlexRow,
} from "../../styled-components/globalStyled";
import { FooterContainer, NavLink } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import ResumePDF from "../../data/Denny Resume.pdf";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <DisplayFlexCenter>
        <FooterContainer>
          <div>
            <GorditasH2
              theme={{
                marginLeft: "var(--margin-left-5)",
                fontSizeMD: "var(--font-size-md)",
                primaryColor: "var(--primary-color)",
              }}
            >
              © 2021 Denny Feng
            </GorditasH2>
            <Paragraph theme={{ fontSizeMD: "var(--font-size-sm)" }}>
              Made with passion and a warm cup of coffee.
            </Paragraph>
            <ul className='footer-ul'>
              <DisplayFlexRow>
                <li>
                  <NavLink
                    href='/#/about'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href='#'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href={ResumePDF}
                    target='_blank'
                    rel='noreferrer noopener'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href='https://icons8.com'
                    target='_blank'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    Icons8
                  </NavLink>
                </li>
              </DisplayFlexRow>
            </ul>
          </div>
        </FooterContainer>
      </DisplayFlexCenter>
    </ThemeProvider>
  );
}

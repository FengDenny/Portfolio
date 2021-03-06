import React from "react";
import {
  theme,
  DisplayFlexStart,
  GorditasH2,
  Paragraph,
  DisplayFlexRow,
} from "../../styled-components/globalStyled";
import { FooterContainer, NavLink } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import ResumePDF from "../../data/Denny Feng's Resume.pdf";

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <DisplayFlexStart mobile>
        <FooterContainer>
          <div>
            <GorditasH2
              theme={{
                fontSizeMD: "var(--font-size-md)",
                primaryColor: "var(--primary-color)",
              }}
            >
              © 2021 Denny Feng
            </GorditasH2>
            <Paragraph
              theme={{
                fontSizeMD: "var(--font-size-sm)",
                marginLeftSM: "0.1rem",
              }}
            >
              Made with passion and a warm cup of coffee.
            </Paragraph>
            <ul className='footer-ul'>
              <DisplayFlexRow>
                <li>
                  <NavLink
                    href='/#about'
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
                    href='/#portfolio'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href='/#services'
                    theme={{
                      fontWeight: "200",
                      primaryColor: "var(--primary-color)",
                      fontSizeXSM: "var(--font-size-sm)",
                    }}
                  >
                    Services
                  </NavLink>
                </li>
              </DisplayFlexRow>
              <DisplayFlexRow>
                <li>
                  <NavLink
                    href='/#contact'
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
      </DisplayFlexStart>
    </ThemeProvider>
  );
}

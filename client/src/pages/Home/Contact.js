import React from "react";
import { ContactSection } from "../../styled-components/styled";
import { HRLine, H2, theme } from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import ContactLayout from "../../components/Contact/ContactLayout";
import {
  cardVariants,
  rotateVariants,
} from "../../components/Variants/Variants";
import { motion } from "framer-motion";
import { contact } from "../../data/contact";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <ContactSection theme={{ marginLeftSM: "5rem" }} id='about'>
        {contact.map((contact, index) => (
          <ContactLayout contact={contact} key={index} />
        ))}
      </ContactSection>
    </ThemeProvider>
  );
}

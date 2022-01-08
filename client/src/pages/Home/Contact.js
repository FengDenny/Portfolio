import React, { useState, useEffect, useRef } from "react";
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
import { env } from "../../data/api";
import {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserDescription,
} from "../../redux/actions/formAction";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
export default function Contact() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const form = useRef();
  const dispatch = useDispatch();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      env.service_id,
      env.template_id,
      form.current,
      env.user_id
    );
    dispatch(setUserFirstName(first));
    dispatch(setUserLastName(last));
    dispatch(setUserEmail(email));
    dispatch(setUserDescription(projectDescription));
  };
  return (
    <ThemeProvider theme={theme}>
      <ContactSection theme={{ marginLeftSM: "5rem" }} id='contact'>
        {contact.map((contact, index) => (
          <ContactLayout
            contact={contact}
            key={index}
            handleSend={handleSend}
            first={first}
            last={last}
            email={email}
            projectDescription={projectDescription}
            setFirst={setFirst}
            setLast={setLast}
            setEmail={setEmail}
            setProjectDescription={setProjectDescription}
            form={form}
          />
        ))}
      </ContactSection>
    </ThemeProvider>
  );
}

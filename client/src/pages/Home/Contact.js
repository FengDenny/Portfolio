import React, { useState, useEffect, useRef } from "react";
import { ContactSection } from "../../styled-components/styled";
import { HRLine, H2, theme } from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import ContactLayout from "../../components/Contact/ContactLayout";
import { contact } from "../../data/contact";
import { env } from "../../data/api";
import {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserDescription,
  setUserSubmit,
} from "../../redux/actions/formAction";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import {
  emailValidation,
  nameValidation,
  textAreaValidation,
} from "../../components/FormValidation/validation";
export default function Contact() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const formRef = useRef();
  const dispatch = useDispatch();
  const toggleID = [
    "First Name",
    "Last Name",
    "Email Address",
    "Project Description",
  ];

  useEffect(() => {
    first &&
      nameValidation(first, "First name", "First Name", setFirstNameError);
    last && nameValidation(last, "Last name", "Last Name", setLastNameError);
    email && emailValidation(email, "Email address", setEmailError);
    projectDescription &&
      textAreaValidation(
        projectDescription,
        "Project description",
        setDescriptionError
      );
  }, [first, last, email, projectDescription]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(env.service_id, env.template_id, formRef.current, env.user_id)
      .then(() => {
        dispatch(setUserFirstName(first));
        dispatch(setUserLastName(last));
        dispatch(setUserEmail(email));
        dispatch(setUserDescription(projectDescription));
        dispatch(setUserSubmit(true));
        setFirst(" ");
        setLast(" ");
        setEmail(" ");
        setProjectDescription(" ");
        toggleID.map((id) =>
          document.getElementById(id).classList.remove("green")
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
            formRef={formRef}
            firstNameError={firstNameError}
            lastNameError={lastNameError}
            emailError={emailError}
            descriptionError={descriptionError}
          />
        ))}
      </ContactSection>
    </ThemeProvider>
  );
}

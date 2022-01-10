import React, { useEffect } from "react";
import { ContactContent } from "../../styled-components/styled";
import {
  H2,
  theme,
  ParagraphSM,
  Card,
  JustifyContent,
  FormLabel,
  FormInput,
  FormButton,
  Span,
  FormTitle,
  GridTwo,
  DisplayFlex,
  FormTextArea,
  MobileContainer,
  HRLine,
  ErrorFormLabel,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import {
  bannerContainer,
  bannerItem,
  draw,
} from "../../components/Variants/Variants";
import { motion } from "framer-motion";
export default function ContactLayout({
  contact: {
    title,
    description,
    formNameLabel,
    formLabel,
    formButtonLabel,
    formTitle,
  },
  first,
  last,
  email,
  projectDescription,
  handleSend,
  setFirst,
  setLast,
  setEmail,
  setProjectDescription,
  formRef,
  firstNameError,
  lastNameError,
  emailError,
  descriptionError,
}) {
  const { form } = useSelector((state) => ({ ...state }));

  const { submit } = form;

  return (
    <ThemeProvider theme={theme}>
      <ContactContent>
        <div className='contact-header'>
          <MobileContainer mobile={"true"} contact>
            <H2>{title}</H2>
            <HRLine theme={{ width: "182px" }} />
          </MobileContainer>

          {description &&
            description.map((item, index) => (
              <ParagraphSM
                theme={{
                  primaryColor: "var(--primary-color)",
                  fontWeightRegular: "200",
                  fontSizeMD: "var(--font-size-sm)",
                  width0: "28.5rem",
                  lineHeight: "2.5rem",
                }}
                key={index}
                contact
              >
                {item}
              </ParagraphSM>
            ))}
        </div>
        <Card theme={{ width: "25rem", height: "33rem" }}>
          {submit === true ? (
            <>
              <motion.div
                variants={bannerContainer}
                initial='hidden'
                animate='show'
                className='banner'
              >
                <motion.h2>Message received! Contact you soon!</motion.h2>
              </motion.div>
            </>
          ) : null}
          <JustifyContent
            theme={{ justifyContent: "center", flexDirectionRow: "column" }}
            form={"true"}
          >
            <form ref={formRef}>
              <FormTitle theme={{ fontSizeMD: "var(--font-size-sm)" }}>
                {formTitle}
              </FormTitle>
              <GridTwo>
                {formNameLabel &&
                  formNameLabel.map((item) => {
                    const { id, label } = item;
                    return (
                      <DisplayFlex theme={{ flexDirection: "column" }} key={id}>
                        <FormLabel
                          htmlFor={label}
                          theme={{ fontWeight: "200", fontSizeSM: "16px" }}
                        >
                          {label}
                          <Span>*</Span>
                        </FormLabel>
                        {(label === "First Name" && firstNameError) ||
                        (label === "Last Name" && lastNameError) ? (
                          <FormInput
                            id={label}
                            name={label}
                            type='text'
                            theme={{
                              height: "2.3rem",
                              fontSizeMD: "16px",
                            }}
                            value={label === "First Name" ? first : last}
                            onChange={(e) => {
                              label === "First Name"
                                ? setFirst(e.target.value)
                                : setLast(e.target.value);
                            }}
                            error
                            required
                          />
                        ) : (
                          <FormInput
                            id={label}
                            name={label}
                            type='text'
                            theme={{
                              height: "2.3rem",
                              fontSizeMD: "16px",
                            }}
                            value={label === "First Name" ? first : last}
                            onChange={(e) => {
                              label === "First Name"
                                ? setFirst(e.target.value)
                                : setLast(e.target.value);
                            }}
                            required
                          />
                        )}
                        {(label === "First Name" && firstNameError) ||
                        (label === "Last Name" && lastNameError) ? (
                          <ErrorFormLabel
                            theme={{
                              fontWeight: "200",
                              fontSizeSM: "16px",
                            }}
                          >
                            {label === "First Name"
                              ? firstNameError
                              : lastNameError}
                          </ErrorFormLabel>
                        ) : null}
                      </DisplayFlex>
                    );
                  })}
              </GridTwo>
              {formLabel &&
                formLabel.map((item) => {
                  const { id, label } = item;

                  return (
                    <>
                      {id === 1 ? (
                        <div key={id}>
                          <FormLabel
                            htmlFor={label}
                            theme={{ fontWeight: "200", fontSizeSM: "16px" }}
                          >
                            {label}
                            <Span>*</Span>
                          </FormLabel>
                          {emailError ? (
                            <FormInput
                              id={label}
                              name={label}
                              type='email'
                              theme={{
                                width: "23rem",
                                height: "2.3rem",
                                fontSizeMD: "16px",
                              }}
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              mobile
                              required
                              error
                            />
                          ) : (
                            <FormInput
                              id={label}
                              name={label}
                              type='email'
                              theme={{
                                width: "23rem",
                                height: "2.3rem",
                                fontSizeMD: "16px",
                              }}
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              mobile
                              required
                            />
                          )}

                          <ErrorFormLabel
                            theme={{
                              fontWeight: "200",
                              fontSizeSM: "16px",
                            }}
                          >
                            {emailError}
                          </ErrorFormLabel>
                        </div>
                      ) : id === 2 ? (
                        <div key={id}>
                          <FormLabel
                            htmlFor={label}
                            theme={{ fontWeight: "200", fontSizeSM: "16px" }}
                          >
                            {label}
                            <Span>*</Span>
                          </FormLabel>

                          {descriptionError ? (
                            <FormTextArea
                              id={label}
                              name={label}
                              theme={{
                                width: "23rem",
                                height: "7rem",
                                fontSizeMD: "16px",
                              }}
                              value={projectDescription}
                              onChange={(e) => {
                                setProjectDescription(e.target.value);
                              }}
                              mobile
                              required
                              error
                            />
                          ) : (
                            <FormTextArea
                              id={label}
                              name={label}
                              theme={{
                                width: "23rem",
                                height: "7rem",
                                fontSizeMD: "16px",
                              }}
                              value={projectDescription}
                              onChange={(e) => {
                                setProjectDescription(e.target.value);
                              }}
                              mobile
                              required
                            />
                          )}

                          <ErrorFormLabel
                            theme={{
                              fontWeight: "200",
                              fontSizeSM: "16px",
                            }}
                          >
                            {descriptionError}
                          </ErrorFormLabel>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              <FormButton
                disabled={
                  !first ||
                  firstNameError ||
                  !last ||
                  lastNameError ||
                  !email ||
                  !projectDescription ||
                  emailError ||
                  descriptionError ||
                  submit === true
                }
                theme={{
                  width: "23rem",
                  height: "2.3rem",
                  fontSizeSM: "17px",
                  fontWeight: "bold",
                }}
                mobile
                onClick={(e) => handleSend(e)}
              >
                {submit ? "Submitted" : formButtonLabel}
              </FormButton>
            </form>
          </JustifyContent>
        </Card>
      </ContactContent>
    </ThemeProvider>
  );
}

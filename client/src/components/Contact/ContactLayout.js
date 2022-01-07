import React from "react";
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
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

export default function ContactLayout({
  contact: {
    title,
    description,
    formNameLabel,
    formLabel,
    formButtonLabel,
    formTitle,
  },
}) {
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
        <Card theme={{ width: "25rem", height: "27rem" }}>
          <JustifyContent
            theme={{ justifyContent: "center", flexDirectionRow: "column" }}
            form={"true"}
          >
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
                      <FormInput
                        name={label}
                        type='text'
                        theme={{
                          height: "2.3rem",
                          fontSizeMD: "16px",
                        }}
                      />
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
                        <FormInput
                          name={label}
                          type='email'
                          theme={{
                            width: "23rem",
                            height: "2.3rem",
                            fontSizeMD: "16px",
                          }}
                          mobile
                        />
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
                        <FormTextArea
                          name={label}
                          theme={{
                            width: "23rem",
                            height: "7rem",
                            fontSizeMD: "16px",
                          }}
                          mobile
                        />
                      </div>
                    ) : null}
                  </>
                );
              })}
            <FormButton
              theme={{
                width: "23rem",
                height: "2.3rem",
                fontSizeSM: "17px",
                fontWeight: "bold",
              }}
              mobile
            >
              {formButtonLabel}
            </FormButton>
          </JustifyContent>
        </Card>
      </ContactContent>
    </ThemeProvider>
  );
}

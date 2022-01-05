import React, { useState } from "react";
import {
  theme,
  H2,
  DisplayFlexCenter,
  DisplayFlexRow,
  ParagraphSM,
  Image,
  PositionRelative,
  Circles,
  FaSpan,
  PositionRelativeMQ,
} from "../../styled-components/globalStyled";
import { AboutContent } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import { container, item } from "../Variants/Variants";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs } from "../../data/about";
export default function AboutLayout({
  about: { id, description, image, skills, education, label },
}) {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <ThemeProvider theme={theme}>
      <AboutContent theme={{ marginTop: "1rem" }}>
        {id === 1 ? (
          <DisplayFlexRow mobile={"true"}>
            <div>
              <ParagraphSM
                theme={{
                  primaryColor: "var(--primary-color)",
                  fontWeightRegular: "200",
                  fontSizeMD: "var(--font-size-sm)",
                  //   marginRight: "16rem",
                  width0: "35.5rem",
                  lineHeight: "2.5rem",
                }}
                pmobile
                amobile
              >
                {description}
              </ParagraphSM>
            </div>
            <div className='mobile'>
              <Circles key={id} variants={item} about={"true"} mobile={"true"}>
                <DisplayFlexCenter>
                  <PositionRelative theme={{ top: "1.2rem" }}>
                    <Image
                      src={require(`../../images/projectImage/${image}`)}
                      alt='Denny Feng'
                      width='21.5rem'
                      bottom='7.5rem'
                      left='0.9rem'
                      mobile
                    />
                  </PositionRelative>
                </DisplayFlexCenter>
              </Circles>
            </div>
          </DisplayFlexRow>
        ) : null}
        {id === 2 ? (
          <div className='about-card'>
            <div className='tab-container'>
              <nav>
                <ul>
                  {initialTabs &&
                    initialTabs.map(
                      (item) =>
                        item && (
                          <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                          >
                            {item.label}
                            {item === selectedTab ? (
                              <motion.div
                                className='underline'
                                layoutId='underline'
                              />
                            ) : null}
                          </li>
                        )
                    )}
                </ul>
              </nav>
            </div>
            <main>
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={selectedTab ? selectedTab.label : "empty"}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                >
                  {selectedTab.skills &&
                    selectedTab.skills.map((item) => {
                      return (
                        <>
                          <ParagraphSM
                            theme={{
                              primaryColor: "var(--white-color)",
                              fontWeightRegular: "200",
                              fontSizeMD: "var(--font-size-sm)",
                              //   marginRight: "16rem",
                              width0: "35.5rem",
                              lineHeight: "2.5rem",
                            }}
                            pmobile
                            card
                          >
                            - {item}
                          </ParagraphSM>
                        </>
                      );
                    })}{" "}
                  {selectedTab.education &&
                    selectedTab.education.map((item) => {
                      const { title, description, status } = item;
                      return (
                        <>
                          <ParagraphSM
                            theme={{
                              primaryColor: "var(--white-color)",
                              fontWeightRegular: "bold",
                              fontSizeMD: "var(--font-size-sm)",
                              //   marginRight: "16rem",
                              width0: "35.5rem",
                            }}
                            pmobile
                            card
                          >
                            {title}
                          </ParagraphSM>
                          <ParagraphSM
                            theme={{
                              primaryColor: "var(--white-color)",
                              fontWeightRegular: "normal",
                              fontSizeMD: "var(--font-size-mobile)",
                              width0: "35.5rem",
                            }}
                            pmobile
                            card
                          >
                            - {description}
                          </ParagraphSM>

                          <ParagraphSM
                            theme={{
                              primaryColor: "var(--white-color)",
                              fontWeightRegular: "normal",
                              fontSizeMD: "var(--font-size-sm)",
                              width0: "35.5rem",
                            }}
                            pmobile
                            card
                          >
                            - <span>{status}</span>
                          </ParagraphSM>
                        </>
                      );
                    })}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        ) : undefined}
      </AboutContent>
    </ThemeProvider>
  );
}

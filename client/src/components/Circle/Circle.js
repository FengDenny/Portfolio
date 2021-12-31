import React from "react";
import {
  theme,
  H2,
  DisplayFlexCenter,
  DisplayFlexRow,
  DisplayFlex,
  Article,
  CardImage,
  PositionRelative,
  Circles,
  FaSpan,
  PositionRelativeMQ,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { FaRegCheckSquare } from "react-icons/fa";

export default function Circle({ technical: { front, description, back } }) {
  return (
    <ThemeProvider theme={theme}>
      <Article>
        {front &&
          front.map((front) => {
            const { id, title, image } = front;
            return (
              <Circles key={id}>
                <DisplayFlexCenter>
                  <CardImage
                    src={require(`../../images/logos/${image}`)}
                    alt={title}
                  />
                </DisplayFlexCenter>
              </Circles>
            );
          })}
        {description &&
          description.map((des) => {
            const { description_one, description_two, description_three } = des;
            return (
              <PositionRelative theme={{ top: "8rem", right: "2rem" }}>
                <PositionRelativeMQ>
                  <DisplayFlex>
                    <DisplayFlexRow>
                      <FaSpan>
                        <FaRegCheckSquare />
                      </FaSpan>
                      <PositionRelative theme={{ left: "0.2rem" }} description>
                        <H2
                          theme={{
                            fontSizeMD: "var(--font-size-22)",
                            primaryColor: "var(--primary-color)",
                          }}
                          mobile
                        >
                          {description_one}
                        </H2>
                      </PositionRelative>
                    </DisplayFlexRow>

                    <DisplayFlexRow>
                      <FaSpan>
                        <FaRegCheckSquare />
                      </FaSpan>
                      <PositionRelative theme={{ left: "0.2rem" }} description>
                        <H2
                          theme={{
                            fontSizeMD: "var(--font-size-22)",
                            primaryColor: "var(--primary-color)",
                          }}
                          mobile
                        >
                          {description_two}
                        </H2>
                      </PositionRelative>
                    </DisplayFlexRow>
                    <DisplayFlexRow>
                      <FaSpan>
                        <FaRegCheckSquare />
                      </FaSpan>
                      <PositionRelative theme={{ left: "0.2rem" }} description>
                        <H2
                          theme={{
                            fontSizeMD: "var(--font-size-22)",
                            primaryColor: "var(--primary-color)",
                          }}
                          mobile
                        >
                          {description_three}
                        </H2>
                      </PositionRelative>
                    </DisplayFlexRow>
                  </DisplayFlex>
                </PositionRelativeMQ>
              </PositionRelative>
            );
          })}

        {back &&
          back.map((back) => {
            const { id, title, image } = back;
            return (
              <Circles key={id}>
                <DisplayFlexCenter>
                  {id === 2 || id === 3 ? (
                    <PositionRelative theme={{ top: "1.2rem" }}>
                      <CardImage
                        src={require(`../../images/logos/${image}`)}
                        alt={title}
                        width='107px'
                        mobile
                      />
                    </PositionRelative>
                  ) : (
                    <CardImage
                      src={require(`../../images/logos/${image}`)}
                      alt={title}
                    />
                  )}
                </DisplayFlexCenter>
              </Circles>
            );
          })}
      </Article>
    </ThemeProvider>
  );
}

import React from "react";
import {
  theme,
  StyledCard,
  H2,
  MarginTop,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

export default function Card({
  project: { id, title, description, demo, github, figma, image },
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard
        direction={id % 2 !== 0 ? "row" : undefined}
        background={id % 2 !== 0 && "var(--primary-color)"}
        border={id % 2 !== 0 && "var(--border-radius)"}
        shadow={id % 2 !== 0 && "var(--drop-shadow)"}
        width={id % 2 === 0 ? "750px" : undefined}
        align={id % 2 === 0 && "center"}
        color={
          id === 2
            ? "var( --data-suvery-color)"
            : id === 4
            ? "var(--secondary-color)"
            : undefined
        }
        // eslint-disable-next-line react/jsx-no-duplicate-props
        border={
          id === 2
            ? "var( --data-suvery-color)"
            : id === 4
            ? "var(--secondary-color)"
            : undefined
        }
        hoverBG={
          id === 2
            ? "var( --data-suvery-color)"
            : id === 4
            ? "var(--secondary-color)"
            : undefined
        }
        hoverColor={id % 2 === 0 ? "#fff" : undefined}
        margin={id % 2 === 0 && "auto"}
        pColor={id % 2 === 0 && "var(--primary-color)"}
        lineHeight={id % 2 === 0 && "50px"}
      >
        <div>
          <H2 theme={{ fontSizeMD: "30px" }}>{title}</H2>
          <p>{description}</p>
          <MarginTop>
            <a href={demo}>Demo</a>
          </MarginTop>
        </div>
        <div>
          <img
            src={require(`../../images/projectImage/${image}`)}
            alt={title}
          />
        </div>
      </StyledCard>
    </ThemeProvider>
  );
}

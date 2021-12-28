import React from "react";
import {
  theme,
  StyledCard,
  H2,
  MarginTop,
  HeroCardContainer,
  CardButton,
  DisplayFlexCenter,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import {
  cardVariants,
  rotateVariants,
} from "../../components/Variants/Variants";

export default function Card({
  project: { id, title, description, demo, github, figma, image },
}) {
  return (
    <ThemeProvider theme={theme}>
      <HeroCardContainer
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
      >
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
          variants={id % 2 !== 0 && rotateVariants}
          mobileWidth={id % 2 === 0 ? "500px" : undefined}
          imgShadow={id === 4 ? "var(--drop-shadow)" : undefined}
        >
          <div>
            <H2 theme={{ fontSizeMD: "30px" }}>{title}</H2>
            {id % 2 === 0 ? (
              <p className='even'>{description}</p>
            ) : (
              <p className='odd'>{description}</p>
            )}
            <MarginTop>
              <CardButton
                onClick={() =>
                  window.open(demo, "_blank", "noopener", "noreferrer")
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                color={
                  id === 2
                    ? "var( --data-suvery-color)"
                    : id === 4
                    ? "var(--secondary-color)"
                    : undefined
                }
                background={id % 2 !== 0 && "var(--primary-color)"}
                hoverBG={
                  id === 2
                    ? "var( --data-suvery-color)"
                    : id === 4
                    ? "var(--secondary-color)"
                    : undefined
                }
                border={
                  id === 2
                    ? "var( --data-suvery-color)"
                    : id === 4
                    ? "var(--secondary-color)"
                    : undefined
                }
                hoverColor={id % 2 === 0 ? "#fff" : undefined}
              >
                Demo
              </CardButton>
            </MarginTop>
          </div>
          <DisplayFlexCenter>
            <img
              src={require(`../../images/projectImage/${image}`)}
              alt={title}
            />
          </DisplayFlexCenter>
        </StyledCard>
      </HeroCardContainer>
    </ThemeProvider>
  );
}

import React from "react";
import {
  theme,
  StyledCard,
  H2,
  MarginTop,
  HeroCardContainer,
  CardButton,
  DisplayFlexCenter,
  DisplayFlexRow,
  PositionAbsolute,
  ProjectLink,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { cardVariants, rotateVariants } from "../Variants/Variants";
import { FaGithub, FaFigma } from "react-icons/fa";

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
          background={id % 2 !== 0 ? "var(--primary-color)" : undefined}
          border={id % 2 !== 0 ? "var(--border-radius)" : undefined}
          shadow={id % 2 !== 0 ? "var(--drop-shadow)" : undefined}
          width={id % 2 === 0 ? "750px" : undefined}
          align={id % 2 === 0 ? "center" : undefined}
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
          hoverbg={
            id === 2
              ? "var( --data-suvery-color)"
              : id === 4
              ? "var(--secondary-color)"
              : undefined
          }
          hover={id % 2 === 0 ? "#fff" : undefined}
          margin={id % 2 === 0 ? "auto" : undefined}
          pcolor={id % 2 === 0 ? "var(--primary-color)" : undefined}
          lineheight={id % 2 === 0 ? "50px" : undefined}
          variants={id % 2 !== 0 ? rotateVariants : undefined}
          mobilewidth={id % 2 === 0 ? "500px" : undefined}
          imgshadow={id === 4 ? "var(--drop-shadow)" : undefined}
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
                background={id % 2 !== 0 ? "var(--primary-color)" : undefined}
                hoverbg={
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
                hovercolor={id % 2 === 0 ? "#fff" : undefined}
              >
                Demo
              </CardButton>
            </MarginTop>
            <DisplayFlexRow>
              <PositionAbsolute
                theme={
                  id === 2 || id === 4
                    ? {
                        bottom: " 0.5rem",
                        left: " 28rem",
                      }
                    : {
                        bottom: " 0.5rem",
                        left: " 23rem",
                      }
                }
              >
                <ProjectLink
                  href={`${github}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  color={
                    id === 2
                      ? "var( --data-suvery-color)"
                      : id === 4
                      ? "var(--secondary-color)"
                      : undefined
                  }
                  hovercolor={
                    id === 2
                      ? "var( --data-suvery-color-hover)"
                      : id === 4
                      ? "var(--secondary-color-hover)"
                      : undefined
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </ProjectLink>
                <ProjectLink
                  onClick={() =>
                    window.open(figma, "_blank", "noopener", "noreferrer")
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
                  hovercolor={
                    id === 2
                      ? "var( --data-suvery-color-hover)"
                      : id === 4
                      ? "var(--secondary-color-hover)"
                      : undefined
                  }
                >
                  <FaFigma />
                </ProjectLink>
              </PositionAbsolute>
            </DisplayFlexRow>
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

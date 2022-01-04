import React from "react";
import {
  ProjectContent,
  TechnicalContent,
} from "../../styled-components/styled";
import {
  HRLine,
  H2,
  theme,
  CardContainer,
  DiamondStyleTwo,
  DiamondStyle,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import Card from "../../components/RecentProjects/CardLayout";
import { project } from "../../data/project";
import {
  cardVariants,
  rotateVariants,
} from "../../components/Variants/Variants";
import { motion } from "framer-motion";

export default function RecentProjects() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectContent id='portfolio'>
        <CardContainer>
          <H2>Recent Projects</H2>
          <HRLine theme={{ width: "220px" }} />
        </CardContainer>

        {project.map((project, id) => (
          <>
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.8 }}
            >
              {id === 1 ? <DiamondStyle variants={cardVariants} /> : null}{" "}
              {id === 1 ? (
                <DiamondStyleTwo variants={cardVariants} position='relative' />
              ) : null}
            </motion.div>

            <Card key={id} project={project} variants={rotateVariants} />
          </>
        ))}
      </ProjectContent>
    </ThemeProvider>
  );
}

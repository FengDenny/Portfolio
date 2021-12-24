import React from "react";
import { ProjectContent } from "../../styled-components/styled";
import { HRLine, H2, theme } from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import Card from "../../components/Card/Card";
import { project } from "../../data/project";

export default function RecentProjects() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectContent>
        <H2>Recent Projects</H2>
        <HRLine theme={{ width: "220px" }} />
        {project.map((project, id) => (
          <>
            <Card key={id} project={project} />
          </>
        ))}
      </ProjectContent>
    </ThemeProvider>
  );
}

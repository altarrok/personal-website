import React from "react"
import Lines from 'react-svg-textures/es/Lines';
import COLORPALETTE from "../COLORPALETTE.json";
import PROJECTS from "../contents/PROJECTS.json";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import Container from "../components/container"
import Card from "../components/card"
import ProjectsSubContent from "../components/projectsSubContent";

const textureId = "Projects";
const Texture =
  <Lines
    id={textureId}
    strokeWidth={5}
    size={25}
    stroke={COLORPALETTE.darkPurple}
    background={COLORPALETTE.purple}
    orientation={"6/8"}
  />;

const iconFactory = (css) => {
  return (<AiOutlineFundProjectionScreen css={css} />);
}

const SubContent = 
  <ProjectsSubContent   
    entries={PROJECTS.projects}
  />;

const Projects = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        <Card 
          title={PROJECTS.title} 
          subtitle={PROJECTS.subtitle}
          subContent={SubContent}
          iconFactory={iconFactory}
        />
    </Container>
  )
}

export default Projects
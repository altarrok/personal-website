import React from "react"
import Lines from 'react-svg-textures/es/Lines';
import COLORPALETTE from "../COLORPALETTE.json";

import Container from "../components/container"

const textureId = "Projects";
const Texture =
  <Lines
    id={textureId}
    strokeWidth={5}
    size={25}
    stroke={COLORPALETTE.darkPurple}
    background={COLORPALETTE.purple}
    orientation={"6/8"}
  />

const Projects = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        Projects 
    </Container>
  )
}

export default Projects
import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";

import Container from "../components/container"

const textureId = "MyJourney";
const Texture =
  <Paths
    id={textureId}
    strokeWidth={3}
    size={15}
    stroke={COLORPALETTE.darkCyan}
    background={COLORPALETTE.cyan}
    d={'hexagons'}
  />

const MyJourney = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        MyJourney 
    </Container>
  )
}

export default MyJourney
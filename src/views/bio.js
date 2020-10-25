import React from "react"
import Circles from 'react-svg-textures/es/Circles';
import COLORPALETTE from "../COLORPALETTE.json";

import Container from "../components/container"

const textureId = "Entrance";
const Texture =
  <Circles
    id={textureId}
    strokeWidth={5}
    size={25}
    stroke={COLORPALETTE.darkOrange}
    background={COLORPALETTE.orange}
  />

const Bio = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        Bio 
    </Container>
  )
}

export default Bio
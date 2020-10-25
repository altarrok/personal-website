import React from "react"
import Circles from 'react-svg-textures/es/Circles';

import Container from "../components/container"

const textureId = "Entrance";
const Texture =
  <Circles
    id={textureId}
    strokeWidth={2}
    stroke='black'
    background='white'
  />

const Bio = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        Bio 
    </Container>
  )
}

export default Bio
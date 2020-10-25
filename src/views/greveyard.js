import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";

import Container from "../components/container"

const textureId = "Greveyard";
const Texture =
  <Paths
    id={textureId}
    strokeWidth={3}
    size={35}
    stroke={COLORPALETTE.darkBlack}
    background={COLORPALETTE.black}
    d={"crosses"}
  />

const Greveyard = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        Greveyard 
    </Container>
  )
}

export default Greveyard
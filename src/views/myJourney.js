import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";
import MYJOURNEY from "../contents/MYJOURNEY.json";

import Container from "../components/container"
import Card from "../components/card"

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
        <Card 
          title={MYJOURNEY.title} 
          subtitle={MYJOURNEY.subtitle}
          paragrapghes={MYJOURNEY.paragraphes}
        />
    </Container>
  )
}

export default MyJourney
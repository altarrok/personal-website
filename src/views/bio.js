import React from "react"
import Circles from 'react-svg-textures/es/Circles';
import COLORPALETTE from "../COLORPALETTE.json";
import BIO from "../contents/BIO.json";

import Container from "../components/container"
import Card from "../components/card"

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
        <Card 
          title={BIO.title} 
          subtitle={BIO.subtitle}
          paragrapghes={BIO.paragraphes}
        />
    </Container>
  )
}

export default Bio
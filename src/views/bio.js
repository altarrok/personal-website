import React from "react"
import Circles from 'react-svg-textures/es/Circles';
import COLORPALETTE from "../COLORPALETTE.json";
import BIO from "../contents/BIO.json";

import Container from "../components/container"
import Card from "../components/card"
import Paragraph from "../components/Paragraph";

const textureId = "Entrance";
const Texture =
  <Circles
    id={textureId}
    strokeWidth={5}
    size={25}
    stroke={COLORPALETTE.darkOrange}
    background={COLORPALETTE.orange}
  />
const content = <Paragraph paragraphes={BIO.paragraphes} />

const Bio = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        <Card 
          title={BIO.title} 
          subtitle={BIO.subtitle}
          subContent={content}
        />
    </Container>
  )
}

export default Bio
import React from "react"
import Circles from 'react-svg-textures/es/Circles';
import COLORPALETTE from "../COLORPALETTE.json";
import BIO from "../contents/BIO.json";
import { HiOutlineBookOpen } from "react-icons/hi";

import Container from "../components/container"
import Card from "../components/card"
import Paragraph from "../components/paragraph";

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

const iconFactory = (css) => {
  return (<HiOutlineBookOpen css={css} />);
}

const Bio = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        <Card 
          title={BIO.title} 
          subtitle={BIO.subtitle}
          subContent={content}
          iconFactory={iconFactory}
        />
    </Container>
  )
}

export default Bio
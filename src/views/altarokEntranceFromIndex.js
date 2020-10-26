import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";
import ALTAROKENTRANCE from "../contents/ALTAROKENTRANCE.json";
import { SiMicroDotBlog } from "react-icons/si";

import Container from "../components/container"
import Card from "../components/card"

const textureId = "AltarokEntrance";
const Texture =
  <Paths
    id={textureId}
    strokeWidth={10}
    size={75}
    stroke={COLORPALETTE.darkOrange}
    background={COLORPALETTE.orange}
    d={"waves"}
  />;

const iconFactory = (css) => {
  return (<SiMicroDotBlog css={css} />);
}

const AltarokEntrance = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        <Card 
          title={ALTAROKENTRANCE.title} 
          subtitle={ALTAROKENTRANCE.subtitle}
          subContent={undefined}
          iconFactory={iconFactory}
        />
    </Container>
  )
}

export default AltarokEntrance

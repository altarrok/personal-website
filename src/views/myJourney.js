import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";
import MYJOURNEY from "../contents/MYJOURNEY.json";

import Container from "../components/container"
import Card from "../components/card"
import MyJourneySubContent from "../components/myJourneySubContent";

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
const content = <MyJourneySubContent 
  entries={MYJOURNEY.content}
/>

const MyJourney = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
        <Card 
          title={MYJOURNEY.title} 
          subtitle={MYJOURNEY.subtitle}
          subContent={content}
        />
    </Container>
  )
}

export default MyJourney
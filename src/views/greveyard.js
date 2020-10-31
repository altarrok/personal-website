import React from "react"
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";
import GREVEYARD from "../contents/GREVEYARD.json";
import { GiTombstone } from "react-icons/gi";

import Container from "../components/container"
import Card from "../components/card"
import GreveyardSubContent from "../components/greveryardSubContent";

const textureId = "Greveyard";
const Texture =
  <Paths
    id={textureId}
    strokeWidth={3}
    size={35}
    stroke={COLORPALETTE.darkBlack}
    background={COLORPALETTE.black}
    d={"crosses"}
  />;

const iconFactory = (css) => {
  return (<GiTombstone css={css} />);
}

const SubContent = 
  <GreveyardSubContent   
    entries={GREVEYARD.projects}
  />;

const Greveyard = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
      <Card
        title={GREVEYARD.title}
        subtitle={GREVEYARD.subtitle}
        subContent={SubContent}
        iconFactory={iconFactory}
      />
    </Container>
  )
}

export default Greveyard
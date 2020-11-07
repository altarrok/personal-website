import styled from "@emotion/styled"
import React from "react"
import Circles from 'react-svg-textures/es/Circles';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import COLORPALETTE from "../COLORPALETTE.json";

import Container from "../components/container"

const Title = styled.div`
  display:table-cell;
  vertical-align:middle;
  position: relative;
  text-align: center;
`
const WelcomeMessage = styled.div`
  font-size: 2em;
  font-style: italic;
`

const Name = styled.div`
  font-size: 5em;
  font-weight: bold;
  vertical-align: middle;
`

const StraightLine = styled.span`
  height: 2px;
  width: 10%;
  display: inline-block;
  vertical-align: middle;
  border-top: 2px black solid;
  margin: 0.2em;
  @media (max-width: 767px) {
      display: none;
  }
`

const SocialMediaLinks = styled.div`
  font-size: 3em;

  * {
    margin: 0 0.2em;
    cursor: pointer;
    transition: linear 0.2s;
  }

  * :hover {
    color: ${COLORPALETTE.purple};
  }
`

const handleGithubClick = () => {
  window.open('https://github.com/altarrok');
}

const handleLinkedinClick = () => {
  window.open('https://www.linkedin.com/in/altay-batuhan/');
}

const textureId = "Entrance";
const Texture =
  <Circles
    id={textureId}
    strokeWidth={5}
    size={25}
    stroke="white"
    background="white"
  />

const Entrance = () => {

  return (
    <Container Texture={Texture} textureId={textureId}>
      <Title>
        <WelcomeMessage>Hey, I'm</WelcomeMessage>
        <Name><StraightLine />Altay<StraightLine /></Name>
        <SocialMediaLinks>
          <FaGithubSquare onClick={handleGithubClick} />
          <FaLinkedin onClick={handleLinkedinClick} />
        </SocialMediaLinks>
      </Title>
    </Container>
  )
}

export default Entrance
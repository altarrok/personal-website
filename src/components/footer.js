import styled from "@emotion/styled"
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json"

const Footer = () => {

  const FooterDiv = styled.div`
    min-height: 5vh;
    position: relative;
    background-color: ${COLORPALETTE.darkBlack}
  `

  const StyledSpan = styled.span`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${COLORPALETTE.darkWhite}
  `

  return (
    <FooterDiv>
      <StyledSpan>Made by Altay Batuhan. Using Gatsby and hosted with Netlify.</StyledSpan>
    </FooterDiv>
  )
}

export default Footer

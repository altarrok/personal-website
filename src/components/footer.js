import styled from "@emotion/styled"
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json"

const Footer = () => {

  const FooterDiv = styled.div`
    min-height: 3.2em;
    position: relative;
    background-color: ${COLORPALETTE.darkBlack}
  `

  const StyledSpan = styled.span`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${COLORPALETTE.darkWhite};
    text-align: center;
    font-size: 0.8em;
    width:100%;
  `

  return (
    <FooterDiv>
      <StyledSpan>Made by Altay Batuhan.<br />Using Gatsby and hosted with Netlify.</StyledSpan>
    </FooterDiv>
  )
}

export default Footer

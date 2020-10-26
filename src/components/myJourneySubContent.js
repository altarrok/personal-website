import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json";

import Paragraph from "../components/paragraph";

const Container = styled.div`
    margin-top: 3%;
`

const Item = styled.div`
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 3%;
}
@media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
`

const ImageContainer = styled.div`
@media (min-width: 768px) {
    margin-right: 2%;   
    width: 50%;
    text-align: right;
}
@media (max-width: 767px) {
    width:100%;
    text-align: center;
}
`

const imageStyle = css`
    width: 60%;
    height: auto;
@media (max-width: 767px) {
    margin-top: 5%;
}
`

const VerticalLine = styled.div`
@media (min-width: 768px) {
    border-left: 1px solid black;
}
`

const InfoContainer = styled.div`
@media (min-width: 768px) {
    margin-left: 2%;
    width:50%;
}
@media (max-width: 767px) {
    width:100%;
    text-align: center;
}
`

const InfoTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: ${COLORPALETTE.purple};
`

const InfoRole = styled.div`
    font-size: 1.5em;
    font-style: italic;
    color: ${COLORPALETTE.darkPurple}
`

const InfoLocation = styled.div`
    color: ${COLORPALETTE.bordeaux};
    font-weight: bold;
    font-size: 1.3em;
`

const InfoTime = styled.div`
    color: ${COLORPALETTE.bordeaux};
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 3%;
`

const MyJourneySubContent = ({ entries }) => {
    return (
        <Container>
            {entries.map((entry, index) => {
                return (
                    <Item key={index}>
                        <ImageContainer>
                            <InfoLocation>{entry.location}</InfoLocation>
                            <InfoTime>{entry.time}</InfoTime>
                            <img src={entry.img} css={imageStyle} alt="" />
                        </ImageContainer>
                        <VerticalLine />
                        <InfoContainer>
                            <InfoTitle>{entry.title}</InfoTitle>
                            <InfoRole>{entry.role}</InfoRole>
                            <Paragraph paragraphes={entry.paragraphes} />
                        </InfoContainer>
                    </Item>
                );
            })}
        </Container>
    );
}

export default MyJourneySubContent
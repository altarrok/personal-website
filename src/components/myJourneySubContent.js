import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Paragraph from "../components/paragraph";
import { StaticQuery, graphql } from "gatsby";

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

const findImageUrlByImageName = (imageName, data) => {
    switch (imageName) {
        case "SAP_LOGO":
            return data.SAP.publicURL;
        case "UBC_LOGO":
            return data.UBC.publicURL;
        case "SJ_LOGO":
            return data.SJ.publicURL;
    }
}

export default function MyJourneySubContent(props) {
    return (
        <StaticQuery
            query={graphql`
                query ImageQuery {
                    SAP: file(base: { eq: "SAP-logo.png" }) {
                        publicURL
                    }, 
                    UBC: file(base: { eq: "UBC-logo.png" }) {
                        publicURL
                    },
                    SJ: file(base: { eq: "SJ-logo.jpg" }) {
                        publicURL
                    }
                }
        `}
            render={data => (
                <ActualContent data={data} {...props} />
            )}
        />
    )
}

const ActualContent = ({ data, entries }) => {
    return (
        <Container>
            {entries.map((entry, index) => {
                return (
                    <Item key={index}>
                        <ImageContainer>
                            <InfoLocation>{entry.location}</InfoLocation>
                            <InfoTime>{entry.time}</InfoTime>
                            <LazyLoadImage src={findImageUrlByImageName(entry.img, data)} css={imageStyle} alt="MyJourney Image" effect="blur" />
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
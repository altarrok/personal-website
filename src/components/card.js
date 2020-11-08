import styled from "@emotion/styled";
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json"
import { css } from "@emotion/core";

const CardContainer = styled.div`
    display:table-cell;
    vertical-align:middle;
    position: relative;
`

const StyledCard = styled.div`
    width:80%;
    margin: 5% auto;
    background-color: ${COLORPALETTE.white};
    position: relative;
    box-shadow: 0.7em 0.7em rgba(21, 27, 31, 0.5);
    @media (max-width: 767px) {
        margin-top: 10%;
        box-shadow: 0.3em 0.3em rgba(21, 27, 31, 0.5);
        width:95%;
        margin-bottom: 10%;
    }
`

const LeftBar = styled.div`
    width:5%;
    background-color: ${COLORPALETTE.darkWhite};
    height: 100%;
    position: absolute;
    z-index:1;
`

const Content = styled.div`
    padding: 2% 10%;
`

const Title = styled.div`
    font-size: 2.5em;
    font-weight: bold;
`
const Subtitle = styled.div`
    font-size: 1.5em;
    font-style: italic;
`

const IconWrapper = styled.div`
@media (min-width: 768px) {
    border-radius: 50%;
    width: 10%;
    height: auto;
    padding-top: 10%;
    background-color: ${COLORPALETTE.bordeaux};
    position: absolute;
    z-index: 10;
    left: -2.5%;
    top: 1em;
    border: 0.3em solid ${COLORPALETTE.darkBordeaux};
}
`

const iconStyle = css`
@media (min-width: 768px) {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    font-size: 300%;
    transform: translate(-50%, -50%);
}
@media (max-width: 767px) {
    display: none;
}
`

const Card = ({ title, subtitle, subContent, iconFactory }) => {
    return (
        <CardContainer>
            <StyledCard>
                { !iconFactory || <IconWrapper>{iconFactory(iconStyle)}</IconWrapper> }
                <LeftBar />
                <Content>
                    <Title>{title}</Title>
                    { !subtitle || <Subtitle>{subtitle}</Subtitle> }
                    <br />
                    { subContent }
                </Content>
            </StyledCard>
        </CardContainer>
    );
}

export default Card
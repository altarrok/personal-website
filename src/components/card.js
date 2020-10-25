import styled from "@emotion/styled";
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json"

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
    box-shadow: 0.4em 0.4em rgba(21, 27, 31, 0.6);
`

const LeftBar = styled.div`
    width:5%;
    background-color: ${COLORPALETTE.darkWhite};
    height: 100%;
    position: absolute;
`

const Content = styled.div`
    padding: 1% 10%;
`

const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
`
const Subtitle = styled.div`
    font-size: 1.3em;
    font-style: italic;
`
const Paragrapgh = styled.div`
`

const Card = ({ title, subtitle, paragrapghes }) => {
    return (
        <CardContainer>
            <StyledCard>
                <LeftBar />
                <Content>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <br />
                    <Paragrapgh>
                        {
                            paragrapghes.map((para) => {
                                return <p>{para}</p>
                            })    
                        }
                    </Paragrapgh>
                </Content>
            </StyledCard>
        </CardContainer>
    );
}

export default Card
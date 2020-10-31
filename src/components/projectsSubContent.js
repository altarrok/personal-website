import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react"
import COLORPALETTE from "../COLORPALETTE.json";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";


import Paragraph from "../components/paragraph";

const Container = styled.div`
    margin-top: 1%;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 3%;
        flex-wrap: wrap;
    }
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 5%;
    }
`

const ProjectItem = styled.div`
box-shadow: 0.3em 0.3em rgba(21, 27, 31, 0.5);
background-color: ${COLORPALETTE.darkOrange};
color: ${COLORPALETTE.darkWhite};

@media (min-width: 768px) {
    width: 40%;
    padding: 2.5%;
    margin: 1em 2.5%;
}
@media (max-width: 767px) {
    margin: 1em 1%;
    padding: 4%;
`

const ProjectTitle = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    color: ${COLORPALETTE.lightOrange}
`

const TeamTitle = styled.div`
    font-size: 1.1em;
    color: ${COLORPALETTE.lightCyan};
    font-weight: 600;
`

const LinkContainer = styled.div`
    transform: translate(0, 0.5em);
`

const GithubLink = styled.a`
    text-decoration: none;
    color: ${COLORPALETTE.white};
    font-size: 1.7em;
    margin-right: 0.5em;
`

const ExternalLink = styled.a`
    text-decoration: none;
    color: ${COLORPALETTE.white};
    font-size: 1.7em;
`

const ProjectsSubContent = ({ entries }) => {
    return (
        <Container>
            {entries.map((entry, index) => {
                return (
                    <ProjectItem key={index}>
                        <ProjectTitle>{entry.title}</ProjectTitle>
                        <TeamTitle>{entry.teamTitle}</TeamTitle>
                        <LinkContainer>
                            <GithubLink href={entry.githubLink} target="_blank" rel="noopener noreferrer"><SiGithub /></GithubLink>
                            <ExternalLink href={entry.externalLink} target="_blank" rel="noopener noreferrer"><FiExternalLink></FiExternalLink></ExternalLink>
                        </LinkContainer>
                        <Paragraph paragraphes={entry.description}/>
                    </ProjectItem>
                );
            })}
        </Container>
    );
}

export default ProjectsSubContent
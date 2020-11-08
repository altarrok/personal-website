import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Paths from 'react-svg-textures/es/Paths';
import COLORPALETTE from "../COLORPALETTE.json";
import Layout from '../components/layout';
import Paragraph from "../components/paragraph";
import Container from "../components/container";
import Card from "../components/card";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { css } from '@emotion/core';
import ImagePlaceHolder from "../components/imagePlaceHolder";
import SEO from '../components/seo';

const textureId = "BlogPost";
const Texture =
    <Paths
        id={textureId}
        strokeWidth={3}
        size={35}
        stroke={COLORPALETTE.darkBlack}
        background={COLORPALETTE.black}
        d={"nylon"}
    />;

const imageStyle = css`
    width: 100%;
    height: auto;
`

export default ({ data }) => {
    const [isLoading, setIsLoading] = useState(true);
    const currNode = data.allPostsJson.nodes[0];
    const imgURL = data.file.publicURL;
    const subContent = (
        <div>
            { isLoading && <div><ImagePlaceHolder imgWidth={currNode.imageWidth} imgHeight={currNode.imageHeight} /></div> }
            { <LazyLoadImage
                    afterLoad={() => setIsLoading(false)}
                    src={imgURL} css={imageStyle} alt="Blog Image" effect="blur" width="100%" height="auto" 
                    style={{ visibility: isLoading ? "hidden" : "visible" }} />
            }
            <Paragraph paragraphes={currNode.paragraphes} />
        </div>
    )

    return (
        <Layout>
            <SEO title={currNode.title} />
            <Container Texture={Texture} textureId={textureId}>
                <Card
                    title={currNode.title}
                    subContent={subContent}
                />
            </Container>
        </Layout>
    );
};

export const query = graphql`
query postQuery($id: String, $imageFileName: String) {
    allPostsJson(filter: {id: {eq: $id}}) {
        nodes {
                slug
                title
                paragraphes
                imageWidth
                imageHeight
        }
    }
    file(base: {eq: $imageFileName}) {
        publicURL
    }
}
`
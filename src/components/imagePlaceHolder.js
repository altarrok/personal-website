import React from "react"
import ContentLoader from "react-content-loader";
import COLORPALETTE from "../COLORPALETTE.json";


const ImagePlaceHolder = (props) => {
    const {imgWidth, imgHeight, ...cleanProps} = props;
    return (
        <ContentLoader
            speed={2}
            width="100%"
            viewBox={"0 0 " + imgWidth + " " + imgHeight}
            backgroundColor={COLORPALETTE.mediumWhite}
            foregroundColor={COLORPALETTE.darkWhite}
            {...cleanProps}
        >
            <rect width="100%" height="100%" />
        </ContentLoader>
    )
}

export default ImagePlaceHolder

import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const containerStyle = css`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  background-color: white;
`

const bgTextureStyle = css`
    position: absolute;
    z-index: -100; 
`

const childStyle = css`
    position: relative;
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    display: table;
`

const Container = ({ children, Texture, textureId }) => {
    return (
        <div css={containerStyle}>
            <svg width="100%" height="100%" css={bgTextureStyle}>
                {Texture}
                <rect width="100%" height="100%" fill={`url(#${textureId})`}>
                </rect>
            </svg>
            <div css={childStyle}>
                {children}
            </div>
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container
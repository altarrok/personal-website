import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const containerStyle = css`
  min-height: 100vh;
  max-width: 100vw;
`

const Container = ({ children }) => {
    return (
        <div css={containerStyle}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container
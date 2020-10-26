import styled from "@emotion/styled";
import React from "react"

const Para = styled.div`
`

const Paragraph = ({ paragraphes }) => {
    return (
        <Para>
            { paragraphes.map((para, index) => <p key={index}>{para}</p>)}
        </Para>
    );
}

export default Paragraph